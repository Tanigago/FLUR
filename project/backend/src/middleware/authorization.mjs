export function authMiddleware (req, res, next) {
    try {
        const [ method, token ] = req.headers.authorization.split(" ")
        const { level } = jwt.verify(token,secret)
        res.locals.level = level // Paso el username para uso en los controllers
        next()
    } catch (err) {
        res.sendStatus(401)
    }
}
export const userSchema = {
    $id: "/user",
    type: "object",
    properties: {
        idUser: {
            description: "Identificador único",
            type: "integer",
            minimum: 0
        },
        name: {
            description: "Name",
            type: "string"
        },
        email: {
            description: "mail@mail.com",
            type: "string"
        },
        password: {
            description: "Password",
            type: "string"
        },
        photoProfile: {
            description: "Photo profile",
            type: "string"
        }

    },
    additionalProperties: false
}
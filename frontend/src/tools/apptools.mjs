// -------------------------FACTORY--------------------------------

 export function changeValueFactory(setState) {
    return function (ev) {
        setState(ev.target.value)
    }
}

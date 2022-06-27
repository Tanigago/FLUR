export const userSchema = {
    $id: "/user",
    type: "object",
    properties: {
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
        }
    },
    additionalProperties: false,
    required: [ "name", "email", "password"]
}
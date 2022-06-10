export const newUserSchema = {
    $id: "/newUser",
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
        },
        photoProfile: {
            description: "Photo profile",
            type: "string"
        }

    },
    additionalProperties: false
}
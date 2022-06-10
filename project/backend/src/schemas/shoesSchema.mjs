export const newItemSchema = {
    $id: "/newItem",
    type: "object",
    properties: {
        photo: {
            description: "Photo",
            type: "string"
        }
    },
    additionalProperties: false
}
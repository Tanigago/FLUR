export const newCollectionSchema = {
    $id: "/newCollection",
    type: "object",
    properties: {
        title: {
            description: "Title",
            type: "string"
        },
        counter: {
            description: "items",
            type: "string"
        },
        done: {
            description: "Task status",
            type: "boolean"
        } 
    },
    additionalProperties: false
}
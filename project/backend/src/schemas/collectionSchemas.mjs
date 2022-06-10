export const newCollectionSchema = {
    $id: "/newCollection",
    type: "object",
    properties: {
        title: {
            description: "Nombre de la colección",
            type: "string"
        },
        waterprooflvl: {
            description: "Bajo",
            type: "string",
            enum: ["Bajo", "Medio", "Alto"]
        },
        warmlvl: {
            description: "Task status",
            type: "boolean"
        },
        season: {
            description: "Primavera",
            type: "string"
        }

    },
    additionalProperties: false
}
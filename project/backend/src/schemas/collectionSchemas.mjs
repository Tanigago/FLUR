export const collectionSchema = {
    $id: "/collection",
    type: "object",
    properties: {
        userId: {
            description: "Identificador único",
            type: "integer",
            minimum: 0
        },
        nameCollection: {
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
            enum: ["Bajo", "Medio", "Alto"]
        },
        season: {
            description: "Primavera",
            enum: ["Primavera", "Verano", "Otoño", "Invierno"]
        }

    },
    additionalProperties: false,
    required: ["userId", "nameCollection", "waterprooflvl", "warmlvl", "season"]
}
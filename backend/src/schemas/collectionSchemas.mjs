export const collectionSchema = {
    $id: "/collection",
    type: "object",
    properties: {
        userId: {
            description: "Identificador único",
            type: "integer",
            minimum: 0
        },
        collectionShoesId: {
            description: "Identificador del calzado",
            typer: "integer",
            minimum: 0
        },
        nameCollection: {
            description: "Nombre de la colección",
            type: "string"
        },
        waterprooflvl: {
            description: "Bajo",
            type: "string",
            enum: ["bajo", "medio", "alto"]
        },
        warmlvl: {
            description: "Task status",
            type: "string",
            enum: ["bajo", "medio", "alto"]
        },
        season: {
            description: "Primavera",
            type: "string",
            enum: ["primavera", "verano", "otoño", "invierno"]
        }

    },
    additionalProperties: false,
    required: ["nameCollection", "waterprooflvl", "warmlvl", "season"]
}

export const putCollectionSchema = {
    $id: "/collection",
    type: "object",
    properties: {
        idCollection: {
            description: "Identificador único",
            type: "integer",
            minimum: 0
        },
        userId: {
            description: "Identificador único",
            type: "integer",
            minimum: 0
        },
        collectionShoesId: {
            description: "Identificador del calzado",
            typer: "integer",
            minimum: 0
        },
        nameCollection: {
            description: "Nombre de la colección",
            type: "string"
        },
        waterprooflvl: {
            description: "Bajo",
            type: "string",
            enum: ["bajo", "medio", "alto"]
        },
        warmlvl: {
            description: "Task status",
            type: "string",
            enum: ["bajo", "medio", "alto"]
        },
        season: {
            description: "Primavera",
            type: "string",
            enum: ["primavera", "verano", "otoño", "invierno"]
        }

    },
    additionalProperties: false,
    required: ["nameCollection", "waterprooflvl", "warmlvl", "season"]
}

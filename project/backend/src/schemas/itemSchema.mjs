export const itemSchema = {
    $id: "/item",
    type: "object",
    properties: {
        photoShoes: {
            description: "Foto del calzado",
            type: "string"
        },
        userId: {
            description: "Identificador único",
            type: "integer",
            minimum: 0
        },
        collectionName: {
            description: "Nombre de la colección",
            type: "string"
        }
    },
    additionalProperties: false,
    required: ["photoShoes", "collectionName", "userId"]
}

export const putItemSchema = {
    $id: "/item",
    type: "object",
    properties: {
        idShoes: {
            description: "Identificador único",
            type: "integer",
            minimum: 0
        },
        photoShoes: {
            description: "Foto del calzado",
            type: "string"
        },
        userId: {
            description: "Identificador único",
            type: "integer",
            minimum: 0
        },
        collectionName: {
            description: "Nombre de la colección",
            type: "string"
        }
    },
    additionalProperties: false,
    required: ["photoShoes", "collectionName", "userId"]
}
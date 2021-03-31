export const menu = [
    {
        name: "clothings",
        children: [
            { name: "all", path: "clothing/all"},
            { name: "corsets", path: "clothing/corsets"},
            { name: "dresses", children: [
                { name:"maxi dresses", path: "clothing/dresses/maxi-dresses"},
                { name:"midi dresses", path: "clothing/dresses/midi-dresses"},
                { name:"mini dresses", path: "clothing/dresses/mini-dresses"}
            ]},
            { name: "denim", path: "clothing/denim"},
            { name: "tops", path: "clothing/tops"},
            { name: "bottoms", children: [
                { name:"trousers", path: "clothing/bottoms/trousers"},
                { name:"skirts", path: "clothing/bottoms/skirts"},
                { name:"shorts", path: "clothing/bottoms/shorts"},
                { name:"playsuits", path: "clothing/bottoms/playsuits"},
            ]},
            { name: "loungewear", path: "clothing/loungewear"},
            { name: "outerwear", path: "clothing/outerwear"},
            { name: "sweats", path: "clothing/sweats"}
         ],
    },
    {
        name: "by collection",
        children: [
            { name: "all", path: "collection/all"},
            { name: "summer collection", path: "collection/summer-collection"},
            { name: "winter collection", path: "collection/winter-collection"},
            { name: "spring collection", path: "collection/spring-collection"},
            { name: "fall collection", path: "collection/fall-collection"}
        ]
    },
    {
        name: "accessories",
        children: [
            { name: "all", path: "accessories/all"},
            { name: "glasses", path: "accessories/glasses"},
            { name: "necklace", path: "accessories/necklace"},
        ]
    },
]
export const color = [
    "white",
    "Black",
    "Red",
    "marun",
    "Being",
    "Pink",
    "Green",
    "yellow",
    ]
    export const filters = [
    {
    id: "color",
    name: "Color",
    options: [
    {value: "white", label: "White"},
    {value: "beige", label: "Beige"},
    {value: "blue", label: "Blue"},
    {value: "brown", label: "Brown"},
    {value: "green", label: "Green"},
    {value: "purple", label: "Purple"},
    {value: "yellow", label: "Yellow"},
    ],
    },
    {
    id: "size",
    name: "Size",
    options: [
    {value: "S", label: "S"},
    {value: "M", label: "M"},
    {value: "L", label: "L"},
    ],
    },
      {
        id: "price",
        name: "Price",
        options: [
        {value: "19-199", label: "$19 To $199"},
        {value: "199-299", label: "$199 To $299"},
        {value: "299-399", label: "$299 To $399"},
        {value: "499-999", label: "$499 To $999"},
        {value: "999-1499", label: "$999 To $1499"},
        {value: "1499-9999", label: "$1499 To $9999"},
        ],
        },
        {
        id: "discount",
        name: "Discount Range",
        options: [
        {value: "10", label: "10% and above"},
        {value: "20", label: "20% and above"},
        {value: "30", label: "30% and above"},
        {value: "40", label: "40% and above"},
        {value: "50", label: "50% and above"},
        {value: "60", label: "60% and above"},
        {value: "70", label: "70% and above"},
        {value: "80", label: "80% and above"},
        ],
        },
    ];
    export const singleFilter = [
    {
    id: "stock",
    name: "Availability",
    options: [
    {value: "in_stock", label: "In stock"},
    {value: "out_of_stock", label: "Out of stock"},
    ],
    },
    ];
    
    
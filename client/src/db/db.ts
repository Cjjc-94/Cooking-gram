import { IRecipe } from "./IRecipe";

let Recipes: IRecipe[] = [
  {
    id: 1,
    title: 'Pumpkin Soup',
    tags: ['Vegitarian', 'Soup'],
    time: 50,
    difficulty: 2,
    image: '',
    ingredients: [
      {
        name: 'pumpkin',
        quantity: 400
      },
      {
        name: 'coconut milk',
        quantity: 200
      },
      {
        name: 'salt',
        quantity: 2
      }
    ],
    instructions: [
      'chop pumkin',
      'throw pumpkin and coconut milk in pot',
      'cook for 40 minutes',
      'add salt'
    ],
    steps: [
      [
        { type: "text", value: "chop" },
        { type: "ingredient", value: "pumpkin" },
        { type: "text", value: "in small pieces" },
      ],
      [
        { type: "text", value: "add" },
        { type: "ingredient", value: "coconut milk" },
        { type: "text", value: "to pot." },
      ],
      [
        { type: "text", value: "add" },
        { type: "ingredient", value: "pumkin" },
        { type: "text", value: "to pot." },
      ],
      [
        { type: "text", value: "place pot on medium heat" },
      ],
      [
        { type: "text", value: "cook for 40 minutes" },
      ],
      [
        { type: "text", value: "add" },
        { type: "ingredient", value: "salt" },
        { type: "text", value: "to the mix" },
      ],
    ]
  },
  {
    id: 2,
    title: 'Tomato Soup',
    tags: ['Vegitarian', 'Soup'],
    time: 50,
    difficulty: 2,
    image: '',
    ingredients: [
      {
        name: 'Tomato',
        quantity: 400
      },
      {
        name: 'coconut milk',
        quantity: 200
      },
      {
        name: 'salt',
        quantity: 2
      }
    ],
    instructions: [
      'chop tomatoes',
      'throw pumpkin and coconut milk in pot',
      'cook for 40 minutes',
      'add salt'
    ],
    steps: [
      [
        { type: "text", value: "chop" },
        { type: "ingredient", value: "tomato" },
        { type: "text", value: "in small pieces" },
      ],
      [
        { type: "text", value: "add" },
        { type: "ingredient", value: "coconut milk" },
        { type: "text", value: "to pot." },
      ],
      [
        { type: "text", value: "add" },
        { type: "ingredient", value: "tomato" },
        { type: "text", value: "to pot." },
      ],
      [
        { type: "text", value: "place pot on medium heat" },
      ],
      [
        { type: "text", value: "cook for 40 minutes" },
      ],
      [
        { type: "text", value: "add" },
        { type: "ingredient", value: "salt" },
        { type: "text", value: "to the mix" },
      ],
    ]
  },
  {
    id: 3,
    title: 'Test Soup',
    tags: ['Soup'],
    time: 50,
    difficulty: 2,
    image: '',
    ingredients: [
      {
        name: 'Tomato',
        quantity: 400
      },
      {
        name: 'coconut milk',
        quantity: 200
      },
      {
        name: 'salt',
        quantity: 2
      }
    ],
    instructions: [
      'chop tomatoes',
      'throw pumpkin and coconut milk in pot',
      'cook for 40 minutes',
      'add salt'
    ],
    steps: [
      [
        { type: "text", value: "chop" },
        { type: "ingredient", value: "tomato" },
        { type: "text", value: "in small pieces" },
      ],
      [
        { type: "text", value: "add" },
        { type: "ingredient", value: "coconut milk" },
        { type: "text", value: "to pot." },
      ],
      [
        { type: "text", value: "add" },
        { type: "ingredient", value: "tomato" },
        { type: "text", value: "to pot." },
      ],
      [
        { type: "text", value: "place pot on medium heat" },
      ],
      [
        { type: "text", value: "cook for 40 minutes" },
      ],
      [
        { type: "text", value: "add" },
        { type: "ingredient", value: "salt" },
        { type: "text", value: "to the mix" },
      ],
    ]
  }
];


export default Recipes;
import { IRecipe } from "./IRecipe";

let Recipes: [IRecipe] = [
  {
    id: 1,
    title: 'Pumkin Soup',
    tags: ['vegitarian', 'soup'],
    time: 50,
    difficulty: 2,
    image: '',
    ingredients: [
      {
        name: 'pumkin',
        quantity: 800
      },
      {
        name: 'coconut milk',
        quantity: 400
      },
      {
        name: 'salt',
        quantity: 5
      }
    ],
    instructions: [
      'chop pumkin',
      'throw pumpkin and coconut milk in pot',
      'cook for 40 minutes',
      'add salt'
    ],
    steps: [
      'chop pumkin',
      'throw pumkin in pot',
      'throw coconut milk in pot',
      'place pot on medium heat',
      'cook for 40 minutes',
      'add salt'
    ]
  }
]

export default Recipes;
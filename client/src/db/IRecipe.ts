export interface IRecipe {
  id: number;
  title: string;
  tags: string[];
  time: number;
  difficulty: number;
  image: string;
  ingredients: {
    name: string;
    quantity: number;
  }[];
  instructions: string[];
  steps: string[];
}
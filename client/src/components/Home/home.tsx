import React, { useState } from "react";
import Recipes from "../../db/db";
//import { IRecipe } from "../../db/IRecipe";

function Home() {
  console.log(Recipes)
  //const [recipesFound, setResipesFound] = useState<IRecipe[]>(Recipes);

  return (
    <div>
      <p>{Recipes[0].title}</p>
      <p>{Recipes[1].title}</p>

    </div>
    // recipesFound.map(r => <div>{r.title}</div>)
  );
}

export default Home;

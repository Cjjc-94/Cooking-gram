import React, { useState } from "react";
import Recipes from "../../db/db";
import { IRecipe } from "../../db/IRecipe";
import { Tab } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Home() {
  const [recipesFound, setResipesFound] = useState<IRecipe[]>(Recipes);
  const tags = ['All', 'Vegitarian', 'Stew'];
  const [selectedTag, setSelectedTag] = useState<string>('All')

  function handleSelectedTagChange(e: any) {
    const tag = tags[e]
    setSelectedTag(tag)
    console.log(selectedTag)
  }



  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group onChange={handleSelectedTagChange}>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {tags.map(tag => <Tab key={tag}
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            {tag}
          </Tab>)}
        </Tab.List>
      </Tab.Group>
      {recipesFound.map(rec => {
        if (rec.tags.indexOf(selectedTag) !== -1 || selectedTag === 'All') {
          return <p key={rec.id}>{rec.title}</p>
        }
      })}

    </div>
  );
}

export default Home;

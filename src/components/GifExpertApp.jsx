import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (onNewCategory) => {

        if(categories.includes(onNewCategory)) return
        setCategories(
            [onNewCategory, ...categories]
        )
    }
  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}

        <AddCategory 
        // setCategories={ setCategories } categories={ categories}
            onNewCategory={ onAddCategory }
        />
        
        {/* Listado de gif */}

        {/* <button onClick={onAddCategory}>Agregar</button> */}
        
            { categories.map( (category) => {
                return (  
                   <GifGrid key={ category } category={ category }/>
                )
            })}
            
            {/* Gif Item */}
    </>
  )
}


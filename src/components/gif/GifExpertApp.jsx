import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = ({onImageSelect}) => {

    const [categories, setCategories] = useState([''])

    
    

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
            //setCategories( [ newCategory ]);
            setCategories( [ newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {
                categories.map( (cat) => (
                    <GifGrid 
                        key={cat} 
                        category={cat}
                        onImageSelect={onImageSelect}
                    /> 
                ))
            }
        </>
    )
}
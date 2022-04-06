import React, { useState } from 'react'

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['Dragon Ball Z']);

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

           <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category}/>
                    ))
                }   
               
            </ol>  
        </>

     );
}




export default GifExpertApp;



/*
    ANOTACIONES
*/

// const categories = ['One Punch', 'Samurai X', 'Dragon Ball Z'];

/*const handleAdd = () => {
     setCategories([...categories, 'Naruto']);
     setCategories(cats => [...cats, 'Naruto'] );
 }*/
import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>

      <hr />

      <ol>
        {
            categories.map((category, i) => (
                // <li key= { `${category}_${i}` }> { category } </li>
                <GifGrid
                    key={ `${category}_${i}` }
                    category={ category } />
            ))
        }
      </ol>
    </>
  );
}

export default GifExpertApp
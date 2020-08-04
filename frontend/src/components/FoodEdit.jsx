import React from 'react'

function FoodEdit({ handleInput, updateFood, food }) {
  return (
    <div>
      <p>
        <label>Name</label>
        <input onChange={e => handleInput(e)} type="text" name="name" placeholder="Name" />
      </p>
      <p>
        <label>Dish type</label>
        <input onChange={e => handleInput(e)} type="text" name="dishType" placeholder="Dish Type" />
      </p>
      <p>
        <label>Flavor</label>
        <input onChange={e => handleInput(e)} type="text" name="flavor" placeholder="Flavor" />
      </p>
      <p>
        <label>Price</label>
        <input onChange={e => handleInput(e)} type="text" name="price" placeholder="Price" />
      </p>
      <button onClick={updateFood}>Update Food</button>
    </div>
  )
}
export default FoodEdit

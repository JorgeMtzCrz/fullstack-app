import React from 'react'
import useForm from './useForm'
import axios from 'axios'
import Swal from 'sweetalert2'

function FoodCreate(props) {
  const customHook = useForm()

  const createFood = () => {
    axios
      .post(`http://localhost:3000/api/foods`, customHook.form)
      .then(({ data }) => {
        console.log(data)
        Swal.fire('Created', 'Food created', 'success')
        props.history.push(`/foods/${data.food._id}`)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <p>
        <label>Name</label>
        <input onChange={e => customHook.handleInput(e)} type="text" name="name" placeholder="Name" />
      </p>
      <p>
        <label>Dish type</label>
        <input onChange={e => customHook.handleInput(e)} type="text" name="dishType" placeholder="Dish Type" />
      </p>
      <p>
        <label>Flavor</label>
        <input onChange={e => customHook.handleInput(e)} type="text" name="flavor" placeholder="Flavor" />
      </p>
      <p>
        <label>Price</label>
        <input onChange={e => customHook.handleInput(e)} type="text" name="price" placeholder="Price" />
      </p>
      <button onClick={createFood}>Create food</button>
    </div>
  )
}

export default FoodCreate

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import FoodEdit from './FoodEdit'
import useForm from './useForm'

function FoodDetail(props) {
  const [food, setFood] = useState({})
  const { form, handleInput } = useForm()

  
  const deleteFood = () => {
    axios
      .delete(`http://localhost:3000/api/foods/${props.match.params.id}`)
      .then(({ data }) => {
        console.log(data)
        Swal.fire('Deleted', data.msg, 'success')
        props.history.push('/foods')
      })
      .catch(err => {
        console.log(err)
        Swal.fire(err)
      })
  }
  const updateFood = () => {
    axios
      .patch(`http://localhost:3000/api/foods/${props.match.params.id}`, form)
      .then(({ data }) => {
        setFood(prevState => {
          return {
            ...prevState,
            ...data.food
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <h2>{food.name}</h2>
      <p>{food.dishType}</p>
      <p>{food.flavor}</p>
      <p>${food.price}.00</p>
      <button onClick={deleteFood}>Delete</button>
      <br />
      <button onClick={() => props.history.goBack()}>Go back</button>
      <FoodEdit food={food} handleInput={handleInput} updateFood={updateFood} />
    </div>
  )
}

export default FoodDetail

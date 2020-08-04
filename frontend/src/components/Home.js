import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <img width="40%" src="https://secure.meetupstatic.com/photos/event/c/5/4/1/600_468050497.jpeg" alt="logo" />
      <h1>Ironfoods</h1>
      <Link to="/foods">
        <button>c'all the foods</button>
      </Link>
      <Link to="/create">
        <button>create ironfood</button>
      </Link>
    </div>
  )
}

export default Home

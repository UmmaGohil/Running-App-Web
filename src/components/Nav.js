import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to="/Add">
        <button>Add</button>
      </Link>
      <Link to="/Edit">
        <button>Edit</button>
      </Link>
      <Link to="/View">
        <button>View</button>
      </Link>
      <Link to="/Route">
        <button>Route</button>
      </Link>
    </div>
  )
}

export default Nav

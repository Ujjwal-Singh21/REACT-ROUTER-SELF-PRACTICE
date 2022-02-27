import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products () {
  return (
    <div>
      <div>
        <h1> Products Page </h1>
        <input type='text' placeholder='Search Products' />
      </div> <br />

      <nav className='nav'>
        <Link to='featured-products'> Featured </Link> <br />
        <Link to='new-products'> New </Link>
      </nav>
      <Outlet />

    </div>
  )
}

export default Products

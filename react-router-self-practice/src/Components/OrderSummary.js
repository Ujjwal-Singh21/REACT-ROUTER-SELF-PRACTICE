import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummary () {
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <h2> --- Order Summary --- </h2>
        <ol>
          <li> Beetroot </li>
          <li> Ginger </li>
          <li> Potato </li>
          <li> Radish </li>
        </ol>
      </div>

      <button onClick={() => navigate('/')}> Go back to Home </button>
    </div>
  )
}

export default OrderSummary

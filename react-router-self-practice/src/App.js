import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
// import About from './Components/About'
import NavBar from './Components/NavBar'
import OrderSummary from './Components/OrderSummary'
import NoMatch from './Components/NoMatch'
import Products from './Components/NestedRoutes/Products'
import FeaturedProducts from './Components/NestedRoutes/FeaturedProducts'
import NewProducts from './Components/NestedRoutes/NewProducts'
import Users from './Components/DynamicRoutes/Users'
import UserDetails from './Components/DynamicRoutes/UserDetails'
import Admin from './Components/DynamicRoutes/Admin'
import Profile from './Components/AuthenticationRoutes/Profile'
import AuthProvider from './Components/AuthenticationRoutes/auth'
import Login from './Components/AuthenticationRoutes/Login'
import RequiredAuth from './Components/AuthenticationRoutes/RequiredAuth'

const LazyAbout = React.lazy(() => import('./Components/About'))

function App () {
  return (
    <div>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='about' element={<About />} /> */}
          <Route path='order-summary' element={<OrderSummary />} />

          {/* NestedRoutes Practice */}
          <Route path='products' element={<Products />}>
            {/* Index Route  */}
            {/* <Route index element={<FeaturedProducts />}/> */}
            <Route path='featured-products' element={<FeaturedProducts />} />
            <Route path='new-products' element={<NewProducts />} />
          </Route>

          {/* Dyamic Routes Practice */}
          <Route path='users' element={<Users />}>
            <Route path=':userId' element={<UserDetails />} />
            <Route path='admin' element={<Admin />} />
          </Route>

          {/* LazyLoading Practice */}
          <Route
            path='about'
            element={
              <React.Suspense fallback='DownLoading...... '>
                <LazyAbout />
              </React.Suspense>
            }
          />

          {/* Authentication and Protected Routes Practice */}
          <Route
            path='profile'
            element={
              <RequiredAuth>
                <Profile />
              </RequiredAuth>
            }
          />
          
          <Route path='/logIn' element={<Login />} />

          <Route path='*' element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App

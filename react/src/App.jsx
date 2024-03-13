import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './page/Home'
import Contactus from './page/Contactus'
import Cars from './page/Cars'
import Login from './page/Login'
import Signup from './page/Signup'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import useAuthContext from './hooks/useAuthContext'
import CarDetails from './page/CarDetails'
function App() {
  const {user}=useAuthContext()
  return (
    <div className="app">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/Contactus' element={<Contactus/>}/>
          <Route 
          path='/cars' 
          element={user ? <Cars/>: <Navigate to="/login"/>}/>

          <Route 
          path='/login' 
          element={!user ? <Login/> :<Navigate to="/"/>}
          />
          <Route 
          path='/signup' 
          element={!user ?<Signup/> :<Navigate to="/"/>}
          />
          <Route 
          path='/carDetails/:id' 
          element={user ?<CarDetails/> :<Navigate to="/login"/>}
          />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

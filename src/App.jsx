
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Produto } from './pages/Produto'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/produto' element={<Produto/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

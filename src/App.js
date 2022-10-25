import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Home from './page/Home'
import Calculadora from './page/Calculadora'
import CalculoImc from './page/CalculoImc'




function App() {
  
      return (
           
           <Router>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/calculadora" element={<Calculadora />}/>
                <Route path="/calculoImc" element={<CalculoImc />}/>
              </Routes>
           </Router>      
      )
  
}

export default App

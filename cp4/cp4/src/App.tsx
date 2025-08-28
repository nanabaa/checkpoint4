import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import Error from './pages/pagenotfound/Error'
import Footer from './components/Footer'
import './App.css'
import Lista from './pages/lista/Lista'
import Forms from './pages/forms/Forms'


function App() {
  

  return (
    <><Router>
      {
        <Routes>
          {
            <><Route path="/home" element={<Lista />} />
            <Route path="/addproduto" element={<Forms />} />
            <Route path="/*" element={<Error />} />
            
            </>
          }
        </Routes>
      }
    </Router>
      <Footer/>
    </>
    
  )
}

export default App

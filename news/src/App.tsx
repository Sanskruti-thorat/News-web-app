

import { useRoutes } from 'react-router-dom'
import Routes from './Routes/Routes'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
const routing = useRoutes(Routes)

  return (
    <> 
   <Header/>
   {routing} 
   <Footer/>
    </>
  
  )
}

export default App

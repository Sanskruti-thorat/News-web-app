

import { useRoutes } from 'react-router-dom'
import Routes from './Routes/Routes'
import Header from './components/Header'


function App() {
const routing = useRoutes(Routes)

  return (
    <> 
   <Header/>
   {routing} 
    </>
  
  )
}

export default App

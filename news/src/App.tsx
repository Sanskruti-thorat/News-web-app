

import { useRoutes } from 'react-router-dom'
import Routes from './Routes/Routes'

function App() {
const routing = useRoutes(Routes)

  return (
<>
   {routing} 
    
    </>
  )
}

export default App

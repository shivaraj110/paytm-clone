import {
  BrowserRouter, Routes , Route,
} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import SendMoney from './pages/SendMoney'
import Dashboard from './pages/Dashboard'
import Me from './pages/Me'
import Settings from './components/Settings'
import Logout from './components/Logout'
import ChangePass from './components/ChangePass'
function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/signin' element={<Signin/>}/>
  <Route path='/send' element={<SendMoney/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/me' element={<Me/>}/>
  <Route path='/settings' element={<Settings/>}/>
  <Route path='/logout' element={<Logout/>}/>
  <Route path='/changepass' element={<ChangePass/>}/>
</Routes>
</BrowserRouter>
</>
  )
}

export default App

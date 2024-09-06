import './App.css'
import Login from './Components/Login'
import Profil from './Components/Profil'
import UserContextProvider from './Context/Usercontextprovider'

function App() {

  return (
    <UserContextProvider>
        <h1>dhruval</h1>
        <Login/>
        <Profil/>
    </UserContextProvider>
  )
}

export default App

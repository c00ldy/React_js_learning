import './App.css'
import Login from './components/Login'
import Profil from './components/Profil'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>react with chai</h1>
      <Login/>
      <Profil/>
    </UserContextProvider>
  )
}

export default App

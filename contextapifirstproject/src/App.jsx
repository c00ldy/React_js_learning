import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContaxtProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContaxtProvider>
      <Login />
      <Profile />
    </UserContaxtProvider>
  )
}

export default App

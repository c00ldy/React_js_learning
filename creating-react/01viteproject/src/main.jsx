import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp (){
  return (
    <div>lessjdhfsdvdfvnfdscvgdscds</div>
  )
}

const reactElement = {
  types : 'a',
  props : {
      href : 'https://google.com',
      target : '_blank'
  },
  children : 'click me to visit'

}

const anotherElement = (
  <a href="google.com" target='_blank'>click google</a>
)

const anotherver = "my self c0ldy"

const reactelement = React.createElement (
  'a',
  {
    href : 'https://google.com' , target : '_blank',
  },
  'click me to visit',
  anotherver
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactelement
  // <App />
)

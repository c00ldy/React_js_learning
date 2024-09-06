import React, { useContext } from 'react'
import UserContext from '../Context/Usercontext'

function Profil() {
    const {user} = useContext(UserContext)

    if(!user) return <div>pleas logine</div>

    return <div>welcome {user.username}</div>
}

export default Profil

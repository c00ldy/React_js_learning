import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profil() {

    const { user } = useContext(UserContext)

    if (!user) return <div>pleas login </div>

    return <div>welcome {user.username}</div>
}

export default Profil;
import { useContext } from "react"
import { User } from "../App"

export default function Account(){
    const user = useContext(User)
    return <>
    <div style={{height:'100%'}}>
    {
        user.loggedIn? <Profile/>: <SignIn/>
    }
    </div>
    </>
}

function Profile(){
return <></>
}


function SignIn(){
    return <>
    </>
}
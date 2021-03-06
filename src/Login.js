import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import { auth, provider } from "./firebase"
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [state, dispath] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispath({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch((error) => { alert(error.message) })


    }
    return (
        <div className="login" >
            <div className="login__container">
                <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
                    alt="" />
                <h1>Sign In to Connecting</h1>
                <p>Start discussing and Have fun</p>
                <Button onClick={signIn}>Sign In With Google</Button>

            </div>

        </div >
    )
}

export default Login

import { Button } from '@material-ui/core';
import React from 'react';
import './login.css';
import {auth,provider} from '../firebase';

function Login() {
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => console.log(result))
            .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
           <div className="login_container">
               <img src="https://images-eu.ssl-images-amazon.com/images/I/31KlpCJs-JL.png" alt=""/> 
                <div className="login_text">
                    <h1>Cₕₐₜ wᵢₜₕ ₛₜᵣₐₙgₑᵣₛ ₐₙd bₑcₒₘₑ fᵣᵢₑₙdₛ! ..
</h1>
                </div>
                <Button type="submit" onClick={signIn}>Sign in With Google</Button>
           </div>
        </div>
    );
}

export default Login
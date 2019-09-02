import React , {useState} from "react";
import { Redirect, withRouter } from "react-router-dom";

import firebase from "../firebase/config";

const Signin = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [routeRedirect, setRedirect] = useState(false);
    
    const signin = async(e) => {
        e.preventDefault();
        let response = await firebase.signin(email, password);
        if(response.hasOwnProperty("message")){
            console.log(response.message);
        }
        if(response.hasOwnProperty("user")){
            console.log(response.user);
            setRedirect(true);
        }
    }
    

    const redirect = routeRedirect;
    if(redirect){
        return <Redirect to="/" />  
    }


    return(
        <React.Fragment>
            <form onSubmit={signin}>
               <p>Create a new Account</p>
               
               <label htmlFor="email">Email: </label>
               <input type="email" name="email" onChange={(e) => setEmail(e.target.value) }/>

               <label htmlFor="password">Password: </label>
               <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} />

               <input type="submit" value="Create Account" />
            </form>
        </React.Fragment>
    )
}

export default withRouter(Signin);
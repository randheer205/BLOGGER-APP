import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { signin } from '../services/user.services'
export default function Signin_user(props)
{

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const nav=useNavigate()
    
    async function onSignin()
    {
        if(email.length===0)
        {
            alert("Cant Proceed: No Email")
        }
        else if(password.length<=6)
        {
            alert("Cant Proceed: Password too small")
        }
        else
        {
                console.log(email+" "+password)
                alert("Signing In.....")
                const result=await signin(email,password)
                if(result)
                {
                    const token = result
                    sessionStorage['token']=token
                    sessionStorage['useremail']=email
                    nav('/getblog')
                }
                else
                {
                    console.log(result)
                    alert(result)
                }
        }    
    }

    return (
        <div>
            <h1 className="header" style={{fontSize:'22px'}}>Sign In</h1>
            <main className="form-signin">
                
                    <div className="form-floating">
                    <input type="email" onChange={
                            (e)=>{
                                setEmail(e.target.value)
                            }}
                     className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                    <input type="password" onChange={
                            (e)=>{
                                setPassword(e.target.value)
                            }}  className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                    </div>
                    <Link to='/signup'>Sign Up</Link>
                    <button className="w-100 btn btn-lg btn-primary" onClick={onSignin} type="submit">Sign in</button>
                
            </main>
        </div>
    )
}
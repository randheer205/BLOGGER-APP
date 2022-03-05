import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { signup } from '../services/user.services'
export default function Signup_user(props)
{

    const[email,setEmail]=useState('')
    const[firstname,setFirstName]=useState('')
    const[lastname,setLastName]=useState('')
    const[password,setPassword]=useState('')
    const[cpassword,setcPassword]=useState('')
    const nav=useNavigate()
    async function onSignup()
    {
        if(email.length===0)
        {
            alert("Cant Proceed: No Email")
        }
        else if(password.length<=6)
        {
            alert("Cant Proceed: Password too small")
        }
        else if(firstname.length===0)
        {
            alert("Cant Proceed: First Name Required")
        }
        else if(lastname.length===0)
        {
            alert("Cant Proceed: Last Name Required")
        }
        else
        {
            if(password!==cpassword)
            {
                alert("Cant Proceed: Password not matched")
            }
            else
            {
                console.log(email+" "+password)
                alert("Signing Up.....")
                const result=await signup(email,password,firstname,lastname)
                console.log(result)
                if(result!=null)
                {
                    nav('/signin')
                }
                else
                {
                    alert("We are sorry, something went bad.....")
                }
            }
        }    
    }

    return(
        <div>
            <h1 className="header" style={{fontSize:'22px'}}>Sign Up</h1>
            <main className="form-signin" style={{textAlign:'center'}}>
                    <div className="form-floating">
                        <input type="text" onChange={
                            (e)=>{
                                setFirstName(e.target.value)
                            }}
                        className="form-control" id="floatingInput" placeholder="First Name"/>
                        <label for="floatingInput">First Name</label>
                    </div>

                    <div className="form-floating">
                        <input type="text" onChange={
                            (e)=>{
                                setLastName(e.target.value)
                            }} className="form-control" id="floatingInput" placeholder="Surname"/>
                        <label for="floatingInput">Last Name</label>
                    </div>

                    <div className="form-floating">
                        <input type="email" onChange={
                            (e)=>{
                                setEmail(e.target.value)
                            }} className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" onChange={
                            (e)=>{
                                setPassword(e.target.value)
                            }} className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" onChange={
                            (e)=>{
                                setcPassword(e.target.value)
                            }} className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Confirm Password</label>
                    </div>

                    <Link to='/signin'>Sign In</Link>
                    <button className="w-100 btn btn-lg btn-primary" onClick={onSignup} type="submit">Sign Up</button>               
            </main>
        </div>
    )
}
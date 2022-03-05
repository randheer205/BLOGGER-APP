import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { update } from '../services/user.services'
export default function Update_user()
{
    var[email,setEmail]=useState('')
    const[firstname,setFirstName]=useState('')
    const[lastname,setLastName]=useState('')
    const[city,setCity]=useState('')
    const[state,setState]=useState('')
    const[country,setCountry]=useState('')
    const[zipcode,setZipcode]=useState('')
    const[birthdate,setBirthDate]=useState('')
    const[gender,setGender]=useState('')
    const[password,setPassword]=useState('')
    const nav=useNavigate()
    async function onUpdateUser()
    {
        /*console.log(email)
        if(email !== sessionStorage.getItem("useremail"))
        {
            alert("YOU CAN`T CHANGE OTHER PEOPLE'S PROFILE")
        }
        else{
        if(email.length===0)
        {
            alert("Cant Proceed: No Email")
        }
        else */
        if(password.length<=6)
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
        else if(city.length<=0)
        {
            alert("Cant Proceed: City too small")
        }
        else if(state.length===0)
        {
            alert("Cant Proceed: State Required")
        }
        else if(country.length===0)
        {
            alert("Cant Proceed: Country Required")
        }
        else if(zipcode.length!==6)
        {
            alert("Cant Proceed: Zipcode Invalid")
        }
        else if(gender.length!==1)
        {
            alert("Cant Proceed: Enter 'M' for Male AND 'F' for Female")
        }
        else
        {
                email=sessionStorage.getItem("useremail")
                /* console.log(email)
                console.log(firstname)
                console.log(lastname)
                console.log(password)
                console.log(city)
                console.log(state)
                console.log(country)
                console.log(zipcode)
                console.log(birthdate)
                console.log(gender)  */
                alert("Updating User.....")
                const result=await update(firstname,lastname,email,password,city,state,country,zipcode,birthdate,gender)
                if(result)
                {
                    nav('/getblog')
                }
        }    
    }

    const options = [
        {
            label: "Country",
        },
        {
          label: "India",
          value: "India",
        },
        {
          label: "USA",
          value: "USA",
        },
        {
          label: "UK",
          value: "UK",
        },
      ]

    return(
        <div>
            <h1 className="header" style={{fontSize:'22px'}}>Update Your Profile</h1>
            <main className="form-signin" style={{width:'70%',maxWidth:'850px'}}>
                    <div className="form-floating" style={{padding:'5px'}}>
                        <input type="text" onChange={
                            (e)=>{
                                setFirstName(e.target.value)
                            }}
                        className="form-control" id="floatingInput" placeholder="First Name"/>
                        <label for="floatingInput">First Name</label>
                    </div>

                    <div className="form-floating" style={{padding:'5px'}}>
                        <input type="text" onChange={
                            (e)=>{
                                setLastName(e.target.value)
                            }} className="form-control" id="floatingInput" placeholder="Surname"/>
                        <label for="floatingInput">Last Name</label>
                    </div>

                    <div className="form-floating" style={{padding:'5px'}}>
                        <input type="email" disabled="true" onChange={
                            (e)=>{
                                setEmail(e.target.value)
                            }} className="form-control" id="floatingInput" value={sessionStorage.getItem("useremail")} placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating" style={{padding:'5px'}}>
                        <input type="password" onChange={
                                (e)=>{
                                    setPassword(e.target.value)
                                }}  className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="row g-3" style={{padding:'5px'}}>
                        <div className="col-sm-7">
                            <input type="text" onChange={
                            (e)=>{
                                setCity(e.target.value)
                            }}
                            className="form-control" placeholder="City" aria-label="City"/>
                        </div>
                        <div className="col-sm">
                            <input type="text" onChange={
                            (e)=>{
                                setState(e.target.value)
                            }} className="form-control" placeholder="State" aria-label="State"/>
                        </div>
                        <div className="col-sm">
                            <input type="text" onChange={
                            (e)=>{
                                setZipcode(e.target.value)
                            }} className="form-control" placeholder="Zip" aria-label="Zip"/>
                        </div>
                    </div>

                    <div className="col-auto" style={{padding:'5px'}}>
                        <label className="visually-hidden" for="autoSizingSelect">Country</label>
                        <select onChange={
                            (e)=>{
                                setCountry(e.target.value)
                            }} className="form-select" id="autoSizingSelect" placeholder='Country:'>
                            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
                        </select>
                    </div>

                    <div className="row" style={{padding:'5px'}}>
                        <div className="col">
                            <input type="date" onChange={
                            (e)=>{
                                setBirthDate(e.target.value)
                            }} className="form-control" placeholder="Birthdate DD/MM/YYYY" aria-label="Birthdate"/>
                        </div>
                        <div className="col">
                            <input type="text" onChange={
                            (e)=>{
                                setGender(e.target.value)
                            }} className="form-control" placeholder="Gender" aria-label="Gender"/>
                        </div>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" onClick={onUpdateUser} type="submit">Update User Profile</button>               
            </main>
        </div>
    )}
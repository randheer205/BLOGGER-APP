import {Link,useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import  { getUserprofile } from '../services/user.services'
export default function Display_User(props)
{
    //var result,name,city,state,country,zip,bd,gender
    const[name,setname]=useState([])
    const[city,setcity]=useState([])
    const[state,setstate]=useState([])
    const[country,setcountry]=useState([])
    const[zip,setzip]=useState([])
    const[bd,setbd]=useState([])
    const[gender,setgender]=useState([])
    useEffect(()=>{
        getup(sessionStorage["useremail"])
    })

    async function getup(email)
    {
        //console.log("IN HERE")
        const result=await getUserprofile(email)
        /* name=result[0]+" "+result[1]
        city=result[3]
        state=result[7]
        country=result[4]
        zip=result[5]
        bd=result[2]
        gender=result[6]
        sessionStorage['name']=name
        sessionStorage['city']=city
        sessionStorage['state']=state
        sessionStorage['country']=country
        sessionStorage['zip']=zip
        sessionStorage['bd']=bd */
        setname(result[0]+" "+result[1])
        setbd(result[2])
        setcity(result[3])
        setstate(result[7])
        setcountry(result[4])
        setzip(result[5])
        setgender(result[6])
        console.log(bd.slice(0,10))
        //console.log(name)
    }

    return(
        <div style={{textAlign:'center'}}>
            <h2>Profile</h2>
            <div style={{marginTop:'30px',border:'2px solid rgb(252, 157, 157)',background:'rgba(255, 201, 201,0.5)',borderRadius:'10px'}}>
                <h5>Name:<h3>{name}</h3></h5>
                <h5>Email ID:<h3>{sessionStorage['useremail']}</h3></h5>
                <div className="row g-3" style={{padding:'5px'}}>
                        <div className="col-sm">
                            <h5>City:{city!==null && <h3>{city}</h3>} {city===null && <div>Profile Not Updated! No City</div>}</h5>
                        </div>
                        <div className="col-sm">
                            <h5>State:{state!==null && <h3>{state}</h3>} {state===null && <div>Profile Not Updated! No State added</div>}</h5>
                        </div>
                </div>
                <div className="row g-3" style={{padding:'5px'}}>
                        <div className="col-sm">
                            <h5>Postal Code:{zip!==null && <h3>{zip}</h3>} {zip===null && <div>Profile Not Updated! No Zip Code added</div>}</h5>
                        </div>
                        <div className="col-sm">
                            <h5>Country:{country!==null && <h3>{country}</h3>} {country===null && <div>Profile Not Updated! No COuntry added</div>}</h5>
                        </div>
                </div>
                <div className="row g-3" style={{padding:'5px'}}>
                        <div className="col-sm">
                            <h5>Birth Date:{bd!==null && <h3>{bd.slice(0,10)}</h3>} {bd===null && <div>Profile Not Updated! No Birth Date added</div>}</h5>
                        </div>
                        <div className="col-sm">
                            <h5>Gender:{gender!==null && <h3>{gender}</h3>} {gender===null && <div>Profile Not Updated! </div>}</h5>
                        </div>
                </div>
            </div>
        </div>
    )
}
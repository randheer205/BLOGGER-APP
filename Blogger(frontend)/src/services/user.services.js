import axios from "axios"
import {settings} from "../config"

export const getUserprofile = async (email)=>
{
    const url=settings.server+'/bloggers/getuserprofile'
    const token=sessionStorage['token']
    let result
    try
    {
        result=await axios.post(url,{
            email
        },{headers:{
            Authorization:`Bearer ${token}`,
        }},
        )
        result=result.data
    }
    catch(ex)
    {
        result=ex
    }
    return result
}
export const signup=async (userEmail,userPassword,firstName,lastName)=>
{
    const url=settings.server+'/bloggers/signup'
    let result
    try
    {
        result=await axios.post(url,{
            userEmail,userPassword,firstName,lastName
        })
        result=result.data
    }
    catch(ex)
    {
        result=ex
    }
    return result
}
export const signin=async (userEmail,userPassword)=>
{
    const url=settings.server+'/bloggers/signin'
    let result
    try
    {
        result=await axios.post(url,{
            userEmail,userPassword
        })
        result=result.data
    }
    catch(ex)
    {
        result=ex
    }
    return result
}
export const update=async (firstName, lastName, userEmail, userPassword, userCity, userState, userCountry, userPostalCode, userBirthDate, userGender)=>
{
    const url=settings.server+'/bloggers/updateprofile'
    const token=sessionStorage['token']
    let result
    try
    {
        result=await axios.put(url,{
            firstName, lastName, userEmail, userPassword, userCity, userState, userCountry, userPostalCode, userBirthDate, userGender
        },{headers:{
            Authorization:`Bearer ${token}`,
        }},
        )
        result=result.data
    }
    catch(ex)
    {
        result=ex
    }
    return result
}
export default async function getauthor(userId)
{
    //console.log("HI")
    const url=settings.server+'/bloggers/getblogauthor'
    const token=sessionStorage['token']
    //console.log("inside userservices fe "+userId)
    let result
    try
    {
        result=await axios.post(url,{
            userId
        },{headers:{
            Authorization:`Bearer ${token}`,
        }},
        )
        result=result.data
        //console.log(result[2])
    }
    catch(ex)
    {
        result=ex
    }
    return result
}
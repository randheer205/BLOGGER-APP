import axios from "axios"
import {settings} from "../config"

export const allblogs=async ()=>
{
    const url=settings.server+'/bloggers/bloglist'
    const token=sessionStorage['token']
    let result
    try
    {
        result=await axios.get(url,{headers:{
            Authorization:`Bearer ${token}`,
        }},)
        result=result.data
    }
    catch(ex)
    {
        result=ex
    }
    return result
}
export const createblog=async (blogTitle,blogContent,blogTags)=>
{
    const url=settings.server+'/bloggers/createblog'
    const token=sessionStorage['token']
    let result
    try
    {
        result=await axios.post(url,{
            blogTitle,blogContent,blogTags
        },{headers:{
            Authorization:`Bearer ${token}`,
        }},)
        result=result.data
    }
    catch(ex)
    {
        result=ex
    }
    return result
}
export default async function deleteBlog(id)
{
    const url=settings.server+`/bloggers/deleteblog/${id}`
    const token=sessionStorage['token']
    console.log(id)
    let result
    try
    {
        result=await axios.delete(url,{headers:{
            Authorization:`Bearer ${token}`,
        }})
        result=result.data
    }
    catch(ex)
    {
        result=ex
    }
    return result   
}
export const getblog=async (id)=>
{
    const url=settings.server+'/bloggers/getblogbyid'
    const token=sessionStorage['token']
    //console.log(id)
    let result
    try
    {
        result=await axios.post(url,{
            id
        },{headers:{
            Authorization:`Bearer ${token}`,
        }})
        //console.log("result:")
        //console.log(result.data)
        result=result.data
    }
    catch(ex)
    {
        result=ex
    }
    return result   
}
export const dosearch=async (search)=>{
    const url=settings.server+'/bloggers/getblogs'
    const token=sessionStorage['token']
    const blogTitle=search
    const blogTags=search
    let result
    try
    {
        result=await axios.post(url,{
            blogTitle,
            blogTags
        },{headers:{
            Authorization:`Bearer ${token}`,
        }})
        //console.log("result:")
        //console.log(result.data)
        result=result.data
    }
    catch(ex)
    {
        result=ex
    }
    return result 
}
export const postComment=async (id,userComment)=>
{
    const url=settings.server+'/bloggers/addComment'
    const token=sessionStorage['token']
    let result
    try
    {
        result=await axios.post(url,{
            id,
            userComment
        },{headers:{
            Authorization:`Bearer ${token}`,
        }})
        //console.log("result:")
        //console.log(result.data)
        result=result.data
    }
    catch(ex)
    {
        result=ex
    }
    return result    
}
export const loadComments=async (id)=>
{
    const url=settings.server+`/bloggers/getcomments/${id}`
    const token=sessionStorage['token']
    let result
    try
    {
        result=await axios.get(url,{headers:{
            Authorization:`Bearer ${token}`,
        }})
        //console.log("result:")
        //console.log(result.data)
        result=result.data
    }
    catch(ex)
    {
        result=ex
    }
    return result    
}
export const deleteComment=async(id)=>
{
    const url=settings.server+`/bloggers/delcomments/${id}`
    const token=sessionStorage['token']
    console.log(id)
    let result
    try
    {
        result=await axios.delete(url,{headers:{
            Authorization:`Bearer ${token}`,
        }})
        result=result.data
    }
    catch(ex)
    {
        result=ex
    }
    return result   
}
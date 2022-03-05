import {Link,useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import deleteBlog, { allblogs, dosearch, getblog,deleteComment } from '../services/blog.services'
import Dropdown from 'react-bootstrap/Dropdown'
import Blog from "../components/blog_component"
export default function Main_blog(props)
{
    const[blogs,setBlogs]=useState([])
    const[search,setSearch]=useState([])
    const nav=useNavigate()

    useEffect(()=>{
        loadblogs()
    },[])

    const loadblogs=async ()=>{
        const result=await allblogs()
        if(result)
        {
            setBlogs(await result)
        }
    }

    async function openb(id)
    {
        //NOT THIS ONE IDIOT
        //console.log(id)
        const result=await getblog(id)
        return result
    }

    async function dblog(id)
    {
        //console.log(id)
        const cresult=await deleteComment(id)
        const result=await deleteBlog(id)
        //return await result
    }

    const logout=()=>{
        sessionStorage.removeItem('token')
        sessionStorage.clear()
        nav('/signin')
    }
    const dispuser=sessionStorage['useremail']

    async function searchsearch()
    {
        setBlogs(await dosearch(search))
    }

    return (
        <div>
            <Dropdown className="d-inline mx-2" autoClose="outside">
                <Dropdown.Toggle id="dropdown-autoclose-outside">
                Welcome {sessionStorage['useremail']}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item ><Link to="/createblog" className="btn btn-outline-info">Create Blog</Link></Dropdown.Item>
                <Dropdown.Item ><Link to="/updateuser" className="btn btn-outline-info">Update Profile</Link></Dropdown.Item>
                <Dropdown.Item ><Link to="/viewprofile" className="btn btn-outline-info">View Profile</Link></Dropdown.Item>
                <Dropdown.Item ><button className="btn btn-outline-warning" onClick={logout}>Logout</button></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div><input className="btn btn-outline-info" type="text"  style={{margin:'10px',width:'75%'}} onChange={
                            (e)=>{
                                setSearch(e.target.value)
                            }}  /><button onClick={searchsearch} style={{margin:'10px',width:'20%'}} className="btn btn-outline-info"> Search </button></div>
            <div className='row'>
                <div>
                    {blogs.length>0 && blogs.map(blog=>{
                        const{id,blogTitle,blogContent,blogDate,blogTags,userId,comments,user}=blog
                        //console.log(userId)
                        return <Blog
                            key={id}
                            id={id}
                            blogTitle={blogTitle}
                            blogContent={blogContent}
                            blogDate={blogDate}
                            blogTags={blogTags}
                            userId={userId}
                            comments={comments}
                            user={user}
                            openb={openb}
                            dblog={dblog}
                        />
                    })}
                    {blogs.length===0 && <div>No Blogs yet!!</div>}
                </div>
            </div>
        </div>
    )
}

import {Link,useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { postComment,loadComments } from '../services/blog.services'
import Comment from '../components/comment.component'
import getauthor from '../services/user.services'
import Dropdown from 'react-bootstrap/Dropdown'
export default function Open_blog(props){
    const[comment,setComment]=useState([])
    const[comments,setComments]=useState([])
    const [authors,setauthor]=useState('')
    const nav=useNavigate()
    
    useEffect(()=>{
        loadcomments()
    },[])

    async function gocomment()
    {
        //console.log(comment)
        const id=sessionStorage["blogid"]
        const result=await postComment(id,comment)
        loadcomments()
        //nav('/openblog')
    }

    async function loadcomments()
    {
        const id=sessionStorage["blogid"]
        getblogauthor(sessionStorage["userid"])
        const jk=await loadComments(id)
        setComments(jk)
    }
    async function getblogauthor(userId)
    {
        const result=await getauthor(userId)
        if(result)
        {
            setauthor( await getauthor(userId))
            return authors
        }
    }
    const logout=()=>{
        sessionStorage.removeItem('token')
        sessionStorage.clear()
        nav('/signin')
    }

    return(
        <div>
            <Dropdown className="d-inline mx-2" autoClose="outside" >
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
            <div class="card" style={{background:'rgba(173, 148, 255,0.75)',marginTop:'20px',border:'2px solid #b784f0',borderRadius:'10px'}}>
                <div class="card-body">
                    <h2 class="card-title" style={{color:'white',textAlign:'center'}}>{sessionStorage.getItem('title')}</h2>
                    <h6 class="card-title" style={{color:'#999966'}}>Created By {authors[0]+" "+authors[1]} on {sessionStorage.getItem('date').slice(0,10)}</h6>
                    <p class="card-text" style={{fontSize:'24px',margin:'5px',color:'black'}}>{sessionStorage.getItem('content')}</p>
                    <h6 class="card-text" style={{color:'#999966',borderBottom:'1px solid black',padding:'5px',borderRadius:'5px'}}>Tag:{sessionStorage.getItem('tag')}</h6>
                    <h4 style={{borderTop:'1px solid black',borderRadius:'5px'}}>Comments</h4>
                    <h6>Add Comment</h6>
                    <textarea className="form-control" aria-label="Comments" onChange={
                            (e)=>{
                                setComment(e.target.value)
                            }}></textarea>
                    <button onClick={gocomment}>Post Comment</button>
                    {comments.length>0 && comments.map(comment=>{
                        const{id,userName,userComment,blogId}=comment
                        //console.log(userId)
                        return <Comment
                            key={id}
                            id={id}
                            userName={userName}
                            userComment={userComment}
                        />
                    })}
                    {comments.length===0 && <div>No Comments Yetttt!!!!</div>}
                </div>
            </div>
        </div>
    )
}
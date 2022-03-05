import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { createblog } from '../services/blog.services'
export default function Create_blog(props)
{
    const[title,setTitle]=useState('')
    const[content,setContent]=useState('')
    const[tag,setTag]=useState('')
    const nav=useNavigate()
    const options = [
        {
            label: "Choose Tag",
        },
        {
          label: "Food",
          value: "Food",
        },
        {
          label: "Art",
          value: "Art",
        },
        {
          label: "Science",
          value: "Science",
        },
        {
            label: "Sport",
            value: "Sport",
        },
        {
            label: "History",
            value: "History",
        },
        {
            label: "Politics",
            value: "Politics",
        },
      ]

    const onSubmit=async ()=>{
        if(title.length<=0)
        {
            alert("No Title!!!\nTitle Needed")
        }
        else if(content.length<=0)
        {
            alert("No Content!!!\nContent Needed")
        }
        else
        {
            // console.log(title)
            // console.log(content)
            // console.log(tag)
            await createblog(title,content,tag)
            nav('/getblog')
        }
    }  
    return(
    <div style={{width:'100%'}}>
        <h1 className="header" style={{fontSize:'22px'}}>Create Your Blog</h1>
        <div className="input-group mb-3" style={{padding:'10px'}}>
            <span className="input-group-text">Title</span>
            <input type="text" className="form-control" onChange={
                            (e)=>{
                                setTitle(e.target.value)
                            }} placeholder="Blog Title" aria-label="Title"/>
        </div>
        <div className="input-group" style={{padding:'10px'}}>
            <span className="input-group-text">Content</span>
            <textarea className="form-control" aria-label="Blog Content" style={{padding:'10px'}} onChange={
                            (e)=>{
                                setContent(e.target.value)
                            }} rows={'10'} placeholder="Blog Description"></textarea>
        </div>
        <select style={{display:'inline',width:'auto',margin:'10px'}} onChange={
                            (e)=>{
                                setTag(e.target.value)
                            }} className="form-select" id="autoSizingSelect" placeholder='Country:'>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
        </select>
        <button type="button" className="btn btn-outline-primary" style={{margin:'10px',padding:'10px',alignSelf:'center',textAlign:'center'}} onClick={onSubmit}>Submit</button>
    </div>
    )
}
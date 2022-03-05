import {Link,useNavigate} from 'react-router-dom'
import getauthor from '../services/user.services'
const Blog=(props)=>
{
    const{id,blogTitle,blogContent,blogDate,blogTags,userId,comments,user,openb,dblog}=props
    const nav=useNavigate()
    const delblog=async()=>
    {
        //console.log(userId)
        const result=await getauthor(userId)
        console.log(result[2])
        if(result[2]!==sessionStorage.getItem("useremail"))
        {
            alert("You are not the author! You cant delete this blog")
        }
        else
        {
            const uid=id
            const result=await dblog(uid) 
            nav('/getblog')
        }
    }

    async function ob()
    {
        //console.log(id)
        const result=await openb(id)
        //console.log(result)
        sessionStorage["title"]=result.blogTitle
        sessionStorage["content"]=result.blogContent
        sessionStorage["date"]=result.blogDate
        sessionStorage["tag"]=result.blogTags
        sessionStorage["blogid"]=result.id
        sessionStorage["userid"]=result.userId
        nav('/openblog')
    }

    return(
        <div>
            <div className="card" style={{border:"1px solid black",margin:"5px",padding:"5px",background:"#198754",color:'black'}}>
                        <div className="card-body">
                            <h3 className="card-title" style={{textAlign:'center'}}>{blogTitle}</h3>
                            <p className="card-text" style={{overflow:"hidden",textOverflow:'ellipsis',display:'-webkit-box',webkitLineClamp:'1',webkitBoxOrient:'vertical'}}>{blogContent}</p>
                            <button onClick={ob} style={{border:"none",borderRadius:'5px',background:'#0cccf0',margin:'5px',padding:'5px'}}>Read More</button>
                            <button onClick={delblog} style={{border:"none",borderRadius:'5px',background:'#dd2245',margin:'5px',padding:'5px'}}>Delete</button>
                        </div>
            </div>
        </div>
    )

}
export default Blog
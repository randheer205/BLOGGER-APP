import {Link,useNavigate} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
export default function Comment(props)
{
    const{id,userName,userComment,blogId}=props

    return(
        <div>
            <div className="card" style={{border:"1px solid #05194a",margin:"5px",color:'black',borderRadius:'15px',background:'rgba(150, 126, 230,0.70)'}}>
                        <div className="card-body">
                            <h6>By {userName}</h6>
                            <p className="card-text">{userComment}</p>
                        </div>
            </div>
        </div>
    )
}
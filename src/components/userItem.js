import React from 'react';
import './index.css'
const UserItem = (props) => (

    <div className="imgdiv" >

<div className="imgtxt" >{props.datas.Fname } { props.datas.Lname}</div>
<div>{props.datas.phoneno }</div>
<div>{props.datas.EmailId }</div>
<div>{props.datas.username}</div>
    </div>
)

export default UserItem;

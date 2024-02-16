import React from 'react'
export default function ContactRow({contact}){
    return(
       <tr>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
       </tr>
    );    
}

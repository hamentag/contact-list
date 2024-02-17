import {useEffect, useState } from "react";

export default function SelectedContact({selectedContactId,setSelectedContactId}){
    const [contact, setContact] = useState({})

    useEffect(()=>{
        async function fetchContact(){
            try{
                const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/"+selectedContactId);
                const result = await response.json();
                setContact(result);       
                console.log(result)  
            } catch (error) {
                console.error(error);
            }
        }
        fetchContact();
    }, []);

     
    return(
        <>
            <table>
                <caption>
                    Detailed info about <b>{contact.name}</b>
                </caption>
                <tbody>
                    <tr>
                        <th scope="row">Name: </th>
                        <td>{contact.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">ID: </th>
                        <td>{contact.id}</td>
                    </tr>
                    <tr>
                        <th scope="row">Username: </th>
                        <td>{contact.username}</td>
                    </tr>
                    <tr>
                        <th scope="row">email: </th>
                        <td>{contact.email}</td>
                    </tr>
                    <tr>
                        <th scope="row">Phone: </th>
                        <td>{contact.phone}</td>
                    </tr>
                    <tr>
                        <th scope="row">Website: </th>
                        <td>{contact.website}</td>
                    </tr>
                </tbody>
            </table>

            <button className="back-button" onClick={()=>{
                setSelectedContactId(null)
            }}>Back</button>
        </>
    );

}
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from "./Button";
import { deleteContact } from './store';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function View () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let contact = useSelector(state => state.contacts)

    const [Data, setData] = useState(contact);

    const deleteItem = (value) => {

        dispatch(deleteContact(value));    
    };
    // console.log(contact);
    return (
        <div className='card border-0 shadow'>

            <div className='card-header'>Contact</div>
            <div className='card-body'>
            
                <table className="table shadow">
                
                    <thead className='card-header'>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Gender</th>
                            <th>State</th>
                            <th><button onClick={(e) => navigate("create")}>Create</button></th>
                        </tr>

                    </thead>


                    <tbody>
                        {contact.map((value, index) =>
                            <tr>
                                
                                    <td>{index+1}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.state}</td>
                                <td>
                                <button onClick={(e) => deleteItem(value)} >Delete</button>&nbsp;
                                <button onClick={(e) => navigate(`/edit/${value.id}`)}>Edit</button>
                                </td>
                            </tr>)}
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}

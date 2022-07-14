import React from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateContact } from './store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function EditForm() {

  const params = useParams();
  console.log(params.id);

  const contact = useSelector(state => state.contacts);

  const data = contact.filter((arrElem, index) => {
    return arrElem.id == params.id;

  });
  console.log("data");
  console.log(data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    id: data[0].id,
    name: data[0].name,
    email: data[0].email,
    phone: data[0].phone,
    state: data[0].state,
    gender: data[0].gender,
  });
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [state, setState] = useState("");
  // const [gender, setGender] = useState("");

  //     const new_contact ={
  //       name:name,
  //       email:email,
  //       phone:phone,
  //       state:state,
  //       gender:gender,
  //   }
  console.log(contact["0"].name);
  const createContact = (e) => {
    e.preventDefault();

    dispatch(updateContact(userDetails));
    navigate('/');


  };

  return (
    <>
      <div className='card border-0 shadow'>
        <div className='card-header'>Contact</div>
        <div className='card-body'>
          <form onSubmit={(e) => createContact(e)}>
          
            <div class="mb-3">
              <label for="exampleInputName" class="form-label">Enter Your Name</label>
              <input
                type="text"
                class="form-control"
                value={userDetails.name}
                onChange={((e) => setUserDetails({ ...userDetails, name: e.target.value }))}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail" class="form-label">Enter Your Email</label>
              <input
                type="email"
                class="form-control"
                value={userDetails.email}
                onChange={((e) => setUserDetails({ ...userDetails, email: e.target.value }))}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputMobile" class="form-label">Enter Your Phone Number</label>
              <input
                type="text"
                class="form-control"
                value={userDetails.phone}
                onChange={((e) => setUserDetails({ ...userDetails, phone: e.target.value }))}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputState" class="form-label">Enter Your State</label>
              <input
                type="text"
                class="form-control"
                value={userDetails.state}
                onChange={((e) => setUserDetails({ ...userDetails, state: e.target.value }))}
              />

            </div>
            <div class="mb-3">
              <label for="exampleInputState" class="form-label">Select Your Gender</label><br />
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={userDetails.gender}
                onChange={((e) => setUserDetails({ ...userDetails, gender: e.target.value }))}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div class="mb-3">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value={userDetails.gender}
                onChange={((e) => setUserDetails({ ...userDetails, gender: e.target.value }))}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div>
            <div class="mb-3">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value={userDetails.gender}
                onChange={((e) => setUserDetails({ ...userDetails, gender: e.target.value }))}
              />
              <label class="form-check-label" for="flexRadioDefault3">
                Other
              </label>
            </div>
            <button type="submit" class="btn btn-primary me-2">Cancel</button>
            <button type="submit" class="btn btn-primary" >Submit</button>
            {/* <Link to="view" className='btn btn-primary'>Submit</Link> */}
          </form>
        </div>
      </div>
    </>
  )
}

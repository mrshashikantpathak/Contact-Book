import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addContact } from './store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  const contact = useSelector(state => state.contacts)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [gender, setGender] = useState("");

  // const cancelHindle=()=>{
  //   setName("");
  //   setEmail("");
  //   setPhone("");
  //   setState("");
  //   setGender("");
  // }

  const new_contact = {
    id: uuidv4(),
    name: name,
    email: email,
    phone: phone,
    state: state,
    gender: gender,
  }
  console.log(contact);
  const createContact = (e) => {
    e.preventDefault();
    // console.log(e);
    // alert(JSON.stringify(new_contact))

    dispatch(addContact(new_contact));
    navigate('/');
    console.log(JSON.stringify(new_contact));

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
                value={name}
                onChange={((e) => setName(e.target.value))}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail" class="form-label">Enter Your Email</label>
              <input
                type="email"
                class="form-control"
                value={email}
                onChange={((e) => setEmail(e.target.value))}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputMobile" class="form-label">Enter Your Phone Number</label>
              <input
                type="text"
                class="form-control"
                value={phone}
                onChange={((e) => setPhone(e.target.value))}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputState" class="form-label">Enter Your State</label>
              <input
                type="text"
                class="form-control"
                value={state}
                onChange={((e) => setState(e.target.value))}
              />

            </div>
            <div class="mb-3">
              <label for="exampleInputState" class="form-label">Select Your Gender</label><br />
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={"Male"}
                onChange={((e) => setGender(e.target.value))}
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
                value={"Female"}
                onChange={((e) => setGender(e.target.value))}
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
                value={"Other"}
                onChange={((e) => setGender(e.target.value))}
              />
              <label class="form-check-label" for="flexRadioDefault3">
                Other
              </label>
            </div>

            <button type="submit" class="btn btn-primary me-2" >Cancel</button>

            <button type="submit" class="btn btn-primary" >Submit</button>

            {/* <Link to="view" className='btn btn-primary'>Submit</Link> */}
         
          </form>
        </div>
      </div>
    </>
  )
}

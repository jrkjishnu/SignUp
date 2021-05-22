import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap';

function SignUpForm({signup}) {

    const loginTemplate = {firstname:'',lastname:"",username:"",email:"",timezone:"",password:""}
    const [fanSignup,setFanSignup] = useState([loginTemplate]);
    const [talentSignup,setTalentSignup] = useState([loginTemplate]);
    const [submission,setSubmission] = useState([loginTemplate])
    const [show,setShow] = useState(false)
    const [button,setButton] = useState(false);
    const [checked,setChecked] = useState(false);
    const handleInputChange = (e)=>
    {
        if(signup === 'fan')
        {
            const update = fanSignup.map((data,i)=>
            i == 0?Object.assign(data,{[e.target.name]:e.target.value}):data);
            setFanSignup(update);
            setSubmission(fanSignup);
        }
        else
        {
            const update = talentSignup.map((data,i)=>
            i == 0?Object.assign(data,{[e.target.name]:e.target.value}):data);
            setTalentSignup(update);
            setSubmission(talentSignup);
        }


    }

    const submit = (e)=>
    {
      e.preventDefault();
      setButton(true);
      submission.map((data)=>
      {
        const {firstname,lastname,username,email,timezone,password} = data;
        if(firstname === '' || lastname == '' || username == '' || email == '' || password == '' || timezone == '' || checked == false)
        {
          setShow(false);
        }
        else
        {
            setSubmission([loginTemplate])
            console.log(submission);
            setShow(true);
        }
      })
      console.log(show);
      
    }
    return (
        <div>
{   button ? (show ? <p>Signup Successfull</p> :<p>Please fill out all the fields</p>):null
}         <Form className="register-form">
          <Form.Group controlId="firstname">
          <label style={{fontSize:'20px',float:'left'}}>FirstName</label>
            <Form.Control
              type="text"
              placeholder="Enter firstname"
              name="firstname"
              value={submission[0].firstname}
              onChange={(e)=>handleInputChange(e)}
              required
            />
          </Form.Group>
          <Form.Group controlId="lastname">
          <label style={{fontSize:'20px',float:'left'}}>LastName</label>
            <Form.Control
              type="lastname"
              placeholder="Enter lastname"
              name="lastname"
              value={submission[0].lastname}
              onChange={(e)=>handleInputChange(e)}
              required
            />
          </Form.Group>
          <Form.Group controlId="username">
          <label style={{fontSize:'20px',float:'left'}}>Username</label>
            <Form.Control
              type="username"
              placeholder="Enter username"
              name="username"
              value={submission[0].username}
              onChange={(e)=>handleInputChange(e)}
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <label style={{fontSize:'20px',float:'left'}}>Email</label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={submission[0].email}
              onChange={(e)=>handleInputChange(e)}
              required
            />
          </Form.Group>
          <Form.Group controlId="timezone">
          <label style={{fontSize:'20px',float:'left'}}>Timezone</label>
            <Form.Control
              type="timezone"
              placeholder="Enter timezone"
              name="timezone"
              value={submission[0].timezone}
              onChange={(e)=>handleInputChange(e)}
              required
            />
          </Form.Group>
          <Form.Group controlId="password">
          <label style={{fontSize:'20px',float:'left'}}>Password</label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={submission[0].password}
              onChange={(e)=>handleInputChange(e)}
              required
            />
          </Form.Group>
          <input onChange={(e)=>setChecked(e.target.checked)} type="checkbox"/ ><span  style={{fontSize:'25px'}} >Agree with terms and Conditions</span><br />
         {<Button variant="primary" type="submit" onClick={(e)=>submit(e)}>
            Register
          </Button>}
        </Form>
        </div>
    )
}

export default SignUpForm

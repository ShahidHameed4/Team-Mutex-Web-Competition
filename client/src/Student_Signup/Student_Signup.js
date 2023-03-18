import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBInput,
}
from 'mdb-react-ui-kit';
import logo from "./student_signup.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate , Link} from 'react-router-dom';
import './Student_Signup.css';

export default function Student_Signup() {


    const [tagValue,settagValue] = React.useState();
    const [nameValue,setnameValue] = React.useState();
    const [emailValue,setemailValue] = React.useState();
    const [mobileValue,setmobileValue] = React.useState();
    const [linkValue,setlinkValue] = React.useState();
    const [addressValue,setaddressValue] = React.useState();
    const [passwordValue,setpasswordValue] = React.useState();
    const [cpassValue,setcpassValue] = React.useState();

    const navigate = useNavigate();


    const validateSignup = async event => {

      const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
      const emailcheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const phonecheck = /^\d{11}$/;
      const addresscheck = /[`!@$%^&*()_+\-=[\]{};':"\\|.<>/?~]/;
      const lowercasecheck = /[a-z]/g;
      const uppercasecheck = /[A-Z]/g;
      const numbercheck = /[0-9]/g;


      if (!nameValue || !emailValue || !mobileValue || !tagValue || !addressValue || !passwordValue || !cpassValue)
      {
        toast.error('Empty fields not allowed', {position: toast.POSITION.TOP_RIGHT});
        return false;
      } 
      else if (specialChars.test(tagValue))
      {
        toast.error('Special characters not allowed in Tagline field', {position: toast.POSITION.TOP_RIGHT});
        return false;
      }
      else if (specialChars.test(nameValue))
      {
        toast.error('Special characters not allowed in name field', {position: toast.POSITION.TOP_RIGHT});
        return false;
      }
      else if (!(emailcheck.test(emailValue)))
      {
        toast.error('Invalid Email Address', {position: toast.POSITION.TOP_RIGHT});
        return false;
      }
      else if (!(phonecheck.test(mobileValue)))
      {
        toast.error('Invalid Mobile Number', {position: toast.POSITION.TOP_RIGHT});
        return false;
      }
      else if (addresscheck.test(addressValue))
      {
        toast.error('Unrelated special characters not allowed in Address field', {position: toast.POSITION.TOP_RIGHT});
        return false;
      }
      // else if (!(cniccheck.test(cnicValue)))
      // {
      //   toast.error('Invalid Cnic number', {position: toast.POSITION.TOP_RIGHT});
      //   return false;
      // }
      else if ((!(passwordValue.match(lowercasecheck))) || (!(passwordValue.match(uppercasecheck))) || (!(passwordValue.match(numbercheck))) || passwordValue.length < 8)
      {
        toast.error('Invalid Password, Password must contain atleast an uppercase letter, a lowercase letter, a number and MUST be atleast 8 characters in length.', {position: toast.POSITION.TOP_RIGHT});
        return false;
      }
      else if (!(passwordValue===cpassValue))
      {
        toast.error('Same password should be used for confirmation', {position: toast.POSITION.TOP_RIGHT});
        return false;
      }
      else
      {
        let tag = tagValue;
        let name = nameValue;
        let email = emailValue;
        let mobilenumber = mobileValue;
        let address = addressValue;
        let password = passwordValue;
        let link = linkValue;


          await fetch(`http://13.233.58.41:3001/newSignup`,{

          method: 'post',
          body: JSON.stringify({tag , name, email, mobilenumber, address, password, link}),
          headers: {'Content-Type': 'Application/json'}

        }).then ((response) => {

          if (response.status === 300)
          {
            toast.error('A user already exists with such CNIC or Email', {position: toast.POSITION.TOP_RIGHT});
            return false;
          }
          else if (response.status === 201)
          {
            toast.success('Signup Successful!', {position: toast.POSITION.TOP_RIGHT});
            navigate('/Login');    
          }
          else
          {
            console.log("Failed to create new User");
          }
        
        });
       
      }
    }






  return (
    <MDBContainer fluid className='bg-light vh-100'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src={logo} alt="Sample photo" className="signupimage" fluid/>
              </MDBCol>

              <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 md-6 text-uppercase fw-bold" style={{color: "#000000"}}><span>Student / Researcher Signup Form</span></h3>

                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Full Name' size='lg' id='name' type='text' value={nameValue}  onChange={(e) => setnameValue(e.target.value)}/>
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Photo Link (Optional)' size='lg' id='link' type='text' value={linkValue} onChange={(e) => setlinkValue(e.target.value)}/>
                    </MDBCol>

                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Tagline (3-4 words)' size='lg' id='bio' type='text' value={tagValue} onChange={(e) => settagValue(e.target.value)}/>

                  <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='email' type='text' value={emailValue} onChange={(e) => setemailValue(e.target.value)}/>
                  <MDBInput wrapperClass='mb-4' label='Mobile Number' size='lg' id='mobilenumber' type='text' value={mobileValue} onChange={(e) => setmobileValue(e.target.value)}/>
                  <MDBInput wrapperClass='mb-4' label='Address' size='lg' id='address' type='text'value={addressValue} onChange={(e) => setaddressValue(e.target.value)}/>

                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='name' type='text' value={passwordValue}  onChange={(e) => setpasswordValue(e.target.value)}/>
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Confirm Password' size='lg' id='cnic' type='text' value={cpassValue} onChange={(e) => setcpassValue(e.target.value)}/>
                    </MDBCol>

                  </MDBRow>

                  <div className="d-flex justify-content-center pt-3">
                    <Link to='/Login'>
                    <MDBBtn outline color='black' size='lg' style={{color: "#000000"}}>Login Instead</MDBBtn>
                    </Link>
                    <MDBBtn className='ms-2' color='black' size='lg' onClick={validateSignup}>Submit form</MDBBtn>
                    <ToastContainer/>
                  </div>

                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

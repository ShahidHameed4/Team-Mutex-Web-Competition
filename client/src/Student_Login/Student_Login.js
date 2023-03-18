import React from 'react'
import logo from './student_login.jpg';
import './Student_Login.css';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';


export default function Student_Login() 
{

  const [emailValue,setemailValue] = React.useState();
  const [passwordValue,setpasswordValue] = React.useState();


  const navigate = useNavigate();


  const AuthenticateLogin = async event => {

    const emailcheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    if (!emailValue || !passwordValue)
    {
      toast.error('Empty fields not allowed', {position: toast.POSITION.TOP_RIGHT});
      return false;
    } 
    else if (!(emailcheck.test(emailValue)))
    {
      toast.error('Invalid Email Address', {position: toast.POSITION.TOP_RIGHT});
      return false;
    }
    else
    {
        let email = emailValue;
        let password = passwordValue;

          await fetch(`http://localhost:3001/UserLoginAuthenticate`,{

          method: 'post',
          body: JSON.stringify({email, password}),
          headers: {'Content-Type': 'Application/json'}

        }).then ((response) => {

          if (response.status === 200)
          {
            toast.success('Login Authenticated!', {position: toast.POSITION.TOP_RIGHT});
            navigate('/StudentHome',{state:{email : email}});    
          }
          else
          {
            toast.error('Invalid Credentials', {position: toast.POSITION.TOP_RIGHT});
          }
        
        });
      
    }
   
  }

  const StdSignup = async event => {
    navigate('/StudentSignup'); 
  }



  return (

    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage id="slogo" src={logo} alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="graduation-cap fa-6x me-3" style={{ color: '#000000' }}/>
                <span className="h1 fw-bold mb-0">Welcome Researcher</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={emailValue}  onChange={(e) => setemailValue(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={passwordValue} onChange={(e) => setpasswordValue(e.target.value)}/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={AuthenticateLogin}>Login</MDBBtn>

              <MDBBtn outline className="mb-4 px-5" color='dark' size='lg' onClick={StdSignup}>Signup Instead</MDBBtn>
              

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
    
  )
}

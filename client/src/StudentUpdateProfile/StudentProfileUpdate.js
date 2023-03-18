import {React, useEffect}  from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCol, MDBContainer,  MDBRow,  MDBCard,  MDBCardText,  MDBCardBody,  MDBCardImage,  MDBBtn, MDBInput, } from 'mdb-react-ui-kit';
import logo from '../Student_Profile/facelogo.png';
import './StudentProfileUpdate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faFileInvoice} from "@fortawesome/free-solid-svg-icons"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ProfilePage(props) {

  const location = useLocation();
  const data = location.state;

  const[studentInfo,setStudentInfo] = React.useState([{}])

    const navigate = useNavigate();
    const [bioValue,setbioValue] = React.useState(data.bio);
    const [nameValue,setnameValue] = React.useState(data.name);
    const [emailValue,setemailValue] = React.useState(data.email);
    const [mobileValue,setmobileValue] = React.useState(data.mobilenumber);
    const [addressValue,setaddressValue] = React.useState(data.address);

    const [instituteValue,setinstituteValue] = React.useState();
    const [degreevalue,setdegreevalue] = React.useState();

    const [orgvalue,setorgvalue] = React.useState();
    const [lengthvalue,setlengthvalue] = React.useState();

    const validateInput = async event => {

      const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
      const emailcheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const phonecheck = /^\d{11}$/;
      const addresscheck = /[`!@$%^&*()_+\-=[\]{};':"\\|.<>/?~]/;
      if (specialChars.test(bioValue))
      {
        toast.error('Special characters not allowed in Bio field', {position: toast.POSITION.TOP_RIGHT});
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
      else
      {
        let bio = bioValue;
        let name = nameValue;
        let email = emailValue;
        let mobilenumber = mobileValue;
        let address = addressValue;


         await fetch(`http://localhost:3001/update/${emailValue}`,{

          method: 'put',
          body: JSON.stringify({bio , name, email, mobilenumber, address}),
          headers: {'Content-Type': 'Application/json'}

        });

          toast.success('Changes Validated!', {position: toast.POSITION.TOP_RIGHT});

          const delay = (ms) => new Promise(
            resolve => setTimeout(resolve, ms)
          );
         delay(150000);
        navigate('/StudentProfile',{state:{email : email}});

      }
    }


    const AddEducation = async() => {
      let studentemail = emailValue;

        (async () =>
      {
          await fetch(`http://localhost:3001/AddStudentEducation`,{

            method: 'put',
            body: JSON.stringify({email: studentemail, institute: instituteValue,degree: degreevalue}),
            headers: {'Content-Type': 'Application/json'}
  
        });

        toast.success('Education Added!', {position: toast.POSITION.TOP_RIGHT});

     })();
    }


    const AddExperience = async() => {
      let studentemail = emailValue;

        (async () =>
      {
          await fetch(`http://localhost:3001/AddStudentExperience`,{

            method: 'put',
            body: JSON.stringify({email: studentemail, organization: orgvalue,length: lengthvalue}),
            headers: {'Content-Type': 'Application/json'}
  
        });

        toast.success('Experience Added!', {position: toast.POSITION.TOP_RIGHT});

     })();
    }



    useEffect(() => {
      (async () =>
      {
        await fetch(`http://localhost:3001/profile/${emailValue}`).then(
          response => response.json()
        ).then(
          data => setStudentInfo(data))
     })();
  
    }, [emailValue]);








  return (
    <div>
    {(typeof studentInfo.student === 'undefined') ? (
      <p> Loading... </p>
    ) : (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
    
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={logo}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                  <p>     </p>
                  <MDBInput className="bio-field" label='Bio' id="typebio" value={bioValue} onChange={(e) => setbioValue(e.target.value)} />
                <p className="text-muted mb-4">{addressValue}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn className="updatebutton" onClick={validateInput }>Confirm</MDBBtn>
                  <ToastContainer/>
                </div>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>

          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>

                <MDBRow md="5">
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBInput label='Full Name' id='typename' type='name' value={nameValue} onChange={(e) => setnameValue(e.target.value)} />
                  </MDBCol>
                  
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <MDBInput id='typeEmail' type='Email' value={emailValue} onChange={(e) => setemailValue(e.target.value)} disabled />
                    
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <MDBInput label='Mobile Number' id='typeMobile' type='Mobile' value={mobileValue} onChange={(e) => setmobileValue(e.target.value)} />
                    
                  </MDBCol>
                </MDBRow>
                <hr />
                
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <MDBInput label='Address' id='typeAddress' type='Address' value={addressValue} onChange={(e) => setaddressValue(e.target.value)} />
                    
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
        </MDBRow>

                {/* education */}
                <MDBRow>
          <MDBCol lg="6">
            <MDBCard className="mb-4">
              <MDBCardBody>
              <MDBRow md="5">
                      <MDBCardText id="qualificationh1" className="text-muted">Education</MDBCardText>
                    
                  </MDBRow>
                  <hr />
                  {(typeof studentInfo.student.education === 'undefined') ? (
                      <p> Loading... </p>
                    ) : (
                      studentInfo.student.education.map((edu,i) => (
                        
                        <MDBRow key={i}>
                          <MDBCol sm="3">
                            <MDBCardText>{edu.institute}</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{edu.degree}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        
                      ))
                      
                    )}
                  <hr />
                  <hr />
                  <MDBRow md="5">
                  <MDBInput wrapperClass='mb-4' label='Institute' id='formControlLg' type='institute' size="lg" value={instituteValue}  onChange={(e) => setinstituteValue(e.target.value)}/>
                  </MDBRow>
                  <MDBRow md="5">
                <MDBInput wrapperClass='mb-4' label='Degree' id='formControlLg' type='institute' size="lg" value={degreevalue} onChange={(e) => setdegreevalue(e.target.value)}/>
                 </MDBRow>
                  <MDBRow md="5">
                    <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={AddEducation}>Add Education</MDBBtn>
                    
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            {/* experience */}
            <MDBCol lg="6">
            <MDBCard className="mb-4">
              <MDBCardBody>
              <MDBRow md="5">
                      <MDBCardText id="qualificationh1" className="text-muted">Experience</MDBCardText>
                    
                  </MDBRow>
                  <hr />
                  {(typeof studentInfo.student.experience === 'undefined') ? (
                      <p> Loading... </p>
                    ) : (
                      studentInfo.student.experience.map((exp,i) => (
                        
                        <MDBRow key={i}>
                          <MDBCol sm="3">
                            <MDBCardText>{exp.organization}</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{exp.length} years</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        
                      ))

                      
                      
                    )}
                  <hr />
                  <hr />
                  <MDBRow md="5">
                  <MDBInput wrapperClass='mb-4' label='Organization' id='formControlLg' type='org' size="lg" value={orgvalue}  onChange={(e) => setorgvalue(e.target.value)}/>
                  </MDBRow>
                  <MDBRow md="5">
                <MDBInput wrapperClass='mb-4' label='Length of Employment' id='formControlLg' type='length' size="lg" value={lengthvalue} onChange={(e) => setlengthvalue(e.target.value)}/>
                 </MDBRow>
                  <MDBRow md="5">
                    <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={AddExperience}>Add Education</MDBBtn>          
                  </MDBRow>

                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
            








            <MDBRow id ="statrow" >
            <MDBCol lg="4">
            <MDBCard className="col-xl-4 col-sm-8 col-12 mb-4" style={{marginRight : 50  ,maxWidth : 350}}>
              <MDBCardBody>
                
                    <div className="d-flex justify-content-between px-md-4">
                    <div className="align-self-center">
                    <FontAwesomeIcon className="deliveryicon" icon={faFileInvoice} bounce size='4x'/>
                    </div>
                        <MDBCardText className="text-end">
                            <h3>{studentInfo.student.applications}</h3>
                            <p className="mb-0">Applications</p>
                        </MDBCardText>
                    </div>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            
            <MDBCol lg="4">
            <MDBCard className="col-xl-4 col-sm-6 col-12 mb-4" style={{marginRight : 20  ,maxWidth : 350}}>
              <MDBCardBody>
                <div className="d-flex justify-content-between px-md-4">
                    <div className="align-self-center">
                    <FontAwesomeIcon className="ratingicon" icon={faEye} beat size='4x'/>
                    </div>
                        <MDBCardText className="text-end">
                            <h3>{studentInfo.student.profileviews}</h3>
                            <p className="mb-0">Profile Views</p>
                        </MDBCardText>
                    </div>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>

        </MDBRow>
        
      </MDBContainer>
    </section>
    
    )}
    </div>
  );
}
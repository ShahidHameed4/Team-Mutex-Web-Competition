import React, {useEffect} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  MDBCol, MDBContainer,  MDBRow,  MDBCard,  MDBCardText,  MDBCardBody,  MDBCardImage,  MDBBtn,
} from 'mdb-react-ui-kit';
import logo from "./facelogo.png";
import './Student_Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFileInvoice} from "@fortawesome/free-solid-svg-icons"
import { Link,  useLocation } from 'react-router-dom';

export default function ProfilePage(props) {

  const location = useLocation();
  const data = location.state;

  const[emailprop] = React.useState(data.email);
  const[studentInfo,setStudentInfo] = React.useState([{}])
  

  useEffect(() => {
    (async () =>
    {
      await fetch(`http://13.233.58.41:3001/profile/${emailprop}`).then(
        response => response.json()
      ).then(
        data => setStudentInfo(data))
   })();

  }, [emailprop]);

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
                  <p><br></br></p>
                <p className="text-muted mb-1">Frontend MERN Developer</p>
                <p className="text-muted mb-4">H#38, St#17 Sector A</p>
                <div className="d-flex justify-content-center mb-2">
                  <Link to={'/rider/updateRiderProfile'} state={{bio: studentInfo.student.bio, name: studentInfo.student.name, email: studentInfo.student.email, mobile: studentInfo.student.mobilenumber, address: studentInfo.student.address}} >
                  <MDBBtn className="updatebutton">Update</MDBBtn>
                  </Link>
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
                    <MDBCardText className="text-muted">{studentInfo.student.name}</MDBCardText>
                  </MDBCol>
                  
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{studentInfo.student.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{studentInfo.student.mobilenumber}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{studentInfo.student.address}</MDBCardText>
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
                            <h3>14</h3>
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
                            <h3>24</h3>
                            <p className="mb-0">Profile Views</p>
                        </MDBCardText>
                    </div>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>

                {/* <MDBCol lg="4">
               <MDBCard className="col-xl-4 col-sm-6 col-18 mb-4" style={{maxWidth : 350}}>
              <MDBCardBody>
                <div className="d-flex justify-content-between px-md-4" >
                    <div className="align-self-center">
                    <FontAwesomeIcon className="walleticon" icon={faWallet} shake size='4x' style={{color : 'cyan'}}/>
                    </div>
                        <MDBCardText className="text-end">
                            <h3>2015</h3>
                            <p className="mb-0">User Since</p>
                        </MDBCardText>
                    </div>
                </MDBCardBody>
            </MDBCard>
            </MDBCol> */}
        </MDBRow>
        
      </MDBContainer>
    </section>
    
     )} 

</div>

    
  );
}
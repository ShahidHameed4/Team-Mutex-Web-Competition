import React, {useEffect} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  MDBCol, MDBContainer,  MDBRow,  MDBCard,  MDBCardText,  MDBCardBody,  MDBCardImage,  MDBBtn,
} from 'mdb-react-ui-kit';
import logo from "./facelogo.png";
import './Org_Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFileInvoice} from "@fortawesome/free-solid-svg-icons"
import { Link,  useLocation } from 'react-router-dom';

export default function ProfilePage(props) {

  const location = useLocation();
  const data = location.state;

  const[emailprop] = React.useState(data.email);
  const[orgInfo,setorgInfo] = React.useState([{}])
  

  useEffect(() => {
    (async () =>
    {
      await fetch(`http://localhost:3001/api/user/profile/`,{

      method: 'get',
      body: JSON.stringify({id: '6415a47b225890153e8e6516'}),
      headers: {'Content-Type': 'Application/json'}
    
    }).then(
        response => response.json()
      ).then(
        data => setorgInfo(data))
   })();

  }, [emailprop]);

  return (
    <div>

    {(typeof orgInfo.org === 'undefined') ? (
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
                <p className="text-muted mb-1">{orgInfo.org.bio}</p>
                <p className="text-muted mb-4">{orgInfo.org.Location}</p>
                <div className="d-flex justify-content-center mb-2">
                  <Link to={'/updateOrgProfile'} state={{bio: orgInfo.org.bio, name: orgInfo.org.name, email: orgInfo.org.email, mobile: orgInfo.org.mobilenumber, address: orgInfo.org.location}} >
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
                    <MDBCardText className="text-muted">{orgInfo.org.name}</MDBCardText>
                  </MDBCol>
                  
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{orgInfo.org.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{orgInfo.org.mobilenumber}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Location</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{orgInfo.org.location}</MDBCardText>
                  </MDBCol>
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
                            <h3>{orgInfo.org.postnumber}</h3>
                            <p className="mb-0">Job Posts</p>
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
                            <h3>{orgInfo.org.profileviews}</h3>
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
import React, {useEffect} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  MDBCol, MDBContainer,  MDBRow,  MDBCard,  MDBCardText,  MDBCardBody,  MDBCardImage,  MDBBtn,
} from 'mdb-react-ui-kit';
import logo from "./facelogo.png";
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faWallet, faMotorcycle} from "@fortawesome/free-solid-svg-icons"
import { Link,  useLocation } from 'react-router-dom';

export default function ProfilePage(props) {

  const location = useLocation();
  const data = location.state;

  // const[emailprop] = React.useState(data.email);
  // const[riderInfo,setRiderInfo] = React.useState([{}])
  

  // useEffect(() => {
  //   (async () =>
  //   {
  //     await fetch(`http://13.233.58.41:3001/profile/${emailprop}`).then(
  //       response => response.json()
  //     ).then(
  //       data => setRiderInfo(data))
  //  })();

  // }, [emailprop]);

  return (
    <div>

    {/* {(typeof riderInfo.rider === 'undefined') ? (
      <p> Loading... </p>
    ) : ( */}
      <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://images.app.goo.gl/mCK1tq79cJ63G6hL8"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                  <p><br></br></p>
                <p className="text-muted mb-1">Frontend MERN Developer</p>
                <p className="text-muted mb-4">H#38, St#17 Sector A</p>
                <div className="d-flex justify-content-center mb-2">
                  {/* <Link to={'/rider/updateRiderProfile'} state={{bio: riderInfo.rider.bio, name: riderInfo.rider.name, email: riderInfo.rider.email, mobile: riderInfo.rider.mobilenumber, cnic: riderInfo.rider.cnic, address: riderInfo.rider.address, deliveries: riderInfo.rider.deliveries, rating: riderInfo.rider.rating, wallet:riderInfo.rider.wallet}}> */}
                  <MDBBtn className="updatebutton">Update</MDBBtn>
                  {/* </Link> */}
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
                    <MDBCardText className="text-muted">GM</MDBCardText>
                  </MDBCol>
                  
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">this@email.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">03328553987</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Photo Link</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted" > https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2520picture%2F&psig=AOvVaw1EVbsSMtv7X7EkvbGi5R3_&ust=1679212088111000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjSg9L-5P0CFQAAAAAdAAAAABAE</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">House number this</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
        </MDBRow>

            <MDBRow >
            <MDBCol lg="4">
            <MDBCard className="col-xl-4 col-sm-8 col-12 mb-4" style={{marginRight : 50  ,maxWidth : 350}}>
              <MDBCardBody>
                
                    <div className="d-flex justify-content-between px-md-4">
                    <div className="align-self-center">
                    <FontAwesomeIcon className="deliveryicon" icon={faMotorcycle} bounce size='4x'/>
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
                    <FontAwesomeIcon className="ratingicon" icon={faStar} beat size='4x'/>
                    </div>
                        <MDBCardText className="text-end">
                            <h3>24</h3>
                            <p className="mb-0">Profile Views</p>
                        </MDBCardText>
                    </div>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>

                <MDBCol lg="4">
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
            </MDBCol>
        </MDBRow>
        
      </MDBContainer>
    </section>
    
    {/* )} */}

</div>

    
  );
}
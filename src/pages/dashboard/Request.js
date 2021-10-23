import React, { useState, useEffect, useRef } from "react";
import { Route, Link } from 'react-router-dom'
import '../../assets/css/transitions.css'
import { Autocomplete } from "@react-google-maps/api";
import { Marker } from "react-google-maps";

import logo from '../../assets/img/logo.png'

import RequestDetails from "../../components/RequestDetails/RequestDetails";
import Modal from "../../components/Modal/Modal";
import OffCanvas from "../../components/OffCanvas/OffCanvas";
import {
  FormWrap,
  Form,
  InputDiv,
  Input,
  Button,
  Label,
  NavWrap,
  NavTab,
  ProfileImg,
  Detail,
  DetailHeader,
  DetailFieldValue,
  DetailField,
  DetailsDiv,
  ButtonDiv,
  TextArea,
} from "../../globalStyles";

import Map from "../../components/Map/Map";

import {
  Tr,
  Td,
  Th,
  HtmlTable,
} from '../../globalStyles'

import {
  Option,
  Select,
  OrderedBySection,
  BottomSection,
  SearchForm,
  SearchInp,
  TopSection,
  Wrap,
} from '../styles/dashboard/Request.styles'



export default function Request({ match }) {
  const reqForm = useRef(null);
  const [autoComplete, setAutoComplete] = useState(null);
  const [coords, setCoords] = useState({});
  const [mark, setMark] = useState(false);
  function setCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        setCoords({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
        setMark({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
      },
      () => console.log("error :)"),
      { timeout: 30000 }
    );
  }
  useEffect(() => {
    setCurrentLocation();
  }, []);

  const onPlaceChanged = () => {
    try {
      const lat = autoComplete.getPlace().geometry.location.lat();
      const lng = autoComplete.getPlace().geometry.location.lng();
      setMark({ lat, lng });
      setCoords({ lat, lng });
    } catch { }
  };

  const sendRequest = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <NavWrap>
        <NavTab activeClassName="active" exact to="/requests/45/">Request</NavTab>
        <NavTab activeClassName="active" exact to="/requests/45/donors/">Donor Request</NavTab>
      </NavWrap>

      <Route exact path='/requests/:id/' >
        {/* {({match}) => (
        <CSSTransition in={match != null} timeout={450} classNames="page" unmountOnExit> */}
        <RequestDetails>
          <form onSubmit={sendRequest}>
            <Modal
              button={Buttons}
              actionText="Request"
              title="Help Request Form"
              lg
              info
              btnText="Help"
            >
              <FormWrap>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <InputDiv size={4}>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name" type="text" />
                  </InputDiv>
                  <InputDiv size={5}>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Email" type="email" />
                  </InputDiv>
                  <InputDiv size={3}>
                    <Label htmlFor="time">When Do You Need Blood</Label>
                    <Input id="time" placeholder="Time" type="datetime-local" />
                  </InputDiv>
                  <InputDiv size={6}>
                    <Label htmlFor="number">Phone Number</Label>
                    <Input id="number" placeholder="Phone Number" type="tel" />
                  </InputDiv>
                  <InputDiv size={6}>
                    <Label htmlFor="add-number">Additional Phone Number</Label>
                    <Input
                      id="add-number"
                      placeholder="Additional Phone Number"
                      type="tel"
                    />
                  </InputDiv>
                  
                  <InputDiv>
                    <Label htmlFor="add-number">Short Description</Label>
                    <TextArea placeholder="Short Description"></TextArea>
                  </InputDiv>

                  <InputDiv
                    flex
                    style={{ justifyContent: "space-between" }}
                    size={12}
                  >
                    <Button
                      type="button"
                      info
                      blockOnSmall
                      style={{ position: "relative", top: "14px" }}
                      onClick={(e) => {
                        setCurrentLocation();
                      }}
                    >
                      Get Current Location
                    </Button>

                    <Autocomplete
                      onLoad={(autoC) => setAutoComplete(autoC)}
                      onPlaceChanged={onPlaceChanged}
                    >
                      <>
                        <Label htmlFor="add-number">
                          Current Location of Donor *
                        </Label>
                        <Input
                          id="places"
                          placeholder="Search Places..."
                          type="text"
                          onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                              e.preventDefault();
                            } else {
                              return true;
                            }
                          }}
                        />
                      </>
                    </Autocomplete>
                  </InputDiv>

                  
                  <InputDiv
                    style={{
                      boxShadow: "0px 0px 15px 2px var(--main-box-shadow-color)",
                    }}
                    height="400px"
                    size={12}
                  >
                    <Map
                      coords={coords}
                      isMarkerShown
                      googleMapURL=" "
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `100%` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                      setCoords={setCoords}
                      setMark={setMark}
                      click={(e) =>
                        setMark({ lat: e.latLng.lat(), lng: e.latLng.lng() })
                      }
                      defaultZoom={17}
                    >
                      {mark ? <Marker position={mark} /> : ""}
                    </Map>
                  </InputDiv>
                </Form>
              </FormWrap>
            </Modal>
          </form>
        </RequestDetails>

        {/* </CSSTransition>
            )} */}

      </Route>

      <Route exact path='/requests/:id/donors/' >

        {/* {({match}) => (
        <CSSTransition in={match != null} timeout={450} classNames="page" unmountOnExit> */}
        <DonorRequests />
        {/* </CSSTransition>
            )} */}

      </Route>

    </>
  );
}

const Buttons = () => {
  return (
    <Button type="submit" md info>
      Request
    </Button>
  );
};



const DonorRequests = () => {
  const [donorRequestData, setDonorRequestData] = useState([])
  const [showDonorRequest, setShowDonorRequest] = useState(false)
  const [donorRequestMoreDetails, setDonorRequestMoreDetails] = useState(null)
  const [showEmail, setShowEmail] = useState(true)
  window.addEventListener('resize', e => {
    if (window.innerWidth <= 550) {
      setShowEmail(false)
    } else {
      setShowEmail(true)
    }
  })
  useEffect(() => {
    setDonorRequestData([
      {
        "Name": "Jimam Tamimi",
        "Time": "23 th april 2021",
        "Distance": "2 km"
      }
    ])
  }, [])

  const showMoreDetails = id => {
    // call the apis
    setShowDonorRequest(true)
    setDonorRequestMoreDetails({})
    
  }
  const onCanvasExit = () => {
    setTimeout(() => {
      setDonorRequestMoreDetails(null)
    }, 450);
  }
  

  return (
    <>
      <Wrap>
        <TopSection>
          <SearchForm>
            <SearchInp placeholder="Search..." />
          </SearchForm>
          <OrderedBySection>
            {/* <Select>
                            <Option>Request Time</Option>
                            <Option>A - Z</Option>
                            <Option>Z - A</Option>
                        </Select> */}
          </OrderedBySection>
        </TopSection>
        <BottomSection>
          <HtmlTable>
            <Tr style={{ cursor: 'default' }}>
              <Th>$</Th>
              <Th>Profile</Th>
              <Th>Time</Th>
              <Th>Distance</Th>
              <Th>Number</Th>
              {
                showEmail ? <Th>Email</Th> : ''
              }
            </Tr>

            <Tr onClick={e => showMoreDetails(90)}>
              <Td>1</Td>
              <Td> <Link style={{ display: 'flex', alignItems: "center" }} to="/user/23/"><ProfileImg size="45px" src={logo} /> <p style={{ position: 'relative', left: "15px", fontWeight: "600" }}>Jimam Tamimi</p> </Link> </Td>
              <Td>2 april 2021 4:30 pm </Td>
              <Td>2 KM</Td>
              <Td>01827485748</Td>
              {
                showEmail ? <Td>jimam@jimam.com</Td> : ''
              }

            </Tr>
          </HtmlTable>
        </BottomSection>
        <OffCanvas onCanvasExit={onCanvasExit} setShow={setShowDonorRequest} show={showDonorRequest}>
          {
            donorRequestMoreDetails?(
              <DetailsDiv>

              <DetailHeader>Requested By: </DetailHeader>
              <Detail>
                <Link style={{ display: 'flex', alignItems: "center" }} to="/user/23/"><ProfileImg size="45px" src={logo} /> <p style={{ position: 'relative', left: "15px", fontWeight: "600" }}>Jimam Tamimi</p> </Link>
              </Detail>
  
              <DetailHeader>Informations: </DetailHeader>
              <Detail>
                <DetailField>Name: </DetailField>
                <DetailFieldValue>Jimam</DetailFieldValue>
              </Detail>
              <Detail>
                <DetailField>Time: </DetailField>
                <DetailFieldValue>24 October 2021 2:30 pm</DetailFieldValue>
              </Detail>
              <Detail>
                <DetailField>Distance: </DetailField>
                <DetailFieldValue>4 KM</DetailFieldValue>
              </Detail>
  
              <DetailHeader>Contacts: </DetailHeader>
              <Detail>
                <DetailField>Email: </DetailField>
                <DetailFieldValue>jimam@jimam.com</DetailFieldValue>
              </Detail>
              <Detail>
                <DetailField>Number: </DetailField>
                <DetailFieldValue>0199483748</DetailFieldValue>
              </Detail>
              <Detail>
                <DetailField>Additional Number: </DetailField>
                <DetailFieldValue>017384738</DetailFieldValue>
              </Detail>
  
              <DetailHeader>Description: </DetailHeader>
              <Detail>
                <DetailFieldValue>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque molestiae asperiores alias maxime! Ea aspernatur sed libero laudantium odit molestias tempore deleniti odio perferendis modi? Magnam praesentium impedit quasi voluptates molestiae ipsam quos cumque sed facere repellat sapiente sunt, eligendi non animi iusto, quam consequuntur? Aliquid accusamus quos nostrum.</DetailFieldValue>
              </Detail>
              <DetailHeader>Actions: </DetailHeader>
              <ButtonDiv >
                <Button sm info >Accept</Button>
                <Button sm >Reject</Button>
              </ButtonDiv>
            </DetailsDiv>
            ):''
          }

        </OffCanvas>
      </Wrap>
    </>
  );
};

import React, {useState} from "react";
import {
  FormWrap,
  Form,
  InputDiv,
  Input,
  customStyles,
  Button,
  Label,
} from "../../globalStyles";

import {Autocomplete} from '@react-google-maps/api'
import {GoogleMap, withScriptjs, withGoogleMap,   Marker, InfoWindow } from "react-google-maps";
import Select from "react-select";
import Map from "../../components/Map/Map";
import { useEffect } from "react";

export default function MakeRequest() {
  const bloodGroups = [
    { value: "Select", label: "Select" },
    { value: "a+", label: "A+" },
    { value: "b+", label: "B+" },
    { value: "ab+", label: "AB+" },
    { value: "o+", label: "O+" },
    { value: "a-", label: "A-" },
    { value: "b-", label: "B-" },
    { value: "ab-", label: "AB-" },
    { value: "o-", label: "O-" },
  ];

  const [autoComplete, setAutoComplete] = useState(null)
  const [coords, setCoords] = useState({})
  const [mark, setMark] = useState(false)
  function setCurrentLocation(){
    
    navigator.geolocation.getCurrentPosition((location) => {
      setCoords({lat: location.coords.latitude, lng: location.coords.longitude})
      setMark({lat: location.coords.latitude, lng: location.coords.longitude})
      console.log(mark)
      console.log(coords)
    }, () => console.log('error :)'), {timeout:4000})
  }
  useEffect(() => {
    setCurrentLocation()
  }, [])
 

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();
    setMark({lat, lng})
    setCoords({lat, lng})
  } 
  
  return (
    <>
      <FormWrap>
        <Form onSubmit={e => e.preventDefault()}>
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
          <InputDiv size={3}>
            <Label htmlFor="number">Phone Number</Label>
            <Input id="number" placeholder="Phone Number" type="tel" />
          </InputDiv>
          <InputDiv size={3}>
            <Label htmlFor="add-number">Additional Phone Number</Label>
            <Input
              id="add-number"
              placeholder="Additional Phone Number"
              type="tel"
            />
          </InputDiv>
          <InputDiv size={6}>
            <Label>Blood Group</Label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={bloodGroups[0]}
              disabledValue={bloodGroups[0]}
              isDisabled={false}
              isLoading={false}
              isClearable={true}
              isRtl={false}
              isSearchable={true}
              name="blood-group"
              options={bloodGroups}
              styles={customStyles}
            />
          </InputDiv>
          

          <InputDiv flex  style={{justifyContent: 'space-between'}} size={12}>

            <Button    info blockOnSmall style={{position: "relative", top: "14px"}} onClick={e => {e.preventDefault(); console.log('clicked');  setCurrentLocation()}}  >Current Location</Button>

            <Autocomplete onLoad={autoC => setAutoComplete(autoC)} onPlaceChanged={onPlaceChanged}>
              <>
              <Label htmlFor="add-number">Where do you need blood? *</Label>
              <Input
                id="places"
                placeholder="Search Places..."
                type="tel"
                onSubmit={e => e.preventDefault()}
              /> 
              </>
            </Autocomplete>
          </InputDiv>
  
          <InputDiv style={{boxShadow: "0px 0px 15px 2px var(--main-box-shadow-color)"}} height="400px" size={12}>
            <Map 
              coords={coords}  
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCTLGaTW3tW7Ky_cB1X05UZ7pbfrSalTcg"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              setCoords={setCoords}
              setMark={setMark}
            >
              {
                mark?<Marker  
                position={mark} 
                /> : ''
              }
            </Map>  
           

          </InputDiv>

          <InputDiv
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
            size={12}
          >
            <Button blockOnSmall>Request</Button>
          </InputDiv>

          
        </Form>
      </FormWrap>
    </>
  );
}

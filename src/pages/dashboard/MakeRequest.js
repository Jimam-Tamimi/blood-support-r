import React from "react";
import { FormWrap, Form, InputDiv, Input, customStyles, Button } from "../../globalStyles";

import Select from "react-select";

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

  

  return (
    <>
      <FormWrap>
        <Form>
          <InputDiv size={4}>
            <Input placeholder="Name" type="text" />
          </InputDiv>
          <InputDiv size={5}>
            <Input placeholder="Email" type="email"  />
          </InputDiv>
          <InputDiv size={3}>
            <Input placeholder="Time" type="datetime-local"  />
          </InputDiv>
          <InputDiv size={3}>
            <Input placeholder="Phone Number" type="tel"  />
          </InputDiv>
          <InputDiv size={3}>
            <Input placeholder="Additional Phone Number" type="tel"  />
          </InputDiv>
          <InputDiv size={6}>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={bloodGroups[0]}
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
          <InputDiv style={{display: 'flex', justifyContent: 'flex-end', width: '100%'}} size={12}>
            <Button >Request</Button>
          </InputDiv>
        </Form>
      </FormWrap>
    </>
  );
}

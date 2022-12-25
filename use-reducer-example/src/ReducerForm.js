import React, {useReducer} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {reducer , initialState} from './form-reducer'

function ReducerForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const action = {
    type: 'changeValue',
    field: '',
    value: ''
    
  }
  console.log("state: ",initialState)
  function onChangeHandle(e){
    dispatch(
      {
        type: "changeValue",
        field: e.target.name,
        value: e.target.value
      }
    )
  }
  function onResetForm()
  {
    dispatch(
      {
        type:"resetForm"
      }
    )
  }
  function handleSubmit(event)
  {
    event.preventDefault()
    console.log("onsubmit: ",event.target)
    const { email, firstName, lastName, userName } = event.target.elements
        const formData = {
          email: email.value,
          firstName: firstName.value,
          lastName: lastName.value,
          username: userName.value
        } 
        console.log("form data: ", email.value)
    dispatch(
      {
        type: "changeValue",
        firstName: firstName.value,
        lastName: lastName.value,
        username: userName.value,
        email: email.value
      }
    )
  }
    return (
      <Form >
        <FormGroup>
          <Label for="email">Email</Label>
          <Input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Enter Email" 
            value = {state.email}
            onChange={(e)=>{
              dispatch(
                {
                  type: "changeValue",
                  field: e.target.name,
                  value: e.target.value
                }
              )
            }
          }
          />
        </FormGroup>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input 
          name="firstName" 
          id="firstName" 
          placeholder="Enter First Name"
          value = {state.firstName}
          onChange={onChangeHandle}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input  
          name="lastName" 
          id="lastName" 
          placeholder="Enter last Name" 
          value = {state.lastName}
          onChange={onChangeHandle}
          />
        </FormGroup>
        <FormGroup>
          <Label for="userName">User Name</Label>
          <Input  
          name="userName" 
          id="userName" 
          placeholder="Enter User Name"
          value = {state.userName}
          onChange={onChangeHandle}
          />
        </FormGroup>
        <Button type="button" onClick={onResetForm}>Reset</Button>
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }

export default ReducerForm;
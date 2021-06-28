import { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './css/contact.css'

class SrollToTopMount extends Component
{
    componentDidMount()
    {
        window.scrollTo(0,0)
    }
    render(){
        return null
    }
}

export default class Contact extends Component{
   render()
   {
    return(
      <div className="contact-out">
        <SrollToTopMount/>
        <div className="contact">
            <Form>

            <Form.Group  md="4" controlId="validationCustom01">
          <Form.Label className="head-form">First name</Form.Label>
          <Form.Control
            required type="text" placeholder="First name"
          />
        </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label className="head-form">Email address</Form.Label>
    <Form.Control required type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className="head-form">Write here...</Form.Label>
    <Form.Control required as="textarea" placeholder="message....." rows={3} />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </div>
  </div>
    )
   }
}
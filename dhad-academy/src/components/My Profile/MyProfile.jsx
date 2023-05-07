import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Login from './login/Login'
import Register from './Register/Register'

function MyProfile() {
  return (
    <>
    <Container className='py-5'>
      
            <Row  className=' d-flex align-items-cen align-items-center justify-content-center'> 
            <Col xs={12} md={8} lg={5}> 
                <Login/>
            </Col>
            <Col className=' d-none d-lg-block'>
            <div class="d-flex align-items-cen align-items-center justify-content-center vh-100">
            <div className='vr' >
            </div>
            </div>
            </Col>
            <Col xs={12} md={8} lg={5} className='pt-5 pt-lg-0'>
                <Register />    
            </Col>
            </Row>
            </Container>
      
    </>
  )
}
export default MyProfile

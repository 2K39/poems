import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container , Button , Col , Row , Alert } from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Fade from 'react-reveal/Fade';
export default function Home() {
  return (
   
    <Container className="h-100" >
  <br/><br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>

<Fade>
  <Row className="h-100 justify-content-center">
      <h1 className="text-center m-3">
              !مرحبا بكم في موقع اشعار
      </h1>
   
      <Button className="mt-3" variant="outline-dark" style={{width:'200px'}} href="/poems">أقرء</Button>  
  </Row>
</Fade>

</Container>
  
  )

}

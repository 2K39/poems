import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container , Button , Col , Row , Alert } from 'react-bootstrap' 
import Fade from 'react-reveal/Fade';
import LazyHero from 'react-lazy-hero';
import Link from 'next/link'

export default function Home() {
  return (
  <Container>
    <LazyHero minHeight="90vh">
      <Fade>
        <h1 className="m-3 display-2">
          !مرحبا بكم في موقع اشعار
        </h1>

        <Link href="/poems">
          <Button
            style={{width:'200px'}} 
            className="m-3"variant="outline-dark">
            أقرء
          </Button>  
        </Link>
        
      </Fade>
    </LazyHero>
  </Container>
  )
}

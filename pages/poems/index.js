import React , {useState , useEffect} from 'react'
import { Container,Navbar,Nav, Row, Col, Button ,Card, Alert} from 'react-bootstrap'
import { server } from '../../config/index'
import { BsFillHouseFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';
import Link from 'next/link'

export default function Poems(props) {
    let [all , setAll] = useState([])
    useEffect(()=>{
        fetch(`${server}/api/all`)
        .then(response => response.json())
        .then(data => setAll(data));
            console.log(`${server}/api/all`)
    }, [])
    let Navigation = () =>  (
    <Navbar className="row">
        <Container>
            <Navbar.Brand className="h1">أشعار</Navbar.Brand>
            <Nav.Item >
              <Link href="/">
                  <BsFillHouseFill className="text-dark h3" />
                </Link>  
            </Nav.Item>
        </Container>
    </Navbar>
    )
    let Content = () => (
        all.map((x) => 
        <Col key={x.name} className="m-3">
            <Fade bottom>
            <Card key={x.name} >
         
                <Card.Body className="text-center" >
                    <Card.Title as="h1">{x.name}</Card.Title>  
                    <Link href={`/poems/${x.id}`}>

                        <Button variant="outline-dark"
                        className="m-3"
                        style={{width:'200px'}}
                        >أقرء</Button> 

                    </Link>
                </Card.Body>
            </Card>
            </Fade>
        </Col>
        )

    )

    return (
        <Container>

            <Navigation/>

            <Row>
                <Content/>
            </Row>
        </Container>
    )
}

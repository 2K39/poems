import React , {useState , useEffect} from 'react'
import {Container,Nav, Row, Col, Button ,Card, Alert} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {server }from '../../config/index'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AiOutlineHome } from 'react-icons/fa'
import { BsFillHouseFill } from "react-icons/bs";
export default function Poems(props) {
    let [all , setAll] = useState([])
    useEffect(()=>{
        fetch(`${server}/api/all`)
        .then(response => response.json())
        .then(data => setAll(data));
            console.log(`${server}/api/all`)
    }, [])

    return (
        <Container>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">أشعار</Navbar.Brand>
                    <Nav.Link href="/">
                        <BsFillHouseFill style={{color:"black"}}/>
                        </Nav.Link>
                </Container>
            </Navbar>
            <Row>
               
            </Row>
            <Row>
                    {
                    
                    all.map((x) => 
                        <Col key={x.name} className="m-3"><Card key={x.name} >
                            <Card.Body className="text-center" as="h1">
                               <Card.Title >{x.name}</Card.Title>  
                                  
                                 <Button variant="outline-dark" style={{width:'200px'}} href={`/poems/`+x.id}>أقرء</Button>  
                            </Card.Body>
                        </Card>
                        </Col>)
                    }
               
            </Row>
        </Container>
    )
}

import React , {useState , useEffect} from 'react'
import { Container,Navbar,Nav, Row, Col, Button ,Card, Alert} from 'react-bootstrap'
import { server }from '../../config/index'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BsFillHouseFill } from "react-icons/bs";

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
            <Navbar.Brand className="h3">أشعار</Navbar.Brand>
            <Nav.Link href="/">
                <BsFillHouseFill className="text-dark h3" />
            </Nav.Link>
        </Container>
    </Navbar>
    )
    let Content = () => (
        all.map((x) => 
        <Col key={x.name} className="m-3"><Card key={x.name} >
            <Card.Body className="text-center" as="h1">
               <Card.Title >{x.name}</Card.Title>  
                  
                 <Button variant="outline-dark" style={{width:'200px'}} href={`/poems/`+x.id}>أقرء</Button>  
            </Card.Body>
        </Card>
        </Col>)

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

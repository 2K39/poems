import React , {useState , useEffect} from 'react'
import {Container, Row, Col, Button ,Card, Alert} from 'react-bootstrap'
import {server }from '../../config/index'
import 'bootstrap/dist/css/bootstrap.min.css'; 


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
            <Row>
                <Button href="/">
                    Home
                </Button>
            </Row>
            <Row>
                    {
                    
                    all.map((x) => 
                        <Col key={x.name} className="m-3"><Card key={x.name} >
                            <Card.Body className="text-center" as="h1">
                               <Card.Title>{x.name}</Card.Title>  
                                  
                                 <Button variant="outline-dark" style={{width:'200px'}} href={`/poems/`+x.id}>أقرء</Button>  
                            </Card.Body>
                        </Card>
                        </Col>)
                    }
               
            </Row>
        </Container>
    )
}

import React , {useState ,useRef, useEffect} from 'react'
import {Container,Spinner, Navbar , Nav ,Row, Col, Button , Alert} from 'react-bootstrap'
import {server }from '../../config/index'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BsArrowLeft } from "react-icons/bs"; 
import Fade from 'react-reveal/Fade';
export default function One(props) {
    let [firstRender, setFirstRender] = useState(true)
    let [poem , setPoem] = useState({name:"",content:<Spinner animation="border"/>})
    let router =  useRouter()
    let peomId = router.query
    
        useEffect( async() => {
            if ( firstRender == false){
                console.log(await peomId.id)
                const res = await fetch(`${server}/api/${peomId.id}`)
                let data = await res.json()
                setPoem(await data) 
            }
            setFirstRender(false);
        }, [peomId]);

    return (
        <Container className="text-left">
            <Navbar fixed="top">
                <Container>
                
                    <Nav.Link href="/poems">
                        <BsArrowLeft className="text-dark h3"/>
                    </Nav.Link>
                </Container>
            </Navbar>
            <Row>
                <Col>
                <Fade bottom>
                    <h1  className="m-3 h2 text-center" style={{direction:'rtl'}}>
                        {poem.name}
                    </h1> 
                    </Fade>
                </Col>
            </Row>
            <Row>
                <Col>
                <Fade bottom>

                
                <h2 style={{direction:'rtl',
                whiteSpace: "pre-wrap",
                lineHeight:'25px',
                }} className="text-center h6">
                    {poem.content}
                </h2>
                </Fade>
                </Col>
            </Row>
          
        </Container>
    )
}

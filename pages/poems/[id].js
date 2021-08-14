import React , {useState ,useRef, useEffect} from 'react'
import {Container, Navbar , Nav ,Row, Col, Button , Alert} from 'react-bootstrap'
import {server }from '../../config/index'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BsArrowLeft } from "react-icons/bs"; 
export default function One(props) {
    let [firstRender, setFirstRender] = useState(true)
    let [poem , setPoem] = useState({})
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
            <Navbar>
                <Container>
                    <Nav.Link href="/poems">
                        <BsArrowLeft style={{color:"black"}}/>
                    </Nav.Link>
                </Container>
            </Navbar>
            <Row>
                <Col>
                    <h1 className="m-3 h2 text-center" style={{direction:'rtl'}}>{poem.name}</h1> 
                </Col>
            </Row>
            <Row>
                <Col>
                <h2 style={{direction:'rtl',
                whiteSpace: "pre-wrap",
                lineHeight:'25px'}} className="text-center h6">
                    {poem.content}
                </h2>
                </Col>
            </Row>
          
        </Container>
    )
}

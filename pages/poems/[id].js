import React , {useState ,useRef, useEffect} from 'react'
import {Container, Row, Col, Button , Alert} from 'react-bootstrap'
import {server }from '../../config/index'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'; 

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
            <Row>
                <Col>
                    <h1 style={{direction:'rtl'}}>{poem.name}</h1> 
                </Col>
            </Row>
            <Row>
                <Col>
                <pre style={{direction:'rtl'}} className="text-right h6">
                    {poem.content}
                </pre>
                </Col>
            </Row>
          
        </Container>
    )
}

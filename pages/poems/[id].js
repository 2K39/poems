import React , {useState , useEffect} from 'react'
import {Container, Spinner, Navbar }from 'react-bootstrap'
import {Nav ,Row,Col,Button , Alert} from 'react-bootstrap'
import {server }from '../../config/index'
import { useRouter } from 'next/router'
import { BsArrowLeft } from "react-icons/bs"; 
import Fade from 'react-reveal/Fade';
import LazyHero from 'react-lazy-hero';
import Link from 'next/link'

export default function One(props) {
    let [firstRender, setFirstRender] = useState(true)
    let [poem , setPoem] = useState({name:"",content:<LazyHero>
        <Spinner animation="border"/>
    </LazyHero>
})
    let router =  useRouter()
    let peomId = router.query
    
    useEffect(() => {
        (async function (){
            const res = await fetch(`${server}/api/${peomId.id}`)
            let data = await res.json()
            setPoem(await data)  
        })()
    },[peomId.id])

    return (
        <Container className="text-left">
            <Navbar fixed="top">
                <Container>
                    <Nav.Item >
                        <Link href="/poems">
                            <BsArrowLeft className="text-dark h3"/>
                        </Link>
                    </Nav.Item>
                </Container>
            </Navbar>
            <Row>
                <Col>
                <Fade bottom>
                    <h1 className="display-4 m-3 p-3 h2 text-center" style={{direction:'rtl'}}>
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
                        }} className="text-center h2 lh-base">
                            {poem.content}
                        </h2>
                    </Fade>
                </Col>
            </Row>
          
        </Container>
    )
}

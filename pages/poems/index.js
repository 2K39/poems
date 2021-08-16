import React , {useState , useEffect} from 'react'
import { Container,Navbar,Nav,Spinner, Row, Col, Button ,Card, Alert} from 'react-bootstrap'
import { server } from '../../config/index'
import { BsFillHouseFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import LazyHero from 'react-lazy-hero';
export default function Poems(props) {
    let [all , setAll] = useState('empty')
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
    let CustomButton =({href }) => {
       return <Link href={href}>
                        <Button variant="outline-dark"
                            className="m-3"
                            style={{width:'200px'}}>
                            أقرء
                        </Button> 
                    </Link>
    } 
    let Box = ({name, id}) =>   
    
    <Col key={name} className="mb-3">
        <Fade bottom>
                <Card body key={name} className="text-center" >
                    <h1>{name}</h1> 
                    <CustomButton href={`/poems/${id}`}/>
                </Card>
            </Fade>
        </Col>
    let Content = () => {
        if (all == 'empty'){
            return <LazyHero  isCentered={true}>
                <Spinner animation="border"/>
            </LazyHero> 
        }
        else {
        return(
            <Row lx={2} lg={2}  md={2} sm={1} >
                { all.map((x) => <Box key={x.name} name={x.name} id={x.id}/>)}
            </Row>)
       
        }
    }

    return (
        <Container>
            <Navigation/>
            <Content/>
        </Container>
    )
}

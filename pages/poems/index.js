import React from 'react'
import {Container, Row, Col, Button ,Card, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 
export default function Poems(props) {
    return (
        <Container>
            <Row>
                <Button href="/">
                    Home
                </Button>
            </Row>
            <Row>
                
                    {
                        [
                            {name:'a' , content:''}
                            ,{name:'حرم الحجاج' , content:
                            `
أحـرم الـحـجـاج عـن لـذاتـهـم بعض الشهور ***** وأنا المحرم عن لذاته كل الدهور
كـيـف  لا  احـرم دأبـاً نـاحراً هدي السرور***** وأنا في مشعر الحزن على رزء الحسين
                            
حـق  لـلـشـارب مـن زمـزم حـب الـمصطفى ***** أن يرى حق بنيه حرماً معتكفا
ويـواسـيـهـم  والا حـاد عـن باب الصفا ***** وهو من اكبر حوبٍ عند رب الحرمين
یا حبیبی یا حسین نور عینی یا حسین
فـمـن  الـواجـب  عـيـناً لبس سربال الأسى ***** واتخاذ النوح ورداً كل صبح ومسا
واشـتـعـال  الـقـلـب أحزانا تذيب الأنفسا ***** وقليل تتلف الأرواح في رزء الحسين
                            
لـسـت انـسـاه طـريـداً عـن جـوار المصطفى ***** لائذاً بالقبة النوراء يشكوا اسفا
`}
                        ].map((x) => 
                        <Col key={x.name} ><Card key={x.name} >
                            <Card.Body className="text-center" as="h1">
                                 {x.name}
                                 <br/>  
                                 <Button variant="outline-dark" style={{width:'200px'}} href={`/poems/`+x.name}>أقرء</Button>  
                            </Card.Body>
                            {/* <Card.Body style={{textOverflow:'ellipsis'}} as="pre" className="fs-6">
                            {x.content}
                            </Card.Body> */}
                            
                        </Card>
                        </Col>)
                    }
               
            </Row>
        </Container>
    )
}

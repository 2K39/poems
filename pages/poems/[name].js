import React from 'react'
import {Container, Row, Col, Button , Alert} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function One(props) {
 let x =   {name:'حرم الحجاج' , content:
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
    return (
        <Container className="text-left">
            <Row>
                <Col>
                <h1 > {x.name}</h1>
                </Col>

            </Row>
            <Row>
                <Col>
                <pre className="text-right ltr h4">
                    {x.content}
                </pre>
                </Col>
            </Row>
        </Container>
    )
}

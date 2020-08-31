import React from 'react';
import { Jumbotron, Container,Row,Col } from 'react-bootstrap';


function Hope (props){
return(
<Jumbotron>
    <Container>
        <Row>
            <Col>
            {props.title && <h1>{props.title} </h1> }
            {props.subTitle && <h1>{props.subTitle} </h1> }

            </Col>
        </Row>
    </Container>
</Jumbotron>
);

}
export default Hope;
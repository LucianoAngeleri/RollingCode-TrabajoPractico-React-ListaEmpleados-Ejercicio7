import { Card, Badge, Col, Row } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";
const EmpleadoRow = ({fullName, title, department, pic}) => {
      
    return (
        <Card className="p-3">
            <Row className="g-3">
            <EmpleadoAvatar pic={pic} fullName={fullName}/>
            <Col sm={9}>
                <Card.Body>
                    <Card.Title>
                        {fullName}
                    </Card.Title>
                    <div className="d-flex flex-row align-items-center gap-3">
                        <Card.Subtitle>
                            {title}
                        </Card.Subtitle>
                        <Badge bg="info">{department}</Badge>
                    </div>
            </Card.Body>
            </Col>
            </Row>
        </Card>
    );
};

export default EmpleadoRow;
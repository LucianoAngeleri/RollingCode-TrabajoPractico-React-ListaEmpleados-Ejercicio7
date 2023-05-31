import { Card, Badge, Col, Row } from "react-bootstrap";
import { useState } from "react";
import EmpleadoAvatar from "./EmpleadoAvatar";
const EmpleadoRow = () => {

    // const [fullName,setFullName] = useState("")
    // const [title,setTitle] = useState("")
    // const [department,setDepartment] = useState("")
    // const [pic,setPic] = useState("")

    let empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "/empleado01.svg" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "/empleado02.svg" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "/empleado03.svg" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "/empleado04.svg" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "/empleado05.svg" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "/empleado06.svg" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "/empleado07.svg" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "/empleado08.svg" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "/empleado09.svg" },
      ]
      
    return (
        <Card className="p-3">
            <Row className="g-3">
            <EmpleadoAvatar pic={empleados[0].pic} fullName={empleados[0].fullName}/>
            <Col sm={9}>
                <Card.Body>
                    <Card.Title>
                        {empleados[0].fullName}
                    </Card.Title>
                    <div className="d-flex flex-row align-items-center gap-3">
                        <Card.Subtitle>
                            {empleados[0].title}
                        </Card.Subtitle>
                        <Badge bg="info">{empleados[0].department}</Badge>
                    </div>
            </Card.Body>
            </Col>
            </Row>
        </Card>
    );
};

export default EmpleadoRow;
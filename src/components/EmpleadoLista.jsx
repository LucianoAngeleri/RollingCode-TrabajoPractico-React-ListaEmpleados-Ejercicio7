import { Row } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";
const EmpleadoLista = () => {

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
        <Row sm={12} className="g-4 px-5">
        {
            empleados.map((empleado) => (
            <EmpleadoRow fullName={empleado.fullName} title={empleado.title} department={empleado.department} pic={empleado.pic} key={empleado.id}></EmpleadoRow>
            ))
        }
        </Row>
    );
};

export default EmpleadoLista;
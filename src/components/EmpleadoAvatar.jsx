import { Col } from "react-bootstrap";

const EmpleadoAvatar = ({pic,fullName}) => {
    return (
        <Col>
            <img src={pic} alt={fullName} className="img-top rounded-circle"/>
        </Col>
    );
};

export default EmpleadoAvatar;
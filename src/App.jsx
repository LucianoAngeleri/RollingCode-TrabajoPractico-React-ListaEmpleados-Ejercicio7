import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";
import EmpleadoLista from './components/EmpleadoLista';

function App() {
  return (
    <>
    <Container>
      <h1 className="display-1">Ejercicio 7</h1>
      <h2 className="display-2">Lista de Empleados</h2>
      <hr />
    </Container>
    <Container>
      <EmpleadoLista/>
    </Container>
    </>
  )
}

export default App

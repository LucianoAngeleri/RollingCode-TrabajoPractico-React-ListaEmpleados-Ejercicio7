import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";
import EmpleadoLista from './components/EmpleadoLista';

function App() {
  return (
    <>
    <Container className="py-4">
      <h1 className="display-1">Ejercicio 7</h1>
      <h2 className="display-2">Lista de Empleados</h2>
      <hr />
    </Container>
    <Container className="py-4">
      <EmpleadoLista/>
    </Container>
    <footer className='text-bg-dark text-center py-5'>&copy; Todos los Derechos Reservados 2023</footer>
    </>
  )
}

export default App

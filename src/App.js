import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container fluid>
        <Hero/>
      </Container>
    </div>
  );
}

export default App;

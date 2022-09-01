import './index.css';
import './App.css';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

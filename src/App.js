import './index.css';
import './App.css';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Email from './Components/Email';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Projects />
      <Footer />
      <Email />
    </div>
  );
}

export default App;

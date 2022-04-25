
import './App.css';
import Row from './components/Row'
import requests from './requests'
function App() {
  return (
    <div className="App">
     
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
    </div>
  );
}

export default App;
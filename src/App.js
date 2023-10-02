import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div>
      <Nav/>

      <Banner fetchUrl={requests.fetchRandom}/>
     
      <Row title="Disney Movies" fetchUrl={requests.fetchDisney} />
      <Row title="Star Wars" fetchUrl={requests.fetchStarWars} />
      <Row title="Pixar Movies" fetchUrl={requests.fetchPixar} />
      <Row title="Disney Series" fetchUrl={requests.fetchDisneySeries} />
      <Row title="The Simpsons" fetchUrl={requests.fetchSimpsons} />
      <Row title="Musicales" fetchUrl={requests.fetchMusicPixar} />
      <Row title="Disney Classics" fetchUrl={requests.fetchDisneyClassics} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;

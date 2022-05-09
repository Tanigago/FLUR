import './App.css';

//import { Routes, Route } from 'react-router-dom';

import Tag from './components/Tag/Tag';
import TagsList from './components/tagsList/TagsList.jsx';

const tagsMockup = [{path: "/uno/cualquiera", name: "Cosas" }, {path: "/uno/cualquiera", name: "Cosas" }]

function App() {
  return (
    <>
      <Tag tagPath="/ruta/de/prueba" tagText="Texto de etiqueta"/>
      <TagsList tagsArray = {tagsMockup}/>
    </>
  );
}

export default App;

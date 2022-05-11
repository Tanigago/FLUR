import './App.css';

//import { Routes, Route } from 'react-router-dom';

import Tag from './components/Tag/Tag';
import TagsList from './components/tagsList/TagsList.jsx';

const tagsMockup = [
  {path: "/verano", name: "Verano", delbutton: false },
  {path: "/festival", name: "Festival", delbutton: false },
  {path: "/playa", name: "Playa", delbutton: false }
]

function App() {
  return (
    <>
      <Tag tagPath="/ruta/de/colección" tagText="Nombre de etiqueta"/>
      <TagsList tagsArray = {tagsMockup}/>
    </>
  );
}

export default App;

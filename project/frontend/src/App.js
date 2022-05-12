import './App.css';
import './components/MultiSquare/collectionSquare.module.css';

//import { Routes, Route } from 'react-router-dom';

import Tag from './components/Tag/Tag';
import TagsList from './components/tagsList/TagsList.jsx';
import MultiSquare from './components/MultiSquare/MultiSquare';
import { Link } from 'react-router-dom';

const tagsMockup = [
  {path: "/verano", name: "Verano", delbutton: false },
  {path: "/festival", name: "Festival", delbutton: false },
  {path: "/playa", name: "Playa", delbutton: false }
]


function App() {
  return (
    <>
      <Tag tagPath="/ruta-de-coleccion" tagText="Nombre de etiqueta"/>

      <TagsList tagsArray = {tagsMockup}/>

      <MultiSquare>
        <div className='collectionSquare'>
          <span className='collectionName'><Tag tagPath="/ruta-de-coleccion" tagText="Nombre de etiqueta"/></span>
          <p className='collectionCounter'>1 items</p>
        </div>
      </MultiSquare>

      {
        tagsMockup.map(
          (item, idx) => <MultiSquare>
                    <div className='collectionSquare'>
                      <p className='collectionName'>{item.name}</p>
                      <p className='collectionCounter'>{idx} items</p>
                    </div>
                  </MultiSquare>
        )
      }
    </>
  );
}

export default App;

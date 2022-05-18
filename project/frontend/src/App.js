import './App.css';

import { Link, Routes, Route } from 'react-router-dom';
import Tag from './components/Tag/Tag';
import TagsList from './components/tagsList/TagsList.jsx';
import MultiSquare from './components/MultiSquare/MultiSquare';
import NewSquare from './components/MultiSquare/NewSquare/NewSquare';
import CollectionSquare from './components/MultiSquare/CollectionSquare/CollectionSquare';
import EditSquare from './components/MultiSquare/EditSquare/EditSquare';

const tagsMockup = [
  { path: "/verano", name: "Verano", delbutton: false },
  { path: "/festival", name: "Festival", delbutton: false },
  { path: "/playa", name: "Playa", delbutton: false }
]


function App() {
  return (
    <>
      <h1>Componente Tag</h1>
      <Tag tagPath="/ruta-de-coleccion" tagText="Nombre de etiqueta" />

      <h1>Componente TagList</h1>
      <TagsList tagsArray={tagsMockup} />

      <h1>Componente MultiSquare</h1>
      <MultiSquare>
        <CollectionSquare/>
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

      <h1>Componente NewSquare</h1>
      <MultiSquare>
        <NewSquare/>
      </MultiSquare>

      <h1>Componente EditSquare</h1>
      <MultiSquare>
        <EditSquare/>
      </MultiSquare>

    </>
  );
}

export default App;


/*
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news/" element={<News/>}>
          <Route path=":id" element={<News/>}/>
        </Route>
        <Route path="/shop/" element={<Shop/>}/>
      </Routes>
*/
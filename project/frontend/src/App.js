import './App.css';

import { Link, Routes, Route } from 'react-router-dom';
import Tag from './components/Tag/Tag';
import TagsList from './components/tagsList/TagsList.jsx';
import MultiSquare from './components/MultiSquare/MultiSquare';
import NewSquare from './components/MultiSquare/NewSquare/NewSquare';
import CollectionSquare from './components/MultiSquare/CollectionSquare/CollectionSquare';
import EditSquare from './components/MultiSquare/EditSquare/EditSquare';
import ItemSquare from './components/MultiSquare/ItemSquare/ItemSquare';
import MenuBottom from './components/MenuBottom/MenuBottom';

const tagsMockup = [
  { path: "/verano", name: "Verano", delbutton: false, count: 0 },
  { path: "/festival", name: "Festival", delbutton: true, count: 5 },
  { path: "/playa", name: "Playa", delbutton: false, count: 666 },
  { path: "/pijamaparty", name: "Pijama", delbutton: false, count: 1 }
]


function App() {
  return (
    <>
      <h1>Componente Tag</h1>
      <Tag tagPath="/ruta-de-coleccion" tagText="Nombre de etiqueta" />

      <h1>Componente TagList</h1>
      <TagsList tagsArray={tagsMockup} />

      <h1>Componente MultiSquare/CollectionSquare</h1>
      <MultiSquare>
        <CollectionSquare  tagPath={"tusmuertos"} tagText={"Si, claro"} count={42} pluralize={true}/>
      </MultiSquare>

      {
        tagsMockup.map(
          (item, idx) => <MultiSquare>
            <CollectionSquare  tagPath={item.path} tagText={item.name} count={item.count} pluralize={item.count > 1 || item.count===0}/>
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

      <h1>Componente ItemSquare</h1>
      <MultiSquare>
        <ItemSquare/>
      </MultiSquare>

      <h1>Componente MenuBottom</h1>
      <MenuBottom/>

      <h1>Componente MenuTop</h1>



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
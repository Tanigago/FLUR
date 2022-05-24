import './App.css';

import { useContext, useEffect } from 'react';
import { Context } from './storage/Sharedtorage';
import AddtoCollection from './views/AddtoCollection/AddtoCollection';
import Collection from './views/Collection/Collection';
import Collections from './views/Collections/Collections';
import EditCollection from './views/EditCollection/EditCollection';
import EditItem from './views/EditItem/EditItem';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import NewCollection from './views/NewCollection/NewCollection';
import Profile from './views/Profile/Profile';
import Register from './views/Register/Register';
import Start from './views/Start/Start';
import Today from './views/Today/Today';

import { Link, Route, Routes, useNavigate } from 'react-router-dom';

const tagsMockup = [
  { path: "/verano", name: "Verano", delbutton: false, count: 0 },
  { path: "/festival", name: "Festival", delbutton: true, count: 5 },
  { path: "/playa", name: "Playa", delbutton: false, count: 666 },
  { path: "/pijamaparty", name: "Pijama", delbutton: false, count: 1 }
]


function App() {
  /*const [ store ] = useContext(Context);
  const navigate = useNavigate();

  useEffect(
    ()=>{
      if (store.id !== 0) {
        navigate("/home/")
      } else {
        navigate("/start/")
      }
    },
    [store]
  )
*/
  return (
    <div>
       <header>
        <h1>
          FLUR
        </h1>
        <nav>
          <Link to={"/"}><button>Home</button></Link>
          <Link to={"/start/"}><button>Start</button></Link>
          <Link to={"/collection/"}><button>Collection</button></Link>
          <Link to={"/collections/"}><button>Collections</button></Link>
          <Link to={"/editCollection/"}><button>EditCollection</button></Link>
          <Link to={"/editItem/"}><button>EditItem</button></Link>
          <Link to={"/login/"}><button>Login</button></Link>
          <Link to={"/newCollection/"}><button>NewCollection</button></Link>
          <Link to={"/profile/"}><button>Profile</button></Link>
          <Link to={"/register/"}><button>Register</button></Link>
          <Link to={"/today/"}><button>Today</button></Link>
        </nav>
      </header>

      <Routes>
        <Route path='/home/' element={<Home/>}/>
        <Route path='/start/' element={<Start/>}/>
        <Route path='/collection/' element={<Collection/>}/>
        <Route path='/collections/' element={<Collections/>}/>
        <Route path='/editCollection/' element={<EditCollection/>}/>
        <Route path='/editItem/' element={<EditItem/>}/>
        <Route path='/login/' element={<Login/>}/>
        <Route path='/newCollection/' element={<NewCollection/>}/>
        <Route path='/profile/' element={<Profile/>}/>
        <Route path='/register/' element={<Register/>}/>
        <Route path='/today/' element={<Today/>}/>
      </Routes>
    </div>
  );
}

export default App;





/*
import { Link, Routes, Route } from 'react-router-dom';
import Tag from './components/Tag/Tag';
import TagsList from './components/tagsList/TagsList.jsx';
import MultiSquare from './components/MultiSquare/MultiSquare';
import NewSquare from './components/MultiSquare/NewSquare/NewSquare';
import CollectionSquare from './components/MultiSquare/CollectionSquare/CollectionSquare';
import EditSquare from './components/MultiSquare/EditSquare/EditSquare';
import ItemSquare from './components/MultiSquare/ItemSquare/ItemSquare';
import MenuBottom from './components/MenuBottom/MenuBottom';
import MenuTop from './components/MenuTop/MenuTop';
/*import Register from './components/Register/Register';
<h1>Componente Tag</h1>
      <Register/>
      
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
      <MenuTop insitu={"Verano"} goback={"Home"}/>

    </>
  );
}

export default App;
*/
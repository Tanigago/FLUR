import style from './App.css';

import { useContext } from 'react';
import { Context } from './services/SharedStorage';
import { Link, Route, Routes } from 'react-router-dom';

import AddtoCollection from './views/AddtoCollection/AddtoCollection';
import Collection from './views/Collection/Collection';
import Collections from './views/Collections/Collections';
import CollectionHorList from './components/CollectionHorList/CollectionHorList';
import EditCollection from './views/EditCollection/EditCollection';
import EditItem from './views/EditItem/EditItem';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import NewCollection from './views/NewCollection/NewCollection';
import Profile from './views/Profile/Profile';
import Register from './views/Register/Register';
import Start from './views/Start/Start';
import Today from './views/Today/Today';
import MenuBottom from './components/MenuBottom/MenuBottom';
import MenuTop from './components/MenuTop/MenuTop';
import TagsList from './components/tagsList/TagsList';
import Tag from './components/Tag/Tag';


function App() {

  const { states } = useContext(Context)

  return (
    <div className={style.bodyFullHeight}>
       <header>
        <h1>
          FLUR
        </h1>
        <nav>
          <Link to={"/start/"}><button>Start</button></Link>
          <Link to={"/register/"}><button>Register</button></Link>
          <Link to={"/login/"}><button>Login</button></Link>
          <Link to={"/home/"}><button>Home</button></Link>
          <Link to={"/today/"}><button>Today</button></Link>
          <Link to={"/collections/"}><button>Collections</button></Link>
          <Link to={"/collection/"}><button>Collection</button></Link>
          <Link to={"/collectionhorlist/"}><button>Collection Horizontal List</button></Link>
          <Link to={"/addtocollection/"}><button>AddtoCollection</button></Link>
          <Link to={"/editCollection/"}><button>EditCollection</button></Link>
          <Link to={"/newCollection/"}><button>NewCollection</button></Link>
          <Link to={"/editItem/"}><button>EditItem</button></Link>
          <Link to={"/profile/"}><button>Profile</button></Link>
          <Link to={"/tag/"}><button>Tag</button></Link>
          <Link to={"/taglist/"}><button>TagList</button></Link>
        </nav>
      </header>
      <div >

        <Routes>
          <Route path='/start/' element={<Start/>}/>
          <Route path='/register/' element={<Register/>}/>
          <Route path='/login/' element={<Login/>}/>
          <Route path='/home/' element={<Home/>}/>
          <Route path='/today/' element={<Today tagsArray={states.colecciones}/>}/>
          <Route path='/collections/' element={<Collections collectionArray={states.colecciones}/>}/>
          <Route path='/collection/:id' element={<Collection/>}/>
          <Route path='/collectionhorlist/' element={<CollectionHorList collectionArray={states.colecciones}/>}/> 
          <Route path='/addtocollection/' element={<AddtoCollection  collectionArray={states.colecciones}/>}/>
          <Route path='/editCollection/' element={<EditCollection/>}/>
          <Route path='/newCollection/' element={<NewCollection/>}/>
          <Route path='/editItem/' element={<EditItem tagsArray={states.colecciones}/>}/>
          <Route path='/profile/' element={<Profile user={states.userData[0]}/>}/>
          <Route path='/tag/' element={<Tag coleccion={states.colecciones[0]}/>}/>
          <Route path='/taglist/' element={<TagsList collectionArray={states.colecciones}/>}/>
        </Routes>

        <MenuBottom/>
      </div>
    </div>
  );
}

export default App;
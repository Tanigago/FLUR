import style from './App.css';

import { useContext, useEffect, useState } from 'react';
import { Context } from './storage/Sharedtorage';
import { Link, Route, Routes } from 'react-router-dom';

import AddtoCollection from './views/AddtoCollection/AddtoCollection';
import Collection from './views/Collection/Collection';
import Collections from './views/Collections/Collections';
import CollectionList from './components/CollectionList/CollectionList';
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
    <div>
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
          <Link to={"/collectionlist/"}><button>Collection List</button></Link>
          <Link to={"/addtocollection/"}><button>AddtoCollection</button></Link>
          <Link to={"/editCollection/"}><button>EditCollection</button></Link>
          <Link to={"/newCollection/"}><button>NewCollection</button></Link>
          <Link to={"/editItem/"}><button>EditItem</button></Link>
          <Link to={"/profile/"}><button>Profile</button></Link>
          <Link to={"/tag/"}><button>Tag</button></Link>
          <Link to={"/taglist/"}><button>TagList</button></Link>
        </nav>
      </header>
      <body className={style.bodyFullHeight}>
        <MenuTop insitu={"Verano"} goback={"Home"}/>

        <Routes>
          <Route path='/start/' element={<Start/>}/>
          <Route path='/register/' element={<Register/>}/>
          <Route path='/login/' element={<Login/>}/>
          <Route path='/home/' element={<Home/>}/>
          <Route path='/today/' element={<Today/>}/>
          <Route path='/collections/' element={<Collections collectionArray={states.colecciones}/>}/>
          <Route path='/collection/' element={<Collection/>}/>
          <Route path='/collectionlist/' element={<CollectionList collectionArray={states.colecciones}/>}/> 
          <Route path='/addtocollection/' element={<AddtoCollection  collectionArray={states.colecciones}/>}/>
          <Route path='/editCollection/' element={<EditCollection/>}/>
          <Route path='/newCollection/' element={<NewCollection/>}/>
          <Route path='/editItem/' element={<EditItem tagsArray={states.colecciones}/>}/>
          <Route path='/profile/' element={<Profile/>}/>
          <Route path='/tag/' element={<Tag/>}/>
          <Route path='/taglist/' element={<TagsList/>}/>
        </Routes>

        <MenuBottom/>
      </body>
    </div>
  );
}

export default App;
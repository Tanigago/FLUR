import './App.css';

import { useContext, useEffect, useState } from 'react';
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
import MenuBottom from './components/MenuBottom/MenuBottom';
import MenuTop from './components/MenuTop/MenuTop';

import { Link, Route, Routes, useNavigate } from 'react-router-dom';

function App() {

  return (
    <div>
       <header>
        <h1>
          FLUR
        </h1>
        <nav>
          <Link to={"/home/"}><button>Home</button></Link>
          <Link to={"/addtocollection/"}><button>AddtoCollection</button></Link>
          <Link to={"/collection/"}><button>Collection</button></Link>
          <Link to={"/collections/"}><button>Collections</button></Link>
          <Link to={"/editCollection/"}><button>EditCollection</button></Link>
          <Link to={"/editItem/"}><button>EditItem</button></Link>
          <Link to={"/login/"}><button>Login</button></Link>
          <Link to={"/newCollection/"}><button>NewCollection</button></Link>
          <Link to={"/profile/"}><button>Profile</button></Link>
          <Link to={"/register/"}><button>Register</button></Link>
          <Link to={"/start/"}><button>Start</button></Link>
          <Link to={"/today/"}><button>Today</button></Link>
        </nav>
      </header>

      <MenuTop insitu={"Verano"} goback={"Home"}/>

      <Routes>
        <Route path='/home/' element={<Home/>}/>
        <Route path='/addtocollection/' element={<AddtoCollection/>}/>
        <Route path='/collection/' element={<Collection/>}/>
        <Route path='/collections/' element={<Collections/>}/>
        <Route path='/editCollection/' element={<EditCollection/>}/>
        <Route path='/editItem/' element={<EditItem/>}/>
        <Route path='/login/' element={<Login/>}/>
        <Route path='/newCollection/' element={<NewCollection/>}/>
        <Route path='/profile/' element={<Profile/>}/>
        <Route path='/register/' element={<Register/>}/>
        <Route path='/start/' element={<Start/>}/>
        <Route path='/today/' element={<Today/>}/>
      </Routes>

      <MenuBottom/>

    </div>
  );
}

export default App;
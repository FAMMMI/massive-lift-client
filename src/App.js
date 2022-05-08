import './App.css';
import About from './Pages/About/About';

import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import AddInvertory from './Pages/AddInventory/AddInventory';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import SingleInventory from './Pages/SingleInventory/SingleInventory';
import MyItems from './Pages/MyItems/MyItems';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/product/:id' element={<RequireAuth>
          <SingleInventory></SingleInventory>
        </RequireAuth>}></Route>
        <Route path='/addInventory' element={<RequireAuth>
          <AddInvertory></AddInvertory>
        </RequireAuth>}></Route>
        <Route path='/manageInventory' element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>
        <Route path='/myitems' element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

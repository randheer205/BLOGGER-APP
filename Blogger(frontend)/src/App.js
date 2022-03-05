/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Signin_user from "./user/signin_user"
import Signup_user from './user/signup_user';
import Update_user from './user/update_user';
import Create_blog from './blogs/create_blog';
import Main_blog from './blogs/main_blog';
import Update_blog from './blogs/update_blog';
import Open_blog from './blogs/blog_open';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Display_User from './user/display_user';

function App() {
  return (
    <div>
      <h1 className="header">Blogger</h1>
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<Signup_user/>}></Route>
          <Route path="signin" element={<Signin_user/>}></Route>
          <Route path="updateuser" element={<Update_user/>}></Route>
          <Route path="createblog" element={<Create_blog/>}></Route>
          <Route path="getblog" element={<Main_blog/>}></Route>
          <Route path="updateblog" element={<Update_blog/>}></Route>
          <Route path="openblog" element={<Open_blog/>}></Route>
          <Route path="viewprofile" element={<Display_User/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

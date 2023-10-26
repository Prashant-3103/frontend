import './App.css';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';
import HomePage from './pages/home/HomePage';
import { Route,Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import ProfilePage from './pages/profile/ProfilePage';
import AdminLayout from './pages/admin/AdminLayout';
import Admin from './pages/admin/screens/Admin';
import Comments from './pages/admin/screens/comments/Comments';
import ManagePost from './pages/admin/screens/posts/ManagePost';
import EditPost from './pages/admin/screens/posts/EditPost';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path='/' element={<HomePage/>}/>
        <Route  path='/blog/:slug' element={<ArticleDetailPage/>}/>
        <Route  path='/register' element={<RegisterPage/>}/>
        <Route  path='/login' element={<LoginPage/>}/>
        <Route  path='/profile' element={<ProfilePage/>}/>
        <Route  path='/admin' element={<AdminLayout/>}>
          <Route index element={<Admin/>}/>
          <Route path='comments' index element={<Comments/>}/>

          <Route path='posts/manage' index element={<ManagePost/>}/>
          <Route path='posts/manage/edit/:slug' index element={<EditPost/>}/>
        </Route>

      </Routes>
<Toaster/>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import axios from 'axios'
import SignIn from './pages/SignIn';
import Layout from './components/Layout';
import AppProviderContext from './context/AppContext';
import { Toaster } from 'react-hot-toast'
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Blog from './pages/Blog/Blog';
import Article from './pages/Blog/pages/Article';
import Doctor from './pages/Doctor/Doctor';
import DoctorSignUp from './pages/Doctor/pages/DoctorSignUp';
import Profile from './pages/Profile/Profile';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <AppProviderContext>
      <BrowserRouter>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/" exact element={<IntroPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/Profile/:id" element={<Profile />} />
            <Route path="/blog/articles/:id" element={<Article />} />
          </Route>
          <Route path="/doctor/sign-in" element={<DoctorSignUp />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </AppProviderContext>
  )
}

export default App

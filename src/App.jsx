import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import Loading from './pages/Loading';
import socket from './utils/socket';
import { UseAppContext } from './context/AppContext';
const IntroPage = lazy(() => import("./pages/IntroPage"))
const SignIn = lazy(() => import("./pages/SignIn"))
const Layout = lazy(() => import("./components/Layout"))
const SignUp = lazy(() => import("./pages/SignUp"))
const Home = lazy(() => import("./pages/Home"))
const Blog = lazy(() => import("./pages/Blog/Blog"))
const Article = lazy(() => import("./pages/Blog/pages/Article"))
const Doctor = lazy(() => import("./pages/Doctor/Doctor"))
const DoctorSignUp = lazy(() => import("./pages/Doctor/pages/DoctorSignUp"))
const Profile = lazy(() => import("./pages/Profile/Profile"))
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"))
const LayoutDashboard = lazy(() => import("./pages/dashboard/LayoutDashboard"))
const Appointment = lazy(() => import("./pages/dashboard/pages/Appointment"))
const Messages = lazy(() => import("./pages/dashboard/pages/Messages/Messages"))
const StoreDashBoard = lazy(() => import("./pages/dashboard/pages/Store"))
const Store = lazy(() => import("./pages/Store/Store"))
const StoreCategory = lazy(() => import("./pages/Store/pages/Category"))
const SearchPage = lazy(() => import("./pages/Search/SearchPage"))

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  const { user } = UseAppContext()
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });
    if (user) {
      socket.emit('add-user', user?._id)
    }
  }, [user])

  return (
    <Suspense fallback={<Loading />} >
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
            <Route path="/store" element={<Store />} />
            <Route path="/store/category/:id" element={<StoreCategory />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
          <Route path="/dashboard" element={<LayoutDashboard />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/appointment" element={<Appointment />} />
            <Route path="/dashboard/messages" element={<Messages />} />
            <Route path="/dashboard/store/create" element={<StoreDashBoard />} />
          </Route>
          <Route path="/doctor/sign-in" element={<DoctorSignUp />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App

import { BrowserRouter,Routes, Route } from "react-router-dom";
import LandingPage from './compoenents/landingPage';
import './App.css'
import Signin from "./compoenents/auth/Signin";
import Signup from "./compoenents/auth/Signup";
import Appbar from "./compoenents/Appbar";
import HomePage from "./compoenents/home";
import {
  RecoilRoot,
  useSetRecoilState,

} from 'recoil';
import { userState } from "./store";
import axios from "axios";
import { ThemeProvider } from "./ShadcnCompoenent/theme-prvider"
import Fundamentals from "./compoenents/fundamentals";
import Watchlist from "./compoenents/watchlist";
import Sentiment from "./compoenents/sentiment";

function App() {
  return<>
   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RecoilRoot>
      <BrowserRouter>
        <InintUser/>
        <Appbar/>
        <Routes>
          <Route element={<LandingPage/>} path="/"/>

          <Route element={<Signup/>} path="/signup"/>

          <Route element={<Signin/>} path="/signin"/>

          <Route element={<HomePage/>} path="/home"/>

          <Route element={<Fundamentals/>} path="/stockFundamentals/:symbol"/>


          <Route element={<Watchlist/>} path="/watchlist"/>

          <Route element={<Sentiment/>} path="/sentiment"/>


        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </ThemeProvider>
  </>
}

function InintUser(){
  const setUserState = useSetRecoilState(userState)

  async function getusername (){
    const response = await axios.get('http://localhost:3000/me',{
      headers:{
        Authorization:localStorage.getItem('token')
      }

    })
    
    setUserState({username:response.data.username,email:response.data.email})
  }

  getusername()
  
  return<></>
}

export default App

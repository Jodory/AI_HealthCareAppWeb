import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Join from './pages/Join';
import Login from './pages/Login';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { clearUser, setUser } from './store/userReducer';
import Main from './pages/Main';
import StopWatch from './pages/StopWatch';



function App() {
  const dispatch = useDispatch();  
  const {isLoading, currentUser} = useSelector((state)=> state.user);
  useEffect(()=>{
    const unsubscribe  = onAuthStateChanged(getAuth(), (user)=>{
      if(!!user){
        dispatch(setUser(user));
      }else{
        dispatch(clearUser())
      }
    })
    return () => unsubscribe();
  }, [dispatch])
  return (
      <Routes>
        <Route path="/" element={<StopWatch/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={ currentUser ? <Navigate to="/"/> :<Join/>}/>
        <Route path="/stopwatch" element={<StopWatch/>}/>
      </Routes>
  );
}

export default App;

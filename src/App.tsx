import React from 'react';
import './App.css';
import TodoApp from './components/TodoApp';
import { Routes , Route, Navigate, Link } from 'react-router-dom'
import { UserProvider } from './context/userProvider'

function App() {
  return (
    <>    
    <UserProvider>
      <Routes>
        <Route path="/todo" element={ <TodoApp/> } />            
        <Route path="/*" element={ <Navigate to="/todo"/> } />            
      </Routes>
    </UserProvider>
    </>
  );
}

export default App;

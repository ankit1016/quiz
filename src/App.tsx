import React from 'react';
import Home from './pages/home';
import QuizRule from './pages/quizRule';
import { Route, Routes } from 'react-router';
import Questions from './pages/questions';
import Result from './pages/result';

function App() {
  return (
    <>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/rule' element={<QuizRule/>}/>
       <Route path='/play' element={<Questions/>}/>
       <Route path="/result" element={<Result/>}/>
      </Routes>
   
    </>
  );
}

export default App;

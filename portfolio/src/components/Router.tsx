import React from 'react';
import { Routes, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';

function Router(){
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='' element={<></>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    )
}

export default Router;
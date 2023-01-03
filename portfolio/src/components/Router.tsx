import React from 'react';
import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import AboutPage from '../pages/AboutPage';
import OtherPage from '../pages/OtherPage';
import ProjectsPage from '../pages/ProjectsPage';

function Router(){
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/projects' element={<ProjectsPage/>}/>
            <Route path='/other' element={<OtherPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    )
}

export default Router;
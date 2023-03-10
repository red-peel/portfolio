import React from 'react';
import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ProjectsPage from '../pages/ProjectsPage';
import ConstructionPage from '../pages/ConstructionPage';

function Router(){
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/projects' element={<ProjectsPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
            <Route path="oops" element={<ConstructionPage/>}/>
        </Routes>
    )
}

export default Router;
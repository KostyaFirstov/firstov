import React from 'react'
import './styles/index.scss'
import MainLayout from './layouts/MainLayout'
import { Route, Routes } from 'react-router-dom'
import ProjectPage from './pages/ProjectPage'
import Projects from './pages/Projects'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import Services from './pages/Services'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/project/:title' element={<ProjectPage />} />
					<Route path='/services' element={<Services />} />
					<Route path='/about' element={<About />} />
					<Route path='/contacts' element={<Contacts />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App

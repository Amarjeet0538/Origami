import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

const App = () => {

    return (
	<div className="h-screen bg-red-500  bg-contain sm:px-[1%] sm:py-[1%]">
		<h1 className='text-white text-[36px] font-semibold'>Origami </h1>

		<Routes>
			<Route path='/' element={<HomePage/>}/>
			<Route path='/login' element={<LoginPage/>}/>
			<Route path='/profile' element={<ProfilePage/>}/>
		</Routes>
 	</div>
    )
}

export default App

/* bg-[url('./assets/bgImage.jpg')]*/
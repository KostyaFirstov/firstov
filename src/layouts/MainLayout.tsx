import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'

const MainLayout = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default MainLayout

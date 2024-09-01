'use client'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ToastifyContainer() {
	return (
		<ToastContainer
			position='bottom-right'
			autoClose={4000}
			hideProgressBar={true}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			theme='colored'
		/>
	)
}

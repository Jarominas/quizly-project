'use client'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastifyContainer = () => (
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

export default ToastifyContainer

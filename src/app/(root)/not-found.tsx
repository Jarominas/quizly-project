import Link from 'next/link'
import React from 'react'

export default function NotFound() {
	return (
		<div className='flex flex-col justify-center items-center mt-20'>
			<h1>Oops! Cannot find page</h1>
			<Link
				href='/'
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
			>
				Go back home
			</Link>
		</div>
	)
}

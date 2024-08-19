import Link from 'next/link'
import React from 'react'

export default function LoginButton() {
	return (
		<Link href='/login' className='hidden md:flex text-gray-900 hover:text-blue-500'>
			Login
		</Link>
	)
}

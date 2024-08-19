import Link from 'next/link'
import React from 'react'
import IconButton from './IconButton'

export default function SignupButton() {
	return (
		<Link href='/signup' className='text-gray-900 hover:text-blue-500'>
			<IconButton text='Sign Up' variant='primary' width='xl' />
		</Link>
	)
}

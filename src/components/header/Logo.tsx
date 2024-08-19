import Link from 'next/link'
import React from 'react'

export default function Logo() {
	return (
		<div className='flex items-center'>
			<Link href='/' className='text-xl font-bold text-gray-900'>
				MyLogo
			</Link>
		</div>
	)
}

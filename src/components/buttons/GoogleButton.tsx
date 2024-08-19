import Image from 'next/image'
import React from 'react'

export default function GoogleButton() {
	return (
		<button className='inline-flex  w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2.5 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60'>
			<Image
				src='https://www.svgrepo.com/show/475656/google-color.svg'
				alt='Google'
				width={18}
				height={18}
			/>
			Continue with Google
		</button>
	)
}

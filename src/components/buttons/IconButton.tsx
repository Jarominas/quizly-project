import Link from 'next/link'
import React from 'react'

interface IconButtonProps {
	text: string
	icon?: React.ReactNode
	className?: string
	type?: 'button' | 'submit' | 'reset'
	onClick?: () => void
	variant: 'primary' | 'secondary' | 'tertiary'
	disabled?: boolean
	width: 'xl' | 'md' | 'xs'
}

export default function IconButton({
	text,
	icon,
	className,
	type,
	onClick,
	variant,
	disabled,
	width,
}: IconButtonProps) {
	const variantWidth = {
		xl: 'max-w-full',
		md: 'w-4/12',
		xs: 'w-2/12',
	}[width]

	return (
		<button className={`btn btn-${variant} ${variantWidth} flex justify-start`} type={type} onClick={onClick}>
			{icon && <span className='w-6 h-6'>{icon}</span>}
			<span className=''>{text}</span>
		</button>
	)
}

import React from 'react'

const styles = {
	imgContainer: 'flex grow hidden lg:block relative fl-column',
	img: 'absolute inset-0 w-full h-full object-cover px-4 py-4',
}

export default function ImageContainer() {
	return (
		<div className={styles.imgContainer}>
			<img src='/images/backgrounds/SignInOverlay.jpg' alt='auth-bg' className={styles.img} />
		</div>
	)
}

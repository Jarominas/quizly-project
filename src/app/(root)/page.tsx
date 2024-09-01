'use client'
import React from 'react'
import Header from '../../components/header/Header'
import { useAuth } from '@/hooks/useAuth'

export default function Home() {
	const { user } = useAuth()
	console.log('home page', user)

	return <div>Home</div>
}

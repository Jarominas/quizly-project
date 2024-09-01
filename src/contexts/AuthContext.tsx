'use client'
import { axiosInstance } from '@/configs/axiosInstance'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

const AuthContext = React.createContext({
	user: null,
	login: (email: string, password: string) => {},
	logout: () => {},
	loading: false,
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter()
	const [user, setUser] = React.useState(null)
	const [loading, setLoading] = React.useState(false)

	const login = async (email: string, password: string): Promise<{ token: string | null; user?: any }> => {
		setLoading(true)
		try {
			const response = await axiosInstance.post('/auth/login', {
				email,
				password,
			})

			const { token, user } = response.data
			if (token) {
				localStorage.setItem('token', token)
				setUser(user)
				setLoading(false)
			}
			return { token, user }
		} catch (error) {
			console.error(error)
			return { token: null }
		}
	}

	const logout = () => {
		localStorage.removeItem('token')
		setUser(null)
	}

	React.useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			const checkUserStatus = async () => {
				setLoading(true)
				try {
					const response = await axiosInstance.get('/auth/status')
					setUser(response.data)
					setLoading(false)
				} catch (error) {
					console.error(error)
					router.push('/')
				}
			}
			checkUserStatus()
			toast('Welcome back', { type: 'success' })
		}
	}, [])

	return <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>
}

export default AuthContext

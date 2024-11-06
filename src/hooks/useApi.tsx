import React from 'react'
import { axiosInstance } from '@/configs/axiosInstance'
import { toast } from 'react-toastify'

const useApi = () => {
	const [data, setData] = React.useState(null)
	const [loading, setLoading] = React.useState(false)
	const [error, setError] = React.useState(null)

	const fetchData = React.useCallback(async (url: string, options = {}) => {
		setLoading(true)
		try {
			const response = await axiosInstance(url, options)

			setData(response.data)
			setLoading(false)

			return response.data
		} catch (error: any) {
			setError(error)
			toast(error.message, { type: 'error' })
			setData(null)
			setLoading(false)
		}
	}, [])

	return { data, loading, error, fetchData }
}

export default useApi

import CircularProgress from '@mui/material/CircularProgress'
import { Stack } from '@mui/material'

export default function LoadingSpinner() {
	return (
		<Stack alignSelf='center' sx={{ mt: 5, flex: 1 }}>
			<CircularProgress />
		</Stack>
	)
}

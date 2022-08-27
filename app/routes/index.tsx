import { styled } from 'baseui'
import { Check } from 'baseui/icon'
import { DisplayLarge } from 'baseui/typography'
import { SnackbarProvider, useSnackbar, DURATION } from 'baseui/snackbar'
import { Button } from 'baseui/button'

export const Centered = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
})

export const VStack = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
})

const Demo = () => {
	const { enqueue } = useSnackbar()

	const handleRemixClick = () => {
		enqueue({
				message: 'Remix Love Base Web',
				startEnhancer: ({ size }) => <Check size={size} />
			},
			DURATION.short,
		)
	}

	return (
		<Centered>
			<VStack>
				<Button onClick={handleRemixClick}>Remix</Button>
				<DisplayLarge>❤️</DisplayLarge>
				<DisplayLarge>Base Web</DisplayLarge>
			</VStack>
		</Centered>
	)
}

const Home = () => {
	return (
		<SnackbarProvider>
			<Demo />
		</SnackbarProvider>
	)
}

export default Home
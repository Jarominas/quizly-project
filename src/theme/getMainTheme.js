import { getDesignTokens } from './themePrimitives';
import {
    inputsCustomizations,
    dataDisplayCustomizations,
    feedbackCustomizations,
    navigationCustomizations,
    surfacesCustomizations,
} from './customizations';

export default function getMainTheme(mode) {
    return {
        ...getDesignTokens(mode),
        components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        backgroundImage:
                            mode === 'dark'
                                ? 'radial-gradient(at 50% 50%, #6B48FF 0%, #2A2D59 0%)'
                                : 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
                        backgroundRepeat: 'no-repeat',
                        minHeight: '100vh',
                    },
                },
            },
        },
    };
}

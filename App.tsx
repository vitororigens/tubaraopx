import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native'
//
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import theme from './src/theme';
import { ToastProvider } from 'react-native-toast-notifications';

export default function App() {
  const [fontLoader] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (

    <ThemeProvider theme={theme}>
      <ToastProvider>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent

        />
        {fontLoader ? <Routes /> : <Loading />}
      </ToastProvider>
    </ThemeProvider>

  );
}
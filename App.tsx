import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native'
//
import { Loading } from './src/components/Loading';
import theme from './src/theme';
import { SingUp } from './src/screens/SingUp';

export default function App() {
  const [fontLoader] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
   
    <ThemeProvider theme={theme}>
      <StatusBar 
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
      
      />
        {fontLoader ? <SingUp/> : <Loading/>}
    </ThemeProvider>
   
  );
}
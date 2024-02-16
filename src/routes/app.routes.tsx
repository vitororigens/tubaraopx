import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Start } from '../screens/Start';
import { RegisterOrSingUp } from '../screens/RegisterOrSingUp';
import { Register } from '../screens/Register';
import { SingUp } from '../screens/SingUp';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen
                name='start'
                component={Start}
            />

            <Screen
                name='registerorsingup'
                component={RegisterOrSingUp}
            />

            <Screen
                name='register'
                component={Register}
            />

            <Screen
                name='singup'
                component={SingUp}
            />
        </Navigator>
    )
}

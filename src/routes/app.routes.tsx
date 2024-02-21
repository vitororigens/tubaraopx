import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Start } from '../screens/Start';

import { Register } from '../screens/Register';

import { Home } from '../screens/Home';
import { RegisterOrsignUp } from '../screens/RegisterOrSingUp';
import { SignUp } from '../screens/SingUp';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen
                name='start'
                component={Start}
            />

            <Screen
                name='registerorsignUp'
                component={RegisterOrsignUp}
            />

            <Screen
                name='register'
                component={Register}
            />

            <Screen
                name='signup'
                component={SignUp}
            />
            <Screen
                name='home'
                component={Home}
            />
        </Navigator>
    )
}

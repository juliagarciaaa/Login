import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import {ScreenLogin, ScreenRegister} from '../screens'
type LoginStackParamList = {
    Login: undefined
    Register: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
    navigation: LoginScreenNavigationProp
}
export function LoginNavigation(){
    const Stack = createStackNavigator<LoginParamList>()
    return (
        <Stack.Navigator id='Login' screenOpition={{ headerShown: false}}>
            <Stack.Screen name='Login' component={ScreenLogin} />
            <Stack.Screen name= 'Register' component={ScreenRegister} />
        </Stack.Navigator>
    )
}
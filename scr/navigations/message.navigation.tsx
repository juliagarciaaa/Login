import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Mensagem } from "../screens/Mensagem";
import { CadMessage } from '../screens/CadMensagem';
import React from 'react';

type MessageStackParamList = {
    Message: undefined
    CadMessage: undefined
}

type MessageScreenNavigationProp = StackNavigationProp<MessageStackParamList, 'Message'>
export type MessageTypes={
    navigation: MessageScreenNavigationProp
}
export function MessageNavigation(){
    const Stack = createStackNavigator<MessageStackParamList>()
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Message" component={Mensagem}/>
            <Stack.Screen name="CadMessage" component={CadMessage}/>
        </Stack.Navigator>
    )
}
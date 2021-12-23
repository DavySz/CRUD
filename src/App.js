import React from 'react'
import { Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';

//navegação
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

//screens
import { UserList } from './screens/UserList'
import { UserForm } from './screens/UserForm'
import { Provider } from './context/UsersContext';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='UserList' screenOptions={screenOptions}>
                    <Stack.Screen
                        name="UserList" component={UserList}
                        options={({ navigation }) => {
                            return {
                                title: 'Lista de usuários',
                                headerRight: () => (
                                    <Button
                                        type="clear"
                                        onPress={() => navigation.navigate('UserForm')}
                                        icon={<Ionicons name="add" size={25} color="white" />}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen
                        name="UserForm" component={UserForm}
                        options={{
                            title: 'Formulário de usuários'
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}
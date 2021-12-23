import React, { useContext, useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import UsersContext from '../../context/UsersContext'
import { styles } from './styles'

export function UserForm({ navigation, route }) {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
    return (

        <View style={styles.form}>
            <Text>Nome</Text>
            <TextInput
                onChangeText={name => setUser({ ...user, name })}
                placeholder='Informe o nome'
                value={user.name}
                style={styles.input}
            />

            <Text>Email</Text>
            <TextInput
                onChangeText={email => setUser({ ...user, email })}
                placeholder='Informe o email'
                value={user.email}
                style={styles.input}
            />

            <Text>Url do Avatar</Text>
            <TextInput
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder='Informe a URL do avatar'
                value={user.avatarUrl}
                style={styles.input}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}
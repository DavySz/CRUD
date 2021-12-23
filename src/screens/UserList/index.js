import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'

import { ListItem, Avatar } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements'

import UsersContext from '../../context/UsersContext';

export function UserList(props) {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user) {
        return (
            Alert.alert('Excluir Usuário', `Deseja excluir ${user.name}?`, [
                {
                    text: 'Sim',
                    onPress() {
                        dispatch({
                            type: 'deleteUser',
                            payload: user

                        })
                    }
                },
                {
                    text: 'Não'
                }
            ])
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm')}>
                <Avatar
                    title={user.name}
                    Subtitle={user.email}
                    source={{ uri: user.avatarUrl }}
                />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content style={{ flexDirection: 'row' }}>
                    <Button
                        onPress={() => {
                            props.navigation.navigate('UserForm', user);
                        }}
                        type="clear"
                        icon={<MaterialIcons name="edit" size={25} color="orange" />}
                    />
                    <Button
                        onPress={() => { confirmUserDeletion(user) }}
                        type="clear"
                        icon={<MaterialIcons name="delete" size={25} color="red" />}
                    />
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View >
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}
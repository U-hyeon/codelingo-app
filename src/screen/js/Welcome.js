import React from 'react';
import { View, Text, Button } from 'react-native';
// 첫화면, 로그인 요청
const Welcome = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to codeLingo!</Text>
            <Button
                title="Start"
                onPress={() => {
                    if(!false) {
                        navigation.navigate('Login')
                    } 
                    else {
                        navigation.navigate('Main')
                    }
                }
            }
            />
        </View>
    )
};

export default Welcome;
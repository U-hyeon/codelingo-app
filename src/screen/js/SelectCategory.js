import React from 'react';
import { View, Text, Button } from 'react-native';
// 문제 주제 선택
const SelectCategory = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Please enter user infomation</Text>
            <Button
                title="Go to Main"
                onPress={() => navigation.navigate('Main')} // 'Details' 화면으로 전환
            />
        </View>
    )
};

export default SelectCategory;
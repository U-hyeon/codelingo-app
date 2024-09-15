import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet  } from 'react-native';
// 진행도 표시, 문제시작버튼
const MainPage = ({route, navigation}) => {
    const { progress } = route.params;
    
    return (
        <View>
            <div className="progressBoard" >
                {/* 각 카테고리 진행도 표시, 클릭하여 해당 카테고리로 이동 */}
                {/* <a className="progressBlock" for="category in categories" onClick={해당카테고리로 이동}>
                    <div className="progressBar">
            
                    </div>
                    <div className="progressCategory">

                    </div>
                </a> */}
                <TouchableOpacity
                style={styles.button}
                title="Go to Welcome Page"
                onPress={() => {
                    navigation.navigate('Welcome')
                }} // 'Details' 화면으로 전환
                >
                    <View style={styles.progressContainer}>
                        <View style={[styles.progressBar, { height: `${progress}%` }]} />
                    </View>

                    <Text 
                    style={styles.buttonText}
                    className="progressCategory">
                        progress category name
                    </Text>
                </TouchableOpacity>
            </div>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',  // 텍스트와 그래프가 나란히 배치되도록 설정
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: '#007bff',
      borderRadius: 8,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    progressContainer: {
      width: 10,  // 수직 막대 그래프의 너비
      height: 50,  // 수직 막대 그래프의 최대 높이
      backgroundColor: '#e0e0e0',
      borderRadius: 5,
      overflow: 'hidden',  // 막대가 넘어가지 않도록 설정
      marginLeft: 10,
    },
    progressBar: {
      width: '100%',  // 수직 막대 그래프의 너비는 100%로 고정
      backgroundColor: '#76c7c0',  // 진행률의 색상
    },
  });

export default MainPage;
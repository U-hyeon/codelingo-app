import logo from './logo.svg';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './App.css';
import Welcome from './screen/js/Welcome';
import MainPage from './screen/js/MainPage';
import SelectCategory from './screen/js/SelectCategory';
import Login from './screen/js/Login';

const Stack = createStackNavigator();

function App() {
  const [progress, setProgress] = useState(50); // 초기 진척도 50%

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" 
        component={MainPage} 
        initialParams={{ progress }}/>
        <Stack.Screen name="SelectCategory" component={SelectCategory} />
        {/* <Stack.Screen name="Category" component={Category} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          welcome to codeLingo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
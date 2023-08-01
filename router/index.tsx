import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../views/home';
import Mine from '../views/mine';
const Tabs: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons color={color} size={size} name={'home'} />
          ),
        }}
        name={'首页'}
        component={Home}
      />
      <Tab.Screen name={'我的'} component={Mine} />
    </Tab.Navigator>
  );
};

export default Tabs;

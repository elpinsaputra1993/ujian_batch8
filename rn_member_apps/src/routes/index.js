import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {list, tambah, search} from '../pages/pages';

const Stackk = createStackNavigator();

const Routes = () => {
  return (
    <Stackk.Navigator>
      <Stackk.Screen name="Tambah Data" component={tambah}></Stackk.Screen>
      <Stackk.Screen name="List Data" component={list}></Stackk.Screen>
      <Stackk.Screen name="Search Data" component={search}></Stackk.Screen>
    </Stackk.Navigator>
  );
};

export default Routes;

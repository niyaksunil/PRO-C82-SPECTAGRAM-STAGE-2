import * as React from "react";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigator = ()=>{
    return(
    <Tab.Navigator screenOptions = {({
        route 
    })=>({
        tabBarIcon : ({focused,size,color})=>{
            let iconName
            if(route.name === 'Feed'){
                iconName = focused?'book': 'book-outline'
            }
            else if(route.name === 'CreatePost'){
                iconName = focused?'create': 'create-outline'
            }
            return(
                <Ionicons name = {iconName} size = {size} color = {color}></Ionicons>
            )
        }
    })}
    tabBarOptions = {{activeTintColor : 'blue' , inactiveTintColor : 'green'}}

    >
        <Tab.Screen name = "Feed" component = {Feed}/>
        <Tab.Screen name = "CreatePost" component = {CreatePost}/>

    </Tab.Navigator>
    )
}

export default BottomTabNavigator ;




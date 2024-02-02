import * as React from 'react'
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
function HomeScreen({navigation}){
    return(
        <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
            <button
             onPress={()=>navigation.navigate('Notification')}
             title='Go to notifications'
            />
        </View>
    );
}

function Notification({navigation}){
    return(
        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button onPress={() => navigation.goBack()} title='Go back Home Screen'/>
        </View>
    )
}

const Drawer = createDrawerNavigator();
const Lab6 = () => {
    return (<NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='Notifications' component={Notification} />

        </Drawer.Navigator>

    </NavigationContainer>
    );
};

export default Lab6;

    


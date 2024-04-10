import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import AddTodo from "../Screens/AddTodo";
import ShowData from '../Screens/ShowData';
import { Text } from 'react-native';
import { addToDo } from '../Redux/reducers/counterSlice';

const Stack = createNativeStackNavigator();
const {items} = addToDo();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="AddTodo" 
                    component={AddTodo}
                />
                <Stack.Screen 
                    name="ShowData" 
                    component={ShowData}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


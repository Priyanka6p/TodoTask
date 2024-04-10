import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "../Redux/reducers/counterSlice";
import { storeData } from "../utils/asyncStorage";
import { getData } from "../utils/asyncStorage";
import ButtonComp from "../Components/ButtonComp";
import { addData } from "../Redux/actions/actions";


export default function AddTodo({navigation}){

const todoArr=useSelector((state)=>state.toDo);
console.log(todoArr);
   
const [value, setValue] = useState('');
const dispatch = useDispatch();

const formData={id:Date.now(),value:value}

const Add=()=>{
    if(!value.trim())
    {
        return;
    }
    storeData('todoData',[formData,...todoArr]);
    // dispatch(addToDo([formData,...todoArr]));   
    addData([formData,...todoArr])             
}

const ShowTodoData=()=>{
    getData();
    navigation.navigate('ShowData');
}

return(
    <View style={styles.container}>

        <Text style={styles.headingTxt}>
            Enter elements
        </Text>

        <TextInput 
            value={value}
            onChangeText={txt => setValue(txt)}
            placeholder="Enter element"
            style={styles.input}
            multiline={true}
        />

            <ButtonComp 
                btnText="Add"
                onPress={Add}
            />

            <ButtonComp 
                btnText="Show Data"
                onPress={ShowTodoData}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor:'#EDECFC',
        justifyContent:'center', 
        alignItems:'center',
    },
    headingTxt: {
        fontSize:20,
        marginBottom:20
    },
    input: {
        width:200, 
        height:50,
        borderWidth: 1,
        borderRadius:20,
        fontSize: 18,
        padding:10,
        borderBottomColor: '#7471BD',
        borderTopColor: '#7471BD',
    },
});
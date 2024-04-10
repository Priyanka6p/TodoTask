import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet, ScrollView , Button} from "react-native";
import counterSlice from "../Redux/reducers/counterSlice";
import { delTodo } from "../Redux/reducers/counterSlice";
import { useDispatch } from "react-redux";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { delData } from "../Redux/actions/actions";
import { getData, removeData } from "../utils/asyncStorage";

export default function ShowData(){

    const dispatch = useDispatch();
    const items = useSelector(state=>state.toDo);
    console.log(items,'items');

    const deleteData =(id)=>{
        const tempData = items.filter((item)=>item.id!==id);
            dispatch(delTodo(id))
            // delData(id);
            // removeData('todoData');
    };
    
    return(
        <View style={styles.container}>
            {/* <Button title="Show" onPress={getData("todoData")}/> */}
            <FlatList 
                showsVerticalScrollIndicator={false} 
                data={items}
                horizontal={false}
                renderItem={({item})=>(
                    <View style={styles.dataRow}>
                        <Text style={styles.itemTxt}>
                            {item.value}
                        </Text>
                        <TouchableOpacity
                            onPress={deleteData}>
                            <MaterialCommunityIcons name="delete-empty" size={44} color="white" style={styles.delBtn}/>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#EDECFC',
        justifyContent:'center', 
        alignItems:'center'
    },
    delBtn: {
        marginLeft: 20,
        backgroundColor: '#7471BD',
        width: 58,
        height: 70,
        borderRadius:20,
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'middle',
        textAlign: 'center'
    },
    itemTxt:{
        fontSize: 18,
        color: 'white',
        backgroundColor: '#7471BD',
        height: 70,
        width: 270,
        borderRadius: 20,
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    dataRow: {
        backgroundColor: '#EDECFC',
        marginTop: 10,
        height:70,
        width:350,
        borderRadius:20,
        flexDirection: 'row',
    }
});
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonComp = ({  
    btnText, 
    onPress=()=>{}
}) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.addBtn}>            
            <Text style={styles.btnTxt}>
                {btnText}
            </Text>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    addBtn: {
        height:50,
        width:150,
        backgroundColor: '#7471BD',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 20
    },
    btnTxt: {
        color: 'white',
        fontSize: 18
    }
});

export default ButtonComp;

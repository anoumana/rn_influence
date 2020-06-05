import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
    <View style={styles.containerStyle}>
        <Text style={styles.nameStyle}> {result.name}</Text>
        <Text style={styles.nameStyle}> {result.description} </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    containerStyle : {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 14
    }
});

export default ResultsDetail;
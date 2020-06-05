import React from   'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './resultsDetail';
//import {withNavigation} from 'react-navigation';

//const ResultsList = ({title, filteredResults, navigation}) => {
   const ResultsList = ({title, filteredResults}) => {

    // console.log("In Res list", title);
    // console.log("In Res list2", filteredResults);
    // if(!filteredResults.length){
    //     return null;
    // }
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data = {filteredResults}
            keyExtractor={(filteredResult) => filteredResult.id}
            renderItem={({item}) => {
                 return (
                    <TouchableOpacity >
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                )
            }}
        />

    </View>
};

const styles = StyleSheet.create({
    titleStyle: { 
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container : {
        marginBottom: 10
    }
});

//export default withNavigation(ResultsList);
export default ResultsList;
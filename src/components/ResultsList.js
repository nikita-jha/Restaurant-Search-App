import React from 'react'; 
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native'; 
import ResultsDetail from './ResultsDetail'; 
import { withNavigation } from 'react-navigation'; 

//remember, we have been using the term result instead of business/restaurant
const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){
        return null; 
    }
    
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
            //item is going to be the result or the actual business item
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Results', { id: item.id})}>
            <ResultsDetail result={item}  />
            </TouchableOpacity>
            );
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
    container: {
        marginBottom: 10
    }
}); 

export default withNavigation(ResultsList); 

//withNavigation is a special feature that allows the child component, ResultsList, to directly
//access navigation from App.js without having to pass it through the parent. 
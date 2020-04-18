import React from 'react'; 
import {Text, View, Image, StyleSheet} from 'react-native'; 

const ResultsDetail = ({ result }) => {
    return <View style={styles.viewContainer}>
        <Image style={styles.picture} source={{ uri: result.image_url }}></Image>
        <Text style={styles.name}>{result.name} </Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
}

const styles = StyleSheet.create({
    viewContainer: {
        marginLeft: 15
    },
    picture: {
        width: 250,
        height: 120,
        borderRadius: 4, 
        marginBottom: 5
    }, 

    name: {
        fontWeight: 'bold', 
    }, 


}); 

export default ResultsDetail; 
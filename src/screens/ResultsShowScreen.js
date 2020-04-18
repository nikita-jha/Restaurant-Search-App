import React, { useState, useEffect } from 'react'; 
import {View, StyleSheet, Image, Text, FlatList} from 'react-native'; 
import yelp from '../API/yelp'; 
const ResultsShowScreen = ({ navigation }) => {
    
    const [result, setResult] = useState(null); 
    const id = navigation.getParam('id'); 

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data); 
        //console.log(response); 
    }

    useEffect(() => {
        getResult(id); 
    }, [])

    if(!result){
        return null; 
    }

    return <View style={styles.view}>
        <Text style={styles.text}>{result.name}</Text>
        <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
            //item = exact photo url
            return <Image style={styles.image}source={{ uri: item}}/>
        }}
        />
        <Text style={styles.text}>Location: </Text>
        <Text>{result.location.display_address[0] + " " + result.location.display_address[1]}</Text>
    </View>
}

const styles = StyleSheet.create({
    image: {
        height: 180,
        width: 180
    },
    text: {
        color: '#483D8B', 
        fontSize: 20,
        fontWeight: 'bold'
    }, 
    view: {
        backgroundColor: "#E6E6FA"
    }
}); 

export default ResultsShowScreen; 
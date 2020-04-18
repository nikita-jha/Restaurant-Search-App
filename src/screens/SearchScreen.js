import React, {useState} from 'react'; 
import { Text, StyleSheet,View, ScrollView} from 'react-native'; 
import SearchBar from '../components/SearchBar'; 
import useResults from '../hooks/useResults'; 
import ResultsList from '../components/ResultsList'; 

const SearchScreen = () => {
    const [term, setTerm] = useState(''); 
    const [searchApi, results, errorMessage] = useResults(); 

    //console.log(results)

    const filterResultByPrice = (price) => {
        //price === '$' || '$$' || '$$$'
        return results.filter(results => {
            return results.price === price; 
        })
    }


    return (
        <View style={styles.view}>
        <SearchBar 
        term={term} 
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={()=> searchApi(term)}/>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
        <ResultsList 
        results={filterResultByPrice('$')} 
        title="Cost Effective" 
        />
        <ResultsList 
        results ={filterResultByPrice('$$')} 
        title="Bit Pricier"
        />
        <ResultsList 
        results={filterResultByPrice('$$$')}
        title="Big Splender"
        />
        </ScrollView>
        </View>
 
    )

}; 

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "#E6E6FA"
    }
}); 

export default SearchScreen; 

//Instead of passing a view to encapsulate everything, you can just pass opening and closing
//tags, which will allow you to have an empty element that contains everything but does not have
//any of the styling issues that come with a view

//The minute you year the words, we have to do something and update the content on the screen,
//think immediately about useState. Anyime we want content to update, we must use state

//ALWAYS PASS PROPS FROM CHILD TO PAREMT    

//useEffect is a hook that allows us to run some snippet of code just one time when our component
//is first rendered to the screen
    //useEffect(() => {}) = run the arrow function every time the component is rendered
    //useEffect(() => {}, [ ]) = run the arrow function only when the component is first rendered
    //useEffect(() => {}, [value]) = run the arrow function only when the component is first 
    //rendered, and when the 'value' changes
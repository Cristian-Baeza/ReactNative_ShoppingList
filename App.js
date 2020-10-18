import React, {useState} from 'react';
import { StyleSheet, Text, View, StleSheet, FlatList, Alert } from 'react-native';
import { v4 as uuid4} from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';


const App = () => {
  const [items, setItems] = useState([
    {id: uuid4(), text: 'Milk'},
    {id: uuid4(), text: 'Eggs'},
    {id: uuid4(), text: 'Bread'},
    {id: uuid4(), text: 'Juice'},
  ])

 // adding delete function

const deleteItem = (id) => {
  setItems(prevItems => {
    return prevItems.filter(item => item.id != id);
  })
}

//add the add item function here 
// a little bit of authentication so you cant add an empty value

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    } else {
      setItems(prevItems => {
        return [{id: uuid4(), text}, ...prevItems];
      });  
    }
  };

  return (
    <View style={styles.container}>
            {/* using props for title for practice. not necessary */}
      <Header title="SHOPPING LIST"/>

      <AddItem addItem={addItem} />

      <FlatList
        data={items}
        renderItem={({item}) => (
           <ListItem item={item} deleteItem={deleteItem}/>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, 
    // added padding top because iphone 11 would block the top
  }
}); 


export default App;
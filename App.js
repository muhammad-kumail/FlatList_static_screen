import React, { Component } from "react";
import { Icon, SearchBar, Header } from 'react-native-elements';
import {
  Button,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  TextInput,

} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayforFlatList : [
        { key: 0, surah: "Al-Faatiha", verse: "Maccan-Verses:7" },
        { key: 1, surah: "Al-Baqara", verse: "Medinan-Verses:286" },
        { key: 2, surah: "Aal-i-Imran", verse: "Medinan-Verses:200" },
        { key: 3, surah: "An-Nisaa", verse: "Medinan-Verses:176" },
        { key: 4, surah: "Al-Maaida", verse: "Medinan-Verses:120" },
        { key: 5, surah: "Al-An\"aam", verse: "Maccan-Verses:165" },
        { key: 6, surah: "Al-A\"raaf", verse: "Meccan-Verses:206" },
        { key: 7, surah: "Al-Anfaal", verse: "Medinan-Verses:75" },
        { key: 8, surah: "At-Tawba", verse: "Medinan-Verses:129" },
        { key: 9, surah: "Yunus", verse: "Meccan-Verses:109" },
        { key: 10, surah: "Hud", verse: "Meccan-Verses:123" },
        { key: 11, surah: "Yusuf", verse: "Meccan-Verses:111" },
        { key: 12, surah: "Ar-Ra\"d", verse: "Medinan-Verses:43" },
        { key: 13, surah: "Ibrahim", verse: "Meccan-Verses:52" },
        { key: 14, surah: "Al-Hijr", verse: "Meccan-Verses:99" },
        { key: 15, surah: "An-Nahl", verse: "Meccan-Verses:128" },
        { key: 16, surah: "Al-Israa", verse: "Meccan-Verses:111" },
        { key: 17, surah: "Al-Kahf", verse: "Meccan-Verses:110" },
        { key: 18, surah: "Maryam", verse: "Meccan-Verses:98" },
        { key: 19, surah: "Taa-Haa", verse: "Meccan-Verses:135" }
      ],

    };
    this.searcharray=this.state.arrayforFlatList;
  }

  searchFilterFunction = text => {
    this.setState({value: text});
  const newData = this.searcharray.filter(item => {
    const itemData = `${item.surah.toUpperCase()}`;

     const textData = text.toUpperCase();
     return itemData.indexOf(textData) > -1;
  });
  this.setState({arrayforFlatList: newData});
};
  componentDidMount() {}


  actSearch(text) {}

  actionTextBlur() {}


  render() {
    const { search } = this.state;
    return (

      <View style={{flex: 10}}>

        <View style={{justifyContent: "center", alignItems: "center"}}>
          <Header
            placement="center"
            leftComponent={
              <Icon
              name='heart'
              size={20}
              type='fontisto'
              color='#fff'
              onPress={() => console.log('Heart pressed')}/>
            }
            centerComponent={
              <Text h1 style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18
              }}> Tafheem UL Quran </Text>
            }
            rightComponent={
              <Icon
              name='settings'
              size={25}
              type='ionicons'
              color='#fff'
              onPress={() => console.log('setting pressed')}/>
            }
            containerStyle={{
              backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 40,
              height: 75
            }}
          />
        </View >

        <View style={{}}>
          <SearchBar
            placeholder="Search Surah Name"
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={true}
            value={this.state.value}
            inputStyle={{backgroundColor: 'white'}}
            inputContainerStyle={{backgroundColor: 'white'}}
            containerStyle={{
              backgroundColor: 'white',
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              borderColor: 'white',
            }}
          />
        </View>

        <View
          style={{
            flex: 10,
            backgroundColor: "#ffffff",
            justifyContent: "center",
          }}>

          <FlatList
            data={this.state.arrayforFlatList}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => console.log(item.surah)}>

              <View
                style={{
                  flex: 9,
                  padding: 0,
                  marginBottom: 0,
                  marginTop: 4,
                  marginLeft: 6,
                  marginRight: 6,
                  borderColor:'black',
                  borderRadius: 5,
                  borderWidth: 1,
                  justifyContent: "center",
                  flexDirection: 'row',
                }}>

                <View style={{
                  flex: 1.3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'yellow'
                }}>
                <Text style={{fontSize: 20}}>{item.key+1}</Text>
                </View>

                <View style={{
                  flex: 7.7,
                  backgroundColor: "#ddffff",
                }}>
                  <Text
                    style={{
                      color: "black",
                      margin: 0,
                      paddingBottom: 0,
                      padding: 5,
                      fontStyle: "Bold",
                      fontSize: 20,
                  }}>{item.surah}</Text>

                  <Text
                    style={{
                      backgroundColor: "#ddffff",
                      margin: 0,
                      paddingTop: 0,
                      padding: 5,
                  }}>{item.verse}</Text>
                </View>

              </View>
              </TouchableOpacity>
            )}
          />
        </View>

      </View>
    );
  }
}
export default App;

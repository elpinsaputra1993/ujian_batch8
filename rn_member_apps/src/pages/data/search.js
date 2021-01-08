import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import CardView from 'react-native-cardview';
import {TextInput} from 'react-native-gesture-handler';

const SearchData = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [members, setMembers] = useState([]);
  const [atribute, setAtribute] = useState('');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    if (atribute == '' && keyword == '') {
      axios.get('http://192.168.43.10:3000/member/').then((res) => {
        const members = res.data.data;
        console.log('tes : ' + JSON.stringify(res.data.data));
        setMembers(members);
      });
    } else {
      axios
        .get('http://192.168.43.10:3000/member/' + `${atribute}/${keyword}`)
        .then((res) => {
          const members = res.data.data;
          console.log('tes : ' + JSON.stringify(res.data.data));
          setMembers(members);
        });
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Atribute"
        style={{borderWidth: 1, marginBottom: 5}}
        value={atribute}
        onChangeText={(value) => setAtribute(value)}></TextInput>
      <TextInput
        placeholder="Keyword"
        style={{borderWidth: 1, marginBottom: 5}}
        value={keyword}
        onChangeText={(value) => setKeyword(value)}></TextInput>
      <TouchableOpacity onPress={getData} style={styles.btnSimpan}>
        <Text style={styles.textBtn}>Search</Text>
      </TouchableOpacity>
      <ScrollView>
        {members.map((member, i) => {
          return (
            <CardView
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}
              margin={10}>
              <View style={styles.itemContainer}>
                <View style={styles.desc}>
                  <TouchableOpacity>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                      Name : {member.name}
                    </Text>
                  </TouchableOpacity>
                  <Text>Email : {member.email}</Text>
                  <Text>Phone : {member.phone}</Text>
                  <Text>Address : {member.address}</Text>
                </View>
              </View>
            </CardView>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SearchData;

const styles = StyleSheet.create({
  btnSimpan: {
    backgroundColor: 'lightblue',
    padding: 10,
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 20,
    color: 'white',
  },
  delete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginRight: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  desc: {
    marginLeft: 18,
    flex: 1,
  },
});

import React, {useState, PureComponent} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';
import qs from 'qs';

const TambahData = ({navigation}) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const GoTo = () => {
    navigation.navigate('List Data');
  };
  const GoSearch = () => {
    navigation.navigate('Search Data');
  };
  const simpan = () => {
    // const data = new FormData();
    // data.append('name', name);
    // data.append('email', email);
    // data.append('phone', phone);
    // data.append('address', address);
    //   .post('http://192.168.43.91/CI-tes/api/mahasiswas/tambah', data, {

    let dataJsStr = qs.stringify({
      name: name,
      email: email,
      phone: phone,
      address: address,
    });
    axios
      .post('http://192.168.43.10:3000/member', dataJsStr, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      })
      .then(function (response) {
        alert(JSON.stringify(response));
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
      })
      .catch(function (error) {
        alert(error);
        console.log(error);
      });
  };

  return (
    <View>
      <Text style={{textAlign: 'center', margin: 10}}> Form Input Member</Text>
      <TextInput
        placeholder="Input Name"
        style={{borderWidth: 1, marginBottom: 5}}
        value={name}
        onChangeText={(value) => setName(value)}></TextInput>
      <TextInput
        placeholder="Input Email"
        style={{borderWidth: 1, marginBottom: 5}}
        value={email}
        onChangeText={(value) => setEmail(value)}></TextInput>
      <TextInput
        placeholder="Input Phone"
        style={{borderWidth: 1, marginBottom: 5}}
        value={phone}
        onChangeText={(value) => setPhone(value)}></TextInput>
      <TextInput
        placeholder="Input Address"
        style={{borderWidth: 1, marginBottom: 5}}
        value={address}
        onChangeText={(value) => setAddress(value)}></TextInput>
      <TouchableHighlight onPress={simpan} style={styles.btnSimpan}>
        <Text style={styles.textBtn}>Simpan</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={GoTo} style={styles.btnSimpan}>
        <Text style={styles.textBtn}>List Data</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={GoSearch} style={styles.btnSimpan}>
        <Text style={styles.textBtn}>Search Data</Text>
      </TouchableHighlight>
    </View>
  );
};

export default TambahData;

const styles = StyleSheet.create({
  btnSimpan: {
    backgroundColor: 'lightblue',
    marginTop: 10,
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
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

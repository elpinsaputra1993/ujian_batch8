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

const ListData = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('http://192.168.43.10:3000/member/').then((res) => {
      const members = res.data.data;
      console.log('tes : ' + JSON.stringify(res.data.data));
      setMembers(members);
    });
  };

  return (
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
  );
};

export default ListData;

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

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Datadiri = ({ navigation }) => {
  const [nama, setNama] = useState('');
  const [hobi, setHobi] = useState('');

  // Mengatur judul header dinamis dengan nama pengguna
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          {nama && <Text style={styles.userName}>{`Nama: ${nama}`}</Text>}
        </View>
      ),
    });
  }, [navigation, nama]);

  const handleSubmit = () => {
    // Mengirim data Nama dan Hobi ke halaman lain
    navigation.navigate('Home', { nama, hobi });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Masukkan data diri:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama"
        value={nama}
        onChangeText={(text) => setNama(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Hobi"
        value={hobi}
        onChangeText={(text) => setHobi(text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '80%',
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  headerRightContainer: {
    marginRight: 10,
  },
  userName: {
    color: 'black',
    fontSize: 16,
  },
});
export default Datadiri;

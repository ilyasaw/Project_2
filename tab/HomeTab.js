import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeTab = ({ route, navigation }) => {
    const { nama, hobi } = route.params || {};
  
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
  
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Selamat datang pada aplikasi ini</Text>
        {nama && hobi && <Text style={styles.userData}>{`Hobi Anda: ${hobi}`}</Text>}
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcomeText: {
      color: 'black',
      fontSize: 18,
      marginBottom: 20,
    },
    userData: {
      color: 'black',
      fontSize: 16,
    },
    headerRightContainer: {
      marginRight: 10,
    },
    userName: {
      color: 'black',
      fontSize: 16,
    },
  });
  
export default HomeTab;

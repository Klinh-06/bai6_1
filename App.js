import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {

  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(null);

  const validatePhone = (value) => {
    setPhone(value);

    const regex = /^0\d{9}$/;

    if (regex.test(value)) {
      setError('');
      setIsValid(true);
    } else {
      setError('Số điện thoại không đúng định dạng. Vui lòng nhập lại');
      setIsValid(false);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Đăng nhập</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={validatePhone}
      />

      {error !== '' && (
        <Text style={styles.error}>{error}</Text>
      )}

      {isValid !== null && (
        <Text style={styles.status}>
          Số điện thoại hiện tại: {isValid ? 'Hợp lệ' : 'Không hợp lệ'}
        </Text>
      )}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#fff'
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30
  },

  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    fontSize: 16
  },

  error: {
    color: 'red',
    marginTop: 5
  },

  status: {
    marginTop: 10,
    fontSize: 15
  },

  button: {
    marginTop: 30,
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center'
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }

});

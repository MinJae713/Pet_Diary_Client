import { StyleSheet, Pressable, TextInput, Image, View } from 'react-native';

// eslint-disable-next-line react/prop-types
const InputBox = ({ placeholder, value, clearText, ...props }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          {...props}
          style={styles.textInput}
          placeholder={placeholder}
          value={value}
        ></TextInput>
        <Pressable onPress={clearText}>
          <Image
            source={require('../../assets/images/clearTextInputButton.png')}
            style={[styles.clearButton, !value && styles.noInputValue]}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
    backgroundColor: '#F6F2F2',
    borderRadius: 7,
    paddingHorizontal: 10,
    width: '100%',
  },
  textInput: {
    flex: 1,
    fontSize: 17,
    fontFamily: 'pretendard-regular',
  },
  clearButton: {
    width: 21,
    height: 21,
  },
  noInputValue: {
    width: 0,
    height: 0,
  },
});

export default InputBox;

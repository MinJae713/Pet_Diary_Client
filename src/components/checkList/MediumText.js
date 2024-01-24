/* eslint-disable react/prop-types */
import { Text } from 'react-native';

const MediumText = (props) => {
  return (
    <Text
      {...props}
      style={{
        ...props.style,
        fontFamily: 'pretendard-medium',
      }}
    >
      {props.children}
    </Text>
  );
};

export default MediumText;

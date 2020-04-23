import styled from 'styled-components/native';

export const Avatar = styled.Image`
  border-color: #fff;
  border-radius: 4px;
  border-width: 4px;
  height: 54px;
  width: 54px;
`;

export const Tooltip = styled.View`
  width: 260px;
`;

export const DevName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const DevBio = styled.Text`
  color: #666;
  margin-top: 5px;
`;

export const DevTechs = styled.Text`
  margin-top: 5px;
`;

export const SearchForm = styled.View`
  bottom: 30px;
  flex-direction: row;
  left: 20px;
  position: absolute;
  right: 20px;
  z-index: 1;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border-radius: 25px;
  color: #333;
  elevation: 2;
  flex: 1;
  font-size: 16px;
  height: 50px;
  padding: 0 20px;

  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.2;
  shadow-radius: 10px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: #1a90e8;
  border-radius: 25px;
  height: 50px;
  justify-content: center;
  margin-left: 15px;
  width: 50px;
`;

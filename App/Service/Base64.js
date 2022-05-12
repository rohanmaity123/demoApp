import base64 from 'react-native-base64'

export const Base64Encode = async (data) => {
  return  base64.encode(data);
}

export const Base64Decode = (data) => {
    return  base64.decode(data);
}


import { Pressable, Text, View } from 'react-native'

const ImageBtn = ({ ImageComponent }) => (
  <Pressable >
    <ImageComponent />
  </Pressable>
)

export default ImageBtn;

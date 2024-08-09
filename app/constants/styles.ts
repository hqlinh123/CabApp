import {StyleSheet} from 'react-native';
import {HEIGHT, WIDTH} from './sizes';

export const globalStyles = StyleSheet.create({
  image: {
    width: WIDTH - 20 * 2,
    height: HEIGHT / 3,
    borderRadius: 12,
  },
});

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

export const horizontalScale = (size: number) =>
  (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor: number = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export const vw = (percentage: number): number => {
  return (percentage * width) / 100;
};

export const vh = (percentage: number): number => {
  return (percentage * height) / 100;
};

/* eslint-disable react-native/no-inline-styles */
import {Image} from 'expo-image';
import React from 'react';
import {globalStyles} from './styles';
import {Page} from 'react-native-onboarding-swiper';
import {View, Text} from 'react-native';

export type Props = {
  title?: string;
  subtitle?: string;
  imageId?: number;
};

const renderTitle = ({title, subtitle}: Props) => (
  <View style={{alignSelf: 'flex-start', marginHorizontal: 20, marginVertical: 20}}>
    {title && <Text style={{fontFamily: 'OpenSans-Bold', fontSize: 24}}>{title}</Text>}
    {subtitle && (
      <Text
        style={{
          fontFamily: 'DMSans-ExtraLight.ttf',
          fontSize: 12,
          color: '#4D4D4D',
          marginTop: 8,
        }}>
        {subtitle}
      </Text>
    )}
  </View>
);

const renderImage = ({imageId, title, subtitle}: Props) => (
  <>
    {renderTitle({title: title})}
    <Image
      style={globalStyles.image}
      source={`https://picsum.photos/id/${imageId}/3000/2000`}
      contentFit="cover"
      transition={1000}
    />
    {renderTitle({subtitle: subtitle})}
  </>
);

export const PAGING: Page[] = [
  {
    backgroundColor: '#fff',
    image: renderImage({
      imageId: 1,
      title: 'Book Your Ride with Ease',
      subtitle:
        'With our intuitive booking system, securing a ride has never been simpler. Just a few taps and you’re on your way. Experience convenience like never before.',
    }),
    title: '',
    subtitle: '',
  },
  {
    backgroundColor: '#fff',
    image: renderImage({
      imageId: 2,
      title: 'Enjoy a Comfortable Ride',
      subtitle:
        'Whether you need something small for a quick trip or a spacious SUV for a family outing, we’ve got you covered. Browse our wide selection and pick the vehicle that suits your needs perfectly.',
    }),

    subtitle: '',
    title: '',
  },
];

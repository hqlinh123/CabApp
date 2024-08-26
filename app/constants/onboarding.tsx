/* eslint-disable react-native/no-inline-styles */
import {Image} from 'expo-image';
import React from 'react';
import {globalStyles} from './styles';
import {Page} from 'react-native-onboarding-swiper';
import {View, Text} from 'react-native';

export type Props = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
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

const renderImage = ({imageUrl, title, subtitle}: Props) => (
  <>
    {renderTitle({title: title})}
    <Image style={globalStyles.image} source={imageUrl} contentFit="cover" transition={1000} />
    {renderTitle({subtitle: subtitle})}
  </>
);

export const PAGING: Page[] = [
  {
    backgroundColor: '#fff',
    image: renderImage({
      imageUrl: 'https://www.teknikoglobal.com/public/assets/image/app_img/taxi-app-development.webp',
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
      imageUrl:
        'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/64c8a84edbf9e1001d0971a3.jpg',
      title: 'Enjoy a Comfortable Ride',
      subtitle:
        'Whether you need something small for a quick trip or a spacious SUV for a family outing, we’ve got you covered. Browse our wide selection and pick the vehicle that suits your needs perfectly.',
    }),

    subtitle: '',
    title: '',
  },
  {
    backgroundColor: '#fff',
    image: renderImage({
      imageUrl:
        'https://png.pngtree.com/png-clipart/20230814/original/pngtree-online-taxi-booking-travel-service-flat-design-illustration-via-mobile-app-on-smartphone-take-someone-to-a-destination-suitable-for-background-picture-image_7937417.png',
      title: 'Enjoy a Comfortable Ride',
      subtitle:
        'Whether you need something small for a quick trip or a spacious SUV for a family outing, we’ve got you covered. Browse our wide selection and pick the vehicle that suits your needs perfectly.',
    }),

    subtitle: '',
    title: '',
  },
  {
    backgroundColor: '#fff',
    image: renderImage({
      imageUrl: 'https://www.goteso.com/products/assets/images/taxi-app-development-banner.png',
      title: 'Enjoy a Comfortable Ride',
      subtitle:
        'Whether you need something small for a quick trip or a spacious SUV for a family outing, we’ve got you covered. Browse our wide selection and pick the vehicle that suits your needs perfectly.',
    }),

    subtitle: '',
    title: '',
  },
];

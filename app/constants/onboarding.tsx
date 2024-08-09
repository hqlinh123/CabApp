/* eslint-disable react-native/no-inline-styles */
import {Image} from 'expo-image';
import React from 'react';
import {globalStyles} from './styles';
import {Page} from 'react-native-onboarding-swiper';
import {View, Text} from 'react-native';

export type Props = {
  title?: string;
  subtitle?: string;
};

const renderTitle = ({title, subtitle}: Props) => (
  <View style={{alignSelf: 'flex-start', marginHorizontal: 20}}>
    {title && (
      <Text
        style={{fontFamily: 'OpenSans-Bold', fontSize: 24, color: '#016B45'}}>
        {title}
      </Text>
    )}
    {subtitle && (
      <Text
        style={{
          fontFamily: 'DMSans-SemiBold',
          fontSize: 18,
          color: '#4D4D4D',
          marginTop: 8,
        }}>
        {subtitle}
      </Text>
    )}
  </View>
);

const renderImage = (imageId: number) => (
  <Image
    style={globalStyles.image}
    source={`https://picsum.photos/id/${imageId}/3000/2000`}
    contentFit="cover"
    transition={1000}
  />
);

export const PAGING: Page[] = [
  {
    backgroundColor: '#fff',
    image: renderImage(1),
    title: renderTitle({title: 'Book Your Ride with Ease'}),
    subtitle: renderTitle({
      subtitle:
        'With our intuitive booking system, securing a ride has never been simpler. Just a few taps and you’re on your way. Experience convenience like never before.',
    }),
  },
  {
    backgroundColor: '#fff',
    image: renderImage(2),
    title: renderTitle({title: 'Choose the Perfect Vehicle'}),
    subtitle: renderTitle({
      subtitle:
        'Whether you need something small for a quick trip or a spacious SUV for a family outing, we’ve got you covered. Browse our wide selection and pick the vehicle that suits your needs perfectly.',
    }),
  },
  {
    backgroundColor: '#fff',
    image: renderImage(3),
    title: renderTitle({title: 'Enjoy a Comfortable Ride'}),
    subtitle: renderTitle({
      subtitle:
        'Sit back, relax, and let us do the driving. Our vehicles are equipped with all the amenities to ensure your comfort. From plush seating to climate control, your satisfaction is our priority.',
    }),
  },
  {
    backgroundColor: '#fff',
    image: renderImage(4),
    title: renderTitle({title: 'Track Your Ride in Real-Time'}),
    subtitle: renderTitle({
      subtitle:
        'Wondering where your car is? With real-time GPS tracking, you can see exactly where your vehicle is at all times. Stay informed and in control of your journey.',
    }),
  },
  {
    backgroundColor: '#fff',
    image: renderImage(5),
    title: renderTitle({title: 'Affordable Rides for Everyone'}),
    subtitle: renderTitle({
      subtitle:
        'We believe in providing value without compromising on quality. Our pricing is transparent, with no hidden fees, ensuring you always get the best deal. Ride more, spend less.',
    }),
  },
  {
    backgroundColor: '#fff',
    image: renderImage(6),
    title: renderTitle({title: 'Safety Comes First, Always'}),
    subtitle: renderTitle({
      subtitle:
        'Your safety is our top priority. Every vehicle undergoes regular inspections, and our drivers are trained to the highest standards. Rest easy knowing you’re in safe hands every time you ride with us.',
    }),
  },
  {
    backgroundColor: '#fff',
    image: renderImage(7),
    title: renderTitle({title: '24/7 Customer Support'}),
    subtitle: renderTitle({
      subtitle:
        'We’re here for you around the clock. Whether you have a question, need assistance, or just want to chat, our friendly support team is ready to help. Your satisfaction is our mission.',
    }),
  },
];

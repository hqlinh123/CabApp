// Import libraries
import {PAGING} from '@constants/onboarding';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, {useRef} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Onboarding, {DotProps} from 'react-native-onboarding-swiper';
import styles from './styles'; // Import the styles
import * as NavigationService from '@services/NavigationService';
import {SCREENS} from 'constants/screenKeys';

// Create a component
const OnBoarding = () => {
  const onboardingRef = useRef<Onboarding>(null);
  const onNext = () => onboardingRef.current.goNext();
  const onDone = () => NavigationService.navigate(SCREENS.SIGN_IN);

  const renderDotComponent = ({selected}: DotProps) => <View style={[styles.dot, selected && styles.selectedDot]} />;

  const renderNextButtonComponent = () => (
    <TouchableOpacity style={styles.button} onPress={onNext}>
      <MaterialIcons name="arrow-circle-right" size={50} color="#13B782" />
    </TouchableOpacity>
  );

  const renderDoneButtonComponent = () => (
    <TouchableOpacity style={styles.button} onPress={onDone}>
      <Ionicons name="checkmark-circle-sharp" size={50} color="#13B782" />
    </TouchableOpacity>
  );

  return (
    <Onboarding
      ref={onboardingRef}
      pages={PAGING}
      NextButtonComponent={renderNextButtonComponent}
      DoneButtonComponent={renderDoneButtonComponent}
      DotComponent={renderDotComponent}
      showSkip={false}
      bottomBarHighlight={false}
      subTitleStyles={styles.page}
      titleStyles={styles.page}
    />
  );
};

// Make this component available to the app
export default OnBoarding;

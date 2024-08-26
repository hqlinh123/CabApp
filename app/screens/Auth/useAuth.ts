import * as NavigationService from '@services/NavigationService';
import {SCREENS} from 'constants/screenKeys';
import {useState} from 'react';
import * as ScocialServices from '@services/SocialServices';
const useAuth = () => {
  const [isCheckTerm, setIsCheckTerm] = useState(false);
  const [isRememberPassword, setIsRememberPassword] = useState(false);
  const [isMaskPassword, setIsMaskPassword] = useState(false);
  const onSubmit = (data: FormData) => {
    NavigationService.navigate(SCREENS.MAIN_STACK);
    return;
  };
  const goBack = () => NavigationService.goBack();
  const onForgotPassword = () => NavigationService.navigate(SCREENS.FORGOT_PASSWORD);
  const onRememberPassword = () => setIsRememberPassword(!isRememberPassword);
  const onMaskPassword = () => setIsMaskPassword(!isMaskPassword);
  const onCheckTermCondition = () => setIsCheckTerm(!isCheckTerm);
  const onLoginApple = () => ScocialServices.signInWithApple();
  const onLoginGoogle = () => ScocialServices.signInWithGoogle();
  const onLoginFacebook = () => ScocialServices.signInWithFacebook();
  return {
    onCheckTermCondition,
    onSubmit,
    goBack,
    onForgotPassword,
    onRememberPassword,
    onMaskPassword,
    isMaskPassword,
    isRememberPassword,
    isCheckTerm,
    onLoginApple,
    onLoginGoogle,
    onLoginFacebook,
  };
};
export default useAuth;

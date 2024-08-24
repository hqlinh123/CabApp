import {useState} from 'react';

const useAuth = () => {
  const [isCheckBox, setCheckBox] = useState(false);
  const onCheck = (value: boolean) => setCheckBox(value);
  return {isCheckBox, onCheck};
};
export default useAuth;

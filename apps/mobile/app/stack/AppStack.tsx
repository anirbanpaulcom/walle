import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import BottomTabStack from './BottomTabStack';
import {RootState} from '../redux/store';
import {fetcher} from '../api/api';
import {setUser} from '../redux/slices/userSlice';

const AppStack = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchUserInfo = async () => {
      if (isLoggedIn) {
        try {
          const user = await fetcher('GET', '/user');
          dispatch(setUser(user));
        } catch (error) {
          console.error('Failed to fetch user info:', error);
        }
      }
    };

    fetchUserInfo();
  }, [isLoggedIn, dispatch]);

  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTabStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppStack;

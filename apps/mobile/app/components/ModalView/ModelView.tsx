/* eslint-disable @typescript-eslint/no-shadow */
import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  Text,
} from 'react-native';
import Row from '../Wrapper/Row';
import ButtonView from '../ButtonView/buttonView';
import Container from '../Wrapper/Container';
import {fetcher} from '../../api/api';
import {setUser} from '../../redux/slices/userSlice';
import {useDispatch} from 'react-redux';
import {getColor} from '../../functions/functions';

interface ModalComponentProps {
  type: string;
  method?: string;
  category: string;
  visible: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  visible,
  onClose,
  type,
  method,
  category,
}) => {
  const [amount, setAmount] = useState(0);
  const slideAnim = useState(new Animated.Value(0))[0];
  const dispatch = useDispatch();

  const transaction = async (
    type: string,
    category: string,
    method?: string,
    amount: number,
  ) => {
    if (amount <= 0) {
      return;
    }
    try {
      const user = await fetcher('POST', '/transaction', {
        type,
        category,
        method,
        amount,
      });
      if (user) {
        dispatch(setUser(user));
        onClose();
      }
    } catch (error) {
      console.error('Transaction failed', error);
    }
  };

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => setAmount(0));
    }
  }, [slideAnim, visible]);

  const slideIn = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1000, 0],
  });

  const handleNumberPress = (num: string) => {
    setAmount(prev => parseFloat(`${prev}${num}`));
  };

  const handleBackspace = () => {
    setAmount(prev => parseFloat(prev.toString().slice(0, -1)) || 0);
  };

  const handleTransaction = () => {
    transaction(type, category, method, amount);
  };

  return (
    <Modal
      transparent
      animationType="none"
      visible={visible}
      onRequestClose={onClose}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPressOut={onClose}>
        <TouchableWithoutFeedback>
          <Animated.View
            style={[
              styles.modalContainer,
              {transform: [{translateY: slideIn}]},
            ]}>
            <Container style={styles.container}>
              <View style={styles.separator} />
              <Row>
                <ButtonView
                  style={styles.button}
                  title={method}
                  backgroundColor={getColor(method)}
                  color="black"
                />
                <ButtonView
                  style={styles.button}
                  title={category}
                  backgroundColor={getColor(category)}
                  color="black"
                />
              </Row>
              <Text>{type}</Text>
              <Text style={styles.input}>${amount}</Text>
            </Container>
            <View style={styles.keypad}>
              <View style={styles.keypadRow}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '$'].map(num => (
                  <TouchableOpacity
                    key={num}
                    style={styles.key}
                    onPress={() => handleNumberPress(num.toString())}>
                    <Text style={styles.keyText}>{num}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <TouchableOpacity style={styles.key} onPress={handleBackspace}>
                <Text style={styles.keyText}>⌫</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.done} onPress={handleTransaction}>
                <Text style={styles.keyText}>✔</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContainer: {
    width: '100%',
    height: '80%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '30%',
  },
  separator: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  button: {
    width: '45%',
  },
  input: {
    fontSize: 32,
  },
  keypad: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: '75%',
  },
  keypadRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  key: {
    width: 90,
    height: 90,
    margin: 2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 35,
  },
  done: {
    width: 90,
    height: 270,
    margin: 2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 40,
  },
  keyText: {
    fontSize: 30,
    fontWeight: '400',
    color: 'black',
  },
});

export default ModalComponent;

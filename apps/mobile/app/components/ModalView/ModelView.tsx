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

interface ModalComponentProps {
  visible: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({visible, onClose}) => {
  const [inputValue, setInputValue] = useState(0);
  const slideAnim = useState(new Animated.Value(0))[0];
  const [selectedType, setSelectedType] = useState('Cash');

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
      }).start(() => setInputValue('')); // Reset input value on close
    }
  }, [slideAnim, visible]);

  const slideIn = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1000, 0], // Slide from bottom to top
  });

  const handleNumberPress = (num: string) => {
    setInputValue(inputValue + num);
  };

  const handleBackspace = () => {
    setInputValue(inputValue.slice(0, -1));
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
            <View
              style={{
                height: '30%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 4,
                  backgroundColor: 'gray',
                  borderRadius: 10,
                }}></View>
              <Row style={{justifyContent: 'center', gap: 5}}>
                <ButtonView
                  style={{width: '45%'}}
                  title="Cash"
                  type={selectedType === 'Cash' ? 'black' : 'gray'}
                  onPress={() => setSelectedType('Cash')}
                />
                <ButtonView
                  style={{width: '45%'}}
                  title="Bank"
                  type={selectedType === 'Bank' ? 'black' : 'gray'}
                  onPress={() => setSelectedType('Bank')}
                />
              </Row>
              <Text>Expense</Text>
              <Text style={styles.input}>${inputValue}</Text>
            </View>
            <View style={styles.keypad}>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}>
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
              <TouchableOpacity style={styles.key} onPress={handleBackspace}>
                <Text style={styles.keyText}>⌫</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.done} onPress={onClose}>
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
  input: {
    fontSize: 32,
  },
  keypad: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: '75%',
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
    height: 180,
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

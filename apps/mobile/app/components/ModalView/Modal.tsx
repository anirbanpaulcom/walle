import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

interface ModalComponentProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({children, onClose}) => {
  return (
    <Modal transparent animationType="slide" onRequestClose={onClose}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPressOut={onClose}>
        <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>{children}</View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%', // Modal width (optional adjustment)
    height: '60%', // Modal height
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModalComponent;

import {Modal, Button, StyleSheet, Text} from 'react-native';
import React from 'react';

const ModalCustom = ({visible, onPress}) => {
  //const [modalOpen, setModalOpen] = useState(false);

  return (
    <Modal visible={visible} animationType="slide" style={styles.modal}>
      <Button title="Close" onPress={onPress} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    height: 200,
    width: 200,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModalCustom;

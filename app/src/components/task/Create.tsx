import { View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTaskContext } from '~/context/TaskContextProvider';
import { Feather } from '@expo/vector-icons';

export default function Create() {
  const { openModalCreate, openCreateTask } = useTaskContext();

  return (
    <Modal animationType="slide" transparent={true} visible={openModalCreate}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View className="items-end w-full p-2">
            <TouchableOpacity onPress={openCreateTask}>
              <Feather size={30} color={'#3d3939'} name="x" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    width: '100%',
    height: '50%',
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

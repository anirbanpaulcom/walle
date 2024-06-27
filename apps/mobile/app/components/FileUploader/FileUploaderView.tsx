import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ButtonView from '../ButtonView/buttonView';
import DottedBorder from '../LineView/DottedView';
import TextView from '../TextView/TextView';
import Icons from '../../assets/icons/icons';

const FileUploaderView = () => {
  const [file, setFile] = useState(null);

  const handleOptionClick = option => {
    setFile(null);
  };

  const handleSubmit = () => {
    console.log('Selected File:', file);
  };

  const DocumentPicker = '';

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFile(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        console.error('Error picking document:', err);
      }
    }
  };

  return (
    <TouchableOpacity
      title="Choose PDF"
      onPress={pickDocument}
      style={styles.container}>
      <View style={styles.border}>
        <Image style={styles.image} source={Icons.UploadIcon} />

        <TextView type="smallLight" style={styles.text}>
          Choose video or Pdf File (Must upload Pdf File)
        </TextView>
        {file && <Text>Selected PDF: {file.name}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#313131',
    borderRadius: 10,
  },
  border: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    borderStyle: 'dashed',
  },
  text: {
    color: 'white',
  },
  image: {
    width: 30,
    height: 30,
    margin: 10,
  },
});

export default FileUploaderView;

import React from 'react';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = (props) => {
  return (
    <GooglePlacesAutocomplete
        styles={{
        textInputContainer: {
          backgroundColor: 'grey',
          width: "70%",
        },
        textInput: {
          height: 38,
          color: '#5d5d5d',
          fontSize: 16,
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        const parsedState = data.structured_formatting.secondary_text.substr(0, 2);
        props.changeHomeState(parsedState);
        console.log(data.structured_formatting.secondary_text.substr(0, 2));
      }}
      query={{
        key: 'AIzaSyBOq3asqGIaXEGZpBIYeiLde4tfbuDqQKE',
        language: 'en',
      }}
    />
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 0,
      padding: 0,
      backgroundColor: "red",
      width: "80%",
    },
});
export default GooglePlacesInput;
import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import InputDataComponent from '@/components/solar_project/InputData';
import UnwrapperResults from '@/components/solar_project/UnwrapperResults';
import { get_list_trapeziods } from '../utils/unwrapper';

type InputDataType = {
  focal_length: number;
  max_radius: number;
  body_size: number;
}

type ResultsType = {
  heights_array: number[];
  bases_array: number[];
  number_sectors: number;
};

export default function HomeScreen() {

  const [input_parameters, setData] = useState<InputDataType>();
  const [unwrapper_results, setResults] = useState<ResultsType>();

  const getInputData = (input_data: InputDataType) => {
    setData(input_data);
    let calc_results = get_list_trapeziods(
      input_data.focal_length,
      input_data.max_radius,
      input_data.body_size
    )
    setResults(calc_results);
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to the unwrapper of a paraboloid!</ThemedText>
        <HelloWave />
      </ThemedView>
      { !input_parameters && <InputDataComponent sendData={getInputData} /> }
      { input_parameters && unwrapper_results && <UnwrapperResults
        number_sectors={unwrapper_results.number_sectors}
        heights_array={unwrapper_results.heights_array}
        bases_array={unwrapper_results.bases_array}
        focal_length={input_parameters.focal_length}
        max_radius={input_parameters.max_radius}
        size_body={input_parameters.body_size}
        />
      }
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

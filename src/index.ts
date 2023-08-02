import ExpoFelicaReaderModule from './ExpoFelicaReaderModule';

export async function scan(): Promise<string> {
  return await ExpoFelicaReaderModule.scan();
}


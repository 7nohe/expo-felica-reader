import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoFelicaReader.web.ts
// and on native platforms to ExpoFelicaReader.ts
import ExpoFelicaReaderModule from './ExpoFelicaReaderModule';
import ExpoFelicaReaderView from './ExpoFelicaReaderView';
import { ChangeEventPayload, ExpoFelicaReaderViewProps } from './ExpoFelicaReader.types';

// Get the native constant value.
export const PI = ExpoFelicaReaderModule.PI;

export function hello(): string {
  return ExpoFelicaReaderModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoFelicaReaderModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoFelicaReaderModule ?? NativeModulesProxy.ExpoFelicaReader);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoFelicaReaderView, ExpoFelicaReaderViewProps, ChangeEventPayload };

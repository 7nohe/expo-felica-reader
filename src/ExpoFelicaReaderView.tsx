import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoFelicaReaderViewProps } from './ExpoFelicaReader.types';

const NativeView: React.ComponentType<ExpoFelicaReaderViewProps> =
  requireNativeViewManager('ExpoFelicaReader');

export default function ExpoFelicaReaderView(props: ExpoFelicaReaderViewProps) {
  return <NativeView {...props} />;
}

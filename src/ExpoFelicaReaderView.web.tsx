import * as React from 'react';

import { ExpoFelicaReaderViewProps } from './ExpoFelicaReader.types';

export default function ExpoFelicaReaderView(props: ExpoFelicaReaderViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

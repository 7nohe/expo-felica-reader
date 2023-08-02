# expo-felica-reader

Expo FeliCa Reader module

## Installation

```bash
npm install expo-felica-reader
```

## Project configuration

Add the following values to your app.json.

```json
{
  "expo": {
    "ios": {
      "infoPlist": {
        "NFCReaderUsageDescription": "To read FeliCa card",
        "com.apple.developer.nfc.readersession.felica.systemcodes": [
          "0003",
          "FE00"
        ]
      },
      "entitlements": {
        "com.apple.developer.nfc.readersession.formats": [
          "TAG"
        ]
      }
    },
    "android": {
      "permissions": [
        "NFC"
      ]
    },
  }
}

```

## Usage

Please see [./example](./example/) directory for usage.

## License
MIT


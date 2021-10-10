## How to install

Clone the project to your machine, and go to the directory `<cloned_folder>/frontend`.
Then open terminal in this directory and type:
```
npm install
```
If you want to run the app on a mobile phone, then install Expo Go on your [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US) or [IOS](https://apps.apple.com/ru/app/expo-go/id982107779) device.

Another option is installing any android or ios emulator on PC. In the project we have used Xcode emulatro that can be installed from [here](https://xcodereleases.com).

## How to run 

Open terminal in the directory `<cloned_folder>/frontend` and type:
```
expo start
```
After expo start your prowser will load the following page
![expo](https://user-images.githubusercontent.com/39200650/134811111-b3f6e1bd-0abe-44d1-87d2-b2ff9f4a26a9.jpg)
Click run on Android device/emulator if you have an emulator on your PC

Or scan QR-code using Expo application on your physical device

## Unit-testing

We have roughly 70~80% test coverage, mostly render test, **some test don't pass not because of faulty code but because further turning is required in testing package `jest` to cover non traditional Javascript**, to see the result:
```
npm run test
```
## Static analyzers (Lint):

We have used ESLint as a static analyzer for our project and here are analyzer results
![lint](https://user-images.githubusercontent.com/39200650/136712817-553996fd-82df-4726-976b-83d5fe13c9ce.png)

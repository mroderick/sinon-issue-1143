# sinon-issue-1143

[TypeError when requiring sinon in React Native 0.32.0](https://github.com/sinonjs/sinon/issues/1143)

### Reproduce
```
git clone git@github.com:mroderick/sinon-issue-1143.git
cd sinon-issue-1143
npm install
npm test
```

This causes 

```
TypeError: Date is not a constructor

    at new MessageQueue (node_modules/react-native/Libraries/Utilities/MessageQueue.js:62:26)
    at Object.<anonymous> (node_modules/react-native/Libraries/BatchedBridge/BatchedBridge.js:17:19)
    at Object.<anonymous> (node_modules/react-native/Libraries/Utilities/RCTLog.js:14:19)
    at setUpConsole (node_modules/react-native/Libraries/JavaScriptAppEngine/Initialization/InitializeJavaScriptAppEngine.js:54:1)
```

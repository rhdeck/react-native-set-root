# react-native-set-root

Sets the root of a react native package

#Usage

## Global install (best for expo)

```
yarn global add react-native-set-root
(from your project root)
react-native-set-root @myscope/mymodule
```

## React-Native plugin

```
yarn add react-native-set-root
react-native set-root @myscope/mymodule
```

**Note** this will not add the module in question to your project - so best practice is something like

```
yarn add @myscope/mymodule
react-native-set-root @myscope/mymodule
```

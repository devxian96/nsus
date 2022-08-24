# NSUS

![npm](https://img.shields.io/npm/dm/nsus?style=for-the-badge)
![npm](https://img.shields.io/npm/v/nsus?style=for-the-badge)
[![GitHub stars](https://img.shields.io/github/stars/devxian96/nsus?style=for-the-badge)](https://github.com/devxian96/nsus/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/devxian96/nsus?style=for-the-badge)](https://github.com/devxian96/nsus/network)
[![GitHub issues](https://img.shields.io/github/issues/devxian96/nsus?style=for-the-badge)](https://github.com/devxian96/nsus/issues)
[![GitHub issues](https://img.shields.io/badge/license-MIT-yellow?style=for-the-badge)](https://github.com/devxian96/nsus/blob/master/LICENSE)

> Next generation State management library to replace UseState.

## Npm / Yarn

```
npm i nsus

yarn add nsus
```

## Getting started

### Requirement

- esNext
- React Hook

### Example

**Javascript**

```javascript
import useData from "nsus";

const app = () => {
  const state = useData({ count: 0 });
  return <button onClick={() => state.count++}>{state.count}</button>;
};
```

**Typescript**

```typescript
// Same code, support Typescript.
import useData from "nsus";

const app = () => {
  const state = useData({ count: 0 });
  return <button onClick={() => state.count++}>{state.count}</button>;
};
```

This library is inspired by Vuejs. I hope that two-way data binding is possible even in react.

## Features

- Direct state change via proxy.
- Automatic dom Reconciliation.

## Update

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

> example:)
> v0.0.18 is  
> 18th patched.

## Updated New Version

not thing

## Update Scheduled

Tell me what you need? [issue](https://github.com/devxian96/nsus/issues)

## Examples

This is [Example](https://github.com/devxian96/nsus/tree/main/test) boilerplate code.  
You can get better way.

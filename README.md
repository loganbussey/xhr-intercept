# XHR Intercept

A small utility to intercept in-flight XHR requests and to change the URL before they are sent. Useful for modifying the API endpoint URLs of externally loaded tracking scripts if running your own proxy. E.g. [@loganbussey/change-segment-metric-host](https://github.com/loganbussey/change-segment-metric-host)

## Installation & Usage

### NPM
`$ npm install @loganbussey/xhr-intercept --save`

```js
import xhrIntercept from '@loganbussey/xhr-intercept';

xhrIntercept('api.foo.com', 'api.bar.com');
```

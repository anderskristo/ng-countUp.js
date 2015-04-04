ng-countUp.js
==========

ng-countUp.js is a AngularJS directive which wraps [countUp.js](https://github.com/inorganik/countUp.js)

In action: [http://anderskristo.me/ng-countUp.js](http://anderskristo.me/ng-countUp.js)

### Install:
```
bower install ng-countUp.js --save
```
Add `ngCountUp` to angular module ex.
```js
angular.module('App', ['ngCountUp'])
```


### Usage:

```
<ng-count-up from="0" to="2500" decimals="1" duration="2" delay="500" options="options"></ng-count-up>
```

Params:
- `from` = the value you want to begin at
- `to` = the value you want to arrive at
- `decimals` = number of decimals
- `duration` = duration in seconds
- `delay` = delay until countUp fires off - in milliseconds
- `options` = object that determines number formatting and toggles easing - see below


Options:
```js
$scope.options = {
  useEasing : true,
  useGrouping : true,
  separator : ',',
  decimal : '.',
  prefix : '',
  suffix : ''
};
```

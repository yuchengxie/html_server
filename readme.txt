注入 API 方式
其主要原理是，通过WebView提供的接口，向JavaScript的Context（window）中注入对象或者方法，让JavaScript调用时，直接执行相应的Native代码逻辑，达到JavaScript调用Native的目的。
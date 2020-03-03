// window.onload = function () {
//   // function cewen() {
//   //   return new Promise((resove, reject) => {
//   //     var params = {};
//   //     window.WebViewJavascriptBridge.callHandler('cewen', params, res => {
//   //       resove(res);
//   //     })
//   //   })
//   // }

//   // //JS注册事件监听
//   // function connectJSBridge(callback) {
//   //   if (window.WebViewJavascriptBridge) {
//   //     callback(WebViewJavascriptBridge)
//   //   } else {
//   //     document.addEventListener(
//   //       'WebViewJavascriptBridgeReady',
//   //       function () {
//   //         callback(WebViewJavascriptBridge)
//   //       },
//   //       false
//   //     );
//   //   }
//   // }

//   // //注册回调函数，第一次连接时调用 初始化函数
//   // connectJSBridge(function (bridge) {
//   //   //初始化
//   //   bridge.init(function (data, responseCallback) {
//   //     responseCallback(data);
//   //   });
//   // })

//   function test(){
//     alert('11');
//   }
// }

//a.js
function hello(str){
  alert('11');
}
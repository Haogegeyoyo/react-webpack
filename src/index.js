function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  return element;
}
console.log(process.env.NODE_ENV,"打包的变量")

document.body.appendChild(component());
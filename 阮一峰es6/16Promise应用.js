// resolver为 function(resolve, reject){ ... }
function Promise(resolver){
    if(resolver && typeof resolver !== 'function'){ throw new Error('Promise resolver is not a function') }
    //当前promise对象的状态
    this.state = PENDING;
    //当前promise对象的数据（成功或失败）
    this.data = UNDEFINED;
    //当前promise对象注册的回调队列
    this.callbackQueue=[];
    //执行resove()或reject()方法
    if(resolver) executeResolver.call(this, resolver);
  }
  Promise.prototype.then = function(){}

//一个 Promise构造函数 和一个实例方法then 就是Promise的核心的了，其它的都是Promise的语法糖或者说是扩展。
  
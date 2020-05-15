class Promsie {
  constructor(callback) {
    this.status = 'pending';
    this.thenFn = [];
    this.cacheFn = [];
    this.finallyFn = []
    callback(this._resolve.bind(this), this._reject.bind(this))
  }
  // resolve 会比添加then catch那些 后执行
  // 事件循环 then宏观任务先添加进回调
  _resolve(value){
    this.status = 'resolved'
    if(this.thenFn.length){
      let res = this.thenFn.shift(value)
      this._resolve(res)
    }else{
      this.finallyFn.length && this.finallyFn(e)
    }
    return this
  }
  _reject(e){
    this.status = 'rejected';
    this.cacheFn.length && this.cacheFn(e)
    this.finallyFn.length && this.finallyFn(e)
  }
  then(fn){
   this.thenFn.push(fn)
   return this
  }
  catch(e){
    this.cacheFn.push(fn)
    return this
  }
  finally(){
    this.finallyFn.push(fn)
  }
}


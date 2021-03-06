class Vue {
  constructor(options) {
    this._options = options
    this._data = options.data
    this.initData()
  }
  initData () {
    let data = this._data
    let keys = Object.keys(data)
    for(let i = 0; i < keys.length; i++) {
      Object.defineProperty(this, keys[i], {
        enumerable: true,
        configurable: true,
        get: function proxyGetter () {
          return data[keys[i]]
        },
        set: function proxySetter(value) {
          data[keys[i]] = value
        }
      })
    }
  }
}
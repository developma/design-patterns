class Singleton {
  constructor() {
    console.log('error')
  }

  echo() {
    console.log('hello')
  }

  static getInstance() {
    if (Singleton.instance === null) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}
Singleton.instance = null

const instance1 = Singleton.getInstance()
const instance2 = Singleton.getInstance()
console.log(instance1 === instance2)
instance1.echo()

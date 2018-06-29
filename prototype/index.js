class Product {
  use(str) {}
  createClone() {}
}

class Manager {
  constructor() {
    this.showcase = new Map()
  }
  register(name, product) {
    this.showcase.set(name, product)
  }
  create(name) {
    const product = this.showcase.get(name)
    return product.createClone()
  }
}

class MessageBox extends Product {
  constructor(decoChar) {
    super()
    this.decoChar = decoChar
  }

  use(str) {
    const length = str.length
    let char = ''
    for (let i = 0; i < length + 4; i++) {
      char += this.decoChar
    }
    console.log(char)
    console.log(`${this.decoChar} ${str} ${this.decoChar}`)
    char = ''
    for (let i = 0; i < length + 4; i++) {
      char += this.decoChar
    }
    console.log(char)
  }

  createClone() {
    return this
  }
}

class UnderLinePen extends Product {
  constructor(ulchar) {
    super()
    this.ulchar = ulchar
  }

  use(str) {
    const length = str.length
    console.log(`\" ${str} \"`)
    let char = ''
    for (let i = 0; i < length; i++) {
      char += this.ulchar
    }
    console.log(char)
  }
  createClone() {
    return this
  }
}

const manager = new Manager()
const upen = new UnderLinePen('~')
const mbox = new MessageBox('*')
const sbox = new MessageBox('/')
manager.register('strong message', upen)
manager.register('warning box', mbox)
manager.register('slash box', sbox)

const p1 = manager.create('strong message')
p1.use('Hello, world')
const p2 = manager.create('warning box')
p2.use('Hello, world')
const p3 = manager.create('slash box')
p3.use('Hello, world')

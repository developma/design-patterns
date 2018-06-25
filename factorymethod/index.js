/**
 * 製品を表す抽象クラスもどき。
 * 具体的な処理はサブクラスで定義する。
 */
class Product {
  use() {}
}

/**
 * 工場を表す抽象クラスもどき。
 * 具体的な処理はサブクラスで定義する。
 */
class Factory {
  create(owner) {
    const product = this.createProduct(owner)
    this.registerProduct(product)
    return product
  }
  createProduct(owner) {}
  registerProduct(product) {}
}
/**
 * IDカードを表すクラス。
 */
class IDCard extends Product {
  constructor(owner) {
    super()
    console.log(`${owner}のカードを作ります`)
    this.owner = owner
  }
  use() {
    console.log(`${this.owner}のカードを使います`)
  }
  getOwner() {
    return this.owner
  }
}

class IDCardFactory extends Factory {
  constructor() {
    super()
    this.owners = new Array()
  }
  createProduct(owner) {
    return new IDCard(owner)
  }
  registerProduct(product) {
    this.owners.push(product.getOwner())
  }
  getOwners() {
    return this.owners
  }
}

const factory = new IDCardFactory()
const card1 = factory.create('SCOTT')
const card2 = factory.create('TIGER')
const card3 = factory.create('MIKE')

card1.use()
card2.use()
card3.use()

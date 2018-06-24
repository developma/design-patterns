/**
 * 既にあるクラス
 */
class Banner {
  constructor(message) {
    this.message = message
  }
  showWithParen() {
    console.log(`( ${this.message} )`)
  }
  showWithAster() {
    console.log(`* ${this.message} *`)
  }
}

/**
 * 文字を表示するための操作が定義されているインタフェースもどき
 */
class Print {
  printWeak() {}
  printStrong() {}
}

/**
 * アダプタークラス
 */
class PrintBanner extends Print {
  constructor(message) {
    super(message)
    this.banner = new Banner(message)
  }

  printWeak() {
    this.banner.showWithParen()
  }

  printStrong() {
    this.banner.showWithAster()
  }
}

const print = new PrintBanner('Hello')
print.printWeak()
print.printStrong()

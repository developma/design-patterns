/**
 * 集合体を表すインタフェースもどき
 */
class Aggregate {
  iterator() {}
}

/**
 * 要素を順次スキャンするための操作を定義するインタフェースもどき
 */
class Iterator {
  hasNext() {}
  next() {}
}

/**
 * 本を表すクラス
 */
class Book {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

/**
 * 本棚を本の集合体として見做すクラス
 */
class BookShelf extends Aggregate {
  constructor() {
    super()
    this.books = new Array()
  }

  getBookAt(idx) {
    return this.books[idx]
  }
  appendBook(book) {
    this.books.push(book)
  }

  getLength() {
    return this.books.length
  }

  iterator() {
    return new BookShelfIterator(this)
  }
}

/**
 * 本棚を順次スキャンするイテレータクラス
 */
class BookShelfIterator extends Iterator {
  constructor(bookShelf) {
    super()
    this.bookShelf = bookShelf
    this.idx = 0
  }

  hasNext() {
    return this.idx < this.bookShelf.getLength()
  }

  next() {
    const book = this.bookShelf.getBookAt(this.idx)
    this.idx++
    return book
  }
}

const bookShelf = new BookShelf()
bookShelf.appendBook(new Book('Around the World in 80 days'))
bookShelf.appendBook(new Book('bible'))
bookShelf.appendBook(new Book('Cinderella'))
bookShelf.appendBook(new Book('Daddy-Long-Legs'))
const iterator = bookShelf.iterator()
while (iterator.hasNext()) {
  const book = iterator.next()
  console.log(book)
}

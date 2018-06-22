/**
 * This class has four methods as following:
 * open
 * print
 * close
 * display
 *
 */
class AbstractDisplay {
  open() {
    throw new Error('a subclass have to override this open method.')
  }

  print() {
    throw new Error('a subclass have to override this print method.')
  }

  close() {
    throw new Error('a subclass have to override this close method.')
  }

  display() {
    this.open()
    for (let i = 0; i < 5; i++) {
      this.print()
    }
    this.close()
  }
}

class CharDisplay extends AbstractDisplay {
  constructor() {
    super()
  }
  open() {
    console.log('open')
  }
  print() {
    console.log('Hello World')
  }
  close() {
    console.log('close')
  }
}

const char = new CharDisplay()
char.display()

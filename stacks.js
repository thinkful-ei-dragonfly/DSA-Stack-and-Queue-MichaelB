class _Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null)
      return this.top
    }
    const node = new _Node(data, this.top)
    this.top = node
  }

  pop() {
    const node = this.top
    this.top = node.next
    return node.data
  }
}

function peek(stack) {
  return stack.top.data
}

function isEmpty(stack) {
  if (stack.top === null) {
    return true
  } else {
    return false
  }
}

function display(stack) {
  let current = stack.top
  if (!stack.top) {
    return null
  }

  while (current !== null) {
    console.log(current.data)
    current = current.next
  }
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  let s1 = new Stack()
  let half = Math.floor(s.length / 2)
  for (let i = 0; i < half; i++) {
    s1.push(s[i])
  }
  display(s1)
  let start = 0;
  if (s.length % 2 === 1) {
    start = half + 1
  } else {
    start = half
  }
  for (let i = start; i < s.length; i++) {
    let x = s1.pop()
    if (x !== s[i]) {
      return false
    }
  }
  return true
}

function match_parentheses(s) {
  if (!s.length) {
    return null
  }
  let stack = new Stack()
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push('(')
    }
    if (s[i] === ')') {
      if (isEmpty(stack)) {
        console.log('close parenthesis without an open parenthesis at poition: ' + i)
        return false
      }
      stack.pop()
    }
  }
  if (isEmpty(stack)) {
    
    return true
  }
  console.log('missing a )')
  return false
}

function main() {
  // let starTrek = new Stack()

  // starTrek.push('Kirk')
  // starTrek.push('Spock')
  // starTrek.push('McCoy')
  // starTrek.push('Scotty')
  // console.log(peek(starTrek))
  // console.log()
  // console.log(isEmpty(starTrek))
  // console.log()
  // display(starTrek)
  // console.log()
  // starTrek.pop()
  // starTrek.pop()
  // display(starTrek)
  // console.log(starTrek.top);

  // True, true, true, false
  // console.log(is_palindrome('dad'))
  // console.log(is_palindrome('A man, a plan, a canal: Panama'))
  // console.log(is_palindrome('1001'))
  // console.log(is_palindrome('Tauhida'))

  console.log(match_parentheses('(((()))'))

}

main()

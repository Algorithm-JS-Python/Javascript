class Queue {
    constructor() {
      this.arr = []
    }
  
    enqueue(value) {
      this.arr.push(value)
    }
  
    dequeue() {
      return this.arr.shift()
    }
  
    length() {
      return this.arr.length
    }
  
    peek() {
      return this.arr[0]
    }
  
    isEmpty() {
      return this.arr.length === 0
    }
  
    clear() {
      this.arr = []
    }
  }
  
  const queue = new Queue()
  
  // 데이터 삽입
  queue.enqueue(1) // arr: [1]
  queue.enqueue(20) // arr: [1, 20]
  queue.enqueue(300) // arr: [1, 20, 300]
  
  // 데이터 추출
  queue.dequeue() // 1
  
  // 현재 큐 길이
  queue.length() // 2
  
  // 다음에 추출될 데이터
  queue.peek() // 20
  
  // 큐가 비어있는지 확인
  queue.isEmpty() // false
  
  // 큐 초기화
  queue.clear()

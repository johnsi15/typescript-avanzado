const numbers: number[] = [1, 2, 4, 5]

numbers.push(10)
numbers.pop()
numbers.unshift(3)

const numbers2: ReadonlyArray<number> = [1, 2, 4, 5]

numbers2.push(3) // me marca erro
numbers2.pop() // me marca error

numbers2.filter(() => { })
numbers2.reduce(() => 0)
numbers2.map(() => { })

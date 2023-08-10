import * as fs from 'fs/promises'

const getData = async () => {
  try {
    const data = await fs.readFile('./input.txt', {encoding: 'utf-8'} )
    return data
  } catch (err) {
    console.log(`Something went wrong: ${err}`)
  }
}

const inputData = await getData()
let cleanHands = []

for (let i = 0; i < inputData.length; i++) {
  if (i % 2 === 0) {
    cleanHands.push(inputData[i])
  }
}

const col1 = cleanHands.filter((hand) => {
  return ['A', 'B', 'C'].includes(hand)
})
const col2 = cleanHands.filter((hand) => {
  return ['X', 'Y', 'Z'].includes(hand)
})

console.log(col2)

/**
 * column 1 {
 * A : 'Rock',
 * B : 'Paper',
 * C : 'Scissors'
 * }
 *
 * column 2 {
 * X : 'Rock',
 * Y : 'Paper',
 * Z : 'Scissors'
 * }
 */
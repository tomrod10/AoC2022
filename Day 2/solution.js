import * as fs from 'fs/promises'

/** Part 1
 * A and X - Rock 1pt
 * B and Y - Paper 2pts
 * C and Z - Scissor 3pts
 */

const scoreMap1 = {
  'A Y': 8,
  'B Z': 9,
  'C X': 7,
  'A X': 4,
  'B Y': 5,
  'C Z': 6,
  'B X': 1,
  'C Y': 2,
  'A Z': 3,
}

const getMyScore = async (scoreMap) => {
  const getData = async () => {
    try {
      const data = await fs.readFile('./input.txt', {encoding: 'utf-8'} )
      return data
    } catch (err) {
      console.log(`Something went wrong: ${err}`)
    }
  }

  const inputData = await getData()
  const formattedData = inputData.split('\n')

  let myScore = 0
  formattedData.forEach((round) => {
   myScore += scoreMap[round] || 0
  })
  return myScore
}

console.log('Part 1 score:', await getMyScore(scoreMap1))

/** Part 2
 * X - I lose
 * Y - I draw
 * Z - I win
 */

const scoreMap2 = {
  'A X': 3,
  'A Y': 4,
  'A Z': 8,
  'B X': 1,
  'B Y': 5,
  'B Z': 9,
  'C X': 2,
  'C Y': 6,
  'C Z': 7,
}

console.log('Part 2 score:', await getMyScore(scoreMap2))



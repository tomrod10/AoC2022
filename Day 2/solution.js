import * as fs from 'fs/promises'

const getMyScore = async () => {
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

  const scoreMap = {
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

  let myScore = 0
  formattedData.forEach((round) => {
   myScore += scoreMap[round] || 0
  })
  console.log(myScore)
  return myScore
}

getMyScore()

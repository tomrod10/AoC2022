// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

import * as fs from 'fs/promises'

const findElfMaxCalories = async () => {
  const readInputData = async () => {
    try {
      const data = await fs.readFile('./input.txt', {encoding: 'utf-8'})
      return data
    } catch (err) {
      console.log(`Something went wrong!: ${err}`)
    }
  }

  const data = await readInputData()
  const formattedData = data.split('\n')

  let caloriesPerElf = []
  let calorieSum = 0

  for (let i = 0; i < formattedData.length; i++) {
    let curVal = formattedData[i]
    if (curVal === '') {
      caloriesPerElf.push(calorieSum)
      calorieSum = 0
    } else {
      calorieSum += Number(curVal)
    }
  }

  const maxCalorie = Math.max(...caloriesPerElf)
  console.log(maxCalorie)
  return maxCalorie
}

findElfMaxCalories()
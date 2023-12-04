// link: https://adventofcode.com/2022/day/2
import * as fs from "fs"

const getRpsRounds = () => {
    try {
        const rounds = fs.readFileSync("./input.txt", { encoding: "utf-8" }).split("\n")
        return rounds.map((round) => round.split(" "))
    } catch (err) {
        console.log(`Something went wrongs!: ${err}`)
    }
}

const rounds = getRpsRounds()

// Part 1
const RPS_MATCHUPS = {
    "X": { A: 4, B: 1, C: 7},
    "Y": { A: 8, B: 5, C: 2 },
    "Z": { A: 3, B: 9, C: 6 }
}

const RpsRoundsTotalScore = (rounds) => {
    let myScore = 0

    for (let i = 0; i < rounds.length; i++) {
        const round = rounds[i]
        myScore += RPS_MATCHUPS[round[1]][round[0]]
    }
    console.log("Part 1:", myScore)
    return myScore
}

// part 2
const RPS_MATCHUPS2 = {
    "X": { A: 3, B: 1, C: 2},
    "Y": { A: 4, B: 5, C: 6 },
    "Z": { A: 8, B: 9, C: 7 }
}

const RpsRoundsTotalScore2 = (rounds) => {
    let myScore = 0

    for (let i = 0; i < rounds.length; i++) {
        const round = rounds[i]
        myScore += RPS_MATCHUPS2[round[1]][round[0]]
    }
    console.log("Part 2:", myScore)
    return myScore
}

RpsRoundsTotalScore(rounds)
RpsRoundsTotalScore2(rounds)

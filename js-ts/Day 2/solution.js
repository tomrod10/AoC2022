// Rock defeats Scissors, 
// Scissors defeats Paper, 
// Paper defeats Rock

// first column what opponent will play
// A - Rock
// B - Paper
// C - Scissor

// second column what I play
// X - Rock
// Y - Paper
// Z - Scissor

/**
 * --- SCORE ---
 * Pick:
 * A or X (Rock) - 1 pt
 * B or Y (Paper) - 2 pts
 * C or Z (Scissor) - 3 pts
 * 
 * result:
 * Lose - 0 pts
 * Draw - 3 pts (each)
 * Win - 6 pts
 */

// Part 1

import * as fs from "fs"

const getRpsRounds = () => {
    try {
        const rounds = fs.readFileSync("./input.txt", { encoding: "utf-8" }).split("\n")
        return rounds.map((round) => round.split(" "))
    } catch (err) {
        console.log(`Something went wrongs!: ${err}`)
    }
}

const RPS_MATCHUPS = {
    "X": { A: 4, B: 1, C: 7},
    "Y": { A: 8, B: 5, C: 2 },
    "Z": { A: 3, B: 9, C: 6 }
}

const RpsRoundsTotalScore = () => {
    const rounds = getRpsRounds()

    let myScore = 0

    for (let i = 0; i < rounds.length; i++) {
        const round = rounds[i]
        myScore += RPS_MATCHUPS[round[1]][round[0]]
    }
    console.log(myScore)
    return myScore
}

RpsRoundsTotalScore()

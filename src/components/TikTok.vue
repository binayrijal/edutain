<template>
<div class="container">
    <h1>Tik Tac Toe</h1>
    <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">
        <div v-for="(cell, colIndex) in row" :key="colIndex" class="cell" @click="makeMove(rowIndex, colIndex)">
            {{ cell }}
        </div>
    </div>
    <div v-if="winner" class="winner">Winner: {{ winner }}</div>
    <button v-if="winner || isDraw" @click="resetGame">Play Again</button>

</div>
</template>

  
<script>
import {
    reactive
} from 'vue';

export default {
    setup() {
        const state = reactive({
            grid: [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ],
            currentPlayer: 'X',
            winner: null
        });

        const makeMove = (rowIndex, colIndex) => {
            if (!state.grid[rowIndex][colIndex] && !state.winner) {
                state.grid[rowIndex][colIndex] = state.currentPlayer;
                if (checkWinner(rowIndex, colIndex)) {
                    state.winner = state.currentPlayer;
                } else if (isDraw()) {
                    state.winner = 'Draw';
                } else {
                    state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        };

        const checkWinner = (rowIndex, colIndex) => {
            const player = state.grid[rowIndex][colIndex];
            // Check row
            if (state.grid[rowIndex].every(cell => cell === player)) {
                return true;
            }
            // Check column
            if (state.grid.every(row => row[colIndex] === player)) {
                return true;
            }
            // Check diagonals
            if (rowIndex === colIndex && state.grid.every((row, i) => row[i] === player)) {
                return true;
            }
            if (rowIndex + colIndex === 2 && state.grid.every((row, i) => row[2 - i] === player)) {
                return true;
            }
            return false;
        };

        const isDraw = () => {
            return state.grid.every(row => row.every(cell => cell)) && !state.winner;
        };
        // const resetGame = () => {
        //     state.grid = [...initialState.grid];
        //     state.currentPlayer = initialState.currentPlayer;
        //     state.winner = initialState.winner;
        // };

        return {
            grid: state.grid,
            winner: state.winner,
            makeMove,
            isDraw,
            // resetGame
        };
    }
};
</script>

  
<style scoped>
.container {
    display: inline-block;
}

.row {
    display: flex;
}

.cell {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.winner {
    margin-top: 10px;
    font-weight: bold;
    color: green;
}

.draw {
    margin-top: 10px;
    font-weight: bold;
    color: red;
}
button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>

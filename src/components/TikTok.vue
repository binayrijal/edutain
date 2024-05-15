<template>
  <div class="game-container">
    <div class="container">
      <h1 class="title">Tic Tac Toe</h1>
      <div class="grid-container">
        <table class="grid">
          <tr v-for="(row, rowIndex) in grid" :key="rowIndex">
            <td v-for="(cell, colIndex) in row" :key="colIndex" class="cell" @click="makeMove(rowIndex, colIndex)">
              {{ cell }}
            </td>
          </tr>
        </table>
      </div>
      <div v-if="winner" class="winner">Winner: {{ winner }}</div>
      <button class="reset-button" @click="resetGame">Reset</button>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

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
          window.alert(`Player ${state.currentPlayer} wins!`);
          resetGame();
        } else if (isDraw()) {
          state.winner = 'Draw';
          window.alert('It\'s a draw!');
          resetGame();
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

    const resetGame = () => {
      // Clear all cells in the grid
      state.grid.forEach(row => {
        row.fill('');
      });
      state.currentPlayer = 'X';
      state.winner = null;
    };

    return {
      grid: state.grid,
      winner: state.winner,
      makeMove,
      resetGame
    };
  }
};
</script>

<style scoped>
/* Styles for the game container */


/* Styles for the container */
.container {
  background-color: rgb(236, 236, 236);
  padding: 20px;
  margin-left: 350px;
  border-radius: 60px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 40vh;
  transition: transform 0.3s ease;
}

.container:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 20px rgba(198, 16, 16, 0.3);
}

/* Styles for the title */
.title {
  font-size: 44px;
  margin-top:0.1px;
  margin-right:15px ;
}

/* Styles for the grid container */
.grid-container {
  margin-bottom: 20px;
}

/* Styles for the grid */
.grid {
  border-collapse: collapse;
  margin: 0 auto;
}

/* Styles for the cells in the grid */
.cell {
  width: 70px;
  height: 70px;
  border: 2px solid #333;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
}

/* Hover effect for the cells in the grid */
.cell:hover {
  background-color: #bae75e;
}

/* Styles for the winner message */
.winner {
  font-size: 18px;
  font-weight: bold;
  color: green;
  margin-bottom: 10px;
}

/* Styles for the reset button */
.reset-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 20px;
}

/* Hover effect for the reset button */
.reset-button:hover {
  background-color: #0056b3;
}
</style>
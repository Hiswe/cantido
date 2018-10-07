import { MUTATIONS as playerMutations } from '~/store/player'

export const mutations = {
  [playerMutations.BURN](state, payload) {
    const [x, y] = payload
    const currentTile = state.map[y][x]
    if (currentTile.type === 0 || currentTile.type === 4) return
    currentTile.type = 4
    state.player.score = state.player.score + 100
  },
}

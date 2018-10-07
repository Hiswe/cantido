import { MUTATIONS as playerMutations } from '~/store/player'

export const mutations = {
  [playerMutations.BURN](state, payload) {
    const [x, y] = payload
    const currentTile = state.map[y][x]
    if (!currentTile.burnable || currentTile.burning) return
    currentTile.burning = true
    state.player.score = state.player.score + 100
  },
}

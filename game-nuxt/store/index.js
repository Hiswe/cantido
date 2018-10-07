import { MUTATIONS as playerMutations } from '~/store/player'

export const mutations = {
  [playerMutations.BURN](state, payload) {
    const [x, y] = payload
    const currentTile = state.map[y][x]
    if (currentTile.type === 0) return
    currentTile.type = 4
  },
}

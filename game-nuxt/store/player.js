import * as mapPosition from '../../utils/map-position'

export const MUTATIONS = {
  MOVE: `PLAYER_MOVE`,
  BURN: `PLAYER_BURN`,
}
const DIRECTIONS = [`up`, `right`, `down`, `left`]
export const ACTIONS = {
  MOVE: `PLAYER_MOVE`,
  BURN: `PLAYER_BURN`,
}

export const state = () => {
  return {
    position: [0, 0],
    life: 3,
    score: 0,
  }
}

export const getters = {
  pixelPosition(state) {
    return mapPosition.toPixel(state.position)
  },
}

export const mutations = {
  [MUTATIONS.MOVE](state, payload) {
    let [x, y] = state.position
    if (payload === `up`) y = y - 1
    if (payload === `down`) y = y + 1
    if (payload === `right`) x = x + 1
    if (payload === `left`) x = x - 1
    state.position = mapPosition.safePos([x, y])
  },
  [MUTATIONS.BURN](state, payload) {
    console.log(payload)
  },
}

export const actions = {
  [ACTIONS.MOVE](store, payload) {
    const { commit } = store
    if (!DIRECTIONS.includes(payload)) return
    commit(MUTATIONS.MOVE, payload)
  },
  [ACTIONS.BURN](store) {
    const { state, commit } = store
    commit(MUTATIONS.BURN, state.position, { root: true })
  },
}

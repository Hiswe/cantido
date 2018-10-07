import shortid from 'shortid'

import * as mapPosition from '~/utils/map-position'

export const NCP_TYPE = {
  FIREMAN: `fireman`,
  POLICE: `police`,
}

export const state = () => {
  return [{ position: [4, 4], id: shortid.generate(), type: NCP_TYPE.FIREMAN }]
}

export const getters = {
  list(state) {
    return state.map(npc => {
      const [x, y] = mapPosition.toPixel(npc.position)
      return {
        id: npc.id,
        position: { transform: `translate(${x}, ${y})` },
        icon: npc.type === NCP_TYPE.FIREMAN ? `🚒` : `🚓`,
      }
    })
  },
}

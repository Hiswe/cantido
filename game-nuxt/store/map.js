import random from 'lodash.random'

import mapSize from '~/utils/map-size'

export const state = () => {
  const columns = Array.from({ length: mapSize.WIDTH })
  const rows = Array.from({ length: mapSize.HEIGHT })

  const level = rows.map((row, rowIndex) => {
    return columns.map((col, colIndex) => {
      const type = random(0, 3)
      return {
        type,
        id: `${rowIndex}-${colIndex}`,
        burnable: type !== 0,
        burning: false,
      }
    })
  })
  return level
}

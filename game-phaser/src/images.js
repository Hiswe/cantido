import tileMap from '../assets/export/tile-map.png'
import player from '../assets/export/player.png'
import police from '../assets/export/police.png'
import fireman from '../assets/export/fireman.png'

const toLoad = [
  { name: `tileMap`, path: tileMap },
  { name: `player`, path: player },
  { name: ` police`, path: police },
  { name: ` fireman`, path: fireman },
].map(image => {
  image.key = `cantido-${image.name}`
  return image
})

const names = toLoad.reduce((acc, img) => {
  acc[img.name] = img.key
  return acc
}, {})

export { names }

export function load(scene) {
  const { load } = scene
  toLoad.forEach(image => {
    load.image(image.key, image.path)
  })
}

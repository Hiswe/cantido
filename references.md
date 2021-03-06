# References

Small analysis about previous iterations

##### FLCL King's game

- [Demo's Video](https://www.youtube.com/watch?v=lFo0Wrncpbk&list=WL&t=0s&index=41)
- no executable found
- nos source code found

##### [Marcello](https://github.com/marcello3d)'s game

- [Demo's video](https://www.youtube.com/watch?v=pQ7apOOWfMQ)
- [Github's repository](https://github.com/marcello3d/firestarter)
  direct link to the [asset folder](https://github.com/marcello3d/firestarter/tree/master/data)
- [a post](https://www.allegro.cc/forums/thread/519590/519951#target) where people try to compile the game
- [dev's website](https://marcello.cellosoft.com/)

##### [JackAstral](https://jackastral.newgrounds.com/)'s flash game

- [link the the game](https://www.newgrounds.com/portal/view/649434)
- [dev's twitter](https://twitter.com/JackAstral)

##### Table of Content

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [FLCL King's game](#flcl-kings-game)
  - [screens](#screens)
  - [game](#game)
    - [map](#map)
    - [avatar](#avatar)
    - [NPCs](#npcs)
    - [buildings](#buildings)
    - [score](#score)
- [from marcello's game](#from-marcellos-game)
  - [screens](#screens-1)
  - [game](#game-1)
    - [map](#map-1)
    - [avatar](#avatar-1)
    - [NPCs](#npcs-1)
    - [buildings](#buildings-1)
    - [score](#score-1)
- [JackAstral's flash game](#jackastrals-flash-game)
  - [screens](#screens-2)
  - [game](#game-2)
    - [map](#map-2)
    - [avatar](#avatar-2)
    - [NPCs](#npcs-2)
    - [buildings](#buildings-2)
    - [score](#score-2)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## FLCL King's [game](https://www.youtube.com/watch?v=lFo0Wrncpbk)

This is the closest to the game from the anime

### screens

- home
- game
- help
- about/story
- high score

### game

#### map

- classic isometric map with tiles
- is generated with any building or empty tile

#### avatar

- you just have an arrow indicating which tiles you are on
- have 3 lives
- can switch with a button between 3 weapons
- each weapon has a different area pattern
- weapon can be picked on the map
- weapons
  - matches – pattern `X`
  - lighter – pattern `XXX`
  - fire bombs – pattern
    ```
    .X.
    XXX
    .X.
    ```

#### NPCs

- 2 different kind of npc's
- represented by icons
- **police**
  - if on the same square => catch you
  - can't stop
- **firefighter** extinguish fire

#### buildings

- 5 types
- when burnt replaced by a black tile
- fire doesn't propagate

#### score

- each building you burn earn you points

## from marcello's [game](https://www.youtube.com/watch?v=pQ7apOOWfMQ)

### screens

- home
- game

### game

#### map

- classic isometric map with tiles
- is generated with roads & buildings
- roads define square buildings' blocks

#### avatar

- you have a physical avatar (a small stick figure)
- you can move on all the map
- can set fire to building
- have 3 life

#### NPCs

- 2 different kind of npc's
- represented by small vehicles
- can move only on roads
- **police**
  - if on the same square => catch you
  - can't stop
- **firefighter** rebuild buildings
  - have to stop to rebuild

#### buildings

- 3 types
- occupy only on tile
- are group randomly inside a block
- can have empty space in a block
- can be set on fire
- fire can propagate to adjacent tiles
- if burned => ruined
- if ruin => can be rebuild by firefighter

#### score

- each building you burn earn you points

## JackAstral's flash [game](https://www.newgrounds.com/portal/view/649434)

It's the most different game from the original gameplay

### screens

- home
- game
  - have expositions screens that are passed on click
  - expose the story
  - give you the game mechanics

### game

- have a time limit (365 days) to burn as many buildings as you can
- have 3 buttons
  - about
  - hideout
  - shop
- have a police gauge that increment automatically
- time decrement automatically

#### map

- it's an isometric map
- full of the same building

#### avatar

- don't have
- just click on the building to burn
- click on the hideout button to hide from police (remove 5 days)

#### NPCs

none

#### buildings

one type

#### score

import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import { cube } from 'src/game'
import { invisibleOff, invisibleOn } from "./../functions"
import {room_5_1, room_5_2, room_5_3, room_5_4} from "./../game"

let state = 1
let isPlus = false
let isMinus = false

function state_5() {
    isMinus = false
    isPlus = false
    const plusTrigger = new Entity()
    const shape1 = new BoxShape()
    plusTrigger.addComponent(shape1)
    shape1.visible = true
    plusTrigger.getComponent(BoxShape).withCollisions = false
    plusTrigger.addComponent(new Transform({ position: new Vector3(10.8, 2, 12.6), scale: new Vector3(0.2, 2, 1) }))
    let trigger11Box = new utils.TriggerBoxShape()
    plusTrigger.addComponent(
      new utils.TriggerComponent(
        trigger11Box,
        {
          onCameraEnter:
            () => {
                if(isMinus == true){
                    changeRoom(room_5_1, room_5_2, room_5_3, room_5_4)
                    isPlus = false
                }
                else{
                    isPlus = true
                }
                log(isPlus)
            }
        }
      )
    )
    engine.addEntity(plusTrigger)

    const minusTrigger = new Entity()
    const shape2 = new BoxShape()
    minusTrigger.addComponent(shape2)
    shape2.visible = false
    minusTrigger.getComponent(BoxShape).withCollisions = false
    minusTrigger.addComponent(new Transform({ position: new Vector3(10.1, 2, 12.5), scale: new Vector3(0.2, 2, 1) }))
    let trigger2Box = new utils.TriggerBoxShape()
    minusTrigger.addComponent(
      new utils.TriggerComponent(
        trigger2Box,
        {
          onCameraEnter:
            () => {
                if(state == 3 || state == 0){
                    isMinus = false
                    isPlus = false
                }
                if(isPlus == true){
                    isMinus = false
                    changeRoom(room_5_1, room_5_2, room_5_3, room_5_4)
                }
                else{
                    isMinus = true
                }
            }
        }
      )
    )
    engine.addEntity(minusTrigger)
}

function plus() {
    state += 1
    changeRoom(room_5_1, room_5_2, room_5_3, room_5_4)
}

function minus() {
    state -= 1
    changeRoom(room_5_1, room_5_2, room_5_3, room_5_4)
}

function changeRoom(room_5_1: Entity, room_5_2: Entity, room_5_3: Entity, room_5_4: Entity) {
    if(isPlus == true){
        state += 1
    }
    else{
        state -= 1
    }
    log(state)
    if(state == 0){
        const playerX = Camera.instance.position.x
        const playerZ = Camera.instance.position.z
        movePlayerTo({ x: playerX, y: 0, z: playerZ})
        invisibleOn(room_5_1)
        invisibleOn(room_5_2)
        invisibleOn(room_5_3)
        invisibleOff(room_5_4)
    }
    if(state == 1){
        const playerX = Camera.instance.position.x
        const playerZ = Camera.instance.position.z
        movePlayerTo({ x: playerX, y: 0, z: playerZ})
        invisibleOn(room_5_4)
        invisibleOn(room_5_3)
        invisibleOn(room_5_2)
        invisibleOff(room_5_1)
    }
    if(state == 2){
        const playerX = Camera.instance.position.x
        const playerZ = Camera.instance.position.z
        movePlayerTo({ x: playerX, y: 0, z: playerZ})
        invisibleOn(room_5_1)
        invisibleOn(room_5_3)
        invisibleOn(room_5_4)
        invisibleOff(room_5_2)
    }
    if(state == 3){
        const playerX = Camera.instance.position.x
        const playerZ = Camera.instance.position.z
        movePlayerTo({ x: playerX, y: 0, z: playerZ})
        invisibleOn(room_5_2)
        invisibleOn(room_5_4)
        invisibleOn(room_5_1)
        invisibleOff(room_5_3)
    }
}

export {minus, plus, state_5}
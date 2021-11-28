import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import { invisibleOff, invisibleOn } from "./../functions"
import {state_3_respawn_d2} from "./state_3_respawn_d2"

let opened = false
let door1opened = true

function respawn(door_1: Entity, door_2: Entity, door_3: Entity, room_3: Entity, appendix: Entity, door_4: Entity, door_5: Entity, trigger: Entity, room1: Entity){
    // appendix.getComponent(Transform).position = new Vector3(5.63, 0, 2.75)
    appendix.getComponent(Transform).position.x -= 2.37
    appendix.getComponent(Transform).position.z -= 5.25
    door_3.getComponent(Transform).position.x -= 2.37
    door_3.getComponent(Transform).position.z -= 5.25
    door_4.getComponent(Transform).position.x -= 2.37
    door_4.getComponent(Transform).position.z -= 5.25
    door_5.getComponent(Transform).position.x -= 2.37
    door_5.getComponent(Transform).position.z -= 5.25

    engine.removeEntity(trigger)
    invisibleOn(door_3)
    invisibleOn(room1)

    door_1.getComponent(Animator).getClip("State1").play()


    const playerX = Camera.instance.position.x
    const playerZ = Camera.instance.position.z
    movePlayerTo({x: playerX - 2.37, y: 0, z: playerZ - 5.25})

    door_2.addComponentOrReplace(new OnPointerDown(
        ()=>{
            state_3_respawn_d2(door_1, door_2, door_3, room_3, appendix, door_4, door_5)
        }
    ))
}

function state_3_respawn_d3(door_1: Entity, door_2: Entity, door_3: Entity, room_3: Entity, appendix: Entity, door_4: Entity, door_5: Entity, trigger: Entity, room1: Entity) {
    const animator_d2 = door_2.getComponent(Animator)
    const close_animation_d2 = animator_d2.getClip("State2")
    if(!close_animation_d2.playing){
        close_animation_d2.play()
        door_2.addComponent(
            new utils.Delay(1000, () => {
                respawn(door_1, door_2, door_3, room_3, appendix, door_4, door_5, trigger, room1)
            })
        )
    }else{
        respawn(door_1, door_2, door_3, room_3, appendix, door_4, door_5, trigger, room1)
    }
}

export {state_3_respawn_d3}

// 1 - чек на закрытую дверь
// 2 - закрытие двери(опционально)
// 3 - когда дверь закрыта - происходит деспавн основной комнаты, телепортация аппендикса и игрока в край парселя, спавн новой 3-ей комнаты
// 4 - открытие двери
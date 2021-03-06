import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import { invisibleOff, invisibleOn } from "./../functions"

let opened = false
let door1opened = true

function respawn(door_1: Entity, door_2: Entity, door_3: Entity, door3_1: Entity, room_3: Entity, appendix: Entity, door_4: Entity, door_5: Entity){
    // appendix.getComponent(Transform).position = new Vector3(5.63, 0, 2.75)
    invisibleOff(door_3)
    appendix.getComponent(Transform).position.x += 2.37
    appendix.getComponent(Transform).position.z += 5.2
    door_3.getComponent(Transform).position.x += 2.37
    door_3.getComponent(Transform).position.z += 5.2
    door3_1.getComponent(Transform).position.x += 2.37
    door3_1.getComponent(Transform).position.z += 5.2
    door_4.getComponent(Transform).position.x += 2.37
    door_4.getComponent(Transform).position.z += 5.2
    door_5.getComponent(Transform).position.x += 2.37
    door_5.getComponent(Transform).position.z += 5.2

    door_2.getComponent(Animator).getClip("State1").play()
}

function state_3_respawn_d2(door_1: Entity, door_2: Entity, door_3: Entity, door3_1: Entity, room_3: Entity, appendix: Entity, door_4: Entity, door_5: Entity) {
    const animator_d1 = door_1.getComponent(Animator)
    door_2.removeComponent(OnPointerDown)
    const close_animation_d1 = animator_d1.getClip("State2")
    if(!close_animation_d1.playing){
        close_animation_d1.play()
        door_2.addComponent(
            new utils.Delay(1000, () => {
                respawn(door_1, door_2, door_3, door3_1, room_3, appendix, door_4, door_5)
                //invisibleOff(door3_1)
            })
        )
    }else{
        respawn(door_1, door_2, door_3, door3_1, room_3, appendix, door_4, door_5)
    }
}

export {state_3_respawn_d2}

// 1 - чек на закрытую дверь
// 2 - закрытие двери(опционально)
// 3 - когда дверь закрыта - происходит деспавн основной комнаты, телепортация аппендикса и игрока в край парселя, спавн новой 3-ей комнаты
// 4 - открытие двери
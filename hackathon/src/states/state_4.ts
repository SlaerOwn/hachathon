import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import { invisibleOff, invisibleOn } from "./../functions"

let opened = false
let door2opened = true
let door5opened = true

function state_4(door_2: Entity, door_3: Entity, door_4: Entity, door_5: Entity, apendix: Entity, room_4_1: Entity, room_4_2: Entity) {
    invisibleOff(room_4_1)
    const animator = door_5.getComponent(Animator)
    const open_animation = animator.getClip("State1")
    const close_animation = animator.getClip("State2")
    if(opened){
        close_animation.play()
        opened = false
    }else{
        if(door2opened == true){
            door_2.getComponent(Animator).getClip("State2").play()
            door_2.removeComponent(OnPointerDown)
            door2opened = false
        }
        apendix.getComponent(Transform).position.z -=1
        door_2.getComponent(Transform).position.z -=1
        door_3.getComponent(Transform).position.z -=1
        door_4.getComponent(Transform).position.z -=1
        door_5.getComponent(Transform).position.z -=1
        const playerX = Camera.instance.position.x
        const playerY = Camera.instance.position.y
        const playerZ = Camera.instance.position.z
        movePlayerTo({x: playerX, y: playerY, z: playerZ - 1})
        door_2.addComponent(
            new utils.Delay(1000, () => {
                open_animation.play()
                opened = true
            })
        )
    }
}

function state4_1(door_5:Entity, door_6: Entity, room_4_2: Entity) {
    const animator = door_5.getComponent(Animator)
    const open_animation = animator.getClip("State1")
    const close_animation = animator.getClip("State2")
    if(opened){
        close_animation.play()
        opened = false
    }else{
        if(door2opened == true){
            door_5.getComponent(Animator).getClip("State2").play()
            door_5.removeComponent(OnPointerDown)
            door2opened = false
        }
        const playerX = Camera.instance.position.x
        const playerY = Camera.instance.position.y
        const playerZ = Camera.instance.position.z
        movePlayerTo({x: playerX, y: playerY, z: playerZ - 7.5})
        door_5.addComponent(
            new utils.Delay(1000, () => {
                open_animation.play()
                opened = true
            })
        )
    }
}

export {state_4}
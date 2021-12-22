import { invisibleOff, invisibleOn } from "./../functions"
import{setRoom} from "./../tips"
import{invOFF} from "./../init"
import { state_1 } from "./state_1"


let opened = false
let isTriggered = false

function state_6(door: Entity, room_6: Entity, like: Entity) {
    const animator = door.getComponent(Animator)
    const open_animation = animator.getClip("State1")
    const close_animation = animator.getClip("State2")
    setRoom(1)
    if(opened){
        close_animation.play()
        opened = false
    }else{
        open_animation.play()
        opened = true
        if(isTriggered == true){
            invisibleOn(room_6)
            door.removeComponent(OnPointerDown)
            like.getComponent(GLTFShape).visible = true
            invOFF()
        }
    }
}

function state_6trigger(state:boolean) {
    isTriggered = state
}

export {state_6, state_6trigger}
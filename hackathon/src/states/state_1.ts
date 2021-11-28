import { invisibleOff } from "./../functions"
import{setRoom} from "./../tips"

let opened = false
let isTriggered = false

function state_1(door: Entity, room_2: Entity, cube: Entity) {
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
            invisibleOff(room_2)
            cube.getComponent(BoxShape).visible = true
            setRoom(2)
        }
    }
}

function state_1trigger(state:boolean) {
    isTriggered = state
}

export {state_1, state_1trigger}
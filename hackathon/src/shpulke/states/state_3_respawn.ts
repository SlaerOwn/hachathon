import * as utils from '@dcl/ecs-scene-utils'

let opened = false
let door1opened = true

function state_3_respawn(door_1: Entity, door_2: Entity) {
    const animator = door_2.getComponent(Animator)
    const open_animation = animator.getClip("State1")
    const close_animation = animator.getClip("State2")
    if(opened){
        //close_animation.play()
        opened = false
    }else{
        if(door1opened == true){
            door_1.getComponent(Animator).getClip("State2").play()
            door_1.removeComponent(OnPointerDown)
            door1opened = false
        }
        door_1.addComponent(
            new utils.Delay(1000, () => { 
                open_animation.play()
                opened = true
            })
          )
    }
}

export {state_3_respawn}

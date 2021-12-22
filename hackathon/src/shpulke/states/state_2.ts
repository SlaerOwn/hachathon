import { invisibleOff, invisibleOn } from "./../functions"
import{setRoom} from "./../tips"

function state_2(door_2: Entity, room_1: Entity, room_2: Entity, apendix: Entity, cube: Entity, door_3: Entity, door_4: Entity, door_5: Entity) {
    invisibleOn(room_1)
    invisibleOff(room_2)
    cube.getComponent(BoxShape).visible = false
    invisibleOff(door_2)
    invisibleOff(apendix)
    invisibleOff(door_3)
    //invisibleOff(door_4)
    invisibleOff(door_5)
    setRoom(3)
}
export {state_2}
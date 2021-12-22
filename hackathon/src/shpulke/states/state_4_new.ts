import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import { invisibleOff, invisibleOn } from "./../functions"
import { state_5 } from './state_5'
import{setRoom} from "./../tips"

let door4opened = false
let door2opened = true
let door5opened = true
let room_5_1_: Entity;
let room_4_: Entity;
let first_enter = true;
let exit_trigger_active = false;
let spawned = false

function state_4(door_2: Entity, door_3: Entity, door3_1: Entity, door_4: Entity, door_5: Entity, apendix: Entity,
    room_4_1: Entity, room_4_2: Entity, door_6: Entity, door_7: Entity, room_5_1: Entity, room_3: Entity,
    room_1: Entity, door_1: Entity) {

    invisibleOff(room_4_1)
    room_5_1_ = room_5_1
    room_4_ = room_4_2
    invisibleOn(door3_1)

    door_4.removeComponent(OnPointerDown)
    door_5.removeComponent(OnPointerDown)
}

export {state_4}
import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import { invisibleOff, invisibleOn } from "./../functions"
import { state_5 } from './state_5'
import { setRoom } from "./../tips"
import * as game from "./../init"

let door4opened = false
let door2opened = true
let door5opened = true
let room_5_1_: Entity;
let room_4_: Entity;
let first_enter = true;
let exit_trigger_active = false;
let spawned = false

class RotationObserver {

    update(dt: number) {
        let y = Camera.instance.rotation.eulerAngles.y
        if (y > 170 && y < 190) {
            if (!spawned) {
                log("SPAWN")
                invisibleOff(room_5_1_)
                invisibleOn(room_4_)
                spawned = true
            }
        } else {
            if (spawned) {
                log("DESPAWN")
                invisibleOn(room_5_1_)
                invisibleOff(room_4_)
                spawned = false
            }
        }
    }
}
const system = new RotationObserver()

function state_4(door_2: Entity, door_3: Entity, door3_1: Entity, door_4: Entity, door_5: Entity, apendix: Entity,
    room_4_1: Entity, room_4_2: Entity, door_6: Entity, door_7: Entity, room_5_1: Entity, room_3: Entity,
    room_1: Entity, door_1: Entity, door5: Entity, room_5_2: Entity, room_5_3: Entity, room_5_4: Entity, room_6: Entity, cubeTrigger: Entity) {
    invisibleOff(room_4_1)
    room_5_1_ = room_5_1
    room_4_ = room_4_2
    invisibleOn(door3_1)

    door_4.removeComponent(OnPointerDown)
    door_5.removeComponent(OnPointerDown)

    const exittrigger = new Entity()
    const shape1 = new BoxShape()
    exittrigger.addComponent(shape1)
    shape1.visible = false;
    exittrigger.getComponent(BoxShape).withCollisions = false
    exittrigger.addComponent(new Transform({ position: new Vector3(10.5 + game._x, 2, 8 + game._z), scale: new Vector3(1, 2, 1) }))
    let trigger2Box = new utils.TriggerBoxShape()
    exittrigger.addComponent(
        new utils.TriggerComponent(
            trigger2Box,
            {
                onCameraEnter:
                    () => {
                        log("exittrigger: " + exit_trigger_active)
                        if (exit_trigger_active) {
                            door_6.removeComponent(OnPointerDown)
                            engine.removeEntity(room_3)
                            engine.removeEntity(door_2)
                            engine.removeEntity(door_3)
                            engine.removeEntity(door_4)
                            invisibleOn(room_1)
                            invisibleOn(door_1)
                            engine.removeSystem(system)
                            engine.removeEntity(firsttrigger)
                            engine.removeEntity(secondtrigger)
                            engine.removeEntity(exittrigger)
                            state_5(door5, room_4_1, room_5_1, room_5_2, room_5_3, room_5_4, room_6, cubeTrigger)
                            setRoom(5)
                        }
                    }
            }
        )
    )
    engine.addEntity(exittrigger)

    const firsttrigger = new Entity()
    const shape2 = new BoxShape()
    firsttrigger.addComponent(shape2)
    shape2.visible = false;
    firsttrigger.getComponent(BoxShape).withCollisions = false
    firsttrigger.addComponent(new Transform({ position: new Vector3(10.5 + game._x, 2, 3.5 + game._z), scale: new Vector3(1, 1, 1) }))
    let trigger1Box = new utils.TriggerBoxShape(new Vector3(1, 4, 7))
    firsttrigger.addComponent(
        new utils.TriggerComponent(
            trigger1Box,
            {
                onCameraEnter:
                    () => {
                        log("firsttrigger entered")
                        engine.addSystem(system)
                        if (first_enter) {
                            door_5.getComponent(Animator).getClip("State2").play()
                            invisibleOff(door_6)
                            invisibleOff(room_4_2)
                            first_enter = false
                        }
                        //exit_trigger_active = true
                    },
                onCameraExit:
                    () => {
                        log("firsttrigger exited")
                        engine.removeSystem(system)
                        exit_trigger_active = false
                        log("DESPAWN")
                        invisibleOn(room_5_1_)
                        invisibleOff(room_4_)
                        spawned = false
                    }
            }
        )
    )
    engine.addEntity(firsttrigger)

    const secondtrigger = new Entity()
    const shape3 = new BoxShape()
    secondtrigger.addComponent(shape3)
    shape3.visible = false
    secondtrigger.getComponent(BoxShape).withCollisions = false
    secondtrigger.addComponent(new Transform({ position: new Vector3(10.5 + game._x, 2, 5 + game._z), scale: new Vector3(1, 2, 1) }))
    let trigger3Box = new utils.TriggerBoxShape()
    secondtrigger.addComponent(
        new utils.TriggerComponent(
            trigger3Box,
            {
                onCameraEnter:
                    () => {
                        log("secondtrigger entere")
                        exit_trigger_active = true
                    }
            }
        )
    )
    engine.addEntity(secondtrigger)

    const teleport_1 = new Entity()
    const shape4 = new BoxShape()
    teleport_1.addComponent(shape4)
    shape4.visible = false
    teleport_1.getComponent(BoxShape).withCollisions = false
    teleport_1.addComponent(new Transform({ position: new Vector3(10.5 + game._x, 2, 3 + game._z), scale: new Vector3(1, 2, 1) }))
    let trigger_teleport_1Box = new utils.TriggerBoxShape()
    teleport_1.addComponent(
        new utils.TriggerComponent(
            trigger_teleport_1Box,
            {
                onCameraEnter:
                    () => {
                        log("teleport1 entered")
                        exit_trigger_active = false
                    }
            }
        )
    )
    engine.addEntity(teleport_1)



    const animator = door_5.getComponent(Animator)
    const open_animation = animator.getClip("State1")
    const close_animation = animator.getClip("State2")
    if (door4opened) {
        close_animation.play()
        door4opened = false
    } else {
        if (door2opened == true) {
            door_2.getComponent(Animator).getClip("State2").play()
            door_2.removeComponent(OnPointerDown)
            door2opened = false
        }
        apendix.getComponent(Transform).position.z -= 1
        door_2.getComponent(Transform).position.z -= 1
        door_3.getComponent(Transform).position.z -= 1
        door_4.getComponent(Transform).position.z -= 1
        door_5.getComponent(Transform).position.z -= 1
        const playerX = Camera.instance.position.x
        const playerZ = Camera.instance.position.z
        movePlayerTo({ x: playerX, y: 0, z: playerZ - 1 })
        door_2.addComponent(
            new utils.Delay(1000, () => {
                open_animation.play()
                door4opened = true
            })
        )
        door_4.removeComponent(OnPointerDown)
    }

    invisibleOff(door_7)

    door_7.addComponentOrReplace(new OnPointerDown(
        () => {
            state4_1(door_5, door_6, room_4_2, door_7, room_5_1)
            invisibleOn(apendix)
            invisibleOn(door_3)
            invisibleOn(door_4)
            invisibleOff(door_6)
            invisibleOff(room_4_2)
        },
        {
            button: ActionButton.POINTER,
            distance: 5,
            showFeedback: true,
            hoverText: "Open/close door",
        }
    ))
}

function state4_1(door_5: Entity, door_6: Entity, room_4_2: Entity, door_7: Entity, room_5_1: Entity) {
    const animator_5 = door_5.getComponent(Animator)
    const open_animation_5 = animator_5.getClip("State1")
    if (door2opened == true) {
        door_5.getComponent(Animator).getClip("State2").play()
        door_5.removeComponent(OnPointerDown)
        door2opened = false
    }
    const playerX = Camera.instance.position.x
    const playerZ = Camera.instance.position.z
    movePlayerTo({ x: playerX, y: 0, z: playerZ + 7.5 })
    open_animation_5.play()
    door4opened = true
    door_7.addComponentOrReplace(new OnPointerDown(
        () => {
            state4_1(door_5, door_6, room_4_2, door_7, room_5_1)
        },
        {
            button: ActionButton.POINTER,
            distance: 5,
            showFeedback: true,
            hoverText: "Open/close door",
        }
    ))
}

function state4_2(door_5: Entity, door_6: Entity, room_4_2: Entity, room_5_1: Entity) {
    const animator_5 = door_5.getComponent(Animator)
    const open_animation_5 = animator_5.getClip("State1")
    if (door2opened == true) {
        door_5.getComponent(Animator).getClip("State2").play()
        door_5.removeComponent(OnPointerDown)
        door2opened = false
    }
    const playerX = Camera.instance.position.x
    const playerZ = Camera.instance.position.z
    movePlayerTo({ x: playerX, y: 0, z: playerZ + 7.5 })
    open_animation_5.play()
    door4opened = true
}

export { state_4 }
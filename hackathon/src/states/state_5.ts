import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import { cube } from 'src/game'
import { invisibleOff, invisibleOn } from "./../functions"
import {door5, room_4_1, room_5_1, room_5_2, room_5_3, room_5_4, room_6, cubeTrigger} from "./../game"

let state = 1
let isPlus = false
let isMinus = false
let isDoorClose = false

function state_5() {
    isMinus = false
    isPlus = false
    const plusTrigger = new Entity()
    const shape1 = new BoxShape()
    plusTrigger.addComponent(shape1)
    shape1.visible = false
    plusTrigger.getComponent(BoxShape).withCollisions = false
    plusTrigger.addComponent(new Transform({ position: new Vector3(10.8, 2, 12.6), scale: new Vector3(0.2, 2, 1) }))
    let trigger11Box = new utils.TriggerBoxShape(new Vector3(0.2, 2, 1))
    plusTrigger.addComponent(
      new utils.TriggerComponent(
        trigger11Box,
        {
          onCameraEnter:
            () => {
                log("plus")
                if(isMinus == true){
                    changeRoom(door5, room_4_1, room_5_1, room_5_2, room_5_3, room_5_4, room_6)
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
    let trigger2Box = new utils.TriggerBoxShape(new Vector3(0.2, 2, 1))
    minusTrigger.addComponent(
      new utils.TriggerComponent(
        trigger2Box,
        {
          onCameraEnter:
            () => {
                log("minus")

                if(isPlus == true){
                    isMinus = false
                    changeRoom(door5, room_4_1, room_5_1, room_5_2, room_5_3, room_5_4, room_6)
                }
                else{
                    isMinus = true
                }
            }
        }
      )
    )
    engine.addEntity(minusTrigger)

const flagTrigger = new Entity()
const shape3 = new BoxShape()
flagTrigger.addComponent(shape3)
shape3.visible = false
flagTrigger.getComponent(BoxShape).withCollisions = false
flagTrigger.addComponent(new Transform({ position: new Vector3(10.37, 2, 8.69), scale: new Vector3(1.7, 2, 3.2) }))
let trigger3Box = new utils.TriggerBoxShape(new Vector3(1.7, 2, 3.2))
flagTrigger.addComponent(
  new utils.TriggerComponent(
    trigger3Box,
    {
      onCameraEnter:
        () => {
                isPlus = false
                isMinus = false
            }
        }
  )
)
engine.addEntity(flagTrigger)
}

function plus() {
    state += 1
    changeRoom(door5, room_4_1, room_5_1, room_5_2, room_5_3, room_5_4, room_6)
}

function minus() {
    state -= 1
    changeRoom(door5, room_4_1, room_5_1, room_5_2, room_5_3, room_5_4, room_6)
}

function changeRoom(door5: Entity, room_4_1: Entity, room_5_1: Entity, room_5_2: Entity, room_5_3: Entity, room_5_4: Entity, room_6: Entity) {
    if(isPlus == true){
        state += 1
    }
    else{
        if(state == 0){
            state += 1
        }
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
        invisibleOn(room_4_1)
        invisibleOn(door5)
    }
    if(state == 1){
        const playerX = Camera.instance.position.x
        const playerZ = Camera.instance.position.z
        movePlayerTo({ x: playerX, y: 0, z: playerZ})
        invisibleOn(room_5_4)
        invisibleOn(room_5_3)
        invisibleOn(room_5_2)
        invisibleOff(room_5_1)
        invisibleOff(room_4_1)
        invisibleOff(door5)
        if(isDoorClose == false){
            door5.getComponent(Animator).getClip("State2").play()
            door5.removeComponent(OnPointerDown)
            isDoorClose = true
        }
    }
    if(state == 2){
        const playerX = Camera.instance.position.x
        const playerZ = Camera.instance.position.z
        movePlayerTo({ x: playerX, y: 0, z: playerZ})
        invisibleOn(room_5_1)
        invisibleOn(room_5_3)
        invisibleOn(room_5_4)
        invisibleOff(room_5_2)
        invisibleOn(room_4_1)
        invisibleOn(door5)
        invisibleOn(room_6)
    }
    if(state == 3){
        const playerX = Camera.instance.position.x
        const playerZ = Camera.instance.position.z
        movePlayerTo({ x: playerX, y: 0, z: playerZ})
        invisibleOn(room_5_2)
        invisibleOn(room_5_4)
        invisibleOn(room_5_1)
        invisibleOff(room_5_3)
        invisibleOff(room_6)
        cubeTrigger.getComponent(BoxShape).visible = true
    }
    isMinus = false
    isPlus = false
}

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

export {minus, plus, state_5}
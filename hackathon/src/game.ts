import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import { spawnEntity, spawnDoor, spawnInvisibleEntity, spawnInvisibleDoor, invisibleOff, invisibleOn } from "./functions"
import { state_1, state_1trigger } from "./states/state_1"
import { state_2 } from "./states/state_2"
import { state_3 } from './states/state_3'
import { state_3_respawn_d3 } from './states/state_3_respawn_d3'
import { state_4 } from './states/state_4'
import { minus, plus } from './states/state_5'
import{initializeTips, setRoom} from "./tips"

let state = 0

const room_1 = spawnEntity(new GLTFShape("models/room_1.glb"), 8, 0, 8)
const room_2 = spawnInvisibleEntity(new GLTFShape("models/room_2.glb"), 8, 1, 8)
const room_3 = spawnInvisibleEntity(new GLTFShape("models/room_3.glb"), 8, 1, 8)
const room_3_apendix = spawnInvisibleEntity(new GLTFShape("models/room_3_apendix.glb"), 8, 1, 8)
const room_3_apendix2 = spawnInvisibleEntity(new GLTFShape("models/room_3_apendix_2.glb"), 8, 1, 8)
const room_4_1 = spawnInvisibleEntity(new GLTFShape("models/room_4.glb"), 8, 1, 7)
const room_4_2 = spawnInvisibleEntity(new GLTFShape("models/room_4.glb"), 8, 1, 14.5)

const room_5_1 = spawnInvisibleEntity(new GLTFShape("models/room_5_1.glb"), 10.93, 1, 11.1 )
const room_5_2 = spawnInvisibleEntity(new GLTFShape("models/room_5_2.glb"), 8, 1, 11.74 )
const room_5_3 = spawnInvisibleEntity(new GLTFShape("models/room_5_3.glb"), 9.93, 1, 12.40 )
const room_5_4 = spawnInvisibleEntity(new GLTFShape("models/room_5_4.glb"), 8.19, 1, 20.15 )

const room_6 = spawnInvisibleEntity(new GLTFShape("models/room_6.glb"), 7.71, 1, 15.67 )

const cube = new Entity()
cube.addComponent(new BoxShape())
cube.addComponent(new Transform({ position: new Vector3(2.7, 2.3, 11.6) }))
engine.addEntity(cube)
cube.getComponent(Transform).scale.setAll(0.3)
cube.getComponent(BoxShape).visible = false


const cubeTrigger = new Entity()
cubeTrigger.addComponent(new BoxShape())
cubeTrigger.addComponent(new Transform({ position: new Vector3(8.8, 1.75, 6.8) }))
engine.addEntity(cubeTrigger)
cubeTrigger.getComponent(Transform).scale.setAll(0.3)
cubeTrigger.getComponent(BoxShape).visible = false
// cubeTrigger.getComponent(Material).albedoColor = Color4.Black()

const cubeLast = new Entity()
cubeLast.addComponent(new BoxShape())
cubeLast.addComponent(new Transform({ position: new Vector3(8.8, 1.75, 6.8) }))
engine.addEntity(cubeLast)
cubeLast.getComponent(Transform).scale.setAll(0.3)
cubeLast.getComponent(BoxShape).visible = false

cubeTrigger.addComponent(new OnPointerDown(
  () => {
    cubeLast.getComponent(BoxShape).visible = true
    invisibleOff(room_1)
    room_1.getComponent(Transform).position.y = 0
    door1.getComponent(Animator).getClip("State1").play()
    door1.removeComponent(OnPointerDown)
    invisibleOn(room_6)
    movePlayerTo(new Vector3(8, 0, 8))
    cubeTrigger.removeComponent(OnPointerDown)
  },
  {
    button: ActionButton.POINTER,
    distance: 5,
    showFeedback: true,
    hoverText: "Place a cube",
  }
));


const door1Trigger = new Entity()
const shape = new BoxShape()
door1Trigger.addComponent(shape)
shape.visible = false
door1Trigger.getComponent(BoxShape).withCollisions = false
door1Trigger.addComponent(new Transform({ position: new Vector3(8, 2, 8.2), scale: new Vector3(1, 2, 1) }))
let trigger1Box = new utils.TriggerBoxShape()
door1Trigger.addComponent(
  new utils.TriggerComponent(
    trigger1Box,
    {
      onCameraEnter:
        () => {
          state_1trigger(true)
        },
      onCameraExit:
        () => {
          state_1trigger(false)
        }
    }
  )
)
engine.addEntity(door1Trigger)


const door1 = spawnDoor(8, 1.2, 9.01)
const door2 = spawnInvisibleDoor(9, 1, 11.6315, Quaternion.Euler(0, -90, 0))
const door3 = spawnInvisibleDoor(10.369, 1, 14.25)
const door4 = spawnInvisibleDoor(11.71, 1, 11.6315, Quaternion.Euler(0, -90, 0))
const door5 = spawnInvisibleDoor(10.369, 1, 9.01)
const door6 = spawnInvisibleDoor(10.369, 1, 15.47)
const door7 = spawnInvisibleDoor(10.369, 1, 0.5)

engine.addEntity(door1)

cube.addComponent(new OnPointerDown(
  () => {
    log("B")
    state_2(door2, room_2, room_3, room_3_apendix, cube, door3, door4, door5)
    state = 4
  },
  {
    button: ActionButton.POINTER,
    distance: 5,
    showFeedback: true,
    hoverText: "Take a cube",
  }
));

door1.addComponent(new OnPointerDown(
  () => {
    state_1(door1, room_2, cube)
  },
  {
    button: ActionButton.POINTER,
    distance: 5,
    showFeedback: true,
    hoverText: "Open/close door",
  }

))

door2.addComponent(new OnPointerDown(
  () => {
    state_3(door1, door2)
  },
  {
    button: ActionButton.POINTER,
    distance: 5,
    showFeedback: true,
    hoverText: "Open/close door",
  }

))

door3.addComponent(new OnPointerDown(
  () => {
    state_3_respawn_d3(door1, door2, door3, room_3, room_3_apendix, door4, door5, door1Trigger, room_1)
  },
  {
    button: ActionButton.POINTER,
    distance: 5,
    showFeedback: true,
    hoverText: "Open/close door",
  }

))

door4.addComponent(new OnPointerDown( 
  () => {
    state_3(door1, door2)
  },
  {
    button: ActionButton.POINTER,
    distance: 2,
    showFeedback: true,
    hoverText: "Open/close door",
  }

))

door5.addComponent(new OnPointerDown(
  () => {
    state_4(door2, door3, door4, door5, room_3_apendix, room_4_1, room_4_2, door6, door7, room_5_1, room_3, room_1, door1)
  },
  {
    button: ActionButton.POINTER,
    distance: 2,
    showFeedback: true,
    hoverText: "Open/close door",
  }

))

door6.addComponent(new OnPointerDown(
  () => {
    // state_4(door2, door3, door4, door5, room_3_apendix, room_4_1, room_4_2)
  },
  {
    button: ActionButton.POINTER,
    distance: 2,
    showFeedback: true,
    hoverText: "Open/close door",
  }

))


export { cube }

const canvas = new UICanvas()
const text = new UIText(canvas)
text.value = "Please, use FIRST PERSON view!"
if(Camera.instance.cameraMode == CameraMode.ThirdPerson){
  text.visible = true
}else{
  text.visible = false
}
text.color = Color4.Red()
text.fontSize = 20

onCameraModeChangedObservable.add(({ cameraMode }) => {
  if(cameraMode == CameraMode.ThirdPerson)
    {
      text.visible = true
    }else{
      text.visible = false
    }
})

Input.instance.subscribe("BUTTON_DOWN", ActionButton.SECONDARY, false, (e) => {
  movePlayerTo(new Vector3(8, 100, 8))
})

initializeTips()

export {door5, room_4_1, room_5_1, room_5_2, room_5_3, room_5_4, room_6, cubeTrigger}
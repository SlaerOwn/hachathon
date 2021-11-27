import * as utils from '@dcl/ecs-scene-utils'
import { spawnEntity, spawnDoor, spawnInvisibleEntity, spawnInvisibleDoor } from "./functions"
import { state_1, state_1trigger } from "./states/state_1"
import { state_2 } from "./states/state_2"
import { state_3 } from './states/state_3'
import { state_3_respawn_d3 } from './states/state_3_respawn_d3'
import { state_4 } from './states/state_4'

let state = 0

const room_1 = spawnEntity(new GLTFShape("models/room_1.glb"), 8, 1, 8)
const room_2 = spawnInvisibleEntity(new GLTFShape("models/room_2.glb"), 8, 1, 8)
const room_3 = spawnInvisibleEntity(new GLTFShape("models/room_3.glb"), 8, 1, 8)
const room_3_apendix = spawnInvisibleEntity(new GLTFShape("models/room_3_apendix.glb"), 8, 1, 8)
const room_3_apendix2 = spawnInvisibleEntity(new GLTFShape("models/room_3_apendix_2.glb"), 8, 1, 8)
const room_4_1 = spawnInvisibleEntity(new GLTFShape("models/room_4.glb"), 8, 1, 7)
const room_4_2 = spawnInvisibleEntity(new GLTFShape("models/room_4.glb"), 8, 1, 14.5)

const cube = new Entity()
cube.addComponent(new BoxShape())
cube.addComponent(new Transform({ position: new Vector3(1.7, 1.2, 11.6) }))
engine.addEntity(cube)
cube.getComponent(Transform).scale.setAll(0.3)
cube.getComponent(BoxShape).visible = false

const door1Trigger = new Entity()
door1Trigger.addComponent(new BoxShape())
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


const door1 = spawnDoor(8, 1, 9.01)
const door2 = spawnInvisibleDoor(9, 1, 11.6315, Quaternion.Euler(0, -90, 0))
const door3 = spawnInvisibleDoor(10.369, 1, 14.25)
const door4 = spawnInvisibleDoor(11.71, 1, 11.6315, Quaternion.Euler(0, -90, 0))
const door5 = spawnInvisibleDoor(10.369, 1, 9.01)
const door6 = spawnInvisibleDoor(10.369, 1, 15.47)

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
    state_3_respawn_d3(door1, door2, door3, room_3, room_3_apendix, door4, door5, door1Trigger)
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
    distance: 5,
    showFeedback: true,
    hoverText: "Open/close door",
  }

))

door5.addComponent(new OnPointerDown(
  () => {
    state_4(door2, door3, door4, door5, room_3_apendix, room_4_1, room_4_2)
  },
  {
    button: ActionButton.POINTER,
    distance: 5,
    showFeedback: true,
    hoverText: "Open/close door",
  }

))

door6.addComponent(new OnPointerDown(
  () => {
    state_4(door2, door3, door4, door5, room_3_apendix, room_4_1, room_4_2)
  },
  {
    button: ActionButton.POINTER,
    distance: 5,
    showFeedback: true,
    hoverText: "Open/close door",
  }

))


export { cube }




// const animator = new Animator()

// door.addComponent(animator)

// const open = new AnimationState("State1")

// open.looping = false

// animator.addClip(open)

// const close = new AnimationState("State2")

// close.looping = false

// animator.addClip(close)

// engine.addEntity(door)

// let opened = false

// Input.instance.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, false, (e) => {
//   log(Camera.instance.rotation.eulerAngles.y);
//   if(opened){
//     close.play()
//     opened = false
//   }else{
//     open.play()
//     opened = true
//   }
// })
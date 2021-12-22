import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import { spawnEntity, spawnDoor, spawnInvisibleEntity, spawnInvisibleDoor, invisibleOff, invisibleOn, invisibleOff2 } from "./functions"
import { state_1, state_1trigger } from "./states/state_1"
import { state_6, state_6trigger } from "./states/state_6"
import { state_2 } from "./states/state_2"
import { state_3 } from './states/state_3'
import { state_3_respawn_d3 } from './states/state_3_respawn_d3'
import { state_4 } from './states/state_4'
import { cancel } from './states/state_5'
import{initializeTips, setRoom} from "./tips"
import { Like } from '../../src/components/Like/Like'


let _rockTile:Entity
let _rockTile2:Entity
let _rockTile3:Entity
let _largeFence:Entity
let _largeFence2:Entity
let _largeFence3:Entity
let _largeFence4:Entity
let _largeFence5:Entity
let _largeFence6:Entity
let _largeFence7:Entity
let _largeFence8:Entity
let _largeFence9:Entity
let _largeFence10:Entity
let _fenceEndModule:Entity
let _largeFence11:Entity
let _greenPoplars:Entity
let _bush:Entity
let _pond:Entity
let _balsamFlower:Entity
let _mediumForestLog:Entity
let _tallPinkAcaciaTree:Entity
let _parrot: Entity
let _x: float
let _z: float

function shpulke_init(x: float, z: float): void {

  _x = x
  _z = z

    const like = new Like(
        {
          position: new Vector3(5.5 + x, 0.75, 8.2 + z),
          rotation: Quaternion.Euler(0, 0, 0),
        },
        '61b90643dd08def8380ababd'
      )
      

      const modArea = new Entity()
      modArea.addComponent(
        new AvatarModifierArea({
          area: { box: new Vector3(16, 20, 16) },
          modifiers: [AvatarModifiers.HIDE_AVATARS],
        })
      )
      modArea.addComponent(
        new Transform({
          position: new Vector3(8 + x, 0, 8 + z),
        })
      )
      engine.addEntity(modArea)
      
      let state = 0
      
      const room_1 = spawnEntity(new GLTFShape("models/shpulke/room_1.glb"), 8, 0, 7.9)
      const room_2 = spawnInvisibleEntity(new GLTFShape("models/shpulke/room_2.glb"), 8, 1, 8)
      const room_3 = spawnInvisibleEntity(new GLTFShape("models/shpulke/room_3.glb"), 8, 1, 8)
      const room_3_apendix = spawnInvisibleEntity(new GLTFShape("models/shpulke/room_3_apendix.glb"), 8, 1, 8)
      const room_3_apendix2 = spawnInvisibleEntity(new GLTFShape("models/shpulke/room_3_apendix_2.glb"), 8, 1, 8)
      const room_4_1 = spawnInvisibleEntity(new GLTFShape("models/shpulke/room_4.glb"), 8, 1, 7)
      const room_4_2 = spawnInvisibleEntity(new GLTFShape("models/shpulke/room_4.glb"), 8, 1, 14.5)
      
      const room_5_1 = spawnInvisibleEntity(new GLTFShape("models/shpulke/room_5_1.glb"), 8, 1, 18.1)
      const room_5_2 = spawnInvisibleEntity(new GLTFShape("models/shpulke/room_5_2.glb"), 8, 1, 18.1)
      const room_5_3 = spawnInvisibleEntity(new GLTFShape("models/shpulke/room_5_3.glb"), 8, 1, 18.1)
      const room_5_4 = spawnInvisibleEntity(new GLTFShape("models/shpulke/room_5_4.glb"), 8, 1, 18.1)
      
      const room_6 = spawnInvisibleEntity(new GLTFShape("models/shpulke/room_6.glb"), 7.7, 1, 15 )
      
      
      
      const area = new Entity()
      const areashape = new BoxShape()
      area.addComponent(areashape)
      areashape.visible = false
      area.getComponent(BoxShape).withCollisions = false
      area.addComponent(new Transform({ position: new Vector3(8 + x, 0, 8 + z), scale: new Vector3(16, 20, 16) }))
      let triggerArea1 = new utils.TriggerBoxShape(new Vector3(16, 20, 16))
      area.addComponent(
        new utils.TriggerComponent(
          triggerArea1,
          {
            onCameraEnter:
              () => {
                uiContainer.visible = true
                alert.visible = true
              },
            onCameraExit:
              () => {
                uiContainer.visible = false
              }
          }
        )
      )
      engine.addEntity(area)

      
      
      
      
      
      // const plusTrigger = new Entity()
      // const shape1 = new BoxShape()
      // plusTrigger.addComponent(shape1)
      // shape1.visible = true
      // plusTrigger.getComponent(BoxShape).withCollisions = false
      // plusTrigger.addComponent(new Transform({ position: new Vector3(11, 2, 11.63), scale: new Vector3(0.2, 4, 1) }))
      // let trigger11Box = new utils.TriggerBoxShape(new Vector3(0.2, 2, 1))
      // plusTrigger.addComponent(
      //   new utils.TriggerComponent(
      //     trigger11Box,
      //     {
      //       onCameraEnter:
      //         () => {
      //             log("plus")
      //         }
      //     }
      //   )
      // )
      // engine.addEntity(plusTrigger)
      
      // const minusTrigger = new Entity()
      // const shape2 = new BoxShape()
      // minusTrigger.addComponent(shape2)
      // shape2.visible = true
      // minusTrigger.getComponent(BoxShape).withCollisions = false
      // minusTrigger.addComponent(new Transform({ position: new Vector3(9.8, 2, 11.63), scale: new Vector3(0.2, 2, 1) }))
      // let trigger2Box = new utils.TriggerBoxShape(new Vector3(0.2, 2, 1))
      // minusTrigger.addComponent(
      //   new utils.TriggerComponent(
      //     trigger2Box,
      //     {
      //       onCameraEnter:
      //         () => {
      //             log("minus")
      //         }
      //     }
      //   )
      // )
      // engine.addEntity(minusTrigger)
      
      // const flagTrigger = new Entity()
      // const shape3 = new BoxShape()
      // flagTrigger.addComponent(shape3)
      // shape3.visible = false
      // flagTrigger.getComponent(BoxShape).withCollisions = false
      // flagTrigger.addComponent(new Transform({ position: new Vector3(10.37, 2, 8.69), scale: new Vector3(1.7, 2, 3.2) }))
      // let trigger3Box = new utils.TriggerBoxShape(new Vector3(1.7, 2, 3.2))
      // flagTrigger.addComponent(
      // new utils.TriggerComponent(
      // trigger3Box,
      // {
      //   onCameraEnter:
      //     () => {
                 
      //         }
      //     }
      // )
      // )
      // engine.addEntity(flagTrigger)
      
      
      
      
      
      const strelka_1 = spawnInvisibleEntity(new GLTFShape("models/shpulke/strelka.glb"), 8, 0, 8 )
      const strelka_2 = spawnInvisibleEntity(new GLTFShape("models/shpulke/strelka.glb"), 8, 0, 8 )
      
      const cube = new Entity()
      cube.addComponent(new BoxShape())
      cube.addComponent(new Transform({ position: new Vector3(2.7 + x, 2.3, 11.6 + z) }))
      engine.addEntity(cube)
      cube.getComponent(Transform).scale.setAll(0.3)
      cube.getComponent(BoxShape).visible = false
      
      
      const cubeTrigger = new Entity()
      cubeTrigger.addComponent(new BoxShape())
      cubeTrigger.addComponent(new Transform({ position: new Vector3(8.7 + x, 1.75, 6.2 + z) }))
      engine.addEntity(cubeTrigger)
      cubeTrigger.getComponent(Transform).scale.setAll(0.3)
      cubeTrigger.getComponent(BoxShape).visible = false
      cubeTrigger.getComponent(BoxShape).withCollisions = false
      
      
      cubeTrigger.addComponent(new OnPointerDown(
        () => {
          const cubePos = new Entity()
          cubePos.addComponent(new BoxShape())
          cubePos.addComponent(new Transform({ position: new Vector3(8.2 + x, 1.9, 11.2 + z) }))
          engine.addEntity(cubePos)
          cubePos.getComponent(Transform).scale.setAll(0.3)
          cubePos.getComponent(BoxShape).visible = false
          cubePos.getComponent(BoxShape).withCollisions = false
          
          invisibleOn(room_5_3)
          invisibleOff(room_1)
          invisibleOff(door1)
          cancel()
          engine.removeEntity(door2)
          engine.removeEntity(door3)
          engine.removeEntity(door3_1)
          engine.removeEntity(door4)
          engine.removeEntity(door5)
          engine.removeEntity(door6)
          engine.removeEntity(door7)
          room_1.getComponent(Transform).position.y = 0
          Camera.instance.position.negate()
          movePlayerTo({x:8 + x, y:1.5, z:10 + z}, {x: cubePos.getComponent(Transform).position.x, y: cubePos.getComponent(Transform).position.y, z:cubePos.getComponent(Transform).position.z})
          door1.getComponent(Transform).position.y = 1
          room_6.getComponent(Transform).position = new Vector3(9.1 + x, 1.15, 2.2 + z)
          room_6.getComponent(Transform).rotation = Quaternion.Euler(0, 180, 0)
          cubeTrigger.getComponent(BoxShape).visible = false
      
          door1.addComponent(new OnPointerDown(
            () => {
              state_6(door1, room_6, like)
            },
            {
              button: ActionButton.POINTER,
              distance: 5,
              showFeedback: true,
              hoverText: "Open/close door",
            }
          
          ))
        },
        {
          button: ActionButton.POINTER,
          distance: 5,
          showFeedback: true,
          hoverText: "Place a cube",
        }
      ));
      
      
      
      
      
      const door2Trigger = new Entity()
      const shape2 = new BoxShape()
      door2Trigger.addComponent(shape2)
      shape2.visible = false
      door2Trigger.getComponent(BoxShape).withCollisions = false
      door2Trigger.addComponent(new Transform({ position: new Vector3(8 + x, 2, 8.2 + z), scale: new Vector3(1, 2, 1) }))
      let trigger2Box = new utils.TriggerBoxShape()
      door2Trigger.addComponent(
        new utils.TriggerComponent(
          trigger2Box,
          {
            onCameraEnter:
              () => {
                state_6trigger(true)
              },
            onCameraExit:
              () => {
                state_6trigger(false)
              }
          }
        )
      )
      engine.addEntity(door2Trigger)
      
      const door1Trigger = new Entity()
      const shape = new BoxShape()
      door1Trigger.addComponent(shape)
      shape.visible = false
      door1Trigger.getComponent(BoxShape).withCollisions = false
      door1Trigger.addComponent(new Transform({ position: new Vector3(8 + x, 2, 8.2 + z), scale: new Vector3(1, 2, 1) }))
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
      const door3_1 = spawnInvisibleDoor(9, 1, 11.6315, Quaternion.Euler(0, -90, 0))
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
          state_1(door1, room_2, cube, like)
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
          state_3_respawn_d3(door1, door2, door3, door3_1, room_3, room_3_apendix, door4, door5, door1Trigger, room_1)
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
          state_4(door2, door3, door3_1, door4, door5, room_3_apendix, room_4_1, room_4_2, door6, door7, room_5_1, room_3, room_1, door1, door5, room_5_2, room_5_3, room_5_4, room_6, cubeTrigger)
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
      
      const canvas = new UICanvas()

      const uiContainer = new UIText(canvas)
      uiContainer.vAlign = "top"
      uiContainer.hAlign = "left"
      uiContainer.width = "100%"
      uiContainer.height = "100%"

      const alert = new UIContainerRect(uiContainer)
      alert.color = Color4.White()
      alert.hAlign = "center"
      alert.vAlign = "center"
      alert.positionY = 100
      alert.height = 100
      alert.width = 500
      
      const text = new UIText(alert)
      const text_2 = new UIText(uiContainer)
      text.value = "Please, use FIRST PERSON view!\nIf you see this message when playing\nin first person, press \"V\" 2 times"
      text_2.value = "Press E to see hint"
      text.color = Color4.Red()
      text.hTextAlign = "center"
      text.vTextAlign = "center"
      text.fontSize = 20
      text_2.vAlign = "top"
      text_2.hAlign = "left"
      text_2.paddingLeft = 170
      text_2.paddingBottom = -550
      text_2.fontSize = 20
      
      

      onCameraModeChangedObservable.add(({ cameraMode }) => {
        if(cameraMode == CameraMode.ThirdPerson)
          {
            alert.visible = true
          }else{
            alert.visible = false
          }
      })
      

      
      initializeTips(uiContainer)
      
      uiContainer.visible = false
      

      const _scene = new Entity('_scene')
      engine.addEntity(_scene)
      const transform = new Transform({
        position: new Vector3(x, 0, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      _scene.addComponentOrReplace(transform)
      
      const centipedeGrass = new Entity('centipedeGrass')
      engine.addEntity(centipedeGrass)
      centipedeGrass.setParent(_scene)
      const gltfShape = new GLTFShape("models/shpulke/ea013d0a-8f70-44ca-be3d-706d46cb7ed2/FloorBaseGrass_02/FloorBaseGrass_02.glb")
      gltfShape.withCollisions = true
      gltfShape.isPointerBlocker = true
      gltfShape.visible = true
      centipedeGrass.addComponentOrReplace(gltfShape)
      const transform2 = new Transform({
        position: new Vector3(8, 0, 8),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      centipedeGrass.addComponentOrReplace(transform2)
      
      
      const rockTile = new Entity('rockTile')
      engine.addEntity(rockTile)
      rockTile.setParent(_scene)
      const transform3 = new Transform({
        position: new Vector3(8, 0, 14),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      rockTile.addComponentOrReplace(transform3)
      const gltfShape2 = new GLTFShape("models/shpulke/5df296c5-f070-44dc-9ba2-8cafe7852037/FloorBlock_04/FloorBlock_04.glb")
      gltfShape2.withCollisions = true
      gltfShape2.isPointerBlocker = true
      gltfShape2.visible = true
      rockTile.addComponentOrReplace(gltfShape2)
      
      const rockTile2 = new Entity('rockTile2')
      engine.addEntity(rockTile2)
      rockTile2.setParent(_scene)
      const transform4 = new Transform({
        position: new Vector3(8, 0, 12),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      rockTile2.addComponentOrReplace(transform4)
      rockTile2.addComponentOrReplace(gltfShape2)
      
      const rockTile3 = new Entity('rockTile3')
      engine.addEntity(rockTile3)
      rockTile3.setParent(_scene)
      const transform5 = new Transform({
        position: new Vector3(8, 0, 10),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      rockTile3.addComponentOrReplace(transform5)
      rockTile3.addComponentOrReplace(gltfShape2)
      
      const largeFence = new Entity('largeFence')
      engine.addEntity(largeFence)
      largeFence.setParent(_scene)
      const transform6 = new Transform({
        position: new Vector3(15.5, 0, 15.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      largeFence.addComponentOrReplace(transform6)
      const gltfShape3 = new GLTFShape("models/shpulke/6018e89d-e995-476a-ae26-deab3628cf29/FencePicketLarge_01/FencePicketLarge_01.glb")
      gltfShape3.withCollisions = true
      gltfShape3.isPointerBlocker = true
      gltfShape3.visible = true
      largeFence.addComponentOrReplace(gltfShape3)
      
      const largeFence2 = new Entity('largeFence2')
      engine.addEntity(largeFence2)
      largeFence2.setParent(_scene)
      const transform7 = new Transform({
        position: new Vector3(15.5, 0, 10.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      largeFence2.addComponentOrReplace(transform7)
      largeFence2.addComponentOrReplace(gltfShape3)
      
      const largeFence3 = new Entity('largeFence3')
      engine.addEntity(largeFence3)
      largeFence3.setParent(_scene)
      const transform8 = new Transform({
        position: new Vector3(15.5, 0, 5.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      largeFence3.addComponentOrReplace(transform8)
      largeFence3.addComponentOrReplace(gltfShape3)
      
      const largeFence4 = new Entity('largeFence4')
      engine.addEntity(largeFence4)
      largeFence4.setParent(_scene)
      const transform9 = new Transform({
        position: new Vector3(15.5, 0, 0.5),
        rotation: new Quaternion(-1.0555770116704006e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
        scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
      })
      largeFence4.addComponentOrReplace(transform9)
      largeFence4.addComponentOrReplace(gltfShape3)
      
      const largeFence5 = new Entity('largeFence5')
      engine.addEntity(largeFence5)
      largeFence5.setParent(_scene)
      const transform10 = new Transform({
        position: new Vector3(10.5, 0, 0.5),
        rotation: new Quaternion(-5.995498253408543e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
        scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
      })
      largeFence5.addComponentOrReplace(transform10)
      largeFence5.addComponentOrReplace(gltfShape3)
      
      const largeFence6 = new Entity('largeFence6')
      engine.addEntity(largeFence6)
      largeFence6.setParent(_scene)
      const transform11 = new Transform({
        position: new Vector3(5.5, 0, 0.5),
        rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
        scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
      })
      largeFence6.addComponentOrReplace(transform11)
      largeFence6.addComponentOrReplace(gltfShape3)
      
      const largeFence7 = new Entity('largeFence7')
      engine.addEntity(largeFence7)
      largeFence7.setParent(_scene)
      const transform12 = new Transform({
        position: new Vector3(0.5, 0, 0.5),
        rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
        scale: new Vector3(1, 1, 1)
      })
      largeFence7.addComponentOrReplace(transform12)
      largeFence7.addComponentOrReplace(gltfShape3)
      
      const largeFence8 = new Entity('largeFence8')
      engine.addEntity(largeFence8)
      largeFence8.setParent(_scene)
      const transform13 = new Transform({
        position: new Vector3(0.5, 0, 5.5),
        rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
        scale: new Vector3(1, 1, 1)
      })
      largeFence8.addComponentOrReplace(transform13)
      largeFence8.addComponentOrReplace(gltfShape3)
      
      const largeFence9 = new Entity('largeFence9')
      engine.addEntity(largeFence9)
      largeFence9.setParent(_scene)
      const transform14 = new Transform({
        position: new Vector3(0.4999999403953552, 0, 10.5),
        rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
        scale: new Vector3(1, 1, 1)
      })
      largeFence9.addComponentOrReplace(transform14)
      largeFence9.addComponentOrReplace(gltfShape3)
      
      const largeFence10 = new Entity('largeFence10')
      engine.addEntity(largeFence10)
      largeFence10.setParent(_scene)
      const transform15 = new Transform({
        position: new Vector3(0.49999988079071045, 0, 15.5),
        rotation: new Quaternion(1.108018303742572e-15, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
        scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
      })
      largeFence10.addComponentOrReplace(transform15)
      largeFence10.addComponentOrReplace(gltfShape3)
      
      const fenceEndModule = new Entity('fenceEndModule')
      engine.addEntity(fenceEndModule)
      fenceEndModule.setParent(_scene)
      const transform16 = new Transform({
        position: new Vector3(5.5, 0, 15.5),
        rotation: new Quaternion(-4.504429098665355e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
        scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
      })
      fenceEndModule.addComponentOrReplace(transform16)
      const gltfShape4 = new GLTFShape("models/shpulke/b024429e-71ed-46f9-81c2-c992d32aab46/FencePicketEnd_01/FencePicketEnd_01.glb")
      gltfShape4.withCollisions = true
      gltfShape4.isPointerBlocker = true
      gltfShape4.visible = true
      fenceEndModule.addComponentOrReplace(gltfShape4)
      
      const largeFence11 = new Entity('largeFence11')
      engine.addEntity(largeFence11)
      largeFence11.setParent(_scene)
      const transform17 = new Transform({
        position: new Vector3(10.5, 0, 15.5),
        rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
        scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
      })
      largeFence11.addComponentOrReplace(transform17)
      largeFence11.addComponentOrReplace(gltfShape3)
      
      const greenPoplars = new Entity('greenPoplars')
      engine.addEntity(greenPoplars)
      greenPoplars.setParent(_scene)
      const transform18 = new Transform({
        position: new Vector3(12.5, 0, 3),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(2.5, 2.5, 2.5)
      })
      greenPoplars.addComponentOrReplace(transform18)
      const gltfShape5 = new GLTFShape("models/shpulke/e59947e7-8356-4ca7-9e80-9c8e4fe3c507/TreeFir_02/TreeFir_02.glb")
      gltfShape5.withCollisions = true
      gltfShape5.isPointerBlocker = true
      gltfShape5.visible = true
      greenPoplars.addComponentOrReplace(gltfShape5)
      
      const bush = new Entity('bush')
      engine.addEntity(bush)
      bush.setParent(_scene)
      const transform19 = new Transform({
        position: new Vector3(3, 0, 6.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      bush.addComponentOrReplace(transform19)
      const gltfShape6 = new GLTFShape("models/shpulke/3168d3fe-8f93-4a1a-81f4-689780f2a373/Bush_02/Bush_02.glb")
      gltfShape6.withCollisions = true
      gltfShape6.isPointerBlocker = true
      gltfShape6.visible = true
      bush.addComponentOrReplace(gltfShape6)
      
      const pond = new Entity('pond')
      engine.addEntity(pond)
      pond.setParent(_scene)
      const transform20 = new Transform({
        position: new Vector3(12.5, 0, 12),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      pond.addComponentOrReplace(transform20)
      const gltfShape7 = new GLTFShape("models/shpulke/2950ca19-cb51-422b-b80e-fc0765d6cf4b/Pond_01/Pond_01.glb")
      gltfShape7.withCollisions = true
      gltfShape7.isPointerBlocker = true
      gltfShape7.visible = true
      pond.addComponentOrReplace(gltfShape7)
      
      const balsamFlower = new Entity('balsamFlower')
      engine.addEntity(balsamFlower)
      balsamFlower.setParent(_scene)
      const transform21 = new Transform({
        position: new Vector3(3, 0, 12.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(3.75, 3.75, 3.75)
      })
      balsamFlower.addComponentOrReplace(transform21)
      const gltfShape8 = new GLTFShape("models/shpulke/71806ca6-1a2b-4d8b-b919-ae96241f8c08/Plant_02/Plant_02.glb")
      gltfShape8.withCollisions = true
      gltfShape8.isPointerBlocker = true
      gltfShape8.visible = true
      balsamFlower.addComponentOrReplace(gltfShape8)
      
      const mediumForestLog = new Entity('mediumForestLog')
      engine.addEntity(mediumForestLog)
      mediumForestLog.setParent(_scene)
      const transform22 = new Transform({
        position: new Vector3(7, 0, 3),
        rotation: new Quaternion(-2.262906487407191e-16, -0.6343932747840881, 7.562555737194998e-8, -0.7730104327201843),
        scale: new Vector3(1.4999998807907104, 1.5, 1.4999998807907104)
      })
      mediumForestLog.addComponentOrReplace(transform22)
      const gltfShape9 = new GLTFShape("models/shpulke/00f75e38-8746-492a-8e1a-f2433c3c99ba/Log_02/Log_02.glb")
      gltfShape9.withCollisions = true
      gltfShape9.isPointerBlocker = true
      gltfShape9.visible = true
      mediumForestLog.addComponentOrReplace(gltfShape9)
      
      const tallPinkAcaciaTree = new Entity('tallPinkAcaciaTree')
      engine.addEntity(tallPinkAcaciaTree)
      tallPinkAcaciaTree.setParent(_scene)
      const transform23 = new Transform({
        position: new Vector3(3, 0, 3),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      tallPinkAcaciaTree.addComponentOrReplace(transform23)
      const gltfShape10 = new GLTFShape("models/shpulke/bf5422b0-30ea-440e-b1d5-6f8a8939f335/Tree_Forest_Pink_04/Tree_Forest_Pink_04.glb")
      gltfShape10.withCollisions = true
      gltfShape10.isPointerBlocker = true
      gltfShape10.visible = true
      tallPinkAcaciaTree.addComponentOrReplace(gltfShape10)
      
      const parrot = new Entity('parrot')
      engine.addEntity(parrot)
      parrot.setParent(_scene)
      const transform24 = new Transform({
        position: new Vector3(9.5, 2, 13.5),
        rotation: new Quaternion(-2.420181076894087e-15, -0.7730104923248291, 9.215002449991516e-8, 0.6343933343887329),
        scale: new Vector3(2.2968883514404297, 2.296875, 2.2968883514404297)
      })
      parrot.addComponentOrReplace(transform24)
      
      // const rusticPostSign = new Entity('rusticPostSign')
      // engine.addEntity(rusticPostSign)
      // rusticPostSign.setParent(_scene)
      // const transform25 = new Transform({
      //   position: new Vector3(9.5, 0, 13.5),
      //   rotation: new Quaternion(0, 0, 0, 1),
      //   scale: new Vector3(1, 1, 1)
      // })
      // rusticPostSign.addComponentOrReplace(transform25)
      // const gltfShape11 = new GLTFShape("c2c85648-af16-4792-808e-403ebbce0524/Sign_01/Sign_01.glb")
      // gltfShape11.withCollisions = true
      // gltfShape11.isPointerBlocker = true
      // gltfShape11.visible = true
      // rusticPostSign.addComponentOrReplace(gltfShape11)

    _rockTile = rockTile
    _rockTile2 = rockTile2
    _rockTile3 = rockTile3
    _largeFence = largeFence
    _largeFence2 = largeFence2
    _largeFence3 = largeFence3
    _largeFence4 = largeFence4
    _largeFence5 = largeFence5
    _largeFence6 = largeFence6
    _largeFence7 = largeFence7
    _largeFence8 = largeFence8
    _largeFence9 = largeFence9
    _largeFence10 = largeFence10
    _fenceEndModule = fenceEndModule
    _largeFence11 = largeFence11
    _greenPoplars = greenPoplars
    _bush = bush
    _pond = pond
    _balsamFlower = balsamFlower
    _mediumForestLog = mediumForestLog
    _tallPinkAcaciaTree = tallPinkAcaciaTree
    _parrot = parrot
}


function invON() {
  invisibleOn(_rockTile)
  invisibleOn(_rockTile2)
  invisibleOn(_rockTile3)
  invisibleOn(_largeFence)
  invisibleOn(_largeFence2)
  invisibleOn(_largeFence3)
  invisibleOn(_largeFence4)
  invisibleOn(_largeFence5)
  invisibleOn(_largeFence6)
  invisibleOn(_largeFence7)
  invisibleOn(_largeFence8)
  invisibleOn(_largeFence9)
  invisibleOn(_largeFence10)
  invisibleOn(_fenceEndModule)
  invisibleOn(_largeFence11)
  invisibleOn(_greenPoplars)
  invisibleOn(_bush)
  invisibleOn(_pond)
  invisibleOn(_balsamFlower)
  invisibleOn(_mediumForestLog)
  invisibleOn(_tallPinkAcaciaTree)
  invisibleOn(_parrot)
}

function invOFF() {
  invisibleOff2(_rockTile)
  invisibleOff2(_rockTile2)
  invisibleOff2(_rockTile3)
  invisibleOff2(_largeFence)
  invisibleOff2(_largeFence2)
  invisibleOff2(_largeFence3)
  invisibleOff2(_largeFence4)
  invisibleOff2(_largeFence5)
  invisibleOff2(_largeFence6)
  invisibleOff2(_largeFence7)
  invisibleOff2(_largeFence8)
  invisibleOff2(_largeFence9)
  invisibleOff2(_largeFence10)
  invisibleOff2(_fenceEndModule)
  invisibleOff2(_largeFence11)
  invisibleOff2(_greenPoplars)
  invisibleOff2(_bush)
  invisibleOff2(_pond)
  invisibleOff2(_balsamFlower)
  invisibleOff2(_mediumForestLog)
  invisibleOff2(_tallPinkAcaciaTree)
  invisibleOff2(_parrot)

}

export {shpulke_init, invOFF, invON, _x, _z}

import * as game from "./game"

function spawnEntity(shape: GLTFShape, x: number, y: number, z: number, rotation?: Quaternion) {
    const entity = new Entity()

    entity.addComponent(new Transform({ position: new Vector3(x, y, z), rotation }))

    entity.addComponent(shape)

    if (rotation) entity.addComponent(rotation)

    engine.addEntity(entity)

    return entity
}

function spawnInvisibleEntity(shape: GLTFShape, x: number, y: number, z: number, rotation?: Quaternion) {
    const entity = new Entity()

    entity.addComponent(new Transform({ position: new Vector3(x, y, z), rotation }))

    entity.addComponent(shape)

    if (rotation) entity.addComponent(rotation)

    invisibleOn(entity)

    engine.addEntity(entity)

    return entity
}

function spawnDoor(x: number, y: number, z: number, rotation?: Quaternion) {
    const door = new Entity()
    door.addComponent(new GLTFShape("models/door.glb"))
    door.addComponent(new Transform({ position: new Vector3(x, y, z), rotation }))
    const animator = new Animator()
    door.addComponent(animator)
    const open = new AnimationState("State1")
    open.looping = false
    animator.addClip(open)
    const close = new AnimationState("State2")
    close.looping = false
    animator.addClip(close)
    engine.addEntity(door)

    return door
}

function spawnInvisibleDoor(x: number, y: number, z: number, rotation?: Quaternion) {
    const door = new Entity()
    const shape = new GLTFShape("models/door.glb")
    door.addComponent(shape)
    door.addComponent(new Transform({ position: new Vector3(x, y, z), rotation }))
    const animator = new Animator()
    door.addComponent(animator)
    const open = new AnimationState("State1")
    open.looping = false
    animator.addClip(open)
    const close = new AnimationState("State2")
    close.looping = false
    animator.addClip(close)
    invisibleOn(door)
    engine.addEntity(door)

    return door
}

function invisibleOff(entity:Entity) {
    entity.getComponent(Transform).position.y = 1
    entity.getComponent(GLTFShape).visible = true
}

function invisibleOn(entity:Entity) {
    entity.getComponent(Transform).position.y = 10
    entity.getComponent(GLTFShape).visible = false
}

export { spawnEntity, spawnDoor, spawnInvisibleEntity, spawnInvisibleDoor, invisibleOff, invisibleOn }

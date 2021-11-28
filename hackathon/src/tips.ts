let currentRoom = 0;
let text: UIText;
let canvas: UICanvas

function initializeTips() {
    canvas = new UICanvas()
    text = new UIText(canvas)
    text.value = ""
    text.vAlign = "top"
    text.hAlign = "left"
    text.paddingLeft = 170
    text.fontSize = 20
    Input.instance.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, false, (e) => {
        switch (currentRoom) {
            case 0:
                text.value = "Enter the room"
                break
            case 1:
                text.value = "Close and then open the door"
                break
            case 2:
                text.value = "You need to take a cube"
                break
            case 3:
                text.value = "Try to open doors in your path"
                break
            case 4:
                text.value = "Enter the next corridor, and then exit back without looking back"
                break
            case 5:
                text.value = "You need to walk several times around the partition in the center of the room."
                break
            case 6:
                text.value = "Put the cube on the table"
                break
        }
    })
}

function setRoom(newRoom: number) {
    currentRoom = newRoom
    hideTip()
}



function hideTip() {
    text.value = ""
}

export { setRoom, initializeTips }
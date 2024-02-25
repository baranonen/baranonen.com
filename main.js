const backgrounds = [
    'frame1', 'frame2', 'frame3', 'frame4', 'frame5', 'frame6', 'frame7', 'frame8', 'frame9', 'frame10', 'frame11', 'frame12', 'frame13', 'frame14', 'frame15', 'frame16'
]

function changeBackground() {
    let index = 0
    const intervalId = setInterval(() => {
        if (index >= backgrounds.length) {
            clearInterval(intervalId)
        } else {
            document.getElementById(backgrounds[index]).style.display = "none"
            index++
        }
    }, 3000)
}

changeBackground()
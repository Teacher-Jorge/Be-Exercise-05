let space1 = document.getElementById('space1')

let answer1_am = document.getElementById('answer1_am')
let answer1_is = document.getElementById('answer1_is')
let answer1_are = document.getElementById('answer1_are')
let listen1 = document.getElementById('listen1')
let audio_click = document.getElementById('click')
let audio_wrong = document.getElementById('wrong')
let audio_right = document.getElementById('right')

answer1_are.addEventListener('click', function() {
    audio_right.play()
    answer1_are.style.backgroundColor = 'limegreen'
    answer1_are.style.color = 'yellow'
    space1.innerHTML = 'are'
    space1.style.color = 'limegreen'
})

answer1_am.addEventListener('click', function() {
    audio_wrong.play()
    answer1_am.style.backgroundColor = 'red'
    answer1_am.style.color = 'yellow'
    space1.innerHTML = 'am'
    space1.style.color = 'red'
})

answer1_is.addEventListener('click', function() {
    audio_wrong.play()
    answer1_is.style.backgroundColor = 'red'
    answer1_is.style.color = 'yellow'
    space1.innerHTML = 'is'
    space1.style.color = 'red'
})

listen1.addEventListener('click', function() {
    audio_click.play()
    let audio = document.getElementById('line1')
    audio.play()
    setTimeout(function() {
        let audio = document.getElementById('line2')
        audio.play()
    }, 1500)

    }
)




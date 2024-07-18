let space1 = document.getElementById('space1')

let answer1_am = document.getElementById('answer1_am')
let answer1_is = document.getElementById('answer1_is')
let answer1_are = document.getElementById('answer1_are')
let listen1 = document.getElementById('listen1')
let audio_click = document.getElementById('click')
let audio_wrong = document.getElementById('wrong')
let audio_right = document.getElementById('right')
let translate1 = document.getElementById('translate1')


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
    }, 1600)

    }
)

translate1.addEventListener('click', function() {
    audio_click.play()
    let translationA = document.getElementById('translationA')
    translationA.textContent = 'A: Oi, como está você?'
    let translationB = document.getElementById('translationB')
    translationB.textContent = 'B: Eu estou bem, obrigada.'
    setTimeout(function() {
        translationA.textContent = ''
        translationB.textContent = ''
    }, 4000);
})

//CONVERSATION 02
let space2 = document.getElementById('space2')
let answer2_am = document.getElementById('answer2_am')
let answer2_is = document.getElementById('answer2_is')
let answer2_are = document.getElementById('answer2_are')
let listen2 = document.getElementById('listen2')
let translate2 = document.getElementById('translate2')


answer2_are.addEventListener('click', function() {
    audio_right.play()
    answer2_are.style.backgroundColor = 'limegreen'
    answer2_are.style.color = 'yellow'
    space2.innerHTML = 'Are'
    space2.style.color = 'limegreen'
})

answer2_am.addEventListener('click', function() {
    audio_wrong.play()
    answer2_am.style.backgroundColor = 'red'
    answer2_am.style.color = 'yellow'
    space2.innerHTML = 'Am'
    space2.style.color = 'red'
})

answer2_is.addEventListener('click', function() {
    audio_wrong.play()
    answer2_is.style.backgroundColor = 'red'
    answer2_is.style.color = 'yellow'
    space2.innerHTML = 'Is'
    space2.style.color = 'red'
})

listen2.addEventListener('click', function() {
    audio_click.play()
    let audio = document.getElementById('line3')
    audio.play()
    setTimeout(function() {
        let audio = document.getElementById('line4')
        audio.play()
    }, 1600)

    }
)

translate2.addEventListener('click', function() {
    audio_click.play()
    let translationA = document.getElementById('translationA')
    translationA.textContent = 'A: Você é do Brasil?'
    let translationB = document.getElementById('translationB')
    translationB.textContent = 'B: Sim, eu estou aqui de férias.'
    setTimeout(function() {
        translationA.textContent = ''
        translationB.textContent = ''
    }, 4000);
})

//CONVERSATION 03
let space3= document.getElementById('space3')
let answer3_am = document.getElementById('answer3_am')
let answer3_is = document.getElementById('answer3_is')
let answer3_are = document.getElementById('answer3_are')
let listen3 = document.getElementById('listen3')
let translate3 = document.getElementById('translate3')


answer3_am.addEventListener('click', function() {
    audio_right.play()
    answer3_am.style.backgroundColor = 'limegreen'
    answer3_am.style.color = 'yellow'
    space3.innerHTML = 'Am'
    space3.style.color = 'limegreen'
})

answer3_are.addEventListener('click', function() {
    audio_wrong.play()
    answer3_are.style.backgroundColor = 'red'
    answer3_are.style.color = 'yellow'
    space3.innerHTML = 'Are'
    space3.style.color = 'red'
})

answer3_is.addEventListener('click', function() {
    audio_wrong.play()
    answer3_is.style.backgroundColor = 'red'
    answer3_is.style.color = 'yellow'
    space3.innerHTML = 'Is'
    space3.style.color = 'red'
})

listen3.addEventListener('click', function() {
    audio_click.play()
    let audio = document.getElementById('line5')
    audio.play()
    setTimeout(function() {
        let audio = document.getElementById('line6')
        audio.play()
    }, 1600)

    }
)

translate3.addEventListener('click', function() {
    audio_click.play()
    let translationA = document.getElementById('translationA')
    translationA.textContent = 'A: Eu estou na sua classe?'
    let translationB = document.getElementById('translationB')
    translationB.textContent = 'B: Sim, nós estamos na mesma turma.'
    setTimeout(function() {
        translationA.textContent = ''
        translationB.textContent = ''
    }, 4000);
})


//CONVERSATION 04
let space4= document.getElementById('space4')
let answer4_am = document.getElementById('answer4_am')
let answer4_is = document.getElementById('answer4_is')
let answer4_are = document.getElementById('answer4_are')
let listen4 = document.getElementById('listen4')
let translate4 = document.getElementById('translate4')


answer4_is.addEventListener('click', function() {
    audio_right.play()
    answer4_is.style.backgroundColor = 'limegreen'
    answer4_is.style.color = 'yellow'
    space4.innerHTML = 'Is'
    space4.style.color = 'limegreen'
})

answer4_are.addEventListener('click', function() {
    audio_wrong.play()
    answer4_are.style.backgroundColor = 'red'
    answer4_are.style.color = 'yellow'
    space4.innerHTML = 'Are'
    space4.style.color = 'red'
})

answer4_am.addEventListener('click', function() {
    audio_wrong.play()
    answer4_am.style.backgroundColor = 'red'
    answer4_am.style.color = 'yellow'
    space4.innerHTML = 'Am'
    space4.style.color = 'red'
})

listen4.addEventListener('click', function() {
    audio_click.play()
    let audio = document.getElementById('line7')
    audio.play()
    setTimeout(function() {
        let audio = document.getElementById('line8')
        audio.play()
    }, 1600)

    }
)

translate4.addEventListener('click', function() {
    audio_click.play()
    let translationA = document.getElementById('translationA')
    translationA.textContent = 'A: Esse assento está ocupado?'
    let translationB = document.getElementById('translationB')
    translationB.textContent = 'B: Não, esse assento está disponível.'
    setTimeout(function() {
        translationA.textContent = ''
        translationB.textContent = ''
    }, 4000);
})






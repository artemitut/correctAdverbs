const r1 = document.getElementById('1');
const r2 = document.getElementById('2');
const r3 = document.getElementById('3');
const r4 = document.getElementById('4');

const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');

const allR = document.querySelectorAll('input')
console.log(allR);

const button = document.querySelector('button')

const answerP = document.querySelector('.answer')

const map = new Map();

map.set('аби-коли', 'абиколи');
map.set('де інде', 'деінде');
map.set('хібащо', 'хіба що');
map.set('дармащо', 'дарма що');
map.set('до гори', 'догори');
map.set('у середині', 'усередині');
map.set('від нині', 'віднині');
map.set('до тепер', 'дотепер');
map.set('до пізна', 'допізна');
map.set('насвітанку', 'на світанку');
map.set('підвечір', 'під вечір');
map.set('без вісти', 'безвісти');
map.set('без перестанку', 'безперестанку');
map.set('в нічию', 'внічию');
map.set('в роздріб', 'вроздріб');
map.set('в розліт', 'врозліт');
map.set('в смак', 'всмак');
map.set('до тла', 'дотла');
map.set('до щенту', 'дощенту');
map.set('до волі', 'доволі');
map.set('мимо волі', 'мимоволі');
map.set('за очі', 'заочі');
map.set('за панібрата', 'запанібрата');
map.set('зо зла', 'зозла');
map.set('на пам\'ять', 'напам\'ять');
map.set('на різно', 'нарізно');
map.set('на прокат', 'напрокат');
map.set('на яву', 'наяву');
map.set('рік-у-рік', 'рік у рік');
map.set('раз-по-раз', 'раз по раз');
map.set('кінець-кінцем', 'кінець кінцем');
map.set('тимчасом', 'тим часом');
map.set('сам-на-сам', 'сам на сам');
map.set('сама-самотою', 'сама самотою');
map.set('сам-по-собі', 'сам по собі');
map.set('насамоті', 'на самоті');
map.set('безупину', 'без упину');
map.set('вцілості', 'в цілості');
map.set('вцілому', 'в цілому');
map.set('устократ', 'у стократ');
map.set('увісні', 'уві сні');
map.set('довподоби', 'до вподоби');
map.set('допобачення', 'до побачення');
map.set('нажаль', 'на жаль');
map.set('надиво', 'на диво');
map.set('нащастя', 'на щастя');
map.set('навідмінно', 'на відмінно');
map.set('навиплат', 'на виплат');
map.set('напоруки', 'на поруки');
map.set('навиріст', 'на виріст');
map.set('надиби', 'на диби');
map.set('на віки-вічні', 'на віки вічні');
map.set('по перше', 'по-перше');
map.set('по українськи', 'по-українськи');
map.set('по латині', 'по-латині');
map.set('казна хто', 'казна-хто');
map.set('бозна хто', 'бозна-хто');
map.set('коли небуть', 'коли-небуть');
map.set('хтозна коли', 'хтозна-коли');
map.set('будь який', 'будь-який');
map.set('на гора', 'на-гора');
map.set('всього на всього', 'всього-на-всього');
map.set('як не як', 'як-не-як');
map.set('будь що будь', 'будь-що-будь');
map.set('неждано негадано', 'неждано-негадано');


let ansver;
let ansverText;


const randomOptions = function(){
    p1.style.backgroundColor = '';
    p2.style.backgroundColor = '';
    p3.style.backgroundColor = '';
    p4.style.backgroundColor = '';
    allR.forEach((x, i, node) => x.checked = false)
    let mapKeys = map.keys();
    let mapValues = map.values();
    // let mapValues2 = map.values();
    // let mapValues3 = map.values();
    // let mapValues4 = map.values();
    let mapSize = map.size
    let arrKeys = [];
    for(let i = 0; i<mapSize; i++){
        arrKeys.push(mapKeys.next().value)
    }
    let arrVal = [];
    for(let i = 0; i<mapSize; i++){
        arrVal.push(mapValues.next().value)
    }
    let key = arrKeys.splice(Math.floor(Math.random() * mapSize), 1);
    let val1 = arrVal.splice(Math.floor((Math.random() * arrVal.length)), 1);
    let val2 = arrVal.splice(Math.floor((Math.random() * arrVal.length)), 1);
    let val3 = arrVal.splice(Math.floor((Math.random() * arrVal.length)), 1);

    let determiner = Math.random()
    if(determiner < 0.25){
        p1.textContent = val1;
        p2.textContent = key;
        p3.textContent = val2;
        p4.textContent = val3;
        ansverText = key;
        ansver = 2;
    }
    if(determiner > 0.25 && determiner < 0.5){
        p1.textContent = key;
        p2.textContent = val1;
        p3.textContent = val2;
        p4.textContent = val3;
        ansverText = key;
        ansver = 1;
    }
    if(determiner > 0.5 && determiner < 0.75){
        p1.textContent = val1;
        p2.textContent = val2;
        p3.textContent = key;
        p4.textContent = val3;
        ansverText = key;
        ansver = 3;
    }
    if(determiner > 0.75){
        p1.textContent = val1;
        p2.textContent = val2;
        p3.textContent = val3;
        p4.textContent = key;
        ansverText = key;
        ansver = 4;
    }

}
const test = function(e){
    e.preventDefault()
    let mapSize = map.size
    let mapKeys = map.keys();
    let arrKeys = [];
    for(let i = 0; i<mapSize; i++){
        arrKeys.push(mapKeys.next().value)
    }
    if(allR[ansver-1].checked){
        console.log('True');
        ansverText = ansverText[0];
        let x = `${ansverText} - ${map.get(ansverText)}`
        answerP.textContent = x;
        setTimeout(randomOptions, 2000)
        // allR[ansver-1].checked = false
        if(ansver == 1){
            p1.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 2){
            p2.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 3){
            p3.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 4){
            p4.style.backgroundColor = 'rgb(137, 255, 91)'
        }
    } else{
        let check;
        allR.forEach((x, i, node) => {
            if(x.checked){
                check = x.value
            }
        });
        if(check == 1){
            p1.style.backgroundColor = 'rgb(248, 97, 97)'
        }
        if(check == 2){
            p2.style.backgroundColor = 'rgb(248, 97, 97)'
        }
        if(check == 3){
            p3.style.backgroundColor = 'rgb(248, 97, 97)'
        }
        if(check == 4){
            p4.style.backgroundColor = 'rgb(248, 97, 97)'
        }
        if(ansver == 1){
            p1.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 2){
            p2.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 3){
            p3.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 4){
            p4.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        ansverText = ansverText[0];
        let x = `${ansverText} - ${map.get(ansverText)}`
        answerP.textContent = x;
        setTimeout(randomOptions, 2000)
        
    }
}

button.addEventListener('click', test)
randomOptions()


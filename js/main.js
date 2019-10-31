
const picture =  document.getElementById("picture");
const countImg =  document.getElementById("countImg");
const countNumber =  document.getElementById("countNumber");
const stillLifeButton =  document.getElementById("stillLife");
const otherButton =  document.getElementById("other");
const clockImg =  document.getElementById("clockImg");
const ball =  document.getElementById("score");
const header = document.querySelector('header')
const main = document.querySelector('main')
let result = false

const gameYesOrNo=[
    {
        id:1,
        img:"img/game/stillLife/638px-Basket-flowers-1622.jpg",
        type:"stillLife"
    },
    {
        id:2,
        img:"img/game/stillLife/640px-Clara_Peeters_-_Mesa_(Prado)_01.jpg",
        type:"stillLife"
    },
    {
        id:3,
        img:"img/game/stillLife/640px-Floris_van_Dyck_002.jpg",
        type:"stillLife"
    },
    {
        id:4,
        img:"img/game/stillLife/640px-Heem,_Jan_Davidsz._de_-_A_Richly_Laid_Table_with_Parrots_-_c._1650.jpg",
        type:"stillLife"
    },
    {
        id:5,
        img:"img/game/stillLife/640px-Stilleven_met_vruchten_en_groenten_met_op_de_achtergrond.jpg",
        type:"stillLife"
    },
    {
        id:6,
        img:"img/game/stillLife/640px-Willem_Claesz_Heda_-_Banquet_Piece_with_Ham_-_Google_Art_Project.jpg",
        type:"stillLife"
    },
    {
        id:7,
        img:"img/game/other/352px-Raffaello_Sanzio.jpg",
        type:"other"
    },
    {
        id:8,
        img:"img/game/other/367px-The_Lady_with_an_Ermine.jpg",
        type:"other"
    },
    {
        id:9,
        img:"img/game/other/368px-Rembrandt_Harmensz._van_Rijn_089.jpg",
        type:"other"
    },
    {
        id:10,
        img:"img/game/other/369px-Peter_Paul_Rubens_and_workshop_001_colour_version_01.jpg",
        type:"other"
    },
    {
        id:11,
        img:"img/game/other/381px-Rembrandt_Harmenszoon_van_Rijn_-_Bust_of_an_Old_Man_in_a_Fur_Cap.jpg",
        type:"other"
    },
    {
        id:12,
        img:"img/game/other/568px-VanGogh-View_of_Arles_with_Irises.jpg",
        type:"other"
    },
    {
        id:13,
        img:"img/game/other/596px-Jacob_Isaaksz._van_Ruisdael_013.jpg",
        type:"other"
    },
    {
        id:14,
        img:"img/game/other/626px-Jacob_Isaaksz._van_Ruisdael_019.jpg",
        type:"other"
    },
    {
        id:15,
        img:"img/game/other/640px-Heracles_and_the_Nemea_Lion_Pieter_Paul_Rubens.jpg",
        type:"other"
    },
    {
        id:16,
        img:"img/game/other/640px-Monet_-_The_Magpie.jpg",
        type:"other"
    },
    {
        id:17,
        img:"img/game/other/640px-Peasants_going_to_market_PP_Rubens.jpg",
        type:"other"
    },
    {
        id:18,
        img:"img/game/other/640px-Peter_Paul_Rubens_-_Apollo_and_the_Python,_1636-1638.jpg",
        type:"other"
    },
    {
        id:19,
        img:"img/game/other/640px-Peter_Paul_Rubens_-_Mercury_and_Argos_1636-1638.jpg",
        type:"other"
    },
    {
        id:20,
        img:"img/game/other/640px-Vincent_van_Gogh_(1853-1890)_-_Wheat_Field_with_Crows_(1890).jpg",
        type:"other"
    },
    {
        id:21,
        img:"img/game/other/Selbstbildnis_im_Pelzrock_-_Alte_Pinakothek.jpg",
        type:"other"
    },

]


yesFunc = () => {
    let images  = ['img/gnom/6.png', 'img/gnom/7.png'],
        length  = images.length,
        i   = 1;
    const gnom =  document.getElementById("gnom");
    gnom.innerHTML=''
    let timerId = setInterval(function() {
        if(i == length) i = 0;
        gnom.innerHTML=`<img src= ${images[i++]} class="evilGnom" >`
    }, 200)
    setTimeout(function() {
        clearInterval(timerId);
        gnom.innerHTML=''
    }, 2000);
}

noFunc = () => {
    let images  = ['img/gnom/5.png', 'img/gnom/8.png', 'img/gnom/9.png'],
        length  = images.length,
        i  = 1;
    const gnom =  document.getElementById("gnom");
    gnom.innerHTML=''
    let timerId = setInterval(function() {
        if(i== length) i = 0;
        gnom.innerHTML=`<img src= ${images[i++]} class="evilGnom" >`
    }, 200)
    setTimeout(function() {
        clearInterval(timerId);
        gnom.innerHTML=''
    }, 2000);
}

windowWin = () => {
    header.innerHTML=''
    main.innerHTML =`
        <div class="windowWin">
            <img src="img/generals/frames/frame-success.png" >
            <div class="windowContent">
                <p>
                    Ты справился с заданием гоблина, и ему ничего не остается, 
                    как пропустить тебя к следующим испытаниям. «Но не радуйся слишком рано, - 
                    злобно шипит Гоблин тебе в след, - мы с тобой ещё встретимся, и тогда посмотрим, кто кого!»
                </p>
                <button class="next">Далее</button>
            </div>
        </div>
    `
    gnom.innerHTML=`<img src="img/gnom/4.png" class="evilGnom" >`
}

windowLoser = () => {
    header.innerHTML=''
    main.innerHTML =`
        <div class="windowWin">
            <img src="img/generals/frames/frame-fail.png" >
            <div class="windowContent">
                <p>
                    Увы, ты не справился с заданием гоблина. Но внезапно в его холодное, 
                    злобное сердце закралась доброта: Гоблин соглашается пропустить тебя. 
                    «Но смотри, - ворчит он, - не разочаруй меня: со следующими заданиями ты должен совладать гораздо лучше
                </p>
                <button class="next">Далее</button>
            </div>
        </div>
    `
    gnom.innerHTML=`<img src="img/gnom/4.png" class="evilGnom" >`
}

let score = 0;
ball.innerHTML = score

countBall = () => {
    score = score +10
    ball.innerHTML = score
}

// main.innerHTML =`<img src="img/game/other/352px-Raffaello_Sanzio.jpg" class="ram" >`

startTimer = (duration, display) => {
    let timer = duration, minutes, seconds;
    let timeMin = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
    setTimeout(() => { 
        clearInterval(timeMin); 
        if(result===true){
           windowWin()
        } else{
           windowLoser()
        }

    }, 61000);
}

let fiveMinutes = 60 * 1,
display = document.getElementById("clock");

clockImg.innerHTML += `<div class="clock">
                            <img src="img/generals/elements/clock.png">
                        </div>`
startTimer(fiveMinutes, display)

start =()=> {
        
        let arr = gameYesOrNo, i = -1;
        arr.sort(function () { 
            return [1, -1, 0][Math.random() *3 |0];
        })
		return function() {
			if ( ++i < arr.length ) {

                const { id, img, type} = arr[i];
                const gamePicture = `<div class="img"  data-type="${type}">
                                            <img src= ${img} id="imd-${id}" class="idImg ram">
                                        </div>`
                picture.innerHTML = gamePicture
                const pic =  document.getElementById(`imd-${id}`);
                pic.style.left = Math.random()*70 + '%';

                let start = Date.now()

                let timer = setInterval(function() {
            
                    let timePassed = Date.now() - start;
                    
                    if (timePassed >= 6000) {
                        clearInterval(timer);  
                        picture.innerHTML=''
                        return;
                    }
                    
                    drawTop(timePassed);
                    
                    }, 10);
                    

                drawTop = (timePassed) => {
                    
                    if(pic!=null){
                        pic.style.top = (timePassed / 60)*10 + 'px';
                    }
                    
                        
                }

                stillLifeButton.onclick = () =>{ 
                    if(type==="stillLife"){
                        countBall()
                        result =true
                        yesFunc()
                    } else{
                        noFunc()
                    }  
                }
                    
                otherButton.onclick = () =>{ 
                    if(type==="other"){
                        countBall()
                        result =true
                        yesFunc()
                    } else{
                        noFunc()
                    }  
   
                }
  
                setTimeout( arguments.callee, 6000 );
				
            }
            
        }();
    }


setTimeout(() => { 
    start()
},1500)


/*let a = 1 
// /*let n = prompt('input')
 let b = 0
let c = 0
let d = 0
for( let i = 0; i<n.length; i++){
    if (a[i]=="A"){
       [a,b] = [b,a]
    }else if(n[i] == 'B'){
       [c,b] = [b,c]
    } else{ 
       [a,c] = [c,a]
    }
}
if(a==0 && b==0 && c==0){
console. log('1')
}else if ( a==0 && b==0 && c==0){
    console. log('2')
}else{
    console. log('3')
}*
//числа фибоначчи
/*let a = Number (prompt())
let i = 2
let fib1 = 1
let fib2 = 1
let fib = 0
if (a>3){
while( i<a){
    fib = fib1 + fib2
    fib1 = fib2
    fib2 = fib
    i++

}}else{
    console. log(1)
}

let a = Number(prompt('in'))
let b = ''
let y = 0
while (y!=1){
    a+=1
    b+=a
    if(b[0]!=b[1] && b[0]!=b[2] && b[0]!=b[3]&& b[1]!=b[2]&& b[1]!=b[3]&& b[2]!=b[3]){
        y=1
        i
    }
}
console.log(a)

// let body = document.getElementById('h')
 //let title = document.getElementsByClassName('button')

// body.style.backgroundColor= 'blue'
// title.style.color = 'red'
// let body = document.querySelector('#h')
// let title = document.querySelector('.title')
// let but = document.querySelector('#button')


//  but.addEventListener('click', )
//  function clickButton(){
//     body.style.backgroundColor= 'blue'
//     title.style.color = 'red'
//     alert('aa')
//  }
  
// let button = document.querySelector('#colors1') 
    // let body = document.querySelector('body')
    // let colors = ['blue', 'white', 'red', 'green'];
    // let i = 0
  
    // button.addEventListener('click', buttonh)

    // function buttonh(){
    //     body.style.backgroundColor = colors[i]
    //     i++
    // }
// let ramka = document.querySelector('#ramka')
// let button = document.querySelector ('#button')  
// let input = document.querySelector('input')
// let h1 = document.querySelector('h1')
// let buttonLink = document.querySelector('button')

// button.addEventListener('click', buttonPush)
// function buttonPush(){
//     h1.textContent = "text from js"
// button.innerHTML="<h2>Js programmer</h2>"

// ramka.style.backgroundColor = input.value
// }

// let buttonLink = document.querySelector('click', function(){
// a.setAttribute('cat','https://www.google.com/search?q=cat&tbm=isch&source=iu&ictx=1&fir=0V922RrJgQc9SM%252C5qEHfJOysK_DwM%252C_&vet=1&usg=AI4_-kTWXkyGyozPqFtLqwoBI16Z1V_XZA&sa=X&ved=2ahUKEwiWkr7CmMTwAhWRmMMKHS4kCfIQ9QF6BAgQEAE&biw=1552&bih=728#imgrc=rhaDRoK406Z9TM')

// })
let img = document.querySelector('img')
let button = document.querySelector('#button')
let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let audio = document.querySelector('audio')

button.addEventListener('click', function(){
    img.setAttribute('src','cat.jpg')
    audio.setAttribute('src','cat.mp3')

})
button1.addEventListener('click', function(){
    img.setAttribute('src','horse.jpg')
    audio.setAttribute('src','loshad.mp3')

})
button2.addEventListener('click', function(){
    img.setAttribute('src','dog.jpg')
    audio.setAttribute('src','dog.mp3')

})

let box = document.querySelectorAll('.box')
 document.querySelector('#bBlue').addEventListener('click',function(){
     box.classList.add('blue')
 })

 document.querySelector('#bRed').addEventListener('click',function(){
    //box.classList.remove('blue')
    box.classList.add('red')
})
console. log(box.classList.contains('red'))

let human = {
    eyes: 2,
    nose: 1,
    legs: 2,
    colorHair: 'black',
    arms: 2
}
console. log(human)

let $name = document.querySelector('#text')
let $phone = document.querySelector('#tel')
let $buttonSend = document.querySelector('#send')
let $buttonGet = document.querySelector('#get')
let $list = document.querySelector('.list')
let person = {}
let users = []

$buttonSend.addEventListener('click',function(){
    person={}
    person.name = $name.value
    person.phone = $phone.value
    users.push(person)
    
})

$buttonGet.addEventListener('click', function(){
    $list.innerHTML=''
    for( let i = 0; i<users.length;i++)
    $list.insertAdjacentHTML('beforeend',`<h2>Имя:${users[i].name} Тел:${users[i].phone} </h2>`)
})

var divs = document.querySelectorAll('div')
for(var i = 0; i < divs.length; i++){
divs[i].addEventListener('click',function(event){
     event.stopPropagation()
     this.style.backgroundColor = 'purple'
    console.log(this.getAttribute('class'))
   
})
} 
// let box = document.querySelectorAll('.box')
//  document.querySelector('.box').addEventListener('click',function(){
//      box.classList.add('blue')
//  })

var divs = document.querySelectorAll('div')
for(var i = 0; i < divs.length; i++){
divs[i].addEventListener('mouseenter',function(event){
})
}
let $pol = document.querySelectorAll('.pol')
$pol.addEventListener('click', function(){
    person.polm = $inputs[3].value
})


let $inputs = document.querySelectorAll('input')
let $submitBtn = document.querySelector('#regButton')
let $searchBtn = document.querySelector('#searchButton')
let person = {}
let users = []

$submitBtn.addEventListener('click',function(){
  person = {}
  person.name = $inputs[0].value
  person.phone = $inputs[1].value
  person.email = $inputs[2].value 
  person.gender = document.querySelector('input[type=radio]:checked').getAttribute('value')
  users.push(person)
  localStorage.setItem('list',JSON.stringify(users))
})


let $content = document.querySelector('.content')
$searchBtn.addEventListener('click',function(){
    let spisok = JSON.parse(localStorage.getItem('list'))
    $content.innerHTML = ''
    let user = spisok.find(item => item.name == $inputs[5].value);
    if(user){
      $content.insertAdjacentHTML('beforeend',`<h3>ИМЯ: ${user.name} Номер: ${user.phone} Почта: ${user.email} Пол: ${user.gender}</h3>`)
    }else{
      spisok.forEach((item, index, array) => {
        $content.insertAdjacentHTML('beforeend',`<h3>ИМЯ: ${item.name} Номер: ${item.phone} Почта: ${item.email} Пол: ${item.gender}</h3>`)
      });
    }
})

let date = new Date()
localStorage.setItem('name','')
console.log(localStorage.getItem('name'))
localStorage.removeItem('name')

let url = ('https://jsonplaceholder.typicode.com/users','https://jsonplaceholder.typicode.com/photos')
document.querySelector('#btn').addEventListener('click',function(){
    fetch(url)
    .then(function(response){
       return response.json()
      
    })
    .then(function(data){
    //    console.log(data)
       let $list = document.querySelector('.list')
       let $photo = document.querySelector('.photo')

       data.map(function(item){
           $list.insertAdjacentHTML("beforeend",`<h4>ИМЯ:${item.name}, ФАМИЛИЯ:${item.surname}, Email:${item.email}</h4>`)
           $photo.insertAdjacentHTML('beforebegin',`<img src="" alt="">Фото пользователя`)
           if(photo>=list){
            remove.json()
        }
       })
    })
})

let url = 'https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=e730f0df30b07fef52281e2935449017'

fetch(url)
  .then(function(resp){
     return resp.json()
  })
  .then(function(data){
    console.log(data)
  })


document.querySelector('#btn').addEventListener('click',function(){

    let url = 'https://jsonplaceholder.typicode.com/users'
    let imageUrl = 'https://jsonplaceholder.typicode.com/photos'
 
    fetch(url)
        .then(function(response){
 
             return response.json()
        })
        .then(function(data){
 
            fetch(imageUrl)
                .then(function(resp){
                     return resp.json()
                })
                .then(function(dat){
                 for(let i=0;i<10;i++){
                     let div = document.createElement('div')
                     div.classList.add('item')
                     div.insertAdjacentHTML('beforeend',`<h5>Имя юзера: ${data[i].name}</h5><img src="${dat[i].thumbnailUrl}"><p>${dat[i].title}</p>`)
                     document.querySelector('#list').insertAdjacentElement('beforeend',div)
                 }
            })
        })
 })*/
 
  /*  let promise = new Promise(function (resolve,reject){
      setTimeout(function(){
        console.log('Сервер: запрашивает список пользователей в БД ')
        console.log('....');
      },1000)
      resolve()
    })

promise.then(function(){
  return new Promise(function(resolve, reject ){
    setTimeout(function(){
      console.log('БД: формирует список пользователей');
      console.log('....');
    },500)
    // resolve()
    reject('БД: данных нет')
  })
})
.then(function(){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log('Сервер: формирует данные для клиента ');
      console.log('...');
    },500)
    resolve()
    })
})
.then(function (){
  return new Promise(function (resolve,reject){
    setTimeout(function(){
      console.log('Клиент: получил данные и отображаю их');
    },1000)
  })
})

.catch(function(error){
 console.log('ошибка',error);
})*/

/*let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(function(response){
  return response.json()
})

.then (function(data){
  console.log(data);
})

async function get(){
  let response = await fetch(url)
  let data = await response.json()
  console.log(data[0].email); 
}

get()*/
    

let url = 'http://api.weatherunlocked.com/api/forecast/42.87,74.59?app_id=999207aa&app_key=1e1afdbf0250f7f24b35028b7a0b77cb'

 function dated(date){
   if(date == 1 || date == 8){
     return 'Понедельник'
   }else if(date == 2 || date == 9){
     return 'Вторник'
   }
   else if(date == 3 || date == 10){
     return 'Среда'
   }
   else if(date == 4 || date == 11){
     return 'Четверг'
   }
   else if(date == 5 || date == 12){
     return 'Пятница'
   }
   else if(date == 6 || date == 13){
     return 'Суббота'
   }
   else if(date == 0 || date == 7){
     return 'Воскресенье'
   }
 }
 
 
 fetch(url)
    .then(resp =>{
      return resp.json()
    })
    .then(data =>{
      document.querySelector('.dateToDay').textContent = data.Days[0].date
      document.querySelector('.city').textContent = 'Бишкек'
      document.querySelector('.dayToDay').textContent = dated(new Date().getDay())
      document.querySelector('.wind p').textContent = 'Скорость ветра' + data.Days[0].windspd_max_kmh + 'км/ч'
      document.querySelector('.fallout span').textContent = 
      Math.floor((data.Days[0].humid_max_pct + data.Days[0].humid_min_pct)/2)+ '%'
      let iconSrc = data.Days[0].Timeframes[0].wx_icon
      document.querySelector('.icon img').setAttribute('src',`set/${iconSrc.substring(0,iconSrc.length - 3)}png`)
      document.querySelector('.icon p').textContent = data.Days[0].Timeframes[0].wx_desc
      document.querySelector('.maxTemp').textContent = data.Days[0].temp_max_c
      document.querySelector('.minTemp').textContent = data.Days[0].temp_min_c
      document.querySelector('.temp p').innerHTML = Math.floor((data.Days[0].temp_max_c + data.Days[0].temp_min_c)/2)+ ' &deg'
      for(let i=1;i<4;i++){
        let pimax = data.Days[i].temp_max_c
        let pimin = data.Days[i].temp_min_c
        let averagepi= `<p>${Math.floor((pimax + pimin)/2)}&deg</p>`
        let srcic = data.Days[i].Timeframes[0].wx_icon
        let imgx = `<img src="set/${srcic.substring(0,srcic.length - 3)}png">`
       document.querySelector('.week').insertAdjacentHTML('beforeend',`<div class="daysOf">${dated(new Date().getDay()+ i)}${imgx}${averagepi}</div>`)
       console.log(5+i)
      }
      for(let i=4;i<7;i++){
        let pimax = data.Days[i].temp_max_c
        let pimin = data.Days[i].temp_min_c
        let averagepi= `<p>${Math.floor((pimax + pimin)/2)}&deg</p>`
        let srcic = data.Days[i].Timeframes[0].wx_icon
        let imgx = `<img src="set/${srcic.substring(0,srcic.length - 3)}png">`
       document.querySelector('.week').insertAdjacentHTML('beforeend',`<div class="daysOf2">${dated(new Date().getDay()+ i)}${imgx}${averagepi}</div>`)
       console.log(5+i)
      }
      console.log(data)
      console.log(iconSrc)
    })
  


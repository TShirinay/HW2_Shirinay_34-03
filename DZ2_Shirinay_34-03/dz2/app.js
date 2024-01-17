var numbers = [34,65, 67, 89, 8, 9, 23, 21, 10, 23, 28]

for (i = 0; i <numbers.length; i++){
    if (numbers[i] % 2 ===0){
        console.log(numbers[i])
    }
}


var cinema = {
    fastAndFurious:{
        genre: 'Боевик, триллер, криминал',
        date: '19 мая 2023',
        time:'2 часа 21 минута',
        mainCharacters: 'Вин Дизель, Мишель Родригес, Сон Кан, Джейсон Момоа, Джейсон Стейтем',
        price: 250,
        measurement: '3D'
    },
    grownUps:{
        genre: 'Комедия',
        date: '25 июня 2010',
        time:'1 час 42 минуты',
        mainCharacters: 'Адам Сэндлер, Кевин Джеймс, Дэвид Спейд, Крис Рок, Сальма Хайек, Мая Рудольф',
        price: 200,
        measurement: '2D'
    },
    extremeJob:{
        genre: 'Боевик, комедия',
        date: '23 января 2019',
        time:'1 час 51 минута',
        mainCharacters: 'Рю Сын Хи, Гон Мен, Донг-Хви Ли, Хони Ли, Чин Сон Гю',
        price: 280,
        measurement: '2D'
    },
    pabloEscobar:{
        genre: 'Триллер, криминал',
        date: '9 марта 2018',
        time:'2 часа 3 минуты',
        mainCharacters: 'Хавьер Бардем, Пенелопа Крус',
        price: 200,
        measurement: '2D'
    },
    avatar2:{
        genre: 'Боевик, научная фантастика',
        date: '16 декабря 2022',
        time:'3 часа 12 минут',
        mainCharacters: 'Сэм Уортингтон, Зои Салдана, Стивен Лэнг, Сигурни Уивер, Бритейн Далтон',
        price: 300,
        measurement: '3D'
    }
}
console.log(cinema)


var number = Number(prompt('Введите цифру от 1 до 15'))

switch (number){
    case 1:
        console.log('I')
        break
    case 2:
        console.log('II')
        break
    case 3:
        console.log('III')
        break
    case 4:
        console.log('IV')
        break
    case 5:
        console.log('V')
        break
    case 6:
        console.log('VI')
        break
    case 7:
        console.log('VII')
        break
    case 8:
        console.log('VIII')
        break
    case 9:
        console.log('IX')
        break
    case 10:
        console.log('X')
        break
    case 11:
        console.log('XI')
        break
    case 12:
        console.log('XII')
        break
    case 13:
            console.log('XIII')
        break
    case 14:
            console.log('XIV')
        break
    case 15:
            console.log('XV')
        break
    default:
        console.log('Введите корректно данные')
}
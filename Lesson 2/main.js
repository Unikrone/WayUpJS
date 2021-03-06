/* 
    Задание 1:

    Вывести в консоль с помощью цикла FOR все четные числа от 10 до 50
*/
//task 1
for (let i = 10;i<=50;i++){
    if (i%2===0){
        console.log(i)
    }
}

/* 
    Задание 2:

    Необходимо создать объект в котором вы опишите самого себя в формате : "свойство: значение"

    Список свойств:

    - Имя(string)
    - Фамилия(string)
    - Возраст(number)
    - Есть ли домашние животные(boolean)
*/
//task 2
    let me = {
        name: 'Дмитрий',
        surname: 'Лицкевич',
        age: 20,
        pet: false
    }
    console.log(me)
/* 
    Задание 3:

    Отрывок из текста А.С Пушкин, Капитанская дочка был разбит на небольшие кусочки и помещен в массив. 
    Необходимо собрать этот текст из массива и придать ему первоначальный вид.

    Текст до разбивки на части:

    "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей,
    что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам"

    Массив: 
    const array = [
        2'я в Симбирск,',0
        9'в трактире.',1
        11'с утра',2
        0'В ту же ночь',3
        8'Я остановился',4
        5'для закупки', 5
        7'что и было поручено Савельичу.',6
        1'приехал,',7
        3'где должен был',8
        6'нужных вещей',9
        12'отправился по лавкам',10
        4'пробыть сутки',11
        10'Савельич'12
    ]

   итоговый текст должен быть собран из массива array и результат записать в переменную result
*/
//task 3
const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки', 
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
]
let result = ''
result = array[3]+' '+array[7]+' '+array[0]+' '+array[8]+' '+array[11]+' '+array[5]+' '+array[9]+' '+array[6]+' '+array[4]
result = result+' '+array[1]+' '+array[12]+' '+array[2]+' '+array[10]
console.log(result)
/* 
    Задание 4:

    Напишите функцию, в теле которой будет находится следующий код:

    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);

    firstName и lastName - это параметры функции

    При вызове функции передайте ей, в качестве аргумента, свое имя и фамилию.
*/
//task 4
let firstName = 'Дмитрий'
let lastName = 'Лицкевич'
const fullName = `${firstName} ${lastName}`;
console.log(fullName)
/* 
    Задание 5:

    Вывести в консоль с помощью цикла WHILE все нечетные числа от 21 до 67
    
*/
//task 5
let task5 = 21
while(task5<=67){
    if(task5%2===1){
        console.log(task5)
    }
    task5++
}
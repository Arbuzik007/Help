// Переменные
const i = 5;
const f = 10.3;
const s = 'Hello';
const b = true;

//Объект
const person = {
	name: 'Maria',
	year: 23,
	city: 'America',
	position: 'bisneswoman'
};

person.city = 'Canada';

//Массив
const cities = ['Minsk', 'Marsel', 'Moscow', 'Riga'];

cities.push('London');//Добавить в конец
cities.unshift('New York');//Добавить в начало

console.log('shift:' + cities.shift());//Достаёт и выводить с начала
console.log('pop:' + cities.pop());//Достаёт и выводить с конца

//Оператор typeof возвращает строку, указывающую тип операнда
console.log({i}, typeof i);
console.log({s}, typeof (s) + i);
console.log({b}, typeof b);
console.log({f}, typeof f);

console.log({person}, typeof person);
//Array - это массив или нет
console.log({isArray: Array.isArray(person)});

console.log({cities}, typeof cities);
console.log({isArray: Array.isArray(cities)});

//Оператор instanceof проверяет, принадлежит ли объект к определённому классу
console.log({instanceofArray: cities instanceof Array});

//Чтобы их различать, вы можете считать undefined неожиданным отсутствием значения,
// а null — умышленным отсутствием значения.
//https://frontender.info/exploring-the-abyss-of-null-and-undefined-in-javascript/ 
const emptyScalar;
console.log({emptyScalar}, typeof emptyScalar);

const emptyObject = null;
console.log({emptyObject}, typeof emptyObject);

//NaN - not a number
let count = NaN;
console.log({count}, typeof count);
 
count = undefined + 1;
console.dir({count});

console.log(Infinity, -Infinity, typeof  Infinity);

const s = (
    emptyObject === null ?
      'emptyObject is null':
      'emptyObject is not null'
);
console.log(s);

//Функция parseInt() принимает строку в качестве аргумента и 
//возвращает целое число в соответствии с указанным основанием системы счисления.
//Функция parseFloat() принимает строку в качестве аргумента и 
//возвращает десятичное число (число с плавающей точкой)
console.log(parseInt('11', 2));//3

//Delete

const org = "Hello";
delete org;//no

let org = "Hello";
delete org;//yes

const country = {
    name: "Maria",
    year: 23,
    city: "Belarus",
    work: "bisneswoman"
};

delete country.city;
country.city = "New York";
console.dir({country});

const currencies = ["BTC", "EUR", "UAH", "USD"];

console.log("currencies[1]:", currencies[1], 1 in currencies);// true
console.log("currencies[2]:", currencies[2], 2 in currencies);// true

delete currencies[1];
currencies[2] = undefined;
//94; false
//95; true

//Метод toString() возвращает строку, представляющую объект.
const a = 9;
const aBinary = a.toString(2);
console.log(a + " to base 2: " + aBinary);//9 to base 2: 1001

//непонятная ерунда
console.log(a + ' << ' + 2 + ' = ', a << 2);//9 << 2 = 36
console.log(aBinary + ' << ' + 2 + ' = ' + (a << 2).toString(2));//1001 << 2 = 100100

//BigInt
const max = 2 ** 53 - 1;
const biSafe = BigInt(max);
console.log('max = ', max);//9007199254740991
console.log('biSafe = ', biSafe);//9007199254740991

console.log('typeof max = ', typeof max);//number
console.log('typeof biSafe = ', typeof biSafe);//BigInt

//Можно использовать вместо if
const city = 'Minsk';
sole.log((city === Minsk) ?'city is Minsk' : 'city is not Minsk');

//Switch
const getDay = n => {
	switch (n) {
		case 1: return 'Monday';
		case 2: return 'Tuesday';
		case 3: return 'Wednesday';
		case 4: return 'Thursday';
		case 5: return 'Friday';
		case 6: return 'Saturday';
		case 7: return 'Sunday';
		default: return new Error(`Invalid day number: ${n}`);
	}
};

console.log(getDay(3));

//2 вариант
const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

const getDayWithoutSwitch = n => {
	n > 0 && <= days.length ?
		days[n - 1] :
		new Error(`Invalid day number: ${n}`)
};

const getDayNumber = name => {
	const n = days.indexOf(name);
	return n !== -1 ? 
		n + 1 :
		new Error(`Invalid day number: ${n}`);
};

console.log(getDayWithoutSwitch(3));
console.log(getDayWithoutSwitch(20));
console.log(getDayNumber('Sunday'));
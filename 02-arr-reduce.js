//How to use array reduce method to convert an array of objects to objects

// https://jrsinclair.com/articles/2019/functional-js-do-more-with-reduce/

inventory = [
	{ key: 'salad', value: { price: 10, extra: true } },
	{ key: 'bacon', value: { price: 15, extra: false } }
];

inventory = inventory.reduce((acc_item, item) => {
	acc_item[item.key] = { price: item.value.price, extra: item.value.extra };
	return acc_item;
}, {});

console.log(inventory);

//Reduce method takes a reducer function and an initial value
// Use Array Reduce Method to calculate accumulative value (both sum and multiply)
function add(a, b) {
	return a + b;
}

function multiply(a, b) {
	return a * b;
}

const sampleArray = [ 1, 2, 3, 4 ];

const sum = sampleArray.reduce(add, 0);
console.log('The total is:', sum);
// ⦘ The sum total is: 10

const product = sampleArray.reduce(multiply, 1);
console.log('The product total is:', product);
// ⦘ The product total is: 24

function fizzBuzzReducer(acc, element) {
	// return `acc is: ${acc}\n, ele is: ${element}\n`;

	if (element % 15 === 0) return `${acc}Fizz Buzz\n`;
	if (element % 5 === 0) return `${acc}Fizz\n`;
	if (element % 3 === 0) return `${acc}Buzz\n`;
	return `acc is: ${acc}, ele is: ${element}\n`;
}

const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];

// console.log(nums.reduce(fizzBuzzReducer, ''));

//convert our array to an object
const peopleArr = [
	{
		username: 'glestrade',
		displayname: 'Inspector Lestrade',
		email: 'glestrade@met.police.uk',
		authHash: 'bdbf9920f42242defd9a7f76451f4f1d',
		lastSeen: '2019-05-13T11:07:22+00:00'
	},
	{
		username: 'mholmes',
		displayname: 'Mycroft Holmes',
		email: 'mholmes@gov.uk',
		authHash: 'b4d04ad5c4c6483cfea030ff4e7c70bc',
		lastSeen: '2019-05-10T11:21:36+00:00'
	},
	{
		username: 'iadler',
		displayname: 'Irene Adler',
		email: null,
		authHash: '319d55944f13760af0a07bf24bd1de28',
		lastSeen: '2019-05-17T11:12:12+00:00'
	}
];
function keyByUsernameReducer(acc, person) {
	// console.log({ ...acc });

	return { ...acc, [person.username]: person };
}
const peopleObj = peopleArr.reduce(keyByUsernameReducer, {});
console.log(peopleObj);
// ⦘ {
//     "glestrade": {
//         "username":    "glestrade",
//         "displayname": "Inspector Lestrade",
//         "email":       "glestrade@met.police.uk",
//         "authHash":    "bdbf9920f42242defd9a7f76451f4f1d",
//          "lastSeen":    "2019-05-13T11:07:22+00:00"
//     },
//     "mholmes": {
//         "username":    "mholmes",
//         "displayname": "Mycroft Holmes",
//         "email":       "mholmes@gov.uk",
//         "authHash":    "b4d04ad5c4c6483cfea030ff4e7c70bc",
//          "lastSeen":    "2019-05-10T11:21:36+00:00"
//     },
//     "iadler":{
//         "username":    "iadler",
//         "displayname": "Irene Adler",
//         "email":       null,
//         "authHash":    "319d55944f13760af0a07bf24bd1de28",
//          "lastSeen":    "2019-05-17T11:12:12+00:00"
//     }
// }

const fileLines = [
	'Inspector Algar,Inspector Bardle,Mr. Barker,Inspector Barton',
	'Inspector Baynes,Inspector Bradstreet,Inspector Sam Brown',
	'Monsieur Dubugue,Birdy Edwards,Inspector Forbes,Inspector Forrester',
	'Inspector Gregory,Inspector Tobias Gregson,Inspector Hill',
	'Inspector Stanley Hopkins,Inspector Athelney Jones'
];

function splitLineReducer(acc, line) {
	return acc.concat(line.split(/,/g));
}
const investigators = fileLines.reduce(splitLineReducer, []);
console.log(investigators);
// ⦘ [
//   "Inspector Algar",
//   "Inspector Bardle",
//   "Mr. Barker",
//   "Inspector Barton",
//   "Inspector Baynes",
//   "Inspector Bradstreet",
//   "Inspector Sam Brown",
//   "Monsieur Dubugue",
//   "Birdy Edwards",
//   "Inspector Forbes",
//   "Inspector Forrester",
//   "Inspector Gregory",
//   "Inspector Tobias Gregson",
//   "Inspector Hill",
//   "Inspector Stanley Hopkins",
//   "Inspector Athelney Jones"
// ]

//.flatMap() isn’t available in Internet Explorer or Edge. So, we can use .reduce() to create our own flatMap() function.
function flatMap(f, arr) {
	const reducer = (acc, item) => acc.concat(f(item));
	return arr.reduce(reducer, []);
}

const investigators1 = flatMap((x) => x.split(','), fileLines);
console.log(investigators1);

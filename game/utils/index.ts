const { v4 } = require('uuid');

export const countItems = [
{value: 1, label: '2', id: v4()},
{value: 2,label: '3', id: v4()},
{value: 3,label: '4', id: v4()},
{value: 4,label: '5', id: v4()}
];

export const meaning = [
    {value: 1, label: 'A', id: v4()},
    {value: 2, label: '9', beggin: '1', id: v4()},
    {value: 3, label: '19', beggin: '9', id: v4()},
    {value: 4, label: '50', beggin: '20', id: v4()},
    {value: 5, label: '99', beggin: '51', id: v4()}, 
    {value: 6, label: '999', beggin: '100', id: v4()}
];

export const themGame: PropsThemGame[] = [
    {theme: './bg-1.png', icons: ['./Money1.svg', './Money2.svg', './Money2.svg', './Money1.svg', './Money3.svg'], field: './field1.svg', id: v4()},
    {theme: './bg-2.png', icons: ['./newYear1.svg', './newYear2.svg', './newYear3.svg', './newYear4.svg', './newYear3.svg'], field:'./field2.svg', id: v4()},
    {theme: './bg-4.png', icons: ['./sweet1.svg', './sweet2.svg', './sweet3.svg', './sweet3.svg', './sweet4.svg'], field: './field4.svg', id: v4()},
    // {theme: './bg-3.png', icons: ['./flower1.svg', './flower2.svg', './flower3.svg', './flower4.svg', './flower5.svg'], field: './field3.svg', id: v4()},
]

export interface PropsThemGame {
    theme: string;
    icons: string[];
    field: string;
    id: string;
}

export const countWidth = (length: number) => length * 75;
export const countRangeGenerate = (valueRange: number) => meaning[+valueRange - 1].label;

export const sortedArrayNum = (array: any[]) => array.sort((a, b) => a - b);
export const sortedArrayStr = (array: string[]) => array.sort((a, b) => ('' + a).localeCompare(b));

const randomNum = (max: number, min: number) => Math.floor(Math.random() * (max - min)) + min;

export const generateArr = (max: string, min: string, size: string) => {
    let random;
    let arr: any = [];
    let length = +size;
    for(let i = 0; i < length; i++) {
        random = randomNum(+max, +min)
        !arr.includes(random) ? arr.push(random) : length += 1;
    }
    return arr;
}

export const generateLetters = (letter: string, size: string) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let length = +size;
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        let random = characters.charAt(Math.floor(Math.random() * charactersLength));
        if(result.split('').includes(String(random))){
            length += 1;
        } else {
            result += random;
        }
    }
    return result.split('');
}

export const generateTheme = (theme: PropsThemGame[])  => {
    const randomNumber = randomNum(3, 0);
    return theme[randomNumber]
}

export const positionAnswer = (array: any[]) => {
    let position;
    switch (String(array.length)) {
        case '5':
            position = '130px'
            break;
        case '4':
            position = '196px'
            break;
        case '3':
            position = '242px'
            break;
        case '2':
            position = '304px'
            break;
        default: 
            position = '0px'
    }
    return position;
}
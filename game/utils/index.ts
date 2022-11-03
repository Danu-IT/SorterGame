export const countItems = [
{value: '1', label: '2'},
{value: '2',label: '3'},
{value: '3',label: '4'},
{value: '4',label: '5'}
];

export const meaning = [
    {value: '1', label: 'A'},
    {value: '2', label: '9', beggin: '1'},
    {value: '3', label: '19', beggin: '9'},
    {value: '4', label: '50', beggin: '20'},
    {value: '5', label: '99', beggin: '51'}, 
    {value: '6', label: '999', beggin: '100'}
];

export const countWidth = (length: number) => length * 75;
export const countRangeGenerate = (valueRange: number) => meaning[+valueRange - 1].label;

const sortedArrayNum = (array: number[]) => array.sort((a, b) => a - b);
const sortedArrayStr = (array: string[]) => array.sort((a, b) => ('' + a).localeCompare(b));

export const generateArr = (max: string, min: string, size: string) => {
    let random;
    let arr: any = [];
    let length = +size;
    for(let i = 0; i < length; i++) {
        random = Math.floor(Math.random() * (+max - +min)) + +min;
        !arr.includes(random) ? arr.push(random) : length += 1;
    }
    let sorted = sortedArrayNum(arr)
    return sorted;
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
    return sortedArrayStr(result.split(''));
}
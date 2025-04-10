//list

const arr= ['a', 'b', 'c']
const arr1: Array<number> = [1, 2, 5]

const arr2: string[][] = []
arr2.push(['a', 'd'])

type MyType= (string | number)
const arr3: MyType[] = []



//кортежі-фіксована кількість елементів (tuple)
const tuple1: [string, boolean, number] = ["abc", false, 5]
//підходить для роботи з csv(common separation value) файлами

const example: [string, string, number][] = [
    ['str', 'str', 56]
]


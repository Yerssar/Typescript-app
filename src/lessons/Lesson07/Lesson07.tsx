import {useState} from 'react'
import './styles.css';
import Counter from 'components/Counter/Counter';

function Lesson07(){
    const [count, setCount] = useState<number>(0);

  const onMinus = (): void => {
    setCount((prevValue) => prevValue - 1);
  };

  const onPlus = (): void => {
    setCount((prevValue) => prevValue + 1);
};
//generic
//generic указывается при создании type или interface после названия
// создание type с generic
type CustomArrayType<T = string> = T[];

const numbersArray: CustomArrayType<number> = [2, 3]
const stringArray: CustomArrayType<string> = ['2', '3']
const stringArray: CustomArrayType = ['2', '3']

type CustomArrayTupelType<T =string> = [string, T]
const arrayMix1 : CustomArrayTupelType = ['apple', '2'] // ожидается тип [ string, string]
const arrayMix2 : CustomArrayTupelType <number> = ['apple', 2] // ожидается тип [string , number]

//создание type с interface
interface Frruits{
    name: string,
    weight: number
} 

const fruits1: Fruits = {
    name: 'Apple',
    weight: 4
}

//enum
enum Colors {Red, Black, Green};

return <div><Counter countValue={count} onMinusClick={onMinus} onPlusClick={onPlus} /></div>
}

export default Lesson07;
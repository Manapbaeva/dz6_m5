import { useSelector, useDispatch } from 'react-redux';
import { setNum1, setNum2, setResult } from './calculatorSlice';

export const Calculator = () => {
    const num1 = useSelector((state) => state.calculator.num1);
    const num2 = useSelector((state) => state.calculator.num2);
    const result = useSelector((state) => state.calculator.result);
    const dispatch = useDispatch();

    const handleNum1Change = (event) => {
        dispatch(setNum1(event.target.value));
    };

    const handleNum2Change = (event) => {
        dispatch(setNum2(event.target.value));
    };

    const handleAddClick = () => {
        if (num1 && num2) {
            const sum = Number(num1) + Number(num2);
            dispatch(setResult(sum));
        } else {
            alert('Both fields are required!');
        }
    };

    const handleSubtractClick = () => {
        if (num1 && num2) {
            const difference = Number(num1) - Number(num2);
            dispatch(setResult(difference));
        } else {
            alert('Both fields are required!');
        }
    };

    const handleMultiplyClick = () => {
        if (num1 && num2) {
            const product = Number(num1) * Number(num2);
            dispatch(setResult(product));
        } else {
            alert('Заполните 2 поля!');
        }
    };

    const handleDivideClick = () => {
        if (num1 && num2) {
            const quotient = Number(num1) / Number(num2);
            dispatch(setResult(quotient));
        } else {
            alert('Заполните 2 поля!');
        }
    };

    return (
        <div>
            <div>
                <input type="number" value={num1} onChange={handleNum1Change} />
                <input type="number" value={num2} onChange={handleNum2Change} />
            </div>
            <div>
                <button onClick={handleAddClick}>+</button>
                <button onClick={handleSubtractClick}>-</button>
                <button onClick={handleMultiplyClick}>*</button>
                <button onClick={handleDivideClick}>/</button>
            </div>
            <div>
                <span>{result}</span>
            </div>
        </div>
    );
};

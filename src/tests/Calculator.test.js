import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
    let container;
    beforeEach(() => {
        container = render(<Calculator/>)
    })

    it('should change running total on number enter', () => {
        const button4 = container.getByTestId('number4');
        const runningTotal = container.getByTestId('running-total');
        fireEvent.click(button4);
        expect(runningTotal.textContent).toEqual('4');
    })

    // calculator.add() - add 1 to 4 and get 5

    it('should be able to add two numbers', () => {
        const button1 = container.getByTestId('number1')
        const button4 = container.getByTestId('number4')
        const buttonAdd = container.getByTestId('operator-add')
        const buttonEquals = container.getByTestId('operator-equals')
        const runningTotal = container.getByTestId('running-total')

        fireEvent.click(button1)
        fireEvent.click(buttonAdd)
        fireEvent.click(button4)
        fireEvent.click(buttonEquals)

        expect(runningTotal.textContent).toEqual('5')
    })

    // calculator.subtract() subtract 4 from 7 and get 3

    it('should be able to subtract a number from another number', () => {
        const button7 = container.getByTestId('number7')
        const button4 = container.getByTestId('number4')
        const buttonSubtract = container.getByTestId('operator-subtract')
        const buttonEquals = container.getByTestId('operator-equals')
        const runningTotal = container.getByTestId('running-total')

        fireEvent.click(button7)
        fireEvent.click(buttonSubtract)
        fireEvent.click(button4)
        fireEvent.click(buttonEquals)

        expect(runningTotal.textContent).toEqual('3')
    })

    // calculator.multiply() - multiply 3 by 5 and get 15

    it('should be able to multiply two numbers', () => {
        const button3 = container.getByTestId('number3')
        const button5 = container.getByTestId('number5')
        const buttonMultiply = container.getByTestId('operator-multiply')
        const buttonEquals = container.getByTestId('operator-equals')
        const runningTotal = container.getByTestId('running-total')

        fireEvent.click(button3)
        fireEvent.click(buttonMultiply)
        fireEvent.click(button5)
        fireEvent.click(buttonEquals)

        expect(runningTotal.textContent).toEqual('15')
    })

    // calculator.divide() - divide 21 by 7 and get 3

    it('should be able to divide a number from another number', () => {
        const button1 = container.getByTestId('number1')
        const button2 = container.getByTestId('number2')
        const button7 = container.getByTestId('number7')
        const buttonDivide = container.getByTestId('operator-divide')
        const buttonEquals = container.getByTestId('operator-equals')
        const runningTotal = container.getByTestId('running-total')

        fireEvent.click(button2)
        fireEvent.click(button1)
        fireEvent.click(buttonDivide)
        fireEvent.click(button7)
        fireEvent.click(buttonEquals)

        expect(runningTotal.textContent).toEqual('3')
    })

    // calculator.numberClick() - concatenate multiple number button clicks

    it('should be able to concatenate multiple number button clicks', () => {
        const button1 = container.getByTestId('number1')
        const runningTotal = container.getByTestId('running-total')

        fireEvent.click(button1)
        fireEvent.click(button1)
        fireEvent.click(button1)

        expect(runningTotal.textContent).toEqual('111')
    })

    // calculator.operatorClick() - chain multiple operations together

    it('should be able to chain multiple operations together', () => {
        const button1 = container.getByTestId('number1')
        const button4 = container.getByTestId('number4')
        const buttonAdd = container.getByTestId('operator-add')
        const buttonMultiply = container.getByTestId('operator-multiply')
        const buttonEquals = container.getByTestId('operator-equals')
        const runningTotal = container.getByTestId('running-total')

        fireEvent.click(button1)
        fireEvent.click(buttonAdd)
        fireEvent.click(button4)
        fireEvent.click(buttonMultiply)
        fireEvent.click(button4)
        fireEvent.click(buttonEquals)

        expect(runningTotal.textContent).toEqual('20')
    })

    // calculator.clearClick() - clear the running total without affecting the calculation

    it('should be able to clear the running total without affecting the calculation', () => {
        const button1 = container.getByTestId('number1')
        const button4 = container.getByTestId('number4')
        const buttonAdd = container.getByTestId('operator-add')
        const buttonMultiply = container.getByTestId('operator-multiply')
        const buttonEquals = container.getByTestId('operator-equals')
        const runningTotal = container.getByTestId('running-total')
        const buttonClear = container.getByTestId('clear')

        fireEvent.click(button1)
        fireEvent.click(buttonAdd)
        fireEvent.click(button4)
        fireEvent.click(buttonEquals)
        fireEvent.click(buttonClear)
        fireEvent.click(buttonMultiply)
        fireEvent.click(button4)
        fireEvent.click(buttonEquals)

        expect(runningTotal.textContent).toEqual('20')
    })
})


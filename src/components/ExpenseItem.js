import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button class="btn btn-success btn-lg" style={{ borderRadius: "50%", padding: "0px", margin: "0px", lineHeight: "16px", height: "22px", width: "22px", textAlign: "left", alignItems: "center", display: "inline-block", flexDirection: "column", justifyContent: "center", fontSize: "20px", fontWeight: "900" }} onClick={event => increaseAllocation(props.name)}>+</button></td>
            <td><button class="btn btn-danger btn-lg" style={{ borderRadius: "50%", padding: "0px", margin: "0px", lineHeight: "16px", height: "22px", width: "22px", textAlign: "left", alignItems: "center", display: "inline-block", flexDirection: "column", justifyContent: "center", fontSize: "20px", fontWeight: "900" }} onClick={event => decreaseAllocation(props.name)}>-</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
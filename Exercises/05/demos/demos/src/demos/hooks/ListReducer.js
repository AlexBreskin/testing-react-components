import React, {useReducer} from 'react';

export const inputPlaceholder = "Enter new item";
export const defaultState = {
    newItem: '',
    items: []
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'newItemChange':
            return {
                ...state,
                newItem: action.value
            };
        case 'add':
            return {
                items: state.items.concat([state.newItem]),
                newItem: ''
            };
        default: return state;
    }
};

const ListReducer = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'add'
        });
    };

    return (
        <div>
            <h2>List</h2>
            <ul>
                {state.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <form onSubmit={handleSubmit} data-testid='form'>
                <div className="form-group">
                    <input 
                        type="text" 
                        value={state.newItem} 
                        onChange={(e) => {dispatch({type: 'newItemChange', value: e.target.value});}} 
                        className="form-control" 
                        id="newItem" 
                        placeholder={inputPlaceholder} />
                </div>
                <input type="submit" value="Add" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default ListReducer;
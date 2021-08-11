import React, {useState} from 'react';

export const inputPlaceholder = "Enter new item";

const List = () => {
    const [newItem, setNewItem] = useState('');
    const [items, setItems] = useState([]);

    const handleSubmit = (e) => {
        setItems(items.concat([newItem]));
        setNewItem('');
        e.preventDefault();
    };

    return (
        <div>
            <h2>List</h2>
            <ul>
                {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <form onSubmit={handleSubmit} data-testid='form'>
                <div className="form-group">
                    <input 
                        type="text" 
                        value={newItem} 
                        onChange={(e) => {setNewItem(e.target.value)}} 
                        className="form-control" 
                        id="newItem" 
                        placeholder={inputPlaceholder} />
                </div>
                <input type="submit" value="Add" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default List;
import { useState, useEffect } from 'react';
import List from '../components/List';

const Home = () => {
    const today = new Date();

    const option = {
        weekday: 'short',
        day: 'numeric',
        year: 'numeric',
        month: 'short',
    };

    const [lists, setLists] = useState([
        {
            id: 1,
            title: 'Feeding my rabbit',
        },
        {
            id: 2,
            title: "Waking up my brothers to prepare there self to school',",
        },
        {
            id: 3,
            title: 'Prepare there breakfast ',
        },
    ]);

    const [newList, setNewList] = useState('');

    // function

    const handleDelete = list => {
        setLists(lists.filter(l => l.id !== list.id));
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (newList.length > 0) {
            setLists([...lists, { id: lists.length + 1, title: newList }]);
            setNewList('');
        } else {
            alert('Cant add empty');
        }
    };
    return (
        <div className="todolist-card">
            <div className="todolist-card-header">
                <h1>{today.toLocaleDateString('en-US', option)}</h1>
            </div>
            <div className="todolist-card-body">
                {lists.map(list => (
                    <List
                        key={list.id}
                        list={list}
                        handleDelete={handleDelete}
                    />
                ))}

                <div className="todolist-form">
                    <form onSubmit={handleSubmit}>
                        <input
                            className="todolist-form-control"
                            type="text"
                            onChange={e => setNewList(e.target.value)}
                            value={newList}
                        />
                        <button type="submit" className="todolist-btn">
                            +
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;

const List = ({ list, handleDelete }) => {
    return (
        <>
            <div className="todolist-item" key={list.id}>
                <input type="checkbox" name="" id="" />
                <span className="todolist-item-text">{list.title}</span>
                <button
                    onClick={() => handleDelete(list)}
                    className="btn-delete"
                >
                    x
                </button>
            </div>
            <hr />
        </>
    );
};

export default List;

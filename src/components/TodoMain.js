import React, { useEffect, useState, createContext } from "react";
import TodoItems from "./TodoItems";

const CountedValue = createContext('');

function TodoMain(props) {
    const [items, setItems] = useState(localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [])
    const [inputval, setInputVal] = useState('');
    const [toggleBtn, setToggleBtn] = useState(true)
    const [editVal, setEditVal] = useState('')

    const inputEvent = (e) => {
        e.preventDefault();
        setInputVal(e.target.value);
    }

    const onSubmits = (e) => {
        e.preventDefault();
        if (inputval && !toggleBtn) {
            let editedData = items.map((element) => {
                if (element.id === editVal) {
                    return { ...element, name: inputval }
                }
                return element;
            })
            setItems(editedData);
            localStorage.setItem('items', JSON.stringify(editedData))
            setInputVal('');
            setToggleBtn(true);

        }
        else {
            const allInputData = { id: new Date().getTime().toString(), name: inputval, status: 0 }
            let newDataSet = [...items, allInputData]
            setItems(newDataSet);
            localStorage.setItem('items', JSON.stringify(newDataSet))
            setInputVal('');
            props.setItemsInApp(newDataSet)
        }
    }

    const deleteItem = (id) => {
        const UpdateItem = items.filter((element) => {
            return id !== element.id
        });
        setItems(UpdateItem);
        localStorage.setItem('items', JSON.stringify(UpdateItem))
        props.setItemsInApp(UpdateItem)
    }
    const editItem = (id) => {
        const EditItem = items.find((element) => {
            return element.id === id
        });

        setToggleBtn(false);
        setInputVal(EditItem.name);
        setEditVal(id);
    }
    const StatusUpdate = (id) => {
        let statusData = items.map((elem) => {
            if (elem.id === id) {
                if (elem.status === 1) {
                    return { ...elem, status: 0 }
                }
                else {
                    return { ...elem, status: 1 }
                }
            }
            return elem;
        })
        setItems(statusData);
        localStorage.setItem('items', JSON.stringify(statusData))

    }

    useEffect(() => {
        props.setItemsInApp(items)
    }, [items])

    return <>
        <div className="col-md-6 mr-center pad-40">

            <div className="nopadding todo-header"><h2>TODO LIST</h2></div>
            <form action="" onSubmit={onSubmits}>
                <div className="col-md-12 row pad-40">
                    <div className="col-md-12 input-group-prepend">
                        <input type="text" name="name" className="form-control"
                            placeholder="Enter an Item"
                            value={inputval}
                            onChange={inputEvent}
                            required
                        />
                          {toggleBtn ?
                            <button type="submit" className="btn btn-primary fas fa-check-circle"></button>
                            :
                            <button type="submit" className="btn btn-primary fas fa-edit"></button>
                        }
                    </div>
                </div>
            </form>
            <div className="col-md-12 todo-content table-responsive">
                <table className="table table-striped table-reposnsive">
                    <tr>
                        <th>SL</th>
                        <th>Todos</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {
                        items.length ?
                            items.map((itemVal, index) => {
                                return <TodoItems key={index} name={itemVal.name} id={itemVal.id} index={index} status={itemVal.status}
                                    onDelete={deleteItem} onEdit={editItem} onStatusUpdate={StatusUpdate} />
                            })
                            :
                            <p className="col-md-12 alert">No data found !! 😞</p>
                    }
                </table>
            </div>

        </div>
    </>
}
export default TodoMain;
export { CountedValue };
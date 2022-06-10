export default function TodoItems(props) {
    const { name, id, onDelete, index, onEdit, status, onStatusUpdate } = props;
    return <tbody>
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td className="status">
                {
                    (status === 1) ?
                        <button className="btn btn-sm btn-success" onClick={() => {
                            onStatusUpdate(id)
                        }}>
                            <i className="fas fa-check"></i> Done
                        </button>
                        :

                        <button className="btn btn-sm btn-warning" onClick={() => {
                            onStatusUpdate(id)
                        }}>
                            <i className=" fas fa-times-circle"></i> Undone
                        </button>
                }
            </td>
            <td>
                <i className="btn btn-sm btn-danger fas fa-trash-alt" onClick={() => {
                    onDelete(id)
                }} >
                </i>
                <i className="btn btn-sm btn-primary fas fa-edit " onClick={() => {
                    onEdit(id)
                }} >
                </i>

            </td>
        </tr>
    </tbody>
}
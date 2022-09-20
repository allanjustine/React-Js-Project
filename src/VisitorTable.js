const VisitorsTable = ({visitors, handleDelete}) => {

    return (
        <div className="visitor-list">
            <h2>List of Visitors</h2>
            <table className="table table-striped border border-light">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Purpose</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {visitors.map((visitor) =>
                        <tr key={visitor.id}>
                            <td>{visitor.name}</td>
                            <td>{visitor.purpose}</td>
                            <td>{visitor.date}</td>
                            <td><a className="btn" onClick={() => handleDelete(visitor.id)} ><i class="fa fa-times-circle" aria-hidden="true"></i></a></td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
}
 
export default VisitorsTable;
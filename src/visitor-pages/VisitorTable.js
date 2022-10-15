const VisitorsTable = ({visitors, handleDelete}) => {

    return (
        <div className="visitor-list">
            <h2>List of Visitors</h2>
            <table id="table" className="table table-striped border border-light">
                <thead className="thead">
                    <tr className="tr">
                        <th className="th">Name</th>
                        <th className="th">Purpose</th>
                        <th className="th">Date</th>
                        <th className="th">Action</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {visitors.map((visitor) =>
                        <tr className="tr" key={visitor.id}>
                            <td className="td">{visitor.name}</td>
                            <td className="td">{visitor.purpose}</td>
                            <td className="td">{visitor.date}</td>
                            <td className="td"><a className="btn" onClick={() => handleDelete(visitor.id)} ><i class="fa fa-times-circle" aria-hidden="true" id="del"></i></a></td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
}
 
export default VisitorsTable;
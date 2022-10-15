const VisitorCreate = () => {
    return (

        <form>
                <div className="card">
                    <div className="card-header">
                        <h2>Visitor Entry</h2>
                    </div>
                    <div className="card-body">
                        <div className="mt-4">
                            <label>Last Name</label>
                            <input className="form-control" placeholder="Enter Last Name" type="text" required />
                        </div>
                        <div className="mt-4">
                            <label>First Name</label>
                            <input className="form-control" placeholder="Enter First Name" type="text" required />
                        </div>
                        <div className="mt-4">
                            <label>Purpose of visit</label>
                            <input className="form-control" placeholder="What is your purpose" type="text" required />
                        </div>
                        <div className="mt-4">
                            <label>Date</label>
                            <input className="form-control" type="date" required />
                        </div>
                        <div className="mt-4">
                            <button id="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
    );
}
 
export default VisitorCreate;
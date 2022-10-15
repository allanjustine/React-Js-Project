import VisitorCreate from './VisitorCreate';
import VisitorTable from './VisitorTable';
import { useEffect, useState } from 'react';
const VisitorIndex = () => {
    const [visitors, setVisitors] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        const newVisitors = visitors.filter(visitor => visitor.id !== id);
        setVisitors(newVisitors);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/visitors')
        .then (res => {
            if(!res.ok)
            throw Error('Could not fetch the data for that resource');
           return res.json();
        })
        .then (data => {
            setVisitors(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
        })
        }, 1000)
    }, []);

    return (
        <div>
        <div className="row">
            <div className="col-md-3">
                <VisitorCreate />
            </div>
            <div className="col-md-9">
                { error && <div><i class="fa fa-times" aria-hidden="true"></i> { error }</div> }
                { isPending && <div><i class="fa fa-spinner" aria-hidden="true"></i> Loading...</div> }
                {visitors && <VisitorTable visitors={visitors} handleDelete={handleDelete} />}
            </div>
        </div>
    </div>

    );
}
 
export default VisitorIndex;
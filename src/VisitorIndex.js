import VisitorCreate from './VisitorCreate'
import VisitorTable from './VisitorTable';
import { useEffect, useState } from 'react';
const VisitorIndex = () => {
    const [visitors, setVisitors] = useState(null);

    const handleDelete = (id) => {
        const newVisitors = visitors.filter(visitor => visitor.id !== id);
        setVisitors(newVisitors);
    }

    useEffect(() => {
        fetch('http://localhost:8000/visitors')
        .then (res => {
           return res.json();
        })
        .then (data => {
            setVisitors(data);
        })
    }, []);

    return (
        <div class="m-5">
        <div class="row">
            <div class="col-md-3">
                <VisitorCreate />
            </div>
            <div class="col-md-9">
                {visitors && <VisitorTable visitors={visitors} handleDelete={handleDelete} />}
            </div>
        </div>
    </div>

    );
}
 
export default VisitorIndex;
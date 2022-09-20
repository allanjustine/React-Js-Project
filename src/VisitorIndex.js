import VisitorCreate from './VisitorCreate'
import VisitorTable from './VisitorTable';
import { useEffect, useState } from 'react';
const VisitorIndex = () => {
    const [visitors, setVisitors] = useState([
        { name: 'Allan Justine', purpose: 'Bills Payment', date: 'Sep 10, 2022', id: 1 },
        { name: 'Justine Allan', purpose: 'Bills Payment', date: 'Sep 10, 2022', id: 2 },
        { name: 'Allan Mascariñas', purpose: 'Contact signing', date: 'Sep 11, 2022', id: 3 },
        { name: 'Justine Mascariñas', purpose: 'Submit application', date: 'Sep 12, 2022', id: 4 }
    ]);

    const handleDelete = (id) => {
        const newVisitors = visitors.filter(visitor => visitor.id !== id);
        setVisitors(newVisitors);
    }

    return (
        <div class="m-5">
        <div class="row">
            <div class="col-md-3">
                <VisitorCreate />
            </div>
            <div class="col-md-9">
                <VisitorTable visitors={visitors} handleDelete={handleDelete} />
            </div>
        </div>
    </div>

    );
}
 
export default VisitorIndex;
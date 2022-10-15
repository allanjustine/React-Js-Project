import {Link} from 'react-router-dom';
const Dashboard = () => {
    return ( 
        <div>
            <h1>Dashboard</h1>
            <div className="row">
                <div className="col">
                    <Link to="/venues" className='linkk'>
                    <div className="card" id="cardd">
                    
                        <div className="card-body text-center" id="card-bodyyy">
                        <i class="fa fa-university" aria-hidden="true" id="dash-icon"></i>
                            <h3>Venues</h3>
                            <p>200 venues</p>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/schedules" className='linkk'>
                    <div className="card" id="cardd">
                        <div className="card-body text-center" id="card-bodyyy">
                        <i class="fa fa-list-alt" aria-hidden="true" id="dash-icon"></i>
                            <h3>Schedules</h3>
                            <p>150 schedules</p>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/visitors" className='linkk'>
                    <div className="card" id="cardd">
                        <div className="card-body text-center" id="card-bodyyy">
                        <i class="fa fa-users" aria-hidden="true" id="dash-icon"></i>
                            <h3>Visitors</h3>
                            <p>1,000 visitors</p>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="container py-5">
                   <h3 className="text-center py-5">Sample dashboard only</h3>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;
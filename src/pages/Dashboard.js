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
                            <div className="row">
                                <div className="col">
                                    <i class="fa fa-university" aria-hidden="true" id="dash-icon"></i>
                                </div>
                                <div className="col mt-4">
                                    <span id="data">Venues</span><br />
                                    <span id="data1">200 venues</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/schedules" className='linkk'>
                    <div className="card" id="cardd">
                        <div className="card-body text-center" id="card-bodyyy">
                            <div className="row">
                                <div className="col">
                                    <i class="fa fa-list-alt" aria-hidden="true" id="dash-icon"></i>
                                </div>
                                <div className="col mt-4">
                                    <span id="data">Schedules</span><br />
                                    <span id="data1">150 schedules</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/visitors" className='linkk'>
                    <div className="card" id="cardd">
                        <div className="card-body text-center" id="card-bodyyy">
                        <div className="row">
                                <div className="col">
                                    <i class="fa fa-users" aria-hidden="true" id="dash-icon"></i>
                                </div>
                                <div className="col mt-4">
                                    <span id="data">Visitors</span><br />
                                    <span id="data1">1,000 visitors</span>
                                </div>
                            </div>
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
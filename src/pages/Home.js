import {useEffect, useState} from 'react';
import VisitorIndex from '../visitor-pages/VisitorIndex';

const Home = () => {

    // const [name, setName] = useState('allan');


    // useEffect(() => {
    //     console.log('use effect ran');
    // }, [name]);
    return (
        <div className="home">
            {/* <button className="btn btn-primary" onClick={() => setName('justine')}>Change name</button>
            <p>{name}</p> */}
            <h1>Home</h1>
        </div>
    );
}
 
export default Home;
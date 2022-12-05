import {useState} from "react";
import { Form, Button } from "react-bootstrap";
import {StudentContext} from '../contexts/StudentContext';
import {useContext} from 'react';


const StudentEdit = ({canEditStudent}) => {
    const id = canEditStudent.id;

    const [name, setName] = useState(canEditStudent.name);
    const [address, setAddress] = useState(canEditStudent.address);
    const [email, setEmail] = useState(canEditStudent.email);
    const [contactNumber, setContactNumber] = useState(canEditStudent.contactNumber);

    const {updateStudent} = useContext(StudentContext);

    const updatedStudent = {id, name, address, email, contactNumber}
    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(id, updatedStudent)
    }
    return ( 
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-2">
                <Form.Control name="name" onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Name" required>
                    
                </Form.Control>
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Control name="address" onChange={(e) => setAddress(e.target.value)} value={address} type="text" placeholder="Address" required>
                    
                </Form.Control>
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Control name="email" onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" required>
                    
                </Form.Control>
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Control name="contactNumber" onChange={(e) => setContactNumber(e.target.value)} value={contactNumber} type="number" placeholder="Contact Number" required>
                    
                </Form.Control>
            </Form.Group>
                <Button className="form-control mt-4" variant="primary" type="submit" block="true">
                    Update Student
                </Button>
        </Form>
     );
}
 
export default StudentEdit;
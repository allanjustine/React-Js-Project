import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

export const StudentContext = createContext()

const StudentContextProvider = (props) => {
    const [students, setStudents] = useState([
        {id: uuidv4(), name: 'Allan Justine Mascariñas', address: 'Tinangnan, Tubigon, Bohol', email: 'allan@gmail.com', contactNumber: '09123456789'},
        {id: uuidv4(), name: 'Ian Gabriel Dupa', address: 'Ilijan Norte', email: 'iangabriel@gmail.com', contactNumber: '092138522215'}
    ]);

const addStudent = (name, address, email, contactNumber) => {
    setStudents([...students, {id:uuidv4(), name, email, address, contactNumber}])
}
const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !==id))
}
const updateStudent = (id, updatedStudent) => {
    setStudents(students.map((student) => student.id === id ? updatedStudent: student))
}
    return ( 
        <StudentContext.Provider value={{ students, addStudent, deleteStudent, updateStudent }}>
            {props.children}
        </StudentContext.Provider>
    );
}
 
export default StudentContextProvider;
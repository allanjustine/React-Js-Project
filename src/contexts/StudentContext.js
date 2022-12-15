import { useEffect } from 'react';
import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

export const StudentContext = createContext()
function getInitialState() {
  const students = localStorage.getItem('students')
  return students ? JSON.parse(students) : []
}

const StudentContextProvider = (props) => {
    const [students, setStudents] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem('students', JSON.stringify(students))
      }, [students])

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
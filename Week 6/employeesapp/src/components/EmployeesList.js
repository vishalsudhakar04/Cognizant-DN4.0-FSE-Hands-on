import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeesList() {
  const employees = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Sam Wilson' }
  ];

  return (
    <div>
      <h2>Employee Roster</h2>
      {employees.map(emp => <EmployeeCard key={emp.id} employee={emp} />)}
    </div>
  );
}

export default EmployeesList;
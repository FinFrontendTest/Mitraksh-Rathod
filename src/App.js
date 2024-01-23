// App.js
import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import EditModal from './components/EditModal';
// import styles from './App.module.css';

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [editModalData, setEditModalData] = useState({ isOpen: false, data: {} });

  const handleFormSubmit = (formData) => {
    setTableData((prevData) => [...prevData, formData]);
  };

  const handleEdit = (index) => {
    setEditModalData({ isOpen: true, data: tableData[index] });
  };

  const handleEditModalSubmit = (formData) => {
    setTableData((prevData) => {
      const newData = [...prevData];
      const editedIndex = newData.findIndex((item) => item === editModalData.data);
      newData[editedIndex] = { ...formData };
      return newData;
    });
  };

  const handleDelete = (index) => {
    setTableData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleEditModalClose = () => {
    setEditModalData({ isOpen: false, data: {} });
  };

  return (
    <>
    
      <Form onSubmit={handleFormSubmit} />
      <Table data={tableData} onEdit={handleEdit} onDelete={handleDelete} />
      {!tableData ? <p>Add some data</p> :  <EditModal
        isOpen={editModalData.isOpen}
        data={editModalData.data}
        onSubmit={handleEditModalSubmit}
        onClose={handleEditModalClose}
      />}
     
      </>
  );
};

export default App;

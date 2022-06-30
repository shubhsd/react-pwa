import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import axios from 'axios';

const Users = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('online');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        setLoading(false);
        setData(res.data);
        localStorage.setItem('users', JSON.stringify(res.data));
      }).catch((err) => {
        // alert("catch block");
        let collection = localStorage.getItem('users');
        setData(JSON.parse(collection));
        setLoading(false);
        setMode('offline');
      })
  };

  return (
    <div style={{ padding: '20px' }}>
      <div>
        {mode === 'offline' && <div className='alert alert-warning' role={'alert'}>You are in offline mode. Kindly check your connection</div>}
      </div>
      {loading ?
        <div>Loading.....</div> :
        <Table striped bordered hover >
          <thead>
            <tr style={{ backgroundColor: 'lightblue' }}>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address?.street}</td>
              </tr>
            )
            )}
          </tbody>
        </Table>
      }
    </div>
  )
}

export default Users

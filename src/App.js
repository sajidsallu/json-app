import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import JsonData from './data.json'

function App() {
  const [contacts, setContacts] = useState(JsonData);
  const [search, setSearch] = useState('');

   const sortName = () => {
     setContacts(
       JsonData.sort((a, b) => {
         return a.SYMBOL.toLowerCase() < a.first_name.toLowerCase()
           ? -1
           : a.SYMBOL.toLowerCase() > a.first_name.toLowerCase()
           ? 1
           : 0;
       })
     );
   };

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>MoneySukh Table</h1>
        <Form>
          <InputGroup className='my-4'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search Table'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>INSTRUMENT</th>
              <th>SYMBOL</th>
              <th>EXPIRY_DT</th>
              <th>STRIKE_PR</th>
              <th>OPTION_TYP</th>
              <th>OPEN</th>
              <th>HIGH</th>
              <th>LOW</th>
              <th>CLOSE</th>
              <th>CONTRACTS</th>
              <th>VAL_INLAKH</th>
              <th>OPEN_INT</th>
              <th>CHG_IN_OI</th>
              <th>TIMESTAMP</th>
            </tr>
          </thead>
          <tbody>
            {JsonData
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.SYMBOL.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.INSTRUMENT}</td>
                  <td>{item.SYMBOL}</td>
                  <td>{item.EXPIRY_DT}</td>
                  <td>{item.STRIKE_PR}</td>
                  <td>{item.OPTION_TYP}</td>
                  <td>{item.OPEN}</td>
                  <td>{item.HIGH}</td>
                  <td>{item.LOW}</td>
                  <td>{item.CLOSE}</td>
                  <td>{item.CONTRACTS}</td>
                  <td>{item.VAL_INLAKH}</td>
                  <td>{item.OPEN_INT}</td>
                  <td>{item.CHG_IN_OI}</td>
                  <td>{item.TIMESTAMP}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
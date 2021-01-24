import React from 'react'
import Table from './components/Table'
import { useSelector } from 'react-redux'

function App() {
  const rows = useSelector((state) => state)
  return (
    <div div className="app" >
      <Table rows={rows} />
    </div>
  );
}

export default App;

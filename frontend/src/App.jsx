import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {CreateBooks} from './pages/CreateBooks';

const App = () => {
  return (
    <Routes>
      <Route path='/createBooks' element={<CreateBooks />}/>
    </Routes>
  )
}

export default App;
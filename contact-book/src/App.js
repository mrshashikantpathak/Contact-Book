import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Form  from './Form';
import View from './View';
import store from './store';
import EditForm  from './EditForm';

export default function App() {

  return (
    <>
      <Provider store={store} >
        <Router>
          <Routes >
            <Route >
              <Route index element={<View />} />
              <Route path="create" element={<Form />} />
              <Route path='/edit/:id' element={<EditForm />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}



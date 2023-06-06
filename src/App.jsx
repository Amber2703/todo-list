/* eslint-disable no-undef */
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { FormDeal } from './pages/form.page'
import { Deals} from './pages/deal.page'
import { rand4 } from '../helpers';
import {Navigation} from './components/navigation'
import { Provider } from './context';

function App() {
  const [dealList, setDeals] = useState([]);
  const onAddDeal = (text) => {
    setDeals((state) => {
      return [
        ...state, 
        {
          id: rand4(),
          text, 
          status: false, 
        }
      ]
    })
  }

  const onEdit = (updateDeal) => {
    setDeals((state) => {
      return state.map((e) => {
        if(e.id === updateDeal.id) {
          return {...e, ...updateDeal}
        }
        return e;
      })
    });
  }

  const onRemove = (id) => {
    setDeals((state) => {
      return state.filter((e) => e.id !== id);
    })
  };

  return (
    <>
    <Provider value={{
      deals: dealList,
      onAddDeal,
      onEdit,
      onRemove,
    }}>
  <BrowserRouter>
  <Navigation />
    <Routes>
      <Route exact path="/" element={<Deals />}></Route>
      <Route exact path="/form/:id?" element={<FormDeal />}></Route>
    </Routes>
  </BrowserRouter>
  </Provider>
    </>
      
  )
}

export default App

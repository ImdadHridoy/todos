import React, { useState, useEffect, useContext, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/index.css';
import './assets/css/bootstrap.min.css';
import TodoMain from './components/TodoMain.js';
import Header from './components/partials/Header.js';
import Footer from './components/partials/Footer.js';
import Dashboard from './components/Dashboard.js';
import Weather from './components/Weather.js';

function App() {
    const [items, setItems] = useState(localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [])
    const [countItem, setCountItem] = useState(0);

 
    useEffect(() => {
        setCountItem(items.length);
    }, [countItem, items])

    return (
        <div className='col-md-12 wrapper nopadding'>
            <Header TodoCount={countItem}/>
            <div className='col-md-12 content nopadding'>
                <Routes>
                    <Route path='/' element={<Dashboard TodoCount={countItem} />} />
                    <Route path='/todos' element={<TodoMain setItemsInApp={setItems}/>} />
                    <Route path='/weather' element={<Weather />} />
                </Routes>
            </div>
            <Footer />

        </div>
    );
}

export default App;

import '../App.css';
import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import AddRoom from './Rooms/AddRoom';
import Rooms from './Rooms';
import DeleteRoom from './Rooms/DeleteRoom';
import AddUser from './user';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rooms />} />
        <Route path="/room/:id" element={<div>Room</div>} />
        {/* <Route path="/reservations" element={<MyReservations />} /> */}
        {/* <Route path="/reservations-new" element={<ReservationForm />} /> */}
        <Route path="/room-new" element={<AddRoom />} />
        <Route path="/room-delete" element={<DeleteRoom />} />
        <Route path="/user" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

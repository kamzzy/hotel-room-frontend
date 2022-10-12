import React, { useState } from 'react';
import { useParams } from 'react-router';
import '../styles/AddRoom.css';

const ReservationForm = () => {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const { id, userId } = useParams();
  const submitReservation = (e) => {
    e.preventDefault();
    const reservation = {
      room_id: id,
      user_id: userId,
      city,
      date,
    };

    const notify = (response) => {
      if (response === 201) {
        setMessage(<div className="add-room-success-notification border mt-1 bg-dark rounded p-1">Reservation successfully created!</div>);
      } else {
        setMessage(<div className="add-room-error-notification border mt-1 bg-dark text-danger rounded p-1">ERROR: Reservation could not be created!</div>);
      }
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reservation),
    };
    fetch(`http://localhost:3000/api/v1/users/${userId}/reservations`, requestOptions)
      .then((response) => notify(response.status));

    setCity('');
    setDate('');
    setInterval(() => { setMessage(''); }, 5000);
  };

  return (
    <div id="add-room-container" className="container-fluid d-flex flex-column align-items-center h-100 mb-5 pt-5">
      <h2 id="add-room-heading" className="text-center  mt-5 fw-bold fs-2 text-white text-uppercase">Add Reservation</h2>
      <hr id="add-room-hr" />
      <p className="text-center  fs-6 text-white">
        Would you like to reserve a room?
        {' '}
        <br />
        No need to wait, fill the forms below and your reservation will be added to our website!
        {' '}
      </p>
      <form
        id="add-room-form"
        className="col-md-6 d-flex align-items-center flex-column justify-content-center"
        onSubmit={submitReservation}
      >
        <label htmlFor="room_id" className="text-white  col-md-8 mb-3">
          Room ID
          {' '}
          <br />
          <input
            type="text"
            className="col-12 bg-transparent-add-room rounded"
            id="room_id"
            value={id}
            readOnly
          />
        </label>
        <label htmlFor="user_id" className="text-white  col-md-8 mb-3">
          User ID

          <input
            type="text"
            className="col-12 bg-transparent-add-room rounded"
            id="user_id"
            value={userId}
            readOnly
          />
        </label>
        <label htmlFor="city" className="text-white  col-md-8 mb-3">
          City
          {' '}
          <br />
          <input
            type="text"
            className="col-12 bg-transparent-add-room rounded"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city(eg. London)"
            required
          />
        </label>
        <label htmlFor="date" className="text-white  col-md-8 mb-3">
          Date
          City
          {' '}
          <br />
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          className="fw-bold"
          id="add-room-submit-btn"
          onClick={(e) => submitReservation(e)}
        >
          Reserve
        </button>
      </form>
      <span>{message}</span>
    </div>
  );
};

export default ReservationForm;

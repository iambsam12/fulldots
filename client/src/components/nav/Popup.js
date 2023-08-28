import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotifi } from '../store/asyncAction/NewsAction';

const Popup = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const { notifications } = useSelector(state => state.NewsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNotifi());
        setTimeout(() => {
            setShow(true)
        }, 3000)
    }, [dispatch]);

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header >
                <Modal.Body closeButton>
                    {notifications.slice(0, 1).map(n => (
                        <img src={`/images/${n.image}`} className='w-100' alt="" key={n._id} />
                    ))}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Popup
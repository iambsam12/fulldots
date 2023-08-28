import React from 'react'
import { useSelector } from 'react-redux';
import { Routes, Route, Link, Navigate, Outlet, } from 'react-router-dom';

const PrivateRoute = () => {
    const { user } = useSelector((state) => state.AuthReducer);

    return (!user) ? (
        <Navigate to='/' />
    ) : (
        <Outlet to='/dashboard' />
    )
}
export default PrivateRoute
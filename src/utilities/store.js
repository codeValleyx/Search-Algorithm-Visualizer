import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import nodeSlice from './nodeSlice';

const store = configureStore({
    reducer:{
        nodeSlice: nodeSlice
    }
});

export default store
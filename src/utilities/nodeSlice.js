import React from 'react';
import { createSlice } from "@reduxjs/toolkit";

const defaultState ={
    wall: 0,
    weight: 0,
    startInit: 0,
    endInit: 0,
    hasBegun:0,
    startNode: {},
    endNode: {}
}

const nodeSlice = createSlice({
    name: "nodeSlice",
    initialState : defaultState,
    reducers:{
        setHasBegun:(state, action)=>{
            return {
                ...state,
                hasBegun: action.payload
            }
        },
        toggleWall:(state)=>{
            return {
                ...defaultState,
                wall : !state.wall,
                startNode: state.startNode,
                endNode : state.endNode
            }

        },
        toggleWeight: (state)=>{
            return {
                ...defaultState,
                weight: !state.weight,
                startNode: state.startNode,
                endNode : state.endNode
            }
        },
        toggleStart:(state)=>{
            return {
                ...defaultState,
                startInit: !state.startInit,
                startNode: state.startNode,
                endNode : state.endNode
            }
        },
        toggleEnd:(state)=>{
            return state={
                ...defaultState,
                endInit : !state.endInit,
                startNode: state.startNode,
                endNode : state.endNode
            }
        },
        setStart:(state, action)=>{
             return state={
                ...state,
                startNode: action.payload
            }
        },
        setEnd:(state, action)=>{
            return {
                ...state,
                endNode : action.payload
            }
        },
        reset:()=>defaultState
    }
});

export const {toggleWall, toggleWeight, toggleStart, toggleEnd, setStart, setEnd, setHasBegun, reset} = nodeSlice.actions;
export default nodeSlice.reducer;
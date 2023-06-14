import React from 'react';
import { createSlice } from "@reduxjs/toolkit";

const defaultState ={
    wall: 0,
    weight: 0,
    startInit: 0,
    endInit: 0,
    startNode: 0,
    endNode: 0
}

const nodeSlice = createSlice({
    name: "nodeSlice",
    initialState : defaultState,
    reducers:{
        toggleWall:(state)=>{
            return state = {
                ...defaultState,
                wall : !state.wall,
                startNode: state.startNode,
                endNode : state.endNode
            }

        },
        toggleWeight: (state)=>{
            return state = {
                ...defaultState,
                weight: !state.weight,
                startNode: state.startNode,
                endNode : state.endNode
            }
        },
        toggleStart:(state)=>{
            return state = {
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
             state={
                ...state,
                startNode: action.payload
            }

            console.log(state.startNode.name);
            return state;
        },
        setEnd:(state, action)=>{
            return state = {
                ...state,
                endNode : action.payload
            }
        }
    }
});

export const {toggleWall, toggleWeight, toggleStart, toggleEnd, setStart, setEnd} = nodeSlice.actions;
export default nodeSlice.reducer;
import React, { useReducer, useState, useEffect } from 'react'
import axios from "axios"

const initialState = {
    loading: true,
    error: "",
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                loading: false,
                error: "",
                post: action.payload
            }
            // break;
        case "FETCH_ERROR":
            return {
                loading: false,
                error: "Something Went Wrong!",
                post: {}
            }
            // break;
        default:
            return state
            // break;
    }
}

function DataFetching2() {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response =>{
            dispatch({type: "FETCH_SUCCESS", payload: response.data})
        })
        .catch(error=>{
            dispatch({type: "FETCH_ERROR", payload: error})
        })
    }, [])

  return (
    <div>
        { state.loading ? "Loading" : state.post.title}
        { state.error ? state.error : null }
    </div>
  )
}

export default DataFetching2
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../redux/actions";  



export default function SearchBar (){
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [prevState, setPrevState] = useState("Search Here")

    function handleInput(e){
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getByName(name));
        setPrevState(name)
        setName("");
    }

    

    return (
        <div>
            <input 
            className="searchBarInput"
            value={name}
            id="searchBox"
            type="text"
            placeholder={prevState}
            onChange={(e)=> handleInput(e)}
            />
            <button type="submit" onClick={(e)=>handleSubmit(e)}>Search</button>
        </div>
    )

}
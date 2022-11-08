import axios from "axios";

export function getRecipes(){
    return async function(dispatch){
        const json = await axios.get("http://localhost:3001/recipes");

        return dispatch({
            type: "GET_RECIPES",
            payload: json.data
        })
    }
};

export function filterByDiet (payload){
    return {
        type: "FILTER_BY_DIET",
        payload: payload
    }
};

export function filterByOrigin (payload){
    return {
        type: "FILTER_BY_ORIGIN",
        payload: payload
    }
};

export function alphabeticOrder (payload){
    return {
        type: "ALPHABETIC_ORDER",
        payload: payload
    }
};

export function orderByHealthScore (payload){
    return {
        type: "ORDER_BY_HEALTHSCORE",
        payload: payload
    }
};

export function getByName (payload){
    return async function(dispatch){
        try {
            const json= await axios.get("http://localhost:3001/recipes?title=" + payload);
            return dispatch({
                type: "GET_BY_NAME",
                payload: json.data
            });
        }
        catch (error)  {
            console.log(error);
        }
    }
};

export function getDiets(){
    return async function (dispatch){
        const json = await axios.get("http://localhost:3001/diets");
        return dispatch({
            type: "GET_DIETS",
            payload: json.data
        })
    }
};

export function postRecipe(payload){
    return async function (dispatch){
        const json = await axios.post("http://localhost:3001/recipes", payload);
        return json;
    }
}
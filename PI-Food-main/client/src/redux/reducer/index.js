const initialState = {
    recipesToRender : [],
    allRecipes: [],
    diets:[],
    detail:[]
};

function rootReducer (state=initialState, action) {
            switch(action.type){
                case "GET_RECIPES":

                    return {
                      ...state,
                      recipesToRender: action.payload,
                      allRecipes: action.payload,
                    };
                case "FILTER_BY_DIET":
                    const filterByDiet = action.payload === "AllDT" ? state.allRecipes : state.allRecipes.filter(el => el.diets.includes(action.payload))
                    //aca deberia buscar bien en como lo traigo al objeto por que la propiedad diets es un arreglo de tipos de dieta
                    return {
                        ...state,
                        recipesToRender: filterByDiet
                    }
                case "FILTER_BY_ORIGIN":
                    const filterByOrigin = action.payload === "Online" ? state.allRecipes : state.allRecipes.filter(el => el.createdNew)
                    
                    return {
                        ...state,
                        recipesToRender: filterByOrigin
                    }
                case "CLEAN_DETAIL":

                        return {
                            ...state,
                            detail: [],
                        }
                case "ORDER_BY_HEALTHSCORE":
                    let scoresSorted = action.payload === "min" ?
                    state.recipesToRender.sort(function (a,b){ return a.healthScore - b.healthScore})
                    :
                    state.recipesToRender.sort(function (a,b){ return b.healthScore - a.healthScore})
                    return {
                        ...state,
                        recipesToRender: scoresSorted
                    }
                case "ALPHABETIC_ORDER":
                    let sorted = action.payload === "asc" ?
                    state.recipesToRender.sort(function (a,b){
                        if (a.title > b.title){
                            return 1;
                        }
                        if (a.title < b.title){
                            return -1;
                        }
                        return 0;
                    }) :
                    state.recipesToRender.sort(function (a,b){
                        if (a.title > b.title){
                            return -1;
                        }
                        if (a.title < b.title){
                            return 1;
                        }
                        return 0;
                    })
                    return {
                        ...state,
                        recipesToRender: sorted
                    }
                case "GET_BY_NAME":

                        return {
                            ...state,
                            recipesToRender: action.payload
                    }
                case "GET_DETAIL":

                        return {
                            ...state,
                            detail: action.payload
                    }
                case "CREATE_RECIPE":

                        return {
                            ...state,
                    }
                case "GET_DIETS":

                        return {
                            ...state,
                            diets: action.payload
                    }

                default:
                    return state;
            }
};



export default rootReducer;
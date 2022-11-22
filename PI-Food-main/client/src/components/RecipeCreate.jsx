import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postRecipe, getDiets } from "../redux/actions";
import validation from "./validation"
import "./RecipeCreate.css"

export default function RecipeCreate(){
    const dispatch = useDispatch();
    const diets = useSelector((state)=> state.diets);
    const initialState = {
        title:"",
        summary:"",
        healthScore:"",
        steps:[],
        diets:new Set()
    };

    const [input, setInput] = useState(initialState);
    
    const [error, setError] = useState({});

    const [stepsDone, setStepsDone] = useState([]);


    function handleChange(e){
        setInput((prevInput)=> {
            const newInput = {
            ...prevInput,
            [e.target.name]: e.target.value
        }
        const errors = validation(newInput);
        setError(errors);
        return newInput;
    })
    }

    function handleCheck(e){
        if (e.target.checked){
            setInput({
                ...input,
                diets: input.diets.add(e.target.value)
            })
        } if (!e.target.checked){
            input.diets.delete(e.target.value)
            setInput({
                ...input,
            })
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        const dietsArray =  Array.from(input.diets);
        dispatch(postRecipe({...input, diets:dietsArray}));
        alert("Recipe Created Succesfully");
        setInput(initialState);
    }

    function handleSteps(e){
        e.preventDefault();
        const stepsSubmited = e.target.value;
        setStepsDone(...stepsDone, stepsDone.push(stepsSubmited));
        console.log(stepsDone)
    }


    useEffect(()=>{
        dispatch(getDiets())
    },[dispatch])

    return (
        <div className="rootDivForm">
            <Link to='/home'><button>Go back to Home</button></Link>
            <h1 className="titleCreate">Here you can create your own recipes!</h1>
            <h3>Fill the form and click the button to create a new recipe that will be saved in your data base!</h3>
            
            <form onSubmit={(e)=>handleSubmit(e)} className="formComponent">

                <div>
                    <label>Title:</label>
                    <input type="text" value={input.title} name="title" onChange={handleChange}/>
                </div>
                <div className="errorMsg">{error.title}</div>
                <hr></hr>
                <div>
                    <label>Summary:</label>
                    <input type="text" value={input.summary} name="summary" onChange={handleChange}/>
                </div>
                <div className="errorMsg">{error.summary}</div>
                <hr></hr>
                <div>
                    <label>Health Score:</label>
                    <input type="number" min="0" max="100" value={input.healthScore} name="healthScore" onChange={handleChange}/>
                </div>
                <div className="errorMsg">{error.healthScore}</div>
                <hr></hr>
                <div>
                    <label>Steps:</label>
                    <input type="text" value={input.steps} name="steps" onChange={handleChange}/>
                    <button type="submit" onClick={handleSteps}>Submit step</button>
                    <div className="errorMsg">{error.steps}</div>
                    <div>{stepsDone} aca tengo que renderizar los steps que se submitean</div>
                </div>
                <hr></hr>
                <div>
                    <label>Image:</label>
                    <input type="text" value={"https://spoonacular.com/recipeImages/715497-312x231.jpg"} name="image" onChange={handleChange}/>
                    <img src={input.image} alt="missing"/>
                </div>
                <hr></hr>

                <div>  
                    <label>Diet Types:</label>
                        <div className="divCheckboxes">
                            {
                                diets.map((d)=>(
                                    <label value={d.name} name={d.name} key={d.id} onChange={handleCheck}>
                                        <input type="checkbox" value={d.name} />{d.name}
                                    </label>
                                ))
                            }
                        </div>
                        <div className="errorMsg">{error.diets}</div>
                        <hr></hr>

                    <div>
                        {
                        error.length?<button type="submit" disabled>Create Recipe</button>
                        :
                        <button type="submit">Create Recipe</button>
                        }
                    </div>
                </div>
            </form>
        </div>
    )

}

import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postRecipe, getDiets } from "../redux/actions";

export default function RecipeCreate(){
    const dispatch = useDispatch();
    const diets = useSelector((state)=> state.diets);

    const [input, setInput] = useState({
        title:"",
        summary:"",
        healthScore:"",
        steps:[],
        diets:new Set()
    });


    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
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
        setInput({
        title:"",
        summary:"",
        healthScore:"",
        steps:[],
        diets:new Set()
        });
    }


    useEffect(()=>{
        dispatch(getDiets())
    },[])


    return (
        <div>
            <Link to='/home'><button>Go back to Home</button></Link>
            <h1>Here you can create your own recipes!</h1>
            <h3>Fill the form and submit it to create a new recipe that will be saved to your data base</h3>
            
            <form onSubmit={(e)=>handleSubmit(e)} className="formComponent">

                <div>
                    <label>Title:</label>
                    <input type="text" value={input.title} name="title" onChange={handleChange}/>
                </div>
                <div>
                    <label>Summary:</label>
                    <input type="text" value={input.summary} name="summary" onChange={handleChange}/>
                </div>
                <div>
                    <label>Health Score:</label>
                    <input type="number" min="0" max="100" value={input.healthScore} name="healthScore" onChange={handleChange}/>
                </div>
                <div>
                    <label>Steps:</label>
                    <input type="text" value={input.steps} name="steps" onChange={handleChange}/>
                </div>
                <div>
                    <label>Image:</label>
                    <input type="text" value={"https://spoonacular.com/recipeImages/715497-312x231.jpg"} name="image" onChange={handleChange}/>
                </div>

                <div>
                    <label>Diet Types:</label>
                        <div>
                            {
                                diets.map((d)=>(
                                    <label value={d.name} name={d.name} key={d.id} onChange={handleCheck}>
                                        <input type="checkbox" value={d.name} />{d.name}
                                    </label>
                                ))
                            }
                        </div>

                    <div>
                        <button type="submit">Create Recipe</button>
                    </div>
                </div>
            </form>
        </div>
    )

}

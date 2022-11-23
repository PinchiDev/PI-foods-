//esta funcion toma el estado input que va cargando el usuario y checkea lo ingresado retornando los errores al 
//estado error del componente para ser renderizados y a su vez el estado de errors controla si el boton esta disabled
//ya que si existen errores el boton esta disabled=true.

//para steps falta checkear como ir almacenando los numeros de step como en la api y validar ambos campos.

export default function validation (input){
    let error = {};

    if (!/^[a-zA-Z0-9. ]+$/.test(input.title)) {
        error.title = "The title field doesn't accept symbols or special characters"
    }
    else if (input.title === " " || input.title === "  "){
        error.title = "The recipe must have a title"
    }
    else if (!/^[a-zA-Z0-9. ]+$/.test(input.summary)){
        error.summary = "The summary field doesn't accept simbols or special caracters"
    }
    else if (input.title === " " || input.title === "  "){
        error.summary = "The recipe must have a summary"
    }
    else if (!input.healthScore || input.healthScore < 0 || input.healthScore > 100){
        error.healthScore = "Health score must be between 1 & 100"
    }
    else if (!/^[a-zA-Z0-9. ]+$/.test(input.steps)){
        error.steps = "The steps field doesn't accept simbols or special caracters"
    }
    else if (input.steps === " " || input.steps === "  "){
        error.steps = "The steps field cant be left blank"
    }
    else if(input.diets.size === 0){
        error.diets = "You must check atleast one diet type from the list"
    }
    else if (Object.keys(error).length === 0){
        error.validated = true;
    }
    
    return error;
}
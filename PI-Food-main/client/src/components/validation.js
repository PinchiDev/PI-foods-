//esta funcion toma el estado input que va cargando el usuario y checkea lo ingresado retornando los errores al 
//estado error del componente para ser renderizados y a su vez el estado de errors controla si el boton esta disabled
//ya que si existen errores el boton esta disabled=true.

//para steps falta checkear como ir almacenando los numeros de step como en la api y validar ambos campos.

export default function validation (input){
    let error = {};

    if (!/^[a-zA-Z0-9. ]+$/.test(input.title)) {
        error.title = "The title field doesn't accept simbols or special caracters "
    }
    else if (!/^[a-zA-Z0-9. ]+$/.test(input.summary)){
        error.summary = "The summary field doesn't accept simbols or special caracters"
    }
    else if (!input.healthScore || input.healthScore < 0 || input.healthScore > 100){
        error.healthScore = "Health score must be between 1 & 100"
    }
    else if(!input.diets){
        error.diets = "You must check atleast one diet type from the list"
    }

    return error;
}
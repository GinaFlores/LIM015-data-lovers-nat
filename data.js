

export const filterByDirector = (valor, data) => {

    let dataFiltrado= data.filter(item =>item.director==valor);
    return dataFiltrado;
}


export const filterById = (valor, data) => {

    let dataFiltrado= data.filter(item =>item.id==valor);
    return dataFiltrado;
}


export const filterByCharteres = (valor, data) => {

    let datoCharacter = data.filter((character) => character.specie.includes(valor));
    return datoCharacter;
}




export const orderByYears = (opcion,data) => { 

    if(opcion=="rtScore") {

        const dataFilmsOrder= data.sort((unNumero, otroNumero) => unNumero.rt_score -otroNumero.rt_score);
        return dataFilmsOrder;
            }

   if(opcion=="falling") {
    const yearsPeli = data.sort((unNumero, otroNumero) => otroNumero.release_date - unNumero.release_date);
   
    return yearsPeli;
        }




   else if (opcion=="upward") {
                
   const yearsPeli = data.sort((unNumero, otroNumero) => unNumero.release_date - otroNumero.release_date);
     return yearsPeli;
            
        }

        


        
}








export const orderAlphabetPerson = (valor,data) => {

    if(valor == "A-Z") {

        let dataCharacter = data.sort((unaLetra, otraLetra) => unaLetra.name.localeCompare(otraLetra.name));
        return dataCharacter;
    } else if (valor == "Z-A") {

        let dataCharacter = data.sort((unaLetra, otraLetra) => otraLetra.name.localeCompare(unaLetra.name));
        return dataCharacter;
    }
}


export const SearchByTitle = (input,data) => {

    const texto = input.toLowerCase();

    if(input==="" || input===0 || data===null  || data===0)
    {
        throw new TypeError("can not be empty, enter values");
    }



    let nombreTitle = data.filter((nombre) => nombre.title.toLowerCase().indexOf(texto) !== -1);

    return nombreTitle;

}


export const joinCharacter = (data) => {

    const dataPersonajes = data.map((e) => e.people);
    const totalPersonajes = dataPersonajes.reduce((acc, el) => acc.concat(el), []);
    
    return totalPersonajes;

    


}











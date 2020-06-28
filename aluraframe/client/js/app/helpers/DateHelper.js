class DateHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }

    static dataParaTexto(data){
        //nao esquecer que eh craze no inicio. e nao aspas simples
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
    
    static textoParaData(texto){
        // \d - digit = D - nao numerico
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))  //fail fast
            throw new Error("Formato deve ser em aaaa-mm-dd");

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    
}
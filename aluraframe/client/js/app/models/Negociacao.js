class Negociacao {

    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime()); //prog defensiva - pega referencia da data pra evitar ser alterada
        this._quantidade = quantidade;
        this._valor = valor;
        
        //congela geral pra ñ ser alterado
        // nao congela objeto.. data por exemplo - shallow freeze  
        Object.freeze(this); 
        
    }

    get volume() {
        
        return this._quantidade * this._valor;
    }

    get data(){
        return this._data;
    }

    get quantidade(){ 
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}
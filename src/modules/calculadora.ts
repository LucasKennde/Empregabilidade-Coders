class calculadora {
    private valorRecebido :number;
    constructor(valorInicial:number = 0) {
        this.valorRecebido = valorInicial
    }

    public adicionar(valor:number):number{
        this.valorRecebido += valor
        return this.valorRecebido
    }
    public subtrair(valor:number):number{
        this.valorRecebido -= valor
        return this.valorRecebido
    }

}
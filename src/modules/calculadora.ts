class Calculadora {
    private valorRecebido: number;
    constructor(valorInicial: number = 0) {
        this.valorRecebido = valorInicial
    }

    public adicionar(valor: number): number {
        this.valorRecebido += valor
        return this.valorRecebido
    }
    public subtrair(valor: number): number {
        this.valorRecebido -= valor
        return this.valorRecebido
    }
    public multiplicar(valor: number): number {
        this.valorRecebido *= valor
        return this.valorRecebido
    }
    public dividir(value: number): number {
        if (value === 0) {
            throw new Error("Divisão por zero não permitida!");
        }
        this.valorRecebido /= value;
        return this.valorRecebido;
    }

    public reset(): void {
        this.valorRecebido = 0;
    }

    // Método para obter o valor atual
    public getCurrentValue(): number {
        return this.valorRecebido;
    }

}

export default Calculadora;
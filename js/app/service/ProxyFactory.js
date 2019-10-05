class ProxyFactory {

    static create(objeto, acao, ...propriedades){
        return new Proxy(objeto, {

            get(target, prop, receiver) {

                if ( propriedades.includes(prop) && typeof(target[prop]) == typeof(Function) ) {

                    return function(){

                        /** 
                         * Toda função tem implicitamente o atributo arguments
                         * Ele é um array com todos os argumentos que foram passados
                         * no momento de chamda da funcao
                        */
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver){

                if( propriedades.includes(prop) ){
                    target[prop] = value;
                    acao(target);
                }

                return Reflect.set(target, prop, value, receiver);
            }
        });
    }

}
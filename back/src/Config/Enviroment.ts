import d from 'dotenv'

d.config()

export class ENV{
    static PORT_APP = process.env.PORT || 3000

    //Carregar variáveis de ambiente não listadas
    static load(params:string, dft:string):string{
        return process.env[params] || dft;
    }
}
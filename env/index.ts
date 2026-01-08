import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({// variavel que verifica se tá no formato que queremos  
    NODE_ENV : z.enum(['dev', 'test', 'production']).default('test'),
    PORT: z.coerce.number().default(3333)
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false){
    console.error("invalid environment variables", _env.error.format() );// o format pega todos os erros e deixa mais amigavel
    throw new Error('invalid environment variables') // derruba a aplicacao se der errado

}

export const env = _env.data
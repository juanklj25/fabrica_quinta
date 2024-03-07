import {z} from 'zod'
export const cepFormSchema = z.object({
    cep: z
    .string()
    .min(8, 'cep deve ter 8 digitos')
    .refine((value)=> /^\d{5}\d{3}$/.test(value),{
        message:"cep invalido,deve ter o formato 123456789"
    }),
})
import Fastify from "fastify";
import cors from '@fastify/cors'
import {prisma} from './lib/prisma'
import { appRoutes } from "./routes";


const app = Fastify()


app.register(cors)
app.register(appRoutes)

/* 
 * Metodo HTTP: Get, Post, Put, Pacth, Delete 
*/



app.listen({
    port: 3333,
}).then(()=>{
    console.log('Aplicação rodando')
})
.catch(()=>{
    console.log('Aplicação parou de rodar')
})
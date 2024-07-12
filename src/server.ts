import fastify from 'fastify'
import { prisma } from './lib/prisma'

const app = fastify()

app.get('/test', () => {
  return 'Hello World!'
})

app.get('/products', async () => {
  const products = await prisma.product.findMany()

  return products
})

app.get('/orders', async () => {
  const orders = await prisma.order.findMany()

  return orders
})

app.listen({ port: 3333 }).then(() => {
  console.log(`Server is running on port ${3333}`)
})

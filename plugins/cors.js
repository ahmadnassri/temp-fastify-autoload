export * as default from '@fastify/cors'

export const autoConfig = {
  origin: [
    /\.?greenlight\.app$/,
    /http:\/\/(localhost|0\.0\.0\.0):/
  ]
}

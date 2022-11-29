export default () => ({
    port: parseInt(process.env.PORT) || 3000,
    pokemonService: {
      apiKey: process.env.CREDENTIALS_BUCKET_GCP,
    }
  });
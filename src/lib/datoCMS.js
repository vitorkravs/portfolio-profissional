export default async function handler(req, res) {
  const API_TOKEN = process.env.NEXT_PUBLIC_NEXT_DATOCMS_API_TOKEN
  const API_URL = process.env.NEXT_PUBLIC_NEXT_DATOCMS_API_UR

  const query = `
    {
      allProjetos {
          title
          description
          imgurl
          slug
      }
    }
  `

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    const data = await response.json()

    return data.data.allProjetos
  } catch (error) {
    console.error('Erro ao obter modelos da API:', error)
    res.status(500).json({ error: 'Erro ao obter modelos da API' })
  }
}

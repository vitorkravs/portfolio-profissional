export default async function handler(req, res) {
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
    const response = await fetch(process.env.NEXT_PUBLIC_NEXT_DATOCMS_API_UR, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEXT_DATOCMS_API_TOKEN}`,
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

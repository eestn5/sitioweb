export default function handler(req, res) {
  res.status(200).json({
    articles: [
      {
        id: 1,
        title: 'Articulo de ejemplo',
        url: 'articulos/ejemplo',
      },
      {
        id: 2,
        title: 'Articulo 2 ',
        url: 'articulos/ejemplo-2',
      },
      {
        id: 3,
        title: 'Informática - Especialidades ',
        url: 'especialidades/informatica',
      },
      {
        id: 4,
        title: 'Electrónica - Especialidades ',
        url: 'especialidades/electronica',
      },
      {
        id: 5,
        title: 'Construcciones - Especialidades ',
        url: 'especialidades/construcciones',
      },
    ]
  })
}
export const ingressos = [
  {
    id: 1,
    titulo: "ParksNet Passaporte",
    subtitulo: "Todos os parques da Serra Gaúcha em um só lugar",
    categoria: "PASSEIOS E PARQUES",
    imagem: "https://myjcwvyyspwituevmdeu.supabase.co/storage/v1/render/image/public/product-images/products/1788357118532-q366rrkc9m.webp?width=800&resize=contain&quality=80",
    avaliacao: 4.9,
    totalAvaliacoes: 1280,
    slug: "parksnet",
    linkOficial: "https://parksnet.com.br/passeios-e-ingressos-serra-gaucha-com-a-parksnet?bookingAgency=5022",
    duracao: "Varia conforme atração escolhida",
    tags: [
      "Snowland, NBA Park, Skyglass",
      "Pague em até 10x sem juros",
      "Cancelamento garantido"
    ]
  },
  {
    id: 2,
    titulo: "Kongo Pizzaria",
    subtitulo: "Uma experiência animal em meio à selva",
    categoria: "PIZZARIA TEMÁTICA",
    imagem: "https://assets.planne.com.br/apps/34FM2SZ2A3S/images/_/Pga3b6vi0z0NM39FINKKOZ71F8gDhDyoGpqDNYzE.jpg",
    avaliacao: 4.8,
    totalAvaliacoes: 630,
    slug: "kongo-pizzaria",
    linkOficial: "https://vendas.kongogramado.com.br?ac=3QS01LBV0I",
    duracao: "~2h30 a 3h (rodízio + show temático)",
    tags: [
      "Selva temática Maik, Ary, Aquila",
      "Rodízio de pizzas premium",
      "Shows: Aventura na Selva, Alguém viu o Maik, Sons da Natureza"
    ],
    whatsappText: "Olá! Gostaria de reservar o ingresso Kongo Pizzaria (Selva temática de Gramado). Preenchido pelo site Stander Turismo."
  },
  {
    id: 3,
    titulo: "Parque da Mônica",
    subtitulo: "A magia da Vila da Mônica na Serra Gaúcha",
    categoria: "PARQUE TEMÁTICO",
    imagem: "https://d335luupugsy2.cloudfront.net/cms/files/434197/1752601582/$bqovgdvnd0q",
    avaliacao: 4.8,
    totalAvaliacoes: 1500,
    slug: "parque-da-monica",
    linkOficial: "https://ingressos.viladamonica.com.br/carrinho/ativarCupom?nrCupom=VANDERLEIFAUSTINO&byUrl=true",
    duracao: "Dia todo (funcionamento das 10h às 18h)",
    tags: [
      "Parque Vila da Mônica Gramado",
      "Mais de 20 atrações",
      "Turma da Mônica ao vivo"
    ],
    whatsappText: "Olá! Gostaria de reservar o ingresso do Parque da Mônica (Vila da Mônica em Gramado). Preenchido pelo site Stander Turismo."
  },
  {
    id: 4,
    titulo: "Era do Fogo Fondue Temático",
    subtitulo: "A experiência mais cavernosa de Gramado",
    categoria: "FONDUE TEMÁTICO",
    imagem: "https://assets.planne.com.br/apps/KXBS57CN5A8/images/_/v3wu8Q6aRqLU902MsUEdHkIpzMtHuN2NecOce9wx.png",
    avaliacao: 4.8,
    totalAvaliacoes: 320,
    slug: "era-do-fogo",
    linkOficial: "https://ingressos.eradofogo.com.br?ac=",
    duracao: "2h30 a 3h (sessões 18h e 21h)",
    tags: [
      "Fondue na caverna pré-histórica",
      "Dos criadores da Hector Pizzaria",
      "Gruga e os cavernosos"
    ]
  },
  {
    id: 5,
    titulo: "Ferrovia Secreta Hector",
    subtitulo: "Sequência de comida americana no trem mágico",
    categoria: "GASTRONOMIA TEMÁTICA",
    imagem: "/images/ferrovia hector.webp",
    avaliacao: 4.7,
    totalAvaliacoes: 245,
    slug: "ferrovia-secreta",
    linkOficial: "https://ferroviasecreta.hectordragao.com.br?ac=0",
    duracao: "2h30 por viagem",
    tags: [
      "Trem mágico do Hector",
      "Comida americana farta",
      "Mágica com Edgar Faísca"
    ]
  },
  {
    id: 6,
    titulo: "Hector Pizzaria",
    subtitulo: "Rodízio de Discos de Sabor na Escola de Magia Ônyra",
    categoria: "RODÍZIO DE PIZZA",
    imagem: "https://assets.planne.com.br/apps/56TSFCYPGR3/images/_/6XcTkjcRN2I8ApRkvYfnN7kGtCCPCd7fifjyAMpH.jpg",
    avaliacao: 4.9,
    totalAvaliacoes: 512,
    slug: "hector-pizzaria",
    linkOficial: "https://ingressos.hectordragao.com.br?ac=",
    duracao: "2h a 2h30 (rodízio 80+ sabores)",
    tags: [
      "Escola de Magia Ônyra",
      "Mais de 80 sabores de pizza",
      "Pocket shows com personagens"
    ]
  },
  {
    id: 7,
    titulo: "Gatzz Fondue & Show",
    subtitulo: "Dinner show de Broadway na Serra Gaúcha",
    categoria: "DINNER SHOW",
    imagem: "https://fondue.gatzz.com.br/ambiente/gatzz1.jpg",
    avaliacao: 4.8,
    totalAvaliacoes: 380,
    slug: "gatzz",
    linkOficial: "https://www.gatzz.com.br?ac=",
    duracao: "~3h (jantar + espetáculo 22 artistas)",
    tags: [
      "Fondue premium 3 etapas",
      "Show com 22 artistas",
      "Classificação 18+ (alguns espetáculos)"
    ]
  }
];
export type Ticket = (typeof ingressos)[number];

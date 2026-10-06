// Atrações ParksNet na ordem solicitada; preserve o código da agência nos links.
export const ingressos = [
  {
    "id": 1,
    "titulo": "Lumni",
    "subtitulo": "Um passeio noturno entre luzes e cenários mágicos para toda a família.",
    "categoria": "PARQUE DE LUZES",
    "imagem": "https://myjcwvyyspwituevmdeu.supabase.co/storage/v1/object/public/product-images/products/lumni-gramado-ingressos.webp",
    "slug": "lumni",
    "linkOficial": "https://parksnet.com.br/destino/serra-gaucha/lumni?bookingAgency=4176"
  },
  {
    "id": 2,
    "titulo": "Space Adventure",
    "subtitulo": "Explore o universo com artefatos da NASA, simuladores e planetário.",
    "categoria": "EXPERIÊNCIA ESPACIAL",
    "imagem": "https://myjcwvyyspwituevmdeu.supabase.co/storage/v1/object/public/product-images/products/sopas-da-serra-gramado-melhor-preco.webp",
    "slug": "space-adventure",
    "linkOficial": "https://parksnet.com.br/destino/serra-gaucha/space-adventure?bookingAgency=4176"
  },
  {
    "id": 3,
    "titulo": "Parque Criamigos",
    "subtitulo": "Brincadeiras e experiências sensoriais em um mundo de diversão.",
    "categoria": "DIVERSÃO EM FAMÍLIA",
    "imagem": "https://myjcwvyyspwituevmdeu.supabase.co/storage/v1/object/public/product-images/products/oficina-criamigos-gramado-cupons-02.webp",
    "slug": "parque-criamigos",
    "linkOficial": "https://parksnet.com.br/destino/serra-gaucha/parque-criamigos?bookingAgency=4176"
  },
  {
    "id": 4,
    "titulo": "Mini Mundo",
    "subtitulo": "Descubra construções em miniatura e cenários encantadores ao ar livre.",
    "categoria": "PARQUE DE MINIATURAS",
    "imagem": "https://myjcwvyyspwituevmdeu.supabase.co/storage/v1/object/public/product-images/products/1782739377724-7130z6h0bph.webp",
    "slug": "mini-mundo",
    "linkOficial": "https://parksnet.com.br/destino/serra-gaucha/mini-mundo?bookingAgency=4176"
  },
  {
    "id": 5,
    "titulo": "NBA Park",
    "subtitulo": "Entre no mundo do basquete com jogos interativos e experiências da NBA.",
    "categoria": "ESPORTE E DIVERSÃO",
    "imagem": "https://myjcwvyyspwituevmdeu.supabase.co/storage/v1/object/public/product-images/products/nba-park-exceed-park-selfie-gramado-gramado-ofertas.webp",
    "slug": "nba-park",
    "linkOficial": "https://parksnet.com.br/destino/serra-gaucha/nba-park?bookingAgency=4176"
  },
  {
    "id": 6,
    "titulo": "Super Carros",
    "subtitulo": "Conheça de perto supercarros em uma exposição para fãs de velocidade.",
    "categoria": "CARROS ESPORTIVOS",
    "imagem": "https://myjcwvyyspwituevmdeu.supabase.co/storage/v1/object/public/product-images/products/super-carros-gramado-cupons-02.webp",
    "slug": "super-carros",
    "linkOficial": "https://parksnet.com.br/destino/serra-gaucha/super-carros?bookingAgency=4176"
  },
  {
    "id": 7,
    "titulo": "Alpen Park",
    "subtitulo": "Trenó alpino, montanha-russa e diversão em meio às paisagens de Canela.",
    "categoria": "AVENTURA",
    "imagem": "https://myjcwvyyspwituevmdeu.supabase.co/storage/v1/object/public/product-images/products/1786560810556-ht234z1dif4.webp",
    "slug": "alpen-park",
    "linkOficial": "https://parksnet.com.br/destino/serra-gaucha/alpen-park?bookingAgency=4176"
  },
  {
    "id": 8,
    "titulo": "Terra Mágica Florybal",
    "subtitulo": "Um mundo de fantasia com dinossauros, personagens e diversão em família.",
    "categoria": "PARQUE TEMÁTICO",
    "imagem": "https://myjcwvyyspwituevmdeu.supabase.co/storage/v1/object/public/product-images/products/bondinhos-skyglass-jolimont-canela-cupons.webp",
    "slug": "parque-terra-magica-florybal",
    "linkOficial": "https://parksnet.com.br/destino/serra-gaucha/parque-terra-magica-florybal?bookingAgency=4176"
  },
  {
    "id": 9,
    "titulo": "Vale dos Dinossauros",
    "subtitulo": "Dinossauros em tamanho real em uma aventura cercada pela natureza.",
    "categoria": "AVENTURA PRÉ-HISTÓRICA",
    "imagem": "https://myjcwvyyspwituevmdeu.supabase.co/storage/v1/object/public/product-images/products/passaporte-grupo-dreams-7-atracoes-gramado-descontos-01.webp",
    "slug": "vale-dos-dinossauros-canela",
    "linkOficial": "https://parksnet.com.br/destino/serra-gaucha/vale-dos-dinossauros-canela?bookingAgency=4176"
  },
  {
    "id": 10,
    "titulo": "Museu de Cera",
    "subtitulo": "Encontre celebridades, heróis e personagens em cenários para fotografar.",
    "categoria": "MUSEU TEMÁTICO",
    "imagem": "https://myjcwvyyspwituevmdeu.supabase.co/storage/v1/object/public/product-images/products/museu-de-cera-dreamland-super-carros-c-carona-de-porsche-gramado-melhor-preco.webp",
    "slug": "museu-de-cera",
    "linkOficial": "https://parksnet.com.br/destino/serra-gaucha/museu-de-cera?bookingAgency=4176"
  }
];
export type Ticket = (typeof ingressos)[number];

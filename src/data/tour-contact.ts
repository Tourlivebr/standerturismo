// Reative para reutilizar as páginas completas de passeios em outros projetos.
export const tourDetailPagesEnabled = false;
export function tourWhatsAppUrl(name: string) {
  const message = `Olá, Stander Turismo! Gostaria de saber mais sobre ${name} e consultar valores e disponibilidade.`;
  return `https://wa.me/5547984887630?text=${encodeURIComponent(message)}`;
}
export const tourSummaries: Record<string, string> = {
  'transfer-ida-volta-porto-alegre': 'Transfer privativo de ida e volta entre Porto Alegre e Gramado ou Canela, com conforto e motorista/guia.',
  'city-tour-privativo': 'Conheça Gramado e Canela com motorista/guia e um roteiro privativo personalizado ao seu tempo e preferências.',
  'transporte-sky-glass': 'Admire o Vale da Ferradura na plataforma de vidro do Skyglass, com transporte executivo de ida e volta.',
  'transporte-jolimont': 'Conheça os vinhos e paisagens da Vinícola Jolimont com a comodidade do transporte de ida e volta.',
  'transporte-olivas': 'Descubra as paisagens e o charme de Olivas de Gramado com transporte executivo seguro e confortável.',
  'bondinhos-transporte': 'Contemple as paisagens dos Bondinhos Aéreos de Canela, com transporte confortável para aproveitar o passeio.',
  'maria-fumaca': 'Viaje no clássico Trem Maria Fumaça e admire os vales, vilarejos e paisagens da Serra Gaúcha.',
  'snowland': 'Viva momentos de diversão na neve em Gramado. Consulte o atendimento para planejar sua visita ao Snowland.',
  'lumni-transporte': 'Uma experiência imersiva de arte e tecnologia para toda a família, com transporte confortável e seguro.',
  'city-tour-nova-petropolis': 'Explore a cultura alemã, os pontos turísticos e a culinária de Nova Petrópolis em um roteiro completo.',
  'tour-vinhos-e-sabores': 'Vinhos, produtos coloniais, Catedral de Pedra e Chocolate Gramadense em um roteiro com transporte de ida e volta.',
};

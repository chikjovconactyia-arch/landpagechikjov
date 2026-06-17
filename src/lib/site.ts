export const site = {
  name: "ChicJov Studio",
  tagline: "Beleza, Estética & Bem-estar",
  phoneDisplay: "(31) 98386-8000",
  whatsappNumber: "5531983868000",
  instagram: "chikjov.studio",
  instagramUrl: "https://instagram.com/chikjov.studio",
  email: "contato@chikjov.studio",
  unit: "Unidade Santa Efigênia",
  address: "Santa Efigênia, Belo Horizonte - MG",
  hours: "Seg a Sáb · 08h00 às 19h00",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Efigênia+Belo+Horizonte",
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  agendar: "Olá! Gostaria de agendar um horário no ChicJov Studio.",
  especialista: "Olá! Gostaria de falar com um especialista do ChicJov Studio.",
  cabelos: "Olá! Quero agendar um serviço de cabelo no ChicJov Studio.",
  facial: "Olá! Quero saber mais sobre os tratamentos de estética facial.",
  corporal: "Olá! Gostaria de agendar uma avaliação de estética corporal.",
  criolipolise: "Olá! Quero solicitar uma avaliação de Criolipólise.",
  avaliacao: "Olá! Gostaria de solicitar uma avaliação no ChicJov Studio.",
};

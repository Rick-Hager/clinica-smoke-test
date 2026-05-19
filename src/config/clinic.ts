/**
 * Configuração centralizada — Clínica Smoke Test
 * Preencha todos os campos marcados como PLACEHOLDER antes do lançamento.
 * O campo responsible.* é OBRIGATÓRIO pelo CFM (Resolução 2.336/2023).
 */

export const clinic = {
  name: 'Clínica Smoke Test',
  tagline: 'Cuidado com propósito.',
  city: '[Cidade]',
  state: '[Estado]',
  /** Formato: 55 + DDD (2 dígitos) + número (8 ou 9 dígitos), sem espaços/hifens */
  whatsapp: '5500000000000',
  whatsappDisplay: '(00) 00000-0000',
  phone: '(00) 0000-0000',
  email: 'contato@clinicasmoketest.com.br',
  address: {
    street: '[Rua, número — Bairro]',
    cityState: '[Cidade, Estado — CEP]',
    reference: '[Referência de localização]',
    mapsUrl: 'https://maps.google.com',
  },
  hours: {
    weekdays: 'Segunda a sexta: 8h às 18h',
    saturday: 'Sábado: 8h às 12h',
    sunday: 'Domingo e feriados: fechado',
  },
  /** OBRIGATÓRIO CFM — preencher antes do lançamento */
  responsible: {
    name: '[Nome do Médico Responsável]',
    crm: '[CRM/UF]',
  },
};

/** Gera URL WhatsApp com mensagem pré-preenchida */
export function whatsappLink(message = 'Olá, gostaria de agendar uma consulta'): string {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Specialty = {
  slug: string;
  name: string;
  short: string;
  waMessage: string;
  icon: string;
};

export const specialties: Specialty[] = [
  {
    slug: 'clinica-geral',
    name: 'Clínica Geral',
    short: 'Avaliação completa, check-up periódico e acompanhamento de saúde geral. O ponto de partida para o cuidado contínuo.',
    waMessage: 'Olá, gostaria de agendar uma consulta de clínica geral',
    icon: `<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M22 12h-4l-3 9L9 3l-3 9H2'/></svg>`,
  },
  {
    slug: 'cardiologia',
    name: 'Cardiologia',
    short: 'Diagnóstico e acompanhamento das doenças do coração com tecnologia e atenção personalizada.',
    waMessage: 'Olá, gostaria de agendar uma consulta de cardiologia',
    icon: `<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'/></svg>`,
  },
  {
    slug: 'dermatologia',
    name: 'Dermatologia',
    short: 'Cuidado com a saúde e a estética da pele, com avaliação clínica cuidadosa e orientação preventiva.',
    waMessage: 'Olá, gostaria de agendar uma consulta de dermatologia',
    icon: `<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z'/><path d='M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12'/></svg>`,
  },
  {
    slug: 'ginecologia',
    name: 'Ginecologia',
    short: 'Saúde da mulher em todas as fases da vida — da adolescência ao climatério, com escuta e respeito.',
    waMessage: 'Olá, gostaria de agendar uma consulta de ginecologia',
    icon: `<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><circle cx='12' cy='8' r='5'/><path d='M12 13v8'/><path d='M9 18h6'/></svg>`,
  },
  {
    slug: 'ortopedia',
    name: 'Ortopedia',
    short: 'Avaliação e tratamento de dores, lesões e doenças do sistema musculoesquelético.',
    waMessage: 'Olá, gostaria de agendar uma consulta de ortopedia',
    icon: `<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5l7-7Z'/></svg>`,
  },
];

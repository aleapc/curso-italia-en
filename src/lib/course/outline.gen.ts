import type { ModuloOutline } from '../types';

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  ARQUIVO GERADO — não edite à mão.                                       │
// │  Fonte: os ep-*.json (título) + slots.json (ordem e módulo).             │
// │  Regenerar: npm run outline   ·   Conferir: npm run outline:conferir     │
// │                                                                          │
// │  O título vivia aqui E no episódio. Duas canônicas para a mesma string   │
// │  é o defeito que fez duas partes reescritas aparecerem na tela com o     │
// │  título antigo e duas partes novas não aparecerem. Agora deriva.         │
// └──────────────────────────────────────────────────────────────────────────┘

export const outline: ModuloOutline[] = [
  {
    nivel: 'basico',
    nome: 'Basic · Get by',
    descricao: 'The Spanish that gets the day done: arriving, ordering, paying, moving, and getting help.',
    cor: 'terracota',
    licoes: [
      { id: 'b01', titulo: 'Every letter gets said', pronta: true },
      { id: 'b02', titulo: 'Say it before you need it', pronta: true },
      { id: 'b03', titulo: 'Change the channel, not the language', pronta: true },
      { id: 'b04', titulo: 'The four files that board with you', pronta: true },
      { id: 'b05', titulo: 'Three answers, then stop', pronta: true },
      { id: 'b06', titulo: 'Posso, and then whatever you want to do', pronta: true },
      { id: 'b07', titulo: 'Dov\'è — the question that moves your feet', pronta: true },
      { id: 'b08', titulo: 'Ask the question whose answer fits in your head', pronta: true },
      { id: 'b09', titulo: 'The ticket that validates itself, and the one that does not', pronta: true },
      { id: 'b10', titulo: 'The signs you can read are the ones that trick you', pronta: true },
      { id: 'b11', titulo: 'Quanto costa — two words, asked while asking is still free', pronta: true },
      { id: 'b12', titulo: 'Senza — subtract instead of explaining', pronta: true },
      { id: 'b13', titulo: 'The hammer sentence, and the card that says it for you', pronta: true },
      { id: 'b14', titulo: 'Mi porta — the bill, and the two lines on it that are not mistakes', pronta: true },
      { id: 'b15', titulo: 'Buying: price, size, try it, change it', pronta: true },
      { id: 'b16', titulo: 'Check-in: ask for what improves the room while it is still free to ask', pronta: true },
      { id: 'b17', titulo: 'Pharmacy, pain, emergency', pronta: true },
      { id: 'b18', titulo: 'The last day — check out, leave the bag, and say the thing that makes you welcome back', pronta: true },
    ]
  },
];

// Gerado de static/img/ — a home só pede imagem que existe.
export const COM_IMAGEM = new Set(["a01","a02","a03","a05","a06","a07","a08","b01","b02","b03","b04","b05","b06","b07","b08","b09","b10","b11","b12","b13","b14","b15","b16","b18","c01","c02","c03","e01","e02","e03","e04","e05","e06","e07","e08","i02","i03","i04","i05","i06","i07","i08","i09","i10"]);

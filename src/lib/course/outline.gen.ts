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
  {
    nivel: 'intermediario',
    nome: 'Intermediate · Get the good stuff',
    descricao: 'Eat where they eat, when they eat, at the price they pay.',
    cor: 'oliva',
    licoes: [
      { id: 'i01', titulo: 'Their clock, and why eating early costs you the good table', pronta: true },
      { id: 'i02', titulo: 'The order of operations at the counter', pronta: true },
      { id: 'i03', titulo: 'The dish you were never going to order', pronta: true },
      { id: 'i04', titulo: 'The evening: aperitivo, the round, and how to leave a table', pronta: true },
      { id: 'i05', titulo: 'The five questions everyone asks you', pronta: true },
      { id: 'i06', titulo: 'Telling them about yesterday', pronta: true },
      { id: 'i07', titulo: 'Praise that reaches the kitchen, and the sentence that gets it fixed', pronta: true },
      { id: 'i08', titulo: 'Being invited into someone\'s home', pronta: true },
      { id: 'i09', titulo: 'Spending the afternoon the way they spend it', pronta: true },
      { id: 'i10', titulo: 'Money here: the card they must take, the tip nobody expects', pronta: true },
    ]
  },
  {
    nivel: 'avancado',
    nome: 'Advanced · Read the room',
    descricao: 'The humour, the pride, the old argument, and what their silence means.',
    cor: 'indigo',
    licoes: [
      { id: 'a01', titulo: 'How they talk when it isn\'t to you', pronta: true },
      { id: 'a02', titulo: 'What they laugh at, and the one joke you can safely make', pronta: true },
      { id: 'a03', titulo: 'Who they think they are', pronta: true },
      { id: 'a04', titulo: 'The old argument', pronta: true },
      { id: 'a05', titulo: 'The other language', pronta: true },
      { id: 'a06', titulo: 'Their calendar', pronta: true },
      { id: 'a07', titulo: 'Signals: welcome, mild irritation, and time to go', pronta: true },
      { id: 'a08', titulo: 'The goodbye that gets you invited back', pronta: true },
    ]
  },
];

// Gerado de static/img/ — a home só pede imagem que existe.
export const COM_IMAGEM = new Set(["a01","a02","a03","a05","a06","a07","a08","b01","b02","b03","b04","b05","b06","b07","b08","b09","b10","b11","b12","b13","b14","b15","b16","b18","c01","c02","c03","e01","e02","e03","e04","e05","e06","e07","e08","i02","i03","i04","i05","i06","i07","i08","i09","i10"]);

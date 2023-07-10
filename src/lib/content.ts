import { SubjectType, type Subject } from './types';

export const semesterI: Subject[] = [
  {
    info: {
      name: 'Programiranje I',
      code: '63702',
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Diskretne strukture',
      code: '63705',
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Računalniška arhitektura',
      code: '63703',
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Uvod v računalništvo',
      code: '63701',
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Matematika',
      code: '63704',
      type: SubjectType.Mandatory,
    },
  },
];

export const semesterII: Subject[] = [
  {
    info: {
      name: 'Operacijski sistemi',
      code: '63709',
      type: SubjectType.Mandatory,
    },
    related: [
      {
        name: 'Sistemska programska oprema',
        code: '63736',
      },
    ],
  },
  {
    info: {
      name: 'Programiranje 2',
      code: '63278',
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Podatkovne baze',
      code: '63707',
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Osnove verjetnosti in statistike',
      code: '63710',
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Računalniške komunikacije',
      code: '63708',
      type: SubjectType.Mandatory,
    },
    related: [
      {
        name: 'Komunikacijski protokoli in omrežna varnost',
        code: '63716',
      },
      {
        name: 'Spletne tehnologije',
        code: '63727',
      },
    ],
  },
];

export const semseterIII: Subject[] = [
  {
    info: {
      name: 'Komunikacijski protokoli in omrežna varnost',
      code: '63716',
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Računalniške komunikacije',
        code: '63708',
      },
      {
        name: 'Spletne tehnologije',
        code: '63727',
      },
    ],
  },
  {
    info: {
      name: 'Grafično oblikovanje',
      code: '63715',
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Produkcija multimedijskih gradiv',
        code: '63726',
      },
      {
        name: 'Multimedijske tehnologije',
        code: '63734',
      },
    ],
  },
  {
    info: {
      name: 'Elektronsko in mobilno poslovanje',
      code: '63712',
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Podatkovne baze 2',
        code: '63713',
      },
      {
        name: 'Informacijski sistemi',
        code: '63714',
      },
      {
        name: 'Razvoj informacijskih sistemov',
        code: '63725',
      },
      {
        name: 'Planiranje in upravljanje informatike',
        code: '63253',
      },
    ],
  },
  {
    info: {
      name: 'Podatkovne baze 2',
      code: '63713',
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Elektronsko in mobilno poslovanje',
        code: '63712',
      },
      {
        name: 'Informacijski sistemi',
        code: '63714',
      },
      {
        name: 'Razvoj informacijskih sistemov',
        code: '63725',
      },
      {
        name: 'Planiranje in upravljanje informatike',
        code: '63253',
      },
    ],
  },
  {
    info: {
      name: 'Informacijski sistemi',
      code: '63714',
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Elektronsko in mobilno poslovanje',
        code: '63712',
      },
      {
        name: 'Podatkovne baze 2',
        code: '63713',
      },
      {
        name: 'Razvoj informacijskih sistemov',
        code: '63725',
      },
      {
        name: 'Planiranje in upravljanje informatike',
        code: '63253',
      },
    ],
  },
  {
    info: {
      name: 'Organizacija računalnikov',
      code: '63717',
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Digitalna vezja',
        code: '63718',
      },
      {
        name: 'Načrtovanje digitalnih naprav',
        code: '63729',
      },
    ],
  },
  {
    info: {
      name: 'Digitalna vezja',
      code: '63718',
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Organizacija računalnikov',
        code: '63717',
      },
      {
        name: 'Načrtovanje digitalnih naprav',
        code: '63729',
      },
    ],
  },
  {
    info: {
      name: 'Računalniška grafika',
      code: '63719',
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Tehnologija iger in navidezna resničnost',
        code: '63740',
      },
    ],
  },
  {
    info: {
      name: 'Umetna inteligenca',
      code: '63720',
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Podatkovno rudarjenje',
        code: '63765',
      },
      {
        name: 'Odločitveni sistemi',
        code: '63741',
      },
    ],
  },
  {
    info: {
      name: 'Programski jezik C',
      code: '63769',
      type: SubjectType.Disciplinary,
    },
  },
  {
    info: {
      name: 'Algoritmi in podatkovne strukture 1',
      code: '63711',
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Tehnične veščine',
      code: '63767a',
      type: SubjectType.Disciplinary,
    },
  },
];

export const semesterIV: Subject[] = [
  {
    info: {
      name: 'Spletne tehnologije',
      code: '63727',
      type: SubjectType.Directionary,
    },
    prerequisites: [
      {
        name: 'Komunikacijski protokoli in omrežna varnost',
        code: '63716',
      },
    ],
    related: [
      {
        name: 'Računalniške komunikacije',
        code: '63708',
      },
      {
        name: 'Komunikacijski protokoli in omrežna varnost',
        code: '63716',
      },
    ],
  },
  {
    info: {
      name: 'Produkcija multimedijskih gradiv',
      code: '63726',
      type: SubjectType.Disciplinary,
    },
    prerequisites: [
      {
        name: 'Grafično oblikovanje',
        code: '63715',
      },
    ],
    related: [
      {
        name: 'Grafično oblikovanje',
        code: '63715',
      },
      {
        name: 'Multimedijske tehnologije',
        code: '63734',
      },
    ],
  },
  {
    info: {
      name: 'Digitalno procesiranje',
      code: '63744',
      type: SubjectType.Disciplinary,
    },
  },
  {
    info: {
      name: 'Vhodno izhodne naprave',
      code: '63728',
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Vgrajeni sistemi',
        code: '63738',
      },
      {
        name: 'Procesna avtomatika',
        code: '63737',
      },
    ],
  },
  {
    info: {
      name: 'Razvoj informacijskih sistemov',
      code: '63725',
      type: SubjectType.Disciplinary,
    },
    prerequisites: [
      {
        name: 'Informacijski sistemi',
        code: '63714',
      },
    ],
    related: [
      {
        name: 'Podatkovne baze 2',
        code: '63713',
      },
      {
        name: 'Informacijski sistemi',
        code: '63714',
      },
      {
        name: 'Elektronsko in mobilno poslovanje',
        code: '63712',
      },
      {
        name: 'Planiranje in upravljanje informatike',
        code: '63253',
      },
    ],
  },
  {
    info: {
      name: 'Izbrana poglavja iz RI',
      code: '63749b',
      type: SubjectType.Disciplinary,
    },
  },
  {
    info: {
      name: 'Načrtovanje digitalnih naprav',
      code: '63729',
      type: SubjectType.Directionary,
    },
    prerequisites: [
      {
        name: 'Digitalna vezja',
        code: '63718',
      },
      {
        name: 'Organizacija računalnikov',
        code: '63717',
      },
    ],
    related: [
      {
        name: 'Digitalna vezja',
        code: '63718',
      },
      {
        name: 'Organizacija računalnikov',
        code: '63717',
      },
    ],
  },
  {
    info: {
      name: 'Podatkovno rudarjenje',
      code: '63765',
      type: SubjectType.Disciplinary,
    },
    prerequisites: [
      {
        name: 'Umetna inteligenca',
        code: '63720',
      },
    ],
    related: [
      {
        name: 'Umetna inteligenca',
        code: '63720',
      },
      {
        name: 'Odločitveni sistemi',
        code: '63741',
      },
    ],
  },
  {
    info: {
      name: 'Uporabniški vmesniki',
      code: '63721',
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Prevajalniki in navidezni stroji',
        code: '63722',
      },
      {
        name: 'Algoritmi in podatkovne strukture 2',
        code: '63723',
      },
      {
        name: 'Testiranje in kakovost',
        code: '63724',
      },
      {
        name: 'Tehnologija programske opreme',
        code: '63732',
      },
    ],
  },
  {
    info: {
      name: 'Prevajalniki in navidezni stroji',
      code: '63722',
      type: SubjectType.Directionary,
    },
    related: [
      {
        name: 'Uporabniški vmesniki',
        code: '63721',
      },
      {
        name: 'Algoritmi in podatkovne strukture 2',
        code: '63723',
      },
      {
        name: 'Testiranje in kakovost',
        code: '63724',
      },
      {
        name: 'Tehnologija programske opreme',
        code: '63732',
      },
    ],
  },
  {
    info: {
      name: 'Algoritmi in podatkovne strukture 2',
      code: '63723',
      type: SubjectType.Mandatory,
    },
    related: [
      {
        name: 'Uporabniški vmesniki',
        code: '63721',
      },
      {
        name: 'Prevajalniki in navidezni stroji',
        code: '63722',
      },
      {
        name: 'Testiranje in kakovost',
        code: '63724',
      },
      {
        name: 'Tehnologija programske opreme',
        code: '63732',
      },
    ],
  },
  {
    info: {
      name: 'Testiranje in kakovost',
      code: '63724',
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Uporabniški vmesniki',
        code: '63721',
      },
      {
        name: 'Prevajalniki in navidezni stroji',
        code: '63722',
      },
      {
        name: 'Algoritmi in podatkovne strukture 2',
        code: '63723',
      },
      {
        name: 'Tehnologija programske opreme',
        code: '63732',
      },
    ],
  },
  {
    info: {
      name: 'Tehnične veščine 2',
      code: '63766a',
      type: SubjectType.Disciplinary,
    },
  },
  {
    info: {
      name: 'Splošni izbirni predmet',
      code: 'splosni-izbirni-predmeti',
      type: SubjectType.Common,
    },
  },
];

export const semesterV: Subject[] = [
  {
    info: {
      name: 'Multimedijske tehnologije',
      code: '63734',
      type: SubjectType.Directionary,
    },
    prerequisites: [
      {
        name: 'Produkcija multimedijskih gradiv',
        code: '63726',
      },
      {
        name: 'Digitalno procesiranje',
        code: '63744',
      },
    ],
  },
  {
    info: {
      name: 'Procesna avtomatika',
      code: '63737',
      type: SubjectType.Disciplinary,
    },
    prerequisites: [
      {
        name: 'Vhodno izhodne naprave',
        code: '63728',
      },
    ],
    related: [
      {
        name: 'Vgrajeni sistemi',
        code: '63738',
      },
      {
        name: 'Vhodno izhodne naprave',
        code: '63728',
      },
    ],
  },
  {
    info: {
      name: 'Vgrajeni sistemi',
      code: '63738',
      type: SubjectType.Directionary,
    },
    prerequisites: [
      {
        name: 'Vhodno izhodne naprave',
        code: '63728',
      },
      {
        name: 'Organizacija računalnikov',
        code: '63717',
      },
    ],
    related: [
      {
        name: 'Procesna avtomatika',
        code: '63737',
      },
      {
        name: 'Vhodno izhodne naprave',
        code: '63728',
      },
    ],
  },
  {
    info: {
      name: 'Planiranje in upravljanje informatike',
      code: '63253',
      type: SubjectType.Directionary,
    },
    prerequisites: [
      {
        name: 'Razvoj informacijskih sistemov',
        code: '63725',
      },
    ],
    related: [
      {
        name: 'Podatkovne baze 2',
        code: '63713',
      },
      {
        name: 'Informacijski sistemi',
        code: '63714',
      },
      {
        name: 'Razvoj informacijskih sistemov',
        code: '63725',
      },
      {
        name: 'Elektronsko in mobilno poslovanje',
        code: '63712',
      },
    ],
  },
  {
    info: {
      name: 'Sistemska programska oprema',
      code: '63736',
      type: SubjectType.Directionary,
    },
    related: [
      {
        name: 'Operacijski sistemi',
        code: '63709',
      },
    ],
  },
  {
    info: {
      name: 'Numerične metode',
      code: '63742',
      type: SubjectType.Disciplinary,
    },
  },
  {
    info: {
      name: 'Vzporedni in porazdeljeni sistemi in algoritmi',
      code: '63735',
      type: SubjectType.Disciplinary,
    },
  },
  {
    info: {
      name: 'Tehnologija iger in navidezna resničnost',
      code: '63740',
      type: SubjectType.Directionary,
    },
    prerequisites: [
      {
        name: 'Računalniška grafika',
        code: '63719',
      },
      {
        name: 'Umetna inteligenca',
        code: '63720',
      },
    ],
    related: [
      {
        name: 'Računalniška grafika',
        code: '63719',
      },
    ],
  },
  {
    info: {
      name: 'Robotika in računalniško zaznavanje',
      code: '63739',
      type: SubjectType.Directionary,
    },
    prerequisites: [
      {
        name: 'Računalniška grafika',
        code: '63719',
      },
      {
        name: 'Umetna inteligenca',
        code: '63720',
      },
    ],
  },
  {
    info: {
      name: 'Odločitveni sistemi',
      code: '63741',
      type: SubjectType.Directionary,
    },
    prerequisites: [
      {
        name: 'Podatkovno rudarjenje',
        code: '63765',
      },
    ],
    related: [
      {
        name: 'Umetna inteligenca',
        code: '63720',
      },
      {
        name: 'Podatkovno rudarjenje',
        code: '63765',
      },
    ],
  },
  {
    info: {
      name: 'Tehnologija programske opreme',
      code: '63732',
      type: SubjectType.Mandatory,
    },
    related: [
      {
        name: 'Prevajalniki in navidezni stroji',
        code: '63722',
      },
      {
        name: 'Algoritmi in podatkovne strukture 2',
        code: '63723',
      },
      {
        name: 'Testiranje in kakovost',
        code: '63724',
      },
      {
        name: 'Uporabniški vmesniki',
        code: '63721',
      },
    ],
  },
];

export const semesterVI: Subject[] = [
  {
    info: {
      name: 'Diplomski seminar',
      code: '63281',
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Delovna praksa',
      code: 'delovna-praksa',
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Splošni izbirni predmet',
      code: 'splosni-izbirni-predmeti',
      type: SubjectType.Common,
    },
  },
];

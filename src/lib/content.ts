import { SubjectType, type Subject } from './types';

export const semesterI: Subject[] = [
  {
    info: {
      name: 'Programiranje I',
      code: '63702',
      points: 6,
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Diskretne strukture',
      code: '63705',
      points: 6,
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Računalniška arhitektura',
      code: '63703',
      points: 6,
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Uvod v računalništvo',
      code: '63701',
      points: 6,
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Matematika',
      code: '63704',
      points: 6,
      type: SubjectType.Mandatory,
    },
  },
];

export const semesterII: Subject[] = [
  {
    info: {
      name: 'Operacijski sistemi',
      code: '63709',
      points: 6,
      type: SubjectType.Mandatory,
    },
    related: [
      {
        name: 'Sistemska programska oprema',
        code: '63736',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Programiranje 2',
      code: '63278',
      points: 6,
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Podatkovne baze',
      code: '63707',
      points: 6,
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Osnove verjetnosti in statistike',
      code: '63710',
      points: 6,
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Računalniške komunikacije',
      code: '63708',
      points: 6,
      type: SubjectType.Mandatory,
    },
    related: [
      {
        name: 'Komunikacijski protokoli in omrežna varnost',
        points: 6,
        code: '63716',
      },
      {
        name: 'Spletne tehnologije',
        code: '63727',
        points: 6,
      },
    ],
  },
];

export const semseterIII: Subject[] = [
  {
    info: {
      name: 'Komunikacijski protokoli in omrežna varnost',
      code: '63716',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Računalniške komunikacije',
        code: '63708',
        points: 6,
      },
      {
        name: 'Spletne tehnologije',
        code: '63727',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Grafično oblikovanje',
      code: '63715',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Produkcija multimedijskih gradiv',
        code: '63726',
        points: 6,
      },
      {
        name: 'Multimedijske tehnologije',
        code: '63734',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Elektronsko in mobilno poslovanje',
      code: '63712',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Podatkovne baze 2',
        code: '63713',
        points: 6,
      },
      {
        name: 'Informacijski sistemi',
        code: '63714',
        points: 6,
      },
      {
        name: 'Razvoj informacijskih sistemov',
        code: '63725',
        points: 6,
      },
      {
        name: 'Planiranje in upravljanje informatike',
        code: '63253',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Podatkovne baze 2',
      code: '63713',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Elektronsko in mobilno poslovanje',
        code: '63712',
        points: 6,
      },
      {
        name: 'Informacijski sistemi',
        code: '63714',
        points: 6,
      },
      {
        name: 'Razvoj informacijskih sistemov',
        code: '63725',
        points: 6,
      },
      {
        name: 'Planiranje in upravljanje informatike',
        code: '63253',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Informacijski sistemi',
      code: '63714',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Elektronsko in mobilno poslovanje',
        code: '63712',
        points: 6,
      },
      {
        name: 'Podatkovne baze 2',
        code: '63713',
        points: 6,
      },
      {
        name: 'Razvoj informacijskih sistemov',
        code: '63725',
        points: 6,
      },
      {
        name: 'Planiranje in upravljanje informatike',
        code: '63253',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Organizacija računalnikov',
      code: '63717',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Digitalna vezja',
        code: '63718',
        points: 6,
      },
      {
        name: 'Načrtovanje digitalnih naprav',
        code: '63729',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Digitalna vezja',
      code: '63718',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Organizacija računalnikov',
        code: '63717',
        points: 6,
      },
      {
        name: 'Načrtovanje digitalnih naprav',
        code: '63729',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Varnost podatkov',
      code: '63775',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Varnost organizacij',
        code: '63773',
        points: 6,
      },
      {
        name: 'Varnost programov',
        code: null,
        points: 6,
      },
      {
        name: 'Pravni vidiki varnosti',
        code: null,
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Varnost organizacij',
      code: '63773',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Varnost podatkov',
        code: '63775',
        points: 6,
      },
      {
        name: 'Varnost programov',
        code: null,
        points: 6,
      },
      {
        name: 'Pravni vidiki varnosti',
        code: null,
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Računalniška grafika',
      code: '63719',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Tehnologija iger in navidezna resničnost',
        code: '63740',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Umetna inteligenca',
      code: '63720',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Podatkovno rudarjenje',
        code: '63765',
        points: 6,
      },
      {
        name: 'Odločitveni sistemi',
        code: '63741',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Programski jezik C',
      code: '63769',
      points: 3,
      type: SubjectType.Disciplinary,
    },
  },
  {
    info: {
      name: 'Algoritmi in podatkovne strukture 1',
      code: '63711',
      points: 6,
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Tehnične veščine',
      code: '63767a',
      points: 3,
      type: SubjectType.Disciplinary,
    },
  },
];

export const semesterIV: Subject[] = [
  {
    info: {
      name: 'Spletne tehnologije',
      code: '63727',
      points: 6,
      type: SubjectType.Directionary,
    },
    prerequisites: [
      {
        name: 'Komunikacijski protokoli in omrežna varnost',
        code: '63716',
        points: 6,
      },
    ],
    related: [
      {
        name: 'Računalniške komunikacije',
        code: '63708',
        points: 6,
      },
      {
        name: 'Komunikacijski protokoli in omrežna varnost',
        code: '63716',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Produkcija multimedijskih gradiv',
      code: '63726',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    prerequisites: [
      {
        name: 'Grafično oblikovanje',
        code: '63715',
        points: 6,
      },
    ],
    related: [
      {
        name: 'Grafično oblikovanje',
        code: '63715',
        points: 6,
      },
      {
        name: 'Multimedijske tehnologije',
        code: '63734',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Digitalno procesiranje signalov',
      code: '63744',
      points: 6,
      type: SubjectType.Disciplinary,
    },
  },
  {
    info: {
      name: 'Vhodno izhodne naprave',
      code: '63728',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Vgrajeni sistemi',
        code: '63738',
        points: 6,
      },
      {
        name: 'Procesna avtomatika',
        code: '63737',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Razvoj informacijskih sistemov',
      code: '63725',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    prerequisites: [
      {
        name: 'Informacijski sistemi',
        code: '63714',
        points: 6,
      },
    ],
    related: [
      {
        name: 'Podatkovne baze 2',
        code: '63713',
        points: 6,
      },
      {
        name: 'Informacijski sistemi',
        code: '63714',
        points: 6,
      },
      {
        name: 'Elektronsko in mobilno poslovanje',
        code: '63712',
        points: 6,
      },
      {
        name: 'Planiranje in upravljanje informatike',
        code: '63253',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Izbrana poglavja iz RI',
      code: '63749b',
      points: 6,
      type: SubjectType.Disciplinary,
    },
  },
  {
    info: {
      name: 'Načrtovanje digitalnih naprav',
      code: '63729',
      points: 6,
      type: SubjectType.Directionary,
    },
    prerequisites: [
      {
        name: 'Digitalna vezja',
        code: '63718',
        points: 6,
      },
      {
        name: 'Organizacija računalnikov',
        code: '63717',
        points: 6,
      },
    ],
    related: [
      {
        name: 'Digitalna vezja',
        code: '63718',
        points: 6,
      },
      {
        name: 'Organizacija računalnikov',
        code: '63717',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Varnost programov',
      code: null,
      points: 6,
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Varnost podatkov',
        code: '63775',
        points: 6,
      },
      {
        name: 'Varnost organizacij',
        code: '63773',
        points: 6,
      },
      {
        name: 'Pravni vidiki varnosti',
        code: null,
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Pravni vidiki varnosti',
      code: null,
      points: 6,
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Varnost podatkov',
        code: '63775',
        points: 6,
      },
      {
        name: 'Varnost organizacij',
        code: '63773',
        points: 6,
      },
      {
        name: 'Varnost programov',
        code: null,
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Podatkovno rudarjenje',
      code: '63765',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    prerequisites: [
      {
        name: 'Umetna inteligenca',
        code: '63720',
        points: 6,
      },
    ],
    related: [
      {
        name: 'Umetna inteligenca',
        code: '63720',
        points: 6,
      },
      {
        name: 'Odločitveni sistemi',
        code: '63741',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Uporabniški vmesniki',
      code: '63721',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Prevajalniki in navidezni stroji',
        code: '63722',
        points: 6,
      },
      {
        name: 'Algoritmi in podatkovne strukture 2',
        code: '63723',
        points: 6,
      },
      {
        name: 'Testiranje in kakovost',
        code: '63724',
        points: 6,
      },
      {
        name: 'Tehnologija programske opreme',
        code: '63732',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Prevajalniki in navidezni stroji',
      code: '63722',
      points: 6,
      type: SubjectType.Directionary,
    },
    related: [
      {
        name: 'Uporabniški vmesniki',
        code: '63721',
        points: 6,
      },
      {
        name: 'Algoritmi in podatkovne strukture 2',
        code: '63723',
        points: 6,
      },
      {
        name: 'Testiranje in kakovost',
        code: '63724',
        points: 6,
      },
      {
        name: 'Tehnologija programske opreme',
        code: '63732',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Algoritmi in podatkovne strukture 2',
      code: '63723',
      points: 6,
      type: SubjectType.Mandatory,
    },
    related: [
      {
        name: 'Uporabniški vmesniki',
        code: '63721',
        points: 6,
      },
      {
        name: 'Prevajalniki in navidezni stroji',
        code: '63722',
        points: 6,
      },
      {
        name: 'Testiranje in kakovost',
        code: '63724',
        points: 6,
      },
      {
        name: 'Tehnologija programske opreme',
        code: '63732',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Testiranje in kakovost',
      code: '63724',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    related: [
      {
        name: 'Uporabniški vmesniki',
        code: '63721',
        points: 6,
      },
      {
        name: 'Prevajalniki in navidezni stroji',
        code: '63722',
        points: 6,
      },
      {
        name: 'Algoritmi in podatkovne strukture 2',
        code: '63723',
        points: 6,
      },
      {
        name: 'Tehnologija programske opreme',
        code: '63732',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Tehnične veščine 2',
      code: '63766a',
      points: 3,
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
      points: 6,
      type: SubjectType.Directionary,
    },
    prerequisites: [
      {
        name: 'Produkcija multimedijskih gradiv',
        code: '63726',
        points: 6,
      },
      {
        name: 'Digitalno procesiranje signalov',
        code: '63744',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Procesna avtomatika',
      code: '63737',
      points: 6,
      type: SubjectType.Disciplinary,
    },
    prerequisites: [
      {
        name: 'Vhodno izhodne naprave',
        code: '63728',
        points: 6,
      },
    ],
    related: [
      {
        name: 'Vgrajeni sistemi',
        code: '63738',
        points: 6,
      },
      {
        name: 'Vhodno izhodne naprave',
        code: '63728',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Vgrajeni sistemi',
      code: '63738',
      points: 6,
      type: SubjectType.Directionary,
    },
    prerequisites: [
      {
        name: 'Vhodno izhodne naprave',
        code: '63728',
        points: 6,
      },
      {
        name: 'Organizacija računalnikov',
        code: '63717',
        points: 6,
      },
    ],
    related: [
      {
        name: 'Procesna avtomatika',
        code: '63737',
        points: 6,
      },
      {
        name: 'Vhodno izhodne naprave',
        code: '63728',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Planiranje in upravljanje informatike',
      code: '63253',
      points: 6,
      type: SubjectType.Directionary,
    },
    prerequisites: [
      {
        name: 'Razvoj informacijskih sistemov',
        code: '63725',
        points: 6,
      },
    ],
    related: [
      {
        name: 'Podatkovne baze 2',
        code: '63713',
        points: 6,
      },
      {
        name: 'Informacijski sistemi',
        code: '63714',
        points: 6,
      },
      {
        name: 'Razvoj informacijskih sistemov',
        code: '63725',
        points: 6,
      },
      {
        name: 'Elektronsko in mobilno poslovanje',
        code: '63712',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Sistemska programska oprema',
      code: '63736',
      points: 6,
      type: SubjectType.Directionary,
    },
    related: [
      {
        name: 'Operacijski sistemi',
        code: '63709',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Numerične metode',
      code: '63742',
      points: 6,
      type: SubjectType.Disciplinary,
    },
  },
  {
    info: {
      name: 'Vzporedni in porazdeljeni sistemi in algoritmi',
      code: '63735',
      points: 6,
      type: SubjectType.Disciplinary,
    },
  },
  {
    info: {
      name: 'Programiranje energijsko omejenih naprav',
      code: '63776',
      points: 6,
      type: SubjectType.Disciplinary,
    },
  },
  {
    info: {
      name: 'Tehnologija iger in navidezna resničnost',
      code: '63740',
      points: 6,
      type: SubjectType.Directionary,
    },
    prerequisites: [
      {
        name: 'Računalniška grafika',
        code: '63719',
        points: 6,
      },
      {
        name: 'Umetna inteligenca',
        code: '63720',
        points: 6,
      },
    ],
    related: [
      {
        name: 'Računalniška grafika',
        code: '63719',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Robotika in računalniško zaznavanje',
      code: '63739',
      points: 6,
      type: SubjectType.Directionary,
    },
    prerequisites: [
      {
        name: 'Računalniška grafika',
        code: '63719',
        points: 6,
      },
      {
        name: 'Umetna inteligenca',
        code: '63720',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Odločitveni sistemi',
      code: '63741',
      points: 6,
      type: SubjectType.Directionary,
    },
    prerequisites: [
      {
        name: 'Podatkovno rudarjenje',
        code: '63765',
        points: 6,
      },
    ],
    related: [
      {
        name: 'Umetna inteligenca',
        code: '63720',
        points: 6,
      },
      {
        name: 'Podatkovno rudarjenje',
        code: '63765',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Tehnologija programske opreme',
      code: '63732',
      points: 6,
      type: SubjectType.Mandatory,
    },
    related: [
      {
        name: 'Prevajalniki in navidezni stroji',
        code: '63722',
        points: 6,
      },
      {
        name: 'Algoritmi in podatkovne strukture 2',
        code: '63723',
        points: 6,
      },
      {
        name: 'Testiranje in kakovost',
        code: '63724',
        points: 6,
      },
      {
        name: 'Uporabniški vmesniki',
        code: '63721',
        points: 6,
      },
    ],
  },
  {
    info: {
      name: 'Splošni izbirni predmet',
      code: 'splosni-izbirni-predmeti',
      type: SubjectType.Common,
    },
  },
];

export const semesterVI: Subject[] = [
  {
    info: {
      name: 'Diplomski seminar',
      code: '63281',
      points: 6,
      type: SubjectType.Mandatory,
    },
  },
  {
    info: {
      name: 'Delovna praksa',
      code: 'delovna-praksa',
      points: 18,
      type: SubjectType.Mandatory,
    },
  },
];

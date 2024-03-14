import { SubjectTypeDB, type SubjectLoad } from './base_types';

export const subjects: SubjectLoad[] = [
  {
    id: 1,
    name: 'Programiranje I',
    code: '63702',
    points: 6,
    type: SubjectTypeDB.Mandatory,
    semester: 1,
  },
  {
    id: 2,
    name: 'Diskretne strukture',
    code: '63705',
    points: 6,
    type: SubjectTypeDB.Mandatory,
    semester: 1,
  },
  {
    id: 3,
    name: 'Računalniška arhitektura',
    code: '63703',
    points: 6,
    type: SubjectTypeDB.Mandatory,
    semester: 1,
  },
  {
    id: 4,
    name: 'Uvod v računalništvo',
    code: '63701',
    points: 6,
    type: SubjectTypeDB.Mandatory,
    semester: 1,
  },
  {
    id: 5,
    name: 'Matematika',
    code: '63704',
    points: 6,
    type: SubjectTypeDB.Mandatory,
    semester: 1,
  },
  {
    id: 6,
    name: 'Operacijski sistemi',
    code: '63709',
    points: 6,
    type: SubjectTypeDB.Mandatory,
    semester: 2,
    related: [46],
  },
  {
    id: 7,
    name: 'Programiranje 2',
    code: '63706',
    points: 6,
    type: SubjectTypeDB.Mandatory,
    semester: 2,
  },
  {
    id: 8,
    name: 'Podatkovne baze',
    code: '63707',
    points: 6,
    type: SubjectTypeDB.Mandatory,
    semester: 2,
  },
  {
    id: 9,
    name: 'Osnove verjetnosti in statistike',
    code: '63710',
    points: 6,
    type: SubjectTypeDB.Mandatory,
    semester: 2,
  },
  {
    id: 10,
    name: 'Računalniške komunikacije',
    code: '63708',
    points: 6,
    type: SubjectTypeDB.Mandatory,
    semester: 2,
    related: [11, 26],
  },
  {
    id: 11,
    name: 'Komunikacijski protokoli in omrežna varnost',
    code: '63716',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 3,
    related: [10, 26],
  },
  {
    id: 12,
    name: 'Grafično oblikovanje',
    code: '63715',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 3,
    related: [27, 42],
  },
  {
    id: 13,
    name: 'Elektronsko in mobilno poslovanje',
    code: '63712',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 3,
    related: [13, 15, 30, 45],
  },
  {
    id: 14,
    name: 'Podatkovne baze 2',
    code: '63713',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 3,
    related: [13, 15, 30, 45],
  },
  {
    id: 15,
    name: 'Informacijski sistemi',
    code: '63714',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 3,
    related: [13, 14, 30, 45],
  },
  {
    id: 17,
    name: 'Organizacija računalnikov',
    code: '63717',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 3,
    related: [18, 32],
  },
  {
    id: 18,

    name: 'Digitalna vezja',
    code: '63718',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 3,
    related: [18, 32],
  },
  {
    id: 19,
    name: 'Varnost podatkov',
    code: '63775',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 3,
    related: [20, 33, 34],
  },
  {
    id: 20,
    name: 'Varnost organizacij',
    code: '63773',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 3,
    related: [19, 33, 34],
  },
  {
    id: 21,
    name: 'Računalniška grafika',
    code: '63719',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 3,
    related: [50],
  },
  {
    id: 22,
    name: 'Umetna inteligenca',
    code: '63720',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 3,
    related: [35, 52],
  },
  {
    id: 23,
    name: 'Programski jezik C',
    code: '63769',
    points: 3,
    type: SubjectTypeDB.Disciplinary,
    semester: 3,
  },
  {
    id: 24,
    name: 'Algoritmi in podatkovne strukture 1',
    code: '63711',
    points: 6,
    type: SubjectTypeDB.Mandatory,
    semester: 3,
  },
  {
    id: 25,
    name: 'Tehnične veščine',
    code: '63767a',
    points: 3,
    type: SubjectTypeDB.Disciplinary,
    semester: 3,
  },
  {
    id: 31,
    name: 'Izbrana poglavja iz RI',
    code: '63749b',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 3,
  },
  {
    id: 26,
    name: 'Spletne tehnologije',
    code: '63727',
    points: 6,
    type: SubjectTypeDB.Directionary,
    semester: 4,
    prerequisites: [11],
    related: [10, 11],
  },
  {
    id: 27,
    name: 'Produkcija multimedijskih gradiv',
    code: '63726',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 4,
    prerequisites: [12],
    related: [12, 42],
  },
  {
    id: 28,
    name: 'Digitalno procesiranje signalov',
    code: '63744',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 4,
  },
  {
    id: 29,
    name: 'Vhodno izhodne naprave',
    code: '63728',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 4,
    related: [43, 44],
  },
  {
    id: 30,
    name: 'Razvoj informacijskih sistemov',
    code: '63725',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 4,
    prerequisites: [15],
    related: [13, 14, 15, 45],
  },
  {
    id: 32,
    name: 'Načrtovanje digitalnih naprav',
    code: '63729',
    points: 6,
    type: SubjectTypeDB.Directionary,
    semester: 4,
    prerequisites: [17, 18],
    related: [17, 18],
  },
  {
    id: 33,
    name: 'Varnost programov',
    code: null,
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 4,
    related: [19, 20, 34],
  },
  {
    id: 34,

    name: 'Pravni vidiki varnosti',
    code: null,
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 4,
    related: [19, 20, 33],
  },
  {
    id: 35,
    name: 'Podatkovno rudarjenje',
    code: '63765',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 4,
    prerequisites: [22],
    related: [22, 52],
  },
  {
    id: 36,
    name: 'Uporabniški vmesniki',
    code: '63721',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 4,
    related: [37, 38, 39, 53],
  },
  {
    id: 37,
    name: 'Prevajalniki in navidezni stroji',
    code: '63722',
    points: 6,
    type: SubjectTypeDB.Directionary,
    semester: 4,
    related: [36, 38, 39, 53],
  },
  {
    id: 38,
    name: 'Algoritmi in podatkovne strukture 2',
    code: '63723',
    points: 6,
    type: SubjectTypeDB.Mandatory,
    semester: 4,
    related: [36, 37, 39, 53],
  },
  {
    id: 39,
    name: 'Testiranje in kakovost',
    code: '63724',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 4,
    related: [36, 37, 38, 53],
  },
  {
    id: 40,
    name: 'Tehnične veščine 2',
    code: '63766a',
    points: 3,
    type: SubjectTypeDB.Disciplinary,
    notTaught: true,
    semester: 4,
  },
  {
    id: 41,
    name: 'Splošni izbirni predmet',
    code: 'splosni-izbirni-predmeti',
    type: SubjectTypeDB.Common,
    points: null,
    semester: 4,
  },
  {
    id: 42,
    name: 'Multimedijske tehnologije',
    code: '63734',
    points: 6,
    type: SubjectTypeDB.Directionary,
    semester: 5,
    prerequisites: [27, 28],
  },
  {
    id: 43,
    name: 'Procesna avtomatika',
    code: '63737',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 5,
    prerequisites: [29],
    related: [44, 29],
  },
  {
    id: 44,
    name: 'Vgrajeni sistemi',
    code: '63738',
    points: 6,
    type: SubjectTypeDB.Directionary,
    semester: 5,
    prerequisites: [29, 17],
    related: [43, 29],
  },
  {
    id: 45,
    name: 'Planiranje in upravljanje informatike',
    code: '63253',
    points: 6,
    type: SubjectTypeDB.Directionary,
    semester: 5,
    prerequisites: [30],
    related: [14, 15, 30, 13],
  },
  {
    id: 46,
    name: 'Sistemska programska oprema',
    code: '63736',
    points: 6,
    type: SubjectTypeDB.Directionary,
    semester: 5,
    related: [6],
  },
  {
    id: 47,
    name: 'Numerične metode',
    code: '63742',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 5,
  },
  {
    id: 48,
    name: 'Vzporedni in porazdeljeni sistemi in algoritmi',
    code: '63735',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 5,
  },
  {
    id: 49,
    name: 'Programiranje energijsko omejenih naprav',
    code: '63776',
    points: 6,
    type: SubjectTypeDB.Disciplinary,
    semester: 5,
  },
  {
    id: 50,
    name: 'Tehnologija iger in navidezna resničnost',
    code: '63740',
    points: 6,
    type: SubjectTypeDB.Directionary,
    semester: 5,
    prerequisites: [21, 22],
    related: [21],
  },
  {
    id: 51,
    name: 'Robotika in računalniško zaznavanje',
    code: '63739',
    points: 6,
    type: SubjectTypeDB.Directionary,
    semester: 5,
    prerequisites: [21, 22],
  },
  {
    id: 52,
    name: 'Odločitveni sistemi',
    code: '63741',
    points: 6,
    type: SubjectTypeDB.Directionary,
    semester: 5,
    prerequisites: [35],
    related: [22, 35],
  },
  {
    id: 53,
    name: 'Tehnologija programske opreme',
    code: '63732',
    points: 6,
    type: SubjectTypeDB.Mandatory,
    semester: 5,
    related: [37, 38, 39, 36],
  },
  {
    id: 54,
    name: 'Splošni izbirni predmet',
    code: 'splosni-izbirni-predmeti',
    type: SubjectTypeDB.Common,
    points: null,
    semester: 5,
  },
  {
    id: 55,
    name: 'Diplomski seminar',
    code: '63281',
    points: 6,
    type: SubjectTypeDB.Mandatory,
    semester: 6,
  },
  {
    id: 56,
    name: 'Delovna praksa',
    code: 'delovna-praksa',
    points: 18,
    type: SubjectTypeDB.Mandatory,
    semester: 6,
  },
];

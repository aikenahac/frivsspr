const cheerio = require('cheerio');

const html =
  '<li><a href="https://fri.uni-lj.si/sl/predmet/63734">Multimedijske tehnologije</a></li><li><a href="https://fri.uni-lj.si/sl/predmet/63737">Procesna avtomatika</a></li><li><a href="https://fri.uni-lj.si/sl/predmet/63738">Vgrajeni sistemi</a></li><li><a href="https://fri.uni-lj.si/sl/predmet/63253">Planiranje in upravljanje informatike</a></li><li><a href="https://www.fri.uni-lj.si/sl/predmet/63736">Sistemska programska oprema</a></li><li><a href="https://www.fri.uni-lj.si/sl/predmet/63742">Numerične metode</a></li><li><a href="https://fri.uni-lj.si/sl/predmet/63735">Vzporedni in porazdeljeni sistemi in algoritmi</a></li><li><a href="https://fri.uni-lj.si/sl/predmet/63740">Tehnologija iger in navidezna resničnost</a></li><li><a href="https://fri.uni-lj.si/sl/predmet/63739">Robotika in računalniško zaznavanje</a></li><li><a href="https://www.fri.uni-lj.si/sl/predmet/63741">Odločitveni sistemi</a></li><li><a href="https://www.fri.uni-lj.si/sl/predmet/63732">Tehnologija programske opreme</a></li>';

const $ = cheerio.load(html);
const liElements = $('li').toArray();

const liStrings = liElements.map((li) => $.html(li));

console.log(liStrings);

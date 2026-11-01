/* Dział „Gramatyka”: zasady z rozdziałów zebrane tematami (r = id rozdziału, t = tytuł karty „Zasada”)
   oraz dane strony „Siedem przypadków”. Formy zapisane jako "temat|końcówka". */
window.GRAMATYKA = [
 {temat:"Rzeczownik i przypadki", opis:"Rodzaj rzeczownika i odmiana przez przypadki.", pozycje:[
  {r:"03",t:"Ten, ta, to – rodzaj rzeczownika"},
  {r:"09",t:"Liczba mnoga: rzeczy, zwierzęta, kobiety"},
  {r:"07",t:"Biernik liczby pojedynczej"},
  {r:"05",t:"Narzędnik liczby pojedynczej"},
  {r:"08",t:"Narzędnik liczby mnogiej"},
  {r:"10",t:"Dopełniacz po przeczeniu"},
  {r:"15",t:"Dopełniacz liczby mnogiej"},
  {r:"18",t:"Miejscownik liczby pojedynczej"}
 ]},
 {temat:"Zaimki", opis:"Zaimki osobowe w przypadkach i zaimki dzierżawcze.", pozycje:[
  {r:"02",t:"Zaimki osobowe i czasownik być"},
  {r:"10",t:"Zaimki w narzędniku: ze mną, z tobą"},
  {r:"14",t:"Zaimki osobowe w bierniku"},
  {r:"15",t:"Zaimki osobowe w dopełniaczu"},
  {r:"17",t:"Odmiana zaimków osobowych"},
  {r:"06",t:"Mój, twój"},
  {r:"11",t:"Czyj? Zaimki dzierżawcze"}
 ]},
 {temat:"Czasownik: czas teraźniejszy", opis:"Typy odmiany, czasowniki modalne i nieregularne.", pozycje:[
  {r:"02",t:"Koniugacja -m, -sz"},
  {r:"04",t:"Koniugacja -ę, -isz / -ysz"},
  {r:"06",t:"Trzy typy odmiany czasowników"},
  {r:"12",t:"Powtórzenie czasowników"},
  {r:"oc",t:"Czas teraźniejszy: wzory regularne"},
  {r:"oc",t:"Czasowniki nieregularne"},
  {r:"06",t:"Móc, chcieć, musieć"},
  {r:"08",t:"Jeść, pić, woleć"},
  {r:"17",t:"Lubić czy podobać się?"},
  {r:"14",t:"Iść czy chodzić? Jechać czy jeździć?"},
  {r:"23",t:"Mieć na sobie i nosić"},
  {r:"25",t:"Czasownik powinien"}
 ]},
 {temat:"Czasy, aspekt i tryb", opis:"Przeszłość, przyszłość, aspekt i tryb przypuszczający.", pozycje:[
  {r:"13",t:"Czas przeszły"},
  {r:"13",t:"Formy trudniejsze: -eć, jeść, pójść"},
  {r:"16",t:"Czas przyszły złożony"},
  {r:"oc",t:"Czas przeszły i przyszły"},
  {r:"21",t:"Aspekt w czasie przeszłym"},
  {r:"22",t:"Aspekt w czasie przyszłym"},
  {r:"pa",t:"Pary z przedrostkiem"},
  {r:"pa",t:"Pary z inną końcówką i inne słowa"},
  {r:"26",t:"Tryb przypuszczający: chciałbym, mógłbym"}
 ]},
 {temat:"Przymiotnik i przysłówek", opis:"Tworzenie i stopniowanie.", pozycje:[
  {r:"08",t:"Przymiotniki od rzeczowników"},
  {r:"23",t:"Stopniowanie przymiotników"},
  {r:"16",t:"Przysłówek: jak?"},
  {r:"24",t:"Stopniowanie przysłówków"},
  {r:"11",t:"Jak często?"}
 ]},
 {temat:"Przyimki", opis:"Gdzie? Dokąd? Skąd? – przyimki i przypadki.", pozycje:[
  {r:"18",t:"Przyimki na, w, przy, o, po"},
  {r:"19",t:"Przyimki statyczne: gdzie?"},
  {r:"20",t:"Gdzie? Dokąd? Skąd?"}
 ]},
 {temat:"Liczebniki i daty", opis:"Liczebniki główne i porządkowe, wiek, daty.", pozycje:[
  {r:"01",t:"Liczebniki 0–10"},
  {r:"02",t:"Liczebniki 11–29"},
  {r:"05",t:"Liczebniki 20–100"},
  {r:"07",t:"Liczebniki 100–1000"},
  {r:"05",t:"Ile masz lat? Rok, lata, lat"},
  {r:"15",t:"Liczebnik i rzeczownik"},
  {r:"12",t:"Liczebniki porządkowe 1–24"},
  {r:"21",t:"Daty"}
 ]},
 {temat:"Alfabet", opis:"Litery i wymowa.", pozycje:[
  {r:"01",t:"Alfabet"}
 ]}
];

window.PRZYPADKI = {
 przypadki:[
  ["Mianownik","kto? co?","podmiot","To jest [[kot]]."],
  ["Dopełniacz","kogo? czego?","brak, przeczenie, ilość","Nie ma kot[[a]]."],
  ["Celownik","komu? czemu?","odbiorca","Daję kot[[u]] mleko."],
  ["Biernik","kogo? co?","dopełnienie","Widzę kot[[a]]."],
  ["Narzędnik","(z) kim? (z) czym?","narzędzie, towarzystwo, zawód","Idę z kot[[em]]."],
  ["Miejscownik","o kim? o czym?","zawsze z przyimkiem","Myślę o ko[[cie]]."],
  ["Wołacz","o!","zwracanie się do kogoś","Ko[[cie]], chodź tu!"]
 ],
 rzeczowniki:{
  "student":{label:"męski osobowy — student",note:"Rodzaj męskoosobowy. W liczbie mnogiej biernik = dopełniacz.",
   sg:["student|","student|a","student|owi","student|a","student|em","studen|cie","studen|cie"],
   pl:["studen|ci","student|ów","student|om","student|ów","student|ami","student|ach","studen|ci"]},
  "kot":{label:"męski żywotny — kot",note:"Rodzaj męski żywotny (zwierzęta). W liczbie pojedynczej biernik = dopełniacz.",
   sg:["kot|","kot|a","kot|u","kot|a","kot|em","ko|cie","ko|cie"],
   pl:["kot|y","kot|ów","kot|om","kot|y","kot|ami","kot|ach","kot|y"]},
  "stół":{label:"męski nieżywotny — stół",note:"Rodzaj męski nieżywotny. Biernik = mianownik. Oboczność ó : o.",
   sg:["stół|","stoł|u","stoł|owi","stół|","stoł|em","sto|le","sto|le"],
   pl:["stoł|y","stoł|ów","stoł|om","stoł|y","stoł|ami","stoł|ach","stoł|y"]},
  "kobieta":{label:"żeński twardy — kobieta",note:"Rodzaj żeński zakończony na -a. Dopełniacz liczby mnogiej często bez końcówki.",
   sg:["kobiet|a","kobiet|y","kobie|cie","kobiet|ę","kobiet|ą","kobie|cie","kobiet|o"],
   pl:["kobiet|y","kobiet|","kobiet|om","kobiet|y","kobiet|ami","kobiet|ach","kobiet|y"]},
  "ziemia":{label:"żeński miękki — ziemia",note:"Rodzaj żeński z tematem miękkim: końcówka -i w dopełniaczu, celowniku i miejscowniku.",
   sg:["ziemi|a","ziemi|","ziemi|","ziemi|ę","ziemi|ą","ziemi|","ziemi|o"],
   pl:["ziemi|e","zie|m","ziemi|om","ziemi|e","ziemi|ami","ziemi|ach","ziemi|e"]},
  "noc":{label:"żeński spółgłoskowy — noc",note:"Rodzaj żeński zakończony na spółgłoskę: mianownik = biernik.",
   sg:["noc|","noc|y","noc|y","noc|","noc|ą","noc|y","noc|y"],
   pl:["noc|e","noc|y","noc|om","noc|e","noc|ami","noc|ach","noc|e"]},
  "okno":{label:"nijaki — okno",note:"Rodzaj nijaki: mianownik = biernik = wołacz. W dopełniaczu liczby mnogiej wstawne -ie-.",
   sg:["okn|o","okn|a","okn|u","okn|o","okn|em","ok|nie","okn|o"],
   pl:["okn|a","ok|ien","okn|om","okn|a","okn|ami","okn|ach","okn|a"]},
  "morze":{label:"nijaki miękki — morze",note:"Rodzaj nijaki na -e. Miejscownik liczby pojedynczej na -u, dopełniacz liczby mnogiej z obocznością o : ó.",
   sg:["morz|e","morz|a","morz|u","morz|e","morz|em","morz|u","morz|e"],
   pl:["morz|a","mórz|","morz|om","morz|a","morz|ami","morz|ach","morz|a"]},
  "imię":{label:"nijaki na -ę — imię",note:"Nieregularny wzór nijaki: temat rozszerzony o -ni- / -on-.",
   sg:["imi|ę","imieni|a","imieni|u","imi|ę","imieni|em","imieni|u","imi|ę"],
   pl:["imion|a","imion|","imion|om","imion|a","imion|ami","imion|ach","imion|a"]}
 },
 przymiotnik:{
  sg:{head:["męski","żeński","nijaki"],rows:[
   ["dobr|y","dobr|a","dobr|e"],["dobr|ego","dobr|ej","dobr|ego"],["dobr|emu","dobr|ej","dobr|emu"],
   ["dobr|ego / dobr|y","dobr|ą","dobr|e"],["dobr|ym","dobr|ą","dobr|ym"],["dobr|ym","dobr|ej","dobr|ym"],["dobr|y","dobr|a","dobr|e"]]},
  pl:{head:["męskoosobowy","niemęskoosobowy"],rows:[
   ["dobrz|y","dobr|e"],["dobr|ych","dobr|ych"],["dobr|ym","dobr|ym"],["dobr|ych","dobr|e"],
   ["dobr|ymi","dobr|ymi"],["dobr|ych","dobr|ych"],["dobrz|y","dobr|e"]]}
 },
 zaimki:{head:["ja","ty","on","ona","ono","my","wy","oni / one"],rows:[
  ["ja","ty","on","ona","ono","my","wy","oni / one"],
  ["mnie","ciebie, cię","jego, go, niego","jej, niej","jego, go, niego","nas","was","ich, nich"],
  ["mnie, mi","tobie, ci","jemu, mu, niemu","jej, niej","jemu, mu, niemu","nam","wam","im, nim"],
  ["mnie","ciebie, cię","jego, go, niego","ją, nią","je, nie","nas","was","ich, nich / je, nie"],
  ["mną","tobą","nim","nią","nim","nami","wami","nimi"],
  ["mnie","tobie","nim","niej","nim","nas","was","nich"],
  ["—","ty!","—","—","—","—","wy!","—"]]},
 uwagi:[
  "Biernik rodzaju męskiego: rzeczowniki żywotne mają formę jak dopełniacz (*widzę kot[[a]]*), nieżywotne jak mianownik (*widzę stół*).",
  "W liczbie mnogiej rzeczowniki męskoosobowe mają biernik równy dopełniaczowi (*widzę student[[ów]]*), pozostałe — równy mianownikowi (*widzę kot[[y]]*).",
  "Przeczenie zmienia biernik w dopełniacz: *mam kota → nie mam kot[[a]]; czytam książkę → nie czytam książk[[i]]*.",
  "W miejscowniku i celowniku często zachodzą oboczności: *kot → kocie, ręka → ręce, noga → nodze, stół → stole*.",
  "Dopełniacz liczby pojedynczej rodzaju męskiego nieżywotnego ma końcówkę -a albo -u i trzeba się jej nauczyć ze słowem (*stołu, domu, zeszytu*, ale *ołówka, noża*).",
  "Wołacz w mowie potocznej często zastępuje mianownik (*Ania!, Pan Marek!*), ale w piśmie formalnym używa się go zawsze (*Szanowny Panie!*)."
 ]
};

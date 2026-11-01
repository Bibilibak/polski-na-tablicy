ROZ["07"] = {
wstep: "Robimy małe zakupy w kiosku i w galerii handlowej, pytamy o cenę i liczymy do tysiąca. W gramatyce: biernik liczby pojedynczej (*Poproszę kawę*).",
cwiczenia: [
{sekcja:"L", typ:"fiszki", tytul:"W kiosku",
 karty:[
  {p:"📰",t:"gazeta"},{p:"🎫",t:"bilet",d:"bilet normalny / ulgowy"},{p:"💧",t:"woda",d:"gazowana / niegazowana"},
  {p:"🍫",t:"czekolada"},{p:"🍬",t:"cukierek"},{p:"✉️",t:"koperta"},{p:"💌",t:"kartka pocztowa"},
  {p:"🖊️",t:"długopis"},{p:"🧃",t:"sok"},{p:"🥐",t:"rogalik"},{p:"🗺️",t:"mapa"},{p:"☂️",t:"parasol"},{p:"🔋",t:"bateria"}
 ]},
{sekcja:"L", typ:"zasada", tytul:"Galeria handlowa",
 bloki:[
  {siatka:[["🛒","sklep spożywczy"],["📚","księgarnia"],["💊","apteka"],["🧴","drogeria"],["👕","sklep odzieżowy"],["👟","sklep obuwniczy"],["📱","sklep z elektroniką"],["💐","kwiaciarnia"],["🥖","piekarnia"],["☕","kawiarnia"],["🎬","kino"],["🏧","bankomat"]]},
  {ex:["– Gdzie jest apteka? – Na parterze, obok drogerii.","– Przepraszam, gdzie jest bankomat? – Na pierwszym piętrze."]}
 ]},
{sekcja:"L", typ:"pary", tytul:"Co tu kupisz?",
 pary:[["księgarnia","książka"],["apteka","lekarstwo"],["piekarnia","chleb"],["kwiaciarnia","kwiaty"],["sklep obuwniczy","buty"],["drogeria","szampon"],["kiosk","gazeta"],["kawiarnia","kawa"],["sklep z elektroniką","telefon"]]},
{sekcja:"K", typ:"zasada", tytul:"Ile kosztuje?",
 bloki:[
  {tab:{h:["klient","sprzedawca"], rh:false, r:[
   ["Dzień dobry. Poproszę…","Dzień dobry. Co podać?"],
   ["Ile kosztuje ta gazeta?","Sześć złotych."],
   ["Ile kosztują te baterie?","Dwanaście złotych."],
   ["Czy jest woda niegazowana?","Tak, jest. / Niestety nie ma."],
   ["To wszystko. Ile płacę?","Coś jeszcze?"],
   ["Płacę kartą. / Płacę gotówką.","Proszę, paragon i reszta."]
  ]}},
  {h:"Złoty i grosz"},
  {tab:{h:["liczba","złoty","grosz"], r:[
   ["1","jeden [[złoty]]","jeden [[grosz]]"],
   ["2, 3, 4 · 22–24…","dwa [[złote]]","dwa [[grosze]]"],
   ["5–21 · 25–31…","pięć [[złotych]]","pięć [[groszy]]"]
  ]}},
  {uwaga:"To ta sama zasada co *rok, lata, lat*! 12, 13, 14 → złotych. Cena 4,50 zł = cztery złote pięćdziesiąt (groszy)."}
 ]},
{sekcja:"K", typ:"quiz", tytul:"Złoty, złote czy złotych?",
 pytania:[
  {q:"Gazeta kosztuje 5 ___.",o:["złotych","złote","złoty"]},{q:"Bilet kosztuje 4 ___.",o:["złote","złotych","złoty"]},
  {q:"To kosztuje 1 ___.",o:["złoty","złote","złotych"]},{q:"Książka kosztuje 32 ___.",o:["złote","złotych","złoty"]},
  {q:"Kawa kosztuje 12 ___.",o:["złotych","złote","złoty"],w:"12, 13, 14 → złotych."},{q:"Bułka kosztuje 90 ___.",o:["groszy","grosze","grosz"]},
  {q:"Woda kosztuje 3 ___.",o:["złote","złotych","złoty"]},{q:"Parasol kosztuje 45 ___.",o:["złotych","złote","złoty"]}
 ]},
{sekcja:"K", typ:"rozsypanka", tytul:"Ułóż zdania",
 zdania:[{z:"Poproszę bilet normalny.",alt:["Poproszę normalny bilet."]},{z:"Ile kosztuje ta gazeta?",alt:["Ta gazeta ile kosztuje?"]},"Czy jest woda niegazowana?","Płacę kartą.",{z:"To wszystko, dziękuję.",alt:["Dziękuję, to wszystko."]},{z:"Ile kosztują te baterie?",alt:["Te baterie ile kosztują?"]}]},
{sekcja:"K", typ:"scenka", tytul:"W kiosku na dworcu",
 sytuacja:"Turysta jest na dworcu w Krakowie. Musi kupić bilet na autobus, wodę i coś do czytania.",
 role:[
  {kto:"Klient", zadania:["Przywitaj się.","Poproś o bilet i wodę.","Zapytaj o cenę gazety albo mapy.","Zapytaj: *Ile płacę?*","Zapłać kartą i podziękuj."]},
  {kto:"Sprzedawca", zadania:["Przywitaj się i zapytaj: *Co podać?*","Zapytaj: bilet normalny czy ulgowy? Woda gazowana czy niegazowana?","Podaj ceny.","Zapytaj: *Coś jeszcze?*","Podaj sumę."]}
 ],
 zwroty:["Poproszę…","Ile kosztuje…?","normalny / ulgowy","gazowana / niegazowana","Coś jeszcze?","To wszystko.","Ile płacę?","Płacę kartą."],
 wzor:[
  ["Sprzedawca","Dzień dobry, co podać?"],
  ["Klient","Dzień dobry. Poproszę bilet na autobus."],
  ["Sprzedawca","Normalny czy ulgowy?"],
  ["Klient","Normalny. I poproszę wodę."],
  ["Sprzedawca","Gazowaną czy niegazowaną?"],
  ["Klient","Niegazowaną. Ile kosztuje ta mapa?"],
  ["Sprzedawca","Dwadzieścia pięć złotych. Coś jeszcze?"],
  ["Klient","Nie, dziękuję. To wszystko. Ile płacę?"],
  ["Sprzedawca","Razem trzydzieści cztery złote."],
  ["Klient","Płacę kartą."]
 ]},
{sekcja:"K", typ:"rozmowa", tytul:"Ile to kosztuje?", polecenie:"Losuj kartę. Uczeń czyta cenę słowami. Grupa mówi, czy to drogo, czy tanio.",
 pytania:["📱 telefon – 899 zł","🎧 słuchawki – 249 zł","👟 buty – 320 zł","☕ kawa – 14 zł","📚 książka – 45 zł","🚲 rower – 1000 zł","🎫 bilet – 4,60 zł","🍫 czekolada – 6,99 zł","☂️ parasol – 52 zł","💐 kwiaty – 35 zł","🎒 plecak – 189 zł","🧃 sok – 3,50 zł"]},
{sekcja:"G", typ:"zasada", tytul:"Biernik liczby pojedynczej",
 bloki:[
  "Pytania: **kogo? co?** Biernika używamy po wielu czasownikach: *mieć, lubić, kupować, jeść, pić, widzieć, znać, poproszę*.",
  {tab:{h:["rodzaj","mianownik","biernik","przymiotnik"], r:[
   ["żeński","kawa, gazeta","kaw[[ę]], gazet[[ę]]","dobr[[ą]] kawę"],
   ["męski nieżywotny (rzeczy)","bilet, sok","bilet, sok (bez zmian)","dobr[[y]] sok"],
   ["męski żywotny (ludzie, zwierzęta)","brat, pies, kot","brat[[a]], ps[[a]], kot[[a]]","dobr[[ego]] brata"],
   ["nijaki","piwo, ciastko","piwo, ciastko (bez zmian)","zimn[[e]] piwo"]
  ]}},
  {lista:["Rodzaj żeński na spółgłoskę się nie zmienia: *Lubię noc.*","*pani → pani[[ą]]*: Znam panią Ewę.","Mężczyzna na -a ma -ę: *kolega → koleg[[ę]]*."]},
  {ex:["Poproszę [[czarną kawę]].","Mam [[nowy telefon]].","Mam [[młodego psa]] i [[białego kota]].","Kupuję [[zimne piwo]]."]}
 ]},
{sekcja:"G", typ:"quiz", tytul:"Wybierz formę biernika",
 pytania:[
  {q:"Poproszę ___.",o:["kawę","kawa","kawy"]},{q:"Mam ___.",o:["brata","brat","bratem"]},
  {q:"Kupuję ___.",o:["bilet","bileta","biletę"]},{q:"Lubię ___ herbatę.",o:["zieloną","zielona","zielonej"]},
  {q:"Widzę ___ psa.",o:["dużego","duży","duża"]},{q:"Jem ___.",o:["czekoladę","czekolada","czekolady"]},
  {q:"Znam ___ Ewę.",o:["panią","pani","panię"]},{q:"Poproszę ___ ciastko.",o:["to","tę","tego"]}
 ]},
{sekcja:"G", typ:"luki", tytul:"Wpisz biernik",
 zdania:[
  {z:"Poproszę ___.",h:"zimna woda",a:"zimną wodę"},
  {z:"Mam ___.",h:"nowy telefon",a:"nowy telefon"},
  {z:"Mam ___.",h:"kot",a:"kota"},
  {z:"Lubię ___.",h:"czarna kawa",a:"czarną kawę"},
  {z:"Kupuję ___.",h:"gazeta",a:"gazetę"},
  {z:"Widzę ___.",h:"duży pies",a:"dużego psa"},
  {z:"Piję ___.",h:"sok pomarańczowy",a:"sok pomarańczowy"},
  {z:"Poproszę ___.",h:"małe ciastko",a:"małe ciastko"},
  {z:"Znam ___.",h:"pani Ewa",a:"panią Ewę"},
  {z:"Mam ___.",h:"starszy brat",a:"starszego brata"}
 ]},
{sekcja:"G", typ:"zasada", tytul:"Liczebniki 100–1000",
 bloki:[
  {siatka:[["100","sto"],["200","dwie[[ście]]"],["300","trzy[[sta]]"],["400","cztery[[sta]]"],["500","pięć[[set]]"],["600","sześć[[set]]"],["700","siedem[[set]]"],["800","osiem[[set]]"],["900","dziewięć[[set]]"],["1000","tysiąc"]]},
  {lista:["200 = **dwieście** (wyjątek).","300, 400 → **-sta**.","500–900 → **-set**."]},
  {ex:["245 = dwieście czterdzieści pięć","599 = pięćset dziewięćdziesiąt dziewięć","1000 zł = tysiąc złotych"]}
 ]},
{sekcja:"G", typ:"pary", tytul:"Setki",
 pary:[["200","dwieście"],["300","trzysta"],["400","czterysta"],["500","pięćset"],["600","sześćset"],["700","siedemset"],["800","osiemset"],["900","dziewięćset"],["1000","tysiąc"]]},
{sekcja:"G", typ:"quiz", tytul:"Przeczytaj cenę",
 pytania:[
  {q:"349 zł",o:["trzysta czterdzieści dziewięć złotych","trzysta czterdzieści dziewięć złote","trzydzieści czterdzieści dziewięć złotych"]},
  {q:"222 zł",o:["dwieście dwadzieścia dwa złote","dwieście dwadzieścia dwa złotych","dwasta dwadzieścia dwa złote"]},
  {q:"515 zł",o:["pięćset piętnaście złotych","pięćset pięćnaście złotych","pięćsta piętnaście złotych"]},
  {q:"904 zł",o:["dziewięćset cztery złote","dziewięćset cztery złotych","dziewięćsta cztery złote"]},
  {q:"1000 zł",o:["tysiąc złotych","tysiąc złote","sto złotych"]},
  {q:"160 zł",o:["sto sześćdziesiąt złotych","sto szesnaście złotych","sto sześćdziesiąt złote"]}
 ]}
]};

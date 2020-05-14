# Crypto Dashboard

##### Introducere

S-ar putea ca parerea generala legata de criptomonede sa fie una dezaprobatoare, sustinand ca nu are o valoare fundamentala, nici o utilitate reala si este doar o schema Ponzi. Acestea nu prezinta de fapt adevarul. Bitcoin poate fi folosit ca si un manifest contra cenzurii, deoarece nicio banca sau companie nu poate sa impuna clientilor un mod de utilizare si nici nu poate controla averea detinuta. Bitcoin este considerat de foarte multi aur digital. Aurul este imun la inflatie si este bun ca magazin de valoare, dar este limitat la aria geografica. Bitcoin este prima modalitate care este imuna la inflatie, care poate fi utilizat si ca numerar digital, permitand tranzactii foarte ieftine si instantanee. Desigur, este nevoie de anumite masuri de siguranta, insa acum, odata cu dezvoltarea acestei pieti, au devenit mai evidente metodele de spargere a conturilor, insa si securitatea oferita este mai mare. 

##### Descriere problema

Chiar daca totul a inceput cu Bitcoin, foarte repede au aparut si alte monede si multe platforme de tranzactionare. De aceea, este foarte important ca clientii sa dispuna de o platforma care sa le dea macar un punct de start spre a explora mai departe si de a le oferi informatii rapide, aflate doar la un click. Astfel, pentru acest proiect, am vrut sa dezvolt o platforma care contine cateva date importante, dispuse sub forma vizuala, cu ajutorul unui grafic, un calculator rapid ce contine o lista cu numeroase monede digitale si o componenta de stiri, pentru a afla datele cele mai importante. Aplicatia are mai multe componente. Una dintre ele este graficul care arata fluctuatiile celor 3 monede exemplificate pe 3 perioade relevante utilizatorilor, o saptamana, o luna sau un an. Pentru a visualiza rapid ultimele noutati in legatura cu crypto monedele utilizatorii au la dispozitie o sectiune in dreapta unde pot accessa articolele ce prezinta interes. A treia componenta cuprinde un convertor de crypto monede in monezi uzuale. In caz ca utilizatorul nu completeaza anumite campuri primeste un pop-up cu un mesaj de avertizare care indica locul unde ar trebui completat.

##### Descriere API

Aceasta aplicatie foloseste 2 API-uri pentru a aduce datele necesare. Primul este dedicat adunarii datelor pentru chart-ul din pagina si pentru conversia monedelor. Acesta ofera date istorice privind evolutia monedelor, inclusiv pretul, volumul de tranzactionare si Documentatia foloseste serviciul Swagger, de aceea este foarte usor de pus in practica. Este un API gratuit, fara autentificare cu un API key si cu numar nelimitat de request-uri. Dintre toate API-urile free disponibile, acesta este unul dintre cele mai complete ce nu are limita de tranzactii pe minut, ora sau luna, cum au multe altele. Mai multe detalii se pot gasi in cadrul documentatiei [aici](https://www.coingecko.com/api/documentations/v3).

Cel de-al doilea API folosit a fost un agregator de stiri din lumea criptomonedelor. Aceste se numeste Crypto News API ([cryptocontrol.io](https://cryptocontrol.io/en/developers/apis)) si furnizeaza informatii zilnice, unde utilizatorul poate alege dintre feed-urile de Twitter si Reddit. Pentru aceasta aplicatie insa, am folosit doar endpoint-ul ce ofera articolele de top si cele mai vizualizate. Spre deosebire de celalalt API, acesta necesita autentificarea cu un API key, generat pe baza email-ului si folosit cu fiecare request care se face. Documentatia ce arata toate endpoint-urile poate fi gasita [aici](https://api-docs.cryptocontrol.io/).

Pentru crearea graficelor am folosit o biblioteca cunoscuta, ChartJs, ce ofera si integrare cu Vue. Sintaxa este destul de simpla si fara ocolisuri, iar stilurile graficelor se pot customiza usor. Este un proiect mentinut de catre comunitate, fiecare tip de grafic fiind animat si customizabil, cu performante excelente de redare in toate browserele moderne (IE18+).

Pentru stilizarea componentelor si crearea unei unitati in pagina, am folosit libraria de UI pentru desktop, Element UI, pe baza careia am realizat tot stilul paginii si am adaugat CSS unde era nevoie. Toate acestea se bazeaza pe Vue, un framework pentru front end, usor de folosit pentru incepatori, fiind unul dintre cele mai populare framework-uri, alaturi de React si Angular. Este un model open-source pentru construirea de interfete de utilizator si aplicatii single-page (SPA).

Pentru deployment, am folosit Heroku. Heroku este o platformă cloud ca un serviciu care acceptă mai multe limbaje de programare. Una dintre primele platforme cloud, Heroku este în dezvoltare încă din iunie 2007, când a acceptat doar limbajul de programare Ruby, dar acum acceptă Java, Node.js, Scala, Clojure, Python, PHP și Go.Heroku este o platformă cloud ca un serviciu care acceptă mai multe limbaje de programare. Una dintre primele platforme cloud, Heroku este în dezvoltare încă din iunie 2007, când a acceptat doar limbajul de programare Ruby, dar acum acceptă Java, Node.js, Scala, Clojure, Python, PHP și Go. Am creat un cont gratis si cu ajutorul Git am pus aplicatia pe serverele oferite de ei. 

##### Flux de date 

1. Exemple de request/response

   

   ***obtinerea preturilor ce sunt folosite la crearea graficelor:***

   ![request_1](images/request_1.png)

   ***vs_currency***: moneda contra careia se doreste a se face compararea 

   ***days***: cu cate zile in urma se vor lua datele

   

   ***obtinerea articolelor pentru componenta de stiri***

   ![request_2](images/request_2.png)

   ***key:*** API-key-ul obtinut la inregistrare

   

   ***obtinerea monedelor cu care este suportata conversia pentru componenta de conversie*** 

   ![request_3](images/request_3.png)

   

2. Metode HTTP

   HTTP este o metoda de a transfera fisiere pe Internet. Clientii si serverele comunica prin schimbul de mesaje individuale (spre deosebire de un flux de date). Mesajele trimise de client, de obicei un browser Web, se numesc solicitari, iar mesajele trimise de server ca raspuns sunt denumite raspunsuri (response). HTTP defineste un set de metode de solicitare pentru a indica actiunea dorita care trebuie efectuata pentru o anumita resursa. Desi pot fi si substantive, aceste metode de solicitare sunt uneori denumite verbe HTTP. Cele mai cunoscute sunt GET, PUT, POST, DELETE. Metoda GET solicita o reprezentare a resursei specificate. Cererile care folosesc GET ar trebui sa recupereze doar date. Metoda POST este utilizata pentru a trimite o entitate la resursa specificata, adesea provocand o modificare a starii sau a efectelor secundare pe server. Metoda PUT inlocuiete toate reprezentarile curente ale resursei tinta cu sarcina utila a solicitarii. In acest proiect, majoritatea metodelor folosite sunt de tipul GET, pentru a accesa informatiile cu anumiti parametri catre serverul care gazduieste endpoint-urile folosite. 

   

3. Autentificare si autorizare servicii utilizate 

   Dupa cum am mentionat mai sus, serviciile nu au avut nevoie de autorizare, inafara de cel de stiri, fiind mai specializat si oferind mai multe informatii. A fost nevoie de el doar prima oara cand m-am inregistrat, dupa putand fi folosit pentru toate request-urile, care oricum cereau acest lucru. 

##### Capturi de ecran aplicatie 

![captura_1](images/captura_1.png)

![capture_2](images/capture_2.png)

![capture_3](images/capture_3.png)

##### **Referinte** 

[CoinGecko](https://www.coingecko.com/api/documentations/v3#/simple/get_simple_supported_vs_currencies)

[Cryptocontrol.io](https://cryptocontrol.io/en/developers/apis)

[ChartJS](https://www.chartjs.org/)

[Element-UI](https://element.eleme.io/#/en-US/component/installation)

[VueJS](https://vuejs.org/)

[Heroku](https://devcenter.heroku.com/articles/git)

##### Erori

Am intampinat o eroare ciudata, care era legata de core service de la vue. Desi creasem proiectul cu 

```
vue create app
```

, cum este recomandat in documentatia oficiala, dupa aceea nu au fost recunoscute anumite dependinte legate chiar de core. Prima oara am cautat pe internet, insa fara prea mari rezultate, intrucat nu voiam sa instalez manual dependintele (acest lucru poate crea si mai multe probleme de fapt). Am incercat npm install si, desi a rezvovat unele probleme (legate de import-ul bibliotecilor Axios si Element-UI), nu a rezolvat problema de baza. Dupa care, amintindu-mi ca la inceput vue-cli a instalat dependintele cu Yarn, nu cu NPM, (eu avand sistemul de operare Windows), am incercat si cu 

```
yarn install
```

 si abia dupa aceea a trecut eroarea. 

![eroare core](images/eroare_1.png)

Chiar daca am rulat comenzile de instalare a celor doua dependinte, Axios si ElementUI, nu s-au instalat de prima oara, asa ca am mai rulat o data comanda 

```
npm install --save axios element-ui
```

La crearea chart-ului, am mers din eroare in eroare pana ce l-am creat. La inceput, am avut diverse erori legate de date, deoarece array-urile care intrau in componenta chart-urilor si unde se aflau datele de fapt erau undefined. De ce? Pentru ca atunci cand se apela functia de creare a chart-ului, datele inca nu venisera din API si lungimea lor era 0. Am pus un timeout pana la crearea functiei si asa s-a rezolvat aceasta problema. 

```
setTimeout(() => {
   this.createWeekChart()
  }, 3000)
```

Dupa asta, ChartJs nu putea sa extraga contextul in care se afla canvas-ul pe care urma sa fie trasat graficul, chiar daca am furnizat id-ul. 

```
Failed to create chart: can't acquire context from the given item
```

Din documentatie am luat si linia de cod care rezolva acest lucru cu ajutorul JavaScript-ului si am furnizat parametrul ctx in loc de id-ul chart-ului.

```
const ctx = document.getElementById('mychart').getContext('2d');
```

Celelalte erori au constat mai mult in valorile din variabile fiind undefined, sau erori de scriere a variabilelor cand le-am folosit. 
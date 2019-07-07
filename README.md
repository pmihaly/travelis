# Travelis - az utazók közösségi médiája (portfólió)

<!-- Tartalomjegyzék -->

## Tartalomjegyzék

- [Projektről](#projektről)
  - [Használt technológiák](#használt-technológiák)
- [Telepítés](#telepítés-és-indítás)
  - [Szükséges szoftverek](#szükséges-szoftverek)
  - [Telepítés](#telepítés)
- [Indítás](#Indítás)
- [Segíts fejleszteni](#segíts-fejleszteni)
- [Licensz](#licensz)
- [Elérhetőségek](#Elérhetőségek)

<!-- Projektről -->

## Projektről

<p align="center">
  <img src="https://user-images.githubusercontent.com/47941079/60765147-bcd29780-a095-11e9-99c3-3675d67ed47a.png" alt="Travelis screenshot"/>
</p>

Travelis egy fiktív közösségi háló, ahol bejegyzéseket lehet közzétenni, módosítani és törölni (CRUD).

### Használt technológiák

A projektet a MEAN stackkel valósítottam meg, mely a következő eszközökből áll:

- [MongoDB adatbázis](https://www.mongodb.com/)
- [Express.js szerver](https://expressjs.com/)
- [Angular kliensoldali keretrendszer](https://angular.io/)
- [Node.js szerveroldali környezet](https://nodejs.org/en/)

Továbbá az [Ionic keretrendszer](https://ionicframework.com/) használatával készítettem el a webes alkalmazásból a mobil applikációt.

<!-- Telepítés és indítás -->

## Telepítés és indítás

A következő lépésekben bemutatom, hogy lehet kipróbálni a projektet.

### Szükséges szoftverek

Győződjünk meg arról hogy:

1. MongoDB adatbázis fut a háttérben, alapértelmezett porton
1. Telepítettük a Node.js környezetet és elérhető az `npm` parancs

### Telepítés

1. Klónozzuk le a repository-t

```sh
git clone https://github.com/pmihaly/travelis
```

2. Telepítsük az npm csomagokat

```sh
npm install
```

3. Futtassuk a fejlesztői szervert

```sh
npm run dev
```

Ha el tudtuk indítani a fejlesztői kiszolgálót, az alkalmazás webes változata megjelenik az alapértelmezett böngészőnkben, a `localhost:8100` címen.

Az app webes változata nem támogatja a mobil-specifikus funkciókat (pl. nem tudunk képet kiválasztani), azonban amikor elmentjük a forráskódot, a webes alkalmazás automatikusan frissül.

<!-- Indítás EXAMPLES -->

## Indítás

A fejlesztői verzió nem optimalizált és nem biztonságos kódból áll.

A végleges verzió (kész `.apk` állomány) elkészítéséhez lásd az [Ionic dokumentációját](https://ionicframework.com/docs/building/android).

Az Android SDK-hoz kötődő telepítési lépésekhez szintén az [Ionic dokumentációját](https://ionicframework.com/docs/building/android) vedd segítségül

<!-- Segíts fejleszteni -->

## Segíts fejleszteni

A Travelis alkalmazás egy nyílt forráskódú projekt, bárki hozzáadhat új funkciót, illetve bárki javíthat valamilyen hibát.

Kövesd a következő lépéseket a szerkesztett forráskód beadásához:

1. `Fork`old a projektet
2. Hozz létre egy új branche-t (`git checkout -b nemMukodoGombFix`)
3. Commitold a változtatást (`git commit -m 'Nem működő gom fix '`)
4. Pushold a commitokat (`git push origin nemMukodoGombFix`)
5. Nyiss egy új pull requestet

<!-- Licensz -->

## Licensz

Ez a projekt az MIT licensz alatt továbbítódik. Részletekért lásd `LICENSE`.

<!-- Elérhetőségek -->

## Elérhetőségek

Papp Mihály - papp.misi@protonmail.com

Projekt Link: [https://github.com/pmihaly/travelis](https://github.com/pmihaly/travelis)

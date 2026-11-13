# N•E•B•R•A

**Versione 0.9.99 · PWA installabile e utilizzabile offline dopo il primo caricamento.**

N•E•B•R•A è un regolo astronomico digitale per stimare cosa osservare, quando e in quale direzione. Inserisci data, ora civile, latitudine e longitudine per vedere sulla tavola il Sole, la Luna, Venere, Marte, Giove e Saturno, insieme ai riferimenti stellari.

[Apri N•E•B•R•A](https://oscarcollini.github.io/nebra/)

## Uso

- La tavola mostra le posizioni da **8 ore prima a 8 ore dopo il passaggio al meridiano**. Puoi usare un orizzonte rettilineo oppure importare un profilo locale per tenere conto di rilievi e ostacoli.
- Per provare l’importazione, usa [profilo-di-prova.txt](profilo-di-prova.txt). Il **Profilo di prova** è fittizio e si può eliminare. La guida nell’app spiega anche come importare un profilo esportato da PeakFinder.
- Nella sezione **Guida e approfondimenti** trovi il metodo di calcolo e le regole manuali di **MiniNEBRA**. Per la Luna, l’app mostra anche nodo, scarto dall’eclittica e indicazione di possibile eclissi.
- L’app è disponibile in italiano e inglese. Dal menu del browser puoi installarla o aggiungerla alla schermata Home, secondo il dispositivo.

## Intervalli di calcolo

- Intervallo selezionabile nell’app: **1583–4199**.
- Ancore planetarie tabellari: **1900–2199**. Fuori da questa fascia l’app ricostruisce le ancore a partire da riferimenti decennali.

## File del progetto

- [index.html](index.html) contiene applicazione, tavola, calcoli e guida.
- [manifest.webmanifest](manifest.webmanifest), [sw.js](sw.js) e le icone gestiscono installazione e uso offline.
- [ISTRUZIONI-PUBBLICAZIONE.txt](ISTRUZIONI-PUBBLICAZIONE.txt) e [ISTRUZIONI-AGGIORNAMENTO.txt](ISTRUZIONI-AGGIORNAMENTO.txt) descrivono pubblicazione e aggiornamento.

Copyright © 2026 Oscar Collini · [CC BY-SA 4.0](LICENSE.txt).

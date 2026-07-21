# N•E•B•R•A v0.9.93 — pacchetto PWA

Questo archivio contiene la versione installabile e utilizzabile offline di
N•E•B•R•A.

## Contenuto

- `index.html` — applicazione PWA.
- `manifest.webmanifest` — metadati di installazione.
- `sw.js` — cache offline.
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — icone.
- `profilo-di-prova.txt` — orizzonte fittizio importabile.
- `ISTRUZIONI-PUBBLICAZIONE.txt` — pubblicazione su GitHub Pages.
- `ISTRUZIONI-AGGIORNAMENTO.txt` — aggiornamento di una pubblicazione esistente.
- `LICENSE.txt` — licenza CC BY-SA 4.0.

## Differenza funzionale rispetto allo standalone

L'applicazione è ricavata dallo stesso sorgente della versione standalone.
La PWA incorpora un profilo d'orizzonte fittizio, denominato `Profilo di prova`,
che viene attivato soltanto quando nel browser non esistono già profili salvati.
Il profilo non rappresenta un luogo reale e può essere eliminato o sostituito.

I collegamenti al manifest e al service worker sono il solo involucro tecnico
necessario all'installazione e all'uso offline.

## Validità

- Intervallo del calcolo calendariale: 1583–4199.
- Ancore planetarie interne dell'app: 1900–2199.
- Modello astronomico approssimato per osservazione a occhio nudo.

## Licenza

N•E•B•R•A è distribuito con licenza CC BY-SA 4.0.
Vedi `LICENSE.txt`.

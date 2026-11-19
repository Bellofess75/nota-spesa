# Nota Spese Trasferta: versione PWA

Cartella pronta da mettere online. Serve un indirizzo **HTTPS** (senza HTTPS l'installazione e il funzionamento offline non partono).

## 1. Pubblicare (basta una di queste)
- **Netlify:** vai su app.netlify.com/drop e trascina questa cartella `pwa` intera. Ottieni subito un indirizzo https.
- **GitHub Pages:** crea un repository, carica il contenuto della cartella `pwa`, poi Settings → Pages → scegli il ramo principale.
- **Cloudflare Pages / Azure Static Web Apps / il sito della tua azienda:** carica gli stessi file.

Il contenuto deve stare insieme: `index.html`, `manifest.webmanifest`, `sw.js` e la cartella `icons`.

## 2. Installare sul telefono
- **iPhone (Safari):** apri l'indirizzo, tocca Condividi, poi **Aggiungi a Home**.
- **Android (Chrome):** apri l'indirizzo, menu a tre puntini, **Installa app** (o Aggiungi a schermata Home).

## 3. Cose da sapere
- Dopo la prima apertura online funziona anche **senza rete**.
- I dati restano **solo sul telefono**, nella memoria della app. Per ora non c'è un backup: lo aggiungeremo con calma, come PDF ed esportazione completa.
- **CSV per GD:** in Trasferta → Esporta CSV. Il file si chiama `matricola-C005_data` (per esempio `5906-C005_19-11-2026.csv`). Su telefono si apre il foglio di condivisione: se OneDrive è installato compare tra le app. Se il telefono lo scarica soltanto, apri File, tocca il file e scegli Condividi → OneDrive.
- **Foto degli scontrini:** il pulsante Condividi / salva apre il foglio di condivisione del telefono, dove compare anche OneDrive se è installato. Su computer la foto viene scaricata.
- **Aggiornare la app:** sostituisci i file online e cambia `VERSIONE` in `sw.js` (per esempio `nota-spese-v2`).

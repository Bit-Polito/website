# Configurazione Notion per BitPolito Website

## Setup del Database Notion

### 1. Creare un Database in Notion

1. Crea una nuova pagina in Notion
2. Aggiungi un database con le seguenti proprietà:

#### Proprietà del Database:
- **Content type** (Select): 
  - Opzioni: "events", "podcast", "projects", "others", "Featured"
- **Content location** (Select):
  - Opzioni: "Chessboard", "Carousel"
- **Image** (Files & media): 
  - Per caricare le immagini degli eventi/contenuti
- **Link** (URL): 
  - Link a cui deve puntare l'elemento quando cliccato
- **Date** (Date): 
  - Data dell'evento (usata per l'ordinamento)
- **Alt-text** (Rich text): 
  - Testo alternativo per l'accessibilità delle immagini
- **Name** (Title):
  - Nome dell'elemento

### 2. Configurare l'Integrazione Notion

1. Vai su [Notion Developers](https://www.notion.so/my-integrations)
2. Crea una nuova integrazione:
   - Nome: "BitPolito Website"
   - Logo: (opzionale)
   - Workspace: Seleziona il tuo workspace
3. Copia il **Internal Integration Token**

### 3. Condividere il Database

1. Vai al database creato
2. Clicca su "Share" in alto a destra
3. Aggiungi l'integrazione creata con permessi di "Read"
4. Copia l'ID del database dall'URL (la parte dopo l'ultimo `/` e prima del `?`)

### 4. Configurare le Variabili d'Ambiente

1. Copia `env.example` in `.env.local`
2. Aggiungi le tue credenziali:

```env
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### 5. Struttura dei Dati

#### Per gli Elementi Chessboard (Content location: "Chessboard"):
- Vengono mostrati nella chessboard centrale
- Ordinati per data decrescente
- Le immagini larghe occupano 2 quadrati, quelle alte 1 quadrato
- **Identificazione automatica**: Le immagini vengono automaticamente classificate come "larghe" se la larghezza è almeno 1.3 volte l'altezza (es. 1300x1000px)
- **Filtri disponibili**: events, podcast, projects, others (basati su Content type)

#### Per i Contenuti Featured (Content type: "Featured"):
- Vengono mostrati nel carousel
- Solo i primi elementi vengono mostrati
- Il primo a comparire è quello con data più recente

### 6. Esempio di Record

#### Evento normale (1 quadrato):
```
Content type: events
Content location: Chessboard
Image: [carica un'immagine]
Link: https://example.com/event
Date: 2024-01-15
Alt-text: Descrizione dell'evento per l'accessibilità
Name: Nome dell'evento
```

#### Evento con immagine larga (2 quadrati):
```
Content type: events
Content location: Chessboard
Image: [carica un'immagine con proporzioni larghe, es. 1920x1080px]
Link: https://example.com/event-wide
Date: 2024-01-15
Alt-text: Evento importante con immagine panoramica
Name: Nome dell'evento
```

#### Contenuto Featured (Carousel):
```
Content type: Featured
Content location: Carousel
Image: [carica un'immagine]
Link: https://example.com/featured
Date: 2024-01-15
Alt-text: Descrizione del contenuto featured
Name: Nome del contenuto
```

**Nota**: Le immagini vengono automaticamente classificate come "larghe" se la larghezza è almeno 1.3 volte l'altezza. Non serve aggiungere parole chiave speciali.

## Popolamento Automatico del Database

Ho creato uno script per popolare automaticamente il database Notion con tutti i dati esistenti:

### 1. Installazione Dipendenze

```bash
npm install
```

### 2. Configurazione Variabili d'Ambiente

Crea il file `.env.local` con le tue credenziali Notion:

```env
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### 3. Popolamento Database

```bash
npm run populate-notion
```

Questo script:
- ✅ Migra tutti gli eventi da `chessboardImages.json` (22 elementi)
- ✅ Migra i contenuti featured dal carousel (4 elementi)
- ✅ Genera date realistiche per ogni elemento
- ✅ Gestisce rate limiting di Notion
- ✅ Fornisce feedback dettagliato

### 4. Avvio del Progetto

```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:3000`

## Note Importanti

- **URL Immagini**: Lo script usa URL placeholder. Dovrai aggiornare gli URL delle immagini nel database Notion con il tuo dominio reale
- **Date**: Le date vengono generate automaticamente negli ultimi 365 giorni
- **Rate Limiting**: Lo script include pause per rispettare i limiti di Notion API

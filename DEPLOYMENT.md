# 🚀 Guida al Deployment - BitPolito Website

## 📋 Panoramica

Questa guida ti aiuterà a configurare il deployment automatico su Vercel con GitHub Actions e gestire le variabili segrete in produzione.

## 🔐 Configurazione GitHub Secrets

### 1. Vai su GitHub Repository Settings

1. Vai al tuo repository su GitHub
2. Clicca su **Settings** → **Secrets and variables** → **Actions**
3. Clicca su **New repository secret**

### 2. Aggiungi i Secrets Necessari

Aggiungi questi secrets:

```
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
VERCEL_TOKEN=your_vercel_token_here
VERCEL_ORG_ID=your_vercel_org_id_here
VERCEL_PROJECT_ID=your_vercel_project_id_here
```

### 3. Come Ottenere i Token Vercel (Solo per GitHub Actions)

Se vuoi usare GitHub Actions per il deploy automatico, hai bisogno di questi token:

1. Vai su [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Clicca **Create Token**
3. Copia il token generato

Per gli altri ID, dopo aver creato il progetto su Vercel:
- **ORG_ID**: Vai su Settings → General → Team ID
- **PROJECT_ID**: Vai su Settings → General → Project ID

## 🌐 Configurazione Vercel (Via Dashboard Web)

### 1. Crea Account e Connetti GitHub

1. Vai su [vercel.com](https://vercel.com)
2. Clicca su **Sign Up** e connetti il tuo account GitHub
3. Autorizza Vercel ad accedere ai tuoi repository

### 2. Importa il Progetto

1. Clicca su **New Project**
2. Seleziona il repository `website` dalla lista
3. Clicca **Import**

### 3. Configura le Environment Variables

1. Nella sezione **Environment Variables**, aggiungi:

```
NOTION_TOKEN = secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID = xxxxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

2. Assicurati che entrambe siano selezionate per **Production**, **Preview** e **Development**

### 4. Deploy

1. Clicca **Deploy**
2. Vercel farà il build e deploy automaticamente
3. Il sito sarà disponibile su un URL tipo `https://website-xxx.vercel.app`

## 🔄 Workflow GitHub Actions

Il file `.github/workflows/deploy.yml` è già configurato per:

- ✅ Build automatico su push
- ✅ Test e linting
- ✅ Deploy su Vercel
- ✅ Uso dei GitHub Secrets

## 🚀 Comandi di Deployment

### Sviluppo Locale
```bash
npm run dev
```

### Build Locale
```bash
npm run build
```

### Deploy Automatico
Il deploy avviene automaticamente quando fai push su GitHub!

## 🔍 Verifica Deployment

### 1. Controlla i Log
```bash
vercel logs
```

### 2. Verifica Environment Variables
```bash
vercel env ls
```

### 3. Test API
```bash
curl https://your-domain.vercel.app/api/notion
```

## 🛠️ Troubleshooting

### Errore: "Notion configuration missing"

1. Verifica che i secrets siano configurati correttamente
2. Controlla che i nomi delle variabili siano esatti
3. Verifica che l'integrazione Notion abbia accesso al database

### Errore: "Vercel deployment failed"

1. Controlla i log di Vercel
2. Verifica che tutte le dipendenze siano installate
3. Assicurati che il build locale funzioni

### Errore: "Database not found"

1. Verifica l'ID del database Notion
2. Controlla che l'integrazione abbia i permessi corretti
3. Assicurati che il database sia condiviso con l'integrazione

## 📊 Monitoraggio

### Vercel Analytics
- Vai su Vercel Dashboard → Analytics
- Monitora performance e errori

### GitHub Actions
- Vai su GitHub → Actions
- Controlla lo stato dei deployment

## 🔄 Aggiornamenti

Per aggiornare il sito:
1. Fai push su GitHub
2. GitHub Actions farà il deploy automatico
3. Vercel aggiornerà il sito in pochi secondi

## 📝 Note Importanti

- Le variabili d'ambiente sono diverse tra sviluppo e produzione
- I secrets GitHub sono accessibili solo durante i workflow
- Vercel usa le sue variabili d'ambiente per la produzione
- Il database Notion deve essere condiviso con l'integrazione

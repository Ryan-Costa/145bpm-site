# Site 145 BPM

Site estático (HTML + CSS + JS puro). Não precisa de build nem de Node.

```
index.html     página inteira
style.css      cores, animações e estilos globais
script.js      controle do vídeo do hero
vercel.json    configurações da Vercel
favicon.svg    ícone da aba
assets/
  video/       hero.mp4, aftermovie.mp4 e as capas
  img/         logos, fotos dos integrantes e mural de fotos
```

## Ver no computador
Abra `index.html` no navegador. Para testar como no servidor:
`python -m http.server 8145` dentro desta pasta e acesse http://localhost:8145

## Publicar na Vercel
1. Crie uma conta em vercel.com.
2. Suba esta pasta para um repositório no GitHub e importe em *Add New → Project*
   (ou use a Vercel CLI: `npx vercel` dentro desta pasta).
3. *Framework Preset*: **Other**. Deixe *Build Command* e *Output Directory* vazios.
4. *Deploy*.

## Domínio
No projeto da Vercel: *Settings → Domains → Add* `145bpm.com.br`
e copie os registros DNS que ela mostrar para o painel do registro.br.

## O que ainda é provisório
- **Loja:** seção marcada como "em breve". Quando existir, trocar o selo "Loja em construção" por um botão com o link.
- **Agenda:** os dois eventos apontam para os posts do Instagram. Quando houver local, editar a linha "Local e atrações no Instagram" em `index.html`.
- **Imagem de compartilhamento (WhatsApp/Instagram):** depois de ter o domínio, adicionar no `<head>`:
  `<meta property="og:image" content="https://SEU-DOMINIO/assets/video/hero-poster.jpg">`

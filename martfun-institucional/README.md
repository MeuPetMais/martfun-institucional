# MartFun Institucional

Landing page institucional da MartFun em React + Vite + TypeScript.

## Rodar localmente

```powershell
npm install
npm run dev
```

O Vite normalmente abrirá em:

```text
http://localhost:5173
```

## Build

```powershell
npm run build
```

## Rotas

- `/` — Home
- `/termos` — Termos de Uso
- `/privacidade` — Política de Privacidade
- `/politica-de-conteudo` — Política de Conteúdo
- `/denuncias` — Canal de Denúncias

## Antes de publicar

Substitua:

- `RNG DIGITAL LTDA`
- `66.063.073/0001-30`
- `São Paulo/SP`
- `comercial@rngdigital.com.br`
- `privacidade@rngdigital.com.br`
- `Alexandre`

Os formulários são apenas visuais. Configure backend real antes de usá-los para receber dados.

## Publicação na Vercel

1. Crie um repositório no GitHub.
2. Faça push deste projeto.
3. Importe o repositório na Vercel.
4. Framework Preset: Vite.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Conecte o domínio institucional da MartFun.

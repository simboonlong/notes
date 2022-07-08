[![CI/CD](https://github.com/simboonlong/notes/actions/workflows/manual.yml/badge.svg)](https://github.com/simboonlong/notes/actions/workflows/manual.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/f32087c3-1555-4006-9fbd-0c2e70f86c37/deploy-status)](https://app.netlify.com/sites/notes-demo/deploys)

# Notes

📝 Write web-friendly notes quickly in Markdown. 📝

## Why?

Sometimes I want to write down notes with internal + external text hyperlinks.

[Markdown](https://daringfireball.net/projects/markdown/) looks perfect. It is essentially made up of 2 parts:

- Plain text (with formatting syntax)
- Renderer (text to HTML)

## Ok, but...

Why not Microsoft word document? Google document?

Because I heart web.

## Tell me more

Notes is a single HTML page. Leveraging on [zero-md](https://github.com/zerodevx/zero-md), it provides:

- A main area for notes taking
  - `notes.md`
- An aside for table of contents
  - `sidebar.md`

These are the only 2 files you will need to tinkle with.

## Demo

See [here](https://notes-demo.netlify.app).

## Run locally

```
npm i
npm run start
```

## Host remotely

Upload public folder contents onto the web root of your favourite web hosting.

Author © [Sim Boon Long](https://simboonlong.com).

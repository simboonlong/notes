[![CI/CD](https://github.com/simboonlong/notes/actions/workflows/manual.yml/badge.svg)](https://github.com/simboonlong/notes/actions/workflows/manual.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/f32087c3-1555-4006-9fbd-0c2e70f86c37/deploy-status)](https://app.netlify.com/sites/notes-demo/deploys)

# Notes

Write web-friendly notes quickly in Markdown. 📝

### Why?

Sometimes I want to write down notes with the ability to:

- Have internal + external text hyperlinks.
- Host them quickly to share across the web.
- Not care too much about formating / styling.

[Markdown](https://daringfireball.net/projects/markdown/) looks perfect. It is essentially made up of 2 parts:

- Plain text. (with formatting syntax)
- Renderer. (text to HTML)

### Ok, but...

Why not Microsoft word document? Google document?

Because web FTW.

### Tell me more

Notes is a single HTML page. Leveraging on [zero-md](https://github.com/zerodevx/zero-md), it provides:

- A main area for notes taking.
  - `notes.md` <- This is the **only** file you will need to edit. 🔥
- An aside for table of contents.
  - `sidebar.md` (generated based on h2 and h3 headers used)

## Demo

See [here](https://notes-demo.netlify.app).

## Run locally

```sh
npm run start
```

Make edits to `notes.md` and head to `http://localhost:3000` to view updated changes.

## Host remotely

Upload public folder contents onto the web root of your favourite web hosting.

### Readings

[Markdown parsers](https://css-tricks.com/choosing-right-markdown-parser).

Author © [Sim Boon Long](https://simboonlong.com).

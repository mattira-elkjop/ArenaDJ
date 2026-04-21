# 🏒 Arena DJ

**A free, browser-based music controller built for ice hockey arenas — by a hockey parent, for hockey parents.**

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
[![PWA](https://img.shields.io/badge/PWA-installable-blue)](https://mattira-elkjop.github.io/ArenaDJ/)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://mattira-elkjop.github.io/ArenaDJ/)

---

## The story behind this

I was doing *talkoot* — volunteer work — for my son's junior hockey team here in Finland. One of my jobs was running the music during games. I had a long Spotify playlist and a lot of goodwill, but the moment someone scored a goal I was frantically scrolling through hundreds of songs trying to find the right one before the moment passed. By the time I found it, the celebration was over. It felt amateurish, and it was stressful.

I wanted something purpose-built: a tool where every event in the game has its own playlist, where I can trigger the right music with a single keypress or tap, and where the fade-in, fade-out, and timing all just work — without me having to think about it in the middle of a game.

I couldn't find anything like that which was free, simple, and didn't require installing software on an arena computer. So I built it myself.

---

## What it does

Arena DJ lets you assign YouTube music to specific game events — goals, power plays, intermissions, warm-ups, and more. During the game you trigger events with one click or a keyboard shortcut. The app handles shuffle queues, automatic fade-in and fade-out, and clip timing so only the best part of each song plays.

It runs entirely in the browser. No installation, no server, no account required. It works on a laptop at the scorer's table or on a phone in your pocket.

---

## Features

- **11 event pools** — Match Intro, Warm-Ups, Intermission, Game Over, Goal (Home), Goal (Away), Power Play, Box Play, Timeout, Hard Hit, Maintenance
- **In-app YouTube search** — find and add songs without leaving the tool (free API key required — instructions in Settings)
- **Clip scrubber** — set exactly where each song starts and ends, with a live preview before adding to your library
- **Keyboard shortcuts** — trigger any event instantly; fully customisable, supports modifier combos like Ctrl+→
- **Announcement fade** — one key slowly fades the music out for PA announcements, then pauses so you can resume afterwards
- **Shuffle queues** — each event cycles in shuffled order, no repeats until the pool is exhausted
- **Up Next picker** — see and re-roll the next song per event without interrupting what's playing
- **Configurable fades** — set fade-in and fade-out durations globally
- **Import / Export** — back up your full library and settings to JSON and restore on any device
- **Default library from repo** — the built-in song library lives in `arena-dj-settings.json` so it can be updated without touching the app code
- **Installable PWA** — add to home screen on Android or iOS; works like a native app and updates automatically
- **Mobile-friendly** — bottom navigation, swipe gestures on event buttons, touch-optimised scrubber

---

## Try it

**[→ Open Arena DJ](https://mattira-elkjop.github.io/ArenaDJ/)**

Works best in Chrome on desktop or Android. On iPhone, use Safari and "Add to Home Screen" for the best experience.

---

## How to use

### Live page

Press any event button to start playing from that event's shuffled queue. Left edge of a button = replay current song. Right edge = skip to next. Middle = play/pause.

The **Now Playing bar** at the top is always visible. Use the scrubber to seek, or drag the amber handle to extend or shorten the current clip on the fly.

### Adding songs

Go to **Settings → + ADD SONG**. Search YouTube directly (requires a free API key — see Settings) or paste any YouTube URL. Preview the song, drag the clip handles to set exactly what part plays, then assign it to one or more events and add it.

### Keyboard shortcuts

Default layout — all remappable in Settings:

| Key | Action |
|-----|--------|
| `I` | Match Intro |
| `W` | Warm-Ups |
| `G` | Goal — Home |
| `C` | Goal — Away |
| `P` | Power Play |
| `B` | Box Play |
| `T` | Timeout |
| `→` | Next song (current event) |
| `←` | Replay from start |
| `F` | Announcement fade |
| `Space` | Play / Pause |

### Installing as a PWA (recommended for game day)

On Android: open the site in Chrome, tap the three-dot menu → **Install app**. On iPhone: open in Safari, tap Share → **Add to Home Screen**. Once installed it opens full-screen with no browser bar, and updates automatically when you push a new version.

### Updating the default song library

Edit `arena-dj-settings.json` in the repo root and commit. No changes to `index.html` needed. Users who click **↺ Reset to Default** in Settings will get the updated library fetched fresh from the repo.

---

## Running your own copy

### Option A — Fork and deploy on GitHub Pages (recommended)

1. Fork this repository
2. Go to **Settings → Pages** in your fork
3. Set source to **Deploy from branch → main → / (root)**
4. Open your published URL — done

### Option B — Clone and run locally

```bash
git clone https://github.com/mattira-elkjop/ArenaDJ.git
cd ArenaDJ
python3 -m http.server 8080
# Open http://localhost:8080
```

Opening `index.html` directly as a `file://` URL may cause YouTube playback issues in some browsers. Serving over HTTP (even locally) avoids this.

---

## Built as a PWA — why?

A Progressive Web App means the site can be installed to the home screen like a native app, works offline via a service worker cache, and updates silently in the background when you push a new version. For arena use this matters: you don't want to depend on a stable internet connection mid-game, and you don't want to ask volunteers to manually update an app before each game day.

The whole thing is a single HTML file with all CSS and JavaScript inline. That makes it trivial to self-host, fork, or run locally — no build tools, no `npm install`, no dependencies to manage.

---

## Browser support

Tested and working on Chrome 120+, Edge 120+, Firefox 121+, and Safari 17+. Best experience on Chrome (desktop and Android).

---

## ⚠️ Music licensing — please read

Arena DJ streams audio from YouTube. **The app does not host, own, distribute, or reproduce any music.** It is a controller that triggers YouTube videos through the YouTube IFrame API, which YouTube makes available for embedding.

**You are solely responsible for ensuring you have the appropriate rights and licences to publicly perform any music you play through this tool.**

If you use Arena DJ at a ticketed event or in any public venue, you likely need a performing rights licence from your country's relevant organisation — in Finland that is [Teosto](https://www.teosto.fi/), in Sweden [STIM](https://www.stim.se/), in Norway [TONO](https://www.tono.no/), and so on. Many sports clubs and arenas already hold blanket licences that cover this. Check with your club or venue before using this tool at a public event.

The author of this software accepts no responsibility for any copyright infringement resulting from your use of this tool. By using Arena DJ you agree that music licensing is your own responsibility.

---

## Customisation & commercial use

Arena DJ is free and open-source for non-commercial use under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).

If you represent a club or organisation and want a customised version — your team's branding, your own default song library, your event names and structure — I'm happy to discuss it. Pricing is negotiated case by case depending on the size of the organisation and the scope of work.

**Contact:** [matti.rantakangas+arenadj@gmail.com](mailto:matti.rantakangas+arenadj@gmail.com)

---

## License

© 2025 Matti Rantakangas

This project is licensed under **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**.

You are free to use, share, and adapt this project for non-commercial purposes with attribution. Commercial use requires explicit written permission from the author.

[Full license text](LICENSE) · [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)

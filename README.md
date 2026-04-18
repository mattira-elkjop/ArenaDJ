# 🏒 Arena DJ

A single-file, browser-based soundboard built for live hockey arena operation. No installation, no server, no dependencies — just open the app and go.

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

---

## Features

- **11 event pools** — Match Intro, Warm-Ups, Intermission, Game Over, Goal (Home), Goal (Away), Power Play, Box Play, Timeout, Hard Hit, and Maintenance
- **221 built-in songs** — curated default library loads automatically on first launch
- **Keyboard shortcuts** — trigger any event instantly with a single key press
- **YouTube playback** — streams audio via the YouTube IFrame API; no local files needed
- **Scrubber with start/end control** — set exactly which part of a song plays and for how long
- **Shuffle queues** — each event pool cycles in shuffled order, no repeats until the pool is exhausted
- **Up Next picker** — see and manually select the next song per event
- **Fade in / Fade out** — configurable crossfade durations
- **Import / Export** — back up your full song library and settings to JSON and restore anytime
- **Reset to Default** — one-click restore of the full built-in song library
- **Mobile-friendly** — bottom nav bar, swipe gestures, and tap-to-expand scrubber
- **Works offline** — runs as a local file with no server required

---

## Quick Start

### Option A — GitHub Pages (recommended)

1. Fork this repository
2. Go to **Settings → Pages** in your fork
3. Set source to **Deploy from branch → main → / (root)**
4. Open the published URL — done, no setup needed

### Option B — Run locally

1. Download `index.html`
2. Open it in any modern browser (Chrome, Edge, Firefox, Safari)
3. That's it

> **Note:** YouTube playback works best when served over HTTP/HTTPS. When opening as a local `file://` you may see a warning in the UI — this is expected and can be dismissed.

---

## How to Use

### Live page

Press the event buttons (or their keyboard shortcuts) to trigger music. The scrubber in the top bar shows what's playing and lets you seek or adjust the clip end point on the fly.

### Adding songs

Go to **Settings → Song Library**, paste a YouTube URL or video ID, choose the event pool, and set the start time and clip duration. Warm-Up songs always play the full song from the beginning.

### Keyboard shortcuts

Each event has a configurable shortcut. Default layout:

| Key | Event |
|-----|-------|
| `I` | Match Intro |
| `W` | Warm-Ups |
| `G` | Goal — Home |
| `C` | Goal — Away |
| `P` | Power Play |
| `B` | Box Play |
| `T` | Timeout |
| `Space` | Play / Pause last event |

All shortcuts are remappable in **Settings → Keyboard**.

### Backing up and restoring

Use **Settings → Import / Export → ↓ EXPORT .JSON** to save your library. Use **↑ IMPORT .JSON** to restore it on any device or browser.

### Resetting to the default library

Use **Settings → Import / Export → ↺ RESET TO DEFAULT**. You will be asked to confirm. Your keyboard shortcuts and global settings are kept — only the song list is replaced.

---

## Browser Support

Tested and working on:

- Google Chrome 120+
- Microsoft Edge 120+
- Firefox 121+
- Safari 17+

---

## Support

Arena DJ is free to use. If it saves you time at the rink, you can support the project here:

☕ **[Buy Me a Coffee — link coming soon]**

For bug reports and feature requests, open an issue on GitHub.

---

## License

© 2025 Matti Rantakangas

This project is licensed under **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**.

You are free to use, share, and adapt this project for non-commercial purposes, as long as you give appropriate credit. Commercial use is not permitted without explicit written permission from the author.

Full license: [LICENSE](LICENSE) · [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)

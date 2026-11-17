# Third-Party Notices & Licenses

This document lists the third-party software, libraries, and open-source components utilized by the **Camybr Windows Plugin** binary distribution and the official website, along with their respective copyright notices and license terms.

---

## 1. Desktop Application & Windows Plugin Runtime Dependencies

### 1.1 FFmpeg (libavcodec, libavutil, libswscale, libswresample)
- **Project**: [FFmpeg](https://ffmpeg.org/)
- **Copyright**: &copy; 2000–2026 the FFmpeg developers
- **License**: GNU Lesser General Public License v2.1 or later (`LGPL-2.1-or-later`) / GNU General Public License v2.0 or later (`GPL-2.0-or-later`)
- **Usage**: Camybr Windows Plugin dynamically links against FFmpeg shared runtime libraries (`avcodec-61.dll`, `avutil-59.dll`, `swresample-5.dll`, `swscale-8.dll`, `libx264-164.dll`, `zlib.dll`) for high-performance H.264 video decoding and AAC audio processing.
- **Compliance**: The FFmpeg libraries are bundled as unmodified shared DLLs in accordance with LGPL/GPL dynamic linking provisions. Full source code of the underlying FFmpeg release is available at [ffmpeg.org](https://ffmpeg.org).

### 1.2 Inno Setup
- **Project**: [Inno Setup](https://jrsoftware.org/isinfo.php)
- **Copyright**: &copy; 1997–2026 Jordan Russell, Martijn Laan
- **License**: Modified BSD-style Inno Setup License
- **Usage**: Packaging the Windows 64-bit installer executable (`Camybr-Windows-v1.0.0-Setup.exe`).

### 1.3 Windows Platform SDK & DirectShow
- **Provider**: Microsoft Corporation
- **License**: Microsoft Windows SDK Terms
- **Usage**: DirectShow COM interfaces (`dshow.h`), Windows Sockets 2 (`ws2_32.lib`), and Windows API headers.

---

## 2. Website & Documentation Assets

### 2.1 Bootstrap 5.3.3
- **Project**: [Bootstrap](https://getbootstrap.com/)
- **Copyright**: &copy; 2011–2026 The Bootstrap Authors
- **License**: MIT License

### 2.2 FontAwesome Free 6.5.1
- **Project**: [Font Awesome](https://fontawesome.com/)
- **License**: Icons: CC BY 4.0; Fonts: SIL OFL 1.1; Code: MIT License

### 2.3 Google Fonts (Plus Jakarta Sans & JetBrains Mono)
- **Plus Jakarta Sans**: SIL Open Font License, 1.1 (TokyoType / Gumpita Rahayu)
- **JetBrains Mono**: SIL Open Font License, 1.1 (JetBrains)

---

## 3. Legal Disclaimers

All trademarks, service marks, logos, and company names referenced herein are the property of their respective owners:
- **Windows**, **DirectShow**, and **Microsoft Teams** are registered trademarks of Microsoft Corporation.
- **OBS Studio** is a registered trademark of Wizards of OBS LLC.
- **Zoom** is a trademark of Zoom Video Communications, Inc.
- **Google Meet** and **Android** are trademarks of Google LLC.
- **Discord** is a trademark of Discord Inc.

Camybr is an independent software product developed and published by YBR Digital. Camybr is not affiliated with, sponsored by, or endorsed by Microsoft, Google, Zoom, Discord, or the OBS Project.

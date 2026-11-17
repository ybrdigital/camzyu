# Camzyu - PC Plugin

<div align="center">
  <img src="assets/img/logo.png" alt="Camzyu Logo" width="110" height="110" style="border-radius: 24px; box-shadow: 0 8px 30px rgba(0, 230, 118, 0.35);">
  <br><br>
  <h3>Your Android Phone. Your Professional PC Camera.</h3>
  <p>
    Transform your Android smartphone into a high-definition webcam and studio microphone for your computer. Stream video and synchronized audio directly into <strong>Zoom, Google Meet, Microsoft Teams, Discord, OBS Studio, Skype</strong>, and desktop applications with ultra-low latency over Wi-Fi or USB.
  </p>
  <p>
    <a href="https://ybrdigital.github.io/camzyu/"><img src="https://img.shields.io/badge/Website-GitHub%20Pages-00E676?style=for-the-badge&logo=github&logoColor=black" alt="Official Website"></a>
    <a href="https://github.com/ybrdigital/camzyu/releases"><img src="https://img.shields.io/badge/Download-Free%20PC%20Plugin-0052CC?style=for-the-badge&logo=windows&logoColor=white" alt="PC Plugin Download"></a>
    <a href="https://play.google.com/store/apps/details?id=com.briyoom.camzyu"><img src="https://img.shields.io/badge/Google%20Play-Get%20App-34A853?style=for-the-badge&logo=google-play&logoColor=white" alt="Google Play App"></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-Freeware-brightgreen?style=for-the-badge" alt="Freeware License"></a>
  </p>
</div>

---

## Overview

**Camzyu PC Plugin** is a high-performance, system-wide virtual webcam and virtual microphone for Windows 10 and Windows 11 (64-bit). It enables live streamers, remote professionals, students, and content creators to use their smartphone's superior camera optics, autofocus, and microphone directly on PC without requiring capture cards, dummy drivers, or cloud streaming subscriptions.

- **Official Website & Live Documentation**: [https://ybrdigital.github.io/camzyu/](https://ybrdigital.github.io/camzyu/)
- **Official GitHub Repository**: [https://github.com/ybrdigital/camzyu](https://github.com/ybrdigital/camzyu)
- **Official Binary Releases**: [https://github.com/ybrdigital/camzyu/releases](https://github.com/ybrdigital/camzyu/releases)

---

## Key Features

1. **Universal Desktop Compatibility**: Appears natively as a high-fidelity video device (**Camzyu**) and audio capture device (**Camzyu Audio**) across desktop apps:
   - **Video Conferencing**: Zoom, Google Meet, Microsoft Teams, Skype, Webex
   - **Broadcasting & Streaming**: OBS Studio, Streamlabs OBS, vMix, XSplit
   - **Gaming & Chat**: Discord, Telegram Desktop, Slack
2. **Pristine Video Streaming**: Broadcast in 1080p Full HD and 4K UHD resolutions directly into your video software.
3. **Up to 60 FPS Capture**: Silky-smooth framerates engineered for professional meetings, gaming streams, and multicam recordings.
4. **Ultra-Low Latency Pipeline**: Peer-to-peer frame transmission over local 5 GHz Wi-Fi or wired USB.
5. **Automatic Subnet Discovery**: Instant UDP beacon detection automatically pairs active Camzyu Android phones on your local network.
6. **Plug-and-Play USB Tethering**: Zero-jitter wired connectivity using standard Android USB tethering for high-reliability environments where Wi-Fi is congested.
7. **Synchronized 48 kHz Stereo Audio**: Use your smartphone as a high-clarity PC wireless microphone with automatic timestamp synchronization.
8. **Hardware-Accelerated Decoding**: High-performance H.264 video decoding powered by FFmpeg with real-time planar rendering.
9. **100% Free PC Plugin**: The PC Plugin is completely free software (freeware, no recurring PC fees).

---

## System Compatibility

| Component | Requirement |
|---|---|
| **Operating System** | Windows 10 (64-bit) / Windows 11 (64-bit) |
| **Compatible Desktop Apps** | Zoom, Microsoft Teams, Google Meet, Discord, OBS Studio, Skype, and DirectShow-compatible apps |
| **Android Client** | Android 8.0 Oreo (API 26) or newer with Camera2 API support |
| **Connectivity** | 5 GHz Wi-Fi or USB connection (Android USB Tethering) |

---

## Network Architecture & Ports

Camzyu operates purely on a peer-to-peer (P2P) local network architecture. Zero video or audio data is ever routed through external servers or cloud services.

| Port | Protocol | Direction | Listening Component | Initiator | Purpose |
|---|---|---|---|---|---|
| **4750** | UDP | Inbound on PC | PC Plugin | Android App | Local subnet device beacon auto-discovery |
| **4747** | TCP | Outbound from PC | Android App | PC Plugin | Control handshake and camera settings |
| **4748** | TCP | Outbound from PC | Android App | PC Plugin | H.264 video media stream |
| **4749** | TCP | Outbound from PC | Android App | PC Plugin | AAC audio media stream |

---

## Downloads & Releases

Official binary downloads are published via [GitHub Releases](https://github.com/ybrdigital/camzyu/releases).

### Latest Stable Release: v1.0.0

| Package | Platform | Architecture | Distribution Link |
|---|---|---|---|
| **Camzyu PC Plugin** | Windows 10 / 11 | x64 (64-bit) | [Camzyu-Windows-v1.0.0-Setup.exe](https://github.com/ybrdigital/camzyu/releases/latest/download/Camzyu-Windows-v1.0.0-Setup.exe) |
| **Android Application** | Android 8.0+ | arm64-v8a / armeabi-v7a | [Google Play Store Listing](https://play.google.com/store/apps/details?id=com.briyoom.camzyu) |

*Local fallback installer binary and metadata are preserved under [`assets/downloads/v1.0.0/`](assets/downloads/v1.0.0/).*

---

## Installation & Quick Start

1. **Install the PC Plugin**: Download and run `Camzyu-Windows-v1.0.0-Setup.exe`.
2. **Install the Android App**: Install **Camzyu** from the Google Play Store on your phone.
3. **Launch Camzyu on PC & Phone**:
   - **Wired USB (Lowest latency)**: Connect phone with a USB cable, enable **USB Tethering** in phone settings, tap **Start Stream** in Camzyu on Android.
   - **Wireless Wi-Fi**: Connect phone and PC to the same 5 GHz Wi-Fi network, tap **Start Stream** in Camzyu on Android.
4. **Select Camera in Any App**: Open Zoom, Microsoft Teams, Google Meet, Discord, or OBS Studio, and select **Camzyu** as your camera and **Camzyu Audio** as your microphone!

For complete step-by-step setup details, see [docs/installation.md](docs/installation.md).

---

## Repository Structure

```
camzyu/
├── index.html                # Official product landing page (GitHub Pages)
├── privacy-policy.html       # Official Privacy Policy
├── terms-of-service.html     # Official Terms of Service
├── LICENSE                   # Camzyu Software End User License Agreement (Freeware EULA)
├── THIRD_PARTY_LICENSES.md   # Third-party notices (FFmpeg, Inno Setup, web libraries)
├── CONTRIBUTING.md           # Maintenance policy & issue reporting guidelines
├── SECURITY.md               # Security vulnerability reporting policy
├── CHANGELOG.md              # Version history and changelog
├── README.md                 # Project documentation (this file)
│
├── assets/
│   ├── downloads/            # Verified release binaries
│   │   └── v1.0.0/           # PC installer binary
│   ├── img/                  # Logos, icons, artwork
│   └── version.json          # Central product and version metadata
│
├── css/
│   └── style.css             # Responsive theme stylesheet
│
├── js/
│   └── main.js               # Dynamic version loader, GitHub API & UI script
│
└── docs/                     # User documentation
    ├── installation.md       # Installation guide & app compatibility
    └── troubleshooting.md    # Diagnostics for connectivity, latency & audio
```

---

## Licensing & Distribution Model

### Free PC Plugin (Freeware, Closed-Source)
The **Camzyu PC Plugin** executable, virtual camera, virtual microphone driver, and installer are distributed as **free proprietary software (freeware)**. You are free to download, install, and use the Software free of charge for personal, creative, streaming, and commercial purposes. The source code is closed-source and owned exclusively by **YBR Digital**.

### Camzyu Android Mobile Application
The **Camzyu Android Mobile Application** distributed through the Google Play Store is a proprietary product of **YBR Digital**.

### Legal Policies
- **PC Plugin**:
  - [Privacy Policy](https://ybrdigital.in/camzyu/privacy-policy)
  - [Terms of Service](https://ybrdigital.in/camzyu/terms-of-service)
- **Android App**:
  - [App Privacy Policy](https://ybrdigital.in/camzyu/privacy-policy?app=1)
  - [App Terms of Service](https://ybrdigital.in/camzyu/terms-of-service?app=1)

---

## Support & Contact

- **Developer / Maintainer**: Yash Rayjada (YBR Digital)
- **Technical Support**: [info@ybrdigital.in](mailto:info@ybrdigital.in)
- **Official Website**: [https://ybrdigital.github.io/camzyu/](https://ybrdigital.github.io/camzyu/)
- **Publisher Portal**: [https://www.ybrdigital.in](https://www.ybrdigital.in)

---

## Third-Party Trademark Disclaimer

Windows, DirectShow, and Microsoft Teams are trademarks of Microsoft Corporation. OBS Studio is a trademark of Wizards of OBS LLC. Zoom is a trademark of Zoom Video Communications, Inc. Google Meet and Android are trademarks of Google LLC. Discord is a trademark of Discord Inc. Camzyu is an independent third-party software product and is not affiliated with, sponsored by, or endorsed by any of these entities.

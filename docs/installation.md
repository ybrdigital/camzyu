# Camybr - Professional Windows Webcam & Microphone Plugin
## Installation & Setup Guide

This guide walks you through installing and configuring the **Camybr Windows Plugin** on Windows 10/11 and connecting it to your Android device running Camybr over Wi-Fi or USB tethering.

---

## 1. System Requirements

### Windows PC
- **Operating System**: Windows 10 or Windows 11 (64-bit)
- **Supported Applications**: Zoom, Microsoft Teams, Google Meet, Discord, OBS Studio, Skype, or any DirectShow-compatible desktop application
- **Network Interfaces**: Local Wi-Fi (5 GHz strongly recommended) or USB connection (Android USB tethering)

### Android Device
- **Operating System**: Android 8.0 Oreo (API Level 26) or newer (Android 10+ recommended)
- **Hardware**: Camera with Camera2 API / HAL3 support
- **Application**: [Camybr on Google Play Store](https://play.google.com/store/apps/details?id=com.briyoom.camybr)

---

## 2. Installation Options

### Option A: Windows Setup Installer (Recommended)

1. **Download the Official Installer**:
   Download `Camybr-Windows-v1.0.0-Setup.exe` from the official [Releases page](https://github.com/ybrdigital/camybr/releases) or the [official website](https://ybrdigital.github.io/camybr/).

2. **Run the Installer**:
   Double-click `Camybr-Windows-v1.0.0-Setup.exe` and follow the prompts. The installer will:
   - Install `mobcam-app.exe` desktop companion into `C:\Program Files\Camybr\`.
   - Register the DirectShow Virtual Camera driver (`mobcam-vcam.dll`) as **Camybr**.
   - Register the DirectShow Virtual Microphone driver as **Camybr Audio**.
   - Copy high-performance FFmpeg decoders.
   - Place a desktop shortcut and register a clean uninstaller in Windows Settings.

3. **Launch Camybr on Windows**:
   Launch Camybr from your desktop shortcut or Start Menu. The app will minimize to the system tray and begin listening for connections.

---

## 3. Connecting Your Android Phone

### Option A: Wired USB Mode (Recommended for Zero Latency)
1. Connect your Android phone to your PC via a USB cable.
2. On your phone, go to **Settings &rarr; Network & internet &rarr; Hotspot & tethering** and turn ON **USB tethering**.
3. Open the **Camybr** app on your phone and tap **Start Streaming**.
4. The PC desktop app will immediately detect the phone over USB and connect.

### Option B: High-Speed Wi-Fi Mode
1. Ensure both your PC and Android phone are connected to the same Wi-Fi network (5 GHz strongly recommended).
2. Open the **Camybr** app on your phone and tap **Start Streaming**.
3. The PC desktop app automatically discovers the phone via UDP beacon and begins streaming.

---

## 4. Selecting Camybr in Video Software

Once connected, open any video app on your PC:
- **Zoom**: Go to *Settings &rarr; Video &rarr; Camera*, select **Camybr**. For audio, select **Camybr Audio** under *Microphone*.
- **Google Meet**: Click the three dots *&rarr; Settings &rarr; Video*, select **Camybr**. Under *Audio*, select **Camybr Audio**.
- **Microsoft Teams**: Go to *Settings &rarr; Devices &rarr; Camera*, select **Camybr**.
- **OBS Studio**: Under *Sources*, click **+** &rarr; **Video Capture Device**, select **Camybr**. Under *Audio Input Capture*, select **Camybr Audio**.
- **Discord**: Go to *User Settings &rarr; Voice & Video &rarr; Video Settings*, select **Camybr**.

---

## 5. Support & Legal Policies

- **Privacy Policy**: [https://ybrdigital.in/camybr/privacy-policy](https://ybrdigital.in/camybr/privacy-policy)
- **Terms of Service**: [https://ybrdigital.in/camybr/terms-of-service](https://ybrdigital.in/camybr/terms-of-service)
- **Technical Support**: [info@ybrdigital.in](mailto:info@ybrdigital.in)

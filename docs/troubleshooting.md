# Camzyu - PC Plugin
## Troubleshooting & Diagnostics Guide

This guide covers common issues, diagnostic procedures, firewall configuration, and performance optimization when using Camzyu with desktop applications (Zoom, Teams, Meet, Discord, OBS Studio).

---

## 1. Camzyu Camera or Microphone is Not Appearing in Video Apps

### Symptoms
In Zoom, Teams, Meet, or Discord settings, **Camzyu** or **Camzyu Audio** is not listed in the camera or microphone dropdown.

### Solutions
1. **Verify PC Plugin Installation**:
   Ensure the Camzyu PC Plugin was installed using administrator privileges. The installer registers the DirectShow virtual camera filter in the Windows registry.
2. **Re-register the DirectShow Filters**:
   Open PowerShell as Administrator and run:
   ```powershell
   regsvr32.exe /s "C:\Program Files\Camzyu\mobcam-vcam.dll"
   ```
3. **Restart the Video Application**:
   Some applications (like Zoom or OBS) enumerate cameras only upon startup. Close and relaunch the app.

---

## 2. Standby Screen ("Waiting for connection...")

### Symptoms
The camera feed shows the dark standby card with "Camzyu" and "Waiting for phone connection...".

### Solutions
1. **Ensure Mobile Stream is Active**:
   Open the **Camzyu** app on Android and confirm **Start Streaming** is active (the live camera viewfinder is visible).
2. **Wi-Fi Subnet & AP Isolation**:
   - Both phone and PC must be on the same local network subnet.
   - Some routers enable **AP Isolation** on guest Wi-Fi networks, which prevents devices from discovering each other. Disable AP Isolation or use your primary 5 GHz network.
3. **Switch to Wired USB Tethering**:
   Connect the phone via USB cable and enable **USB Tethering** in phone settings. USB tethering provides instant, jitter-free zero-latency connection.

---

## 3. Firewall Configuration

Windows Defender Firewall may prompt to allow network connections on the first run. To manually configure firewall rules via PowerShell (Run as Administrator):

```powershell
# Allow incoming UDP discovery beacons on port 4750
New-NetFirewallRule -DisplayName "Camzyu PC Plugin - UDP Discovery" -Direction Inbound -LocalPort 4750 -Protocol UDP -Action Allow

# Allow outbound TCP media streaming & controls
New-NetFirewallRule -DisplayName "Camzyu PC Plugin - TCP Media & Control" -Direction Outbound -RemotePort 4747,4748,4749 -Protocol TCP -Action Allow
```

---

## 4. Legal Policies & Support

- **Privacy Policy**: [https://ybrdigital.in/camzyu/privacy-policy](https://ybrdigital.in/camzyu/privacy-policy)
- **Terms of Service**: [https://ybrdigital.in/camzyu/terms-of-service](https://ybrdigital.in/camzyu/terms-of-service)
- **Technical Support**: [info@ybrdigital.in](mailto:info@ybrdigital.in)

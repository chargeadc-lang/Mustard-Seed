# Mustard Seed — Minimal Expo Project (AAB-ready)

Minimal Expo project to generate an **Android App Bundle (.aab)** with EAS.

## Quick Start

1. Install tools (once):
```bash
npm i -g expo-cli eas-cli
```

2. Install deps:
```bash
cd mustard-seed-minimal
npm install
```

3. Configure EAS (first time only):
```bash
eas login
eas build:configure   # choose Android; let EAS manage keystore
```

4. Build the AAB:
```bash
eas build --platform android --profile production
```

5. Download the **.aab** from the EAS link.

## Notes
- Package name: **com.mustardseed.app** (permanent once published).
- Bump `expo.version` and `android.versionCode` for every update.
- Placeholder icons/splash in `/assets` — replace later.
- `"permissions": []` until features need them.

Generated 2025-09-30.

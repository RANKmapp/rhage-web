# PLAISense RHAGE · web demo

Play it: https://rankmapp.github.io/rhage-web/

Works on iPhone, Android and laptop. Turn your phone sideways.

## This build: local-first (no server)

Answers are stored on the device only (browser storage). Testers can export
their answers as JSON + CSV from the privacy screen (Menu → Privacy →
Export my answers) and delete everything at any time.

## Android app (sideload APK)

- Download `RHAGE.apk` from this repo (or the latest build artifact in
  GitHub Actions → "Android APK") and install it on the phone.
- Rebuild from source: push to `main`/`mobile-local-v2` (CI builds it), or
  locally: `cd app && npm ci && npm run sync && cd android && gradlew assembleDebug`.
- The native shell is Capacitor (`app/`); the web app at the repo root is the
  single source of truth — `app/scripts/sync-www.mjs` copies it into the shell.

## iOS

- Today: open in Safari → Share → Add to Home Screen (full-screen PWA).
- Native: `app/ios` is scaffolded (landscape-only, fullscreen). Building an
  installable app needs macOS + Xcode and, for TestFlight, an Apple Developer
  membership.

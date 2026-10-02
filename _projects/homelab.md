---
layout: page
title: Self-Hosted Infrastructure
description: A zero-trust home server running my digital life — self-hosted, privacy-first, and built to be understood end to end.
img: assets/img/homelab.png
importance: 1
category: systems
---

What began as a Raspberry Pi has grown into a full home server running a
fleet of containerised services on Proxmox — file sync, media, password
management, monitoring, a private Git host, and more — all self-hosted,
nothing rented.

The focus isn't the service list, it's the network underneath it. Everything
sits behind a **zero-trust mesh**: services are reachable only over a private
WireGuard-based overlay, never exposed to the public internet, with internal
TLS and split-horizon DNS resolving a private domain. When the university
network began filtering the commercial mesh provider, I migrated the whole
fleet onto a **self-hosted control plane** on a hardened VPS, keeping the home
network entirely closed — zero inbound, the home IP off public DNS.

DNS resolves through a **self-hosted recursive resolver** with DNSSEC
validation rather than forwarding to any third party, matching the
privacy-first posture of the rest of the stack. Backups follow a 3-2-1
structure across mirrored ZFS pools with scripted, verified snapshots.
Authentication across the fleet is hardware-backed with FIDO2 security keys.

The whole thing is an exercise in doing it *properly* — understanding each
layer rather than running a one-click install. It's where the networking,
security, and systems side of my interests gets tested against reality.

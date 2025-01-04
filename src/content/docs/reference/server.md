---
title: Example Docker Server
description: Example Minenkolonien server using itzg/minecraft-server docker image.
---

## compose.yml

```yaml
services:
  mc:
    restart: unless-stopped
    image: itzg/minecraft-server
    tty: true
    stdin_open: true
    ports:
      - "25565:25565"
    env_file: ".env"
    environment:
      MOTD: "Official Server"
      SERVER_NAME: "Minenkolonien"
      INIT_MEMORY: 2G
      MAX_MEMORY: 8G
      MODPACK_PLATFORM: AUTO_CURSEFORGE
      EULA: "TRUE"
      ICON: "https://media.forgecdn.net/avatars/thumbnails/1147/694/64/64/638714469411914405.png"
      CF_API_KEY: "${CF_API_KEY}"
      CF_PAGE_URL: "https://www.curseforge.com/minecraft/modpacks/minenkolonien"
      OPS: |
        soudasuwa
      CF_EXCLUDE_MODS: |
        yungs-menu-tweaks
      CF_FORCE_INCLUDE_MODS: |
        iceberg
    volumes:
      - ./data:/data
```

## Further reading

- [Docker Compose](https://docs.docker.com/compose/)
- [Minecraft Server on Docker (Java Edition)](https://docker-minecraft-server.readthedocs.io/en/latest/)

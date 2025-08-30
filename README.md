# openGrid-docs

Welcome to the documentation hub for **openGrid** — a general-purpose, open-source wall and desk mounting framework and ecosystem. This project is designed to make organizing your space (workshop, desk, living room, or maker area) easy, visually clean, and highly modular.

[Project Homepage](https://www.opengrid.world/)

---

## What is openGrid?

**openGrid** is a living-room compatible mounting system built around a 28mm grid, fully compatible with **Gridfinity**, **Multiboard**, **HSW**, **GOEWS**, and standard metric screws. It provides a modern, minimalistic aesthetic, supporting both robust tool wall setups and elegant cable management solutions.

- **Ease of Use**: Simple to assemble and adapt to your needs.
- **Visual Simplicity**: Clean lines, minimal style, and clutter-free looks.
- **Modular Extensibility**: Add, swap, or remix components easily.
- **Open Ecosystem**: All modeling and source files available for remixing and extension.

Whether you're a designer, maker, or hobbyist, openGrid is built to grow with your needs. Contributions and feedback are always welcome!

---

## Project Goals

- **Living room compatibility**: Looks great in any space.
- **Minimal parts**: Easy to explain, print, and assemble.
- **Material efficiency**: Uses less filament than comparable systems.
- **Compatibility**: Works with Gridfinity and other common solutions.
- **Open Design**: Licensed under [CC-BY 4.0](http://creativecommons.org/licenses/by/4.0/) — remix and share!

---

## Common Use Cases

- Tool wall organization
- Under-desk cable routing (with Underware)
- 3D printer accessory mounting
- Modular workbench systems
- Custom connector and snap experiments

---

## Why Choose openGrid?

- **Modular**: Combine and stack components as needed
- **Customizable**: Designed in OpenSCAD for parametric flexibility
- **Print-ready**: Optimized for desktop 3D printers, including Bambu AMS support
- **Blends in**: Modern, minimal style made to fit anywhere

---

## Getting Started

- **[Quickstart Guide](src/content/docs/guides/quickstart/)**: Dive in and start printing and assembling openGrid components.
- **[Full Guides](src/content/docs/guides/)**: Learn about boards, snaps, modeling your own parts, and more.

---

## Project Structure

Your openGrid-docs project is organized as follows:

```
.
├── public/                   # Static assets
├── src/
│   ├── assets/               # Images and media
│   ├── content/
│   │   └── docs/             # Documentation (.md, .mdx)
│   └── content.config.ts     # Content configuration
├── astro.config.mjs          # Astro site configuration
├── package.json              # Project metadata and scripts
└── tsconfig.json             # TypeScript config
```

- Documentation lives in `src/content/docs/`.
- Images/assets go in `src/assets/`.
- Static assets (favicons, etc.) go in `public/`.

---

## Contributing

- All modeling and source files are provided for remixing and extending the system.
- Please follow the openGrid design goals when creating new models.
- Contributions, bug reports, and feedback are welcome!

---

## License

Content is released under the [Creative Commons Attribution 4.0 License (CC-BY 4.0)](http://creativecommons.org/licenses/by/4.0/).

---

## Useful Links

- [openGrid on Printables](https://www.printables.com/model/1214361-opengrid-walldesk-mounting-framework-and-ecosystem)
- [openGrid on MakerWorld](https://makerworld.com/en/models/1179191-opengrid-wall-desk-mounting-framework-ecosystem)
- [Underware Cable Management](https://www.printables.com/model/1214427-underware-for-opengrid-manage-your-cables-lite-ly)
- [openGrid Tile Generator](https://gridfinity.perplexinglabs.com/pr/opengrid/0/0)

---

Have fun printing and using openGrid!

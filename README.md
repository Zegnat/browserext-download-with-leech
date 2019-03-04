# ![](logo/leech-64.png) Download with Leech

A Proof-of-Concept [Browser Extension][] for queueing downloads in the
[Leech][] download manager from a website.

**⚠️ Warning:** Because of this project’s PoC status, no attention has been
paid to security. The native proxy is most likely subject to RCEs.

## Installation

```
{{stub}}
```

## Differences from spec

The extension was created with [the Browser Extensions specification][spec] in
mind. It turns out this is very hard to do while also supporting real
life browsers.

```
{{stub}}
```

Any other differences should be reported and either documented here or fixed
as bugs.

## Code Style

This extension follows the [JavaScript Standard Style][]. I apologise if you
love semicolons. Make sure to run it under the WebExtensions environment:

```
standard --env webextensions
```

## Licenses

* The official Leech logo is (probably) © Many Tricks and is used as a
  temporary placeholder graphic until the extension is finished.

* Everything else is © 2019 Martijn van der Ven. Possible open-source
  release pending.

[Browser Extension]: https://browserext.github.io/
[Leech]: https://manytricks.com/leech/
[spec]: https://browserext.github.io/browserext/
[JavaScript Standard Style]: https://standardjs.com/

---
title: Mapbox
---

# Mapbox

## Introduction

Mapbox GL JS is a JavaScript library for vector maps on the Web. Its performance, real-time styling,
and interactivity features set the bar for anyone building fast, immersive maps on the web.

## Installation

In order to use the Mapbox GL JS, you need to create a Mapbox access token. Read more about it
[here](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/)

## Configuration

Open `.env` file (or create) in the project's root folder and set the
variable `NEXT_PUBLIC_MAPBOX_API_KEY` with the access token ID provided by Mapbox platform.

```shell
NEXT_PUBLIC_MAPBOX_API_KEY=access_token
```

If you do not want to set up environment variables, settings can be applied simply on
the `mapboxConfig` object found in the `src/config.js` file.

```js
export const mapboxConfig = {
  apiKey: process.env.NEXT_PUBLIC_MAPBOX_API_KEY
};
```

## Usage

```jsx
// src/pages/index.js
import { mapboxConfig } from '../config';

const API_KEY = mapboxConfig.apiKey;

const Page = () => {
    
  return (
    <div>
      <Map
        attributionControl={false}
        initialViewState={viewState}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxAccessToken={API_KEY}
        maxZoom={20}
        minZoom={11}
      />
    </div>
  );
};
```

## Removing Mapbox support

If you do not need to support Mapbox, you can remove it by following the next steps.

1. Uninstall the `mapbox-gl` and`react-map-gl` dependencies.

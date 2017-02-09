# svg-path-loader

Webpack loader to get the first path in an SVG file.

## Install

```bash
npm i svg-path-loader
```

## Usage

```jsx
// Without a webpack loader config
import path1 from './image1.svg';

// With a webpack loader config
import path2 from './image2.svg';

// Construct your SVG
export default function Icon() {
  return (
    <svg height={16} width={16} viewBox="0 0 16 16">
      <path d={path1} />
    </svg>
  );
}
```

## Webpack loader config

```js
{
  test: /\.svg$/,
  loader: 'svg-path-loader',
}
```

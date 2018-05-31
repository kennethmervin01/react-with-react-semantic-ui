# react-with-semantic-ui
React with Semantic UI using Webpack 4.

## Installation

### Clone the repo
```bash
 git clone https://github.com/kennethmervin01/react-with-react-semantic-ui.git
```
### Install Dependencies

```bash
 yarn install
```

### Test
In your root directory of your app, run the server script(app will run in webpack-dev-server)

```bash
 yarn server
```
Then visit http://localhost:3000.


### Finally Check index.js in src folder to see how it works.
index.js

```jsx
import React from 'react'
import { render } from 'react-dom'
import { Segment, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const SegmentExampleSegment = () => (
  <Segment>
    Pellentesque habitant morbi tristique senectus.
  </Segment>
)


render(<SegmentExampleSegment />, document.getElementById('root'))

```

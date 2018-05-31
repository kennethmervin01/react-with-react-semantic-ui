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

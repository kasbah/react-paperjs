// @flow
import React from 'react';
import typeof { PaperScope as Paper, Path, Segment } from 'paper';

import type { ToolEventHandler } from '../../../Paper.container';

type PathEventHandler = (path: Path) => any
type SegmentEventHandler = (segment: Segment | Segment[]) => any;

type Props = {
  paper: Paper,
  onMouseDown: ToolEventHandler,
  onMouseDrag: ToolEventHandler,
  onMouseUp: ToolEventHandler,
  onPathInit: PathEventHandler,
  onPathAdd: PathEventHandler,
  onSegmentAdd: SegmentEventHandler,
  onSegmentRemove: SegmentEventHandler
};

export default class PathTool<P> extends React.Component<P & Props> {
  static defaultProps = {
    onMouseDown: () => {},
    onMouseDrag: () => {},
    onMouseUp: () => {},
    onPathInit: () => {},
    onPathAdd: () => {},
    onSegmentAdd: () => {},
    onSegmentRemove: () => {},
  }

  path: Path
}

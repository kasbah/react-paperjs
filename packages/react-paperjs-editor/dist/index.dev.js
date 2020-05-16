'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactPaperJS = require('@psychobolt/react-paperjs');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var PathTool =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PathTool, _React$Component);

  function PathTool() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PathTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PathTool)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.path = void 0;
    return _this;
  }

  return PathTool;
}(React.Component);

PathTool.defaultProps = {
  onKeyDown: function onKeyDown() {},
  onKeyUp: function onKeyUp() {},
  onMouseDown: function onMouseDown() {},
  onMouseDrag: function onMouseDrag() {},
  onMouseUp: function onMouseUp() {},
  onPathInit: function onPathInit() {},
  onPathAdd: function onPathAdd() {},
  onSegmentAdd: function onSegmentAdd() {},
  onSegmentRemove: function onSegmentRemove() {}
};

var _class, _class2, _temp;
var Tool = ReactPaperJS.Tool,
    PaperScope = ReactPaperJS.PaperScope;
var MOUSE_LEFT_CODE = 0; // $FlowFixMe

var FreeformPathTool = PaperScope(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PathTool) {
  _inherits(FreeformPathTool, _PathTool);

  function FreeformPathTool() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FreeformPathTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FreeformPathTool)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onMouseDown = function (toolEvent) {
      var _this$props = _this.props,
          pathProps = _this$props.pathProps,
          onMouseDown = _this$props.onMouseDown,
          onPathInit = _this$props.onPathInit,
          paper = _this$props.paper;

      if (toolEvent.event.button === MOUSE_LEFT_CODE) {
        var path = new paper.Path(pathProps);
        _this.path = path;
        onPathInit(path);
      }

      onMouseDown(toolEvent);
    };

    _this.onMouseDrag = function (toolEvent) {
      var onMouseDrag = _this.props.onMouseDrag;

      if (toolEvent.event.buttons === 1) {
        _this.path.add(toolEvent.point);
      }

      onMouseDrag(toolEvent);
    };

    _this.onMouseUp = function (toolEvent) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          path = _assertThisInitialize.path;

      var _this$props2 = _this.props,
          onMouseUp = _this$props2.onMouseUp,
          onPathAdd = _this$props2.onPathAdd;

      if (path) {
        onPathAdd(path);
        _this.path = null;
      }

      onMouseUp(toolEvent);
    };

    return _this;
  }

  _createClass(FreeformPathTool, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          pathProps = _this$props3.pathProps,
          onMouseDown = _this$props3.onMouseDown,
          onMouseDrag = _this$props3.onMouseDrag,
          onMouseUp = _this$props3.onMouseUp,
          onPathAdd = _this$props3.onPathAdd,
          paper = _this$props3.paper,
          innerRef = _this$props3.innerRef,
          rest = _objectWithoutProperties(_this$props3, ["pathProps", "onMouseDown", "onMouseDrag", "onMouseUp", "onPathAdd", "paper", "innerRef"]);

      return React.createElement(Tool, _extends({
        ref: innerRef,
        minDistance: 10,
        onMouseDown: this.onMouseDown,
        onMouseDrag: this.onMouseDrag,
        onMouseUp: this.onMouseUp
      }, rest));
    }
  }]);

  return FreeformPathTool;
}(PathTool), _class2.defaultProps = _objectSpread({}, PathTool.defaultProps, {
  pathProps: {
    strokeColor: 'black'
  }
}), _temp)) || _class;

var FreeformPathTool_component = React.forwardRef(function (props, ref) {
  return React.createElement(FreeformPathTool, _extends({
    innerRef: ref
  }, props));
});

var Layer = ReactPaperJS.Layer,
    Group = ReactPaperJS.Group,
    Line = ReactPaperJS.Line;

var Grid = function Grid(_ref) {
  var width = _ref.width,
      height = _ref.height,
      _ref$top = _ref.top,
      top = _ref$top === void 0 ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? 0 : _ref$left,
      _ref$right = _ref.right,
      right = _ref$right === void 0 ? left + width : _ref$right,
      _ref$bottom = _ref.bottom,
      bottom = _ref$bottom === void 0 ? top + height : _ref$bottom,
      _ref$cellSize = _ref.cellSize,
      cellSize = _ref$cellSize === void 0 ? 50 : _ref$cellSize,
      _ref$strokeColor = _ref.strokeColor,
      strokeColor = _ref$strokeColor === void 0 ? '#D0D0D0' : _ref$strokeColor,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 1 : _ref$strokeWidth,
      innerRef = _ref.innerRef;
  var x = Math.ceil(left / cellSize) * cellSize;
  var y = Math.ceil(top / cellSize) * cellSize;
  var cols = Math.ceil((right - left) / cellSize);
  var rows = Math.ceil((bottom - top) / cellSize);
  var verticalLines = [];
  var horizontalLines = [];

  for (var i = 0; i <= cols; i += 1) {
    var position = x + i * cellSize;
    verticalLines.push(React.createElement(Line, {
      key: i,
      from: [position, top],
      to: [position, bottom],
      strokeColor: strokeColor,
      strokeWidth: strokeWidth
    }));
  }

  for (var _i = 0; _i <= rows; _i += 1) {
    var _position = y + _i * cellSize;

    horizontalLines.push(React.createElement(Line, {
      key: _i,
      from: [left, _position],
      to: [right, _position],
      strokeColor: strokeColor,
      strokeWidth: strokeWidth
    }));
  }

  return React.createElement(Layer, {
    ref: innerRef
  }, React.createElement(Group, null, verticalLines), React.createElement(Group, null, horizontalLines));
};

var Grid_component = React.forwardRef(function (props, ref) {
  return React.createElement(Grid, _extends({
    innerRef: ref
  }, props));
});

var _class$1, _class2$1, _temp$1;
var Tool$1 = ReactPaperJS.Tool,
    PaperScope$1 = ReactPaperJS.PaperScope;
var MOUSE_LEFT_CODE$1 = 0; // $FlowFixMe

var LineTool = PaperScope$1(_class$1 = (_temp$1 = _class2$1 =
/*#__PURE__*/
function (_PathTool) {
  _inherits(LineTool, _PathTool);

  function LineTool() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LineTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LineTool)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onMouseDown = function (toolEvent) {
      var _this$props = _this.props,
          pathProps = _this$props.pathProps,
          onMouseDown = _this$props.onMouseDown,
          onPathInit = _this$props.onPathInit,
          paper = _this$props.paper;

      if (toolEvent.event.button === MOUSE_LEFT_CODE$1) {
        var path = new paper.Path(pathProps);
        path.add(toolEvent.point);
        _this.path = path;
        onPathInit(path);
      }

      onMouseDown(toolEvent);
    };

    _this.onMouseDrag = function (toolEvent) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          path = _assertThisInitialize.path;

      var onMouseDrag = _this.props.onMouseDrag;

      if (toolEvent.event.buttons === 1) {
        path.removeSegment(1);
        path.addSegment(toolEvent.point);
        path.selected = true;
      }

      onMouseDrag(toolEvent);
    };

    _this.onMouseUp = function (toolEvent) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          path = _assertThisInitialize2.path;

      var _this$props2 = _this.props,
          onMouseUp = _this$props2.onMouseUp,
          onPathAdd = _this$props2.onPathAdd;

      if (path) {
        path.selected = false;
        onPathAdd(path);
        _this.path = null;
      }

      onMouseUp(toolEvent);
    };

    return _this;
  }

  _createClass(LineTool, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          pathProps = _this$props3.pathProps,
          onMouseDown = _this$props3.onMouseDown,
          onMouseDrag = _this$props3.onMouseDrag,
          onMouseUp = _this$props3.onMouseUp,
          onPathAdd = _this$props3.onPathAdd,
          innerRef = _this$props3.innerRef,
          rest = _objectWithoutProperties(_this$props3, ["pathProps", "onMouseDown", "onMouseDrag", "onMouseUp", "onPathAdd", "innerRef"]);

      return React.createElement(Tool$1, _extends({
        ref: innerRef,
        onMouseDown: this.onMouseDown,
        onMouseDrag: this.onMouseDrag,
        onMouseUp: this.onMouseUp
      }, rest));
    }
  }]);

  return LineTool;
}(PathTool), _class2$1.defaultProps = _objectSpread({}, PathTool.defaultProps, {
  pathProps: {
    strokeColor: 'black'
  }
}), _temp$1)) || _class$1;

var LineTool_component = React.forwardRef(function (props, ref) {
  return React.createElement(LineTool, _extends({
    innerRef: ref
  }, props));
});

var _class$2, _class2$2, _temp$2;
var Tool$2 = ReactPaperJS.Tool,
    PaperScope$2 = ReactPaperJS.PaperScope;
var MOUSE_LEFT_CODE$2 = 0; // $FlowFixMe

var PolygonTool = PaperScope$2(_class$2 = (_temp$2 = _class2$2 =
/*#__PURE__*/
function (_PathTool) {
  _inherits(PolygonTool, _PathTool);

  function PolygonTool() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PolygonTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PolygonTool)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onMouseDown = function (toolEvent) {
      if (toolEvent.event.button === MOUSE_LEFT_CODE$2) {
        var _assertThisInitialize = _assertThisInitialized(_this),
            path = _assertThisInitialize.path;

        if (!path) {
          _this.pathInit();

          _this.props.onPathInit(path);
        }

        if (_this.selectedSegment == null) {
          _this.onSegmentAdd(toolEvent);
        } else {
          _this.onPathAdd();
        }
      }

      _this.props.onMouseDown(toolEvent);
    };

    _this.points = void 0;
    _this.selectedSegment = void 0;
    return _this;
  }

  _createClass(PolygonTool, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var path = this.path,
          points = this.points,
          props = this.props;
      var pathProps = props.pathProps,
          pathData = props.pathData;

      if (path) {
        this.setPathData(pathData);
        Object.assign(path, pathProps);
      } else if (points) {
        this.pathInit();
      }
    }
  }, {
    key: "pathInit",
    value: function pathInit() {
      var _this$props = this.props,
          pathProps = _this$props.pathProps,
          pathData = _this$props.pathData,
          paper = _this$props.paper;
      var Path = paper.Path;
      var path = new Path(pathProps);
      this.path = path;
      this.setPathData(pathData);
    }
  }, {
    key: "setPathData",
    value: function setPathData(pathData) {
      var _this2 = this;

      var path = this.path;
      this.removeBounds();
      path.pathData = pathData;
      path.segments.forEach(function (segment) {
        return _this2.createBounds(segment);
      });
    }
  }, {
    key: "onSegmentAdd",
    value: function onSegmentAdd(toolEvent) {
      var path = this.path;
      path.add(toolEvent.point);
      var segment = path.lastSegment;
      this.createBounds(segment);
      this.props.onSegmentAdd(segment, path);
    }
  }, {
    key: "onPathAdd",
    value: function onPathAdd() {
      var selectedSegment = this.selectedSegment,
          path = this.path,
          points = this.points;
      var _this$props2 = this.props,
          onSegmentRemove = _this$props2.onSegmentRemove,
          onPathAdd = _this$props2.onPathAdd;
      var index = selectedSegment.index;
      var segments = path.removeSegments(0, index);

      if (segments.length) {
        onSegmentRemove(segments, path);
      }

      path.closed = true;
      path.selected = false;
      onPathAdd(path);
      this.path = null;
      this.selectedSegment = null;

      if (points) {
        points.remove();
      }
    }
  }, {
    key: "createBounds",
    value: function createBounds(segment) {
      var _this3 = this;

      var paper = this.props.paper;
      var Path = paper.Path,
          Group = paper.Group,
          project = paper.project;
      var path = this.path,
          points = this.points;

      if (!points) {
        this.points = new Group();
        project.layers.$$metadata.addChild(this.points);
      }

      var bounds = new Path.Circle({
        center: segment.point,
        radius: 7,
        fillColor: 'white',
        opacity: 0
      });
      bounds.on('mousedown', function () {
        if (!path.closed && !path.lastSegment.point.equals(bounds.position) && path.contains(bounds.position)) {
          _this3.selectedSegment = segment;
        }
      });
      this.points.addChild(bounds);
    }
  }, {
    key: "removeBounds",
    value: function removeBounds() {
      if (this.points) {
        this.points.remove();
        this.points = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          pathProps = _this$props3.pathProps,
          onMouseDown = _this$props3.onMouseDown,
          onPathAdd = _this$props3.onPathAdd,
          onSegmentAdd = _this$props3.onSegmentAdd,
          onSegmentRemove = _this$props3.onSegmentRemove,
          paper = _this$props3.paper,
          innerRef = _this$props3.innerRef,
          rest = _objectWithoutProperties(_this$props3, ["pathProps", "onMouseDown", "onPathAdd", "onSegmentAdd", "onSegmentRemove", "paper", "innerRef"]);

      return React.createElement(Tool$2, _extends({
        ref: innerRef,
        onMouseDown: this.onMouseDown
      }, rest));
    }
  }]);

  return PolygonTool;
}(PathTool), _class2$2.defaultProps = _objectSpread({}, PathTool.defaultProps, {
  pathProps: {
    strokeColor: 'black',
    selected: true
  }
}), _temp$2)) || _class$2;

var PolygonTool_component = React.forwardRef(function (props, ref) {
  return React.createElement(PolygonTool, _extends({
    innerRef: ref
  }, props));
});

var _class$3, _class2$3, _temp$3;
var Tool$3 = ReactPaperJS.Tool,
    PaperScope$3 = ReactPaperJS.PaperScope;
var MOUSE_LEFT_CODE$3 = 0; // $FlowFixMe

var RectangleTool = PaperScope$3(_class$3 = (_temp$3 = _class2$3 =
/*#__PURE__*/
function (_PathTool) {
  _inherits(RectangleTool, _PathTool);

  function RectangleTool() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RectangleTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RectangleTool)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onMouseDown = function (toolEvent) {
      var _this$props = _this.props,
          pathProps = _this$props.pathProps,
          onMouseDown = _this$props.onMouseDown,
          onPathInit = _this$props.onPathInit,
          paper = _this$props.paper;

      if (toolEvent.event.button === MOUSE_LEFT_CODE$3) {
        var Path = paper.Path,
            Color = paper.Color;
        var start = toolEvent.point;
        var path = new Path.Rectangle({
          point: start,
          size: [1, 1],
          fillColor: pathProps.selectedFillColor || new Color(0.9, 0.9, 1, 0.75),
          selected: true
        });
        _this.path = path;
        _this.start = start;
        onPathInit(path);
      }

      onMouseDown(toolEvent);
    };

    _this.onMouseDrag = function (toolEvent) {
      var onMouseDrag = _this.props.onMouseDrag;

      if (toolEvent.event.buttons === 1) {
        var _assertThisInitialize = _assertThisInitialized(_this),
            path = _assertThisInitialize.path,
            start = _assertThisInitialize.start;

        var bounds = path.bounds;
        var offset = toolEvent.point.subtract(start);
        var width = Math.abs(offset.x);
        var height = Math.abs(offset.y);

        if (offset.x < 0) {
          bounds.left = toolEvent.point.x;
          bounds.right = start.x;
        } else {
          bounds.left = start.x;
        }

        if (offset.y > 0) {
          bounds.top = start.y;
          bounds.bottom = toolEvent.point.y;
        } else {
          bounds.top = toolEvent.point.y;
        }

        if (width > 0) {
          bounds.width = width;
        }

        if (height > 0) {
          bounds.height = height;
        }
      }

      onMouseDrag(toolEvent);
    };

    _this.onMouseUp = function (event) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          path = _assertThisInitialize2.path;

      var _this$props2 = _this.props,
          pathProps = _this$props2.pathProps,
          onMouseUp = _this$props2.onMouseUp,
          onPathAdd = _this$props2.onPathAdd;

      if (path) {
        Object.assign(path, _objectSpread({
          selected: false
        }, pathProps));
        onPathAdd(path);
        _this.path = null;
        _this.start = null;
      }

      onMouseUp(event);
    };

    _this.start = void 0;
    return _this;
  }

  _createClass(RectangleTool, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          innerRef = _this$props3.innerRef,
          rest = _objectWithoutProperties(_this$props3, ["innerRef"]);

      return React.createElement(Tool$3, _extends({}, rest, {
        ref: innerRef,
        onMouseDown: this.onMouseDown,
        onMouseDrag: this.onMouseDrag,
        onMouseUp: this.onMouseUp
      }));
    }
  }]);

  return RectangleTool;
}(PathTool), _class2$3.defaultProps = _objectSpread({}, PathTool.defaultProps, {
  pathProps: {
    fillColor: 'white',
    strokeColor: 'black'
  }
}), _temp$3)) || _class$3;

var RectangleTool_component = React.forwardRef(function (props, ref) {
  return React.createElement(RectangleTool, _extends({
    innerRef: ref
  }, props));
});

var _class$4, _class2$4, _temp$4;
var Tool$4 = ReactPaperJS.Tool,
    PaperScope$4 = ReactPaperJS.PaperScope;
var MOUSE_LEFT_CODE$4 = 0; // $FlowFixMe

var CircleTool = PaperScope$4(_class$4 = (_temp$4 = _class2$4 =
/*#__PURE__*/
function (_PathTool) {
  _inherits(CircleTool, _PathTool);

  function CircleTool() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CircleTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CircleTool)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onMouseDown = function (toolEvent) {
      var _this$props = _this.props,
          pathProps = _this$props.pathProps,
          onMouseDown = _this$props.onMouseDown,
          onPathInit = _this$props.onPathInit,
          paper = _this$props.paper;

      if (toolEvent.event.button === MOUSE_LEFT_CODE$4) {
        var Path = paper.Path,
            Color = paper.Color;
        var path = new Path.Circle({
          center: toolEvent.point,
          radius: 1,
          fillColor: pathProps.selectedFillColor || new Color(0.9, 0.9, 1, 0.75),
          selected: true
        });
        _this.path = path;
        onPathInit(path);
      }

      onMouseDown(toolEvent);
    };

    _this.onMouseDrag = function (toolEvent) {
      var onMouseDrag = _this.props.onMouseDrag;

      if (toolEvent.event.buttons === 1) {
        var _assertThisInitialize = _assertThisInitialized(_this),
            path = _assertThisInitialize.path;

        path.scale(toolEvent.point.getDistance(path.position) / (path.bounds.width / 2));
      }

      onMouseDrag(toolEvent);
    };

    _this.onMouseUp = function (event) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          path = _assertThisInitialize2.path;

      var _this$props2 = _this.props,
          pathProps = _this$props2.pathProps,
          onMouseUp = _this$props2.onMouseUp,
          onPathAdd = _this$props2.onPathAdd;

      if (path) {
        Object.assign(path, _objectSpread({
          selected: false
        }, pathProps));
        onPathAdd(path);
        _this.path = null;
      }

      onMouseUp(event);
    };

    return _this;
  }

  _createClass(CircleTool, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          innerRef = _this$props3.innerRef,
          rest = _objectWithoutProperties(_this$props3, ["innerRef"]);

      return React.createElement(Tool$4, _extends({
        ref: innerRef
      }, rest, {
        onMouseDown: this.onMouseDown,
        onMouseDrag: this.onMouseDrag,
        onMouseUp: this.onMouseUp
      }));
    }
  }]);

  return CircleTool;
}(PathTool), _class2$4.defaultProps = _objectSpread({}, PathTool.defaultProps, {
  pathProps: {
    fillColor: 'white',
    strokeColor: 'black'
  }
}), _temp$4)) || _class$4;

var CircleTool_component = React.forwardRef(function (props, ref) {
  return React.createElement(CircleTool, _extends({
    innerRef: ref
  }, props));
});

var _class$5, _class2$5, _temp$5;
var Tool$5 = ReactPaperJS.Tool,
    PaperScope$5 = ReactPaperJS.PaperScope;
var MOUSE_LEFT_CODE$5 = 0; // $FlowFixMe

var SegmentPathTool = PaperScope$5(_class$5 = (_temp$5 = _class2$5 =
/*#__PURE__*/
function (_PathTool) {
  _inherits(SegmentPathTool, _PathTool);

  function SegmentPathTool() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SegmentPathTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SegmentPathTool)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onKeyUp = function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          path = _assertThisInitialize.path,
          onPathAdd = _assertThisInitialize.onPathAdd;

      if (path) {
        if (path.segments.length > 1) {
          onPathAdd();
        } else {
          path.remove();
          _this.path = null;
        }
      }
    };

    _this.onMouseDown = function (toolEvent) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          path = _assertThisInitialize2.path;

      if (toolEvent.event.button === MOUSE_LEFT_CODE$5 && toolEvent.modifiers.shift) {
        if (!path) {
          _this.pathInit();

          _this.props.onPathInit(path);
        }

        _this.onSegmentAdd(toolEvent);
      }

      _this.props.onMouseDown(toolEvent);
    };

    _this.onPathAdd = function () {
      var _assertThisInitialize3 = _assertThisInitialized(_this),
          path = _assertThisInitialize3.path;

      var onPathAdd = _this.props.onPathAdd;
      path.selected = false;
      onPathAdd(path);
      _this.path = null;
    };

    return _this;
  }

  _createClass(SegmentPathTool, [{
    key: "pathInit",
    value: function pathInit() {
      var _this$props = this.props,
          pathProps = _this$props.pathProps,
          pathData = _this$props.pathData,
          paper = _this$props.paper;
      var Path = paper.Path;
      var path = new Path(pathProps);
      this.path = path;
      this.setPathData(pathData);
    }
  }, {
    key: "setPathData",
    value: function setPathData(pathData) {
      this.path.pathData = pathData;
    }
  }, {
    key: "onSegmentAdd",
    value: function onSegmentAdd(toolEvent) {
      var path = this.path;
      path.add(toolEvent.point);
      this.props.onSegmentAdd(path.lastSegment, path);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          pathProps = _this$props2.pathProps,
          onKeyUp = _this$props2.onKeyUp,
          onMouseDown = _this$props2.onMouseDown,
          onPathAdd = _this$props2.onPathAdd,
          onSegmentAdd = _this$props2.onSegmentAdd,
          onSegmentRemove = _this$props2.onSegmentRemove,
          paper = _this$props2.paper,
          innerRef = _this$props2.innerRef,
          rest = _objectWithoutProperties(_this$props2, ["pathProps", "onKeyUp", "onMouseDown", "onPathAdd", "onSegmentAdd", "onSegmentRemove", "paper", "innerRef"]);

      return React.createElement(Tool$5, _extends({
        ref: innerRef,
        onKeyUp: this.onKeyUp,
        onMouseDown: this.onMouseDown
      }, rest));
    }
  }]);

  return SegmentPathTool;
}(PathTool), _class2$5.defaultProps = _objectSpread({}, PathTool.defaultProps, {
  pathProps: {
    strokeColor: 'black',
    selected: true
  }
}), _temp$5)) || _class$5;

var SegmentPathTool_component = React.forwardRef(function (props, ref) {
  return React.createElement(SegmentPathTool, _extends({
    innerRef: ref
  }, props));
});

var _class$6, _class2$6, _temp$6;
var PaperScope$6 = ReactPaperJS.PaperScope,
    getProps = ReactPaperJS.getProps;

function add(num1, num2) {
  return (num1 * 10 + num2 * 10) / 10;
}

function callAllHandlers() {
  var handlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return function (event) {
    return handlers.forEach(function (handler) {
      return handler && handler(event);
    });
  };
}

var PanAndScroll = PaperScope$6(_class$6 = (_temp$6 = _class2$6 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PanAndScroll, _React$Component);

  function PanAndScroll(_props) {
    var _this;

    _classCallCheck(this, PanAndScroll);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PanAndScroll).call(this, _props));

    _this.onWheel = function (_ref) {
      var deltaY = _ref.deltaY;
      var _this$props = _this.props,
          onZoom = _this$props.onZoom,
          mergeProps = _this$props.mergeProps;
      mergeProps(function (state, props) {
        var zoom = state.viewProps.zoom;

        if (deltaY < 0) {
          zoom = add(zoom, 0.1);
          onZoom(zoom);
          return {
            viewProps: _objectSpread({}, props.viewProps, state.viewProps, {
              zoom: zoom
            })
          };
        }

        if (deltaY > 0 && zoom > 0.1) {
          zoom = add(zoom, -0.1);
          onZoom(zoom);
          return {
            viewProps: _objectSpread({}, props.viewProps, state.viewProps, {
              zoom: zoom
            })
          };
        }

        return null;
      });
    };

    _this.onKeyDown = function (_ref2) {
      var key = _ref2.key;
      var draggable = _this.state.draggable;

      if (key === 'space' && !draggable) {
        var _this$props2 = _this.props,
            onPanEnabled = _this$props2.onPanEnabled,
            mergeProps = _this$props2.mergeProps;
        mergeProps(function (state, props) {
          return _objectSpread({}, state, {
            canvasProps: _objectSpread({}, props.canvasProps, state.canvasProps, {
              'drag-state': 'enabled'
            })
          });
        });

        _this.setState({
          draggable: true
        });

        onPanEnabled();
      }
    };

    _this.onKeyUp = function (_ref3) {
      var key = _ref3.key;

      if (key === 'space') {
        var _this$props3 = _this.props,
            onPanDisabled = _this$props3.onPanDisabled,
            mergeProps = _this$props3.mergeProps;
        mergeProps(function (state, props) {
          return _objectSpread({}, state, {
            canvasProps: _objectSpread({}, props.canvasProps, state.canvasProps, {
              'drag-state': 'disabled'
            })
          });
        });

        _this.setState({
          draggable: false
        });

        onPanDisabled();
      }
    };

    _this.onMouseDown = function (_ref4) {
      var point = _ref4.point;
      var _this$state = _this.state,
          draggable = _this$state.draggable,
          dragStart = _this$state.dragStart;

      if (draggable && !dragStart) {
        var mergeProps = _this.props.mergeProps;
        mergeProps(function (state, props) {
          return _objectSpread({}, state, {
            canvasProps: _objectSpread({}, props.canvasProps, state.canvasProps, {
              'drag-state': 'dragging'
            })
          });
        });

        _this.setState({
          dragStart: point
        });
      }
    };

    _this.onMouseUp = function () {
      var _this$state2 = _this.state,
          dragStart = _this$state2.dragStart,
          draggable = _this$state2.draggable;

      if (dragStart) {
        if (draggable) {
          var mergeProps = _this.props.mergeProps;
          mergeProps(function (state, props) {
            return _objectSpread({}, state, {
              canvasProps: _objectSpread({}, props.canvasProps, state.canvasProps, {
                'drag-state': 'enabled'
              })
            });
          });
        }

        _this.setState({
          dragStart: null
        });
      }
    };

    _this.onMouseDrag = function (_ref5) {
      var point = _ref5.point;
      var _this$props4 = _this.props,
          mergeProps = _this$props4.mergeProps,
          paper = _this$props4.paper;
      var _this$state3 = _this.state,
          draggable = _this$state3.draggable,
          dragStart = _this$state3.dragStart;
      mergeProps(function (state, props) {
        if (dragStart) {
          return {
            viewProps: _objectSpread({}, props.viewProps, state.viewProps, {
              center: paper.view.center.add(point.subtract(dragStart).multiply(0.5))
            })
          };
        }

        return null;
      });

      if (draggable) {
        _this.setState({
          dragStart: point
        });
      }
    };

    _this.state = {
      draggable: false,
      dragStart: null
    };
    return _this;
  }

  _createClass(PanAndScroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props5 = this.props,
          paper = _this$props5.paper,
          zoomLevel = _this$props5.zoomLevel,
          center = _this$props5.center,
          mergeProps = _this$props5.mergeProps;
      mergeProps(function (state, props) {
        var _getProps = getProps(paper, props.canvasProps),
            onWheel = _getProps.onWheel,
            canvasProps = _objectWithoutProperties(_getProps, ["onWheel"]);

        var _getProps2 = getProps(paper, props.viewProps),
            onKeyDown = _getProps2.onKeyDown,
            onKeyUp = _getProps2.onKeyUp,
            onMouseDown = _getProps2.onMouseDown,
            onMouseDrag = _getProps2.onMouseDrag,
            onMouseUp = _getProps2.onMouseUp,
            viewProps = _objectWithoutProperties(_getProps2, ["onKeyDown", "onKeyUp", "onMouseDown", "onMouseDrag", "onMouseUp"]);

        return {
          canvasProps: _objectSpread({}, canvasProps, {
            onWheel: callAllHandlers([onWheel, _this2.onWheel]),
            'drag-state': 'disabled'
          }),
          viewProps: _objectSpread({}, viewProps, {
            onKeyDown: callAllHandlers([onKeyDown, _this2.onKeyDown]),
            onKeyUp: callAllHandlers([onKeyUp, _this2.onKeyUp]),
            onMouseDown: callAllHandlers([onMouseDown, _this2.onMouseDown]),
            onMouseDrag: callAllHandlers([onMouseDrag, _this2.onMouseDrag]),
            onMouseUp: callAllHandlers([onMouseUp, _this2.onMouseUp]),
            zoom: zoomLevel,
            center: center
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children;
    }
  }]);

  return PanAndScroll;
}(React.Component), _class2$6.defaultProps = {
  zoomLevel: 1,
  onPanEnabled: function onPanEnabled() {},
  onPanDisabled: function onPanDisabled() {},
  onZoom: function onZoom() {}
}, _temp$6)) || _class$6;

var _class$7, _class2$7, _temp$7;
var Tool$6 = ReactPaperJS.Tool,
    PaperScope$7 = ReactPaperJS.PaperScope;
var MOUSE_LEFT_CODE$6 = 0; // $FlowFixMe

var EllipseTool = PaperScope$7(_class$7 = (_temp$7 = _class2$7 =
/*#__PURE__*/
function (_PathTool) {
  _inherits(EllipseTool, _PathTool);

  function EllipseTool() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EllipseTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EllipseTool)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onMouseDown = function (toolEvent) {
      var _this$props = _this.props,
          pathProps = _this$props.pathProps,
          onMouseDown = _this$props.onMouseDown,
          onPathInit = _this$props.onPathInit,
          paper = _this$props.paper;

      if (toolEvent.event.button === MOUSE_LEFT_CODE$6) {
        var Path = paper.Path,
            Color = paper.Color;
        var start = toolEvent.point;
        var path = new Path.Ellipse({
          point: start,
          size: [1, 1],
          fillColor: pathProps.selectedFillColor || new Color(0.9, 0.9, 1, 0.75),
          selected: true
        });
        _this.path = path;
        _this.start = start;
        onPathInit(_this.path);
      }

      onMouseDown(toolEvent);
    };

    _this.onMouseDrag = function (toolEvent) {
      var onMouseDrag = _this.props.onMouseDrag;

      if (toolEvent.event.buttons === 1) {
        var _assertThisInitialize = _assertThisInitialized(_this),
            path = _assertThisInitialize.path,
            start = _assertThisInitialize.start;

        var bounds = path.bounds;
        var offset = toolEvent.point.subtract(start);
        var width = Math.abs(offset.x);
        var height = Math.abs(offset.y);

        if (offset.x < 0) {
          bounds.left = toolEvent.point.x;
          bounds.right = start.x;
        } else {
          bounds.left = start.x;
        }

        if (offset.y > 0) {
          bounds.top = start.y;
          bounds.bottom = toolEvent.point.y;
        } else {
          bounds.top = toolEvent.point.y;
        }

        if (width > 0) {
          bounds.width = width;
        }

        if (height > 0) {
          bounds.height = height;
        }
      }

      onMouseDrag(toolEvent);
    };

    _this.onMouseUp = function (event) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          path = _assertThisInitialize2.path;

      var _this$props2 = _this.props,
          pathProps = _this$props2.pathProps,
          onMouseUp = _this$props2.onMouseUp,
          onPathAdd = _this$props2.onPathAdd;

      if (path) {
        Object.assign(path, _objectSpread({
          selected: false
        }, pathProps));
        onPathAdd(path);
        _this.path = null;
        _this.start = null;
      }

      onMouseUp(event);
    };

    _this.start = void 0;
    return _this;
  }

  _createClass(EllipseTool, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          innerRef = _this$props3.innerRef,
          rest = _objectWithoutProperties(_this$props3, ["innerRef"]);

      return React.createElement(Tool$6, _extends({}, rest, {
        ref: innerRef,
        onMouseDown: this.onMouseDown,
        onMouseDrag: this.onMouseDrag,
        onMouseUp: this.onMouseUp
      }));
    }
  }]);

  return EllipseTool;
}(PathTool), _class2$7.defaultProps = _objectSpread({}, PathTool.defaultProps, {
  pathProps: {
    fillColor: 'white',
    strokeColor: 'black'
  }
}), _temp$7)) || _class$7;

var EllipseTool_component = React.forwardRef(function (props, ref) {
  return React.createElement(EllipseTool, _extends({
    innerRef: ref
  }, props));
});

exports.CircleTool = CircleTool_component;
exports.EllipseTool = EllipseTool_component;
exports.FreeformPathTool = FreeformPathTool_component;
exports.Grid = Grid_component;
exports.LineTool = LineTool_component;
exports.PanAndZoom = PanAndScroll;
exports.PathTool = PathTool;
exports.PolygonTool = PolygonTool_component;
exports.RectangleTool = RectangleTool_component;
exports.SegmentPathTool = SegmentPathTool_component;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvUGF0aFRvb2wvUGF0aFRvb2wuY29tcG9uZW50LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvRnJlZWZvcm1QYXRoVG9vbC9GcmVlZm9ybVBhdGhUb29sLmNvbXBvbmVudC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZC5jb21wb25lbnQuanMiLCIuLi9zcmMvY29tcG9uZW50cy9MaW5lVG9vbC9MaW5lVG9vbC5jb21wb25lbnQuanMiLCIuLi9zcmMvY29tcG9uZW50cy9Qb2x5Z29uVG9vbC9Qb2x5Z29uVG9vbC5jb21wb25lbnQuanMiLCIuLi9zcmMvY29tcG9uZW50cy9SZWN0YW5nbGVUb29sL1JlY3RhbmdsZVRvb2wuY29tcG9uZW50LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvQ2lyY2xlVG9vbC9DaXJjbGVUb29sLmNvbXBvbmVudC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL1NlZ21lbnRQYXRoVG9vbC9TZWdtZW50UGF0aFRvb2wuY29tcG9uZW50LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvUGFuQW5kWm9vbS9QYW5BbmRab29tLmNvbXBvbmVudC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL0VsbGlwc2VUb29sL0VsbGlwc2VUb29sLmNvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBUb29sRXZlbnRIYW5kbGVyIH0gZnJvbSAnQHBzeWNob2JvbHQvcmVhY3QtcGFwZXJqcyc7XG5pbXBvcnQgdHlwZW9mIHsgUGFwZXJTY29wZSBhcyBQYXBlciwgUGF0aCwgU2VnbWVudCwgS2V5RXZlbnQgfSBmcm9tICdwYXBlcic7XG5cbnR5cGUgS2V5RXZlbnRIYW5kbGVyID0gKGV2ZW50OiBLZXlFdmVudCkgPT4gYW55XG50eXBlIFBhdGhFdmVudEhhbmRsZXIgPSAocGF0aDogUGF0aCkgPT4gYW55XG50eXBlIFNlZ21lbnRFdmVudEhhbmRsZXIgPSAoc2VnbWVudDogU2VnbWVudCB8IFNlZ21lbnRbXSkgPT4gYW55O1xuXG50eXBlIFByb3BzID0ge1xuICBwYXBlcjogUGFwZXIsXG4gIG9uS2V5RG93bjogS2V5RXZlbnRIYW5kbGVyLFxuICBvbktleVVwOiBLZXlFdmVudEhhbmRsZXIsXG4gIG9uTW91c2VEb3duOiBUb29sRXZlbnRIYW5kbGVyLFxuICBvbk1vdXNlRHJhZzogVG9vbEV2ZW50SGFuZGxlcixcbiAgb25Nb3VzZVVwOiBUb29sRXZlbnRIYW5kbGVyLFxuICBvblBhdGhJbml0OiBQYXRoRXZlbnRIYW5kbGVyLFxuICBvblBhdGhBZGQ6IFBhdGhFdmVudEhhbmRsZXIsXG4gIG9uU2VnbWVudEFkZDogU2VnbWVudEV2ZW50SGFuZGxlcixcbiAgb25TZWdtZW50UmVtb3ZlOiBTZWdtZW50RXZlbnRIYW5kbGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoVG9vbDxQPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQICYgUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbktleURvd246ICgpID0+IHt9LFxuICAgIG9uS2V5VXA6ICgpID0+IHt9LFxuICAgIG9uTW91c2VEb3duOiAoKSA9PiB7fSxcbiAgICBvbk1vdXNlRHJhZzogKCkgPT4ge30sXG4gICAgb25Nb3VzZVVwOiAoKSA9PiB7fSxcbiAgICBvblBhdGhJbml0OiAoKSA9PiB7fSxcbiAgICBvblBhdGhBZGQ6ICgpID0+IHt9LFxuICAgIG9uU2VnbWVudEFkZDogKCkgPT4ge30sXG4gICAgb25TZWdtZW50UmVtb3ZlOiAoKSA9PiB7fSxcbiAgfVxuXG4gIHBhdGg6IFBhdGhcbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdFBhcGVySlMgZnJvbSAnQHBzeWNob2JvbHQvcmVhY3QtcGFwZXJqcyc7XG5pbXBvcnQgdHlwZW9mIHsgVG9vbEV2ZW50LCBUb29sIGFzIFRvb2xUeXBlIH0gZnJvbSAncGFwZXInO1xuXG5pbXBvcnQgUGF0aFRvb2wgZnJvbSAnLi4vc2hhcmVkL1BhdGhUb29sJztcblxuY29uc3QgeyBUb29sLCBQYXBlclNjb3BlIH0gPSBSZWFjdFBhcGVySlM7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhdGhQcm9wczoge1xuICAgIHN0cm9rZUNvbG9yOiBzdHJpbmcsXG4gIH0sXG4gIGlubmVyUmVmOiBSZWFjdC5SZWY8VG9vbFR5cGU+XG59O1xuXG5jb25zdCBNT1VTRV9MRUZUX0NPREUgPSAwO1xuXG4vLyAkRmxvd0ZpeE1lXG5AUGFwZXJTY29wZVxuY2xhc3MgRnJlZWZvcm1QYXRoVG9vbCBleHRlbmRzIFBhdGhUb29sPFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLi4uUGF0aFRvb2wuZGVmYXVsdFByb3BzLFxuICAgIHBhdGhQcm9wczoge1xuICAgICAgc3Ryb2tlQ29sb3I6ICdibGFjaycsXG4gICAgfSxcbiAgfVxuXG4gIG9uTW91c2VEb3duID0gKHRvb2xFdmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYXRoUHJvcHMsIG9uTW91c2VEb3duLCBvblBhdGhJbml0LCBwYXBlciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodG9vbEV2ZW50LmV2ZW50LmJ1dHRvbiA9PT0gTU9VU0VfTEVGVF9DT0RFKSB7XG4gICAgICBjb25zdCBwYXRoID0gbmV3IHBhcGVyLlBhdGgocGF0aFByb3BzKTtcbiAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICBvblBhdGhJbml0KHBhdGgpO1xuICAgIH1cbiAgICBvbk1vdXNlRG93bih0b29sRXZlbnQpO1xuICB9XG5cbiAgb25Nb3VzZURyYWcgPSAodG9vbEV2ZW50OiBUb29sRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG9uTW91c2VEcmFnIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0b29sRXZlbnQuZXZlbnQuYnV0dG9ucyA9PT0gMSkge1xuICAgICAgdGhpcy5wYXRoLmFkZCh0b29sRXZlbnQucG9pbnQpO1xuICAgIH1cbiAgICBvbk1vdXNlRHJhZyh0b29sRXZlbnQpO1xuICB9XG5cbiAgb25Nb3VzZVVwID0gKHRvb2xFdmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgb25Nb3VzZVVwLCBvblBhdGhBZGQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIG9uUGF0aEFkZChwYXRoKTtcbiAgICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgfVxuICAgIG9uTW91c2VVcCh0b29sRXZlbnQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhQcm9wcywgb25Nb3VzZURvd24sIG9uTW91c2VEcmFnLCBvbk1vdXNlVXAsIG9uUGF0aEFkZCwgcGFwZXIsIGlubmVyUmVmLCAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sXG4gICAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICAgIG1pbkRpc3RhbmNlPXsxMH1cbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMub25Nb3VzZURvd259XG4gICAgICAgIG9uTW91c2VEcmFnPXt0aGlzLm9uTW91c2VEcmFnfVxuICAgICAgICBvbk1vdXNlVXA9e3RoaXMub25Nb3VzZVVwfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiA8RnJlZWZvcm1QYXRoVG9vbCBpbm5lclJlZj17cmVmfSB7Li4ucHJvcHN9IC8+KTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdFBhcGVySlMgZnJvbSAnQHBzeWNob2JvbHQvcmVhY3QtcGFwZXJqcyc7XG5cbmNvbnN0IHsgTGF5ZXIsIEdyb3VwLCBMaW5lIH0gPSBSZWFjdFBhcGVySlM7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRvcDogbnVtYmVyLFxuICBsZWZ0OiBudW1iZXIsXG4gIHJpZ2h0OiBudW1iZXIsXG4gIGJvdHRvbTogbnVtYmVyLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgY2VsbFNpemU6IG51bWJlcixcbiAgc3Ryb2tlQ29sb3I6IHN0cmluZyxcbiAgc3Ryb2tlV2lkdGg6IG51bWJlcixcbiAgaW5uZXJSZWY6IFJlYWN0LlJlZjx0eXBlb2YgTGF5ZXI+XG59O1xuXG5jb25zdCBHcmlkID0gKHsgd2lkdGgsIGhlaWdodCwgdG9wID0gMCwgbGVmdCA9IDAsIHJpZ2h0ID0gbGVmdCArIHdpZHRoLCBib3R0b20gPSB0b3AgKyBoZWlnaHQsIGNlbGxTaXplID0gNTAsIHN0cm9rZUNvbG9yID0gJyNEMEQwRDAnLCBzdHJva2VXaWR0aCA9IDEsIGlubmVyUmVmIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHggPSBNYXRoLmNlaWwobGVmdCAvIGNlbGxTaXplKSAqIGNlbGxTaXplO1xuICBjb25zdCB5ID0gTWF0aC5jZWlsKHRvcCAvIGNlbGxTaXplKSAqIGNlbGxTaXplO1xuICBjb25zdCBjb2xzID0gTWF0aC5jZWlsKChyaWdodCAtIGxlZnQpIC8gY2VsbFNpemUpO1xuICBjb25zdCByb3dzID0gTWF0aC5jZWlsKChib3R0b20gLSB0b3ApIC8gY2VsbFNpemUpO1xuICBjb25zdCB2ZXJ0aWNhbExpbmVzID0gW107XG4gIGNvbnN0IGhvcml6b250YWxMaW5lcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBjb2xzOyBpICs9IDEpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHggKyAoaSAqIGNlbGxTaXplKTtcbiAgICB2ZXJ0aWNhbExpbmVzLnB1c2goPExpbmVcbiAgICAgIGtleT17aX1cbiAgICAgIGZyb209e1twb3NpdGlvbiwgdG9wXX1cbiAgICAgIHRvPXtbcG9zaXRpb24sIGJvdHRvbV19XG4gICAgICBzdHJva2VDb2xvcj17c3Ryb2tlQ29sb3J9XG4gICAgICBzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG4gICAgLz4pO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHJvd3M7IGkgKz0gMSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0geSArIChpICogY2VsbFNpemUpO1xuICAgIGhvcml6b250YWxMaW5lcy5wdXNoKDxMaW5lXG4gICAgICBrZXk9e2l9XG4gICAgICBmcm9tPXtbbGVmdCwgcG9zaXRpb25dfVxuICAgICAgdG89e1tyaWdodCwgcG9zaXRpb25dfVxuICAgICAgc3Ryb2tlQ29sb3I9e3N0cm9rZUNvbG9yfVxuICAgICAgc3Ryb2tlV2lkdGg9e3N0cm9rZVdpZHRofVxuICAgIC8+KTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxMYXllciByZWY9e2lubmVyUmVmfT5cbiAgICAgIDxHcm91cD5cbiAgICAgICAge3ZlcnRpY2FsTGluZXN9XG4gICAgICA8L0dyb3VwPlxuICAgICAgPEdyb3VwPlxuICAgICAgICB7aG9yaXpvbnRhbExpbmVzfVxuICAgICAgPC9Hcm91cD5cbiAgICA8L0xheWVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gPEdyaWQgaW5uZXJSZWY9e3JlZn0gey4uLnByb3BzfSAvPik7XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RQYXBlckpTIGZyb20gJ0Bwc3ljaG9ib2x0L3JlYWN0LXBhcGVyanMnO1xuaW1wb3J0IHR5cGVvZiB7IFRvb2xFdmVudCwgVG9vbCBhcyBUb29sVHlwZSB9IGZyb20gJ3BhcGVyJztcblxuaW1wb3J0IFBhdGhUb29sIGZyb20gJy4uL3NoYXJlZC9QYXRoVG9vbCc7XG5cbmNvbnN0IHsgVG9vbCwgUGFwZXJTY29wZSB9ID0gUmVhY3RQYXBlckpTO1xuXG50eXBlIFByb3BzID0ge1xuICBwYXRoUHJvcHM6IHtcbiAgICBzdHJva2VDb2xvcjogc3RyaW5nLFxuICB9LFxuICBpbm5lclJlZjogUmVhY3QuUmVmPFRvb2xUeXBlPlxufTtcblxuY29uc3QgTU9VU0VfTEVGVF9DT0RFID0gMDtcblxuLy8gJEZsb3dGaXhNZVxuQFBhcGVyU2NvcGVcbmNsYXNzIExpbmVUb29sIGV4dGVuZHMgUGF0aFRvb2w8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAuLi5QYXRoVG9vbC5kZWZhdWx0UHJvcHMsXG4gICAgcGF0aFByb3BzOiB7XG4gICAgICBzdHJva2VDb2xvcjogJ2JsYWNrJyxcbiAgICB9LFxuICB9O1xuXG4gIG9uTW91c2VEb3duID0gKHRvb2xFdmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYXRoUHJvcHMsIG9uTW91c2VEb3duLCBvblBhdGhJbml0LCBwYXBlciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodG9vbEV2ZW50LmV2ZW50LmJ1dHRvbiA9PT0gTU9VU0VfTEVGVF9DT0RFKSB7XG4gICAgICBjb25zdCBwYXRoID0gbmV3IHBhcGVyLlBhdGgocGF0aFByb3BzKTtcbiAgICAgIHBhdGguYWRkKHRvb2xFdmVudC5wb2ludCk7XG4gICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgb25QYXRoSW5pdChwYXRoKTtcbiAgICB9XG4gICAgb25Nb3VzZURvd24odG9vbEV2ZW50KTtcbiAgfVxuXG4gIG9uTW91c2VEcmFnID0gKHRvb2xFdmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgb25Nb3VzZURyYWcgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRvb2xFdmVudC5ldmVudC5idXR0b25zID09PSAxKSB7XG4gICAgICBwYXRoLnJlbW92ZVNlZ21lbnQoMSk7XG4gICAgICBwYXRoLmFkZFNlZ21lbnQodG9vbEV2ZW50LnBvaW50KTtcbiAgICAgIHBhdGguc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBvbk1vdXNlRHJhZyh0b29sRXZlbnQpO1xuICB9XG5cbiAgb25Nb3VzZVVwID0gKHRvb2xFdmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgb25Nb3VzZVVwLCBvblBhdGhBZGQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHBhdGguc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIG9uUGF0aEFkZChwYXRoKTtcbiAgICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgfVxuICAgIG9uTW91c2VVcCh0b29sRXZlbnQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhQcm9wcywgb25Nb3VzZURvd24sIG9uTW91c2VEcmFnLCBvbk1vdXNlVXAsIG9uUGF0aEFkZCwgaW5uZXJSZWYsIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2xcbiAgICAgICAgcmVmPXtpbm5lclJlZn1cbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMub25Nb3VzZURvd259XG4gICAgICAgIG9uTW91c2VEcmFnPXt0aGlzLm9uTW91c2VEcmFnfVxuICAgICAgICBvbk1vdXNlVXA9e3RoaXMub25Nb3VzZVVwfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiA8TGluZVRvb2wgaW5uZXJSZWY9e3JlZn0gey4uLnByb3BzfSAvPik7XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RQYXBlckpTIGZyb20gJ0Bwc3ljaG9ib2x0L3JlYWN0LXBhcGVyanMnO1xuaW1wb3J0IHR5cGVvZiB7IEdyb3VwIGFzIFBvaW50cywgU2VnbWVudCwgVG9vbEV2ZW50LCBUb29sIGFzIFRvb2xUeXBlIH0gZnJvbSAncGFwZXInO1xuXG5pbXBvcnQgUGF0aFRvb2wgZnJvbSAnLi4vc2hhcmVkL1BhdGhUb29sJztcblxuY29uc3QgeyBUb29sLCBQYXBlclNjb3BlIH0gPSBSZWFjdFBhcGVySlM7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhdGhQcm9wczoge1xuICAgIHN0cm9rZUNvbG9yOiBzdHJpbmcsXG4gIH0sXG4gIHBhdGhEYXRhOiBzdHJpbmcsXG4gIGlubmVyUmVmOiBSZWFjdC5SZWY8VG9vbFR5cGU+XG59O1xuXG5jb25zdCBNT1VTRV9MRUZUX0NPREUgPSAwO1xuXG4vLyAkRmxvd0ZpeE1lXG5AUGFwZXJTY29wZVxuY2xhc3MgUG9seWdvblRvb2wgZXh0ZW5kcyBQYXRoVG9vbDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIC4uLlBhdGhUb29sLmRlZmF1bHRQcm9wcyxcbiAgICBwYXRoUHJvcHM6IHtcbiAgICAgIHN0cm9rZUNvbG9yOiAnYmxhY2snLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgfSxcbiAgfTtcblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgY29uc3QgeyBwYXRoLCBwb2ludHMsIHByb3BzIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgcGF0aFByb3BzLCBwYXRoRGF0YSB9ID0gcHJvcHM7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHRoaXMuc2V0UGF0aERhdGEocGF0aERhdGEpO1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXRoLCBwYXRoUHJvcHMpO1xuICAgIH0gZWxzZSBpZiAocG9pbnRzKSB7XG4gICAgICB0aGlzLnBhdGhJbml0KCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURvd24gPSAodG9vbEV2ZW50OiBUb29sRXZlbnQpID0+IHtcbiAgICBpZiAodG9vbEV2ZW50LmV2ZW50LmJ1dHRvbiA9PT0gTU9VU0VfTEVGVF9DT0RFKSB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IHRoaXM7XG4gICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgdGhpcy5wYXRoSW5pdCgpO1xuICAgICAgICB0aGlzLnByb3BzLm9uUGF0aEluaXQocGF0aCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFNlZ21lbnQgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLm9uU2VnbWVudEFkZCh0b29sRXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vblBhdGhBZGQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbk1vdXNlRG93bih0b29sRXZlbnQpO1xuICB9XG5cbiAgcGF0aEluaXQoKSB7XG4gICAgY29uc3QgeyBwYXRoUHJvcHMsIHBhdGhEYXRhLCBwYXBlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IFBhdGggfSA9IHBhcGVyO1xuICAgIGNvbnN0IHBhdGggPSBuZXcgUGF0aChwYXRoUHJvcHMpO1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5zZXRQYXRoRGF0YShwYXRoRGF0YSk7XG4gIH1cblxuICBzZXRQYXRoRGF0YShwYXRoRGF0YTogc3RyaW5nKSB7XG4gICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzO1xuICAgIHRoaXMucmVtb3ZlQm91bmRzKCk7XG4gICAgcGF0aC5wYXRoRGF0YSA9IHBhdGhEYXRhO1xuICAgIHBhdGguc2VnbWVudHMuZm9yRWFjaChzZWdtZW50ID0+IHRoaXMuY3JlYXRlQm91bmRzKHNlZ21lbnQpKTtcbiAgfVxuXG4gIG9uU2VnbWVudEFkZCh0b29sRXZlbnQ6IFRvb2xFdmVudCkge1xuICAgIGNvbnN0IHsgcGF0aCB9ID0gdGhpcztcbiAgICBwYXRoLmFkZCh0b29sRXZlbnQucG9pbnQpO1xuICAgIGNvbnN0IHNlZ21lbnQgPSBwYXRoLmxhc3RTZWdtZW50O1xuICAgIHRoaXMuY3JlYXRlQm91bmRzKHNlZ21lbnQpO1xuICAgIHRoaXMucHJvcHMub25TZWdtZW50QWRkKHNlZ21lbnQsIHBhdGgpO1xuICB9XG5cbiAgb25QYXRoQWRkKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRTZWdtZW50LCBwYXRoLCBwb2ludHMgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBvblNlZ21lbnRSZW1vdmUsIG9uUGF0aEFkZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGluZGV4IH0gPSBzZWxlY3RlZFNlZ21lbnQ7XG4gICAgY29uc3Qgc2VnbWVudHMgPSBwYXRoLnJlbW92ZVNlZ21lbnRzKDAsIGluZGV4KTtcbiAgICBpZiAoc2VnbWVudHMubGVuZ3RoKSB7XG4gICAgICBvblNlZ21lbnRSZW1vdmUoc2VnbWVudHMsIHBhdGgpO1xuICAgIH1cbiAgICBwYXRoLmNsb3NlZCA9IHRydWU7XG4gICAgcGF0aC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIG9uUGF0aEFkZChwYXRoKTtcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWRTZWdtZW50ID0gbnVsbDtcbiAgICBpZiAocG9pbnRzKSB7XG4gICAgICBwb2ludHMucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQm91bmRzKHNlZ21lbnQ6IFNlZ21lbnQpIHtcbiAgICBjb25zdCB7IHBhcGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgUGF0aCwgR3JvdXAsIHByb2plY3QgfSA9IHBhcGVyO1xuICAgIGNvbnN0IHsgcGF0aCwgcG9pbnRzIH0gPSB0aGlzO1xuICAgIGlmICghcG9pbnRzKSB7XG4gICAgICB0aGlzLnBvaW50cyA9IG5ldyBHcm91cCgpO1xuICAgICAgcHJvamVjdC5sYXllcnMuJCRtZXRhZGF0YS5hZGRDaGlsZCh0aGlzLnBvaW50cyk7XG4gICAgfVxuICAgIGNvbnN0IGJvdW5kcyA9IG5ldyBQYXRoLkNpcmNsZSh7XG4gICAgICBjZW50ZXI6IHNlZ21lbnQucG9pbnQsXG4gICAgICByYWRpdXM6IDcsXG4gICAgICBmaWxsQ29sb3I6ICd3aGl0ZScsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgIH0pO1xuICAgIGJvdW5kcy5vbignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgaWYgKCFwYXRoLmNsb3NlZFxuICAgICAgICAgICYmICFwYXRoLmxhc3RTZWdtZW50LnBvaW50LmVxdWFscyhib3VuZHMucG9zaXRpb24pXG4gICAgICAgICAgJiYgcGF0aC5jb250YWlucyhib3VuZHMucG9zaXRpb24pKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTZWdtZW50ID0gc2VnbWVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnBvaW50cy5hZGRDaGlsZChib3VuZHMpO1xuICB9XG5cbiAgcmVtb3ZlQm91bmRzKCkge1xuICAgIGlmICh0aGlzLnBvaW50cykge1xuICAgICAgdGhpcy5wb2ludHMucmVtb3ZlKCk7XG4gICAgICB0aGlzLnBvaW50cyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcG9pbnRzOiBQb2ludHM7XG5cbiAgc2VsZWN0ZWRTZWdtZW50OiBTZWdtZW50O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRoUHJvcHMsIG9uTW91c2VEb3duLCBvblBhdGhBZGQsIG9uU2VnbWVudEFkZCwgb25TZWdtZW50UmVtb3ZlLCBwYXBlciwgaW5uZXJSZWYsIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2xcbiAgICAgICAgcmVmPXtpbm5lclJlZn1cbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMub25Nb3VzZURvd259XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IDxQb2x5Z29uVG9vbCBpbm5lclJlZj17cmVmfSB7Li4ucHJvcHN9IC8+KTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdFBhcGVySlMgZnJvbSAnQHBzeWNob2JvbHQvcmVhY3QtcGFwZXJqcyc7XG5pbXBvcnQgdHlwZW9mIHsgUG9pbnQsIFRvb2xFdmVudCwgVG9vbCBhcyBUb29sVHlwZSB9IGZyb20gJ3BhcGVyJztcblxuaW1wb3J0IFBhdGhUb29sIGZyb20gJy4uL3NoYXJlZC9QYXRoVG9vbCc7XG5cbmNvbnN0IHsgVG9vbCwgUGFwZXJTY29wZSB9ID0gUmVhY3RQYXBlckpTO1xuXG50eXBlIFByb3BzID0ge1xuICBwYXRoUHJvcHM6IHtcbiAgICBmaWxsQ29sb3I6IHN0cmluZyxcbiAgfSxcbiAgaW5uZXJSZWY6IFJlYWN0LlJlZjxUb29sVHlwZT5cbn07XG5cbmNvbnN0IE1PVVNFX0xFRlRfQ09ERSA9IDA7XG5cbi8vICRGbG93Rml4TWVcbkBQYXBlclNjb3BlXG5jbGFzcyBSZWN0YW5nbGVUb29sIGV4dGVuZHMgUGF0aFRvb2w8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAuLi5QYXRoVG9vbC5kZWZhdWx0UHJvcHMsXG4gICAgcGF0aFByb3BzOiB7XG4gICAgICBmaWxsQ29sb3I6ICd3aGl0ZScsXG4gICAgICBzdHJva2VDb2xvcjogJ2JsYWNrJyxcbiAgICB9LFxuICB9XG5cbiAgb25Nb3VzZURvd24gPSAodG9vbEV2ZW50OiBUb29sRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHBhdGhQcm9wcywgb25Nb3VzZURvd24sIG9uUGF0aEluaXQsIHBhcGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0b29sRXZlbnQuZXZlbnQuYnV0dG9uID09PSBNT1VTRV9MRUZUX0NPREUpIHtcbiAgICAgIGNvbnN0IHsgUGF0aCwgQ29sb3IgfSA9IHBhcGVyO1xuICAgICAgY29uc3Qgc3RhcnQgPSB0b29sRXZlbnQucG9pbnQ7XG4gICAgICBjb25zdCBwYXRoID0gbmV3IFBhdGguUmVjdGFuZ2xlKHtcbiAgICAgICAgcG9pbnQ6IHN0YXJ0LFxuICAgICAgICBzaXplOiBbMSwgMV0sXG4gICAgICAgIGZpbGxDb2xvcjogcGF0aFByb3BzLnNlbGVjdGVkRmlsbENvbG9yIHx8IG5ldyBDb2xvcigwLjksIDAuOSwgMSwgMC43NSksXG4gICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgb25QYXRoSW5pdChwYXRoKTtcbiAgICB9XG4gICAgb25Nb3VzZURvd24odG9vbEV2ZW50KTtcbiAgfVxuXG4gIG9uTW91c2VEcmFnID0gKHRvb2xFdmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBvbk1vdXNlRHJhZyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodG9vbEV2ZW50LmV2ZW50LmJ1dHRvbnMgPT09IDEpIHtcbiAgICAgIGNvbnN0IHsgcGF0aCwgc3RhcnQgfSA9IHRoaXM7XG4gICAgICBjb25zdCB7IGJvdW5kcyB9ID0gcGF0aDtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHRvb2xFdmVudC5wb2ludC5zdWJ0cmFjdChzdGFydCk7XG4gICAgICBjb25zdCB3aWR0aCA9IE1hdGguYWJzKG9mZnNldC54KTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGguYWJzKG9mZnNldC55KTtcbiAgICAgIGlmIChvZmZzZXQueCA8IDApIHtcbiAgICAgICAgYm91bmRzLmxlZnQgPSB0b29sRXZlbnQucG9pbnQueDtcbiAgICAgICAgYm91bmRzLnJpZ2h0ID0gc3RhcnQueDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvdW5kcy5sZWZ0ID0gc3RhcnQueDtcbiAgICAgIH1cbiAgICAgIGlmIChvZmZzZXQueSA+IDApIHtcbiAgICAgICAgYm91bmRzLnRvcCA9IHN0YXJ0Lnk7XG4gICAgICAgIGJvdW5kcy5ib3R0b20gPSB0b29sRXZlbnQucG9pbnQueTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvdW5kcy50b3AgPSB0b29sRXZlbnQucG9pbnQueTtcbiAgICAgIH1cbiAgICAgIGlmICh3aWR0aCA+IDApIHtcbiAgICAgICAgYm91bmRzLndpZHRoID0gd2lkdGg7XG4gICAgICB9XG4gICAgICBpZiAoaGVpZ2h0ID4gMCkge1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICBvbk1vdXNlRHJhZyh0b29sRXZlbnQpO1xuICB9XG5cbiAgb25Nb3VzZVVwID0gKGV2ZW50OiBUb29sRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHRoaXM7XG4gICAgY29uc3QgeyBwYXRoUHJvcHMsIG9uTW91c2VVcCwgb25QYXRoQWRkIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChwYXRoKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHBhdGgsIHtcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAuLi5wYXRoUHJvcHMsXG4gICAgICB9KTtcbiAgICAgIG9uUGF0aEFkZChwYXRoKTtcbiAgICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgICB0aGlzLnN0YXJ0ID0gbnVsbDtcbiAgICB9XG4gICAgb25Nb3VzZVVwKGV2ZW50KTtcbiAgfVxuXG4gIHN0YXJ0OiBQb2ludDtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbm5lclJlZiwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2xcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLm9uTW91c2VEb3dufVxuICAgICAgICBvbk1vdXNlRHJhZz17dGhpcy5vbk1vdXNlRHJhZ31cbiAgICAgICAgb25Nb3VzZVVwPXt0aGlzLm9uTW91c2VVcH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiA8UmVjdGFuZ2xlVG9vbCBpbm5lclJlZj17cmVmfSB7Li4ucHJvcHN9IC8+KTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdFBhcGVySlMgZnJvbSAnQHBzeWNob2JvbHQvcmVhY3QtcGFwZXJqcyc7XG5pbXBvcnQgdHlwZW9mIHsgVG9vbEV2ZW50LCBUb29sIGFzIFRvb2xUeXBlIH0gZnJvbSAncGFwZXInO1xuXG5pbXBvcnQgUGF0aFRvb2wgZnJvbSAnLi4vc2hhcmVkL1BhdGhUb29sJztcblxuY29uc3QgeyBUb29sLCBQYXBlclNjb3BlIH0gPSBSZWFjdFBhcGVySlM7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhdGhQcm9wczoge1xuICAgIGZpbGxDb2xvcjogc3RyaW5nLFxuICAgIHN0cm9rZUNvbG9yOiBzdHJpbmcsXG4gIH0sXG4gIGlubmVyUmVmOiBSZWFjdC5SZWY8VG9vbFR5cGU+XG59O1xuXG5jb25zdCBNT1VTRV9MRUZUX0NPREUgPSAwO1xuXG4vLyAkRmxvd0ZpeE1lXG5AUGFwZXJTY29wZVxuY2xhc3MgQ2lyY2xlVG9vbCBleHRlbmRzIFBhdGhUb29sPFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLi4uUGF0aFRvb2wuZGVmYXVsdFByb3BzLFxuICAgIHBhdGhQcm9wczoge1xuICAgICAgZmlsbENvbG9yOiAnd2hpdGUnLFxuICAgICAgc3Ryb2tlQ29sb3I6ICdibGFjaycsXG4gICAgfSxcbiAgfVxuXG4gIG9uTW91c2VEb3duID0gKHRvb2xFdmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYXRoUHJvcHMsIG9uTW91c2VEb3duLCBvblBhdGhJbml0LCBwYXBlciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodG9vbEV2ZW50LmV2ZW50LmJ1dHRvbiA9PT0gTU9VU0VfTEVGVF9DT0RFKSB7XG4gICAgICBjb25zdCB7IFBhdGgsIENvbG9yIH0gPSBwYXBlcjtcbiAgICAgIGNvbnN0IHBhdGggPSBuZXcgUGF0aC5DaXJjbGUoe1xuICAgICAgICBjZW50ZXI6IHRvb2xFdmVudC5wb2ludCxcbiAgICAgICAgcmFkaXVzOiAxLFxuICAgICAgICBmaWxsQ29sb3I6IHBhdGhQcm9wcy5zZWxlY3RlZEZpbGxDb2xvciB8fCBuZXcgQ29sb3IoMC45LCAwLjksIDEsIDAuNzUpLFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgIG9uUGF0aEluaXQocGF0aCk7XG4gICAgfVxuICAgIG9uTW91c2VEb3duKHRvb2xFdmVudCk7XG4gIH1cblxuICBvbk1vdXNlRHJhZyA9ICh0b29sRXZlbnQ6IFRvb2xFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25Nb3VzZURyYWcgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRvb2xFdmVudC5ldmVudC5idXR0b25zID09PSAxKSB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IHRoaXM7XG4gICAgICBwYXRoLnNjYWxlKHRvb2xFdmVudC5wb2ludC5nZXREaXN0YW5jZShwYXRoLnBvc2l0aW9uKSAvIChwYXRoLmJvdW5kcy53aWR0aCAvIDIpKTtcbiAgICB9XG4gICAgb25Nb3VzZURyYWcodG9vbEV2ZW50KTtcbiAgfVxuXG4gIG9uTW91c2VVcCA9IChldmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgcGF0aFByb3BzLCBvbk1vdXNlVXAsIG9uUGF0aEFkZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocGF0aCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXRoLCB7XG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgLi4ucGF0aFByb3BzLFxuICAgICAgfSk7XG4gICAgICBvblBhdGhBZGQocGF0aCk7XG4gICAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIH1cbiAgICBvbk1vdXNlVXAoZXZlbnQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5uZXJSZWYsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sXG4gICAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5vbk1vdXNlRG93bn1cbiAgICAgICAgb25Nb3VzZURyYWc9e3RoaXMub25Nb3VzZURyYWd9XG4gICAgICAgIG9uTW91c2VVcD17dGhpcy5vbk1vdXNlVXB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gPENpcmNsZVRvb2wgaW5uZXJSZWY9e3JlZn0gey4uLnByb3BzfSAvPik7XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RQYXBlckpTIGZyb20gJ0Bwc3ljaG9ib2x0L3JlYWN0LXBhcGVyanMnO1xuaW1wb3J0IHR5cGVvZiB7IFRvb2xFdmVudCwgVG9vbCBhcyBUb29sVHlwZSB9IGZyb20gJ3BhcGVyJztcblxuaW1wb3J0IFBhdGhUb29sIGZyb20gJy4uL3NoYXJlZC9QYXRoVG9vbCc7XG5cbmNvbnN0IHsgVG9vbCwgUGFwZXJTY29wZSB9ID0gUmVhY3RQYXBlckpTO1xuXG50eXBlIFByb3BzID0ge1xuICBwYXRoUHJvcHM6IHtcbiAgICBzdHJva2VDb2xvcjogc3RyaW5nLFxuICB9LFxuICBwYXRoRGF0YTogc3RyaW5nLFxuICBpbm5lclJlZjogUmVhY3QuUmVmPFRvb2xUeXBlPlxufTtcblxuY29uc3QgTU9VU0VfTEVGVF9DT0RFID0gMDtcblxuLy8gJEZsb3dGaXhNZVxuQFBhcGVyU2NvcGVcbmNsYXNzIFNlZ21lbnRQYXRoVG9vbCBleHRlbmRzIFBhdGhUb29sPFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLi4uUGF0aFRvb2wuZGVmYXVsdFByb3BzLFxuICAgIHBhdGhQcm9wczoge1xuICAgICAgc3Ryb2tlQ29sb3I6ICdibGFjaycsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICB9LFxuICB9O1xuXG4gIG9uS2V5VXAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwYXRoLCBvblBhdGhBZGQgfSA9IHRoaXM7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIGlmIChwYXRoLnNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgb25QYXRoQWRkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duID0gKHRvb2xFdmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzO1xuICAgIGlmICh0b29sRXZlbnQuZXZlbnQuYnV0dG9uID09PSBNT1VTRV9MRUZUX0NPREUgJiYgdG9vbEV2ZW50Lm1vZGlmaWVycy5zaGlmdCkge1xuICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgIHRoaXMucGF0aEluaXQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vblBhdGhJbml0KHBhdGgpO1xuICAgICAgfVxuICAgICAgdGhpcy5vblNlZ21lbnRBZGQodG9vbEV2ZW50KTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbk1vdXNlRG93bih0b29sRXZlbnQpO1xuICB9XG5cbiAgcGF0aEluaXQoKSB7XG4gICAgY29uc3QgeyBwYXRoUHJvcHMsIHBhdGhEYXRhLCBwYXBlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IFBhdGggfSA9IHBhcGVyO1xuICAgIGNvbnN0IHBhdGggPSBuZXcgUGF0aChwYXRoUHJvcHMpO1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5zZXRQYXRoRGF0YShwYXRoRGF0YSk7XG4gIH1cblxuICBzZXRQYXRoRGF0YShwYXRoRGF0YTogc3RyaW5nKSB7XG4gICAgdGhpcy5wYXRoLnBhdGhEYXRhID0gcGF0aERhdGE7XG4gIH1cblxuICBvblNlZ21lbnRBZGQodG9vbEV2ZW50OiBUb29sRXZlbnQpIHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHRoaXM7XG4gICAgcGF0aC5hZGQodG9vbEV2ZW50LnBvaW50KTtcbiAgICB0aGlzLnByb3BzLm9uU2VnbWVudEFkZChwYXRoLmxhc3RTZWdtZW50LCBwYXRoKTtcbiAgfVxuXG4gIG9uUGF0aEFkZCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHRoaXM7XG4gICAgY29uc3QgeyBvblBhdGhBZGQgfSA9IHRoaXMucHJvcHM7XG4gICAgcGF0aC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIG9uUGF0aEFkZChwYXRoKTtcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhQcm9wcyxcbiAgICAgIG9uS2V5VXAsXG4gICAgICBvbk1vdXNlRG93bixcbiAgICAgIG9uUGF0aEFkZCxcbiAgICAgIG9uU2VnbWVudEFkZCxcbiAgICAgIG9uU2VnbWVudFJlbW92ZSxcbiAgICAgIHBhcGVyLFxuICAgICAgaW5uZXJSZWYsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sXG4gICAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICAgIG9uS2V5VXA9e3RoaXMub25LZXlVcH1cbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMub25Nb3VzZURvd259XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IDxTZWdtZW50UGF0aFRvb2wgaW5uZXJSZWY9e3JlZn0gey4uLnByb3BzfSAvPik7XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RQYXBlckpTIGZyb20gJ0Bwc3ljaG9ib2x0L3JlYWN0LXBhcGVyanMnO1xuaW1wb3J0IHR5cGUgeyBQYXBlciwgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQHBzeWNob2JvbHQvcmVhY3QtcGFwZXJqcyc7XG5pbXBvcnQgdHlwZSB7IEtleUV2ZW50LCBNb3VzZUV2ZW50IH0gZnJvbSAncGFwZXInO1xuXG5jb25zdCB7IFBhcGVyU2NvcGUsIGdldFByb3BzIH0gPSBSZWFjdFBhcGVySlM7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uUGFuRW5hYmxlZD86ICgpID0+IGFueSxcbiAgb25QYW5EaXNhYmxlZD86ICgpID0+IGFueSxcbiAgb25ab29tPzogKGxldmVsOiBudW1iZXIpID0+IGFueSxcbiAgem9vbUxldmVsPzogbnVtYmVyLFxuICBjZW50ZXI6IE9iamVjdCB8IG51bWJlcltdLFxuICBwYXBlcjogUGFwZXIsXG4gIG1lcmdlUHJvcHM6IChzdGF0ZToge30sIHByb3BzPzoge30pID0+IHt9LFxuICBjaGlsZHJlbjogYW55LFxufTtcblxudHlwZSBTdGF0ZSA9IHtcbiAgZHJhZ2dhYmxlOiBib29sZWFuLFxuICBkcmFnU3RhcnQ6ID9PYmplY3QsXG59O1xuXG5mdW5jdGlvbiBhZGQobnVtMSwgbnVtMikge1xuICByZXR1cm4gKChudW0xICogMTApICsgKG51bTIgKiAxMCkpIC8gMTA7XG59XG5cbmZ1bmN0aW9uIGNhbGxBbGxIYW5kbGVycyhoYW5kbGVyczogRXZlbnRIYW5kbGVyW10gPSBbXSkge1xuICByZXR1cm4gZXZlbnQgPT4gaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIgJiYgaGFuZGxlcihldmVudCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBAUGFwZXJTY29wZSBjbGFzcyBQYW5BbmRTY3JvbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgem9vbUxldmVsOiAxLFxuICAgIG9uUGFuRW5hYmxlZDogKCkgPT4ge30sXG4gICAgb25QYW5EaXNhYmxlZDogKCkgPT4ge30sXG4gICAgb25ab29tOiAoKSA9PiB7fSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICBkcmFnU3RhcnQ6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgcGFwZXIsIHpvb21MZXZlbCwgY2VudGVyLCBtZXJnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIG1lcmdlUHJvcHMoKHN0YXRlLCBwcm9wcykgPT4ge1xuICAgICAgY29uc3QgeyBvbldoZWVsLCAuLi5jYW52YXNQcm9wcyB9ID0gZ2V0UHJvcHMocGFwZXIsIHByb3BzLmNhbnZhc1Byb3BzKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgb25LZXlEb3duLCBvbktleVVwLCBvbk1vdXNlRG93biwgb25Nb3VzZURyYWcsIG9uTW91c2VVcCwgLi4udmlld1Byb3BzXG4gICAgICB9ID0gZ2V0UHJvcHMocGFwZXIsIHByb3BzLnZpZXdQcm9wcyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjYW52YXNQcm9wczoge1xuICAgICAgICAgIC4uLmNhbnZhc1Byb3BzLFxuICAgICAgICAgIG9uV2hlZWw6IGNhbGxBbGxIYW5kbGVycyhbb25XaGVlbCwgdGhpcy5vbldoZWVsXSksXG4gICAgICAgICAgJ2RyYWctc3RhdGUnOiAnZGlzYWJsZWQnLFxuICAgICAgICB9LFxuICAgICAgICB2aWV3UHJvcHM6IHtcbiAgICAgICAgICAuLi52aWV3UHJvcHMsXG4gICAgICAgICAgb25LZXlEb3duOiBjYWxsQWxsSGFuZGxlcnMoW29uS2V5RG93biwgdGhpcy5vbktleURvd25dKSxcbiAgICAgICAgICBvbktleVVwOiBjYWxsQWxsSGFuZGxlcnMoW29uS2V5VXAsIHRoaXMub25LZXlVcF0pLFxuICAgICAgICAgIG9uTW91c2VEb3duOiBjYWxsQWxsSGFuZGxlcnMoW29uTW91c2VEb3duLCB0aGlzLm9uTW91c2VEb3duXSksXG4gICAgICAgICAgb25Nb3VzZURyYWc6IGNhbGxBbGxIYW5kbGVycyhbb25Nb3VzZURyYWcsIHRoaXMub25Nb3VzZURyYWddKSxcbiAgICAgICAgICBvbk1vdXNlVXA6IGNhbGxBbGxIYW5kbGVycyhbb25Nb3VzZVVwLCB0aGlzLm9uTW91c2VVcF0pLFxuICAgICAgICAgIHpvb206IHpvb21MZXZlbCxcbiAgICAgICAgICBjZW50ZXIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgb25XaGVlbCA9ICh7IGRlbHRhWSB9OiBTeW50aGV0aWNXaGVlbEV2ZW50PEhUTUxDYW52YXNFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25ab29tLCBtZXJnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIG1lcmdlUHJvcHMoKHN0YXRlLCBwcm9wcykgPT4ge1xuICAgICAgbGV0IHsgem9vbSB9ID0gc3RhdGUudmlld1Byb3BzO1xuICAgICAgaWYgKGRlbHRhWSA8IDApIHtcbiAgICAgICAgem9vbSA9IGFkZCh6b29tLCAwLjEpO1xuICAgICAgICBvblpvb20oem9vbSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmlld1Byb3BzOiB7XG4gICAgICAgICAgICAuLi5wcm9wcy52aWV3UHJvcHMsXG4gICAgICAgICAgICAuLi5zdGF0ZS52aWV3UHJvcHMsXG4gICAgICAgICAgICB6b29tLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoZGVsdGFZID4gMCAmJiB6b29tID4gMC4xKSB7XG4gICAgICAgIHpvb20gPSBhZGQoem9vbSwgLTAuMSk7XG4gICAgICAgIG9uWm9vbSh6b29tKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2aWV3UHJvcHM6IHtcbiAgICAgICAgICAgIC4uLnByb3BzLnZpZXdQcm9wcyxcbiAgICAgICAgICAgIC4uLnN0YXRlLnZpZXdQcm9wcyxcbiAgICAgICAgICAgIHpvb20sXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICB9XG5cbiAgb25LZXlEb3duID0gKHsga2V5IH06IEtleUV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBkcmFnZ2FibGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKGtleSA9PT0gJ3NwYWNlJyAmJiAhZHJhZ2dhYmxlKSB7XG4gICAgICBjb25zdCB7IG9uUGFuRW5hYmxlZCwgbWVyZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIG1lcmdlUHJvcHMoKHN0YXRlLCBwcm9wcykgPT4gKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhbnZhc1Byb3BzOiB7XG4gICAgICAgICAgLi4ucHJvcHMuY2FudmFzUHJvcHMsXG4gICAgICAgICAgLi4uc3RhdGUuY2FudmFzUHJvcHMsXG4gICAgICAgICAgJ2RyYWctc3RhdGUnOiAnZW5hYmxlZCcsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZHJhZ2dhYmxlOiB0cnVlIH0pO1xuICAgICAgb25QYW5FbmFibGVkKCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlVcCA9ICh7IGtleSB9OiBLZXlFdmVudCkgPT4ge1xuICAgIGlmIChrZXkgPT09ICdzcGFjZScpIHtcbiAgICAgIGNvbnN0IHsgb25QYW5EaXNhYmxlZCwgbWVyZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIG1lcmdlUHJvcHMoKHN0YXRlLCBwcm9wcykgPT4gKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhbnZhc1Byb3BzOiB7XG4gICAgICAgICAgLi4ucHJvcHMuY2FudmFzUHJvcHMsXG4gICAgICAgICAgLi4uc3RhdGUuY2FudmFzUHJvcHMsXG4gICAgICAgICAgJ2RyYWctc3RhdGUnOiAnZGlzYWJsZWQnLFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyYWdnYWJsZTogZmFsc2UgfSk7XG4gICAgICBvblBhbkRpc2FibGVkKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURvd24gPSAoeyBwb2ludCB9OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBkcmFnZ2FibGUsIGRyYWdTdGFydCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoZHJhZ2dhYmxlICYmICFkcmFnU3RhcnQpIHtcbiAgICAgIGNvbnN0IHsgbWVyZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIG1lcmdlUHJvcHMoKHN0YXRlLCBwcm9wcykgPT4gKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhbnZhc1Byb3BzOiB7XG4gICAgICAgICAgLi4ucHJvcHMuY2FudmFzUHJvcHMsXG4gICAgICAgICAgLi4uc3RhdGUuY2FudmFzUHJvcHMsXG4gICAgICAgICAgJ2RyYWctc3RhdGUnOiAnZHJhZ2dpbmcnLFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyYWdTdGFydDogcG9pbnQgfSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZHJhZ1N0YXJ0LCBkcmFnZ2FibGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKGRyYWdTdGFydCkge1xuICAgICAgaWYgKGRyYWdnYWJsZSkge1xuICAgICAgICBjb25zdCB7IG1lcmdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIG1lcmdlUHJvcHMoKHN0YXRlLCBwcm9wcykgPT4gKHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBjYW52YXNQcm9wczoge1xuICAgICAgICAgICAgLi4ucHJvcHMuY2FudmFzUHJvcHMsXG4gICAgICAgICAgICAuLi5zdGF0ZS5jYW52YXNQcm9wcyxcbiAgICAgICAgICAgICdkcmFnLXN0YXRlJzogJ2VuYWJsZWQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcmFnU3RhcnQ6IG51bGwgfSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURyYWcgPSAoeyBwb2ludCB9OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBtZXJnZVByb3BzLCBwYXBlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRyYWdnYWJsZSwgZHJhZ1N0YXJ0IH0gPSB0aGlzLnN0YXRlO1xuICAgIG1lcmdlUHJvcHMoKHN0YXRlLCBwcm9wcykgPT4ge1xuICAgICAgaWYgKGRyYWdTdGFydCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZpZXdQcm9wczoge1xuICAgICAgICAgICAgLi4ucHJvcHMudmlld1Byb3BzLFxuICAgICAgICAgICAgLi4uc3RhdGUudmlld1Byb3BzLFxuICAgICAgICAgICAgY2VudGVyOlxuICAgICAgICAgICAgICBwYXBlci52aWV3LmNlbnRlclxuICAgICAgICAgICAgICAgIC5hZGQocG9pbnQuc3VidHJhY3QoZHJhZ1N0YXJ0KVxuICAgICAgICAgICAgICAgICAgLm11bHRpcGx5KDAuNSkpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgICBpZiAoZHJhZ2dhYmxlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZHJhZ1N0YXJ0OiBwb2ludCB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdFBhcGVySlMgZnJvbSAnQHBzeWNob2JvbHQvcmVhY3QtcGFwZXJqcyc7XG5pbXBvcnQgdHlwZW9mIHsgUG9pbnQsIFRvb2xFdmVudCwgVG9vbCBhcyBUb29sVHlwZSB9IGZyb20gJ3BhcGVyJztcblxuaW1wb3J0IFBhdGhUb29sIGZyb20gJy4uL3NoYXJlZC9QYXRoVG9vbCc7XG5cbmNvbnN0IHsgVG9vbCwgUGFwZXJTY29wZSB9ID0gUmVhY3RQYXBlckpTO1xuXG50eXBlIFByb3BzID0ge1xuICBwYXRoUHJvcHM6IHtcbiAgICBmaWxsQ29sb3I6IHN0cmluZyxcbiAgfSxcbiAgaW5uZXJSZWY6IFJlYWN0LlJlZjxUb29sVHlwZT5cbn07XG5cbmNvbnN0IE1PVVNFX0xFRlRfQ09ERSA9IDA7XG5cbi8vICRGbG93Rml4TWVcbkBQYXBlclNjb3BlXG5jbGFzcyBFbGxpcHNlVG9vbCBleHRlbmRzIFBhdGhUb29sPFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLi4uUGF0aFRvb2wuZGVmYXVsdFByb3BzLFxuICAgIHBhdGhQcm9wczoge1xuICAgICAgZmlsbENvbG9yOiAnd2hpdGUnLFxuICAgICAgc3Ryb2tlQ29sb3I6ICdibGFjaycsXG4gICAgfSxcbiAgfVxuXG4gIG9uTW91c2VEb3duID0gKHRvb2xFdmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYXRoUHJvcHMsIG9uTW91c2VEb3duLCBvblBhdGhJbml0LCBwYXBlciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodG9vbEV2ZW50LmV2ZW50LmJ1dHRvbiA9PT0gTU9VU0VfTEVGVF9DT0RFKSB7XG4gICAgICBjb25zdCB7IFBhdGgsIENvbG9yIH0gPSBwYXBlcjtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdG9vbEV2ZW50LnBvaW50O1xuICAgICAgY29uc3QgcGF0aCA9IG5ldyBQYXRoLkVsbGlwc2Uoe1xuICAgICAgICBwb2ludDogc3RhcnQsXG4gICAgICAgIHNpemU6IFsxLCAxXSxcbiAgICAgICAgZmlsbENvbG9yOiBwYXRoUHJvcHMuc2VsZWN0ZWRGaWxsQ29sb3IgfHwgbmV3IENvbG9yKDAuOSwgMC45LCAxLCAwLjc1KSxcbiAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgIG9uUGF0aEluaXQodGhpcy5wYXRoKTtcbiAgICB9XG4gICAgb25Nb3VzZURvd24odG9vbEV2ZW50KTtcbiAgfVxuXG4gIG9uTW91c2VEcmFnID0gKHRvb2xFdmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBvbk1vdXNlRHJhZyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodG9vbEV2ZW50LmV2ZW50LmJ1dHRvbnMgPT09IDEpIHtcbiAgICAgIGNvbnN0IHsgcGF0aCwgc3RhcnQgfSA9IHRoaXM7XG4gICAgICBjb25zdCB7IGJvdW5kcyB9ID0gcGF0aDtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHRvb2xFdmVudC5wb2ludC5zdWJ0cmFjdChzdGFydCk7XG4gICAgICBjb25zdCB3aWR0aCA9IE1hdGguYWJzKG9mZnNldC54KTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGguYWJzKG9mZnNldC55KTtcbiAgICAgIGlmIChvZmZzZXQueCA8IDApIHtcbiAgICAgICAgYm91bmRzLmxlZnQgPSB0b29sRXZlbnQucG9pbnQueDtcbiAgICAgICAgYm91bmRzLnJpZ2h0ID0gc3RhcnQueDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvdW5kcy5sZWZ0ID0gc3RhcnQueDtcbiAgICAgIH1cbiAgICAgIGlmIChvZmZzZXQueSA+IDApIHtcbiAgICAgICAgYm91bmRzLnRvcCA9IHN0YXJ0Lnk7XG4gICAgICAgIGJvdW5kcy5ib3R0b20gPSB0b29sRXZlbnQucG9pbnQueTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvdW5kcy50b3AgPSB0b29sRXZlbnQucG9pbnQueTtcbiAgICAgIH1cbiAgICAgIGlmICh3aWR0aCA+IDApIHtcbiAgICAgICAgYm91bmRzLndpZHRoID0gd2lkdGg7XG4gICAgICB9XG4gICAgICBpZiAoaGVpZ2h0ID4gMCkge1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICBvbk1vdXNlRHJhZyh0b29sRXZlbnQpO1xuICB9XG5cbiAgb25Nb3VzZVVwID0gKGV2ZW50OiBUb29sRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHRoaXM7XG4gICAgY29uc3QgeyBwYXRoUHJvcHMsIG9uTW91c2VVcCwgb25QYXRoQWRkIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChwYXRoKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHBhdGgsIHtcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAuLi5wYXRoUHJvcHMsXG4gICAgICB9KTtcbiAgICAgIG9uUGF0aEFkZChwYXRoKTtcbiAgICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgICB0aGlzLnN0YXJ0ID0gbnVsbDtcbiAgICB9XG4gICAgb25Nb3VzZVVwKGV2ZW50KTtcbiAgfVxuXG4gIHN0YXJ0OiBQb2ludDtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbm5lclJlZiwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2xcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLm9uTW91c2VEb3dufVxuICAgICAgICBvbk1vdXNlRHJhZz17dGhpcy5vbk1vdXNlRHJhZ31cbiAgICAgICAgb25Nb3VzZVVwPXt0aGlzLm9uTW91c2VVcH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiA8RWxsaXBzZVRvb2wgaW5uZXJSZWY9e3JlZn0gey4uLnByb3BzfSAvPik7XG4iXSwibmFtZXMiOlsiUGF0aFRvb2wiLCJwYXRoIiwiUmVhY3QiLCJkZWZhdWx0UHJvcHMiLCJvbktleURvd24iLCJvbktleVVwIiwib25Nb3VzZURvd24iLCJvbk1vdXNlRHJhZyIsIm9uTW91c2VVcCIsIm9uUGF0aEluaXQiLCJvblBhdGhBZGQiLCJvblNlZ21lbnRBZGQiLCJvblNlZ21lbnRSZW1vdmUiLCJUb29sIiwiUmVhY3RQYXBlckpTIiwiUGFwZXJTY29wZSIsIk1PVVNFX0xFRlRfQ09ERSIsIkZyZWVmb3JtUGF0aFRvb2wiLCJ0b29sRXZlbnQiLCJwcm9wcyIsInBhdGhQcm9wcyIsInBhcGVyIiwiZXZlbnQiLCJidXR0b24iLCJQYXRoIiwiYnV0dG9ucyIsImFkZCIsInBvaW50IiwiaW5uZXJSZWYiLCJyZXN0IiwiUmVhY3QuY3JlYXRlRWxlbWVudCIsInN0cm9rZUNvbG9yIiwicmVmIiwiTGF5ZXIiLCJHcm91cCIsIkxpbmUiLCJHcmlkIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJjZWxsU2l6ZSIsInN0cm9rZVdpZHRoIiwieCIsIk1hdGgiLCJjZWlsIiwieSIsImNvbHMiLCJyb3dzIiwidmVydGljYWxMaW5lcyIsImhvcml6b250YWxMaW5lcyIsImkiLCJwb3NpdGlvbiIsInB1c2giLCJMaW5lVG9vbCIsInJlbW92ZVNlZ21lbnQiLCJhZGRTZWdtZW50Iiwic2VsZWN0ZWQiLCJQb2x5Z29uVG9vbCIsInBhdGhJbml0Iiwic2VsZWN0ZWRTZWdtZW50IiwicG9pbnRzIiwicGF0aERhdGEiLCJzZXRQYXRoRGF0YSIsIk9iamVjdCIsImFzc2lnbiIsInJlbW92ZUJvdW5kcyIsInNlZ21lbnRzIiwiZm9yRWFjaCIsInNlZ21lbnQiLCJjcmVhdGVCb3VuZHMiLCJsYXN0U2VnbWVudCIsImluZGV4IiwicmVtb3ZlU2VnbWVudHMiLCJsZW5ndGgiLCJjbG9zZWQiLCJyZW1vdmUiLCJwcm9qZWN0IiwibGF5ZXJzIiwiJCRtZXRhZGF0YSIsImFkZENoaWxkIiwiYm91bmRzIiwiQ2lyY2xlIiwiY2VudGVyIiwicmFkaXVzIiwiZmlsbENvbG9yIiwib3BhY2l0eSIsIm9uIiwiZXF1YWxzIiwiY29udGFpbnMiLCJSZWN0YW5nbGVUb29sIiwiQ29sb3IiLCJzdGFydCIsIlJlY3RhbmdsZSIsInNpemUiLCJzZWxlY3RlZEZpbGxDb2xvciIsIm9mZnNldCIsInN1YnRyYWN0IiwiYWJzIiwiQ2lyY2xlVG9vbCIsInNjYWxlIiwiZ2V0RGlzdGFuY2UiLCJTZWdtZW50UGF0aFRvb2wiLCJtb2RpZmllcnMiLCJzaGlmdCIsImdldFByb3BzIiwibnVtMSIsIm51bTIiLCJjYWxsQWxsSGFuZGxlcnMiLCJoYW5kbGVycyIsImhhbmRsZXIiLCJQYW5BbmRTY3JvbGwiLCJvbldoZWVsIiwiZGVsdGFZIiwib25ab29tIiwibWVyZ2VQcm9wcyIsInN0YXRlIiwiem9vbSIsInZpZXdQcm9wcyIsImtleSIsImRyYWdnYWJsZSIsIm9uUGFuRW5hYmxlZCIsImNhbnZhc1Byb3BzIiwic2V0U3RhdGUiLCJvblBhbkRpc2FibGVkIiwiZHJhZ1N0YXJ0IiwidmlldyIsIm11bHRpcGx5Iiwiem9vbUxldmVsIiwiY2hpbGRyZW4iLCJFbGxpcHNlVG9vbCIsIkVsbGlwc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0JxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBYW5CQzs7Ozs7RUFidUNDOztBQUFwQkYsU0FDWkcsZUFBZTtFQUNwQkMsU0FBUyxFQUFFLHFCQUFNLEVBREc7RUFFcEJDLE9BQU8sRUFBRSxtQkFBTSxFQUZLO0VBR3BCQyxXQUFXLEVBQUUsdUJBQU0sRUFIQztFQUlwQkMsV0FBVyxFQUFFLHVCQUFNLEVBSkM7RUFLcEJDLFNBQVMsRUFBRSxxQkFBTSxFQUxHO0VBTXBCQyxVQUFVLEVBQUUsc0JB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

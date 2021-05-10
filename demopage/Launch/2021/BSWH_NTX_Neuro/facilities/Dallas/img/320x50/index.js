(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt_healthySpines = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(122.3,12.1).curveTo(121.3,11.1,121.3,9.5).curveTo(121.3,8,122.3,7.1).curveTo(123.3,6.1,124.8,6.1).curveTo(126.2,6.1,127.2,7.1).curveTo(128.2,8,128.2,9.5).curveTo(128.2,11.1,127.2,12.1).curveTo(126.2,12.9,124.8,13).curveTo(123.3,12.9,122.3,12.1).closePath().moveTo(98.8,12.6).lineTo(98.8,-12.9).lineTo(116.5,-12.9).lineTo(116.5,-7.4).lineTo(104.9,-7.4).lineTo(104.9,-3.1).lineTo(116.5,-3.1).lineTo(116.5,2.5).lineTo(104.9,2.5).lineTo(104.9,6.9).lineTo(116.5,6.9).lineTo(116.5,12.6).closePath().moveTo(89.3,12.6).lineTo(85.7,4.9).lineTo(80.8,4.9).lineTo(80.8,12.6).lineTo(74.7,12.6).lineTo(74.7,-12.9).lineTo(85.8,-12.9).curveTo(88,-13,89.9,-12.3).curveTo(91.6,-11.6,92.9,-10.4).curveTo(94.1,-9.3,94.8,-7.7).curveTo(95.3,-6.1,95.3,-4.2).curveTo(95.3,-1.8,94.2,0.3).curveTo(93.1,2.1,91.2,3.3).lineTo(96,12.6).closePath().moveTo(80.8,-0.6).lineTo(85.3,-0.6).curveTo(87.3,-0.6,88.2,-1.7).curveTo(89.2,-2.7,89.2,-4.1).curveTo(89.2,-5.7,88.2,-6.5).curveTo(87.3,-7.4,85.3,-7.4).lineTo(80.8,-7.4).closePath().moveTo(51.7,12.6).lineTo(51.7,-12.9).lineTo(69.5,-12.9).lineTo(69.5,-7.4).lineTo(57.8,-7.4).lineTo(57.8,-3.1).lineTo(69.5,-3.1).lineTo(69.5,2.5).lineTo(57.8,2.5).lineTo(57.8,6.9).lineTo(69.5,6.9).lineTo(69.5,12.6).closePath().moveTo(40.9,12.6).lineTo(40.9,2.6).lineTo(32.5,2.6).lineTo(32.5,12.6).lineTo(26.3,12.6).lineTo(26.3,-12.9).lineTo(32.5,-12.9).lineTo(32.5,-3.2).lineTo(40.9,-3.2).lineTo(40.9,-12.9).lineTo(47,-12.9).lineTo(47,12.6).closePath().moveTo(8.5,12.6).lineTo(-1.5,-3.6).lineTo(-1.5,12.6).lineTo(-7.4,12.6).lineTo(-7.4,-12.9).lineTo(-1,-12.9).lineTo(8.6,2.4).lineTo(8.6,-12.9).lineTo(14.5,-12.9).lineTo(14.5,12.6).closePath().moveTo(-29.8,12.6).lineTo(-29.8,-12.9).lineTo(-12.1,-12.9).lineTo(-12.1,-7.4).lineTo(-23.7,-7.4).lineTo(-23.7,-3.1).lineTo(-12.1,-3.1).lineTo(-12.1,2.5).lineTo(-23.7,2.5).lineTo(-23.7,6.9).lineTo(-12.1,6.9).lineTo(-12.1,12.6).closePath().moveTo(-53.5,12.6).lineTo(-53.5,-12.9).lineTo(-43.4,-12.9).curveTo(-41.1,-12.9,-39.2,-12.2).curveTo(-37.5,-11.5,-36.2,-10.2).curveTo(-34.8,-8.9,-34.1,-7.2).curveTo(-33.5,-5.4,-33.5,-3.6).curveTo(-33.5,-1.6,-34.1,0.3).curveTo(-34.8,1.9,-36.2,3.3).curveTo(-37.5,4.7,-39.2,5.4).curveTo(-41.1,6.2,-43.4,6.2).lineTo(-47.4,6.2).lineTo(-47.4,12.6).closePath().moveTo(-47.4,0.4).lineTo(-43.6,0.4).curveTo(-42,0.4,-40.8,-0.5).curveTo(-39.6,-1.7,-39.6,-3.6).curveTo(-39.6,-5.2,-40.8,-6.4).curveTo(-42,-7.4,-43.6,-7.4).lineTo(-47.4,-7.4).closePath().moveTo(-77,12.6).lineTo(-77,-12.9).lineTo(-66.7,-12.9).curveTo(-64.5,-12.9,-62.7,-12.2).curveTo(-60.7,-11.5,-59.5,-10.2).curveTo(-58.2,-8.9,-57.5,-7.2).curveTo(-56.9,-5.4,-56.9,-3.6).curveTo(-56.9,-1.6,-57.5,0.3).curveTo(-58.2,1.9,-59.4,3.3).curveTo(-60.7,4.7,-62.7,5.4).curveTo(-64.5,6.2,-66.7,6.2).lineTo(-70.8,6.2).lineTo(-70.8,12.6).closePath().moveTo(-70.8,0.4).lineTo(-67,0.4).curveTo(-65.4,0.4,-64.3,-0.5).curveTo(-63,-1.7,-63,-3.6).curveTo(-63,-5.2,-64.3,-6.4).curveTo(-65.4,-7.4,-67,-7.4).lineTo(-70.8,-7.4).closePath().moveTo(-86.2,12.6).lineTo(-87.5,8.8).lineTo(-97.4,8.8).lineTo(-98.8,12.6).lineTo(-104.9,12.6).lineTo(-95.5,-12.9).lineTo(-89.5,-12.9).lineTo(-80,12.6).closePath().moveTo(-89.4,3.4).lineTo(-92.5,-5.2).lineTo(-95.6,3.4).lineTo(-89.4,3.4).closePath().moveTo(-113.5,12.6).lineTo(-113.5,2.6).lineTo(-122.1,2.6).lineTo(-122.1,12.6).lineTo(-128.2,12.6).lineTo(-128.2,-12.9).lineTo(-122.1,-12.9).lineTo(-122.1,-3.2).lineTo(-113.5,-3.2).lineTo(-113.5,-12.9).lineTo(-107.4,-12.9).lineTo(-107.4,12.6).closePath();
	this.shape.setTransform(134.6546,-24.0501,0.3595,0.3595);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#008FBE").beginStroke().moveTo(134.1,13).curveTo(132.4,12.6,130.9,11.9).curveTo(129.6,11.3,128.5,10.2).curveTo(127.3,9.3,126.4,8.3).lineTo(131.6,3.8).curveTo(132.9,5.7,134.5,6.6).curveTo(136,7.6,138.2,7.6).curveTo(139.7,7.6,140.5,7).curveTo(141.4,6.2,141.4,5.1).curveTo(141.4,4.5,141,4).curveTo(140.7,3.6,140,3.3).lineTo(138.4,2.7).lineTo(133.2,1.3).curveTo(131.7,0.8,130.5,0.1).curveTo(129.3,-0.8,128.6,-2.2).curveTo(127.8,-3.5,127.8,-5.5).curveTo(127.8,-7.1,128.6,-8.6).curveTo(129.3,-10.1,130.5,-11.1).curveTo(131.7,-12.2,133.5,-12.8).curveTo(135.2,-13.4,137.2,-13.4).curveTo(139,-13.4,140.5,-13.2).curveTo(142.1,-12.8,143.3,-12.2).curveTo(144.5,-11.6,145.6,-10.8).lineTo(147.7,-8.7).lineTo(142.7,-4.9).curveTo(141.8,-6.3,140.5,-7.1).curveTo(139.1,-8,137.1,-8).curveTo(135.6,-8,135,-7.2).curveTo(134.1,-6.5,134.1,-5.6).curveTo(134,-5,134.5,-4.7).lineTo(135.5,-4).lineTo(142.4,-2.3).curveTo(143.9,-1.7,145,-0.9).curveTo(146.3,0.1,147.1,1.3).curveTo(147.8,2.8,147.8,4.9).curveTo(147.8,6.7,147.1,8.3).curveTo(146.4,9.8,145,10.9).curveTo(143.8,12.2,141.9,12.7).curveTo(140,13.4,137.9,13.4).curveTo(135.7,13.4,134.1,13).closePath().moveTo(27.8,13).curveTo(26,12.6,24.5,11.9).curveTo(23.2,11.3,22.1,10.2).curveTo(20.9,9.3,20,8.3).lineTo(25.3,3.8).curveTo(26.6,5.7,28.1,6.6).curveTo(29.7,7.6,31.9,7.6).curveTo(33.4,7.6,34.2,7).curveTo(35.1,6.2,35.1,5.1).curveTo(35.1,4.5,34.7,4).curveTo(34.5,3.6,33.7,3.3).lineTo(32.1,2.7).lineTo(26.7,1.3).curveTo(25.2,0.8,24,0.1).curveTo(23,-0.8,22.2,-2.2).curveTo(21.4,-3.5,21.5,-5.5).curveTo(21.4,-7.1,22.2,-8.6).curveTo(23,-10.1,24,-11.1).curveTo(25.4,-12.2,27.1,-12.8).curveTo(29,-13.4,31,-13.4).curveTo(32.7,-13.4,34.2,-13.2).curveTo(35.7,-12.8,37,-12.2).curveTo(38.2,-11.6,39.2,-10.8).lineTo(41.4,-8.7).lineTo(36.3,-4.9).curveTo(35.3,-6.3,34.2,-7.1).curveTo(32.8,-8,30.9,-8).curveTo(29.3,-8,28.5,-7.2).curveTo(27.8,-6.5,27.8,-5.6).curveTo(27.8,-5,28.1,-4.7).lineTo(29.2,-4).lineTo(36,-2.3).curveTo(37.5,-1.7,38.7,-0.9).curveTo(39.9,0.1,40.7,1.3).curveTo(41.4,2.8,41.4,4.9).curveTo(41.4,6.7,40.7,8.3).curveTo(40,9.8,38.7,10.9).curveTo(37.4,12.2,35.5,12.7).curveTo(33.8,13.4,31.6,13.4).curveTo(29.4,13.4,27.8,13).closePath().moveTo(106.5,13).lineTo(106.5,-12.9).lineTo(124.5,-12.9).lineTo(124.5,-7.2).lineTo(112.7,-7.2).lineTo(112.7,-2.9).lineTo(124.5,-2.9).lineTo(124.5,2.8).lineTo(112.7,2.8).lineTo(112.7,7.2).lineTo(124.5,7.2).lineTo(124.5,13).closePath().moveTo(96.5,13).lineTo(86.2,-3.3).lineTo(86.2,13).lineTo(80.3,13).lineTo(80.3,-12.9).lineTo(86.7,-12.9).lineTo(96.5,2.5).lineTo(96.5,-12.9).lineTo(102.4,-12.9).lineTo(102.4,13).closePath().moveTo(69.8,13).lineTo(69.8,-12.9).lineTo(76.1,-12.9).lineTo(76.1,13).closePath().moveTo(45.7,13).lineTo(45.7,-12.9).lineTo(56,-12.9).curveTo(58.4,-12.9,60.3,-12.2).curveTo(62.1,-11.5,63.3,-10.2).curveTo(64.7,-8.7,65.4,-7.1).curveTo(66,-5.3,66,-3.3).curveTo(66,-1.4,65.4,0.4).curveTo(64.7,2,63.4,3.5).curveTo(62.1,4.9,60.3,5.7).curveTo(58.4,6.5,56,6.5).lineTo(51.8,6.5).lineTo(51.8,13).closePath().moveTo(51.8,0.7).lineTo(55.8,0.7).curveTo(57.6,0.7,58.7,-0.3).curveTo(59.8,-1.4,59.8,-3.3).curveTo(59.8,-5,58.7,-6.2).curveTo(57.6,-7.4,55.8,-7.4).lineTo(51.8,-7.4).closePath().moveTo(-2.8,13).lineTo(-2.8,2).lineTo(-11.3,-12.9).lineTo(-4.5,-12.9).lineTo(0.4,-3.7).lineTo(5.4,-12.9).lineTo(12,-12.9).lineTo(3.5,2).lineTo(3.5,13).closePath().moveTo(-19.5,13).lineTo(-19.5,2.9).lineTo(-27.9,2.9).lineTo(-27.9,13).lineTo(-34.2,13).lineTo(-34.2,-12.9).lineTo(-27.9,-12.9).lineTo(-27.9,-3).lineTo(-19.5,-3).lineTo(-19.5,-12.9).lineTo(-13.3,-12.9).lineTo(-13.3,13).closePath().moveTo(-50.7,13).lineTo(-50.7,-7.2).lineTo(-57.6,-7.2).lineTo(-57.6,-12.9).lineTo(-37.6,-12.9).lineTo(-37.6,-7.2).lineTo(-44.6,-7.2).lineTo(-44.6,13).closePath().moveTo(-74.3,13).lineTo(-74.3,-12.9).lineTo(-68.1,-12.9).lineTo(-68.1,7.1).lineTo(-56.7,7.1).lineTo(-56.7,13).closePath().moveTo(-82.7,13).lineTo(-84.1,9.2).lineTo(-94,9.2).lineTo(-95.3,13).lineTo(-101.5,13).lineTo(-92.1,-12.9).lineTo(-86.2,-12.9).lineTo(-76.4,13).closePath().moveTo(-86,3.7).lineTo(-89,-5).lineTo(-92.2,3.7).lineTo(-86,3.7).closePath().moveTo(-122.5,13).lineTo(-122.5,-12.9).lineTo(-104.6,-12.9).lineTo(-104.6,-7.2).lineTo(-116.5,-7.2).lineTo(-116.5,-2.9).lineTo(-104.6,-2.9).lineTo(-104.6,2.8).lineTo(-116.5,2.8).lineTo(-116.5,7.2).lineTo(-104.6,7.2).lineTo(-104.6,13).closePath().moveTo(-133,13).lineTo(-133,2.9).lineTo(-141.6,2.9).lineTo(-141.6,13).lineTo(-147.8,13).lineTo(-147.8,-12.9).lineTo(-141.6,-12.9).lineTo(-141.6,-3).lineTo(-133,-3).lineTo(-133,-12.9).lineTo(-126.8,-12.9).lineTo(-126.8,13).closePath();
	this.shape_1.setTransform(31.2411,-24.1131,0.3595,0.3595);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_healthySpines, new cjs.Rectangle(-21.9,-28.9,227.9,64.5), null);


(lib.txt_doWhatYou = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(106.8,12.5).curveTo(105.8,11.5,105.8,10).curveTo(105.8,8.4,106.8,7.5).curveTo(107.7,6.5,109.2,6.5).curveTo(110.9,6.5,111.9,7.5).curveTo(112.9,8.4,112.8,10).curveTo(112.9,11.5,111.9,12.5).curveTo(110.9,13.5,109.2,13.5).curveTo(107.7,13.5,106.8,12.5).closePath().moveTo(17.9,12.4).curveTo(15.4,11.4,13.6,9.5).curveTo(11.8,7.6,10.9,5.2).curveTo(9.9,2.7,9.9,-0.1).curveTo(9.9,-2.9,10.9,-5.3).curveTo(12,-7.8,13.7,-9.6).curveTo(15.6,-11.4,18,-12.5).curveTo(20.5,-13.5,23.5,-13.5).curveTo(27.4,-13.5,30,-12).curveTo(32.8,-10.6,34.7,-8.2).lineTo(29.4,-4.5).curveTo(28.5,-6,26.9,-6.8).curveTo(25.5,-7.6,23.5,-7.6).curveTo(22,-7.6,20.6,-7).curveTo(19.2,-6.5,18.3,-5.4).curveTo(17.3,-4.4,16.8,-3).curveTo(16.2,-1.6,16.2,-0.1).curveTo(16.2,1.7,16.8,3.1).curveTo(17.3,4.4,18.2,5.3).curveTo(19.2,6.5,20.6,7).curveTo(22,7.5,23.6,7.5).curveTo(25.9,7.5,27.4,6.5).curveTo(28.9,5.3,29.7,3.3).lineTo(22.4,3.3).lineTo(22.4,-2.5).lineTo(36.5,-2.5).lineTo(36.5,0.5).curveTo(36.5,3.2,35.6,5.6).curveTo(34.6,7.8,32.9,9.6).curveTo(31.3,11.4,28.8,12.4).curveTo(26.5,13.5,23.6,13.5).curveTo(20.5,13.5,17.9,12.4).closePath().moveTo(-91.5,12.4).curveTo(-94,11.4,-95.8,9.6).curveTo(-97.7,7.7,-98.7,5.2).curveTo(-99.7,2.8,-99.7,-0.1).curveTo(-99.7,-2.9,-98.7,-5.3).curveTo(-97.7,-7.7,-95.8,-9.5).curveTo(-94,-11.4,-91.5,-12.5).curveTo(-89.1,-13.5,-86.3,-13.5).curveTo(-83.5,-13.5,-81.1,-12.5).curveTo(-78.6,-11.4,-76.7,-9.5).curveTo(-74.9,-7.7,-73.8,-5.3).curveTo(-72.9,-2.9,-72.9,-0.1).curveTo(-72.9,2.8,-73.8,5.2).curveTo(-74.9,7.7,-76.6,9.6).curveTo(-78.6,11.4,-81.1,12.4).curveTo(-83.5,13.5,-86.3,13.5).curveTo(-89.1,13.5,-91.5,12.4).closePath().moveTo(-89.1,-6.8).curveTo(-90.5,-6.2,-91.3,-5.2).curveTo(-92.3,-4.2,-92.8,-2.9).curveTo(-93.3,-1.5,-93.4,-0.1).curveTo(-93.3,1.4,-92.8,2.8).curveTo(-92.3,4.1,-91.4,5.1).curveTo(-90.4,6.2,-89.1,6.7).curveTo(-87.8,7.2,-86.3,7.2).curveTo(-84.8,7.2,-83.5,6.7).curveTo(-82.1,6.2,-81.1,5.1).curveTo(-80.2,4.1,-79.6,2.8).curveTo(-79,1.4,-79.1,-0.1).curveTo(-79,-1.5,-79.6,-2.9).curveTo(-80.2,-4.2,-81.1,-5.2).curveTo(-82.1,-6.2,-83.5,-6.8).curveTo(-84.8,-7.4,-86.3,-7.4).curveTo(-87.8,-7.4,-89.1,-6.8).closePath().moveTo(91.5,13.1).lineTo(81,-3.4).lineTo(81,13.1).lineTo(75.1,13.1).lineTo(75.1,-13.1).lineTo(81.6,-13.1).lineTo(91.5,2.6).lineTo(91.5,-13.1).lineTo(97.5,-13.1).lineTo(97.5,13.1).closePath().moveTo(64.5,13.1).lineTo(64.5,-13.1).lineTo(70.8,-13.1).lineTo(70.8,13.1).closePath().moveTo(55.4,13.1).lineTo(53.9,9.2).lineTo(44.1,9.2).lineTo(42.6,13.1).lineTo(36.3,13.1).lineTo(46,-13.1).lineTo(52,-13.1).lineTo(61.8,13.1).closePath().moveTo(52.1,3.8).lineTo(49,-5.1).lineTo(45.9,3.8).lineTo(52.1,3.8).closePath().moveTo(2.4,13.1).lineTo(0.9,9.2).lineTo(-9.1,9.2).lineTo(-10.4,13.1).lineTo(-16.8,13.1).lineTo(-7.1,-13.1).lineTo(-1,-13.1).lineTo(8.8,13.1).closePath().moveTo(-0.9,3.8).lineTo(-4,-5.1).lineTo(-7.2,3.8).lineTo(-0.9,3.8).closePath().moveTo(-44.2,13.1).lineTo(-44.2,-13.1).lineTo(-26.2,-13.1).lineTo(-26.2,-7.4).lineTo(-38,-7.4).lineTo(-38,-3).lineTo(-26.2,-3).lineTo(-26.2,2.9).lineTo(-38,2.9).lineTo(-38,7.2).lineTo(-26.2,7.2).lineTo(-26.2,13.1).closePath().moveTo(-62.6,13.1).lineTo(-72.3,-13.1).lineTo(-65.8,-13.1).lineTo(-59.5,4.6).lineTo(-53.3,-13.1).lineTo(-46.8,-13.1).lineTo(-56.5,13.1).closePath().moveTo(-118.7,13.1).lineTo(-118.7,-13.1).lineTo(-112.3,-13.1).lineTo(-112.3,7.2).lineTo(-100.8,7.2).lineTo(-100.8,13.1).closePath().moveTo(106.8,4.7).lineTo(106.8,4.6).curveTo(106.7,2.6,107.2,1.2).curveTo(107.7,-0.1,108.2,-1).curveTo(108.9,-1.8,109.7,-2.3).lineTo(112.1,-4.3).curveTo(112.5,-4.9,112.5,-5.7).curveTo(112.5,-6.8,111.8,-7.5).curveTo(111.2,-8.2,109.7,-8.2).curveTo(108.5,-8.2,107.7,-7.4).curveTo(106.8,-6.7,106.4,-5.6).lineTo(101.1,-8.1).curveTo(102.1,-10.6,104.3,-12).curveTo(106.5,-13.5,110.1,-13.5).curveTo(112.1,-13.5,113.6,-12.9).curveTo(115.2,-12.3,116.3,-11.3).curveTo(117.5,-10.3,118,-8.9).curveTo(118.7,-7.4,118.7,-5.9).curveTo(118.6,-4.1,118.2,-3.1).curveTo(117.6,-2,116.9,-1.3).curveTo(116.2,-0.6,115.2,-0.1).lineTo(113.6,0.9).curveTo(112.9,1.6,112.4,2.3).curveTo(111.9,3.2,111.9,4.6).lineTo(111.9,4.7).closePath();
	this.shape.setTransform(112.3495,-23.4964,0.3567,0.3567);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#008FBE").beginStroke().moveTo(112,12.8).curveTo(110.1,12,108.6,10.6).curveTo(107.3,9.3,106.5,7.4).curveTo(105.8,5.3,105.8,2.8).lineTo(105.8,-13.2).lineTo(112.2,-13.2).lineTo(112.2,2.8).curveTo(112.2,4.9,113.3,6.2).curveTo(114.4,7.4,116.4,7.4).curveTo(118.2,7.4,119.5,6.2).curveTo(120.7,4.9,120.7,2.8).lineTo(120.7,-13.2).lineTo(127,-13.2).lineTo(127,2.8).curveTo(127,5.3,126.3,7.4).curveTo(125.5,9.3,124.2,10.6).curveTo(122.8,12,120.8,12.8).curveTo(118.9,13.5,116.5,13.5).curveTo(114,13.5,112,12.8).closePath().moveTo(83.3,12.5).curveTo(80.8,11.4,79,9.6).curveTo(77.2,7.7,76.1,5.2).curveTo(75.1,2.8,75.1,-0.1).curveTo(75.1,-2.9,76.1,-5.3).curveTo(77.2,-7.8,79,-9.5).curveTo(80.8,-11.4,83.3,-12.4).curveTo(85.8,-13.5,88.6,-13.5).curveTo(91.3,-13.5,93.9,-12.4).curveTo(96.2,-11.4,98.1,-9.5).curveTo(100,-7.8,101,-5.3).curveTo(102.1,-2.9,102.1,-0.1).curveTo(102.1,2.8,101,5.2).curveTo(100,7.7,98.2,9.6).curveTo(96.2,11.4,93.9,12.5).curveTo(91.3,13.5,88.6,13.5).curveTo(85.8,13.5,83.3,12.5).closePath().moveTo(85.8,-6.9).curveTo(84.4,-6.3,83.5,-5.1).curveTo(82.5,-4.2,82,-2.9).curveTo(81.5,-1.5,81.5,-0.1).curveTo(81.5,1.4,82,2.8).curveTo(82.5,4.1,83.4,5.1).curveTo(84.4,6.2,85.7,6.8).curveTo(87,7.2,88.6,7.2).curveTo(90.1,7.2,91.5,6.8).curveTo(92.8,6.2,93.7,5.1).curveTo(94.6,4.1,95.2,2.8).curveTo(95.8,1.4,95.8,-0.1).curveTo(95.8,-1.5,95.2,-2.9).curveTo(94.6,-4.2,93.7,-5.1).curveTo(92.7,-6.3,91.3,-6.9).curveTo(90.1,-7.4,88.6,-7.4).curveTo(87,-7.4,85.8,-6.9).closePath().moveTo(-92.6,12.5).curveTo(-95.1,11.4,-97,9.6).curveTo(-98.8,7.7,-99.8,5.2).curveTo(-100.9,2.8,-100.9,-0.1).curveTo(-100.9,-2.9,-99.8,-5.3).curveTo(-98.8,-7.8,-97,-9.5).curveTo(-95.1,-11.4,-92.6,-12.4).curveTo(-90.1,-13.5,-87.4,-13.5).curveTo(-84.6,-13.5,-82.2,-12.4).curveTo(-79.7,-11.4,-77.9,-9.5).curveTo(-76,-7.8,-75,-5.3).curveTo(-73.9,-2.9,-73.9,-0.1).curveTo(-73.9,2.8,-75,5.2).curveTo(-76,7.7,-77.8,9.6).curveTo(-79.7,11.4,-82,12.5).curveTo(-84.6,13.5,-87.4,13.5).curveTo(-90.1,13.5,-92.6,12.5).closePath().moveTo(-90.1,-6.9).curveTo(-91.6,-6.3,-92.5,-5.1).curveTo(-93.5,-4.2,-94,-2.9).curveTo(-94.5,-1.5,-94.5,-0.1).curveTo(-94.5,1.4,-94,2.8).curveTo(-93.5,4.1,-92.6,5.1).curveTo(-91.6,6.2,-90.2,6.8).curveTo(-88.9,7.2,-87.4,7.2).curveTo(-85.8,7.2,-84.4,6.8).curveTo(-83.2,6.2,-82.2,5.1).curveTo(-81.3,4.1,-80.7,2.8).curveTo(-80.2,1.4,-80.2,-0.1).curveTo(-80.2,-1.5,-80.7,-2.9).curveTo(-81.3,-4.2,-82.2,-5.1).curveTo(-83.3,-6.3,-84.6,-6.9).curveTo(-85.8,-7.4,-87.4,-7.4).curveTo(-88.9,-7.4,-90.1,-6.9).closePath().moveTo(60,13.1).lineTo(60,2.2).lineTo(51.4,-13.2).lineTo(58.2,-13.2).lineTo(63.3,-3.7).lineTo(68.2,-13.2).lineTo(75,-13.2).lineTo(66.4,2.2).lineTo(66.4,13.1).closePath().moveTo(29.7,13.1).lineTo(29.7,-7.4).lineTo(22.6,-7.4).lineTo(22.6,-13.2).lineTo(43,-13.2).lineTo(43,-7.4).lineTo(35.9,-7.4).lineTo(35.9,13.1).closePath().moveTo(16.3,13.1).lineTo(14.8,9.2).lineTo(4.8,9.2).lineTo(3.5,13.1).lineTo(-2.8,13.1).lineTo(6.8,-13.2).lineTo(12.9,-13.2).lineTo(22.7,13.1).closePath().moveTo(13,3.8).lineTo(9.9,-5.1).lineTo(6.7,3.8).lineTo(13,3.8).closePath().moveTo(-10.6,13.1).lineTo(-10.6,3).lineTo(-19.4,3).lineTo(-19.4,13.1).lineTo(-25.7,13.1).lineTo(-25.7,-13.2).lineTo(-19.4,-13.2).lineTo(-19.4,-3.1).lineTo(-10.6,-3.1).lineTo(-10.6,-13.2).lineTo(-4.3,-13.2).lineTo(-4.3,13.1).closePath().moveTo(-41.6,13.1).lineTo(-46.4,-3.5).lineTo(-50.8,13.1).lineTo(-57.2,13.1).lineTo(-64.4,-13.2).lineTo(-58,-13.2).lineTo(-53.8,3.1).lineTo(-49.3,-13.2).lineTo(-43.3,-13.2).lineTo(-38.7,3.1).lineTo(-34.6,-13.2).lineTo(-28.3,-13.2).lineTo(-35.6,13.1).closePath().moveTo(-127,13.1).lineTo(-127,-13.2).lineTo(-117.7,-13.2).curveTo(-114.6,-13.2,-112.1,-12.2).curveTo(-109.6,-11.1,-107.7,-9.4).curveTo(-105.9,-7.7,-105,-5.1).curveTo(-103.9,-2.9,-103.9,-0.1).curveTo(-103.9,2.8,-105,5.2).curveTo(-106.1,7.7,-107.8,9.4).curveTo(-109.7,11.1,-112.1,12.2).curveTo(-114.6,13.1,-117.5,13.1).closePath().moveTo(-120.8,7.2).lineTo(-117.9,7.2).curveTo(-116.1,7.2,-114.7,6.8).curveTo(-113.3,6.2,-112.3,5.2).curveTo(-111.4,4.1,-110.8,2.8).curveTo(-110.3,1.4,-110.3,-0.1).curveTo(-110.3,-1.6,-110.8,-3).curveTo(-111.3,-4.2,-112.3,-5.1).curveTo(-113.2,-6.3,-114.7,-6.8).curveTo(-116.1,-7.4,-118,-7.4).lineTo(-120.8,-7.4).closePath();
	this.shape_1.setTransform(21.0715,-23.3448,0.3567,0.3567);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_doWhatYou, new cjs.Rectangle(-24.2,-28.3,199.2,63.900000000000006), null);


(lib.txt_better = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(-1.5,1.5).curveTo(-2.1,0.9,-2.1,0).curveTo(-2.1,-0.9,-1.5,-1.5).curveTo(-0.9,-2.1,0,-2.1).curveTo(0.9,-2.1,1.5,-1.5).curveTo(2.1,-0.9,2.1,0).curveTo(2.1,0.9,1.5,1.5).curveTo(0.9,2.1,0,2.1).curveTo(-1,2.1,-1.5,1.5).closePath();
	this.shape.setTransform(75.175,-35.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#008FBE").beginStroke().moveTo(14.5,7.7).curveTo(13.4,7.3,12.6,6.4).curveTo(11.8,5.6,11.3,4.5).curveTo(11,3.4,11,2.1).curveTo(11,0.9,11.4,-0.2).curveTo(11.9,-1.3,12.7,-2.2).curveTo(13.5,-3,14.7,-3.5).curveTo(15.8,-3.8,17.1,-3.8).curveTo(18.4,-3.8,19.5,-3.5).curveTo(20.6,-3,21.4,-2.2).curveTo(22.2,-1.4,22.7,-0.3).curveTo(23,0.8,23,2.1).lineTo(23,3.4).lineTo(14.5,3.4).curveTo(14.7,4.2,15.5,4.7).curveTo(16.1,5.2,17.2,5.2).curveTo(17.9,5.1,18.5,4.8).curveTo(19.2,4.5,19.5,3.9).lineTo(22.5,5.6).curveTo(21.5,6.8,20.3,7.5).curveTo(19.1,8.1,17.1,8.2).curveTo(15.7,8.1,14.5,7.7).closePath().moveTo(19.5,0.7).curveTo(19.2,-0.1,18.6,-0.5).curveTo(17.9,-0.8,17.1,-0.8).curveTo(16.2,-0.8,15.6,-0.5).curveTo(14.9,-0,14.6,0.7).lineTo(19.5,0.7).lineTo(19.5,0.7).closePath().moveTo(6.1,7.9).curveTo(5.4,7.7,4.9,7.2).curveTo(4.4,6.5,4.1,5.7).curveTo(3.8,4.9,3.8,3.6).lineTo(3.8,-0.5).lineTo(1.8,-0.5).lineTo(1.8,-3.6).lineTo(3.8,-3.6).lineTo(3.8,-6.2).lineTo(7.4,-8.1).lineTo(7.4,-3.6).lineTo(10.2,-3.6).lineTo(10.2,-0.5).lineTo(7.4,-0.5).lineTo(7.4,3.3).curveTo(7.4,4.2,7.6,4.5).curveTo(7.9,4.8,8.4,4.8).curveTo(8.9,4.8,9.3,4.4).lineTo(11,7.2).curveTo(10.3,7.6,9.6,7.9).curveTo(8.8,8.1,7.9,8.2).curveTo(6.9,8.1,6.1,7.9).closePath().moveTo(-2.9,7.9).curveTo(-3.6,7.7,-4.1,7.2).curveTo(-4.6,6.5,-4.9,5.7).curveTo(-5.2,4.9,-5.2,3.6).lineTo(-5.2,-0.5).lineTo(-7.2,-0.5).lineTo(-7.2,-3.6).lineTo(-5.2,-3.6).lineTo(-5.2,-6.2).lineTo(-1.6,-8.1).lineTo(-1.6,-3.6).lineTo(1.2,-3.6).lineTo(1.2,-0.5).lineTo(-1.6,-0.5).lineTo(-1.6,3.3).curveTo(-1.6,4.2,-1.4,4.5).curveTo(-1.1,4.8,-0.6,4.8).curveTo(-0.1,4.8,0.3,4.4).lineTo(2,7.2).curveTo(1.3,7.6,0.5,7.9).curveTo(-0.2,8.1,-1.1,8.2).curveTo(-2.1,8.1,-2.9,7.9).closePath().moveTo(-16.2,7.7).curveTo(-17.4,7.3,-18.2,6.4).curveTo(-18.9,5.6,-19.4,4.5).curveTo(-19.8,3.4,-19.8,2.1).curveTo(-19.8,0.9,-19.4,-0.2).curveTo(-18.9,-1.3,-18.1,-2.2).curveTo(-17.2,-3,-16.1,-3.5).curveTo(-15,-3.8,-13.8,-3.8).curveTo(-12.4,-3.8,-11.3,-3.5).curveTo(-10.2,-3,-9.4,-2.2).curveTo(-8.6,-1.4,-8.1,-0.3).curveTo(-7.7,0.8,-7.7,2.1).lineTo(-7.7,3.4).lineTo(-16.3,3.4).curveTo(-16,4.2,-15.3,4.7).curveTo(-14.6,5.2,-13.7,5.2).curveTo(-12.8,5.1,-12.2,4.8).curveTo(-11.6,4.5,-11.3,3.9).lineTo(-8.3,5.6).curveTo(-9.3,6.8,-10.5,7.5).curveTo(-11.7,8.1,-13.7,8.2).curveTo(-15.1,8.1,-16.2,7.7).closePath().moveTo(-11.3,0.7).curveTo(-11.5,-0.1,-12.2,-0.5).curveTo(-12.8,-0.8,-13.7,-0.8).curveTo(-14.6,-0.8,-15.2,-0.5).curveTo(-15.9,-0,-16.2,0.7).lineTo(-11.3,0.7).lineTo(-11.3,0.7).closePath().moveTo(24,8).lineTo(24,-3.6).lineTo(27.6,-3.6).lineTo(27.6,-2).curveTo(28.1,-3.1,28.9,-3.5).curveTo(29.7,-3.8,30.9,-3.8).lineTo(31.9,-3.7).lineTo(32.8,-3.5).lineTo(31.6,0.1).lineTo(30.9,-0.1).curveTo(30.5,-0.3,29.9,-0.3).curveTo(28.9,-0.3,28.2,0.3).curveTo(27.6,0.8,27.6,2.2).lineTo(27.6,8).closePath().moveTo(-32.9,8).lineTo(-32.9,-7.7).lineTo(-26.6,-7.7).curveTo(-23.7,-7.7,-22.3,-6.6).curveTo(-20.9,-5.4,-20.9,-3.3).curveTo(-20.9,-2.1,-21.3,-1.5).curveTo(-21.7,-0.7,-22.5,-0.1).curveTo(-21.6,0.4,-21.1,1.1).curveTo(-20.6,2,-20.6,3.2).curveTo(-20.6,5.7,-22.2,6.8).curveTo(-23.8,8,-26.6,8).closePath().moveTo(-29.2,4.6).lineTo(-26.6,4.6).curveTo(-25.4,4.6,-24.9,4.3).curveTo(-24.5,3.8,-24.5,3.1).curveTo(-24.5,2.3,-24.9,2).curveTo(-25.4,1.6,-26.6,1.7).lineTo(-29.2,1.7).closePath().moveTo(-29.2,-1.7).lineTo(-26.5,-1.7).curveTo(-25.4,-1.7,-25,-2.1).curveTo(-24.6,-2.5,-24.6,-3.2).curveTo(-24.6,-3.7,-25,-4.2).curveTo(-25.5,-4.4,-26.5,-4.4).lineTo(-29.2,-4.4).closePath();
	this.shape_1.setTransform(41.05,-41.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_better, new cjs.Rectangle(0,-49.7,162.7,91.80000000000001), null);


(lib.txt_believeIt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(74.9,13.9).curveTo(73.9,12.8,73.9,11.2).curveTo(73.9,9.6,74.9,8.6).curveTo(75.9,7.6,77.6,7.6).curveTo(79.2,7.6,80.2,8.6).curveTo(81.2,9.6,81.2,11.2).curveTo(81.2,12.8,80.2,13.9).curveTo(79.2,14.9,77.6,14.9).curveTo(75.9,14.9,74.9,13.9).closePath().moveTo(65.6,14.4).curveTo(64.2,14,63.3,13.1).curveTo(62.4,12.1,62,10.6).curveTo(61.5,9.1,61.5,6.8).lineTo(61.5,-0.1).lineTo(58,-0.1).lineTo(58,-5.6).lineTo(61.5,-5.6).lineTo(61.5,-9.9).lineTo(67.7,-13.4).lineTo(67.7,-5.6).lineTo(72.6,-5.6).lineTo(72.6,-0.1).lineTo(67.7,-0.1).lineTo(67.7,6.5).curveTo(67.7,8,68.1,8.5).curveTo(68.6,9,69.4,9).curveTo(70.3,9,71.1,8.3).lineTo(73.8,13).curveTo(72.8,13.9,71.4,14.3).curveTo(70.1,14.8,68.5,14.8).curveTo(66.9,14.8,65.6,14.4).closePath().moveTo(27.4,14).curveTo(25.4,13.2,24.1,11.8).curveTo(22.7,10.4,21.9,8.5).curveTo(21.2,6.6,21.2,4.5).curveTo(21.2,2.3,22,0.4).curveTo(22.9,-1.5,24.2,-2.9).curveTo(25.6,-4.4,27.6,-5.2).curveTo(29.5,-6,31.7,-6).curveTo(34,-6,36,-5.2).curveTo(37.9,-4.4,39.3,-3).curveTo(40.7,-1.7,41.5,0.2).curveTo(42.2,2.1,42.2,4.3).lineTo(42.2,6.5).lineTo(27.2,6.5).curveTo(27.8,8,29,8.8).curveTo(30.2,9.6,31.9,9.6).curveTo(33.4,9.6,34.4,9.1).curveTo(35.4,8.5,36,7.5).lineTo(41.1,10.4).curveTo(39.5,12.5,37.3,13.7).curveTo(35.2,14.8,31.7,14.8).curveTo(29.3,14.8,27.4,14).closePath().moveTo(36,1.9).curveTo(35.6,0.6,34.4,-0.1).curveTo(33.4,-0.8,31.7,-0.8).curveTo(30.3,-0.8,29.2,-0.1).curveTo(28.1,0.6,27.4,1.9).lineTo(36,1.9).lineTo(36,1.9).closePath().moveTo(-13.7,14).curveTo(-15.6,13.2,-17.1,11.8).curveTo(-18.4,10.4,-19.1,8.5).curveTo(-19.9,6.6,-19.8,4.5).curveTo(-19.8,2.3,-19.1,0.4).curveTo(-18.2,-1.5,-16.9,-2.9).curveTo(-15.5,-4.4,-13.5,-5.2).curveTo(-11.6,-6,-9.3,-6).curveTo(-7.1,-6,-5.1,-5.2).curveTo(-3.2,-4.4,-1.8,-3).curveTo(-0.4,-1.7,0.4,0.2).curveTo(1.1,2.1,1.1,4.3).lineTo(1.1,6.5).lineTo(-13.8,6.5).curveTo(-13.2,8,-12,8.8).curveTo(-11,9.6,-9.2,9.6).curveTo(-7.7,9.6,-6.7,9.1).curveTo(-5.6,8.5,-5.1,7.5).lineTo(-0,10.4).curveTo(-1.6,12.5,-3.7,13.7).curveTo(-5.9,14.8,-9.3,14.8).curveTo(-11.7,14.8,-13.7,14).closePath().moveTo(-5.1,1.9).curveTo(-5.5,0.6,-6.6,-0.1).curveTo(-7.7,-0.8,-9.3,-0.8).curveTo(-10.8,-0.8,-11.9,-0.1).curveTo(-13.1,0.6,-13.6,1.9).lineTo(-5.1,1.9).lineTo(-5.1,1.9).closePath().moveTo(-52.9,14).curveTo(-54.8,13.2,-56.2,11.8).curveTo(-57.6,10.4,-58.3,8.5).curveTo(-59.1,6.6,-59.1,4.5).curveTo(-59,2.3,-58.3,0.4).curveTo(-57.4,-1.5,-56,-2.9).curveTo(-54.6,-4.4,-52.7,-5.2).curveTo(-50.8,-6,-48.5,-6).curveTo(-46.2,-6,-44.3,-5.2).curveTo(-42.3,-4.4,-40.9,-3).curveTo(-39.6,-1.7,-38.7,0.2).curveTo(-38.1,2.1,-38,4.3).lineTo(-38,6.5).lineTo(-53,6.5).curveTo(-52.5,8,-51.2,8.8).curveTo(-50.1,9.6,-48.4,9.6).curveTo(-46.9,9.6,-45.9,9.1).curveTo(-44.8,8.5,-44.2,7.5).lineTo(-39.2,10.4).curveTo(-40.8,12.5,-42.9,13.7).curveTo(-45,14.8,-48.5,14.8).curveTo(-50.8,14.8,-52.9,14).closePath().moveTo(-44.2,1.9).curveTo(-44.7,0.6,-45.8,-0.1).curveTo(-46.9,-0.8,-48.5,-0.8).curveTo(-49.9,-0.8,-51.1,-0.1).curveTo(-52.2,0.6,-52.8,1.9).lineTo(-44.2,1.9).lineTo(-44.2,1.9).closePath().moveTo(50.4,14.5).lineTo(50.4,-5.6).lineTo(56.9,-5.6).lineTo(56.9,14.5).closePath().moveTo(8,14.5).lineTo(0.4,-5.6).lineTo(7,-5.6).lineTo(11.1,6.2).lineTo(15.2,-5.6).lineTo(21.6,-5.6).lineTo(14.2,14.5).closePath().moveTo(-28,14.5).lineTo(-28,-5.6).lineTo(-21.6,-5.6).lineTo(-21.6,14.5).closePath().moveTo(-36.7,14.5).lineTo(-36.7,-14.9).lineTo(-30.5,-14.9).lineTo(-30.5,14.5).closePath().moveTo(-81.2,14.5).lineTo(-81.2,-12.7).lineTo(-70.5,-12.7).curveTo(-65.5,-12.7,-63.1,-10.7).curveTo(-60.6,-8.7,-60.6,-4.9).curveTo(-60.6,-3,-61.3,-1.7).curveTo(-62.1,-0.5,-63.3,0.4).curveTo(-61.8,1.3,-61,2.7).curveTo(-60.1,4.2,-60.1,6.2).curveTo(-60.1,10.5,-62.9,12.5).curveTo(-65.6,14.5,-70.5,14.5).closePath().moveTo(-74.9,8.8).lineTo(-70.3,8.8).curveTo(-68.4,8.8,-67.6,8.1).curveTo(-66.7,7.4,-66.7,6.1).curveTo(-66.7,4.8,-67.5,4.2).curveTo(-68.4,3.5,-70.5,3.5).lineTo(-74.9,3.5).closePath().moveTo(-74.9,-2.2).lineTo(-70.2,-2.2).curveTo(-68.4,-2.2,-67.7,-2.9).curveTo(-67.1,-3.6,-67.1,-4.7).curveTo(-67,-5.8,-67.8,-6.4).curveTo(-68.5,-7,-70.2,-7).lineTo(-74.9,-7).closePath().moveTo(51,-8.2).curveTo(49.9,-9.3,49.9,-10.9).curveTo(49.9,-12.6,51,-13.6).curveTo(51.9,-14.7,53.7,-14.7).curveTo(55.4,-14.7,56.4,-13.6).curveTo(57.3,-12.6,57.4,-10.9).curveTo(57.3,-9.3,56.4,-8.2).curveTo(55.4,-7.2,53.7,-7.2).curveTo(51.9,-7.2,51,-8.2).closePath().moveTo(-27.5,-8.2).curveTo(-28.5,-9.3,-28.5,-10.9).curveTo(-28.5,-12.6,-27.5,-13.6).curveTo(-26.4,-14.7,-24.8,-14.7).curveTo(-23.1,-14.7,-22.1,-13.6).curveTo(-21,-12.6,-21,-10.9).curveTo(-21,-9.3,-22.1,-8.2).curveTo(-23.1,-7.2,-24.8,-7.2).curveTo(-26.4,-7.2,-27.5,-8.2).closePath();
	this.shape.setTransform(11.5256,-40.5025,0.6112,0.6112);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_believeIt, new cjs.Rectangle(-38.1,-49.6,200.79999999999998,94.4), null);


(lib.ctaBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(8.8,2.1).curveTo(8.4,2,8.1,1.7).curveTo(7.8,1.4,7.6,0.9).curveTo(7.4,0.5,7.4,0).curveTo(7.4,-0.5,7.6,-0.9).lineTo(8.1,-1.7).lineTo(8.8,-2.1).curveTo(9.3,-2.3,9.8,-2.4).curveTo(10.2,-2.3,10.7,-2.1).lineTo(11.4,-1.7).curveTo(11.7,-1.3,11.9,-0.9).curveTo(12.1,-0.5,12.1,0).curveTo(12.1,0.5,11.9,0.9).curveTo(11.7,1.4,11.4,1.7).curveTo(11.1,2,10.7,2.1).curveTo(10.2,2.4,9.8,2.4).curveTo(9.3,2.4,8.8,2.1).closePath().moveTo(9.2,-1.3).lineTo(8.7,-1).lineTo(8.4,-0.6).lineTo(8.3,0).lineTo(8.4,0.6).lineTo(8.7,1).lineTo(9.2,1.4).lineTo(9.8,1.5).lineTo(10.3,1.4).lineTo(10.8,1).lineTo(11.1,0.6).lineTo(11.2,0).lineTo(11.1,-0.6).lineTo(10.8,-1).lineTo(10.3,-1.3).lineTo(9.8,-1.5).lineTo(9.2,-1.3).closePath().moveTo(17,2.3).lineTo(17,-2.2).lineTo(20.1,-2.2).lineTo(20.1,-1.5).lineTo(17.9,-1.5).lineTo(17.9,-0.4).lineTo(20.1,-0.4).lineTo(20.1,0.5).lineTo(17.9,0.5).lineTo(17.9,1.5).lineTo(20.1,1.5).lineTo(20.1,2.3).closePath().moveTo(15.4,2.3).lineTo(14.7,0.8).lineTo(13.7,0.8).lineTo(13.7,2.3).lineTo(12.8,2.3).lineTo(12.8,-2.2).lineTo(14.6,-2.2).lineTo(15.3,-2.1).lineTo(15.9,-1.9).curveTo(16.1,-1.6,16.2,-1.3).lineTo(16.4,-0.7).curveTo(16.4,-0.3,16.1,0.1).curveTo(15.9,0.5,15.5,0.7).lineTo(16.4,2.3).closePath().moveTo(13.7,0).lineTo(14.6,0).lineTo(15,0).lineTo(15.2,-0.2).lineTo(15.3,-0.4).lineTo(15.4,-0.7).curveTo(15.4,-1,15.2,-1.2).curveTo(15,-1.4,14.6,-1.5).lineTo(13.7,-1.5).closePath().moveTo(5.9,2.3).lineTo(5.9,-0.9).lineTo(4.5,0.9).lineTo(3.2,-0.9).lineTo(3.2,2.3).lineTo(2.2,2.3).lineTo(2.2,-2.2).lineTo(3.1,-2.2).lineTo(4.5,-0.4).lineTo(5.9,-2.2).lineTo(6.7,-2.2).lineTo(6.7,2.3).closePath().moveTo(-0.9,2.3).lineTo(-3,-0.9).lineTo(-3,2.3).lineTo(-3.8,2.3).lineTo(-3.8,-2.2).lineTo(-2.9,-2.2).lineTo(-0.8,0.8).lineTo(-0.8,-2.2).lineTo(-0,-2.2).lineTo(-0,2.3).closePath().moveTo(-5.4,2.3).lineTo(-6.1,0.8).lineTo(-7.2,0.8).lineTo(-7.2,2.3).lineTo(-8,2.3).lineTo(-8,-2.2).lineTo(-6.2,-2.2).lineTo(-5.5,-2.1).lineTo(-4.9,-1.9).curveTo(-4.7,-1.6,-4.6,-1.3).lineTo(-4.5,-0.7).curveTo(-4.5,-0.3,-4.7,0.1).curveTo(-4.9,0.5,-5.3,0.7).lineTo(-4.4,2.3).closePath().moveTo(-7.2,0).lineTo(-6.2,0).lineTo(-5.9,0).lineTo(-5.6,-0.2).lineTo(-5.5,-0.4).lineTo(-5.4,-0.7).curveTo(-5.4,-1,-5.6,-1.2).curveTo(-5.8,-1.4,-6.2,-1.5).lineTo(-7.2,-1.5).closePath().moveTo(-9.4,2.3).lineTo(-9.8,1.5).lineTo(-11.6,1.5).lineTo(-12,2.3).lineTo(-12.8,2.3).lineTo(-11.1,-2.2).lineTo(-10.3,-2.2).lineTo(-8.5,2.3).closePath().moveTo(-10,0.7).lineTo(-10.7,-1.1).lineTo(-11.3,0.7).lineTo(-10,0.7).closePath().moveTo(-16.4,2.3).lineTo(-16.4,-2.2).lineTo(-13.3,-2.2).lineTo(-13.3,-1.5).lineTo(-15.5,-1.5).lineTo(-15.5,-0.4).lineTo(-13.3,-0.4).lineTo(-13.3,0.5).lineTo(-15.5,0.5).lineTo(-15.5,1.5).lineTo(-13.3,1.5).lineTo(-13.3,2.3).closePath().moveTo(-20.1,2.3).lineTo(-20.1,-2.2).lineTo(-19.1,-2.2).lineTo(-19.1,1.5).lineTo(-17,1.5).lineTo(-17,2.3).closePath();
	this.shape.setTransform(-10.216,-499.3721,0.9326,0.9326);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#008FBE").setStrokeStyle(1,1,1).moveTo(-45.8,-11.9).lineTo(45.8,-11.9).lineTo(45.8,11.9).lineTo(-45.8,11.9).closePath();
	this.shape_1.setTransform(-10.1694,-499.3488,0.9326,0.9326);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-45.8,11.9).lineTo(-45.8,-11.9).lineTo(45.8,-11.9).lineTo(45.8,11.9).closePath();
	this.shape_2.setTransform(-10.1694,-499.3488,0.9326,0.9326);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-53.9,-511.4,189.5,544.1999999999999), null);


(lib.BSWH_Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F5B846").beginStroke().moveTo(0.3,9.8).lineTo(0.3,0.3).lineTo(4.8,4.8).lineTo(5.1,5.1).lineTo(5.1,9.8).closePath().moveTo(-4.8,-4.8).lineTo(-5.1,-5.1).lineTo(-5.1,-9.9).lineTo(-0.3,-9.9).lineTo(-0.3,-0.3).closePath();
	this.shape.setTransform(132.875,17.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#3C8EBA").beginStroke().moveTo(-0.7,16.9).curveTo(-1.1,16.7,-1.1,16).lineTo(-0.4,16).curveTo(-0.4,16.1,-0.4,16.2).curveTo(-0.3,16.3,-0.3,16.3).curveTo(-0.3,16.4,-0.3,16.4).curveTo(-0.2,16.5,-0.2,16.5).curveTo(0,16.6,0.4,16.7).lineTo(0.7,16.7).curveTo(0.7,16.7,0.7,16.6).curveTo(0.8,16.6,0.8,16.6).curveTo(0.8,16.6,0.8,16.6).curveTo(0.9,16.5,0.9,16.5).curveTo(0.9,16.5,0.9,16.5).curveTo(1,16.4,1,16.4).curveTo(1,16.4,1,16.3).curveTo(1,16.3,1,16.2).lineTo(1,16.1).lineTo(0.9,16).lineTo(0.6,15.9).lineTo(-0.3,15.6).lineTo(-0.6,15.4).lineTo(-0.9,15.1).lineTo(-0.9,14.8).curveTo(-0.9,14.4,-0.8,14.2).curveTo(-0.6,13.9,-0.3,13.9).lineTo(0.3,13.8).lineTo(0.9,13.9).curveTo(1.2,13.9,1.5,14.2).curveTo(1.6,14.5,1.6,14.8).lineTo(0.9,14.8).curveTo(0.9,14.3,0.3,14.3).curveTo(0.2,14.3,0.2,14.3).curveTo(0.1,14.3,0.1,14.3).curveTo(0,14.4,0,14.4).curveTo(-0,14.4,-0.1,14.4).curveTo(-0.1,14.5,-0.2,14.5).curveTo(-0.2,14.5,-0.2,14.5).curveTo(-0.3,14.5,-0.3,14.6).curveTo(-0.3,14.6,-0.3,14.7).curveTo(-0.3,14.7,-0.3,14.8).curveTo(-0.3,14.8,-0.2,14.9).curveTo(-0.2,14.9,-0.2,14.9).curveTo(-0.1,14.9,-0.1,15).lineTo(0.8,15.2).lineTo(1.4,15.5).curveTo(1.7,15.7,1.7,16.2).curveTo(1.7,16.6,1.4,16.9).curveTo(1,17.2,0.3,17.2).curveTo(-0.3,17.2,-0.7,16.9).closePath().moveTo(-2.3,17.1).lineTo(-2.6,16.5).lineTo(-3.8,16.5).lineTo(-4.1,17.1).lineTo(-4.8,17.1).lineTo(-3.6,13.8).lineTo(-2.8,13.8).lineTo(-1.5,17.1).closePath().moveTo(-3.6,15.9).lineTo(-2.7,15.9).lineTo(-3.2,14.7).closePath().moveTo(-7.7,17.1).lineTo(-7.7,13.8).lineTo(-6.9,13.8).lineTo(-6.9,16.6).lineTo(-5.3,16.6).lineTo(-5.3,17.1).closePath().moveTo(-10.9,17.1).lineTo(-10.9,13.8).lineTo(-10.1,13.8).lineTo(-10.1,16.6).lineTo(-8.5,16.6).lineTo(-8.5,17.1).closePath().moveTo(-12.3,17.1).lineTo(-12.5,16.5).lineTo(-13.8,16.5).lineTo(-14,17.1).lineTo(-14.8,17.1).lineTo(-13.5,13.8).lineTo(-12.8,13.8).lineTo(-11.5,17.1).closePath().moveTo(-13.6,15.9).lineTo(-12.7,15.9).lineTo(-13.1,14.7).closePath().moveTo(-18.3,17.1).lineTo(-18.3,13.8).lineTo(-16.9,13.8).curveTo(-16.2,13.8,-15.8,14.2).curveTo(-15.4,14.6,-15.4,15.5).curveTo(-15.4,16.3,-15.8,16.7).curveTo(-16.1,17.2,-16.9,17.1).closePath().moveTo(-17.6,16.6).lineTo(-16.9,16.6).curveTo(-16.5,16.6,-16.3,16.3).curveTo(-16.1,16.1,-16.1,15.6).curveTo(-16.1,15,-16.3,14.8).curveTo(-16.5,14.4,-17,14.4).lineTo(-17.6,14.4).closePath().moveTo(26.4,7.5).curveTo(26,6.9,26,6.2).curveTo(26,5.5,26.4,4.9).curveTo(26.9,4.5,27.6,4.4).curveTo(28.2,4.4,28.6,4.8).curveTo(29,5.1,29.1,5.7).lineTo(28.4,5.7).curveTo(28.4,5.3,28.1,5.2).curveTo(28,5,27.6,5.1).curveTo(27.3,5,27.1,5.2).curveTo(26.9,5.3,26.8,5.7).curveTo(26.7,5.9,26.7,6.2).curveTo(26.7,6.6,26.9,7).curveTo(27.2,7.3,27.6,7.3).curveTo(28,7.3,28.2,7.1).curveTo(28.4,7,28.4,6.6).lineTo(29.1,6.6).curveTo(29.1,7.2,28.7,7.6).curveTo(28.2,7.9,27.6,7.9).curveTo(26.9,7.9,26.4,7.5).closePath().moveTo(17.4,7.5).curveTo(17,6.9,17,6.2).curveTo(17,5.5,17.4,4.9).curveTo(17.9,4.5,18.6,4.4).curveTo(19.2,4.4,19.6,4.8).curveTo(20,5.1,20.1,5.7).lineTo(19.4,5.7).curveTo(19.3,5.3,19.1,5.2).curveTo(18.9,5,18.6,5.1).curveTo(18.3,5,18.1,5.2).lineTo(17.8,5.7).lineTo(17.7,6.2).curveTo(17.7,6.6,18,7).curveTo(18.2,7.3,18.6,7.3).curveTo(19,7.3,19.1,7.1).curveTo(19.4,6.9,19.4,6.6).lineTo(20.1,6.6).curveTo(20,7.2,19.7,7.6).curveTo(19.3,7.9,18.6,7.9).curveTo(17.9,7.9,17.4,7.5).closePath().moveTo(4.5,7.5).curveTo(4,6.9,4,6.2).curveTo(4,5.5,4.5,4.9).curveTo(4.9,4.5,5.7,4.4).curveTo(6.3,4.4,6.6,4.8).curveTo(7.1,5.1,7.1,5.7).lineTo(6.4,5.7).curveTo(6.3,5.3,6.1,5.2).curveTo(6.1,5.2,6,5.1).curveTo(6,5.1,5.9,5.1).curveTo(5.9,5.1,5.8,5.1).curveTo(5.7,5.1,5.7,5.1).curveTo(5.3,5,5.1,5.2).curveTo(4.9,5.3,4.8,5.7).lineTo(4.8,6.2).curveTo(4.8,6.6,5,7).curveTo(5.2,7.3,5.7,7.3).curveTo(6,7.3,6.2,7.1).curveTo(6.4,7,6.4,6.6).lineTo(7.2,6.6).curveTo(7.1,7.2,6.7,7.6).curveTo(6.3,7.9,5.7,7.9).curveTo(4.9,7.9,4.5,7.5).closePath().moveTo(0.9,7.6).curveTo(0.5,7.3,0.5,6.8).lineTo(1.2,6.8).curveTo(1.2,7.1,1.4,7.2).lineTo(2,7.3).lineTo(2.2,7.3).lineTo(2.5,7.2).lineTo(2.6,7).lineTo(2.6,6.8).lineTo(2.5,6.7).lineTo(2.4,6.7).lineTo(1.2,6.3).lineTo(0.9,6.1).lineTo(0.7,5.8).lineTo(0.6,5.4).curveTo(0.6,5.1,0.8,4.9).curveTo(0.9,4.6,1.3,4.5).lineTo(1.9,4.4).lineTo(2.5,4.5).curveTo(2.9,4.6,3,4.9).curveTo(3.3,5.1,3.3,5.5).lineTo(2.5,5.5).curveTo(2.4,5,1.8,5).lineTo(1.5,5.1).curveTo(1.5,5.1,1.4,5.1).curveTo(1.4,5.2,1.4,5.2).curveTo(1.4,5.2,1.3,5.3).curveTo(1.3,5.3,1.3,5.3).curveTo(1.3,5.4,1.3,5.4).curveTo(1.4,5.5,1.4,5.5).curveTo(1.4,5.6,1.4,5.6).curveTo(1.5,5.6,1.5,5.7).lineTo(2.4,5.9).lineTo(3,6.1).curveTo(3.3,6.4,3.3,6.9).curveTo(3.3,7.4,3,7.6).curveTo(2.6,7.9,2,7.9).curveTo(1.3,7.9,0.9,7.6).closePath().moveTo(-3,7.5).curveTo(-3.5,6.9,-3.5,6.2).curveTo(-3.5,5.5,-3.1,4.9).curveTo(-2.6,4.5,-1.8,4.4).curveTo(-1.1,4.5,-0.6,4.9).curveTo(-0.2,5.5,-0.2,6.2).curveTo(-0.2,6.9,-0.6,7.5).curveTo(-1.1,7.9,-1.8,7.9).curveTo(-2.6,7.9,-3,7.5).closePath().moveTo(-2.4,5.2).curveTo(-2.6,5.3,-2.7,5.7).lineTo(-2.7,6.2).curveTo(-2.7,6.6,-2.5,7).curveTo(-2.3,7.3,-1.8,7.3).curveTo(-1.4,7.3,-1.2,7).curveTo(-0.9,6.6,-0.9,6.2).lineTo(-1,5.7).curveTo(-1.1,5.3,-1.3,5.2).curveTo(-1.5,5,-1.8,5.1).curveTo(-2.2,5,-2.4,5.2).closePath().moveTo(-10.7,7.6).curveTo(-11,7.3,-11,6.6).lineTo(-11,4.5).lineTo(-10.3,4.5).lineTo(-10.3,6.6).lineTo(-10.2,7.1).curveTo(-10,7.3,-9.6,7.3).curveTo(-9.2,7.3,-9,7.1).lineTo(-8.9,6.6).lineTo(-8.9,4.5).lineTo(-8.1,4.5).lineTo(-8.1,6.6).curveTo(-8.1,7.3,-8.5,7.6).curveTo(-8.9,7.9,-9.6,7.9).curveTo(-10.3,7.9,-10.7,7.6).closePath().moveTo(46.2,7.8).lineTo(46.1,7.1).lineTo(45.9,6.7).lineTo(45.5,6.6).lineTo(44.8,6.6).lineTo(44.8,7.8).lineTo(44,7.8).lineTo(44,4.5).lineTo(45.8,4.5).curveTo(46.3,4.5,46.6,4.8).curveTo(46.9,5,46.9,5.4).curveTo(46.9,6.1,46.3,6.3).curveTo(46.7,6.4,46.8,7.1).lineTo(46.8,7.6).lineTo(46.9,7.8).closePath().moveTo(44.8,6).lineTo(45.6,6).curveTo(46.1,6,46.1,5.5).curveTo(46.1,5.1,45.6,5.1).lineTo(44.8,5.1).closePath().moveTo(40.6,7.8).lineTo(40.6,4.5).lineTo(43.1,4.5).lineTo(43.1,5.1).lineTo(41.3,5.1).lineTo(41.3,5.9).lineTo(43,5.9).lineTo(43,6.4).lineTo(41.3,6.4).lineTo(41.3,7.2).lineTo(43.1,7.2).lineTo(43.1,7.8).closePath().moveTo(38.1,7.8).lineTo(38.1,5.1).lineTo(37.1,5.1).lineTo(37.1,4.5).lineTo(39.8,4.5).lineTo(39.8,5.1).lineTo(38.8,5.1).lineTo(38.8,7.8).closePath().moveTo(35.5,7.8).lineTo(34.1,5.6).lineTo(34.1,7.8).lineTo(33.4,7.8).lineTo(33.4,4.5).lineTo(34.2,4.5).lineTo(35.6,6.8).lineTo(35.6,4.5).lineTo(36.3,4.5).lineTo(36.3,7.8).closePath().moveTo(30,7.8).lineTo(30,4.5).lineTo(32.5,4.5).lineTo(32.5,5.1).lineTo(30.7,5.1).lineTo(30.7,5.9).lineTo(32.4,5.9).lineTo(32.4,6.4).lineTo(30.7,6.4).lineTo(30.7,7.2).lineTo(32.6,7.2).lineTo(32.6,7.8).closePath().moveTo(21,7.8).lineTo(21,4.5).lineTo(23.5,4.5).lineTo(23.5,5.1).lineTo(21.8,5.1).lineTo(21.8,5.9).lineTo(23.3,5.9).lineTo(23.3,6.4).lineTo(21.8,6.4).lineTo(21.8,7.2).lineTo(23.6,7.2).lineTo(23.6,7.8).closePath().moveTo(15.3,7.8).lineTo(14,5.6).lineTo(14,7.8).lineTo(13.2,7.8).lineTo(13.2,4.5).lineTo(14,4.5).lineTo(15.4,6.8).lineTo(15.4,4.5).lineTo(16.1,4.5).lineTo(16.1,7.8).closePath().moveTo(9.8,7.8).lineTo(9.8,4.5).lineTo(12.3,4.5).lineTo(12.3,5.1).lineTo(10.5,5.1).lineTo(10.5,5.9).lineTo(12.2,5.9).lineTo(12.2,6.4).lineTo(10.5,6.4).lineTo(10.5,7.2).lineTo(12.4,7.2).lineTo(12.4,7.8).closePath().moveTo(8.1,7.8).lineTo(8.1,4.5).lineTo(8.7,4.5).lineTo(8.7,7.8).closePath().moveTo(-5,7.8).lineTo(-5.1,7.6).lineTo(-5.1,7.1).curveTo(-5.1,7,-5.1,7).curveTo(-5.1,6.9,-5.1,6.8).curveTo(-5.2,6.8,-5.2,6.7).curveTo(-5.2,6.7,-5.3,6.7).lineTo(-5.7,6.6).lineTo(-6.4,6.6).lineTo(-6.4,7.8).lineTo(-7.1,7.8).lineTo(-7.1,4.5).lineTo(-5.4,4.5).curveTo(-4.9,4.5,-4.6,4.8).curveTo(-4.3,5,-4.3,5.4).curveTo(-4.3,6.1,-4.9,6.3).curveTo(-4.4,6.4,-4.4,7.1).lineTo(-4.4,7.6).lineTo(-4.2,7.8).closePath().moveTo(-6.4,6).lineTo(-5.6,6).curveTo(-5.1,6,-5.1,5.5).curveTo(-5.1,5.1,-5.6,5.1).lineTo(-6.4,5.1).closePath().moveTo(-14.5,7.8).lineTo(-14.5,4.5).lineTo(-12,4.5).lineTo(-12,5.1).lineTo(-13.7,5.1).lineTo(-13.7,5.9).lineTo(-12.1,5.9).lineTo(-12.1,6.4).lineTo(-13.7,6.4).lineTo(-13.7,7.2).lineTo(-11.9,7.2).lineTo(-11.9,7.8).closePath().moveTo(-16.2,7.8).lineTo(-17.6,5.6).lineTo(-17.6,7.8).lineTo(-18.3,7.8).lineTo(-18.3,4.5).lineTo(-17.6,4.5).lineTo(-16.2,6.8).lineTo(-16.2,4.5).lineTo(-15.5,4.5).lineTo(-15.5,7.8).closePath().moveTo(-46.9,-7.1).lineTo(-46.9,-11.9).lineTo(-37.4,-11.9).lineTo(-41.8,-7.4).lineTo(-42.2,-7.1).closePath().moveTo(-36.7,-12.5).lineTo(-32.3,-17).lineTo(-31.9,-17.3).lineTo(-27.2,-17.3).lineTo(-27.2,-12.5).closePath();
	this.shape_1.setTransform(169.925,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#1140A0").beginStroke().moveTo(-81.8,14.3).lineTo(-81.8,5.1).lineTo(-81.5,4.8).lineTo(-77,0.3).lineTo(-77,14.3).closePath().moveTo(-76.2,11.6).curveTo(-76.4,11.3,-76.4,11.1).curveTo(-76.4,11,-76.4,11).curveTo(-76.4,10.9,-76.3,10.8).curveTo(-76.3,10.8,-76.3,10.7).curveTo(-76.2,10.7,-76.2,10.6).curveTo(-76.1,10.6,-76.1,10.6).curveTo(-76.1,10.5,-76,10.5).curveTo(-76,10.5,-75.9,10.5).curveTo(-75.8,10.5,-75.8,10.5).curveTo(-75.7,10.5,-75.7,10.5).curveTo(-75.6,10.5,-75.5,10.5).curveTo(-75.5,10.5,-75.4,10.6).curveTo(-75.4,10.6,-75.3,10.6).curveTo(-75.3,10.7,-75.2,10.7).curveTo(-75.2,10.8,-75.2,10.8).curveTo(-75.1,10.9,-75.1,11).curveTo(-75.1,11,-75.1,11.1).curveTo(-75.1,11.3,-75.3,11.6).lineTo(-75.8,11.7).lineTo(-76.2,11.6).closePath().moveTo(-76.1,10.7).curveTo(-76.2,10.8,-76.2,10.8).curveTo(-76.2,10.8,-76.2,10.9).curveTo(-76.3,10.9,-76.3,11).curveTo(-76.3,11,-76.3,11.1).curveTo(-76.3,11.1,-76.3,11.2).curveTo(-76.3,11.2,-76.2,11.3).curveTo(-76.2,11.3,-76.2,11.4).curveTo(-76.2,11.4,-76.1,11.5).curveTo(-76.1,11.5,-76,11.5).curveTo(-76,11.6,-76,11.6).curveTo(-75.9,11.6,-75.9,11.6).curveTo(-75.8,11.6,-75.8,11.6).curveTo(-75.7,11.6,-75.7,11.6).curveTo(-75.6,11.6,-75.6,11.6).curveTo(-75.5,11.6,-75.5,11.5).curveTo(-75.4,11.5,-75.4,11.5).curveTo(-75.4,11.4,-75.3,11.4).curveTo(-75.3,11.3,-75.3,11.3).curveTo(-75.2,11.2,-75.2,11.2).curveTo(-75.2,11.1,-75.2,11.1).curveTo(-75.2,11,-75.2,11).curveTo(-75.2,10.9,-75.3,10.9).curveTo(-75.3,10.8,-75.3,10.8).curveTo(-75.4,10.8,-75.4,10.7).curveTo(-75.4,10.7,-75.5,10.7).curveTo(-75.5,10.6,-75.6,10.6).curveTo(-75.6,10.6,-75.7,10.6).curveTo(-75.7,10.6,-75.8,10.6).curveTo(-75.8,10.6,-75.9,10.6).curveTo(-75.9,10.6,-76,10.6).curveTo(-76,10.6,-76,10.7).curveTo(-76.1,10.7,-76.1,10.7).closePath().moveTo(-75.6,11.5).lineTo(-75.8,11.1).lineTo(-75.9,11.1).lineTo(-75.9,11.5).lineTo(-76,11.5).lineTo(-76,10.7).lineTo(-75.7,10.7).curveTo(-75.7,10.7,-75.6,10.7).curveTo(-75.6,10.7,-75.5,10.8).curveTo(-75.5,10.8,-75.5,10.8).curveTo(-75.5,10.9,-75.5,10.9).curveTo(-75.5,11,-75.5,11).curveTo(-75.5,11,-75.5,11.1).curveTo(-75.5,11.1,-75.6,11.1).curveTo(-75.6,11.1,-75.7,11.1).lineTo(-75.5,11.5).closePath().moveTo(-75.9,11).lineTo(-75.8,11).curveTo(-75.7,11,-75.7,11).curveTo(-75.6,11,-75.6,11).curveTo(-75.6,11,-75.6,11).curveTo(-75.6,10.9,-75.6,10.9).curveTo(-75.6,10.9,-75.6,10.9).curveTo(-75.6,10.9,-75.6,10.8).curveTo(-75.6,10.8,-75.7,10.8).curveTo(-75.7,10.8,-75.7,10.8).lineTo(-75.9,10.8).closePath().moveTo(61.8,10).curveTo(61.2,9.3,61.2,8.3).curveTo(61.2,7.1,61.8,6.5).curveTo(62.5,5.8,63.5,5.8).curveTo(64.3,5.8,64.9,6.2).curveTo(65.5,6.6,65.6,7.5).lineTo(64.6,7.5).curveTo(64.5,7.1,64.2,6.8).curveTo(63.9,6.6,63.5,6.6).curveTo(63.1,6.6,62.8,6.8).lineTo(62.3,7.5).lineTo(62.3,8.3).curveTo(62.3,8.9,62.6,9.4).curveTo(62.9,9.8,63.5,9.8).curveTo(64,9.8,64.3,9.5).curveTo(64.5,9.2,64.6,8.8).lineTo(65.6,8.8).curveTo(65.5,9.6,65,10.1).curveTo(64.4,10.7,63.5,10.7).curveTo(62.5,10.7,61.8,10).closePath().moveTo(44.1,10).curveTo(43.5,9.3,43.5,8.3).curveTo(43.5,7.1,44.1,6.5).curveTo(44.7,5.8,45.8,5.8).curveTo(46.6,5.8,47.1,6.2).curveTo(47.7,6.6,47.8,7.5).lineTo(46.8,7.5).curveTo(46.8,7.1,46.5,6.8).curveTo(46.1,6.6,45.8,6.6).curveTo(45.3,6.6,45,6.8).curveTo(44.7,7.1,44.6,7.5).curveTo(44.5,7.8,44.5,8.3).curveTo(44.5,8.9,44.8,9.4).curveTo(45.1,9.8,45.8,9.8).curveTo(46.2,9.8,46.5,9.5).curveTo(46.8,9.2,46.8,8.8).lineTo(47.8,8.8).curveTo(47.7,9.6,47.2,10.1).curveTo(46.6,10.7,45.8,10.7).curveTo(44.7,10.7,44.1,10).closePath().moveTo(4.5,10.3).curveTo(3.9,9.8,3.9,9).lineTo(4.9,9).curveTo(4.9,9.5,5.2,9.7).curveTo(5.5,9.9,5.9,9.9).lineTo(6.4,9.8).curveTo(6.4,9.8,6.5,9.8).curveTo(6.5,9.8,6.6,9.8).curveTo(6.6,9.8,6.6,9.7).curveTo(6.7,9.7,6.7,9.7).curveTo(6.8,9.6,6.8,9.6).curveTo(6.8,9.5,6.8,9.5).curveTo(6.9,9.4,6.9,9.4).curveTo(6.9,9.3,6.9,9.3).lineTo(6.8,9.1).lineTo(6.7,9).lineTo(6.6,8.9).lineTo(5.5,8.6).lineTo(5,8.3).lineTo(4.6,8.1).lineTo(4.2,7.7).lineTo(4.1,7.2).curveTo(4.1,6.7,4.3,6.4).curveTo(4.6,6.1,5,5.9).lineTo(5.8,5.8).curveTo(6.4,5.8,6.8,5.9).curveTo(7.2,6,7.4,6.4).curveTo(7.7,6.8,7.7,7.3).lineTo(6.7,7.3).curveTo(6.7,6.6,5.8,6.6).curveTo(5.5,6.6,5.3,6.7).curveTo(5.2,6.8,5.2,6.8).curveTo(5.1,6.8,5.1,6.9).curveTo(5.1,6.9,5.1,7).curveTo(5.1,7,5.1,7.1).curveTo(5.1,7.2,5.1,7.2).curveTo(5.1,7.3,5.1,7.3).curveTo(5.2,7.4,5.2,7.4).curveTo(5.3,7.4,5.3,7.5).lineTo(6.5,7.8).curveTo(7.2,8,7.4,8.2).curveTo(7.9,8.6,7.9,9.2).curveTo(7.9,9.8,7.4,10.3).curveTo(6.9,10.7,5.9,10.7).curveTo(5.1,10.7,4.5,10.3).closePath().moveTo(-24.1,10.2).curveTo(-24.6,9.8,-24.6,8.8).lineTo(-24.6,5.9).lineTo(-23.6,5.9).lineTo(-23.6,8.8).curveTo(-23.6,9.2,-23.4,9.5).curveTo(-23.2,9.8,-22.6,9.8).curveTo(-22.1,9.8,-21.9,9.6).curveTo(-21.7,9.4,-21.7,8.8).lineTo(-21.7,5.9).lineTo(-20.6,5.9).lineTo(-20.6,8.8).curveTo(-20.6,9.7,-21.1,10.2).curveTo(-21.7,10.7,-22.6,10.7).curveTo(-23.6,10.7,-24.1,10.2).closePath().moveTo(-37.9,10).curveTo(-38.5,9.2,-38.5,8.3).curveTo(-38.5,7.2,-37.9,6.5).curveTo(-37.2,5.8,-36.1,5.8).curveTo(-35.1,5.8,-34.5,6.5).curveTo(-33.9,7.1,-33.9,8.3).curveTo(-33.9,9.3,-34.5,10).curveTo(-35.1,10.7,-36.1,10.7).curveTo(-37.2,10.7,-37.9,10).closePath().moveTo(-36.9,6.8).curveTo(-37.2,7.1,-37.3,7.5).curveTo(-37.5,7.8,-37.5,8.3).curveTo(-37.5,8.9,-37.1,9.4).curveTo(-36.8,9.8,-36.1,9.8).curveTo(-35.5,9.8,-35.2,9.4).curveTo(-34.9,8.9,-34.9,8.3).curveTo(-34.9,7.8,-35,7.5).curveTo(-35.2,7.1,-35.5,6.8).curveTo(-35.7,6.6,-36.1,6.6).curveTo(-36.6,6.6,-36.9,6.8).closePath().moveTo(90,10.6).lineTo(89.9,10.3).lineTo(89.9,9.5).curveTo(89.8,9.1,89.7,8.9).curveTo(89.5,8.8,89.1,8.8).lineTo(88.1,8.8).lineTo(88.1,10.6).lineTo(87,10.6).lineTo(87,5.9).lineTo(89.5,5.9).curveTo(90.1,5.9,90.6,6.2).curveTo(90.9,6.6,90.9,7.2).curveTo(90.9,8.1,90.2,8.3).curveTo(90.8,8.5,90.8,9.5).lineTo(91,10.6).closePath().moveTo(88.1,8).lineTo(89.2,8).curveTo(89.9,8,89.9,7.4).curveTo(89.9,6.7,89.2,6.7).lineTo(88.1,6.7).closePath().moveTo(82.1,10.6).lineTo(82.1,5.9).lineTo(85.6,5.9).lineTo(85.6,6.8).lineTo(83.1,6.8).lineTo(83.1,7.7).lineTo(85.4,7.7).lineTo(85.4,8.6).lineTo(83.1,8.6).lineTo(83.1,9.7).lineTo(85.7,9.7).lineTo(85.7,10.6).closePath().moveTo(78.4,10.6).lineTo(78.4,6.8).lineTo(77,6.8).lineTo(77,5.9).lineTo(80.9,5.9).lineTo(80.9,6.8).lineTo(79.5,6.8).lineTo(79.5,10.6).closePath().moveTo(74.8,10.6).lineTo(72.8,7.4).lineTo(72.8,10.6).lineTo(71.9,10.6).lineTo(71.9,5.9).lineTo(72.9,5.9).lineTo(74.8,9).lineTo(74.9,9).lineTo(74.9,5.9).lineTo(75.8,5.9).lineTo(75.8,10.6).closePath().moveTo(67,10.6).lineTo(67,5.9).lineTo(70.4,5.9).lineTo(70.4,6.8).lineTo(68,6.8).lineTo(68,7.7).lineTo(70.3,7.7).lineTo(70.3,8.6).lineTo(68,8.6).lineTo(68,9.7).lineTo(70.5,9.7).lineTo(70.5,10.6).closePath().moveTo(54.3,10.6).lineTo(54.3,5.9).lineTo(55.4,5.9).lineTo(55.4,9.7).lineTo(57.7,9.7).lineTo(57.7,10.6).closePath().moveTo(52.2,10.6).lineTo(51.9,9.5).lineTo(50.1,9.5).lineTo(49.7,10.6).lineTo(48.7,10.6).lineTo(50.5,5.9).lineTo(51.5,5.9).lineTo(53.3,10.6).closePath().moveTo(50.3,8.8).lineTo(51.6,8.8).lineTo(51,7).lineTo(51,7).closePath().moveTo(41.1,10.6).lineTo(41.1,5.9).lineTo(42.1,5.9).lineTo(42.1,10.6).closePath().moveTo(35.5,10.6).lineTo(35.5,5.9).lineTo(37.5,5.9).curveTo(38.5,5.9,39.1,6.5).curveTo(39.7,7.1,39.7,8.2).curveTo(39.7,9.2,39.1,9.9).curveTo(38.6,10.6,37.5,10.6).closePath().moveTo(36.6,9.7).lineTo(37.5,9.7).curveTo(38,9.7,38.3,9.4).curveTo(38.6,9,38.6,8.3).curveTo(38.6,7.5,38.3,7.1).curveTo(38,6.8,37.3,6.8).lineTo(36.6,6.8).closePath().moveTo(30.6,10.6).lineTo(30.6,5.9).lineTo(34.1,5.9).lineTo(34.1,6.8).lineTo(31.6,6.8).lineTo(31.6,7.7).lineTo(33.9,7.7).lineTo(33.9,8.6).lineTo(31.6,8.6).lineTo(31.6,9.7).lineTo(34.2,9.7).lineTo(34.2,10.6).closePath().moveTo(28.1,10.6).lineTo(28.1,7.2).lineTo(26.9,10.6).lineTo(26.1,10.6).lineTo(24.9,7.3).lineTo(24.9,10.6).lineTo(24,10.6).lineTo(24,5.9).lineTo(25.4,5.9).lineTo(26.5,9.1).lineTo(27.6,5.9).lineTo(29,5.9).lineTo(29,10.6).closePath().moveTo(17.7,10.6).lineTo(17.7,8.8).lineTo(15.9,5.9).lineTo(17.1,5.9).lineTo(18.2,7.7).lineTo(19.2,5.9).lineTo(20.4,5.9).lineTo(18.7,8.8).lineTo(18.7,10.6).closePath().moveTo(12.8,10.6).lineTo(12.8,6.8).lineTo(11.4,6.8).lineTo(11.4,5.9).lineTo(15.2,5.9).lineTo(15.2,6.8).lineTo(13.8,6.8).lineTo(13.8,10.6).closePath().moveTo(9.1,10.6).lineTo(9.1,5.9).lineTo(10.2,5.9).lineTo(10.2,10.6).closePath().moveTo(1.9,10.6).lineTo(1.7,10.3).lineTo(1.7,9.8).lineTo(1.7,9.5).curveTo(1.6,9.1,1.4,8.9).curveTo(1.3,8.8,0.9,8.8).lineTo(-0.1,8.8).lineTo(-0.1,10.6).lineTo(-1.2,10.6).lineTo(-1.2,5.9).lineTo(1.3,5.9).curveTo(2,5.9,2.3,6.2).curveTo(2.7,6.6,2.7,7.2).curveTo(2.7,8.1,2,8.3).curveTo(2.6,8.5,2.7,9.5).lineTo(2.7,10.1).lineTo(2.8,10.6).closePath().moveTo(-0.1,8).lineTo(1,8).curveTo(1.7,8,1.7,7.4).curveTo(1.7,6.7,1,6.7).lineTo(-0.1,6.7).closePath().moveTo(-6.1,10.6).lineTo(-6.1,5.9).lineTo(-2.6,5.9).lineTo(-2.6,6.8).lineTo(-5.1,6.8).lineTo(-5.1,7.7).lineTo(-2.8,7.7).lineTo(-2.8,8.6).lineTo(-5.1,8.6).lineTo(-5.1,9.7).lineTo(-2.6,9.7).lineTo(-2.6,10.6).closePath().moveTo(-9.9,10.6).lineTo(-11.4,5.9).lineTo(-10.3,5.9).lineTo(-9.3,9.2).lineTo(-9.3,9.2).lineTo(-8.3,5.9).lineTo(-7.2,5.9).lineTo(-8.7,10.6).closePath().moveTo(-13.5,10.6).lineTo(-13.5,5.9).lineTo(-12.5,5.9).lineTo(-12.5,10.6).closePath().moveTo(-16.1,10.6).lineTo(-18.1,7.4).lineTo(-18.1,7.4).lineTo(-18.1,10.6).lineTo(-19,10.6).lineTo(-19,5.9).lineTo(-18,5.9).lineTo(-16.1,9).lineTo(-16,9).lineTo(-16,5.9).lineTo(-15.1,5.9).lineTo(-15.1,10.6).closePath().moveTo(-29.5,10.6).lineTo(-29.5,10.3).lineTo(-29.7,9.5).curveTo(-29.7,9.1,-29.9,8.9).curveTo(-30.1,8.8,-30.4,8.8).lineTo(-31.5,8.8).lineTo(-31.5,10.6).lineTo(-32.5,10.6).lineTo(-32.5,5.9).lineTo(-30,5.9).curveTo(-29.3,5.9,-29,6.2).curveTo(-28.6,6.6,-28.6,7.2).curveTo(-28.6,8.1,-29.3,8.3).curveTo(-28.7,8.5,-28.6,9.5).lineTo(-28.6,10.4).lineTo(-28.4,10.6).closePath().moveTo(-31.5,8).lineTo(-30.3,8).curveTo(-29.6,8,-29.6,7.4).curveTo(-29.6,6.7,-30.3,6.7).lineTo(-31.5,6.7).closePath().moveTo(-42.8,10.6).lineTo(-42.8,5.9).lineTo(-41.8,5.9).lineTo(-41.8,9.7).lineTo(-39.5,9.7).lineTo(-39.5,10.6).closePath().moveTo(-46.7,10.6).lineTo(-46.7,8.8).lineTo(-48.4,5.9).lineTo(-47.2,5.9).lineTo(-46.1,7.7).lineTo(-45,5.9).lineTo(-43.9,5.9).lineTo(-45.6,8.8).lineTo(-45.6,10.6).closePath().moveTo(-49.5,10.6).lineTo(-49.9,9.5).lineTo(-51.7,9.5).lineTo(-52,10.6).lineTo(-53.1,10.6).lineTo(-51.3,5.9).lineTo(-50.2,5.9).lineTo(-48.5,10.6).closePath().moveTo(-51.4,8.8).lineTo(-50.1,8.8).lineTo(-50.7,7).lineTo(-50.8,7).closePath().moveTo(-57.9,10.6).lineTo(-57.9,5.9).lineTo(-55.6,5.9).curveTo(-54.1,5.9,-54.1,7).curveTo(-54.1,7.7,-54.8,8).curveTo(-54.3,8.1,-54.1,8.4).curveTo(-53.9,8.8,-53.9,9.2).curveTo(-53.9,9.9,-54.4,10.2).curveTo(-54.9,10.6,-55.6,10.6).closePath().moveTo(-56.8,9.8).lineTo(-55.7,9.8).curveTo(-55,9.8,-55,9.2).curveTo(-55,8.5,-55.7,8.5).lineTo(-56.8,8.5).closePath().moveTo(-56.8,7.8).lineTo(-55.8,7.8).lineTo(-55.3,7.7).curveTo(-55.3,7.6,-55.2,7.6).curveTo(-55.2,7.5,-55.2,7.5).curveTo(-55.2,7.4,-55.1,7.3).curveTo(-55.1,7.3,-55.1,7.2).curveTo(-55.1,6.7,-55.8,6.7).lineTo(-56.8,6.7).closePath().moveTo(-71.6,5.1).lineTo(-71.9,4.8).lineTo(-76.4,0.3).lineTo(-62.4,0.3).lineTo(-62.4,5.1).closePath().moveTo(-41.5,3.6).curveTo(-41.7,3.4,-41.7,3).curveTo(-41.7,2.7,-41.5,2.5).curveTo(-41.2,2.3,-40.9,2.3).lineTo(-40.6,2.3).curveTo(-40.1,2.3,-39.9,2).curveTo(-39.2,0.9,-39,0.3).curveTo(-38.8,-0.2,-38.8,-0.5).curveTo(-38.8,-1,-39.1,-1.9).lineTo(-40.6,-5.8).lineTo(-41,-6.8).curveTo(-41.2,-7.2,-41.7,-7.2).lineTo(-42.1,-7.4).curveTo(-42.1,-7.4,-42.2,-7.4).curveTo(-42.2,-7.4,-42.2,-7.5).curveTo(-42.2,-7.5,-42.2,-7.5).curveTo(-42.2,-7.6,-42.2,-7.6).curveTo(-42.2,-7.7,-42.2,-7.7).curveTo(-42.2,-7.8,-42.2,-7.8).curveTo(-42.2,-7.8,-42.1,-7.8).curveTo(-42.1,-7.8,-42.1,-7.8).lineTo(-40.3,-7.8).lineTo(-38.7,-7.8).curveTo(-38.7,-7.8,-38.7,-7.8).curveTo(-38.6,-7.8,-38.6,-7.8).curveTo(-38.6,-7.8,-38.6,-7.7).curveTo(-38.6,-7.7,-38.6,-7.6).curveTo(-38.6,-7.6,-38.6,-7.5).curveTo(-38.6,-7.5,-38.6,-7.5).curveTo(-38.6,-7.4,-38.7,-7.4).curveTo(-38.7,-7.4,-38.7,-7.4).lineTo(-39.1,-7.2).curveTo(-39.2,-7.2,-39.3,-7.2).curveTo(-39.4,-7.2,-39.4,-7.2).curveTo(-39.5,-7.1,-39.5,-7.1).curveTo(-39.5,-7.1,-39.5,-7).lineTo(-39,-5.3).lineTo(-38.4,-3.6).lineTo(-37.9,-2.3).curveTo(-37.7,-2.3,-37.2,-3.7).lineTo(-36.6,-5.1).curveTo(-35.9,-6.6,-35.9,-6.9).curveTo(-35.9,-7.2,-36.3,-7.2).lineTo(-36.9,-7.4).curveTo(-37,-7.4,-37,-7.4).curveTo(-37,-7.4,-37,-7.5).curveTo(-37,-7.5,-37,-7.5).curveTo(-37,-7.6,-37,-7.6).curveTo(-37,-7.7,-37,-7.7).curveTo(-37,-7.8,-36.9,-7.8).curveTo(-36.9,-7.8,-36.9,-7.8).curveTo(-36.9,-7.8,-36.9,-7.8).lineTo(-35.2,-7.8).lineTo(-33.8,-7.8).curveTo(-33.8,-7.8,-33.8,-7.8).curveTo(-33.7,-7.8,-33.7,-7.8).curveTo(-33.7,-7.8,-33.7,-7.7).curveTo(-33.7,-7.7,-33.7,-7.6).lineTo(-33.8,-7.4).lineTo(-34.1,-7.3).curveTo(-34.6,-7.2,-34.9,-6.8).lineTo(-35.7,-5.3).lineTo(-36.7,-3.2).lineTo(-39.6,3).curveTo(-40,3.9,-40.8,3.9).curveTo(-41.2,3.9,-41.5,3.6).closePath().moveTo(41,-0.2).lineTo(38.7,-5.5).curveTo(37,-2.1,36.3,-0.2).lineTo(36.1,-0.1).lineTo(35.9,-0.2).lineTo(34.6,-3.2).lineTo(31,-11).lineTo(30.5,-11.9).curveTo(30.2,-12.3,29.7,-12.3).lineTo(29.2,-12.3).lineTo(29.1,-12.6).curveTo(29.1,-12.6,29.2,-12.7).curveTo(29.2,-12.7,29.2,-12.7).curveTo(29.2,-12.8,29.2,-12.8).curveTo(29.3,-12.8,29.3,-12.8).lineTo(31.2,-12.8).lineTo(33.3,-12.8).curveTo(33.3,-12.8,33.3,-12.8).curveTo(33.4,-12.8,33.4,-12.7).curveTo(33.4,-12.7,33.4,-12.7).curveTo(33.4,-12.6,33.4,-12.6).lineTo(33.3,-12.3).lineTo(33,-12.3).curveTo(32.3,-12.3,32.3,-12).curveTo(32.3,-11.7,33.3,-9.5).lineTo(36.5,-2.5).lineTo(37.9,-5.6).lineTo(38.2,-6.3).lineTo(38.1,-6.8).lineTo(36,-11.3).lineTo(35.6,-12).curveTo(35.3,-12.3,34.8,-12.3).lineTo(34.4,-12.3).lineTo(34.3,-12.6).curveTo(34.3,-12.6,34.3,-12.7).curveTo(34.3,-12.7,34.4,-12.7).curveTo(34.4,-12.8,34.4,-12.8).curveTo(34.4,-12.8,34.5,-12.8).lineTo(36.4,-12.8).lineTo(38.5,-12.8).curveTo(38.5,-12.8,38.5,-12.8).curveTo(38.5,-12.8,38.5,-12.7).curveTo(38.6,-12.7,38.6,-12.7).curveTo(38.6,-12.6,38.6,-12.6).curveTo(38.6,-12.5,38.6,-12.5).curveTo(38.6,-12.5,38.6,-12.4).curveTo(38.6,-12.4,38.6,-12.4).curveTo(38.6,-12.4,38.5,-12.3).lineTo(38,-12.3).curveTo(37.5,-12.3,37.4,-12.1).curveTo(37.4,-11.9,37.6,-11.3).lineTo(39,-8.1).curveTo(39.8,-9.5,40.2,-10.5).curveTo(40.7,-11.7,40.6,-12).curveTo(40.6,-12.3,40.2,-12.3).lineTo(39.6,-12.3).lineTo(39.5,-12.6).lineTo(39.6,-12.8).lineTo(41.4,-12.8).lineTo(43.2,-12.8).lineTo(43.3,-12.6).lineTo(43.2,-12.3).lineTo(42.6,-12.3).curveTo(42.2,-12.3,41.7,-11.7).lineTo(41.1,-10.6).curveTo(40.4,-9.3,39.7,-7.7).lineTo(39.5,-7.2).lineTo(39.7,-6.8).lineTo(41.5,-2.5).lineTo(43.2,-6.5).lineTo(44.7,-10.2).lineTo(45.2,-11.9).curveTo(45.2,-12.3,44.7,-12.3).lineTo(44.1,-12.3).lineTo(44,-12.6).lineTo(44.1,-12.8).lineTo(45.9,-12.8).lineTo(46,-12.8).lineTo(46.1,-12.8).curveTo(47,-12.8,47.6,-13.1).lineTo(48.5,-13.8).lineTo(48.6,-13.8).lineTo(48.6,-13.7).lineTo(48.6,-11.4).lineTo(48.6,-7.4).curveTo(48.6,-7.3,48.6,-7.3).curveTo(48.6,-7.2,48.6,-7.2).curveTo(48.6,-7.1,48.6,-7.1).curveTo(48.6,-7.1,48.7,-7.1).curveTo(49.9,-8.1,51.2,-8.1).curveTo(52.4,-8.1,53,-7.3).curveTo(53.6,-6.7,53.6,-5.6).lineTo(53.6,-2.5).curveTo(53.6,-1.5,53.7,-1.2).curveTo(53.8,-1,54.3,-0.9).lineTo(54.8,-0.9).lineTo(54.9,-0.6).lineTo(54.8,-0.3).lineTo(52.9,-0.4).lineTo(51.2,-0.3).lineTo(51,-0.6).lineTo(51.1,-0.9).lineTo(51.5,-0.9).curveTo(52,-1,52.1,-1.2).lineTo(52.2,-2.5).lineTo(52.2,-5.2).curveTo(52.2,-6.1,51.8,-6.6).curveTo(51.3,-7.2,50.4,-7.2).curveTo(49.6,-7.2,49,-6.7).lineTo(48.7,-6.3).lineTo(48.6,-5.7).lineTo(48.6,-2.5).curveTo(48.6,-1.5,48.7,-1.2).curveTo(48.8,-1,49.3,-0.9).lineTo(49.7,-0.9).curveTo(49.7,-0.9,49.7,-0.8).curveTo(49.7,-0.8,49.7,-0.8).curveTo(49.7,-0.7,49.7,-0.7).curveTo(49.7,-0.7,49.7,-0.6).lineTo(49.7,-0.3).lineTo(47.9,-0.4).lineTo(46.1,-0.3).lineTo(45.9,-0.6).lineTo(46,-0.9).lineTo(46.5,-0.9).curveTo(47,-1,47.1,-1.2).curveTo(47.2,-1.5,47.2,-2.5).lineTo(47.2,-10.9).curveTo(47.2,-11.8,47.1,-12).curveTo(47.1,-12.1,47.1,-12.1).curveTo(47,-12.1,47,-12.2).curveTo(47,-12.2,47,-12.2).curveTo(46.9,-12.2,46.9,-12.2).curveTo(46.6,-12,46.3,-11.7).lineTo(45.1,-9.1).lineTo(43.8,-5.9).curveTo(42.6,-3.2,41.4,-0.2).lineTo(41.2,-0.1).lineTo(41,-0.2).closePath().moveTo(-15.1,-0.8).lineTo(-15.4,-1.9).lineTo(-15.6,-3.4).lineTo(-15.4,-3.6).lineTo(-15.2,-3.5).curveTo(-14.3,-0.7,-11.9,-0.7).curveTo(-10.8,-0.7,-10.2,-1.4).curveTo(-9.7,-1.9,-9.7,-2.8).curveTo(-9.7,-3.7,-9.9,-4.1).curveTo(-10.2,-4.9,-11.2,-5.4).lineTo(-12.9,-6.6).curveTo(-14.9,-8,-14.9,-9.9).curveTo(-14.9,-11.2,-13.9,-12.1).curveTo(-12.9,-13,-11.1,-13).curveTo(-10.3,-13,-9.4,-12.8).lineTo(-8.7,-12.7).curveTo(-8.6,-12.3,-8.5,-11.7).lineTo(-8.4,-10.4).lineTo(-8.6,-10.3).lineTo(-8.8,-10.3).curveTo(-9.1,-11.2,-9.6,-11.7).curveTo(-10.2,-12.5,-11.4,-12.5).curveTo(-12.6,-12.5,-13.2,-11.7).curveTo(-13.7,-11.2,-13.7,-10.4).curveTo(-13.7,-9.1,-12.1,-8.1).lineTo(-10.6,-7.2).curveTo(-8.2,-5.7,-8.2,-3.6).curveTo(-8.2,-2.1,-9.3,-1.1).curveTo(-10.4,-0.1,-12.2,-0.1).curveTo(-13.9,-0.1,-15.1,-0.8).closePath().moveTo(66.8,-0.5).curveTo(66.1,-0.9,65.7,-1.4).curveTo(64.9,-2.4,64.9,-3.9).curveTo(64.9,-5.6,66,-6.8).curveTo(67,-8.1,68.7,-8.1).curveTo(69.8,-8.1,70.6,-7.4).curveTo(71.3,-6.7,71.3,-5.8).lineTo(71.2,-5.3).curveTo(71.2,-5.2,70.1,-5.2).lineTo(66.7,-5.2).curveTo(66.6,-5.2,66.5,-5.2).curveTo(66.4,-5.2,66.4,-5.2).curveTo(66.3,-5.2,66.3,-5.2).curveTo(66.2,-5.2,66.2,-5.1).lineTo(66.2,-4.7).curveTo(66.2,-3.2,67,-2.3).curveTo(67.9,-1.2,69.3,-1.2).curveTo(69.8,-1.2,70.1,-1.4).curveTo(70.6,-1.6,71,-2.1).curveTo(71.1,-2.1,71.1,-2.1).curveTo(71.2,-2.1,71.2,-2.1).curveTo(71.3,-2.1,71.3,-2).curveTo(71.3,-2,71.3,-1.9).curveTo(70.9,-1,70,-0.6).curveTo(69.2,-0.2,68.4,-0.2).curveTo(67.5,-0.2,66.8,-0.5).closePath().moveTo(67,-6.9).curveTo(66.4,-6.4,66.4,-5.9).curveTo(66.4,-5.8,66.4,-5.8).curveTo(66.4,-5.8,66.4,-5.8).curveTo(66.4,-5.7,66.5,-5.7).curveTo(66.5,-5.7,66.5,-5.7).lineTo(67.9,-5.7).curveTo(69.5,-5.7,69.8,-6).curveTo(69.8,-6,69.8,-6).curveTo(69.9,-6,69.9,-6.1).curveTo(69.9,-6.1,69.9,-6.2).curveTo(69.9,-6.2,69.9,-6.3).curveTo(69.9,-6.8,69.6,-7.1).curveTo(69.2,-7.5,68.5,-7.5).curveTo(67.7,-7.5,67,-6.9).closePath().moveTo(61,-0.8).curveTo(60.7,-1.2,60.7,-2.2).lineTo(60.7,-6.5).curveTo(60.7,-6.6,60.7,-6.6).curveTo(60.7,-6.7,60.7,-6.8).curveTo(60.6,-6.8,60.6,-6.9).curveTo(60.6,-6.9,60.6,-6.9).lineTo(60.3,-7).lineTo(59.7,-7).lineTo(59.7,-7.2).lineTo(59.7,-7.4).curveTo(60.5,-7.6,60.9,-8).curveTo(61.3,-8.3,61.7,-9.1).lineTo(61.9,-9.1).lineTo(62.1,-9).lineTo(62.1,-8.1).lineTo(62.1,-7.8).lineTo(64.5,-7.8).curveTo(64.5,-7.8,64.5,-7.7).curveTo(64.6,-7.7,64.6,-7.6).curveTo(64.6,-7.6,64.6,-7.5).curveTo(64.6,-7.5,64.6,-7.4).curveTo(64.6,-7.3,64.6,-7.2).curveTo(64.6,-7.2,64.6,-7.1).curveTo(64.6,-7.1,64.5,-7).curveTo(64.5,-7,64.5,-7).lineTo(62.3,-7).lineTo(62.1,-6.9).lineTo(62,-6.5).lineTo(62,-3).curveTo(62,-2.1,62.3,-1.6).curveTo(62.6,-1,63.4,-1).lineTo(63.9,-1.1).lineTo(64.4,-1.3).lineTo(64.5,-1.2).lineTo(64.6,-1).curveTo(63.8,-0.2,62.6,-0.2).curveTo(61.5,-0.2,61,-0.8).closePath().moveTo(15.5,-0.8).curveTo(15.1,-1.2,15.1,-2.2).lineTo(15.1,-6.5).lineTo(15.1,-6.9).lineTo(14.8,-7).lineTo(14.2,-7).lineTo(14.1,-7.2).lineTo(14.2,-7.4).curveTo(15,-7.6,15.4,-8).curveTo(15.8,-8.4,16.1,-9.1).lineTo(16.3,-9.1).lineTo(16.5,-9).lineTo(16.5,-8.1).lineTo(16.6,-7.8).lineTo(18.9,-7.8).curveTo(19,-7.8,19,-7.7).curveTo(19,-7.7,19,-7.6).curveTo(19.1,-7.6,19.1,-7.5).curveTo(19.1,-7.5,19.1,-7.4).lineTo(19,-7).lineTo(16.8,-7).lineTo(16.6,-6.9).lineTo(16.5,-6.5).lineTo(16.5,-3).curveTo(16.5,-2.1,16.7,-1.6).curveTo(17,-1,17.9,-1).lineTo(18.3,-1.1).lineTo(18.8,-1.3).lineTo(19,-1.2).lineTo(19,-1).curveTo(18.3,-0.2,17.1,-0.2).curveTo(16,-0.2,15.5,-0.8).closePath().moveTo(9.9,-0.8).curveTo(9.5,-1.2,9.5,-2.2).lineTo(9.5,-6.5).lineTo(9.4,-6.9).lineTo(9.1,-7).lineTo(8.6,-7).lineTo(8.5,-7.2).lineTo(8.5,-7.4).curveTo(9.4,-7.7,9.7,-8).curveTo(10.1,-8.4,10.5,-9.1).lineTo(10.7,-9.1).lineTo(10.9,-9).lineTo(10.9,-8.1).curveTo(10.9,-8.1,10.9,-8).curveTo(10.9,-8,10.9,-7.9).curveTo(10.9,-7.9,10.9,-7.9).curveTo(11,-7.8,11,-7.8).lineTo(13.3,-7.8).curveTo(13.3,-7.8,13.4,-7.7).curveTo(13.4,-7.7,13.4,-7.6).curveTo(13.4,-7.6,13.5,-7.5).curveTo(13.5,-7.5,13.5,-7.4).curveTo(13.5,-7.3,13.5,-7.2).curveTo(13.5,-7.2,13.4,-7.1).curveTo(13.4,-7.1,13.4,-7).curveTo(13.4,-7,13.3,-7).lineTo(11.2,-7).lineTo(10.9,-6.9).lineTo(10.9,-6.5).lineTo(10.9,-3).curveTo(10.9,-2.1,11.1,-1.6).curveTo(11.4,-1,12.2,-1).lineTo(12.7,-1.1).lineTo(13.2,-1.3).lineTo(13.4,-1.2).lineTo(13.4,-1).curveTo(12.7,-0.2,11.4,-0.2).curveTo(10.3,-0.2,9.9,-0.8).closePath().moveTo(1,-1.2).curveTo(-0.1,-2.3,-0.1,-4).curveTo(-0.1,-5.7,1.1,-6.9).curveTo(2.2,-8.1,3.9,-8.1).curveTo(5.5,-8.1,6.6,-7).curveTo(7.7,-5.9,7.7,-4.2).curveTo(7.7,-2.4,6.6,-1.3).curveTo(5.5,-0.2,3.7,-0.2).curveTo(2.1,-0.2,1,-1.2).closePath().moveTo(2.1,-6.6).curveTo(1.5,-5.7,1.5,-4.2).curveTo(1.5,-2.8,2.1,-1.9).curveTo(2.8,-0.7,3.9,-0.7).curveTo(5,-0.7,5.6,-1.8).curveTo(6.1,-2.6,6.1,-3.9).curveTo(6.1,-5.3,5.5,-6.3).curveTo(4.9,-7.5,3.7,-7.5).curveTo(2.7,-7.5,2.1,-6.6).closePath().moveTo(-5.9,-1.1).curveTo(-7,-2.1,-7,-3.9).curveTo(-7,-5.5,-5.9,-6.7).curveTo(-4.7,-8.1,-2.6,-8.1).curveTo(-1.6,-8.1,-0.9,-7.7).curveTo(-0.6,-7.5,-0.6,-7).curveTo(-0.6,-6.9,-0.6,-6.9).curveTo(-0.6,-6.8,-0.6,-6.7).curveTo(-0.6,-6.7,-0.7,-6.6).curveTo(-0.7,-6.6,-0.7,-6.5).curveTo(-0.7,-6.5,-0.8,-6.4).curveTo(-0.8,-6.4,-0.9,-6.4).curveTo(-0.9,-6.3,-0.9,-6.3).curveTo(-1,-6.3,-1,-6.3).lineTo(-1.3,-6.4).curveTo(-2.1,-7.4,-3.1,-7.4).curveTo(-4.2,-7.4,-4.9,-6.6).curveTo(-5.7,-5.8,-5.7,-4.4).curveTo(-5.7,-3.2,-5,-2.3).curveTo(-4.1,-1.2,-2.7,-1.2).curveTo(-2,-1.2,-1.4,-1.5).lineTo(-0.6,-2.3).lineTo(-0.4,-2.3).lineTo(-0.3,-2.1).curveTo(-0.8,-1.1,-1.7,-0.6).curveTo(-2.5,-0.2,-3.4,-0.2).curveTo(-5,-0.2,-5.9,-1.1).closePath().moveTo(-29,-1.2).curveTo(-30.1,-2.3,-30.1,-4).curveTo(-30.1,-5.7,-29,-6.9).curveTo(-27.9,-8.1,-26.2,-8.1).curveTo(-24.6,-8.1,-23.5,-7).curveTo(-22.4,-5.9,-22.4,-4.2).curveTo(-22.4,-2.4,-23.5,-1.3).curveTo(-24.6,-0.2,-26.3,-0.2).curveTo(-28,-0.2,-29,-1.2).closePath().moveTo(-27.9,-6.6).curveTo(-28.6,-5.7,-28.6,-4.2).curveTo(-28.6,-2.8,-28,-1.9).curveTo(-27.3,-0.7,-26.1,-0.7).curveTo(-25,-0.7,-24.4,-1.8).curveTo(-24,-2.6,-24,-3.9).curveTo(-24,-5.3,-24.5,-6.3).curveTo(-25.2,-7.5,-26.4,-7.5).curveTo(-27.4,-7.5,-27.9,-6.6).closePath().moveTo(-44.4,-0.8).curveTo(-44.5,-0.8,-44.5,-0.9).curveTo(-44.5,-0.9,-44.6,-0.9).curveTo(-44.6,-1,-44.6,-1).curveTo(-44.7,-1,-44.7,-1).lineTo(-45,-0.9).lineTo(-45.4,-0.6).lineTo(-46.1,-0.3).lineTo(-46.8,-0.2).curveTo(-47.6,-0.2,-48.1,-0.6).curveTo(-48.7,-1.1,-48.7,-1.9).curveTo(-48.7,-2.5,-48.3,-2.8).curveTo(-48,-3.2,-47.1,-3.5).lineTo(-44.9,-4.3).curveTo(-44.9,-4.3,-44.8,-4.3).curveTo(-44.8,-4.3,-44.7,-4.4).curveTo(-44.7,-4.4,-44.7,-4.4).curveTo(-44.6,-4.5,-44.6,-4.5).lineTo(-44.6,-4.8).lineTo(-44.6,-5.7).curveTo(-44.6,-6.3,-44.8,-6.8).curveTo(-45.1,-7.3,-45.9,-7.3).curveTo(-46.3,-7.3,-46.7,-7.1).curveTo(-47.1,-6.9,-47.1,-6.5).curveTo(-47.1,-6,-47.3,-5.9).curveTo(-47.7,-5.5,-48.3,-5.5).curveTo(-48.4,-5.5,-48.4,-5.5).curveTo(-48.5,-5.5,-48.5,-5.5).curveTo(-48.5,-5.6,-48.6,-5.6).curveTo(-48.6,-5.7,-48.6,-5.7).curveTo(-48.6,-6.5,-47.4,-7.2).curveTo(-46.2,-8.1,-45.1,-8.1).curveTo(-44.1,-8.1,-43.7,-7.5).curveTo(-43.2,-6.9,-43.2,-5.9).lineTo(-43.3,-2.6).curveTo(-43.4,-1,-42.5,-1).lineTo(-42,-1.1).lineTo(-41.8,-1.2).curveTo(-41.8,-1.2,-41.7,-1.2).curveTo(-41.7,-1.2,-41.7,-1.2).curveTo(-41.7,-1.1,-41.7,-1.1).curveTo(-41.7,-1,-41.7,-1).lineTo(-42.1,-0.5).curveTo(-42.6,-0.2,-43.2,-0.2).curveTo(-44,-0.2,-44.4,-0.8).closePath().moveTo(-45.6,-3.5).curveTo(-46.5,-3.2,-46.8,-3).curveTo(-47.2,-2.6,-47.2,-2.1).curveTo(-47.2,-1.8,-47,-1.4).curveTo(-46.7,-1,-46.1,-1).curveTo(-45.8,-1,-45.4,-1.2).curveTo(-45,-1.3,-44.9,-1.5).lineTo(-44.7,-1.9).lineTo(-44.7,-2.3).lineTo(-44.6,-3.4).curveTo(-44.6,-3.5,-44.6,-3.5).curveTo(-44.6,-3.6,-44.7,-3.6).curveTo(-44.7,-3.6,-44.7,-3.7).curveTo(-44.8,-3.7,-44.8,-3.7).lineTo(-45.6,-3.5).closePath().moveTo(57.2,-0.4).lineTo(55.5,-0.3).lineTo(55.4,-0.6).lineTo(55.4,-0.9).lineTo(55.8,-0.9).curveTo(56.3,-1,56.4,-1.2).curveTo(56.5,-1.5,56.5,-2.5).lineTo(56.5,-5.8).lineTo(56.5,-6.5).lineTo(56,-6.9).lineTo(55.8,-7).lineTo(55.8,-7.2).lineTo(55.9,-7.4).lineTo(56.8,-7.8).lineTo(57.8,-8.3).curveTo(57.9,-8.3,57.9,-8.3).curveTo(57.9,-8.3,57.9,-8.3).curveTo(58,-8.3,58,-8.2).curveTo(58,-8.2,58,-8.2).lineTo(57.9,-5.9).lineTo(57.9,-2.5).curveTo(57.9,-1.5,58,-1.2).curveTo(58.1,-1,58.6,-0.9).lineTo(59,-0.9).lineTo(59.1,-0.6).lineTo(59,-0.3).lineTo(57.2,-0.4).closePath().moveTo(28.8,-0.5).curveTo(28.4,-0.7,27.8,-1.2).curveTo(26.9,-0.7,26.2,-0.5).curveTo(25.5,-0.3,24.7,-0.3).curveTo(23,-0.3,21.9,-1.2).curveTo(20.7,-2.2,20.7,-3.7).curveTo(20.7,-5.7,22.8,-6.6).curveTo(22.1,-7.4,22.1,-8.2).curveTo(22.1,-9.2,22.8,-9.9).curveTo(23.4,-10.5,24.4,-10.5).curveTo(25.2,-10.5,25.7,-10.1).curveTo(26.1,-9.7,26.1,-9.1).curveTo(26.1,-8.5,25.7,-8.1).curveTo(25.3,-7.8,24.9,-7.8).curveTo(24.5,-7.8,24.8,-8.1).lineTo(24.9,-8.4).curveTo(25,-8.6,24.9,-9).lineTo(24.6,-9.4).curveTo(24.3,-9.6,23.9,-9.6).curveTo(23.4,-9.7,23,-9.4).curveTo(22.7,-9.1,22.7,-8.7).curveTo(22.7,-8.2,23,-7.8).curveTo(23.4,-7.4,24.3,-6.9).curveTo(25.9,-6.1,26.7,-5.4).curveTo(27.8,-4.5,28.6,-2.8).curveTo(29.3,-3.6,29.3,-4.5).curveTo(29.3,-5.2,28.8,-5.8).curveTo(28.6,-6.1,28.2,-6.2).curveTo(27.6,-6.3,27.2,-5.9).lineTo(27,-5.9).curveTo(27,-5.9,26.9,-5.9).curveTo(26.9,-5.9,26.9,-6).curveTo(26.9,-6,26.9,-6.1).curveTo(26.9,-6.2,26.9,-6.3).curveTo(27,-6.7,27.4,-7).curveTo(27.9,-7.4,28.5,-7.4).lineTo(29.4,-7.2).lineTo(30.2,-7.2).curveTo(30.3,-7.2,30.3,-7.2).curveTo(30.4,-7.2,30.4,-7.2).curveTo(30.5,-7.2,30.5,-7.3).curveTo(30.6,-7.3,30.6,-7.3).lineTo(30.8,-7.4).curveTo(30.8,-7.4,30.8,-7.4).curveTo(30.9,-7.4,30.9,-7.4).curveTo(30.9,-7.3,30.9,-7.3).curveTo(31,-7.3,31,-7.2).curveTo(31,-6.3,29.7,-5.9).curveTo(29.9,-5.4,29.9,-4.8).curveTo(29.9,-3.4,28.9,-2.3).curveTo(29.4,-1.5,29.8,-1.2).curveTo(30.3,-0.9,30.9,-0.9).lineTo(31.4,-1).lineTo(31.8,-1).lineTo(31.9,-0.9).curveTo(31.9,-0.6,31.3,-0.5).curveTo(30.8,-0.3,30,-0.3).curveTo(29.4,-0.3,28.8,-0.5).closePath().moveTo(22.1,-4.7).curveTo(22.1,-3.3,23.2,-2.1).curveTo(24.2,-1.1,25.5,-1.1).lineTo(26.4,-1.2).lineTo(27.4,-1.6).lineTo(26.6,-2.7).lineTo(26.2,-3.3).lineTo(24.8,-5).lineTo(23.7,-5.9).lineTo(23.2,-6.2).curveTo(22.1,-6,22.1,-4.7).closePath().moveTo(-19.7,-0.4).lineTo(-21.4,-0.3).lineTo(-21.5,-0.6).lineTo(-21.4,-0.9).lineTo(-21.1,-0.9).curveTo(-20.6,-1,-20.5,-1.2).curveTo(-20.4,-1.5,-20.4,-2.5).lineTo(-20.4,-5.8).lineTo(-20.5,-6.5).lineTo(-20.9,-6.9).lineTo(-21,-7).lineTo(-21.1,-7.2).curveTo(-21.1,-7.3,-21.1,-7.3).curveTo(-21.1,-7.3,-21.1,-7.3).curveTo(-21.1,-7.4,-21.1,-7.4).curveTo(-21,-7.4,-21,-7.4).lineTo(-20.1,-7.8).lineTo(-19.1,-8.3).lineTo(-19,-8.1).lineTo(-19,-7.1).lineTo(-19,-6.9).lineTo(-17.9,-7.7).curveTo(-17.4,-8.1,-16.9,-8.1).curveTo(-16.6,-8.1,-16.3,-7.8).curveTo(-16.1,-7.6,-16.1,-7.3).curveTo(-16.1,-6.9,-16.3,-6.6).curveTo(-16.6,-6.4,-16.9,-6.4).lineTo(-17.3,-6.6).curveTo(-17.7,-6.9,-18.1,-6.9).curveTo(-18.5,-6.9,-18.8,-6.5).curveTo(-19,-6.1,-19,-5).lineTo(-19,-2.5).curveTo(-19,-1.5,-18.9,-1.2).curveTo(-18.8,-1,-18.3,-0.9).lineTo(-17.6,-0.9).lineTo(-17.5,-0.6).lineTo(-17.6,-0.3).lineTo(-19.7,-0.4).closePath().moveTo(-32.6,-0.4).lineTo(-34.4,-0.3).curveTo(-34.4,-0.4,-34.4,-0.4).curveTo(-34.5,-0.4,-34.5,-0.4).curveTo(-34.5,-0.5,-34.5,-0.5).curveTo(-34.5,-0.5,-34.5,-0.6).curveTo(-34.5,-0.6,-34.5,-0.7).curveTo(-34.5,-0.7,-34.5,-0.7).curveTo(-34.5,-0.8,-34.5,-0.8).curveTo(-34.5,-0.9,-34.4,-0.9).lineTo(-34,-0.9).curveTo(-33.5,-1,-33.4,-1.2).lineTo(-33.3,-2.5).lineTo(-33.3,-10.9).lineTo(-33.4,-12).curveTo(-33.5,-12.3,-33.9,-12.5).lineTo(-34.1,-12.6).lineTo(-34.1,-12.8).lineTo(-34.1,-13).lineTo(-32.1,-13.8).curveTo(-32,-13.8,-32,-13.8).curveTo(-32,-13.8,-31.9,-13.8).curveTo(-31.9,-13.7,-31.9,-13.7).curveTo(-31.9,-13.7,-31.9,-13.7).lineTo(-31.9,-11.4).lineTo(-31.9,-2.5).lineTo(-31.8,-1.2).curveTo(-31.7,-1,-31.2,-0.9).lineTo(-30.8,-0.9).lineTo(-30.7,-0.6).lineTo(-30.8,-0.3).lineTo(-32.6,-0.4).closePath().moveTo(-57,-0.4).lineTo(-59.2,-0.3).lineTo(-59.3,-0.6).lineTo(-59.2,-0.9).lineTo(-58.9,-0.9).curveTo(-58.2,-1,-58,-1.4).curveTo(-57.9,-1.7,-57.9,-3.2).lineTo(-57.9,-10.3).curveTo(-57.9,-11.4,-58,-11.7).curveTo(-58.2,-12,-58.8,-12.1).lineTo(-59.4,-12.2).lineTo(-59.5,-12.4).lineTo(-59.4,-12.6).curveTo(-57.9,-12.8,-55.4,-12.8).curveTo(-53.3,-12.8,-52.2,-12.3).curveTo(-50.8,-11.6,-50.8,-9.9).curveTo(-50.8,-9,-51.3,-8.4).curveTo(-51.8,-7.8,-52.7,-7.4).curveTo(-52.7,-7.3,-52.7,-7.3).curveTo(-52.7,-7.2,-52.6,-7.2).curveTo(-52.6,-7.2,-52.5,-7.2).curveTo(-52.4,-7.1,-52.3,-7.1).curveTo(-51.5,-6.9,-50.7,-6.3).curveTo(-49.9,-5.4,-49.9,-4).curveTo(-49.9,-2.3,-51.1,-1.4).curveTo(-52.4,-0.3,-54.8,-0.3).lineTo(-57,-0.4).closePath().moveTo(-56.2,-6.6).curveTo(-56.2,-6.6,-56.2,-6.6).curveTo(-56.3,-6.5,-56.3,-6.5).curveTo(-56.3,-6.4,-56.3,-6.4).curveTo(-56.3,-6.3,-56.3,-6.3).lineTo(-56.3,-3.5).curveTo(-56.3,-1.9,-56,-1.5).curveTo(-55.5,-1,-54.5,-1).curveTo(-53.1,-1,-52.4,-1.5).curveTo(-51.6,-2.2,-51.6,-3.6).curveTo(-51.6,-4.9,-52.3,-5.7).curveTo(-53.2,-6.8,-55.2,-6.8).curveTo(-56,-6.8,-56.2,-6.6).closePath().moveTo(-56.1,-12.1).lineTo(-56.3,-12).lineTo(-56.3,-11.7).lineTo(-56.3,-7.8).curveTo(-56.3,-7.7,-56.3,-7.6).curveTo(-56.3,-7.6,-56.3,-7.5).curveTo(-56.3,-7.5,-56.3,-7.4).curveTo(-56.2,-7.4,-56.2,-7.4).curveTo(-56.1,-7.3,-55.4,-7.3).curveTo(-53.9,-7.4,-53.2,-7.9).curveTo(-52.5,-8.4,-52.5,-9.7).curveTo(-52.5,-11,-53.3,-11.7).curveTo(-54.1,-12.2,-55.2,-12.2).lineTo(-56.1,-12.1).closePath().moveTo(-76.4,-14.3).lineTo(-71.6,-14.3).lineTo(-71.6,-5.2).lineTo(-71.9,-4.8).lineTo(-76.4,-0.3).closePath().moveTo(-91,-0.3).lineTo(-91,-5.1).lineTo(-81.8,-5.1).lineTo(-81.5,-4.8).lineTo(-77,-0.3).closePath().moveTo(56.4,-9.8).curveTo(56.1,-10.1,56.1,-10.5).curveTo(56.1,-10.9,56.4,-11.2).curveTo(56.7,-11.4,57.1,-11.4).curveTo(57.5,-11.4,57.8,-11.2).curveTo(58.1,-10.9,58.1,-10.5).curveTo(58.1,-10,57.8,-9.8).curveTo(57.5,-9.5,57.1,-9.5).curveTo(56.6,-9.5,56.4,-9.8).closePath();
	this.shape_2.setTransform(209.575,17.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_Logo, new cjs.Rectangle(0,0,728,90), null);


(lib.BSWH_Icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(17,64,160,0)").beginStroke().moveTo(-2.7,7.8).lineTo(-2.7,-2.4).lineTo(2.7,-7.8).lineTo(2.7,7.8).closePath();
	this.shape.setTransform(-3,8.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(17,64,160,0.11)").beginStroke().moveTo(-2.7,7.8).lineTo(-2.7,-2.4).lineTo(2.7,-7.8).lineTo(2.7,7.8).closePath();
	this.shape_1.setTransform(-3,8.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(17,64,160,0.224)").beginStroke().moveTo(-2.7,7.8).lineTo(-2.7,-2.4).lineTo(2.7,-7.8).lineTo(2.7,7.8).closePath();
	this.shape_2.setTransform(-3,8.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("rgba(17,64,160,0.333)").beginStroke().moveTo(-2.7,7.8).lineTo(-2.7,-2.4).lineTo(2.7,-7.8).lineTo(2.7,7.8).closePath();
	this.shape_3.setTransform(-3,8.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("rgba(17,64,160,0.443)").beginStroke().moveTo(-2.7,7.8).lineTo(-2.7,-2.4).lineTo(2.7,-7.8).lineTo(2.7,7.8).closePath();
	this.shape_4.setTransform(-3,8.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("rgba(17,64,160,0.557)").beginStroke().moveTo(-2.7,7.8).lineTo(-2.7,-2.4).lineTo(2.7,-7.8).lineTo(2.7,7.8).closePath();
	this.shape_5.setTransform(-3,8.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("rgba(17,64,160,0.667)").beginStroke().moveTo(-2.7,7.8).lineTo(-2.7,-2.4).lineTo(2.7,-7.8).lineTo(2.7,7.8).closePath();
	this.shape_6.setTransform(-3,8.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("rgba(17,64,160,0.776)").beginStroke().moveTo(-2.7,7.8).lineTo(-2.7,-2.4).lineTo(2.7,-7.8).lineTo(2.7,7.8).closePath();
	this.shape_7.setTransform(-3,8.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("rgba(17,64,160,0.89)").beginStroke().moveTo(-2.7,7.8).lineTo(-2.7,-2.4).lineTo(2.7,-7.8).lineTo(2.7,7.8).closePath();
	this.shape_8.setTransform(-3,8.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#1140A0").beginStroke().moveTo(-2.7,7.8).lineTo(-2.7,-2.4).lineTo(2.7,-7.8).lineTo(2.7,7.8).closePath();
	this.shape_9.setTransform(-3,8.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},190).to({state:[]},1).wait(49));

	// Layer_6
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("rgba(17,64,160,0)").beginStroke().moveTo(-2.7,-7.7).lineTo(2.7,-7.7).lineTo(2.7,2.4).lineTo(-2.7,7.7).closePath();
	this.shape_10.setTransform(3.075,-8.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("rgba(17,64,160,0.11)").beginStroke().moveTo(-2.7,-7.7).lineTo(2.7,-7.7).lineTo(2.7,2.4).lineTo(-2.7,7.7).closePath();
	this.shape_11.setTransform(3.075,-8.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("rgba(17,64,160,0.224)").beginStroke().moveTo(-2.7,-7.7).lineTo(2.7,-7.7).lineTo(2.7,2.4).lineTo(-2.7,7.7).closePath();
	this.shape_12.setTransform(3.075,-8.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("rgba(17,64,160,0.333)").beginStroke().moveTo(-2.7,-7.7).lineTo(2.7,-7.7).lineTo(2.7,2.4).lineTo(-2.7,7.7).closePath();
	this.shape_13.setTransform(3.075,-8.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("rgba(17,64,160,0.443)").beginStroke().moveTo(-2.7,-7.7).lineTo(2.7,-7.7).lineTo(2.7,2.4).lineTo(-2.7,7.7).closePath();
	this.shape_14.setTransform(3.075,-8.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("rgba(17,64,160,0.557)").beginStroke().moveTo(-2.7,-7.7).lineTo(2.7,-7.7).lineTo(2.7,2.4).lineTo(-2.7,7.7).closePath();
	this.shape_15.setTransform(3.075,-8.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("rgba(17,64,160,0.667)").beginStroke().moveTo(-2.7,-7.7).lineTo(2.7,-7.7).lineTo(2.7,2.4).lineTo(-2.7,7.7).closePath();
	this.shape_16.setTransform(3.075,-8.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("rgba(17,64,160,0.776)").beginStroke().moveTo(-2.7,-7.7).lineTo(2.7,-7.7).lineTo(2.7,2.4).lineTo(-2.7,7.7).closePath();
	this.shape_17.setTransform(3.075,-8.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("rgba(17,64,160,0.89)").beginStroke().moveTo(-2.7,-7.7).lineTo(2.7,-7.7).lineTo(2.7,2.4).lineTo(-2.7,7.7).closePath();
	this.shape_18.setTransform(3.075,-8.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#1140A0").beginStroke().moveTo(-2.7,-7.7).lineTo(2.7,-7.7).lineTo(2.7,2.4).lineTo(-2.7,7.7).closePath();
	this.shape_19.setTransform(3.075,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},189).to({state:[]},1).wait(49));

	// Layer_8
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("rgba(17,64,160,0)").beginStroke().moveTo(-7.8,2.6).lineTo(-7.8,-2.7).lineTo(2.4,-2.7).lineTo(7.8,2.6).closePath();
	this.shape_20.setTransform(-8.1,-3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("rgba(17,64,160,0.11)").beginStroke().moveTo(-7.8,2.6).lineTo(-7.8,-2.7).lineTo(2.4,-2.7).lineTo(7.8,2.6).closePath();
	this.shape_21.setTransform(-8.1,-3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("rgba(17,64,160,0.224)").beginStroke().moveTo(-7.8,2.6).lineTo(-7.8,-2.7).lineTo(2.4,-2.7).lineTo(7.8,2.6).closePath();
	this.shape_22.setTransform(-8.1,-3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("rgba(17,64,160,0.333)").beginStroke().moveTo(-7.8,2.6).lineTo(-7.8,-2.7).lineTo(2.4,-2.7).lineTo(7.8,2.6).closePath();
	this.shape_23.setTransform(-8.1,-3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("rgba(17,64,160,0.443)").beginStroke().moveTo(-7.8,2.6).lineTo(-7.8,-2.7).lineTo(2.4,-2.7).lineTo(7.8,2.6).closePath();
	this.shape_24.setTransform(-8.1,-3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("rgba(17,64,160,0.557)").beginStroke().moveTo(-7.8,2.6).lineTo(-7.8,-2.7).lineTo(2.4,-2.7).lineTo(7.8,2.6).closePath();
	this.shape_25.setTransform(-8.1,-3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("rgba(17,64,160,0.667)").beginStroke().moveTo(-7.8,2.6).lineTo(-7.8,-2.7).lineTo(2.4,-2.7).lineTo(7.8,2.6).closePath();
	this.shape_26.setTransform(-8.1,-3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("rgba(17,64,160,0.776)").beginStroke().moveTo(-7.8,2.6).lineTo(-7.8,-2.7).lineTo(2.4,-2.7).lineTo(7.8,2.6).closePath();
	this.shape_27.setTransform(-8.1,-3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("rgba(17,64,160,0.89)").beginStroke().moveTo(-7.8,2.6).lineTo(-7.8,-2.7).lineTo(2.4,-2.7).lineTo(7.8,2.6).closePath();
	this.shape_28.setTransform(-8.1,-3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#1140A0").beginStroke().moveTo(-7.8,2.6).lineTo(-7.8,-2.7).lineTo(2.4,-2.7).lineTo(7.8,2.6).closePath();
	this.shape_29.setTransform(-8.1,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},190).to({state:[]},1).wait(49));

	// Layer_5
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("rgba(17,64,160,0)").beginStroke().moveTo(-2.3,2.7).lineTo(-7.8,-2.7).lineTo(7.8,-2.7).lineTo(7.8,2.7).closePath();
	this.shape_30.setTransform(8.125,3.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("rgba(17,64,160,0.11)").beginStroke().moveTo(-2.3,2.7).lineTo(-7.8,-2.7).lineTo(7.8,-2.7).lineTo(7.8,2.7).closePath();
	this.shape_31.setTransform(8.125,3.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("rgba(17,64,160,0.224)").beginStroke().moveTo(-2.3,2.7).lineTo(-7.8,-2.7).lineTo(7.8,-2.7).lineTo(7.8,2.7).closePath();
	this.shape_32.setTransform(8.125,3.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("rgba(17,64,160,0.333)").beginStroke().moveTo(-2.3,2.7).lineTo(-7.8,-2.7).lineTo(7.8,-2.7).lineTo(7.8,2.7).closePath();
	this.shape_33.setTransform(8.125,3.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("rgba(17,64,160,0.443)").beginStroke().moveTo(-2.3,2.7).lineTo(-7.8,-2.7).lineTo(7.8,-2.7).lineTo(7.8,2.7).closePath();
	this.shape_34.setTransform(8.125,3.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("rgba(17,64,160,0.557)").beginStroke().moveTo(-2.3,2.7).lineTo(-7.8,-2.7).lineTo(7.8,-2.7).lineTo(7.8,2.7).closePath();
	this.shape_35.setTransform(8.125,3.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("rgba(17,64,160,0.667)").beginStroke().moveTo(-2.3,2.7).lineTo(-7.8,-2.7).lineTo(7.8,-2.7).lineTo(7.8,2.7).closePath();
	this.shape_36.setTransform(8.125,3.075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("rgba(17,64,160,0.776)").beginStroke().moveTo(-2.3,2.7).lineTo(-7.8,-2.7).lineTo(7.8,-2.7).lineTo(7.8,2.7).closePath();
	this.shape_37.setTransform(8.125,3.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("rgba(17,64,160,0.89)").beginStroke().moveTo(-2.3,2.7).lineTo(-7.8,-2.7).lineTo(7.8,-2.7).lineTo(7.8,2.7).closePath();
	this.shape_38.setTransform(8.125,3.075);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#1140A0").beginStroke().moveTo(-2.3,2.7).lineTo(-7.8,-2.7).lineTo(7.8,-2.7).lineTo(7.8,2.7).closePath();
	this.shape_39.setTransform(8.125,3.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},189).to({state:[]},1).wait(49));

	// Layer_3
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("rgba(245,184,70,0)").beginStroke().moveTo(-2.7,-0).lineTo(-2.7,-5.3).lineTo(2.7,-5.3).lineTo(2.7,5.3).closePath();
	this.shape_40.setTransform(-3,-5.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("rgba(245,184,70,0.11)").beginStroke().moveTo(-2.7,-0).lineTo(-2.7,-5.3).lineTo(2.7,-5.3).lineTo(2.7,5.3).closePath();
	this.shape_41.setTransform(-3,-5.625);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("rgba(245,184,70,0.224)").beginStroke().moveTo(-2.7,-0).lineTo(-2.7,-5.3).lineTo(2.7,-5.3).lineTo(2.7,5.3).closePath();
	this.shape_42.setTransform(-3,-5.625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("rgba(245,184,70,0.333)").beginStroke().moveTo(-2.7,-0).lineTo(-2.7,-5.3).lineTo(2.7,-5.3).lineTo(2.7,5.3).closePath();
	this.shape_43.setTransform(-3,-5.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("rgba(245,184,70,0.443)").beginStroke().moveTo(-2.7,-0).lineTo(-2.7,-5.3).lineTo(2.7,-5.3).lineTo(2.7,5.3).closePath();
	this.shape_44.setTransform(-3,-5.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("rgba(245,184,70,0.557)").beginStroke().moveTo(-2.7,-0).lineTo(-2.7,-5.3).lineTo(2.7,-5.3).lineTo(2.7,5.3).closePath();
	this.shape_45.setTransform(-3,-5.625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("rgba(245,184,70,0.667)").beginStroke().moveTo(-2.7,-0).lineTo(-2.7,-5.3).lineTo(2.7,-5.3).lineTo(2.7,5.3).closePath();
	this.shape_46.setTransform(-3,-5.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("rgba(245,184,70,0.776)").beginStroke().moveTo(-2.7,-0).lineTo(-2.7,-5.3).lineTo(2.7,-5.3).lineTo(2.7,5.3).closePath();
	this.shape_47.setTransform(-3,-5.625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("rgba(245,184,70,0.89)").beginStroke().moveTo(-2.7,-0).lineTo(-2.7,-5.3).lineTo(2.7,-5.3).lineTo(2.7,5.3).closePath();
	this.shape_48.setTransform(-3,-5.625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#F5B846").beginStroke().moveTo(-2.7,-0).lineTo(-2.7,-5.3).lineTo(2.7,-5.3).lineTo(2.7,5.3).closePath();
	this.shape_49.setTransform(-3,-5.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40}]},2).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},188).to({state:[]},1).wait(49));

	// Layer_9
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("rgba(245,184,70,0)").beginStroke().moveTo(-2.7,5.3).lineTo(-2.7,-5.3).lineTo(2.7,0.1).lineTo(2.7,5.3).closePath();
	this.shape_50.setTransform(3.075,5.675);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("rgba(245,184,70,0.11)").beginStroke().moveTo(-2.7,5.3).lineTo(-2.7,-5.3).lineTo(2.7,0.1).lineTo(2.7,5.3).closePath();
	this.shape_51.setTransform(3.075,5.675);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("rgba(245,184,70,0.224)").beginStroke().moveTo(-2.7,5.3).lineTo(-2.7,-5.3).lineTo(2.7,0.1).lineTo(2.7,5.3).closePath();
	this.shape_52.setTransform(3.075,5.675);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("rgba(245,184,70,0.333)").beginStroke().moveTo(-2.7,5.3).lineTo(-2.7,-5.3).lineTo(2.7,0.1).lineTo(2.7,5.3).closePath();
	this.shape_53.setTransform(3.075,5.675);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("rgba(245,184,70,0.443)").beginStroke().moveTo(-2.7,5.3).lineTo(-2.7,-5.3).lineTo(2.7,0.1).lineTo(2.7,5.3).closePath();
	this.shape_54.setTransform(3.075,5.675);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("rgba(245,184,70,0.557)").beginStroke().moveTo(-2.7,5.3).lineTo(-2.7,-5.3).lineTo(2.7,0.1).lineTo(2.7,5.3).closePath();
	this.shape_55.setTransform(3.075,5.675);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("rgba(245,184,70,0.667)").beginStroke().moveTo(-2.7,5.3).lineTo(-2.7,-5.3).lineTo(2.7,0.1).lineTo(2.7,5.3).closePath();
	this.shape_56.setTransform(3.075,5.675);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("rgba(245,184,70,0.776)").beginStroke().moveTo(-2.7,5.3).lineTo(-2.7,-5.3).lineTo(2.7,0.1).lineTo(2.7,5.3).closePath();
	this.shape_57.setTransform(3.075,5.675);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("rgba(245,184,70,0.89)").beginStroke().moveTo(-2.7,5.3).lineTo(-2.7,-5.3).lineTo(2.7,0.1).lineTo(2.7,5.3).closePath();
	this.shape_58.setTransform(3.075,5.675);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#F5B846").beginStroke().moveTo(-2.7,5.3).lineTo(-2.7,-5.3).lineTo(2.7,0.1).lineTo(2.7,5.3).closePath();
	this.shape_59.setTransform(3.075,5.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_50}]},2).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},188).to({state:[]},1).wait(49));

	// Layer_7
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("rgba(60,142,186,0)").beginStroke().moveTo(-5.3,2.7).lineTo(-5.3,-2.7).lineTo(5.3,-2.7).lineTo(-0.1,2.7).closePath();
	this.shape_60.setTransform(-5.6,3.075);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("rgba(60,142,186,0.11)").beginStroke().moveTo(-5.3,2.7).lineTo(-5.3,-2.7).lineTo(5.3,-2.7).lineTo(-0.1,2.7).closePath();
	this.shape_61.setTransform(-5.6,3.075);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("rgba(60,142,186,0.224)").beginStroke().moveTo(-5.3,2.7).lineTo(-5.3,-2.7).lineTo(5.3,-2.7).lineTo(-0.1,2.7).closePath();
	this.shape_62.setTransform(-5.6,3.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("rgba(60,142,186,0.333)").beginStroke().moveTo(-5.3,2.7).lineTo(-5.3,-2.7).lineTo(5.3,-2.7).lineTo(-0.1,2.7).closePath();
	this.shape_63.setTransform(-5.6,3.075);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("rgba(60,142,186,0.443)").beginStroke().moveTo(-5.3,2.7).lineTo(-5.3,-2.7).lineTo(5.3,-2.7).lineTo(-0.1,2.7).closePath();
	this.shape_64.setTransform(-5.6,3.075);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("rgba(60,142,186,0.557)").beginStroke().moveTo(-5.3,2.7).lineTo(-5.3,-2.7).lineTo(5.3,-2.7).lineTo(-0.1,2.7).closePath();
	this.shape_65.setTransform(-5.6,3.075);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("rgba(60,142,186,0.667)").beginStroke().moveTo(-5.3,2.7).lineTo(-5.3,-2.7).lineTo(5.3,-2.7).lineTo(-0.1,2.7).closePath();
	this.shape_66.setTransform(-5.6,3.075);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("rgba(60,142,186,0.776)").beginStroke().moveTo(-5.3,2.7).lineTo(-5.3,-2.7).lineTo(5.3,-2.7).lineTo(-0.1,2.7).closePath();
	this.shape_67.setTransform(-5.6,3.075);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("rgba(60,142,186,0.89)").beginStroke().moveTo(-5.3,2.7).lineTo(-5.3,-2.7).lineTo(5.3,-2.7).lineTo(-0.1,2.7).closePath();
	this.shape_68.setTransform(-5.6,3.075);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#3C8EBA").beginStroke().moveTo(-5.3,2.7).lineTo(-5.3,-2.7).lineTo(5.3,-2.7).lineTo(-0.1,2.7).closePath();
	this.shape_69.setTransform(-5.6,3.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},189).to({state:[]},1).wait(49));

	// Layer_10
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("rgba(60,142,186,0)").beginStroke().moveTo(-5.3,2.6).lineTo(0.1,-2.7).lineTo(5.3,-2.7).lineTo(5.3,2.6).closePath();
	this.shape_70.setTransform(5.65,-3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("rgba(60,142,186,0.11)").beginStroke().moveTo(-5.3,2.6).lineTo(0.1,-2.7).lineTo(5.3,-2.7).lineTo(5.3,2.6).closePath();
	this.shape_71.setTransform(5.65,-3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("rgba(60,142,186,0.224)").beginStroke().moveTo(-5.3,2.6).lineTo(0.1,-2.7).lineTo(5.3,-2.7).lineTo(5.3,2.6).closePath();
	this.shape_72.setTransform(5.65,-3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("rgba(60,142,186,0.333)").beginStroke().moveTo(-5.3,2.6).lineTo(0.1,-2.7).lineTo(5.3,-2.7).lineTo(5.3,2.6).closePath();
	this.shape_73.setTransform(5.65,-3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("rgba(60,142,186,0.443)").beginStroke().moveTo(-5.3,2.6).lineTo(0.1,-2.7).lineTo(5.3,-2.7).lineTo(5.3,2.6).closePath();
	this.shape_74.setTransform(5.65,-3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("rgba(60,142,186,0.557)").beginStroke().moveTo(-5.3,2.6).lineTo(0.1,-2.7).lineTo(5.3,-2.7).lineTo(5.3,2.6).closePath();
	this.shape_75.setTransform(5.65,-3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("rgba(60,142,186,0.667)").beginStroke().moveTo(-5.3,2.6).lineTo(0.1,-2.7).lineTo(5.3,-2.7).lineTo(5.3,2.6).closePath();
	this.shape_76.setTransform(5.65,-3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("rgba(60,142,186,0.776)").beginStroke().moveTo(-5.3,2.6).lineTo(0.1,-2.7).lineTo(5.3,-2.7).lineTo(5.3,2.6).closePath();
	this.shape_77.setTransform(5.65,-3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("rgba(60,142,186,0.89)").beginStroke().moveTo(-5.3,2.6).lineTo(0.1,-2.7).lineTo(5.3,-2.7).lineTo(5.3,2.6).closePath();
	this.shape_78.setTransform(5.65,-3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#3C8EBA").beginStroke().moveTo(-5.3,2.6).lineTo(0.1,-2.7).lineTo(5.3,-2.7).lineTo(5.3,2.6).closePath();
	this.shape_79.setTransform(5.65,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},189).to({state:[]},1).wait(49));

	// registrationMark
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("rgba(17,64,160,0)").beginStroke().moveTo(-0.4,0.4).curveTo(-0.7,0.3,-0.7,-0).curveTo(-0.7,-0.4,-0.4,-0.6).lineTo(0,-0.7).curveTo(0.1,-0.7,0.2,-0.7).curveTo(0.3,-0.7,0.3,-0.7).curveTo(0.4,-0.6,0.4,-0.6).curveTo(0.5,-0.6,0.5,-0.6).curveTo(0.7,-0.4,0.7,-0).curveTo(0.7,0.1,0.7,0.1).curveTo(0.7,0.2,0.6,0.2).curveTo(0.6,0.3,0.6,0.3).curveTo(0.5,0.4,0.5,0.4).curveTo(0.3,0.7,0,0.7).curveTo(-0.2,0.7,-0.4,0.4).closePath().moveTo(-0.3,-0.5).curveTo(-0.4,-0.4,-0.4,-0.3).curveTo(-0.5,-0.3,-0.5,-0.2).curveTo(-0.5,-0.2,-0.5,-0.1).curveTo(-0.5,-0.1,-0.5,-0).curveTo(-0.5,0,-0.5,0.1).curveTo(-0.5,0.1,-0.5,0.2).curveTo(-0.5,0.2,-0.4,0.3).curveTo(-0.4,0.3,-0.3,0.3).curveTo(-0.3,0.4,-0.3,0.4).curveTo(-0.2,0.5,-0.2,0.5).curveTo(-0.1,0.5,-0.1,0.5).curveTo(-0,0.5,0,0.5).curveTo(0.1,0.5,0.2,0.5).curveTo(0.2,0.5,0.3,0.5).curveTo(0.3,0.5,0.4,0.4).curveTo(0.4,0.4,0.5,0.3).lineTo(0.6,-0).lineTo(0.5,-0.5).lineTo(0,-0.6).curveTo(-0,-0.6,-0.1,-0.6).curveTo(-0.1,-0.6,-0.2,-0.6).curveTo(-0.2,-0.5,-0.3,-0.5).curveTo(-0.3,-0.5,-0.3,-0.5).closePath().moveTo(0.2,0.3).lineTo(0,0.1).lineTo(-0.1,0.1).lineTo(-0.1,0.3).lineTo(-0.2,0.3).lineTo(-0.2,-0.5).lineTo(0,-0.5).curveTo(0.1,-0.5,0.2,-0.4).curveTo(0.3,-0.4,0.3,-0.4).curveTo(0.4,-0.4,0.4,-0.3).curveTo(0.4,-0.3,0.4,-0.2).curveTo(0.4,-0.2,0.4,-0.1).curveTo(0.4,-0.1,0.3,-0).curveTo(0.3,-0,0.3,0).curveTo(0.2,0,0.1,0.1).lineTo(0.4,0.3).closePath().moveTo(-0.1,-0.1).lineTo(0,-0.1).curveTo(0.1,-0.1,0.1,-0.1).curveTo(0.1,-0.1,0.2,-0.1).curveTo(0.2,-0.1,0.2,-0.2).curveTo(0.2,-0.2,0.2,-0.2).curveTo(0.2,-0.2,0.2,-0.3).curveTo(0.2,-0.3,0.2,-0.3).curveTo(0.1,-0.3,0.1,-0.3).curveTo(0.1,-0.4,0,-0.4).lineTo(-0.1,-0.4).closePath();
	this.shape_80.setTransform(1.05,12.45);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("rgba(17,64,160,0.11)").beginStroke().moveTo(-0.4,0.4).curveTo(-0.7,0.3,-0.7,-0).curveTo(-0.7,-0.4,-0.4,-0.6).lineTo(0,-0.7).curveTo(0.1,-0.7,0.2,-0.7).curveTo(0.3,-0.7,0.3,-0.7).curveTo(0.4,-0.6,0.4,-0.6).curveTo(0.5,-0.6,0.5,-0.6).curveTo(0.7,-0.4,0.7,-0).curveTo(0.7,0.1,0.7,0.1).curveTo(0.7,0.2,0.6,0.2).curveTo(0.6,0.3,0.6,0.3).curveTo(0.5,0.4,0.5,0.4).curveTo(0.3,0.7,0,0.7).curveTo(-0.2,0.7,-0.4,0.4).closePath().moveTo(-0.5,-0).curveTo(-0.5,0,-0.5,0.1).curveTo(-0.5,0.1,-0.5,0.2).curveTo(-0.5,0.2,-0.4,0.3).curveTo(-0.4,0.3,-0.3,0.3).curveTo(-0.2,0.5,0.5,0.3).curveTo(0.6,0.2,-0.3,-0.5).curveTo(-0.4,-0.4,-0.4,-0.3).curveTo(-0.5,-0.3,-0.5,-0.2).curveTo(-0.5,-0.2,-0.5,-0.1).curveTo(-0.5,-0.1,-0.5,-0).closePath();
	this.shape_81.setTransform(1.05,12.45);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("rgba(17,64,160,0.224)").beginStroke().moveTo(-0.4,0.4).curveTo(-0.7,0.3,-0.7,-0).curveTo(-0.7,-0.4,-0.4,-0.6).lineTo(0,-0.7).curveTo(0.1,-0.7,0.2,-0.7).curveTo(0.3,-0.7,0.3,-0.7).curveTo(0.4,-0.6,0.4,-0.6).curveTo(0.5,-0.6,0.5,-0.6).curveTo(0.7,-0.4,0.7,-0).curveTo(0.7,0.1,0.7,0.1).curveTo(0.7,0.2,0.6,0.2).curveTo(0.6,0.3,0.6,0.3).curveTo(0.5,0.4,0.5,0.4).curveTo(0.3,0.7,0,0.7).curveTo(-0.2,0.7,-0.4,0.4).closePath().moveTo(-0.5,-0).curveTo(-0.5,0,-0.5,0.1).curveTo(-0.5,0.1,-0.5,0.2).curveTo(-0.5,0.2,-0.4,0.3).curveTo(-0.4,0.3,-0.3,0.3).curveTo(-0.2,0.5,0.5,0.3).curveTo(0.6,0.2,-0.3,-0.5).curveTo(-0.4,-0.4,-0.4,-0.3).curveTo(-0.5,-0.3,-0.5,-0.2).curveTo(-0.5,-0.2,-0.5,-0.1).curveTo(-0.5,-0.1,-0.5,-0).closePath();
	this.shape_82.setTransform(1.05,12.45);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("rgba(17,64,160,0.333)").beginStroke().moveTo(-0.4,0.4).curveTo(-0.7,0.3,-0.7,-0).curveTo(-0.7,-0.4,-0.4,-0.6).lineTo(0,-0.7).curveTo(0.1,-0.7,0.2,-0.7).curveTo(0.3,-0.7,0.3,-0.7).curveTo(0.4,-0.6,0.4,-0.6).curveTo(0.5,-0.6,0.5,-0.6).curveTo(0.7,-0.4,0.7,-0).curveTo(0.7,0.1,0.7,0.1).curveTo(0.7,0.2,0.6,0.2).curveTo(0.6,0.3,0.6,0.3).curveTo(0.5,0.4,0.5,0.4).curveTo(0.3,0.7,0,0.7).curveTo(-0.2,0.7,-0.4,0.4).closePath().moveTo(-0.5,-0).curveTo(-0.5,0,-0.5,0.1).curveTo(-0.5,0.1,-0.5,0.2).curveTo(-0.5,0.2,-0.4,0.3).curveTo(-0.4,0.3,-0.3,0.3).curveTo(-0.2,0.5,0.5,0.3).curveTo(0.6,0.2,-0.3,-0.5).curveTo(-0.4,-0.4,-0.4,-0.3).curveTo(-0.5,-0.3,-0.5,-0.2).curveTo(-0.5,-0.2,-0.5,-0.1).curveTo(-0.5,-0.1,-0.5,-0).closePath();
	this.shape_83.setTransform(1.05,12.45);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("rgba(17,64,160,0.443)").beginStroke().moveTo(-0.4,0.4).curveTo(-0.7,0.3,-0.7,-0).curveTo(-0.7,-0.4,-0.4,-0.6).lineTo(0,-0.7).curveTo(0.1,-0.7,0.2,-0.7).curveTo(0.3,-0.7,0.3,-0.7).curveTo(0.4,-0.6,0.4,-0.6).curveTo(0.5,-0.6,0.5,-0.6).curveTo(0.7,-0.4,0.7,-0).curveTo(0.7,0.1,0.7,0.1).curveTo(0.7,0.2,0.6,0.2).curveTo(0.6,0.3,0.6,0.3).curveTo(0.5,0.4,0.5,0.4).curveTo(0.3,0.7,0,0.7).curveTo(-0.2,0.7,-0.4,0.4).closePath().moveTo(-0.5,-0).curveTo(-0.5,0,-0.5,0.1).curveTo(-0.5,0.1,-0.5,0.2).curveTo(-0.5,0.2,-0.4,0.3).curveTo(-0.4,0.3,-0.3,0.3).curveTo(-0.2,0.5,0.5,0.3).curveTo(0.6,0.2,-0.3,-0.5).curveTo(-0.4,-0.4,-0.4,-0.3).curveTo(-0.5,-0.3,-0.5,-0.2).curveTo(-0.5,-0.2,-0.5,-0.1).curveTo(-0.5,-0.1,-0.5,-0).closePath();
	this.shape_84.setTransform(1.05,12.45);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("rgba(17,64,160,0.557)").beginStroke().moveTo(-0.4,0.4).curveTo(-0.7,0.3,-0.7,-0).curveTo(-0.7,-0.4,-0.4,-0.6).lineTo(0,-0.7).curveTo(0.1,-0.7,0.2,-0.7).curveTo(0.3,-0.7,0.3,-0.7).curveTo(0.4,-0.6,0.4,-0.6).curveTo(0.5,-0.6,0.5,-0.6).curveTo(0.7,-0.4,0.7,-0).curveTo(0.7,0.1,0.7,0.1).curveTo(0.7,0.2,0.6,0.2).curveTo(0.6,0.3,0.6,0.3).curveTo(0.5,0.4,0.5,0.4).curveTo(0.3,0.7,0,0.7).curveTo(-0.2,0.7,-0.4,0.4).closePath().moveTo(-0.5,-0).curveTo(-0.5,0,-0.5,0.1).curveTo(-0.5,0.1,-0.5,0.2).curveTo(-0.5,0.2,-0.4,0.3).curveTo(-0.4,0.3,-0.3,0.3).curveTo(-0.2,0.5,0.5,0.3).curveTo(0.6,0.2,-0.3,-0.5).curveTo(-0.4,-0.4,-0.4,-0.3).curveTo(-0.5,-0.3,-0.5,-0.2).curveTo(-0.5,-0.2,-0.5,-0.1).curveTo(-0.5,-0.1,-0.5,-0).closePath();
	this.shape_85.setTransform(1.05,12.45);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("rgba(17,64,160,0.667)").beginStroke().moveTo(-0.4,0.4).curveTo(-0.7,0.3,-0.7,-0).curveTo(-0.7,-0.4,-0.4,-0.6).lineTo(0,-0.7).curveTo(0.1,-0.7,0.2,-0.7).curveTo(0.3,-0.7,0.3,-0.7).curveTo(0.4,-0.6,0.4,-0.6).curveTo(0.5,-0.6,0.5,-0.6).curveTo(0.7,-0.4,0.7,-0).curveTo(0.7,0.1,0.7,0.1).curveTo(0.7,0.2,0.6,0.2).curveTo(0.6,0.3,0.6,0.3).curveTo(0.5,0.4,0.5,0.4).curveTo(0.3,0.7,0,0.7).curveTo(-0.2,0.7,-0.4,0.4).closePath().moveTo(-0.5,-0).curveTo(-0.5,0,-0.5,0.1).curveTo(-0.5,0.1,-0.5,0.2).curveTo(-0.5,0.2,-0.4,0.3).curveTo(-0.4,0.3,-0.3,0.3).curveTo(-0.2,0.5,0.5,0.3).curveTo(0.6,0.2,-0.3,-0.5).curveTo(-0.4,-0.4,-0.4,-0.3).curveTo(-0.5,-0.3,-0.5,-0.2).curveTo(-0.5,-0.2,-0.5,-0.1).curveTo(-0.5,-0.1,-0.5,-0).closePath();
	this.shape_86.setTransform(1.05,12.45);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("rgba(17,64,160,0.776)").beginStroke().moveTo(-0.4,0.4).curveTo(-0.7,0.3,-0.7,-0).curveTo(-0.7,-0.4,-0.4,-0.6).lineTo(0,-0.7).curveTo(0.1,-0.7,0.2,-0.7).curveTo(0.3,-0.7,0.3,-0.7).curveTo(0.4,-0.6,0.4,-0.6).curveTo(0.5,-0.6,0.5,-0.6).curveTo(0.7,-0.4,0.7,-0).curveTo(0.7,0.1,0.7,0.1).curveTo(0.7,0.2,0.6,0.2).curveTo(0.6,0.3,0.6,0.3).curveTo(0.5,0.4,0.5,0.4).curveTo(0.3,0.7,0,0.7).curveTo(-0.2,0.7,-0.4,0.4).closePath().moveTo(-0.5,-0).curveTo(-0.5,0,-0.5,0.1).curveTo(-0.5,0.1,-0.5,0.2).curveTo(-0.5,0.2,-0.4,0.3).curveTo(-0.4,0.3,-0.3,0.3).curveTo(-0.2,0.5,0.5,0.3).curveTo(0.6,0.2,-0.3,-0.5).curveTo(-0.4,-0.4,-0.4,-0.3).curveTo(-0.5,-0.3,-0.5,-0.2).curveTo(-0.5,-0.2,-0.5,-0.1).curveTo(-0.5,-0.1,-0.5,-0).closePath();
	this.shape_87.setTransform(1.05,12.45);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("rgba(17,64,160,0.89)").beginStroke().moveTo(-0.4,0.4).curveTo(-0.7,0.3,-0.7,-0).curveTo(-0.7,-0.4,-0.4,-0.6).lineTo(0,-0.7).curveTo(0.1,-0.7,0.2,-0.7).curveTo(0.3,-0.7,0.3,-0.7).curveTo(0.4,-0.6,0.4,-0.6).curveTo(0.5,-0.6,0.5,-0.6).curveTo(0.7,-0.4,0.7,-0).curveTo(0.7,0.1,0.7,0.1).curveTo(0.7,0.2,0.6,0.2).curveTo(0.6,0.3,0.6,0.3).curveTo(0.5,0.4,0.5,0.4).curveTo(0.3,0.7,0,0.7).curveTo(-0.2,0.7,-0.4,0.4).closePath().moveTo(-0.5,-0).curveTo(-0.5,0,-0.5,0.1).curveTo(-0.5,0.1,-0.5,0.2).curveTo(-0.5,0.2,-0.4,0.3).curveTo(-0.4,0.3,-0.3,0.3).curveTo(-0.2,0.5,0.5,0.3).curveTo(0.6,0.2,-0.3,-0.5).curveTo(-0.4,-0.4,-0.4,-0.3).curveTo(-0.5,-0.3,-0.5,-0.2).curveTo(-0.5,-0.2,-0.5,-0.1).curveTo(-0.5,-0.1,-0.5,-0).closePath();
	this.shape_88.setTransform(1.05,12.45);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#1140A0").beginStroke().moveTo(-0.4,0.4).curveTo(-0.7,0.3,-0.7,-0).curveTo(-0.7,-0.4,-0.4,-0.6).lineTo(0,-0.7).curveTo(0.1,-0.7,0.2,-0.7).curveTo(0.3,-0.7,0.3,-0.7).curveTo(0.4,-0.6,0.4,-0.6).curveTo(0.5,-0.6,0.5,-0.6).curveTo(0.7,-0.4,0.7,-0).curveTo(0.7,0.1,0.7,0.1).curveTo(0.7,0.2,0.6,0.2).curveTo(0.6,0.3,0.6,0.3).curveTo(0.5,0.4,0.5,0.4).curveTo(0.3,0.7,0,0.7).curveTo(-0.2,0.7,-0.4,0.4).closePath().moveTo(-0.3,-0.5).curveTo(-0.4,-0.4,-0.4,-0.3).curveTo(-0.5,-0.3,-0.5,-0.2).curveTo(-0.5,-0.2,-0.5,-0.1).curveTo(-0.5,-0.1,-0.5,-0).curveTo(-0.5,0,-0.5,0.1).curveTo(-0.5,0.1,-0.5,0.2).curveTo(-0.5,0.2,-0.4,0.3).curveTo(-0.4,0.3,-0.3,0.3).curveTo(-0.3,0.4,-0.3,0.4).curveTo(-0.2,0.5,-0.2,0.5).curveTo(-0.1,0.5,-0.1,0.5).curveTo(-0,0.5,0,0.5).curveTo(0.1,0.5,0.2,0.5).curveTo(0.2,0.5,0.3,0.5).curveTo(0.3,0.5,0.4,0.4).curveTo(0.4,0.4,0.5,0.3).lineTo(0.6,-0).lineTo(0.5,-0.5).lineTo(0,-0.6).curveTo(-0,-0.6,-0.1,-0.6).curveTo(-0.1,-0.6,-0.2,-0.6).curveTo(-0.2,-0.5,-0.3,-0.5).curveTo(-0.3,-0.5,-0.3,-0.5).closePath().moveTo(0.2,0.3).lineTo(0,0.1).lineTo(-0.1,0.1).lineTo(-0.1,0.3).lineTo(-0.2,0.3).lineTo(-0.2,-0.5).lineTo(0,-0.5).curveTo(0.1,-0.5,0.2,-0.4).curveTo(0.3,-0.4,0.3,-0.4).curveTo(0.4,-0.4,0.4,-0.3).curveTo(0.4,-0.3,0.4,-0.2).curveTo(0.4,-0.2,0.4,-0.1).curveTo(0.4,-0.1,0.3,-0).curveTo(0.3,-0,0.3,0).curveTo(0.2,0,0.1,0.1).lineTo(0.4,0.3).closePath().moveTo(-0.1,-0.1).lineTo(0,-0.1).curveTo(0.1,-0.1,0.1,-0.1).curveTo(0.1,-0.1,0.2,-0.1).curveTo(0.2,-0.1,0.2,-0.2).curveTo(0.2,-0.2,0.2,-0.2).curveTo(0.2,-0.2,0.2,-0.3).curveTo(0.2,-0.3,0.2,-0.3).curveTo(0.1,-0.3,0.1,-0.3).curveTo(0.1,-0.4,0,-0.4).lineTo(-0.1,-0.4).closePath();
	this.shape_89.setTransform(1.05,12.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_80}]},8).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},182).to({state:[]},1).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-15.8,31.8,31.700000000000003);


// stage content:
(lib._21_BAY_030_cmp_bnr_NTXNeuro_Dallas_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [251];
	// timeline functions:
	this.frame_251 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(251).call(this.frame_251).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(1,1,1).moveTo(-160,-25).lineTo(160,-25).lineTo(160,25).lineTo(-160,25).closePath();
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(252));

	// Layer_2
	this.instance = new lib.BSWH_Icon("synched",0);
	this.instance.setTransform(293.05,25,1.0473,1.0473);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200).to({mode:"single",startPosition:41},0).wait(1).to({scaleX:1.0449,scaleY:1.0449,x:290.3351,y:24.8737},0).wait(1).to({scaleX:1.0397,scaleY:1.0397,x:284.4752,y:24.6012},0).wait(1).to({scaleX:1.0314,scaleY:1.0314,x:275.0997,y:24.1652},0).wait(1).to({scaleX:1.0197,scaleY:1.0197,x:261.8329,y:23.5482},0).wait(1).to({scaleX:1.0042,scaleY:1.0042,x:244.3414,y:22.7347},0).wait(1).to({scaleX:0.9848,scaleY:0.9848,x:222.4185,y:21.7152},0).wait(1).to({scaleX:0.9615,scaleY:0.9615,x:196.1141,y:20.4919},0).wait(1).to({scaleX:0.9347,scaleY:0.9347,x:165.8929,y:19.0864},0).wait(1).to({scaleX:0.9054,scaleY:0.9054,x:132.8,y:17.5},0).wait(43));

	// txt_healthySpines
	this.instance_1 = new lib.txt_healthySpines();
	this.instance_1.setTransform(136.15,49.95,1,1,0,0,0,103,17.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(159).to({_off:false},0).to({y:55.95,alpha:1},9,cjs.Ease.quadOut).wait(32).to({x:21.15,alpha:0},9,cjs.Ease.quadInOut).wait(43));

	// ctaBtn
	this.instance_2 = new lib.ctaBtn();
	this.instance_2.setTransform(149.55,545.5,1,1,0,0,0,87.5,22.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(219).to({_off:false},0).to({alpha:1},9).wait(24));

	// BSWH_Logo
	this.instance_3 = new lib.BSWH_Logo();
	this.instance_3.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(209).to({_off:false},0).to({alpha:1},10).wait(33));

	// txt_doWhatYou
	this.instance_4 = new lib.txt_doWhatYou();
	this.instance_4.setTransform(122.65,47.6,1,1,0,0,0,87.5,17.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:55.6,alpha:1},10,cjs.Ease.quadOut).wait(138).to({y:65.6,alpha:0},9,cjs.Ease.quadIn).wait(95));

	// txt_better (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_64 = new cjs.Graphics().moveTo(30.9,7.7).curveTo(30.3,7.1,30.3,6.2).lineTo(30.3,6.2).curveTo(30.3,5.2,30.9,4.7).lineTo(30.9,4.7).curveTo(31.5,4,32.4,4).lineTo(32.4,4).curveTo(33.4,4,33.9,4.7).lineTo(33.9,4.7).curveTo(34.5,5.2,34.6,6.2).lineTo(34.6,6.2).curveTo(34.5,7.1,33.9,7.7).lineTo(33.9,7.7).curveTo(33.4,8.3,32.4,8.3).lineTo(32.4,8.3).curveTo(31.5,8.3,30.9,7.7).closePath().moveTo(12.8,7.6).curveTo(11.6,7.1,10.9,6.3).lineTo(10.9,6.3).curveTo(10.1,5.4,9.6,4.4).lineTo(9.6,4.4).curveTo(9.3,3.3,9.3,2).lineTo(9.3,2).curveTo(9.3,0.8,9.7,-0.4).lineTo(9.7,-0.4).curveTo(10.2,-1.4,10.9,-2.3).lineTo(10.9,-2.3).curveTo(11.8,-3.1,13,-3.6).lineTo(13,-3.6).curveTo(14,-4,15.3,-4).lineTo(15.3,-4).curveTo(16.6,-4,17.8,-3.6).lineTo(17.8,-3.6).curveTo(18.9,-3.1,19.7,-2.3).lineTo(19.7,-2.3).curveTo(20.5,-1.5,21,-0.5).lineTo(21,-0.5).curveTo(21.3,0.7,21.3,2).lineTo(21.3,2).lineTo(21.3,3.2).lineTo(12.7,3.2).curveTo(13.1,4.1,13.8,4.6).lineTo(13.8,4.6).curveTo(14.4,5,15.4,5).lineTo(15.4,5).curveTo(16.3,5,16.8,4.7).lineTo(16.8,4.7).curveTo(17.4,4.4,17.8,3.8).lineTo(17.8,3.8).lineTo(20.7,5.5).curveTo(19.8,6.7,18.6,7.4).lineTo(18.6,7.4).curveTo(17.3,8,15.4,8).lineTo(15.4,8).curveTo(14,8,12.8,7.6).closePath().moveTo(17.8,0.5).curveTo(17.5,-0.2,16.9,-0.6).lineTo(16.9,-0.6).curveTo(16.2,-1,15.4,-1).lineTo(15.4,-1).curveTo(14.5,-1,13.9,-0.6).lineTo(13.9,-0.6).curveTo(13.2,-0.2,12.9,0.5).lineTo(12.9,0.5).lineTo(17.8,0.5).lineTo(17.8,0.5).closePath().moveTo(4.4,7.7).curveTo(3.7,7.5,3.2,7).lineTo(3.2,7).curveTo(2.7,6.4,2.4,5.6).lineTo(2.4,5.6).curveTo(2.1,4.7,2.1,3.4).lineTo(2.1,3.4).lineTo(2.1,-0.6).lineTo(0.1,-0.6).lineTo(0.1,-3.8).lineTo(2.1,-3.8).lineTo(2.1,-6.3).lineTo(5.7,-8.3).lineTo(5.7,-3.8).lineTo(8.6,-3.8).lineTo(8.6,-0.6).lineTo(5.7,-0.6).lineTo(5.7,3.1).curveTo(5.7,4,5.9,4.4).lineTo(5.9,4.4).curveTo(6.2,4.7,6.7,4.7).lineTo(6.7,4.7).curveTo(7.2,4.7,7.7,4.2).lineTo(7.7,4.2).lineTo(9.3,7).curveTo(8.6,7.4,7.9,7.7).lineTo(7.9,7.7).curveTo(7.1,8,6.2,8).lineTo(6.2,8).curveTo(5.2,8,4.4,7.7).closePath().moveTo(-4.6,7.7).curveTo(-5.3,7.5,-5.8,7).lineTo(-5.8,7).curveTo(-6.3,6.4,-6.6,5.6).lineTo(-6.6,5.6).curveTo(-6.9,4.7,-6.9,3.4).lineTo(-6.9,3.4).lineTo(-6.9,-0.6).lineTo(-8.9,-0.6).lineTo(-8.9,-3.8).lineTo(-6.9,-3.8).lineTo(-6.9,-6.3).lineTo(-3.3,-8.3).lineTo(-3.3,-3.8).lineTo(-0.4,-3.8).lineTo(-0.4,-0.6).lineTo(-3.3,-0.6).lineTo(-3.3,3.1).curveTo(-3.3,4,-3.1,4.4).lineTo(-3.1,4.4).curveTo(-2.8,4.7,-2.3,4.7).lineTo(-2.3,4.7).curveTo(-1.8,4.7,-1.3,4.2).lineTo(-1.3,4.2).lineTo(0.3,7).curveTo(-0.4,7.4,-1.2,7.7).lineTo(-1.2,7.7).curveTo(-1.9,8,-2.8,8).lineTo(-2.8,8).curveTo(-3.8,8,-4.6,7.7).closePath().moveTo(-18,7.6).curveTo(-19.1,7.1,-19.9,6.3).lineTo(-19.9,6.3).curveTo(-20.6,5.4,-21.1,4.4).lineTo(-21.1,4.4).curveTo(-21.5,3.3,-21.5,2).lineTo(-21.5,2).curveTo(-21.5,0.8,-21.1,-0.4).lineTo(-21.1,-0.4).curveTo(-20.6,-1.4,-19.8,-2.3).lineTo(-19.8,-2.3).curveTo(-19,-3.1,-17.9,-3.6).lineTo(-17.9,-3.6).curveTo(-16.7,-4,-15.5,-4).lineTo(-15.5,-4).curveTo(-14.1,-4,-13,-3.6).lineTo(-13,-3.6).curveTo(-11.9,-3.1,-11.1,-2.3).lineTo(-11.1,-2.3).curveTo(-10.2,-1.5,-9.9,-0.5).lineTo(-9.9,-0.5).curveTo(-9.4,0.7,-9.4,2).lineTo(-9.4,2).lineTo(-9.4,3.2).lineTo(-18,3.2).curveTo(-17.7,4.1,-17,4.6).lineTo(-17,4.6).curveTo(-16.4,5,-15.4,5).lineTo(-15.4,5).curveTo(-14.5,5,-13.9,4.7).lineTo(-13.9,4.7).curveTo(-13.3,4.4,-13,3.8).lineTo(-13,3.8).lineTo(-10,5.5).curveTo(-11,6.7,-12.2,7.4).lineTo(-12.2,7.4).curveTo(-13.5,8,-15.4,8).lineTo(-15.4,8).curveTo(-16.8,8,-18,7.6).closePath().moveTo(-13,0.5).curveTo(-13.3,-0.2,-13.9,-0.6).lineTo(-13.9,-0.6).curveTo(-14.5,-1,-15.4,-1).lineTo(-15.4,-1).curveTo(-16.3,-1,-16.9,-0.6).lineTo(-16.9,-0.6).curveTo(-17.6,-0.2,-18,0.5).lineTo(-18,0.5).lineTo(-13,0.5).lineTo(-13,0.5).closePath().moveTo(22.3,7.8).lineTo(22.3,-3.8).lineTo(25.9,-3.8).lineTo(25.9,-2.2).curveTo(26.3,-3.2,27.2,-3.6).lineTo(27.2,-3.6).curveTo(28,-4,29.2,-4).lineTo(29.2,-4).lineTo(30.2,-3.9).lineTo(30.2,-3.9).lineTo(31.1,-3.6).lineTo(29.8,0).lineTo(29.2,-0.3).lineTo(29.2,-0.3).curveTo(28.7,-0.4,28.2,-0.5).lineTo(28.2,-0.5).curveTo(27.1,-0.5,26.5,0.2).lineTo(26.5,0.2).curveTo(25.9,0.7,25.9,2.1).lineTo(25.9,2.1).lineTo(25.9,7.8).closePath().moveTo(-34.6,7.8).lineTo(-34.6,-7.8).lineTo(-28.3,-7.8).curveTo(-25.5,-7.9,-24,-6.8).lineTo(-24,-6.8).curveTo(-22.6,-5.6,-22.6,-3.4).lineTo(-22.6,-3.4).curveTo(-22.6,-2.3,-23,-1.6).lineTo(-23,-1.6).curveTo(-23.5,-0.9,-24.2,-0.3).lineTo(-24.2,-0.3).curveTo(-23.3,0.2,-22.8,1).lineTo(-22.8,1).curveTo(-22.3,1.9,-22.3,3.1).lineTo(-22.3,3.1).curveTo(-22.3,5.5,-23.9,6.7).lineTo(-23.9,6.7).curveTo(-25.5,7.8,-28.3,7.8).lineTo(-28.3,7.8).closePath().moveTo(-30.9,4.5).lineTo(-28.3,4.5).curveTo(-27.2,4.5,-26.6,4.1).lineTo(-26.6,4.1).curveTo(-26.2,3.7,-26.2,3).lineTo(-26.2,3).curveTo(-26.2,2.2,-26.6,1.9).lineTo(-26.6,1.9).curveTo(-27.1,1.5,-28.3,1.5).lineTo(-28.3,1.5).lineTo(-30.9,1.5).closePath().moveTo(-30.9,-1.8).lineTo(-28.2,-1.8).curveTo(-27.1,-1.8,-26.7,-2.2).lineTo(-26.7,-2.2).curveTo(-26.3,-2.6,-26.3,-3.3).lineTo(-26.3,-3.3).curveTo(-26.3,-3.9,-26.7,-4.3).lineTo(-26.7,-4.3).curveTo(-27.2,-4.6,-28.2,-4.6).lineTo(-28.2,-4.6).lineTo(-30.9,-4.6).closePath();
	var mask_graphics_148 = new cjs.Graphics().moveTo(30.9,7.7).curveTo(30.3,7.1,30.3,6.2).lineTo(30.3,6.2).curveTo(30.3,5.2,30.9,4.7).lineTo(30.9,4.7).curveTo(31.5,4,32.4,4).lineTo(32.4,4).curveTo(33.4,4,33.9,4.7).lineTo(33.9,4.7).curveTo(34.5,5.2,34.6,6.2).lineTo(34.6,6.2).curveTo(34.5,7.1,33.9,7.7).lineTo(33.9,7.7).curveTo(33.4,8.3,32.4,8.3).lineTo(32.4,8.3).curveTo(31.5,8.3,30.9,7.7).closePath().moveTo(12.8,7.6).curveTo(11.6,7.1,10.9,6.3).lineTo(10.9,6.3).curveTo(10.1,5.4,9.6,4.4).lineTo(9.6,4.4).curveTo(9.3,3.3,9.3,2).lineTo(9.3,2).curveTo(9.3,0.8,9.7,-0.4).lineTo(9.7,-0.4).curveTo(10.2,-1.4,10.9,-2.3).lineTo(10.9,-2.3).curveTo(11.8,-3.1,13,-3.6).lineTo(13,-3.6).curveTo(14,-4,15.3,-4).lineTo(15.3,-4).curveTo(16.6,-4,17.8,-3.6).lineTo(17.8,-3.6).curveTo(18.9,-3.1,19.7,-2.3).lineTo(19.7,-2.3).curveTo(20.5,-1.5,21,-0.5).lineTo(21,-0.5).curveTo(21.3,0.7,21.3,2).lineTo(21.3,2).lineTo(21.3,3.2).lineTo(12.7,3.2).curveTo(13.1,4.1,13.8,4.6).lineTo(13.8,4.6).curveTo(14.4,5,15.4,5).lineTo(15.4,5).curveTo(16.3,5,16.8,4.7).lineTo(16.8,4.7).curveTo(17.4,4.4,17.8,3.8).lineTo(17.8,3.8).lineTo(20.7,5.5).curveTo(19.8,6.7,18.6,7.4).lineTo(18.6,7.4).curveTo(17.3,8,15.4,8).lineTo(15.4,8).curveTo(14,8,12.8,7.6).closePath().moveTo(17.8,0.5).curveTo(17.5,-0.2,16.9,-0.6).lineTo(16.9,-0.6).curveTo(16.2,-1,15.4,-1).lineTo(15.4,-1).curveTo(14.5,-1,13.9,-0.6).lineTo(13.9,-0.6).curveTo(13.2,-0.2,12.9,0.5).lineTo(12.9,0.5).lineTo(17.8,0.5).lineTo(17.8,0.5).closePath().moveTo(4.4,7.7).curveTo(3.7,7.5,3.2,7).lineTo(3.2,7).curveTo(2.7,6.4,2.4,5.6).lineTo(2.4,5.6).curveTo(2.1,4.7,2.1,3.4).lineTo(2.1,3.4).lineTo(2.1,-0.6).lineTo(0.1,-0.6).lineTo(0.1,-3.8).lineTo(2.1,-3.8).lineTo(2.1,-6.3).lineTo(5.7,-8.3).lineTo(5.7,-3.8).lineTo(8.6,-3.8).lineTo(8.6,-0.6).lineTo(5.7,-0.6).lineTo(5.7,3.1).curveTo(5.7,4,5.9,4.4).lineTo(5.9,4.4).curveTo(6.2,4.7,6.7,4.7).lineTo(6.7,4.7).curveTo(7.2,4.7,7.7,4.2).lineTo(7.7,4.2).lineTo(9.3,7).curveTo(8.6,7.4,7.9,7.7).lineTo(7.9,7.7).curveTo(7.1,8,6.2,8).lineTo(6.2,8).curveTo(5.2,8,4.4,7.7).closePath().moveTo(-4.6,7.7).curveTo(-5.3,7.5,-5.8,7).lineTo(-5.8,7).curveTo(-6.3,6.4,-6.6,5.6).lineTo(-6.6,5.6).curveTo(-6.9,4.7,-6.9,3.4).lineTo(-6.9,3.4).lineTo(-6.9,-0.6).lineTo(-8.9,-0.6).lineTo(-8.9,-3.8).lineTo(-6.9,-3.8).lineTo(-6.9,-6.3).lineTo(-3.3,-8.3).lineTo(-3.3,-3.8).lineTo(-0.4,-3.8).lineTo(-0.4,-0.6).lineTo(-3.3,-0.6).lineTo(-3.3,3.1).curveTo(-3.3,4,-3.1,4.4).lineTo(-3.1,4.4).curveTo(-2.8,4.7,-2.3,4.7).lineTo(-2.3,4.7).curveTo(-1.8,4.7,-1.3,4.2).lineTo(-1.3,4.2).lineTo(0.3,7).curveTo(-0.4,7.4,-1.2,7.7).lineTo(-1.2,7.7).curveTo(-1.9,8,-2.8,8).lineTo(-2.8,8).curveTo(-3.8,8,-4.6,7.7).closePath().moveTo(-18,7.6).curveTo(-19.1,7.1,-19.9,6.3).lineTo(-19.9,6.3).curveTo(-20.6,5.4,-21.1,4.4).lineTo(-21.1,4.4).curveTo(-21.5,3.3,-21.5,2).lineTo(-21.5,2).curveTo(-21.5,0.8,-21.1,-0.4).lineTo(-21.1,-0.4).curveTo(-20.6,-1.4,-19.8,-2.3).lineTo(-19.8,-2.3).curveTo(-19,-3.1,-17.9,-3.6).lineTo(-17.9,-3.6).curveTo(-16.7,-4,-15.5,-4).lineTo(-15.5,-4).curveTo(-14.1,-4,-13,-3.6).lineTo(-13,-3.6).curveTo(-11.9,-3.1,-11.1,-2.3).lineTo(-11.1,-2.3).curveTo(-10.2,-1.5,-9.9,-0.5).lineTo(-9.9,-0.5).curveTo(-9.4,0.7,-9.4,2).lineTo(-9.4,2).lineTo(-9.4,3.2).lineTo(-18,3.2).curveTo(-17.7,4.1,-17,4.6).lineTo(-17,4.6).curveTo(-16.4,5,-15.4,5).lineTo(-15.4,5).curveTo(-14.5,5,-13.9,4.7).lineTo(-13.9,4.7).curveTo(-13.3,4.4,-13,3.8).lineTo(-13,3.8).lineTo(-10,5.5).curveTo(-11,6.7,-12.2,7.4).lineTo(-12.2,7.4).curveTo(-13.5,8,-15.4,8).lineTo(-15.4,8).curveTo(-16.8,8,-18,7.6).closePath().moveTo(-13,0.5).curveTo(-13.3,-0.2,-13.9,-0.6).lineTo(-13.9,-0.6).curveTo(-14.5,-1,-15.4,-1).lineTo(-15.4,-1).curveTo(-16.3,-1,-16.9,-0.6).lineTo(-16.9,-0.6).curveTo(-17.6,-0.2,-18,0.5).lineTo(-18,0.5).lineTo(-13,0.5).lineTo(-13,0.5).closePath().moveTo(22.3,7.8).lineTo(22.3,-3.8).lineTo(25.9,-3.8).lineTo(25.9,-2.2).curveTo(26.3,-3.2,27.2,-3.6).lineTo(27.2,-3.6).curveTo(28,-4,29.2,-4).lineTo(29.2,-4).lineTo(30.2,-3.9).lineTo(30.2,-3.9).lineTo(31.1,-3.6).lineTo(29.8,0).lineTo(29.2,-0.3).lineTo(29.2,-0.3).curveTo(28.7,-0.4,28.2,-0.5).lineTo(28.2,-0.5).curveTo(27.1,-0.5,26.5,0.2).lineTo(26.5,0.2).curveTo(25.9,0.7,25.9,2.1).lineTo(25.9,2.1).lineTo(25.9,7.8).closePath().moveTo(-34.6,7.8).lineTo(-34.6,-7.8).lineTo(-28.3,-7.8).curveTo(-25.5,-7.9,-24,-6.8).lineTo(-24,-6.8).curveTo(-22.6,-5.6,-22.6,-3.4).lineTo(-22.6,-3.4).curveTo(-22.6,-2.3,-23,-1.6).lineTo(-23,-1.6).curveTo(-23.5,-0.9,-24.2,-0.3).lineTo(-24.2,-0.3).curveTo(-23.3,0.2,-22.8,1).lineTo(-22.8,1).curveTo(-22.3,1.9,-22.3,3.1).lineTo(-22.3,3.1).curveTo(-22.3,5.5,-23.9,6.7).lineTo(-23.9,6.7).curveTo(-25.5,7.8,-28.3,7.8).lineTo(-28.3,7.8).closePath().moveTo(-30.9,4.5).lineTo(-28.3,4.5).curveTo(-27.2,4.5,-26.6,4.1).lineTo(-26.6,4.1).curveTo(-26.2,3.7,-26.2,3).lineTo(-26.2,3).curveTo(-26.2,2.2,-26.6,1.9).lineTo(-26.6,1.9).curveTo(-27.1,1.5,-28.3,1.5).lineTo(-28.3,1.5).lineTo(-30.9,1.5).closePath().moveTo(-30.9,-1.8).lineTo(-28.2,-1.8).curveTo(-27.1,-1.8,-26.7,-2.2).lineTo(-26.7,-2.2).curveTo(-26.3,-2.6,-26.3,-3.3).lineTo(-26.3,-3.3).curveTo(-26.3,-3.9,-26.7,-4.3).lineTo(-26.7,-4.3).curveTo(-27.2,-4.6,-28.2,-4.6).lineTo(-28.2,-4.6).lineTo(-30.9,-4.6).closePath();
	var mask_graphics_149 = new cjs.Graphics().moveTo(30.9,7.7).curveTo(30.3,7.1,30.3,6.2).lineTo(30.3,6.2).curveTo(30.3,5.3,30.9,4.6).lineTo(30.9,4.6).curveTo(31.5,4.1,32.4,4).lineTo(32.4,4).curveTo(33.4,4.1,33.9,4.6).lineTo(33.9,4.6).curveTo(34.5,5.3,34.6,6.2).lineTo(34.6,6.2).curveTo(34.5,7.1,33.9,7.7).lineTo(33.9,7.7).curveTo(33.4,8.3,32.4,8.3).lineTo(32.4,8.3).curveTo(31.5,8.3,30.9,7.7).closePath().moveTo(12.8,7.5).curveTo(11.6,7.1,10.9,6.3).lineTo(10.9,6.3).curveTo(10.1,5.4,9.6,4.4).lineTo(9.6,4.4).curveTo(9.3,3.3,9.3,2).lineTo(9.3,2).curveTo(9.3,0.7,9.7,-0.3).lineTo(9.7,-0.3).curveTo(10.2,-1.5,10.9,-2.3).lineTo(10.9,-2.3).curveTo(11.8,-3.1,13,-3.6).lineTo(13,-3.6).curveTo(14,-4,15.3,-4).lineTo(15.3,-4).curveTo(16.6,-4,17.8,-3.6).lineTo(17.8,-3.6).curveTo(18.9,-3.1,19.7,-2.4).lineTo(19.7,-2.4).curveTo(20.5,-1.5,21,-0.5).lineTo(21,-0.5).curveTo(21.3,0.6,21.3,1.9).lineTo(21.3,1.9).lineTo(21.3,3.2).lineTo(12.7,3.2).curveTo(13.1,4.1,13.8,4.5).lineTo(13.8,4.5).curveTo(14.4,5,15.4,5).lineTo(15.4,5).curveTo(16.3,5,16.8,4.7).lineTo(16.8,4.7).curveTo(17.4,4.3,17.8,3.8).lineTo(17.8,3.8).lineTo(20.7,5.4).curveTo(19.8,6.7,18.6,7.3).lineTo(18.6,7.3).curveTo(17.3,8,15.4,8).lineTo(15.4,8).curveTo(14,8,12.8,7.5).closePath().moveTo(17.8,0.6).curveTo(17.5,-0.3,16.9,-0.7).lineTo(16.9,-0.7).curveTo(16.2,-1,15.4,-1).lineTo(15.4,-1).curveTo(14.5,-1,13.9,-0.6).lineTo(13.9,-0.6).curveTo(13.2,-0.2,12.9,0.6).lineTo(12.9,0.6).lineTo(17.8,0.6).lineTo(17.8,0.6).closePath().moveTo(4.4,7.8).curveTo(3.7,7.5,3.2,7).lineTo(3.2,7).curveTo(2.7,6.4,2.4,5.5).lineTo(2.4,5.5).curveTo(2.1,4.7,2.1,3.4).lineTo(2.1,3.4).lineTo(2.1,-0.6).lineTo(0.1,-0.6).lineTo(0.1,-3.8).lineTo(2.1,-3.8).lineTo(2.1,-6.3).lineTo(5.7,-8.3).lineTo(5.7,-3.8).lineTo(8.6,-3.8).lineTo(8.6,-0.6).lineTo(5.7,-0.6).lineTo(5.7,3.1).curveTo(5.7,4.1,5.9,4.4).lineTo(5.9,4.4).curveTo(6.2,4.6,6.7,4.6).lineTo(6.7,4.6).curveTo(7.2,4.6,7.7,4.3).lineTo(7.7,4.3).lineTo(9.3,7).curveTo(8.6,7.4,7.9,7.8).lineTo(7.9,7.8).curveTo(7.1,8,6.2,8).lineTo(6.2,8).curveTo(5.2,8,4.4,7.8).closePath().moveTo(-4.6,7.8).curveTo(-5.3,7.5,-5.8,7).lineTo(-5.8,7).curveTo(-6.3,6.4,-6.6,5.5).lineTo(-6.6,5.5).curveTo(-6.9,4.7,-6.9,3.4).lineTo(-6.9,3.4).lineTo(-6.9,-0.6).lineTo(-8.9,-0.6).lineTo(-8.9,-3.8).lineTo(-6.9,-3.8).lineTo(-6.9,-6.3).lineTo(-3.3,-8.3).lineTo(-3.3,-3.8).lineTo(-0.4,-3.8).lineTo(-0.4,-0.6).lineTo(-3.3,-0.6).lineTo(-3.3,3.1).curveTo(-3.3,4.1,-3.1,4.4).lineTo(-3.1,4.4).curveTo(-2.8,4.6,-2.3,4.6).lineTo(-2.3,4.6).curveTo(-1.8,4.6,-1.3,4.3).lineTo(-1.3,4.3).lineTo(0.3,7).curveTo(-0.4,7.4,-1.2,7.8).lineTo(-1.2,7.8).curveTo(-1.9,8,-2.8,8).lineTo(-2.8,8).curveTo(-3.8,8,-4.6,7.8).closePath().moveTo(-18,7.5).curveTo(-19.1,7.1,-19.9,6.3).lineTo(-19.9,6.3).curveTo(-20.6,5.4,-21.1,4.4).lineTo(-21.1,4.4).curveTo(-21.5,3.3,-21.5,2).lineTo(-21.5,2).curveTo(-21.5,0.7,-21.1,-0.3).lineTo(-21.1,-0.3).curveTo(-20.6,-1.5,-19.8,-2.3).lineTo(-19.8,-2.3).curveTo(-19,-3.1,-17.9,-3.6).lineTo(-17.9,-3.6).curveTo(-16.7,-4,-15.5,-4).lineTo(-15.5,-4).curveTo(-14.1,-4,-13,-3.6).lineTo(-13,-3.6).curveTo(-11.9,-3.1,-11.1,-2.4).lineTo(-11.1,-2.4).curveTo(-10.2,-1.5,-9.9,-0.5).lineTo(-9.9,-0.5).curveTo(-9.4,0.6,-9.4,1.9).lineTo(-9.4,1.9).lineTo(-9.4,3.2).lineTo(-18,3.2).curveTo(-17.7,4.1,-17,4.5).lineTo(-17,4.5).curveTo(-16.4,5,-15.4,5).lineTo(-15.4,5).curveTo(-14.5,5,-13.9,4.7).lineTo(-13.9,4.7).curveTo(-13.3,4.3,-13,3.8).lineTo(-13,3.8).lineTo(-10,5.4).curveTo(-11,6.7,-12.2,7.3).lineTo(-12.2,7.3).curveTo(-13.5,8,-15.4,8).lineTo(-15.4,8).curveTo(-16.8,8,-18,7.5).closePath().moveTo(-13,0.6).curveTo(-13.3,-0.3,-13.9,-0.7).lineTo(-13.9,-0.7).curveTo(-14.5,-1,-15.4,-1).lineTo(-15.4,-1).curveTo(-16.3,-1,-16.9,-0.6).lineTo(-16.9,-0.6).curveTo(-17.6,-0.2,-18,0.6).lineTo(-18,0.6).lineTo(-13,0.6).lineTo(-13,0.6).closePath().moveTo(22.3,7.8).lineTo(22.3,-3.8).lineTo(25.9,-3.8).lineTo(25.9,-2.1).curveTo(26.3,-3.2,27.2,-3.6).lineTo(27.2,-3.6).curveTo(28,-4,29.2,-4).lineTo(29.2,-4).lineTo(30.2,-3.9).lineTo(30.2,-3.9).lineTo(31.1,-3.6).lineTo(29.8,-0).lineTo(29.2,-0.3).lineTo(29.2,-0.3).curveTo(28.7,-0.5,28.2,-0.5).lineTo(28.2,-0.5).curveTo(27.1,-0.4,26.5,0.1).lineTo(26.5,0.1).curveTo(25.9,0.7,25.9,2.1).lineTo(25.9,2.1).lineTo(25.9,7.8).closePath().moveTo(-34.6,7.8).lineTo(-34.6,-7.9).lineTo(-28.3,-7.9).curveTo(-25.5,-7.8,-24,-6.8).lineTo(-24,-6.8).curveTo(-22.6,-5.6,-22.6,-3.4).lineTo(-22.6,-3.4).curveTo(-22.6,-2.3,-23,-1.6).lineTo(-23,-1.6).curveTo(-23.5,-0.9,-24.2,-0.3).lineTo(-24.2,-0.3).curveTo(-23.3,0.2,-22.8,1).lineTo(-22.8,1).curveTo(-22.3,1.8,-22.3,3).lineTo(-22.3,3).curveTo(-22.3,5.5,-23.9,6.6).lineTo(-23.9,6.6).curveTo(-25.5,7.8,-28.3,7.8).lineTo(-28.3,7.8).closePath().moveTo(-30.9,4.5).lineTo(-28.3,4.5).curveTo(-27.2,4.5,-26.6,4.1).lineTo(-26.6,4.1).curveTo(-26.2,3.7,-26.2,2.9).lineTo(-26.2,2.9).curveTo(-26.2,2.2,-26.6,1.8).lineTo(-26.6,1.8).curveTo(-27.1,1.5,-28.3,1.5).lineTo(-28.3,1.5).lineTo(-30.9,1.5).closePath().moveTo(-30.9,-1.8).lineTo(-28.2,-1.8).curveTo(-27.1,-1.8,-26.7,-2.3).lineTo(-26.7,-2.3).curveTo(-26.3,-2.7,-26.3,-3.3).lineTo(-26.3,-3.3).curveTo(-26.3,-3.9,-26.7,-4.3).lineTo(-26.7,-4.3).curveTo(-27.2,-4.6,-28.2,-4.6).lineTo(-28.2,-4.6).lineTo(-30.9,-4.6).closePath();
	var mask_graphics_150 = new cjs.Graphics().moveTo(30.9,7.7).curveTo(30.3,7.1,30.3,6.2).lineTo(30.3,6.2).curveTo(30.3,5.2,30.9,4.7).lineTo(30.9,4.7).curveTo(31.5,4,32.4,4).lineTo(32.4,4).curveTo(33.4,4,33.9,4.7).lineTo(33.9,4.7).curveTo(34.5,5.2,34.6,6.2).lineTo(34.6,6.2).curveTo(34.5,7.1,33.9,7.7).lineTo(33.9,7.7).curveTo(33.4,8.3,32.4,8.3).lineTo(32.4,8.3).curveTo(31.5,8.3,30.9,7.7).closePath().moveTo(12.8,7.6).curveTo(11.6,7.1,10.9,6.2).lineTo(10.9,6.2).curveTo(10.1,5.5,9.6,4.3).lineTo(9.6,4.3).curveTo(9.3,3.2,9.3,2).lineTo(9.3,2).curveTo(9.3,0.7,9.7,-0.4).lineTo(9.7,-0.4).curveTo(10.2,-1.5,10.9,-2.3).lineTo(10.9,-2.3).curveTo(11.8,-3.1,13,-3.6).lineTo(13,-3.6).curveTo(14,-4,15.3,-4).lineTo(15.3,-4).curveTo(16.6,-4,17.8,-3.6).lineTo(17.8,-3.6).curveTo(18.9,-3.2,19.7,-2.3).lineTo(19.7,-2.3).curveTo(20.5,-1.6,21,-0.5).lineTo(21,-0.5).curveTo(21.3,0.7,21.3,2).lineTo(21.3,2).lineTo(21.3,3.2).lineTo(12.7,3.2).curveTo(13.1,4.1,13.8,4.5).lineTo(13.8,4.5).curveTo(14.4,5,15.4,5).lineTo(15.4,5).curveTo(16.3,5,16.8,4.7).lineTo(16.8,4.7).curveTo(17.4,4.4,17.8,3.8).lineTo(17.8,3.8).lineTo(20.7,5.4).curveTo(19.8,6.7,18.6,7.4).lineTo(18.6,7.4).curveTo(17.3,8,15.4,8).lineTo(15.4,8).curveTo(14,8,12.8,7.6).closePath().moveTo(17.8,0.5).curveTo(17.5,-0.3,16.9,-0.6).lineTo(16.9,-0.6).curveTo(16.2,-1,15.4,-1).lineTo(15.4,-1).curveTo(14.5,-1,13.9,-0.6).lineTo(13.9,-0.6).curveTo(13.2,-0.2,12.9,0.5).lineTo(12.9,0.5).lineTo(17.8,0.5).lineTo(17.8,0.5).closePath().moveTo(4.4,7.7).curveTo(3.7,7.5,3.2,7).lineTo(3.2,7).curveTo(2.7,6.4,2.4,5.6).lineTo(2.4,5.6).curveTo(2.1,4.7,2.1,3.4).lineTo(2.1,3.4).lineTo(2.1,-0.6).lineTo(0.1,-0.6).lineTo(0.1,-3.8).lineTo(2.1,-3.8).lineTo(2.1,-6.3).lineTo(5.7,-8.3).lineTo(5.7,-3.8).lineTo(8.6,-3.8).lineTo(8.6,-0.6).lineTo(5.7,-0.6).lineTo(5.7,3.2).curveTo(5.7,4.1,5.9,4.3).lineTo(5.9,4.3).curveTo(6.2,4.6,6.7,4.7).lineTo(6.7,4.7).curveTo(7.2,4.6,7.7,4.2).lineTo(7.7,4.2).lineTo(9.3,7).curveTo(8.6,7.4,7.9,7.7).lineTo(7.9,7.7).curveTo(7.1,8,6.2,8).lineTo(6.2,8).curveTo(5.2,8,4.4,7.7).closePath().moveTo(-4.6,7.7).curveTo(-5.3,7.5,-5.8,7).lineTo(-5.8,7).curveTo(-6.3,6.4,-6.6,5.6).lineTo(-6.6,5.6).curveTo(-6.9,4.7,-6.9,3.4).lineTo(-6.9,3.4).lineTo(-6.9,-0.6).lineTo(-8.9,-0.6).lineTo(-8.9,-3.8).lineTo(-6.9,-3.8).lineTo(-6.9,-6.3).lineTo(-3.3,-8.3).lineTo(-3.3,-3.8).lineTo(-0.4,-3.8).lineTo(-0.4,-0.6).lineTo(-3.3,-0.6).lineTo(-3.3,3.2).curveTo(-3.3,4.1,-3.1,4.3).lineTo(-3.1,4.3).curveTo(-2.8,4.6,-2.3,4.7).lineTo(-2.3,4.7).curveTo(-1.8,4.6,-1.3,4.2).lineTo(-1.3,4.2).lineTo(0.3,7).curveTo(-0.4,7.4,-1.2,7.7).lineTo(-1.2,7.7).curveTo(-1.9,8,-2.8,8).lineTo(-2.8,8).curveTo(-3.8,8,-4.6,7.7).closePath().moveTo(-18,7.6).curveTo(-19.1,7.1,-19.9,6.2).lineTo(-19.9,6.2).curveTo(-20.6,5.5,-21.1,4.3).lineTo(-21.1,4.3).curveTo(-21.5,3.2,-21.5,2).lineTo(-21.5,2).curveTo(-21.5,0.7,-21.1,-0.4).lineTo(-21.1,-0.4).curveTo(-20.6,-1.5,-19.8,-2.3).lineTo(-19.8,-2.3).curveTo(-19,-3.1,-17.9,-3.6).lineTo(-17.9,-3.6).curveTo(-16.7,-4,-15.5,-4).lineTo(-15.5,-4).curveTo(-14.1,-4,-13,-3.6).lineTo(-13,-3.6).curveTo(-11.9,-3.2,-11.1,-2.3).lineTo(-11.1,-2.3).curveTo(-10.2,-1.6,-9.9,-0.5).lineTo(-9.9,-0.5).curveTo(-9.4,0.7,-9.4,2).lineTo(-9.4,2).lineTo(-9.4,3.2).lineTo(-18,3.2).curveTo(-17.7,4.1,-17,4.5).lineTo(-17,4.5).curveTo(-16.4,5,-15.4,5).lineTo(-15.4,5).curveTo(-14.5,5,-13.9,4.7).lineTo(-13.9,4.7).curveTo(-13.3,4.4,-13,3.8).lineTo(-13,3.8).lineTo(-10,5.4).curveTo(-11,6.7,-12.2,7.4).lineTo(-12.2,7.4).curveTo(-13.5,8,-15.4,8).lineTo(-15.4,8).curveTo(-16.8,8,-18,7.6).closePath().moveTo(-13,0.5).curveTo(-13.3,-0.3,-13.9,-0.6).lineTo(-13.9,-0.6).curveTo(-14.5,-1,-15.4,-1).lineTo(-15.4,-1).curveTo(-16.3,-1,-16.9,-0.6).lineTo(-16.9,-0.6).curveTo(-17.6,-0.2,-18,0.5).lineTo(-18,0.5).lineTo(-13,0.5).lineTo(-13,0.5).closePath().moveTo(22.3,7.8).lineTo(22.3,-3.8).lineTo(25.9,-3.8).lineTo(25.9,-2.2).curveTo(26.3,-3.2,27.2,-3.6).lineTo(27.2,-3.6).curveTo(28,-4,29.2,-4).lineTo(29.2,-4).lineTo(30.2,-3.9).lineTo(30.2,-3.9).lineTo(31.1,-3.6).lineTo(29.8,-0).lineTo(29.2,-0.3).lineTo(29.2,-0.3).curveTo(28.7,-0.5,28.2,-0.5).lineTo(28.2,-0.5).curveTo(27.1,-0.5,26.5,0.2).lineTo(26.5,0.2).curveTo(25.9,0.7,25.9,2.1).lineTo(25.9,2.1).lineTo(25.9,7.8).closePath().moveTo(-34.6,7.8).lineTo(-34.6,-7.8).lineTo(-28.3,-7.8).curveTo(-25.5,-7.9,-24,-6.8).lineTo(-24,-6.8).curveTo(-22.6,-5.6,-22.6,-3.4).lineTo(-22.6,-3.4).curveTo(-22.6,-2.3,-23,-1.6).lineTo(-23,-1.6).curveTo(-23.5,-0.9,-24.2,-0.3).lineTo(-24.2,-0.3).curveTo(-23.3,0.2,-22.8,1).lineTo(-22.8,1).curveTo(-22.3,1.9,-22.3,3.1).lineTo(-22.3,3.1).curveTo(-22.3,5.5,-23.9,6.7).lineTo(-23.9,6.7).curveTo(-25.5,7.8,-28.3,7.8).lineTo(-28.3,7.8).closePath().moveTo(-30.9,4.5).lineTo(-28.3,4.5).curveTo(-27.2,4.5,-26.6,4.1).lineTo(-26.6,4.1).curveTo(-26.2,3.7,-26.2,3).lineTo(-26.2,3).curveTo(-26.2,2.2,-26.6,1.8).lineTo(-26.6,1.8).curveTo(-27.1,1.5,-28.3,1.5).lineTo(-28.3,1.5).lineTo(-30.9,1.5).closePath().moveTo(-30.9,-1.9).lineTo(-28.2,-1.9).curveTo(-27.1,-1.9,-26.7,-2.2).lineTo(-26.7,-2.2).curveTo(-26.3,-2.6,-26.3,-3.3).lineTo(-26.3,-3.3).curveTo(-26.3,-3.9,-26.7,-4.3).lineTo(-26.7,-4.3).curveTo(-27.2,-4.6,-28.2,-4.6).lineTo(-28.2,-4.6).lineTo(-30.9,-4.6).closePath();
	var mask_graphics_151 = new cjs.Graphics().moveTo(30.9,7.7).curveTo(30.3,7.1,30.3,6.2).lineTo(30.3,6.2).curveTo(30.3,5.2,30.9,4.6).lineTo(30.9,4.6).curveTo(31.5,4,32.4,4).lineTo(32.4,4).curveTo(33.4,4,33.9,4.6).lineTo(33.9,4.6).curveTo(34.5,5.2,34.6,6.2).lineTo(34.6,6.2).curveTo(34.5,7.1,33.9,7.7).lineTo(33.9,7.7).curveTo(33.4,8.3,32.4,8.3).lineTo(32.4,8.3).curveTo(31.5,8.3,30.9,7.7).closePath().moveTo(12.8,7.6).curveTo(11.6,7.1,10.9,6.2).lineTo(10.9,6.2).curveTo(10.1,5.5,9.6,4.3).lineTo(9.6,4.3).curveTo(9.3,3.2,9.3,2).lineTo(9.3,2).curveTo(9.3,0.7,9.7,-0.4).lineTo(9.7,-0.4).curveTo(10.2,-1.5,10.9,-2.3).lineTo(10.9,-2.3).curveTo(11.8,-3.1,13,-3.6).lineTo(13,-3.6).curveTo(14,-4,15.3,-4).lineTo(15.3,-4).curveTo(16.6,-4,17.8,-3.6).lineTo(17.8,-3.6).curveTo(18.9,-3.2,19.7,-2.3).lineTo(19.7,-2.3).curveTo(20.5,-1.6,21,-0.5).lineTo(21,-0.5).curveTo(21.3,0.6,21.3,1.9).lineTo(21.3,1.9).lineTo(21.3,3.2).lineTo(12.7,3.2).curveTo(13.1,4.1,13.8,4.5).lineTo(13.8,4.5).curveTo(14.4,5,15.4,5).lineTo(15.4,5).curveTo(16.3,5,16.8,4.7).lineTo(16.8,4.7).curveTo(17.4,4.3,17.8,3.8).lineTo(17.8,3.8).lineTo(20.7,5.4).curveTo(19.8,6.7,18.6,7.3).lineTo(18.6,7.3).curveTo(17.3,8,15.4,8).lineTo(15.4,8).curveTo(14,8,12.8,7.6).closePath().moveTo(17.8,0.5).curveTo(17.5,-0.3,16.9,-0.6).lineTo(16.9,-0.6).curveTo(16.2,-1,15.4,-1).lineTo(15.4,-1).curveTo(14.5,-1,13.9,-0.6).lineTo(13.9,-0.6).curveTo(13.2,-0.2,12.9,0.5).lineTo(12.9,0.5).lineTo(17.8,0.5).lineTo(17.8,0.5).closePath().moveTo(4.4,7.7).curveTo(3.7,7.5,3.2,7).lineTo(3.2,7).curveTo(2.7,6.4,2.4,5.5).lineTo(2.4,5.5).curveTo(2.1,4.7,2.1,3.4).lineTo(2.1,3.4).lineTo(2.1,-0.6).lineTo(0.1,-0.6).lineTo(0.1,-3.8).lineTo(2.1,-3.8).lineTo(2.1,-6.3).lineTo(5.7,-8.3).lineTo(5.7,-3.8).lineTo(8.6,-3.8).lineTo(8.6,-0.6).lineTo(5.7,-0.6).lineTo(5.7,3.1).curveTo(5.7,4,5.9,4.3).lineTo(5.9,4.3).curveTo(6.2,4.6,6.7,4.6).lineTo(6.7,4.6).curveTo(7.2,4.6,7.7,4.2).lineTo(7.7,4.2).lineTo(9.3,7).curveTo(8.6,7.4,7.9,7.7).lineTo(7.9,7.7).curveTo(7.1,8,6.2,8).lineTo(6.2,8).curveTo(5.2,8,4.4,7.7).closePath().moveTo(-4.6,7.7).curveTo(-5.3,7.5,-5.8,7).lineTo(-5.8,7).curveTo(-6.3,6.4,-6.6,5.5).lineTo(-6.6,5.5).curveTo(-6.9,4.7,-6.9,3.4).lineTo(-6.9,3.4).lineTo(-6.9,-0.6).lineTo(-8.9,-0.6).lineTo(-8.9,-3.8).lineTo(-6.9,-3.8).lineTo(-6.9,-6.3).lineTo(-3.3,-8.3).lineTo(-3.3,-3.8).lineTo(-0.4,-3.8).lineTo(-0.4,-0.6).lineTo(-3.3,-0.6).lineTo(-3.3,3.1).curveTo(-3.3,4,-3.1,4.3).lineTo(-3.1,4.3).curveTo(-2.8,4.6,-2.3,4.6).lineTo(-2.3,4.6).curveTo(-1.8,4.6,-1.3,4.2).lineTo(-1.3,4.2).lineTo(0.3,7).curveTo(-0.4,7.4,-1.2,7.7).lineTo(-1.2,7.7).curveTo(-1.9,8,-2.8,8).lineTo(-2.8,8).curveTo(-3.8,8,-4.6,7.7).closePath().moveTo(-18,7.6).curveTo(-19.1,7.1,-19.9,6.2).lineTo(-19.9,6.2).curveTo(-20.6,5.5,-21.1,4.3).lineTo(-21.1,4.3).curveTo(-21.5,3.2,-21.5,2).lineTo(-21.5,2).curveTo(-21.5,0.7,-21.1,-0.4).lineTo(-21.1,-0.4).curveTo(-20.6,-1.5,-19.8,-2.3).lineTo(-19.8,-2.3).curveTo(-19,-3.1,-17.9,-3.6).lineTo(-17.9,-3.6).curveTo(-16.7,-4,-15.5,-4).lineTo(-15.5,-4).curveTo(-14.1,-4,-13,-3.6).lineTo(-13,-3.6).curveTo(-11.9,-3.2,-11.1,-2.3).lineTo(-11.1,-2.3).curveTo(-10.2,-1.6,-9.9,-0.5).lineTo(-9.9,-0.5).curveTo(-9.4,0.6,-9.4,1.9).lineTo(-9.4,1.9).lineTo(-9.4,3.2).lineTo(-18,3.2).curveTo(-17.7,4.1,-17,4.5).lineTo(-17,4.5).curveTo(-16.4,5,-15.4,5).lineTo(-15.4,5).curveTo(-14.5,5,-13.9,4.7).lineTo(-13.9,4.7).curveTo(-13.3,4.3,-13,3.8).lineTo(-13,3.8).lineTo(-10,5.4).curveTo(-11,6.7,-12.2,7.3).lineTo(-12.2,7.3).curveTo(-13.5,8,-15.4,8).lineTo(-15.4,8).curveTo(-16.8,8,-18,7.6).closePath().moveTo(-13,0.5).curveTo(-13.3,-0.3,-13.9,-0.6).lineTo(-13.9,-0.6).curveTo(-14.5,-1,-15.4,-1).lineTo(-15.4,-1).curveTo(-16.3,-1,-16.9,-0.6).lineTo(-16.9,-0.6).curveTo(-17.6,-0.2,-18,0.5).lineTo(-18,0.5).lineTo(-13,0.5).lineTo(-13,0.5).closePath().moveTo(22.3,7.8).lineTo(22.3,-3.8).lineTo(25.9,-3.8).lineTo(25.9,-2.2).curveTo(26.3,-3.2,27.2,-3.6).lineTo(27.2,-3.6).curveTo(28,-4,29.2,-4).lineTo(29.2,-4).lineTo(30.2,-3.9).lineTo(30.2,-3.9).lineTo(31.1,-3.6).lineTo(29.8,-0).lineTo(29.2,-0.3).lineTo(29.2,-0.3).curveTo(28.7,-0.5,28.2,-0.5).lineTo(28.2,-0.5).curveTo(27.1,-0.5,26.5,0.1).lineTo(26.5,0.1).curveTo(25.9,0.7,25.9,2.1).lineTo(25.9,2.1).lineTo(25.9,7.8).closePath().moveTo(-34.6,7.8).lineTo(-34.6,-7.8).lineTo(-28.3,-7.8).curveTo(-25.5,-7.9,-24,-6.8).lineTo(-24,-6.8).curveTo(-22.6,-5.6,-22.6,-3.4).lineTo(-22.6,-3.4).curveTo(-22.6,-2.3,-23,-1.6).lineTo(-23,-1.6).curveTo(-23.5,-0.8,-24.2,-0.3).lineTo(-24.2,-0.3).curveTo(-23.3,0.2,-22.8,1).lineTo(-22.8,1).curveTo(-22.3,1.9,-22.3,3.1).lineTo(-22.3,3.1).curveTo(-22.3,5.5,-23.9,6.7).lineTo(-23.9,6.7).curveTo(-25.5,7.8,-28.3,7.8).lineTo(-28.3,7.8).closePath().moveTo(-30.9,4.5).lineTo(-28.3,4.5).curveTo(-27.2,4.5,-26.6,4.1).lineTo(-26.6,4.1).curveTo(-26.2,3.7,-26.2,3).lineTo(-26.2,3).curveTo(-26.2,2.2,-26.6,1.8).lineTo(-26.6,1.8).curveTo(-27.1,1.5,-28.3,1.5).lineTo(-28.3,1.5).lineTo(-30.9,1.5).closePath().moveTo(-30.9,-1.9).lineTo(-28.2,-1.9).curveTo(-27.1,-1.9,-26.7,-2.3).lineTo(-26.7,-2.3).curveTo(-26.3,-2.7,-26.3,-3.3).lineTo(-26.3,-3.3).curveTo(-26.3,-3.9,-26.7,-4.3).lineTo(-26.7,-4.3).curveTo(-27.2,-4.6,-28.2,-4.6).lineTo(-28.2,-4.6).lineTo(-30.9,-4.6).closePath();
	var mask_graphics_152 = new cjs.Graphics().moveTo(30.9,7.7).curveTo(30.3,7.1,30.3,6.2).lineTo(30.3,6.2).curveTo(30.3,5.2,30.9,4.7).lineTo(30.9,4.7).curveTo(31.5,4,32.4,4).lineTo(32.4,4).curveTo(33.4,4,33.9,4.7).lineTo(33.9,4.7).curveTo(34.5,5.2,34.6,6.2).lineTo(34.6,6.2).curveTo(34.5,7.1,33.9,7.7).lineTo(33.9,7.7).curveTo(33.4,8.3,32.4,8.3).lineTo(32.4,8.3).curveTo(31.5,8.3,30.9,7.7).closePath().moveTo(12.8,7.6).curveTo(11.6,7.1,10.9,6.2).lineTo(10.9,6.2).curveTo(10.1,5.5,9.6,4.3).lineTo(9.6,4.3).curveTo(9.3,3.3,9.3,2).lineTo(9.3,2).curveTo(9.3,0.7,9.7,-0.4).lineTo(9.7,-0.4).curveTo(10.2,-1.5,10.9,-2.3).lineTo(10.9,-2.3).curveTo(11.8,-3.1,13,-3.6).lineTo(13,-3.6).curveTo(14,-4,15.3,-4).lineTo(15.3,-4).curveTo(16.6,-4,17.8,-3.6).lineTo(17.8,-3.6).curveTo(18.9,-3.2,19.7,-2.3).lineTo(19.7,-2.3).curveTo(20.5,-1.6,21,-0.5).lineTo(21,-0.5).curveTo(21.3,0.7,21.3,2).lineTo(21.3,2).lineTo(21.3,3.2).lineTo(12.7,3.2).curveTo(13.1,4.1,13.8,4.6).lineTo(13.8,4.6).curveTo(14.4,5,15.4,5).lineTo(15.4,5).curveTo(16.3,5,16.8,4.7).lineTo(16.8,4.7).curveTo(17.4,4.4,17.8,3.8).lineTo(17.8,3.8).lineTo(20.7,5.5).curveTo(19.8,6.7,18.6,7.4).lineTo(18.6,7.4).curveTo(17.3,8,15.4,8).lineTo(15.4,8).curveTo(14,8,12.8,7.6).closePath().moveTo(17.8,0.5).curveTo(17.5,-0.2,16.9,-0.6).lineTo(16.9,-0.6).curveTo(16.2,-1,15.4,-1).lineTo(15.4,-1).curveTo(14.5,-1,13.9,-0.6).lineTo(13.9,-0.6).curveTo(13.2,-0.2,12.9,0.5).lineTo(12.9,0.5).lineTo(17.8,0.5).lineTo(17.8,0.5).closePath().moveTo(4.4,7.7).curveTo(3.7,7.5,3.2,7).lineTo(3.2,7).curveTo(2.7,6.4,2.4,5.6).lineTo(2.4,5.6).curveTo(2.1,4.7,2.1,3.4).lineTo(2.1,3.4).lineTo(2.1,-0.6).lineTo(0.1,-0.6).lineTo(0.1,-3.8).lineTo(2.1,-3.8).lineTo(2.1,-6.3).lineTo(5.7,-8.3).lineTo(5.7,-3.8).lineTo(8.6,-3.8).lineTo(8.6,-0.6).lineTo(5.7,-0.6).lineTo(5.7,3.2).curveTo(5.7,4.1,5.9,4.3).lineTo(5.9,4.3).curveTo(6.2,4.7,6.7,4.7).lineTo(6.7,4.7).curveTo(7.2,4.7,7.7,4.2).lineTo(7.7,4.2).lineTo(9.3,7).curveTo(8.6,7.4,7.9,7.7).lineTo(7.9,7.7).curveTo(7.1,8,6.2,8).lineTo(6.2,8).curveTo(5.2,8,4.4,7.7).closePath().moveTo(-4.6,7.7).curveTo(-5.3,7.5,-5.8,7).lineTo(-5.8,7).curveTo(-6.3,6.4,-6.6,5.6).lineTo(-6.6,5.6).curveTo(-6.9,4.7,-6.9,3.4).lineTo(-6.9,3.4).lineTo(-6.9,-0.6).lineTo(-8.9,-0.6).lineTo(-8.9,-3.8).lineTo(-6.9,-3.8).lineTo(-6.9,-6.3).lineTo(-3.3,-8.3).lineTo(-3.3,-3.8).lineTo(-0.4,-3.8).lineTo(-0.4,-0.6).lineTo(-3.3,-0.6).lineTo(-3.3,3.2).curveTo(-3.3,4.1,-3.1,4.3).lineTo(-3.1,4.3).curveTo(-2.8,4.7,-2.3,4.7).lineTo(-2.3,4.7).curveTo(-1.8,4.7,-1.3,4.2).lineTo(-1.3,4.2).lineTo(0.3,7).curveTo(-0.4,7.4,-1.2,7.7).lineTo(-1.2,7.7).curveTo(-1.9,8,-2.8,8).lineTo(-2.8,8).curveTo(-3.8,8,-4.6,7.7).closePath().moveTo(-18,7.6).curveTo(-19.1,7.1,-19.9,6.2).lineTo(-19.9,6.2).curveTo(-20.6,5.5,-21.1,4.3).lineTo(-21.1,4.3).curveTo(-21.5,3.3,-21.5,2).lineTo(-21.5,2).curveTo(-21.5,0.7,-21.1,-0.4).lineTo(-21.1,-0.4).curveTo(-20.6,-1.5,-19.8,-2.3).lineTo(-19.8,-2.3).curveTo(-19,-3.1,-17.9,-3.6).lineTo(-17.9,-3.6).curveTo(-16.7,-4,-15.5,-4).lineTo(-15.5,-4).curveTo(-14.1,-4,-13,-3.6).lineTo(-13,-3.6).curveTo(-11.9,-3.2,-11.1,-2.3).lineTo(-11.1,-2.3).curveTo(-10.2,-1.6,-9.9,-0.5).lineTo(-9.9,-0.5).curveTo(-9.4,0.7,-9.4,2).lineTo(-9.4,2).lineTo(-9.4,3.2).lineTo(-18,3.2).curveTo(-17.7,4.1,-17,4.6).lineTo(-17,4.6).curveTo(-16.4,5,-15.4,5).lineTo(-15.4,5).curveTo(-14.5,5,-13.9,4.7).lineTo(-13.9,4.7).curveTo(-13.3,4.4,-13,3.8).lineTo(-13,3.8).lineTo(-10,5.5).curveTo(-11,6.7,-12.2,7.4).lineTo(-12.2,7.4).curveTo(-13.5,8,-15.4,8).lineTo(-15.4,8).curveTo(-16.8,8,-18,7.6).closePath().moveTo(-13,0.5).curveTo(-13.3,-0.2,-13.9,-0.6).lineTo(-13.9,-0.6).curveTo(-14.5,-1,-15.4,-1).lineTo(-15.4,-1).curveTo(-16.3,-1,-16.9,-0.6).lineTo(-16.9,-0.6).curveTo(-17.6,-0.2,-18,0.5).lineTo(-18,0.5).lineTo(-13,0.5).lineTo(-13,0.5).closePath().moveTo(22.3,7.8).lineTo(22.3,-3.8).lineTo(25.9,-3.8).lineTo(25.9,-2.2).curveTo(26.3,-3.2,27.2,-3.6).lineTo(27.2,-3.6).curveTo(28,-4,29.2,-4).lineTo(29.2,-4).lineTo(30.2,-3.9).lineTo(30.2,-3.9).lineTo(31.1,-3.6).lineTo(29.8,-0).lineTo(29.2,-0.3).lineTo(29.2,-0.3).curveTo(28.7,-0.4,28.2,-0.5).lineTo(28.2,-0.5).curveTo(27.1,-0.5,26.5,0.2).lineTo(26.5,0.2).curveTo(25.9,0.7,25.9,2.1).lineTo(25.9,2.1).lineTo(25.9,7.8).closePath().moveTo(-34.6,7.8).lineTo(-34.6,-7.8).lineTo(-28.3,-7.8).curveTo(-25.5,-7.9,-24,-6.7).lineTo(-24,-6.7).curveTo(-22.6,-5.6,-22.6,-3.4).lineTo(-22.6,-3.4).curveTo(-22.6,-2.3,-23,-1.6).lineTo(-23,-1.6).curveTo(-23.5,-0.9,-24.2,-0.3).lineTo(-24.2,-0.3).curveTo(-23.3,0.2,-22.8,1).lineTo(-22.8,1).curveTo(-22.3,1.9,-22.3,3.1).lineTo(-22.3,3.1).curveTo(-22.3,5.5,-23.9,6.7).lineTo(-23.9,6.7).curveTo(-25.5,7.8,-28.3,7.8).lineTo(-28.3,7.8).closePath().moveTo(-30.9,4.5).lineTo(-28.3,4.5).curveTo(-27.2,4.5,-26.6,4.1).lineTo(-26.6,4.1).curveTo(-26.2,3.7,-26.2,3).lineTo(-26.2,3).curveTo(-26.2,2.2,-26.6,1.9).lineTo(-26.6,1.9).curveTo(-27.1,1.5,-28.3,1.5).lineTo(-28.3,1.5).lineTo(-30.9,1.5).closePath().moveTo(-30.9,-1.9).lineTo(-28.2,-1.9).curveTo(-27.1,-1.9,-26.7,-2.3).lineTo(-26.7,-2.3).curveTo(-26.3,-2.6,-26.3,-3.3).lineTo(-26.3,-3.3).curveTo(-26.3,-3.9,-26.7,-4.3).lineTo(-26.7,-4.3).curveTo(-27.2,-4.6,-28.2,-4.6).lineTo(-28.2,-4.6).lineTo(-30.9,-4.6).closePath();
	var mask_graphics_153 = new cjs.Graphics().moveTo(30.9,7.7).curveTo(30.3,7.1,30.3,6.2).lineTo(30.3,6.2).curveTo(30.3,5.3,30.9,4.6).lineTo(30.9,4.6).curveTo(31.5,4.1,32.4,4.1).lineTo(32.4,4.1).curveTo(33.4,4.1,33.9,4.6).lineTo(33.9,4.6).curveTo(34.5,5.3,34.6,6.2).lineTo(34.6,6.2).curveTo(34.5,7.1,33.9,7.7).lineTo(33.9,7.7).curveTo(33.4,8.3,32.4,8.3).lineTo(32.4,8.3).curveTo(31.5,8.3,30.9,7.7).closePath().moveTo(12.8,7.5).curveTo(11.6,7.1,10.9,6.3).lineTo(10.9,6.3).curveTo(10.1,5.4,9.6,4.4).lineTo(9.6,4.4).curveTo(9.3,3.3,9.3,2).lineTo(9.3,2).curveTo(9.3,0.8,9.7,-0.3).lineTo(9.7,-0.3).curveTo(10.2,-1.4,10.9,-2.3).lineTo(10.9,-2.3).curveTo(11.8,-3.1,13,-3.6).lineTo(13,-3.6).curveTo(14,-4,15.3,-4).lineTo(15.3,-4).curveTo(16.6,-4,17.8,-3.6).lineTo(17.8,-3.6).curveTo(18.9,-3.1,19.7,-2.4).lineTo(19.7,-2.4).curveTo(20.5,-1.5,21,-0.4).lineTo(21,-0.4).curveTo(21.3,0.6,21.3,1.9).lineTo(21.3,1.9).lineTo(21.3,3.2).lineTo(12.7,3.2).curveTo(13.1,4.1,13.8,4.5).lineTo(13.8,4.5).curveTo(14.4,5,15.4,5).lineTo(15.4,5).curveTo(16.3,5,16.8,4.7).lineTo(16.8,4.7).curveTo(17.4,4.4,17.8,3.8).lineTo(17.8,3.8).lineTo(20.7,5.4).curveTo(19.8,6.7,18.6,7.3).lineTo(18.6,7.3).curveTo(17.3,8,15.4,8).lineTo(15.4,8).curveTo(14,8,12.8,7.5).closePath().moveTo(17.8,0.6).curveTo(17.5,-0.2,16.9,-0.7).lineTo(16.9,-0.7).curveTo(16.2,-1,15.4,-1).lineTo(15.4,-1).curveTo(14.5,-1,13.9,-0.6).lineTo(13.9,-0.6).curveTo(13.2,-0.2,12.9,0.6).lineTo(12.9,0.6).lineTo(17.8,0.6).lineTo(17.8,0.6).closePath().moveTo(4.4,7.8).curveTo(3.7,7.6,3.2,7).lineTo(3.2,7).curveTo(2.7,6.4,2.4,5.5).lineTo(2.4,5.5).curveTo(2.1,4.7,2.1,3.4).lineTo(2.1,3.4).lineTo(2.1,-0.6).lineTo(0.1,-0.6).lineTo(0.1,-3.8).lineTo(2.1,-3.8).lineTo(2.1,-6.3).lineTo(5.7,-8.3).lineTo(5.7,-3.8).lineTo(8.6,-3.8).lineTo(8.6,-0.6).lineTo(5.7,-0.6).lineTo(5.7,3.2).curveTo(5.7,4.1,5.9,4.4).lineTo(5.9,4.4).curveTo(6.2,4.6,6.7,4.6).lineTo(6.7,4.6).curveTo(7.2,4.6,7.7,4.3).lineTo(7.7,4.3).lineTo(9.3,7).curveTo(8.6,7.4,7.9,7.8).lineTo(7.9,7.8).curveTo(7.1,8,6.2,8).lineTo(6.2,8).curveTo(5.2,8,4.4,7.8).closePath().moveTo(-4.6,7.8).curveTo(-5.3,7.6,-5.8,7).lineTo(-5.8,7).curveTo(-6.3,6.4,-6.6,5.5).lineTo(-6.6,5.5).curveTo(-6.9,4.7,-6.9,3.4).lineTo(-6.9,3.4).lineTo(-6.9,-0.6).lineTo(-8.9,-0.6).lineTo(-8.9,-3.8).lineTo(-6.9,-3.8).lineTo(-6.9,-6.3).lineTo(-3.3,-8.3).lineTo(-3.3,-3.8).lineTo(-0.4,-3.8).lineTo(-0.4,-0.6).lineTo(-3.3,-0.6).lineTo(-3.3,3.2).curveTo(-3.3,4.1,-3.1,4.4).lineTo(-3.1,4.4).curveTo(-2.8,4.6,-2.3,4.6).lineTo(-2.3,4.6).curveTo(-1.8,4.6,-1.3,4.3).lineTo(-1.3,4.3).lineTo(0.3,7).curveTo(-0.4,7.4,-1.2,7.8).lineTo(-1.2,7.8).curveTo(-1.9,8,-2.8,8).lineTo(-2.8,8).curveTo(-3.8,8,-4.6,7.8).closePath().moveTo(-18,7.5).curveTo(-19.1,7.1,-19.9,6.3).lineTo(-19.9,6.3).curveTo(-20.6,5.4,-21.1,4.4).lineTo(-21.1,4.4).curveTo(-21.5,3.3,-21.5,2).lineTo(-21.5,2).curveTo(-21.5,0.8,-21.1,-0.3).lineTo(-21.1,-0.3).curveTo(-20.6,-1.4,-19.8,-2.3).lineTo(-19.8,-2.3).curveTo(-19,-3.1,-17.9,-3.6).lineTo(-17.9,-3.6).curveTo(-16.7,-4,-15.5,-4).lineTo(-15.5,-4).curveTo(-14.1,-4,-13,-3.6).lineTo(-13,-3.6).curveTo(-11.9,-3.1,-11.1,-2.4).lineTo(-11.1,-2.4).curveTo(-10.2,-1.5,-9.9,-0.4).lineTo(-9.9,-0.4).curveTo(-9.4,0.6,-9.4,1.9).lineTo(-9.4,1.9).lineTo(-9.4,3.2).lineTo(-18,3.2).curveTo(-17.7,4.1,-17,4.5).lineTo(-17,4.5).curveTo(-16.4,5,-15.4,5).lineTo(-15.4,5).curveTo(-14.5,5,-13.9,4.7).lineTo(-13.9,4.7).curveTo(-13.3,4.4,-13,3.8).lineTo(-13,3.8).lineTo(-10,5.4).curveTo(-11,6.7,-12.2,7.3).lineTo(-12.2,7.3).curveTo(-13.5,8,-15.4,8).lineTo(-15.4,8).curveTo(-16.8,8,-18,7.5).closePath().moveTo(-13,0.6).curveTo(-13.3,-0.2,-13.9,-0.7).lineTo(-13.9,-0.7).curveTo(-14.5,-1,-15.4,-1).lineTo(-15.4,-1).curveTo(-16.3,-1,-16.9,-0.6).lineTo(-16.9,-0.6).curveTo(-17.6,-0.2,-18,0.6).lineTo(-18,0.6).lineTo(-13,0.6).lineTo(-13,0.6).closePath().moveTo(22.3,7.8).lineTo(22.3,-3.8).lineTo(25.9,-3.8).lineTo(25.9,-2.1).curveTo(26.3,-3.2,27.2,-3.6).lineTo(27.2,-3.6).curveTo(28,-4,29.2,-4).lineTo(29.2,-4).lineTo(30.2,-3.9).lineTo(30.2,-3.9).lineTo(31.1,-3.6).lineTo(29.8,0).lineTo(29.2,-0.3).lineTo(29.2,-0.3).curveTo(28.7,-0.4,28.2,-0.4).lineTo(28.2,-0.4).curveTo(27.1,-0.4,26.5,0.1).lineTo(26.5,0.1).curveTo(25.9,0.7,25.9,2.1).lineTo(25.9,2.1).lineTo(25.9,7.8).closePath().moveTo(-34.6,7.8).lineTo(-34.6,-7.9).lineTo(-28.3,-7.9).curveTo(-25.5,-7.9,-24,-6.7).lineTo(-24,-6.7).curveTo(-22.6,-5.6,-22.6,-3.4).lineTo(-22.6,-3.4).curveTo(-22.6,-2.3,-23,-1.6).lineTo(-23,-1.6).curveTo(-23.5,-0.9,-24.2,-0.3).lineTo(-24.2,-0.3).curveTo(-23.3,0.2,-22.8,1).lineTo(-22.8,1).curveTo(-22.3,1.9,-22.3,3).lineTo(-22.3,3).curveTo(-22.3,5.5,-23.9,6.6).lineTo(-23.9,6.6).curveTo(-25.5,7.8,-28.3,7.8).lineTo(-28.3,7.8).closePath().moveTo(-30.9,4.5).lineTo(-28.3,4.5).curveTo(-27.2,4.5,-26.6,4.1).lineTo(-26.6,4.1).curveTo(-26.2,3.7,-26.2,2.9).lineTo(-26.2,2.9).curveTo(-26.2,2.2,-26.6,1.8).lineTo(-26.6,1.8).curveTo(-27.1,1.5,-28.3,1.5).lineTo(-28.3,1.5).lineTo(-30.9,1.5).closePath().moveTo(-30.9,-1.8).lineTo(-28.2,-1.8).curveTo(-27.1,-1.8,-26.7,-2.2).lineTo(-26.7,-2.2).curveTo(-26.3,-2.7,-26.3,-3.3).lineTo(-26.3,-3.3).curveTo(-26.3,-3.9,-26.7,-4.3).lineTo(-26.7,-4.3).curveTo(-27.2,-4.6,-28.2,-4.6).lineTo(-28.2,-4.6).lineTo(-30.9,-4.6).closePath();
	var mask_graphics_154 = new cjs.Graphics().moveTo(30.9,7.7).curveTo(30.3,7.1,30.3,6.2).lineTo(30.3,6.2).curveTo(30.3,5.3,30.9,4.6).lineTo(30.9,4.6).curveTo(31.5,4.1,32.4,4).lineTo(32.4,4).curveTo(33.4,4.1,33.9,4.6).lineTo(33.9,4.6).curveTo(34.5,5.3,34.6,6.2).lineTo(34.6,6.2).curveTo(34.5,7.1,33.9,7.7).lineTo(33.9,7.7).curveTo(33.4,8.3,32.4,8.3).lineTo(32.4,8.3).curveTo(31.5,8.3,30.9,7.7).closePath().moveTo(12.8,7.5).curveTo(11.6,7.1,10.9,6.3).lineTo(10.9,6.3).curveTo(10.1,5.4,9.6,4.4).lineTo(9.6,4.4).curveTo(9.3,3.3,9.3,2).lineTo(9.3,2).curveTo(9.3,0.7,9.7,-0.3).lineTo(9.7,-0.3).curveTo(10.2,-1.4,10.9,-2.3).lineTo(10.9,-2.3).curveTo(11.8,-3.1,13,-3.6).lineTo(13,-3.6).curveTo(14,-4,15.3,-4).lineTo(15.3,-4).curveTo(16.6,-4,17.8,-3.6).lineTo(17.8,-3.6).curveTo(18.9,-3.1,19.7,-2.4).lineTo(19.7,-2.4).curveTo(20.5,-1.5,21,-0.5).lineTo(21,-0.5).curveTo(21.3,0.6,21.3,1.9).lineTo(21.3,1.9).lineTo(21.3,3.2).lineTo(12.7,3.2).curveTo(13.1,4.1,13.8,4.5).lineTo(13.8,4.5).curveTo(14.4,5,15.4,5).lineTo(15.4,5).curveTo(16.3,5,16.8,4.7).lineTo(16.8,4.7).curveTo(17.4,4.3,17.8,3.8).lineTo(17.8,3.8).lineTo(20.7,5.4).curveTo(19.8,6.7,18.6,7.3).lineTo(18.6,7.3).curveTo(17.3,8,15.4,8).lineTo(15.4,8).curveTo(14,8,12.8,7.5).closePath().moveTo(17.8,0.6).curveTo(17.5,-0.2,16.9,-0.7).lineTo(16.9,-0.7).curveTo(16.2,-1,15.4,-1).lineTo(15.4,-1).curveTo(14.5,-1,13.9,-0.6).lineTo(13.9,-0.6).curveTo(13.2,-0.2,12.9,0.6).lineTo(12.9,0.6).lineTo(17.8,0.6).lineTo(17.8,0.6).closePath().moveTo(4.4,7.8).curveTo(3.7,7.5,3.2,7).lineTo(3.2,7).curveTo(2.7,6.4,2.4,5.5).lineTo(2.4,5.5).curveTo(2.1,4.7,2.1,3.4).lineTo(2.1,3.4).lineTo(2.1,-0.6).lineTo(0.1,-0.6).lineTo(0.1,-3.8).lineTo(2.1,-3.8).lineTo(2.1,-6.3).lineTo(5.7,-8.3).lineTo(5.7,-3.8).lineTo(8.6,-3.8).lineTo(8.6,-0.6).lineTo(5.7,-0.6).lineTo(5.7,3.1).curveTo(5.7,4.1,5.9,4.4).lineTo(5.9,4.4).curveTo(6.2,4.6,6.7,4.6).lineTo(6.7,4.6).curveTo(7.2,4.6,7.7,4.3).lineTo(7.7,4.3).lineTo(9.3,7).curveTo(8.6,7.4,7.9,7.8).lineTo(7.9,7.8).curveTo(7.1,8,6.2,8).lineTo(6.2,8).curveTo(5.2,8,4.4,7.8).closePath().moveTo(-4.6,7.8).curveTo(-5.3,7.5,-5.8,7).lineTo(-5.8,7).curveTo(-6.3,6.4,-6.6,5.5).lineTo(-6.6,5.5).curveTo(-6.9,4.7,-6.9,3.4).lineTo(-6.9,3.4).lineTo(-6.9,-0.6).lineTo(-8.9,-0.6).lineTo(-8.9,-3.8).lineTo(-6.9,-3.8).lineTo(-6.9,-6.3).lineTo(-3.3,-8.3).lineTo(-3.3,-3.8).lineTo(-0.4,-3.8).lineTo(-0.4,-0.6).lineTo(-3.3,-0.6).lineTo(-3.3,3.1).curveTo(-3.3,4.1,-3.1,4.4).lineTo(-3.1,4.4).curveTo(-2.8,4.6,-2.3,4.6).lineTo(-2.3,4.6).curveTo(-1.8,4.6,-1.3,4.3).lineTo(-1.3,4.3).lineTo(0.3,7).curveTo(-0.4,7.4,-1.2,7.8).lineTo(-1.2,7.8).curveTo(-1.9,8,-2.8,8).lineTo(-2.8,8).curveTo(-3.8,8,-4.6,7.8).closePath().moveTo(-18,7.5).curveTo(-19.1,7.1,-19.9,6.3).lineTo(-19.9,6.3).curveTo(-20.6,5.4,-21.1,4.4).lineTo(-21.1,4.4).curveTo(-21.5,3.3,-21.5,2).lineTo(-21.5,2).curveTo(-21.5,0.7,-21.1,-0.3).lineTo(-21.1,-0.3).curveTo(-20.6,-1.4,-19.8,-2.3).lineTo(-19.8,-2.3).curveTo(-19,-3.1,-17.9,-3.6).lineTo(-17.9,-3.6).curveTo(-16.7,-4,-15.5,-4).lineTo(-15.5,-4).curveTo(-14.1,-4,-13,-3.6).lineTo(-13,-3.6).curveTo(-11.9,-3.1,-11.1,-2.4).lineTo(-11.1,-2.4).curveTo(-10.2,-1.5,-9.9,-0.5).lineTo(-9.9,-0.5).curveTo(-9.4,0.6,-9.4,1.9).lineTo(-9.4,1.9).lineTo(-9.4,3.2).lineTo(-18,3.2).curveTo(-17.7,4.1,-17,4.5).lineTo(-17,4.5).curveTo(-16.4,5,-15.4,5).lineTo(-15.4,5).curveTo(-14.5,5,-13.9,4.7).lineTo(-13.9,4.7).curveTo(-13.3,4.3,-13,3.8).lineTo(-13,3.8).lineTo(-10,5.4).curveTo(-11,6.7,-12.2,7.3).lineTo(-12.2,7.3).curveTo(-13.5,8,-15.4,8).lineTo(-15.4,8).curveTo(-16.8,8,-18,7.5).closePath().moveTo(-13,0.6).curveTo(-13.3,-0.2,-13.9,-0.7).lineTo(-13.9,-0.7).curveTo(-14.5,-1,-15.4,-1).lineTo(-15.4,-1).curveTo(-16.3,-1,-16.9,-0.6).lineTo(-16.9,-0.6).curveTo(-17.6,-0.2,-18,0.6).lineTo(-18,0.6).lineTo(-13,0.6).lineTo(-13,0.6).closePath().moveTo(22.3,7.8).lineTo(22.3,-3.8).lineTo(25.9,-3.8).lineTo(25.9,-2.1).curveTo(26.3,-3.2,27.2,-3.6).lineTo(27.2,-3.6).curveTo(28,-4,29.2,-4).lineTo(29.2,-4).lineTo(30.2,-3.9).lineTo(30.2,-3.9).lineTo(31.1,-3.6).lineTo(29.8,-0).lineTo(29.2,-0.3).lineTo(29.2,-0.3).curveTo(28.7,-0.5,28.2,-0.5).lineTo(28.2,-0.5).curveTo(27.1,-0.4,26.5,0.1).lineTo(26.5,0.1).curveTo(25.9,0.7,25.9,2.1).lineTo(25.9,2.1).lineTo(25.9,7.8).closePath().moveTo(-34.6,7.8).lineTo(-34.6,-7.9).lineTo(-28.3,-7.9).curveTo(-25.5,-7.8,-24,-6.8).lineTo(-24,-6.8).curveTo(-22.6,-5.6,-22.6,-3.4).lineTo(-22.6,-3.4).curveTo(-22.6,-2.3,-23,-1.6).lineTo(-23,-1.6).curveTo(-23.5,-0.9,-24.2,-0.3).lineTo(-24.2,-0.3).curveTo(-23.3,0.2,-22.8,1).lineTo(-22.8,1).curveTo(-22.3,1.8,-22.3,3).lineTo(-22.3,3).curveTo(-22.3,5.5,-23.9,6.6).lineTo(-23.9,6.6).curveTo(-25.5,7.8,-28.3,7.8).lineTo(-28.3,7.8).closePath().moveTo(-30.9,4.5).lineTo(-28.3,4.5).curveTo(-27.2,4.5,-26.6,4.1).lineTo(-26.6,4.1).curveTo(-26.2,3.7,-26.2,2.9).lineTo(-26.2,2.9).curveTo(-26.2,2.2,-26.6,1.8).lineTo(-26.6,1.8).curveTo(-27.1,1.5,-28.3,1.5).lineTo(-28.3,1.5).lineTo(-30.9,1.5).closePath().moveTo(-30.9,-1.8).lineTo(-28.2,-1.8).curveTo(-27.1,-1.8,-26.7,-2.3).lineTo(-26.7,-2.3).curveTo(-26.3,-2.7,-26.3,-3.3).lineTo(-26.3,-3.3).curveTo(-26.3,-3.9,-26.7,-4.3).lineTo(-26.7,-4.3).curveTo(-27.2,-4.6,-28.2,-4.6).lineTo(-28.2,-4.6).lineTo(-30.9,-4.6).closePath();
	var mask_graphics_155 = new cjs.Graphics().moveTo(30.9,7.7).curveTo(30.3,7.1,30.3,6.2).lineTo(30.3,6.2).curveTo(30.3,5.2,30.9,4.6).lineTo(30.9,4.6).curveTo(31.5,4.1,32.4,4.1).lineTo(32.4,4.1).curveTo(33.4,4.1,33.9,4.6).lineTo(33.9,4.6).curveTo(34.5,5.2,34.6,6.2).lineTo(34.6,6.2).curveTo(34.5,7.1,33.9,7.7).lineTo(33.9,7.7).curveTo(33.4,8.3,32.4,8.3).lineTo(32.4,8.3).curveTo(31.5,8.3,30.9,7.7).closePath().moveTo(12.8,7.6).curveTo(11.6,7.1,10.9,6.2).lineTo(10.9,6.2).curveTo(10.1,5.5,9.6,4.3).lineTo(9.6,4.3).curveTo(9.3,3.2,9.3,2).lineTo(9.3,2).curveTo(9.3,0.7,9.7,-0.4).lineTo(9.7,-0.4).curveTo(10.2,-1.5,10.9,-2.3).lineTo(10.9,-2.3).curveTo(11.8,-3.1,13,-3.6).lineTo(13,-3.6).curveTo(14,-4,15.3,-4).lineTo(15.3,-4).curveTo(16.6,-4,17.8,-3.6).lineTo(17.8,-3.6).curveTo(18.9,-3.2,19.7,-2.3).lineTo(19.7,-2.3).curveTo(20.5,-1.6,21,-0.4).lineTo(21,-0.4).curveTo(21.3,0.6,21.3,1.9).lineTo(21.3,1.9).lineTo(21.3,3.2).lineTo(12.7,3.2).curveTo(13.1,4.1,13.8,4.5).lineTo(13.8,4.5).curveTo(14.4,5,15.4,5).lineTo(15.4,5).curveTo(16.3,5,16.8,4.7).lineTo(16.8,4.7).curveTo(17.4,4.3,17.8,3.8).lineTo(17.8,3.8).lineTo(20.7,5.4).curveTo(19.8,6.7,18.6,7.3).lineTo(18.6,7.3).curveTo(17.3,8,15.4,8).lineTo(15.4,8).curveTo(14,8,12.8,7.6).closePath().moveTo(17.8,0.5).curveTo(17.5,-0.3,16.9,-0.6).lineTo(16.9,-0.6).curveTo(16.2,-1,15.4,-1).lineTo(15.4,-1).curveTo(14.5,-1,13.9,-0.6).lineTo(13.9,-0.6).curveTo(13.2,-0.2,12.9,0.5).lineTo(12.9,0.5).lineTo(17.8,0.5).lineTo(17.8,0.5).closePath().moveTo(4.4,7.7).curveTo(3.7,7.5,3.2,7).lineTo(3.2,7).curveTo(2.7,6.4,2.4,5.5).lineTo(2.4,5.5).curveTo(2.1,4.7,2.1,3.4).lineTo(2.1,3.4).lineTo(2.1,-0.6).lineTo(0.1,-0.6).lineTo(0.1,-3.8).lineTo(2.1,-3.8).lineTo(2.1,-6.3).lineTo(5.7,-8.3).lineTo(5.7,-3.8).lineTo(8.6,-3.8).lineTo(8.6,-0.6).lineTo(5.7,-0.6).lineTo(5.7,3.1).curveTo(5.7,4,5.9,4.3).lineTo(5.9,4.3).curveTo(6.2,4.6,6.7,4.6).lineTo(6.7,4.6).curveTo(7.2,4.6,7.7,4.2).lineTo(7.7,4.2).lineTo(9.3,7).curveTo(8.6,7.4,7.9,7.7).lineTo(7.9,7.7).curveTo(7.1,8,6.2,8).lineTo(6.2,8).curveTo(5.2,8,4.4,7.7).closePath().moveTo(-4.6,7.7).curveTo(-5.3,7.5,-5.8,7).lineTo(-5.8,7).curveTo(-6.3,6.4,-6.6,5.5).lineTo(-6.6,5.5).curveTo(-6.9,4.7,-6.9,3.4).lineTo(-6.9,3.4).lineTo(-6.9,-0.6).lineTo(-8.9,-0.6).lineTo(-8.9,-3.8).lineTo(-6.9,-3.8).lineTo(-6.9,-6.3).lineTo(-3.3,-8.3).lineTo(-3.3,-3.8).lineTo(-0.4,-3.8).lineTo(-0.4,-0.6).lineTo(-3.3,-0.6).lineTo(-3.3,3.1).curveTo(-3.3,4,-3.1,4.3).lineTo(-3.1,4.3).curveTo(-2.8,4.6,-2.3,4.6).lineTo(-2.3,4.6).curveTo(-1.8,4.6,-1.3,4.2).lineTo(-1.3,4.2).lineTo(0.3,7).curveTo(-0.4,7.4,-1.2,7.7).lineTo(-1.2,7.7).curveTo(-1.9,8,-2.8,8).lineTo(-2.8,8).curveTo(-3.8,8,-4.6,7.7).closePath().moveTo(-18,7.6).curveTo(-19.1,7.1,-19.9,6.2).lineTo(-19.9,6.2).curveTo(-20.6,5.5,-21.1,4.3).lineTo(-21.1,4.3).curveTo(-21.5,3.2,-21.5,2).lineTo(-21.5,2).curveTo(-21.5,0.7,-21.1,-0.4).lineTo(-21.1,-0.4).curveTo(-20.6,-1.5,-19.8,-2.3).lineTo(-19.8,-2.3).curveTo(-19,-3.1,-17.9,-3.6).lineTo(-17.9,-3.6).curveTo(-16.7,-4,-15.5,-4).lineTo(-15.5,-4).curveTo(-14.1,-4,-13,-3.6).lineTo(-13,-3.6).curveTo(-11.9,-3.2,-11.1,-2.3).lineTo(-11.1,-2.3).curveTo(-10.2,-1.6,-9.9,-0.4).lineTo(-9.9,-0.4).curveTo(-9.4,0.6,-9.4,1.9).lineTo(-9.4,1.9).lineTo(-9.4,3.2).lineTo(-18,3.2).curveTo(-17.7,4.1,-17,4.5).lineTo(-17,4.5).curveTo(-16.4,5,-15.4,5).lineTo(-15.4,5).curveTo(-14.5,5,-13.9,4.7).lineTo(-13.9,4.7).curveTo(-13.3,4.3,-13,3.8).lineTo(-13,3.8).lineTo(-10,5.4).curveTo(-11,6.7,-12.2,7.3).lineTo(-12.2,7.3).curveTo(-13.5,8,-15.4,8).lineTo(-15.4,8).curveTo(-16.8,8,-18,7.6).closePath().moveTo(-13,0.5).curveTo(-13.3,-0.3,-13.9,-0.6).lineTo(-13.9,-0.6).curveTo(-14.5,-1,-15.4,-1).lineTo(-15.4,-1).curveTo(-16.3,-1,-16.9,-0.6).lineTo(-16.9,-0.6).curveTo(-17.6,-0.2,-18,0.5).lineTo(-18,0.5).lineTo(-13,0.5).lineTo(-13,0.5).closePath().moveTo(22.3,7.8).lineTo(22.3,-3.8).lineTo(25.9,-3.8).lineTo(25.9,-2.2).curveTo(26.3,-3.2,27.2,-3.6).lineTo(27.2,-3.6).curveTo(28,-4,29.2,-4).lineTo(29.2,-4).lineTo(30.2,-3.9).lineTo(30.2,-3.9).lineTo(31.1,-3.6).lineTo(29.8,-0).lineTo(29.2,-0.3).lineTo(29.2,-0.3).curveTo(28.7,-0.5,28.2,-0.4).lineTo(28.2,-0.4).curveTo(27.1,-0.4,26.5,0.1).lineTo(26.5,0.1).curveTo(25.9,0.7,25.9,2.1).lineTo(25.9,2.1).lineTo(25.9,7.8).closePath().moveTo(-34.6,7.8).lineTo(-34.6,-7.8).lineTo(-28.3,-7.8).curveTo(-25.5,-7.9,-24,-6.8).lineTo(-24,-6.8).curveTo(-22.6,-5.6,-22.6,-3.4).lineTo(-22.6,-3.4).curveTo(-22.6,-2.3,-23,-1.6).lineTo(-23,-1.6).curveTo(-23.5,-0.8,-24.2,-0.3).lineTo(-24.2,-0.3).curveTo(-23.3,0.2,-22.8,1).lineTo(-22.8,1).curveTo(-22.3,1.8,-22.3,3.1).lineTo(-22.3,3.1).curveTo(-22.3,5.5,-23.9,6.7).lineTo(-23.9,6.7).curveTo(-25.5,7.8,-28.3,7.8).lineTo(-28.3,7.8).closePath().moveTo(-30.9,4.5).lineTo(-28.3,4.5).curveTo(-27.2,4.5,-26.6,4.1).lineTo(-26.6,4.1).curveTo(-26.2,3.7,-26.2,3).lineTo(-26.2,3).curveTo(-26.2,2.2,-26.6,1.8).lineTo(-26.6,1.8).curveTo(-27.1,1.5,-28.3,1.5).lineTo(-28.3,1.5).lineTo(-30.9,1.5).closePath().moveTo(-30.9,-1.9).lineTo(-28.2,-1.9).curveTo(-27.1,-1.9,-26.7,-2.3).lineTo(-26.7,-2.3).curveTo(-26.3,-2.7,-26.3,-3.3).lineTo(-26.3,-3.3).curveTo(-26.3,-3.9,-26.7,-4.3).lineTo(-26.7,-4.3).curveTo(-27.2,-4.6,-28.2,-4.6).lineTo(-28.2,-4.6).lineTo(-30.9,-4.6).closePath();
	var mask_graphics_156 = new cjs.Graphics().moveTo(30.9,7.7).curveTo(30.3,7.1,30.3,6.2).lineTo(30.3,6.2).curveTo(30.3,5.2,30.9,4.6).lineTo(30.9,4.6).curveTo(31.5,4.1,32.4,4).lineTo(32.4,4).curveTo(33.4,4.1,33.9,4.6).lineTo(33.9,4.6).curveTo(34.5,5.2,34.6,6.2).lineTo(34.6,6.2).curveTo(34.5,7.1,33.9,7.7).lineTo(33.9,7.7).curveTo(33.4,8.3,32.4,8.3).lineTo(32.4,8.3).curveTo(31.5,8.3,30.9,7.7).closePath().moveTo(12.8,7.5).curveTo(11.6,7.1,10.9,6.3).lineTo(10.9,6.3).curveTo(10.1,5.4,9.6,4.4).lineTo(9.6,4.4).curveTo(9.3,3.3,9.3,2).lineTo(9.3,2).curveTo(9.3,0.7,9.7,-0.4).lineTo(9.7,-0.4).curveTo(10.2,-1.5,10.9,-2.3).lineTo(10.9,-2.3).curveTo(11.8,-3.1,13,-3.6).lineTo(13,-3.6).curveTo(14,-4,15.3,-4).lineTo(15.3,-4).curveTo(16.6,-4,17.8,-3.6).lineTo(17.8,-3.6).curveTo(18.9,-3.1,19.7,-2.4).lineTo(19.7,-2.4).curveTo(20.5,-1.5,21,-0.5).lineTo(21,-0.5).curveTo(21.3,0.6,21.3,1.9).lineTo(21.3,1.9).lineTo(21.3,3.2).lineTo(12.7,3.2).curveTo(13.1,4.1,13.8,4.5).lineTo(13.8,4.5).curveTo(14.4,5,15.4,5).lineTo(15.4,5).curveTo(16.3,5,16.8,4.7).lineTo(16.8,4.7).curveTo(17.4,4.3,17.8,3.8).lineTo(17.8,3.8).lineTo(20.7,5.4).curveTo(19.8,6.7,18.6,7.3).lineTo(18.6,7.3).curveTo(17.3,8,15.4,8).lineTo(15.4,8).curveTo(14,8,12.8,7.5).closePath().moveTo(17.8,0.5).curveTo(17.5,-0.3,16.9,-0.7).lineTo(16.9,-0.7).curveTo(16.2,-1,15.4,-1).lineTo(15.4,-1).curveTo(14.5,-1,13.9,-0.6).lineTo(13.9,-0.6).curveTo(13.2,-0.2,12.9,0.5).lineTo(12.9,0.5).lineTo(17.8,0.5).lineTo(17.8,0.5).closePath().moveTo(4.4,7.7).curveTo(3.7,7.6,3.2,7).lineTo(3.2,7).curveTo(2.7,6.4,2.4,5.5).lineTo(2.4,5.5).curveTo(2.1,4.7,2.1,3.4).lineTo(2.1,3.4).lineTo(2.1,-0.6).lineTo(0.1,-0.6).lineTo(0.1,-3.8).lineTo(2.1,-3.8).lineTo(2.1,-6.3).lineTo(5.7,-8.3).lineTo(5.7,-3.8).lineTo(8.6,-3.8).lineTo(8.6,-0.6).lineTo(5.7,-0.6).lineTo(5.7,3.1).curveTo(5.7,4,5.9,4.4).lineTo(5.9,4.4).curveTo(6.2,4.6,6.7,4.6).lineTo(6.7,4.6).curveTo(7.2,4.6,7.7,4.3).lineTo(7.7,4.3).lineTo(9.3,7).curveTo(8.6,7.4,7.9,7.7).lineTo(7.9,7.7).curveTo(7.1,8,6.2,8).lineTo(6.2,8).curveTo(5.2,8,4.4,7.7).closePath().moveTo(-4.6,7.7).curveTo(-5.3,7.6,-5.8,7).lineTo(-5.8,7).curveTo(-6.3,6.4,-6.6,5.5).lineTo(-6.6,5.5).curveTo(-6.9,4.7,-6.9,3.4).lineTo(-6.9,3.4).lineTo(-6.9,-0.6).lineTo(-8.9,-0.6).lineTo(-8.9,-3.8).lineTo(-6.9,-3.8).lineTo(-6.9,-6.3).lineTo(-3.3,-8.3).lineTo(-3.3,-3.8).lineTo(-0.4,-3.8).lineTo(-0.4,-0.6).lineTo(-3.3,-0.6).lineTo(-3.3,3.1).curveTo(-3.3,4,-3.1,4.4).lineTo(-3.1,4.4).curveTo(-2.8,4.6,-2.3,4.6).lineTo(-2.3,4.6).curveTo(-1.8,4.6,-1.3,4.3).lineTo(-1.3,4.3).lineTo(0.3,7).curveTo(-0.4,7.4,-1.2,7.7).lineTo(-1.2,7.7).curveTo(-1.9,8,-2.8,8).lineTo(-2.8,8).curveTo(-3.8,8,-4.6,7.7).closePath().moveTo(-18,7.5).curveTo(-19.1,7.1,-19.9,6.3).lineTo(-19.9,6.3).curveTo(-20.6,5.4,-21.1,4.4).lineTo(-21.1,4.4).curveTo(-21.5,3.3,-21.5,2).lineTo(-21.5,2).curveTo(-21.5,0.7,-21.1,-0.4).lineTo(-21.1,-0.4).curveTo(-20.6,-1.5,-19.8,-2.3).lineTo(-19.8,-2.3).curveTo(-19,-3.1,-17.9,-3.6).lineTo(-17.9,-3.6).curveTo(-16.7,-4,-15.5,-4).lineTo(-15.5,-4).curveTo(-14.1,-4,-13,-3.6).lineTo(-13,-3.6).curveTo(-11.9,-3.1,-11.1,-2.4).lineTo(-11.1,-2.4).curveTo(-10.2,-1.5,-9.9,-0.5).lineTo(-9.9,-0.5).curveTo(-9.4,0.6,-9.4,1.9).lineTo(-9.4,1.9).lineTo(-9.4,3.2).lineTo(-18,3.2).curveTo(-17.7,4.1,-17,4.5).lineTo(-17,4.5).curveTo(-16.4,5,-15.4,5).lineTo(-15.4,5).curveTo(-14.5,5,-13.9,4.7).lineTo(-13.9,4.7).curveTo(-13.3,4.3,-13,3.8).lineTo(-13,3.8).lineTo(-10,5.4).curveTo(-11,6.7,-12.2,7.3).lineTo(-12.2,7.3).curveTo(-13.5,8,-15.4,8).lineTo(-15.4,8).curveTo(-16.8,8,-18,7.5).closePath().moveTo(-13,0.5).curveTo(-13.3,-0.3,-13.9,-0.7).lineTo(-13.9,-0.7).curveTo(-14.5,-1,-15.4,-1).lineTo(-15.4,-1).curveTo(-16.3,-1,-16.9,-0.6).lineTo(-16.9,-0.6).curveTo(-17.6,-0.2,-18,0.5).lineTo(-18,0.5).lineTo(-13,0.5).lineTo(-13,0.5).closePath().moveTo(22.3,7.8).lineTo(22.3,-3.8).lineTo(25.9,-3.8).lineTo(25.9,-2.2).curveTo(26.3,-3.2,27.2,-3.6).lineTo(27.2,-3.6).curveTo(28,-4,29.2,-4).lineTo(29.2,-4).lineTo(30.2,-3.9).lineTo(30.2,-3.9).lineTo(31.1,-3.6).lineTo(29.8,-0).lineTo(29.2,-0.3).lineTo(29.2,-0.3).curveTo(28.7,-0.5,28.2,-0.5).lineTo(28.2,-0.5).curveTo(27.1,-0.4,26.5,0.1).lineTo(26.5,0.1).curveTo(25.9,0.7,25.9,2.1).lineTo(25.9,2.1).lineTo(25.9,7.8).closePath().moveTo(-34.6,7.8).lineTo(-34.6,-7.9).lineTo(-28.3,-7.9).curveTo(-25.5,-7.8,-24,-6.8).lineTo(-24,-6.8).curveTo(-22.6,-5.6,-22.6,-3.4).lineTo(-22.6,-3.4).curveTo(-22.6,-2.3,-23,-1.6).lineTo(-23,-1.6).curveTo(-23.5,-0.9,-24.2,-0.3).lineTo(-24.2,-0.3).curveTo(-23.3,0.2,-22.8,1).lineTo(-22.8,1).curveTo(-22.3,1.8,-22.3,3).lineTo(-22.3,3).curveTo(-22.3,5.5,-23.9,6.6).lineTo(-23.9,6.6).curveTo(-25.5,7.8,-28.3,7.8).lineTo(-28.3,7.8).closePath().moveTo(-30.9,4.5).lineTo(-28.3,4.5).curveTo(-27.2,4.5,-26.6,4.1).lineTo(-26.6,4.1).curveTo(-26.2,3.7,-26.2,2.9).lineTo(-26.2,2.9).curveTo(-26.2,2.2,-26.6,1.8).lineTo(-26.6,1.8).curveTo(-27.1,1.5,-28.3,1.5).lineTo(-28.3,1.5).lineTo(-30.9,1.5).closePath().moveTo(-30.9,-1.8).lineTo(-28.2,-1.8).curveTo(-27.1,-1.8,-26.7,-2.3).lineTo(-26.7,-2.3).curveTo(-26.3,-2.7,-26.3,-3.3).lineTo(-26.3,-3.3).curveTo(-26.3,-3.9,-26.7,-4.3).lineTo(-26.7,-4.3).curveTo(-27.2,-4.6,-28.2,-4.6).lineTo(-28.2,-4.6).lineTo(-30.9,-4.6).closePath();
	var mask_graphics_157 = new cjs.Graphics().moveTo(30.9,7.7).curveTo(30.3,7.1,30.3,6.2).lineTo(30.3,6.2).curveTo(30.3,5.2,30.9,4.6).lineTo(30.9,4.6).curveTo(31.5,4.1,32.4,4).lineTo(32.4,4).curveTo(33.4,4.1,33.9,4.6).lineTo(33.9,4.6).curveTo(34.5,5.2,34.6,6.2).lineTo(34.6,6.2).curveTo(34.5,7.1,33.9,7.7).lineTo(33.9,7.7).curveTo(33.4,8.3,32.4,8.3).lineTo(32.4,8.3).curveTo(31.5,8.3,30.9,7.7).closePath().moveTo(12.8,7.5).curveTo(11.6,7.1,10.9,6.3).lineTo(10.9,6.3).curveTo(10.1,5.4,9.6,4.4).lineTo(9.6,4.4).curveTo(9.3,3.2,9.3,2).lineTo(9.3,2).curveTo(9.3,0.7,9.7,-0.4).lineTo(9.7,-0.4).curveTo(10.2,-1.5,10.9,-2.3).lineTo(10.9,-2.3).curveTo(11.8,-3.1,13,-3.6).lineTo(13,-3.6).curveTo(14,-4,15.3,-4).lineTo(15.3,-4).curveTo(16.6,-4,17.8,-3.6).lineTo(17.8,-3.6).curveTo(18.9,-3.1,19.7,-2.4).lineTo(19.7,-2.4).curveTo(20.5,-1.5,21,-0.5).lineTo(21,-0.5).curveTo(21.3,0.6,21.3,1.9).lineTo(21.3,1.9).lineTo(21.3,3.2).lineTo(12.7,3.2).curveTo(13.1,4.1,13.8,4.5).lineTo(13.8,4.5).curveTo(14.4,5,15.4,5).lineTo(15.4,5).curveTo(16.3,5,16.8,4.7).lineTo(16.8,4.7).curveTo(17.4,4.3,17.8,3.8).lineTo(17.8,3.8).lineTo(20.7,5.4).curveTo(19.8,6.7,18.6,7.3).lineTo(18.6,7.3).curveTo(17.3,8,15.4,8).lineTo(15.4,8).curveTo(14,8,12.8,7.5).closePath().moveTo(17.8,0.5).curveTo(17.5,-0.3,16.9,-0.7).lineTo(16.9,-0.7).curveTo(16.2,-1,15.4,-1).lineTo(15.4,-1).curveTo(14.5,-1,13.9,-0.6).lineTo(13.9,-0.6).curveTo(13.2,-0.2,12.9,0.5).lineTo(12.9,0.5).lineTo(17.8,0.5).lineTo(17.8,0.5).closePath().moveTo(4.4,7.7).curveTo(3.7,7.6,3.2,7).lineTo(3.2,7).curveTo(2.7,6.4,2.4,5.5).lineTo(2.4,5.5).curveTo(2.1,4.7,2.1,3.4).lineTo(2.1,3.4).lineTo(2.1,-0.6).lineTo(0.1,-0.6).lineTo(0.1,-3.8).lineTo(2.1,-3.8).lineTo(2.1,-6.3).lineTo(5.7,-8.3).lineTo(5.7,-3.8).lineTo(8.6,-3.8).lineTo(8.6,-0.6).lineTo(5.7,-0.6).lineTo(5.7,3.1).curveTo(5.7,4,5.9,4.4).lineTo(5.9,4.4).curveTo(6.2,4.6,6.7,4.6).lineTo(6.7,4.6).curveTo(7.2,4.6,7.7,4.3).lineTo(7.7,4.3).lineTo(9.3,7).curveTo(8.6,7.4,7.9,7.7).lineTo(7.9,7.7).curveTo(7.1,8,6.2,8).lineTo(6.2,8).curveTo(5.2,8,4.4,7.7).closePath().moveTo(-4.6,7.7).curveTo(-5.3,7.6,-5.8,7).lineTo(-5.8,7).curveTo(-6.3,6.4,-6.6,5.5).lineTo(-6.6,5.5).curveTo(-6.9,4.7,-6.9,3.4).lineTo(-6.9,3.4).lineTo(-6.9,-0.6).lineTo(-8.9,-0.6).lineTo(-8.9,-3.8).lineTo(-6.9,-3.8).lineTo(-6.9,-6.3).lineTo(-3.3,-8.3).lineTo(-3.3,-3.8).lineTo(-0.4,-3.8).lineTo(-0.4,-0.6).lineTo(-3.3,-0.6).lineTo(-3.3,3.1).curveTo(-3.3,4,-3.1,4.4).lineTo(-3.1,4.4).curveTo(-2.8,4.6,-2.3,4.6).lineTo(-2.3,4.6).curveTo(-1.8,4.6,-1.3,4.3).lineTo(-1.3,4.3).lineTo(0.3,7).curveTo(-0.4,7.4,-1.2,7.7).lineTo(-1.2,7.7).curveTo(-1.9,8,-2.8,8).lineTo(-2.8,8).curveTo(-3.8,8,-4.6,7.7).closePath().moveTo(-18,7.5).curveTo(-19.1,7.1,-19.9,6.3).lineTo(-19.9,6.3).curveTo(-20.6,5.4,-21.1,4.4).lineTo(-21.1,4.4).curveTo(-21.5,3.2,-21.5,2).lineTo(-21.5,2).curveTo(-21.5,0.7,-21.1,-0.4).lineTo(-21.1,-0.4).curveTo(-20.6,-1.5,-19.8,-2.3).lineTo(-19.8,-2.3).curveTo(-19,-3.1,-17.9,-3.6).lineTo(-17.9,-3.6).curveTo(-16.7,-4,-15.5,-4).lineTo(-15.5,-4).curveTo(-14.1,-4,-13,-3.6).lineTo(-13,-3.6).curveTo(-11.9,-3.1,-11.1,-2.4).lineTo(-11.1,-2.4).curveTo(-10.2,-1.5,-9.9,-0.5).lineTo(-9.9,-0.5).curveTo(-9.4,0.6,-9.4,1.9).lineTo(-9.4,1.9).lineTo(-9.4,3.2).lineTo(-18,3.2).curveTo(-17.7,4.1,-17,4.5).lineTo(-17,4.5).curveTo(-16.4,5,-15.4,5).lineTo(-15.4,5).curveTo(-14.5,5,-13.9,4.7).lineTo(-13.9,4.7).curveTo(-13.3,4.3,-13,3.8).lineTo(-13,3.8).lineTo(-10,5.4).curveTo(-11,6.7,-12.2,7.3).lineTo(-12.2,7.3).curveTo(-13.5,8,-15.4,8).lineTo(-15.4,8).curveTo(-16.8,8,-18,7.5).closePath().moveTo(-13,0.5).curveTo(-13.3,-0.3,-13.9,-0.7).lineTo(-13.9,-0.7).curveTo(-14.5,-1,-15.4,-1).lineTo(-15.4,-1).curveTo(-16.3,-1,-16.9,-0.6).lineTo(-16.9,-0.6).curveTo(-17.6,-0.2,-18,0.5).lineTo(-18,0.5).lineTo(-13,0.5).lineTo(-13,0.5).closePath().moveTo(22.3,7.8).lineTo(22.3,-3.8).lineTo(25.9,-3.8).lineTo(25.9,-2.2).curveTo(26.3,-3.2,27.2,-3.6).lineTo(27.2,-3.6).curveTo(28,-4,29.2,-4).lineTo(29.2,-4).lineTo(30.2,-3.9).lineTo(30.2,-3.9).lineTo(31.1,-3.6).lineTo(29.8,-0).lineTo(29.2,-0.3).lineTo(29.2,-0.3).curveTo(28.7,-0.5,28.2,-0.5).lineTo(28.2,-0.5).curveTo(27.1,-0.4,26.5,0.1).lineTo(26.5,0.1).curveTo(25.9,0.7,25.9,2.1).lineTo(25.9,2.1).lineTo(25.9,7.8).closePath().moveTo(-34.6,7.8).lineTo(-34.6,-7.9).lineTo(-28.3,-7.9).curveTo(-25.5,-7.8,-24,-6.8).lineTo(-24,-6.8).curveTo(-22.6,-5.6,-22.6,-3.4).lineTo(-22.6,-3.4).curveTo(-22.6,-2.3,-23,-1.6).lineTo(-23,-1.6).curveTo(-23.5,-0.9,-24.2,-0.3).lineTo(-24.2,-0.3).curveTo(-23.3,0.2,-22.8,1).lineTo(-22.8,1).curveTo(-22.3,1.8,-22.3,3).lineTo(-22.3,3).curveTo(-22.3,5.5,-23.9,6.6).lineTo(-23.9,6.6).curveTo(-25.5,7.8,-28.3,7.8).lineTo(-28.3,7.8).closePath().moveTo(-30.9,4.5).lineTo(-28.3,4.5).curveTo(-27.2,4.5,-26.6,4.1).lineTo(-26.6,4.1).curveTo(-26.2,3.7,-26.2,2.9).lineTo(-26.2,2.9).curveTo(-26.2,2.2,-26.6,1.8).lineTo(-26.6,1.8).curveTo(-27.1,1.5,-28.3,1.5).lineTo(-28.3,1.5).lineTo(-30.9,1.5).closePath().moveTo(-30.9,-1.8).lineTo(-28.2,-1.8).curveTo(-27.1,-1.8,-26.7,-2.3).lineTo(-26.7,-2.3).curveTo(-26.3,-2.7,-26.3,-3.3).lineTo(-26.3,-3.3).curveTo(-26.3,-3.9,-26.7,-4.3).lineTo(-26.7,-4.3).curveTo(-27.2,-4.6,-28.2,-4.6).lineTo(-28.2,-4.6).lineTo(-30.9,-4.6).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(64).to({graphics:mask_graphics_64,x:46.1502,y:32.5998}).wait(84).to({graphics:mask_graphics_148,x:46.1502,y:32.5998}).wait(1).to({graphics:mask_graphics_149,x:46.1502,y:32.7235}).wait(1).to({graphics:mask_graphics_150,x:46.1502,y:33.0939}).wait(1).to({graphics:mask_graphics_151,x:46.1502,y:33.7113}).wait(1).to({graphics:mask_graphics_152,x:46.1502,y:34.5753}).wait(1).to({graphics:mask_graphics_153,x:46.1502,y:35.6863}).wait(1).to({graphics:mask_graphics_154,x:46.1502,y:37.0444}).wait(1).to({graphics:mask_graphics_155,x:46.1502,y:38.6496}).wait(1).to({graphics:mask_graphics_156,x:46.1502,y:40.5013}).wait(1).to({graphics:mask_graphics_157,x:46.1502,y:42.6001}).wait(95));

	// better_mask
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFB71B").beginStroke().moveTo(-48.7,25.5).lineTo(-87.7,25.5).lineTo(-87.7,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-24.9,39.4,-24.7).lineTo(87.7,25.5).closePath();
	this.shape_1.setTransform(-59.85,33.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFB71B").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-24.9,39.4,-24.7).lineTo(87.7,25.5).closePath();
	this.shape_2.setTransform(-48,33.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFB71B").beginStroke().moveTo(-87.7,25.5).lineTo(-87.7,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-24.9,39.4,-24.7).lineTo(87.7,25.5).closePath();
	this.shape_3.setTransform(-37.35,33.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFB71B").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-24.9,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_4.setTransform(-19.85,33.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFB71B").beginStroke().moveTo(-87.7,25.5).lineTo(-87.7,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-24.9,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_5.setTransform(-12.95,33.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFB71B").beginStroke().moveTo(-48.7,25.5).lineTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-24.9,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_6.setTransform(2.65,33.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("rgba(255,183,27,0.988)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_7.setTransform(2.65,33.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("rgba(255,183,27,0.949)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.3).curveTo(39.6,-25,39.4,-24.8).lineTo(87.6,25.5).closePath();
	this.shape_8.setTransform(2.65,33.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("rgba(255,183,27,0.89)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-24.9,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_9.setTransform(2.65,34.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("rgba(255,183,27,0.804)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-24.9,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_10.setTransform(2.65,35.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("rgba(255,183,27,0.69)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-24.9,39.4,-24.8).lineTo(87.6,25.5).closePath();
	this.shape_11.setTransform(2.65,36.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("rgba(255,183,27,0.557)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-24.9,39.4,-24.8).lineTo(87.6,25.5).closePath();
	this.shape_12.setTransform(2.65,37.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("rgba(255,183,27,0.396)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-24.9,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_13.setTransform(2.65,39.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("rgba(255,183,27,0.212)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.3).curveTo(39.6,-25,39.4,-24.8).lineTo(87.6,25.5).closePath();
	this.shape_14.setTransform(2.65,41.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("rgba(255,183,27,0)").beginStroke().moveTo(-48.7,25.5).lineTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_15.setTransform(2.65,43.45);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},64).to({state:[{t:this.shape_2,p:{x:-48}}]},1).to({state:[{t:this.shape_3,p:{x:-37.35}}]},1).to({state:[{t:this.shape_3,p:{x:-28}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5,p:{x:-12.95}}]},1).to({state:[{t:this.shape_5,p:{x:-7.35}}]},1).to({state:[{t:this.shape_2,p:{x:-3}}]},1).to({state:[{t:this.shape_2,p:{x:0.15}}]},1).to({state:[{t:this.shape_5,p:{x:2}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},74).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(95));

	// txt_better
	this.instance_5 = new lib.txt_better();
	this.instance_5.setTransform(84.8,95.1,1,1,0,0,0,81.4,21.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55).to({_off:false},0).to({alpha:1},9).wait(84).to({y:105.1,alpha:0},9,cjs.Ease.quadIn).wait(95));

	// txt_believeIt
	this.instance_6 = new lib.txt_believeIt();
	this.instance_6.setTransform(205.75,94.9,1,1,0,0,0,81.4,22.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(106).to({_off:false},0).to({alpha:1},9).wait(33).to({y:104.9,alpha:0},9,cjs.Ease.quadIn).wait(95));

	// background_color
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-485,125).lineTo(-485,-125).lineTo(485,-125).lineTo(485,125).closePath();
	this.shape_16.setTransform(159.9991,24.9996,0.3299,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(252));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(56.3,24,264.7,27.1);
// library properties:
lib.properties = {
	id: '4CB3FE4512EC4F04AD1A078CE62F288A',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4CB3FE4512EC4F04AD1A078CE62F288A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
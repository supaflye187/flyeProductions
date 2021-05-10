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



(lib.image_01 = function() {
	this.initialize(img.image_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,459,250);


(lib.image_02 = function() {
	this.initialize(img.image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,459,250);


(lib.image_03 = function() {
	this.initialize(img.image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,459,250);// helper functions:

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
	this.shape.setTransform(491.775,17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#008FBE").beginStroke().moveTo(134.1,13).curveTo(132.4,12.6,130.9,11.9).curveTo(129.6,11.3,128.5,10.2).curveTo(127.3,9.3,126.4,8.3).lineTo(131.6,3.8).curveTo(132.9,5.7,134.5,6.6).curveTo(136,7.6,138.2,7.6).curveTo(139.7,7.6,140.5,7).curveTo(141.4,6.2,141.4,5.1).curveTo(141.4,4.5,141,4).curveTo(140.7,3.6,140,3.3).lineTo(138.4,2.7).lineTo(133.2,1.3).curveTo(131.7,0.8,130.5,0.1).curveTo(129.3,-0.8,128.6,-2.2).curveTo(127.8,-3.5,127.8,-5.5).curveTo(127.8,-7.1,128.6,-8.6).curveTo(129.3,-10.1,130.5,-11.1).curveTo(131.7,-12.2,133.5,-12.8).curveTo(135.2,-13.4,137.2,-13.4).curveTo(139,-13.4,140.5,-13.2).curveTo(142.1,-12.8,143.3,-12.2).curveTo(144.5,-11.6,145.6,-10.8).lineTo(147.7,-8.7).lineTo(142.7,-4.9).curveTo(141.8,-6.3,140.5,-7.1).curveTo(139.1,-8,137.1,-8).curveTo(135.6,-8,135,-7.2).curveTo(134.1,-6.5,134.1,-5.6).curveTo(134,-5,134.5,-4.7).lineTo(135.5,-4).lineTo(142.4,-2.3).curveTo(143.9,-1.7,145,-0.9).curveTo(146.3,0.1,147.1,1.3).curveTo(147.8,2.8,147.8,4.9).curveTo(147.8,6.7,147.1,8.3).curveTo(146.4,9.8,145,10.9).curveTo(143.8,12.2,141.9,12.7).curveTo(140,13.4,137.9,13.4).curveTo(135.7,13.4,134.1,13).closePath().moveTo(27.8,13).curveTo(26,12.6,24.5,11.9).curveTo(23.2,11.3,22.1,10.2).curveTo(20.9,9.3,20,8.3).lineTo(25.3,3.8).curveTo(26.6,5.7,28.1,6.6).curveTo(29.7,7.6,31.9,7.6).curveTo(33.4,7.6,34.2,7).curveTo(35.1,6.2,35.1,5.1).curveTo(35.1,4.5,34.7,4).curveTo(34.5,3.6,33.7,3.3).lineTo(32.1,2.7).lineTo(26.7,1.3).curveTo(25.2,0.8,24,0.1).curveTo(23,-0.8,22.2,-2.2).curveTo(21.4,-3.5,21.5,-5.5).curveTo(21.4,-7.1,22.2,-8.6).curveTo(23,-10.1,24,-11.1).curveTo(25.4,-12.2,27.1,-12.8).curveTo(29,-13.4,31,-13.4).curveTo(32.7,-13.4,34.2,-13.2).curveTo(35.7,-12.8,37,-12.2).curveTo(38.2,-11.6,39.2,-10.8).lineTo(41.4,-8.7).lineTo(36.3,-4.9).curveTo(35.3,-6.3,34.2,-7.1).curveTo(32.8,-8,30.9,-8).curveTo(29.3,-8,28.5,-7.2).curveTo(27.8,-6.5,27.8,-5.6).curveTo(27.8,-5,28.1,-4.7).lineTo(29.2,-4).lineTo(36,-2.3).curveTo(37.5,-1.7,38.7,-0.9).curveTo(39.9,0.1,40.7,1.3).curveTo(41.4,2.8,41.4,4.9).curveTo(41.4,6.7,40.7,8.3).curveTo(40,9.8,38.7,10.9).curveTo(37.4,12.2,35.5,12.7).curveTo(33.8,13.4,31.6,13.4).curveTo(29.4,13.4,27.8,13).closePath().moveTo(106.5,13).lineTo(106.5,-12.9).lineTo(124.5,-12.9).lineTo(124.5,-7.2).lineTo(112.7,-7.2).lineTo(112.7,-2.9).lineTo(124.5,-2.9).lineTo(124.5,2.8).lineTo(112.7,2.8).lineTo(112.7,7.2).lineTo(124.5,7.2).lineTo(124.5,13).closePath().moveTo(96.5,13).lineTo(86.2,-3.3).lineTo(86.2,13).lineTo(80.3,13).lineTo(80.3,-12.9).lineTo(86.7,-12.9).lineTo(96.5,2.5).lineTo(96.5,-12.9).lineTo(102.4,-12.9).lineTo(102.4,13).closePath().moveTo(69.8,13).lineTo(69.8,-12.9).lineTo(76.1,-12.9).lineTo(76.1,13).closePath().moveTo(45.7,13).lineTo(45.7,-12.9).lineTo(56,-12.9).curveTo(58.4,-12.9,60.3,-12.2).curveTo(62.1,-11.5,63.3,-10.2).curveTo(64.7,-8.7,65.4,-7.1).curveTo(66,-5.3,66,-3.3).curveTo(66,-1.4,65.4,0.4).curveTo(64.7,2,63.4,3.5).curveTo(62.1,4.9,60.3,5.7).curveTo(58.4,6.5,56,6.5).lineTo(51.8,6.5).lineTo(51.8,13).closePath().moveTo(51.8,0.7).lineTo(55.8,0.7).curveTo(57.6,0.7,58.7,-0.3).curveTo(59.8,-1.4,59.8,-3.3).curveTo(59.8,-5,58.7,-6.2).curveTo(57.6,-7.4,55.8,-7.4).lineTo(51.8,-7.4).closePath().moveTo(-2.8,13).lineTo(-2.8,2).lineTo(-11.3,-12.9).lineTo(-4.5,-12.9).lineTo(0.4,-3.7).lineTo(5.4,-12.9).lineTo(12,-12.9).lineTo(3.5,2).lineTo(3.5,13).closePath().moveTo(-19.5,13).lineTo(-19.5,2.9).lineTo(-27.9,2.9).lineTo(-27.9,13).lineTo(-34.2,13).lineTo(-34.2,-12.9).lineTo(-27.9,-12.9).lineTo(-27.9,-3).lineTo(-19.5,-3).lineTo(-19.5,-12.9).lineTo(-13.3,-12.9).lineTo(-13.3,13).closePath().moveTo(-50.7,13).lineTo(-50.7,-7.2).lineTo(-57.6,-7.2).lineTo(-57.6,-12.9).lineTo(-37.6,-12.9).lineTo(-37.6,-7.2).lineTo(-44.6,-7.2).lineTo(-44.6,13).closePath().moveTo(-74.3,13).lineTo(-74.3,-12.9).lineTo(-68.1,-12.9).lineTo(-68.1,7.1).lineTo(-56.7,7.1).lineTo(-56.7,13).closePath().moveTo(-82.7,13).lineTo(-84.1,9.2).lineTo(-94,9.2).lineTo(-95.3,13).lineTo(-101.5,13).lineTo(-92.1,-12.9).lineTo(-86.2,-12.9).lineTo(-76.4,13).closePath().moveTo(-86,3.7).lineTo(-89,-5).lineTo(-92.2,3.7).lineTo(-86,3.7).closePath().moveTo(-122.5,13).lineTo(-122.5,-12.9).lineTo(-104.6,-12.9).lineTo(-104.6,-7.2).lineTo(-116.5,-7.2).lineTo(-116.5,-2.9).lineTo(-104.6,-2.9).lineTo(-104.6,2.8).lineTo(-116.5,2.8).lineTo(-116.5,7.2).lineTo(-104.6,7.2).lineTo(-104.6,13).closePath().moveTo(-133,13).lineTo(-133,2.9).lineTo(-141.6,2.9).lineTo(-141.6,13).lineTo(-147.8,13).lineTo(-147.8,-12.9).lineTo(-141.6,-12.9).lineTo(-141.6,-3).lineTo(-133,-3).lineTo(-133,-12.9).lineTo(-126.8,-12.9).lineTo(-126.8,13).closePath();
	this.shape_1.setTransform(204.15,17.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_healthySpines, new cjs.Rectangle(0,0,620,35.6), null);


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
	this.shape.setTransform(437.55,18.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#008FBE").beginStroke().moveTo(112,12.8).curveTo(110.1,12,108.6,10.6).curveTo(107.3,9.3,106.5,7.4).curveTo(105.8,5.3,105.8,2.8).lineTo(105.8,-13.2).lineTo(112.2,-13.2).lineTo(112.2,2.8).curveTo(112.2,4.9,113.3,6.2).curveTo(114.4,7.4,116.4,7.4).curveTo(118.2,7.4,119.5,6.2).curveTo(120.7,4.9,120.7,2.8).lineTo(120.7,-13.2).lineTo(127,-13.2).lineTo(127,2.8).curveTo(127,5.3,126.3,7.4).curveTo(125.5,9.3,124.2,10.6).curveTo(122.8,12,120.8,12.8).curveTo(118.9,13.5,116.5,13.5).curveTo(114,13.5,112,12.8).closePath().moveTo(83.3,12.5).curveTo(80.8,11.4,79,9.6).curveTo(77.2,7.7,76.1,5.2).curveTo(75.1,2.8,75.1,-0.1).curveTo(75.1,-2.9,76.1,-5.3).curveTo(77.2,-7.8,79,-9.5).curveTo(80.8,-11.4,83.3,-12.4).curveTo(85.8,-13.5,88.6,-13.5).curveTo(91.3,-13.5,93.9,-12.4).curveTo(96.2,-11.4,98.1,-9.5).curveTo(100,-7.8,101,-5.3).curveTo(102.1,-2.9,102.1,-0.1).curveTo(102.1,2.8,101,5.2).curveTo(100,7.7,98.2,9.6).curveTo(96.2,11.4,93.9,12.5).curveTo(91.3,13.5,88.6,13.5).curveTo(85.8,13.5,83.3,12.5).closePath().moveTo(85.8,-6.9).curveTo(84.4,-6.3,83.5,-5.1).curveTo(82.5,-4.2,82,-2.9).curveTo(81.5,-1.5,81.5,-0.1).curveTo(81.5,1.4,82,2.8).curveTo(82.5,4.1,83.4,5.1).curveTo(84.4,6.2,85.7,6.8).curveTo(87,7.2,88.6,7.2).curveTo(90.1,7.2,91.5,6.8).curveTo(92.8,6.2,93.7,5.1).curveTo(94.6,4.1,95.2,2.8).curveTo(95.8,1.4,95.8,-0.1).curveTo(95.8,-1.5,95.2,-2.9).curveTo(94.6,-4.2,93.7,-5.1).curveTo(92.7,-6.3,91.3,-6.9).curveTo(90.1,-7.4,88.6,-7.4).curveTo(87,-7.4,85.8,-6.9).closePath().moveTo(-92.6,12.5).curveTo(-95.1,11.4,-97,9.6).curveTo(-98.8,7.7,-99.8,5.2).curveTo(-100.9,2.8,-100.9,-0.1).curveTo(-100.9,-2.9,-99.8,-5.3).curveTo(-98.8,-7.8,-97,-9.5).curveTo(-95.1,-11.4,-92.6,-12.4).curveTo(-90.1,-13.5,-87.4,-13.5).curveTo(-84.6,-13.5,-82.2,-12.4).curveTo(-79.7,-11.4,-77.9,-9.5).curveTo(-76,-7.8,-75,-5.3).curveTo(-73.9,-2.9,-73.9,-0.1).curveTo(-73.9,2.8,-75,5.2).curveTo(-76,7.7,-77.8,9.6).curveTo(-79.7,11.4,-82,12.5).curveTo(-84.6,13.5,-87.4,13.5).curveTo(-90.1,13.5,-92.6,12.5).closePath().moveTo(-90.1,-6.9).curveTo(-91.6,-6.3,-92.5,-5.1).curveTo(-93.5,-4.2,-94,-2.9).curveTo(-94.5,-1.5,-94.5,-0.1).curveTo(-94.5,1.4,-94,2.8).curveTo(-93.5,4.1,-92.6,5.1).curveTo(-91.6,6.2,-90.2,6.8).curveTo(-88.9,7.2,-87.4,7.2).curveTo(-85.8,7.2,-84.4,6.8).curveTo(-83.2,6.2,-82.2,5.1).curveTo(-81.3,4.1,-80.7,2.8).curveTo(-80.2,1.4,-80.2,-0.1).curveTo(-80.2,-1.5,-80.7,-2.9).curveTo(-81.3,-4.2,-82.2,-5.1).curveTo(-83.3,-6.3,-84.6,-6.9).curveTo(-85.8,-7.4,-87.4,-7.4).curveTo(-88.9,-7.4,-90.1,-6.9).closePath().moveTo(60,13.1).lineTo(60,2.2).lineTo(51.4,-13.2).lineTo(58.2,-13.2).lineTo(63.3,-3.7).lineTo(68.2,-13.2).lineTo(75,-13.2).lineTo(66.4,2.2).lineTo(66.4,13.1).closePath().moveTo(29.7,13.1).lineTo(29.7,-7.4).lineTo(22.6,-7.4).lineTo(22.6,-13.2).lineTo(43,-13.2).lineTo(43,-7.4).lineTo(35.9,-7.4).lineTo(35.9,13.1).closePath().moveTo(16.3,13.1).lineTo(14.8,9.2).lineTo(4.8,9.2).lineTo(3.5,13.1).lineTo(-2.8,13.1).lineTo(6.8,-13.2).lineTo(12.9,-13.2).lineTo(22.7,13.1).closePath().moveTo(13,3.8).lineTo(9.9,-5.1).lineTo(6.7,3.8).lineTo(13,3.8).closePath().moveTo(-10.6,13.1).lineTo(-10.6,3).lineTo(-19.4,3).lineTo(-19.4,13.1).lineTo(-25.7,13.1).lineTo(-25.7,-13.2).lineTo(-19.4,-13.2).lineTo(-19.4,-3.1).lineTo(-10.6,-3.1).lineTo(-10.6,-13.2).lineTo(-4.3,-13.2).lineTo(-4.3,13.1).closePath().moveTo(-41.6,13.1).lineTo(-46.4,-3.5).lineTo(-50.8,13.1).lineTo(-57.2,13.1).lineTo(-64.4,-13.2).lineTo(-58,-13.2).lineTo(-53.8,3.1).lineTo(-49.3,-13.2).lineTo(-43.3,-13.2).lineTo(-38.7,3.1).lineTo(-34.6,-13.2).lineTo(-28.3,-13.2).lineTo(-35.6,13.1).closePath().moveTo(-127,13.1).lineTo(-127,-13.2).lineTo(-117.7,-13.2).curveTo(-114.6,-13.2,-112.1,-12.2).curveTo(-109.6,-11.1,-107.7,-9.4).curveTo(-105.9,-7.7,-105,-5.1).curveTo(-103.9,-2.9,-103.9,-0.1).curveTo(-103.9,2.8,-105,5.2).curveTo(-106.1,7.7,-107.8,9.4).curveTo(-109.7,11.1,-112.1,12.2).curveTo(-114.6,13.1,-117.5,13.1).closePath().moveTo(-120.8,7.2).lineTo(-117.9,7.2).curveTo(-116.1,7.2,-114.7,6.8).curveTo(-113.3,6.2,-112.3,5.2).curveTo(-111.4,4.1,-110.8,2.8).curveTo(-110.3,1.4,-110.3,-0.1).curveTo(-110.3,-1.6,-110.8,-3).curveTo(-111.3,-4.2,-112.3,-5.1).curveTo(-113.2,-6.3,-114.7,-6.8).curveTo(-116.1,-7.4,-118,-7.4).lineTo(-120.8,-7.4).closePath();
	this.shape_1.setTransform(181.625,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_doWhatYou, new cjs.Rectangle(0,0,556.2,35.6), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(51,12.5).curveTo(50,11.5,50,10).curveTo(50,8.4,51,7.4).curveTo(51.9,6.4,53.5,6.4).curveTo(55.1,6.4,56,7.4).curveTo(57,8.4,57,10).curveTo(57,11.5,56,12.5).curveTo(55.1,13.5,53.5,13.5).curveTo(51.9,13.5,51,12.5).closePath().moveTo(21.1,12.6).curveTo(19.3,11.9,18,10.5).curveTo(16.7,9.2,15.9,7.4).curveTo(15.3,5.6,15.3,3.5).curveTo(15.3,1.4,16,-0.4).curveTo(16.8,-2.2,18.1,-3.6).curveTo(19.5,-4.9,21.3,-5.7).curveTo(23.2,-6.4,25.3,-6.4).curveTo(27.5,-6.4,29.3,-5.7).curveTo(31.2,-5,32.5,-3.7).curveTo(33.8,-2.3,34.5,-0.5).curveTo(35.3,1.3,35.3,3.4).lineTo(35.3,5.5).lineTo(21,5.5).curveTo(21.5,6.9,22.7,7.7).curveTo(23.8,8.5,25.5,8.5).curveTo(26.8,8.5,27.8,7.9).curveTo(28.8,7.4,29.4,6.4).lineTo(34.3,9.2).curveTo(32.7,11.2,30.7,12.3).curveTo(28.6,13.4,25.4,13.4).curveTo(23.1,13.4,21.1,12.6).closePath().moveTo(29.4,1.1).curveTo(28.9,-0.2,27.9,-0.9).curveTo(26.8,-1.5,25.4,-1.5).curveTo(23.9,-1.5,22.9,-0.8).curveTo(21.7,-0.1,21.2,1.1).lineTo(29.4,1.1).lineTo(29.4,1.1).closePath().moveTo(7.4,13).curveTo(6.2,12.6,5.3,11.7).curveTo(4.4,10.8,4,9.4).curveTo(3.5,7.9,3.5,5.8).lineTo(3.5,-0.8).lineTo(0.2,-0.8).lineTo(0.2,-6.1).lineTo(3.5,-6.1).lineTo(3.5,-10.2).lineTo(9.4,-13.5).lineTo(9.4,-6.1).lineTo(14.1,-6.1).lineTo(14.1,-0.8).lineTo(9.4,-0.8).lineTo(9.4,5.4).curveTo(9.4,6.9,9.8,7.4).curveTo(10.3,7.9,11.1,7.9).curveTo(11.9,7.9,12.6,7.2).lineTo(15.3,11.7).curveTo(14.2,12.5,13,13).curveTo(11.7,13.4,10.2,13.4).curveTo(8.7,13.4,7.4,13).closePath().moveTo(-7.5,13).curveTo(-8.7,12.6,-9.5,11.7).curveTo(-10.4,10.8,-10.9,9.4).curveTo(-11.3,7.9,-11.3,5.8).lineTo(-11.3,-0.8).lineTo(-14.7,-0.8).lineTo(-14.7,-6.1).lineTo(-11.3,-6.1).lineTo(-11.3,-10.2).lineTo(-5.4,-13.5).lineTo(-5.4,-6.1).lineTo(-0.7,-6.1).lineTo(-0.7,-0.8).lineTo(-5.4,-0.8).lineTo(-5.4,5.4).curveTo(-5.4,6.9,-5,7.4).curveTo(-4.6,7.9,-3.8,7.9).curveTo(-2.9,7.9,-2.3,7.2).lineTo(0.4,11.7).curveTo(-0.6,12.5,-1.8,13).curveTo(-3.1,13.4,-4.6,13.4).curveTo(-6.2,13.4,-7.5,13).closePath().moveTo(-29.6,12.6).curveTo(-31.5,11.9,-32.8,10.5).curveTo(-34.1,9.2,-34.8,7.4).curveTo(-35.4,5.6,-35.5,3.5).curveTo(-35.5,1.4,-34.7,-0.4).curveTo(-33.9,-2.2,-32.7,-3.6).curveTo(-31.3,-4.9,-29.4,-5.7).curveTo(-27.5,-6.4,-25.5,-6.4).curveTo(-23.2,-6.4,-21.4,-5.7).curveTo(-19.5,-5,-18.3,-3.7).curveTo(-16.9,-2.3,-16.2,-0.5).curveTo(-15.5,1.3,-15.5,3.4).lineTo(-15.5,5.5).lineTo(-29.7,5.5).curveTo(-29.2,6.9,-28.1,7.7).curveTo(-26.9,8.5,-25.3,8.5).curveTo(-23.9,8.5,-23,7.9).curveTo(-22,7.4,-21.3,6.4).lineTo(-16.5,9.2).curveTo(-18.1,11.2,-20.1,12.3).curveTo(-22.2,13.4,-25.4,13.4).curveTo(-27.7,13.4,-29.6,12.6).closePath().moveTo(-21.3,1.1).curveTo(-21.8,-0.2,-22.9,-0.9).curveTo(-23.9,-1.5,-25.4,-1.5).curveTo(-26.9,-1.5,-27.9,-0.8).curveTo(-29,-0.1,-29.5,1.1).lineTo(-21.3,1.1).lineTo(-21.3,1.1).closePath().moveTo(36.9,13).lineTo(36.9,-6.1).lineTo(42.7,-6.1).lineTo(42.7,-3.4).curveTo(43.4,-5.1,44.8,-5.8).curveTo(46.2,-6.4,48.1,-6.4).curveTo(49,-6.4,49.9,-6.3).lineTo(51.4,-5.7).lineTo(49.2,0.2).curveTo(48.8,-0.1,48.1,-0.3).curveTo(47.4,-0.6,46.5,-0.6).curveTo(44.8,-0.6,43.7,0.4).curveTo(42.7,1.4,42.7,3.6).lineTo(42.7,13).closePath().moveTo(-57,13).lineTo(-57,-12.8).lineTo(-46.7,-12.8).curveTo(-42,-12.8,-39.6,-11).curveTo(-37.3,-9.1,-37.3,-5.4).curveTo(-37.3,-3.6,-38,-2.4).curveTo(-38.7,-1.2,-39.9,-0.3).curveTo(-38.4,0.5,-37.6,1.9).curveTo(-36.8,3.2,-36.8,5.2).curveTo(-36.8,9.3,-39.4,11.2).curveTo(-42,13,-46.7,13).closePath().moveTo(-50.9,7.6).lineTo(-46.5,7.6).curveTo(-44.8,7.6,-43.9,7).curveTo(-43.1,6.3,-43.1,5).curveTo(-43.1,3.8,-43.9,3.2).curveTo(-44.6,2.6,-46.6,2.6).lineTo(-50.9,2.6).closePath().moveTo(-50.9,-2.8).lineTo(-46.4,-2.8).curveTo(-44.8,-2.8,-44,-3.5).curveTo(-43.4,-4.2,-43.4,-5.2).curveTo(-43.4,-6.3,-44.1,-6.9).curveTo(-44.8,-7.4,-46.4,-7.4).lineTo(-50.9,-7.4).closePath();
	this.shape.setTransform(170.2012,24.4748,1.4563,1.4563);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_better, new cjs.Rectangle(0,0,253.2,44.1), null);


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
	this.shape.setTransform(264.3208,24.2148,1.4865,1.4865);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_believeIt, new cjs.Rectangle(0,0,385,46.4), null);


(lib.image_03_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image_03();
	this.instance.setTransform(44,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_03_1, new cjs.Rectangle(44,2,459,250), null);


(lib.image_02_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image_02();
	this.instance.setTransform(44,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_02_1, new cjs.Rectangle(44,2,459,250), null);


(lib.image_01_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image_01();
	this.instance.setTransform(44,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01_1, new cjs.Rectangle(44,2,459,250), null);


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
	this.shape.setTransform(443.1202,-337.6055,1.8859,1.8859);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#008FBE").setStrokeStyle(1,1,1).moveTo(-45.8,-11.9).lineTo(45.8,-11.9).lineTo(45.8,11.9).lineTo(-45.8,11.9).closePath();
	this.shape_1.setTransform(443.2145,-337.5584,1.8859,1.8859);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-45.8,11.9).lineTo(-45.8,-11.9).lineTo(45.8,-11.9).lineTo(45.8,11.9).closePath();
	this.shape_2.setTransform(443.2145,-337.5584,1.8859,1.8859);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(39.3,-361,491.40000000000003,393.8), null);


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

	// BSWH_Logo
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F5B846").beginStroke().moveTo(0.4,12.9).lineTo(0.4,0.4).lineTo(6.7,6.7).lineTo(6.7,12.9).closePath().moveTo(-6.8,-6.7).lineTo(-6.8,-12.9).lineTo(-0.4,-12.9).lineTo(-0.4,-0.4).closePath();
	this.shape.setTransform(49.7822,190.0479,1.6003,1.6003);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#3C8EBA").beginStroke().moveTo(29,16.5).lineTo(29,12.1).lineTo(32.4,12.1).lineTo(32.4,12.9).lineTo(30,12.9).lineTo(30,13.9).lineTo(32.1,13.9).lineTo(32.1,14.6).lineTo(30,14.6).lineTo(30,15.7).lineTo(32.4,15.7).lineTo(32.4,16.5).closePath().moveTo(24.9,16.5).lineTo(24.9,12.1).lineTo(25.8,12.1).lineTo(25.8,15.7).lineTo(28,15.7).lineTo(28,16.5).closePath().moveTo(20.2,16.5).lineTo(20.2,12.1).lineTo(22.2,12.1).curveTo(22.7,12.1,23.1,12.3).curveTo(23.5,12.5,23.6,12.8).lineTo(23.7,13.5).lineTo(23.6,14.2).curveTo(23.5,14.5,23.1,14.7).curveTo(22.7,14.9,22.2,14.9).lineTo(21.2,14.9).lineTo(21.2,16.5).closePath().moveTo(21.2,14.2).lineTo(21.9,14.2).curveTo(22.3,14.2,22.5,14).curveTo(22.8,13.9,22.8,13.5).curveTo(22.8,13.1,22.5,12.9).lineTo(21.9,12.8).lineTo(21.2,12.8).closePath().moveTo(17.9,16.5).lineTo(17.9,13.4).lineTo(16.9,16.5).lineTo(16.1,16.5).lineTo(15,13.4).lineTo(15,16.5).lineTo(14.1,16.5).lineTo(14.1,12.1).lineTo(15.4,12.1).lineTo(16.5,15.2).lineTo(17.4,12.1).lineTo(18.8,12.1).lineTo(18.8,16.5).closePath().moveTo(9.6,16.5).lineTo(9.6,12.1).lineTo(12.8,12.1).lineTo(12.8,12.9).lineTo(10.5,12.9).lineTo(10.5,13.9).lineTo(12.6,13.9).lineTo(12.6,14.6).lineTo(10.5,14.6).lineTo(10.5,15.7).lineTo(12.9,15.7).lineTo(12.9,16.5).closePath().moveTo(6.2,16.5).lineTo(6.2,12.9).lineTo(4.9,12.9).lineTo(4.9,12.1).lineTo(8.6,12.1).lineTo(8.6,12.9).lineTo(7.2,12.9).lineTo(7.2,16.5).closePath().moveTo(-32.4,-3.1).lineTo(-32.4,-9.4).lineTo(-19.9,-9.4).lineTo(-26.2,-3.1).closePath().moveTo(-19,-10.3).lineTo(-12.7,-16.5).lineTo(-6.6,-16.5).lineTo(-6.6,-10.3).closePath();
	this.shape_1.setTransform(80.9077,205.8107,1.6003,1.6003);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#1140A0").beginStroke().moveTo(-94.7,18.7).lineTo(-94.7,6.7).lineTo(-88.3,0.4).lineTo(-88.3,18.7).closePath().moveTo(-87.3,15.2).curveTo(-87.6,14.9,-87.5,14.6).curveTo(-87.6,14.2,-87.3,13.9).lineTo(-86.7,13.8).curveTo(-86.3,13.8,-86.2,13.9).curveTo(-85.9,14.2,-85.9,14.6).curveTo(-85.9,14.9,-86.2,15.2).curveTo(-86.3,15.4,-86.7,15.4).curveTo(-87,15.4,-87.3,15.2).closePath().moveTo(-87.2,14.1).curveTo(-87.4,14.3,-87.4,14.6).curveTo(-87.4,14.9,-87.2,15.1).curveTo(-87.1,15.1,-87.1,15.1).curveTo(-87,15.2,-87,15.2).curveTo(-86.9,15.2,-86.8,15.2).curveTo(-86.8,15.3,-86.7,15.3).curveTo(-86.5,15.3,-86.2,15.1).curveTo(-86.2,15,-86.1,14.9).curveTo(-86.1,14.9,-86.1,14.8).curveTo(-86.1,14.8,-86.1,14.7).curveTo(-86,14.7,-86,14.6).lineTo(-86.2,14.1).curveTo(-86.4,13.9,-86.7,13.9).curveTo(-86.8,13.9,-86.8,13.9).curveTo(-86.9,13.9,-87,14).curveTo(-87,14,-87.1,14).curveTo(-87.1,14,-87.2,14.1).closePath().moveTo(-86.5,15).lineTo(-86.7,14.6).lineTo(-86.8,14.6).lineTo(-86.8,15).lineTo(-87,15).lineTo(-87,14.1).lineTo(-86.7,14.1).curveTo(-86.6,14.1,-86.5,14.1).curveTo(-86.4,14.1,-86.4,14.2).curveTo(-86.3,14.2,-86.3,14.2).curveTo(-86.3,14.3,-86.3,14.4).curveTo(-86.3,14.4,-86.3,14.5).curveTo(-86.3,14.5,-86.4,14.5).curveTo(-86.4,14.6,-86.5,14.6).curveTo(-86.5,14.6,-86.6,14.6).lineTo(-86.3,15).closePath().moveTo(-86.8,14.5).lineTo(-86.7,14.5).curveTo(-86.7,14.5,-86.6,14.5).curveTo(-86.6,14.5,-86.6,14.5).curveTo(-86.5,14.4,-86.5,14.4).curveTo(-86.5,14.4,-86.5,14.4).curveTo(-86.5,14.3,-86.5,14.3).curveTo(-86.5,14.3,-86.6,14.2).curveTo(-86.6,14.2,-86.6,14.2).curveTo(-86.7,14.2,-86.7,14.2).lineTo(-86.8,14.2).closePath().moveTo(-13.3,13).curveTo(-14.2,12.1,-14.2,10.8).curveTo(-14.2,9.3,-13.3,8.4).curveTo(-12.5,7.5,-11.1,7.5).curveTo(-10.1,7.5,-9.3,8.1).curveTo(-8.5,8.6,-8.4,9.7).lineTo(-9.8,9.7).curveTo(-9.8,9.3,-10.1,8.9).curveTo(-10.6,8.6,-11.1,8.6).curveTo(-11.7,8.6,-12.1,8.9).curveTo(-12.4,9.3,-12.6,9.7).curveTo(-12.8,10.1,-12.8,10.8).curveTo(-12.8,11.6,-12.4,12.3).curveTo(-11.9,12.8,-11.1,12.8).curveTo(-10.5,12.8,-10.1,12.5).curveTo(-9.7,12,-9.7,11.5).lineTo(-8.3,11.5).curveTo(-8.6,12.6,-9.2,13.3).curveTo(-10,13.9,-11.1,13.9).curveTo(-12.5,13.9,-13.3,13).closePath().moveTo(-36.7,13).curveTo(-37.5,12.1,-37.5,10.8).curveTo(-37.5,9.3,-36.7,8.4).curveTo(-35.8,7.5,-34.4,7.5).curveTo(-33.4,7.5,-32.6,8.1).curveTo(-31.9,8.6,-31.8,9.7).lineTo(-33.1,9.7).curveTo(-33.2,9.3,-33.5,8.9).curveTo(-33.9,8.6,-34.4,8.6).curveTo(-35.1,8.6,-35.4,8.9).curveTo(-35.8,9.3,-36,9.7).curveTo(-36.1,10.1,-36.1,10.8).curveTo(-36.1,11.7,-35.7,12.3).curveTo(-35.3,12.8,-34.4,12.8).curveTo(-33.8,12.8,-33.5,12.5).curveTo(-33.1,12,-33,11.5).lineTo(-31.7,11.5).curveTo(-31.9,12.6,-32.6,13.3).curveTo(-33.3,13.9,-34.4,13.9).curveTo(-35.8,13.9,-36.7,13).closePath().moveTo(23.8,13.8).lineTo(23.6,13.4).lineTo(23.5,12.4).curveTo(23.5,11.8,23.2,11.6).curveTo(23,11.4,22.5,11.4).lineTo(21.1,11.4).lineTo(21.1,13.8).lineTo(19.7,13.8).lineTo(19.7,7.6).lineTo(23.1,7.6).curveTo(23.9,7.6,24.4,8.1).curveTo(25,8.6,25,9.3).curveTo(25,10.5,24,10.8).lineTo(24,10.9).curveTo(24.7,11.2,24.9,12.4).lineTo(24.9,12.9).lineTo(25,13.3).lineTo(25,13.5).lineTo(25,13.8).closePath().moveTo(21.1,10.4).lineTo(22.6,10.4).curveTo(23.5,10.4,23.5,9.6).curveTo(23.5,8.7,22.6,8.7).lineTo(21.1,8.7).closePath().moveTo(13.3,13.8).lineTo(13.3,7.6).lineTo(17.9,7.6).lineTo(17.9,8.8).lineTo(14.6,8.8).lineTo(14.6,10.1).lineTo(17.7,10.1).lineTo(17.7,11.1).lineTo(14.6,11.1).lineTo(14.6,12.7).lineTo(18,12.7).lineTo(18,13.8).closePath().moveTo(8.5,13.8).lineTo(8.5,8.8).lineTo(6.7,8.8).lineTo(6.7,7.6).lineTo(11.7,7.6).lineTo(11.7,8.8).lineTo(9.9,8.8).lineTo(9.9,13.8).closePath().moveTo(3.7,13.8).lineTo(1.1,9.7).lineTo(1.1,13.8).lineTo(-0.1,13.8).lineTo(-0.1,7.6).lineTo(1.3,7.6).lineTo(3.8,11.7).lineTo(3.8,7.6).lineTo(5.1,7.6).lineTo(5.1,13.8).closePath().moveTo(-6.6,13.8).lineTo(-6.6,7.6).lineTo(-2,7.6).lineTo(-2,8.8).lineTo(-5.3,8.8).lineTo(-5.3,10.1).lineTo(-2.2,10.1).lineTo(-2.2,11.1).lineTo(-5.3,11.1).lineTo(-5.3,12.7).lineTo(-1.9,12.7).lineTo(-1.9,13.8).closePath().moveTo(-23.1,13.8).lineTo(-23.1,7.6).lineTo(-21.8,7.6).lineTo(-21.8,12.7).lineTo(-18.8,12.7).lineTo(-18.8,13.8).closePath().moveTo(-25.9,13.8).lineTo(-26.4,12.4).lineTo(-28.7,12.4).lineTo(-29.2,13.8).lineTo(-30.6,13.8).lineTo(-28.2,7.6).lineTo(-26.9,7.6).lineTo(-24.5,13.8).closePath().moveTo(-28.4,11.5).lineTo(-26.8,11.5).lineTo(-27.5,9.1).closePath().moveTo(-40.6,13.8).lineTo(-40.6,7.6).lineTo(-39.2,7.6).lineTo(-39.2,13.8).closePath().moveTo(-47.9,13.8).lineTo(-47.9,7.6).lineTo(-45.2,7.6).curveTo(-44,7.6,-43.2,8.4).curveTo(-42.5,9.2,-42.5,10.7).curveTo(-42.4,12,-43.2,12.9).curveTo(-43.8,13.8,-45.2,13.8).closePath().moveTo(-46.6,12.7).lineTo(-45.3,12.7).curveTo(-44.7,12.6,-44.2,12.3).curveTo(-43.7,11.7,-43.7,10.8).curveTo(-43.7,9.9,-44.2,9.3).curveTo(-44.7,8.8,-45.6,8.8).lineTo(-46.6,8.8).closePath().moveTo(-54.3,13.8).lineTo(-54.3,7.6).lineTo(-49.7,7.6).lineTo(-49.7,8.8).lineTo(-53,8.8).lineTo(-53,10.1).lineTo(-50,10.1).lineTo(-50,11.1).lineTo(-53,11.1).lineTo(-53,12.7).lineTo(-49.7,12.7).lineTo(-49.7,13.8).closePath().moveTo(-57.8,13.8).lineTo(-57.8,9.4).lineTo(-59.2,13.8).lineTo(-60.3,13.8).lineTo(-61.7,9.4).lineTo(-61.8,9.4).lineTo(-61.8,13.8).lineTo(-63.1,13.8).lineTo(-63.1,7.6).lineTo(-61.2,7.6).lineTo(-59.7,11.8).lineTo(-58.3,7.6).lineTo(-56.4,7.6).lineTo(-56.4,13.8).closePath().moveTo(-81.2,6.7).lineTo(-87.5,0.4).lineTo(-69.3,0.4).lineTo(-69.3,6.7).closePath().moveTo(-41.5,4.6).curveTo(-41.8,4.4,-41.7,3.8).curveTo(-41.8,3.4,-41.5,3.2).curveTo(-41.2,2.9,-40.8,2.9).lineTo(-40.3,2.9).curveTo(-39.9,2.9,-39.5,2.5).curveTo(-38.6,1.1,-38.3,0.2).curveTo(-38.1,-0.4,-38.1,-0.8).curveTo(-38.1,-1.4,-38.5,-2.6).lineTo(-40.5,-7.8).lineTo(-40.9,-9).curveTo(-41.3,-9.5,-41.8,-9.7).lineTo(-42.5,-9.8).lineTo(-42.5,-10.1).lineTo(-42.4,-10.4).lineTo(-40,-10.4).lineTo(-37.9,-10.4).curveTo(-37.9,-10.4,-37.8,-10.4).curveTo(-37.8,-10.3,-37.8,-10.3).curveTo(-37.8,-10.3,-37.8,-10.2).curveTo(-37.8,-10.2,-37.8,-10.1).lineTo(-37.9,-9.8).lineTo(-38.5,-9.7).curveTo(-39.1,-9.6,-39,-9.3).curveTo(-39.1,-9,-38.3,-7.1).lineTo(-37.6,-4.8).lineTo(-36.8,-3).curveTo(-36.6,-3.2,-36,-4.8).lineTo(-35.1,-6.8).curveTo(-34.3,-8.8,-34.3,-9.2).curveTo(-34.2,-9.6,-34.9,-9.7).lineTo(-35.6,-9.8).lineTo(-35.7,-10.1).curveTo(-35.7,-10.2,-35.7,-10.2).curveTo(-35.7,-10.3,-35.7,-10.3).curveTo(-35.6,-10.3,-35.6,-10.4).curveTo(-35.6,-10.4,-35.5,-10.4).lineTo(-33.4,-10.4).lineTo(-31.5,-10.4).curveTo(-31.5,-10.4,-31.5,-10.4).curveTo(-31.4,-10.3,-31.4,-10.3).curveTo(-31.4,-10.3,-31.4,-10.2).curveTo(-31.4,-10.2,-31.4,-10.1).curveTo(-31.4,-10,-31.4,-10).curveTo(-31.4,-9.9,-31.4,-9.9).curveTo(-31.4,-9.8,-31.4,-9.8).curveTo(-31.4,-9.8,-31.5,-9.8).lineTo(-31.8,-9.7).curveTo(-32.5,-9.6,-32.9,-9).curveTo(-33.3,-8.5,-33.9,-7.1).lineTo(-35.3,-4.3).lineTo(-39.1,3.8).curveTo(-39.7,4.9,-40.7,4.9).curveTo(-41.2,4.9,-41.5,4.6).closePath().moveTo(66.7,-0.3).curveTo(66,-2.4,63.8,-7.3).curveTo(61.6,-2.9,60.8,-0.3).lineTo(60.4,-0.2).lineTo(60.1,-0.3).lineTo(58.4,-4.3).lineTo(53.8,-14.5).curveTo(53.3,-15.4,53,-15.7).curveTo(52.6,-16.2,51.9,-16.2).lineTo(51.3,-16.3).curveTo(51.3,-16.3,51.3,-16.4).curveTo(51.3,-16.4,51.3,-16.4).curveTo(51.3,-16.5,51.3,-16.5).curveTo(51.3,-16.6,51.3,-16.7).lineTo(51.4,-16.9).lineTo(53.9,-16.8).lineTo(56.7,-16.9).curveTo(56.8,-16.9,56.8,-16.8).curveTo(56.8,-16.8,56.9,-16.8).curveTo(56.9,-16.8,56.9,-16.7).curveTo(56.9,-16.7,56.9,-16.7).curveTo(56.9,-16.6,56.9,-16.6).curveTo(56.9,-16.5,56.9,-16.5).curveTo(56.8,-16.4,56.8,-16.4).curveTo(56.8,-16.3,56.7,-16.3).lineTo(56.2,-16.2).curveTo(55.4,-16.2,55.4,-15.9).curveTo(55.4,-15.5,56.6,-12.6).lineTo(60.9,-3.4).lineTo(62.8,-7.4).curveTo(63.2,-8.2,63.2,-8.4).lineTo(63,-9).lineTo(60.2,-14.9).curveTo(60,-15.6,59.6,-15.9).curveTo(59.3,-16.2,58.7,-16.2).lineTo(58.1,-16.3).lineTo(58.1,-16.7).curveTo(58.1,-16.7,58.1,-16.7).curveTo(58.1,-16.8,58.1,-16.8).curveTo(58.1,-16.8,58.1,-16.8).curveTo(58.2,-16.9,58.2,-16.9).lineTo(60.8,-16.8).lineTo(63.6,-16.9).lineTo(63.7,-16.7).lineTo(63.6,-16.3).lineTo(62.9,-16.2).curveTo(62.2,-16.2,62.1,-16).curveTo(62.1,-15.8,62.4,-14.9).lineTo(64.3,-10.7).curveTo(65.2,-12.5,65.7,-13.8).curveTo(66.4,-15.4,66.4,-15.9).curveTo(66.3,-16.2,65.7,-16.2).lineTo(64.9,-16.3).lineTo(64.8,-16.7).lineTo(65,-16.9).lineTo(67.4,-16.8).lineTo(69.7,-16.9).lineTo(69.8,-16.7).curveTo(69.8,-16.6,69.8,-16.6).curveTo(69.8,-16.5,69.8,-16.5).curveTo(69.8,-16.4,69.8,-16.4).curveTo(69.7,-16.3,69.7,-16.3).lineTo(69,-16.2).curveTo(68.4,-16.2,67.9,-15.5).curveTo(67.6,-15.2,67.1,-14.1).curveTo(66,-12.3,65.2,-10.1).lineTo(64.8,-9.6).lineTo(65,-9).lineTo(67.5,-3.4).lineTo(69.8,-8.6).lineTo(71.7,-13.5).lineTo(72.5,-15.6).curveTo(72.5,-16.2,71.6,-16.2).lineTo(70.9,-16.3).curveTo(70.9,-16.3,70.8,-16.4).curveTo(70.8,-16.4,70.8,-16.5).curveTo(70.8,-16.5,70.8,-16.6).curveTo(70.8,-16.6,70.8,-16.7).curveTo(70.8,-16.7,70.8,-16.7).curveTo(70.8,-16.8,70.8,-16.8).curveTo(70.9,-16.8,70.9,-16.8).curveTo(71,-16.9,71,-16.9).lineTo(73.5,-16.8).curveTo(74.7,-16.8,75.4,-17.3).lineTo(76.6,-18.1).curveTo(76.7,-18.2,76.7,-18.2).curveTo(76.7,-18.2,76.7,-18.2).curveTo(76.7,-18.2,76.7,-18.2).curveTo(76.7,-18.2,76.7,-18.1).lineTo(76.9,-18).curveTo(76.7,-16.5,76.7,-15).lineTo(76.7,-9.9).curveTo(76.7,-9.5,76.9,-9.3).curveTo(78.5,-10.6,80.1,-10.7).curveTo(81.8,-10.7,82.7,-9.7).curveTo(83.3,-8.9,83.4,-7.4).lineTo(83.4,-3.4).curveTo(83.3,-2,83.5,-1.8).curveTo(83.7,-1.4,84.3,-1.3).lineTo(85,-1.2).curveTo(85,-1.2,85,-1.1).curveTo(85,-1.1,85.1,-1).curveTo(85.1,-1,85.1,-0.9).curveTo(85.1,-0.9,85.1,-0.9).lineTo(84.9,-0.6).lineTo(82.5,-0.7).lineTo(80.1,-0.6).lineTo(80,-0.9).lineTo(80.1,-1.2).lineTo(80.6,-1.3).curveTo(81.3,-1.4,81.4,-1.8).curveTo(81.5,-2,81.6,-3.4).lineTo(81.6,-7).curveTo(81.6,-8.2,80.9,-8.8).curveTo(80.4,-9.6,79.2,-9.6).curveTo(78.1,-9.5,77.3,-8.9).lineTo(76.9,-8.4).curveTo(76.7,-8.1,76.7,-7.5).lineTo(76.7,-3.4).curveTo(76.8,-2.1,77,-1.8).curveTo(77.1,-1.4,77.8,-1.3).lineTo(78.2,-1.2).lineTo(78.3,-0.9).lineTo(78.2,-0.6).lineTo(75.9,-0.7).lineTo(73.5,-0.6).lineTo(73.3,-0.9).curveTo(73.3,-0.9,73.3,-0.9).curveTo(73.3,-1,73.3,-1).curveTo(73.4,-1.1,73.4,-1.1).curveTo(73.4,-1.2,73.5,-1.2).lineTo(74,-1.3).curveTo(74.7,-1.4,74.8,-1.8).curveTo(75,-2,75,-3.4).lineTo(75,-14.4).curveTo(75,-15.6,74.9,-16).curveTo(74.9,-16,74.8,-16).curveTo(74.8,-16.1,74.8,-16.1).curveTo(74.7,-16.1,74.7,-16.1).curveTo(74.7,-16.1,74.6,-16.1).curveTo(74.1,-15.9,73.8,-15.3).curveTo(73.4,-14.9,72.2,-12).lineTo(70.5,-7.9).curveTo(69,-4.3,67.4,-0.3).lineTo(67.1,-0.2).lineTo(66.7,-0.3).closePath().moveTo(-6.9,-1.2).curveTo(-7.1,-1.6,-7.3,-2.7).lineTo(-7.5,-4.6).curveTo(-7.5,-4.6,-7.5,-4.7).curveTo(-7.5,-4.7,-7.4,-4.7).curveTo(-7.4,-4.7,-7.3,-4.7).curveTo(-7.3,-4.7,-7.3,-4.7).curveTo(-7.2,-4.8,-7.1,-4.8).curveTo(-7.1,-4.8,-7.1,-4.8).curveTo(-7,-4.8,-7,-4.7).curveTo(-7,-4.7,-7,-4.7).curveTo(-5.9,-1,-2.7,-1).curveTo(-1.3,-1.1,-0.4,-1.8).curveTo(0.3,-2.7,0.3,-3.8).curveTo(0.3,-4.9,0,-5.5).curveTo(-0.5,-6.6,-1.7,-7.3).lineTo(-4,-8.8).curveTo(-6.6,-10.6,-6.6,-13).curveTo(-6.6,-14.8,-5.4,-16).curveTo(-4,-17.2,-1.7,-17.2).curveTo(-0.6,-17.2,0.6,-16.9).lineTo(1.5,-16.8).lineTo(1.7,-15.4).lineTo(1.9,-13.7).lineTo(1.6,-13.6).curveTo(1.5,-13.6,1.5,-13.6).curveTo(1.4,-13.6,1.4,-13.6).curveTo(1.4,-13.6,1.3,-13.7).curveTo(1.3,-13.7,1.3,-13.7).curveTo(1,-14.8,0.4,-15.5).curveTo(-0.5,-16.4,-2,-16.4).curveTo(-3.6,-16.4,-4.4,-15.5).curveTo(-5,-14.8,-5,-13.7).curveTo(-5,-12,-2.9,-10.7).lineTo(-0.9,-9.5).curveTo(2.1,-7.7,2.1,-4.8).curveTo(2.1,-2.8,0.7,-1.5).curveTo(-0.7,-0.2,-3.1,-0.2).curveTo(-5.3,-0.2,-6.9,-1.2).closePath().moveTo(100.7,-0.8).curveTo(99.9,-1.2,99.3,-1.9).curveTo(98.3,-3.3,98.3,-5.1).curveTo(98.3,-7.4,99.6,-9).curveTo(101.1,-10.7,103.2,-10.7).curveTo(104.7,-10.7,105.8,-9.8).curveTo(106.6,-8.9,106.7,-7.8).lineTo(106.6,-7.1).curveTo(106.5,-6.9,105.2,-7).lineTo(100.6,-7).curveTo(100.1,-7,100,-6.9).curveTo(99.9,-6.7,99.9,-6.3).curveTo(99.9,-4.3,101,-3).curveTo(102.2,-1.6,104,-1.7).curveTo(104.6,-1.6,105.2,-1.9).curveTo(105.7,-2.2,106.2,-2.9).curveTo(106.6,-3,106.7,-2.6).curveTo(106.2,-1.5,105,-0.8).curveTo(103.9,-0.3,102.8,-0.3).curveTo(101.7,-0.3,100.7,-0.8).closePath().moveTo(101,-9.2).curveTo(100.2,-8.5,100.2,-7.8).lineTo(100.4,-7.7).lineTo(102.2,-7.7).curveTo(104.3,-7.7,104.6,-7.9).curveTo(104.8,-8,104.8,-8.4).curveTo(104.8,-9,104.4,-9.3).curveTo(103.8,-9.9,103,-9.9).curveTo(101.9,-9.9,101,-9.2).closePath().moveTo(93.2,-1).curveTo(92.7,-1.8,92.7,-3).lineTo(92.7,-8.6).curveTo(92.7,-9.1,92.6,-9.2).curveTo(92.6,-9.2,92.6,-9.2).curveTo(92.5,-9.3,92.5,-9.3).curveTo(92.4,-9.3,92.3,-9.3).curveTo(92.3,-9.3,92.2,-9.3).lineTo(91.5,-9.3).curveTo(91.5,-9.3,91.4,-9.3).curveTo(91.4,-9.4,91.4,-9.4).curveTo(91.3,-9.4,91.3,-9.5).curveTo(91.3,-9.5,91.3,-9.6).lineTo(91.4,-9.8).curveTo(92.5,-10.1,92.9,-10.6).curveTo(93.5,-11,94,-12).lineTo(94.3,-12).lineTo(94.5,-11.9).lineTo(94.5,-10.8).lineTo(94.5,-10.4).lineTo(95,-10.4).lineTo(97.7,-10.4).curveTo(97.9,-10.1,97.9,-9.8).curveTo(97.9,-9.7,97.9,-9.6).curveTo(97.9,-9.5,97.8,-9.4).curveTo(97.8,-9.4,97.8,-9.3).curveTo(97.7,-9.3,97.7,-9.3).lineTo(95,-9.3).curveTo(94.9,-9.3,94.8,-9.3).curveTo(94.7,-9.3,94.7,-9.3).curveTo(94.6,-9.3,94.6,-9.2).curveTo(94.6,-9.2,94.5,-9.2).curveTo(94.4,-9.1,94.4,-8.7).lineTo(94.4,-4.2).curveTo(94.4,-2.9,94.7,-2.3).curveTo(95.2,-1.4,96.3,-1.4).lineTo(97,-1.5).lineTo(97.5,-1.8).lineTo(97.8,-1.8).lineTo(97.8,-1.5).curveTo(96.8,-0.3,95.2,-0.3).curveTo(93.8,-0.3,93.2,-1).closePath().moveTo(33.3,-1).curveTo(32.8,-1.8,32.8,-3).lineTo(32.8,-8.6).lineTo(32.8,-9.2).curveTo(32.7,-9.2,32.7,-9.2).curveTo(32.7,-9.3,32.6,-9.3).curveTo(32.6,-9.3,32.5,-9.3).curveTo(32.4,-9.3,32.3,-9.3).lineTo(31.6,-9.3).curveTo(31.6,-9.3,31.6,-9.3).curveTo(31.6,-9.4,31.5,-9.4).curveTo(31.5,-9.4,31.5,-9.5).curveTo(31.5,-9.5,31.5,-9.6).curveTo(31.5,-9.6,31.5,-9.6).curveTo(31.5,-9.7,31.5,-9.7).curveTo(31.5,-9.7,31.5,-9.7).curveTo(31.6,-9.8,31.6,-9.8).curveTo(32.7,-10.1,33.1,-10.6).curveTo(33.6,-11.1,34.1,-12).lineTo(34.4,-12).lineTo(34.7,-11.9).lineTo(34.7,-10.8).lineTo(34.7,-10.4).lineTo(35.1,-10.4).lineTo(37.8,-10.4).curveTo(38,-10.1,38,-9.8).curveTo(38,-9.7,38,-9.6).curveTo(38,-9.5,38,-9.4).curveTo(37.9,-9.4,37.9,-9.3).curveTo(37.9,-9.3,37.8,-9.3).lineTo(35.1,-9.3).lineTo(34.7,-9.2).curveTo(34.6,-9.1,34.6,-8.7).lineTo(34.6,-4.2).curveTo(34.6,-2.9,34.9,-2.3).curveTo(35.3,-1.4,36.4,-1.4).lineTo(37.1,-1.5).lineTo(37.7,-1.8).lineTo(37.9,-1.8).lineTo(38,-1.5).curveTo(37,-0.3,35.3,-0.3).curveTo(33.9,-0.3,33.3,-1).closePath().moveTo(25.9,-1).curveTo(25.4,-1.8,25.4,-3).lineTo(25.4,-8.6).curveTo(25.4,-9.1,25.3,-9.2).curveTo(25.3,-9.2,25.3,-9.2).curveTo(25.3,-9.3,25.2,-9.3).curveTo(25.2,-9.3,25.1,-9.3).curveTo(25,-9.3,25,-9.3).lineTo(24.2,-9.3).lineTo(24.2,-9.6).curveTo(24.1,-9.6,24.1,-9.6).curveTo(24.1,-9.7,24.1,-9.7).curveTo(24.1,-9.7,24.1,-9.7).curveTo(24.2,-9.8,24.2,-9.8).curveTo(25.3,-10.1,25.8,-10.6).curveTo(26.3,-11.1,26.7,-12).lineTo(26.9,-12).lineTo(27.2,-11.9).lineTo(27.2,-10.8).curveTo(27.2,-10.7,27.3,-10.6).curveTo(27.3,-10.6,27.3,-10.5).curveTo(27.3,-10.5,27.3,-10.4).curveTo(27.3,-10.4,27.4,-10.4).lineTo(27.7,-10.4).lineTo(30.4,-10.4).curveTo(30.6,-10.1,30.6,-9.8).curveTo(30.6,-9.7,30.6,-9.6).curveTo(30.6,-9.5,30.6,-9.4).curveTo(30.5,-9.4,30.5,-9.3).curveTo(30.5,-9.3,30.4,-9.3).lineTo(27.7,-9.3).curveTo(27.6,-9.3,27.5,-9.3).curveTo(27.5,-9.3,27.4,-9.3).curveTo(27.4,-9.3,27.4,-9.2).curveTo(27.4,-9.2,27.4,-9.2).curveTo(27.2,-9.1,27.2,-8.7).lineTo(27.2,-4.2).curveTo(27.2,-2.9,27.5,-2.3).curveTo(27.9,-1.4,29,-1.4).lineTo(29.7,-1.5).lineTo(30.3,-1.8).lineTo(30.5,-1.8).lineTo(30.5,-1.5).curveTo(29.6,-0.3,27.9,-0.3).curveTo(26.6,-0.3,25.9,-1).closePath().moveTo(14.3,-1.8).curveTo(12.8,-3.1,12.8,-5.4).curveTo(12.8,-7.7,14.3,-9.2).curveTo(15.9,-10.7,18,-10.7).curveTo(20.2,-10.7,21.5,-9.3).curveTo(23,-7.7,23.1,-5.6).curveTo(23.1,-3.3,21.6,-1.8).curveTo(20.2,-0.3,17.9,-0.3).curveTo(15.7,-0.3,14.3,-1.8).closePath().moveTo(15.8,-8.8).curveTo(14.9,-7.6,15,-5.6).curveTo(15,-3.9,15.7,-2.6).curveTo(16.6,-1.1,18.1,-1).curveTo(19.6,-1,20.3,-2.4).curveTo(21,-3.5,20.9,-5.2).curveTo(20.9,-7.1,20.3,-8.3).curveTo(19.4,-9.9,17.8,-9.9).curveTo(16.5,-9.9,15.8,-8.8).closePath().moveTo(5.1,-1.6).curveTo(3.7,-3,3.7,-5.2).curveTo(3.7,-7.4,5.2,-8.9).curveTo(6.7,-10.7,9.6,-10.7).curveTo(10.8,-10.7,11.8,-10.2).curveTo(12.2,-10,12.2,-9.3).curveTo(12.2,-8.9,11.9,-8.7).curveTo(11.9,-8.6,11.9,-8.5).curveTo(11.8,-8.5,11.8,-8.5).curveTo(11.7,-8.4,11.7,-8.4).curveTo(11.7,-8.4,11.6,-8.4).lineTo(11.3,-8.5).curveTo(10.1,-9.8,8.8,-9.8).curveTo(7.4,-9.8,6.4,-8.9).curveTo(5.5,-7.7,5.5,-5.9).curveTo(5.5,-4.2,6.4,-3).curveTo(7.5,-1.6,9.4,-1.7).curveTo(10.4,-1.7,11.1,-2.1).curveTo(11.6,-2.4,12.2,-3.2).lineTo(12.4,-3.1).lineTo(12.5,-2.8).curveTo(12,-1.6,10.7,-0.9).curveTo(9.6,-0.3,8.5,-0.3).curveTo(6.4,-0.3,5.1,-1.6).closePath().moveTo(-25.2,-1.8).curveTo(-26.6,-3.1,-26.6,-5.4).curveTo(-26.6,-7.7,-25.1,-9.2).curveTo(-23.7,-10.7,-21.5,-10.7).curveTo(-19.4,-10.7,-18,-9.3).curveTo(-16.5,-7.7,-16.4,-5.6).curveTo(-16.4,-3.3,-17.9,-1.8).curveTo(-19.4,-0.3,-21.6,-0.3).curveTo(-23.8,-0.3,-25.2,-1.8).closePath().moveTo(-23.7,-8.8).curveTo(-24.6,-7.6,-24.5,-5.6).curveTo(-24.5,-3.9,-23.8,-2.6).curveTo(-22.9,-1.1,-21.4,-1).curveTo(-19.9,-1,-19.2,-2.4).curveTo(-18.6,-3.5,-18.6,-5.2).curveTo(-18.6,-7.1,-19.2,-8.3).curveTo(-20.2,-9.9,-21.8,-9.9).curveTo(-23,-9.9,-23.7,-8.8).closePath().moveTo(-45.4,-1).curveTo(-45.5,-1.1,-45.5,-1.2).curveTo(-45.6,-1.3,-45.6,-1.3).curveTo(-45.7,-1.4,-45.7,-1.4).curveTo(-45.7,-1.4,-45.8,-1.4).lineTo(-46.1,-1.3).lineTo(-46.8,-0.9).lineTo(-47.6,-0.6).curveTo(-48.1,-0.3,-48.5,-0.3).curveTo(-49.5,-0.3,-50.3,-0.9).curveTo(-51,-1.6,-51.1,-2.6).curveTo(-51.1,-3.3,-50.6,-3.8).curveTo(-50.1,-4.2,-49,-4.7).lineTo(-46.1,-5.7).curveTo(-46,-5.8,-45.9,-5.8).curveTo(-45.9,-5.8,-45.8,-5.8).curveTo(-45.8,-5.9,-45.8,-5.9).curveTo(-45.7,-5.9,-45.7,-6).lineTo(-45.6,-6.4).lineTo(-45.6,-7.6).curveTo(-45.6,-8.5,-45.9,-8.9).curveTo(-46.4,-9.7,-47.4,-9.7).curveTo(-47.9,-9.7,-48.4,-9.5).curveTo(-49,-9.1,-49,-8.6).curveTo(-49,-7.9,-49.2,-7.8).curveTo(-49.8,-7.3,-50.6,-7.3).curveTo(-50.7,-7.3,-50.8,-7.4).curveTo(-50.8,-7.4,-50.9,-7.4).curveTo(-50.9,-7.5,-50.9,-7.5).curveTo(-50.9,-7.6,-50.9,-7.7).curveTo(-50.9,-8.5,-49.3,-9.7).curveTo(-47.8,-10.7,-46.4,-10.7).curveTo(-45.1,-10.6,-44.4,-9.9).curveTo(-43.8,-9.2,-43.9,-7.8).lineTo(-44,-3.5).curveTo(-44.1,-1.4,-42.8,-1.4).lineTo(-42.3,-1.6).lineTo(-42,-1.8).curveTo(-41.9,-1.7,-41.9,-1.7).curveTo(-41.8,-1.7,-41.8,-1.7).curveTo(-41.8,-1.6,-41.8,-1.6).curveTo(-41.7,-1.5,-41.7,-1.4).curveTo(-41.7,-1.3,-42.4,-0.8).curveTo(-43,-0.3,-43.9,-0.3).curveTo(-44.8,-0.3,-45.4,-1).closePath().moveTo(-47,-4.7).curveTo(-48.2,-4.2,-48.6,-3.9).curveTo(-49.1,-3.6,-49.1,-2.9).curveTo(-49.1,-2.4,-48.8,-2).curveTo(-48.3,-1.4,-47.6,-1.4).curveTo(-47.2,-1.4,-46.8,-1.6).curveTo(-46.3,-1.8,-46.1,-2).curveTo(-45.8,-2.2,-45.8,-2.6).lineTo(-45.8,-3.2).lineTo(-45.7,-4.6).curveTo(-45.7,-4.7,-45.7,-4.8).curveTo(-45.7,-4.8,-45.8,-4.9).curveTo(-45.8,-4.9,-45.9,-4.9).curveTo(-45.9,-5,-46,-5).curveTo(-46.3,-5,-47,-4.7).closePath().moveTo(41.7,-1.8).curveTo(40.2,-3,40.2,-4.8).curveTo(40.2,-7.6,43,-8.8).curveTo(42,-9.8,42,-10.9).curveTo(42,-12.1,42.9,-13).curveTo(43.8,-13.9,45.1,-13.9).curveTo(46,-13.9,46.7,-13.5).curveTo(47.4,-12.9,47.4,-12.1).curveTo(47.4,-11.2,46.7,-10.8).curveTo(46.2,-10.3,45.7,-10.4).curveTo(45.2,-10.3,45.5,-10.8).lineTo(45.7,-11.1).curveTo(45.9,-11.4,45.7,-11.8).curveTo(45.6,-12.2,45.2,-12.5).curveTo(44.9,-12.8,44.3,-12.8).curveTo(43.7,-12.8,43.2,-12.5).curveTo(42.8,-12.1,42.8,-11.5).curveTo(42.8,-10.8,43.2,-10.4).curveTo(43.7,-9.9,44.9,-9.2).curveTo(47.1,-8.1,47.9,-7.3).curveTo(49.5,-6,50.6,-3.7).curveTo(51.4,-4.8,51.4,-6.1).curveTo(51.4,-6.9,50.9,-7.8).curveTo(50.6,-8.2,50,-8.2).curveTo(49.3,-8.3,48.7,-7.9).lineTo(48.4,-7.8).curveTo(48.3,-7.8,48.3,-8.3).curveTo(48.3,-8.9,49,-9.3).curveTo(49.5,-9.7,50.4,-9.8).lineTo(51.7,-9.7).lineTo(52.6,-9.5).curveTo(53,-9.5,53.2,-9.7).lineTo(53.2,-9.8).lineTo(53.3,-9.8).curveTo(53.4,-9.8,53.4,-9.8).curveTo(53.5,-9.8,53.5,-9.8).curveTo(53.5,-9.7,53.6,-9.7).curveTo(53.6,-9.7,53.6,-9.7).curveTo(53.6,-8.3,51.9,-7.9).curveTo(52.3,-7.2,52.2,-6.3).curveTo(52.3,-4.6,51,-3.1).curveTo(51.6,-2.1,52.1,-1.7).curveTo(52.7,-1.3,53.6,-1.2).lineTo(54.2,-1.4).lineTo(54.7,-1.5).curveTo(54.7,-1.5,54.7,-1.4).curveTo(54.8,-1.4,54.8,-1.4).curveTo(54.8,-1.4,54.8,-1.4).curveTo(54.8,-1.3,54.8,-1.3).curveTo(54.9,-1,54.1,-0.7).curveTo(53.5,-0.5,52.4,-0.5).curveTo(51.5,-0.5,50.9,-0.7).curveTo(50.3,-1,49.4,-1.8).curveTo(48.2,-1,47.4,-0.7).curveTo(46.5,-0.5,45.5,-0.5).curveTo(43.1,-0.5,41.7,-1.8).closePath().moveTo(42.1,-6.3).curveTo(42,-4.4,43.4,-2.9).curveTo(44.8,-1.5,46.6,-1.6).lineTo(47.7,-1.7).lineTo(49,-2.2).lineTo(47.9,-3.6).lineTo(47.4,-4.4).curveTo(46.5,-5.7,45.6,-6.6).curveTo(45,-7.1,44,-7.9).lineTo(43.5,-8.2).curveTo(42.1,-7.9,42.1,-6.3).closePath().moveTo(-87.5,-18.7).lineTo(-81.2,-18.7).lineTo(-81.2,-6.7).lineTo(-87.5,-0.5).closePath().moveTo(-106.7,-0.5).lineTo(-106.7,-6.7).lineTo(-94.7,-6.7).lineTo(-88.3,-0.5).closePath().moveTo(88.1,-0.7).lineTo(85.8,-0.6).lineTo(85.7,-0.9).lineTo(85.7,-1.2).lineTo(86.3,-1.3).curveTo(86.9,-1.4,87.1,-1.8).curveTo(87.3,-2,87.2,-3.4).lineTo(87.2,-7.7).curveTo(87.2,-8.5,87.2,-8.7).curveTo(87.1,-8.9,86.5,-9.2).lineTo(86.3,-9.3).lineTo(86.2,-9.6).lineTo(86.3,-9.8).lineTo(87.7,-10.4).lineTo(88.9,-10.9).curveTo(89,-10.9,89,-10.9).curveTo(89.1,-10.9,89.1,-10.9).curveTo(89.1,-10.9,89.1,-10.9).curveTo(89.1,-10.9,89.1,-10.8).lineTo(89.1,-7.8).lineTo(89.1,-3.4).curveTo(89.1,-2,89.2,-1.8).curveTo(89.3,-1.4,90,-1.3).lineTo(90.5,-1.2).curveTo(90.5,-1.2,90.5,-1.1).curveTo(90.5,-1.1,90.6,-1.1).curveTo(90.6,-1,90.6,-1).curveTo(90.6,-0.9,90.6,-0.9).lineTo(90.5,-0.6).lineTo(88.1,-0.7).closePath().moveTo(-12.9,-0.7).lineTo(-15.2,-0.6).lineTo(-15.4,-0.9).lineTo(-15.3,-1.2).lineTo(-14.7,-1.3).curveTo(-14.1,-1.4,-13.9,-1.8).curveTo(-13.8,-2,-13.8,-3.4).lineTo(-13.8,-7.7).lineTo(-13.9,-8.7).lineTo(-14.5,-9.2).lineTo(-14.7,-9.3).curveTo(-14.7,-9.4,-14.8,-9.4).curveTo(-14.8,-9.4,-14.8,-9.5).curveTo(-14.8,-9.5,-14.8,-9.5).curveTo(-14.8,-9.6,-14.8,-9.6).lineTo(-14.7,-9.8).lineTo(-13.5,-10.4).lineTo(-12.2,-10.9).lineTo(-12,-10.8).lineTo(-12,-9.3).lineTo(-11.9,-9.2).lineTo(-10.6,-10.1).curveTo(-9.9,-10.7,-9.3,-10.7).curveTo(-8.8,-10.6,-8.5,-10.4).curveTo(-8.2,-10.1,-8.2,-9.7).curveTo(-8.2,-9.1,-8.5,-8.8).curveTo(-8.9,-8.5,-9.2,-8.5).lineTo(-9.8,-8.8).curveTo(-10.4,-9.1,-10.9,-9.1).curveTo(-11.3,-9.1,-11.7,-8.7).curveTo(-12.1,-8.1,-12,-6.7).lineTo(-12,-3.4).curveTo(-12.1,-2,-11.9,-1.8).curveTo(-11.7,-1.4,-11,-1.3).lineTo(-10.1,-1.2).curveTo(-10.1,-1.2,-10.1,-1.1).curveTo(-10.1,-1.1,-10.1,-1).curveTo(-10.1,-1,-10.1,-0.9).curveTo(-10.1,-0.9,-10.1,-0.9).lineTo(-10.2,-0.6).lineTo(-12.9,-0.7).closePath().moveTo(-29.8,-0.7).lineTo(-32.2,-0.6).curveTo(-32.2,-0.6,-32.3,-0.6).curveTo(-32.3,-0.7,-32.3,-0.7).curveTo(-32.4,-0.7,-32.4,-0.8).curveTo(-32.4,-0.8,-32.4,-0.9).curveTo(-32.4,-0.9,-32.4,-0.9).curveTo(-32.4,-1,-32.4,-1).curveTo(-32.4,-1.1,-32.3,-1.1).curveTo(-32.3,-1.2,-32.3,-1.2).lineTo(-31.7,-1.3).curveTo(-31.1,-1.4,-30.9,-1.8).curveTo(-30.8,-2,-30.8,-3.4).lineTo(-30.8,-14.4).curveTo(-30.8,-15.6,-30.9,-15.9).curveTo(-31,-16.2,-31.6,-16.5).lineTo(-31.8,-16.7).lineTo(-31.9,-16.9).lineTo(-31.8,-17.2).curveTo(-29.9,-17.7,-29.2,-18.1).curveTo(-29.2,-18.1,-29.1,-18.1).curveTo(-29.1,-18.1,-29,-18.1).curveTo(-29,-18.1,-29,-18.1).curveTo(-29,-18,-29,-18).lineTo(-29,-15).lineTo(-29,-3.4).curveTo(-29,-2,-28.9,-1.8).curveTo(-28.7,-1.4,-28.1,-1.3).lineTo(-27.4,-1.2).curveTo(-27.4,-1.2,-27.4,-1.1).curveTo(-27.4,-1.1,-27.4,-1.1).curveTo(-27.4,-1,-27.4,-1).curveTo(-27.4,-0.9,-27.4,-0.9).lineTo(-27.5,-0.6).lineTo(-29.8,-0.7).closePath().moveTo(-62.1,-0.7).lineTo(-64.9,-0.6).lineTo(-65,-0.9).curveTo(-65,-0.9,-65,-0.9).curveTo(-65,-1,-65,-1).curveTo(-65,-1.1,-64.9,-1.1).curveTo(-64.9,-1.2,-64.9,-1.2).lineTo(-64.4,-1.3).curveTo(-63.5,-1.4,-63.3,-1.9).curveTo(-63.1,-2.4,-63.1,-4.3).lineTo(-63.1,-13.6).curveTo(-63.1,-15.1,-63.3,-15.4).curveTo(-63.6,-16,-64.3,-16).lineTo(-65,-16.1).curveTo(-65.1,-16.1,-65.1,-16.2).curveTo(-65.2,-16.2,-65.2,-16.2).curveTo(-65.2,-16.3,-65.2,-16.3).curveTo(-65.2,-16.4,-65.2,-16.4).curveTo(-65.2,-16.5,-65.2,-16.5).curveTo(-65.2,-16.6,-65.2,-16.6).curveTo(-65.2,-16.7,-65.1,-16.7).curveTo(-65.1,-16.7,-65,-16.8).curveTo(-63.1,-16.9,-59.8,-16.9).curveTo(-57,-16.9,-55.7,-16.2).curveTo(-53.9,-15.3,-53.9,-13.2).curveTo(-53.9,-12,-54.5,-11.1).curveTo(-55.1,-10.3,-56.3,-9.8).curveTo(-56.3,-9.6,-55.9,-9.5).curveTo(-54.6,-9.2,-53.8,-8.2).curveTo(-52.6,-7.1,-52.6,-5.4).curveTo(-52.6,-3.1,-54.2,-1.8).curveTo(-55.9,-0.6,-59.1,-0.6).lineTo(-62.1,-0.7).closePath().moveTo(-61,-8.9).lineTo(-61.1,-8.3).lineTo(-61.1,-4.7).curveTo(-61.1,-2.6,-60.6,-2).curveTo(-60,-1.4,-58.6,-1.4).curveTo(-57,-1.4,-55.9,-2.1).curveTo(-54.8,-3.1,-54.8,-4.8).curveTo(-54.8,-6.5,-55.9,-7.7).curveTo(-57,-9,-59.7,-8.9).curveTo(-60.6,-9,-61,-8.9).closePath().moveTo(-60.7,-16).lineTo(-61,-15.9).lineTo(-61.1,-15.3).lineTo(-61.1,-10.4).curveTo(-61.1,-9.9,-61,-9.8).curveTo(-60.7,-9.6,-59.8,-9.7).curveTo(-57.8,-9.8,-57,-10.5).curveTo(-56,-11.2,-56,-12.8).curveTo(-55.9,-14.5,-57,-15.4).curveTo(-58.1,-16.1,-59.6,-16.2).curveTo(-60.5,-16.1,-60.7,-16).closePath().moveTo(87.1,-13).curveTo(86.8,-13.3,86.8,-13.8).curveTo(86.8,-14.4,87.1,-14.9).curveTo(87.5,-15.2,88,-15.2).curveTo(88.5,-15.1,88.9,-14.8).curveTo(89.3,-14.4,89.2,-13.8).curveTo(89.2,-13.2,88.9,-12.9).curveTo(88.5,-12.7,88,-12.6).curveTo(87.4,-12.7,87.1,-13).closePath();
	this.shape_2.setTransform(190.5269,190.0879,1.6003,1.6003);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_Logo, new cjs.Rectangle(0,0,728,232.3), null);


// stage content:
(lib._21_BAY_030_cmp_bnr_NTXNeuro_SpineTemple_970x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [224];
	// timeline functions:
	this.frame_224 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(224).call(this.frame_224).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(1,1,1).moveTo(-485,-125).lineTo(485,-125).lineTo(485,125).lineTo(-485,125).closePath();
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(225));

	// txt_healthySpines
	this.instance = new lib.txt_healthySpines();
	this.instance.setTransform(116.15,55.95,1,1,0,0,0,103,17.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({_off:false},0).to({x:136.15,alpha:1},9,cjs.Ease.quadOut).wait(57));

	// ctaBtn
	this.instance_1 = new lib.ctaBtn();
	this.instance_1.setTransform(149.55,545.5,1,1,0,0,0,87.5,22.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(171).to({_off:false},0).to({alpha:1},9).wait(45));

	// BSWH_Logo
	this.instance_2 = new lib.BSWH_Logo();
	this.instance_2.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(161).to({_off:false},0).to({alpha:1},10).wait(54));

	// txt_doWhatYou
	this.instance_3 = new lib.txt_doWhatYou();
	this.instance_3.setTransform(106.65,55.6,1,1,0,0,0,87.5,17.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:122.65,alpha:1},10,cjs.Ease.quadOut).wait(137).to({x:422.65,alpha:0},9,cjs.Ease.quadIn).wait(69));

	// txt_better (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_64 = new cjs.Graphics().moveTo(119.6,57.6).curveTo(118.1,56.2,118.1,54).curveTo(118.1,51.7,119.6,50.2).curveTo(121,48.8,123.2,48.8).curveTo(125.5,48.8,126.9,50.2).curveTo(128.3,51.7,128.3,54).curveTo(128.3,56.2,126.9,57.6).curveTo(125.5,59,123.2,59).curveTo(120.9,59,119.6,57.6).closePath().moveTo(76.1,57.8).curveTo(73.4,56.7,71.5,54.8).curveTo(69.7,52.8,68.6,50.2).curveTo(67.6,47.5,67.6,44.5).curveTo(67.6,41.5,68.7,38.9).curveTo(69.9,36.2,71.7,34.2).curveTo(73.7,32.3,76.4,31.1).curveTo(79.1,30.1,82.2,30.1).curveTo(85.4,30.1,88.1,31.1).curveTo(90.8,32.2,92.7,34.1).curveTo(94.6,36,95.6,38.7).curveTo(96.7,41.3,96.7,44.3).lineTo(96.7,47.4).lineTo(76,47.4).curveTo(76.7,49.5,78.4,50.6).curveTo(80,51.8,82.4,51.8).curveTo(84.4,51.8,85.8,51).curveTo(87.3,50.2,88.1,48.8).lineTo(95.2,52.8).curveTo(93,55.8,90,57.4).curveTo(87,59,82.3,59).curveTo(78.9,59,76.1,57.8).closePath().moveTo(88.1,41).curveTo(87.4,39.1,86,38.2).curveTo(84.4,37.3,82.3,37.3).curveTo(80.1,37.3,78.6,38.2).curveTo(77,39.2,76.2,41).lineTo(88.1,41).lineTo(88.1,41).closePath().moveTo(56,58.3).curveTo(54.3,57.8,53.1,56.5).curveTo(51.8,55.1,51.1,53.1).curveTo(50.4,51,50.4,47.8).lineTo(50.4,38.2).lineTo(45.6,38.2).lineTo(45.6,30.6).lineTo(50.4,30.6).lineTo(50.4,24.5).lineTo(59,19.8).lineTo(59,30.6).lineTo(65.9,30.6).lineTo(65.9,38.2).lineTo(59,38.2).lineTo(59,47.3).curveTo(59,49.4,59.6,50.2).curveTo(60.3,50.9,61.5,50.9).curveTo(62.7,50.9,63.7,49.9).lineTo(67.6,56.5).curveTo(66.1,57.6,64.3,58.3).curveTo(62.4,59,60.3,59).curveTo(57.9,59,56,58.3).closePath().moveTo(34.4,58.3).curveTo(32.7,57.8,31.4,56.5).curveTo(30.2,55.1,29.5,53.1).curveTo(28.8,51,28.8,47.8).lineTo(28.8,38.2).lineTo(24,38.2).lineTo(24,30.6).lineTo(28.8,30.6).lineTo(28.8,24.5).lineTo(37.4,19.8).lineTo(37.4,30.6).lineTo(44.2,30.6).lineTo(44.2,38.2).lineTo(37.4,38.2).lineTo(37.4,47.3).curveTo(37.4,49.4,38,50.2).curveTo(38.7,50.9,39.9,50.9).curveTo(41,50.9,42.1,49.9).lineTo(46,56.5).curveTo(44.5,57.6,42.6,58.3).curveTo(40.7,59,38.6,59).curveTo(36.3,59,34.4,58.3).closePath().moveTo(2.2,57.8).curveTo(-0.5,56.7,-2.4,54.8).curveTo(-4.3,52.8,-5.3,50.2).curveTo(-6.3,47.5,-6.3,44.5).curveTo(-6.3,41.5,-5.2,38.9).curveTo(-4,36.2,-2.2,34.2).curveTo(-0.2,32.3,2.5,31.1).curveTo(5.2,30.1,8.3,30.1).curveTo(11.5,30.1,14.2,31.1).curveTo(16.9,32.2,18.8,34.1).curveTo(20.7,36,21.7,38.7).curveTo(22.8,41.3,22.8,44.3).lineTo(22.8,47.4).lineTo(2.1,47.4).curveTo(2.8,49.5,4.5,50.6).curveTo(6.1,51.8,8.5,51.8).curveTo(10.5,51.8,11.9,51).curveTo(13.4,50.2,14.2,48.8).lineTo(21.3,52.8).curveTo(19,55.8,16.1,57.4).curveTo(13.1,59,8.4,59).curveTo(5,59,2.2,57.8).closePath().moveTo(14.2,41).curveTo(13.5,39.1,12.1,38.2).curveTo(10.5,37.3,8.4,37.3).curveTo(6.2,37.3,4.7,38.2).curveTo(3.1,39.2,2.3,41).lineTo(14.2,41).lineTo(14.2,41).closePath().moveTo(99,58.4).lineTo(99,30.6).lineTo(107.5,30.6).lineTo(107.5,34.5).curveTo(108.6,32,110.6,31).curveTo(112.6,30.1,115.4,30.1).curveTo(116.7,30.1,117.9,30.3).lineTo(120.1,31.1).lineTo(117.1,39.8).curveTo(116.5,39.3,115.4,39).curveTo(114.4,38.6,113.1,38.6).curveTo(110.6,38.6,109,40).curveTo(107.5,41.4,107.5,44.7).lineTo(107.5,58.4).closePath().moveTo(-37.6,58.4).lineTo(-37.6,20.8).lineTo(-22.7,20.8).curveTo(-15.8,20.8,-12.3,23.4).curveTo(-9,26.2,-9,31.6).curveTo(-9,34.1,-9.9,35.9).curveTo(-11,37.7,-12.8,39).curveTo(-10.6,40.2,-9.4,42.2).curveTo(-8.3,44.1,-8.3,47).curveTo(-8.3,52.9,-12,55.7).curveTo(-15.9,58.4,-22.7,58.4).closePath().moveTo(-28.8,50.5).lineTo(-22.5,50.5).curveTo(-19.8,50.5,-18.7,49.6).curveTo(-17.4,48.6,-17.4,46.7).curveTo(-17.4,45,-18.6,44.1).curveTo(-19.6,43.2,-22.6,43.2).lineTo(-28.8,43.2).closePath().moveTo(-28.8,35.3).lineTo(-22.2,35.3).curveTo(-19.8,35.3,-18.8,34.3).curveTo(-17.9,33.3,-17.9,31.8).curveTo(-17.9,30.3,-18.9,29.4).curveTo(-19.9,28.6,-22.3,28.6).lineTo(-28.8,28.6).closePath();
	var mask_graphics_148 = new cjs.Graphics().moveTo(119.6,57.6).curveTo(118.1,56.2,118.1,54).curveTo(118.1,51.7,119.6,50.2).curveTo(121,48.8,123.2,48.8).curveTo(125.5,48.8,126.9,50.2).curveTo(128.3,51.7,128.3,54).curveTo(128.3,56.2,126.9,57.6).curveTo(125.5,59,123.2,59).curveTo(120.9,59,119.6,57.6).closePath().moveTo(76.1,57.8).curveTo(73.4,56.7,71.5,54.8).curveTo(69.7,52.8,68.6,50.2).curveTo(67.6,47.5,67.6,44.5).curveTo(67.6,41.5,68.7,38.9).curveTo(69.9,36.2,71.7,34.2).curveTo(73.7,32.3,76.4,31.1).curveTo(79.1,30.1,82.2,30.1).curveTo(85.4,30.1,88.1,31.1).curveTo(90.8,32.2,92.7,34.1).curveTo(94.6,36,95.6,38.7).curveTo(96.7,41.3,96.7,44.3).lineTo(96.7,47.4).lineTo(76,47.4).curveTo(76.7,49.5,78.4,50.6).curveTo(80,51.8,82.4,51.8).curveTo(84.4,51.8,85.8,51).curveTo(87.3,50.2,88.1,48.8).lineTo(95.2,52.8).curveTo(93,55.8,90,57.4).curveTo(87,59,82.3,59).curveTo(78.9,59,76.1,57.8).closePath().moveTo(88.1,41).curveTo(87.4,39.1,86,38.2).curveTo(84.4,37.3,82.3,37.3).curveTo(80.1,37.3,78.6,38.2).curveTo(77,39.2,76.2,41).lineTo(88.1,41).lineTo(88.1,41).closePath().moveTo(56,58.3).curveTo(54.3,57.8,53.1,56.5).curveTo(51.8,55.1,51.1,53.1).curveTo(50.4,51,50.4,47.8).lineTo(50.4,38.2).lineTo(45.6,38.2).lineTo(45.6,30.6).lineTo(50.4,30.6).lineTo(50.4,24.5).lineTo(59,19.8).lineTo(59,30.6).lineTo(65.9,30.6).lineTo(65.9,38.2).lineTo(59,38.2).lineTo(59,47.3).curveTo(59,49.4,59.6,50.2).curveTo(60.3,50.9,61.5,50.9).curveTo(62.7,50.9,63.7,49.9).lineTo(67.6,56.5).curveTo(66.1,57.6,64.3,58.3).curveTo(62.4,59,60.3,59).curveTo(57.9,59,56,58.3).closePath().moveTo(34.4,58.3).curveTo(32.7,57.8,31.4,56.5).curveTo(30.2,55.1,29.5,53.1).curveTo(28.8,51,28.8,47.8).lineTo(28.8,38.2).lineTo(24,38.2).lineTo(24,30.6).lineTo(28.8,30.6).lineTo(28.8,24.5).lineTo(37.4,19.8).lineTo(37.4,30.6).lineTo(44.2,30.6).lineTo(44.2,38.2).lineTo(37.4,38.2).lineTo(37.4,47.3).curveTo(37.4,49.4,38,50.2).curveTo(38.7,50.9,39.9,50.9).curveTo(41,50.9,42.1,49.9).lineTo(46,56.5).curveTo(44.5,57.6,42.6,58.3).curveTo(40.7,59,38.6,59).curveTo(36.3,59,34.4,58.3).closePath().moveTo(2.2,57.8).curveTo(-0.5,56.7,-2.4,54.8).curveTo(-4.3,52.8,-5.3,50.2).curveTo(-6.3,47.5,-6.3,44.5).curveTo(-6.3,41.5,-5.2,38.9).curveTo(-4,36.2,-2.2,34.2).curveTo(-0.2,32.3,2.5,31.1).curveTo(5.2,30.1,8.3,30.1).curveTo(11.5,30.1,14.2,31.1).curveTo(16.9,32.2,18.8,34.1).curveTo(20.7,36,21.7,38.7).curveTo(22.8,41.3,22.8,44.3).lineTo(22.8,47.4).lineTo(2.1,47.4).curveTo(2.8,49.5,4.5,50.6).curveTo(6.1,51.8,8.5,51.8).curveTo(10.5,51.8,11.9,51).curveTo(13.4,50.2,14.2,48.8).lineTo(21.3,52.8).curveTo(19,55.8,16.1,57.4).curveTo(13.1,59,8.4,59).curveTo(5,59,2.2,57.8).closePath().moveTo(14.2,41).curveTo(13.5,39.1,12.1,38.2).curveTo(10.5,37.3,8.4,37.3).curveTo(6.2,37.3,4.7,38.2).curveTo(3.1,39.2,2.3,41).lineTo(14.2,41).lineTo(14.2,41).closePath().moveTo(99,58.4).lineTo(99,30.6).lineTo(107.5,30.6).lineTo(107.5,34.5).curveTo(108.6,32,110.6,31).curveTo(112.6,30.1,115.4,30.1).curveTo(116.7,30.1,117.9,30.3).lineTo(120.1,31.1).lineTo(117.1,39.8).curveTo(116.5,39.3,115.4,39).curveTo(114.4,38.6,113.1,38.6).curveTo(110.6,38.6,109,40).curveTo(107.5,41.4,107.5,44.7).lineTo(107.5,58.4).closePath().moveTo(-37.6,58.4).lineTo(-37.6,20.8).lineTo(-22.7,20.8).curveTo(-15.8,20.8,-12.3,23.4).curveTo(-9,26.2,-9,31.6).curveTo(-9,34.1,-9.9,35.9).curveTo(-11,37.7,-12.8,39).curveTo(-10.6,40.2,-9.4,42.2).curveTo(-8.3,44.1,-8.3,47).curveTo(-8.3,52.9,-12,55.7).curveTo(-15.9,58.4,-22.7,58.4).closePath().moveTo(-28.8,50.5).lineTo(-22.5,50.5).curveTo(-19.8,50.5,-18.7,49.6).curveTo(-17.4,48.6,-17.4,46.7).curveTo(-17.4,45,-18.6,44.1).curveTo(-19.6,43.2,-22.6,43.2).lineTo(-28.8,43.2).closePath().moveTo(-28.8,35.3).lineTo(-22.2,35.3).curveTo(-19.8,35.3,-18.8,34.3).curveTo(-17.9,33.3,-17.9,31.8).curveTo(-17.9,30.3,-18.9,29.4).curveTo(-19.9,28.6,-22.3,28.6).lineTo(-28.8,28.6).closePath();
	var mask_graphics_149 = new cjs.Graphics().moveTo(121.3,57.6).curveTo(119.9,56.2,119.9,54).curveTo(119.9,51.7,121.3,50.2).curveTo(122.7,48.8,125,48.8).curveTo(127.2,48.8,128.6,50.2).curveTo(130,51.7,130,54).curveTo(130,56.2,128.6,57.6).curveTo(127.2,59,125,59).curveTo(122.6,59,121.3,57.6).closePath().moveTo(77.9,57.8).curveTo(75.1,56.7,73.3,54.8).curveTo(71.4,52.8,70.3,50.2).curveTo(69.3,47.5,69.3,44.5).curveTo(69.3,41.5,70.4,38.9).curveTo(71.6,36.2,73.4,34.2).curveTo(75.5,32.3,78.2,31.1).curveTo(80.8,30.1,83.9,30.1).curveTo(87.1,30.1,89.8,31.1).curveTo(92.5,32.2,94.4,34.1).curveTo(96.4,36,97.4,38.7).curveTo(98.4,41.3,98.4,44.3).lineTo(98.4,47.4).lineTo(77.7,47.4).curveTo(78.4,49.5,80.1,50.6).curveTo(81.7,51.8,84.1,51.8).curveTo(86.2,51.8,87.5,51).curveTo(89,50.2,89.9,48.8).lineTo(96.9,52.8).curveTo(94.7,55.8,91.7,57.4).curveTo(88.7,59,84.1,59).curveTo(80.6,59,77.9,57.8).closePath().moveTo(89.9,41).curveTo(89.1,39.1,87.7,38.2).curveTo(86.2,37.3,84.1,37.3).curveTo(81.9,37.3,80.3,38.2).curveTo(78.7,39.2,77.9,41).lineTo(89.9,41).lineTo(89.9,41).closePath().moveTo(57.8,58.3).curveTo(56,57.8,54.8,56.5).curveTo(53.5,55.1,52.8,53.1).curveTo(52.2,51,52.2,47.8).lineTo(52.2,38.2).lineTo(47.4,38.2).lineTo(47.4,30.6).lineTo(52.2,30.6).lineTo(52.2,24.5).lineTo(60.8,19.8).lineTo(60.8,30.6).lineTo(67.6,30.6).lineTo(67.6,38.2).lineTo(60.8,38.2).lineTo(60.8,47.3).curveTo(60.8,49.4,61.3,50.2).curveTo(62.1,50.9,63.2,50.9).curveTo(64.4,50.9,65.4,49.9).lineTo(69.3,56.5).curveTo(67.8,57.6,66,58.3).curveTo(64.1,59,62,59).curveTo(59.7,59,57.8,58.3).closePath().moveTo(36.1,58.3).curveTo(34.4,57.8,33.2,56.5).curveTo(31.9,55.1,31.2,53.1).curveTo(30.5,51,30.5,47.8).lineTo(30.5,38.2).lineTo(25.7,38.2).lineTo(25.7,30.6).lineTo(30.5,30.6).lineTo(30.5,24.5).lineTo(39.1,19.8).lineTo(39.1,30.6).lineTo(46,30.6).lineTo(46,38.2).lineTo(39.1,38.2).lineTo(39.1,47.3).curveTo(39.1,49.4,39.7,50.2).curveTo(40.4,50.9,41.6,50.9).curveTo(42.8,50.9,43.8,49.9).lineTo(47.7,56.5).curveTo(46.2,57.6,44.4,58.3).curveTo(42.5,59,40.4,59).curveTo(38,59,36.1,58.3).closePath().moveTo(4,57.8).curveTo(1.2,56.7,-0.6,54.8).curveTo(-2.5,52.8,-3.6,50.2).curveTo(-4.6,47.5,-4.6,44.5).curveTo(-4.6,41.5,-3.5,38.9).curveTo(-2.3,36.2,-0.5,34.2).curveTo(1.6,32.3,4.2,31.1).curveTo(6.9,30.1,10,30.1).curveTo(13.2,30.1,15.9,31.1).curveTo(18.6,32.2,20.5,34.1).curveTo(22.5,36,23.5,38.7).curveTo(24.5,41.3,24.5,44.3).lineTo(24.5,47.4).lineTo(3.8,47.4).curveTo(4.5,49.5,6.2,50.6).curveTo(7.8,51.8,10.2,51.8).curveTo(12.3,51.8,13.6,51).curveTo(15.1,50.2,16,48.8).lineTo(23,52.8).curveTo(20.8,55.8,17.8,57.4).curveTo(14.8,59,10.1,59).curveTo(6.7,59,4,57.8).closePath().moveTo(16,41).curveTo(15.2,39.1,13.8,38.2).curveTo(12.3,37.3,10.1,37.3).curveTo(8,37.3,6.4,38.2).curveTo(4.8,39.2,4,41).lineTo(16,41).lineTo(16,41).closePath().moveTo(100.7,58.4).lineTo(100.7,30.6).lineTo(109.2,30.6).lineTo(109.2,34.5).curveTo(110.3,32,112.4,31).curveTo(114.3,30.1,117.1,30.1).curveTo(118.4,30.1,119.7,30.3).lineTo(121.8,31.1).lineTo(118.8,39.8).curveTo(118.2,39.3,117.1,39).curveTo(116.1,38.6,114.9,38.6).curveTo(112.3,38.6,110.8,40).curveTo(109.2,41.4,109.2,44.7).lineTo(109.2,58.4).closePath().moveTo(-35.9,58.4).lineTo(-35.9,20.8).lineTo(-20.9,20.8).curveTo(-14.1,20.8,-10.6,23.4).curveTo(-7.3,26.2,-7.3,31.6).curveTo(-7.3,34.1,-8.2,35.9).curveTo(-9.3,37.7,-11,39).curveTo(-8.9,40.2,-7.7,42.2).curveTo(-6.5,44.1,-6.5,47).curveTo(-6.5,52.9,-10.3,55.7).curveTo(-14.2,58.4,-20.9,58.4).closePath().moveTo(-27.1,50.5).lineTo(-20.7,50.5).curveTo(-18.1,50.5,-16.9,49.6).curveTo(-15.7,48.6,-15.7,46.7).curveTo(-15.7,45,-16.9,44.1).curveTo(-17.9,43.2,-20.9,43.2).lineTo(-27.1,43.2).closePath().moveTo(-27.1,35.3).lineTo(-20.5,35.3).curveTo(-18.1,35.3,-17.1,34.3).curveTo(-16.1,33.3,-16.1,31.8).curveTo(-16.1,30.3,-17.2,29.4).curveTo(-18.2,28.6,-20.6,28.6).lineTo(-27.1,28.6).closePath();
	var mask_graphics_150 = new cjs.Graphics().moveTo(126.5,57.6).curveTo(125.1,56.2,125.1,54).curveTo(125.1,51.7,126.5,50.2).curveTo(127.9,48.8,130.2,48.8).curveTo(132.4,48.8,133.8,50.2).curveTo(135.2,51.7,135.2,54).curveTo(135.2,56.2,133.8,57.6).curveTo(132.4,59,130.2,59).curveTo(127.8,59,126.5,57.6).closePath().moveTo(83,57.8).curveTo(80.3,56.7,78.5,54.8).curveTo(76.6,52.8,75.5,50.2).curveTo(74.5,47.5,74.5,44.5).curveTo(74.5,41.5,75.6,38.9).curveTo(76.8,36.2,78.6,34.2).curveTo(80.6,32.3,83.3,31.1).curveTo(86,30.1,89.1,30.1).curveTo(92.3,30.1,95,31.1).curveTo(97.7,32.2,99.6,34.1).curveTo(101.5,36,102.6,38.7).curveTo(103.6,41.3,103.6,44.3).lineTo(103.6,47.4).lineTo(82.9,47.4).curveTo(83.6,49.5,85.3,50.6).curveTo(86.9,51.8,89.3,51.8).curveTo(91.3,51.8,92.7,51).curveTo(94.2,50.2,95.1,48.8).lineTo(102.1,52.8).curveTo(99.9,55.8,96.9,57.4).curveTo(93.9,59,89.2,59).curveTo(85.8,59,83,57.8).closePath().moveTo(95.1,41).curveTo(94.3,39.1,92.9,38.2).curveTo(91.3,37.3,89.2,37.3).curveTo(87.1,37.3,85.5,38.2).curveTo(83.9,39.2,83.1,41).lineTo(95.1,41).lineTo(95.1,41).closePath().moveTo(63,58.3).curveTo(61.2,57.8,60,56.5).curveTo(58.7,55.1,58,53.1).curveTo(57.3,51,57.3,47.8).lineTo(57.3,38.2).lineTo(52.5,38.2).lineTo(52.5,30.6).lineTo(57.3,30.6).lineTo(57.3,24.5).lineTo(65.9,19.8).lineTo(65.9,30.6).lineTo(72.8,30.6).lineTo(72.8,38.2).lineTo(65.9,38.2).lineTo(65.9,47.3).curveTo(65.9,49.4,66.5,50.2).curveTo(67.2,50.9,68.4,50.9).curveTo(69.6,50.9,70.6,49.9).lineTo(74.5,56.5).curveTo(73,57.6,71.2,58.3).curveTo(69.3,59,67.2,59).curveTo(64.8,59,63,58.3).closePath().moveTo(41.3,58.3).curveTo(39.6,57.8,38.3,56.5).curveTo(37.1,55.1,36.4,53.1).curveTo(35.7,51,35.7,47.8).lineTo(35.7,38.2).lineTo(30.9,38.2).lineTo(30.9,30.6).lineTo(35.7,30.6).lineTo(35.7,24.5).lineTo(44.3,19.8).lineTo(44.3,30.6).lineTo(51.2,30.6).lineTo(51.2,38.2).lineTo(44.3,38.2).lineTo(44.3,47.3).curveTo(44.3,49.4,44.9,50.2).curveTo(45.6,50.9,46.8,50.9).curveTo(48,50.9,49,49.9).lineTo(52.9,56.5).curveTo(51.4,57.6,49.6,58.3).curveTo(47.7,59,45.5,59).curveTo(43.2,59,41.3,58.3).closePath().moveTo(9.1,57.8).curveTo(6.4,56.7,4.6,54.8).curveTo(2.7,52.8,1.6,50.2).curveTo(0.6,47.5,0.6,44.5).curveTo(0.6,41.5,1.7,38.9).curveTo(2.9,36.2,4.7,34.2).curveTo(6.7,32.3,9.4,31.1).curveTo(12.1,30.1,15.2,30.1).curveTo(18.4,30.1,21.1,31.1).curveTo(23.8,32.2,25.7,34.1).curveTo(27.6,36,28.7,38.7).curveTo(29.7,41.3,29.7,44.3).lineTo(29.7,47.4).lineTo(9,47.4).curveTo(9.7,49.5,11.4,50.6).curveTo(13,51.8,15.4,51.8).curveTo(17.4,51.8,18.8,51).curveTo(20.3,50.2,21.2,48.8).lineTo(28.2,52.8).curveTo(26,55.8,23,57.4).curveTo(20,59,15.3,59).curveTo(11.9,59,9.1,57.8).closePath().moveTo(21.2,41).curveTo(20.4,39.1,19,38.2).curveTo(17.4,37.3,15.3,37.3).curveTo(13.1,37.3,11.6,38.2).curveTo(10,39.2,9.2,41).lineTo(21.2,41).lineTo(21.2,41).closePath().moveTo(105.9,58.4).lineTo(105.9,30.6).lineTo(114.4,30.6).lineTo(114.4,34.5).curveTo(115.5,32,117.6,31).curveTo(119.5,30.1,122.3,30.1).curveTo(123.6,30.1,124.8,30.3).lineTo(127,31.1).lineTo(124,39.8).curveTo(123.4,39.3,122.3,39).curveTo(121.3,38.6,120,38.6).curveTo(117.5,38.6,116,40).curveTo(114.4,41.4,114.4,44.7).lineTo(114.4,58.4).closePath().moveTo(-30.7,58.4).lineTo(-30.7,20.8).lineTo(-15.8,20.8).curveTo(-8.9,20.8,-5.4,23.4).curveTo(-2.1,26.2,-2.1,31.6).curveTo(-2.1,34.1,-3,35.9).curveTo(-4.1,37.7,-5.9,39).curveTo(-3.7,40.2,-2.5,42.2).curveTo(-1.3,44.1,-1.3,47).curveTo(-1.3,52.9,-5.1,55.7).curveTo(-9,58.4,-15.8,58.4).closePath().moveTo(-21.9,50.5).lineTo(-15.5,50.5).curveTo(-12.9,50.5,-11.8,49.6).curveTo(-10.5,48.6,-10.5,46.7).curveTo(-10.5,45,-11.7,44.1).curveTo(-12.7,43.2,-15.7,43.2).lineTo(-21.9,43.2).closePath().moveTo(-21.9,35.3).lineTo(-15.3,35.3).curveTo(-12.9,35.3,-11.9,34.3).curveTo(-11,33.3,-11,31.8).curveTo(-11,30.3,-12,29.4).curveTo(-13,28.6,-15.4,28.6).lineTo(-21.9,28.6).closePath();
	var mask_graphics_151 = new cjs.Graphics().moveTo(135.2,57.6).curveTo(133.7,56.2,133.7,54).curveTo(133.7,51.7,135.2,50.2).curveTo(136.5,48.8,138.8,48.8).curveTo(141.1,48.8,142.4,50.2).curveTo(143.8,51.7,143.8,54).curveTo(143.8,56.2,142.4,57.6).curveTo(141.1,59,138.8,59).curveTo(136.5,59,135.2,57.6).closePath().moveTo(91.7,57.8).curveTo(88.9,56.7,87.1,54.8).curveTo(85.2,52.8,84.1,50.2).curveTo(83.2,47.5,83.2,44.5).curveTo(83.2,41.5,84.3,38.9).curveTo(85.4,36.2,87.2,34.2).curveTo(89.3,32.3,92,31.1).curveTo(94.7,30.1,97.7,30.1).curveTo(100.9,30.1,103.6,31.1).curveTo(106.3,32.2,108.2,34.1).curveTo(110.2,36,111.2,38.7).curveTo(112.2,41.3,112.2,44.3).lineTo(112.2,47.4).lineTo(91.5,47.4).curveTo(92.3,49.5,93.9,50.6).curveTo(95.5,51.8,98,51.8).curveTo(100,51.8,101.4,51).curveTo(102.8,50.2,103.7,48.8).lineTo(110.8,52.8).curveTo(108.5,55.8,105.5,57.4).curveTo(102.5,59,97.9,59).curveTo(94.5,59,91.7,57.8).closePath().moveTo(103.7,41).curveTo(103,39.1,101.5,38.2).curveTo(100,37.3,97.9,37.3).curveTo(95.7,37.3,94.2,38.2).curveTo(92.6,39.2,91.8,41).lineTo(103.7,41).lineTo(103.7,41).closePath().moveTo(71.6,58.3).curveTo(69.8,57.8,68.6,56.5).curveTo(67.4,55.1,66.6,53.1).curveTo(66,51,66,47.8).lineTo(66,38.2).lineTo(61.2,38.2).lineTo(61.2,30.6).lineTo(66,30.6).lineTo(66,24.5).lineTo(74.6,19.8).lineTo(74.6,30.6).lineTo(81.4,30.6).lineTo(81.4,38.2).lineTo(74.6,38.2).lineTo(74.6,47.3).curveTo(74.6,49.4,75.2,50.2).curveTo(75.9,50.9,77.1,50.9).curveTo(78.2,50.9,79.2,49.9).lineTo(83.2,56.5).curveTo(81.6,57.6,79.8,58.3).curveTo(77.9,59,75.8,59).curveTo(73.5,59,71.6,58.3).closePath().moveTo(50,58.3).curveTo(48.2,57.8,47,56.5).curveTo(45.7,55.1,45,53.1).curveTo(44.4,51,44.4,47.8).lineTo(44.4,38.2).lineTo(39.6,38.2).lineTo(39.6,30.6).lineTo(44.4,30.6).lineTo(44.4,24.5).lineTo(53,19.8).lineTo(53,30.6).lineTo(59.8,30.6).lineTo(59.8,38.2).lineTo(53,38.2).lineTo(53,47.3).curveTo(53,49.4,53.5,50.2).curveTo(54.3,50.9,55.4,50.9).curveTo(56.6,50.9,57.6,49.9).lineTo(61.5,56.5).curveTo(60,57.6,58.2,58.3).curveTo(56.3,59,54.2,59).curveTo(51.9,59,50,58.3).closePath().moveTo(17.8,57.8).curveTo(15,56.7,13.2,54.8).curveTo(11.3,52.8,10.2,50.2).curveTo(9.3,47.5,9.3,44.5).curveTo(9.3,41.5,10.4,38.9).curveTo(11.5,36.2,13.3,34.2).curveTo(15.4,32.3,18.1,31.1).curveTo(20.8,30.1,23.8,30.1).curveTo(27,30.1,29.7,31.1).curveTo(32.4,32.2,34.3,34.1).curveTo(36.3,36,37.3,38.7).curveTo(38.3,41.3,38.3,44.3).lineTo(38.3,47.4).lineTo(17.6,47.4).curveTo(18.4,49.5,20,50.6).curveTo(21.6,51.8,24,51.8).curveTo(26.1,51.8,27.5,51).curveTo(28.9,50.2,29.8,48.8).lineTo(36.9,52.8).curveTo(34.6,55.8,31.6,57.4).curveTo(28.6,59,24,59).curveTo(20.6,59,17.8,57.8).closePath().moveTo(29.8,41).curveTo(29.1,39.1,27.6,38.2).curveTo(26.1,37.3,24,37.3).curveTo(21.8,37.3,20.3,38.2).curveTo(18.7,39.2,17.9,41).lineTo(29.8,41).lineTo(29.8,41).closePath().moveTo(114.6,58.4).lineTo(114.6,30.6).lineTo(123.1,30.6).lineTo(123.1,34.5).curveTo(124.2,32,126.2,31).curveTo(128.2,30.1,130.9,30.1).curveTo(132.2,30.1,133.5,30.3).lineTo(135.7,31.1).lineTo(132.6,39.8).curveTo(132,39.3,130.9,39).curveTo(129.9,38.6,128.7,38.6).curveTo(126.1,38.6,124.6,40).curveTo(123.1,41.4,123.1,44.7).lineTo(123.1,58.4).closePath().moveTo(-22,58.4).lineTo(-22,20.8).lineTo(-7.1,20.8).curveTo(-0.3,20.8,3.2,23.4).curveTo(6.6,26.2,6.6,31.6).curveTo(6.6,34.1,5.6,35.9).curveTo(4.5,37.7,2.8,39).curveTo(5,40.2,6.1,42.2).curveTo(7.3,44.1,7.3,47).curveTo(7.3,52.9,3.5,55.7).curveTo(-0.3,58.4,-7.1,58.4).closePath().moveTo(-13.2,50.5).lineTo(-6.9,50.5).curveTo(-4.3,50.5,-3.1,49.6).curveTo(-1.9,48.6,-1.9,46.7).curveTo(-1.9,45,-3,44.1).curveTo(-4.1,43.2,-7,43.2).lineTo(-13.2,43.2).closePath().moveTo(-13.2,35.3).lineTo(-6.7,35.3).curveTo(-4.3,35.3,-3.3,34.3).curveTo(-2.3,33.3,-2.3,31.8).curveTo(-2.3,30.3,-3.3,29.4).curveTo(-4.4,28.6,-6.8,28.6).lineTo(-13.2,28.6).closePath();
	var mask_graphics_152 = new cjs.Graphics().moveTo(147.3,57.6).curveTo(145.8,56.2,145.8,54).curveTo(145.8,51.7,147.3,50.2).curveTo(148.6,48.8,150.9,48.8).curveTo(153.2,48.8,154.5,50.2).curveTo(155.9,51.7,155.9,54).curveTo(155.9,56.2,154.5,57.6).curveTo(153.2,59,150.9,59).curveTo(148.6,59,147.3,57.6).closePath().moveTo(103.8,57.8).curveTo(101,56.7,99.2,54.8).curveTo(97.3,52.8,96.2,50.2).curveTo(95.3,47.5,95.3,44.5).curveTo(95.3,41.5,96.4,38.9).curveTo(97.5,36.2,99.3,34.2).curveTo(101.4,32.3,104.1,31.1).curveTo(106.8,30.1,109.8,30.1).curveTo(113,30.1,115.7,31.1).curveTo(118.4,32.2,120.3,34.1).curveTo(122.3,36,123.3,38.7).curveTo(124.3,41.3,124.3,44.3).lineTo(124.3,47.4).lineTo(103.6,47.4).curveTo(104.4,49.5,106,50.6).curveTo(107.6,51.8,110,51.8).curveTo(112.1,51.8,113.5,51).curveTo(114.9,50.2,115.8,48.8).lineTo(122.9,52.8).curveTo(120.6,55.8,117.6,57.4).curveTo(114.6,59,110,59).curveTo(106.6,59,103.8,57.8).closePath().moveTo(115.8,41).curveTo(115.1,39.1,113.6,38.2).curveTo(112.1,37.3,110,37.3).curveTo(107.8,37.3,106.3,38.2).curveTo(104.7,39.2,103.9,41).lineTo(115.8,41).lineTo(115.8,41).closePath().moveTo(83.7,58.3).curveTo(81.9,57.8,80.7,56.5).curveTo(79.5,55.1,78.7,53.1).curveTo(78.1,51,78.1,47.8).lineTo(78.1,38.2).lineTo(73.3,38.2).lineTo(73.3,30.6).lineTo(78.1,30.6).lineTo(78.1,24.5).lineTo(86.7,19.8).lineTo(86.7,30.6).lineTo(93.5,30.6).lineTo(93.5,38.2).lineTo(86.7,38.2).lineTo(86.7,47.3).curveTo(86.7,49.4,87.3,50.2).curveTo(88,50.9,89.2,50.9).curveTo(90.3,50.9,91.3,49.9).lineTo(95.3,56.5).curveTo(93.7,57.6,91.9,58.3).curveTo(90,59,87.9,59).curveTo(85.6,59,83.7,58.3).closePath().moveTo(62.1,58.3).curveTo(60.3,57.8,59.1,56.5).curveTo(57.8,55.1,57.1,53.1).curveTo(56.5,51,56.5,47.8).lineTo(56.5,38.2).lineTo(51.7,38.2).lineTo(51.7,30.6).lineTo(56.5,30.6).lineTo(56.5,24.5).lineTo(65.1,19.8).lineTo(65.1,30.6).lineTo(71.9,30.6).lineTo(71.9,38.2).lineTo(65.1,38.2).lineTo(65.1,47.3).curveTo(65.1,49.4,65.6,50.2).curveTo(66.4,50.9,67.5,50.9).curveTo(68.7,50.9,69.7,49.9).lineTo(73.6,56.5).curveTo(72.1,57.6,70.3,58.3).curveTo(68.4,59,66.3,59).curveTo(64,59,62.1,58.3).closePath().moveTo(29.9,57.8).curveTo(27.1,56.7,25.3,54.8).curveTo(23.4,52.8,22.3,50.2).curveTo(21.4,47.5,21.4,44.5).curveTo(21.4,41.5,22.5,38.9).curveTo(23.6,36.2,25.4,34.2).curveTo(27.5,32.3,30.2,31.1).curveTo(32.9,30.1,35.9,30.1).curveTo(39.1,30.1,41.8,31.1).curveTo(44.5,32.2,46.4,34.1).curveTo(48.4,36,49.4,38.7).curveTo(50.4,41.3,50.4,44.3).lineTo(50.4,47.4).lineTo(29.7,47.4).curveTo(30.5,49.5,32.1,50.6).curveTo(33.7,51.8,36.1,51.8).curveTo(38.2,51.8,39.6,51).curveTo(41,50.2,41.9,48.8).lineTo(49,52.8).curveTo(46.7,55.8,43.7,57.4).curveTo(40.7,59,36.1,59).curveTo(32.6,59,29.9,57.8).closePath().moveTo(41.9,41).curveTo(41.2,39.1,39.7,38.2).curveTo(38.2,37.3,36.1,37.3).curveTo(33.9,37.3,32.4,38.2).curveTo(30.8,39.2,30,41).lineTo(41.9,41).lineTo(41.9,41).closePath().moveTo(126.7,58.4).lineTo(126.7,30.6).lineTo(135.2,30.6).lineTo(135.2,34.5).curveTo(136.3,32,138.3,31).curveTo(140.3,30.1,143,30.1).curveTo(144.3,30.1,145.6,30.3).lineTo(147.8,31.1).lineTo(144.7,39.8).curveTo(144.1,39.3,143,39).curveTo(142,38.6,140.8,38.6).curveTo(138.2,38.6,136.7,40).curveTo(135.2,41.4,135.2,44.7).lineTo(135.2,58.4).closePath().moveTo(-9.9,58.4).lineTo(-9.9,20.8).lineTo(5,20.8).curveTo(11.8,20.8,15.3,23.4).curveTo(18.7,26.2,18.7,31.6).curveTo(18.7,34.1,17.7,35.9).curveTo(16.6,37.7,14.9,39).curveTo(17.1,40.2,18.2,42.2).curveTo(19.4,44.1,19.4,47).curveTo(19.4,52.9,15.6,55.7).curveTo(11.8,58.4,5,58.4).closePath().moveTo(-1.1,50.5).lineTo(5.2,50.5).curveTo(7.8,50.5,9,49.6).curveTo(10.2,48.6,10.2,46.7).curveTo(10.2,45,9.1,44.1).curveTo(8,43.2,5.1,43.2).lineTo(-1.1,43.2).closePath().moveTo(-1.1,35.3).lineTo(5.4,35.3).curveTo(7.8,35.3,8.8,34.3).curveTo(9.8,33.3,9.8,31.8).curveTo(9.8,30.3,8.8,29.4).curveTo(7.7,28.6,5.3,28.6).lineTo(-1.1,28.6).closePath();
	var mask_graphics_153 = new cjs.Graphics().moveTo(162.8,57.6).curveTo(161.4,56.2,161.4,54).curveTo(161.4,51.7,162.8,50.2).curveTo(164.2,48.8,166.5,48.8).curveTo(168.7,48.8,170.1,50.2).curveTo(171.5,51.7,171.5,54).curveTo(171.5,56.2,170.1,57.6).curveTo(168.7,59,166.5,59).curveTo(164.1,59,162.8,57.6).closePath().moveTo(119.3,57.8).curveTo(116.6,56.7,114.8,54.8).curveTo(112.9,52.8,111.8,50.2).curveTo(110.8,47.5,110.8,44.5).curveTo(110.8,41.5,111.9,38.9).curveTo(113.1,36.2,114.9,34.2).curveTo(116.9,32.3,119.6,31.1).curveTo(122.3,30.1,125.4,30.1).curveTo(128.6,30.1,131.3,31.1).curveTo(134,32.2,135.9,34.1).curveTo(137.8,36,138.9,38.7).curveTo(139.9,41.3,139.9,44.3).lineTo(139.9,47.4).lineTo(119.2,47.4).curveTo(119.9,49.5,121.6,50.6).curveTo(123.2,51.8,125.6,51.8).curveTo(127.6,51.8,129,51).curveTo(130.5,50.2,131.4,48.8).lineTo(138.4,52.8).curveTo(136.2,55.8,133.2,57.4).curveTo(130.2,59,125.5,59).curveTo(122.1,59,119.3,57.8).closePath().moveTo(131.4,41).curveTo(130.6,39.1,129.2,38.2).curveTo(127.6,37.3,125.5,37.3).curveTo(123.3,37.3,121.8,38.2).curveTo(120.2,39.2,119.4,41).lineTo(131.4,41).lineTo(131.4,41).closePath().moveTo(99.2,58.3).curveTo(97.5,57.8,96.3,56.5).curveTo(95,55.1,94.3,53.1).curveTo(93.6,51,93.6,47.8).lineTo(93.6,38.2).lineTo(88.8,38.2).lineTo(88.8,30.6).lineTo(93.6,30.6).lineTo(93.6,24.5).lineTo(102.2,19.8).lineTo(102.2,30.6).lineTo(109.1,30.6).lineTo(109.1,38.2).lineTo(102.2,38.2).lineTo(102.2,47.3).curveTo(102.2,49.4,102.8,50.2).curveTo(103.5,50.9,104.7,50.9).curveTo(105.9,50.9,106.9,49.9).lineTo(110.8,56.5).curveTo(109.3,57.6,107.5,58.3).curveTo(105.6,59,103.5,59).curveTo(101.1,59,99.2,58.3).closePath().moveTo(77.6,58.3).curveTo(75.9,57.8,74.6,56.5).curveTo(73.4,55.1,72.7,53.1).curveTo(72,51,72,47.8).lineTo(72,38.2).lineTo(67.2,38.2).lineTo(67.2,30.6).lineTo(72,30.6).lineTo(72,24.5).lineTo(80.6,19.8).lineTo(80.6,30.6).lineTo(87.5,30.6).lineTo(87.5,38.2).lineTo(80.6,38.2).lineTo(80.6,47.3).curveTo(80.6,49.4,81.2,50.2).curveTo(81.9,50.9,83.1,50.9).curveTo(84.2,50.9,85.3,49.9).lineTo(89.2,56.5).curveTo(87.7,57.6,85.8,58.3).curveTo(84,59,81.8,59).curveTo(79.5,59,77.6,58.3).closePath().moveTo(45.4,57.8).curveTo(42.7,56.7,40.9,54.8).curveTo(39,52.8,37.9,50.2).curveTo(36.9,47.5,36.9,44.5).curveTo(36.9,41.5,38,38.9).curveTo(39.2,36.2,41,34.2).curveTo(43,32.3,45.7,31.1).curveTo(48.4,30.1,51.5,30.1).curveTo(54.7,30.1,57.4,31.1).curveTo(60.1,32.2,62,34.1).curveTo(63.9,36,65,38.7).curveTo(66,41.3,66,44.3).lineTo(66,47.4).lineTo(45.3,47.4).curveTo(46,49.5,47.7,50.6).curveTo(49.3,51.8,51.7,51.8).curveTo(53.7,51.8,55.1,51).curveTo(56.6,50.2,57.5,48.8).lineTo(64.5,52.8).curveTo(62.3,55.8,59.3,57.4).curveTo(56.3,59,51.6,59).curveTo(48.2,59,45.4,57.8).closePath().moveTo(57.5,41).curveTo(56.7,39.1,55.3,38.2).curveTo(53.7,37.3,51.6,37.3).curveTo(49.4,37.3,47.9,38.2).curveTo(46.3,39.2,45.5,41).lineTo(57.5,41).lineTo(57.5,41).closePath().moveTo(142.2,58.4).lineTo(142.2,30.6).lineTo(150.7,30.6).lineTo(150.7,34.5).curveTo(151.8,32,153.9,31).curveTo(155.8,30.1,158.6,30.1).curveTo(159.9,30.1,161.1,30.3).lineTo(163.3,31.1).lineTo(160.3,39.8).curveTo(159.7,39.3,158.6,39).curveTo(157.6,38.6,156.3,38.6).curveTo(153.8,38.6,152.3,40).curveTo(150.7,41.4,150.7,44.7).lineTo(150.7,58.4).closePath().moveTo(5.6,58.4).lineTo(5.6,20.8).lineTo(20.5,20.8).curveTo(27.4,20.8,30.9,23.4).curveTo(34.2,26.2,34.2,31.6).curveTo(34.2,34.1,33.3,35.9).curveTo(32.2,37.7,30.4,39).curveTo(32.6,40.2,33.8,42.2).curveTo(35,44.1,35,47).curveTo(35,52.9,31.2,55.7).curveTo(27.3,58.4,20.5,58.4).closePath().moveTo(14.4,50.5).lineTo(20.8,50.5).curveTo(23.4,50.5,24.5,49.6).curveTo(25.8,48.6,25.8,46.7).curveTo(25.8,45,24.6,44.1).curveTo(23.6,43.2,20.6,43.2).lineTo(14.4,43.2).closePath().moveTo(14.4,35.3).lineTo(21,35.3).curveTo(23.4,35.3,24.4,34.3).curveTo(25.3,33.3,25.3,31.8).curveTo(25.3,30.3,24.3,29.4).curveTo(23.3,28.6,20.9,28.6).lineTo(14.4,28.6).closePath();
	var mask_graphics_154 = new cjs.Graphics().moveTo(181.8,57.6).curveTo(180.4,56.2,180.4,54).curveTo(180.4,51.7,181.8,50.2).curveTo(183.2,48.8,185.5,48.8).curveTo(187.7,48.8,189.1,50.2).curveTo(190.5,51.7,190.5,54).curveTo(190.5,56.2,189.1,57.6).curveTo(187.7,59,185.5,59).curveTo(183.1,59,181.8,57.6).closePath().moveTo(138.4,57.8).curveTo(135.6,56.7,133.8,54.8).curveTo(131.9,52.8,130.8,50.2).curveTo(129.8,47.5,129.8,44.5).curveTo(129.8,41.5,130.9,38.9).curveTo(132.1,36.2,133.9,34.2).curveTo(136,32.3,138.6,31.1).curveTo(141.3,30.1,144.4,30.1).curveTo(147.6,30.1,150.3,31.1).curveTo(153,32.2,154.9,34.1).curveTo(156.9,36,157.9,38.7).curveTo(158.9,41.3,158.9,44.3).lineTo(158.9,47.4).lineTo(138.2,47.4).curveTo(138.9,49.5,140.6,50.6).curveTo(142.2,51.8,144.6,51.8).curveTo(146.7,51.8,148,51).curveTo(149.5,50.2,150.4,48.8).lineTo(157.4,52.8).curveTo(155.2,55.8,152.2,57.4).curveTo(149.2,59,144.5,59).curveTo(141.1,59,138.4,57.8).closePath().moveTo(150.4,41).curveTo(149.6,39.1,148.2,38.2).curveTo(146.7,37.3,144.5,37.3).curveTo(142.4,37.3,140.8,38.2).curveTo(139.2,39.2,138.4,41).lineTo(150.4,41).lineTo(150.4,41).closePath().moveTo(118.3,58.3).curveTo(116.5,57.8,115.3,56.5).curveTo(114,55.1,113.3,53.1).curveTo(112.7,51,112.7,47.8).lineTo(112.7,38.2).lineTo(107.8,38.2).lineTo(107.8,30.6).lineTo(112.7,30.6).lineTo(112.7,24.5).lineTo(121.2,19.8).lineTo(121.2,30.6).lineTo(128.1,30.6).lineTo(128.1,38.2).lineTo(121.2,38.2).lineTo(121.2,47.3).curveTo(121.2,49.4,121.8,50.2).curveTo(122.6,50.9,123.7,50.9).curveTo(124.9,50.9,125.9,49.9).lineTo(129.8,56.5).curveTo(128.3,57.6,126.5,58.3).curveTo(124.6,59,122.5,59).curveTo(120.2,59,118.3,58.3).closePath().moveTo(96.6,58.3).curveTo(94.9,57.8,93.6,56.5).curveTo(92.4,55.1,91.7,53.1).curveTo(91,51,91,47.8).lineTo(91,38.2).lineTo(86.2,38.2).lineTo(86.2,30.6).lineTo(91,30.6).lineTo(91,24.5).lineTo(99.6,19.8).lineTo(99.6,30.6).lineTo(106.5,30.6).lineTo(106.5,38.2).lineTo(99.6,38.2).lineTo(99.6,47.3).curveTo(99.6,49.4,100.2,50.2).curveTo(100.9,50.9,102.1,50.9).curveTo(103.3,50.9,104.3,49.9).lineTo(108.2,56.5).curveTo(106.7,57.6,104.9,58.3).curveTo(103,59,100.9,59).curveTo(98.5,59,96.6,58.3).closePath().moveTo(64.5,57.8).curveTo(61.7,56.7,59.9,54.8).curveTo(58,52.8,56.9,50.2).curveTo(55.9,47.5,55.9,44.5).curveTo(55.9,41.5,57,38.9).curveTo(58.2,36.2,60,34.2).curveTo(62,32.3,64.7,31.1).curveTo(67.4,30.1,70.5,30.1).curveTo(73.7,30.1,76.4,31.1).curveTo(79.1,32.2,81,34.1).curveTo(82.9,36,84,38.7).curveTo(85,41.3,85,44.3).lineTo(85,47.4).lineTo(64.3,47.4).curveTo(65,49.5,66.7,50.6).curveTo(68.3,51.8,70.7,51.8).curveTo(72.8,51.8,74.1,51).curveTo(75.6,50.2,76.5,48.8).lineTo(83.5,52.8).curveTo(81.3,55.8,78.3,57.4).curveTo(75.3,59,70.6,59).curveTo(67.2,59,64.5,57.8).closePath().moveTo(76.5,41).curveTo(75.7,39.1,74.3,38.2).curveTo(72.8,37.3,70.6,37.3).curveTo(68.5,37.3,66.9,38.2).curveTo(65.3,39.2,64.5,41).lineTo(76.5,41).lineTo(76.5,41).closePath().moveTo(161.2,58.4).lineTo(161.2,30.6).lineTo(169.7,30.6).lineTo(169.7,34.5).curveTo(170.8,32,172.9,31).curveTo(174.8,30.1,177.6,30.1).curveTo(178.9,30.1,180.2,30.3).lineTo(182.3,31.1).lineTo(179.3,39.8).curveTo(178.7,39.3,177.6,39).curveTo(176.6,38.6,175.3,38.6).curveTo(172.8,38.6,171.3,40).curveTo(169.7,41.4,169.7,44.7).lineTo(169.7,58.4).closePath().moveTo(24.6,58.4).lineTo(24.6,20.8).lineTo(39.5,20.8).curveTo(46.4,20.8,49.9,23.4).curveTo(53.2,26.2,53.2,31.6).curveTo(53.2,34.1,52.3,35.9).curveTo(51.2,37.7,49.5,39).curveTo(51.6,40.2,52.8,42.2).curveTo(54,44.1,54,47).curveTo(54,52.9,50.2,55.7).curveTo(46.3,58.4,39.5,58.4).closePath().moveTo(33.4,50.5).lineTo(39.8,50.5).curveTo(42.4,50.5,43.6,49.6).curveTo(44.8,48.6,44.8,46.7).curveTo(44.8,45,43.6,44.1).curveTo(42.6,43.2,39.6,43.2).lineTo(33.4,43.2).closePath().moveTo(33.4,35.3).lineTo(40,35.3).curveTo(42.4,35.3,43.4,34.3).curveTo(44.4,33.3,44.4,31.8).curveTo(44.4,30.3,43.3,29.4).curveTo(42.3,28.6,39.9,28.6).lineTo(33.4,28.6).closePath();
	var mask_graphics_155 = new cjs.Graphics().moveTo(204.3,57.6).curveTo(202.8,56.2,202.8,54).curveTo(202.8,51.7,204.3,50.2).curveTo(205.7,48.8,207.9,48.8).curveTo(210.2,48.8,211.6,50.2).curveTo(213,51.7,213,54).curveTo(213,56.2,211.6,57.6).curveTo(210.2,59,207.9,59).curveTo(205.6,59,204.3,57.6).closePath().moveTo(160.8,57.8).curveTo(158.1,56.7,156.2,54.8).curveTo(154.3,52.8,153.3,50.2).curveTo(152.3,47.5,152.3,44.5).curveTo(152.3,41.5,153.4,38.9).curveTo(154.6,36.2,156.4,34.2).curveTo(158.4,32.3,161.1,31.1).curveTo(163.8,30.1,166.9,30.1).curveTo(170.1,30.1,172.8,31.1).curveTo(175.5,32.2,177.4,34.1).curveTo(179.3,36,180.3,38.7).curveTo(181.4,41.3,181.4,44.3).lineTo(181.4,47.4).lineTo(160.7,47.4).curveTo(161.4,49.5,163.1,50.6).curveTo(164.7,51.8,167.1,51.8).curveTo(169.1,51.8,170.5,51).curveTo(172,50.2,172.8,48.8).lineTo(179.9,52.8).curveTo(177.6,55.8,174.7,57.4).curveTo(171.7,59,167,59).curveTo(163.6,59,160.8,57.8).closePath().moveTo(172.8,41).curveTo(172.1,39.1,170.7,38.2).curveTo(169.1,37.3,167,37.3).curveTo(164.8,37.3,163.3,38.2).curveTo(161.7,39.2,160.9,41).lineTo(172.8,41).lineTo(172.8,41).closePath().moveTo(140.7,58.3).curveTo(139,57.8,137.7,56.5).curveTo(136.5,55.1,135.8,53.1).curveTo(135.1,51,135.1,47.8).lineTo(135.1,38.2).lineTo(130.3,38.2).lineTo(130.3,30.6).lineTo(135.1,30.6).lineTo(135.1,24.5).lineTo(143.7,19.8).lineTo(143.7,30.6).lineTo(150.6,30.6).lineTo(150.6,38.2).lineTo(143.7,38.2).lineTo(143.7,47.3).curveTo(143.7,49.4,144.3,50.2).curveTo(145,50.9,146.2,50.9).curveTo(147.4,50.9,148.4,49.9).lineTo(152.3,56.5).curveTo(150.8,57.6,149,58.3).curveTo(147.1,59,145,59).curveTo(142.6,59,140.7,58.3).closePath().moveTo(119.1,58.3).curveTo(117.4,57.8,116.1,56.5).curveTo(114.9,55.1,114.2,53.1).curveTo(113.5,51,113.5,47.8).lineTo(113.5,38.2).lineTo(108.7,38.2).lineTo(108.7,30.6).lineTo(113.5,30.6).lineTo(113.5,24.5).lineTo(122.1,19.8).lineTo(122.1,30.6).lineTo(128.9,30.6).lineTo(128.9,38.2).lineTo(122.1,38.2).lineTo(122.1,47.3).curveTo(122.1,49.4,122.7,50.2).curveTo(123.4,50.9,124.6,50.9).curveTo(125.7,50.9,126.7,49.9).lineTo(130.7,56.5).curveTo(129.2,57.6,127.3,58.3).curveTo(125.4,59,123.3,59).curveTo(121,59,119.1,58.3).closePath().moveTo(86.9,57.8).curveTo(84.2,56.7,82.3,54.8).curveTo(80.4,52.8,79.3,50.2).curveTo(78.4,47.5,78.4,44.5).curveTo(78.4,41.5,79.5,38.9).curveTo(80.7,36.2,82.5,34.2).curveTo(84.5,32.3,87.2,31.1).curveTo(89.9,30.1,93,30.1).curveTo(96.2,30.1,98.9,31.1).curveTo(101.6,32.2,103.4,34.1).curveTo(105.4,36,106.4,38.7).curveTo(107.5,41.3,107.5,44.3).lineTo(107.5,47.4).lineTo(86.8,47.4).curveTo(87.5,49.5,89.2,50.6).curveTo(90.8,51.8,93.2,51.8).curveTo(95.2,51.8,96.6,51).curveTo(98.1,50.2,98.9,48.8).lineTo(106,52.8).curveTo(103.7,55.8,100.8,57.4).curveTo(97.8,59,93.1,59).curveTo(89.7,59,86.9,57.8).closePath().moveTo(98.9,41).curveTo(98.2,39.1,96.8,38.2).curveTo(95.2,37.3,93.1,37.3).curveTo(90.9,37.3,89.4,38.2).curveTo(87.8,39.2,87,41).lineTo(98.9,41).lineTo(98.9,41).closePath().moveTo(183.7,58.4).lineTo(183.7,30.6).lineTo(192.2,30.6).lineTo(192.2,34.5).curveTo(193.3,32,195.3,31).curveTo(197.3,30.1,200.1,30.1).curveTo(201.4,30.1,202.6,30.3).lineTo(204.8,31.1).lineTo(201.7,39.8).curveTo(201.2,39.3,200.1,39).curveTo(199.1,38.6,197.8,38.6).curveTo(195.3,38.6,193.7,40).curveTo(192.2,41.4,192.2,44.7).lineTo(192.2,58.4).closePath().moveTo(47.1,58.4).lineTo(47.1,20.8).lineTo(62,20.8).curveTo(68.9,20.8,72.4,23.4).curveTo(75.7,26.2,75.7,31.6).curveTo(75.7,34.1,74.8,35.9).curveTo(73.7,37.7,71.9,39).curveTo(74.1,40.2,75.3,42.2).curveTo(76.4,44.1,76.4,47).curveTo(76.4,52.9,72.6,55.7).curveTo(68.8,58.4,62,58.4).closePath().moveTo(55.9,50.5).lineTo(62.2,50.5).curveTo(64.9,50.5,66,49.6).curveTo(67.3,48.6,67.3,46.7).curveTo(67.3,45,66.1,44.1).curveTo(65.1,43.2,62.1,43.2).lineTo(55.9,43.2).closePath().moveTo(55.9,35.3).lineTo(62.5,35.3).curveTo(64.9,35.3,65.9,34.3).curveTo(66.8,33.3,66.8,31.8).curveTo(66.8,30.3,65.8,29.4).curveTo(64.8,28.6,62.4,28.6).lineTo(55.9,28.6).closePath();
	var mask_graphics_156 = new cjs.Graphics().moveTo(230.2,57.6).curveTo(228.8,56.2,228.8,54).curveTo(228.8,51.7,230.2,50.2).curveTo(231.6,48.8,233.9,48.8).curveTo(236.1,48.8,237.5,50.2).curveTo(238.9,51.7,238.9,54).curveTo(238.9,56.2,237.5,57.6).curveTo(236.1,59,233.9,59).curveTo(231.5,59,230.2,57.6).closePath().moveTo(186.8,57.8).curveTo(184,56.7,182.2,54.8).curveTo(180.3,52.8,179.2,50.2).curveTo(178.2,47.5,178.2,44.5).curveTo(178.2,41.5,179.3,38.9).curveTo(180.5,36.2,182.3,34.2).curveTo(184.3,32.3,187,31.1).curveTo(189.7,30.1,192.8,30.1).curveTo(196,30.1,198.7,31.1).curveTo(201.4,32.2,203.3,34.1).curveTo(205.2,36,206.3,38.7).curveTo(207.3,41.3,207.3,44.3).lineTo(207.3,47.4).lineTo(186.6,47.4).curveTo(187.3,49.5,189,50.6).curveTo(190.6,51.8,193,51.8).curveTo(195.1,51.8,196.4,51).curveTo(197.9,50.2,198.8,48.8).lineTo(205.8,52.8).curveTo(203.6,55.8,200.6,57.4).curveTo(197.6,59,192.9,59).curveTo(189.5,59,186.8,57.8).closePath().moveTo(198.8,41).curveTo(198,39.1,196.6,38.2).curveTo(195.1,37.3,192.9,37.3).curveTo(190.8,37.3,189.2,38.2).curveTo(187.6,39.2,186.8,41).lineTo(198.8,41).lineTo(198.8,41).closePath().moveTo(166.7,58.3).curveTo(164.9,57.8,163.7,56.5).curveTo(162.4,55.1,161.7,53.1).curveTo(161,51,161,47.8).lineTo(161,38.2).lineTo(156.2,38.2).lineTo(156.2,30.6).lineTo(161,30.6).lineTo(161,24.5).lineTo(169.6,19.8).lineTo(169.6,30.6).lineTo(176.5,30.6).lineTo(176.5,38.2).lineTo(169.6,38.2).lineTo(169.6,47.3).curveTo(169.6,49.4,170.2,50.2).curveTo(171,50.9,172.1,50.9).curveTo(173.3,50.9,174.3,49.9).lineTo(178.2,56.5).curveTo(176.7,57.6,174.9,58.3).curveTo(173,59,170.9,59).curveTo(168.5,59,166.7,58.3).closePath().moveTo(145,58.3).curveTo(143.3,57.8,142,56.5).curveTo(140.8,55.1,140.1,53.1).curveTo(139.4,51,139.4,47.8).lineTo(139.4,38.2).lineTo(134.6,38.2).lineTo(134.6,30.6).lineTo(139.4,30.6).lineTo(139.4,24.5).lineTo(148,19.8).lineTo(148,30.6).lineTo(154.9,30.6).lineTo(154.9,38.2).lineTo(148,38.2).lineTo(148,47.3).curveTo(148,49.4,148.6,50.2).curveTo(149.3,50.9,150.5,50.9).curveTo(151.7,50.9,152.7,49.9).lineTo(156.6,56.5).curveTo(155.1,57.6,153.3,58.3).curveTo(151.4,59,149.3,59).curveTo(146.9,59,145,58.3).closePath().moveTo(112.8,57.8).curveTo(110.1,56.7,108.3,54.8).curveTo(106.4,52.8,105.3,50.2).curveTo(104.3,47.5,104.3,44.5).curveTo(104.3,41.5,105.4,38.9).curveTo(106.6,36.2,108.4,34.2).curveTo(110.4,32.3,113.1,31.1).curveTo(115.8,30.1,118.9,30.1).curveTo(122.1,30.1,124.8,31.1).curveTo(127.5,32.2,129.4,34.1).curveTo(131.3,36,132.4,38.7).curveTo(133.4,41.3,133.4,44.3).lineTo(133.4,47.4).lineTo(112.7,47.4).curveTo(113.4,49.5,115.1,50.6).curveTo(116.7,51.8,119.1,51.8).curveTo(121.1,51.8,122.5,51).curveTo(124,50.2,124.9,48.8).lineTo(131.9,52.8).curveTo(129.7,55.8,126.7,57.4).curveTo(123.7,59,119,59).curveTo(115.6,59,112.8,57.8).closePath().moveTo(124.9,41).curveTo(124.1,39.1,122.7,38.2).curveTo(121.1,37.3,119,37.3).curveTo(116.9,37.3,115.3,38.2).curveTo(113.7,39.2,112.9,41).lineTo(124.9,41).lineTo(124.9,41).closePath().moveTo(209.6,58.4).lineTo(209.6,30.6).lineTo(218.1,30.6).lineTo(218.1,34.5).curveTo(219.2,32,221.3,31).curveTo(223.2,30.1,226,30.1).curveTo(227.3,30.1,228.5,30.3).lineTo(230.7,31.1).lineTo(227.7,39.8).curveTo(227.1,39.3,226,39).curveTo(225,38.6,223.7,38.6).curveTo(221.2,38.6,219.7,40).curveTo(218.1,41.4,218.1,44.7).lineTo(218.1,58.4).closePath().moveTo(73,58.4).lineTo(73,20.8).lineTo(87.9,20.8).curveTo(94.8,20.8,98.3,23.4).curveTo(101.6,26.2,101.6,31.6).curveTo(101.6,34.1,100.7,35.9).curveTo(99.6,37.7,97.8,39).curveTo(100,40.2,101.2,42.2).curveTo(102.4,44.1,102.4,47).curveTo(102.4,52.9,98.6,55.7).curveTo(94.7,58.4,87.9,58.4).closePath().moveTo(81.8,50.5).lineTo(88.2,50.5).curveTo(90.8,50.5,91.9,49.6).curveTo(93.2,48.6,93.2,46.7).curveTo(93.2,45,92,44.1).curveTo(91,43.2,88,43.2).lineTo(81.8,43.2).closePath().moveTo(81.8,35.3).lineTo(88.4,35.3).curveTo(90.8,35.3,91.8,34.3).curveTo(92.7,33.3,92.8,31.8).curveTo(92.7,30.3,91.7,29.4).curveTo(90.7,28.6,88.3,28.6).lineTo(81.8,28.6).closePath();
	var mask_graphics_157 = new cjs.Graphics().moveTo(259.6,57.6).curveTo(258.1,56.2,258.1,54).curveTo(258.1,51.7,259.6,50.2).curveTo(261,48.8,263.2,48.8).curveTo(265.5,48.8,266.9,50.2).curveTo(268.3,51.7,268.3,54).curveTo(268.3,56.2,266.9,57.6).curveTo(265.5,59,263.2,59).curveTo(260.9,59,259.6,57.6).closePath().moveTo(216.1,57.8).curveTo(213.4,56.7,211.5,54.8).curveTo(209.7,52.8,208.6,50.2).curveTo(207.6,47.5,207.6,44.5).curveTo(207.6,41.5,208.7,38.9).curveTo(209.9,36.2,211.7,34.2).curveTo(213.7,32.3,216.4,31.1).curveTo(219.1,30.1,222.2,30.1).curveTo(225.4,30.1,228.1,31.1).curveTo(230.8,32.2,232.7,34.1).curveTo(234.6,36,235.6,38.7).curveTo(236.7,41.3,236.7,44.3).lineTo(236.7,47.4).lineTo(216,47.4).curveTo(216.7,49.5,218.4,50.6).curveTo(220,51.8,222.4,51.8).curveTo(224.4,51.8,225.8,51).curveTo(227.3,50.2,228.1,48.8).lineTo(235.2,52.8).curveTo(233,55.8,230,57.4).curveTo(227,59,222.3,59).curveTo(218.9,59,216.1,57.8).closePath().moveTo(228.1,41).curveTo(227.4,39.1,226,38.2).curveTo(224.4,37.3,222.3,37.3).curveTo(220.1,37.3,218.6,38.2).curveTo(217,39.2,216.2,41).lineTo(228.1,41).lineTo(228.1,41).closePath().moveTo(196,58.3).curveTo(194.3,57.8,193.1,56.5).curveTo(191.8,55.1,191.1,53.1).curveTo(190.4,51,190.4,47.8).lineTo(190.4,38.2).lineTo(185.6,38.2).lineTo(185.6,30.6).lineTo(190.4,30.6).lineTo(190.4,24.5).lineTo(199,19.8).lineTo(199,30.6).lineTo(205.9,30.6).lineTo(205.9,38.2).lineTo(199,38.2).lineTo(199,47.3).curveTo(199,49.4,199.6,50.2).curveTo(200.3,50.9,201.5,50.9).curveTo(202.7,50.9,203.7,49.9).lineTo(207.6,56.5).curveTo(206.1,57.6,204.3,58.3).curveTo(202.4,59,200.3,59).curveTo(197.9,59,196,58.3).closePath().moveTo(174.4,58.3).curveTo(172.7,57.8,171.4,56.5).curveTo(170.2,55.1,169.5,53.1).curveTo(168.8,51,168.8,47.8).lineTo(168.8,38.2).lineTo(164,38.2).lineTo(164,30.6).lineTo(168.8,30.6).lineTo(168.8,24.5).lineTo(177.4,19.8).lineTo(177.4,30.6).lineTo(184.2,30.6).lineTo(184.2,38.2).lineTo(177.4,38.2).lineTo(177.4,47.3).curveTo(177.4,49.4,178,50.2).curveTo(178.7,50.9,179.9,50.9).curveTo(181,50.9,182.1,49.9).lineTo(186,56.5).curveTo(184.5,57.6,182.6,58.3).curveTo(180.7,59,178.6,59).curveTo(176.3,59,174.4,58.3).closePath().moveTo(142.2,57.8).curveTo(139.5,56.7,137.6,54.8).curveTo(135.7,52.8,134.7,50.2).curveTo(133.7,47.5,133.7,44.5).curveTo(133.7,41.5,134.8,38.9).curveTo(136,36.2,137.8,34.2).curveTo(139.8,32.3,142.5,31.1).curveTo(145.2,30.1,148.3,30.1).curveTo(151.5,30.1,154.2,31.1).curveTo(156.9,32.2,158.8,34.1).curveTo(160.7,36,161.7,38.7).curveTo(162.8,41.3,162.8,44.3).lineTo(162.8,47.4).lineTo(142.1,47.4).curveTo(142.8,49.5,144.5,50.6).curveTo(146.1,51.8,148.5,51.8).curveTo(150.5,51.8,151.9,51).curveTo(153.4,50.2,154.2,48.8).lineTo(161.3,52.8).curveTo(159,55.8,156.1,57.4).curveTo(153.1,59,148.4,59).curveTo(145,59,142.2,57.8).closePath().moveTo(154.2,41).curveTo(153.5,39.1,152.1,38.2).curveTo(150.5,37.3,148.4,37.3).curveTo(146.2,37.3,144.7,38.2).curveTo(143.1,39.2,142.3,41).lineTo(154.2,41).lineTo(154.2,41).closePath().moveTo(239,58.4).lineTo(239,30.6).lineTo(247.5,30.6).lineTo(247.5,34.5).curveTo(248.6,32,250.6,31).curveTo(252.6,30.1,255.4,30.1).curveTo(256.7,30.1,257.9,30.3).lineTo(260.1,31.1).lineTo(257.1,39.8).curveTo(256.5,39.3,255.4,39).curveTo(254.4,38.6,253.1,38.6).curveTo(250.6,38.6,249,40).curveTo(247.5,41.4,247.5,44.7).lineTo(247.5,58.4).closePath().moveTo(102.4,58.4).lineTo(102.4,20.8).lineTo(117.3,20.8).curveTo(124.2,20.8,127.7,23.4).curveTo(131,26.2,131,31.6).curveTo(131,34.1,130.1,35.9).curveTo(129,37.7,127.2,39).curveTo(129.4,40.2,130.6,42.2).curveTo(131.7,44.1,131.7,47).curveTo(131.7,52.9,128,55.7).curveTo(124.1,58.4,117.3,58.4).closePath().moveTo(111.2,50.5).lineTo(117.5,50.5).curveTo(120.2,50.5,121.3,49.6).curveTo(122.6,48.6,122.6,46.7).curveTo(122.6,45,121.4,44.1).curveTo(120.4,43.2,117.4,43.2).lineTo(111.2,43.2).closePath().moveTo(111.2,35.3).lineTo(117.8,35.3).curveTo(120.2,35.3,121.2,34.3).curveTo(122.1,33.3,122.1,31.8).curveTo(122.1,30.3,121.1,29.4).curveTo(120.1,28.6,117.7,28.6).lineTo(111.2,28.6).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(64).to({graphics:mask_graphics_64,x:128.2674,y:59.0489}).wait(84).to({graphics:mask_graphics_148,x:128.2674,y:59.0489}).wait(1).to({graphics:mask_graphics_149,x:129.9958,y:59.0489}).wait(1).to({graphics:mask_graphics_150,x:135.181,y:59.0489}).wait(1).to({graphics:mask_graphics_151,x:143.8229,y:59.0489}).wait(1).to({graphics:mask_graphics_152,x:155.9217,y:59.0489}).wait(1).to({graphics:mask_graphics_153,x:171.4773,y:59.0489}).wait(1).to({graphics:mask_graphics_154,x:190.4896,y:59.0489}).wait(1).to({graphics:mask_graphics_155,x:212.9587,y:59.0489}).wait(1).to({graphics:mask_graphics_156,x:238.8847,y:59.0489}).wait(1).to({graphics:mask_graphics_157,x:268.2674,y:59.0489}).wait(68));

	// better_mask
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFB71B").beginStroke().moveTo(-48.7,25.5).lineTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_1.setTransform(5.45,99.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFB71B").beginStroke().moveTo(-87.7,25.5).lineTo(-87.7,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_2.setTransform(33.95,99.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFB71B").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_3.setTransform(59.45,99.25);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFB71B").beginStroke().moveTo(-48.7,25.5).lineTo(-87.7,25.5).lineTo(-87.7,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_4.setTransform(155.45,99.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("rgba(255,183,27,0.988)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_5.setTransform(158.9,99.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("rgba(255,183,27,0.949)").beginStroke().moveTo(-87.7,25.5).lineTo(-87.7,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_6.setTransform(169.3,99.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("rgba(255,183,27,0.89)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-25,39.4,-24.7).lineTo(87.7,25.5).closePath();
	this.shape_7.setTransform(186.55,99.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("rgba(255,183,27,0.804)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-25,39.4,-24.7).lineTo(87.7,25.5).closePath();
	this.shape_8.setTransform(210.75,99.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("rgba(255,183,27,0.69)").beginStroke().moveTo(-87.7,25.5).lineTo(-87.7,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_9.setTransform(241.85,99.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("rgba(255,183,27,0.557)").beginStroke().moveTo(-87.7,25.5).lineTo(-87.7,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-25,39.4,-24.7).lineTo(87.7,25.5).closePath();
	this.shape_10.setTransform(279.9,99.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("rgba(255,183,27,0.396)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_11.setTransform(324.85,99.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("rgba(255,183,27,0.212)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_12.setTransform(376.7,99.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("rgba(255,183,27,0)").beginStroke().moveTo(-48.7,25.5).lineTo(-87.7,25.5).lineTo(-87.7,-25.5).lineTo(-48.7,-25.4).curveTo(39.6,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_13.setTransform(435.45,99.25);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},64).to({state:[{t:this.shape_2,p:{x:33.95}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2,p:{x:101.45}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2,p:{x:141.95}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},74).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(66).to({_off:false},0).wait(1).to({x:81.95},0).to({_off:true},1).wait(1).to({_off:false,x:117.95},0).wait(1).to({x:131.45},0).to({_off:true},1).wait(1).to({_off:false,x:149.45},0).wait(1).to({x:153.95},0).to({_off:true},1).wait(151));

	// txt_better
	this.instance_4 = new lib.txt_better();
	this.instance_4.setTransform(84.8,95.1,1,1,0,0,0,81.4,21.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({_off:false},0).to({alpha:1},9).wait(84).to({x:364.8,alpha:0},9,cjs.Ease.quadIn).wait(68));

	// txt_believeIt
	this.instance_5 = new lib.txt_believeIt();
	this.instance_5.setTransform(205.75,94.9,1,1,0,0,0,81.4,22.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(106).to({_off:false},0).to({alpha:1},9).wait(33).to({x:485.75,alpha:0},9,cjs.Ease.quadIn).wait(68));

	// image_01
	this.instance_6 = new lib.image_01_1();
	this.instance_6.setTransform(1085.15,215,1,1,0,0,0,150,217);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:616.15},14,cjs.Ease.quadInOut).wait(32).to({x:1089.15,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(169));

	// image_02
	this.instance_7 = new lib.image_02_1();
	this.instance_7.setTransform(1087.1,215,1,1,0,0,0,150,217);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(51).to({_off:false},0).to({x:616.1},14,cjs.Ease.quadInOut).wait(32).to({x:1091.1,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(118));

	// image_03
	this.instance_8 = new lib.image_03_1();
	this.instance_8.setTransform(1089.1,215,1,1,0,0,0,150,217);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(101).to({_off:false},0).to({x:616.1},14,cjs.Ease.quadInOut).wait(32).to({x:1083.1,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(68));

	// background_color
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-364,45).lineTo(-364,-45).lineTo(364,-45).lineTo(364,45).closePath();
	this.shape_14.setTransform(484.9982,124.9997,1.3324,2.7778);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(225));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(484,124,960.0999999999999,127);
// library properties:
lib.properties = {
	id: '4CB3FE4512EC4F04AD1A078CE62F288A',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"image_01.jpg", id:"image_01"},
		{src:"image_02.jpg", id:"image_02"},
		{src:"image_03.jpg", id:"image_03"}
	],
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
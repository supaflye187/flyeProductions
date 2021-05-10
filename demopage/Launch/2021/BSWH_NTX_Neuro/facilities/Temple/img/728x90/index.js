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
p.nominalBounds = new cjs.Rectangle(0,0,262,90);


(lib.image_02 = function() {
	this.initialize(img.image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,90);


(lib.image_03 = function() {
	this.initialize(img.image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,90);// helper functions:

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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(81.6,8).curveTo(80.9,7.4,80.9,6.3).curveTo(80.9,5.3,81.6,4.7).curveTo(82.2,4.1,83.2,4.1).curveTo(84.2,4.1,84.8,4.7).curveTo(85.5,5.3,85.5,6.3).curveTo(85.5,7.4,84.8,8).curveTo(84.2,8.6,83.2,8.6).curveTo(82.2,8.6,81.6,8).closePath().moveTo(65.9,8.4).lineTo(65.9,-8.6).lineTo(77.7,-8.6).lineTo(77.7,-4.9).lineTo(70,-4.9).lineTo(70,-2.1).lineTo(77.7,-2.1).lineTo(77.7,1.7).lineTo(70,1.7).lineTo(70,4.6).lineTo(77.7,4.6).lineTo(77.7,8.4).closePath().moveTo(58.9,8.4).lineTo(56.5,3.3).lineTo(53.3,3.3).lineTo(53.3,8.4).lineTo(49.2,8.4).lineTo(49.2,-8.6).lineTo(56.6,-8.6).curveTo(58.1,-8.6,59.3,-8.2).curveTo(60.5,-7.7,61.3,-6.9).curveTo(62.1,-6.2,62.6,-5.1).curveTo(62.9,-4.1,62.9,-2.8).curveTo(62.9,-1.2,62.2,0.2).curveTo(61.5,1.4,60.2,2.2).lineTo(63.4,8.4).closePath().moveTo(53.3,-0.4).lineTo(56.3,-0.4).curveTo(57.6,-0.4,58.2,-1.1).curveTo(58.9,-1.8,58.9,-2.7).curveTo(58.9,-3.8,58.2,-4.3).curveTo(57.6,-4.9,56.3,-4.9).lineTo(53.3,-4.9).closePath().moveTo(34.3,8.4).lineTo(34.3,-8.6).lineTo(46.1,-8.6).lineTo(46.1,-4.9).lineTo(38.3,-4.9).lineTo(38.3,-2.1).lineTo(46.1,-2.1).lineTo(46.1,1.7).lineTo(38.3,1.7).lineTo(38.3,4.6).lineTo(46.1,4.6).lineTo(46.1,8.4).closePath().moveTo(26.7,8.4).lineTo(26.7,1.8).lineTo(21.1,1.8).lineTo(21.1,8.4).lineTo(17,8.4).lineTo(17,-8.6).lineTo(21.1,-8.6).lineTo(21.1,-2.2).lineTo(26.7,-2.2).lineTo(26.7,-8.6).lineTo(30.8,-8.6).lineTo(30.8,8.4).closePath().moveTo(5.2,8.4).lineTo(-1.5,-2.4).lineTo(-1.5,8.4).lineTo(-5.4,8.4).lineTo(-5.4,-8.6).lineTo(-1.2,-8.6).lineTo(5.2,1.6).lineTo(5.2,-8.6).lineTo(9.1,-8.6).lineTo(9.1,8.4).closePath().moveTo(-20.3,8.4).lineTo(-20.3,-8.6).lineTo(-8.6,-8.6).lineTo(-8.6,-4.9).lineTo(-16.3,-4.9).lineTo(-16.3,-2.1).lineTo(-8.6,-2.1).lineTo(-8.6,1.7).lineTo(-16.3,1.7).lineTo(-16.3,4.6).lineTo(-8.6,4.6).lineTo(-8.6,8.4).closePath().moveTo(-36.1,8.4).lineTo(-36.1,-8.6).lineTo(-29.4,-8.6).curveTo(-27.8,-8.6,-26.6,-8.1).curveTo(-25.5,-7.7,-24.6,-6.8).curveTo(-23.7,-5.9,-23.2,-4.8).curveTo(-22.8,-3.6,-22.8,-2.4).curveTo(-22.8,-1,-23.2,0.2).curveTo(-23.7,1.3,-24.6,2.2).curveTo(-25.5,3.1,-26.6,3.6).curveTo(-27.8,4.1,-29.4,4.1).lineTo(-32.1,4.1).lineTo(-32.1,8.4).closePath().moveTo(-32.1,0.3).lineTo(-29.5,0.3).curveTo(-28.4,0.3,-27.7,-0.4).curveTo(-26.9,-1.1,-26.9,-2.4).curveTo(-26.9,-3.5,-27.7,-4.2).curveTo(-28.4,-4.9,-29.5,-4.9).lineTo(-32.1,-4.9).closePath().moveTo(-51.7,8.4).lineTo(-51.7,-8.6).lineTo(-44.9,-8.6).curveTo(-43.4,-8.6,-42.2,-8.1).curveTo(-40.9,-7.7,-40.1,-6.8).curveTo(-39.2,-5.9,-38.8,-4.8).curveTo(-38.4,-3.6,-38.4,-2.4).curveTo(-38.4,-1,-38.8,0.2).curveTo(-39.2,1.3,-40,2.2).curveTo(-40.9,3.1,-42.2,3.6).curveTo(-43.4,4.1,-44.9,4.1).lineTo(-47.6,4.1).lineTo(-47.6,8.4).closePath().moveTo(-47.6,0.3).lineTo(-45.1,0.3).curveTo(-44,0.3,-43.3,-0.4).curveTo(-42.4,-1.1,-42.4,-2.4).curveTo(-42.4,-3.5,-43.3,-4.2).curveTo(-44,-4.9,-45.1,-4.9).lineTo(-47.6,-4.9).closePath().moveTo(-57.6,8.4).lineTo(-58.4,5.9).lineTo(-65,5.9).lineTo(-65.9,8.4).lineTo(-70,8.4).lineTo(-63.7,-8.6).lineTo(-59.7,-8.6).lineTo(-53.4,8.4).closePath().moveTo(-59.7,2.3).lineTo(-61.7,-3.5).lineTo(-63.8,2.3).lineTo(-59.7,2.3).closePath().moveTo(-75.7,8.4).lineTo(-75.7,1.8).lineTo(-81.4,1.8).lineTo(-81.4,8.4).lineTo(-85.5,8.4).lineTo(-85.5,-8.6).lineTo(-81.4,-8.6).lineTo(-81.4,-2.2).lineTo(-75.7,-2.2).lineTo(-75.7,-8.6).lineTo(-71.7,-8.6).lineTo(-71.7,8.4).closePath();
	this.shape.setTransform(276.575,6.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#008FBE").beginStroke().moveTo(89.6,8.7).curveTo(88.5,8.4,87.4,7.9).curveTo(86.6,7.5,85.9,6.8).curveTo(85,6.2,84.5,5.5).lineTo(88,2.6).curveTo(88.8,3.8,89.8,4.4).curveTo(90.9,5.1,92.3,5.1).curveTo(93.3,5,93.8,4.6).curveTo(94.4,4.2,94.4,3.4).curveTo(94.4,3,94.2,2.7).curveTo(94,2.4,93.5,2.2).lineTo(92.5,1.8).lineTo(89,0.9).curveTo(88,0.5,87.1,0.1).curveTo(86.4,-0.5,85.9,-1.5).curveTo(85.4,-2.3,85.4,-3.6).curveTo(85.4,-4.7,85.9,-5.7).curveTo(86.4,-6.7,87.1,-7.4).curveTo(88,-8.1,89.1,-8.5).curveTo(90.3,-8.9,91.6,-8.9).curveTo(92.9,-8.9,93.8,-8.8).curveTo(94.9,-8.5,95.8,-8.1).curveTo(96.6,-7.7,97.2,-7.2).lineTo(98.7,-5.8).lineTo(95.3,-3.3).curveTo(94.7,-4.2,93.8,-4.7).curveTo(93,-5.3,91.6,-5.3).curveTo(90.6,-5.3,90.1,-4.8).curveTo(89.6,-4.3,89.6,-3.7).curveTo(89.6,-3.3,89.8,-3.2).lineTo(90.6,-2.7).lineTo(95.1,-1.5).curveTo(96.1,-1.2,96.9,-0.6).curveTo(97.7,0.1,98.2,0.9).curveTo(98.7,1.9,98.7,3.3).curveTo(98.7,4.4,98.2,5.5).curveTo(97.8,6.5,96.9,7.2).curveTo(96,8.1,94.8,8.4).curveTo(93.5,8.9,92.1,8.9).curveTo(90.6,8.9,89.6,8.7).closePath().moveTo(18.8,8.7).curveTo(17.6,8.4,16.7,7.9).curveTo(15.7,7.5,15.1,6.8).curveTo(14.2,6.2,13.6,5.5).lineTo(17.1,2.6).curveTo(18,3.8,19,4.4).curveTo(20.1,5.1,21.5,5.1).curveTo(22.6,5,23.1,4.6).curveTo(23.7,4.2,23.6,3.4).curveTo(23.6,3,23.4,2.7).curveTo(23.2,2.4,22.8,2.2).lineTo(21.7,1.8).lineTo(18.1,0.9).curveTo(17.2,0.5,16.3,0.1).curveTo(15.6,-0.5,15.1,-1.5).curveTo(14.6,-2.3,14.6,-3.6).curveTo(14.6,-4.7,15.1,-5.7).curveTo(15.6,-6.7,16.3,-7.4).curveTo(17.2,-8.1,18.4,-8.5).curveTo(19.6,-8.9,21,-8.9).curveTo(22.1,-8.9,23.1,-8.8).curveTo(24.1,-8.5,25,-8.1).curveTo(25.7,-7.7,26.5,-7.2).lineTo(27.8,-5.8).lineTo(24.5,-3.3).curveTo(23.8,-4.2,23.1,-4.7).curveTo(22.2,-5.3,20.9,-5.3).curveTo(19.8,-5.3,19.4,-4.8).curveTo(18.8,-4.3,18.8,-3.7).curveTo(18.8,-3.3,19,-3.2).lineTo(19.8,-2.7).lineTo(24.3,-1.5).curveTo(25.3,-1.2,26,-0.6).curveTo(26.9,0.1,27.5,0.9).curveTo(27.9,1.9,27.9,3.3).curveTo(27.9,4.4,27.5,5.5).curveTo(26.9,6.5,26,7.2).curveTo(25.2,8.1,24,8.4).curveTo(22.8,8.9,21.4,8.9).curveTo(19.9,8.9,18.8,8.7).closePath().moveTo(71.2,8.7).lineTo(71.2,-8.6).lineTo(83.2,-8.6).lineTo(83.2,-4.8).lineTo(75.4,-4.8).lineTo(75.4,-1.9).lineTo(83.2,-1.9).lineTo(83.2,1.9).lineTo(75.4,1.9).lineTo(75.4,4.8).lineTo(83.2,4.8).lineTo(83.2,8.7).closePath().moveTo(64.6,8.7).lineTo(57.7,-2.2).lineTo(57.7,8.7).lineTo(53.8,8.7).lineTo(53.8,-8.6).lineTo(58.1,-8.6).lineTo(64.6,1.7).lineTo(64.6,-8.6).lineTo(68.5,-8.6).lineTo(68.5,8.7).closePath().moveTo(46.8,8.7).lineTo(46.8,-8.6).lineTo(51,-8.6).lineTo(51,8.7).closePath().moveTo(30.7,8.7).lineTo(30.7,-8.6).lineTo(37.6,-8.6).curveTo(39.2,-8.6,40.4,-8.1).curveTo(41.6,-7.6,42.5,-6.8).curveTo(43.4,-5.8,43.9,-4.7).curveTo(44.2,-3.6,44.2,-2.2).curveTo(44.2,-0.9,43.9,0.3).curveTo(43.4,1.4,42.5,2.4).curveTo(41.7,3.3,40.4,3.8).curveTo(39.2,4.3,37.6,4.4).lineTo(34.9,4.4).lineTo(34.9,8.7).closePath().moveTo(34.9,0.4).lineTo(37.5,0.4).curveTo(38.7,0.5,39.4,-0.2).curveTo(40.2,-0.9,40.2,-2.2).curveTo(40.2,-3.4,39.4,-4.1).curveTo(38.7,-4.9,37.5,-4.9).lineTo(34.9,-4.9).closePath().moveTo(-1.6,8.7).lineTo(-1.6,1.3).lineTo(-7.2,-8.6).lineTo(-2.7,-8.6).lineTo(0.6,-2.5).lineTo(3.9,-8.6).lineTo(8.3,-8.6).lineTo(2.6,1.3).lineTo(2.6,8.7).closePath().moveTo(-12.6,8.7).lineTo(-12.6,1.9).lineTo(-18.2,1.9).lineTo(-18.2,8.7).lineTo(-22.5,8.7).lineTo(-22.5,-8.6).lineTo(-18.2,-8.6).lineTo(-18.2,-2).lineTo(-12.6,-2).lineTo(-12.6,-8.6).lineTo(-8.5,-8.6).lineTo(-8.5,8.7).closePath().moveTo(-33.4,8.7).lineTo(-33.4,-4.8).lineTo(-38,-4.8).lineTo(-38,-8.6).lineTo(-24.6,-8.6).lineTo(-24.6,-4.8).lineTo(-29.3,-4.8).lineTo(-29.3,8.7).closePath().moveTo(-49.1,8.7).lineTo(-49.1,-8.6).lineTo(-45,-8.6).lineTo(-45,4.7).lineTo(-37.4,4.7).lineTo(-37.4,8.7).closePath().moveTo(-54.7,8.7).lineTo(-55.7,6.1).lineTo(-62.2,6.1).lineTo(-63.2,8.7).lineTo(-67.3,8.7).lineTo(-61,-8.6).lineTo(-57,-8.6).lineTo(-50.5,8.7).closePath().moveTo(-56.9,2.5).lineTo(-58.9,-3.4).lineTo(-61,2.5).lineTo(-56.9,2.5).closePath().moveTo(-81.2,8.7).lineTo(-81.2,-8.6).lineTo(-69.3,-8.6).lineTo(-69.3,-4.8).lineTo(-77.2,-4.8).lineTo(-77.2,-1.9).lineTo(-69.3,-1.9).lineTo(-69.3,1.9).lineTo(-77.2,1.9).lineTo(-77.2,4.8).lineTo(-69.3,4.8).lineTo(-69.3,8.7).closePath().moveTo(-88.9,8.7).lineTo(-88.9,1.9).lineTo(-94.6,1.9).lineTo(-94.6,8.7).lineTo(-98.7,8.7).lineTo(-98.7,-8.6).lineTo(-94.6,-8.6).lineTo(-94.6,-2).lineTo(-88.9,-2).lineTo(-88.9,-8.6).lineTo(-84.8,-8.6).lineTo(-84.8,8.7).closePath();
	this.shape_1.setTransform(84.3,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_healthySpines, new cjs.Rectangle(-14.4,-2.2,376.5,37.800000000000004), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(71,8.3).curveTo(70.3,7.7,70.3,6.7).curveTo(70.3,5.6,71,5).curveTo(71.6,4.3,72.6,4.3).curveTo(73.7,4.3,74.4,5).curveTo(75,5.6,75,6.7).curveTo(75,7.7,74.4,8.3).curveTo(73.7,9,72.6,8.9).curveTo(71.6,9,71,8.3).closePath().moveTo(11.9,8.3).curveTo(10.2,7.5,9.1,6.3).curveTo(7.9,5,7.2,3.4).curveTo(6.6,1.8,6.6,-0.1).curveTo(6.6,-1.9,7.3,-3.5).curveTo(7.9,-5.2,9.1,-6.4).curveTo(10.3,-7.6,12,-8.3).curveTo(13.6,-9,15.6,-9).curveTo(18.2,-9,20,-8).curveTo(21.8,-7,23.1,-5.5).lineTo(19.5,-3).curveTo(18.9,-4,17.9,-4.6).curveTo(17,-5,15.6,-5).curveTo(14.6,-5,13.7,-4.7).curveTo(12.8,-4.3,12.2,-3.6).curveTo(11.5,-3,11.1,-2).curveTo(10.8,-1.1,10.8,-0.1).curveTo(10.8,1.1,11.1,2.1).curveTo(11.5,2.9,12.1,3.5).curveTo(12.8,4.3,13.7,4.7).curveTo(14.6,5,15.7,5).curveTo(17.2,5,18.2,4.3).curveTo(19.2,3.5,19.7,2.2).lineTo(14.9,2.2).lineTo(14.9,-1.6).lineTo(24.3,-1.6).lineTo(24.3,0.3).curveTo(24.3,2.1,23.7,3.7).curveTo(23,5.2,21.9,6.3).curveTo(20.8,7.6,19.2,8.3).curveTo(17.6,8.9,15.7,8.9).curveTo(13.6,8.9,11.9,8.3).closePath().moveTo(-60.8,8.3).curveTo(-62.5,7.6,-63.7,6.3).curveTo(-64.9,5.1,-65.6,3.4).curveTo(-66.3,1.9,-66.3,-0.1).curveTo(-66.3,-1.9,-65.6,-3.5).curveTo(-64.9,-5.1,-63.7,-6.4).curveTo(-62.5,-7.6,-60.8,-8.3).curveTo(-59.2,-9,-57.4,-9).curveTo(-55.5,-9,-53.9,-8.3).curveTo(-52.3,-7.6,-51,-6.4).curveTo(-49.8,-5.1,-49.1,-3.5).curveTo(-48.4,-1.9,-48.4,-0.1).curveTo(-48.4,1.9,-49.1,3.4).curveTo(-49.8,5.1,-51,6.3).curveTo(-52.3,7.6,-53.9,8.3).curveTo(-55.5,8.9,-57.4,8.9).curveTo(-59.2,8.9,-60.8,8.3).closePath().moveTo(-59.2,-4.6).curveTo(-60.1,-4.1,-60.7,-3.4).curveTo(-61.4,-2.8,-61.7,-2).curveTo(-62.1,-1,-62.1,-0.1).curveTo(-62.1,1,-61.7,1.8).curveTo(-61.4,2.7,-60.8,3.4).curveTo(-60.1,4.1,-59.2,4.4).curveTo(-58.4,4.8,-57.4,4.8).curveTo(-56.4,4.8,-55.5,4.4).curveTo(-54.6,4.1,-53.9,3.4).curveTo(-53.3,2.7,-52.9,1.8).curveTo(-52.6,1,-52.6,-0.1).curveTo(-52.6,-1,-52.9,-2).curveTo(-53.3,-2.8,-53.9,-3.4).curveTo(-54.6,-4.1,-55.5,-4.6).curveTo(-56.4,-4.9,-57.4,-4.9).curveTo(-58.4,-4.9,-59.2,-4.6).closePath().moveTo(60.8,8.7).lineTo(53.9,-2.3).lineTo(53.9,8.7).lineTo(49.9,8.7).lineTo(49.9,-8.7).lineTo(54.2,-8.7).lineTo(60.8,1.7).lineTo(60.8,-8.7).lineTo(64.8,-8.7).lineTo(64.8,8.7).closePath().moveTo(42.8,8.7).lineTo(42.8,-8.7).lineTo(47.1,-8.7).lineTo(47.1,8.7).closePath().moveTo(36.8,8.7).lineTo(35.9,6.1).lineTo(29.3,6.1).lineTo(28.3,8.7).lineTo(24.1,8.7).lineTo(30.6,-8.7).lineTo(34.6,-8.7).lineTo(41.1,8.7).closePath().moveTo(34.7,2.5).lineTo(32.6,-3.4).lineTo(30.5,2.5).lineTo(34.7,2.5).closePath().moveTo(1.6,8.7).lineTo(0.6,6.1).lineTo(-6,6.1).lineTo(-6.9,8.7).lineTo(-11.1,8.7).lineTo(-4.7,-8.7).lineTo(-0.7,-8.7).lineTo(5.8,8.7).closePath().moveTo(-0.6,2.5).lineTo(-2.7,-3.4).lineTo(-4.8,2.5).lineTo(-0.6,2.5).closePath().moveTo(-29.4,8.7).lineTo(-29.4,-8.7).lineTo(-17.4,-8.7).lineTo(-17.4,-4.9).lineTo(-25.3,-4.9).lineTo(-25.3,-2).lineTo(-17.4,-2).lineTo(-17.4,1.9).lineTo(-25.3,1.9).lineTo(-25.3,4.8).lineTo(-17.4,4.8).lineTo(-17.4,8.7).closePath().moveTo(-41.6,8.7).lineTo(-48.1,-8.7).lineTo(-43.7,-8.7).lineTo(-39.6,3.1).lineTo(-35.4,-8.7).lineTo(-31.1,-8.7).lineTo(-37.6,8.7).closePath().moveTo(-78.9,8.7).lineTo(-78.9,-8.7).lineTo(-74.7,-8.7).lineTo(-74.7,4.8).lineTo(-67,4.8).lineTo(-67,8.7).closePath().moveTo(71,3.2).lineTo(71,3.1).curveTo(71,1.7,71.3,0.8).curveTo(71.6,-0.1,72,-0.7).curveTo(72.4,-1.2,72.9,-1.5).lineTo(74.5,-2.9).curveTo(74.8,-3.3,74.8,-3.8).curveTo(74.8,-4.5,74.3,-5).curveTo(73.9,-5.5,72.9,-5.5).curveTo(72.1,-5.4,71.6,-4.9).curveTo(71,-4.4,70.8,-3.8).lineTo(67.2,-5.4).curveTo(67.9,-7,69.4,-8).curveTo(70.8,-9,73.2,-9).curveTo(74.5,-9,75.5,-8.6).curveTo(76.6,-8.2,77.3,-7.6).curveTo(78.1,-6.8,78.5,-5.9).curveTo(78.9,-4.9,78.9,-3.9).curveTo(78.9,-2.8,78.6,-2.1).curveTo(78.2,-1.3,77.7,-0.9).curveTo(77.2,-0.4,76.6,-0.1).lineTo(75.5,0.6).curveTo(75,1.1,74.7,1.5).curveTo(74.4,2.2,74.4,3.1).lineTo(74.4,3.2).closePath();
	this.shape.setTransform(238.775,-9.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#008FBE").beginStroke().moveTo(74.5,8.5).curveTo(73.2,8,72.2,7.1).curveTo(71.3,6.2,70.8,4.9).curveTo(70.3,3.5,70.3,1.9).lineTo(70.3,-8.8).lineTo(74.6,-8.8).lineTo(74.6,1.9).curveTo(74.6,3.3,75.3,4.1).curveTo(76.1,4.9,77.4,4.9).curveTo(78.6,4.9,79.4,4.1).curveTo(80.2,3.3,80.2,1.9).lineTo(80.2,-8.8).lineTo(84.4,-8.8).lineTo(84.4,1.9).curveTo(84.4,3.5,84,4.9).curveTo(83.4,6.2,82.6,7.1).curveTo(81.6,8,80.3,8.5).curveTo(79,9,77.4,9).curveTo(75.8,9,74.5,8.5).closePath().moveTo(55.4,8.3).curveTo(53.7,7.6,52.5,6.4).curveTo(51.3,5.1,50.6,3.5).curveTo(49.9,1.9,49.9,-0).curveTo(49.9,-1.9,50.6,-3.5).curveTo(51.3,-5.2,52.5,-6.3).curveTo(53.7,-7.6,55.4,-8.3).curveTo(57,-9,58.9,-9).curveTo(60.7,-9,62.4,-8.3).curveTo(64,-7.6,65.2,-6.3).curveTo(66.5,-5.2,67.2,-3.5).curveTo(67.9,-1.9,67.9,-0).curveTo(67.9,1.9,67.2,3.5).curveTo(66.5,5.1,65.3,6.4).curveTo(64,7.6,62.4,8.3).curveTo(60.7,9,58.9,9).curveTo(57,9,55.4,8.3).closePath().moveTo(57,-4.6).curveTo(56.1,-4.2,55.5,-3.4).curveTo(54.9,-2.8,54.5,-1.9).curveTo(54.2,-1,54.2,-0).curveTo(54.2,1,54.5,1.9).curveTo(54.9,2.8,55.5,3.4).curveTo(56.1,4.1,57,4.5).curveTo(57.9,4.8,58.9,4.8).curveTo(59.9,4.8,60.8,4.5).curveTo(61.7,4.1,62.3,3.4).curveTo(62.9,2.8,63.3,1.9).curveTo(63.7,1,63.7,-0).curveTo(63.7,-1,63.3,-1.9).curveTo(62.9,-2.8,62.3,-3.4).curveTo(61.6,-4.2,60.7,-4.6).curveTo(59.9,-4.9,58.9,-4.9).curveTo(57.9,-4.9,57,-4.6).closePath().moveTo(-61.6,8.3).curveTo(-63.2,7.6,-64.5,6.4).curveTo(-65.7,5.1,-66.4,3.5).curveTo(-67.1,1.9,-67.1,-0).curveTo(-67.1,-1.9,-66.4,-3.5).curveTo(-65.7,-5.2,-64.5,-6.3).curveTo(-63.2,-7.6,-61.6,-8.3).curveTo(-59.9,-9,-58.1,-9).curveTo(-56.2,-9,-54.6,-8.3).curveTo(-53,-7.6,-51.8,-6.3).curveTo(-50.5,-5.2,-49.8,-3.5).curveTo(-49.1,-1.9,-49.1,-0).curveTo(-49.1,1.9,-49.8,3.5).curveTo(-50.5,5.1,-51.7,6.4).curveTo(-53,7.6,-54.5,8.3).curveTo(-56.2,9,-58.1,9).curveTo(-59.9,9,-61.6,8.3).closePath().moveTo(-59.9,-4.6).curveTo(-60.9,-4.2,-61.5,-3.4).curveTo(-62.1,-2.8,-62.5,-1.9).curveTo(-62.8,-1,-62.8,-0).curveTo(-62.8,1,-62.5,1.9).curveTo(-62.1,2.8,-61.5,3.4).curveTo(-60.9,4.1,-60,4.5).curveTo(-59.1,4.8,-58.1,4.8).curveTo(-57,4.8,-56.1,4.5).curveTo(-55.3,4.1,-54.7,3.4).curveTo(-54.1,2.8,-53.7,1.9).curveTo(-53.3,1,-53.3,-0).curveTo(-53.3,-1,-53.7,-1.9).curveTo(-54.1,-2.8,-54.7,-3.4).curveTo(-55.4,-4.2,-56.2,-4.6).curveTo(-57,-4.9,-58.1,-4.9).curveTo(-59.1,-4.9,-59.9,-4.6).closePath().moveTo(39.9,8.7).lineTo(39.9,1.4).lineTo(34.2,-8.8).lineTo(38.7,-8.8).lineTo(42.1,-2.5).lineTo(45.4,-8.8).lineTo(49.9,-8.8).lineTo(44.1,1.5).lineTo(44.1,8.7).closePath().moveTo(19.8,8.7).lineTo(19.8,-4.9).lineTo(15,-4.9).lineTo(15,-8.8).lineTo(28.6,-8.8).lineTo(28.6,-4.9).lineTo(23.9,-4.9).lineTo(23.9,8.7).closePath().moveTo(10.8,8.7).lineTo(9.9,6.1).lineTo(3.2,6.1).lineTo(2.3,8.7).lineTo(-1.9,8.7).lineTo(4.5,-8.8).lineTo(8.6,-8.8).lineTo(15.1,8.7).closePath().moveTo(8.6,2.5).lineTo(6.6,-3.4).lineTo(4.5,2.5).lineTo(8.6,2.5).closePath().moveTo(-7.1,8.7).lineTo(-7.1,2).lineTo(-12.9,2).lineTo(-12.9,8.7).lineTo(-17.1,8.7).lineTo(-17.1,-8.8).lineTo(-12.9,-8.8).lineTo(-12.9,-2.1).lineTo(-7.1,-2.1).lineTo(-7.1,-8.8).lineTo(-2.9,-8.8).lineTo(-2.9,8.7).closePath().moveTo(-27.7,8.7).lineTo(-30.8,-2.3).lineTo(-33.8,8.7).lineTo(-38,8.7).lineTo(-42.8,-8.8).lineTo(-38.6,-8.8).lineTo(-35.8,2.1).lineTo(-32.8,-8.8).lineTo(-28.8,-8.8).lineTo(-25.7,2.1).lineTo(-23,-8.8).lineTo(-18.8,-8.8).lineTo(-23.7,8.7).closePath().moveTo(-84.4,8.7).lineTo(-84.4,-8.8).lineTo(-78.2,-8.8).curveTo(-76.2,-8.8,-74.5,-8.1).curveTo(-72.9,-7.4,-71.6,-6.3).curveTo(-70.4,-5.1,-69.8,-3.4).curveTo(-69.1,-1.9,-69.1,-0).curveTo(-69.1,1.9,-69.8,3.5).curveTo(-70.5,5.1,-71.7,6.2).curveTo(-72.9,7.4,-74.5,8.1).curveTo(-76.2,8.7,-78.1,8.7).closePath().moveTo(-80.3,4.8).lineTo(-78.4,4.8).curveTo(-77.2,4.8,-76.3,4.5).curveTo(-75.3,4.1,-74.7,3.5).curveTo(-74,2.8,-73.7,1.9).curveTo(-73.3,1,-73.3,-0).curveTo(-73.3,-1.1,-73.7,-2).curveTo(-74,-2.8,-74.6,-3.4).curveTo(-75.3,-4.2,-76.2,-4.5).curveTo(-77.2,-4.9,-78.4,-4.9).lineTo(-80.3,-4.9).closePath();
	this.shape_1.setTransform(68.625,-9.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_doWhatYou, new cjs.Rectangle(-15.8,-18.5,333.5,54.1), null);


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
	this.shape.setTransform(72.55,-17.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_better, new cjs.Rectangle(0,-30.9,162.7,73), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(62.5,11.5).curveTo(61.6,10.7,61.7,9.4).curveTo(61.7,8,62.5,7.2).curveTo(63.4,6.3,64.7,6.3).curveTo(66,6.3,66.9,7.2).curveTo(67.7,8,67.7,9.4).curveTo(67.7,10.7,66.9,11.5).curveTo(66,12.4,64.7,12.4).curveTo(63.3,12.4,62.5,11.5).closePath().moveTo(54.7,12).curveTo(53.6,11.7,52.8,10.9).curveTo(52.1,10.1,51.7,8.8).curveTo(51.3,7.6,51.3,5.7).lineTo(51.3,-0.1).lineTo(48.4,-0.1).lineTo(48.4,-4.7).lineTo(51.3,-4.7).lineTo(51.3,-8.3).lineTo(56.4,-11.2).lineTo(56.4,-4.7).lineTo(60.6,-4.7).lineTo(60.6,-0.1).lineTo(56.4,-0.1).lineTo(56.4,5.4).curveTo(56.5,6.7,56.8,7.1).curveTo(57.2,7.5,57.9,7.5).curveTo(58.7,7.5,59.2,6.9).lineTo(61.6,10.9).curveTo(60.7,11.6,59.6,12).curveTo(58.5,12.3,57.2,12.3).curveTo(55.8,12.4,54.7,12).closePath().moveTo(22.9,11.7).curveTo(21.2,11,20.1,9.9).curveTo(19,8.7,18.3,7.1).curveTo(17.7,5.5,17.7,3.7).curveTo(17.7,1.9,18.4,0.3).curveTo(19,-1.3,20.2,-2.4).curveTo(21.4,-3.7,23,-4.3).curveTo(24.6,-5,26.5,-5).curveTo(28.4,-5,30,-4.3).curveTo(31.6,-3.7,32.8,-2.5).curveTo(34,-1.4,34.6,0.2).curveTo(35.2,1.8,35.2,3.6).lineTo(35.2,5.4).lineTo(22.8,5.4).curveTo(23.2,6.7,24.2,7.4).curveTo(25.1,8,26.6,8).curveTo(27.8,8,28.7,7.5).curveTo(29.5,7.1,30.1,6.3).lineTo(34.2,8.7).curveTo(32.9,10.4,31.2,11.4).curveTo(29.4,12.3,26.5,12.3).curveTo(24.5,12.4,22.9,11.7).closePath().moveTo(30.1,1.6).curveTo(29.6,0.4,28.7,-0.1).curveTo(27.9,-0.7,26.5,-0.7).curveTo(25.2,-0.7,24.3,-0.1).curveTo(23.4,0.5,22.9,1.6).lineTo(30.1,1.6).lineTo(30.1,1.6).closePath().moveTo(-11.4,11.7).curveTo(-13,11,-14.2,9.9).curveTo(-15.3,8.7,-15.9,7.1).curveTo(-16.6,5.5,-16.5,3.7).curveTo(-16.5,1.9,-15.9,0.3).curveTo(-15.2,-1.3,-14,-2.4).curveTo(-12.8,-3.7,-11.2,-4.3).curveTo(-9.7,-5,-7.7,-5).curveTo(-5.9,-5,-4.2,-4.3).curveTo(-2.6,-3.7,-1.4,-2.5).curveTo(-0.3,-1.4,0.4,0.2).curveTo(0.9,1.8,0.9,3.6).lineTo(0.9,5.4).lineTo(-11.5,5.4).curveTo(-11.1,6.7,-10.1,7.4).curveTo(-9.1,8,-7.6,8).curveTo(-6.4,8,-5.6,7.5).curveTo(-4.7,7.1,-4.2,6.3).lineTo(0,8.7).curveTo(-1.3,10.4,-3.1,11.4).curveTo(-4.9,12.3,-7.7,12.3).curveTo(-9.8,12.4,-11.4,11.7).closePath().moveTo(-4.2,1.6).curveTo(-4.6,0.4,-5.5,-0.1).curveTo(-6.4,-0.7,-7.7,-0.7).curveTo(-9,-0.7,-9.9,-0.1).curveTo(-10.9,0.5,-11.3,1.6).lineTo(-4.2,1.6).lineTo(-4.2,1.6).closePath().moveTo(-44.1,11.7).curveTo(-45.7,11,-46.9,9.9).curveTo(-48,8.7,-48.6,7.1).curveTo(-49.2,5.5,-49.2,3.7).curveTo(-49.2,1.9,-48.6,0.3).curveTo(-47.8,-1.3,-46.7,-2.4).curveTo(-45.5,-3.7,-43.9,-4.3).curveTo(-42.3,-5,-40.4,-5).curveTo(-38.5,-5,-36.9,-4.3).curveTo(-35.3,-3.7,-34.1,-2.5).curveTo(-33,-1.4,-32.3,0.2).curveTo(-31.7,1.8,-31.7,3.6).lineTo(-31.7,5.4).lineTo(-44.2,5.4).curveTo(-43.7,6.7,-42.7,7.4).curveTo(-41.7,8,-40.3,8).curveTo(-39,8,-38.2,7.5).curveTo(-37.3,7.1,-36.9,6.3).lineTo(-32.6,8.7).curveTo(-34,10.4,-35.7,11.4).curveTo(-37.6,12.3,-40.4,12.3).curveTo(-42.4,12.4,-44.1,11.7).closePath().moveTo(-36.9,1.6).curveTo(-37.2,0.4,-38.1,-0.1).curveTo(-39.1,-0.7,-40.4,-0.7).curveTo(-41.6,-0.7,-42.6,-0.1).curveTo(-43.5,0.5,-44,1.6).lineTo(-36.9,1.6).lineTo(-36.9,1.6).closePath().moveTo(42,12).lineTo(42,-4.7).lineTo(47.4,-4.7).lineTo(47.4,12).closePath().moveTo(6.7,12).lineTo(0.4,-4.7).lineTo(5.9,-4.7).lineTo(9.3,5.1).lineTo(12.6,-4.7).lineTo(18,-4.7).lineTo(11.8,12).closePath().moveTo(-23.4,12).lineTo(-23.4,-4.7).lineTo(-18,-4.7).lineTo(-18,12).closePath().moveTo(-30.6,12).lineTo(-30.6,-12.4).lineTo(-25.4,-12.4).lineTo(-25.4,12).closePath().moveTo(-67.7,12).lineTo(-67.7,-10.6).lineTo(-58.8,-10.6).curveTo(-54.6,-10.6,-52.6,-8.9).curveTo(-50.5,-7.3,-50.5,-4.1).curveTo(-50.5,-2.6,-51.2,-1.5).curveTo(-51.7,-0.4,-52.8,0.4).curveTo(-51.5,1.1,-50.8,2.2).curveTo(-50.1,3.5,-50.1,5.2).curveTo(-50.1,8.7,-52.4,10.4).curveTo(-54.7,12,-58.8,12).closePath().moveTo(-62.4,7.3).lineTo(-58.7,7.3).curveTo(-57.1,7.3,-56.3,6.7).curveTo(-55.6,6.2,-55.6,5).curveTo(-55.6,4,-56.3,3.4).curveTo(-57,2.9,-58.8,2.9).lineTo(-62.4,2.9).closePath().moveTo(-62.4,-1.8).lineTo(-58.5,-1.8).curveTo(-57.1,-1.8,-56.4,-2.4).curveTo(-55.9,-3,-55.9,-3.9).curveTo(-55.9,-4.9,-56.5,-5.3).curveTo(-57.1,-5.9,-58.6,-5.9).lineTo(-62.4,-5.9).closePath().moveTo(42.5,-6.9).curveTo(41.6,-7.8,41.7,-9.1).curveTo(41.6,-10.5,42.5,-11.4).curveTo(43.4,-12.3,44.8,-12.2).curveTo(46.1,-12.3,47,-11.4).curveTo(47.9,-10.5,47.8,-9.1).curveTo(47.9,-7.8,47,-6.9).curveTo(46.1,-6,44.8,-6).curveTo(43.4,-6,42.5,-6.9).closePath().moveTo(-22.9,-6.9).curveTo(-23.7,-7.8,-23.7,-9.1).curveTo(-23.7,-10.5,-22.9,-11.4).curveTo(-22.1,-12.3,-20.7,-12.2).curveTo(-19.2,-12.3,-18.4,-11.4).curveTo(-17.5,-10.5,-17.5,-9.1).curveTo(-17.5,-7.8,-18.4,-6.9).curveTo(-19.2,-6,-20.7,-6).curveTo(-22.1,-6,-22.9,-6.9).closePath();
	this.shape.setTransform(96.2309,-16.7627,1.1994,1.1994);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_believeIt, new cjs.Rectangle(0,-31.6,177.5,76.4), null);


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
	this.instance.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_03_1, new cjs.Rectangle(0,2,262,90), null);


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
	this.instance.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_02_1, new cjs.Rectangle(0,2,262,90), null);


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
	this.instance.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01_1, new cjs.Rectangle(0,2,262,90), null);


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
	this.shape.setTransform(511.125,-448.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#008FBE").setStrokeStyle(1,1,1).moveTo(-45.8,-11.9).lineTo(45.8,-11.9).lineTo(45.8,11.9).lineTo(-45.8,11.9).closePath();
	this.shape_1.setTransform(511.175,-448.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-45.8,11.9).lineTo(-45.8,-11.9).lineTo(45.8,-11.9).lineTo(45.8,11.9).closePath();
	this.shape_2.setTransform(511.175,-448.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(39.3,-461.5,518.7,494.3), null);


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
	this.shape.graphics.beginFill("#3C8EBA").beginStroke().moveTo(29,16.5).lineTo(29,12.1).lineTo(32.4,12.1).lineTo(32.4,12.9).lineTo(30,12.9).lineTo(30,13.9).lineTo(32.1,13.9).lineTo(32.1,14.6).lineTo(30,14.6).lineTo(30,15.7).lineTo(32.4,15.7).lineTo(32.4,16.5).closePath().moveTo(24.9,16.5).lineTo(24.9,12.1).lineTo(25.8,12.1).lineTo(25.8,15.7).lineTo(28,15.7).lineTo(28,16.5).closePath().moveTo(20.2,16.5).lineTo(20.2,12.1).lineTo(22.2,12.1).curveTo(22.7,12.1,23.1,12.3).curveTo(23.5,12.5,23.6,12.8).lineTo(23.7,13.5).lineTo(23.6,14.2).curveTo(23.5,14.5,23.1,14.7).curveTo(22.7,14.9,22.2,14.9).lineTo(21.2,14.9).lineTo(21.2,16.5).closePath().moveTo(21.2,14.2).lineTo(21.9,14.2).curveTo(22.3,14.2,22.5,14).curveTo(22.8,13.9,22.8,13.5).curveTo(22.8,13.1,22.5,12.9).lineTo(21.9,12.8).lineTo(21.2,12.8).closePath().moveTo(17.9,16.5).lineTo(17.9,13.4).lineTo(16.9,16.5).lineTo(16.1,16.5).lineTo(15,13.4).lineTo(15,16.5).lineTo(14.1,16.5).lineTo(14.1,12.1).lineTo(15.4,12.1).lineTo(16.5,15.2).lineTo(17.4,12.1).lineTo(18.8,12.1).lineTo(18.8,16.5).closePath().moveTo(9.6,16.5).lineTo(9.6,12.1).lineTo(12.8,12.1).lineTo(12.8,12.9).lineTo(10.5,12.9).lineTo(10.5,13.9).lineTo(12.6,13.9).lineTo(12.6,14.6).lineTo(10.5,14.6).lineTo(10.5,15.7).lineTo(12.9,15.7).lineTo(12.9,16.5).closePath().moveTo(6.2,16.5).lineTo(6.2,12.9).lineTo(4.9,12.9).lineTo(4.9,12.1).lineTo(8.6,12.1).lineTo(8.6,12.9).lineTo(7.2,12.9).lineTo(7.2,16.5).closePath().moveTo(-32.4,-3.1).lineTo(-32.4,-9.4).lineTo(-19.9,-9.4).lineTo(-26.2,-3.1).closePath().moveTo(-19,-10.3).lineTo(-12.7,-16.5).lineTo(-6.6,-16.5).lineTo(-6.6,-10.3).closePath();
	this.shape.setTransform(526.1,38.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#F5B846").beginStroke().moveTo(0.4,12.9).lineTo(0.4,0.4).lineTo(6.7,6.7).lineTo(6.7,12.9).closePath().moveTo(-6.8,-6.7).lineTo(-6.8,-12.9).lineTo(-0.4,-12.9).lineTo(-0.4,-0.4).closePath();
	this.shape_1.setTransform(506.65,28.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#1140A0").beginStroke().moveTo(-94.7,18.7).lineTo(-94.7,6.7).lineTo(-88.3,0.4).lineTo(-88.3,18.7).closePath().moveTo(-87.3,15.2).curveTo(-87.6,14.9,-87.5,14.6).curveTo(-87.6,14.2,-87.3,13.9).lineTo(-86.7,13.8).curveTo(-86.3,13.8,-86.2,13.9).curveTo(-85.9,14.2,-85.9,14.6).curveTo(-85.9,14.9,-86.2,15.2).curveTo(-86.3,15.4,-86.7,15.4).curveTo(-87,15.4,-87.3,15.2).closePath().moveTo(-87.2,14.1).curveTo(-87.4,14.3,-87.4,14.6).curveTo(-87.4,14.9,-87.2,15.1).curveTo(-87.1,15.1,-87.1,15.1).curveTo(-87,15.2,-87,15.2).curveTo(-86.9,15.2,-86.8,15.2).curveTo(-86.8,15.3,-86.7,15.3).curveTo(-86.5,15.3,-86.2,15.1).curveTo(-86.2,15,-86.1,14.9).curveTo(-86.1,14.9,-86.1,14.8).curveTo(-86.1,14.8,-86.1,14.7).curveTo(-86,14.7,-86,14.6).lineTo(-86.2,14.1).curveTo(-86.4,13.9,-86.7,13.9).curveTo(-86.8,13.9,-86.8,13.9).curveTo(-86.9,13.9,-87,14).curveTo(-87,14,-87.1,14).curveTo(-87.1,14,-87.2,14.1).closePath().moveTo(-86.5,15).lineTo(-86.7,14.6).lineTo(-86.8,14.6).lineTo(-86.8,15).lineTo(-87,15).lineTo(-87,14.1).lineTo(-86.7,14.1).curveTo(-86.6,14.1,-86.5,14.1).curveTo(-86.4,14.1,-86.4,14.2).curveTo(-86.3,14.2,-86.3,14.2).curveTo(-86.3,14.3,-86.3,14.4).curveTo(-86.3,14.4,-86.3,14.5).curveTo(-86.3,14.5,-86.4,14.5).curveTo(-86.4,14.6,-86.5,14.6).curveTo(-86.5,14.6,-86.6,14.6).lineTo(-86.3,15).closePath().moveTo(-86.8,14.5).lineTo(-86.7,14.5).curveTo(-86.7,14.5,-86.6,14.5).curveTo(-86.6,14.5,-86.6,14.5).curveTo(-86.5,14.4,-86.5,14.4).curveTo(-86.5,14.4,-86.5,14.4).curveTo(-86.5,14.3,-86.5,14.3).curveTo(-86.5,14.3,-86.6,14.2).curveTo(-86.6,14.2,-86.6,14.2).curveTo(-86.7,14.2,-86.7,14.2).lineTo(-86.8,14.2).closePath().moveTo(-13.3,13).curveTo(-14.2,12.1,-14.2,10.8).curveTo(-14.2,9.3,-13.3,8.4).curveTo(-12.5,7.5,-11.1,7.5).curveTo(-10.1,7.5,-9.3,8.1).curveTo(-8.5,8.6,-8.4,9.7).lineTo(-9.8,9.7).curveTo(-9.8,9.3,-10.1,8.9).curveTo(-10.6,8.6,-11.1,8.6).curveTo(-11.7,8.6,-12.1,8.9).curveTo(-12.4,9.3,-12.6,9.7).curveTo(-12.8,10.1,-12.8,10.8).curveTo(-12.8,11.6,-12.4,12.3).curveTo(-11.9,12.8,-11.1,12.8).curveTo(-10.5,12.8,-10.1,12.5).curveTo(-9.7,12,-9.7,11.5).lineTo(-8.3,11.5).curveTo(-8.6,12.6,-9.2,13.3).curveTo(-10,13.9,-11.1,13.9).curveTo(-12.5,13.9,-13.3,13).closePath().moveTo(-36.7,13).curveTo(-37.5,12.1,-37.5,10.8).curveTo(-37.5,9.3,-36.7,8.4).curveTo(-35.8,7.5,-34.4,7.5).curveTo(-33.4,7.5,-32.6,8.1).curveTo(-31.9,8.6,-31.8,9.7).lineTo(-33.1,9.7).curveTo(-33.2,9.3,-33.5,8.9).curveTo(-33.9,8.6,-34.4,8.6).curveTo(-35.1,8.6,-35.4,8.9).curveTo(-35.8,9.3,-36,9.7).curveTo(-36.1,10.1,-36.1,10.8).curveTo(-36.1,11.7,-35.7,12.3).curveTo(-35.3,12.8,-34.4,12.8).curveTo(-33.8,12.8,-33.5,12.5).curveTo(-33.1,12,-33,11.5).lineTo(-31.7,11.5).curveTo(-31.9,12.6,-32.6,13.3).curveTo(-33.3,13.9,-34.4,13.9).curveTo(-35.8,13.9,-36.7,13).closePath().moveTo(23.8,13.8).lineTo(23.6,13.4).lineTo(23.5,12.4).curveTo(23.5,11.8,23.2,11.6).curveTo(23,11.4,22.5,11.4).lineTo(21.1,11.4).lineTo(21.1,13.8).lineTo(19.7,13.8).lineTo(19.7,7.6).lineTo(23.1,7.6).curveTo(23.9,7.6,24.4,8.1).curveTo(25,8.6,25,9.3).curveTo(25,10.5,24,10.8).lineTo(24,10.9).curveTo(24.7,11.2,24.9,12.4).lineTo(24.9,12.9).lineTo(25,13.3).lineTo(25,13.5).lineTo(25,13.8).closePath().moveTo(21.1,10.4).lineTo(22.6,10.4).curveTo(23.5,10.4,23.5,9.6).curveTo(23.5,8.7,22.6,8.7).lineTo(21.1,8.7).closePath().moveTo(13.3,13.8).lineTo(13.3,7.6).lineTo(17.9,7.6).lineTo(17.9,8.8).lineTo(14.6,8.8).lineTo(14.6,10.1).lineTo(17.7,10.1).lineTo(17.7,11.1).lineTo(14.6,11.1).lineTo(14.6,12.7).lineTo(18,12.7).lineTo(18,13.8).closePath().moveTo(8.5,13.8).lineTo(8.5,8.8).lineTo(6.7,8.8).lineTo(6.7,7.6).lineTo(11.7,7.6).lineTo(11.7,8.8).lineTo(9.9,8.8).lineTo(9.9,13.8).closePath().moveTo(3.7,13.8).lineTo(1.1,9.7).lineTo(1.1,13.8).lineTo(-0.1,13.8).lineTo(-0.1,7.6).lineTo(1.3,7.6).lineTo(3.8,11.7).lineTo(3.8,7.6).lineTo(5.1,7.6).lineTo(5.1,13.8).closePath().moveTo(-6.6,13.8).lineTo(-6.6,7.6).lineTo(-2,7.6).lineTo(-2,8.8).lineTo(-5.3,8.8).lineTo(-5.3,10.1).lineTo(-2.2,10.1).lineTo(-2.2,11.1).lineTo(-5.3,11.1).lineTo(-5.3,12.7).lineTo(-1.9,12.7).lineTo(-1.9,13.8).closePath().moveTo(-23.1,13.8).lineTo(-23.1,7.6).lineTo(-21.8,7.6).lineTo(-21.8,12.7).lineTo(-18.8,12.7).lineTo(-18.8,13.8).closePath().moveTo(-25.9,13.8).lineTo(-26.4,12.4).lineTo(-28.7,12.4).lineTo(-29.2,13.8).lineTo(-30.6,13.8).lineTo(-28.2,7.6).lineTo(-26.9,7.6).lineTo(-24.5,13.8).closePath().moveTo(-28.4,11.5).lineTo(-26.8,11.5).lineTo(-27.5,9.1).closePath().moveTo(-40.6,13.8).lineTo(-40.6,7.6).lineTo(-39.2,7.6).lineTo(-39.2,13.8).closePath().moveTo(-47.9,13.8).lineTo(-47.9,7.6).lineTo(-45.2,7.6).curveTo(-44,7.6,-43.2,8.4).curveTo(-42.5,9.2,-42.5,10.7).curveTo(-42.4,12,-43.2,12.9).curveTo(-43.8,13.8,-45.2,13.8).closePath().moveTo(-46.6,12.7).lineTo(-45.3,12.7).curveTo(-44.7,12.6,-44.2,12.3).curveTo(-43.7,11.7,-43.7,10.8).curveTo(-43.7,9.9,-44.2,9.3).curveTo(-44.7,8.8,-45.6,8.8).lineTo(-46.6,8.8).closePath().moveTo(-54.3,13.8).lineTo(-54.3,7.6).lineTo(-49.7,7.6).lineTo(-49.7,8.8).lineTo(-53,8.8).lineTo(-53,10.1).lineTo(-50,10.1).lineTo(-50,11.1).lineTo(-53,11.1).lineTo(-53,12.7).lineTo(-49.7,12.7).lineTo(-49.7,13.8).closePath().moveTo(-57.8,13.8).lineTo(-57.8,9.4).lineTo(-59.2,13.8).lineTo(-60.3,13.8).lineTo(-61.7,9.4).lineTo(-61.8,9.4).lineTo(-61.8,13.8).lineTo(-63.1,13.8).lineTo(-63.1,7.6).lineTo(-61.2,7.6).lineTo(-59.7,11.8).lineTo(-58.3,7.6).lineTo(-56.4,7.6).lineTo(-56.4,13.8).closePath().moveTo(-81.2,6.7).lineTo(-87.5,0.4).lineTo(-69.3,0.4).lineTo(-69.3,6.7).closePath().moveTo(-41.5,4.6).curveTo(-41.8,4.4,-41.7,3.8).curveTo(-41.8,3.4,-41.5,3.2).curveTo(-41.2,2.9,-40.8,2.9).lineTo(-40.3,2.9).curveTo(-39.9,2.9,-39.5,2.5).curveTo(-38.6,1.1,-38.3,0.2).curveTo(-38.1,-0.4,-38.1,-0.8).curveTo(-38.1,-1.4,-38.5,-2.6).lineTo(-40.5,-7.8).lineTo(-40.9,-9).curveTo(-41.3,-9.5,-41.8,-9.7).lineTo(-42.5,-9.8).lineTo(-42.5,-10.1).lineTo(-42.4,-10.4).lineTo(-40,-10.4).lineTo(-37.9,-10.4).curveTo(-37.9,-10.4,-37.8,-10.4).curveTo(-37.8,-10.3,-37.8,-10.3).curveTo(-37.8,-10.3,-37.8,-10.2).curveTo(-37.8,-10.2,-37.8,-10.1).lineTo(-37.9,-9.8).lineTo(-38.5,-9.7).curveTo(-39.1,-9.6,-39,-9.3).curveTo(-39.1,-9,-38.3,-7.1).lineTo(-37.6,-4.8).lineTo(-36.8,-3).curveTo(-36.6,-3.2,-36,-4.8).lineTo(-35.1,-6.8).curveTo(-34.3,-8.8,-34.3,-9.2).curveTo(-34.2,-9.6,-34.9,-9.7).lineTo(-35.6,-9.8).lineTo(-35.7,-10.1).curveTo(-35.7,-10.2,-35.7,-10.2).curveTo(-35.7,-10.3,-35.7,-10.3).curveTo(-35.6,-10.3,-35.6,-10.4).curveTo(-35.6,-10.4,-35.5,-10.4).lineTo(-33.4,-10.4).lineTo(-31.5,-10.4).curveTo(-31.5,-10.4,-31.5,-10.4).curveTo(-31.4,-10.3,-31.4,-10.3).curveTo(-31.4,-10.3,-31.4,-10.2).curveTo(-31.4,-10.2,-31.4,-10.1).curveTo(-31.4,-10,-31.4,-10).curveTo(-31.4,-9.9,-31.4,-9.9).curveTo(-31.4,-9.8,-31.4,-9.8).curveTo(-31.4,-9.8,-31.5,-9.8).lineTo(-31.8,-9.7).curveTo(-32.5,-9.6,-32.9,-9).curveTo(-33.3,-8.5,-33.9,-7.1).lineTo(-35.3,-4.3).lineTo(-39.1,3.8).curveTo(-39.7,4.9,-40.7,4.9).curveTo(-41.2,4.9,-41.5,4.6).closePath().moveTo(66.7,-0.3).curveTo(66,-2.4,63.8,-7.3).curveTo(61.6,-2.9,60.8,-0.3).lineTo(60.4,-0.2).lineTo(60.1,-0.3).lineTo(58.4,-4.3).lineTo(53.8,-14.5).curveTo(53.3,-15.4,53,-15.7).curveTo(52.6,-16.2,51.9,-16.2).lineTo(51.3,-16.3).curveTo(51.3,-16.3,51.3,-16.4).curveTo(51.3,-16.4,51.3,-16.4).curveTo(51.3,-16.5,51.3,-16.5).curveTo(51.3,-16.6,51.3,-16.7).lineTo(51.4,-16.9).lineTo(53.9,-16.8).lineTo(56.7,-16.9).curveTo(56.8,-16.9,56.8,-16.8).curveTo(56.8,-16.8,56.9,-16.8).curveTo(56.9,-16.8,56.9,-16.7).curveTo(56.9,-16.7,56.9,-16.7).curveTo(56.9,-16.6,56.9,-16.6).curveTo(56.9,-16.5,56.9,-16.5).curveTo(56.8,-16.4,56.8,-16.4).curveTo(56.8,-16.3,56.7,-16.3).lineTo(56.2,-16.2).curveTo(55.4,-16.2,55.4,-15.9).curveTo(55.4,-15.5,56.6,-12.6).lineTo(60.9,-3.4).lineTo(62.8,-7.4).curveTo(63.2,-8.2,63.2,-8.4).lineTo(63,-9).lineTo(60.2,-14.9).curveTo(60,-15.6,59.6,-15.9).curveTo(59.3,-16.2,58.7,-16.2).lineTo(58.1,-16.3).lineTo(58.1,-16.7).curveTo(58.1,-16.7,58.1,-16.7).curveTo(58.1,-16.8,58.1,-16.8).curveTo(58.1,-16.8,58.1,-16.8).curveTo(58.2,-16.9,58.2,-16.9).lineTo(60.8,-16.8).lineTo(63.6,-16.9).lineTo(63.7,-16.7).lineTo(63.6,-16.3).lineTo(62.9,-16.2).curveTo(62.2,-16.2,62.1,-16).curveTo(62.1,-15.8,62.4,-14.9).lineTo(64.3,-10.7).curveTo(65.2,-12.5,65.7,-13.8).curveTo(66.4,-15.4,66.4,-15.9).curveTo(66.3,-16.2,65.7,-16.2).lineTo(64.9,-16.3).lineTo(64.8,-16.7).lineTo(65,-16.9).lineTo(67.4,-16.8).lineTo(69.7,-16.9).lineTo(69.8,-16.7).curveTo(69.8,-16.6,69.8,-16.6).curveTo(69.8,-16.5,69.8,-16.5).curveTo(69.8,-16.4,69.8,-16.4).curveTo(69.7,-16.3,69.7,-16.3).lineTo(69,-16.2).curveTo(68.4,-16.2,67.9,-15.5).curveTo(67.6,-15.2,67.1,-14.1).curveTo(66,-12.3,65.2,-10.1).lineTo(64.8,-9.6).lineTo(65,-9).lineTo(67.5,-3.4).lineTo(69.8,-8.6).lineTo(71.7,-13.5).lineTo(72.5,-15.6).curveTo(72.5,-16.2,71.6,-16.2).lineTo(70.9,-16.3).curveTo(70.9,-16.3,70.8,-16.4).curveTo(70.8,-16.4,70.8,-16.5).curveTo(70.8,-16.5,70.8,-16.6).curveTo(70.8,-16.6,70.8,-16.7).curveTo(70.8,-16.7,70.8,-16.7).curveTo(70.8,-16.8,70.8,-16.8).curveTo(70.9,-16.8,70.9,-16.8).curveTo(71,-16.9,71,-16.9).lineTo(73.5,-16.8).curveTo(74.7,-16.8,75.4,-17.3).lineTo(76.6,-18.1).curveTo(76.7,-18.2,76.7,-18.2).curveTo(76.7,-18.2,76.7,-18.2).curveTo(76.7,-18.2,76.7,-18.2).curveTo(76.7,-18.2,76.7,-18.1).lineTo(76.9,-18).curveTo(76.7,-16.5,76.7,-15).lineTo(76.7,-9.9).curveTo(76.7,-9.5,76.9,-9.3).curveTo(78.5,-10.6,80.1,-10.7).curveTo(81.8,-10.7,82.7,-9.7).curveTo(83.3,-8.9,83.4,-7.4).lineTo(83.4,-3.4).curveTo(83.3,-2,83.5,-1.8).curveTo(83.7,-1.4,84.3,-1.3).lineTo(85,-1.2).curveTo(85,-1.2,85,-1.1).curveTo(85,-1.1,85.1,-1).curveTo(85.1,-1,85.1,-0.9).curveTo(85.1,-0.9,85.1,-0.9).lineTo(84.9,-0.6).lineTo(82.5,-0.7).lineTo(80.1,-0.6).lineTo(80,-0.9).lineTo(80.1,-1.2).lineTo(80.6,-1.3).curveTo(81.3,-1.4,81.4,-1.8).curveTo(81.5,-2,81.6,-3.4).lineTo(81.6,-7).curveTo(81.6,-8.2,80.9,-8.8).curveTo(80.4,-9.6,79.2,-9.6).curveTo(78.1,-9.5,77.3,-8.9).lineTo(76.9,-8.4).curveTo(76.7,-8.1,76.7,-7.5).lineTo(76.7,-3.4).curveTo(76.8,-2.1,77,-1.8).curveTo(77.1,-1.4,77.8,-1.3).lineTo(78.2,-1.2).lineTo(78.3,-0.9).lineTo(78.2,-0.6).lineTo(75.9,-0.7).lineTo(73.5,-0.6).lineTo(73.3,-0.9).curveTo(73.3,-0.9,73.3,-0.9).curveTo(73.3,-1,73.3,-1).curveTo(73.4,-1.1,73.4,-1.1).curveTo(73.4,-1.2,73.5,-1.2).lineTo(74,-1.3).curveTo(74.7,-1.4,74.8,-1.8).curveTo(75,-2,75,-3.4).lineTo(75,-14.4).curveTo(75,-15.6,74.9,-16).curveTo(74.9,-16,74.8,-16).curveTo(74.8,-16.1,74.8,-16.1).curveTo(74.7,-16.1,74.7,-16.1).curveTo(74.7,-16.1,74.6,-16.1).curveTo(74.1,-15.9,73.8,-15.3).curveTo(73.4,-14.9,72.2,-12).lineTo(70.5,-7.9).curveTo(69,-4.3,67.4,-0.3).lineTo(67.1,-0.2).lineTo(66.7,-0.3).closePath().moveTo(-6.9,-1.2).curveTo(-7.1,-1.6,-7.3,-2.7).lineTo(-7.5,-4.6).curveTo(-7.5,-4.6,-7.5,-4.7).curveTo(-7.5,-4.7,-7.4,-4.7).curveTo(-7.4,-4.7,-7.3,-4.7).curveTo(-7.3,-4.7,-7.3,-4.7).curveTo(-7.2,-4.8,-7.1,-4.8).curveTo(-7.1,-4.8,-7.1,-4.8).curveTo(-7,-4.8,-7,-4.7).curveTo(-7,-4.7,-7,-4.7).curveTo(-5.9,-1,-2.7,-1).curveTo(-1.3,-1.1,-0.4,-1.8).curveTo(0.3,-2.7,0.3,-3.8).curveTo(0.3,-4.9,0,-5.5).curveTo(-0.5,-6.6,-1.7,-7.3).lineTo(-4,-8.8).curveTo(-6.6,-10.6,-6.6,-13).curveTo(-6.6,-14.8,-5.4,-16).curveTo(-4,-17.2,-1.7,-17.2).curveTo(-0.6,-17.2,0.6,-16.9).lineTo(1.5,-16.8).lineTo(1.7,-15.4).lineTo(1.9,-13.7).lineTo(1.6,-13.6).curveTo(1.5,-13.6,1.5,-13.6).curveTo(1.4,-13.6,1.4,-13.6).curveTo(1.4,-13.6,1.3,-13.7).curveTo(1.3,-13.7,1.3,-13.7).curveTo(1,-14.8,0.4,-15.5).curveTo(-0.5,-16.4,-2,-16.4).curveTo(-3.6,-16.4,-4.4,-15.5).curveTo(-5,-14.8,-5,-13.7).curveTo(-5,-12,-2.9,-10.7).lineTo(-0.9,-9.5).curveTo(2.1,-7.7,2.1,-4.8).curveTo(2.1,-2.8,0.7,-1.5).curveTo(-0.7,-0.2,-3.1,-0.2).curveTo(-5.3,-0.2,-6.9,-1.2).closePath().moveTo(100.7,-0.8).curveTo(99.9,-1.2,99.3,-1.9).curveTo(98.3,-3.3,98.3,-5.1).curveTo(98.3,-7.4,99.6,-9).curveTo(101.1,-10.7,103.2,-10.7).curveTo(104.7,-10.7,105.8,-9.8).curveTo(106.6,-8.9,106.7,-7.8).lineTo(106.6,-7.1).curveTo(106.5,-6.9,105.2,-7).lineTo(100.6,-7).curveTo(100.1,-7,100,-6.9).curveTo(99.9,-6.7,99.9,-6.3).curveTo(99.9,-4.3,101,-3).curveTo(102.2,-1.6,104,-1.7).curveTo(104.6,-1.6,105.2,-1.9).curveTo(105.7,-2.2,106.2,-2.9).curveTo(106.6,-3,106.7,-2.6).curveTo(106.2,-1.5,105,-0.8).curveTo(103.9,-0.3,102.8,-0.3).curveTo(101.7,-0.3,100.7,-0.8).closePath().moveTo(101,-9.2).curveTo(100.2,-8.5,100.2,-7.8).lineTo(100.4,-7.7).lineTo(102.2,-7.7).curveTo(104.3,-7.7,104.6,-7.9).curveTo(104.8,-8,104.8,-8.4).curveTo(104.8,-9,104.4,-9.3).curveTo(103.8,-9.9,103,-9.9).curveTo(101.9,-9.9,101,-9.2).closePath().moveTo(93.2,-1).curveTo(92.7,-1.8,92.7,-3).lineTo(92.7,-8.6).curveTo(92.7,-9.1,92.6,-9.2).curveTo(92.6,-9.2,92.6,-9.2).curveTo(92.5,-9.3,92.5,-9.3).curveTo(92.4,-9.3,92.3,-9.3).curveTo(92.3,-9.3,92.2,-9.3).lineTo(91.5,-9.3).curveTo(91.5,-9.3,91.4,-9.3).curveTo(91.4,-9.4,91.4,-9.4).curveTo(91.3,-9.4,91.3,-9.5).curveTo(91.3,-9.5,91.3,-9.6).lineTo(91.4,-9.8).curveTo(92.5,-10.1,92.9,-10.6).curveTo(93.5,-11,94,-12).lineTo(94.3,-12).lineTo(94.5,-11.9).lineTo(94.5,-10.8).lineTo(94.5,-10.4).lineTo(95,-10.4).lineTo(97.7,-10.4).curveTo(97.9,-10.1,97.9,-9.8).curveTo(97.9,-9.7,97.9,-9.6).curveTo(97.9,-9.5,97.8,-9.4).curveTo(97.8,-9.4,97.8,-9.3).curveTo(97.7,-9.3,97.7,-9.3).lineTo(95,-9.3).curveTo(94.9,-9.3,94.8,-9.3).curveTo(94.7,-9.3,94.7,-9.3).curveTo(94.6,-9.3,94.6,-9.2).curveTo(94.6,-9.2,94.5,-9.2).curveTo(94.4,-9.1,94.4,-8.7).lineTo(94.4,-4.2).curveTo(94.4,-2.9,94.7,-2.3).curveTo(95.2,-1.4,96.3,-1.4).lineTo(97,-1.5).lineTo(97.5,-1.8).lineTo(97.8,-1.8).lineTo(97.8,-1.5).curveTo(96.8,-0.3,95.2,-0.3).curveTo(93.8,-0.3,93.2,-1).closePath().moveTo(33.3,-1).curveTo(32.8,-1.8,32.8,-3).lineTo(32.8,-8.6).lineTo(32.8,-9.2).curveTo(32.7,-9.2,32.7,-9.2).curveTo(32.7,-9.3,32.6,-9.3).curveTo(32.6,-9.3,32.5,-9.3).curveTo(32.4,-9.3,32.3,-9.3).lineTo(31.6,-9.3).curveTo(31.6,-9.3,31.6,-9.3).curveTo(31.6,-9.4,31.5,-9.4).curveTo(31.5,-9.4,31.5,-9.5).curveTo(31.5,-9.5,31.5,-9.6).curveTo(31.5,-9.6,31.5,-9.6).curveTo(31.5,-9.7,31.5,-9.7).curveTo(31.5,-9.7,31.5,-9.7).curveTo(31.6,-9.8,31.6,-9.8).curveTo(32.7,-10.1,33.1,-10.6).curveTo(33.6,-11.1,34.1,-12).lineTo(34.4,-12).lineTo(34.7,-11.9).lineTo(34.7,-10.8).lineTo(34.7,-10.4).lineTo(35.1,-10.4).lineTo(37.8,-10.4).curveTo(38,-10.1,38,-9.8).curveTo(38,-9.7,38,-9.6).curveTo(38,-9.5,38,-9.4).curveTo(37.9,-9.4,37.9,-9.3).curveTo(37.9,-9.3,37.8,-9.3).lineTo(35.1,-9.3).lineTo(34.7,-9.2).curveTo(34.6,-9.1,34.6,-8.7).lineTo(34.6,-4.2).curveTo(34.6,-2.9,34.9,-2.3).curveTo(35.3,-1.4,36.4,-1.4).lineTo(37.1,-1.5).lineTo(37.7,-1.8).lineTo(37.9,-1.8).lineTo(38,-1.5).curveTo(37,-0.3,35.3,-0.3).curveTo(33.9,-0.3,33.3,-1).closePath().moveTo(25.9,-1).curveTo(25.4,-1.8,25.4,-3).lineTo(25.4,-8.6).curveTo(25.4,-9.1,25.3,-9.2).curveTo(25.3,-9.2,25.3,-9.2).curveTo(25.3,-9.3,25.2,-9.3).curveTo(25.2,-9.3,25.1,-9.3).curveTo(25,-9.3,25,-9.3).lineTo(24.2,-9.3).lineTo(24.2,-9.6).curveTo(24.1,-9.6,24.1,-9.6).curveTo(24.1,-9.7,24.1,-9.7).curveTo(24.1,-9.7,24.1,-9.7).curveTo(24.2,-9.8,24.2,-9.8).curveTo(25.3,-10.1,25.8,-10.6).curveTo(26.3,-11.1,26.7,-12).lineTo(26.9,-12).lineTo(27.2,-11.9).lineTo(27.2,-10.8).curveTo(27.2,-10.7,27.3,-10.6).curveTo(27.3,-10.6,27.3,-10.5).curveTo(27.3,-10.5,27.3,-10.4).curveTo(27.3,-10.4,27.4,-10.4).lineTo(27.7,-10.4).lineTo(30.4,-10.4).curveTo(30.6,-10.1,30.6,-9.8).curveTo(30.6,-9.7,30.6,-9.6).curveTo(30.6,-9.5,30.6,-9.4).curveTo(30.5,-9.4,30.5,-9.3).curveTo(30.5,-9.3,30.4,-9.3).lineTo(27.7,-9.3).curveTo(27.6,-9.3,27.5,-9.3).curveTo(27.5,-9.3,27.4,-9.3).curveTo(27.4,-9.3,27.4,-9.2).curveTo(27.4,-9.2,27.4,-9.2).curveTo(27.2,-9.1,27.2,-8.7).lineTo(27.2,-4.2).curveTo(27.2,-2.9,27.5,-2.3).curveTo(27.9,-1.4,29,-1.4).lineTo(29.7,-1.5).lineTo(30.3,-1.8).lineTo(30.5,-1.8).lineTo(30.5,-1.5).curveTo(29.6,-0.3,27.9,-0.3).curveTo(26.6,-0.3,25.9,-1).closePath().moveTo(14.3,-1.8).curveTo(12.8,-3.1,12.8,-5.4).curveTo(12.8,-7.7,14.3,-9.2).curveTo(15.9,-10.7,18,-10.7).curveTo(20.2,-10.7,21.5,-9.3).curveTo(23,-7.7,23.1,-5.6).curveTo(23.1,-3.3,21.6,-1.8).curveTo(20.2,-0.3,17.9,-0.3).curveTo(15.7,-0.3,14.3,-1.8).closePath().moveTo(15.8,-8.8).curveTo(14.9,-7.6,15,-5.6).curveTo(15,-3.9,15.7,-2.6).curveTo(16.6,-1.1,18.1,-1).curveTo(19.6,-1,20.3,-2.4).curveTo(21,-3.5,20.9,-5.2).curveTo(20.9,-7.1,20.3,-8.3).curveTo(19.4,-9.9,17.8,-9.9).curveTo(16.5,-9.9,15.8,-8.8).closePath().moveTo(5.1,-1.6).curveTo(3.7,-3,3.7,-5.2).curveTo(3.7,-7.4,5.2,-8.9).curveTo(6.7,-10.7,9.6,-10.7).curveTo(10.8,-10.7,11.8,-10.2).curveTo(12.2,-10,12.2,-9.3).curveTo(12.2,-8.9,11.9,-8.7).curveTo(11.9,-8.6,11.9,-8.5).curveTo(11.8,-8.5,11.8,-8.5).curveTo(11.7,-8.4,11.7,-8.4).curveTo(11.7,-8.4,11.6,-8.4).lineTo(11.3,-8.5).curveTo(10.1,-9.8,8.8,-9.8).curveTo(7.4,-9.8,6.4,-8.9).curveTo(5.5,-7.7,5.5,-5.9).curveTo(5.5,-4.2,6.4,-3).curveTo(7.5,-1.6,9.4,-1.7).curveTo(10.4,-1.7,11.1,-2.1).curveTo(11.6,-2.4,12.2,-3.2).lineTo(12.4,-3.1).lineTo(12.5,-2.8).curveTo(12,-1.6,10.7,-0.9).curveTo(9.6,-0.3,8.5,-0.3).curveTo(6.4,-0.3,5.1,-1.6).closePath().moveTo(-25.2,-1.8).curveTo(-26.6,-3.1,-26.6,-5.4).curveTo(-26.6,-7.7,-25.1,-9.2).curveTo(-23.7,-10.7,-21.5,-10.7).curveTo(-19.4,-10.7,-18,-9.3).curveTo(-16.5,-7.7,-16.4,-5.6).curveTo(-16.4,-3.3,-17.9,-1.8).curveTo(-19.4,-0.3,-21.6,-0.3).curveTo(-23.8,-0.3,-25.2,-1.8).closePath().moveTo(-23.7,-8.8).curveTo(-24.6,-7.6,-24.5,-5.6).curveTo(-24.5,-3.9,-23.8,-2.6).curveTo(-22.9,-1.1,-21.4,-1).curveTo(-19.9,-1,-19.2,-2.4).curveTo(-18.6,-3.5,-18.6,-5.2).curveTo(-18.6,-7.1,-19.2,-8.3).curveTo(-20.2,-9.9,-21.8,-9.9).curveTo(-23,-9.9,-23.7,-8.8).closePath().moveTo(-45.4,-1).curveTo(-45.5,-1.1,-45.5,-1.2).curveTo(-45.6,-1.3,-45.6,-1.3).curveTo(-45.7,-1.4,-45.7,-1.4).curveTo(-45.7,-1.4,-45.8,-1.4).lineTo(-46.1,-1.3).lineTo(-46.8,-0.9).lineTo(-47.6,-0.6).curveTo(-48.1,-0.3,-48.5,-0.3).curveTo(-49.5,-0.3,-50.3,-0.9).curveTo(-51,-1.6,-51.1,-2.6).curveTo(-51.1,-3.3,-50.6,-3.8).curveTo(-50.1,-4.2,-49,-4.7).lineTo(-46.1,-5.7).curveTo(-46,-5.8,-45.9,-5.8).curveTo(-45.9,-5.8,-45.8,-5.8).curveTo(-45.8,-5.9,-45.8,-5.9).curveTo(-45.7,-5.9,-45.7,-6).lineTo(-45.6,-6.4).lineTo(-45.6,-7.6).curveTo(-45.6,-8.5,-45.9,-8.9).curveTo(-46.4,-9.7,-47.4,-9.7).curveTo(-47.9,-9.7,-48.4,-9.5).curveTo(-49,-9.1,-49,-8.6).curveTo(-49,-7.9,-49.2,-7.8).curveTo(-49.8,-7.3,-50.6,-7.3).curveTo(-50.7,-7.3,-50.8,-7.4).curveTo(-50.8,-7.4,-50.9,-7.4).curveTo(-50.9,-7.5,-50.9,-7.5).curveTo(-50.9,-7.6,-50.9,-7.7).curveTo(-50.9,-8.5,-49.3,-9.7).curveTo(-47.8,-10.7,-46.4,-10.7).curveTo(-45.1,-10.6,-44.4,-9.9).curveTo(-43.8,-9.2,-43.9,-7.8).lineTo(-44,-3.5).curveTo(-44.1,-1.4,-42.8,-1.4).lineTo(-42.3,-1.6).lineTo(-42,-1.8).curveTo(-41.9,-1.7,-41.9,-1.7).curveTo(-41.8,-1.7,-41.8,-1.7).curveTo(-41.8,-1.6,-41.8,-1.6).curveTo(-41.7,-1.5,-41.7,-1.4).curveTo(-41.7,-1.3,-42.4,-0.8).curveTo(-43,-0.3,-43.9,-0.3).curveTo(-44.8,-0.3,-45.4,-1).closePath().moveTo(-47,-4.7).curveTo(-48.2,-4.2,-48.6,-3.9).curveTo(-49.1,-3.6,-49.1,-2.9).curveTo(-49.1,-2.4,-48.8,-2).curveTo(-48.3,-1.4,-47.6,-1.4).curveTo(-47.2,-1.4,-46.8,-1.6).curveTo(-46.3,-1.8,-46.1,-2).curveTo(-45.8,-2.2,-45.8,-2.6).lineTo(-45.8,-3.2).lineTo(-45.7,-4.6).curveTo(-45.7,-4.7,-45.7,-4.8).curveTo(-45.7,-4.8,-45.8,-4.9).curveTo(-45.8,-4.9,-45.9,-4.9).curveTo(-45.9,-5,-46,-5).curveTo(-46.3,-5,-47,-4.7).closePath().moveTo(41.7,-1.8).curveTo(40.2,-3,40.2,-4.8).curveTo(40.2,-7.6,43,-8.8).curveTo(42,-9.8,42,-10.9).curveTo(42,-12.1,42.9,-13).curveTo(43.8,-13.9,45.1,-13.9).curveTo(46,-13.9,46.7,-13.5).curveTo(47.4,-12.9,47.4,-12.1).curveTo(47.4,-11.2,46.7,-10.8).curveTo(46.2,-10.3,45.7,-10.4).curveTo(45.2,-10.3,45.5,-10.8).lineTo(45.7,-11.1).curveTo(45.9,-11.4,45.7,-11.8).curveTo(45.6,-12.2,45.2,-12.5).curveTo(44.9,-12.8,44.3,-12.8).curveTo(43.7,-12.8,43.2,-12.5).curveTo(42.8,-12.1,42.8,-11.5).curveTo(42.8,-10.8,43.2,-10.4).curveTo(43.7,-9.9,44.9,-9.2).curveTo(47.1,-8.1,47.9,-7.3).curveTo(49.5,-6,50.6,-3.7).curveTo(51.4,-4.8,51.4,-6.1).curveTo(51.4,-6.9,50.9,-7.8).curveTo(50.6,-8.2,50,-8.2).curveTo(49.3,-8.3,48.7,-7.9).lineTo(48.4,-7.8).curveTo(48.3,-7.8,48.3,-8.3).curveTo(48.3,-8.9,49,-9.3).curveTo(49.5,-9.7,50.4,-9.8).lineTo(51.7,-9.7).lineTo(52.6,-9.5).curveTo(53,-9.5,53.2,-9.7).lineTo(53.2,-9.8).lineTo(53.3,-9.8).curveTo(53.4,-9.8,53.4,-9.8).curveTo(53.5,-9.8,53.5,-9.8).curveTo(53.5,-9.7,53.6,-9.7).curveTo(53.6,-9.7,53.6,-9.7).curveTo(53.6,-8.3,51.9,-7.9).curveTo(52.3,-7.2,52.2,-6.3).curveTo(52.3,-4.6,51,-3.1).curveTo(51.6,-2.1,52.1,-1.7).curveTo(52.7,-1.3,53.6,-1.2).lineTo(54.2,-1.4).lineTo(54.7,-1.5).curveTo(54.7,-1.5,54.7,-1.4).curveTo(54.8,-1.4,54.8,-1.4).curveTo(54.8,-1.4,54.8,-1.4).curveTo(54.8,-1.3,54.8,-1.3).curveTo(54.9,-1,54.1,-0.7).curveTo(53.5,-0.5,52.4,-0.5).curveTo(51.5,-0.5,50.9,-0.7).curveTo(50.3,-1,49.4,-1.8).curveTo(48.2,-1,47.4,-0.7).curveTo(46.5,-0.5,45.5,-0.5).curveTo(43.1,-0.5,41.7,-1.8).closePath().moveTo(42.1,-6.3).curveTo(42,-4.4,43.4,-2.9).curveTo(44.8,-1.5,46.6,-1.6).lineTo(47.7,-1.7).lineTo(49,-2.2).lineTo(47.9,-3.6).lineTo(47.4,-4.4).curveTo(46.5,-5.7,45.6,-6.6).curveTo(45,-7.1,44,-7.9).lineTo(43.5,-8.2).curveTo(42.1,-7.9,42.1,-6.3).closePath().moveTo(-87.5,-18.7).lineTo(-81.2,-18.7).lineTo(-81.2,-6.7).lineTo(-87.5,-0.5).closePath().moveTo(-106.7,-0.5).lineTo(-106.7,-6.7).lineTo(-94.7,-6.7).lineTo(-88.3,-0.5).closePath().moveTo(88.1,-0.7).lineTo(85.8,-0.6).lineTo(85.7,-0.9).lineTo(85.7,-1.2).lineTo(86.3,-1.3).curveTo(86.9,-1.4,87.1,-1.8).curveTo(87.3,-2,87.2,-3.4).lineTo(87.2,-7.7).curveTo(87.2,-8.5,87.2,-8.7).curveTo(87.1,-8.9,86.5,-9.2).lineTo(86.3,-9.3).lineTo(86.2,-9.6).lineTo(86.3,-9.8).lineTo(87.7,-10.4).lineTo(88.9,-10.9).curveTo(89,-10.9,89,-10.9).curveTo(89.1,-10.9,89.1,-10.9).curveTo(89.1,-10.9,89.1,-10.9).curveTo(89.1,-10.9,89.1,-10.8).lineTo(89.1,-7.8).lineTo(89.1,-3.4).curveTo(89.1,-2,89.2,-1.8).curveTo(89.3,-1.4,90,-1.3).lineTo(90.5,-1.2).curveTo(90.5,-1.2,90.5,-1.1).curveTo(90.5,-1.1,90.6,-1.1).curveTo(90.6,-1,90.6,-1).curveTo(90.6,-0.9,90.6,-0.9).lineTo(90.5,-0.6).lineTo(88.1,-0.7).closePath().moveTo(-12.9,-0.7).lineTo(-15.2,-0.6).lineTo(-15.4,-0.9).lineTo(-15.3,-1.2).lineTo(-14.7,-1.3).curveTo(-14.1,-1.4,-13.9,-1.8).curveTo(-13.8,-2,-13.8,-3.4).lineTo(-13.8,-7.7).lineTo(-13.9,-8.7).lineTo(-14.5,-9.2).lineTo(-14.7,-9.3).curveTo(-14.7,-9.4,-14.8,-9.4).curveTo(-14.8,-9.4,-14.8,-9.5).curveTo(-14.8,-9.5,-14.8,-9.5).curveTo(-14.8,-9.6,-14.8,-9.6).lineTo(-14.7,-9.8).lineTo(-13.5,-10.4).lineTo(-12.2,-10.9).lineTo(-12,-10.8).lineTo(-12,-9.3).lineTo(-11.9,-9.2).lineTo(-10.6,-10.1).curveTo(-9.9,-10.7,-9.3,-10.7).curveTo(-8.8,-10.6,-8.5,-10.4).curveTo(-8.2,-10.1,-8.2,-9.7).curveTo(-8.2,-9.1,-8.5,-8.8).curveTo(-8.9,-8.5,-9.2,-8.5).lineTo(-9.8,-8.8).curveTo(-10.4,-9.1,-10.9,-9.1).curveTo(-11.3,-9.1,-11.7,-8.7).curveTo(-12.1,-8.1,-12,-6.7).lineTo(-12,-3.4).curveTo(-12.1,-2,-11.9,-1.8).curveTo(-11.7,-1.4,-11,-1.3).lineTo(-10.1,-1.2).curveTo(-10.1,-1.2,-10.1,-1.1).curveTo(-10.1,-1.1,-10.1,-1).curveTo(-10.1,-1,-10.1,-0.9).curveTo(-10.1,-0.9,-10.1,-0.9).lineTo(-10.2,-0.6).lineTo(-12.9,-0.7).closePath().moveTo(-29.8,-0.7).lineTo(-32.2,-0.6).curveTo(-32.2,-0.6,-32.3,-0.6).curveTo(-32.3,-0.7,-32.3,-0.7).curveTo(-32.4,-0.7,-32.4,-0.8).curveTo(-32.4,-0.8,-32.4,-0.9).curveTo(-32.4,-0.9,-32.4,-0.9).curveTo(-32.4,-1,-32.4,-1).curveTo(-32.4,-1.1,-32.3,-1.1).curveTo(-32.3,-1.2,-32.3,-1.2).lineTo(-31.7,-1.3).curveTo(-31.1,-1.4,-30.9,-1.8).curveTo(-30.8,-2,-30.8,-3.4).lineTo(-30.8,-14.4).curveTo(-30.8,-15.6,-30.9,-15.9).curveTo(-31,-16.2,-31.6,-16.5).lineTo(-31.8,-16.7).lineTo(-31.9,-16.9).lineTo(-31.8,-17.2).curveTo(-29.9,-17.7,-29.2,-18.1).curveTo(-29.2,-18.1,-29.1,-18.1).curveTo(-29.1,-18.1,-29,-18.1).curveTo(-29,-18.1,-29,-18.1).curveTo(-29,-18,-29,-18).lineTo(-29,-15).lineTo(-29,-3.4).curveTo(-29,-2,-28.9,-1.8).curveTo(-28.7,-1.4,-28.1,-1.3).lineTo(-27.4,-1.2).curveTo(-27.4,-1.2,-27.4,-1.1).curveTo(-27.4,-1.1,-27.4,-1.1).curveTo(-27.4,-1,-27.4,-1).curveTo(-27.4,-0.9,-27.4,-0.9).lineTo(-27.5,-0.6).lineTo(-29.8,-0.7).closePath().moveTo(-62.1,-0.7).lineTo(-64.9,-0.6).lineTo(-65,-0.9).curveTo(-65,-0.9,-65,-0.9).curveTo(-65,-1,-65,-1).curveTo(-65,-1.1,-64.9,-1.1).curveTo(-64.9,-1.2,-64.9,-1.2).lineTo(-64.4,-1.3).curveTo(-63.5,-1.4,-63.3,-1.9).curveTo(-63.1,-2.4,-63.1,-4.3).lineTo(-63.1,-13.6).curveTo(-63.1,-15.1,-63.3,-15.4).curveTo(-63.6,-16,-64.3,-16).lineTo(-65,-16.1).curveTo(-65.1,-16.1,-65.1,-16.2).curveTo(-65.2,-16.2,-65.2,-16.2).curveTo(-65.2,-16.3,-65.2,-16.3).curveTo(-65.2,-16.4,-65.2,-16.4).curveTo(-65.2,-16.5,-65.2,-16.5).curveTo(-65.2,-16.6,-65.2,-16.6).curveTo(-65.2,-16.7,-65.1,-16.7).curveTo(-65.1,-16.7,-65,-16.8).curveTo(-63.1,-16.9,-59.8,-16.9).curveTo(-57,-16.9,-55.7,-16.2).curveTo(-53.9,-15.3,-53.9,-13.2).curveTo(-53.9,-12,-54.5,-11.1).curveTo(-55.1,-10.3,-56.3,-9.8).curveTo(-56.3,-9.6,-55.9,-9.5).curveTo(-54.6,-9.2,-53.8,-8.2).curveTo(-52.6,-7.1,-52.6,-5.4).curveTo(-52.6,-3.1,-54.2,-1.8).curveTo(-55.9,-0.6,-59.1,-0.6).lineTo(-62.1,-0.7).closePath().moveTo(-61,-8.9).lineTo(-61.1,-8.3).lineTo(-61.1,-4.7).curveTo(-61.1,-2.6,-60.6,-2).curveTo(-60,-1.4,-58.6,-1.4).curveTo(-57,-1.4,-55.9,-2.1).curveTo(-54.8,-3.1,-54.8,-4.8).curveTo(-54.8,-6.5,-55.9,-7.7).curveTo(-57,-9,-59.7,-8.9).curveTo(-60.6,-9,-61,-8.9).closePath().moveTo(-60.7,-16).lineTo(-61,-15.9).lineTo(-61.1,-15.3).lineTo(-61.1,-10.4).curveTo(-61.1,-9.9,-61,-9.8).curveTo(-60.7,-9.6,-59.8,-9.7).curveTo(-57.8,-9.8,-57,-10.5).curveTo(-56,-11.2,-56,-12.8).curveTo(-55.9,-14.5,-57,-15.4).curveTo(-58.1,-16.1,-59.6,-16.2).curveTo(-60.5,-16.1,-60.7,-16).closePath().moveTo(87.1,-13).curveTo(86.8,-13.3,86.8,-13.8).curveTo(86.8,-14.4,87.1,-14.9).curveTo(87.5,-15.2,88,-15.2).curveTo(88.5,-15.1,88.9,-14.8).curveTo(89.3,-14.4,89.2,-13.8).curveTo(89.2,-13.2,88.9,-12.9).curveTo(88.5,-12.7,88,-12.6).curveTo(87.4,-12.7,87.1,-13).closePath();
	this.shape_2.setTransform(594.6,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_Logo, new cjs.Rectangle(0,0,728,90), null);


// stage content:
(lib._21_BAY_030_cmp_bnr_NTXNeuro_SpineTemple_728x90 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(1,1,1).moveTo(-150,-125).lineTo(150,-125).lineTo(150,125).lineTo(-150,125).closePath();
	this.shape.setTransform(363.9999,45.0001,2.4267,0.36);

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
	var mask_graphics_64 = new cjs.Graphics().moveTo(60.5,34).curveTo(59.5,33.1,59.5,31.5).curveTo(59.5,30,60.5,29).curveTo(61.4,28,63,28).curveTo(64.5,28,65.5,29).curveTo(66.5,30,66.5,31.5).curveTo(66.5,33.1,65.5,34).curveTo(64.5,35,63,35).curveTo(61.4,35,60.5,34).closePath().moveTo(30.7,34.2).curveTo(28.7,33.4,27.5,32.1).curveTo(26.2,30.7,25.4,28.9).curveTo(24.8,27.1,24.8,25).curveTo(24.8,23,25.5,21.2).curveTo(26.4,19.3,27.6,18).curveTo(29,16.6,30.8,15.8).curveTo(32.7,15.1,34.8,15.1).curveTo(37,15.1,38.8,15.8).curveTo(40.7,16.6,42,17.9).curveTo(43.3,19.2,44.1,21).curveTo(44.7,22.8,44.8,24.9).lineTo(44.8,27).lineTo(30.6,27).curveTo(31,28.5,32.2,29.2).curveTo(33.3,30,35,30).curveTo(36.4,30,37.3,29.5).curveTo(38.3,28.9,38.9,28).lineTo(43.7,30.7).curveTo(42.2,32.8,40.1,33.9).curveTo(38.1,35,34.9,35).curveTo(32.5,35,30.7,34.2).closePath().moveTo(38.9,22.6).curveTo(38.4,21.3,37.4,20.7).curveTo(36.3,20.1,34.9,20.1).curveTo(33.4,20.1,32.4,20.7).curveTo(31.3,21.4,30.7,22.6).lineTo(38.9,22.6).lineTo(38.9,22.6).closePath().moveTo(16.9,34.5).curveTo(15.6,34.2,14.8,33.3).curveTo(13.9,32.3,13.5,30.9).curveTo(13,29.5,13,27.3).lineTo(13,20.7).lineTo(9.7,20.7).lineTo(9.7,15.5).lineTo(13,15.5).lineTo(13,11.3).lineTo(18.9,8.1).lineTo(18.9,15.5).lineTo(23.6,15.5).lineTo(23.6,20.7).lineTo(18.9,20.7).lineTo(18.9,27).curveTo(18.9,28.4,19.3,28.9).curveTo(19.8,29.4,20.6,29.4).curveTo(21.4,29.4,22.1,28.7).lineTo(24.8,33.3).curveTo(23.7,34,22.5,34.5).curveTo(21.2,35,19.8,35).curveTo(18.2,35,16.9,34.5).closePath().moveTo(2,34.5).curveTo(0.8,34.2,-0,33.3).curveTo(-0.9,32.3,-1.4,30.9).curveTo(-1.9,29.5,-1.8,27.3).lineTo(-1.8,20.7).lineTo(-5.2,20.7).lineTo(-5.2,15.5).lineTo(-1.8,15.5).lineTo(-1.8,11.3).lineTo(4,8.1).lineTo(4,15.5).lineTo(8.8,15.5).lineTo(8.8,20.7).lineTo(4,20.7).lineTo(4,27).curveTo(4,28.4,4.5,28.9).curveTo(5,29.4,5.7,29.4).curveTo(6.5,29.4,7.3,28.7).lineTo(10,33.3).curveTo(8.9,34,7.6,34.5).curveTo(6.3,35,4.9,35).curveTo(3.3,35,2,34.5).closePath().moveTo(-20.1,34.2).curveTo(-22,33.4,-23.2,32.1).curveTo(-24.5,30.7,-25.3,28.9).curveTo(-25.9,27.1,-26,25).curveTo(-25.9,23,-25.2,21.2).curveTo(-24.4,19.3,-23.2,18).curveTo(-21.7,16.6,-19.9,15.8).curveTo(-18,15.1,-16,15.1).curveTo(-13.7,15.1,-11.9,15.8).curveTo(-10.1,16.6,-8.8,17.9).curveTo(-7.4,19.2,-6.7,21).curveTo(-6,22.8,-6,24.9).lineTo(-6,27).lineTo(-20.2,27).curveTo(-19.7,28.5,-18.6,29.2).curveTo(-17.4,30,-15.8,30).curveTo(-14.4,30,-13.4,29.5).curveTo(-12.5,28.9,-11.8,28).lineTo(-7,30.7).curveTo(-8.6,32.8,-10.6,33.9).curveTo(-12.6,35,-15.9,35).curveTo(-18.2,35,-20.1,34.2).closePath().moveTo(-11.8,22.6).curveTo(-12.4,21.3,-13.4,20.7).curveTo(-14.4,20.1,-15.9,20.1).curveTo(-17.3,20.1,-18.4,20.7).curveTo(-19.5,21.4,-20,22.6).lineTo(-11.8,22.6).lineTo(-11.8,22.6).closePath().moveTo(46.3,34.6).lineTo(46.3,15.5).lineTo(52.2,15.5).lineTo(52.2,18.2).curveTo(53,16.5,54.3,15.8).curveTo(55.7,15.1,57.6,15.1).curveTo(58.5,15.1,59.4,15.3).lineTo(60.8,15.8).lineTo(58.7,21.8).curveTo(58.4,21.5,57.6,21.2).curveTo(56.9,21,56,21).curveTo(54.3,21,53.2,22).curveTo(52.2,22.9,52.2,25.2).lineTo(52.2,34.6).closePath().moveTo(-47.5,34.6).lineTo(-47.5,8.8).lineTo(-37.2,8.8).curveTo(-32.5,8.8,-30.1,10.6).curveTo(-27.8,12.5,-27.8,16.2).curveTo(-27.8,17.9,-28.5,19.1).curveTo(-29.2,20.4,-30.4,21.2).curveTo(-28.9,22.1,-28.1,23.4).curveTo(-27.3,24.8,-27.3,26.8).curveTo(-27.3,30.8,-29.9,32.7).curveTo(-32.6,34.6,-37.2,34.6).closePath().moveTo(-41.4,29.2).lineTo(-37,29.2).curveTo(-35.3,29.2,-34.4,28.5).curveTo(-33.6,27.9,-33.6,26.6).curveTo(-33.6,25.4,-34.4,24.8).curveTo(-35.1,24.2,-37.1,24.2).lineTo(-41.4,24.2).closePath().moveTo(-41.4,18.7).lineTo(-36.9,18.7).curveTo(-35.2,18.7,-34.6,18).curveTo(-33.9,17.4,-33.9,16.3).curveTo(-33.9,15.3,-34.6,14.7).curveTo(-35.3,14.1,-36.9,14.1).lineTo(-41.4,14.1).closePath();
	var mask_graphics_149 = new cjs.Graphics().moveTo(60.5,34).curveTo(59.5,33.1,59.5,31.5).curveTo(59.5,30,60.5,29).curveTo(61.4,28,63,28).curveTo(64.5,28,65.5,29).curveTo(66.5,30,66.5,31.5).curveTo(66.5,33.1,65.5,34).curveTo(64.5,35,63,35).curveTo(61.4,35,60.5,34).closePath().moveTo(30.7,34.2).curveTo(28.7,33.4,27.5,32.1).curveTo(26.2,30.7,25.4,28.9).curveTo(24.8,27.1,24.8,25).curveTo(24.8,23,25.5,21.2).curveTo(26.4,19.3,27.6,18).curveTo(29,16.6,30.8,15.8).curveTo(32.7,15.1,34.8,15.1).curveTo(37,15.1,38.8,15.8).curveTo(40.7,16.6,42,17.9).curveTo(43.3,19.2,44.1,21).curveTo(44.7,22.8,44.8,24.9).lineTo(44.8,27).lineTo(30.6,27).curveTo(31,28.5,32.2,29.2).curveTo(33.3,30,35,30).curveTo(36.4,30,37.3,29.5).curveTo(38.3,28.9,38.9,28).lineTo(43.7,30.7).curveTo(42.2,32.8,40.1,33.9).curveTo(38.1,35,34.9,35).curveTo(32.5,35,30.7,34.2).closePath().moveTo(38.9,22.6).curveTo(38.4,21.3,37.4,20.7).curveTo(36.3,20.1,34.9,20.1).curveTo(33.4,20.1,32.4,20.7).curveTo(31.3,21.4,30.7,22.6).lineTo(38.9,22.6).lineTo(38.9,22.6).closePath().moveTo(16.9,34.5).curveTo(15.6,34.2,14.8,33.3).curveTo(13.9,32.3,13.5,30.9).curveTo(13,29.5,13,27.3).lineTo(13,20.7).lineTo(9.7,20.7).lineTo(9.7,15.5).lineTo(13,15.5).lineTo(13,11.3).lineTo(18.9,8.1).lineTo(18.9,15.5).lineTo(23.6,15.5).lineTo(23.6,20.7).lineTo(18.9,20.7).lineTo(18.9,27).curveTo(18.9,28.4,19.3,28.9).curveTo(19.8,29.4,20.6,29.4).curveTo(21.4,29.4,22.1,28.7).lineTo(24.8,33.3).curveTo(23.7,34,22.5,34.5).curveTo(21.2,35,19.8,35).curveTo(18.2,35,16.9,34.5).closePath().moveTo(2,34.5).curveTo(0.8,34.2,-0,33.3).curveTo(-0.9,32.3,-1.4,30.9).curveTo(-1.9,29.5,-1.8,27.3).lineTo(-1.8,20.7).lineTo(-5.2,20.7).lineTo(-5.2,15.5).lineTo(-1.8,15.5).lineTo(-1.8,11.3).lineTo(4,8.1).lineTo(4,15.5).lineTo(8.8,15.5).lineTo(8.8,20.7).lineTo(4,20.7).lineTo(4,27).curveTo(4,28.4,4.5,28.9).curveTo(5,29.4,5.7,29.4).curveTo(6.5,29.4,7.3,28.7).lineTo(10,33.3).curveTo(8.9,34,7.6,34.5).curveTo(6.3,35,4.9,35).curveTo(3.3,35,2,34.5).closePath().moveTo(-20.1,34.2).curveTo(-22,33.4,-23.2,32.1).curveTo(-24.5,30.7,-25.3,28.9).curveTo(-25.9,27.1,-26,25).curveTo(-25.9,23,-25.2,21.2).curveTo(-24.4,19.3,-23.2,18).curveTo(-21.7,16.6,-19.9,15.8).curveTo(-18,15.1,-16,15.1).curveTo(-13.7,15.1,-11.9,15.8).curveTo(-10.1,16.6,-8.8,17.9).curveTo(-7.4,19.2,-6.7,21).curveTo(-6,22.8,-6,24.9).lineTo(-6,27).lineTo(-20.2,27).curveTo(-19.7,28.5,-18.6,29.2).curveTo(-17.4,30,-15.8,30).curveTo(-14.4,30,-13.4,29.5).curveTo(-12.5,28.9,-11.8,28).lineTo(-7,30.7).curveTo(-8.6,32.8,-10.6,33.9).curveTo(-12.6,35,-15.9,35).curveTo(-18.2,35,-20.1,34.2).closePath().moveTo(-11.8,22.6).curveTo(-12.4,21.3,-13.4,20.7).curveTo(-14.4,20.1,-15.9,20.1).curveTo(-17.3,20.1,-18.4,20.7).curveTo(-19.5,21.4,-20,22.6).lineTo(-11.8,22.6).lineTo(-11.8,22.6).closePath().moveTo(46.3,34.6).lineTo(46.3,15.5).lineTo(52.2,15.5).lineTo(52.2,18.2).curveTo(53,16.5,54.3,15.8).curveTo(55.7,15.1,57.6,15.1).curveTo(58.5,15.1,59.4,15.3).lineTo(60.8,15.8).lineTo(58.7,21.8).curveTo(58.4,21.5,57.6,21.2).curveTo(56.9,21,56,21).curveTo(54.3,21,53.2,22).curveTo(52.2,22.9,52.2,25.2).lineTo(52.2,34.6).closePath().moveTo(-47.5,34.6).lineTo(-47.5,8.8).lineTo(-37.2,8.8).curveTo(-32.5,8.8,-30.1,10.6).curveTo(-27.8,12.5,-27.8,16.2).curveTo(-27.8,17.9,-28.5,19.1).curveTo(-29.2,20.4,-30.4,21.2).curveTo(-28.9,22.1,-28.1,23.4).curveTo(-27.3,24.8,-27.3,26.8).curveTo(-27.3,30.8,-29.9,32.7).curveTo(-32.6,34.6,-37.2,34.6).closePath().moveTo(-41.4,29.2).lineTo(-37,29.2).curveTo(-35.3,29.2,-34.4,28.5).curveTo(-33.6,27.9,-33.6,26.6).curveTo(-33.6,25.4,-34.4,24.8).curveTo(-35.1,24.2,-37.1,24.2).lineTo(-41.4,24.2).closePath().moveTo(-41.4,18.7).lineTo(-36.9,18.7).curveTo(-35.2,18.7,-34.6,18).curveTo(-33.9,17.4,-33.9,16.3).curveTo(-33.9,15.3,-34.6,14.7).curveTo(-35.3,14.1,-36.9,14.1).lineTo(-41.4,14.1).closePath();
	var mask_graphics_150 = new cjs.Graphics().moveTo(62.2,34).curveTo(61.2,33.1,61.2,31.5).curveTo(61.2,30,62.2,29).curveTo(63.2,28,64.7,28).curveTo(66.3,28,67.2,29).curveTo(68.2,30,68.2,31.5).curveTo(68.2,33.1,67.2,34).curveTo(66.3,35,64.7,35).curveTo(63.1,35,62.2,34).closePath().moveTo(32.4,34.2).curveTo(30.5,33.4,29.2,32.1).curveTo(27.9,30.7,27.2,28.9).curveTo(26.5,27.1,26.5,25).curveTo(26.5,23,27.3,21.2).curveTo(28.1,19.3,29.3,18).curveTo(30.7,16.6,32.6,15.8).curveTo(34.4,15.1,36.5,15.1).curveTo(38.7,15.1,40.6,15.8).curveTo(42.4,16.6,43.7,17.9).curveTo(45.1,19.2,45.8,21).curveTo(46.5,22.8,46.5,24.9).lineTo(46.5,27).lineTo(32.3,27).curveTo(32.8,28.5,33.9,29.2).curveTo(35,30,36.7,30).curveTo(38.1,30,39,29.5).curveTo(40,28.9,40.6,28).lineTo(45.5,30.7).curveTo(43.9,32.8,41.9,33.9).curveTo(39.8,35,36.6,35).curveTo(34.3,35,32.4,34.2).closePath().moveTo(40.6,22.6).curveTo(40.1,21.3,39.1,20.7).curveTo(38.1,20.1,36.6,20.1).curveTo(35.1,20.1,34.1,20.7).curveTo(33,21.4,32.4,22.6).lineTo(40.6,22.6).lineTo(40.6,22.6).closePath().moveTo(18.6,34.5).curveTo(17.4,34.2,16.5,33.3).curveTo(15.7,32.3,15.2,30.9).curveTo(14.7,29.5,14.7,27.3).lineTo(14.7,20.7).lineTo(11.4,20.7).lineTo(11.4,15.5).lineTo(14.7,15.5).lineTo(14.7,11.3).lineTo(20.6,8.1).lineTo(20.6,15.5).lineTo(25.3,15.5).lineTo(25.3,20.7).lineTo(20.6,20.7).lineTo(20.6,27).curveTo(20.6,28.4,21,28.9).curveTo(21.5,29.4,22.3,29.4).curveTo(23.1,29.4,23.8,28.7).lineTo(26.5,33.3).curveTo(25.5,34,24.2,34.5).curveTo(22.9,35,21.5,35).curveTo(19.9,35,18.6,34.5).closePath().moveTo(3.7,34.5).curveTo(2.5,34.2,1.7,33.3).curveTo(0.8,32.3,0.3,30.9).curveTo(-0.1,29.5,-0.1,27.3).lineTo(-0.1,20.7).lineTo(-3.4,20.7).lineTo(-3.4,15.5).lineTo(-0.1,15.5).lineTo(-0.1,11.3).lineTo(5.8,8.1).lineTo(5.8,15.5).lineTo(10.5,15.5).lineTo(10.5,20.7).lineTo(5.8,20.7).lineTo(5.8,27).curveTo(5.8,28.4,6.2,28.9).curveTo(6.7,29.4,7.5,29.4).curveTo(8.3,29.4,9,28.7).lineTo(11.7,33.3).curveTo(10.6,34,9.4,34.5).curveTo(8.1,35,6.6,35).curveTo(5,35,3.7,34.5).closePath().moveTo(-18.4,34.2).curveTo(-20.3,33.4,-21.5,32.1).curveTo(-22.8,30.7,-23.6,28.9).curveTo(-24.2,27.1,-24.2,25).curveTo(-24.2,23,-23.5,21.2).curveTo(-22.7,19.3,-21.4,18).curveTo(-20,16.6,-18.2,15.8).curveTo(-16.3,15.1,-14.2,15.1).curveTo(-12,15.1,-10.2,15.8).curveTo(-8.3,16.6,-7,17.9).curveTo(-5.7,19.2,-5,21).curveTo(-4.3,22.8,-4.3,24.9).lineTo(-4.3,27).lineTo(-18.5,27).curveTo(-18,28.5,-16.8,29.2).curveTo(-15.7,30,-14.1,30).curveTo(-12.7,30,-11.7,29.5).curveTo(-10.7,28.9,-10.1,28).lineTo(-5.3,30.7).curveTo(-6.8,32.8,-8.9,33.9).curveTo(-10.9,35,-14.1,35).curveTo(-16.5,35,-18.4,34.2).closePath().moveTo(-10.1,22.6).curveTo(-10.6,21.3,-11.6,20.7).curveTo(-12.7,20.1,-14.1,20.1).curveTo(-15.6,20.1,-16.7,20.7).curveTo(-17.8,21.4,-18.3,22.6).lineTo(-10.1,22.6).lineTo(-10.1,22.6).closePath().moveTo(48.1,34.6).lineTo(48.1,15.5).lineTo(53.9,15.5).lineTo(53.9,18.2).curveTo(54.7,16.5,56.1,15.8).curveTo(57.4,15.1,59.3,15.1).curveTo(60.2,15.1,61.1,15.3).lineTo(62.6,15.8).lineTo(60.5,21.8).curveTo(60.1,21.5,59.3,21.2).curveTo(58.6,21,57.8,21).curveTo(56,21,55,22).curveTo(53.9,22.9,53.9,25.2).lineTo(53.9,34.6).closePath().moveTo(-45.7,34.6).lineTo(-45.7,8.8).lineTo(-35.5,8.8).curveTo(-30.8,8.8,-28.4,10.6).curveTo(-26.1,12.5,-26.1,16.2).curveTo(-26.1,17.9,-26.7,19.1).curveTo(-27.5,20.4,-28.7,21.2).curveTo(-27.2,22.1,-26.4,23.4).curveTo(-25.6,24.8,-25.6,26.8).curveTo(-25.6,30.8,-28.2,32.7).curveTo(-30.8,34.6,-35.5,34.6).closePath().moveTo(-39.7,29.2).lineTo(-35.3,29.2).curveTo(-33.5,29.2,-32.7,28.5).curveTo(-31.9,27.9,-31.9,26.6).curveTo(-31.9,25.4,-32.7,24.8).curveTo(-33.4,24.2,-35.4,24.2).lineTo(-39.7,24.2).closePath().moveTo(-39.7,18.7).lineTo(-35.2,18.7).curveTo(-33.5,18.7,-32.8,18).curveTo(-32.2,17.4,-32.2,16.3).curveTo(-32.2,15.3,-32.9,14.7).curveTo(-33.6,14.1,-35.2,14.1).lineTo(-39.7,14.1).closePath();
	var mask_graphics_151 = new cjs.Graphics().moveTo(67.4,34).curveTo(66.4,33.1,66.4,31.5).curveTo(66.4,30,67.4,29).curveTo(68.4,28,69.9,28).curveTo(71.5,28,72.4,29).curveTo(73.4,30,73.4,31.5).curveTo(73.4,33.1,72.4,34).curveTo(71.5,35,69.9,35).curveTo(68.3,35,67.4,34).closePath().moveTo(37.6,34.2).curveTo(35.7,33.4,34.4,32.1).curveTo(33.1,30.7,32.4,28.9).curveTo(31.7,27.1,31.7,25).curveTo(31.7,23,32.5,21.2).curveTo(33.3,19.3,34.5,18).curveTo(35.9,16.6,37.8,15.8).curveTo(39.6,15.1,41.7,15.1).curveTo(43.9,15.1,45.8,15.8).curveTo(47.6,16.6,48.9,17.9).curveTo(50.3,19.2,51,21).curveTo(51.7,22.8,51.7,24.9).lineTo(51.7,27).lineTo(37.5,27).curveTo(38,28.5,39.1,29.2).curveTo(40.2,30,41.9,30).curveTo(43.3,30,44.2,29.5).curveTo(45.2,28.9,45.8,28).lineTo(50.7,30.7).curveTo(49.1,32.8,47.1,33.9).curveTo(45,35,41.8,35).curveTo(39.5,35,37.6,34.2).closePath().moveTo(45.8,22.6).curveTo(45.3,21.3,44.3,20.7).curveTo(43.3,20.1,41.8,20.1).curveTo(40.3,20.1,39.3,20.7).curveTo(38.2,21.4,37.6,22.6).lineTo(45.8,22.6).lineTo(45.8,22.6).closePath().moveTo(23.8,34.5).curveTo(22.6,34.2,21.7,33.3).curveTo(20.9,32.3,20.4,30.9).curveTo(19.9,29.5,19.9,27.3).lineTo(19.9,20.7).lineTo(16.6,20.7).lineTo(16.6,15.5).lineTo(19.9,15.5).lineTo(19.9,11.3).lineTo(25.8,8.1).lineTo(25.8,15.5).lineTo(30.5,15.5).lineTo(30.5,20.7).lineTo(25.8,20.7).lineTo(25.8,27).curveTo(25.8,28.4,26.2,28.9).curveTo(26.7,29.4,27.5,29.4).curveTo(28.3,29.4,29,28.7).lineTo(31.7,33.3).curveTo(30.7,34,29.4,34.5).curveTo(28.1,35,26.7,35).curveTo(25.1,35,23.8,34.5).closePath().moveTo(8.9,34.5).curveTo(7.7,34.2,6.9,33.3).curveTo(6,32.3,5.5,30.9).curveTo(5.1,29.5,5.1,27.3).lineTo(5.1,20.7).lineTo(1.8,20.7).lineTo(1.8,15.5).lineTo(5.1,15.5).lineTo(5.1,11.3).lineTo(11,8.1).lineTo(11,15.5).lineTo(15.7,15.5).lineTo(15.7,20.7).lineTo(11,20.7).lineTo(11,27).curveTo(11,28.4,11.4,28.9).curveTo(11.9,29.4,12.7,29.4).curveTo(13.5,29.4,14.2,28.7).lineTo(16.9,33.3).curveTo(15.8,34,14.6,34.5).curveTo(13.3,35,11.8,35).curveTo(10.2,35,8.9,34.5).closePath().moveTo(-13.2,34.2).curveTo(-15.1,33.4,-16.3,32.1).curveTo(-17.6,30.7,-18.4,28.9).curveTo(-19,27.1,-19,25).curveTo(-19,23,-18.3,21.2).curveTo(-17.5,19.3,-16.2,18).curveTo(-14.8,16.6,-13,15.8).curveTo(-11.1,15.1,-9,15.1).curveTo(-6.8,15.1,-5,15.8).curveTo(-3.1,16.6,-1.8,17.9).curveTo(-0.5,19.2,0.2,21).curveTo(0.9,22.8,0.9,24.9).lineTo(0.9,27).lineTo(-13.3,27).curveTo(-12.8,28.5,-11.6,29.2).curveTo(-10.5,30,-8.9,30).curveTo(-7.5,30,-6.5,29.5).curveTo(-5.5,28.9,-4.9,28).lineTo(-0.1,30.7).curveTo(-1.6,32.8,-3.7,33.9).curveTo(-5.7,35,-8.9,35).curveTo(-11.3,35,-13.2,34.2).closePath().moveTo(-4.9,22.6).curveTo(-5.4,21.3,-6.4,20.7).curveTo(-7.5,20.1,-8.9,20.1).curveTo(-10.4,20.1,-11.5,20.7).curveTo(-12.6,21.4,-13.1,22.6).lineTo(-4.9,22.6).lineTo(-4.9,22.6).closePath().moveTo(53.3,34.6).lineTo(53.3,15.5).lineTo(59.1,15.5).lineTo(59.1,18.2).curveTo(59.9,16.5,61.3,15.8).curveTo(62.6,15.1,64.5,15.1).curveTo(65.4,15.1,66.3,15.3).lineTo(67.8,15.8).lineTo(65.7,21.8).curveTo(65.3,21.5,64.5,21.2).curveTo(63.8,21,63,21).curveTo(61.2,21,60.2,22).curveTo(59.1,22.9,59.1,25.2).lineTo(59.1,34.6).closePath().moveTo(-40.5,34.6).lineTo(-40.5,8.8).lineTo(-30.3,8.8).curveTo(-25.6,8.8,-23.2,10.6).curveTo(-20.9,12.5,-20.9,16.2).curveTo(-20.9,17.9,-21.5,19.1).curveTo(-22.3,20.4,-23.5,21.2).curveTo(-22,22.1,-21.2,23.4).curveTo(-20.4,24.8,-20.4,26.8).curveTo(-20.4,30.8,-23,32.7).curveTo(-25.6,34.6,-30.3,34.6).closePath().moveTo(-34.5,29.2).lineTo(-30.1,29.2).curveTo(-28.3,29.2,-27.5,28.5).curveTo(-26.7,27.9,-26.7,26.6).curveTo(-26.7,25.4,-27.5,24.8).curveTo(-28.2,24.2,-30.2,24.2).lineTo(-34.5,24.2).closePath().moveTo(-34.5,18.7).lineTo(-30,18.7).curveTo(-28.3,18.7,-27.6,18).curveTo(-27,17.4,-27,16.3).curveTo(-27,15.3,-27.7,14.7).curveTo(-28.4,14.1,-30,14.1).lineTo(-34.5,14.1).closePath();
	var mask_graphics_152 = new cjs.Graphics().moveTo(76.1,34).curveTo(75.1,33.1,75.1,31.5).curveTo(75.1,30,76.1,29).curveTo(77,28,78.6,28).curveTo(80.1,28,81.1,29).curveTo(82,30,82,31.5).curveTo(82,33.1,81.1,34).curveTo(80.1,35,78.6,35).curveTo(77,35,76.1,34).closePath().moveTo(46.2,34.2).curveTo(44.3,33.4,43.1,32.1).curveTo(41.8,30.7,41,28.9).curveTo(40.4,27.1,40.4,25).curveTo(40.4,23,41.1,21.2).curveTo(41.9,19.3,43.2,18).curveTo(44.6,16.6,46.4,15.8).curveTo(48.3,15.1,50.4,15.1).curveTo(52.6,15.1,54.4,15.8).curveTo(56.3,16.6,57.6,17.9).curveTo(58.9,19.2,59.6,21).curveTo(60.3,22.8,60.3,24.9).lineTo(60.3,27).lineTo(46.1,27).curveTo(46.6,28.5,47.8,29.2).curveTo(48.9,30,50.5,30).curveTo(51.9,30,52.9,29.5).curveTo(53.9,28.9,54.5,28).lineTo(59.3,30.7).curveTo(57.8,32.8,55.7,33.9).curveTo(53.7,35,50.5,35).curveTo(48.1,35,46.2,34.2).closePath().moveTo(54.5,22.6).curveTo(54,21.3,53,20.7).curveTo(51.9,20.1,50.5,20.1).curveTo(49,20.1,47.9,20.7).curveTo(46.8,21.4,46.3,22.6).lineTo(54.5,22.6).lineTo(54.5,22.6).closePath().moveTo(32.4,34.5).curveTo(31.2,34.2,30.4,33.3).curveTo(29.5,32.3,29,30.9).curveTo(28.6,29.5,28.6,27.3).lineTo(28.6,20.7).lineTo(25.3,20.7).lineTo(25.3,15.5).lineTo(28.6,15.5).lineTo(28.6,11.3).lineTo(34.5,8.1).lineTo(34.5,15.5).lineTo(39.2,15.5).lineTo(39.2,20.7).lineTo(34.5,20.7).lineTo(34.5,27).curveTo(34.5,28.4,34.9,28.9).curveTo(35.4,29.4,36.2,29.4).curveTo(37,29.4,37.7,28.7).lineTo(40.4,33.3).curveTo(39.3,34,38.1,34.5).curveTo(36.8,35,35.3,35).curveTo(33.7,35,32.4,34.5).closePath().moveTo(17.6,34.5).curveTo(16.4,34.2,15.5,33.3).curveTo(14.7,32.3,14.2,30.9).curveTo(13.7,29.5,13.7,27.3).lineTo(13.7,20.7).lineTo(10.4,20.7).lineTo(10.4,15.5).lineTo(13.7,15.5).lineTo(13.7,11.3).lineTo(19.6,8.1).lineTo(19.6,15.5).lineTo(24.3,15.5).lineTo(24.3,20.7).lineTo(19.6,20.7).lineTo(19.6,27).curveTo(19.6,28.4,20,28.9).curveTo(20.5,29.4,21.3,29.4).curveTo(22.1,29.4,22.8,28.7).lineTo(25.5,33.3).curveTo(24.5,34,23.2,34.5).curveTo(21.9,35,20.5,35).curveTo(18.9,35,17.6,34.5).closePath().moveTo(-4.5,34.2).curveTo(-6.4,33.4,-7.7,32.1).curveTo(-9,30.7,-9.7,28.9).curveTo(-10.4,27.1,-10.4,25).curveTo(-10.4,23,-9.6,21.2).curveTo(-8.8,19.3,-7.6,18).curveTo(-6.2,16.6,-4.3,15.8).curveTo(-2.5,15.1,-0.4,15.1).curveTo(1.8,15.1,3.7,15.8).curveTo(5.5,16.6,6.8,17.9).curveTo(8.2,19.2,8.9,21).curveTo(9.6,22.8,9.6,24.9).lineTo(9.6,27).lineTo(-4.6,27).curveTo(-4.1,28.5,-3,29.2).curveTo(-1.9,30,-0.2,30).curveTo(1.2,30,2.1,29.5).curveTo(3.1,28.9,3.7,28).lineTo(8.6,30.7).curveTo(7,32.8,5,33.9).curveTo(2.9,35,-0.3,35).curveTo(-2.6,35,-4.5,34.2).closePath().moveTo(3.7,22.6).curveTo(3.2,21.3,2.2,20.7).curveTo(1.2,20.1,-0.3,20.1).curveTo(-1.8,20.1,-2.8,20.7).curveTo(-3.9,21.4,-4.5,22.6).lineTo(3.7,22.6).lineTo(3.7,22.6).closePath().moveTo(61.9,34.6).lineTo(61.9,15.5).lineTo(67.8,15.5).lineTo(67.8,18.2).curveTo(68.5,16.5,69.9,15.8).curveTo(71.3,15.1,73.2,15.1).curveTo(74.1,15.1,74.9,15.3).lineTo(76.4,15.8).lineTo(74.3,21.8).curveTo(73.9,21.5,73.2,21.2).curveTo(72.5,21,71.6,21).curveTo(69.9,21,68.8,22).curveTo(67.8,22.9,67.8,25.2).lineTo(67.8,34.6).closePath().moveTo(-31.9,34.6).lineTo(-31.9,8.8).lineTo(-21.6,8.8).curveTo(-16.9,8.8,-14.5,10.6).curveTo(-12.2,12.5,-12.2,16.2).curveTo(-12.2,17.9,-12.9,19.1).curveTo(-13.6,20.4,-14.8,21.2).curveTo(-13.3,22.1,-12.5,23.4).curveTo(-11.7,24.8,-11.7,26.8).curveTo(-11.7,30.8,-14.3,32.7).curveTo(-17,34.6,-21.6,34.6).closePath().moveTo(-25.8,29.2).lineTo(-21.5,29.2).curveTo(-19.7,29.2,-18.9,28.5).curveTo(-18,27.9,-18,26.6).curveTo(-18,25.4,-18.8,24.8).curveTo(-19.5,24.2,-21.6,24.2).lineTo(-25.8,24.2).closePath().moveTo(-25.8,18.7).lineTo(-21.3,18.7).curveTo(-19.7,18.7,-19,18).curveTo(-18.3,17.4,-18.3,16.3).curveTo(-18.3,15.3,-19,14.7).curveTo(-19.7,14.1,-21.4,14.1).lineTo(-25.8,14.1).closePath();
	var mask_graphics_153 = new cjs.Graphics().moveTo(88.2,34).curveTo(87.2,33.1,87.2,31.5).curveTo(87.2,30,88.2,29).curveTo(89.1,28,90.7,28).curveTo(92.2,28,93.2,29).curveTo(94.1,30,94.1,31.5).curveTo(94.1,33.1,93.2,34).curveTo(92.2,35,90.7,35).curveTo(89.1,35,88.2,34).closePath().moveTo(58.3,34.2).curveTo(56.4,33.4,55.2,32.1).curveTo(53.9,30.7,53.1,28.9).curveTo(52.5,27.1,52.5,25).curveTo(52.5,23,53.2,21.2).curveTo(54,19.3,55.3,18).curveTo(56.7,16.6,58.5,15.8).curveTo(60.4,15.1,62.5,15.1).curveTo(64.7,15.1,66.5,15.8).curveTo(68.4,16.6,69.7,17.9).curveTo(71,19.2,71.7,21).curveTo(72.4,22.8,72.4,24.9).lineTo(72.4,27).lineTo(58.2,27).curveTo(58.7,28.5,59.9,29.2).curveTo(61,30,62.6,30).curveTo(64,30,65,29.5).curveTo(66,28.9,66.6,28).lineTo(71.4,30.7).curveTo(69.9,32.8,67.8,33.9).curveTo(65.8,35,62.6,35).curveTo(60.2,35,58.3,34.2).closePath().moveTo(66.6,22.6).curveTo(66.1,21.3,65.1,20.7).curveTo(64,20.1,62.6,20.1).curveTo(61.1,20.1,60,20.7).curveTo(58.9,21.4,58.4,22.6).lineTo(66.6,22.6).lineTo(66.6,22.6).closePath().moveTo(44.5,34.5).curveTo(43.3,34.2,42.5,33.3).curveTo(41.6,32.3,41.1,30.9).curveTo(40.7,29.5,40.7,27.3).lineTo(40.7,20.7).lineTo(37.4,20.7).lineTo(37.4,15.5).lineTo(40.7,15.5).lineTo(40.7,11.3).lineTo(46.6,8.1).lineTo(46.6,15.5).lineTo(51.3,15.5).lineTo(51.3,20.7).lineTo(46.6,20.7).lineTo(46.6,27).curveTo(46.6,28.4,47,28.9).curveTo(47.5,29.4,48.3,29.4).curveTo(49.1,29.4,49.8,28.7).lineTo(52.5,33.3).curveTo(51.4,34,50.2,34.5).curveTo(48.9,35,47.4,35).curveTo(45.8,35,44.5,34.5).closePath().moveTo(29.7,34.5).curveTo(28.5,34.2,27.6,33.3).curveTo(26.8,32.3,26.3,30.9).curveTo(25.8,29.5,25.8,27.3).lineTo(25.8,20.7).lineTo(22.5,20.7).lineTo(22.5,15.5).lineTo(25.8,15.5).lineTo(25.8,11.3).lineTo(31.7,8.1).lineTo(31.7,15.5).lineTo(36.4,15.5).lineTo(36.4,20.7).lineTo(31.7,20.7).lineTo(31.7,27).curveTo(31.7,28.4,32.1,28.9).curveTo(32.6,29.4,33.4,29.4).curveTo(34.2,29.4,34.9,28.7).lineTo(37.6,33.3).curveTo(36.6,34,35.3,34.5).curveTo(34,35,32.6,35).curveTo(31,35,29.7,34.5).closePath().moveTo(7.6,34.2).curveTo(5.7,33.4,4.4,32.1).curveTo(3.1,30.7,2.4,28.9).curveTo(1.7,27.1,1.7,25).curveTo(1.7,23,2.5,21.2).curveTo(3.3,19.3,4.5,18).curveTo(5.9,16.6,7.8,15.8).curveTo(9.6,15.1,11.7,15.1).curveTo(13.9,15.1,15.8,15.8).curveTo(17.6,16.6,18.9,17.9).curveTo(20.3,19.2,21,21).curveTo(21.7,22.8,21.7,24.9).lineTo(21.7,27).lineTo(7.5,27).curveTo(8,28.5,9.1,29.2).curveTo(10.2,30,11.9,30).curveTo(13.3,30,14.2,29.5).curveTo(15.2,28.9,15.8,28).lineTo(20.7,30.7).curveTo(19.1,32.8,17.1,33.9).curveTo(15,35,11.8,35).curveTo(9.5,35,7.6,34.2).closePath().moveTo(15.8,22.6).curveTo(15.3,21.3,14.3,20.7).curveTo(13.3,20.1,11.8,20.1).curveTo(10.3,20.1,9.3,20.7).curveTo(8.2,21.4,7.6,22.6).lineTo(15.8,22.6).lineTo(15.8,22.6).closePath().moveTo(74,34.6).lineTo(74,15.5).lineTo(79.9,15.5).lineTo(79.9,18.2).curveTo(80.6,16.5,82,15.8).curveTo(83.4,15.1,85.3,15.1).curveTo(86.2,15.1,87,15.3).lineTo(88.5,15.8).lineTo(86.4,21.8).curveTo(86,21.5,85.3,21.2).curveTo(84.6,21,83.7,21).curveTo(82,21,80.9,22).curveTo(79.9,22.9,79.9,25.2).lineTo(79.9,34.6).closePath().moveTo(-19.8,34.6).lineTo(-19.8,8.8).lineTo(-9.5,8.8).curveTo(-4.8,8.8,-2.4,10.6).curveTo(-0.1,12.5,-0.1,16.2).curveTo(-0.1,17.9,-0.8,19.1).curveTo(-1.5,20.4,-2.7,21.2).curveTo(-1.2,22.1,-0.4,23.4).curveTo(0.4,24.8,0.4,26.8).curveTo(0.4,30.8,-2.2,32.7).curveTo(-4.9,34.6,-9.5,34.6).closePath().moveTo(-13.7,29.2).lineTo(-9.4,29.2).curveTo(-7.6,29.2,-6.8,28.5).curveTo(-5.9,27.9,-5.9,26.6).curveTo(-5.9,25.4,-6.7,24.8).curveTo(-7.4,24.2,-9.5,24.2).lineTo(-13.7,24.2).closePath().moveTo(-13.7,18.7).lineTo(-9.2,18.7).curveTo(-7.6,18.7,-6.9,18).curveTo(-6.2,17.4,-6.2,16.3).curveTo(-6.2,15.3,-6.9,14.7).curveTo(-7.6,14.1,-9.3,14.1).lineTo(-13.7,14.1).closePath();
	var mask_graphics_154 = new cjs.Graphics().moveTo(103.7,34).curveTo(102.7,33.1,102.7,31.5).curveTo(102.7,30,103.7,29).curveTo(104.7,28,106.2,28).curveTo(107.8,28,108.7,29).curveTo(109.7,30,109.7,31.5).curveTo(109.7,33.1,108.7,34).curveTo(107.8,35,106.2,35).curveTo(104.6,35,103.7,34).closePath().moveTo(73.9,34.2).curveTo(72,33.4,70.7,32.1).curveTo(69.4,30.7,68.7,28.9).curveTo(68,27.1,68,25).curveTo(68,23,68.8,21.2).curveTo(69.6,19.3,70.8,18).curveTo(72.2,16.6,74.1,15.8).curveTo(75.9,15.1,78,15.1).curveTo(80.2,15.1,82.1,15.8).curveTo(83.9,16.6,85.2,17.9).curveTo(86.6,19.2,87.3,21).curveTo(88,22.8,88,24.9).lineTo(88,27).lineTo(73.8,27).curveTo(74.3,28.5,75.4,29.2).curveTo(76.5,30,78.2,30).curveTo(79.6,30,80.5,29.5).curveTo(81.5,28.9,82.1,28).lineTo(87,30.7).curveTo(85.4,32.8,83.4,33.9).curveTo(81.3,35,78.1,35).curveTo(75.8,35,73.9,34.2).closePath().moveTo(82.1,22.6).curveTo(81.6,21.3,80.6,20.7).curveTo(79.6,20.1,78.1,20.1).curveTo(76.6,20.1,75.6,20.7).curveTo(74.5,21.4,73.9,22.6).lineTo(82.1,22.6).lineTo(82.1,22.6).closePath().moveTo(60.1,34.5).curveTo(58.9,34.2,58,33.3).curveTo(57.2,32.3,56.7,30.9).curveTo(56.2,29.5,56.2,27.3).lineTo(56.2,20.7).lineTo(52.9,20.7).lineTo(52.9,15.5).lineTo(56.2,15.5).lineTo(56.2,11.3).lineTo(62.1,8.1).lineTo(62.1,15.5).lineTo(66.8,15.5).lineTo(66.8,20.7).lineTo(62.1,20.7).lineTo(62.1,27).curveTo(62.1,28.4,62.5,28.9).curveTo(63,29.4,63.8,29.4).curveTo(64.6,29.4,65.3,28.7).lineTo(68,33.3).curveTo(67,34,65.7,34.5).curveTo(64.4,35,63,35).curveTo(61.4,35,60.1,34.5).closePath().moveTo(45.2,34.5).curveTo(44,34.2,43.2,33.3).curveTo(42.3,32.3,41.8,30.9).curveTo(41.4,29.5,41.4,27.3).lineTo(41.4,20.7).lineTo(38.1,20.7).lineTo(38.1,15.5).lineTo(41.4,15.5).lineTo(41.4,11.3).lineTo(47.3,8.1).lineTo(47.3,15.5).lineTo(52,15.5).lineTo(52,20.7).lineTo(47.3,20.7).lineTo(47.3,27).curveTo(47.3,28.4,47.7,28.9).curveTo(48.2,29.4,49,29.4).curveTo(49.8,29.4,50.5,28.7).lineTo(53.2,33.3).curveTo(52.1,34,50.9,34.5).curveTo(49.6,35,48.1,35).curveTo(46.5,35,45.2,34.5).closePath().moveTo(23.1,34.2).curveTo(21.2,33.4,20,32.1).curveTo(18.7,30.7,17.9,28.9).curveTo(17.3,27.1,17.3,25).curveTo(17.3,23,18,21.2).curveTo(18.8,19.3,20.1,18).curveTo(21.5,16.6,23.3,15.8).curveTo(25.2,15.1,27.3,15.1).curveTo(29.5,15.1,31.3,15.8).curveTo(33.2,16.6,34.5,17.9).curveTo(35.8,19.2,36.5,21).curveTo(37.2,22.8,37.2,24.9).lineTo(37.2,27).lineTo(23,27).curveTo(23.5,28.5,24.7,29.2).curveTo(25.8,30,27.4,30).curveTo(28.8,30,29.8,29.5).curveTo(30.8,28.9,31.4,28).lineTo(36.2,30.7).curveTo(34.7,32.8,32.6,33.9).curveTo(30.6,35,27.4,35).curveTo(25,35,23.1,34.2).closePath().moveTo(31.4,22.6).curveTo(30.9,21.3,29.9,20.7).curveTo(28.8,20.1,27.4,20.1).curveTo(25.9,20.1,24.8,20.7).curveTo(23.7,21.4,23.2,22.6).lineTo(31.4,22.6).lineTo(31.4,22.6).closePath().moveTo(89.6,34.6).lineTo(89.6,15.5).lineTo(95.4,15.5).lineTo(95.4,18.2).curveTo(96.2,16.5,97.6,15.8).curveTo(98.9,15.1,100.8,15.1).curveTo(101.7,15.1,102.6,15.3).lineTo(104.1,15.8).lineTo(102,21.8).curveTo(101.6,21.5,100.8,21.2).curveTo(100.1,21,99.3,21).curveTo(97.5,21,96.5,22).curveTo(95.4,22.9,95.4,25.2).lineTo(95.4,34.6).closePath().moveTo(-4.2,34.6).lineTo(-4.2,8.8).lineTo(6,8.8).curveTo(10.7,8.8,13.1,10.6).curveTo(15.4,12.5,15.4,16.2).curveTo(15.4,17.9,14.8,19.1).curveTo(14,20.4,12.8,21.2).curveTo(14.3,22.1,15.1,23.4).curveTo(15.9,24.8,15.9,26.8).curveTo(15.9,30.8,13.3,32.7).curveTo(10.7,34.6,6,34.6).closePath().moveTo(1.8,29.2).lineTo(6.2,29.2).curveTo(8,29.2,8.8,28.5).curveTo(9.6,27.9,9.6,26.6).curveTo(9.6,25.4,8.8,24.8).curveTo(8.1,24.2,6.1,24.2).lineTo(1.8,24.2).closePath().moveTo(1.8,18.7).lineTo(6.3,18.7).curveTo(8,18.7,8.7,18).curveTo(9.3,17.4,9.3,16.3).curveTo(9.3,15.3,8.6,14.7).curveTo(7.9,14.1,6.3,14.1).lineTo(1.8,14.1).closePath();
	var mask_graphics_155 = new cjs.Graphics().moveTo(122.7,34).curveTo(121.7,33.1,121.7,31.5).curveTo(121.7,30,122.7,29).curveTo(123.7,28,125.2,28).curveTo(126.8,28,127.7,29).curveTo(128.7,30,128.7,31.5).curveTo(128.7,33.1,127.7,34).curveTo(126.8,35,125.2,35).curveTo(123.6,35,122.7,34).closePath().moveTo(92.9,34.2).curveTo(91,33.4,89.7,32.1).curveTo(88.4,30.7,87.7,28.9).curveTo(87,27.1,87,25).curveTo(87,23,87.8,21.2).curveTo(88.6,19.3,89.8,18).curveTo(91.2,16.6,93.1,15.8).curveTo(94.9,15.1,97,15.1).curveTo(99.2,15.1,101.1,15.8).curveTo(102.9,16.6,104.2,17.9).curveTo(105.6,19.2,106.3,21).curveTo(107,22.8,107,24.9).lineTo(107,27).lineTo(92.8,27).curveTo(93.3,28.5,94.4,29.2).curveTo(95.5,30,97.2,30).curveTo(98.6,30,99.5,29.5).curveTo(100.5,28.9,101.1,28).lineTo(106,30.7).curveTo(104.4,32.8,102.4,33.9).curveTo(100.3,35,97.1,35).curveTo(94.8,35,92.9,34.2).closePath().moveTo(101.1,22.6).curveTo(100.6,21.3,99.6,20.7).curveTo(98.6,20.1,97.1,20.1).curveTo(95.6,20.1,94.6,20.7).curveTo(93.5,21.4,92.9,22.6).lineTo(101.1,22.6).lineTo(101.1,22.6).closePath().moveTo(79.1,34.5).curveTo(77.9,34.2,77,33.3).curveTo(76.2,32.3,75.7,30.9).curveTo(75.2,29.5,75.2,27.3).lineTo(75.2,20.7).lineTo(71.9,20.7).lineTo(71.9,15.5).lineTo(75.2,15.5).lineTo(75.2,11.3).lineTo(81.1,8.1).lineTo(81.1,15.5).lineTo(85.8,15.5).lineTo(85.8,20.7).lineTo(81.1,20.7).lineTo(81.1,27).curveTo(81.1,28.4,81.5,28.9).curveTo(82,29.4,82.8,29.4).curveTo(83.6,29.4,84.3,28.7).lineTo(87,33.3).curveTo(86,34,84.7,34.5).curveTo(83.4,35,82,35).curveTo(80.4,35,79.1,34.5).closePath().moveTo(64.2,34.5).curveTo(63,34.2,62.2,33.3).curveTo(61.3,32.3,60.8,30.9).curveTo(60.4,29.5,60.4,27.3).lineTo(60.4,20.7).lineTo(57.1,20.7).lineTo(57.1,15.5).lineTo(60.4,15.5).lineTo(60.4,11.3).lineTo(66.3,8.1).lineTo(66.3,15.5).lineTo(71,15.5).lineTo(71,20.7).lineTo(66.3,20.7).lineTo(66.3,27).curveTo(66.3,28.4,66.7,28.9).curveTo(67.2,29.4,68,29.4).curveTo(68.8,29.4,69.5,28.7).lineTo(72.2,33.3).curveTo(71.1,34,69.9,34.5).curveTo(68.6,35,67.1,35).curveTo(65.5,35,64.2,34.5).closePath().moveTo(42.1,34.2).curveTo(40.2,33.4,39,32.1).curveTo(37.7,30.7,36.9,28.9).curveTo(36.3,27.1,36.3,25).curveTo(36.3,23,37,21.2).curveTo(37.8,19.3,39.1,18).curveTo(40.5,16.6,42.3,15.8).curveTo(44.2,15.1,46.3,15.1).curveTo(48.5,15.1,50.3,15.8).curveTo(52.2,16.6,53.5,17.9).curveTo(54.8,19.2,55.5,21).curveTo(56.2,22.8,56.2,24.9).lineTo(56.2,27).lineTo(42,27).curveTo(42.5,28.5,43.7,29.2).curveTo(44.8,30,46.4,30).curveTo(47.8,30,48.8,29.5).curveTo(49.8,28.9,50.4,28).lineTo(55.2,30.7).curveTo(53.7,32.8,51.6,33.9).curveTo(49.6,35,46.4,35).curveTo(44,35,42.1,34.2).closePath().moveTo(50.4,22.6).curveTo(49.9,21.3,48.9,20.7).curveTo(47.8,20.1,46.4,20.1).curveTo(44.9,20.1,43.8,20.7).curveTo(42.7,21.4,42.2,22.6).lineTo(50.4,22.6).lineTo(50.4,22.6).closePath().moveTo(108.6,34.6).lineTo(108.6,15.5).lineTo(114.4,15.5).lineTo(114.4,18.2).curveTo(115.2,16.5,116.6,15.8).curveTo(117.9,15.1,119.8,15.1).curveTo(120.7,15.1,121.6,15.3).lineTo(123.1,15.8).lineTo(121,21.8).curveTo(120.6,21.5,119.8,21.2).curveTo(119.1,21,118.3,21).curveTo(116.5,21,115.5,22).curveTo(114.4,22.9,114.4,25.2).lineTo(114.4,34.6).closePath().moveTo(14.8,34.6).lineTo(14.8,8.8).lineTo(25,8.8).curveTo(29.7,8.8,32.1,10.6).curveTo(34.4,12.5,34.4,16.2).curveTo(34.4,17.9,33.8,19.1).curveTo(33,20.4,31.8,21.2).curveTo(33.3,22.1,34.1,23.4).curveTo(34.9,24.8,34.9,26.8).curveTo(34.9,30.8,32.3,32.7).curveTo(29.7,34.6,25,34.6).closePath().moveTo(20.8,29.2).lineTo(25.2,29.2).curveTo(27,29.2,27.8,28.5).curveTo(28.6,27.9,28.6,26.6).curveTo(28.6,25.4,27.8,24.8).curveTo(27.1,24.2,25.1,24.2).lineTo(20.8,24.2).closePath().moveTo(20.8,18.7).lineTo(25.3,18.7).curveTo(27,18.7,27.7,18).curveTo(28.3,17.4,28.3,16.3).curveTo(28.3,15.3,27.6,14.7).curveTo(26.9,14.1,25.3,14.1).lineTo(20.8,14.1).closePath();
	var mask_graphics_156 = new cjs.Graphics().moveTo(145.2,34).curveTo(144.2,33.1,144.2,31.5).curveTo(144.2,30,145.2,29).curveTo(146.1,28,147.7,28).curveTo(149.2,28,150.2,29).curveTo(151.1,30,151.1,31.5).curveTo(151.1,33.1,150.2,34).curveTo(149.2,35,147.7,35).curveTo(146.1,35,145.2,34).closePath().moveTo(115.3,34.2).curveTo(113.4,33.4,112.2,32.1).curveTo(110.9,30.7,110.1,28.9).curveTo(109.5,27.1,109.5,25).curveTo(109.5,23,110.2,21.2).curveTo(111,19.3,112.3,18).curveTo(113.7,16.6,115.5,15.8).curveTo(117.4,15.1,119.5,15.1).curveTo(121.7,15.1,123.5,15.8).curveTo(125.4,16.6,126.7,17.9).curveTo(128,19.2,128.7,21).curveTo(129.4,22.8,129.4,24.9).lineTo(129.4,27).lineTo(115.2,27).curveTo(115.7,28.5,116.9,29.2).curveTo(118,30,119.6,30).curveTo(121,30,122,29.5).curveTo(123,28.9,123.6,28).lineTo(128.4,30.7).curveTo(126.9,32.8,124.8,33.9).curveTo(122.8,35,119.6,35).curveTo(117.2,35,115.3,34.2).closePath().moveTo(123.6,22.6).curveTo(123.1,21.3,122.1,20.7).curveTo(121,20.1,119.6,20.1).curveTo(118.1,20.1,117,20.7).curveTo(115.9,21.4,115.4,22.6).lineTo(123.6,22.6).lineTo(123.6,22.6).closePath().moveTo(101.5,34.5).curveTo(100.3,34.2,99.5,33.3).curveTo(98.6,32.3,98.1,30.9).curveTo(97.7,29.5,97.7,27.3).lineTo(97.7,20.7).lineTo(94.4,20.7).lineTo(94.4,15.5).lineTo(97.7,15.5).lineTo(97.7,11.3).lineTo(103.6,8.1).lineTo(103.6,15.5).lineTo(108.3,15.5).lineTo(108.3,20.7).lineTo(103.6,20.7).lineTo(103.6,27).curveTo(103.6,28.4,104,28.9).curveTo(104.5,29.4,105.3,29.4).curveTo(106.1,29.4,106.8,28.7).lineTo(109.5,33.3).curveTo(108.4,34,107.2,34.5).curveTo(105.9,35,104.4,35).curveTo(102.8,35,101.5,34.5).closePath().moveTo(86.7,34.5).curveTo(85.5,34.2,84.6,33.3).curveTo(83.8,32.3,83.3,30.9).curveTo(82.8,29.5,82.8,27.3).lineTo(82.8,20.7).lineTo(79.5,20.7).lineTo(79.5,15.5).lineTo(82.8,15.5).lineTo(82.8,11.3).lineTo(88.7,8.1).lineTo(88.7,15.5).lineTo(93.4,15.5).lineTo(93.4,20.7).lineTo(88.7,20.7).lineTo(88.7,27).curveTo(88.7,28.4,89.1,28.9).curveTo(89.6,29.4,90.4,29.4).curveTo(91.2,29.4,91.9,28.7).lineTo(94.6,33.3).curveTo(93.6,34,92.3,34.5).curveTo(91,35,89.6,35).curveTo(88,35,86.7,34.5).closePath().moveTo(64.6,34.2).curveTo(62.7,33.4,61.4,32.1).curveTo(60.1,30.7,59.4,28.9).curveTo(58.7,27.1,58.7,25).curveTo(58.7,23,59.5,21.2).curveTo(60.3,19.3,61.5,18).curveTo(62.9,16.6,64.8,15.8).curveTo(66.6,15.1,68.7,15.1).curveTo(70.9,15.1,72.8,15.8).curveTo(74.6,16.6,75.9,17.9).curveTo(77.3,19.2,78,21).curveTo(78.7,22.8,78.7,24.9).lineTo(78.7,27).lineTo(64.5,27).curveTo(65,28.5,66.1,29.2).curveTo(67.2,30,68.9,30).curveTo(70.3,30,71.2,29.5).curveTo(72.2,28.9,72.8,28).lineTo(77.7,30.7).curveTo(76.1,32.8,74.1,33.9).curveTo(72,35,68.8,35).curveTo(66.5,35,64.6,34.2).closePath().moveTo(72.8,22.6).curveTo(72.3,21.3,71.3,20.7).curveTo(70.3,20.1,68.8,20.1).curveTo(67.3,20.1,66.3,20.7).curveTo(65.2,21.4,64.6,22.6).lineTo(72.8,22.6).lineTo(72.8,22.6).closePath().moveTo(131,34.6).lineTo(131,15.5).lineTo(136.9,15.5).lineTo(136.9,18.2).curveTo(137.6,16.5,139,15.8).curveTo(140.4,15.1,142.3,15.1).curveTo(143.2,15.1,144,15.3).lineTo(145.5,15.8).lineTo(143.4,21.8).curveTo(143,21.5,142.3,21.2).curveTo(141.6,21,140.7,21).curveTo(139,21,137.9,22).curveTo(136.9,22.9,136.9,25.2).lineTo(136.9,34.6).closePath().moveTo(37.2,34.6).lineTo(37.2,8.8).lineTo(47.5,8.8).curveTo(52.2,8.8,54.6,10.6).curveTo(56.9,12.5,56.9,16.2).curveTo(56.9,17.9,56.2,19.1).curveTo(55.5,20.4,54.3,21.2).curveTo(55.8,22.1,56.6,23.4).curveTo(57.4,24.8,57.4,26.8).curveTo(57.4,30.8,54.8,32.7).curveTo(52.1,34.6,47.5,34.6).closePath().moveTo(43.3,29.2).lineTo(47.6,29.2).curveTo(49.4,29.2,50.2,28.5).curveTo(51.1,27.9,51.1,26.6).curveTo(51.1,25.4,50.3,24.8).curveTo(49.6,24.2,47.5,24.2).lineTo(43.3,24.2).closePath().moveTo(43.3,18.7).lineTo(47.8,18.7).curveTo(49.4,18.7,50.1,18).curveTo(50.8,17.4,50.8,16.3).curveTo(50.8,15.3,50.1,14.7).curveTo(49.4,14.1,47.7,14.1).lineTo(43.3,14.1).closePath();
	var mask_graphics_157 = new cjs.Graphics().moveTo(171.1,34).curveTo(170.1,33.1,170.1,31.5).curveTo(170.1,30,171.1,29).curveTo(172.1,28,173.6,28).curveTo(175.2,28,176.1,29).curveTo(177.1,30,177.1,31.5).curveTo(177.1,33.1,176.1,34).curveTo(175.2,35,173.6,35).curveTo(172,35,171.1,34).closePath().moveTo(141.3,34.2).curveTo(139.4,33.4,138.1,32.1).curveTo(136.8,30.7,136.1,28.9).curveTo(135.4,27.1,135.4,25).curveTo(135.4,23,136.2,21.2).curveTo(137,19.3,138.2,18).curveTo(139.6,16.6,141.5,15.8).curveTo(143.3,15.1,145.4,15.1).curveTo(147.6,15.1,149.5,15.8).curveTo(151.3,16.6,152.6,17.9).curveTo(154,19.2,154.7,21).curveTo(155.4,22.8,155.4,24.9).lineTo(155.4,27).lineTo(141.2,27).curveTo(141.7,28.5,142.8,29.2).curveTo(143.9,30,145.6,30).curveTo(147,30,147.9,29.5).curveTo(148.9,28.9,149.5,28).lineTo(154.4,30.7).curveTo(152.8,32.8,150.8,33.9).curveTo(148.7,35,145.5,35).curveTo(143.2,35,141.3,34.2).closePath().moveTo(149.5,22.6).curveTo(149,21.3,148,20.7).curveTo(147,20.1,145.5,20.1).curveTo(144,20.1,143,20.7).curveTo(141.9,21.4,141.3,22.6).lineTo(149.5,22.6).lineTo(149.5,22.6).closePath().moveTo(127.5,34.5).curveTo(126.3,34.2,125.4,33.3).curveTo(124.6,32.3,124.1,30.9).curveTo(123.6,29.5,123.6,27.3).lineTo(123.6,20.7).lineTo(120.3,20.7).lineTo(120.3,15.5).lineTo(123.6,15.5).lineTo(123.6,11.3).lineTo(129.5,8.1).lineTo(129.5,15.5).lineTo(134.2,15.5).lineTo(134.2,20.7).lineTo(129.5,20.7).lineTo(129.5,27).curveTo(129.5,28.4,129.9,28.9).curveTo(130.4,29.4,131.2,29.4).curveTo(132,29.4,132.7,28.7).lineTo(135.4,33.3).curveTo(134.4,34,133.1,34.5).curveTo(131.8,35,130.4,35).curveTo(128.8,35,127.5,34.5).closePath().moveTo(112.6,34.5).curveTo(111.4,34.2,110.6,33.3).curveTo(109.7,32.3,109.2,30.9).curveTo(108.8,29.5,108.8,27.3).lineTo(108.8,20.7).lineTo(105.5,20.7).lineTo(105.5,15.5).lineTo(108.8,15.5).lineTo(108.8,11.3).lineTo(114.7,8.1).lineTo(114.7,15.5).lineTo(119.4,15.5).lineTo(119.4,20.7).lineTo(114.7,20.7).lineTo(114.7,27).curveTo(114.7,28.4,115.1,28.9).curveTo(115.6,29.4,116.4,29.4).curveTo(117.2,29.4,117.9,28.7).lineTo(120.6,33.3).curveTo(119.5,34,118.3,34.5).curveTo(117,35,115.5,35).curveTo(113.9,35,112.6,34.5).closePath().moveTo(90.5,34.2).curveTo(88.6,33.4,87.4,32.1).curveTo(86.1,30.7,85.3,28.9).curveTo(84.7,27.1,84.7,25).curveTo(84.7,23,85.4,21.2).curveTo(86.2,19.3,87.5,18).curveTo(88.9,16.6,90.7,15.8).curveTo(92.6,15.1,94.7,15.1).curveTo(96.9,15.1,98.7,15.8).curveTo(100.6,16.6,101.9,17.9).curveTo(103.2,19.2,103.9,21).curveTo(104.6,22.8,104.6,24.9).lineTo(104.6,27).lineTo(90.4,27).curveTo(90.9,28.5,92.1,29.2).curveTo(93.2,30,94.8,30).curveTo(96.2,30,97.2,29.5).curveTo(98.2,28.9,98.8,28).lineTo(103.6,30.7).curveTo(102.1,32.8,100,33.9).curveTo(98,35,94.8,35).curveTo(92.4,35,90.5,34.2).closePath().moveTo(98.8,22.6).curveTo(98.3,21.3,97.3,20.7).curveTo(96.2,20.1,94.8,20.1).curveTo(93.3,20.1,92.2,20.7).curveTo(91.1,21.4,90.6,22.6).lineTo(98.8,22.6).lineTo(98.8,22.6).closePath().moveTo(157,34.6).lineTo(157,15.5).lineTo(162.8,15.5).lineTo(162.8,18.2).curveTo(163.6,16.5,165,15.8).curveTo(166.3,15.1,168.2,15.1).curveTo(169.1,15.1,170,15.3).lineTo(171.5,15.8).lineTo(169.4,21.8).curveTo(169,21.5,168.2,21.2).curveTo(167.5,21,166.7,21).curveTo(164.9,21,163.9,22).curveTo(162.8,22.9,162.8,25.2).lineTo(162.8,34.6).closePath().moveTo(63.2,34.6).lineTo(63.2,8.8).lineTo(73.4,8.8).curveTo(78.1,8.8,80.5,10.6).curveTo(82.8,12.5,82.8,16.2).curveTo(82.8,17.9,82.2,19.1).curveTo(81.4,20.4,80.2,21.2).curveTo(81.7,22.1,82.5,23.4).curveTo(83.3,24.8,83.3,26.8).curveTo(83.3,30.8,80.7,32.7).curveTo(78.1,34.6,73.4,34.6).closePath().moveTo(69.2,29.2).lineTo(73.6,29.2).curveTo(75.4,29.2,76.2,28.5).curveTo(77,27.9,77,26.6).curveTo(77,25.4,76.2,24.8).curveTo(75.5,24.2,73.5,24.2).lineTo(69.2,24.2).closePath().moveTo(69.2,18.7).lineTo(73.7,18.7).curveTo(75.4,18.7,76.1,18).curveTo(76.7,17.4,76.7,16.3).curveTo(76.7,15.3,76,14.7).curveTo(75.3,14.1,73.7,14.1).lineTo(69.2,14.1).closePath();
	var mask_graphics_158 = new cjs.Graphics().moveTo(200.5,34).curveTo(199.5,33.1,199.5,31.5).curveTo(199.5,30,200.5,29).curveTo(201.4,28,203,28).curveTo(204.6,28,205.5,29).curveTo(206.5,30,206.5,31.5).curveTo(206.5,33.1,205.5,34).curveTo(204.6,35,203,35).curveTo(201.4,35,200.5,34).closePath().moveTo(170.7,34.2).curveTo(168.8,33.4,167.5,32.1).curveTo(166.2,30.7,165.4,28.9).curveTo(164.8,27.1,164.8,25).curveTo(164.8,23,165.5,21.2).curveTo(166.4,19.3,167.6,18).curveTo(169,16.6,170.8,15.8).curveTo(172.7,15.1,174.8,15.1).curveTo(177,15.1,178.8,15.8).curveTo(180.7,16.6,182,17.9).curveTo(183.3,19.2,184.1,21).curveTo(184.7,22.8,184.8,24.9).lineTo(184.8,27).lineTo(170.6,27).curveTo(171,28.5,172.2,29.2).curveTo(173.3,30,175,30).curveTo(176.3,30,177.3,29.5).curveTo(178.3,28.9,178.9,28).lineTo(183.8,30.7).curveTo(182.2,32.8,180.2,33.9).curveTo(178.1,35,174.9,35).curveTo(172.5,35,170.7,34.2).closePath().moveTo(178.9,22.6).curveTo(178.4,21.3,177.4,20.7).curveTo(176.3,20.1,174.9,20.1).curveTo(173.4,20.1,172.4,20.7).curveTo(171.2,21.4,170.7,22.6).lineTo(178.9,22.6).lineTo(178.9,22.6).closePath().moveTo(156.9,34.5).curveTo(155.7,34.2,154.8,33.3).curveTo(153.9,32.3,153.5,30.9).curveTo(153,29.5,153,27.3).lineTo(153,20.7).lineTo(149.7,20.7).lineTo(149.7,15.5).lineTo(153,15.5).lineTo(153,11.3).lineTo(158.9,8.1).lineTo(158.9,15.5).lineTo(163.6,15.5).lineTo(163.6,20.7).lineTo(158.9,20.7).lineTo(158.9,27).curveTo(158.9,28.4,159.3,28.9).curveTo(159.8,29.4,160.6,29.4).curveTo(161.4,29.4,162.1,28.7).lineTo(164.8,33.3).curveTo(163.7,34,162.5,34.5).curveTo(161.2,35,159.8,35).curveTo(158.2,35,156.9,34.5).closePath().moveTo(142,34.5).curveTo(140.8,34.2,140,33.3).curveTo(139.1,32.3,138.6,30.9).curveTo(138.2,29.5,138.2,27.3).lineTo(138.2,20.7).lineTo(134.8,20.7).lineTo(134.8,15.5).lineTo(138.2,15.5).lineTo(138.2,11.3).lineTo(144,8.1).lineTo(144,15.5).lineTo(148.8,15.5).lineTo(148.8,20.7).lineTo(144,20.7).lineTo(144,27).curveTo(144.1,28.4,144.5,28.9).curveTo(145,29.4,145.7,29.4).curveTo(146.5,29.4,147.2,28.7).lineTo(149.9,33.3).curveTo(148.9,34,147.6,34.5).curveTo(146.3,35,144.9,35).curveTo(143.3,35,142,34.5).closePath().moveTo(119.9,34.2).curveTo(118,33.4,116.7,32.1).curveTo(115.5,30.7,114.7,28.9).curveTo(114.1,27.1,114,25).curveTo(114.1,23,114.8,21.2).curveTo(115.6,19.3,116.8,18).curveTo(118.2,16.6,120.1,15.8).curveTo(122,15.1,124,15.1).curveTo(126.3,15.1,128.1,15.8).curveTo(130,16.6,131.2,17.9).curveTo(132.6,19.2,133.3,21).curveTo(134,22.8,134,24.9).lineTo(134,27).lineTo(119.8,27).curveTo(120.3,28.5,121.4,29.2).curveTo(122.6,30,124.2,30).curveTo(125.6,30,126.5,29.5).curveTo(127.5,28.9,128.2,28).lineTo(133,30.7).curveTo(131.4,32.8,129.4,33.9).curveTo(127.4,35,124.1,35).curveTo(121.8,35,119.9,34.2).closePath().moveTo(128.2,22.6).curveTo(127.6,21.3,126.6,20.7).curveTo(125.6,20.1,124.1,20.1).curveTo(122.7,20.1,121.6,20.7).curveTo(120.5,21.4,120,22.6).lineTo(128.2,22.6).lineTo(128.2,22.6).closePath().moveTo(186.3,34.6).lineTo(186.3,15.5).lineTo(192.2,15.5).lineTo(192.2,18.2).curveTo(192.9,16.5,194.3,15.8).curveTo(195.7,15.1,197.6,15.1).curveTo(198.5,15.1,199.4,15.3).lineTo(200.9,15.8).lineTo(198.7,21.8).curveTo(198.4,21.5,197.6,21.2).curveTo(196.9,21,196,21).curveTo(194.3,21,193.2,22).curveTo(192.2,22.9,192.2,25.2).lineTo(192.2,34.6).closePath().moveTo(92.5,34.6).lineTo(92.5,8.8).lineTo(102.8,8.8).curveTo(107.5,8.8,109.9,10.6).curveTo(112.2,12.5,112.2,16.2).curveTo(112.2,17.9,111.5,19.1).curveTo(110.8,20.4,109.6,21.2).curveTo(111.1,22.1,111.9,23.4).curveTo(112.7,24.8,112.7,26.8).curveTo(112.7,30.8,110.1,32.7).curveTo(107.5,34.6,102.8,34.6).closePath().moveTo(98.6,29.2).lineTo(103,29.2).curveTo(104.7,29.2,105.6,28.5).curveTo(106.4,27.9,106.4,26.6).curveTo(106.4,25.4,105.6,24.8).curveTo(104.9,24.2,102.9,24.2).lineTo(98.6,24.2).closePath().moveTo(98.6,18.7).lineTo(103.1,18.7).curveTo(104.8,18.7,105.5,18).curveTo(106.1,17.4,106.1,16.3).curveTo(106.1,15.3,105.4,14.7).curveTo(104.7,14.1,103.1,14.1).lineTo(98.6,14.1).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(64).to({graphics:mask_graphics_64,x:66.45,y:35.025}).wait(85).to({graphics:mask_graphics_149,x:66.45,y:35.025}).wait(1).to({graphics:mask_graphics_150,x:68.1784,y:35.025}).wait(1).to({graphics:mask_graphics_151,x:73.3636,y:35.025}).wait(1).to({graphics:mask_graphics_152,x:82.0056,y:35.025}).wait(1).to({graphics:mask_graphics_153,x:94.1043,y:35.025}).wait(1).to({graphics:mask_graphics_154,x:109.6599,y:35.025}).wait(1).to({graphics:mask_graphics_155,x:128.6722,y:35.025}).wait(1).to({graphics:mask_graphics_156,x:151.1414,y:35.025}).wait(1).to({graphics:mask_graphics_157,x:177.0673,y:35.025}).wait(1).to({graphics:mask_graphics_158,x:206.45,y:35.025}).wait(67));

	// better_mask
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFB71B").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).curveTo(39.6,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_1.setTransform(-58.1,60.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFB71B").beginStroke().moveTo(-87.7,25.5).lineTo(-87.7,-25.5).curveTo(39.7,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_2.setTransform(-47.6,60.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFB71B").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).curveTo(39.6,-25,39.4,-24.7).lineTo(87.7,25.5).closePath();
	this.shape_3.setTransform(-37.1,60.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFB71B").beginStroke().moveTo(-87.7,25.5).lineTo(-87.7,-25.5).curveTo(39.7,-25,39.4,-24.7).lineTo(87.7,25.5).closePath();
	this.shape_4.setTransform(46.9,60.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("rgba(255,183,27,0.988)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).curveTo(39.6,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_5.setTransform(50.35,60.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("rgba(255,183,27,0.949)").beginStroke().moveTo(-87.7,25.5).lineTo(-87.7,-25.5).curveTo(39.6,-25,39.4,-24.7).lineTo(87.7,25.5).closePath();
	this.shape_6.setTransform(60.65,60.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("rgba(255,183,27,0.89)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).curveTo(39.6,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_7.setTransform(77.8,60.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("rgba(255,183,27,0.804)").beginStroke().moveTo(-87.7,25.5).lineTo(-87.7,-25.5).curveTo(39.7,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_8.setTransform(101.8,60.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("rgba(255,183,27,0.69)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).curveTo(39.6,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_9.setTransform(132.7,60.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("rgba(255,183,27,0.557)").beginStroke().moveTo(-87.7,25.5).lineTo(-87.7,-25.5).curveTo(39.6,-25,39.4,-24.7).lineTo(87.7,25.5).closePath();
	this.shape_10.setTransform(170.45,60.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("rgba(255,183,27,0.396)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).curveTo(39.6,-25,39.4,-24.7).lineTo(87.6,25.5).closePath();
	this.shape_11.setTransform(215.05,60.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("rgba(255,183,27,0.212)").beginStroke().moveTo(-87.6,25.5).lineTo(-87.6,-25.5).curveTo(39.7,-25,39.4,-24.7).lineTo(87.7,25.5).closePath();
	this.shape_12.setTransform(266.55,60.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("rgba(255,183,27,0)").beginStroke().moveTo(-87.7,25.5).lineTo(-87.7,-25.5).curveTo(39.6,-25,39.4,-24.7).lineTo(87.7,25.5).closePath();
	this.shape_13.setTransform(324.9,60.2);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{x:-58.1}}]},64).to({state:[{t:this.shape_2,p:{x:-47.6}}]},1).to({state:[{t:this.shape_3,p:{x:-37.1}}]},1).to({state:[{t:this.shape_1,p:{x:-26.6}}]},1).to({state:[{t:this.shape_2,p:{x:-16.1}}]},1).to({state:[{t:this.shape_3,p:{x:-5.6}}]},1).to({state:[{t:this.shape_1,p:{x:4.9}}]},1).to({state:[{t:this.shape_2,p:{x:15.4}}]},1).to({state:[{t:this.shape_3,p:{x:25.9}}]},1).to({state:[{t:this.shape_1,p:{x:36.4}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},75).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(67));

	// txt_better
	this.instance_4 = new lib.txt_better();
	this.instance_4.setTransform(84.8,95.1,1,1,0,0,0,81.4,21.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({_off:false},0).to({alpha:1},9).wait(85).to({x:364.8,alpha:0},9,cjs.Ease.quadIn).wait(67));

	// txt_believeIt
	this.instance_5 = new lib.txt_believeIt();
	this.instance_5.setTransform(205.75,94.9,1,1,0,0,0,81.4,22.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(106).to({_off:false},0).to({alpha:1},9).wait(34).to({x:485.75,alpha:0},9,cjs.Ease.quadIn).wait(67));

	// image_01
	this.instance_6 = new lib.image_01_1();
	this.instance_6.setTransform(883.15,215,1,1,0,0,0,150,217);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:616.15},14,cjs.Ease.quadInOut).wait(32).to({x:885.15,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(169));

	// image_02
	this.instance_7 = new lib.image_02_1();
	this.instance_7.setTransform(885.1,215,1,1,0,0,0,150,217);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(51).to({_off:false},0).to({x:616.1},14,cjs.Ease.quadInOut).wait(32).to({x:885.1,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(118));

	// image_03
	this.instance_8 = new lib.image_03_1();
	this.instance_8.setTransform(887.1,215,1,1,0,0,0,150,217);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(101).to({_off:false},0).to({x:615.1},14,cjs.Ease.quadInOut).wait(32).to({x:883.1,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(68));

	// background_color
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-150,125).lineTo(-150,-125).lineTo(150,-125).lineTo(150,125).closePath();
	this.shape_14.setTransform(363.9999,45.0001,2.4267,0.36);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(225));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(362.8,44,636.3,206);
// library properties:
lib.properties = {
	id: '4CB3FE4512EC4F04AD1A078CE62F288A',
	width: 728,
	height: 90,
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
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
p.nominalBounds = new cjs.Rectangle(0,0,160,409);


(lib.image_02 = function() {
	this.initialize(img.image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,409);


(lib.image_03 = function() {
	this.initialize(img.image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,409);// helper functions:

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


(lib.txt_Spines = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(33.9,8.8).curveTo(32.7,8.5,31.7,8).curveTo(30.8,7.6,30,6.9).lineTo(28.7,5.5).lineTo(32.3,2.6).curveTo(33,3.8,34.1,4.5).curveTo(35.2,5.1,36.7,5.1).curveTo(37.7,5.1,38.3,4.7).curveTo(38.8,4.2,38.8,3.5).curveTo(38.8,3,38.6,2.8).curveTo(38.3,2.5,37.9,2.2).lineTo(36.8,1.8).lineTo(33.2,0.9).curveTo(32.3,0.6,31.4,0).curveTo(30.6,-0.5,30.2,-1.4).curveTo(29.6,-2.3,29.6,-3.7).curveTo(29.6,-4.8,30.2,-5.8).curveTo(30.6,-6.8,31.4,-7.5).curveTo(32.3,-8.2,33.4,-8.6).curveTo(34.6,-9,36,-9).curveTo(37.3,-9,38.3,-8.8).curveTo(39.2,-8.6,40.1,-8.2).curveTo(40.9,-7.8,41.6,-7.2).lineTo(43.1,-5.9).lineTo(39.7,-3.3).curveTo(39.1,-4.3,38.2,-4.8).curveTo(37.3,-5.4,35.9,-5.4).curveTo(34.9,-5.4,34.4,-4.9).curveTo(33.9,-4.4,33.9,-3.8).curveTo(33.9,-3.4,34.1,-3.1).curveTo(34.4,-2.9,34.9,-2.7).lineTo(39.5,-1.5).curveTo(40.4,-1.1,41.3,-0.6).curveTo(42.1,0,42.6,0.9).curveTo(43.2,1.9,43.1,3.3).curveTo(43.2,4.5,42.6,5.6).curveTo(42.2,6.6,41.3,7.4).curveTo(40.3,8.2,39.2,8.6).curveTo(37.9,9,36.5,9).curveTo(35,9,33.9,8.8).closePath().moveTo(-37.9,8.8).curveTo(-39.1,8.5,-40,8).curveTo(-41,7.6,-41.7,6.9).lineTo(-43.2,5.5).lineTo(-39.6,2.6).curveTo(-38.7,3.8,-37.7,4.5).curveTo(-36.7,5.1,-35.1,5.1).curveTo(-34.1,5.1,-33.5,4.7).curveTo(-33,4.2,-33,3.5).curveTo(-33,3,-33.2,2.8).curveTo(-33.5,2.5,-33.9,2.2).lineTo(-35,1.8).lineTo(-38.6,0.9).curveTo(-39.6,0.6,-40.4,0).curveTo(-41.1,-0.5,-41.6,-1.4).curveTo(-42.2,-2.3,-42.2,-3.7).curveTo(-42.2,-4.8,-41.6,-5.8).curveTo(-41.1,-6.8,-40.4,-7.5).curveTo(-39.5,-8.2,-38.4,-8.6).curveTo(-37.2,-9,-35.8,-9).curveTo(-34.6,-9,-33.5,-8.8).curveTo(-32.5,-8.6,-31.7,-8.2).curveTo(-30.9,-7.8,-30.1,-7.2).lineTo(-28.8,-5.9).lineTo(-32.1,-3.3).curveTo(-32.8,-4.3,-33.6,-4.8).curveTo(-34.5,-5.4,-35.9,-5.4).curveTo(-36.9,-5.4,-37.4,-4.9).curveTo(-37.9,-4.4,-37.9,-3.8).curveTo(-37.9,-3.4,-37.7,-3.1).curveTo(-37.4,-2.9,-36.9,-2.7).lineTo(-32.4,-1.5).curveTo(-31.3,-1.1,-30.6,-0.6).curveTo(-29.7,0,-29.1,0.9).curveTo(-28.7,1.9,-28.7,3.3).curveTo(-28.7,4.5,-29.1,5.6).curveTo(-29.7,6.6,-30.6,7.4).curveTo(-31.5,8.2,-32.6,8.6).curveTo(-33.9,9,-35.3,9).curveTo(-36.8,9,-37.9,8.8).closePath().moveTo(15.3,8.8).lineTo(15.3,-8.7).lineTo(27.4,-8.7).lineTo(27.4,-4.9).lineTo(19.5,-4.9).lineTo(19.5,-2).lineTo(27.4,-2).lineTo(27.4,1.9).lineTo(19.5,1.9).lineTo(19.5,4.9).lineTo(27.4,4.9).lineTo(27.4,8.8).closePath().moveTo(8.4,8.8).lineTo(1.6,-2.2).lineTo(1.6,8.8).lineTo(-2.5,8.8).lineTo(-2.5,-8.7).lineTo(1.9,-8.7).lineTo(8.5,1.8).lineTo(8.5,-8.7).lineTo(12.5,-8.7).lineTo(12.5,8.8).closePath().moveTo(-9.6,8.8).lineTo(-9.6,-8.7).lineTo(-5.3,-8.7).lineTo(-5.3,8.8).closePath().moveTo(-25.8,8.8).lineTo(-25.8,-8.7).lineTo(-18.8,-8.7).curveTo(-17.2,-8.7,-16,-8.2).curveTo(-14.8,-7.7,-13.9,-6.8).curveTo(-13,-5.9,-12.5,-4.7).curveTo(-12,-3.6,-12,-2.2).curveTo(-12,-0.9,-12.5,0.3).curveTo(-13,1.5,-13.8,2.4).curveTo(-14.7,3.3,-16,3.8).curveTo(-17.2,4.4,-18.8,4.4).lineTo(-21.6,4.4).lineTo(-21.6,8.8).closePath().moveTo(-21.6,0.5).lineTo(-19,0.5).curveTo(-17.8,0.5,-17.1,-0.2).curveTo(-16.2,-1,-16.3,-2.2).curveTo(-16.2,-3.4,-17.1,-4.2).curveTo(-17.8,-4.9,-19,-4.9).lineTo(-21.6,-4.9).closePath();
	this.shape.setTransform(12.4021,38.1765,0.739,0.739);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Spines, new cjs.Rectangle(-19.5,0,225.5,44.9), null);


(lib.txt_loveAgain = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(54.2,6.2).curveTo(53.7,5.8,53.7,5).curveTo(53.7,4.2,54.2,3.7).curveTo(54.7,3.2,55.5,3.2).curveTo(56.3,3.2,56.8,3.7).curveTo(57.3,4.2,57.3,5).curveTo(57.3,5.8,56.8,6.2).curveTo(56.3,6.7,55.5,6.7).curveTo(54.7,6.7,54.2,6.2).closePath().moveTo(9.6,6.2).curveTo(8.4,5.6,7.5,4.7).curveTo(6.6,3.8,6.1,2.6).curveTo(5.6,1.3,5.6,0).curveTo(5.6,-1.4,6.2,-2.6).curveTo(6.6,-3.9,7.5,-4.8).curveTo(8.4,-5.7,9.7,-6.2).curveTo(10.9,-6.7,12.4,-6.7).curveTo(14.3,-6.7,15.7,-6).curveTo(17,-5.3,18,-4.1).lineTo(15.3,-2.2).curveTo(14.9,-3,14.2,-3.4).curveTo(13.4,-3.8,12.4,-3.8).curveTo(11.7,-3.8,11,-3.5).curveTo(10.3,-3.2,9.8,-2.7).curveTo(9.3,-2.2,9,-1.5).curveTo(8.8,-0.8,8.8,0).curveTo(8.8,0.8,9,1.5).curveTo(9.3,2.2,9.8,2.7).curveTo(10.3,3.2,11,3.5).curveTo(11.7,3.7,12.5,3.7).curveTo(13.6,3.7,14.3,3.2).curveTo(15.1,2.7,15.5,1.7).lineTo(11.8,1.7).lineTo(11.8,-1.2).lineTo(18.9,-1.2).lineTo(18.9,0.3).curveTo(18.9,1.6,18.4,2.8).curveTo(18,3.9,17.1,4.8).curveTo(16.3,5.7,15.1,6.2).curveTo(13.9,6.7,12.5,6.7).curveTo(10.9,6.7,9.6,6.2).closePath().moveTo(-46.6,6.2).curveTo(-47.9,5.7,-48.8,4.7).curveTo(-49.6,3.9,-50.2,2.6).curveTo(-50.7,1.4,-50.7,0).curveTo(-50.7,-1.4,-50.2,-2.6).curveTo(-49.6,-3.8,-48.8,-4.7).curveTo(-47.9,-5.7,-46.6,-6.2).curveTo(-45.4,-6.7,-44,-6.7).curveTo(-42.6,-6.7,-41.4,-6.2).curveTo(-40.2,-5.7,-39.3,-4.7).curveTo(-38.3,-3.8,-37.8,-2.6).curveTo(-37.3,-1.4,-37.3,0).curveTo(-37.3,1.4,-37.8,2.6).curveTo(-38.3,3.9,-39.2,4.7).curveTo(-40.2,5.7,-41.4,6.2).curveTo(-42.6,6.7,-44,6.7).curveTo(-45.4,6.7,-46.6,6.2).closePath().moveTo(-45.4,-3.4).curveTo(-46.1,-3.1,-46.5,-2.6).curveTo(-47,-2.1,-47.3,-1.4).curveTo(-47.5,-0.7,-47.5,0).curveTo(-47.5,0.8,-47.3,1.4).curveTo(-47,2.1,-46.5,2.5).curveTo(-46.1,3.1,-45.4,3.3).curveTo(-44.8,3.6,-44,3.6).curveTo(-43.2,3.6,-42.6,3.3).curveTo(-41.9,3.1,-41.4,2.5).curveTo(-41,2.1,-40.7,1.4).curveTo(-40.4,0.8,-40.4,0).curveTo(-40.4,-0.7,-40.7,-1.4).curveTo(-41,-2.1,-41.4,-2.6).curveTo(-42,-3.1,-42.6,-3.4).curveTo(-43.2,-3.7,-44,-3.7).curveTo(-44.8,-3.7,-45.4,-3.4).closePath().moveTo(46.6,6.5).lineTo(41.4,-1.7).lineTo(41.4,6.5).lineTo(38.5,6.5).lineTo(38.5,-6.5).lineTo(41.7,-6.5).lineTo(46.6,1.3).lineTo(46.6,-6.5).lineTo(49.6,-6.5).lineTo(49.6,6.5).closePath().moveTo(33.2,6.5).lineTo(33.2,-6.5).lineTo(36.3,-6.5).lineTo(36.3,6.5).closePath().moveTo(28.3,6.5).lineTo(27.6,4.6).lineTo(22.6,4.6).lineTo(21.9,6.5).lineTo(18.8,6.5).lineTo(23.6,-6.5).lineTo(26.6,-6.5).lineTo(31.5,6.5).closePath().moveTo(26.7,1.9).lineTo(25.1,-2.5).lineTo(23.6,1.9).lineTo(26.7,1.9).closePath().moveTo(1.9,6.5).lineTo(1.2,4.6).lineTo(-3.8,4.6).lineTo(-4.5,6.5).lineTo(-7.7,6.5).lineTo(-2.8,-6.5).lineTo(0.2,-6.5).lineTo(5,6.5).closePath().moveTo(0.2,1.9).lineTo(-1.3,-2.5).lineTo(-2.9,1.9).lineTo(0.2,1.9).closePath().moveTo(-22.8,6.5).lineTo(-22.8,-6.5).lineTo(-13.8,-6.5).lineTo(-13.8,-3.7).lineTo(-19.7,-3.7).lineTo(-19.7,-1.5).lineTo(-13.8,-1.5).lineTo(-13.8,1.4).lineTo(-19.7,1.4).lineTo(-19.7,3.6).lineTo(-13.8,3.6).lineTo(-13.8,6.5).closePath().moveTo(-32,6.5).lineTo(-36.8,-6.5).lineTo(-33.5,-6.5).lineTo(-30.4,2.3).lineTo(-27.3,-6.5).lineTo(-24.1,-6.5).lineTo(-28.9,6.5).closePath().moveTo(-60.1,6.5).lineTo(-60.1,-6.5).lineTo(-57,-6.5).lineTo(-57,3.6).lineTo(-51.3,3.6).lineTo(-51.3,6.5).closePath().moveTo(54.3,2.4).lineTo(54.3,2.3).curveTo(54.3,1.3,54.4,0.6).curveTo(54.7,-0.1,55,-0.5).lineTo(55.7,-1.2).lineTo(56.9,-2.1).curveTo(57.1,-2.4,57.1,-2.8).curveTo(57.1,-3.4,56.8,-3.7).curveTo(56.4,-4.1,55.7,-4.1).curveTo(55.1,-4.1,54.7,-3.7).curveTo(54.3,-3.3,54.1,-2.8).lineTo(51.5,-4).curveTo(51.9,-5.3,53,-6).curveTo(54.1,-6.7,55.9,-6.7).curveTo(56.9,-6.7,57.6,-6.4).curveTo(58.4,-6.1,59,-5.6).curveTo(59.6,-5.1,59.9,-4.4).curveTo(60.1,-3.7,60.1,-2.9).curveTo(60.1,-2,59.9,-1.5).curveTo(59.7,-1,59.3,-0.7).curveTo(58.9,-0.3,58.5,-0.1).lineTo(57.6,0.5).curveTo(57.3,0.8,57.1,1.2).curveTo(56.8,1.6,56.8,2.3).lineTo(56.8,2.4).closePath();
	this.shape.setTransform(41.525,8.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_loveAgain, new cjs.Rectangle(-18.6,0,183.4,35.6), null);


(lib.txt_Here = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(22,6).curveTo(21.6,5.5,21.6,4.8).curveTo(21.6,4,22,3.5).curveTo(22.5,3.1,23.3,3).curveTo(24,3.1,24.5,3.5).curveTo(25,4,25,4.8).curveTo(25,5.5,24.5,6).curveTo(24,6.4,23.3,6.5).curveTo(22.5,6.4,22,6).closePath().moveTo(10.9,6.3).lineTo(10.9,-6.5).lineTo(19.6,-6.5).lineTo(19.6,-3.6).lineTo(13.9,-3.6).lineTo(13.9,-1.5).lineTo(19.6,-1.5).lineTo(19.6,1.3).lineTo(13.9,1.3).lineTo(13.9,3.4).lineTo(19.6,3.4).lineTo(19.6,6.3).closePath().moveTo(6.1,6.3).lineTo(4.2,2.4).lineTo(1.9,2.4).lineTo(1.9,6.3).lineTo(-1.2,6.3).lineTo(-1.2,-6.5).lineTo(4.3,-6.5).curveTo(5.4,-6.5,6.4,-6.1).curveTo(7.2,-5.7,7.8,-5.1).curveTo(8.5,-4.6,8.8,-3.8).curveTo(9.1,-3,9.1,-2.1).curveTo(9.1,-0.9,8.5,0.2).curveTo(8,1.1,7,1.6).lineTo(9.4,6.3).closePath().moveTo(1.9,-0.3).lineTo(4.1,-0.3).curveTo(5,-0.3,5.5,-0.8).curveTo(6,-1.3,6,-2).curveTo(6,-2.8,5.5,-3.2).curveTo(5,-3.6,4.1,-3.6).lineTo(1.9,-3.6).closePath().moveTo(-12.1,6.3).lineTo(-12.1,-6.5).lineTo(-3.3,-6.5).lineTo(-3.3,-3.6).lineTo(-9.1,-3.6).lineTo(-9.1,-1.5).lineTo(-3.3,-1.5).lineTo(-3.3,1.3).lineTo(-9.1,1.3).lineTo(-9.1,3.4).lineTo(-3.3,3.4).lineTo(-3.3,6.3).closePath().moveTo(-17.8,6.3).lineTo(-17.8,1.4).lineTo(-21.9,1.4).lineTo(-21.9,6.3).lineTo(-25,6.3).lineTo(-25,-6.5).lineTo(-21.9,-6.5).lineTo(-21.9,-1.6).lineTo(-17.8,-1.6).lineTo(-17.8,-6.5).lineTo(-14.7,-6.5).lineTo(-14.7,6.3).closePath();
	this.shape.setTransform(5.775,54.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Here, new cjs.Rectangle(-19.2,0,199,61), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(33,6.5).lineTo(33,1).lineTo(28.7,-6.5).lineTo(32.1,-6.5).lineTo(34.6,-1.9).lineTo(37.1,-6.5).lineTo(40.4,-6.5).lineTo(36.2,1.1).lineTo(36.2,6.5).closePath().moveTo(24.6,6.5).lineTo(24.6,1.5).lineTo(20.3,1.5).lineTo(20.3,6.5).lineTo(17.2,6.5).lineTo(17.2,-6.5).lineTo(20.3,-6.5).lineTo(20.3,-1.6).lineTo(24.6,-1.6).lineTo(24.6,-6.5).lineTo(27.7,-6.5).lineTo(27.7,6.5).closePath().moveTo(8.9,6.5).lineTo(8.9,-3.7).lineTo(5.3,-3.7).lineTo(5.3,-6.5).lineTo(15.5,-6.5).lineTo(15.5,-3.7).lineTo(12,-3.7).lineTo(12,6.5).closePath().moveTo(-3,6.5).lineTo(-3,-6.5).lineTo(0.2,-6.5).lineTo(0.2,3.5).lineTo(5.9,3.5).lineTo(5.9,6.5).closePath().moveTo(-7.3,6.5).lineTo(-7.9,4.6).lineTo(-12.9,4.6).lineTo(-13.6,6.5).lineTo(-16.7,6.5).lineTo(-11.9,-6.5).lineTo(-8.9,-6.5).lineTo(-4,6.5).closePath().moveTo(-8.8,1.8).lineTo(-10.4,-2.6).lineTo(-12,1.8).lineTo(-8.8,1.8).closePath().moveTo(-27.3,6.5).lineTo(-27.3,-6.5).lineTo(-18.3,-6.5).lineTo(-18.3,-3.7).lineTo(-24.2,-3.7).lineTo(-24.2,-1.5).lineTo(-18.3,-1.5).lineTo(-18.3,1.4).lineTo(-24.2,1.4).lineTo(-24.2,3.6).lineTo(-18.3,3.6).lineTo(-18.3,6.5).closePath().moveTo(-33,6.5).lineTo(-33,1.5).lineTo(-37.3,1.5).lineTo(-37.3,6.5).lineTo(-40.5,6.5).lineTo(-40.5,-6.5).lineTo(-37.3,-6.5).lineTo(-37.3,-1.6).lineTo(-33,-1.6).lineTo(-33,-6.5).lineTo(-29.9,-6.5).lineTo(-29.9,6.5).closePath();
	this.shape.setTransform(21.5,15.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_healthySpines, new cjs.Rectangle(-18.9,0,224.9,35.6), null);


(lib.txt_happenHere = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(32.8,6.4).lineTo(27.7,-1.6).lineTo(27.7,6.4).lineTo(24.8,6.4).lineTo(24.8,-6.4).lineTo(28,-6.4).lineTo(32.8,1.3).lineTo(32.8,-6.4).lineTo(35.7,-6.4).lineTo(35.7,6.4).closePath().moveTo(13.1,6.4).lineTo(13.1,-6.4).lineTo(21.9,-6.4).lineTo(21.9,-3.6).lineTo(16.1,-3.6).lineTo(16.1,-1.5).lineTo(21.9,-1.5).lineTo(21.9,1.4).lineTo(16.1,1.4).lineTo(16.1,3.5).lineTo(21.9,3.5).lineTo(21.9,6.4).closePath().moveTo(1.3,6.4).lineTo(1.3,-6.4).lineTo(6.3,-6.4).curveTo(7.5,-6.4,8.4,-6).curveTo(9.3,-5.6,9.9,-5).curveTo(10.6,-4.3,11,-3.5).curveTo(11.3,-2.6,11.3,-1.6).curveTo(11.3,-0.7,11,0.2).curveTo(10.6,1.1,9.9,1.7).curveTo(9.3,2.4,8.4,2.8).curveTo(7.5,3.2,6.3,3.2).lineTo(4.3,3.2).lineTo(4.3,6.4).closePath().moveTo(4.3,0.3).lineTo(6.2,0.3).curveTo(7,0.3,7.7,-0.2).curveTo(8.2,-0.7,8.2,-1.6).curveTo(8.2,-2.5,7.7,-3.1).curveTo(7,-3.6,6.2,-3.6).lineTo(4.3,-3.6).closePath().moveTo(-10.5,6.4).lineTo(-10.5,-6.4).lineTo(-5.5,-6.4).curveTo(-4.3,-6.4,-3.4,-6).curveTo(-2.5,-5.6,-1.9,-5).curveTo(-1.2,-4.3,-0.9,-3.5).curveTo(-0.5,-2.6,-0.5,-1.6).curveTo(-0.5,-0.7,-0.9,0.2).curveTo(-1.2,1.1,-1.9,1.7).curveTo(-2.5,2.4,-3.4,2.8).curveTo(-4.3,3.2,-5.5,3.2).lineTo(-7.5,3.2).lineTo(-7.5,6.4).closePath().moveTo(-7.5,0.3).lineTo(-5.6,0.3).curveTo(-4.8,0.3,-4.1,-0.2).curveTo(-3.6,-0.7,-3.6,-1.6).curveTo(-3.6,-2.5,-4.1,-3.1).curveTo(-4.8,-3.6,-5.6,-3.6).lineTo(-7.5,-3.6).closePath().moveTo(-14.8,6.4).lineTo(-15.6,4.5).lineTo(-20.4,4.5).lineTo(-21.1,6.4).lineTo(-24.1,6.4).lineTo(-19.4,-6.4).lineTo(-16.5,-6.4).lineTo(-11.8,6.4).closePath().moveTo(-16.5,1.8).lineTo(-18,-2.5).lineTo(-19.5,1.8).lineTo(-16.5,1.8).closePath().moveTo(-28.4,6.4).lineTo(-28.4,1.5).lineTo(-32.7,1.5).lineTo(-32.7,6.4).lineTo(-35.7,6.4).lineTo(-35.7,-6.4).lineTo(-32.7,-6.4).lineTo(-32.7,-1.5).lineTo(-28.4,-1.5).lineTo(-28.4,-6.4).lineTo(-25.4,-6.4).lineTo(-25.4,6.4).closePath();
	this.shape.setTransform(17,31.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_happenHere, new cjs.Rectangle(-18.7,0,198.5,38.2), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(56.2,6.4).curveTo(55.2,6,54.5,5.3).curveTo(53.8,4.7,53.5,3.7).curveTo(53.1,2.7,53.1,1.4).lineTo(53.1,-6.5).lineTo(56.2,-6.5).lineTo(56.2,1.4).curveTo(56.3,2.5,56.8,3.1).curveTo(57.4,3.7,58.3,3.7).curveTo(59.3,3.7,59.9,3.1).curveTo(60.5,2.5,60.5,1.4).lineTo(60.5,-6.5).lineTo(63.6,-6.5).lineTo(63.6,1.4).curveTo(63.7,2.7,63.3,3.7).curveTo(62.9,4.7,62.3,5.3).curveTo(61.6,6,60.6,6.4).curveTo(59.6,6.7,58.4,6.7).curveTo(57.1,6.7,56.2,6.4).closePath().moveTo(41.9,6.2).curveTo(40.7,5.7,39.8,4.8).curveTo(38.9,3.9,38.3,2.6).curveTo(37.9,1.4,37.9,0).curveTo(37.9,-1.4,38.3,-2.6).curveTo(38.9,-3.8,39.8,-4.7).curveTo(40.7,-5.7,41.9,-6.2).curveTo(43.1,-6.7,44.5,-6.7).curveTo(46,-6.7,47.2,-6.2).curveTo(48.4,-5.7,49.2,-4.7).curveTo(50.2,-3.8,50.8,-2.6).curveTo(51.2,-1.4,51.2,0).curveTo(51.2,1.4,50.8,2.6).curveTo(50.2,3.9,49.3,4.8).curveTo(48.3,5.7,47.2,6.2).curveTo(46,6.7,44.5,6.7).curveTo(43.1,6.7,41.9,6.2).closePath().moveTo(43.1,-3.4).curveTo(42.5,-3.1,42,-2.6).curveTo(41.6,-2.1,41.2,-1.4).curveTo(41,-0.7,41,0).curveTo(41,0.8,41.2,1.4).curveTo(41.6,2.1,42,2.6).curveTo(42.4,3.1,43.1,3.3).curveTo(43.8,3.6,44.5,3.6).curveTo(45.3,3.6,46,3.3).curveTo(46.6,3.1,47.1,2.6).curveTo(47.5,2.1,47.9,1.4).curveTo(48.1,0.8,48.1,0).curveTo(48.1,-0.7,47.9,-1.4).curveTo(47.5,-2.1,47.1,-2.6).curveTo(46.6,-3.1,46,-3.4).curveTo(45.3,-3.6,44.5,-3.6).curveTo(43.8,-3.6,43.1,-3.4).closePath().moveTo(-46.5,6.2).curveTo(-47.8,5.7,-48.7,4.8).curveTo(-49.6,3.9,-50.1,2.6).curveTo(-50.6,1.4,-50.7,0).curveTo(-50.6,-1.4,-50.1,-2.6).curveTo(-49.6,-3.8,-48.7,-4.7).curveTo(-47.8,-5.7,-46.5,-6.2).curveTo(-45.3,-6.7,-43.9,-6.7).curveTo(-42.5,-6.7,-41.3,-6.2).curveTo(-40.1,-5.7,-39.2,-4.7).curveTo(-38.3,-3.8,-37.7,-2.6).curveTo(-37.2,-1.4,-37.2,0).curveTo(-37.2,1.4,-37.7,2.6).curveTo(-38.2,3.9,-39.2,4.8).curveTo(-40.1,5.7,-41.3,6.2).curveTo(-42.5,6.7,-43.9,6.7).curveTo(-45.3,6.7,-46.5,6.2).closePath().moveTo(-45.3,-3.4).curveTo(-46,-3.1,-46.4,-2.6).curveTo(-46.9,-2.1,-47.2,-1.4).curveTo(-47.5,-0.7,-47.4,0).curveTo(-47.5,0.8,-47.2,1.4).curveTo(-46.9,2.1,-46.5,2.6).curveTo(-46,3.1,-45.4,3.3).curveTo(-44.7,3.6,-43.9,3.6).curveTo(-43.2,3.6,-42.5,3.3).curveTo(-41.9,3.1,-41.3,2.6).curveTo(-40.9,2.1,-40.6,1.4).curveTo(-40.3,0.8,-40.3,0).curveTo(-40.3,-0.7,-40.6,-1.4).curveTo(-40.9,-2.1,-41.3,-2.6).curveTo(-41.9,-3.1,-42.5,-3.4).curveTo(-43.2,-3.6,-43.9,-3.6).curveTo(-44.7,-3.6,-45.3,-3.4).closePath().moveTo(30.3,6.6).lineTo(30.3,1.1).lineTo(26,-6.5).lineTo(29.4,-6.5).lineTo(31.9,-1.8).lineTo(34.5,-6.5).lineTo(37.8,-6.5).lineTo(33.5,1.1).lineTo(33.5,6.6).closePath().moveTo(14.8,6.6).lineTo(14.8,-3.6).lineTo(11.2,-3.6).lineTo(11.2,-6.5).lineTo(21.3,-6.5).lineTo(21.3,-3.6).lineTo(17.8,-3.6).lineTo(17.8,6.6).closePath().moveTo(8.1,6.6).lineTo(7.4,4.6).lineTo(2.4,4.6).lineTo(1.7,6.6).lineTo(-1.4,6.6).lineTo(3.4,-6.5).lineTo(6.4,-6.5).lineTo(11.3,6.6).closePath().moveTo(6.5,1.9).lineTo(4.9,-2.5).lineTo(3.3,1.9).lineTo(6.5,1.9).closePath().moveTo(-5.3,6.6).lineTo(-5.3,1.5).lineTo(-9.6,1.5).lineTo(-9.6,6.6).lineTo(-12.8,6.6).lineTo(-12.8,-6.5).lineTo(-9.6,-6.5).lineTo(-9.6,-1.6).lineTo(-5.3,-1.6).lineTo(-5.3,-6.5).lineTo(-2.2,-6.5).lineTo(-2.2,6.6).closePath().moveTo(-21.1,6.6).lineTo(-23.4,-1.7).lineTo(-25.7,6.6).lineTo(-28.8,6.6).lineTo(-32.3,-6.5).lineTo(-29.2,-6.5).lineTo(-27.2,1.6).lineTo(-24.8,-6.5).lineTo(-21.9,-6.5).lineTo(-19.6,1.6).lineTo(-17.6,-6.5).lineTo(-14.5,-6.5).lineTo(-18.1,6.6).closePath().moveTo(-63.6,6.6).lineTo(-63.6,-6.5).lineTo(-59,-6.5).curveTo(-57.4,-6.5,-56.2,-6).curveTo(-55,-5.5,-54.1,-4.7).curveTo(-53.1,-3.8,-52.7,-2.6).curveTo(-52.1,-1.4,-52.1,0).curveTo(-52.1,1.4,-52.7,2.6).curveTo(-53.2,3.8,-54.1,4.7).curveTo(-55,5.6,-56.3,6.1).curveTo(-57.4,6.6,-58.9,6.6).closePath().moveTo(-60.6,3.6).lineTo(-59,3.6).curveTo(-58.2,3.6,-57.5,3.3).curveTo(-56.8,3.1,-56.3,2.6).curveTo(-55.9,2.1,-55.6,1.4).curveTo(-55.4,0.8,-55.4,0).curveTo(-55.4,-0.8,-55.6,-1.4).curveTo(-55.8,-2.1,-56.3,-2.6).curveTo(-56.8,-3.1,-57.5,-3.3).curveTo(-58.2,-3.6,-59.1,-3.6).lineTo(-60.6,-3.6).closePath();
	this.shape.setTransform(44.1,15.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_doWhatYou, new cjs.Rectangle(-19.5,0,194.5,35.6), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(8.5,10.3).curveTo(7,9.8,5.9,8.6).curveTo(4.9,7.6,4.3,6.1).curveTo(3.7,4.6,3.7,2.8).curveTo(3.7,1.2,4.3,-0.3).curveTo(5,-1.8,6,-2.9).curveTo(7.2,-4,8.7,-4.6).curveTo(10.2,-5.3,11.9,-5.2).curveTo(13.7,-5.3,15.2,-4.6).curveTo(16.7,-4.1,17.8,-3).curveTo(18.9,-1.9,19.5,-0.4).curveTo(20.1,1,20.1,2.8).lineTo(20.1,4.5).lineTo(8.4,4.5).curveTo(8.8,5.7,9.8,6.3).curveTo(10.7,7,12,7).curveTo(13.2,7,14,6.5).curveTo(14.8,6,15.3,5.3).lineTo(19.2,7.5).curveTo(18,9.2,16.3,10.1).curveTo(14.6,11,12,11).curveTo(10.1,11,8.5,10.3).closePath().moveTo(15.3,0.9).curveTo(14.9,-0.1,14,-0.7).curveTo(13.2,-1.2,12,-1.2).curveTo(10.8,-1.2,9.9,-0.7).curveTo(9,-0.1,8.6,0.9).lineTo(15.3,0.9).lineTo(15.3,0.9).closePath().moveTo(-2.1,10.7).curveTo(-3.1,10.3,-3.8,9.6).curveTo(-4.5,8.8,-4.9,7.7).curveTo(-5.2,6.5,-5.2,4.7).lineTo(-5.2,-0.7).lineTo(-7.9,-0.7).lineTo(-7.9,-5).lineTo(-5.2,-5).lineTo(-5.2,-8.3).lineTo(-0.4,-11).lineTo(-0.4,-5).lineTo(3.4,-5).lineTo(3.4,-0.7).lineTo(-0.4,-0.7).lineTo(-0.4,4.5).curveTo(-0.4,5.6,-0.1,6.1).curveTo(0.3,6.5,1,6.4).curveTo(1.6,6.4,2.2,5.9).lineTo(4.4,9.6).curveTo(3.6,10.2,2.5,10.7).curveTo(1.5,11,0.3,11).curveTo(-1,11,-2.1,10.7).closePath().moveTo(-14.2,10.7).curveTo(-15.2,10.3,-15.9,9.6).curveTo(-16.6,8.8,-17,7.7).curveTo(-17.4,6.5,-17.4,4.7).lineTo(-17.4,-0.7).lineTo(-20.1,-0.7).lineTo(-20.1,-5).lineTo(-17.4,-5).lineTo(-17.4,-8.3).lineTo(-12.6,-11).lineTo(-12.6,-5).lineTo(-8.7,-5).lineTo(-8.7,-0.7).lineTo(-12.6,-0.7).lineTo(-12.6,4.5).curveTo(-12.6,5.6,-12.2,6.1).curveTo(-11.8,6.5,-11.2,6.4).curveTo(-10.5,6.4,-9.9,5.9).lineTo(-7.7,9.6).curveTo(-8.6,10.2,-9.6,10.7).curveTo(-10.7,11,-11.9,11).curveTo(-13.2,11,-14.2,10.7).closePath();
	this.shape.setTransform(88.925,20.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#008FBE").beginStroke().moveTo(40.3,9.9).curveTo(39.5,9.2,39.5,7.9).curveTo(39.5,6.6,40.3,5.8).curveTo(41.1,5,42.3,5).curveTo(43.6,5,44.4,5.8).curveTo(45.2,6.6,45.2,7.9).curveTo(45.2,9.2,44.4,9.9).curveTo(43.6,10.8,42.3,10.7).curveTo(41,10.8,40.3,9.9).closePath().moveTo(-22.8,10).curveTo(-24.3,9.5,-25.4,8.3).curveTo(-26.4,7.3,-27,5.8).curveTo(-27.6,4.3,-27.6,2.5).curveTo(-27.6,0.9,-27,-0.6).curveTo(-26.3,-2.1,-25.3,-3.2).curveTo(-24.1,-4.3,-22.6,-4.9).curveTo(-21.1,-5.6,-19.4,-5.5).curveTo(-17.6,-5.6,-16.1,-4.9).curveTo(-14.6,-4.4,-13.5,-3.3).curveTo(-12.4,-2.2,-11.8,-0.7).curveTo(-11.2,0.7,-11.2,2.5).lineTo(-11.2,4.2).lineTo(-22.9,4.2).curveTo(-22.5,5.4,-21.5,6).curveTo(-20.6,6.7,-19.3,6.7).curveTo(-18.1,6.7,-17.3,6.2).curveTo(-16.5,5.7,-16,5).lineTo(-12.1,7.2).curveTo(-13.3,8.9,-15,9.8).curveTo(-16.7,10.7,-19.3,10.7).curveTo(-21.2,10.7,-22.8,10).closePath().moveTo(-16,0.6).curveTo(-16.4,-0.4,-17.3,-1).curveTo(-18.1,-1.5,-19.3,-1.5).curveTo(-20.5,-1.5,-21.4,-1).curveTo(-22.3,-0.4,-22.7,0.6).lineTo(-16,0.6).lineTo(-16,0.6).closePath().moveTo(30.6,10.4).lineTo(30.6,-5.3).lineTo(35.4,-5.3).lineTo(35.4,-3).curveTo(36,-4.4,37.1,-5).curveTo(38.2,-5.5,39.8,-5.5).curveTo(40.5,-5.5,41.2,-5.4).lineTo(42.4,-4.9).lineTo(40.7,-0.1).curveTo(40.4,-0.4,39.8,-0.5).curveTo(39.2,-0.8,38.5,-0.8).curveTo(37.1,-0.7,36.2,0).curveTo(35.4,0.8,35.4,2.7).lineTo(35.4,10.4).closePath().moveTo(-45.2,10.4).lineTo(-45.2,-10.8).lineTo(-36.8,-10.8).curveTo(-32.9,-10.7,-31,-9.2).curveTo(-29.1,-7.7,-29.1,-4.7).curveTo(-29.1,-3.2,-29.6,-2.2).curveTo(-30.2,-1.3,-31.2,-0.5).curveTo(-30,0.1,-29.3,1.3).curveTo(-28.7,2.3,-28.7,4).curveTo(-28.7,7.3,-30.8,8.8).curveTo(-33,10.4,-36.8,10.4).closePath().moveTo(-40.2,6).lineTo(-36.7,6).curveTo(-35.2,6,-34.5,5.4).curveTo(-33.8,4.9,-33.8,3.8).curveTo(-33.8,2.9,-34.5,2.4).curveTo(-35.1,1.8,-36.7,1.8).lineTo(-40.2,1.8).closePath().moveTo(-40.2,-2.6).lineTo(-36.5,-2.6).curveTo(-35.2,-2.6,-34.6,-3.1).curveTo(-34.1,-3.7,-34.1,-4.6).curveTo(-34.1,-5.4,-34.7,-5.9).curveTo(-35.2,-6.3,-36.6,-6.4).lineTo(-40.2,-6.4).closePath();
	this.shape_1.setTransform(79.725,20.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_better, new cjs.Rectangle(0,0,162.7,42.1), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(52.3,9.5).curveTo(51.7,8.8,51.6,7.7).curveTo(51.6,6.5,52.4,5.9).curveTo(53.1,5.1,54.1,5.2).curveTo(55.2,5.1,55.9,5.9).curveTo(56.6,6.5,56.6,7.7).curveTo(56.6,8.8,55.9,9.5).curveTo(55.2,10.2,54.1,10.2).curveTo(53,10.2,52.3,9.5).closePath().moveTo(45.7,9.8).curveTo(44.8,9.6,44.1,8.9).curveTo(43.5,8.3,43.2,7.2).curveTo(42.9,6.2,42.9,4.7).lineTo(42.9,-0.1).lineTo(40.5,-0.1).lineTo(40.5,-3.8).lineTo(42.9,-3.8).lineTo(42.9,-6.8).lineTo(47.1,-9.1).lineTo(47.1,-3.8).lineTo(50.5,-3.8).lineTo(50.5,-0.1).lineTo(47.1,-0.1).lineTo(47.1,4.4).curveTo(47.1,5.4,47.4,5.9).curveTo(47.8,6.1,48.3,6.1).curveTo(48.9,6.1,49.4,5.7).lineTo(51.4,8.9).curveTo(50.6,9.5,49.7,9.8).curveTo(48.7,10.1,47.7,10.1).curveTo(46.5,10.1,45.7,9.8).closePath().moveTo(18.5,9.6).curveTo(17.2,9,16.2,8.1).curveTo(15.3,7.1,14.8,5.9).curveTo(14.3,4.5,14.3,3.1).curveTo(14.3,1.5,14.8,0.2).curveTo(15.4,-1.1,16.3,-2).curveTo(17.4,-3,18.7,-3.6).curveTo(20,-4.1,21.5,-4.1).curveTo(23.1,-4.1,24.4,-3.6).curveTo(25.7,-3,26.7,-2.1).curveTo(27.7,-1.1,28.1,0.1).curveTo(28.6,1.4,28.7,2.9).lineTo(28.7,4.4).lineTo(18.4,4.4).curveTo(18.8,5.5,19.7,6.1).curveTo(20.4,6.5,21.6,6.5).curveTo(22.7,6.5,23.3,6.2).curveTo(24,5.8,24.4,5.2).lineTo(27.9,7.1).curveTo(26.8,8.6,25.3,9.4).curveTo(23.9,10.1,21.5,10.1).curveTo(19.9,10.2,18.5,9.6).closePath().moveTo(24.4,1.3).curveTo(24.1,0.3,23.4,-0.1).curveTo(22.6,-0.6,21.5,-0.6).curveTo(20.5,-0.6,19.8,-0.1).curveTo(19,0.4,18.5,1.3).lineTo(24.4,1.3).lineTo(24.4,1.3).closePath().moveTo(-9.6,9.6).curveTo(-10.9,9,-11.9,8.1).curveTo(-12.8,7.1,-13.4,5.9).curveTo(-13.8,4.5,-13.9,3.1).curveTo(-13.9,1.5,-13.3,0.2).curveTo(-12.7,-1.1,-11.8,-2).curveTo(-10.8,-3,-9.5,-3.6).curveTo(-8.1,-4.1,-6.6,-4.1).curveTo(-5,-4.1,-3.7,-3.6).curveTo(-2.4,-3,-1.5,-2.1).curveTo(-0.5,-1.1,0.1,0.1).curveTo(0.5,1.4,0.5,2.9).lineTo(0.5,4.4).lineTo(-9.7,4.4).curveTo(-9.3,5.5,-8.5,6.1).curveTo(-7.7,6.5,-6.5,6.5).curveTo(-5.5,6.5,-4.8,6.2).curveTo(-4.1,5.8,-3.7,5.2).lineTo(-0.2,7.1).curveTo(-1.3,8.6,-2.8,9.4).curveTo(-4.2,10.1,-6.6,10.1).curveTo(-8.2,10.2,-9.6,9.6).closePath().moveTo(-3.7,1.3).curveTo(-4,0.3,-4.7,-0.1).curveTo(-5.5,-0.6,-6.6,-0.6).curveTo(-7.7,-0.6,-8.3,-0.1).curveTo(-9.1,0.4,-9.6,1.3).lineTo(-3.7,1.3).lineTo(-3.7,1.3).closePath().moveTo(-37.1,9.6).curveTo(-38.5,9,-39.5,8.1).curveTo(-40.4,7.1,-40.9,5.9).curveTo(-41.4,4.5,-41.4,3.1).curveTo(-41.4,1.5,-40.9,0.2).curveTo(-40.3,-1.1,-39.4,-2).curveTo(-38.3,-3,-37,-3.6).curveTo(-35.7,-4.1,-34.1,-4.1).curveTo(-32.6,-4.1,-31.3,-3.6).curveTo(-30,-3,-29,-2.1).curveTo(-28.1,-1.1,-27.5,0.1).curveTo(-27,1.4,-27,2.9).lineTo(-27,4.4).lineTo(-37.3,4.4).curveTo(-36.9,5.5,-36,6.1).curveTo(-35.3,6.5,-34.1,6.5).curveTo(-33.1,6.5,-32.3,6.2).curveTo(-31.7,5.8,-31.3,5.2).lineTo(-27.8,7.1).curveTo(-28.8,8.6,-30.4,9.4).curveTo(-31.8,10.1,-34.1,10.1).curveTo(-35.8,10.2,-37.1,9.6).closePath().moveTo(-31.3,1.3).curveTo(-31.6,0.3,-32.3,-0.1).curveTo(-33,-0.6,-34.1,-0.6).curveTo(-35.2,-0.6,-35.9,-0.1).curveTo(-36.7,0.4,-37.1,1.3).lineTo(-31.3,1.3).lineTo(-31.3,1.3).closePath().moveTo(35.3,9.9).lineTo(35.3,-3.8).lineTo(39.7,-3.8).lineTo(39.7,9.9).closePath().moveTo(5.5,9.9).lineTo(0.3,-3.8).lineTo(4.8,-3.8).lineTo(7.6,4.3).lineTo(10.4,-3.8).lineTo(14.8,-3.8).lineTo(9.8,9.9).closePath().moveTo(-19.7,9.9).lineTo(-19.7,-3.8).lineTo(-15.2,-3.8).lineTo(-15.2,9.9).closePath().moveTo(-26.1,9.9).lineTo(-26.1,-10.2).lineTo(-21.8,-10.2).lineTo(-21.8,9.9).closePath().moveTo(-56.6,9.9).lineTo(-56.6,-8.7).lineTo(-49.3,-8.7).curveTo(-45.8,-8.7,-44.2,-7.4).curveTo(-42.4,-6,-42.4,-3.4).curveTo(-42.4,-2.1,-43,-1.2).curveTo(-43.5,-0.3,-44.3,0.3).curveTo(-43.3,0.9,-42.7,1.8).curveTo(-42.2,2.9,-42.2,4.3).curveTo(-42.1,7.2,-44,8.6).curveTo(-45.9,9.9,-49.3,9.9).closePath().moveTo(-52.2,6).lineTo(-49.2,6).curveTo(-47.8,6,-47.3,5.5).curveTo(-46.6,5,-46.7,4.2).curveTo(-46.7,3.3,-47.2,2.8).curveTo(-47.8,2.4,-49.3,2.4).lineTo(-52.2,2.4).closePath().moveTo(-52.2,-1.5).lineTo(-49.1,-1.5).curveTo(-47.8,-1.5,-47.4,-2).curveTo(-46.9,-2.4,-46.9,-3.2).curveTo(-46.9,-4,-47.4,-4.4).curveTo(-47.9,-4.8,-49.1,-4.8).lineTo(-52.2,-4.8).closePath().moveTo(35.6,-5.6).curveTo(35,-6.4,35,-7.4).curveTo(35,-8.6,35.6,-9.3).curveTo(36.4,-10,37.5,-10.1).curveTo(38.6,-10,39.4,-9.3).curveTo(40,-8.6,40,-7.4).curveTo(40,-6.4,39.4,-5.6).curveTo(38.6,-5,37.5,-4.9).curveTo(36.4,-5,35.6,-5.6).closePath().moveTo(-19.3,-5.6).curveTo(-20,-6.4,-20,-7.4).curveTo(-20,-8.6,-19.3,-9.3).curveTo(-18.6,-10,-17.5,-10.1).curveTo(-16.3,-10,-15.6,-9.3).curveTo(-14.9,-8.6,-14.9,-7.4).curveTo(-14.9,-6.4,-15.6,-5.6).curveTo(-16.3,-5,-17.5,-4.9).curveTo(-18.6,-5,-19.3,-5.6).closePath();
	this.shape.setTransform(-52.35,33);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_believeIt, new cjs.Rectangle(-108.9,0,271.6,44.8), null);


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
	this.instance.setTransform(0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_03_1, new cjs.Rectangle(0,24,160,409), null);


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
	this.instance.setTransform(0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_02_1, new cjs.Rectangle(0,24,160,409), null);


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
	this.instance.setTransform(0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01_1, new cjs.Rectangle(0,24,160,409), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(16.9,4.2).curveTo(16,3.8,15.4,3.2).curveTo(14.8,2.6,14.5,1.7).curveTo(14.1,0.9,14.1,0).curveTo(14.1,-0.9,14.5,-1.8).curveTo(14.8,-2.5,15.4,-3.1).curveTo(16,-3.8,16.9,-4.1).curveTo(17.7,-4.5,18.6,-4.5).curveTo(19.5,-4.5,20.4,-4.1).curveTo(21.2,-3.8,21.8,-3.1).curveTo(22.4,-2.5,22.8,-1.8).curveTo(23.1,-0.9,23.1,0).curveTo(23.1,0.9,22.8,1.7).curveTo(22.4,2.6,21.8,3.2).curveTo(21.2,3.8,20.4,4.2).curveTo(19.5,4.5,18.6,4.5).curveTo(17.7,4.5,16.9,4.2).closePath().moveTo(17.5,-2.6).curveTo(17,-2.4,16.6,-2).lineTo(16,-1.1).curveTo(15.8,-0.6,15.8,0).curveTo(15.8,0.6,16,1.1).curveTo(16.3,1.6,16.6,2).curveTo(17,2.4,17.5,2.6).curveTo(18,2.8,18.6,2.8).curveTo(19.2,2.8,19.7,2.6).curveTo(20.2,2.4,20.6,2).curveTo(21,1.6,21.2,1.1).curveTo(21.4,0.6,21.4,0).curveTo(21.4,-0.6,21.2,-1.1).curveTo(21,-1.6,20.6,-2).curveTo(20.2,-2.4,19.7,-2.6).curveTo(19.2,-2.8,18.6,-2.8).curveTo(18,-2.8,17.5,-2.6).closePath().moveTo(32.4,4.4).lineTo(32.4,-4.4).lineTo(38.3,-4.4).lineTo(38.3,-2.8).lineTo(34.1,-2.8).lineTo(34.1,-0.8).lineTo(38.3,-0.8).lineTo(38.3,0.8).lineTo(34.1,0.8).lineTo(34.1,2.8).lineTo(38.3,2.8).lineTo(38.3,4.4).closePath().moveTo(29.5,4.4).lineTo(28.1,1.6).lineTo(26.1,1.6).lineTo(26.1,4.4).lineTo(24.4,4.4).lineTo(24.4,-4.4).lineTo(27.9,-4.4).curveTo(28.7,-4.3,29.3,-4.1).curveTo(29.9,-3.9,30.3,-3.5).curveTo(30.7,-3.1,30.9,-2.6).curveTo(31.2,-2,31.2,-1.4).curveTo(31.2,-0.5,30.8,0.1).curveTo(30.4,0.9,29.6,1.2).lineTo(31.4,4.4).closePath().moveTo(26.1,0.1).lineTo(27.8,0.1).curveTo(28.2,0.1,28.5,-0.1).lineTo(29.1,-0.3).curveTo(29.3,-0.5,29.3,-0.9).lineTo(29.4,-1.4).curveTo(29.4,-2.1,29,-2.4).curveTo(28.6,-2.8,27.8,-2.8).lineTo(26.1,-2.8).closePath().moveTo(11.2,4.4).lineTo(11.2,-1.8).lineTo(8.5,1.8).lineTo(6,-1.7).lineTo(6,4.4).lineTo(4.3,4.4).lineTo(4.3,-4.4).lineTo(5.9,-4.4).lineTo(8.5,-0.8).lineTo(11.2,-4.4).lineTo(12.8,-4.4).lineTo(12.8,4.4).closePath().moveTo(-1.7,4.4).lineTo(-5.7,-1.8).lineTo(-5.7,4.4).lineTo(-7.3,4.4).lineTo(-7.3,-4.4).lineTo(-5.5,-4.4).lineTo(-1.7,1.6).lineTo(-1.7,-4.4).lineTo(-0,-4.4).lineTo(-0,4.4).closePath().moveTo(-10.3,4.4).lineTo(-11.7,1.6).lineTo(-13.7,1.6).lineTo(-13.7,4.4).lineTo(-15.4,4.4).lineTo(-15.4,-4.4).lineTo(-11.8,-4.4).curveTo(-11.1,-4.3,-10.5,-4.1).curveTo(-9.9,-3.9,-9.4,-3.5).curveTo(-9,-3.1,-8.8,-2.6).curveTo(-8.6,-2,-8.6,-1.4).curveTo(-8.6,-0.5,-9,0.1).curveTo(-9.4,0.9,-10.1,1.2).lineTo(-8.4,4.4).closePath().moveTo(-13.7,0.1).lineTo(-11.9,0.1).curveTo(-11.5,0.1,-11.2,-0.1).lineTo(-10.7,-0.3).curveTo(-10.5,-0.5,-10.4,-0.9).lineTo(-10.3,-1.4).curveTo(-10.3,-2.1,-10.7,-2.4).curveTo(-11.1,-2.8,-11.9,-2.8).lineTo(-13.7,-2.8).closePath().moveTo(-18,4.4).lineTo(-18.6,2.8).lineTo(-22.3,2.8).lineTo(-22.9,4.4).lineTo(-24.6,4.4).lineTo(-21.3,-4.4).lineTo(-19.6,-4.4).lineTo(-16.3,4.4).closePath().moveTo(-19.2,1.3).lineTo(-20.4,-2.2).lineTo(-21.7,1.3).lineTo(-19.2,1.3).closePath().moveTo(-31.3,4.4).lineTo(-31.3,-4.4).lineTo(-25.4,-4.4).lineTo(-25.4,-2.8).lineTo(-29.6,-2.8).lineTo(-29.6,-0.8).lineTo(-25.4,-0.8).lineTo(-25.4,0.8).lineTo(-29.6,0.8).lineTo(-29.6,2.8).lineTo(-25.4,2.8).lineTo(-25.4,4.4).closePath().moveTo(-38.3,4.4).lineTo(-38.3,-4.4).lineTo(-36.6,-4.4).lineTo(-36.6,2.7).lineTo(-32.6,2.7).lineTo(-32.6,4.4).closePath();
	this.shape.setTransform(17.5749,18.3296,0.7925,0.7925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#008FBE").setStrokeStyle(1,1,1).moveTo(-87.5,-22.8).lineTo(87.5,-22.8).lineTo(87.5,22.8).lineTo(-87.5,22.8).closePath();
	this.shape_1.setTransform(17.6145,18.3296,0.7925,0.7925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-87.5,22.8).lineTo(-87.5,-22.8).lineTo(87.5,-22.8).lineTo(87.5,22.8).closePath();
	this.shape_2.setTransform(17.6145,18.3296,0.7925,0.7925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-52.7,-0.7,188.3,38.1), null);


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

	// _Layer_
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3C8EBA").beginStroke().moveTo(14.9,52.5).lineTo(14.9,46.1).lineTo(19.7,46.1).lineTo(19.7,47.3).lineTo(16.4,47.3).lineTo(16.4,48.6).lineTo(19.5,48.6).lineTo(19.5,49.8).lineTo(16.4,49.8).lineTo(16.4,51.3).lineTo(19.8,51.3).lineTo(19.8,52.5).closePath().moveTo(8.9,52.5).lineTo(8.9,46.1).lineTo(10.3,46.1).lineTo(10.3,51.3).lineTo(13.4,51.3).lineTo(13.4,52.5).closePath().moveTo(2.2,52.5).lineTo(2.2,46.1).lineTo(5.1,46.1).curveTo(5.9,46.1,6.4,46.4).curveTo(7,46.7,7.1,47.2).curveTo(7.3,47.6,7.4,48.2).curveTo(7.3,48.7,7.1,49.1).curveTo(7,49.6,6.4,49.9).curveTo(5.9,50.2,5.1,50.2).lineTo(3.7,50.2).lineTo(3.7,52.5).closePath().moveTo(3.7,49.1).lineTo(4.7,49.1).curveTo(5.3,49.1,5.6,49).curveTo(6,48.7,6,48.2).curveTo(6,47.6,5.6,47.4).curveTo(5.3,47.2,4.7,47.2).lineTo(3.7,47.2).closePath().moveTo(-1,52.5).lineTo(-1,48).lineTo(-2.6,52.5).lineTo(-3.7,52.5).lineTo(-5.3,48).lineTo(-5.3,52.5).lineTo(-6.6,52.5).lineTo(-6.6,46.1).lineTo(-4.6,46.1).lineTo(-3.2,50.5).lineTo(-3.1,50.5).lineTo(-1.7,46.1).lineTo(0.3,46.1).lineTo(0.3,52.5).closePath().moveTo(-13.1,52.5).lineTo(-13.1,46.1).lineTo(-8.3,46.1).lineTo(-8.3,47.3).lineTo(-11.7,47.3).lineTo(-11.7,48.6).lineTo(-8.6,48.6).lineTo(-8.6,49.8).lineTo(-11.7,49.8).lineTo(-11.7,51.3).lineTo(-8.2,51.3).lineTo(-8.2,52.5).closePath().moveTo(-17.9,52.5).lineTo(-17.9,47.3).lineTo(-19.8,47.3).lineTo(-19.8,46.1).lineTo(-14.5,46.1).lineTo(-14.5,47.3).lineTo(-16.4,47.3).lineTo(-16.4,52.5).closePath().moveTo(-18.7,-33).lineTo(-18.7,-42.2).lineTo(-0.6,-42.2).lineTo(-9.7,-33).closePath().moveTo(0.7,-43.4).lineTo(9.8,-52.5).lineTo(18.7,-52.5).lineTo(18.7,-43.4).closePath();
	this.shape.setTransform(79.636,308.9609,0.5537,0.5537);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#F5B846").beginStroke().moveTo(0.6,18.7).lineTo(0.6,0.6).lineTo(9.7,9.7).lineTo(9.7,18.7).closePath().moveTo(-9.7,-9.7).lineTo(-9.7,-18.7).lineTo(-0.6,-18.7).lineTo(-0.6,-0.6).closePath();
	this.shape_1.setTransform(79.6498,285.2772,0.5537,0.5537);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#1140A0").beginStroke().moveTo(8.6,50.8).curveTo(7.4,49.5,7.4,47.6).curveTo(7.4,45.5,8.6,44.2).curveTo(9.8,42.8,11.8,42.8).curveTo(13.2,42.8,14.4,43.7).curveTo(15.5,44.5,15.6,46.1).lineTo(13.7,46.1).curveTo(13.7,45.4,13.1,44.9).curveTo(12.5,44.5,11.8,44.5).curveTo(10.9,44.5,10.4,44.9).curveTo(9.8,45.4,9.6,46.1).curveTo(9.3,46.6,9.3,47.6).curveTo(9.3,48.8,9.9,49.7).curveTo(10.5,50.6,11.8,50.6).curveTo(12.6,50.6,13.2,49.9).curveTo(13.7,49.4,13.8,48.5).lineTo(15.7,48.5).curveTo(15.5,50.2,14.5,51.2).curveTo(13.4,52.1,11.8,52.2).curveTo(9.8,52.2,8.6,50.8).closePath().moveTo(-25,50.8).curveTo(-26.2,49.5,-26.2,47.6).curveTo(-26.2,45.5,-25,44.2).curveTo(-23.8,42.8,-21.9,42.8).curveTo(-20.4,42.8,-19.3,43.7).curveTo(-18.2,44.5,-18,46.1).lineTo(-19.9,46.1).curveTo(-20,45.4,-20.5,44.9).curveTo(-21.1,44.5,-21.9,44.5).curveTo(-22.7,44.5,-23.2,44.9).curveTo(-23.8,45.4,-24.1,46.1).curveTo(-24.3,46.7,-24.3,47.6).curveTo(-24.3,48.9,-23.7,49.7).curveTo(-23.1,50.6,-21.9,50.6).curveTo(-21,50.6,-20.5,49.9).curveTo(-20,49.5,-19.8,48.5).lineTo(-18,48.5).curveTo(-18.1,50.2,-19.2,51.2).curveTo(-20.2,52.1,-21.9,52.2).curveTo(-23.8,52.2,-25,50.8).closePath().moveTo(62,52).lineTo(61.8,51.4).lineTo(61.7,49.8).curveTo(61.6,49.1,61.2,48.8).curveTo(60.9,48.5,60.2,48.5).lineTo(58.2,48.5).lineTo(58.2,52).lineTo(56.3,52).lineTo(56.3,43.1).lineTo(61.1,43.1).curveTo(62.3,43.1,63,43.7).curveTo(63.7,44.5,63.7,45.5).curveTo(63.7,47.2,62.3,47.8).lineTo(62.3,47.8).curveTo(63.5,48.1,63.6,49.8).lineTo(63.8,51.6).lineTo(63.9,52).closePath().moveTo(58.2,47).lineTo(60.4,47).curveTo(61.7,47,61.7,45.8).curveTo(61.7,44.5,60.4,44.5).lineTo(58.2,44.5).closePath().moveTo(47,52).lineTo(47,43.1).lineTo(53.6,43.1).lineTo(53.6,44.6).lineTo(48.9,44.6).lineTo(48.9,46.6).lineTo(53.2,46.6).lineTo(53.2,48.1).lineTo(48.9,48.1).lineTo(48.9,50.3).lineTo(53.7,50.3).lineTo(53.7,52).closePath().moveTo(40.1,52).lineTo(40.1,44.6).lineTo(37.4,44.6).lineTo(37.4,43.1).lineTo(44.7,43.1).lineTo(44.7,44.6).lineTo(42,44.6).lineTo(42,52).closePath().moveTo(33.2,52).lineTo(29.4,46).lineTo(29.4,52).lineTo(27.6,52).lineTo(27.6,43.1).lineTo(29.6,43.1).lineTo(33.2,49).lineTo(33.3,49).lineTo(33.3,43.1).lineTo(35.1,43.1).lineTo(35.1,52).closePath().moveTo(18.3,52).lineTo(18.3,43.1).lineTo(24.9,43.1).lineTo(24.9,44.6).lineTo(20.2,44.6).lineTo(20.2,46.6).lineTo(24.5,46.6).lineTo(24.5,48.1).lineTo(20.2,48.1).lineTo(20.2,50.3).lineTo(25.1,50.3).lineTo(25.1,52).closePath().moveTo(-5.5,52).lineTo(-5.5,43.1).lineTo(-3.6,43.1).lineTo(-3.6,50.3).lineTo(0.8,50.3).lineTo(0.8,52).closePath().moveTo(-9.6,52).lineTo(-10.3,49.9).lineTo(-13.6,49.9).lineTo(-14.3,52).lineTo(-16.3,52).lineTo(-12.9,43.1).lineTo(-10.9,43.1).lineTo(-7.6,52).closePath().moveTo(-13.1,48.5).lineTo(-10.8,48.5).lineTo(-12,45.2).closePath().moveTo(-30.8,52).lineTo(-30.8,43.1).lineTo(-28.8,43.1).lineTo(-28.8,52).closePath().moveTo(-41.2,52).lineTo(-41.2,43.1).lineTo(-37.4,43.1).curveTo(-35.6,43,-34.5,44.2).curveTo(-33.4,45.3,-33.4,47.4).curveTo(-33.4,49.5,-34.4,50.7).curveTo(-35.4,52,-37.4,52).closePath().moveTo(-39.3,50.3).lineTo(-37.5,50.3).curveTo(-36.6,50.3,-36,49.7).curveTo(-35.3,49,-35.3,47.7).curveTo(-35.3,46.3,-35.9,45.4).curveTo(-36.5,44.7,-37.9,44.6).lineTo(-39.3,44.6).closePath().moveTo(-50.6,52).lineTo(-50.6,43.1).lineTo(-43.9,43.1).lineTo(-43.9,44.6).lineTo(-48.6,44.6).lineTo(-48.6,46.6).lineTo(-44.3,46.6).lineTo(-44.3,48.1).lineTo(-48.6,48.1).lineTo(-48.6,50.3).lineTo(-43.8,50.3).lineTo(-43.8,52).closePath().moveTo(-55.4,52).lineTo(-55.4,45.6).lineTo(-57.6,52).lineTo(-59.1,52).lineTo(-61.3,45.7).lineTo(-61.3,45.7).lineTo(-61.3,52).lineTo(-63.1,52).lineTo(-63.1,43.1).lineTo(-60.4,43.1).lineTo(-58.3,49.1).lineTo(-56.3,43.1).lineTo(-53.5,43.1).lineTo(-53.5,52).closePath().moveTo(-89.7,38.8).curveTo(-90.1,38.3,-90.1,37.7).curveTo(-90.1,37,-89.7,36.5).curveTo(-89.3,36.2,-88.6,36.2).lineTo(-88,36.2).curveTo(-87.3,36.2,-86.8,35.6).curveTo(-85.6,33.7,-85.1,32.4).curveTo(-84.7,31.3,-84.7,30.9).curveTo(-84.7,30.1,-85.3,28.4).lineTo(-88,20.9).curveTo(-88.6,19.4,-88.9,19).curveTo(-89.4,18.3,-90.1,18.2).lineTo(-91,18).curveTo(-91.1,17.9,-91.1,17.9).curveTo(-91.1,17.8,-91.2,17.8).curveTo(-91.2,17.7,-91.2,17.6).curveTo(-91.2,17.6,-91.2,17.5).curveTo(-91.2,17.1,-90.9,17.1).lineTo(-87.6,17.2).lineTo(-84.5,17.1).curveTo(-84.4,17.1,-84.4,17.1).curveTo(-84.4,17.2,-84.3,17.2).curveTo(-84.3,17.3,-84.3,17.3).curveTo(-84.3,17.4,-84.3,17.5).curveTo(-84.3,17.6,-84.3,17.6).curveTo(-84.3,17.7,-84.3,17.8).curveTo(-84.3,17.8,-84.4,17.9).curveTo(-84.4,17.9,-84.4,18).lineTo(-85.3,18.2).curveTo(-86.1,18.2,-86.1,18.5).curveTo(-86.1,19,-85.1,21.9).lineTo(-84,25.2).curveTo(-83.1,27.5,-82.9,27.6).curveTo(-82.7,27.5,-81.6,25.1).lineTo(-80.4,22.2).curveTo(-79.2,19.3,-79.2,18.8).curveTo(-79.2,18.2,-80.1,18.2).lineTo(-81.1,18).curveTo(-81.2,17.9,-81.2,17.9).curveTo(-81.3,17.8,-81.3,17.8).curveTo(-81.3,17.7,-81.3,17.6).curveTo(-81.3,17.6,-81.3,17.5).curveTo(-81.3,17.1,-81.1,17.1).lineTo(-78,17.2).lineTo(-75.3,17.1).curveTo(-75.1,17.2,-75,17.5).curveTo(-75,17.6,-75,17.6).curveTo(-75,17.7,-75.1,17.8).curveTo(-75.1,17.8,-75.1,17.9).curveTo(-75.1,17.9,-75.2,18).lineTo(-75.8,18.1).curveTo(-76.6,18.2,-77.3,19.1).curveTo(-77.8,19.7,-78.8,21.8).lineTo(-80.8,25.8).curveTo(-84.1,32.8,-86.2,37.5).curveTo(-87,39.2,-88.5,39.1).curveTo(-89.2,39.1,-89.7,38.8).closePath().moveTo(66.4,31.6).lineTo(64.2,26.3).lineTo(62.1,21.5).curveTo(59.1,27.7,57.7,31.6).lineTo(57.3,31.7).lineTo(56.7,31.6).lineTo(47.6,11.1).curveTo(47,9.8,46.6,9.4).curveTo(46,8.6,45,8.6).lineTo(44.1,8.5).curveTo(44.1,8.5,44.1,8.4).curveTo(44,8.4,44,8.3).curveTo(44,8.3,44,8.2).curveTo(44,8.1,44,8.1).curveTo(44,8,44,7.9).curveTo(44.1,7.9,44.1,7.8).curveTo(44.1,7.8,44.2,7.7).curveTo(44.2,7.7,44.3,7.7).lineTo(47.9,7.7).lineTo(51.9,7.7).curveTo(51.9,7.7,52,7.7).curveTo(52,7.8,52.1,7.8).curveTo(52.1,7.9,52.1,7.9).curveTo(52.1,8,52.1,8.1).curveTo(52.1,8.1,52.1,8.2).curveTo(52.1,8.2,52.1,8.3).curveTo(52.1,8.3,52.1,8.4).curveTo(52.1,8.5,52,8.5).lineTo(51.2,8.6).curveTo(50,8.7,50,9.2).curveTo(50,9.8,51.8,13.9).lineTo(57.9,27.1).lineTo(60.6,21.4).curveTo(61.2,20.1,61.2,20).curveTo(61.2,19.7,60.9,19).lineTo(57.1,10.5).curveTo(56.6,9.6,56.2,9.2).curveTo(55.7,8.7,54.8,8.6).lineTo(54,8.5).curveTo(53.9,8.5,53.9,8.4).curveTo(53.8,8.3,53.8,8.3).curveTo(53.8,8.2,53.8,8.2).curveTo(53.8,8.1,53.8,8.1).curveTo(53.8,8,53.8,7.9).curveTo(53.8,7.9,53.9,7.8).curveTo(53.9,7.8,53.9,7.7).curveTo(54,7.7,54,7.7).lineTo(57.8,7.7).lineTo(61.7,7.7).curveTo(61.7,7.7,61.8,7.7).curveTo(61.8,7.8,61.9,7.8).curveTo(61.9,7.9,61.9,7.9).curveTo(61.9,8,61.9,8.1).curveTo(61.9,8.1,61.9,8.2).curveTo(61.9,8.2,61.9,8.3).curveTo(61.9,8.3,61.8,8.4).curveTo(61.8,8.5,61.8,8.5).lineTo(60.8,8.6).curveTo(59.8,8.6,59.7,9.1).curveTo(59.6,9.4,60.1,10.5).curveTo(61.1,13.1,62.8,16.6).lineTo(64.9,12.1).curveTo(65.8,9.9,65.8,9.2).curveTo(65.7,8.7,64.8,8.6).lineTo(63.8,8.5).lineTo(63.6,8).curveTo(63.7,7.9,63.7,7.9).curveTo(63.7,7.8,63.7,7.8).curveTo(63.8,7.8,63.8,7.7).curveTo(63.8,7.7,63.9,7.7).lineTo(67.2,7.7).lineTo(70.5,7.7).curveTo(70.6,7.7,70.6,7.7).curveTo(70.7,7.8,70.7,7.8).curveTo(70.7,7.9,70.8,7.9).curveTo(70.8,8,70.8,8.1).lineTo(70.7,8.5).lineTo(69.6,8.6).curveTo(68.7,8.7,67.9,9.6).lineTo(66.7,11.8).curveTo(65.6,13.6,63.9,17.4).lineTo(63.7,18.2).lineTo(63.9,19.1).lineTo(67.5,27.1).lineTo(70.7,19.7).lineTo(73.5,12.7).curveTo(74.6,9.7,74.6,9.4).curveTo(74.6,8.7,73.4,8.6).lineTo(72.4,8.5).curveTo(72.2,8.3,72.2,8.1).curveTo(72.2,8,72.2,7.9).curveTo(72.2,7.9,72.2,7.8).curveTo(72.3,7.8,72.3,7.7).curveTo(72.4,7.7,72.4,7.7).lineTo(75.8,7.7).lineTo(75.9,7.7).lineTo(76.1,7.7).curveTo(77.7,7.7,78.8,7.1).curveTo(79.5,6.7,80.6,5.8).lineTo(80.9,5.8).lineTo(81,6).lineTo(80.9,10.4).lineTo(80.9,17.9).curveTo(80.9,18.4,81,18.5).curveTo(83.4,16.6,85.8,16.6).curveTo(88.1,16.7,89.3,18.1).curveTo(90.3,19.1,90.3,21.2).lineTo(90.3,27.1).curveTo(90.3,29,90.5,29.6).curveTo(90.7,30.1,91.7,30.2).lineTo(92.6,30.3).curveTo(92.7,30.4,92.7,30.4).curveTo(92.7,30.5,92.7,30.5).curveTo(92.8,30.6,92.8,30.6).curveTo(92.7,30.7,92.7,30.8).curveTo(92.7,30.8,92.7,30.9).curveTo(92.7,31,92.7,31).curveTo(92.7,31.1,92.6,31.1).curveTo(92.6,31.1,92.6,31.1).lineTo(89,31).lineTo(85.7,31.1).curveTo(85.7,31.1,85.6,31.1).curveTo(85.6,31.1,85.6,31).curveTo(85.5,31,85.5,30.9).curveTo(85.5,30.8,85.5,30.8).curveTo(85.5,30.7,85.5,30.6).curveTo(85.5,30.6,85.5,30.5).curveTo(85.6,30.5,85.6,30.4).curveTo(85.6,30.4,85.7,30.3).lineTo(86.4,30.2).curveTo(87.3,30.1,87.5,29.6).curveTo(87.7,29,87.7,27.1).lineTo(87.7,22).curveTo(87.7,20.3,86.9,19.3).curveTo(86,18.3,84.3,18.3).curveTo(82.7,18.3,81.6,19.2).curveTo(81.1,19.6,81,20).curveTo(80.9,20.2,80.9,21.2).lineTo(80.9,27.1).curveTo(80.9,29,81,29.6).curveTo(81.2,30.1,82.2,30.2).lineTo(82.9,30.3).curveTo(83,30.4,83,30.4).curveTo(83,30.4,83.1,30.5).curveTo(83.1,30.5,83.1,30.6).curveTo(83.1,30.7,83.1,30.8).curveTo(83.1,30.8,83,30.9).curveTo(83,31,83,31).curveTo(83,31.1,82.9,31.1).curveTo(82.9,31.1,82.8,31.1).lineTo(79.5,31).lineTo(76.1,31.1).curveTo(76,31.1,76,31.1).curveTo(75.9,31.1,75.9,31).curveTo(75.9,31,75.9,30.9).curveTo(75.9,30.8,75.9,30.8).curveTo(75.9,30.7,75.9,30.6).curveTo(75.9,30.6,75.9,30.5).curveTo(75.9,30.5,75.9,30.4).curveTo(76,30.4,76,30.3).lineTo(76.9,30.2).curveTo(77.9,30.1,78,29.6).curveTo(78.2,29.1,78.2,27.1).lineTo(78.2,11.2).curveTo(78.2,9.5,78.1,9.1).curveTo(78.1,9,78,9).curveTo(78,8.9,78,8.9).curveTo(77.9,8.8,77.8,8.8).curveTo(77.8,8.8,77.7,8.8).curveTo(77,9.1,76.5,9.9).curveTo(76.1,10.6,74.3,14.7).lineTo(71.7,20.7).curveTo(69.3,26.2,67.3,31.6).lineTo(66.9,31.7).lineTo(66.4,31.6).closePath().moveTo(-39.8,30.3).curveTo(-40.1,29.8,-40.4,28.1).curveTo(-40.7,26.7,-40.8,25.4).lineTo(-40.3,25.2).curveTo(-40.2,25.2,-40.2,25.2).curveTo(-40.1,25.2,-40.1,25.2).curveTo(-40,25.2,-40,25.2).curveTo(-40,25.3,-39.9,25.3).curveTo(-38.4,30.6,-33.8,30.6).curveTo(-31.7,30.6,-30.5,29.3).curveTo(-29.4,28.1,-29.4,26.5).curveTo(-29.4,25.1,-29.9,24.1).curveTo(-30.6,22.7,-32.3,21.5).lineTo(-35.7,19.3).curveTo(-39.4,16.9,-39.4,13.3).curveTo(-39.4,10.7,-37.6,9.1).curveTo(-35.6,7.2,-32.2,7.3).curveTo(-30.7,7.2,-29,7.7).curveTo(-28.2,7.9,-27.7,7.9).curveTo(-27.5,8.5,-27.3,9.8).curveTo(-27.1,11.1,-27.1,12.2).curveTo(-27.1,12.2,-27.2,12.3).curveTo(-27.2,12.3,-27.3,12.3).curveTo(-27.3,12.4,-27.4,12.4).curveTo(-27.5,12.4,-27.6,12.4).curveTo(-27.7,12.4,-27.7,12.4).curveTo(-27.8,12.4,-27.9,12.4).curveTo(-27.9,12.4,-28,12.3).curveTo(-28,12.3,-28,12.2).curveTo(-28.5,10.6,-29.3,9.6).curveTo(-30.6,8.3,-32.8,8.3).curveTo(-35.1,8.3,-36.2,9.6).curveTo(-37,10.7,-37,12.2).curveTo(-37,14.7,-34,16.6).lineTo(-31.2,18.3).curveTo(-26.8,21.1,-26.8,25.1).curveTo(-26.8,28.1,-28.8,29.9).curveTo(-30.9,31.6,-34.3,31.7).curveTo(-37.5,31.6,-39.8,30.3).closePath().moveTo(115.4,30.9).curveTo(114.1,30.3,113.3,29.2).curveTo(111.8,27.4,111.8,24.6).curveTo(111.8,21.4,113.7,19.1).curveTo(115.8,16.6,118.9,16.6).curveTo(121.1,16.7,122.5,18).curveTo(123.9,19.2,123.9,20.9).lineTo(123.8,21.8).curveTo(123.6,22.1,121.7,22).lineTo(115.1,22).curveTo(114.5,22,114.3,22.1).curveTo(114.2,22.3,114.2,23).curveTo(114.2,25.8,115.7,27.6).curveTo(117.3,29.6,120,29.6).curveTo(121,29.5,121.7,29.2).curveTo(122.5,28.8,123.3,27.9).curveTo(123.4,27.8,123.4,27.8).curveTo(123.5,27.8,123.5,27.9).curveTo(123.6,27.9,123.6,27.9).curveTo(123.7,27.9,123.7,28).curveTo(123.8,28,123.8,28).curveTo(123.8,28,123.9,28.1).curveTo(123.9,28.1,123.9,28.2).curveTo(123.9,28.2,123.9,28.3).curveTo(123.1,30,121.4,30.8).curveTo(120,31.6,118.4,31.6).curveTo(116.7,31.6,115.4,30.9).closePath().moveTo(115.8,18.8).curveTo(114.6,19.9,114.6,20.8).curveTo(114.6,20.8,114.6,20.9).curveTo(114.6,20.9,114.6,20.9).curveTo(114.7,20.9,114.7,20.9).curveTo(114.8,21,114.8,21).lineTo(117.3,21).curveTo(120.5,20.9,121,20.6).curveTo(121.2,20.5,121.2,20).curveTo(121.2,19.1,120.6,18.4).curveTo(119.9,17.8,118.5,17.7).curveTo(117,17.7,115.8,18.8).closePath().moveTo(104.4,30.5).curveTo(103.7,29.5,103.7,27.8).lineTo(103.7,19.7).lineTo(103.7,18.8).curveTo(103.5,18.7,103,18.7).lineTo(102,18.7).lineTo(101.8,18.3).curveTo(101.8,18.3,101.8,18.2).curveTo(101.8,18.2,101.8,18.1).curveTo(101.8,18.1,101.8,18).curveTo(101.8,17.9,101.9,17.9).curveTo(103.4,17.5,104.1,16.8).curveTo(105,16.1,105.6,14.7).curveTo(106.2,14.6,106.4,14.9).lineTo(106.4,16.5).lineTo(106.4,17.1).curveTo(106.5,17.2,107,17.2).lineTo(110.9,17.2).curveTo(111.2,17.5,111.2,18).curveTo(111.2,18.5,110.9,18.7).lineTo(107,18.7).curveTo(106.5,18.7,106.4,18.8).lineTo(106.4,19.4).lineTo(106.4,26.1).curveTo(106.4,28,106.7,28.9).curveTo(107.3,30.1,108.9,30).curveTo(109.4,30,109.8,29.9).curveTo(110.2,29.8,110.7,29.3).curveTo(110.8,29.3,110.8,29.4).curveTo(110.9,29.4,110.9,29.4).curveTo(110.9,29.4,111,29.5).curveTo(111,29.5,111,29.6).curveTo(111.1,29.6,111.1,29.7).curveTo(111.1,29.7,111.1,29.8).curveTo(111.1,29.8,111.1,29.9).curveTo(111.1,29.9,111.1,30).curveTo(110.5,30.7,109.7,31).curveTo(108.6,31.6,107.4,31.6).curveTo(105.3,31.6,104.4,30.5).closePath().moveTo(18.2,30.5).curveTo(17.4,29.5,17.4,27.8).lineTo(17.4,19.7).curveTo(17.4,19,17.3,18.8).curveTo(17.2,18.7,16.7,18.7).lineTo(15.8,18.7).curveTo(15.7,18.7,15.7,18.6).curveTo(15.6,18.6,15.6,18.5).curveTo(15.6,18.5,15.6,18.4).curveTo(15.6,18.4,15.6,18.3).curveTo(15.6,18.3,15.6,18.2).curveTo(15.6,18.2,15.6,18.1).curveTo(15.6,18.1,15.6,18).curveTo(15.6,17.9,15.6,17.9).curveTo(17.1,17.5,17.9,16.8).curveTo(18.7,16.1,19.4,14.7).curveTo(19.9,14.6,20.1,14.9).lineTo(20.1,16.5).curveTo(20.1,17,20.2,17.1).curveTo(20.3,17.2,20.7,17.2).lineTo(24.6,17.2).curveTo(24.9,17.5,24.9,18).curveTo(24.9,18.5,24.7,18.7).lineTo(20.7,18.7).lineTo(20.1,18.8).lineTo(20.1,19.4).lineTo(20.1,26.1).curveTo(20.1,28,20.5,28.9).curveTo(21,30.1,22.6,30).curveTo(23.1,30,23.6,29.9).lineTo(24.5,29.3).curveTo(24.5,29.3,24.6,29.4).curveTo(24.6,29.4,24.7,29.4).curveTo(24.7,29.4,24.8,29.5).curveTo(24.8,29.5,24.8,29.6).lineTo(24.8,30).curveTo(23.4,31.6,21.2,31.6).curveTo(19,31.6,18.2,30.5).closePath().moveTo(7.5,30.5).curveTo(6.8,29.5,6.8,27.8).lineTo(6.8,19.7).lineTo(6.7,18.8).curveTo(6.6,18.7,6,18.7).lineTo(5.1,18.7).curveTo(5,18.7,5,18.6).curveTo(5,18.6,5,18.5).curveTo(4.9,18.5,4.9,18.4).curveTo(4.9,18.4,4.9,18.3).curveTo(4.9,18.3,4.9,18.2).curveTo(4.9,18.2,4.9,18.1).curveTo(4.9,18.1,4.9,18).curveTo(4.9,17.9,5,17.9).curveTo(6.5,17.5,7.2,16.8).curveTo(8,16.1,8.7,14.7).curveTo(8.7,14.7,8.8,14.7).curveTo(8.8,14.7,8.9,14.7).curveTo(8.9,14.7,9,14.7).curveTo(9.1,14.7,9.1,14.7).curveTo(9.2,14.7,9.2,14.8).curveTo(9.3,14.8,9.3,14.8).curveTo(9.4,14.8,9.4,14.8).curveTo(9.4,14.9,9.5,14.9).lineTo(9.5,16.5).lineTo(9.5,17.1).curveTo(9.6,17.2,10.1,17.2).lineTo(14,17.2).curveTo(14.3,17.5,14.3,18).curveTo(14.3,18.5,14,18.7).lineTo(10.1,18.7).curveTo(9.6,18.7,9.5,18.8).curveTo(9.4,18.9,9.4,19.4).lineTo(9.4,26.1).curveTo(9.4,28,9.8,28.9).curveTo(10.4,30.1,12,30).curveTo(12.5,30,12.9,29.9).lineTo(13.8,29.3).curveTo(13.9,29.3,13.9,29.4).curveTo(14,29.4,14,29.4).curveTo(14,29.4,14.1,29.5).curveTo(14.1,29.5,14.1,29.6).curveTo(14.2,29.6,14.2,29.7).curveTo(14.2,29.7,14.2,29.8).curveTo(14.2,29.8,14.2,29.9).curveTo(14.2,29.9,14.2,30).curveTo(12.8,31.6,10.5,31.6).curveTo(8.4,31.6,7.5,30.5).closePath().moveTo(-9.3,29.6).curveTo(-11.4,27.5,-11.4,24.3).curveTo(-11.4,21,-9.1,18.8).curveTo(-7,16.7,-3.9,16.6).curveTo(-0.8,16.6,1.2,18.7).curveTo(3.3,20.8,3.3,23.9).curveTo(3.3,27.4,1.2,29.4).curveTo(-0.8,31.6,-4.1,31.6).curveTo(-7.2,31.6,-9.3,29.6).closePath().moveTo(-7.2,19.3).curveTo(-8.3,20.9,-8.3,23.8).curveTo(-8.3,26.5,-7.2,28.3).curveTo(-5.9,30.5,-3.7,30.5).curveTo(-1.6,30.5,-0.6,28.5).curveTo(0.3,26.9,0.3,24.5).curveTo(0.3,21.8,-0.7,20).curveTo(-1.9,17.8,-4.2,17.7).curveTo(-6,17.7,-7.2,19.3).closePath().moveTo(-22.5,29.8).curveTo(-24.6,27.8,-24.6,24.5).curveTo(-24.6,21.4,-22.5,19.1).curveTo(-20.1,16.6,-16,16.6).curveTo(-14.2,16.7,-12.9,17.3).curveTo(-12.3,17.7,-12.3,18.7).curveTo(-12.3,19.1,-12.6,19.6).curveTo(-12.8,20,-13.1,20).curveTo(-13.4,20,-13.6,19.8).curveTo(-14.2,19,-15.1,18.4).curveTo(-16.1,17.9,-17.1,17.9).curveTo(-19.1,17.9,-20.5,19.3).curveTo(-22,20.9,-22,23.6).curveTo(-22,25.9,-20.5,27.6).curveTo(-18.9,29.6,-16.3,29.6).curveTo(-14.9,29.5,-13.9,29).curveTo(-13.1,28.5,-12.4,27.4).lineTo(-12,27.5).curveTo(-11.8,27.7,-11.8,28).curveTo(-12.6,29.8,-14.4,30.8).curveTo(-15.9,31.6,-17.7,31.6).curveTo(-20.6,31.6,-22.5,29.8).closePath().moveTo(-66.2,29.6).curveTo(-68.3,27.5,-68.3,24.3).curveTo(-68.3,21,-66.1,18.8).curveTo(-63.9,16.7,-60.8,16.6).curveTo(-57.7,16.6,-55.7,18.7).curveTo(-53.6,20.8,-53.6,23.9).curveTo(-53.6,27.4,-55.7,29.4).curveTo(-57.7,31.6,-61,31.6).curveTo(-64.2,31.6,-66.2,29.6).closePath().moveTo(-64.1,19.3).curveTo(-65.2,20.9,-65.2,23.8).curveTo(-65.2,26.5,-64.1,28.3).curveTo(-62.8,30.5,-60.7,30.5).curveTo(-58.6,30.5,-57.5,28.5).curveTo(-56.7,26.9,-56.7,24.5).curveTo(-56.7,21.8,-57.7,20).curveTo(-58.9,17.8,-61.2,17.7).curveTo(-63,17.7,-64.1,19.3).closePath().moveTo(-95.3,30.5).curveTo(-95.7,30,-95.9,30).lineTo(-96.4,30.2).lineTo(-97.3,30.7).lineTo(-98.5,31.3).curveTo(-99.1,31.6,-99.8,31.6).curveTo(-101.4,31.6,-102.3,30.8).curveTo(-103.3,29.8,-103.3,28.3).curveTo(-103.3,27.2,-102.7,26.6).curveTo(-102.1,25.9,-100.4,25.3).lineTo(-96.2,23.8).curveTo(-95.8,23.7,-95.7,23.4).lineTo(-95.7,22.7).lineTo(-95.6,21.1).curveTo(-95.5,19.9,-96,19.1).curveTo(-96.7,18.1,-98.2,18.1).curveTo(-99,18.1,-99.6,18.4).curveTo(-100.4,18.9,-100.4,19.7).curveTo(-100.5,20.6,-100.8,20.9).curveTo(-101.6,21.5,-102.8,21.5).curveTo(-103.3,21.5,-103.3,21).curveTo(-103.3,19.6,-101,18.2).curveTo(-98.7,16.7,-96.7,16.6).curveTo(-94.8,16.7,-93.9,17.7).curveTo(-93,18.8,-93.1,20.8).lineTo(-93.3,26.9).curveTo(-93.4,30,-91.6,30).curveTo(-91.2,30.1,-90.7,29.8).lineTo(-90.3,29.6).curveTo(-90.1,29.6,-90.1,30).curveTo(-90.1,30.3,-90.9,30.9).curveTo(-91.9,31.6,-93,31.6).curveTo(-94.5,31.6,-95.3,30.5).closePath().moveTo(-97.5,25.3).curveTo(-99.3,25.9,-99.9,26.3).curveTo(-100.6,26.9,-100.6,27.9).curveTo(-100.6,28.5,-100.2,29.2).curveTo(-99.6,29.9,-98.4,30).curveTo(-97.9,29.9,-97.2,29.7).lineTo(-96.3,29.1).curveTo(-96,28.9,-95.9,28.3).lineTo(-95.8,27.4).lineTo(-95.7,25.4).curveTo(-95.7,25,-96.1,24.9).curveTo(-96.6,24.9,-97.5,25.3).closePath().moveTo(30.2,29.6).curveTo(28,27.7,28,25.1).curveTo(28,21.2,32.1,19.4).curveTo(30.7,17.9,30.7,16.4).curveTo(30.7,14.6,32,13.3).curveTo(33.2,12,35.1,12).curveTo(36.4,12.1,37.4,12.7).curveTo(38.4,13.5,38.4,14.6).curveTo(38.4,15.8,37.4,16.5).curveTo(36.7,17.2,36,17.2).curveTo(35.3,17.2,35.7,16.5).lineTo(36,16.1).curveTo(36.2,15.5,36,14.9).curveTo(35.8,14.5,35.4,14).curveTo(34.8,13.6,34.1,13.6).curveTo(33.2,13.5,32.5,14.1).curveTo(31.8,14.7,31.8,15.5).curveTo(31.8,16.4,32.4,17.1).curveTo(33.2,17.7,34.9,18.8).curveTo(37.9,20.3,39.3,21.5).curveTo(41.5,23.4,43.1,26.6).curveTo(44.2,25.2,44.2,23.3).curveTo(44.2,21.9,43.4,20.9).curveTo(43,20.3,42.2,20.2).curveTo(41.1,20.1,40.4,20.8).curveTo(40.2,20.9,39.9,20.9).curveTo(39.6,20.8,39.8,20).curveTo(39.8,19.1,40.7,18.5).curveTo(41.6,17.9,42.8,17.9).curveTo(43.4,17.9,44.6,18.2).lineTo(46,18.4).curveTo(46.6,18.4,46.8,18.1).lineTo(47,17.9).curveTo(47.3,17.9,47.4,18.2).curveTo(47.4,19.1,46.8,19.7).curveTo(46.3,20.3,45,20.7).curveTo(45.5,21.7,45.5,22.9).curveTo(45.5,25.4,43.6,27.5).curveTo(44.4,29,45.2,29.6).curveTo(46.1,30.2,47.4,30.2).lineTo(48.3,30.1).lineTo(48.9,30).curveTo(49,30,49,30).curveTo(49.1,30,49.1,30).curveTo(49.1,30,49.1,30.1).curveTo(49.1,30.1,49.1,30.2).curveTo(49.1,30.7,48.2,31).curveTo(47.2,31.4,45.8,31.4).curveTo(44.4,31.3,43.5,30.9).curveTo(42.6,30.6,41.4,29.6).curveTo(39.7,30.6,38.4,31).curveTo(37.1,31.4,35.6,31.4).curveTo(32.4,31.4,30.2,29.6).closePath().moveTo(30.8,23).curveTo(30.8,25.7,32.7,27.8).curveTo(34.7,29.8,37.2,29.8).curveTo(38.1,29.8,38.9,29.6).lineTo(40.8,28.9).curveTo(39.9,27.9,39.2,26.8).lineTo(38.5,25.7).curveTo(37.2,23.8,35.8,22.6).curveTo(35,21.7,33.6,20.7).lineTo(32.9,20.1).curveTo(30.8,20.5,30.8,23).closePath().moveTo(97.2,31).lineTo(93.9,31.1).curveTo(93.8,31.1,93.8,31.1).curveTo(93.8,31.1,93.7,31).curveTo(93.7,31,93.7,30.9).curveTo(93.6,30.8,93.6,30.8).curveTo(93.6,30.7,93.6,30.6).curveTo(93.6,30.6,93.7,30.5).curveTo(93.7,30.5,93.7,30.4).curveTo(93.8,30.4,93.8,30.3).lineTo(94.5,30.2).curveTo(95.5,30.1,95.7,29.6).curveTo(95.9,29.1,95.9,27.1).lineTo(95.9,21).curveTo(95.9,19.9,95.7,19.6).curveTo(95.6,19.3,94.9,18.8).lineTo(94.6,18.5).curveTo(94.6,18.5,94.6,18.5).curveTo(94.5,18.5,94.5,18.4).curveTo(94.5,18.4,94.5,18.3).curveTo(94.5,18.3,94.5,18.2).curveTo(94.5,18.1,94.5,18.1).curveTo(94.5,18,94.6,18).curveTo(94.6,18,94.6,17.9).curveTo(94.6,17.9,94.7,17.9).lineTo(96.5,17.2).lineTo(98.3,16.2).curveTo(98.4,16.2,98.4,16.2).curveTo(98.5,16.2,98.5,16.2).curveTo(98.6,16.2,98.6,16.3).curveTo(98.6,16.3,98.6,16.4).lineTo(98.5,20.8).lineTo(98.5,27.1).curveTo(98.5,29,98.7,29.6).curveTo(98.9,30.1,99.8,30.2).lineTo(100.6,30.3).curveTo(100.7,30.4,100.7,30.4).curveTo(100.7,30.5,100.7,30.5).curveTo(100.7,30.6,100.7,30.6).curveTo(100.7,30.7,100.7,30.8).curveTo(100.7,30.8,100.7,30.9).curveTo(100.7,31,100.7,31).curveTo(100.6,31.1,100.6,31.1).curveTo(100.5,31.1,100.5,31.1).lineTo(97.2,31).closePath().moveTo(-48.5,31).lineTo(-51.7,31.1).curveTo(-51.8,31.1,-51.8,31.1).curveTo(-51.9,31.1,-51.9,31).curveTo(-51.9,31,-51.9,30.9).curveTo(-52,30.8,-52,30.8).curveTo(-52,30.7,-52,30.6).curveTo(-52,30.6,-51.9,30.5).curveTo(-51.9,30.5,-51.9,30.4).curveTo(-51.8,30.4,-51.8,30.3).lineTo(-51.1,30.2).curveTo(-50.2,30.1,-49.9,29.6).curveTo(-49.8,29,-49.8,27.1).lineTo(-49.8,21).curveTo(-49.8,19.9,-49.9,19.6).curveTo(-50.1,19.3,-50.8,18.8).lineTo(-51.1,18.5).lineTo(-51.2,18.2).lineTo(-51,17.9).curveTo(-50.5,17.7,-49.3,17.2).curveTo(-48.1,16.6,-47.5,16.2).curveTo(-47.4,16.2,-47.3,16.2).curveTo(-47.3,16.2,-47.2,16.3).curveTo(-47.2,16.3,-47.2,16.3).curveTo(-47.2,16.4,-47.2,16.4).lineTo(-47.2,18.5).curveTo(-47.2,18.6,-47.2,18.6).curveTo(-47.2,18.7,-47.1,18.7).curveTo(-47.1,18.7,-47.1,18.7).curveTo(-47.1,18.8,-47.1,18.8).lineTo(-45.2,17.4).curveTo(-44.1,16.6,-43.2,16.6).curveTo(-42.6,16.6,-42.1,17.1).curveTo(-41.6,17.5,-41.6,18.1).curveTo(-41.6,18.9,-42.1,19.3).curveTo(-42.6,19.7,-43.1,19.7).curveTo(-43.5,19.7,-43.9,19.4).curveTo(-44.7,18.9,-45.4,18.9).curveTo(-46.2,18.8,-46.8,19.6).curveTo(-47.2,20.2,-47.2,22.4).lineTo(-47.2,27.1).curveTo(-47.2,29.1,-46.9,29.6).curveTo(-46.8,30.1,-45.7,30.2).lineTo(-44.5,30.3).curveTo(-44.4,30.4,-44.4,30.4).curveTo(-44.4,30.5,-44.3,30.5).curveTo(-44.3,30.6,-44.3,30.6).curveTo(-44.3,30.7,-44.4,30.8).curveTo(-44.4,30.8,-44.4,30.9).curveTo(-44.4,31,-44.4,31).curveTo(-44.4,31.1,-44.5,31.1).curveTo(-44.5,31.1,-44.5,31.1).lineTo(-48.5,31).closePath().moveTo(-73,31).lineTo(-76.3,31.1).curveTo(-76.4,31.1,-76.4,31.1).curveTo(-76.4,31.1,-76.5,31).curveTo(-76.5,31,-76.5,30.9).curveTo(-76.5,30.8,-76.5,30.8).curveTo(-76.5,30.7,-76.5,30.6).curveTo(-76.5,30.6,-76.5,30.5).curveTo(-76.5,30.5,-76.5,30.4).curveTo(-76.4,30.4,-76.4,30.3).lineTo(-75.6,30.2).curveTo(-74.7,30.1,-74.4,29.6).curveTo(-74.2,29.1,-74.2,27.1).lineTo(-74.2,11.2).curveTo(-74.2,9.5,-74.4,9.2).curveTo(-74.6,8.7,-75.3,8.3).lineTo(-75.7,8.1).lineTo(-75.8,7.7).curveTo(-75.8,7.6,-75.8,7.6).curveTo(-75.8,7.5,-75.8,7.5).curveTo(-75.7,7.4,-75.7,7.4).curveTo(-75.7,7.4,-75.7,7.4).curveTo(-73,6.5,-71.9,5.8).curveTo(-71.8,5.8,-71.8,5.9).curveTo(-71.7,5.9,-71.7,5.9).curveTo(-71.6,5.9,-71.6,6).curveTo(-71.6,6,-71.5,6).curveTo(-71.7,8.1,-71.7,10.4).lineTo(-71.7,27.1).curveTo(-71.7,29,-71.4,29.6).curveTo(-71.2,30.1,-70.3,30.2).lineTo(-69.4,30.3).curveTo(-69.4,30.4,-69.4,30.4).curveTo(-69.3,30.5,-69.3,30.5).curveTo(-69.3,30.6,-69.3,30.6).curveTo(-69.3,30.7,-69.3,30.8).curveTo(-69.3,30.8,-69.3,30.9).curveTo(-69.3,31,-69.4,31).curveTo(-69.4,31.1,-69.4,31.1).curveTo(-69.4,31.1,-69.5,31.1).lineTo(-73,31).closePath().moveTo(-119.3,31).lineTo(-123.3,31.1).curveTo(-123.4,31.1,-123.4,31.1).curveTo(-123.4,31.1,-123.5,31).curveTo(-123.5,31,-123.5,30.9).curveTo(-123.5,30.8,-123.6,30.8).curveTo(-123.6,30.7,-123.6,30.6).curveTo(-123.5,30.6,-123.5,30.5).curveTo(-123.5,30.5,-123.5,30.4).curveTo(-123.4,30.4,-123.4,30.3).lineTo(-122.8,30.2).curveTo(-121.4,30,-121.1,29.2).curveTo(-120.9,28.6,-120.9,25.7).lineTo(-120.9,12.4).curveTo(-120.9,10.3,-121.1,9.8).curveTo(-121.4,9.1,-122.6,9).lineTo(-123.7,8.9).curveTo(-123.9,8.6,-123.9,8.4).curveTo(-123.9,8.3,-123.9,8.2).curveTo(-123.9,8.2,-123.9,8.1).curveTo(-123.8,8.1,-123.8,8).curveTo(-123.7,8,-123.7,8).curveTo(-120.8,7.7,-116.1,7.7).curveTo(-112,7.7,-110.1,8.6).curveTo(-107.5,10,-107.5,13.1).curveTo(-107.5,14.8,-108.4,16.1).curveTo(-109.3,17.2,-111.1,17.9).curveTo(-111.1,18.3,-110.4,18.4).curveTo(-108.6,18.7,-107.3,20).curveTo(-105.6,21.7,-105.6,24.4).curveTo(-105.6,27.5,-108,29.3).curveTo(-110.4,31.1,-115,31.1).lineTo(-119.3,31).closePath().moveTo(-117.6,19.3).curveTo(-117.9,19.5,-117.9,20).lineTo(-117.9,25.3).curveTo(-117.9,28.2,-117.2,29.1).curveTo(-116.4,30.1,-114.4,30.1).curveTo(-111.9,30.1,-110.5,29).curveTo(-108.9,27.7,-108.9,25.2).curveTo(-108.9,22.7,-110.3,21.1).curveTo(-112,19.1,-115.9,19.1).curveTo(-117.3,19.1,-117.6,19.3).closePath().moveTo(-117.4,9).curveTo(-117.9,9.1,-117.9,9.9).lineTo(-117.9,17.1).curveTo(-117.9,17.8,-117.7,18).curveTo(-117.4,18.1,-116.1,18.1).curveTo(-113.3,17.9,-112,17).curveTo(-110.6,16,-110.6,13.6).curveTo(-110.6,11.1,-112.2,9.9).curveTo(-113.5,8.8,-115.8,8.8).curveTo(-117,8.8,-117.4,9).closePath().moveTo(95.6,13.4).curveTo(95.1,12.8,95.1,12.1).curveTo(95.1,11.3,95.7,10.7).curveTo(96.2,10.2,97.1,10.1).curveTo(97.8,10.1,98.3,10.8).curveTo(98.8,11.2,98.8,12).curveTo(98.8,13,98.3,13.4).curveTo(97.8,13.8,96.9,13.8).curveTo(96.2,13.8,95.6,13.4).closePath().moveTo(-9.6,2).lineTo(-9.6,-15.3).lineTo(-0.4,-24.5).lineTo(-0.4,2).closePath().moveTo(1.1,-3.2).curveTo(0.8,-3.6,0.8,-4.1).curveTo(0.8,-4.5,1.1,-4.9).curveTo(1.4,-5.2,1.9,-5.2).curveTo(2.4,-5.2,2.7,-4.9).curveTo(3.1,-4.5,3.1,-4.1).curveTo(3.1,-3.6,2.7,-3.2).curveTo(2.4,-2.8,1.9,-2.8).curveTo(1.4,-2.8,1.1,-3.2).closePath().moveTo(1.2,-4.8).curveTo(1,-4.4,1,-4.1).curveTo(1,-3.6,1.2,-3.4).curveTo(1.5,-3.1,1.9,-3.1).curveTo(2.3,-3.1,2.6,-3.4).curveTo(2.9,-3.6,2.9,-4.1).curveTo(2.9,-4.4,2.6,-4.8).curveTo(2.3,-5,1.9,-5).curveTo(1.5,-5,1.2,-4.8).closePath().moveTo(2.3,-3.4).lineTo(1.9,-4).lineTo(1.7,-4).lineTo(1.7,-3.4).lineTo(1.5,-3.4).lineTo(1.5,-4.7).lineTo(2,-4.7).curveTo(2.5,-4.7,2.5,-4.3).curveTo(2.5,-4,2.1,-4).lineTo(2.5,-3.4).closePath().moveTo(1.7,-4.1).lineTo(1.9,-4.1).curveTo(2,-4.1,2.1,-4.1).curveTo(2.1,-4.1,2.2,-4.2).curveTo(2.2,-4.2,2.3,-4.2).curveTo(2.3,-4.3,2.3,-4.3).curveTo(2.3,-4.4,2.3,-4.4).curveTo(2.2,-4.5,2.2,-4.5).curveTo(2.2,-4.5,2.1,-4.5).curveTo(2.1,-4.5,2,-4.5).lineTo(1.7,-4.5).closePath().moveTo(9.9,-15.3).lineTo(0.8,-24.5).lineTo(27.2,-24.5).lineTo(27.2,-15.3).closePath().moveTo(0.8,-52.1).lineTo(9.9,-52.1).lineTo(9.9,-34.8).lineTo(0.8,-25.7).closePath().moveTo(-27,-25.7).lineTo(-27,-34.8).lineTo(-9.6,-34.8).lineTo(-0.4,-25.7).closePath();
	this.shape_2.setTransform(79.5667,299.1608,0.5537,0.5537);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-150,300).lineTo(-150,-300).lineTo(150,-300).lineTo(150,300).closePath();
	this.shape_3.setTransform(80.0011,300,0.5333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_Logo, new cjs.Rectangle(0,0,160,600), null);


// stage content:
(lib._21_BAY_030_cmp_bnr_NTXNeuro_SpineTemple_160x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(1,1,1).moveTo(-150,-300).lineTo(150,-300).lineTo(150,300).lineTo(-150,300).closePath();
	this.shape.setTransform(80.0007,300,0.5332,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(225));

	// txt_healthySpines
	this.instance = new lib.txt_healthySpines();
	this.instance.setTransform(106.15,55.95,1,1,0,0,0,103,17.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({_off:false},0).to({x:136.15,alpha:1},9,cjs.Ease.quadOut).wait(57));

	// txt_Spines
	this.instance_1 = new lib.txt_Spines();
	this.instance_1.setTransform(106.15,55.95,1,1,0,0,0,103,17.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160).to({_off:false},0).to({x:136.15,alpha:1},9,cjs.Ease.quadOut).wait(56));

	// txt_happenHere
	this.instance_2 = new lib.txt_happenHere();
	this.instance_2.setTransform(93.55,85.45,1,1,0,0,0,89.9,17.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(161).to({_off:false},0).to({x:123.55,alpha:1},9,cjs.Ease.quadOut).wait(55));

	// txt_Here
	this.instance_3 = new lib.txt_Here();
	this.instance_3.setTransform(93.55,85.45,1,1,0,0,0,89.9,17.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(162).to({_off:false},0).to({x:123.55,alpha:1},9,cjs.Ease.quadOut).wait(54));

	// ctaBtn
	this.instance_4 = new lib.ctaBtn();
	this.instance_4.setTransform(149.55,545.5,1,1,0,0,0,87.5,22.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(171).to({_off:false},0).to({alpha:1},9).wait(45));

	// BSWH_Logo
	this.instance_5 = new lib.BSWH_Logo();
	this.instance_5.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(161).to({_off:false},0).to({alpha:1},10).wait(54));

	// txt_doWhatYou
	this.instance_6 = new lib.txt_doWhatYou();
	this.instance_6.setTransform(86.65,55.6,1,1,0,0,0,87.5,17.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:122.65,alpha:1},10,cjs.Ease.quadOut).wait(137).to({x:422.65,alpha:0},9,cjs.Ease.quadIn).wait(69));

	// txt_loveAgain
	this.instance_7 = new lib.txt_loveAgain();
	this.instance_7.setTransform(80.25,85.7,1,1,0,0,0,82.4,17.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({x:116.25,alpha:1},10,cjs.Ease.quadOut).wait(137).to({x:416.25,alpha:0},9,cjs.Ease.quadIn).wait(67));

	// txt_better (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_64 = new cjs.Graphics().moveTo(35.5,9).curveTo(34.8,8.3,34.8,7.2).lineTo(34.8,7.2).curveTo(34.8,6.1,35.5,5.4).lineTo(35.5,5.4).curveTo(36.2,4.7,37.3,4.7).lineTo(37.3,4.7).curveTo(38.5,4.7,39.2,5.4).lineTo(39.2,5.4).curveTo(39.9,6.1,39.9,7.2).lineTo(39.9,7.2).curveTo(39.9,8.3,39.2,9).lineTo(39.2,9).curveTo(38.5,9.7,37.3,9.7).lineTo(37.3,9.7).curveTo(36.2,9.7,35.5,9).closePath().moveTo(15.6,9.1).curveTo(14.3,8.6,13.3,7.6).lineTo(13.3,7.6).curveTo(12.4,6.6,11.9,5.3).lineTo(11.9,5.3).curveTo(11.4,4,11.4,2.5).lineTo(11.4,2.5).curveTo(11.4,1,11.9,-0.3).lineTo(11.9,-0.3).curveTo(12.5,-1.6,13.4,-2.6).lineTo(13.4,-2.6).curveTo(14.4,-3.6,15.8,-4.1).lineTo(15.8,-4.1).curveTo(17.1,-4.7,18.6,-4.7).lineTo(18.6,-4.7).curveTo(20.2,-4.7,21.6,-4.1).lineTo(21.6,-4.1).curveTo(22.9,-3.6,23.8,-2.7).lineTo(23.8,-2.7).curveTo(24.8,-1.7,25.3,-0.4).lineTo(25.3,-0.4).curveTo(25.8,0.9,25.8,2.4).lineTo(25.8,2.4).lineTo(25.8,3.9).lineTo(15.6,3.9).curveTo(15.9,5,16.7,5.5).lineTo(16.7,5.5).curveTo(17.5,6.1,18.7,6.1).lineTo(18.7,6.1).curveTo(19.7,6.1,20.4,5.7).lineTo(20.4,5.7).curveTo(21.2,5.3,21.6,4.7).lineTo(21.6,4.7).lineTo(25.1,6.6).curveTo(24,8.1,22.5,8.9).lineTo(22.5,8.9).curveTo(21,9.7,18.7,9.7).lineTo(18.7,9.7).curveTo(17,9.7,15.6,9.1).closePath().moveTo(21.6,0.8).curveTo(21.2,-0.2,20.5,-0.6).lineTo(20.5,-0.6).curveTo(19.7,-1.1,18.7,-1.1).lineTo(18.7,-1.1).curveTo(17.6,-1.1,16.9,-0.6).lineTo(16.9,-0.6).curveTo(16.1,-0.1,15.7,0.8).lineTo(15.7,0.8).lineTo(21.6,0.8).lineTo(21.6,0.8).closePath().moveTo(6.3,9.4).curveTo(5.4,9.1,4.8,8.4).lineTo(4.8,8.4).curveTo(4.2,7.8,3.8,6.8).lineTo(3.8,6.8).curveTo(3.5,5.7,3.5,4.2).lineTo(3.5,4.2).lineTo(3.5,-0.6).lineTo(1.1,-0.6).lineTo(1.1,-4.4).lineTo(3.5,-4.4).lineTo(3.5,-7.4).lineTo(7.7,-9.7).lineTo(7.7,-4.4).lineTo(11.1,-4.4).lineTo(11.1,-0.6).lineTo(7.7,-0.6).lineTo(7.7,3.9).curveTo(7.7,5,8.1,5.3).lineTo(8.1,5.3).curveTo(8.4,5.7,9,5.7).lineTo(9,5.7).curveTo(9.6,5.7,10.1,5.2).lineTo(10.1,5.2).lineTo(12,8.4).curveTo(11.3,9,10.3,9.4).lineTo(10.3,9.4).curveTo(9.4,9.7,8.4,9.7).lineTo(8.4,9.7).curveTo(7.2,9.7,6.3,9.4).closePath().moveTo(-4.4,9.4).curveTo(-5.3,9.1,-5.9,8.4).lineTo(-5.9,8.4).curveTo(-6.6,7.8,-6.9,6.8).lineTo(-6.9,6.8).curveTo(-7.2,5.7,-7.2,4.2).lineTo(-7.2,4.2).lineTo(-7.2,-0.6).lineTo(-9.6,-0.6).lineTo(-9.6,-4.4).lineTo(-7.2,-4.4).lineTo(-7.2,-7.4).lineTo(-3,-9.7).lineTo(-3,-4.4).lineTo(0.4,-4.4).lineTo(0.4,-0.6).lineTo(-3,-0.6).lineTo(-3,3.9).curveTo(-3,5,-2.7,5.3).lineTo(-2.7,5.3).curveTo(-2.3,5.7,-1.7,5.7).lineTo(-1.7,5.7).curveTo(-1.2,5.7,-0.6,5.2).lineTo(-0.6,5.2).lineTo(1.3,8.4).curveTo(0.6,9,-0.4,9.4).lineTo(-0.4,9.4).curveTo(-1.3,9.7,-2.4,9.7).lineTo(-2.4,9.7).curveTo(-3.5,9.7,-4.4,9.4).closePath().moveTo(-20.1,9.1).curveTo(-21.5,8.6,-22.4,7.6).lineTo(-22.4,7.6).curveTo(-23.3,6.6,-23.8,5.3).lineTo(-23.8,5.3).curveTo(-24.3,4,-24.3,2.5).lineTo(-24.3,2.5).curveTo(-24.3,1,-23.8,-0.3).lineTo(-23.8,-0.3).curveTo(-23.2,-1.6,-22.3,-2.6).lineTo(-22.3,-2.6).curveTo(-21.3,-3.6,-20,-4.1).lineTo(-20,-4.1).curveTo(-18.6,-4.7,-17.1,-4.7).lineTo(-17.1,-4.7).curveTo(-15.5,-4.7,-14.2,-4.1).lineTo(-14.2,-4.1).curveTo(-12.9,-3.6,-11.9,-2.7).lineTo(-11.9,-2.7).curveTo(-10.9,-1.7,-10.4,-0.4).lineTo(-10.4,-0.4).curveTo(-9.9,0.9,-9.9,2.4).lineTo(-9.9,2.4).lineTo(-9.9,3.9).lineTo(-20.2,3.9).curveTo(-19.8,5,-19,5.5).lineTo(-19,5.5).curveTo(-18.2,6.1,-17,6.1).lineTo(-17,6.1).curveTo(-16,6.1,-15.3,5.7).lineTo(-15.3,5.7).curveTo(-14.6,5.3,-14.1,4.7).lineTo(-14.1,4.7).lineTo(-10.7,6.6).curveTo(-11.8,8.1,-13.3,8.9).lineTo(-13.3,8.9).curveTo(-14.7,9.7,-17.1,9.7).lineTo(-17.1,9.7).curveTo(-18.7,9.7,-20.1,9.1).closePath().moveTo(-14.1,0.8).curveTo(-14.5,-0.2,-15.2,-0.6).lineTo(-15.2,-0.6).curveTo(-16,-1.1,-17.1,-1.1).lineTo(-17.1,-1.1).curveTo(-18.1,-1.1,-18.9,-0.6).lineTo(-18.9,-0.6).curveTo(-19.7,-0.1,-20.1,0.8).lineTo(-20.1,0.8).lineTo(-14.1,0.8).lineTo(-14.1,0.8).closePath().moveTo(27,9.4).lineTo(27,-4.4).lineTo(31.2,-4.4).lineTo(31.2,-2.4).curveTo(31.7,-3.7,32.8,-4.2).lineTo(32.8,-4.2).curveTo(33.7,-4.7,35.1,-4.7).lineTo(35.1,-4.7).lineTo(36.4,-4.5).lineTo(36.4,-4.5).lineTo(37.4,-4.1).lineTo(35.9,0.2).lineTo(35.1,-0.2).lineTo(35.1,-0.2).curveTo(34.6,-0.4,34,-0.4).lineTo(34,-0.4).curveTo(32.7,-0.4,32,0.3).lineTo(32,0.3).curveTo(31.2,1,31.2,2.6).lineTo(31.2,2.6).lineTo(31.2,9.4).closePath().moveTo(-39.9,9.4).lineTo(-39.9,-9.2).lineTo(-32.4,-9.2).curveTo(-29.1,-9.2,-27.3,-7.9).lineTo(-27.3,-7.9).curveTo(-25.7,-6.6,-25.7,-3.9).lineTo(-25.7,-3.9).curveTo(-25.7,-2.6,-26.1,-1.7).lineTo(-26.1,-1.7).curveTo(-26.7,-0.9,-27.6,-0.2).lineTo(-27.6,-0.2).curveTo(-26.4,0.4,-25.9,1.3).lineTo(-25.9,1.3).curveTo(-25.3,2.3,-25.3,3.8).lineTo(-25.3,3.8).curveTo(-25.3,6.7,-27.2,8.1).lineTo(-27.2,8.1).curveTo(-29.1,9.4,-32.4,9.4).lineTo(-32.4,9.4).closePath().moveTo(-35.5,5.5).lineTo(-32.4,5.5).curveTo(-31,5.5,-30.5,5.1).lineTo(-30.5,5.1).curveTo(-29.8,4.6,-29.8,3.6).lineTo(-29.8,3.6).curveTo(-29.8,2.8,-30.4,2.3).lineTo(-30.4,2.3).curveTo(-30.9,1.9,-32.4,1.9).lineTo(-32.4,1.9).lineTo(-35.5,1.9).closePath().moveTo(-35.5,-2.1).lineTo(-32.2,-2.1).curveTo(-31,-2.1,-30.6,-2.5).lineTo(-30.6,-2.5).curveTo(-30.1,-3,-30.1,-3.8).lineTo(-30.1,-3.8).curveTo(-30.1,-4.5,-30.6,-5).lineTo(-30.6,-5).curveTo(-31.1,-5.4,-32.3,-5.4).lineTo(-32.3,-5.4).lineTo(-35.5,-5.4).closePath();
	var mask_graphics_150 = new cjs.Graphics().moveTo(35.5,9).curveTo(34.8,8.3,34.8,7.2).lineTo(34.8,7.2).curveTo(34.8,6.1,35.5,5.4).lineTo(35.5,5.4).curveTo(36.2,4.7,37.3,4.7).lineTo(37.3,4.7).curveTo(38.5,4.7,39.2,5.4).lineTo(39.2,5.4).curveTo(39.9,6.1,39.9,7.2).lineTo(39.9,7.2).curveTo(39.9,8.3,39.2,9).lineTo(39.2,9).curveTo(38.5,9.7,37.3,9.7).lineTo(37.3,9.7).curveTo(36.2,9.7,35.5,9).closePath().moveTo(15.6,9.1).curveTo(14.3,8.6,13.3,7.6).lineTo(13.3,7.6).curveTo(12.4,6.6,11.9,5.3).lineTo(11.9,5.3).curveTo(11.4,4,11.4,2.5).lineTo(11.4,2.5).curveTo(11.4,1,11.9,-0.3).lineTo(11.9,-0.3).curveTo(12.5,-1.6,13.4,-2.6).lineTo(13.4,-2.6).curveTo(14.4,-3.6,15.8,-4.1).lineTo(15.8,-4.1).curveTo(17.1,-4.7,18.6,-4.7).lineTo(18.6,-4.7).curveTo(20.2,-4.7,21.6,-4.1).lineTo(21.6,-4.1).curveTo(22.9,-3.6,23.8,-2.7).lineTo(23.8,-2.7).curveTo(24.8,-1.7,25.3,-0.4).lineTo(25.3,-0.4).curveTo(25.8,0.9,25.8,2.4).lineTo(25.8,2.4).lineTo(25.8,3.9).lineTo(15.6,3.9).curveTo(15.9,5,16.7,5.5).lineTo(16.7,5.5).curveTo(17.5,6.1,18.7,6.1).lineTo(18.7,6.1).curveTo(19.7,6.1,20.4,5.7).lineTo(20.4,5.7).curveTo(21.2,5.3,21.6,4.7).lineTo(21.6,4.7).lineTo(25.1,6.6).curveTo(24,8.1,22.5,8.9).lineTo(22.5,8.9).curveTo(21,9.7,18.7,9.7).lineTo(18.7,9.7).curveTo(17,9.7,15.6,9.1).closePath().moveTo(21.6,0.8).curveTo(21.2,-0.2,20.5,-0.6).lineTo(20.5,-0.6).curveTo(19.7,-1.1,18.7,-1.1).lineTo(18.7,-1.1).curveTo(17.6,-1.1,16.9,-0.6).lineTo(16.9,-0.6).curveTo(16.1,-0.1,15.7,0.8).lineTo(15.7,0.8).lineTo(21.6,0.8).lineTo(21.6,0.8).closePath().moveTo(6.3,9.4).curveTo(5.4,9.1,4.8,8.4).lineTo(4.8,8.4).curveTo(4.2,7.8,3.8,6.8).lineTo(3.8,6.8).curveTo(3.5,5.7,3.5,4.2).lineTo(3.5,4.2).lineTo(3.5,-0.6).lineTo(1.1,-0.6).lineTo(1.1,-4.4).lineTo(3.5,-4.4).lineTo(3.5,-7.4).lineTo(7.7,-9.7).lineTo(7.7,-4.4).lineTo(11.1,-4.4).lineTo(11.1,-0.6).lineTo(7.7,-0.6).lineTo(7.7,3.9).curveTo(7.7,5,8.1,5.3).lineTo(8.1,5.3).curveTo(8.4,5.7,9,5.7).lineTo(9,5.7).curveTo(9.6,5.7,10.1,5.2).lineTo(10.1,5.2).lineTo(12,8.4).curveTo(11.3,9,10.3,9.4).lineTo(10.3,9.4).curveTo(9.4,9.7,8.4,9.7).lineTo(8.4,9.7).curveTo(7.2,9.7,6.3,9.4).closePath().moveTo(-4.4,9.4).curveTo(-5.3,9.1,-5.9,8.4).lineTo(-5.9,8.4).curveTo(-6.6,7.8,-6.9,6.8).lineTo(-6.9,6.8).curveTo(-7.2,5.7,-7.2,4.2).lineTo(-7.2,4.2).lineTo(-7.2,-0.6).lineTo(-9.6,-0.6).lineTo(-9.6,-4.4).lineTo(-7.2,-4.4).lineTo(-7.2,-7.4).lineTo(-3,-9.7).lineTo(-3,-4.4).lineTo(0.4,-4.4).lineTo(0.4,-0.6).lineTo(-3,-0.6).lineTo(-3,3.9).curveTo(-3,5,-2.7,5.3).lineTo(-2.7,5.3).curveTo(-2.3,5.7,-1.7,5.7).lineTo(-1.7,5.7).curveTo(-1.2,5.7,-0.6,5.2).lineTo(-0.6,5.2).lineTo(1.3,8.4).curveTo(0.6,9,-0.4,9.4).lineTo(-0.4,9.4).curveTo(-1.3,9.7,-2.4,9.7).lineTo(-2.4,9.7).curveTo(-3.5,9.7,-4.4,9.4).closePath().moveTo(-20.1,9.1).curveTo(-21.5,8.6,-22.4,7.6).lineTo(-22.4,7.6).curveTo(-23.3,6.6,-23.8,5.3).lineTo(-23.8,5.3).curveTo(-24.3,4,-24.3,2.5).lineTo(-24.3,2.5).curveTo(-24.3,1,-23.8,-0.3).lineTo(-23.8,-0.3).curveTo(-23.2,-1.6,-22.3,-2.6).lineTo(-22.3,-2.6).curveTo(-21.3,-3.6,-20,-4.1).lineTo(-20,-4.1).curveTo(-18.6,-4.7,-17.1,-4.7).lineTo(-17.1,-4.7).curveTo(-15.5,-4.7,-14.2,-4.1).lineTo(-14.2,-4.1).curveTo(-12.9,-3.6,-11.9,-2.7).lineTo(-11.9,-2.7).curveTo(-10.9,-1.7,-10.4,-0.4).lineTo(-10.4,-0.4).curveTo(-9.9,0.9,-9.9,2.4).lineTo(-9.9,2.4).lineTo(-9.9,3.9).lineTo(-20.2,3.9).curveTo(-19.8,5,-19,5.5).lineTo(-19,5.5).curveTo(-18.2,6.1,-17,6.1).lineTo(-17,6.1).curveTo(-16,6.1,-15.3,5.7).lineTo(-15.3,5.7).curveTo(-14.6,5.3,-14.1,4.7).lineTo(-14.1,4.7).lineTo(-10.7,6.6).curveTo(-11.8,8.1,-13.3,8.9).lineTo(-13.3,8.9).curveTo(-14.7,9.7,-17.1,9.7).lineTo(-17.1,9.7).curveTo(-18.7,9.7,-20.1,9.1).closePath().moveTo(-14.1,0.8).curveTo(-14.5,-0.2,-15.2,-0.6).lineTo(-15.2,-0.6).curveTo(-16,-1.1,-17.1,-1.1).lineTo(-17.1,-1.1).curveTo(-18.1,-1.1,-18.9,-0.6).lineTo(-18.9,-0.6).curveTo(-19.7,-0.1,-20.1,0.8).lineTo(-20.1,0.8).lineTo(-14.1,0.8).lineTo(-14.1,0.8).closePath().moveTo(27,9.4).lineTo(27,-4.4).lineTo(31.2,-4.4).lineTo(31.2,-2.4).curveTo(31.7,-3.7,32.8,-4.2).lineTo(32.8,-4.2).curveTo(33.7,-4.7,35.1,-4.7).lineTo(35.1,-4.7).lineTo(36.4,-4.5).lineTo(36.4,-4.5).lineTo(37.4,-4.1).lineTo(35.9,0.2).lineTo(35.1,-0.2).lineTo(35.1,-0.2).curveTo(34.6,-0.4,34,-0.4).lineTo(34,-0.4).curveTo(32.7,-0.4,32,0.3).lineTo(32,0.3).curveTo(31.2,1,31.2,2.6).lineTo(31.2,2.6).lineTo(31.2,9.4).closePath().moveTo(-39.9,9.4).lineTo(-39.9,-9.2).lineTo(-32.4,-9.2).curveTo(-29.1,-9.2,-27.3,-7.9).lineTo(-27.3,-7.9).curveTo(-25.7,-6.6,-25.7,-3.9).lineTo(-25.7,-3.9).curveTo(-25.7,-2.6,-26.1,-1.7).lineTo(-26.1,-1.7).curveTo(-26.7,-0.9,-27.6,-0.2).lineTo(-27.6,-0.2).curveTo(-26.4,0.4,-25.9,1.3).lineTo(-25.9,1.3).curveTo(-25.3,2.3,-25.3,3.8).lineTo(-25.3,3.8).curveTo(-25.3,6.7,-27.2,8.1).lineTo(-27.2,8.1).curveTo(-29.1,9.4,-32.4,9.4).lineTo(-32.4,9.4).closePath().moveTo(-35.5,5.5).lineTo(-32.4,5.5).curveTo(-31,5.5,-30.5,5.1).lineTo(-30.5,5.1).curveTo(-29.8,4.6,-29.8,3.6).lineTo(-29.8,3.6).curveTo(-29.8,2.8,-30.4,2.3).lineTo(-30.4,2.3).curveTo(-30.9,1.9,-32.4,1.9).lineTo(-32.4,1.9).lineTo(-35.5,1.9).closePath().moveTo(-35.5,-2.1).lineTo(-32.2,-2.1).curveTo(-31,-2.1,-30.6,-2.5).lineTo(-30.6,-2.5).curveTo(-30.1,-3,-30.1,-3.8).lineTo(-30.1,-3.8).curveTo(-30.1,-4.5,-30.6,-5).lineTo(-30.6,-5).curveTo(-31.1,-5.4,-32.3,-5.4).lineTo(-32.3,-5.4).lineTo(-35.5,-5.4).closePath();
	var mask_graphics_151 = new cjs.Graphics().moveTo(35.5,9).curveTo(34.8,8.3,34.8,7.2).lineTo(34.8,7.2).curveTo(34.8,6.1,35.5,5.4).lineTo(35.5,5.4).curveTo(36.2,4.7,37.3,4.7).lineTo(37.3,4.7).curveTo(38.5,4.7,39.2,5.4).lineTo(39.2,5.4).curveTo(39.9,6.1,39.9,7.2).lineTo(39.9,7.2).curveTo(39.9,8.3,39.2,9).lineTo(39.2,9).curveTo(38.5,9.7,37.3,9.7).lineTo(37.3,9.7).curveTo(36.2,9.7,35.5,9).closePath().moveTo(15.6,9.1).curveTo(14.3,8.6,13.3,7.6).lineTo(13.3,7.6).curveTo(12.4,6.6,11.9,5.3).lineTo(11.9,5.3).curveTo(11.4,4,11.4,2.5).lineTo(11.4,2.5).curveTo(11.4,1,11.9,-0.3).lineTo(11.9,-0.3).curveTo(12.5,-1.6,13.4,-2.6).lineTo(13.4,-2.6).curveTo(14.4,-3.6,15.8,-4.1).lineTo(15.8,-4.1).curveTo(17.1,-4.7,18.6,-4.7).lineTo(18.6,-4.7).curveTo(20.2,-4.7,21.6,-4.1).lineTo(21.6,-4.1).curveTo(22.9,-3.6,23.8,-2.7).lineTo(23.8,-2.7).curveTo(24.8,-1.7,25.3,-0.4).lineTo(25.3,-0.4).curveTo(25.8,0.9,25.8,2.4).lineTo(25.8,2.4).lineTo(25.8,3.9).lineTo(15.6,3.9).curveTo(15.9,5,16.7,5.5).lineTo(16.7,5.5).curveTo(17.5,6.1,18.7,6.1).lineTo(18.7,6.1).curveTo(19.7,6.1,20.4,5.7).lineTo(20.4,5.7).curveTo(21.2,5.3,21.6,4.7).lineTo(21.6,4.7).lineTo(25.1,6.6).curveTo(24,8.1,22.5,8.9).lineTo(22.5,8.9).curveTo(21,9.7,18.7,9.7).lineTo(18.7,9.7).curveTo(17,9.7,15.6,9.1).closePath().moveTo(21.6,0.8).curveTo(21.2,-0.2,20.5,-0.6).lineTo(20.5,-0.6).curveTo(19.7,-1.1,18.7,-1.1).lineTo(18.7,-1.1).curveTo(17.6,-1.1,16.9,-0.6).lineTo(16.9,-0.6).curveTo(16.1,-0.1,15.7,0.8).lineTo(15.7,0.8).lineTo(21.6,0.8).lineTo(21.6,0.8).closePath().moveTo(6.3,9.4).curveTo(5.4,9.1,4.8,8.4).lineTo(4.8,8.4).curveTo(4.2,7.8,3.8,6.8).lineTo(3.8,6.8).curveTo(3.5,5.7,3.5,4.2).lineTo(3.5,4.2).lineTo(3.5,-0.6).lineTo(1.1,-0.6).lineTo(1.1,-4.4).lineTo(3.5,-4.4).lineTo(3.5,-7.4).lineTo(7.7,-9.7).lineTo(7.7,-4.4).lineTo(11.1,-4.4).lineTo(11.1,-0.6).lineTo(7.7,-0.6).lineTo(7.7,3.9).curveTo(7.7,5,8.1,5.3).lineTo(8.1,5.3).curveTo(8.4,5.7,9,5.7).lineTo(9,5.7).curveTo(9.6,5.7,10.1,5.2).lineTo(10.1,5.2).lineTo(12,8.4).curveTo(11.3,9,10.3,9.4).lineTo(10.3,9.4).curveTo(9.4,9.7,8.4,9.7).lineTo(8.4,9.7).curveTo(7.2,9.7,6.3,9.4).closePath().moveTo(-4.4,9.4).curveTo(-5.3,9.1,-5.9,8.4).lineTo(-5.9,8.4).curveTo(-6.6,7.8,-6.9,6.8).lineTo(-6.9,6.8).curveTo(-7.2,5.7,-7.2,4.2).lineTo(-7.2,4.2).lineTo(-7.2,-0.6).lineTo(-9.6,-0.6).lineTo(-9.6,-4.4).lineTo(-7.2,-4.4).lineTo(-7.2,-7.4).lineTo(-3,-9.7).lineTo(-3,-4.4).lineTo(0.4,-4.4).lineTo(0.4,-0.6).lineTo(-3,-0.6).lineTo(-3,3.9).curveTo(-3,5,-2.7,5.3).lineTo(-2.7,5.3).curveTo(-2.3,5.7,-1.7,5.7).lineTo(-1.7,5.7).curveTo(-1.2,5.7,-0.6,5.2).lineTo(-0.6,5.2).lineTo(1.3,8.4).curveTo(0.6,9,-0.4,9.4).lineTo(-0.4,9.4).curveTo(-1.3,9.7,-2.4,9.7).lineTo(-2.4,9.7).curveTo(-3.5,9.7,-4.4,9.4).closePath().moveTo(-20.1,9.1).curveTo(-21.5,8.6,-22.4,7.6).lineTo(-22.4,7.6).curveTo(-23.3,6.6,-23.8,5.3).lineTo(-23.8,5.3).curveTo(-24.3,4,-24.3,2.5).lineTo(-24.3,2.5).curveTo(-24.3,1,-23.8,-0.3).lineTo(-23.8,-0.3).curveTo(-23.2,-1.6,-22.3,-2.6).lineTo(-22.3,-2.6).curveTo(-21.3,-3.6,-20,-4.1).lineTo(-20,-4.1).curveTo(-18.6,-4.7,-17.1,-4.7).lineTo(-17.1,-4.7).curveTo(-15.5,-4.7,-14.2,-4.1).lineTo(-14.2,-4.1).curveTo(-12.9,-3.6,-11.9,-2.7).lineTo(-11.9,-2.7).curveTo(-10.9,-1.7,-10.4,-0.4).lineTo(-10.4,-0.4).curveTo(-9.9,0.9,-9.9,2.4).lineTo(-9.9,2.4).lineTo(-9.9,3.9).lineTo(-20.2,3.9).curveTo(-19.8,5,-19,5.5).lineTo(-19,5.5).curveTo(-18.2,6.1,-17,6.1).lineTo(-17,6.1).curveTo(-16,6.1,-15.3,5.7).lineTo(-15.3,5.7).curveTo(-14.6,5.3,-14.1,4.7).lineTo(-14.1,4.7).lineTo(-10.7,6.6).curveTo(-11.8,8.1,-13.3,8.9).lineTo(-13.3,8.9).curveTo(-14.7,9.7,-17.1,9.7).lineTo(-17.1,9.7).curveTo(-18.7,9.7,-20.1,9.1).closePath().moveTo(-14.1,0.8).curveTo(-14.5,-0.2,-15.2,-0.6).lineTo(-15.2,-0.6).curveTo(-16,-1.1,-17.1,-1.1).lineTo(-17.1,-1.1).curveTo(-18.1,-1.1,-18.9,-0.6).lineTo(-18.9,-0.6).curveTo(-19.7,-0.1,-20.1,0.8).lineTo(-20.1,0.8).lineTo(-14.1,0.8).lineTo(-14.1,0.8).closePath().moveTo(27,9.4).lineTo(27,-4.4).lineTo(31.2,-4.4).lineTo(31.2,-2.4).curveTo(31.7,-3.7,32.8,-4.2).lineTo(32.8,-4.2).curveTo(33.7,-4.7,35.1,-4.7).lineTo(35.1,-4.7).lineTo(36.4,-4.5).lineTo(36.4,-4.5).lineTo(37.4,-4.1).lineTo(35.9,0.2).lineTo(35.1,-0.2).lineTo(35.1,-0.2).curveTo(34.6,-0.4,34,-0.4).lineTo(34,-0.4).curveTo(32.7,-0.4,32,0.3).lineTo(32,0.3).curveTo(31.2,1,31.2,2.6).lineTo(31.2,2.6).lineTo(31.2,9.4).closePath().moveTo(-39.9,9.4).lineTo(-39.9,-9.2).lineTo(-32.4,-9.2).curveTo(-29.1,-9.2,-27.3,-7.9).lineTo(-27.3,-7.9).curveTo(-25.7,-6.6,-25.7,-3.9).lineTo(-25.7,-3.9).curveTo(-25.7,-2.6,-26.1,-1.7).lineTo(-26.1,-1.7).curveTo(-26.7,-0.9,-27.6,-0.2).lineTo(-27.6,-0.2).curveTo(-26.4,0.4,-25.9,1.3).lineTo(-25.9,1.3).curveTo(-25.3,2.3,-25.3,3.8).lineTo(-25.3,3.8).curveTo(-25.3,6.7,-27.2,8.1).lineTo(-27.2,8.1).curveTo(-29.1,9.4,-32.4,9.4).lineTo(-32.4,9.4).closePath().moveTo(-35.5,5.5).lineTo(-32.4,5.5).curveTo(-31,5.5,-30.5,5.1).lineTo(-30.5,5.1).curveTo(-29.8,4.6,-29.8,3.6).lineTo(-29.8,3.6).curveTo(-29.8,2.8,-30.4,2.3).lineTo(-30.4,2.3).curveTo(-30.9,1.9,-32.4,1.9).lineTo(-32.4,1.9).lineTo(-35.5,1.9).closePath().moveTo(-35.5,-2.1).lineTo(-32.2,-2.1).curveTo(-31,-2.1,-30.6,-2.5).lineTo(-30.6,-2.5).curveTo(-30.1,-3,-30.1,-3.8).lineTo(-30.1,-3.8).curveTo(-30.1,-4.5,-30.6,-5).lineTo(-30.6,-5).curveTo(-31.1,-5.4,-32.3,-5.4).lineTo(-32.3,-5.4).lineTo(-35.5,-5.4).closePath();
	var mask_graphics_152 = new cjs.Graphics().moveTo(35.5,9).curveTo(34.8,8.3,34.8,7.2).lineTo(34.8,7.2).curveTo(34.8,6.1,35.5,5.4).lineTo(35.5,5.4).curveTo(36.2,4.7,37.3,4.7).lineTo(37.3,4.7).curveTo(38.5,4.7,39.2,5.4).lineTo(39.2,5.4).curveTo(39.9,6.1,39.9,7.2).lineTo(39.9,7.2).curveTo(39.9,8.3,39.2,9).lineTo(39.2,9).curveTo(38.5,9.7,37.3,9.7).lineTo(37.3,9.7).curveTo(36.2,9.7,35.5,9).closePath().moveTo(15.6,9.1).curveTo(14.3,8.6,13.3,7.6).lineTo(13.3,7.6).curveTo(12.4,6.6,11.9,5.3).lineTo(11.9,5.3).curveTo(11.4,4,11.4,2.5).lineTo(11.4,2.5).curveTo(11.4,1,11.9,-0.3).lineTo(11.9,-0.3).curveTo(12.5,-1.6,13.4,-2.6).lineTo(13.4,-2.6).curveTo(14.4,-3.6,15.8,-4.1).lineTo(15.8,-4.1).curveTo(17.1,-4.7,18.6,-4.7).lineTo(18.6,-4.7).curveTo(20.2,-4.7,21.6,-4.1).lineTo(21.6,-4.1).curveTo(22.9,-3.6,23.8,-2.7).lineTo(23.8,-2.7).curveTo(24.8,-1.7,25.3,-0.4).lineTo(25.3,-0.4).curveTo(25.8,0.9,25.8,2.4).lineTo(25.8,2.4).lineTo(25.8,3.9).lineTo(15.6,3.9).curveTo(15.9,5,16.7,5.5).lineTo(16.7,5.5).curveTo(17.5,6.1,18.7,6.1).lineTo(18.7,6.1).curveTo(19.7,6.1,20.4,5.7).lineTo(20.4,5.7).curveTo(21.2,5.3,21.6,4.7).lineTo(21.6,4.7).lineTo(25.1,6.6).curveTo(24,8.1,22.5,8.9).lineTo(22.5,8.9).curveTo(21,9.7,18.7,9.7).lineTo(18.7,9.7).curveTo(17,9.7,15.6,9.1).closePath().moveTo(21.6,0.8).curveTo(21.2,-0.2,20.5,-0.6).lineTo(20.5,-0.6).curveTo(19.7,-1.1,18.7,-1.1).lineTo(18.7,-1.1).curveTo(17.6,-1.1,16.9,-0.6).lineTo(16.9,-0.6).curveTo(16.1,-0.1,15.7,0.8).lineTo(15.7,0.8).lineTo(21.6,0.8).lineTo(21.6,0.8).closePath().moveTo(6.3,9.4).curveTo(5.4,9.1,4.8,8.4).lineTo(4.8,8.4).curveTo(4.2,7.8,3.8,6.8).lineTo(3.8,6.8).curveTo(3.5,5.7,3.5,4.2).lineTo(3.5,4.2).lineTo(3.5,-0.6).lineTo(1.1,-0.6).lineTo(1.1,-4.4).lineTo(3.5,-4.4).lineTo(3.5,-7.4).lineTo(7.7,-9.7).lineTo(7.7,-4.4).lineTo(11.1,-4.4).lineTo(11.1,-0.6).lineTo(7.7,-0.6).lineTo(7.7,3.9).curveTo(7.7,5,8.1,5.3).lineTo(8.1,5.3).curveTo(8.4,5.7,9,5.7).lineTo(9,5.7).curveTo(9.6,5.7,10.1,5.2).lineTo(10.1,5.2).lineTo(12,8.4).curveTo(11.3,9,10.3,9.4).lineTo(10.3,9.4).curveTo(9.4,9.7,8.4,9.7).lineTo(8.4,9.7).curveTo(7.2,9.7,6.3,9.4).closePath().moveTo(-4.4,9.4).curveTo(-5.3,9.1,-5.9,8.4).lineTo(-5.9,8.4).curveTo(-6.6,7.8,-6.9,6.8).lineTo(-6.9,6.8).curveTo(-7.2,5.7,-7.2,4.2).lineTo(-7.2,4.2).lineTo(-7.2,-0.6).lineTo(-9.6,-0.6).lineTo(-9.6,-4.4).lineTo(-7.2,-4.4).lineTo(-7.2,-7.4).lineTo(-3,-9.7).lineTo(-3,-4.4).lineTo(0.4,-4.4).lineTo(0.4,-0.6).lineTo(-3,-0.6).lineTo(-3,3.9).curveTo(-3,5,-2.7,5.3).lineTo(-2.7,5.3).curveTo(-2.3,5.7,-1.7,5.7).lineTo(-1.7,5.7).curveTo(-1.2,5.7,-0.6,5.2).lineTo(-0.6,5.2).lineTo(1.3,8.4).curveTo(0.6,9,-0.4,9.4).lineTo(-0.4,9.4).curveTo(-1.3,9.7,-2.4,9.7).lineTo(-2.4,9.7).curveTo(-3.5,9.7,-4.4,9.4).closePath().moveTo(-20.1,9.1).curveTo(-21.5,8.6,-22.4,7.6).lineTo(-22.4,7.6).curveTo(-23.3,6.6,-23.8,5.3).lineTo(-23.8,5.3).curveTo(-24.3,4,-24.3,2.5).lineTo(-24.3,2.5).curveTo(-24.3,1,-23.8,-0.3).lineTo(-23.8,-0.3).curveTo(-23.2,-1.6,-22.3,-2.6).lineTo(-22.3,-2.6).curveTo(-21.3,-3.6,-20,-4.1).lineTo(-20,-4.1).curveTo(-18.6,-4.7,-17.1,-4.7).lineTo(-17.1,-4.7).curveTo(-15.5,-4.7,-14.2,-4.1).lineTo(-14.2,-4.1).curveTo(-12.9,-3.6,-11.9,-2.7).lineTo(-11.9,-2.7).curveTo(-10.9,-1.7,-10.4,-0.4).lineTo(-10.4,-0.4).curveTo(-9.9,0.9,-9.9,2.4).lineTo(-9.9,2.4).lineTo(-9.9,3.9).lineTo(-20.2,3.9).curveTo(-19.8,5,-19,5.5).lineTo(-19,5.5).curveTo(-18.2,6.1,-17,6.1).lineTo(-17,6.1).curveTo(-16,6.1,-15.3,5.7).lineTo(-15.3,5.7).curveTo(-14.6,5.3,-14.1,4.7).lineTo(-14.1,4.7).lineTo(-10.7,6.6).curveTo(-11.8,8.1,-13.3,8.9).lineTo(-13.3,8.9).curveTo(-14.7,9.7,-17.1,9.7).lineTo(-17.1,9.7).curveTo(-18.7,9.7,-20.1,9.1).closePath().moveTo(-14.1,0.8).curveTo(-14.5,-0.2,-15.2,-0.6).lineTo(-15.2,-0.6).curveTo(-16,-1.1,-17.1,-1.1).lineTo(-17.1,-1.1).curveTo(-18.1,-1.1,-18.9,-0.6).lineTo(-18.9,-0.6).curveTo(-19.7,-0.1,-20.1,0.8).lineTo(-20.1,0.8).lineTo(-14.1,0.8).lineTo(-14.1,0.8).closePath().moveTo(27,9.4).lineTo(27,-4.4).lineTo(31.2,-4.4).lineTo(31.2,-2.4).curveTo(31.7,-3.7,32.8,-4.2).lineTo(32.8,-4.2).curveTo(33.7,-4.7,35.1,-4.7).lineTo(35.1,-4.7).lineTo(36.4,-4.5).lineTo(36.4,-4.5).lineTo(37.4,-4.1).lineTo(35.9,0.2).lineTo(35.1,-0.2).lineTo(35.1,-0.2).curveTo(34.6,-0.4,34,-0.4).lineTo(34,-0.4).curveTo(32.7,-0.4,32,0.3).lineTo(32,0.3).curveTo(31.2,1,31.2,2.6).lineTo(31.2,2.6).lineTo(31.2,9.4).closePath().moveTo(-39.9,9.4).lineTo(-39.9,-9.2).lineTo(-32.4,-9.2).curveTo(-29.1,-9.2,-27.3,-7.9).lineTo(-27.3,-7.9).curveTo(-25.7,-6.6,-25.7,-3.9).lineTo(-25.7,-3.9).curveTo(-25.7,-2.6,-26.1,-1.7).lineTo(-26.1,-1.7).curveTo(-26.7,-0.9,-27.6,-0.2).lineTo(-27.6,-0.2).curveTo(-26.4,0.4,-25.9,1.3).lineTo(-25.9,1.3).curveTo(-25.3,2.3,-25.3,3.8).lineTo(-25.3,3.8).curveTo(-25.3,6.7,-27.2,8.1).lineTo(-27.2,8.1).curveTo(-29.1,9.4,-32.4,9.4).lineTo(-32.4,9.4).closePath().moveTo(-35.5,5.5).lineTo(-32.4,5.5).curveTo(-31,5.5,-30.5,5.1).lineTo(-30.5,5.1).curveTo(-29.8,4.6,-29.8,3.6).lineTo(-29.8,3.6).curveTo(-29.8,2.8,-30.4,2.3).lineTo(-30.4,2.3).curveTo(-30.9,1.9,-32.4,1.9).lineTo(-32.4,1.9).lineTo(-35.5,1.9).closePath().moveTo(-35.5,-2.1).lineTo(-32.2,-2.1).curveTo(-31,-2.1,-30.6,-2.5).lineTo(-30.6,-2.5).curveTo(-30.1,-3,-30.1,-3.8).lineTo(-30.1,-3.8).curveTo(-30.1,-4.5,-30.6,-5).lineTo(-30.6,-5).curveTo(-31.1,-5.4,-32.3,-5.4).lineTo(-32.3,-5.4).lineTo(-35.5,-5.4).closePath();
	var mask_graphics_153 = new cjs.Graphics().moveTo(35.5,9).curveTo(34.8,8.3,34.8,7.2).lineTo(34.8,7.2).curveTo(34.8,6.1,35.5,5.4).lineTo(35.5,5.4).curveTo(36.2,4.7,37.3,4.7).lineTo(37.3,4.7).curveTo(38.5,4.7,39.2,5.4).lineTo(39.2,5.4).curveTo(39.9,6.1,39.9,7.2).lineTo(39.9,7.2).curveTo(39.9,8.3,39.2,9).lineTo(39.2,9).curveTo(38.5,9.7,37.3,9.7).lineTo(37.3,9.7).curveTo(36.2,9.7,35.5,9).closePath().moveTo(15.6,9.1).curveTo(14.3,8.6,13.3,7.6).lineTo(13.3,7.6).curveTo(12.4,6.6,11.9,5.3).lineTo(11.9,5.3).curveTo(11.4,4,11.4,2.5).lineTo(11.4,2.5).curveTo(11.4,1,11.9,-0.3).lineTo(11.9,-0.3).curveTo(12.5,-1.6,13.4,-2.6).lineTo(13.4,-2.6).curveTo(14.4,-3.6,15.8,-4.1).lineTo(15.8,-4.1).curveTo(17.1,-4.7,18.6,-4.7).lineTo(18.6,-4.7).curveTo(20.2,-4.7,21.6,-4.1).lineTo(21.6,-4.1).curveTo(22.9,-3.6,23.8,-2.7).lineTo(23.8,-2.7).curveTo(24.8,-1.7,25.3,-0.4).lineTo(25.3,-0.4).curveTo(25.8,0.9,25.8,2.4).lineTo(25.8,2.4).lineTo(25.8,3.9).lineTo(15.6,3.9).curveTo(15.9,5,16.7,5.5).lineTo(16.7,5.5).curveTo(17.5,6.1,18.7,6.1).lineTo(18.7,6.1).curveTo(19.7,6.1,20.4,5.7).lineTo(20.4,5.7).curveTo(21.2,5.3,21.6,4.7).lineTo(21.6,4.7).lineTo(25.1,6.6).curveTo(24,8.1,22.5,8.9).lineTo(22.5,8.9).curveTo(21,9.7,18.7,9.7).lineTo(18.7,9.7).curveTo(17,9.7,15.6,9.1).closePath().moveTo(21.6,0.8).curveTo(21.2,-0.2,20.5,-0.6).lineTo(20.5,-0.6).curveTo(19.7,-1.1,18.7,-1.1).lineTo(18.7,-1.1).curveTo(17.6,-1.1,16.9,-0.6).lineTo(16.9,-0.6).curveTo(16.1,-0.1,15.7,0.8).lineTo(15.7,0.8).lineTo(21.6,0.8).lineTo(21.6,0.8).closePath().moveTo(6.3,9.4).curveTo(5.4,9.1,4.8,8.4).lineTo(4.8,8.4).curveTo(4.2,7.8,3.8,6.8).lineTo(3.8,6.8).curveTo(3.5,5.7,3.5,4.2).lineTo(3.5,4.2).lineTo(3.5,-0.6).lineTo(1.1,-0.6).lineTo(1.1,-4.4).lineTo(3.5,-4.4).lineTo(3.5,-7.4).lineTo(7.7,-9.7).lineTo(7.7,-4.4).lineTo(11.1,-4.4).lineTo(11.1,-0.6).lineTo(7.7,-0.6).lineTo(7.7,3.9).curveTo(7.7,5,8.1,5.3).lineTo(8.1,5.3).curveTo(8.4,5.7,9,5.7).lineTo(9,5.7).curveTo(9.6,5.7,10.1,5.2).lineTo(10.1,5.2).lineTo(12,8.4).curveTo(11.3,9,10.3,9.4).lineTo(10.3,9.4).curveTo(9.4,9.7,8.4,9.7).lineTo(8.4,9.7).curveTo(7.2,9.7,6.3,9.4).closePath().moveTo(-4.4,9.4).curveTo(-5.3,9.1,-5.9,8.4).lineTo(-5.9,8.4).curveTo(-6.6,7.8,-6.9,6.8).lineTo(-6.9,6.8).curveTo(-7.2,5.7,-7.2,4.2).lineTo(-7.2,4.2).lineTo(-7.2,-0.6).lineTo(-9.6,-0.6).lineTo(-9.6,-4.4).lineTo(-7.2,-4.4).lineTo(-7.2,-7.4).lineTo(-3,-9.7).lineTo(-3,-4.4).lineTo(0.4,-4.4).lineTo(0.4,-0.6).lineTo(-3,-0.6).lineTo(-3,3.9).curveTo(-3,5,-2.7,5.3).lineTo(-2.7,5.3).curveTo(-2.3,5.7,-1.7,5.7).lineTo(-1.7,5.7).curveTo(-1.2,5.7,-0.6,5.2).lineTo(-0.6,5.2).lineTo(1.3,8.4).curveTo(0.6,9,-0.4,9.4).lineTo(-0.4,9.4).curveTo(-1.3,9.7,-2.4,9.7).lineTo(-2.4,9.7).curveTo(-3.5,9.7,-4.4,9.4).closePath().moveTo(-20.1,9.1).curveTo(-21.5,8.6,-22.4,7.6).lineTo(-22.4,7.6).curveTo(-23.3,6.6,-23.8,5.3).lineTo(-23.8,5.3).curveTo(-24.3,4,-24.3,2.5).lineTo(-24.3,2.5).curveTo(-24.3,1,-23.8,-0.3).lineTo(-23.8,-0.3).curveTo(-23.2,-1.6,-22.3,-2.6).lineTo(-22.3,-2.6).curveTo(-21.3,-3.6,-20,-4.1).lineTo(-20,-4.1).curveTo(-18.6,-4.7,-17.1,-4.7).lineTo(-17.1,-4.7).curveTo(-15.5,-4.7,-14.2,-4.1).lineTo(-14.2,-4.1).curveTo(-12.9,-3.6,-11.9,-2.7).lineTo(-11.9,-2.7).curveTo(-10.9,-1.7,-10.4,-0.4).lineTo(-10.4,-0.4).curveTo(-9.9,0.9,-9.9,2.4).lineTo(-9.9,2.4).lineTo(-9.9,3.9).lineTo(-20.2,3.9).curveTo(-19.8,5,-19,5.5).lineTo(-19,5.5).curveTo(-18.2,6.1,-17,6.1).lineTo(-17,6.1).curveTo(-16,6.1,-15.3,5.7).lineTo(-15.3,5.7).curveTo(-14.6,5.3,-14.1,4.7).lineTo(-14.1,4.7).lineTo(-10.7,6.6).curveTo(-11.8,8.1,-13.3,8.9).lineTo(-13.3,8.9).curveTo(-14.7,9.7,-17.1,9.7).lineTo(-17.1,9.7).curveTo(-18.7,9.7,-20.1,9.1).closePath().moveTo(-14.1,0.8).curveTo(-14.5,-0.2,-15.2,-0.6).lineTo(-15.2,-0.6).curveTo(-16,-1.1,-17.1,-1.1).lineTo(-17.1,-1.1).curveTo(-18.1,-1.1,-18.9,-0.6).lineTo(-18.9,-0.6).curveTo(-19.7,-0.1,-20.1,0.8).lineTo(-20.1,0.8).lineTo(-14.1,0.8).lineTo(-14.1,0.8).closePath().moveTo(27,9.4).lineTo(27,-4.4).lineTo(31.2,-4.4).lineTo(31.2,-2.4).curveTo(31.7,-3.7,32.8,-4.2).lineTo(32.8,-4.2).curveTo(33.7,-4.7,35.1,-4.7).lineTo(35.1,-4.7).lineTo(36.4,-4.5).lineTo(36.4,-4.5).lineTo(37.4,-4.1).lineTo(35.9,0.2).lineTo(35.1,-0.2).lineTo(35.1,-0.2).curveTo(34.6,-0.4,34,-0.4).lineTo(34,-0.4).curveTo(32.7,-0.4,32,0.3).lineTo(32,0.3).curveTo(31.2,1,31.2,2.6).lineTo(31.2,2.6).lineTo(31.2,9.4).closePath().moveTo(-39.9,9.4).lineTo(-39.9,-9.2).lineTo(-32.4,-9.2).curveTo(-29.1,-9.2,-27.3,-7.9).lineTo(-27.3,-7.9).curveTo(-25.7,-6.6,-25.7,-3.9).lineTo(-25.7,-3.9).curveTo(-25.7,-2.6,-26.1,-1.7).lineTo(-26.1,-1.7).curveTo(-26.7,-0.9,-27.6,-0.2).lineTo(-27.6,-0.2).curveTo(-26.4,0.4,-25.9,1.3).lineTo(-25.9,1.3).curveTo(-25.3,2.3,-25.3,3.8).lineTo(-25.3,3.8).curveTo(-25.3,6.7,-27.2,8.1).lineTo(-27.2,8.1).curveTo(-29.1,9.4,-32.4,9.4).lineTo(-32.4,9.4).closePath().moveTo(-35.5,5.5).lineTo(-32.4,5.5).curveTo(-31,5.5,-30.5,5.1).lineTo(-30.5,5.1).curveTo(-29.8,4.6,-29.8,3.6).lineTo(-29.8,3.6).curveTo(-29.8,2.8,-30.4,2.3).lineTo(-30.4,2.3).curveTo(-30.9,1.9,-32.4,1.9).lineTo(-32.4,1.9).lineTo(-35.5,1.9).closePath().moveTo(-35.5,-2.1).lineTo(-32.2,-2.1).curveTo(-31,-2.1,-30.6,-2.5).lineTo(-30.6,-2.5).curveTo(-30.1,-3,-30.1,-3.8).lineTo(-30.1,-3.8).curveTo(-30.1,-4.5,-30.6,-5).lineTo(-30.6,-5).curveTo(-31.1,-5.4,-32.3,-5.4).lineTo(-32.3,-5.4).lineTo(-35.5,-5.4).closePath();
	var mask_graphics_154 = new cjs.Graphics().moveTo(35.5,9).curveTo(34.8,8.3,34.8,7.2).lineTo(34.8,7.2).curveTo(34.8,6.1,35.5,5.4).lineTo(35.5,5.4).curveTo(36.2,4.7,37.3,4.7).lineTo(37.3,4.7).curveTo(38.5,4.7,39.2,5.4).lineTo(39.2,5.4).curveTo(39.9,6.1,39.9,7.2).lineTo(39.9,7.2).curveTo(39.9,8.3,39.2,9).lineTo(39.2,9).curveTo(38.5,9.7,37.3,9.7).lineTo(37.3,9.7).curveTo(36.2,9.7,35.5,9).closePath().moveTo(15.6,9.1).curveTo(14.3,8.6,13.3,7.6).lineTo(13.3,7.6).curveTo(12.4,6.6,11.9,5.3).lineTo(11.9,5.3).curveTo(11.4,4,11.4,2.5).lineTo(11.4,2.5).curveTo(11.4,1,11.9,-0.3).lineTo(11.9,-0.3).curveTo(12.5,-1.6,13.4,-2.6).lineTo(13.4,-2.6).curveTo(14.4,-3.6,15.8,-4.1).lineTo(15.8,-4.1).curveTo(17.1,-4.7,18.6,-4.7).lineTo(18.6,-4.7).curveTo(20.2,-4.7,21.6,-4.1).lineTo(21.6,-4.1).curveTo(22.9,-3.6,23.8,-2.7).lineTo(23.8,-2.7).curveTo(24.8,-1.7,25.3,-0.4).lineTo(25.3,-0.4).curveTo(25.8,0.9,25.8,2.4).lineTo(25.8,2.4).lineTo(25.8,3.9).lineTo(15.6,3.9).curveTo(15.9,5,16.7,5.5).lineTo(16.7,5.5).curveTo(17.5,6.1,18.7,6.1).lineTo(18.7,6.1).curveTo(19.7,6.1,20.4,5.7).lineTo(20.4,5.7).curveTo(21.2,5.3,21.6,4.7).lineTo(21.6,4.7).lineTo(25.1,6.6).curveTo(24,8.1,22.5,8.9).lineTo(22.5,8.9).curveTo(21,9.7,18.7,9.7).lineTo(18.7,9.7).curveTo(17,9.7,15.6,9.1).closePath().moveTo(21.6,0.8).curveTo(21.2,-0.2,20.5,-0.6).lineTo(20.5,-0.6).curveTo(19.7,-1.1,18.7,-1.1).lineTo(18.7,-1.1).curveTo(17.6,-1.1,16.9,-0.6).lineTo(16.9,-0.6).curveTo(16.1,-0.1,15.7,0.8).lineTo(15.7,0.8).lineTo(21.6,0.8).lineTo(21.6,0.8).closePath().moveTo(6.3,9.4).curveTo(5.4,9.1,4.8,8.4).lineTo(4.8,8.4).curveTo(4.2,7.8,3.8,6.8).lineTo(3.8,6.8).curveTo(3.5,5.7,3.5,4.2).lineTo(3.5,4.2).lineTo(3.5,-0.6).lineTo(1.1,-0.6).lineTo(1.1,-4.4).lineTo(3.5,-4.4).lineTo(3.5,-7.4).lineTo(7.7,-9.7).lineTo(7.7,-4.4).lineTo(11.1,-4.4).lineTo(11.1,-0.6).lineTo(7.7,-0.6).lineTo(7.7,3.9).curveTo(7.7,5,8.1,5.3).lineTo(8.1,5.3).curveTo(8.4,5.7,9,5.7).lineTo(9,5.7).curveTo(9.6,5.7,10.1,5.2).lineTo(10.1,5.2).lineTo(12,8.4).curveTo(11.3,9,10.3,9.4).lineTo(10.3,9.4).curveTo(9.4,9.7,8.4,9.7).lineTo(8.4,9.7).curveTo(7.2,9.7,6.3,9.4).closePath().moveTo(-4.4,9.4).curveTo(-5.3,9.1,-5.9,8.4).lineTo(-5.9,8.4).curveTo(-6.6,7.8,-6.9,6.8).lineTo(-6.9,6.8).curveTo(-7.2,5.7,-7.2,4.2).lineTo(-7.2,4.2).lineTo(-7.2,-0.6).lineTo(-9.6,-0.6).lineTo(-9.6,-4.4).lineTo(-7.2,-4.4).lineTo(-7.2,-7.4).lineTo(-3,-9.7).lineTo(-3,-4.4).lineTo(0.4,-4.4).lineTo(0.4,-0.6).lineTo(-3,-0.6).lineTo(-3,3.9).curveTo(-3,5,-2.7,5.3).lineTo(-2.7,5.3).curveTo(-2.3,5.7,-1.7,5.7).lineTo(-1.7,5.7).curveTo(-1.2,5.7,-0.6,5.2).lineTo(-0.6,5.2).lineTo(1.3,8.4).curveTo(0.6,9,-0.4,9.4).lineTo(-0.4,9.4).curveTo(-1.3,9.7,-2.4,9.7).lineTo(-2.4,9.7).curveTo(-3.5,9.7,-4.4,9.4).closePath().moveTo(-20.1,9.1).curveTo(-21.5,8.6,-22.4,7.6).lineTo(-22.4,7.6).curveTo(-23.3,6.6,-23.8,5.3).lineTo(-23.8,5.3).curveTo(-24.3,4,-24.3,2.5).lineTo(-24.3,2.5).curveTo(-24.3,1,-23.8,-0.3).lineTo(-23.8,-0.3).curveTo(-23.2,-1.6,-22.3,-2.6).lineTo(-22.3,-2.6).curveTo(-21.3,-3.6,-20,-4.1).lineTo(-20,-4.1).curveTo(-18.6,-4.7,-17.1,-4.7).lineTo(-17.1,-4.7).curveTo(-15.5,-4.7,-14.2,-4.1).lineTo(-14.2,-4.1).curveTo(-12.9,-3.6,-11.9,-2.7).lineTo(-11.9,-2.7).curveTo(-10.9,-1.7,-10.4,-0.4).lineTo(-10.4,-0.4).curveTo(-9.9,0.9,-9.9,2.4).lineTo(-9.9,2.4).lineTo(-9.9,3.9).lineTo(-20.2,3.9).curveTo(-19.8,5,-19,5.5).lineTo(-19,5.5).curveTo(-18.2,6.1,-17,6.1).lineTo(-17,6.1).curveTo(-16,6.1,-15.3,5.7).lineTo(-15.3,5.7).curveTo(-14.6,5.3,-14.1,4.7).lineTo(-14.1,4.7).lineTo(-10.7,6.6).curveTo(-11.8,8.1,-13.3,8.9).lineTo(-13.3,8.9).curveTo(-14.7,9.7,-17.1,9.7).lineTo(-17.1,9.7).curveTo(-18.7,9.7,-20.1,9.1).closePath().moveTo(-14.1,0.8).curveTo(-14.5,-0.2,-15.2,-0.6).lineTo(-15.2,-0.6).curveTo(-16,-1.1,-17.1,-1.1).lineTo(-17.1,-1.1).curveTo(-18.1,-1.1,-18.9,-0.6).lineTo(-18.9,-0.6).curveTo(-19.7,-0.1,-20.1,0.8).lineTo(-20.1,0.8).lineTo(-14.1,0.8).lineTo(-14.1,0.8).closePath().moveTo(27,9.4).lineTo(27,-4.4).lineTo(31.2,-4.4).lineTo(31.2,-2.4).curveTo(31.7,-3.7,32.8,-4.2).lineTo(32.8,-4.2).curveTo(33.7,-4.7,35.1,-4.7).lineTo(35.1,-4.7).lineTo(36.4,-4.5).lineTo(36.4,-4.5).lineTo(37.4,-4.1).lineTo(35.9,0.2).lineTo(35.1,-0.2).lineTo(35.1,-0.2).curveTo(34.6,-0.4,34,-0.4).lineTo(34,-0.4).curveTo(32.7,-0.4,32,0.3).lineTo(32,0.3).curveTo(31.2,1,31.2,2.6).lineTo(31.2,2.6).lineTo(31.2,9.4).closePath().moveTo(-39.9,9.4).lineTo(-39.9,-9.2).lineTo(-32.4,-9.2).curveTo(-29.1,-9.2,-27.3,-7.9).lineTo(-27.3,-7.9).curveTo(-25.7,-6.6,-25.7,-3.9).lineTo(-25.7,-3.9).curveTo(-25.7,-2.6,-26.1,-1.7).lineTo(-26.1,-1.7).curveTo(-26.7,-0.9,-27.6,-0.2).lineTo(-27.6,-0.2).curveTo(-26.4,0.4,-25.9,1.3).lineTo(-25.9,1.3).curveTo(-25.3,2.3,-25.3,3.8).lineTo(-25.3,3.8).curveTo(-25.3,6.7,-27.2,8.1).lineTo(-27.2,8.1).curveTo(-29.1,9.4,-32.4,9.4).lineTo(-32.4,9.4).closePath().moveTo(-35.5,5.5).lineTo(-32.4,5.5).curveTo(-31,5.5,-30.5,5.1).lineTo(-30.5,5.1).curveTo(-29.8,4.6,-29.8,3.6).lineTo(-29.8,3.6).curveTo(-29.8,2.8,-30.4,2.3).lineTo(-30.4,2.3).curveTo(-30.9,1.9,-32.4,1.9).lineTo(-32.4,1.9).lineTo(-35.5,1.9).closePath().moveTo(-35.5,-2.1).lineTo(-32.2,-2.1).curveTo(-31,-2.1,-30.6,-2.5).lineTo(-30.6,-2.5).curveTo(-30.1,-3,-30.1,-3.8).lineTo(-30.1,-3.8).curveTo(-30.1,-4.5,-30.6,-5).lineTo(-30.6,-5).curveTo(-31.1,-5.4,-32.3,-5.4).lineTo(-32.3,-5.4).lineTo(-35.5,-5.4).closePath();
	var mask_graphics_155 = new cjs.Graphics().moveTo(35.5,9).curveTo(34.8,8.3,34.8,7.2).lineTo(34.8,7.2).curveTo(34.8,6.1,35.5,5.4).lineTo(35.5,5.4).curveTo(36.2,4.7,37.3,4.7).lineTo(37.3,4.7).curveTo(38.5,4.7,39.2,5.4).lineTo(39.2,5.4).curveTo(39.9,6.1,39.9,7.2).lineTo(39.9,7.2).curveTo(39.9,8.3,39.2,9).lineTo(39.2,9).curveTo(38.5,9.7,37.3,9.7).lineTo(37.3,9.7).curveTo(36.2,9.7,35.5,9).closePath().moveTo(15.6,9.1).curveTo(14.3,8.6,13.3,7.6).lineTo(13.3,7.6).curveTo(12.4,6.6,11.9,5.3).lineTo(11.9,5.3).curveTo(11.4,4,11.4,2.5).lineTo(11.4,2.5).curveTo(11.4,1,11.9,-0.3).lineTo(11.9,-0.3).curveTo(12.5,-1.6,13.4,-2.6).lineTo(13.4,-2.6).curveTo(14.4,-3.6,15.8,-4.1).lineTo(15.8,-4.1).curveTo(17.1,-4.7,18.6,-4.7).lineTo(18.6,-4.7).curveTo(20.2,-4.7,21.6,-4.1).lineTo(21.6,-4.1).curveTo(22.9,-3.6,23.8,-2.7).lineTo(23.8,-2.7).curveTo(24.8,-1.7,25.3,-0.4).lineTo(25.3,-0.4).curveTo(25.8,0.9,25.8,2.4).lineTo(25.8,2.4).lineTo(25.8,3.9).lineTo(15.6,3.9).curveTo(15.9,5,16.7,5.5).lineTo(16.7,5.5).curveTo(17.5,6.1,18.7,6.1).lineTo(18.7,6.1).curveTo(19.7,6.1,20.4,5.7).lineTo(20.4,5.7).curveTo(21.2,5.3,21.6,4.7).lineTo(21.6,4.7).lineTo(25.1,6.6).curveTo(24,8.1,22.5,8.9).lineTo(22.5,8.9).curveTo(21,9.7,18.7,9.7).lineTo(18.7,9.7).curveTo(17,9.7,15.6,9.1).closePath().moveTo(21.6,0.8).curveTo(21.2,-0.2,20.5,-0.6).lineTo(20.5,-0.6).curveTo(19.7,-1.1,18.7,-1.1).lineTo(18.7,-1.1).curveTo(17.6,-1.1,16.9,-0.6).lineTo(16.9,-0.6).curveTo(16.1,-0.1,15.7,0.8).lineTo(15.7,0.8).lineTo(21.6,0.8).lineTo(21.6,0.8).closePath().moveTo(6.3,9.4).curveTo(5.4,9.1,4.8,8.4).lineTo(4.8,8.4).curveTo(4.2,7.8,3.8,6.8).lineTo(3.8,6.8).curveTo(3.5,5.7,3.5,4.2).lineTo(3.5,4.2).lineTo(3.5,-0.6).lineTo(1.1,-0.6).lineTo(1.1,-4.4).lineTo(3.5,-4.4).lineTo(3.5,-7.4).lineTo(7.7,-9.7).lineTo(7.7,-4.4).lineTo(11.1,-4.4).lineTo(11.1,-0.6).lineTo(7.7,-0.6).lineTo(7.7,3.9).curveTo(7.7,5,8.1,5.3).lineTo(8.1,5.3).curveTo(8.4,5.7,9,5.7).lineTo(9,5.7).curveTo(9.6,5.7,10.1,5.2).lineTo(10.1,5.2).lineTo(12,8.4).curveTo(11.3,9,10.3,9.4).lineTo(10.3,9.4).curveTo(9.4,9.7,8.4,9.7).lineTo(8.4,9.7).curveTo(7.2,9.7,6.3,9.4).closePath().moveTo(-4.4,9.4).curveTo(-5.3,9.1,-5.9,8.4).lineTo(-5.9,8.4).curveTo(-6.6,7.8,-6.9,6.8).lineTo(-6.9,6.8).curveTo(-7.2,5.7,-7.2,4.2).lineTo(-7.2,4.2).lineTo(-7.2,-0.6).lineTo(-9.6,-0.6).lineTo(-9.6,-4.4).lineTo(-7.2,-4.4).lineTo(-7.2,-7.4).lineTo(-3,-9.7).lineTo(-3,-4.4).lineTo(0.4,-4.4).lineTo(0.4,-0.6).lineTo(-3,-0.6).lineTo(-3,3.9).curveTo(-3,5,-2.7,5.3).lineTo(-2.7,5.3).curveTo(-2.3,5.7,-1.7,5.7).lineTo(-1.7,5.7).curveTo(-1.2,5.7,-0.6,5.2).lineTo(-0.6,5.2).lineTo(1.3,8.4).curveTo(0.6,9,-0.4,9.4).lineTo(-0.4,9.4).curveTo(-1.3,9.7,-2.4,9.7).lineTo(-2.4,9.7).curveTo(-3.5,9.7,-4.4,9.4).closePath().moveTo(-20.1,9.1).curveTo(-21.5,8.6,-22.4,7.6).lineTo(-22.4,7.6).curveTo(-23.3,6.6,-23.8,5.3).lineTo(-23.8,5.3).curveTo(-24.3,4,-24.3,2.5).lineTo(-24.3,2.5).curveTo(-24.3,1,-23.8,-0.3).lineTo(-23.8,-0.3).curveTo(-23.2,-1.6,-22.3,-2.6).lineTo(-22.3,-2.6).curveTo(-21.3,-3.6,-20,-4.1).lineTo(-20,-4.1).curveTo(-18.6,-4.7,-17.1,-4.7).lineTo(-17.1,-4.7).curveTo(-15.5,-4.7,-14.2,-4.1).lineTo(-14.2,-4.1).curveTo(-12.9,-3.6,-11.9,-2.7).lineTo(-11.9,-2.7).curveTo(-10.9,-1.7,-10.4,-0.4).lineTo(-10.4,-0.4).curveTo(-9.9,0.9,-9.9,2.4).lineTo(-9.9,2.4).lineTo(-9.9,3.9).lineTo(-20.2,3.9).curveTo(-19.8,5,-19,5.5).lineTo(-19,5.5).curveTo(-18.2,6.1,-17,6.1).lineTo(-17,6.1).curveTo(-16,6.1,-15.3,5.7).lineTo(-15.3,5.7).curveTo(-14.6,5.3,-14.1,4.7).lineTo(-14.1,4.7).lineTo(-10.7,6.6).curveTo(-11.8,8.1,-13.3,8.9).lineTo(-13.3,8.9).curveTo(-14.7,9.7,-17.1,9.7).lineTo(-17.1,9.7).curveTo(-18.7,9.7,-20.1,9.1).closePath().moveTo(-14.1,0.8).curveTo(-14.5,-0.2,-15.2,-0.6).lineTo(-15.2,-0.6).curveTo(-16,-1.1,-17.1,-1.1).lineTo(-17.1,-1.1).curveTo(-18.1,-1.1,-18.9,-0.6).lineTo(-18.9,-0.6).curveTo(-19.7,-0.1,-20.1,0.8).lineTo(-20.1,0.8).lineTo(-14.1,0.8).lineTo(-14.1,0.8).closePath().moveTo(27,9.4).lineTo(27,-4.4).lineTo(31.2,-4.4).lineTo(31.2,-2.4).curveTo(31.7,-3.7,32.8,-4.2).lineTo(32.8,-4.2).curveTo(33.7,-4.7,35.1,-4.7).lineTo(35.1,-4.7).lineTo(36.4,-4.5).lineTo(36.4,-4.5).lineTo(37.4,-4.1).lineTo(35.9,0.2).lineTo(35.1,-0.2).lineTo(35.1,-0.2).curveTo(34.6,-0.4,34,-0.4).lineTo(34,-0.4).curveTo(32.7,-0.4,32,0.3).lineTo(32,0.3).curveTo(31.2,1,31.2,2.6).lineTo(31.2,2.6).lineTo(31.2,9.4).closePath().moveTo(-39.9,9.4).lineTo(-39.9,-9.2).lineTo(-32.4,-9.2).curveTo(-29.1,-9.2,-27.3,-7.9).lineTo(-27.3,-7.9).curveTo(-25.7,-6.6,-25.7,-3.9).lineTo(-25.7,-3.9).curveTo(-25.7,-2.6,-26.1,-1.7).lineTo(-26.1,-1.7).curveTo(-26.7,-0.9,-27.6,-0.2).lineTo(-27.6,-0.2).curveTo(-26.4,0.4,-25.9,1.3).lineTo(-25.9,1.3).curveTo(-25.3,2.3,-25.3,3.8).lineTo(-25.3,3.8).curveTo(-25.3,6.7,-27.2,8.1).lineTo(-27.2,8.1).curveTo(-29.1,9.4,-32.4,9.4).lineTo(-32.4,9.4).closePath().moveTo(-35.5,5.5).lineTo(-32.4,5.5).curveTo(-31,5.5,-30.5,5.1).lineTo(-30.5,5.1).curveTo(-29.8,4.6,-29.8,3.6).lineTo(-29.8,3.6).curveTo(-29.8,2.8,-30.4,2.3).lineTo(-30.4,2.3).curveTo(-30.9,1.9,-32.4,1.9).lineTo(-32.4,1.9).lineTo(-35.5,1.9).closePath().moveTo(-35.5,-2.1).lineTo(-32.2,-2.1).curveTo(-31,-2.1,-30.6,-2.5).lineTo(-30.6,-2.5).curveTo(-30.1,-3,-30.1,-3.8).lineTo(-30.1,-3.8).curveTo(-30.1,-4.5,-30.6,-5).lineTo(-30.6,-5).curveTo(-31.1,-5.4,-32.3,-5.4).lineTo(-32.3,-5.4).lineTo(-35.5,-5.4).closePath();
	var mask_graphics_156 = new cjs.Graphics().moveTo(35.5,9).curveTo(34.8,8.3,34.8,7.2).lineTo(34.8,7.2).curveTo(34.8,6.1,35.5,5.4).lineTo(35.5,5.4).curveTo(36.2,4.7,37.3,4.7).lineTo(37.3,4.7).curveTo(38.5,4.7,39.2,5.4).lineTo(39.2,5.4).curveTo(39.9,6.1,39.9,7.2).lineTo(39.9,7.2).curveTo(39.9,8.3,39.2,9).lineTo(39.2,9).curveTo(38.5,9.7,37.3,9.7).lineTo(37.3,9.7).curveTo(36.2,9.7,35.5,9).closePath().moveTo(15.6,9.1).curveTo(14.3,8.6,13.3,7.6).lineTo(13.3,7.6).curveTo(12.4,6.6,11.9,5.3).lineTo(11.9,5.3).curveTo(11.4,4,11.4,2.5).lineTo(11.4,2.5).curveTo(11.4,1,11.9,-0.3).lineTo(11.9,-0.3).curveTo(12.5,-1.6,13.4,-2.6).lineTo(13.4,-2.6).curveTo(14.4,-3.6,15.8,-4.1).lineTo(15.8,-4.1).curveTo(17.1,-4.7,18.6,-4.7).lineTo(18.6,-4.7).curveTo(20.2,-4.7,21.6,-4.1).lineTo(21.6,-4.1).curveTo(22.9,-3.6,23.8,-2.7).lineTo(23.8,-2.7).curveTo(24.8,-1.7,25.3,-0.4).lineTo(25.3,-0.4).curveTo(25.8,0.9,25.8,2.4).lineTo(25.8,2.4).lineTo(25.8,3.9).lineTo(15.6,3.9).curveTo(15.9,5,16.7,5.5).lineTo(16.7,5.5).curveTo(17.5,6.1,18.7,6.1).lineTo(18.7,6.1).curveTo(19.7,6.1,20.4,5.7).lineTo(20.4,5.7).curveTo(21.2,5.3,21.6,4.7).lineTo(21.6,4.7).lineTo(25.1,6.6).curveTo(24,8.1,22.5,8.9).lineTo(22.5,8.9).curveTo(21,9.7,18.7,9.7).lineTo(18.7,9.7).curveTo(17,9.7,15.6,9.1).closePath().moveTo(21.6,0.8).curveTo(21.2,-0.2,20.5,-0.6).lineTo(20.5,-0.6).curveTo(19.7,-1.1,18.7,-1.1).lineTo(18.7,-1.1).curveTo(17.6,-1.1,16.9,-0.6).lineTo(16.9,-0.6).curveTo(16.1,-0.1,15.7,0.8).lineTo(15.7,0.8).lineTo(21.6,0.8).lineTo(21.6,0.8).closePath().moveTo(6.3,9.4).curveTo(5.4,9.1,4.8,8.4).lineTo(4.8,8.4).curveTo(4.2,7.8,3.8,6.8).lineTo(3.8,6.8).curveTo(3.5,5.7,3.5,4.2).lineTo(3.5,4.2).lineTo(3.5,-0.6).lineTo(1.1,-0.6).lineTo(1.1,-4.4).lineTo(3.5,-4.4).lineTo(3.5,-7.4).lineTo(7.7,-9.7).lineTo(7.7,-4.4).lineTo(11.1,-4.4).lineTo(11.1,-0.6).lineTo(7.7,-0.6).lineTo(7.7,3.9).curveTo(7.7,5,8.1,5.3).lineTo(8.1,5.3).curveTo(8.4,5.7,9,5.7).lineTo(9,5.7).curveTo(9.6,5.7,10.1,5.2).lineTo(10.1,5.2).lineTo(12,8.4).curveTo(11.3,9,10.3,9.4).lineTo(10.3,9.4).curveTo(9.4,9.7,8.4,9.7).lineTo(8.4,9.7).curveTo(7.2,9.7,6.3,9.4).closePath().moveTo(-4.4,9.4).curveTo(-5.3,9.1,-5.9,8.4).lineTo(-5.9,8.4).curveTo(-6.6,7.8,-6.9,6.8).lineTo(-6.9,6.8).curveTo(-7.2,5.7,-7.2,4.2).lineTo(-7.2,4.2).lineTo(-7.2,-0.6).lineTo(-9.6,-0.6).lineTo(-9.6,-4.4).lineTo(-7.2,-4.4).lineTo(-7.2,-7.4).lineTo(-3,-9.7).lineTo(-3,-4.4).lineTo(0.4,-4.4).lineTo(0.4,-0.6).lineTo(-3,-0.6).lineTo(-3,3.9).curveTo(-3,5,-2.7,5.3).lineTo(-2.7,5.3).curveTo(-2.3,5.7,-1.7,5.7).lineTo(-1.7,5.7).curveTo(-1.2,5.7,-0.6,5.2).lineTo(-0.6,5.2).lineTo(1.3,8.4).curveTo(0.6,9,-0.4,9.4).lineTo(-0.4,9.4).curveTo(-1.3,9.7,-2.4,9.7).lineTo(-2.4,9.7).curveTo(-3.5,9.7,-4.4,9.4).closePath().moveTo(-20.1,9.1).curveTo(-21.5,8.6,-22.4,7.6).lineTo(-22.4,7.6).curveTo(-23.3,6.6,-23.8,5.3).lineTo(-23.8,5.3).curveTo(-24.3,4,-24.3,2.5).lineTo(-24.3,2.5).curveTo(-24.3,1,-23.8,-0.3).lineTo(-23.8,-0.3).curveTo(-23.2,-1.6,-22.3,-2.6).lineTo(-22.3,-2.6).curveTo(-21.3,-3.6,-20,-4.1).lineTo(-20,-4.1).curveTo(-18.6,-4.7,-17.1,-4.7).lineTo(-17.1,-4.7).curveTo(-15.5,-4.7,-14.2,-4.1).lineTo(-14.2,-4.1).curveTo(-12.9,-3.6,-11.9,-2.7).lineTo(-11.9,-2.7).curveTo(-10.9,-1.7,-10.4,-0.4).lineTo(-10.4,-0.4).curveTo(-9.9,0.9,-9.9,2.4).lineTo(-9.9,2.4).lineTo(-9.9,3.9).lineTo(-20.2,3.9).curveTo(-19.8,5,-19,5.5).lineTo(-19,5.5).curveTo(-18.2,6.1,-17,6.1).lineTo(-17,6.1).curveTo(-16,6.1,-15.3,5.7).lineTo(-15.3,5.7).curveTo(-14.6,5.3,-14.1,4.7).lineTo(-14.1,4.7).lineTo(-10.7,6.6).curveTo(-11.8,8.1,-13.3,8.9).lineTo(-13.3,8.9).curveTo(-14.7,9.7,-17.1,9.7).lineTo(-17.1,9.7).curveTo(-18.7,9.7,-20.1,9.1).closePath().moveTo(-14.1,0.8).curveTo(-14.5,-0.2,-15.2,-0.6).lineTo(-15.2,-0.6).curveTo(-16,-1.1,-17.1,-1.1).lineTo(-17.1,-1.1).curveTo(-18.1,-1.1,-18.9,-0.6).lineTo(-18.9,-0.6).curveTo(-19.7,-0.1,-20.1,0.8).lineTo(-20.1,0.8).lineTo(-14.1,0.8).lineTo(-14.1,0.8).closePath().moveTo(27,9.4).lineTo(27,-4.4).lineTo(31.2,-4.4).lineTo(31.2,-2.4).curveTo(31.7,-3.7,32.8,-4.2).lineTo(32.8,-4.2).curveTo(33.7,-4.7,35.1,-4.7).lineTo(35.1,-4.7).lineTo(36.4,-4.5).lineTo(36.4,-4.5).lineTo(37.4,-4.1).lineTo(35.9,0.2).lineTo(35.1,-0.2).lineTo(35.1,-0.2).curveTo(34.6,-0.4,34,-0.4).lineTo(34,-0.4).curveTo(32.7,-0.4,32,0.3).lineTo(32,0.3).curveTo(31.2,1,31.2,2.6).lineTo(31.2,2.6).lineTo(31.2,9.4).closePath().moveTo(-39.9,9.4).lineTo(-39.9,-9.2).lineTo(-32.4,-9.2).curveTo(-29.1,-9.2,-27.3,-7.9).lineTo(-27.3,-7.9).curveTo(-25.7,-6.6,-25.7,-3.9).lineTo(-25.7,-3.9).curveTo(-25.7,-2.6,-26.1,-1.7).lineTo(-26.1,-1.7).curveTo(-26.7,-0.9,-27.6,-0.2).lineTo(-27.6,-0.2).curveTo(-26.4,0.4,-25.9,1.3).lineTo(-25.9,1.3).curveTo(-25.3,2.3,-25.3,3.8).lineTo(-25.3,3.8).curveTo(-25.3,6.7,-27.2,8.1).lineTo(-27.2,8.1).curveTo(-29.1,9.4,-32.4,9.4).lineTo(-32.4,9.4).closePath().moveTo(-35.5,5.5).lineTo(-32.4,5.5).curveTo(-31,5.5,-30.5,5.1).lineTo(-30.5,5.1).curveTo(-29.8,4.6,-29.8,3.6).lineTo(-29.8,3.6).curveTo(-29.8,2.8,-30.4,2.3).lineTo(-30.4,2.3).curveTo(-30.9,1.9,-32.4,1.9).lineTo(-32.4,1.9).lineTo(-35.5,1.9).closePath().moveTo(-35.5,-2.1).lineTo(-32.2,-2.1).curveTo(-31,-2.1,-30.6,-2.5).lineTo(-30.6,-2.5).curveTo(-30.1,-3,-30.1,-3.8).lineTo(-30.1,-3.8).curveTo(-30.1,-4.5,-30.6,-5).lineTo(-30.6,-5).curveTo(-31.1,-5.4,-32.3,-5.4).lineTo(-32.3,-5.4).lineTo(-35.5,-5.4).closePath();
	var mask_graphics_157 = new cjs.Graphics().moveTo(35.5,9).curveTo(34.8,8.3,34.8,7.2).lineTo(34.8,7.2).curveTo(34.8,6.1,35.5,5.4).lineTo(35.5,5.4).curveTo(36.2,4.7,37.3,4.7).lineTo(37.3,4.7).curveTo(38.5,4.7,39.2,5.4).lineTo(39.2,5.4).curveTo(39.9,6.1,39.9,7.2).lineTo(39.9,7.2).curveTo(39.9,8.3,39.2,9).lineTo(39.2,9).curveTo(38.5,9.7,37.3,9.7).lineTo(37.3,9.7).curveTo(36.2,9.7,35.5,9).closePath().moveTo(15.6,9.1).curveTo(14.3,8.6,13.3,7.6).lineTo(13.3,7.6).curveTo(12.4,6.6,11.9,5.3).lineTo(11.9,5.3).curveTo(11.4,4,11.4,2.5).lineTo(11.4,2.5).curveTo(11.4,1,11.9,-0.3).lineTo(11.9,-0.3).curveTo(12.5,-1.6,13.4,-2.6).lineTo(13.4,-2.6).curveTo(14.4,-3.6,15.8,-4.1).lineTo(15.8,-4.1).curveTo(17.1,-4.7,18.6,-4.7).lineTo(18.6,-4.7).curveTo(20.2,-4.7,21.6,-4.1).lineTo(21.6,-4.1).curveTo(22.9,-3.6,23.8,-2.7).lineTo(23.8,-2.7).curveTo(24.8,-1.7,25.3,-0.4).lineTo(25.3,-0.4).curveTo(25.8,0.9,25.8,2.4).lineTo(25.8,2.4).lineTo(25.8,3.9).lineTo(15.6,3.9).curveTo(15.9,5,16.7,5.5).lineTo(16.7,5.5).curveTo(17.5,6.1,18.7,6.1).lineTo(18.7,6.1).curveTo(19.7,6.1,20.4,5.7).lineTo(20.4,5.7).curveTo(21.2,5.3,21.6,4.7).lineTo(21.6,4.7).lineTo(25.1,6.6).curveTo(24,8.1,22.5,8.9).lineTo(22.5,8.9).curveTo(21,9.7,18.7,9.7).lineTo(18.7,9.7).curveTo(17,9.7,15.6,9.1).closePath().moveTo(21.6,0.8).curveTo(21.2,-0.2,20.5,-0.6).lineTo(20.5,-0.6).curveTo(19.7,-1.1,18.7,-1.1).lineTo(18.7,-1.1).curveTo(17.6,-1.1,16.9,-0.6).lineTo(16.9,-0.6).curveTo(16.1,-0.1,15.7,0.8).lineTo(15.7,0.8).lineTo(21.6,0.8).lineTo(21.6,0.8).closePath().moveTo(6.3,9.4).curveTo(5.4,9.1,4.8,8.4).lineTo(4.8,8.4).curveTo(4.2,7.8,3.8,6.8).lineTo(3.8,6.8).curveTo(3.5,5.7,3.5,4.2).lineTo(3.5,4.2).lineTo(3.5,-0.6).lineTo(1.1,-0.6).lineTo(1.1,-4.4).lineTo(3.5,-4.4).lineTo(3.5,-7.4).lineTo(7.7,-9.7).lineTo(7.7,-4.4).lineTo(11.1,-4.4).lineTo(11.1,-0.6).lineTo(7.7,-0.6).lineTo(7.7,3.9).curveTo(7.7,5,8.1,5.3).lineTo(8.1,5.3).curveTo(8.4,5.7,9,5.7).lineTo(9,5.7).curveTo(9.6,5.7,10.1,5.2).lineTo(10.1,5.2).lineTo(12,8.4).curveTo(11.3,9,10.3,9.4).lineTo(10.3,9.4).curveTo(9.4,9.7,8.4,9.7).lineTo(8.4,9.7).curveTo(7.2,9.7,6.3,9.4).closePath().moveTo(-4.4,9.4).curveTo(-5.3,9.1,-5.9,8.4).lineTo(-5.9,8.4).curveTo(-6.6,7.8,-6.9,6.8).lineTo(-6.9,6.8).curveTo(-7.2,5.7,-7.2,4.2).lineTo(-7.2,4.2).lineTo(-7.2,-0.6).lineTo(-9.6,-0.6).lineTo(-9.6,-4.4).lineTo(-7.2,-4.4).lineTo(-7.2,-7.4).lineTo(-3,-9.7).lineTo(-3,-4.4).lineTo(0.4,-4.4).lineTo(0.4,-0.6).lineTo(-3,-0.6).lineTo(-3,3.9).curveTo(-3,5,-2.7,5.3).lineTo(-2.7,5.3).curveTo(-2.3,5.7,-1.7,5.7).lineTo(-1.7,5.7).curveTo(-1.2,5.7,-0.6,5.2).lineTo(-0.6,5.2).lineTo(1.3,8.4).curveTo(0.6,9,-0.4,9.4).lineTo(-0.4,9.4).curveTo(-1.3,9.7,-2.4,9.7).lineTo(-2.4,9.7).curveTo(-3.5,9.7,-4.4,9.4).closePath().moveTo(-20.1,9.1).curveTo(-21.5,8.6,-22.4,7.6).lineTo(-22.4,7.6).curveTo(-23.3,6.6,-23.8,5.3).lineTo(-23.8,5.3).curveTo(-24.3,4,-24.3,2.5).lineTo(-24.3,2.5).curveTo(-24.3,1,-23.8,-0.3).lineTo(-23.8,-0.3).curveTo(-23.2,-1.6,-22.3,-2.6).lineTo(-22.3,-2.6).curveTo(-21.3,-3.6,-20,-4.1).lineTo(-20,-4.1).curveTo(-18.6,-4.7,-17.1,-4.7).lineTo(-17.1,-4.7).curveTo(-15.5,-4.7,-14.2,-4.1).lineTo(-14.2,-4.1).curveTo(-12.9,-3.6,-11.9,-2.7).lineTo(-11.9,-2.7).curveTo(-10.9,-1.7,-10.4,-0.4).lineTo(-10.4,-0.4).curveTo(-9.9,0.9,-9.9,2.4).lineTo(-9.9,2.4).lineTo(-9.9,3.9).lineTo(-20.2,3.9).curveTo(-19.8,5,-19,5.5).lineTo(-19,5.5).curveTo(-18.2,6.1,-17,6.1).lineTo(-17,6.1).curveTo(-16,6.1,-15.3,5.7).lineTo(-15.3,5.7).curveTo(-14.6,5.3,-14.1,4.7).lineTo(-14.1,4.7).lineTo(-10.7,6.6).curveTo(-11.8,8.1,-13.3,8.9).lineTo(-13.3,8.9).curveTo(-14.7,9.7,-17.1,9.7).lineTo(-17.1,9.7).curveTo(-18.7,9.7,-20.1,9.1).closePath().moveTo(-14.1,0.8).curveTo(-14.5,-0.2,-15.2,-0.6).lineTo(-15.2,-0.6).curveTo(-16,-1.1,-17.1,-1.1).lineTo(-17.1,-1.1).curveTo(-18.1,-1.1,-18.9,-0.6).lineTo(-18.9,-0.6).curveTo(-19.7,-0.1,-20.1,0.8).lineTo(-20.1,0.8).lineTo(-14.1,0.8).lineTo(-14.1,0.8).closePath().moveTo(27,9.4).lineTo(27,-4.4).lineTo(31.2,-4.4).lineTo(31.2,-2.4).curveTo(31.7,-3.7,32.8,-4.2).lineTo(32.8,-4.2).curveTo(33.7,-4.7,35.1,-4.7).lineTo(35.1,-4.7).lineTo(36.4,-4.5).lineTo(36.4,-4.5).lineTo(37.4,-4.1).lineTo(35.9,0.2).lineTo(35.1,-0.2).lineTo(35.1,-0.2).curveTo(34.6,-0.4,34,-0.4).lineTo(34,-0.4).curveTo(32.7,-0.4,32,0.3).lineTo(32,0.3).curveTo(31.2,1,31.2,2.6).lineTo(31.2,2.6).lineTo(31.2,9.4).closePath().moveTo(-39.9,9.4).lineTo(-39.9,-9.2).lineTo(-32.4,-9.2).curveTo(-29.1,-9.2,-27.3,-7.9).lineTo(-27.3,-7.9).curveTo(-25.7,-6.6,-25.7,-3.9).lineTo(-25.7,-3.9).curveTo(-25.7,-2.6,-26.1,-1.7).lineTo(-26.1,-1.7).curveTo(-26.7,-0.9,-27.6,-0.2).lineTo(-27.6,-0.2).curveTo(-26.4,0.4,-25.9,1.3).lineTo(-25.9,1.3).curveTo(-25.3,2.3,-25.3,3.8).lineTo(-25.3,3.8).curveTo(-25.3,6.7,-27.2,8.1).lineTo(-27.2,8.1).curveTo(-29.1,9.4,-32.4,9.4).lineTo(-32.4,9.4).closePath().moveTo(-35.5,5.5).lineTo(-32.4,5.5).curveTo(-31,5.5,-30.5,5.1).lineTo(-30.5,5.1).curveTo(-29.8,4.6,-29.8,3.6).lineTo(-29.8,3.6).curveTo(-29.8,2.8,-30.4,2.3).lineTo(-30.4,2.3).curveTo(-30.9,1.9,-32.4,1.9).lineTo(-32.4,1.9).lineTo(-35.5,1.9).closePath().moveTo(-35.5,-2.1).lineTo(-32.2,-2.1).curveTo(-31,-2.1,-30.6,-2.5).lineTo(-30.6,-2.5).curveTo(-30.1,-3,-30.1,-3.8).lineTo(-30.1,-3.8).curveTo(-30.1,-4.5,-30.6,-5).lineTo(-30.6,-5).curveTo(-31.1,-5.4,-32.3,-5.4).lineTo(-32.3,-5.4).lineTo(-35.5,-5.4).closePath();
	var mask_graphics_158 = new cjs.Graphics().moveTo(35.5,9).curveTo(34.8,8.3,34.8,7.2).lineTo(34.8,7.2).curveTo(34.8,6.1,35.5,5.4).lineTo(35.5,5.4).curveTo(36.2,4.7,37.3,4.7).lineTo(37.3,4.7).curveTo(38.5,4.7,39.2,5.4).lineTo(39.2,5.4).curveTo(39.9,6.1,39.9,7.2).lineTo(39.9,7.2).curveTo(39.9,8.3,39.2,9).lineTo(39.2,9).curveTo(38.5,9.7,37.3,9.7).lineTo(37.3,9.7).curveTo(36.2,9.7,35.5,9).closePath().moveTo(15.6,9.1).curveTo(14.3,8.6,13.3,7.6).lineTo(13.3,7.6).curveTo(12.4,6.6,11.9,5.3).lineTo(11.9,5.3).curveTo(11.4,4,11.4,2.5).lineTo(11.4,2.5).curveTo(11.4,1,11.9,-0.3).lineTo(11.9,-0.3).curveTo(12.5,-1.6,13.4,-2.6).lineTo(13.4,-2.6).curveTo(14.4,-3.6,15.8,-4.1).lineTo(15.8,-4.1).curveTo(17.1,-4.7,18.6,-4.7).lineTo(18.6,-4.7).curveTo(20.2,-4.7,21.6,-4.1).lineTo(21.6,-4.1).curveTo(22.9,-3.6,23.8,-2.7).lineTo(23.8,-2.7).curveTo(24.8,-1.7,25.3,-0.4).lineTo(25.3,-0.4).curveTo(25.8,0.9,25.8,2.4).lineTo(25.8,2.4).lineTo(25.8,3.9).lineTo(15.6,3.9).curveTo(15.9,5,16.7,5.5).lineTo(16.7,5.5).curveTo(17.5,6.1,18.7,6.1).lineTo(18.7,6.1).curveTo(19.7,6.1,20.4,5.7).lineTo(20.4,5.7).curveTo(21.2,5.3,21.6,4.7).lineTo(21.6,4.7).lineTo(25.1,6.6).curveTo(24,8.1,22.5,8.9).lineTo(22.5,8.9).curveTo(21,9.7,18.7,9.7).lineTo(18.7,9.7).curveTo(17,9.7,15.6,9.1).closePath().moveTo(21.6,0.8).curveTo(21.2,-0.2,20.5,-0.6).lineTo(20.5,-0.6).curveTo(19.7,-1.1,18.7,-1.1).lineTo(18.7,-1.1).curveTo(17.6,-1.1,16.9,-0.6).lineTo(16.9,-0.6).curveTo(16.1,-0.1,15.7,0.8).lineTo(15.7,0.8).lineTo(21.6,0.8).lineTo(21.6,0.8).closePath().moveTo(6.3,9.4).curveTo(5.4,9.1,4.8,8.4).lineTo(4.8,8.4).curveTo(4.2,7.8,3.8,6.8).lineTo(3.8,6.8).curveTo(3.5,5.7,3.5,4.2).lineTo(3.5,4.2).lineTo(3.5,-0.6).lineTo(1.1,-0.6).lineTo(1.1,-4.4).lineTo(3.5,-4.4).lineTo(3.5,-7.4).lineTo(7.7,-9.7).lineTo(7.7,-4.4).lineTo(11.1,-4.4).lineTo(11.1,-0.6).lineTo(7.7,-0.6).lineTo(7.7,3.9).curveTo(7.7,5,8.1,5.3).lineTo(8.1,5.3).curveTo(8.4,5.7,9,5.7).lineTo(9,5.7).curveTo(9.6,5.7,10.1,5.2).lineTo(10.1,5.2).lineTo(12,8.4).curveTo(11.3,9,10.3,9.4).lineTo(10.3,9.4).curveTo(9.4,9.7,8.4,9.7).lineTo(8.4,9.7).curveTo(7.2,9.7,6.3,9.4).closePath().moveTo(-4.4,9.4).curveTo(-5.3,9.1,-5.9,8.4).lineTo(-5.9,8.4).curveTo(-6.6,7.8,-6.9,6.8).lineTo(-6.9,6.8).curveTo(-7.2,5.7,-7.2,4.2).lineTo(-7.2,4.2).lineTo(-7.2,-0.6).lineTo(-9.6,-0.6).lineTo(-9.6,-4.4).lineTo(-7.2,-4.4).lineTo(-7.2,-7.4).lineTo(-3,-9.7).lineTo(-3,-4.4).lineTo(0.4,-4.4).lineTo(0.4,-0.6).lineTo(-3,-0.6).lineTo(-3,3.9).curveTo(-3,5,-2.7,5.3).lineTo(-2.7,5.3).curveTo(-2.3,5.7,-1.7,5.7).lineTo(-1.7,5.7).curveTo(-1.2,5.7,-0.6,5.2).lineTo(-0.6,5.2).lineTo(1.3,8.4).curveTo(0.6,9,-0.4,9.4).lineTo(-0.4,9.4).curveTo(-1.3,9.7,-2.4,9.7).lineTo(-2.4,9.7).curveTo(-3.5,9.7,-4.4,9.4).closePath().moveTo(-20.1,9.1).curveTo(-21.5,8.6,-22.4,7.6).lineTo(-22.4,7.6).curveTo(-23.3,6.6,-23.8,5.3).lineTo(-23.8,5.3).curveTo(-24.3,4,-24.3,2.5).lineTo(-24.3,2.5).curveTo(-24.3,1,-23.8,-0.3).lineTo(-23.8,-0.3).curveTo(-23.2,-1.6,-22.3,-2.6).lineTo(-22.3,-2.6).curveTo(-21.3,-3.6,-20,-4.1).lineTo(-20,-4.1).curveTo(-18.6,-4.7,-17.1,-4.7).lineTo(-17.1,-4.7).curveTo(-15.5,-4.7,-14.2,-4.1).lineTo(-14.2,-4.1).curveTo(-12.9,-3.6,-11.9,-2.7).lineTo(-11.9,-2.7).curveTo(-10.9,-1.7,-10.4,-0.4).lineTo(-10.4,-0.4).curveTo(-9.9,0.9,-9.9,2.4).lineTo(-9.9,2.4).lineTo(-9.9,3.9).lineTo(-20.2,3.9).curveTo(-19.8,5,-19,5.5).lineTo(-19,5.5).curveTo(-18.2,6.1,-17,6.1).lineTo(-17,6.1).curveTo(-16,6.1,-15.3,5.7).lineTo(-15.3,5.7).curveTo(-14.6,5.3,-14.1,4.7).lineTo(-14.1,4.7).lineTo(-10.7,6.6).curveTo(-11.8,8.1,-13.3,8.9).lineTo(-13.3,8.9).curveTo(-14.7,9.7,-17.1,9.7).lineTo(-17.1,9.7).curveTo(-18.7,9.7,-20.1,9.1).closePath().moveTo(-14.1,0.8).curveTo(-14.5,-0.2,-15.2,-0.6).lineTo(-15.2,-0.6).curveTo(-16,-1.1,-17.1,-1.1).lineTo(-17.1,-1.1).curveTo(-18.1,-1.1,-18.9,-0.6).lineTo(-18.9,-0.6).curveTo(-19.7,-0.1,-20.1,0.8).lineTo(-20.1,0.8).lineTo(-14.1,0.8).lineTo(-14.1,0.8).closePath().moveTo(27,9.4).lineTo(27,-4.4).lineTo(31.2,-4.4).lineTo(31.2,-2.4).curveTo(31.7,-3.7,32.8,-4.2).lineTo(32.8,-4.2).curveTo(33.7,-4.7,35.1,-4.7).lineTo(35.1,-4.7).lineTo(36.4,-4.5).lineTo(36.4,-4.5).lineTo(37.4,-4.1).lineTo(35.9,0.2).lineTo(35.1,-0.2).lineTo(35.1,-0.2).curveTo(34.6,-0.4,34,-0.4).lineTo(34,-0.4).curveTo(32.7,-0.4,32,0.3).lineTo(32,0.3).curveTo(31.2,1,31.2,2.6).lineTo(31.2,2.6).lineTo(31.2,9.4).closePath().moveTo(-39.9,9.4).lineTo(-39.9,-9.2).lineTo(-32.4,-9.2).curveTo(-29.1,-9.2,-27.3,-7.9).lineTo(-27.3,-7.9).curveTo(-25.7,-6.6,-25.7,-3.9).lineTo(-25.7,-3.9).curveTo(-25.7,-2.6,-26.1,-1.7).lineTo(-26.1,-1.7).curveTo(-26.7,-0.9,-27.6,-0.2).lineTo(-27.6,-0.2).curveTo(-26.4,0.4,-25.9,1.3).lineTo(-25.9,1.3).curveTo(-25.3,2.3,-25.3,3.8).lineTo(-25.3,3.8).curveTo(-25.3,6.7,-27.2,8.1).lineTo(-27.2,8.1).curveTo(-29.1,9.4,-32.4,9.4).lineTo(-32.4,9.4).closePath().moveTo(-35.5,5.5).lineTo(-32.4,5.5).curveTo(-31,5.5,-30.5,5.1).lineTo(-30.5,5.1).curveTo(-29.8,4.6,-29.8,3.6).lineTo(-29.8,3.6).curveTo(-29.8,2.8,-30.4,2.3).lineTo(-30.4,2.3).curveTo(-30.9,1.9,-32.4,1.9).lineTo(-32.4,1.9).lineTo(-35.5,1.9).closePath().moveTo(-35.5,-2.1).lineTo(-32.2,-2.1).curveTo(-31,-2.1,-30.6,-2.5).lineTo(-30.6,-2.5).curveTo(-30.1,-3,-30.1,-3.8).lineTo(-30.1,-3.8).curveTo(-30.1,-4.5,-30.6,-5).lineTo(-30.6,-5).curveTo(-31.1,-5.4,-32.3,-5.4).lineTo(-32.3,-5.4).lineTo(-35.5,-5.4).closePath();
	var mask_graphics_159 = new cjs.Graphics().moveTo(35.5,9).curveTo(34.8,8.3,34.8,7.2).lineTo(34.8,7.2).curveTo(34.8,6.1,35.5,5.4).lineTo(35.5,5.4).curveTo(36.2,4.7,37.3,4.7).lineTo(37.3,4.7).curveTo(38.5,4.7,39.2,5.4).lineTo(39.2,5.4).curveTo(39.9,6.1,39.9,7.2).lineTo(39.9,7.2).curveTo(39.9,8.3,39.2,9).lineTo(39.2,9).curveTo(38.5,9.7,37.3,9.7).lineTo(37.3,9.7).curveTo(36.2,9.7,35.5,9).closePath().moveTo(15.6,9.1).curveTo(14.3,8.6,13.3,7.6).lineTo(13.3,7.6).curveTo(12.4,6.6,11.9,5.3).lineTo(11.9,5.3).curveTo(11.4,4,11.4,2.5).lineTo(11.4,2.5).curveTo(11.4,1,11.9,-0.3).lineTo(11.9,-0.3).curveTo(12.5,-1.6,13.4,-2.6).lineTo(13.4,-2.6).curveTo(14.4,-3.6,15.8,-4.1).lineTo(15.8,-4.1).curveTo(17.1,-4.7,18.6,-4.7).lineTo(18.6,-4.7).curveTo(20.2,-4.7,21.6,-4.1).lineTo(21.6,-4.1).curveTo(22.9,-3.6,23.8,-2.7).lineTo(23.8,-2.7).curveTo(24.8,-1.7,25.3,-0.4).lineTo(25.3,-0.4).curveTo(25.8,0.9,25.8,2.4).lineTo(25.8,2.4).lineTo(25.8,3.9).lineTo(15.6,3.9).curveTo(15.9,5,16.7,5.5).lineTo(16.7,5.5).curveTo(17.5,6.1,18.7,6.1).lineTo(18.7,6.1).curveTo(19.7,6.1,20.4,5.7).lineTo(20.4,5.7).curveTo(21.2,5.3,21.6,4.7).lineTo(21.6,4.7).lineTo(25.1,6.6).curveTo(24,8.1,22.5,8.9).lineTo(22.5,8.9).curveTo(21,9.7,18.7,9.7).lineTo(18.7,9.7).curveTo(17,9.7,15.6,9.1).closePath().moveTo(21.6,0.8).curveTo(21.2,-0.2,20.5,-0.6).lineTo(20.5,-0.6).curveTo(19.7,-1.1,18.7,-1.1).lineTo(18.7,-1.1).curveTo(17.6,-1.1,16.9,-0.6).lineTo(16.9,-0.6).curveTo(16.1,-0.1,15.7,0.8).lineTo(15.7,0.8).lineTo(21.6,0.8).lineTo(21.6,0.8).closePath().moveTo(6.3,9.4).curveTo(5.4,9.1,4.8,8.4).lineTo(4.8,8.4).curveTo(4.2,7.8,3.8,6.8).lineTo(3.8,6.8).curveTo(3.5,5.7,3.5,4.2).lineTo(3.5,4.2).lineTo(3.5,-0.6).lineTo(1.1,-0.6).lineTo(1.1,-4.4).lineTo(3.5,-4.4).lineTo(3.5,-7.4).lineTo(7.7,-9.7).lineTo(7.7,-4.4).lineTo(11.1,-4.4).lineTo(11.1,-0.6).lineTo(7.7,-0.6).lineTo(7.7,3.9).curveTo(7.7,5,8.1,5.3).lineTo(8.1,5.3).curveTo(8.4,5.7,9,5.7).lineTo(9,5.7).curveTo(9.6,5.7,10.1,5.2).lineTo(10.1,5.2).lineTo(12,8.4).curveTo(11.3,9,10.3,9.4).lineTo(10.3,9.4).curveTo(9.4,9.7,8.4,9.7).lineTo(8.4,9.7).curveTo(7.2,9.7,6.3,9.4).closePath().moveTo(-4.4,9.4).curveTo(-5.3,9.1,-5.9,8.4).lineTo(-5.9,8.4).curveTo(-6.6,7.8,-6.9,6.8).lineTo(-6.9,6.8).curveTo(-7.2,5.7,-7.2,4.2).lineTo(-7.2,4.2).lineTo(-7.2,-0.6).lineTo(-9.6,-0.6).lineTo(-9.6,-4.4).lineTo(-7.2,-4.4).lineTo(-7.2,-7.4).lineTo(-3,-9.7).lineTo(-3,-4.4).lineTo(0.4,-4.4).lineTo(0.4,-0.6).lineTo(-3,-0.6).lineTo(-3,3.9).curveTo(-3,5,-2.7,5.3).lineTo(-2.7,5.3).curveTo(-2.3,5.7,-1.7,5.7).lineTo(-1.7,5.7).curveTo(-1.2,5.7,-0.6,5.2).lineTo(-0.6,5.2).lineTo(1.3,8.4).curveTo(0.6,9,-0.4,9.4).lineTo(-0.4,9.4).curveTo(-1.3,9.7,-2.4,9.7).lineTo(-2.4,9.7).curveTo(-3.5,9.7,-4.4,9.4).closePath().moveTo(-20.1,9.1).curveTo(-21.5,8.6,-22.4,7.6).lineTo(-22.4,7.6).curveTo(-23.3,6.6,-23.8,5.3).lineTo(-23.8,5.3).curveTo(-24.3,4,-24.3,2.5).lineTo(-24.3,2.5).curveTo(-24.3,1,-23.8,-0.3).lineTo(-23.8,-0.3).curveTo(-23.2,-1.6,-22.3,-2.6).lineTo(-22.3,-2.6).curveTo(-21.3,-3.6,-20,-4.1).lineTo(-20,-4.1).curveTo(-18.6,-4.7,-17.1,-4.7).lineTo(-17.1,-4.7).curveTo(-15.5,-4.7,-14.2,-4.1).lineTo(-14.2,-4.1).curveTo(-12.9,-3.6,-11.9,-2.7).lineTo(-11.9,-2.7).curveTo(-10.9,-1.7,-10.4,-0.4).lineTo(-10.4,-0.4).curveTo(-9.9,0.9,-9.9,2.4).lineTo(-9.9,2.4).lineTo(-9.9,3.9).lineTo(-20.2,3.9).curveTo(-19.8,5,-19,5.5).lineTo(-19,5.5).curveTo(-18.2,6.1,-17,6.1).lineTo(-17,6.1).curveTo(-16,6.1,-15.3,5.7).lineTo(-15.3,5.7).curveTo(-14.6,5.3,-14.1,4.7).lineTo(-14.1,4.7).lineTo(-10.7,6.6).curveTo(-11.8,8.1,-13.3,8.9).lineTo(-13.3,8.9).curveTo(-14.7,9.7,-17.1,9.7).lineTo(-17.1,9.7).curveTo(-18.7,9.7,-20.1,9.1).closePath().moveTo(-14.1,0.8).curveTo(-14.5,-0.2,-15.2,-0.6).lineTo(-15.2,-0.6).curveTo(-16,-1.1,-17.1,-1.1).lineTo(-17.1,-1.1).curveTo(-18.1,-1.1,-18.9,-0.6).lineTo(-18.9,-0.6).curveTo(-19.7,-0.1,-20.1,0.8).lineTo(-20.1,0.8).lineTo(-14.1,0.8).lineTo(-14.1,0.8).closePath().moveTo(27,9.4).lineTo(27,-4.4).lineTo(31.2,-4.4).lineTo(31.2,-2.4).curveTo(31.7,-3.7,32.8,-4.2).lineTo(32.8,-4.2).curveTo(33.7,-4.7,35.1,-4.7).lineTo(35.1,-4.7).lineTo(36.4,-4.5).lineTo(36.4,-4.5).lineTo(37.4,-4.1).lineTo(35.9,0.2).lineTo(35.1,-0.2).lineTo(35.1,-0.2).curveTo(34.6,-0.4,34,-0.4).lineTo(34,-0.4).curveTo(32.7,-0.4,32,0.3).lineTo(32,0.3).curveTo(31.2,1,31.2,2.6).lineTo(31.2,2.6).lineTo(31.2,9.4).closePath().moveTo(-39.9,9.4).lineTo(-39.9,-9.2).lineTo(-32.4,-9.2).curveTo(-29.1,-9.2,-27.3,-7.9).lineTo(-27.3,-7.9).curveTo(-25.7,-6.6,-25.7,-3.9).lineTo(-25.7,-3.9).curveTo(-25.7,-2.6,-26.1,-1.7).lineTo(-26.1,-1.7).curveTo(-26.7,-0.9,-27.6,-0.2).lineTo(-27.6,-0.2).curveTo(-26.4,0.4,-25.9,1.3).lineTo(-25.9,1.3).curveTo(-25.3,2.3,-25.3,3.8).lineTo(-25.3,3.8).curveTo(-25.3,6.7,-27.2,8.1).lineTo(-27.2,8.1).curveTo(-29.1,9.4,-32.4,9.4).lineTo(-32.4,9.4).closePath().moveTo(-35.5,5.5).lineTo(-32.4,5.5).curveTo(-31,5.5,-30.5,5.1).lineTo(-30.5,5.1).curveTo(-29.8,4.6,-29.8,3.6).lineTo(-29.8,3.6).curveTo(-29.8,2.8,-30.4,2.3).lineTo(-30.4,2.3).curveTo(-30.9,1.9,-32.4,1.9).lineTo(-32.4,1.9).lineTo(-35.5,1.9).closePath().moveTo(-35.5,-2.1).lineTo(-32.2,-2.1).curveTo(-31,-2.1,-30.6,-2.5).lineTo(-30.6,-2.5).curveTo(-30.1,-3,-30.1,-3.8).lineTo(-30.1,-3.8).curveTo(-30.1,-4.5,-30.6,-5).lineTo(-30.6,-5).curveTo(-31.1,-5.4,-32.3,-5.4).lineTo(-32.3,-5.4).lineTo(-35.5,-5.4).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(64).to({graphics:mask_graphics_64,x:54.6458,y:102.1045}).wait(86).to({graphics:mask_graphics_150,x:54.6458,y:102.1045}).wait(1).to({graphics:mask_graphics_151,x:56.655,y:102.1045}).wait(1).to({graphics:mask_graphics_152,x:62.6827,y:102.1045}).wait(1).to({graphics:mask_graphics_153,x:72.729,y:102.1045}).wait(1).to({graphics:mask_graphics_154,x:86.7937,y:102.1045}).wait(1).to({graphics:mask_graphics_155,x:104.8774,y:102.1045}).wait(1).to({graphics:mask_graphics_156,x:126.9792,y:102.1045}).wait(1).to({graphics:mask_graphics_157,x:153.0994,y:102.1045}).wait(1).to({graphics:mask_graphics_158,x:183.2382,y:102.1045}).wait(1).to({graphics:mask_graphics_159,x:217.3959,y:102.1045}).wait(66));

	// better_mask
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFB71B").beginStroke().moveTo(-48.6,22.5).lineTo(-48.6,-9).lineTo(-48.6,-22.5).curveTo(6.3,-22,6.1,-21.9).lineTo(18.4,-9).lineTo(48.7,22.5).closePath();
	this.shape_1.setTransform(-27.6,98.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFB71B").beginStroke().moveTo(-48.7,22.5).lineTo(-48.7,-22.5).curveTo(6.3,-22,6.1,-21.9).lineTo(48.6,22.5).closePath();
	this.shape_2.setTransform(-13.45,98.3);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFB71B").beginStroke().moveTo(-48.6,22.5).lineTo(-48.6,-22.5).curveTo(6.3,-22,6.1,-21.9).lineTo(48.7,22.5).closePath();
	this.shape_3.setTransform(-0.8,98.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFB71B").beginStroke().moveTo(-48.6,22.5).lineTo(-48.6,-22.5).curveTo(6.3,-22,6.1,-21.9).lineTo(48.6,22.5).closePath();
	this.shape_4.setTransform(28.3,98.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("rgba(255,183,27,0.988)").beginStroke().moveTo(-48.6,22.5).lineTo(-48.6,-22.5).curveTo(6.3,-22,6.1,-21.9).lineTo(48.7,22.5).closePath();
	this.shape_5.setTransform(48.9,98.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("rgba(255,183,27,0.949)").beginStroke().moveTo(-48.7,22.5).lineTo(-48.7,-22.5).curveTo(6.3,-22,6.1,-21.9).lineTo(48.6,22.5).closePath();
	this.shape_6.setTransform(54.95,98.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("rgba(255,183,27,0.89)").beginStroke().moveTo(-48.6,22.5).lineTo(-48.6,-22.5).curveTo(6.3,-22,6.1,-21.9).lineTo(48.7,22.5).closePath();
	this.shape_7.setTransform(65,98.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("rgba(255,183,27,0.804)").beginStroke().moveTo(-48.6,22.5).lineTo(-48.6,-22.5).curveTo(6.3,-22,6.1,-21.9).lineTo(48.7,22.5).closePath();
	this.shape_8.setTransform(79.05,98.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("rgba(255,183,27,0.69)").beginStroke().moveTo(-48.6,22.5).lineTo(-48.6,-22.5).curveTo(6.3,-22,6.1,-21.9).lineTo(48.7,22.5).closePath();
	this.shape_9.setTransform(97.15,98.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("rgba(255,183,27,0.557)").beginStroke().moveTo(-48.7,22.5).lineTo(-48.7,-22.5).curveTo(6.3,-22,6.1,-21.9).lineTo(48.7,22.5).closePath();
	this.shape_10.setTransform(119.25,98.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("rgba(255,183,27,0.396)").beginStroke().moveTo(-48.7,22.5).lineTo(-48.7,-22.5).curveTo(6.3,-22,6.1,-21.9).lineTo(48.7,22.5).closePath();
	this.shape_11.setTransform(145.35,98.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("rgba(255,183,27,0.212)").beginStroke().moveTo(-48.7,22.5).lineTo(-48.7,-22.5).curveTo(6.3,-22,6.1,-21.9).lineTo(48.7,22.5).closePath();
	this.shape_12.setTransform(175.5,98.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("rgba(255,183,27,0)").beginStroke().moveTo(-48.6,22.5).lineTo(-48.6,-9).lineTo(-48.6,-22.5).curveTo(6.3,-22,6.1,-21.9).lineTo(18.4,-9).lineTo(48.6,22.5).closePath();
	this.shape_13.setTransform(209.65,98.3);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{x:-27.6}}]},64).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{x:-0.8}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{x:20.1}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1,p:{x:46.9}}]},1).to({state:[{t:this.shape_1,p:{x:46.9}}]},76).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(65).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:10.4},0).to({_off:true},1).wait(2).to({_off:false,x:35},0).wait(1).to({x:40.2},0).wait(1).to({x:43.9},0).wait(1).to({x:46.15},0).to({_off:true},1).wait(151));

	// txt_better
	this.instance_8 = new lib.txt_better();
	this.instance_8.setTransform(56.05,102.55,0.8824,0.8824,0,0,0,81.3,21.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(55).to({_off:false},0).to({alpha:1},9).wait(86).to({x:218.8,alpha:0},9,cjs.Ease.quadIn).wait(66));

	// txt_believeIt
	this.instance_9 = new lib.txt_believeIt();
	this.instance_9.setTransform(205.75,118.9,1,1,0,0,0,81.4,22.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(106).to({_off:false},0).to({alpha:1},9,cjs.Ease.quadOut).wait(37).to({x:368.5,alpha:0},9,cjs.Ease.quadIn).wait(64));

	// image_01
	this.instance_10 = new lib.image_01_1();
	this.instance_10.setTransform(150,819,1,1,0,0,0,150,217);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:383},14,cjs.Ease.quadInOut).wait(32).to({y:823,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(169));

	// image_02
	this.instance_11 = new lib.image_02_1();
	this.instance_11.setTransform(150,819,1,1,0,0,0,150,217);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(51).to({_off:false},0).to({y:383},14,cjs.Ease.quadInOut).wait(32).to({y:823,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(118));

	// image_03
	this.instance_12 = new lib.image_03_1();
	this.instance_12.setTransform(150,819,1,1,0,0,0,150,217);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(101).to({_off:false},0).to({y:383},14,cjs.Ease.quadInOut).wait(32).to({y:823,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(68));

	// background_color
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-150,300).lineTo(-150,-300).lineTo(150,-300).lineTo(150,300).closePath();
	this.shape_14.setTransform(80.0011,300,0.5333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(225));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(59.3,299,383.59999999999997,740);
// library properties:
lib.properties = {
	id: '4CB3FE4512EC4F04AD1A078CE62F288A',
	width: 160,
	height: 600,
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
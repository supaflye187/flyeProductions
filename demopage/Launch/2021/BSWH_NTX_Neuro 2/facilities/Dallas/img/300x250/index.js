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
p.nominalBounds = new cjs.Rectangle(0,0,300,175);


(lib.image_02 = function() {
	this.initialize(img.image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,175);


(lib.image_03 = function() {
	this.initialize(img.image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,175);// helper functions:

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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(60.3,7).curveTo(59.7,6.5,59.7,5.6).curveTo(59.7,4.7,60.3,4.2).curveTo(60.8,3.6,61.6,3.6).curveTo(62.6,3.6,63.2,4.2).curveTo(63.7,4.7,63.7,5.6).curveTo(63.7,6.5,63.2,7).curveTo(62.6,7.6,61.6,7.6).curveTo(60.8,7.6,60.3,7).closePath().moveTo(9.9,7).curveTo(8.5,6.4,7.5,5.3).curveTo(6.4,4.3,5.9,2.9).curveTo(5.3,1.5,5.4,-0).curveTo(5.4,-1.6,5.9,-3).curveTo(6.5,-4.4,7.5,-5.4).curveTo(8.5,-6.4,9.9,-7).curveTo(11.3,-7.6,13,-7.6).curveTo(15.2,-7.6,16.7,-6.8).curveTo(18.2,-6,19.3,-4.6).lineTo(16.3,-2.5).curveTo(15.8,-3.4,14.9,-3.8).curveTo(14.1,-4.3,13,-4.3).curveTo(12.1,-4.3,11.4,-3.9).curveTo(10.6,-3.6,10.1,-3).curveTo(9.6,-2.5,9.2,-1.7).curveTo(8.9,-0.9,8.9,-0).curveTo(8.9,0.9,9.2,1.7).curveTo(9.5,2.5,10.1,3).curveTo(10.6,3.6,11.4,3.9).curveTo(12.1,4.2,13,4.2).curveTo(14.3,4.2,15.2,3.6).curveTo(16.1,3,16.5,1.9).lineTo(12.3,1.9).lineTo(12.3,-1.4).lineTo(20.3,-1.4).lineTo(20.3,0.3).curveTo(20.3,1.8,19.8,3.1).curveTo(19.3,4.4,18.3,5.4).curveTo(17.4,6.4,16,7).curveTo(14.7,7.6,13.1,7.6).curveTo(11.3,7.6,9.9,7).closePath().moveTo(-51.7,7).curveTo(-53.1,6.4,-54.2,5.4).curveTo(-55.1,4.3,-55.7,2.9).curveTo(-56.3,1.6,-56.3,-0).curveTo(-56.3,-1.6,-55.7,-3).curveTo(-55.1,-4.3,-54.2,-5.4).curveTo(-53.1,-6.4,-51.7,-7).curveTo(-50.3,-7.6,-48.8,-7.6).curveTo(-47.1,-7.6,-45.8,-7).curveTo(-44.5,-6.4,-43.4,-5.4).curveTo(-42.3,-4.3,-41.8,-3).curveTo(-41.2,-1.6,-41.2,-0).curveTo(-41.2,1.6,-41.8,2.9).curveTo(-42.3,4.3,-43.4,5.4).curveTo(-44.4,6.4,-45.8,7).curveTo(-47.1,7.6,-48.8,7.6).curveTo(-50.3,7.6,-51.7,7).closePath().moveTo(-50.3,-3.8).curveTo(-51.1,-3.5,-51.6,-2.9).curveTo(-52.1,-2.4,-52.5,-1.6).curveTo(-52.8,-0.8,-52.7,-0).curveTo(-52.8,0.8,-52.5,1.6).curveTo(-52.1,2.3,-51.7,2.9).curveTo(-51.1,3.5,-50.3,3.8).curveTo(-49.6,4.1,-48.8,4.1).curveTo(-47.9,4.1,-47.2,3.8).curveTo(-46.4,3.5,-45.8,2.9).curveTo(-45.3,2.3,-45,1.6).curveTo(-44.7,0.8,-44.7,-0).curveTo(-44.7,-0.8,-45,-1.6).curveTo(-45.3,-2.4,-45.8,-2.9).curveTo(-46.5,-3.5,-47.2,-3.8).curveTo(-47.9,-4.1,-48.8,-4.1).curveTo(-49.6,-4.1,-50.3,-3.8).closePath().moveTo(51.6,7.4).lineTo(45.8,-1.9).lineTo(45.8,7.4).lineTo(42.5,7.4).lineTo(42.5,-7.4).lineTo(46.1,-7.4).lineTo(51.6,1.5).lineTo(51.6,-7.4).lineTo(55.1,-7.4).lineTo(55.1,7.4).closePath().moveTo(36.4,7.4).lineTo(36.4,-7.4).lineTo(40,-7.4).lineTo(40,7.4).closePath().moveTo(30.9,7.4).lineTo(30.1,5.2).lineTo(24.6,5.2).lineTo(23.7,7.4).lineTo(20.2,7.4).lineTo(25.6,-7.4).lineTo(29.1,-7.4).lineTo(34.6,7.4).closePath().moveTo(29.1,2.1).lineTo(27.3,-2.9).lineTo(25.6,2.1).lineTo(29.1,2.1).closePath().moveTo(1.1,7.4).lineTo(0.3,5.2).lineTo(-5.3,5.2).lineTo(-6.1,7.4).lineTo(-9.6,7.4).lineTo(-4.2,-7.4).lineTo(-0.8,-7.4).lineTo(4.7,7.4).closePath().moveTo(-0.7,2.1).lineTo(-2.5,-2.9).lineTo(-4.2,2.1).lineTo(-0.7,2.1).closePath().moveTo(-25.1,7.4).lineTo(-25.1,-7.4).lineTo(-14.9,-7.4).lineTo(-14.9,-4.1).lineTo(-21.6,-4.1).lineTo(-21.6,-1.7).lineTo(-14.9,-1.7).lineTo(-14.9,1.6).lineTo(-21.6,1.6).lineTo(-21.6,4.1).lineTo(-14.9,4.1).lineTo(-14.9,7.4).closePath().moveTo(-35.5,7.4).lineTo(-40.9,-7.4).lineTo(-37.2,-7.4).lineTo(-33.7,2.6).lineTo(-30.2,-7.4).lineTo(-26.6,-7.4).lineTo(-32,7.4).closePath().moveTo(-67,7.4).lineTo(-67,-7.4).lineTo(-63.4,-7.4).lineTo(-63.4,4).lineTo(-57,4).lineTo(-57,7.4).closePath().moveTo(60.3,2.7).lineTo(60.3,2.6).curveTo(60.3,1.4,60.5,0.7).curveTo(60.8,-0.1,61.1,-0.6).curveTo(61.5,-1,61.9,-1.3).lineTo(63.3,-2.4).curveTo(63.5,-2.7,63.5,-3.2).curveTo(63.5,-3.8,63.1,-4.2).curveTo(62.7,-4.6,61.9,-4.6).curveTo(61.2,-4.6,60.7,-4.2).curveTo(60.3,-3.8,60.1,-3.2).lineTo(57.1,-4.6).curveTo(57.7,-6,58.9,-6.8).curveTo(60.1,-7.6,62.2,-7.6).curveTo(63.2,-7.6,64.1,-7.3).curveTo(65,-6.9,65.7,-6.4).curveTo(66.3,-5.8,66.6,-5).curveTo(66.9,-4.2,67,-3.3).curveTo(66.9,-2.3,66.7,-1.7).curveTo(66.4,-1.1,66,-0.8).curveTo(65.6,-0.3,65.1,-0.1).lineTo(64.1,0.5).curveTo(63.7,0.9,63.4,1.3).curveTo(63.2,1.8,63.2,2.6).lineTo(63.2,2.7).closePath();
	this.shape.setTransform(70.85,-1.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_loveAgain, new cjs.Rectangle(0,-8.7,164.8,44.3), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(74.1,7.2).curveTo(73.2,6.9,72.4,6.5).curveTo(71.6,6.2,71.1,5.6).curveTo(70.4,5.1,69.9,4.5).lineTo(72.8,2.1).curveTo(73.5,3.1,74.3,3.6).curveTo(75.2,4.2,76.4,4.2).curveTo(77.2,4.2,77.7,3.8).curveTo(78.2,3.4,78.2,2.8).curveTo(78.2,2.5,78,2.3).lineTo(77.5,1.8).lineTo(76.6,1.5).lineTo(73.7,0.8).curveTo(72.8,0.5,72.2,0).curveTo(71.5,-0.4,71.1,-1.2).curveTo(70.7,-1.9,70.7,-3).curveTo(70.7,-3.9,71.1,-4.7).curveTo(71.5,-5.5,72.2,-6.1).curveTo(72.9,-6.7,73.8,-7).curveTo(74.8,-7.4,75.9,-7.4).curveTo(76.9,-7.4,77.7,-7.2).curveTo(78.5,-7,79.2,-6.7).lineTo(80.5,-5.9).lineTo(81.6,-4.8).lineTo(78.9,-2.7).curveTo(78.3,-3.5,77.7,-3.9).curveTo(77,-4.4,75.8,-4.4).curveTo(75,-4.4,74.6,-4).curveTo(74.2,-3.6,74.1,-3.1).curveTo(74.1,-2.8,74.3,-2.6).lineTo(74.9,-2.2).lineTo(78.7,-1.2).curveTo(79.5,-0.9,80.2,-0.5).curveTo(80.8,0,81.3,0.8).curveTo(81.7,1.5,81.7,2.7).curveTo(81.7,3.7,81.3,4.5).curveTo(80.9,5.4,80.2,6).curveTo(79.4,6.7,78.5,7).curveTo(77.4,7.4,76.2,7.4).curveTo(75.1,7.4,74.1,7.2).closePath().moveTo(15.5,7.2).curveTo(14.6,6.9,13.8,6.5).curveTo(13,6.2,12.5,5.6).curveTo(11.8,5.1,11.3,4.5).lineTo(14.2,2.1).curveTo(14.9,3.1,15.7,3.6).curveTo(16.6,4.2,17.8,4.2).curveTo(18.7,4.2,19.1,3.8).curveTo(19.6,3.4,19.5,2.8).curveTo(19.5,2.5,19.4,2.3).lineTo(18.9,1.8).lineTo(18,1.5).lineTo(15,0.8).curveTo(14.2,0.5,13.6,0).curveTo(12.9,-0.4,12.5,-1.2).curveTo(12.1,-1.9,12.1,-3).curveTo(12.1,-3.9,12.5,-4.7).curveTo(12.9,-5.5,13.6,-6.1).curveTo(14.2,-6.7,15.2,-7).curveTo(16.2,-7.4,17.3,-7.4).curveTo(18.3,-7.4,19.1,-7.2).curveTo(20,-7,20.6,-6.7).lineTo(21.9,-5.9).lineTo(23,-4.8).lineTo(20.3,-2.7).curveTo(19.7,-3.5,19.1,-3.9).curveTo(18.4,-4.4,17.3,-4.4).curveTo(16.4,-4.4,16,-4).curveTo(15.6,-3.6,15.5,-3.1).curveTo(15.5,-2.8,15.7,-2.6).lineTo(16.4,-2.2).lineTo(20.1,-1.2).curveTo(20.9,-0.9,21.6,-0.5).curveTo(22.2,0,22.7,0.8).curveTo(23.1,1.5,23.1,2.7).curveTo(23.1,3.7,22.7,4.5).curveTo(22.3,5.4,21.6,6).curveTo(20.9,6.7,19.9,7).curveTo(18.8,7.4,17.6,7.4).curveTo(16.5,7.4,15.5,7.2).closePath().moveTo(59,7.2).lineTo(59,-7.1).lineTo(68.8,-7.1).lineTo(68.8,-4).lineTo(62.4,-4).lineTo(62.4,-1.6).lineTo(68.8,-1.6).lineTo(68.8,1.6).lineTo(62.4,1.6).lineTo(62.4,4).lineTo(68.8,4).lineTo(68.8,7.2).closePath().moveTo(53.4,7.2).lineTo(47.8,-1.8).lineTo(47.8,7.2).lineTo(44.5,7.2).lineTo(44.5,-7.1).lineTo(48,-7.1).lineTo(53.4,1.4).lineTo(53.4,-7.1).lineTo(56.7,-7.1).lineTo(56.7,7.2).closePath().moveTo(38.7,7.2).lineTo(38.7,-7.1).lineTo(42.2,-7.1).lineTo(42.2,7.2).closePath().moveTo(25.4,7.2).lineTo(25.4,-7.1).lineTo(31.1,-7.1).curveTo(32.4,-7.1,33.5,-6.7).curveTo(34.4,-6.3,35.2,-5.6).curveTo(35.9,-4.8,36.3,-3.9).curveTo(36.6,-2.9,36.6,-1.8).curveTo(36.6,-0.7,36.3,0.3).curveTo(35.9,1.2,35.2,2).curveTo(34.5,2.7,33.5,3.1).curveTo(32.4,3.6,31.1,3.6).lineTo(28.9,3.6).lineTo(28.9,7.2).closePath().moveTo(28.9,0.4).lineTo(31,0.4).curveTo(31.9,0.4,32.6,-0.2).curveTo(33.3,-0.8,33.3,-1.8).curveTo(33.3,-2.8,32.6,-3.4).curveTo(31.9,-4,31,-4).lineTo(28.9,-4).closePath().moveTo(-1.3,7.2).lineTo(-1.3,1.2).lineTo(-6,-7.1).lineTo(-2.2,-7.1).lineTo(0.5,-2).lineTo(3.2,-7.1).lineTo(6.9,-7.1).lineTo(2.2,1.2).lineTo(2.2,7.2).closePath().moveTo(-10.5,7.2).lineTo(-10.5,1.6).lineTo(-15.1,1.6).lineTo(-15.1,7.2).lineTo(-18.6,7.2).lineTo(-18.6,-7.1).lineTo(-15.1,-7.1).lineTo(-15.1,-1.7).lineTo(-10.5,-1.7).lineTo(-10.5,-7.1).lineTo(-7,-7.1).lineTo(-7,7.2).closePath().moveTo(-27.7,7.2).lineTo(-27.7,-4).lineTo(-31.5,-4).lineTo(-31.5,-7.1).lineTo(-20.5,-7.1).lineTo(-20.5,-4).lineTo(-24.3,-4).lineTo(-24.3,7.2).closePath().moveTo(-40.6,7.2).lineTo(-40.6,-7.1).lineTo(-37.3,-7.1).lineTo(-37.3,3.9).lineTo(-31,3.9).lineTo(-31,7.2).closePath().moveTo(-45.3,7.2).lineTo(-46.1,5).lineTo(-51.5,5).lineTo(-52.3,7.2).lineTo(-55.7,7.2).lineTo(-50.4,-7.1).lineTo(-47.2,-7.1).lineTo(-41.9,7.2).closePath().moveTo(-47.1,2.1).lineTo(-48.8,-2.8).lineTo(-50.5,2.1).lineTo(-47.1,2.1).closePath().moveTo(-67.2,7.2).lineTo(-67.2,-7.1).lineTo(-57.4,-7.1).lineTo(-57.4,-4).lineTo(-63.9,-4).lineTo(-63.9,-1.6).lineTo(-57.4,-1.6).lineTo(-57.4,1.6).lineTo(-63.9,1.6).lineTo(-63.9,4).lineTo(-57.4,4).lineTo(-57.4,7.2).closePath().moveTo(-73.6,7.2).lineTo(-73.6,1.6).lineTo(-78.3,1.6).lineTo(-78.3,7.2).lineTo(-81.7,7.2).lineTo(-81.7,-7.1).lineTo(-78.3,-7.1).lineTo(-78.3,-1.7).lineTo(-73.6,-1.7).lineTo(-73.6,-7.1).lineTo(-70.1,-7.1).lineTo(-70.1,7.2).closePath();
	this.shape.setTransform(98.7523,4.5634,1.0306,1.0306);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_healthySpines, new cjs.Rectangle(0,-3,206,38.6), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(69.4,6.8).curveTo(68.8,6.3,68.8,5.4).curveTo(68.8,4.5,69.4,4).curveTo(69.9,3.4,70.8,3.4).curveTo(71.6,3.4,72.2,4).curveTo(72.7,4.5,72.7,5.4).curveTo(72.7,6.3,72.2,6.8).curveTo(71.6,7.3,70.8,7.4).curveTo(69.9,7.3,69.4,6.8).closePath().moveTo(55.8,7.1).lineTo(55.8,-7.4).lineTo(65.9,-7.4).lineTo(65.9,-4.2).lineTo(59.3,-4.2).lineTo(59.3,-1.7).lineTo(65.9,-1.7).lineTo(65.9,1.4).lineTo(59.3,1.4).lineTo(59.3,3.9).lineTo(65.9,3.9).lineTo(65.9,7.1).closePath().moveTo(49.8,7.1).lineTo(47.8,2.8).lineTo(45,2.8).lineTo(45,7.1).lineTo(41.6,7.1).lineTo(41.6,-7.4).lineTo(47.8,-7.4).curveTo(49.1,-7.4,50.2,-7).curveTo(51.2,-6.6,51.9,-5.9).curveTo(52.6,-5.2,53,-4.3).curveTo(53.3,-3.4,53.3,-2.4).curveTo(53.3,-1,52.7,0.2).curveTo(52,1.2,50.9,1.9).lineTo(53.7,7.1).closePath().moveTo(45,-0.4).lineTo(47.6,-0.4).curveTo(48.7,-0.3,49.2,-1).curveTo(49.8,-1.5,49.8,-2.3).curveTo(49.8,-3.2,49.2,-3.7).curveTo(48.7,-4.2,47.6,-4.2).lineTo(45,-4.2).closePath().moveTo(28.8,7.1).lineTo(28.8,-7.4).lineTo(38.9,-7.4).lineTo(38.9,-4.2).lineTo(32.3,-4.2).lineTo(32.3,-1.7).lineTo(38.9,-1.7).lineTo(38.9,1.4).lineTo(32.3,1.4).lineTo(32.3,3.9).lineTo(38.9,3.9).lineTo(38.9,7.1).closePath().moveTo(22.4,7.1).lineTo(22.4,1.5).lineTo(17.6,1.5).lineTo(17.6,7.1).lineTo(14.1,7.1).lineTo(14.1,-7.4).lineTo(17.6,-7.4).lineTo(17.6,-1.9).lineTo(22.4,-1.9).lineTo(22.4,-7.4).lineTo(25.8,-7.4).lineTo(25.8,7.1).closePath().moveTo(4.4,7.1).lineTo(-1.3,-2).lineTo(-1.3,7.1).lineTo(-4.6,7.1).lineTo(-4.6,-7.4).lineTo(-1,-7.4).lineTo(4.5,1.3).lineTo(4.5,-7.4).lineTo(7.8,-7.4).lineTo(7.8,7.1).closePath().moveTo(-16.9,7.1).lineTo(-16.9,-7.4).lineTo(-6.9,-7.4).lineTo(-6.9,-4.2).lineTo(-13.5,-4.2).lineTo(-13.5,-1.7).lineTo(-6.9,-1.7).lineTo(-6.9,1.4).lineTo(-13.5,1.4).lineTo(-13.5,3.9).lineTo(-6.9,3.9).lineTo(-6.9,7.1).closePath().moveTo(-30.4,7.1).lineTo(-30.4,-7.4).lineTo(-24.6,-7.4).curveTo(-23.3,-7.4,-22.3,-6.9).curveTo(-21.3,-6.6,-20.5,-5.8).curveTo(-19.8,-5.1,-19.4,-4.1).curveTo(-19,-3.1,-19,-2).curveTo(-19,-0.8,-19.4,0.2).curveTo(-19.8,1.1,-20.5,1.9).curveTo(-21.3,2.7,-22.3,3.1).curveTo(-23.3,3.5,-24.6,3.5).lineTo(-26.9,3.5).lineTo(-26.9,7.1).closePath().moveTo(-26.9,0.3).lineTo(-24.8,0.3).curveTo(-23.8,0.2,-23.2,-0.3).curveTo(-22.5,-0.9,-22.5,-2).curveTo(-22.5,-3,-23.2,-3.6).curveTo(-23.8,-4.2,-24.8,-4.2).lineTo(-26.9,-4.2).closePath().moveTo(-43.9,7.1).lineTo(-43.9,-7.4).lineTo(-38.1,-7.4).curveTo(-36.8,-7.4,-35.8,-6.9).curveTo(-34.7,-6.6,-34,-5.8).curveTo(-33.3,-5.1,-32.9,-4.1).curveTo(-32.5,-3.1,-32.5,-2).curveTo(-32.5,-0.8,-32.9,0.2).curveTo(-33.3,1.1,-34,1.9).curveTo(-34.7,2.7,-35.8,3.1).curveTo(-36.8,3.5,-38.1,3.5).lineTo(-40.4,3.5).lineTo(-40.4,7.1).closePath().moveTo(-40.4,0.3).lineTo(-38.3,0.3).curveTo(-37.3,0.2,-36.7,-0.3).curveTo(-36,-0.9,-36,-2).curveTo(-36,-3,-36.7,-3.6).curveTo(-37.3,-4.2,-38.3,-4.2).lineTo(-40.4,-4.2).closePath().moveTo(-48.9,7.1).lineTo(-49.7,5).lineTo(-55.2,5).lineTo(-56,7.1).lineTo(-59.5,7.1).lineTo(-54.1,-7.4).lineTo(-50.8,-7.4).lineTo(-45.4,7.1).closePath().moveTo(-50.7,2).lineTo(-52.4,-3).lineTo(-54.2,2).lineTo(-50.7,2).closePath().moveTo(-64.4,7.1).lineTo(-64.4,1.5).lineTo(-69.2,1.5).lineTo(-69.2,7.1).lineTo(-72.7,7.1).lineTo(-72.7,-7.4).lineTo(-69.2,-7.4).lineTo(-69.2,-1.9).lineTo(-64.4,-1.9).lineTo(-64.4,-7.4).lineTo(-60.9,-7.4).lineTo(-60.9,7.1).closePath();
	this.shape.setTransform(87.075,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_happenHere, new cjs.Rectangle(0,-8.2,179.8,43.8), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(63,7.2).curveTo(61.9,6.8,61.1,6).curveTo(60.3,5.3,59.9,4.2).curveTo(59.5,3,59.5,1.6).lineTo(59.5,-7.4).lineTo(63.1,-7.4).lineTo(63.1,1.6).curveTo(63.1,2.8,63.8,3.5).curveTo(64.3,4.1,65.5,4.2).curveTo(66.5,4.1,67.2,3.5).curveTo(67.9,2.8,67.9,1.6).lineTo(67.9,-7.4).lineTo(71.4,-7.4).lineTo(71.4,1.6).curveTo(71.4,3,71,4.2).curveTo(70.6,5.3,69.9,6).curveTo(69,6.8,68,7.2).curveTo(66.8,7.6,65.5,7.6).curveTo(64.1,7.6,63,7.2).closePath().moveTo(46.8,7).curveTo(45.4,6.5,44.4,5.4).curveTo(43.5,4.4,42.9,3).curveTo(42.2,1.6,42.2,0).curveTo(42.2,-1.6,42.9,-3).curveTo(43.5,-4.3,44.4,-5.4).curveTo(45.4,-6.4,46.8,-7).curveTo(48.3,-7.6,49.8,-7.6).curveTo(51.4,-7.6,52.8,-7).curveTo(54.1,-6.4,55.2,-5.4).curveTo(56.3,-4.3,56.8,-3).curveTo(57.5,-1.6,57.5,0).curveTo(57.5,1.6,56.8,3).curveTo(56.3,4.4,55.2,5.4).curveTo(54.2,6.5,52.8,7).curveTo(51.4,7.6,49.8,7.6).curveTo(48.3,7.6,46.8,7).closePath().moveTo(48.3,-3.9).curveTo(47.5,-3.5,47,-2.9).curveTo(46.5,-2.4,46.1,-1.6).curveTo(45.8,-0.8,45.8,0).curveTo(45.8,0.8,46.1,1.6).curveTo(46.5,2.4,46.9,2.9).curveTo(47.5,3.5,48.2,3.8).curveTo(49,4.1,49.8,4.1).curveTo(50.7,4.1,51.4,3.8).curveTo(52.2,3.5,52.8,2.9).curveTo(53.3,2.4,53.6,1.6).curveTo(53.9,0.8,53.9,0).curveTo(53.9,-0.8,53.6,-1.6).curveTo(53.3,-2.4,52.8,-2.9).curveTo(52.1,-3.5,51.4,-3.9).curveTo(50.7,-4.1,49.8,-4.1).curveTo(48.9,-4.1,48.3,-3.9).closePath().moveTo(-52.1,7).curveTo(-53.5,6.5,-54.6,5.4).curveTo(-55.5,4.4,-56.1,3).curveTo(-56.8,1.6,-56.8,0).curveTo(-56.8,-1.6,-56.1,-3).curveTo(-55.5,-4.3,-54.6,-5.4).curveTo(-53.5,-6.4,-52.1,-7).curveTo(-50.7,-7.6,-49.2,-7.6).curveTo(-47.5,-7.6,-46.2,-7).curveTo(-44.8,-6.4,-43.8,-5.4).curveTo(-42.7,-4.3,-42.2,-3).curveTo(-41.5,-1.6,-41.5,0).curveTo(-41.5,1.6,-42.2,3).curveTo(-42.7,4.4,-43.8,5.4).curveTo(-44.8,6.5,-46.1,7).curveTo(-47.5,7.6,-49.2,7.6).curveTo(-50.7,7.6,-52.1,7).closePath().moveTo(-50.7,-3.9).curveTo(-51.5,-3.5,-52,-2.9).curveTo(-52.5,-2.4,-52.9,-1.6).curveTo(-53.1,-0.8,-53.2,0).curveTo(-53.1,0.8,-52.9,1.6).curveTo(-52.5,2.4,-52.1,2.9).curveTo(-51.5,3.5,-50.7,3.8).curveTo(-50,4.1,-49.2,4.1).curveTo(-48.3,4.1,-47.5,3.8).curveTo(-46.8,3.5,-46.2,2.9).curveTo(-45.7,2.4,-45.4,1.6).curveTo(-45.1,0.8,-45.1,0).curveTo(-45.1,-0.8,-45.4,-1.6).curveTo(-45.7,-2.4,-46.2,-2.9).curveTo(-46.9,-3.5,-47.6,-3.9).curveTo(-48.2,-4.1,-49.2,-4.1).curveTo(-50,-4.1,-50.7,-3.9).closePath().moveTo(33.8,7.4).lineTo(33.8,1.2).lineTo(28.9,-7.4).lineTo(32.7,-7.4).lineTo(35.6,-2.1).lineTo(38.4,-7.4).lineTo(42.2,-7.4).lineTo(37.4,1.3).lineTo(37.4,7.4).closePath().moveTo(16.8,7.4).lineTo(16.8,-4.1).lineTo(12.7,-4.1).lineTo(12.7,-7.4).lineTo(24.2,-7.4).lineTo(24.2,-4.1).lineTo(20.2,-4.1).lineTo(20.2,7.4).closePath().moveTo(9.1,7.4).lineTo(8.3,5.2).lineTo(2.7,5.2).lineTo(1.9,7.4).lineTo(-1.6,7.4).lineTo(3.8,-7.4).lineTo(7.2,-7.4).lineTo(12.7,7.4).closePath().moveTo(7.3,2.2).lineTo(5.5,-2.9).lineTo(3.8,2.2).lineTo(7.3,2.2).closePath().moveTo(-6,7.4).lineTo(-6,1.7).lineTo(-10.9,1.7).lineTo(-10.9,7.4).lineTo(-14.5,7.4).lineTo(-14.5,-7.4).lineTo(-10.9,-7.4).lineTo(-10.9,-1.8).lineTo(-6,-1.8).lineTo(-6,-7.4).lineTo(-2.5,-7.4).lineTo(-2.5,7.4).closePath().moveTo(-23.8,7.4).lineTo(-26.5,-2).lineTo(-29,7.4).lineTo(-32.6,7.4).lineTo(-36.7,-7.4).lineTo(-33.1,-7.4).lineTo(-30.7,1.7).lineTo(-28.1,-7.4).lineTo(-24.7,-7.4).lineTo(-22.2,1.7).lineTo(-19.9,-7.4).lineTo(-16.3,-7.4).lineTo(-20.5,7.4).closePath().moveTo(-71.4,7.4).lineTo(-71.4,-7.4).lineTo(-66.2,-7.4).curveTo(-64.5,-7.4,-63.1,-6.8).curveTo(-61.7,-6.3,-60.6,-5.3).curveTo(-59.6,-4.3,-59.1,-2.9).curveTo(-58.4,-1.6,-58.5,0).curveTo(-58.4,1.6,-59.1,3).curveTo(-59.7,4.4,-60.6,5.3).curveTo(-61.7,6.2,-63.1,6.9).curveTo(-64.5,7.4,-66.1,7.4).closePath().moveTo(-67.9,4.1).lineTo(-66.3,4.1).curveTo(-65.3,4.1,-64.6,3.8).curveTo(-63.7,3.5,-63.2,3).curveTo(-62.6,2.3,-62.3,1.6).curveTo(-62.1,0.8,-62.1,0).curveTo(-62.1,-0.9,-62.3,-1.7).curveTo(-62.6,-2.3,-63.1,-2.9).curveTo(-63.7,-3.5,-64.5,-3.8).curveTo(-65.3,-4.2,-66.4,-4.1).lineTo(-67.9,-4.1).closePath();
	this.shape.setTransform(73.95,4.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_doWhatYou, new cjs.Rectangle(0,-2.8,175,38.4), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(42.6,10.2).curveTo(41.7,9.4,41.8,8.2).curveTo(41.7,6.9,42.6,6.1).curveTo(43.3,5.3,44.6,5.3).curveTo(45.9,5.3,46.6,6.1).curveTo(47.4,6.9,47.4,8.2).curveTo(47.4,9.4,46.6,10.2).curveTo(45.9,11,44.6,11).curveTo(43.3,11,42.6,10.2).closePath().moveTo(16.5,10.3).curveTo(14.9,9.7,13.9,8.6).curveTo(12.9,7.5,12.2,6).curveTo(11.7,4.6,11.7,2.8).curveTo(11.7,1.2,12.3,-0.3).curveTo(12.9,-1.8,14,-2.9).curveTo(15.2,-4,16.6,-4.7).curveTo(18.1,-5.3,19.9,-5.3).curveTo(21.7,-5.3,23.2,-4.7).curveTo(24.7,-4.1,25.8,-3).curveTo(26.9,-1.9,27.4,-0.4).curveTo(28.1,1,28.1,2.8).lineTo(28.1,4.5).lineTo(16.4,4.5).curveTo(16.8,5.7,17.7,6.3).curveTo(18.6,6.9,20,6.9).curveTo(21.1,6.9,21.9,6.5).curveTo(22.8,6,23.2,5.3).lineTo(27.2,7.5).curveTo(25.9,9.2,24.3,10.1).curveTo(22.6,11,20,11).curveTo(18.1,11,16.5,10.3).closePath().moveTo(23.2,0.9).curveTo(22.8,-0.2,22,-0.7).curveTo(21.2,-1.2,20,-1.2).curveTo(18.8,-1.2,17.9,-0.7).curveTo(17,-0.1,16.5,0.9).lineTo(23.2,0.9).lineTo(23.2,0.9).closePath().moveTo(5.2,10.6).curveTo(4.2,10.3,3.5,9.6).curveTo(2.8,8.8,2.4,7.7).curveTo(2.1,6.5,2.1,4.7).lineTo(2.1,-0.7).lineTo(-0.6,-0.7).lineTo(-0.6,-5).lineTo(2.1,-5).lineTo(2.1,-8.4).lineTo(6.8,-11).lineTo(6.8,-5).lineTo(10.7,-5).lineTo(10.7,-0.7).lineTo(6.8,-0.7).lineTo(6.8,4.4).curveTo(6.9,5.6,7.2,6).curveTo(7.6,6.4,8.3,6.4).curveTo(8.9,6.4,9.5,5.9).lineTo(11.7,9.6).curveTo(10.8,10.2,9.8,10.6).curveTo(8.7,11,7.5,11).curveTo(6.3,11,5.2,10.6).closePath().moveTo(-6.9,10.6).curveTo(-7.9,10.3,-8.7,9.6).curveTo(-9.4,8.8,-9.7,7.7).curveTo(-10.1,6.5,-10.1,4.7).lineTo(-10.1,-0.7).lineTo(-12.8,-0.7).lineTo(-12.8,-5).lineTo(-10.1,-5).lineTo(-10.1,-8.4).lineTo(-5.3,-11).lineTo(-5.3,-5).lineTo(-1.5,-5).lineTo(-1.5,-0.7).lineTo(-5.3,-0.7).lineTo(-5.3,4.4).curveTo(-5.3,5.6,-5,6).curveTo(-4.6,6.4,-3.9,6.4).curveTo(-3.3,6.4,-2.6,5.9).lineTo(-0.5,9.6).curveTo(-1.3,10.2,-2.3,10.6).curveTo(-3.4,11,-4.6,11).curveTo(-5.9,11,-6.9,10.6).closePath().moveTo(-25,10.3).curveTo(-26.6,9.7,-27.6,8.6).curveTo(-28.7,7.5,-29.3,6).curveTo(-29.9,4.6,-29.9,2.8).curveTo(-29.8,1.2,-29.3,-0.3).curveTo(-28.6,-1.8,-27.5,-2.9).curveTo(-26.4,-4,-24.9,-4.7).curveTo(-23.4,-5.3,-21.6,-5.3).curveTo(-19.9,-5.3,-18.4,-4.7).curveTo(-16.9,-4.1,-15.8,-3).curveTo(-14.6,-1.9,-14.1,-0.4).curveTo(-13.5,1,-13.5,2.8).lineTo(-13.5,4.5).lineTo(-25.1,4.5).curveTo(-24.8,5.7,-23.8,6.3).curveTo(-22.9,6.9,-21.5,6.9).curveTo(-20.4,6.9,-19.6,6.5).curveTo(-18.8,6,-18.3,5.3).lineTo(-14.3,7.5).curveTo(-15.6,9.2,-17.3,10.1).curveTo(-18.9,11,-21.6,11).curveTo(-23.5,11,-25,10.3).closePath().moveTo(-18.3,0.9).curveTo(-18.7,-0.2,-19.5,-0.7).curveTo(-20.4,-1.2,-21.6,-1.2).curveTo(-22.8,-1.2,-23.7,-0.7).curveTo(-24.5,-0.1,-25,0.9).lineTo(-18.3,0.9).lineTo(-18.3,0.9).closePath().moveTo(29.3,10.7).lineTo(29.3,-5).lineTo(34.2,-5).lineTo(34.2,-2.8).curveTo(34.7,-4.2,35.9,-4.7).curveTo(37,-5.3,38.5,-5.3).curveTo(39.3,-5.3,40,-5.1).lineTo(41.2,-4.7).lineTo(39.5,0.2).curveTo(39.2,-0.1,38.5,-0.3).curveTo(38,-0.5,37.3,-0.5).curveTo(35.8,-0.5,35,0.3).curveTo(34.1,1.1,34.2,3).lineTo(34.2,10.7).closePath().moveTo(-47.4,10.7).lineTo(-47.4,-10.5).lineTo(-39.1,-10.5).curveTo(-35.2,-10.5,-33.2,-9).curveTo(-31.4,-7.4,-31.3,-4.4).curveTo(-31.4,-3,-31.9,-2).curveTo(-32.5,-1,-33.5,-0.3).curveTo(-32.2,0.4,-31.6,1.5).curveTo(-31,2.6,-31,4.3).curveTo(-30.9,7.6,-33.1,9.1).curveTo(-35.2,10.7,-39.1,10.7).closePath().moveTo(-42.5,6.2).lineTo(-39,6.2).curveTo(-37.5,6.2,-36.8,5.7).curveTo(-36.1,5.2,-36.1,4.1).curveTo(-36.1,3.1,-36.7,2.6).curveTo(-37.4,2.1,-39,2.1).lineTo(-42.5,2.1).closePath().moveTo(-42.5,-2.3).lineTo(-38.8,-2.3).curveTo(-37.4,-2.3,-36.9,-2.9).curveTo(-36.3,-3.4,-36.4,-4.3).curveTo(-36.4,-5.1,-36.9,-5.6).curveTo(-37.5,-6.1,-38.9,-6.1).lineTo(-42.5,-6.1).closePath();
	this.shape.setTransform(82,20.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(62.5,11.5).curveTo(61.6,10.7,61.7,9.4).curveTo(61.7,8,62.5,7.2).curveTo(63.4,6.3,64.7,6.3).curveTo(66,6.3,66.9,7.2).curveTo(67.7,8,67.7,9.4).curveTo(67.7,10.7,66.9,11.5).curveTo(66,12.4,64.7,12.4).curveTo(63.3,12.4,62.5,11.5).closePath().moveTo(54.7,12).curveTo(53.6,11.7,52.8,10.9).curveTo(52.1,10.1,51.7,8.8).curveTo(51.3,7.6,51.3,5.7).lineTo(51.3,-0.1).lineTo(48.4,-0.1).lineTo(48.4,-4.7).lineTo(51.3,-4.7).lineTo(51.3,-8.3).lineTo(56.4,-11.2).lineTo(56.4,-4.7).lineTo(60.6,-4.7).lineTo(60.6,-0.1).lineTo(56.4,-0.1).lineTo(56.4,5.4).curveTo(56.5,6.7,56.8,7.1).curveTo(57.2,7.5,57.9,7.5).curveTo(58.7,7.5,59.2,6.9).lineTo(61.6,10.9).curveTo(60.7,11.6,59.6,12).curveTo(58.5,12.3,57.2,12.3).curveTo(55.8,12.4,54.7,12).closePath().moveTo(22.9,11.7).curveTo(21.2,11,20.1,9.9).curveTo(19,8.7,18.3,7.1).curveTo(17.7,5.5,17.7,3.7).curveTo(17.7,1.9,18.4,0.3).curveTo(19,-1.3,20.2,-2.4).curveTo(21.4,-3.7,23,-4.3).curveTo(24.6,-5,26.5,-5).curveTo(28.4,-5,30,-4.3).curveTo(31.6,-3.7,32.8,-2.5).curveTo(34,-1.4,34.6,0.2).curveTo(35.2,1.8,35.2,3.6).lineTo(35.2,5.4).lineTo(22.8,5.4).curveTo(23.2,6.7,24.2,7.4).curveTo(25.1,8,26.6,8).curveTo(27.8,8,28.7,7.5).curveTo(29.5,7.1,30.1,6.3).lineTo(34.2,8.7).curveTo(32.9,10.4,31.2,11.4).curveTo(29.4,12.3,26.5,12.3).curveTo(24.5,12.4,22.9,11.7).closePath().moveTo(30.1,1.6).curveTo(29.6,0.4,28.7,-0.1).curveTo(27.9,-0.7,26.5,-0.7).curveTo(25.2,-0.7,24.3,-0.1).curveTo(23.4,0.5,22.9,1.6).lineTo(30.1,1.6).lineTo(30.1,1.6).closePath().moveTo(-11.4,11.7).curveTo(-13,11,-14.2,9.9).curveTo(-15.3,8.7,-15.9,7.1).curveTo(-16.6,5.5,-16.5,3.7).curveTo(-16.5,1.9,-15.9,0.3).curveTo(-15.2,-1.3,-14,-2.4).curveTo(-12.8,-3.7,-11.2,-4.3).curveTo(-9.7,-5,-7.7,-5).curveTo(-5.9,-5,-4.2,-4.3).curveTo(-2.6,-3.7,-1.4,-2.5).curveTo(-0.3,-1.4,0.4,0.2).curveTo(0.9,1.8,0.9,3.6).lineTo(0.9,5.4).lineTo(-11.5,5.4).curveTo(-11.1,6.7,-10.1,7.4).curveTo(-9.1,8,-7.6,8).curveTo(-6.4,8,-5.6,7.5).curveTo(-4.7,7.1,-4.2,6.3).lineTo(0,8.7).curveTo(-1.3,10.4,-3.1,11.4).curveTo(-4.9,12.3,-7.7,12.3).curveTo(-9.8,12.4,-11.4,11.7).closePath().moveTo(-4.2,1.6).curveTo(-4.6,0.4,-5.5,-0.1).curveTo(-6.4,-0.7,-7.7,-0.7).curveTo(-9,-0.7,-9.9,-0.1).curveTo(-10.9,0.5,-11.3,1.6).lineTo(-4.2,1.6).lineTo(-4.2,1.6).closePath().moveTo(-44.1,11.7).curveTo(-45.7,11,-46.9,9.9).curveTo(-48,8.7,-48.6,7.1).curveTo(-49.2,5.5,-49.2,3.7).curveTo(-49.2,1.9,-48.6,0.3).curveTo(-47.8,-1.3,-46.7,-2.4).curveTo(-45.5,-3.7,-43.9,-4.3).curveTo(-42.3,-5,-40.4,-5).curveTo(-38.5,-5,-36.9,-4.3).curveTo(-35.3,-3.7,-34.1,-2.5).curveTo(-33,-1.4,-32.3,0.2).curveTo(-31.7,1.8,-31.7,3.6).lineTo(-31.7,5.4).lineTo(-44.2,5.4).curveTo(-43.7,6.7,-42.7,7.4).curveTo(-41.7,8,-40.3,8).curveTo(-39,8,-38.2,7.5).curveTo(-37.3,7.1,-36.9,6.3).lineTo(-32.6,8.7).curveTo(-34,10.4,-35.7,11.4).curveTo(-37.6,12.3,-40.4,12.3).curveTo(-42.4,12.4,-44.1,11.7).closePath().moveTo(-36.9,1.6).curveTo(-37.2,0.4,-38.1,-0.1).curveTo(-39.1,-0.7,-40.4,-0.7).curveTo(-41.6,-0.7,-42.6,-0.1).curveTo(-43.5,0.5,-44,1.6).lineTo(-36.9,1.6).lineTo(-36.9,1.6).closePath().moveTo(42,12).lineTo(42,-4.7).lineTo(47.4,-4.7).lineTo(47.4,12).closePath().moveTo(6.7,12).lineTo(0.4,-4.7).lineTo(5.9,-4.7).lineTo(9.3,5.1).lineTo(12.6,-4.7).lineTo(18,-4.7).lineTo(11.8,12).closePath().moveTo(-23.4,12).lineTo(-23.4,-4.7).lineTo(-18,-4.7).lineTo(-18,12).closePath().moveTo(-30.6,12).lineTo(-30.6,-12.4).lineTo(-25.4,-12.4).lineTo(-25.4,12).closePath().moveTo(-67.7,12).lineTo(-67.7,-10.6).lineTo(-58.8,-10.6).curveTo(-54.6,-10.6,-52.6,-8.9).curveTo(-50.5,-7.3,-50.5,-4.1).curveTo(-50.5,-2.6,-51.2,-1.5).curveTo(-51.7,-0.4,-52.8,0.4).curveTo(-51.5,1.1,-50.8,2.2).curveTo(-50.1,3.5,-50.1,5.2).curveTo(-50.1,8.7,-52.4,10.4).curveTo(-54.7,12,-58.8,12).closePath().moveTo(-62.4,7.3).lineTo(-58.7,7.3).curveTo(-57.1,7.3,-56.3,6.7).curveTo(-55.6,6.2,-55.6,5).curveTo(-55.6,4,-56.3,3.4).curveTo(-57,2.9,-58.8,2.9).lineTo(-62.4,2.9).closePath().moveTo(-62.4,-1.8).lineTo(-58.5,-1.8).curveTo(-57.1,-1.8,-56.4,-2.4).curveTo(-55.9,-3,-55.9,-3.9).curveTo(-55.9,-4.9,-56.5,-5.3).curveTo(-57.1,-5.9,-58.6,-5.9).lineTo(-62.4,-5.9).closePath().moveTo(42.5,-6.9).curveTo(41.6,-7.8,41.7,-9.1).curveTo(41.6,-10.5,42.5,-11.4).curveTo(43.4,-12.3,44.8,-12.2).curveTo(46.1,-12.3,47,-11.4).curveTo(47.9,-10.5,47.8,-9.1).curveTo(47.9,-7.8,47,-6.9).curveTo(46.1,-6,44.8,-6).curveTo(43.4,-6,42.5,-6.9).closePath().moveTo(-22.9,-6.9).curveTo(-23.7,-7.8,-23.7,-9.1).curveTo(-23.7,-10.5,-22.9,-11.4).curveTo(-22.1,-12.3,-20.7,-12.2).curveTo(-19.2,-12.3,-18.4,-11.4).curveTo(-17.5,-10.5,-17.5,-9.1).curveTo(-17.5,-7.8,-18.4,-6.9).curveTo(-19.2,-6,-20.7,-6).curveTo(-22.1,-6,-22.9,-6.9).closePath();
	this.shape.setTransform(82.15,21.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_believeIt, new cjs.Rectangle(0,0,162.7,44.8), null);


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

}).prototype = getMCSymbolPrototype(lib.image_03_1, new cjs.Rectangle(0,2,300,175), null);


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

}).prototype = getMCSymbolPrototype(lib.image_02_1, new cjs.Rectangle(0,2,300,175), null);


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

}).prototype = getMCSymbolPrototype(lib.image_01_1, new cjs.Rectangle(0,2,300,175), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(9.2,2.2).curveTo(8.7,2.1,8.4,1.8).curveTo(8.1,1.4,7.9,0.9).curveTo(7.7,0.6,7.7,-0).curveTo(7.7,-0.5,7.9,-0.9).lineTo(8.4,-1.7).lineTo(9.2,-2.3).curveTo(9.6,-2.5,10.1,-2.5).curveTo(10.6,-2.5,11.1,-2.3).lineTo(11.8,-1.7).curveTo(12.2,-1.3,12.4,-0.9).curveTo(12.6,-0.5,12.6,-0).curveTo(12.6,0.6,12.4,0.9).curveTo(12.2,1.4,11.8,1.8).curveTo(11.5,2.1,11.1,2.2).curveTo(10.6,2.5,10.1,2.5).curveTo(9.6,2.5,9.2,2.2).closePath().moveTo(9.5,-1.4).lineTo(9,-1).lineTo(8.7,-0.6).lineTo(8.6,-0).lineTo(8.7,0.6).lineTo(9,1.1).lineTo(9.5,1.5).lineTo(10.1,1.6).lineTo(10.7,1.5).lineTo(11.2,1.1).lineTo(11.5,0.6).lineTo(11.6,-0).lineTo(11.5,-0.6).lineTo(11.2,-1).lineTo(10.7,-1.4).lineTo(10.1,-1.5).lineTo(9.5,-1.4).closePath().moveTo(17.6,2.4).lineTo(17.6,-2.4).lineTo(20.8,-2.4).lineTo(20.8,-1.5).lineTo(18.6,-1.5).lineTo(18.6,-0.4).lineTo(20.8,-0.4).lineTo(20.8,0.4).lineTo(18.6,0.4).lineTo(18.6,1.6).lineTo(20.8,1.6).lineTo(20.8,2.4).closePath().moveTo(16,2.4).lineTo(15.3,0.9).lineTo(14.2,0.9).lineTo(14.2,2.4).lineTo(13.3,2.4).lineTo(13.3,-2.4).lineTo(15.2,-2.4).lineTo(15.9,-2.3).lineTo(16.5,-1.9).curveTo(16.7,-1.6,16.8,-1.4).lineTo(17,-0.8).curveTo(17,-0.3,16.7,0.1).curveTo(16.5,0.5,16.1,0.7).lineTo(17.1,2.4).closePath().moveTo(14.2,0).lineTo(15.1,0).lineTo(15.5,-0).lineTo(15.8,-0.2).lineTo(15.9,-0.5).lineTo(16,-0.8).curveTo(16,-1.1,15.8,-1.3).curveTo(15.6,-1.5,15.1,-1.5).lineTo(14.2,-1.5).closePath().moveTo(6.1,2.4).lineTo(6.1,-0.9).lineTo(4.6,1).lineTo(3.3,-0.9).lineTo(3.3,2.4).lineTo(2.3,2.4).lineTo(2.3,-2.4).lineTo(3.2,-2.4).lineTo(4.6,-0.4).lineTo(6.1,-2.4).lineTo(7,-2.4).lineTo(7,2.4).closePath().moveTo(-0.9,2.4).lineTo(-3.1,-0.9).lineTo(-3.1,2.4).lineTo(-4,2.4).lineTo(-4,-2.4).lineTo(-3,-2.4).lineTo(-0.9,0.9).lineTo(-0.9,-2.4).lineTo(-0,-2.4).lineTo(-0,2.4).closePath().moveTo(-5.6,2.4).lineTo(-6.3,0.9).lineTo(-7.4,0.9).lineTo(-7.4,2.4).lineTo(-8.3,2.4).lineTo(-8.3,-2.4).lineTo(-6.4,-2.4).lineTo(-5.7,-2.3).lineTo(-5.1,-1.9).curveTo(-4.9,-1.6,-4.8,-1.4).lineTo(-4.6,-0.8).curveTo(-4.6,-0.3,-4.9,0.1).curveTo(-5.1,0.5,-5.5,0.7).lineTo(-4.5,2.4).closePath().moveTo(-7.4,0).lineTo(-6.5,0).lineTo(-6.1,-0).lineTo(-5.8,-0.2).lineTo(-5.7,-0.5).lineTo(-5.6,-0.8).curveTo(-5.6,-1.1,-5.8,-1.3).curveTo(-6,-1.5,-6.5,-1.5).lineTo(-7.4,-1.5).closePath().moveTo(-9.8,2.4).lineTo(-10.1,1.6).lineTo(-12.1,1.6).lineTo(-12.4,2.4).lineTo(-13.3,2.4).lineTo(-11.6,-2.4).lineTo(-10.7,-2.4).lineTo(-8.9,2.4).closePath().moveTo(-10.4,0.7).lineTo(-11.1,-1.2).lineTo(-11.8,0.7).lineTo(-10.4,0.7).closePath().moveTo(-17,2.4).lineTo(-17,-2.4).lineTo(-13.8,-2.4).lineTo(-13.8,-1.5).lineTo(-16.1,-1.5).lineTo(-16.1,-0.4).lineTo(-13.8,-0.4).lineTo(-13.8,0.4).lineTo(-16.1,0.4).lineTo(-16.1,1.6).lineTo(-13.8,1.6).lineTo(-13.8,2.4).closePath().moveTo(-20.8,2.4).lineTo(-20.8,-2.4).lineTo(-19.9,-2.4).lineTo(-19.9,1.5).lineTo(-17.7,1.5).lineTo(-17.7,2.4).closePath();
	this.shape.setTransform(28.575,-299.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#008FBE").setStrokeStyle(1,1,1).moveTo(-47.6,-12.4).lineTo(47.6,-12.4).lineTo(47.6,12.4).lineTo(-47.6,12.4).closePath();
	this.shape_1.setTransform(28.625,-299.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-47.6,12.4).lineTo(-47.6,-12.4).lineTo(47.6,-12.4).lineTo(47.6,12.4).closePath();
	this.shape_2.setTransform(28.625,-299.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-19.9,-312.6,155.5,345.40000000000003), null);


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
	this.shape.graphics.beginFill("#F5B846").beginStroke().moveTo(0.4,12.1).lineTo(0.4,0.4).lineTo(5.8,5.9).lineTo(6.3,6.3).lineTo(6.3,12.1).closePath().moveTo(-5.9,-5.9).lineTo(-6.3,-6.3).lineTo(-6.3,-12.1).lineTo(-0.4,-12.1).lineTo(-0.4,-0.4).closePath();
	this.shape.setTransform(26.125,156.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#3C8EBA").beginStroke().moveTo(-0.8,20.8).curveTo(-1.4,20.4,-1.4,19.7).lineTo(-0.5,19.7).curveTo(-0.5,20.1,-0.2,20.2).curveTo(0,20.4,0.5,20.4).lineTo(0.9,20.4).curveTo(0.9,20.4,0.9,20.4).curveTo(1,20.4,1,20.3).curveTo(1,20.3,1,20.3).curveTo(1.1,20.3,1.1,20.2).curveTo(1.1,20.2,1.2,20.2).curveTo(1.2,20.1,1.2,20.1).curveTo(1.2,20.1,1.2,20).curveTo(1.2,20,1.2,19.9).lineTo(1.2,19.8).lineTo(1.1,19.6).lineTo(0.8,19.4).lineTo(-0.3,19.1).lineTo(-0.8,18.9).lineTo(-1.1,18.6).lineTo(-1.1,18.1).curveTo(-1.1,17.7,-0.9,17.4).curveTo(-0.7,17.1,-0.3,17).lineTo(0.4,16.8).lineTo(1.1,17).curveTo(1.5,17.1,1.8,17.4).curveTo(2,17.7,2,18.1).lineTo(1.1,18.1).curveTo(1.1,17.5,0.3,17.5).curveTo(0.3,17.5,0.2,17.5).curveTo(0.2,17.5,0.1,17.6).curveTo(0.1,17.6,0,17.6).curveTo(-0.1,17.6,-0.1,17.7).curveTo(-0.2,17.7,-0.2,17.7).curveTo(-0.2,17.8,-0.3,17.8).curveTo(-0.3,17.8,-0.3,17.9).curveTo(-0.3,17.9,-0.3,18).curveTo(-0.3,18,-0.3,18.1).curveTo(-0.3,18.1,-0.3,18.2).curveTo(-0.2,18.2,-0.2,18.3).curveTo(-0.2,18.3,-0.1,18.3).lineTo(0.9,18.6).curveTo(1.5,18.8,1.8,19).curveTo(2.1,19.2,2.1,19.8).curveTo(2.2,20.4,1.7,20.8).curveTo(1.3,21.1,0.4,21.1).curveTo(-0.4,21.1,-0.8,20.8).closePath().moveTo(-2.8,21).lineTo(-3.2,20.1).lineTo(-4.7,20.1).lineTo(-5,21).lineTo(-5.9,21).lineTo(-4.4,16.9).lineTo(-3.4,16.9).lineTo(-1.8,21).closePath().moveTo(-4.5,19.4).lineTo(-3.4,19.4).lineTo(-3.9,17.9).closePath().moveTo(-9.4,21).lineTo(-9.4,16.9).lineTo(-8.4,16.9).lineTo(-8.4,20.3).lineTo(-6.4,20.3).lineTo(-6.4,21).closePath().moveTo(-13.3,21).lineTo(-13.3,16.9).lineTo(-12.4,16.9).lineTo(-12.4,20.3).lineTo(-10.4,20.3).lineTo(-10.4,21).closePath().moveTo(-15,21).lineTo(-15.3,20.1).lineTo(-16.9,20.1).lineTo(-17.2,21).lineTo(-18.1,21).lineTo(-16.5,16.9).lineTo(-15.6,16.9).lineTo(-14.1,21).closePath().moveTo(-16.7,19.4).lineTo(-15.6,19.4).lineTo(-16.1,17.9).closePath().moveTo(-22.4,21).lineTo(-22.4,16.9).lineTo(-20.7,16.9).curveTo(-19.8,16.9,-19.3,17.4).curveTo(-18.8,18,-18.8,19).curveTo(-18.8,19.9,-19.3,20.5).curveTo(-19.7,21,-20.7,21).closePath().moveTo(-21.5,20.3).lineTo(-20.7,20.3).curveTo(-20.3,20.3,-20,20).curveTo(-19.7,19.7,-19.7,19.1).curveTo(-19.7,18.4,-20,18.1).curveTo(-20.2,17.7,-20.8,17.7).lineTo(-21.5,17.7).closePath().moveTo(32.4,9.1).curveTo(31.9,8.5,31.8,7.6).curveTo(31.9,6.7,32.4,6).curveTo(32.9,5.4,33.9,5.4).curveTo(34.6,5.4,35.1,5.8).curveTo(35.5,6.2,35.7,6.9).lineTo(34.8,6.9).curveTo(34.7,6.6,34.4,6.4).curveTo(34.2,6.2,33.9,6.2).curveTo(33.5,6.2,33.2,6.4).curveTo(33,6.6,32.8,6.9).curveTo(32.7,7.2,32.7,7.6).curveTo(32.7,8.2,33,8.6).curveTo(33.3,9,33.9,9).curveTo(34.3,9,34.5,8.7).curveTo(34.7,8.5,34.8,8.1).lineTo(35.7,8.1).curveTo(35.6,8.8,35.2,9.3).curveTo(34.6,9.7,33.9,9.7).curveTo(32.9,9.7,32.4,9.1).closePath().moveTo(21.3,9.1).curveTo(20.8,8.5,20.8,7.6).curveTo(20.8,6.7,21.3,6).curveTo(21.9,5.4,22.8,5.4).curveTo(23.5,5.4,24,5.8).curveTo(24.6,6.2,24.6,6.9).lineTo(23.7,6.9).curveTo(23.6,6.6,23.4,6.4).curveTo(23.2,6.2,22.8,6.2).curveTo(22.4,6.2,22.2,6.4).curveTo(22,6.6,21.8,6.9).lineTo(21.7,7.6).curveTo(21.7,8.2,22,8.6).curveTo(22.3,9,22.8,9).curveTo(23.2,9,23.4,8.7).curveTo(23.7,8.5,23.7,8.1).lineTo(24.6,8.1).curveTo(24.6,8.9,24.1,9.3).curveTo(23.6,9.7,22.8,9.7).curveTo(21.9,9.7,21.3,9.1).closePath().moveTo(5.5,9.1).curveTo(4.9,8.5,4.9,7.6).curveTo(4.9,6.7,5.5,6).curveTo(6,5.4,7,5.4).curveTo(7.7,5.4,8.1,5.8).curveTo(8.7,6.2,8.8,6.9).lineTo(7.9,6.9).curveTo(7.8,6.6,7.5,6.4).curveTo(7.4,6.2,7,6.2).curveTo(6.6,6.2,6.3,6.4).curveTo(6,6.6,5.9,6.9).lineTo(5.8,7.6).curveTo(5.8,8.2,6.1,8.6).curveTo(6.4,9,7,9).curveTo(7.4,9,7.6,8.7).curveTo(7.8,8.5,7.9,8.1).lineTo(8.8,8.1).curveTo(8.7,8.9,8.2,9.3).curveTo(7.7,9.7,7,9.7).curveTo(6,9.7,5.5,9.1).closePath().moveTo(1.1,9.3).curveTo(0.6,9,0.6,8.3).lineTo(1.5,8.3).curveTo(1.5,8.7,1.8,8.9).curveTo(2,9,2.4,9).lineTo(2.8,9).lineTo(3.1,8.9).lineTo(3.2,8.5).lineTo(3.2,8.3).lineTo(3.1,8.2).lineTo(2.9,8.1).lineTo(1.5,7.7).lineTo(1.1,7.5).lineTo(0.9,7.1).lineTo(0.8,6.7).curveTo(0.7,6.2,1,6).curveTo(1.1,5.7,1.6,5.6).curveTo(1.9,5.4,2.3,5.4).curveTo(2.8,5.4,3.1,5.6).curveTo(3.5,5.7,3.7,6).curveTo(4,6.3,4,6.7).lineTo(3.1,6.7).curveTo(3,6.1,2.2,6.1).lineTo(1.8,6.2).curveTo(1.8,6.3,1.7,6.3).curveTo(1.7,6.3,1.7,6.4).curveTo(1.6,6.4,1.6,6.5).curveTo(1.6,6.5,1.6,6.6).curveTo(1.6,6.6,1.6,6.7).curveTo(1.6,6.7,1.7,6.8).curveTo(1.7,6.8,1.7,6.9).curveTo(1.8,6.9,1.8,6.9).lineTo(2.9,7.2).lineTo(3.7,7.5).curveTo(4,7.9,4,8.4).curveTo(4,9,3.7,9.3).curveTo(3.2,9.7,2.4,9.7).curveTo(1.6,9.7,1.1,9.3).closePath().moveTo(-3.7,9.1).curveTo(-4.3,8.5,-4.3,7.6).curveTo(-4.3,6.7,-3.7,6).curveTo(-3.2,5.4,-2.2,5.4).curveTo(-1.3,5.4,-0.8,6).curveTo(-0.2,6.7,-0.2,7.6).curveTo(-0.2,8.5,-0.8,9.1).curveTo(-1.3,9.7,-2.2,9.7).curveTo(-3.1,9.7,-3.7,9.1).closePath().moveTo(-2.9,6.4).curveTo(-3.2,6.6,-3.3,6.9).lineTo(-3.4,7.6).curveTo(-3.3,8.2,-3.1,8.6).curveTo(-2.8,9,-2.2,9).curveTo(-1.7,9,-1.5,8.6).curveTo(-1.1,8.2,-1.1,7.6).curveTo(-1.1,7.2,-1.2,6.9).curveTo(-1.4,6.6,-1.6,6.4).curveTo(-1.8,6.2,-2.2,6.2).curveTo(-2.7,6.2,-2.9,6.4).closePath().moveTo(-13.1,9.3).curveTo(-13.5,8.9,-13.5,8.1).lineTo(-13.5,5.5).lineTo(-12.6,5.5).lineTo(-12.6,8.1).curveTo(-12.6,8.5,-12.5,8.8).curveTo(-12.2,9,-11.7,9).curveTo(-11.3,9,-11,8.8).curveTo(-10.9,8.6,-10.9,8.1).lineTo(-10.9,5.5).lineTo(-9.9,5.5).lineTo(-9.9,8.1).curveTo(-9.9,8.9,-10.5,9.3).curveTo(-10.9,9.7,-11.7,9.7).curveTo(-12.5,9.7,-13.1,9.3).closePath().moveTo(56.6,9.6).lineTo(56.5,8.7).curveTo(56.4,8.3,56.2,8.2).curveTo(56,8,55.8,8).lineTo(54.9,8).lineTo(54.9,9.6).lineTo(54,9.6).lineTo(54,5.5).lineTo(56.1,5.5).curveTo(56.8,5.5,57,5.9).curveTo(57.4,6.2,57.4,6.7).curveTo(57.4,7.4,56.8,7.7).curveTo(57.2,7.8,57.4,8.7).lineTo(57.4,9.3).lineTo(57.5,9.6).closePath().moveTo(54.9,7.4).lineTo(55.8,7.4).curveTo(56.4,7.4,56.5,6.8).curveTo(56.4,6.2,55.8,6.2).lineTo(54.9,6.2).closePath().moveTo(49.7,9.6).lineTo(49.7,5.5).lineTo(52.8,5.5).lineTo(52.8,6.3).lineTo(50.6,6.3).lineTo(50.6,7.2).lineTo(52.6,7.2).lineTo(52.6,7.9).lineTo(50.6,7.9).lineTo(50.6,8.9).lineTo(52.9,8.9).lineTo(52.9,9.6).closePath().moveTo(46.7,9.6).lineTo(46.7,6.3).lineTo(45.4,6.3).lineTo(45.4,5.5).lineTo(48.7,5.5).lineTo(48.7,6.3).lineTo(47.6,6.3).lineTo(47.6,9.6).closePath().moveTo(43.5,9.6).lineTo(41.8,6.9).lineTo(41.8,9.6).lineTo(40.9,9.6).lineTo(40.9,5.5).lineTo(41.9,5.5).lineTo(43.6,8.3).lineTo(43.6,5.5).lineTo(44.4,5.5).lineTo(44.4,9.6).closePath().moveTo(36.8,9.6).lineTo(36.8,5.5).lineTo(39.8,5.5).lineTo(39.8,6.3).lineTo(37.7,6.3).lineTo(37.7,7.2).lineTo(39.7,7.2).lineTo(39.7,7.9).lineTo(37.7,7.9).lineTo(37.7,8.9).lineTo(39.9,8.9).lineTo(39.9,9.6).closePath().moveTo(25.8,9.6).lineTo(25.8,5.5).lineTo(28.8,5.5).lineTo(28.8,6.3).lineTo(26.7,6.3).lineTo(26.7,7.2).lineTo(28.6,7.2).lineTo(28.6,7.9).lineTo(26.7,7.9).lineTo(26.7,8.9).lineTo(28.9,8.9).lineTo(28.9,9.6).closePath().moveTo(18.8,9.6).lineTo(17.1,6.9).lineTo(17.1,9.6).lineTo(16.2,9.6).lineTo(16.2,5.5).lineTo(17.2,5.5).lineTo(18.9,8.3).lineTo(18.9,5.5).lineTo(19.8,5.5).lineTo(19.8,9.6).closePath().moveTo(12,9.6).lineTo(12,5.5).lineTo(15.1,5.5).lineTo(15.1,6.3).lineTo(12.9,6.3).lineTo(12.9,7.2).lineTo(14.9,7.2).lineTo(14.9,7.9).lineTo(12.9,7.9).lineTo(12.9,8.9).lineTo(15.2,8.9).lineTo(15.2,9.6).closePath().moveTo(9.9,9.6).lineTo(9.9,5.5).lineTo(10.7,5.5).lineTo(10.7,9.6).closePath().moveTo(-6.1,9.6).lineTo(-6.2,9.3).lineTo(-6.2,8.7).curveTo(-6.2,8.3,-6.4,8.2).curveTo(-6.6,8,-7,8).lineTo(-7.9,8).lineTo(-7.9,9.6).lineTo(-8.8,9.6).lineTo(-8.8,5.5).lineTo(-6.5,5.5).curveTo(-6,5.5,-5.6,5.9).curveTo(-5.3,6.2,-5.3,6.7).curveTo(-5.3,7.4,-6,7.7).curveTo(-5.4,7.8,-5.3,8.7).lineTo(-5.3,9.3).lineTo(-5.3,9.5).lineTo(-5.2,9.6).closePath().moveTo(-7.9,7.4).lineTo(-6.9,7.4).curveTo(-6.2,7.4,-6.2,6.8).curveTo(-6.2,6.2,-6.9,6.2).lineTo(-7.9,6.2).closePath().moveTo(-17.7,9.6).lineTo(-17.7,5.5).lineTo(-14.6,5.5).lineTo(-14.6,6.3).lineTo(-16.8,6.3).lineTo(-16.8,7.2).lineTo(-14.8,7.2).lineTo(-14.8,7.9).lineTo(-16.8,7.9).lineTo(-16.8,8.9).lineTo(-14.6,8.9).lineTo(-14.6,9.6).closePath().moveTo(-19.8,9.6).lineTo(-21.6,6.9).lineTo(-21.6,9.6).lineTo(-22.4,9.6).lineTo(-22.4,5.5).lineTo(-21.5,5.5).lineTo(-19.8,8.3).lineTo(-19.8,5.5).lineTo(-18.9,5.5).lineTo(-18.9,9.6).closePath().moveTo(-57.5,-8.6).lineTo(-57.5,-14.5).lineTo(-45.8,-14.5).lineTo(-51.2,-9).lineTo(-51.6,-8.6).closePath().moveTo(-45,-15.3).lineTo(-39.5,-20.8).lineTo(-39.1,-21.1).lineTo(-33.3,-21.1).lineTo(-33.3,-15.3).closePath();
	this.shape_1.setTransform(71.5,171.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#1140A0").beginStroke().moveTo(-100.2,17.5).lineTo(-100.2,6.3).lineTo(-99.8,5.8).lineTo(-94.3,0.3).lineTo(-94.3,17.5).closePath().moveTo(-93.3,14.2).curveTo(-93.6,13.9,-93.6,13.6).curveTo(-93.6,13.3,-93.3,13).curveTo(-93.1,12.9,-92.8,12.9).curveTo(-92.5,12.9,-92.3,13).curveTo(-92,13.3,-92,13.6).curveTo(-92,13.9,-92.3,14.2).curveTo(-92.5,14.4,-92.8,14.4).curveTo(-93.1,14.4,-93.3,14.2).closePath().moveTo(-93.2,13.1).curveTo(-93.3,13.2,-93.3,13.3).curveTo(-93.4,13.3,-93.4,13.4).curveTo(-93.4,13.4,-93.4,13.5).curveTo(-93.4,13.5,-93.4,13.6).curveTo(-93.4,13.7,-93.4,13.7).curveTo(-93.4,13.8,-93.4,13.9).curveTo(-93.4,13.9,-93.3,14).curveTo(-93.3,14,-93.2,14).curveTo(-93.2,14.1,-93.1,14.1).curveTo(-93.1,14.2,-93.1,14.2).curveTo(-93,14.2,-92.9,14.2).curveTo(-92.9,14.2,-92.8,14.2).curveTo(-92.7,14.2,-92.7,14.2).curveTo(-92.6,14.2,-92.6,14.2).curveTo(-92.5,14.2,-92.5,14.1).curveTo(-92.4,14.1,-92.4,14).curveTo(-92.3,14,-92.3,14).curveTo(-92.2,13.9,-92.2,13.9).curveTo(-92.2,13.8,-92.2,13.7).curveTo(-92.2,13.7,-92.2,13.6).curveTo(-92.2,13.5,-92.2,13.5).curveTo(-92.2,13.4,-92.2,13.4).curveTo(-92.2,13.3,-92.3,13.3).curveTo(-92.3,13.2,-92.4,13.1).curveTo(-92.4,13.1,-92.5,13.1).curveTo(-92.5,13,-92.6,13).curveTo(-92.6,13,-92.7,13).curveTo(-92.7,12.9,-92.8,12.9).curveTo(-92.9,12.9,-92.9,13).curveTo(-93,13,-93.1,13).curveTo(-93.1,13,-93.1,13.1).curveTo(-93.2,13.1,-93.2,13.1).closePath().moveTo(-92.6,14).lineTo(-92.8,13.7).lineTo(-92.9,13.7).lineTo(-92.9,14).lineTo(-93.1,14).lineTo(-93.1,13.1).lineTo(-92.8,13.1).curveTo(-92.7,13.1,-92.6,13.2).curveTo(-92.6,13.2,-92.5,13.2).curveTo(-92.5,13.2,-92.5,13.3).curveTo(-92.5,13.3,-92.5,13.4).curveTo(-92.5,13.4,-92.5,13.5).curveTo(-92.5,13.5,-92.5,13.6).curveTo(-92.5,13.6,-92.6,13.6).curveTo(-92.6,13.6,-92.7,13.7).lineTo(-92.5,14).closePath().moveTo(-92.9,13.6).lineTo(-92.8,13.6).curveTo(-92.8,13.6,-92.7,13.5).curveTo(-92.7,13.5,-92.6,13.5).curveTo(-92.6,13.5,-92.6,13.5).curveTo(-92.6,13.4,-92.6,13.4).curveTo(-92.6,13.4,-92.6,13.4).curveTo(-92.6,13.3,-92.6,13.3).curveTo(-92.7,13.3,-92.7,13.3).curveTo(-92.7,13.3,-92.8,13.3).lineTo(-92.9,13.3).closePath().moveTo(75.7,12.2).curveTo(75,11.5,75,10.2).curveTo(75,8.8,75.7,7.9).curveTo(76.5,7.1,77.8,7.1).curveTo(78.8,7.1,79.5,7.6).curveTo(80.2,8.1,80.3,9.2).lineTo(79.1,9.2).curveTo(79,8.7,78.6,8.4).curveTo(78.3,8.2,77.8,8.2).curveTo(77.3,8.2,76.9,8.4).curveTo(76.6,8.7,76.4,9.2).lineTo(76.3,10.2).curveTo(76.3,10.9,76.7,11.5).curveTo(77,12,77.8,12.1).curveTo(78.4,12,78.7,11.7).curveTo(79,11.4,79.1,10.8).lineTo(80.3,10.8).curveTo(80.3,11.8,79.6,12.4).curveTo(78.9,13.2,77.8,13.1).curveTo(76.5,13.2,75.7,12.2).closePath().moveTo(54,12.2).curveTo(53.2,11.5,53.2,10.2).curveTo(53.2,8.8,54,7.9).curveTo(54.8,7.1,56.1,7.1).curveTo(57,7.1,57.7,7.6).curveTo(58.4,8.1,58.6,9.2).lineTo(57.3,9.2).curveTo(57.3,8.7,56.9,8.4).curveTo(56.5,8.2,56.1,8.2).curveTo(55.5,8.2,55.1,8.4).curveTo(54.8,8.7,54.7,9.2).curveTo(54.5,9.6,54.5,10.2).curveTo(54.5,10.9,54.9,11.5).curveTo(55.3,12,56.1,12.1).curveTo(56.6,12,56.9,11.7).curveTo(57.3,11.4,57.4,10.8).lineTo(58.6,10.8).curveTo(58.5,11.8,57.8,12.4).curveTo(57.1,13.2,56.1,13.1).curveTo(54.8,13.2,54,12.2).closePath().moveTo(5.5,12.6).curveTo(4.8,12.1,4.8,11.1).lineTo(6,11.1).curveTo(6,11.6,6.4,11.9).curveTo(6.8,12.2,7.3,12.1).lineTo(7.8,12.1).curveTo(7.9,12.1,7.9,12).curveTo(8,12,8,12).curveTo(8.1,12,8.1,11.9).curveTo(8.2,11.9,8.2,11.9).curveTo(8.3,11.8,8.3,11.8).curveTo(8.4,11.7,8.4,11.7).curveTo(8.4,11.6,8.4,11.5).curveTo(8.4,11.5,8.4,11.4).lineTo(8.4,11.2).lineTo(8.2,11).lineTo(8,10.9).lineTo(6.7,10.5).lineTo(6.1,10.2).lineTo(5.6,10).curveTo(5.3,9.8,5.1,9.5).lineTo(5,8.8).curveTo(5,8.2,5.3,7.9).curveTo(5.6,7.5,6.1,7.3).curveTo(6.6,7.1,7.1,7.1).curveTo(7.8,7.1,8.3,7.3).curveTo(8.8,7.4,9.1,7.9).curveTo(9.5,8.3,9.5,9).lineTo(8.2,9).curveTo(8.2,8.1,7.1,8.1).curveTo(6.7,8.1,6.5,8.3).curveTo(6.2,8.4,6.2,8.7).curveTo(6.2,9.1,6.5,9.2).lineTo(7.9,9.6).curveTo(8.8,9.8,9.1,10.1).curveTo(9.7,10.6,9.7,11.3).curveTo(9.7,12,9,12.6).curveTo(8.4,13.2,7.3,13.1).curveTo(6.2,13.2,5.5,12.6).closePath().moveTo(-29.5,12.5).curveTo(-30.2,12,-30.2,10.8).lineTo(-30.2,7.3).lineTo(-28.9,7.3).lineTo(-28.9,10.8).curveTo(-28.9,11.4,-28.6,11.7).curveTo(-28.4,12,-27.7,12.1).curveTo(-27,12.1,-26.8,11.8).curveTo(-26.5,11.5,-26.5,10.8).lineTo(-26.5,7.3).lineTo(-25.2,7.3).lineTo(-25.2,10.8).curveTo(-25.2,12,-25.9,12.5).curveTo(-26.5,13.1,-27.7,13.1).curveTo(-28.9,13.1,-29.5,12.5).closePath().moveTo(-46.4,12.2).curveTo(-47.1,11.4,-47.1,10.2).curveTo(-47.1,8.8,-46.4,7.9).curveTo(-45.6,7.1,-44.3,7.1).curveTo(-43,7.1,-42.3,7.9).curveTo(-41.5,8.8,-41.5,10.2).curveTo(-41.5,11.5,-42.3,12.2).curveTo(-43,13.2,-44.3,13.1).curveTo(-45.6,13.2,-46.4,12.2).closePath().moveTo(-45.2,8.4).curveTo(-45.6,8.7,-45.7,9.2).curveTo(-45.9,9.5,-45.9,10.2).curveTo(-45.9,10.9,-45.5,11.5).curveTo(-45.1,12,-44.3,12.1).curveTo(-43.5,12,-43.1,11.5).curveTo(-42.7,10.9,-42.7,10.2).curveTo(-42.7,9.6,-42.9,9.2).curveTo(-43.1,8.7,-43.4,8.4).curveTo(-43.8,8.2,-44.3,8.2).curveTo(-44.9,8.2,-45.2,8.4).closePath().moveTo(110.3,12.9).lineTo(110.2,12.6).lineTo(110.1,11.7).curveTo(110,11.1,109.8,11).curveTo(109.6,10.8,109.1,10.8).lineTo(107.9,10.8).lineTo(107.9,12.9).lineTo(106.6,12.9).lineTo(106.6,7.3).lineTo(109.7,7.3).curveTo(110.4,7.3,110.9,7.6).curveTo(111.4,8.1,111.4,8.8).curveTo(111.4,9.9,110.5,10.2).curveTo(111.2,10.5,111.3,11.7).lineTo(111.4,12.4).lineTo(111.5,12.9).closePath().moveTo(107.9,9.9).lineTo(109.3,9.9).curveTo(110.1,9.8,110.1,9.1).curveTo(110.1,8.2,109.3,8.2).lineTo(107.9,8.2).closePath().moveTo(100.5,12.9).lineTo(100.5,7.3).lineTo(104.9,7.3).lineTo(104.9,8.3).lineTo(101.8,8.3).lineTo(101.8,9.5).lineTo(104.6,9.5).lineTo(104.6,10.5).lineTo(101.8,10.5).lineTo(101.8,11.9).lineTo(104.9,11.9).lineTo(104.9,12.9).closePath().moveTo(96.1,12.9).lineTo(96.1,8.3).lineTo(94.4,8.3).lineTo(94.4,7.3).lineTo(99.1,7.3).lineTo(99.1,8.3).lineTo(97.4,8.3).lineTo(97.4,12.9).closePath().moveTo(91.7,12.9).lineTo(89.2,9.1).lineTo(89.2,12.9).lineTo(88,12.9).lineTo(88,7.3).lineTo(89.3,7.3).lineTo(91.7,11.1).lineTo(91.7,11.1).lineTo(91.7,7.3).lineTo(92.9,7.3).lineTo(92.9,12.9).closePath().moveTo(82,12.9).lineTo(82,7.3).lineTo(86.3,7.3).lineTo(86.3,8.3).lineTo(83.3,8.3).lineTo(83.3,9.5).lineTo(86.1,9.5).lineTo(86.1,10.5).lineTo(83.3,10.5).lineTo(83.3,11.9).lineTo(86.4,11.9).lineTo(86.4,12.9).closePath().moveTo(66.6,12.9).lineTo(66.6,7.3).lineTo(67.9,7.3).lineTo(67.9,11.9).lineTo(70.7,11.9).lineTo(70.7,12.9).closePath().moveTo(64,12.9).lineTo(63.5,11.7).lineTo(61.4,11.7).lineTo(60.9,12.9).lineTo(59.6,12.9).lineTo(61.8,7.3).lineTo(63.1,7.3).lineTo(65.3,12.9).closePath().moveTo(61.7,10.8).lineTo(63.2,10.8).lineTo(62.5,8.6).lineTo(62.4,8.6).closePath().moveTo(50.3,12.9).lineTo(50.3,7.3).lineTo(51.6,7.3).lineTo(51.6,12.9).closePath().moveTo(43.5,12.9).lineTo(43.5,7.3).lineTo(46,7.3).curveTo(47.2,7.3,47.9,7.9).curveTo(48.6,8.7,48.6,10.1).curveTo(48.6,11.4,47.9,12.1).curveTo(47.3,13,46,12.9).closePath().moveTo(44.8,11.9).lineTo(45.9,11.9).curveTo(46.5,11.9,47,11.5).curveTo(47.3,11.1,47.3,10.2).curveTo(47.3,9.2,47,8.7).curveTo(46.6,8.3,45.7,8.3).lineTo(44.8,8.3).closePath().moveTo(37.5,12.9).lineTo(37.5,7.3).lineTo(41.8,7.3).lineTo(41.8,8.3).lineTo(38.7,8.3).lineTo(38.7,9.5).lineTo(41.5,9.5).lineTo(41.5,10.5).lineTo(38.7,10.5).lineTo(38.7,11.9).lineTo(41.9,11.9).lineTo(41.9,12.9).closePath().moveTo(34.4,12.9).lineTo(34.4,8.9).lineTo(33,12.9).lineTo(32,12.9).lineTo(30.5,9).lineTo(30.5,12.9).lineTo(29.4,12.9).lineTo(29.4,7.3).lineTo(31.2,7.3).lineTo(32.5,11.2).lineTo(33.8,7.3).lineTo(35.6,7.3).lineTo(35.6,12.9).closePath().moveTo(21.6,12.9).lineTo(21.6,10.8).lineTo(19.5,7.3).lineTo(20.9,7.3).lineTo(22.3,9.5).lineTo(23.6,7.3).lineTo(25,7.3).lineTo(22.9,10.8).lineTo(22.9,12.9).closePath().moveTo(15.7,12.9).lineTo(15.7,8.3).lineTo(14,8.3).lineTo(14,7.3).lineTo(18.7,7.3).lineTo(18.7,8.3).lineTo(16.9,8.3).lineTo(16.9,12.9).closePath().moveTo(11.2,12.9).lineTo(11.2,7.3).lineTo(12.5,7.3).lineTo(12.5,12.9).closePath().moveTo(2.3,12.9).lineTo(2.1,12.6).lineTo(2.1,12.1).lineTo(2,11.7).curveTo(2,11.1,1.7,11).curveTo(1.6,10.8,1.1,10.8).lineTo(-0.2,10.8).lineTo(-0.2,12.9).lineTo(-1.5,12.9).lineTo(-1.5,7.3).lineTo(1.6,7.3).curveTo(2.4,7.3,2.9,7.6).curveTo(3.3,8.1,3.3,8.8).curveTo(3.3,9.9,2.4,10.2).curveTo(3.2,10.5,3.3,11.7).lineTo(3.3,12.4).lineTo(3.5,12.9).closePath().moveTo(-0.2,9.9).lineTo(1.2,9.9).curveTo(2.1,9.8,2.1,9.1).curveTo(2.1,8.2,1.2,8.2).lineTo(-0.2,8.2).closePath().moveTo(-7.5,12.9).lineTo(-7.5,7.3).lineTo(-3.2,7.3).lineTo(-3.2,8.3).lineTo(-6.2,8.3).lineTo(-6.2,9.5).lineTo(-3.5,9.5).lineTo(-3.5,10.5).lineTo(-6.2,10.5).lineTo(-6.2,11.9).lineTo(-3.1,11.9).lineTo(-3.1,12.9).closePath().moveTo(-12.1,12.9).lineTo(-14,7.3).lineTo(-12.7,7.3).lineTo(-11.4,11.3).lineTo(-11.4,11.3).lineTo(-10.1,7.3).lineTo(-8.8,7.3).lineTo(-10.7,12.9).closePath().moveTo(-16.6,12.9).lineTo(-16.6,7.3).lineTo(-15.3,7.3).lineTo(-15.3,12.9).closePath().moveTo(-19.7,12.9).lineTo(-22.1,9.1).lineTo(-22.2,9.1).lineTo(-22.2,12.9).lineTo(-23.3,12.9).lineTo(-23.3,7.3).lineTo(-22.1,7.3).lineTo(-19.7,11.1).lineTo(-19.6,11.1).lineTo(-19.6,7.3).lineTo(-18.5,7.3).lineTo(-18.5,12.9).closePath().moveTo(-36.1,12.9).lineTo(-36.2,12.6).lineTo(-36.3,11.7).curveTo(-36.4,11.1,-36.6,11).curveTo(-36.8,10.8,-37.2,10.8).lineTo(-38.5,10.8).lineTo(-38.5,12.9).lineTo(-39.8,12.9).lineTo(-39.8,7.3).lineTo(-36.7,7.3).curveTo(-35.9,7.3,-35.5,7.6).curveTo(-35,8.1,-35,8.8).curveTo(-35,9.9,-35.9,10.2).curveTo(-35.2,10.5,-35.1,11.7).lineTo(-35,12.8).lineTo(-34.8,12.9).closePath().moveTo(-38.5,9.9).lineTo(-37.2,9.9).curveTo(-36.3,9.8,-36.3,9.1).curveTo(-36.3,8.2,-37.2,8.2).lineTo(-38.5,8.2).closePath().moveTo(-52.5,12.9).lineTo(-52.5,7.3).lineTo(-51.2,7.3).lineTo(-51.2,11.9).lineTo(-48.4,11.9).lineTo(-48.4,12.9).closePath().moveTo(-57.2,12.9).lineTo(-57.2,10.8).lineTo(-59.3,7.3).lineTo(-57.8,7.3).lineTo(-56.5,9.5).lineTo(-55.2,7.3).lineTo(-53.7,7.3).lineTo(-55.9,10.8).lineTo(-55.9,12.9).closePath().moveTo(-60.6,12.9).lineTo(-61.1,11.7).lineTo(-63.3,11.7).lineTo(-63.7,12.9).lineTo(-65,12.9).lineTo(-62.8,7.3).lineTo(-61.5,7.3).lineTo(-59.4,12.9).closePath().moveTo(-62.9,10.8).lineTo(-61.4,10.8).lineTo(-62.1,8.6).lineTo(-62.2,8.6).closePath().moveTo(-70.9,12.9).lineTo(-70.9,7.3).lineTo(-68.1,7.3).curveTo(-66.3,7.3,-66.3,8.6).curveTo(-66.3,9.5,-67.1,9.9).curveTo(-66.6,10,-66.3,10.3).curveTo(-66.1,10.8,-66.1,11.3).curveTo(-66.1,12.1,-66.6,12.6).curveTo(-67.2,13,-68.1,12.9).closePath().moveTo(-69.6,12).lineTo(-68.3,12).curveTo(-67.3,12,-67.3,11.2).curveTo(-67.3,10.5,-68.2,10.4).lineTo(-69.6,10.4).closePath().moveTo(-69.6,9.5).lineTo(-68.3,9.5).curveTo(-68,9.6,-67.8,9.4).curveTo(-67.5,9.2,-67.5,8.8).curveTo(-67.5,8.2,-68.4,8.2).lineTo(-69.6,8.2).closePath().moveTo(-87.7,6.3).lineTo(-88.1,5.8).lineTo(-93.6,0.3).lineTo(-76.4,0.3).lineTo(-76.4,6.3).closePath().moveTo(-50.8,4.5).curveTo(-51,4.2,-51,3.8).curveTo(-51,3.3,-50.8,3.1).curveTo(-50.5,2.9,-50.1,2.9).lineTo(-49.7,2.9).curveTo(-49.2,2.9,-48.9,2.4).curveTo(-48.1,1.1,-47.8,0.3).curveTo(-47.5,-0.2,-47.5,-0.6).curveTo(-47.5,-1.1,-47.9,-2.3).lineTo(-49.7,-7.1).curveTo(-50.1,-8,-50.3,-8.3).curveTo(-50.5,-8.8,-51.1,-8.8).lineTo(-51.6,-9).lineTo(-51.7,-9.3).curveTo(-51.7,-9.4,-51.7,-9.4).curveTo(-51.7,-9.5,-51.7,-9.5).curveTo(-51.6,-9.5,-51.6,-9.5).curveTo(-51.6,-9.5,-51.5,-9.6).lineTo(-49.4,-9.6).lineTo(-47.4,-9.6).curveTo(-47.4,-9.5,-47.4,-9.5).curveTo(-47.3,-9.5,-47.3,-9.5).curveTo(-47.3,-9.5,-47.3,-9.4).curveTo(-47.3,-9.4,-47.3,-9.3).curveTo(-47.3,-9.2,-47.3,-9.2).curveTo(-47.3,-9.2,-47.3,-9.1).curveTo(-47.3,-9.1,-47.3,-9.1).curveTo(-47.4,-9,-47.4,-9).lineTo(-47.9,-8.8).curveTo(-48.4,-8.8,-48.4,-8.6).curveTo(-48.4,-8.3,-47.8,-6.5).lineTo(-47.1,-4.3).lineTo(-46.4,-2.7).curveTo(-46.2,-2.9,-45.6,-4.4).lineTo(-44.8,-6.2).curveTo(-44,-8,-44,-8.5).curveTo(-44,-8.8,-44.5,-8.8).lineTo(-45.2,-9).curveTo(-45.2,-9,-45.3,-9.1).curveTo(-45.3,-9.1,-45.3,-9.1).curveTo(-45.3,-9.2,-45.3,-9.2).curveTo(-45.3,-9.2,-45.3,-9.3).curveTo(-45.3,-9.4,-45.3,-9.4).curveTo(-45.3,-9.5,-45.3,-9.5).curveTo(-45.2,-9.5,-45.2,-9.5).curveTo(-45.2,-9.5,-45.2,-9.6).lineTo(-43.2,-9.6).lineTo(-41.4,-9.6).curveTo(-41.4,-9.5,-41.4,-9.5).curveTo(-41.3,-9.5,-41.3,-9.5).curveTo(-41.3,-9.5,-41.3,-9.4).curveTo(-41.3,-9.4,-41.3,-9.3).curveTo(-41.3,-9.2,-41.3,-9.2).curveTo(-41.3,-9.2,-41.3,-9.1).curveTo(-41.3,-9.1,-41.3,-9.1).curveTo(-41.3,-9,-41.4,-9).lineTo(-41.8,-8.9).curveTo(-42.3,-8.8,-42.7,-8.3).lineTo(-43.7,-6.5).lineTo(-45,-3.9).lineTo(-48.5,3.7).curveTo(-49,4.7,-50,4.8).curveTo(-50.5,4.8,-50.8,4.5).closePath().moveTo(50.2,-0.2).curveTo(49.5,-2.1,47.4,-6.7).curveTo(45.4,-2.6,44.5,-0.2).lineTo(44.3,-0.2).lineTo(43.9,-0.2).lineTo(42.4,-3.9).lineTo(38,-13.4).lineTo(37.4,-14.6).curveTo(37,-15,36.4,-15).lineTo(35.8,-15).lineTo(35.7,-15.4).curveTo(35.7,-15.4,35.7,-15.5).curveTo(35.7,-15.5,35.8,-15.6).curveTo(35.8,-15.6,35.8,-15.6).curveTo(35.8,-15.6,35.9,-15.7).lineTo(38.2,-15.6).lineTo(40.8,-15.7).curveTo(40.8,-15.6,40.9,-15.6).curveTo(40.9,-15.6,40.9,-15.6).curveTo(40.9,-15.5,41,-15.5).curveTo(41,-15.4,41,-15.4).curveTo(41,-15.4,41,-15.3).curveTo(41,-15.3,40.9,-15.2).curveTo(40.9,-15.2,40.9,-15.1).curveTo(40.9,-15.1,40.8,-15).lineTo(40.4,-15).curveTo(39.6,-15,39.6,-14.7).curveTo(39.6,-14.3,40.8,-11.6).lineTo(44.7,-3.1).lineTo(46.5,-6.8).lineTo(46.8,-7.7).lineTo(46.7,-8.3).lineTo(44.1,-13.8).lineTo(43.6,-14.7).curveTo(43.2,-15,42.7,-15).lineTo(42.1,-15).lineTo(42,-15.4).curveTo(42,-15.4,42,-15.5).curveTo(42,-15.5,42.1,-15.6).curveTo(42.1,-15.6,42.1,-15.6).curveTo(42.2,-15.6,42.2,-15.7).lineTo(44.6,-15.6).lineTo(47.1,-15.7).lineTo(47.3,-15.4).curveTo(47.3,-15.4,47.3,-15.3).curveTo(47.3,-15.3,47.3,-15.2).curveTo(47.3,-15.2,47.2,-15.1).curveTo(47.2,-15.1,47.2,-15).lineTo(46.6,-15).curveTo(45.9,-15,45.8,-14.8).curveTo(45.8,-14.6,46.1,-13.8).lineTo(47.8,-9.8).curveTo(48.7,-11.6,49.2,-12.9).curveTo(49.8,-14.2,49.8,-14.7).curveTo(49.8,-15,49.2,-15).lineTo(48.5,-15).lineTo(48.4,-15.4).lineTo(48.5,-15.7).lineTo(50.7,-15.6).lineTo(52.9,-15.7).lineTo(53,-15.4).lineTo(52.9,-15).lineTo(52.2,-15).curveTo(51.7,-15,51.1,-14.3).lineTo(50.4,-13).curveTo(49.5,-11.4,48.6,-9.4).lineTo(48.4,-8.8).lineTo(48.6,-8.3).lineTo(50.9,-3.1).lineTo(52.9,-7.9).lineTo(54.8,-12.4).lineTo(55.4,-14.5).curveTo(55.4,-15,54.7,-15).lineTo(54,-15).lineTo(53.9,-15.4).lineTo(54.1,-15.7).lineTo(56.2,-15.6).lineTo(56.3,-15.6).lineTo(56.5,-15.6).curveTo(57.5,-15.6,58.3,-16).lineTo(59.4,-16.8).lineTo(59.5,-16.8).lineTo(59.6,-16.7).lineTo(59.5,-13.9).lineTo(59.5,-9.1).curveTo(59.5,-9,59.5,-8.9).curveTo(59.5,-8.8,59.6,-8.8).curveTo(59.6,-8.7,59.6,-8.7).curveTo(59.6,-8.7,59.6,-8.7).curveTo(61.1,-9.8,62.7,-9.8).curveTo(64.2,-9.8,65,-8.9).curveTo(65.6,-8.2,65.6,-6.9).lineTo(65.6,-3.1).curveTo(65.6,-1.8,65.8,-1.5).curveTo(65.9,-1.1,66.5,-1.1).lineTo(67.1,-1.1).lineTo(67.2,-0.7).lineTo(67.1,-0.4).lineTo(64.8,-0.5).lineTo(62.7,-0.4).lineTo(62.5,-0.7).curveTo(62.5,-0.8,62.5,-0.8).curveTo(62.5,-0.9,62.5,-0.9).curveTo(62.5,-1,62.6,-1).curveTo(62.6,-1,62.6,-1.1).lineTo(63.1,-1.1).curveTo(63.7,-1.1,63.8,-1.5).curveTo(63.9,-1.8,63.9,-3.1).lineTo(63.9,-6.3).curveTo(63.9,-7.4,63.4,-8.1).curveTo(62.8,-8.7,61.8,-8.7).curveTo(60.7,-8.8,60,-8.1).lineTo(59.6,-7.7).lineTo(59.5,-6.9).lineTo(59.5,-3.1).curveTo(59.5,-1.9,59.6,-1.5).curveTo(59.8,-1.1,60.4,-1.1).lineTo(60.9,-1.1).curveTo(60.9,-1,60.9,-1).curveTo(60.9,-1,60.9,-0.9).curveTo(60.9,-0.9,60.9,-0.8).curveTo(60.9,-0.8,60.9,-0.7).lineTo(60.9,-0.4).lineTo(58.7,-0.5).lineTo(56.4,-0.4).lineTo(56.3,-0.7).lineTo(56.4,-1.1).lineTo(56.9,-1.1).curveTo(57.6,-1.1,57.7,-1.5).curveTo(57.8,-1.8,57.8,-3.1).lineTo(57.8,-13.3).curveTo(57.8,-14.4,57.7,-14.7).curveTo(57.7,-14.8,57.7,-14.8).curveTo(57.6,-14.8,57.6,-14.9).curveTo(57.6,-14.9,57.5,-14.9).curveTo(57.5,-14.9,57.5,-14.9).curveTo(57,-14.7,56.7,-14.2).lineTo(55.3,-11.1).lineTo(53.6,-7.2).lineTo(50.7,-0.2).lineTo(50.5,-0.2).lineTo(50.2,-0.2).closePath().moveTo(-18.5,-1).lineTo(-18.9,-2.4).curveTo(-19.1,-3.4,-19.1,-4.2).curveTo(-19.1,-4.2,-19,-4.3).curveTo(-19,-4.3,-19,-4.3).curveTo(-18.9,-4.3,-18.9,-4.3).curveTo(-18.9,-4.3,-18.8,-4.3).lineTo(-18.6,-4.2).curveTo(-17.5,-0.9,-14.6,-0.8).curveTo(-13.3,-0.9,-12.5,-1.6).curveTo(-11.8,-2.4,-11.8,-3.4).curveTo(-11.8,-4.5,-12.1,-5.1).curveTo(-12.5,-6,-13.7,-6.7).lineTo(-15.8,-8.1).curveTo(-18.3,-9.7,-18.3,-12.1).curveTo(-18.3,-13.7,-17.1,-14.8).curveTo(-15.8,-16,-13.6,-15.9).curveTo(-12.6,-15.9,-11.5,-15.7).lineTo(-10.7,-15.5).lineTo(-10.4,-14.3).lineTo(-10.3,-12.8).curveTo(-10.3,-12.7,-10.4,-12.7).curveTo(-10.4,-12.6,-10.4,-12.6).curveTo(-10.4,-12.6,-10.5,-12.6).curveTo(-10.5,-12.6,-10.6,-12.5).curveTo(-10.6,-12.5,-10.7,-12.6).curveTo(-10.7,-12.6,-10.8,-12.6).curveTo(-10.8,-12.6,-10.8,-12.6).curveTo(-10.8,-12.6,-10.8,-12.6).curveTo(-11.2,-13.8,-11.7,-14.3).curveTo(-12.5,-15.2,-14,-15.2).curveTo(-15.5,-15.2,-16.2,-14.3).curveTo(-16.7,-13.7,-16.7,-12.7).curveTo(-16.7,-11.1,-14.8,-9.9).lineTo(-12.9,-8.7).curveTo(-10.1,-7,-10.1,-4.4).curveTo(-10.1,-2.5,-11.4,-1.3).curveTo(-12.7,-0.1,-14.9,-0.2).curveTo(-17,-0.1,-18.5,-1).closePath().moveTo(81.8,-0.6).curveTo(81,-1,80.5,-1.7).curveTo(79.5,-3,79.5,-4.7).curveTo(79.5,-6.9,80.8,-8.3).curveTo(82.1,-9.8,84.1,-9.8).curveTo(85.5,-9.9,86.5,-9).curveTo(87.3,-8.2,87.3,-7.1).lineTo(87.3,-6.5).curveTo(87.2,-6.3,85.9,-6.3).lineTo(81.7,-6.3).curveTo(81.2,-6.3,81.1,-6.2).lineTo(81.1,-5.7).curveTo(81.1,-3.9,82.1,-2.7).curveTo(83.1,-1.5,84.9,-1.5).curveTo(85.5,-1.5,85.9,-1.7).curveTo(86.5,-1.9,87,-2.6).curveTo(87.3,-2.7,87.4,-2.3).curveTo(86.9,-1.2,85.8,-0.7).curveTo(84.8,-0.2,83.8,-0.2).curveTo(82.7,-0.2,81.8,-0.6).closePath().moveTo(82.1,-8.5).curveTo(81.4,-7.8,81.3,-7.1).curveTo(81.3,-7.1,81.3,-7.1).curveTo(81.3,-7.1,81.4,-7).curveTo(81.4,-7,81.4,-7).curveTo(81.4,-7,81.5,-7).lineTo(83.1,-7).curveTo(85.1,-7,85.5,-7.3).curveTo(85.5,-7.3,85.5,-7.3).curveTo(85.6,-7.4,85.6,-7.4).curveTo(85.6,-7.5,85.6,-7.5).curveTo(85.6,-7.6,85.6,-7.7).curveTo(85.6,-8.3,85.2,-8.7).curveTo(84.8,-9.1,83.9,-9.2).curveTo(82.9,-9.1,82.1,-8.5).closePath().moveTo(74.8,-0.9).curveTo(74.3,-1.5,74.3,-2.6).lineTo(74.3,-7.9).curveTo(74.3,-8.4,74.2,-8.5).lineTo(73.8,-8.6).lineTo(73.2,-8.6).lineTo(73.1,-8.7).curveTo(73.1,-8.8,73.1,-8.8).curveTo(73.1,-8.9,73.1,-8.9).curveTo(73.1,-8.9,73.1,-8.9).curveTo(73.1,-9,73.1,-9).curveTo(74.1,-9.3,74.6,-9.7).curveTo(75.1,-10.2,75.5,-11.1).lineTo(75.8,-11.1).lineTo(76,-11).lineTo(76,-9.9).lineTo(76.1,-9.6).lineTo(76.4,-9.6).lineTo(79,-9.6).curveTo(79.2,-9.3,79.2,-9).curveTo(79.2,-8.9,79.2,-8.8).curveTo(79.2,-8.8,79.1,-8.7).curveTo(79.1,-8.7,79.1,-8.6).curveTo(79,-8.6,79,-8.6).lineTo(76.4,-8.6).lineTo(76,-8.5).lineTo(76,-8).lineTo(76,-3.7).curveTo(76,-2.5,76.3,-2).curveTo(76.7,-1.2,77.7,-1.2).lineTo(78.3,-1.3).lineTo(78.9,-1.6).lineTo(79,-1.5).lineTo(79.1,-1.2).curveTo(78.2,-0.2,76.7,-0.2).curveTo(75.3,-0.2,74.8,-0.9).closePath().moveTo(19,-0.9).curveTo(18.5,-1.5,18.5,-2.6).lineTo(18.5,-7.9).lineTo(18.5,-8.5).curveTo(18.5,-8.5,18.4,-8.5).curveTo(18.4,-8.5,18.3,-8.5).curveTo(18.3,-8.5,18.2,-8.5).curveTo(18.2,-8.6,18.1,-8.6).lineTo(17.4,-8.6).lineTo(17.3,-8.7).lineTo(17.4,-9).curveTo(18.3,-9.3,18.8,-9.7).curveTo(19.3,-10.3,19.8,-11.1).lineTo(20,-11.1).lineTo(20.2,-11).lineTo(20.2,-9.9).lineTo(20.3,-9.6).lineTo(20.7,-9.6).lineTo(23.2,-9.6).curveTo(23.4,-9.3,23.4,-9).curveTo(23.4,-8.9,23.4,-8.8).curveTo(23.4,-8.8,23.3,-8.7).curveTo(23.3,-8.7,23.3,-8.6).curveTo(23.3,-8.6,23.2,-8.6).lineTo(20.6,-8.6).curveTo(20.5,-8.6,20.5,-8.5).curveTo(20.4,-8.5,20.4,-8.5).curveTo(20.3,-8.5,20.3,-8.5).curveTo(20.3,-8.5,20.3,-8.5).lineTo(20.2,-8).lineTo(20.2,-3.7).curveTo(20.2,-2.5,20.5,-2).curveTo(20.8,-1.2,21.9,-1.2).lineTo(22.5,-1.3).lineTo(23.1,-1.6).lineTo(23.2,-1.5).lineTo(23.3,-1.2).curveTo(22.4,-0.2,20.9,-0.2).curveTo(19.6,-0.2,19,-0.9).closePath().moveTo(12.1,-0.9).curveTo(11.6,-1.5,11.6,-2.6).lineTo(11.6,-7.9).curveTo(11.6,-8.4,11.5,-8.5).curveTo(11.5,-8.5,11.5,-8.5).curveTo(11.4,-8.5,11.4,-8.5).curveTo(11.3,-8.5,11.3,-8.5).curveTo(11.2,-8.6,11.1,-8.6).lineTo(10.5,-8.6).lineTo(10.4,-8.7).lineTo(10.4,-9).curveTo(11.5,-9.3,11.9,-9.7).curveTo(12.4,-10.3,12.9,-11.1).lineTo(13.1,-11.1).lineTo(13.3,-11).lineTo(13.3,-9.9).curveTo(13.3,-9.9,13.3,-9.8).curveTo(13.3,-9.7,13.3,-9.7).curveTo(13.4,-9.6,13.4,-9.6).curveTo(13.4,-9.6,13.4,-9.6).lineTo(13.7,-9.6).lineTo(16.3,-9.6).curveTo(16.5,-9.3,16.5,-9).curveTo(16.5,-8.9,16.5,-8.8).curveTo(16.5,-8.8,16.5,-8.7).curveTo(16.5,-8.7,16.4,-8.6).curveTo(16.4,-8.6,16.3,-8.6).lineTo(13.7,-8.6).lineTo(13.4,-8.5).lineTo(13.3,-8).lineTo(13.3,-3.7).curveTo(13.3,-2.5,13.6,-2).curveTo(14,-1.2,15,-1.2).lineTo(15.6,-1.3).lineTo(16.2,-1.6).lineTo(16.4,-1.5).lineTo(16.4,-1.2).curveTo(15.5,-0.2,14,-0.2).curveTo(12.7,-0.2,12.1,-0.9).closePath().moveTo(1.2,-1.5).curveTo(-0.1,-2.8,-0.1,-4.9).curveTo(-0.1,-7,1.3,-8.5).curveTo(2.7,-9.8,4.8,-9.8).curveTo(6.7,-9.8,8.1,-8.5).curveTo(9.4,-7.2,9.4,-5.1).curveTo(9.4,-2.9,8.1,-1.5).curveTo(6.7,-0.2,4.6,-0.2).curveTo(2.6,-0.2,1.2,-1.5).closePath().moveTo(2.6,-8.1).curveTo(1.9,-7,1.9,-5.1).curveTo(1.9,-3.5,2.6,-2.3).curveTo(3.4,-0.8,4.8,-0.8).curveTo(6.2,-0.8,6.9,-2.2).curveTo(7.5,-3.2,7.5,-4.8).curveTo(7.5,-6.5,6.8,-7.7).curveTo(6,-9.2,4.5,-9.2).curveTo(3.3,-9.2,2.6,-8.1).closePath().moveTo(-7.3,-1.4).curveTo(-8.6,-2.6,-8.6,-4.8).curveTo(-8.6,-6.7,-7.3,-8.2).curveTo(-5.8,-9.8,-3.1,-9.8).curveTo(-1.9,-9.8,-1.1,-9.5).curveTo(-0.7,-9.2,-0.7,-8.5).curveTo(-0.7,-8.2,-0.9,-7.9).curveTo(-0.9,-7.9,-1,-7.8).curveTo(-1,-7.8,-1,-7.8).curveTo(-1.1,-7.7,-1.1,-7.7).curveTo(-1.2,-7.7,-1.2,-7.7).curveTo(-1.3,-7.7,-1.3,-7.7).curveTo(-1.4,-7.7,-1.4,-7.7).curveTo(-1.5,-7.8,-1.5,-7.8).curveTo(-1.5,-7.8,-1.6,-7.8).curveTo(-2.6,-9,-3.8,-9).curveTo(-5.1,-9.1,-6,-8.1).curveTo(-7,-7.1,-7,-5.3).curveTo(-7,-3.9,-6.1,-2.7).curveTo(-5,-1.5,-3.3,-1.5).curveTo(-2.4,-1.5,-1.7,-1.8).curveTo(-1.2,-2.2,-0.8,-2.9).curveTo(-0.7,-2.9,-0.7,-2.9).curveTo(-0.7,-2.9,-0.6,-2.9).curveTo(-0.6,-2.8,-0.6,-2.8).curveTo(-0.6,-2.8,-0.5,-2.7).lineTo(-0.4,-2.5).curveTo(-0.9,-1.4,-2.1,-0.7).curveTo(-3.1,-0.2,-4.2,-0.2).curveTo(-6.1,-0.2,-7.3,-1.4).closePath().moveTo(-35.6,-1.5).curveTo(-36.9,-2.8,-36.9,-4.9).curveTo(-36.9,-7,-35.5,-8.5).curveTo(-34.1,-9.8,-32.1,-9.8).curveTo(-30.1,-9.8,-28.8,-8.5).curveTo(-27.4,-7.2,-27.4,-5.1).curveTo(-27.4,-2.9,-28.8,-1.5).curveTo(-30.1,-0.2,-32.2,-0.2).curveTo(-34.3,-0.2,-35.6,-1.5).closePath().moveTo(-34.2,-8.1).curveTo(-35,-7,-35,-5.1).curveTo(-35,-3.5,-34.3,-2.3).curveTo(-33.4,-0.8,-32,-0.8).curveTo(-30.6,-0.8,-29.9,-2.2).curveTo(-29.4,-3.2,-29.4,-4.8).curveTo(-29.4,-6.5,-30,-7.7).curveTo(-30.9,-9.2,-32.3,-9.2).curveTo(-33.5,-9.2,-34.2,-8.1).closePath().moveTo(-54.4,-0.9).curveTo(-54.5,-1,-54.5,-1).curveTo(-54.5,-1.1,-54.6,-1.1).curveTo(-54.6,-1.2,-54.7,-1.2).curveTo(-54.7,-1.2,-54.8,-1.2).lineTo(-55.1,-1.1).lineTo(-55.6,-0.7).lineTo(-56.4,-0.4).curveTo(-56.9,-0.2,-57.3,-0.2).curveTo(-58.3,-0.2,-58.9,-0.7).curveTo(-59.6,-1.4,-59.6,-2.3).curveTo(-59.6,-3,-59.2,-3.4).curveTo(-58.8,-3.9,-57.7,-4.2).lineTo(-55,-5.2).curveTo(-55,-5.3,-54.9,-5.3).curveTo(-54.9,-5.3,-54.8,-5.3).curveTo(-54.8,-5.4,-54.7,-5.4).curveTo(-54.7,-5.5,-54.7,-5.5).lineTo(-54.6,-5.9).lineTo(-54.6,-6.9).curveTo(-54.6,-7.8,-54.8,-8.3).curveTo(-55.3,-8.9,-56.3,-8.9).curveTo(-56.8,-8.9,-57.2,-8.7).curveTo(-57.7,-8.4,-57.7,-7.9).curveTo(-57.7,-7.3,-58,-7.1).curveTo(-58.5,-6.7,-59.2,-6.7).curveTo(-59.3,-6.7,-59.4,-6.7).curveTo(-59.4,-6.7,-59.4,-6.8).curveTo(-59.5,-6.8,-59.5,-6.9).curveTo(-59.5,-6.9,-59.5,-7).curveTo(-59.5,-7.9,-58.1,-8.8).curveTo(-56.6,-9.8,-55.3,-9.8).curveTo(-54.1,-9.8,-53.5,-9.2).curveTo(-52.9,-8.4,-53,-7.1).lineTo(-53.1,-3.2).curveTo(-53.2,-1.2,-52,-1.2).lineTo(-51.5,-1.4).lineTo(-51.2,-1.5).curveTo(-51.1,-1.5,-51.1,-1.5).curveTo(-51.1,-1.5,-51.1,-1.4).curveTo(-51,-1.4,-51,-1.3).curveTo(-51,-1.3,-51,-1.2).curveTo(-51,-1,-51.5,-0.6).curveTo(-52.2,-0.2,-52.9,-0.2).curveTo(-53.9,-0.2,-54.4,-0.9).closePath().moveTo(-55.9,-4.2).curveTo(-57,-3.9,-57.4,-3.6).curveTo(-57.8,-3.2,-57.8,-2.6).curveTo(-57.8,-2.1,-57.6,-1.7).curveTo(-57.2,-1.2,-56.4,-1.2).curveTo(-56.1,-1.2,-55.6,-1.4).curveTo(-55.2,-1.6,-55,-1.8).curveTo(-54.8,-2,-54.8,-2.3).lineTo(-54.7,-2.9).lineTo(-54.7,-4.2).curveTo(-54.7,-4.3,-54.7,-4.3).curveTo(-54.7,-4.4,-54.7,-4.4).curveTo(-54.8,-4.5,-54.8,-4.5).curveTo(-54.9,-4.5,-54.9,-4.5).lineTo(-55.9,-4.2).closePath().moveTo(35.3,-0.6).curveTo(34.8,-0.8,34.1,-1.5).curveTo(32.9,-0.8,32.1,-0.6).curveTo(31.3,-0.4,30.2,-0.4).curveTo(28.2,-0.4,26.8,-1.5).curveTo(25.4,-2.6,25.4,-4.4).curveTo(25.4,-7,28,-8).curveTo(27.1,-9,27.1,-10).curveTo(27.1,-11.2,27.9,-12.1).curveTo(28.7,-12.8,29.9,-12.9).curveTo(30.8,-12.9,31.4,-12.4).curveTo(32,-11.9,32,-11.2).curveTo(32,-10.4,31.5,-9.9).curveTo(31,-9.6,30.5,-9.6).curveTo(30,-9.6,30.3,-9.9).lineTo(30.5,-10.3).curveTo(30.6,-10.5,30.5,-11).curveTo(30.4,-11.2,30.1,-11.5).curveTo(29.8,-11.7,29.3,-11.7).curveTo(28.7,-11.9,28.2,-11.4).curveTo(27.8,-11.1,27.8,-10.6).curveTo(27.8,-10,28.2,-9.6).curveTo(28.7,-9.1,29.8,-8.5).curveTo(31.8,-7.4,32.7,-6.7).curveTo(34.1,-5.5,35.1,-3.3).curveTo(35.9,-4.4,35.9,-5.6).curveTo(35.9,-6.4,35.3,-7.1).curveTo(35.1,-7.5,34.5,-7.6).curveTo(33.8,-7.6,33.4,-7.2).lineTo(33.1,-7.1).curveTo(32.9,-7.2,32.9,-7.7).curveTo(33,-8.2,33.5,-8.6).curveTo(34.1,-9,34.9,-9).lineTo(36.1,-8.8).lineTo(37,-8.7).curveTo(37.4,-8.7,37.5,-8.9).lineTo(37.7,-9).curveTo(37.7,-9,37.8,-9).curveTo(37.8,-9,37.8,-9).curveTo(37.9,-9,37.9,-8.9).curveTo(37.9,-8.9,37.9,-8.8).curveTo(37.9,-7.7,36.4,-7.2).curveTo(36.7,-6.6,36.7,-5.8).curveTo(36.7,-4.2,35.4,-2.8).curveTo(36,-1.8,36.5,-1.5).curveTo(37.1,-1.1,37.9,-1.1).lineTo(38.5,-1.2).lineTo(38.9,-1.2).lineTo(39,-1.1).curveTo(39,-0.8,38.4,-0.6).curveTo(37.8,-0.4,36.8,-0.4).curveTo(36,-0.3,35.3,-0.6).closePath().moveTo(27.1,-5.7).curveTo(27.1,-4,28.4,-2.6).curveTo(29.7,-1.4,31.3,-1.4).curveTo(31.9,-1.3,32.4,-1.5).curveTo(32.9,-1.6,33.6,-2).lineTo(32.6,-3.3).lineTo(32.1,-4).curveTo(31.3,-5.1,30.4,-6).lineTo(29,-7.2).lineTo(28.5,-7.6).curveTo(27.1,-7.3,27.1,-5.7).closePath().moveTo(70.1,-0.5).lineTo(67.9,-0.4).lineTo(67.8,-0.7).lineTo(67.9,-1.1).lineTo(68.4,-1.1).curveTo(69,-1.1,69.1,-1.5).curveTo(69.2,-1.8,69.2,-3.1).lineTo(69.2,-7).lineTo(69.2,-7.9).curveTo(69.1,-8.2,68.6,-8.5).lineTo(68.4,-8.6).lineTo(68.3,-8.8).lineTo(68.4,-9).lineTo(69.6,-9.6).lineTo(70.8,-10.2).curveTo(70.9,-10.2,70.9,-10.1).curveTo(70.9,-10.1,71,-10.1).curveTo(71,-10.1,71,-10.1).curveTo(71,-10,71,-10).lineTo(70.9,-7.2).lineTo(70.9,-3.1).curveTo(70.9,-1.8,71.1,-1.5).curveTo(71.2,-1.1,71.8,-1.1).lineTo(72.3,-1.1).lineTo(72.4,-0.7).lineTo(72.2,-0.4).lineTo(70.1,-0.5).closePath().moveTo(-24.1,-0.5).lineTo(-26.2,-0.4).lineTo(-26.4,-0.7).curveTo(-26.4,-0.8,-26.4,-0.8).curveTo(-26.4,-0.9,-26.3,-0.9).curveTo(-26.3,-1,-26.3,-1).curveTo(-26.3,-1,-26.2,-1.1).lineTo(-25.8,-1.1).curveTo(-25.2,-1.1,-25.1,-1.5).curveTo(-25,-1.8,-25,-3.1).lineTo(-25,-7).curveTo(-25,-7.8,-25.1,-7.9).curveTo(-25.1,-8.2,-25.6,-8.5).lineTo(-25.8,-8.6).lineTo(-25.9,-8.8).curveTo(-25.9,-8.9,-25.9,-8.9).curveTo(-25.9,-8.9,-25.8,-9).curveTo(-25.8,-9,-25.8,-9).curveTo(-25.8,-9,-25.8,-9).lineTo(-24.6,-9.6).lineTo(-23.4,-10.2).curveTo(-23.4,-10.1,-23.4,-10.1).curveTo(-23.3,-10.1,-23.3,-10.1).curveTo(-23.3,-10.1,-23.3,-10).curveTo(-23.3,-10,-23.3,-9.9).lineTo(-23.3,-8.7).lineTo(-23.2,-8.5).lineTo(-21.9,-9.4).curveTo(-21.3,-9.9,-20.7,-9.8).curveTo(-20.3,-9.8,-20,-9.6).curveTo(-19.7,-9.3,-19.7,-8.9).curveTo(-19.7,-8.4,-20,-8.1).curveTo(-20.3,-7.9,-20.7,-7.8).lineTo(-21.2,-8).curveTo(-21.7,-8.4,-22.2,-8.4).curveTo(-22.6,-8.4,-23,-7.9).curveTo(-23.3,-7.5,-23.3,-6.1).lineTo(-23.3,-3.1).curveTo(-23.3,-1.8,-23.2,-1.5).curveTo(-23,-1.1,-22.4,-1.1).lineTo(-21.5,-1.1).lineTo(-21.5,-0.7).lineTo(-21.6,-0.4).lineTo(-24.1,-0.5).closePath().moveTo(-39.9,-0.5).lineTo(-42.1,-0.4).curveTo(-42.2,-0.4,-42.2,-0.5).curveTo(-42.2,-0.5,-42.2,-0.5).curveTo(-42.3,-0.6,-42.3,-0.6).curveTo(-42.3,-0.7,-42.3,-0.7).curveTo(-42.3,-0.8,-42.3,-0.8).curveTo(-42.3,-0.8,-42.3,-0.9).curveTo(-42.3,-0.9,-42.2,-1).curveTo(-42.2,-1,-42.2,-1.1).lineTo(-41.6,-1.1).curveTo(-41,-1.1,-40.9,-1.5).lineTo(-40.8,-3.1).lineTo(-40.8,-13.3).lineTo(-40.9,-14.7).curveTo(-41,-15,-41.5,-15.2).lineTo(-41.7,-15.4).curveTo(-41.7,-15.4,-41.8,-15.4).curveTo(-41.8,-15.5,-41.8,-15.5).curveTo(-41.8,-15.5,-41.8,-15.6).curveTo(-41.8,-15.6,-41.8,-15.7).lineTo(-41.7,-15.9).lineTo(-39.3,-16.8).curveTo(-39.2,-16.8,-39.2,-16.8).curveTo(-39.1,-16.8,-39.1,-16.8).curveTo(-39.1,-16.8,-39.1,-16.8).curveTo(-39,-16.7,-39,-16.7).lineTo(-39.1,-13.9).lineTo(-39.1,-3.1).curveTo(-39.1,-1.8,-39,-1.5).curveTo(-38.8,-1.1,-38.2,-1.1).lineTo(-37.7,-1.1).lineTo(-37.6,-0.7).curveTo(-37.6,-0.7,-37.6,-0.6).curveTo(-37.6,-0.6,-37.6,-0.5).curveTo(-37.6,-0.5,-37.7,-0.5).curveTo(-37.7,-0.4,-37.7,-0.4).lineTo(-39.9,-0.5).closePath().moveTo(-69.9,-0.5).lineTo(-72.5,-0.4).curveTo(-72.6,-0.4,-72.6,-0.5).curveTo(-72.6,-0.5,-72.6,-0.5).curveTo(-72.7,-0.6,-72.7,-0.6).curveTo(-72.7,-0.7,-72.7,-0.7).lineTo(-72.6,-1.1).lineTo(-72.1,-1.1).curveTo(-71.3,-1.2,-71.1,-1.7).curveTo(-70.9,-2.1,-70.9,-4).lineTo(-70.9,-12.6).curveTo(-70.9,-14,-71.1,-14.3).curveTo(-71.3,-14.7,-72,-14.8).lineTo(-72.7,-14.9).curveTo(-72.8,-14.9,-72.8,-15).curveTo(-72.8,-15,-72.8,-15).curveTo(-72.9,-15.1,-72.9,-15.1).curveTo(-72.9,-15.2,-72.9,-15.2).curveTo(-72.9,-15.3,-72.9,-15.3).curveTo(-72.9,-15.3,-72.8,-15.4).curveTo(-72.8,-15.4,-72.8,-15.4).curveTo(-72.8,-15.4,-72.7,-15.5).curveTo(-70.9,-15.7,-67.8,-15.7).curveTo(-65.3,-15.6,-64,-15).curveTo(-62.2,-14.2,-62.2,-12.1).curveTo(-62.2,-11,-62.9,-10.3).curveTo(-63.5,-9.5,-64.6,-9).curveTo(-64.6,-8.8,-64.1,-8.7).curveTo(-63,-8.4,-62.1,-7.7).curveTo(-61.1,-6.5,-61.1,-4.9).curveTo(-61.1,-2.8,-62.6,-1.6).curveTo(-64.2,-0.4,-67.2,-0.4).lineTo(-69.9,-0.5).closePath().moveTo(-68.8,-8.1).curveTo(-68.9,-8.1,-68.9,-8).curveTo(-69,-8,-69,-7.9).curveTo(-69,-7.9,-69,-7.8).curveTo(-69,-7.7,-69,-7.7).lineTo(-69,-4.2).curveTo(-69,-2.3,-68.6,-1.8).curveTo(-68,-1.1,-66.8,-1.2).curveTo(-65.1,-1.2,-64.2,-1.8).curveTo(-63.2,-2.7,-63.2,-4.3).curveTo(-63.2,-5.9,-64.1,-7).curveTo(-65.2,-8.3,-67.7,-8.3).curveTo(-68.6,-8.3,-68.8,-8.1).closePath().moveTo(-68.7,-14.8).lineTo(-69,-14.7).lineTo(-69,-14.2).lineTo(-69,-9.6).curveTo(-69,-9.1,-68.9,-9).curveTo(-68.7,-8.9,-67.9,-8.9).curveTo(-66,-9,-65.2,-9.6).curveTo(-64.3,-10.3,-64.3,-11.9).curveTo(-64.3,-13.5,-65.3,-14.2).curveTo(-66.2,-15,-67.6,-14.9).curveTo(-68.4,-14.9,-68.7,-14.8).closePath().moveTo(-93.6,-17.6).lineTo(-87.7,-17.6).lineTo(-87.7,-6.3).lineTo(-88.1,-5.9).lineTo(-93.6,-0.4).closePath().moveTo(-111.5,-0.4).lineTo(-111.5,-6.2).lineTo(-100.2,-6.2).lineTo(-99.8,-5.9).lineTo(-94.3,-0.4).closePath().moveTo(69.1,-12).curveTo(68.7,-12.3,68.7,-12.8).curveTo(68.7,-13.4,69.1,-13.7).curveTo(69.4,-14,70,-14).curveTo(70.5,-14,70.8,-13.7).curveTo(71.1,-13.3,71.1,-12.9).curveTo(71.1,-12.2,70.8,-12).curveTo(70.5,-11.6,69.9,-11.6).curveTo(69.4,-11.6,69.1,-12).closePath();
	this.shape_2.setTransform(120.075,156.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-150,300).lineTo(-150,-300).lineTo(150,-300).lineTo(150,300).closePath();
	this.shape_3.setTransform(150,125.0015,1,0.4167);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_Logo, new cjs.Rectangle(0,0,300,250), null);


// stage content:
(lib._21_BAY_030_cmp_bnr_NTXNeuro_Dallas_300x250 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(225));

	// txt_healthySpines
	this.instance = new lib.txt_healthySpines();
	this.instance.setTransform(106.15,55.95,1,1,0,0,0,103,17.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({_off:false},0).to({x:136.15,alpha:1},9,cjs.Ease.quadOut).wait(57));

	// txt_happenHere
	this.instance_1 = new lib.txt_happenHere();
	this.instance_1.setTransform(93.55,85.45,1,1,0,0,0,89.9,17.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(161).to({_off:false},0).to({x:123.55,alpha:1},9,cjs.Ease.quadOut).wait(55));

	// ctaBtn
	this.instance_2 = new lib.ctaBtn();
	this.instance_2.setTransform(149.55,545.5,1,1,0,0,0,87.5,22.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(171).to({_off:false},0).to({alpha:1},9).wait(45));

	// BSWH_Logo
	this.instance_3 = new lib.BSWH_Logo();
	this.instance_3.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(161).to({_off:false},0).to({alpha:1},10).wait(54));

	// txt_doWhatYou
	this.instance_4 = new lib.txt_doWhatYou();
	this.instance_4.setTransform(86.65,55.6,1,1,0,0,0,87.5,17.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:122.65,alpha:1},10,cjs.Ease.quadOut).wait(137).to({x:422.65,alpha:0},9,cjs.Ease.quadIn).wait(69));

	// txt_loveAgain
	this.instance_5 = new lib.txt_loveAgain();
	this.instance_5.setTransform(80.25,85.7,1,1,0,0,0,82.4,17.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({x:116.25,alpha:1},10,cjs.Ease.quadOut).wait(137).to({x:416.25,alpha:0},9,cjs.Ease.quadIn).wait(67));

	// txt_better (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_64 = new cjs.Graphics().moveTo(61.5,52).curveTo(60.7,51.2,60.7,50).curveTo(60.7,48.7,61.5,47.8).curveTo(62.3,47.1,63.6,47).curveTo(64.9,47.1,65.6,47.8).curveTo(66.4,48.7,66.4,50).curveTo(66.4,51.2,65.6,52).curveTo(64.9,52.8,63.6,52.8).curveTo(62.3,52.8,61.5,52).closePath().moveTo(35.5,52.1).curveTo(33.9,51.5,32.9,50.4).curveTo(31.8,49.3,31.2,47.8).curveTo(30.7,46.4,30.7,44.6).curveTo(30.7,42.9,31.3,41.4).curveTo(31.9,39.9,33,38.8).curveTo(34.1,37.8,35.6,37.1).curveTo(37.1,36.5,38.9,36.5).curveTo(40.7,36.5,42.2,37.1).curveTo(43.7,37.7,44.8,38.7).curveTo(45.9,39.9,46.4,41.3).curveTo(47,42.8,47,44.6).lineTo(47,46.3).lineTo(35.4,46.3).curveTo(35.8,47.4,36.7,48.1).curveTo(37.6,48.7,39,48.7).curveTo(40.1,48.7,40.9,48.3).curveTo(41.7,47.8,42.2,47).lineTo(46.2,49.3).curveTo(44.9,51,43.2,51.9).curveTo(41.6,52.7,38.9,52.8).curveTo(37,52.7,35.5,52.1).closePath().moveTo(42.2,42.7).curveTo(41.8,41.6,41,41.1).curveTo(40.1,40.5,38.9,40.5).curveTo(37.7,40.6,36.9,41.1).curveTo(36,41.7,35.5,42.7).lineTo(42.2,42.7).lineTo(42.2,42.7).closePath().moveTo(24.2,52.4).curveTo(23.2,52.1,22.5,51.3).curveTo(21.8,50.6,21.4,49.4).curveTo(21,48.3,21,46.5).lineTo(21,41.1).lineTo(18.3,41.1).lineTo(18.3,36.8).lineTo(21,36.8).lineTo(21,33.4).lineTo(25.8,30.7).lineTo(25.8,36.8).lineTo(29.7,36.8).lineTo(29.7,41.1).lineTo(25.8,41.1).lineTo(25.8,46.2).curveTo(25.8,47.4,26.2,47.8).curveTo(26.6,48.2,27.2,48.2).curveTo(27.9,48.2,28.5,47.6).lineTo(30.7,51.3).curveTo(29.8,52,28.8,52.4).curveTo(27.7,52.7,26.5,52.8).curveTo(25.2,52.7,24.2,52.4).closePath().moveTo(12,52.4).curveTo(11,52.1,10.3,51.3).curveTo(9.6,50.6,9.2,49.4).curveTo(8.9,48.3,8.9,46.5).lineTo(8.9,41.1).lineTo(6.2,41.1).lineTo(6.2,36.8).lineTo(8.9,36.8).lineTo(8.9,33.4).lineTo(13.7,30.7).lineTo(13.7,36.8).lineTo(17.5,36.8).lineTo(17.5,41.1).lineTo(13.7,41.1).lineTo(13.7,46.2).curveTo(13.7,47.4,14,47.8).curveTo(14.4,48.2,15.1,48.2).curveTo(15.7,48.2,16.3,47.6).lineTo(18.5,51.3).curveTo(17.7,52,16.6,52.4).curveTo(15.6,52.7,14.4,52.8).curveTo(13.1,52.7,12,52.4).closePath().moveTo(-6.1,52.1).curveTo(-7.6,51.5,-8.7,50.4).curveTo(-9.7,49.3,-10.3,47.8).curveTo(-10.9,46.4,-10.9,44.6).curveTo(-10.9,42.9,-10.3,41.4).curveTo(-9.6,39.9,-8.6,38.8).curveTo(-7.4,37.8,-5.9,37.1).curveTo(-4.4,36.5,-2.7,36.5).curveTo(-0.9,36.5,0.6,37.1).curveTo(2.1,37.7,3.2,38.7).curveTo(4.3,39.9,4.9,41.3).curveTo(5.5,42.8,5.5,44.6).lineTo(5.5,46.3).lineTo(-6.2,46.3).curveTo(-5.8,47.4,-4.8,48.1).curveTo(-3.9,48.7,-2.6,48.7).curveTo(-1.4,48.7,-0.6,48.3).curveTo(0.2,47.8,0.7,47).lineTo(4.6,49.3).curveTo(3.4,51,1.7,51.9).curveTo(0,52.7,-2.6,52.8).curveTo(-4.5,52.7,-6.1,52.1).closePath().moveTo(0.7,42.7).curveTo(0.3,41.6,-0.6,41.1).curveTo(-1.4,40.5,-2.6,40.5).curveTo(-3.8,40.6,-4.7,41.1).curveTo(-5.6,41.7,-6,42.7).lineTo(0.7,42.7).lineTo(0.7,42.7).closePath().moveTo(48.3,52.4).lineTo(48.3,36.8).lineTo(53.1,36.8).lineTo(53.1,39).curveTo(53.7,37.6,54.9,37).curveTo(56,36.5,57.5,36.5).curveTo(58.3,36.5,59,36.7).lineTo(60.2,37.1).lineTo(58.5,42).curveTo(58.1,41.7,57.5,41.5).curveTo(57,41.3,56.3,41.3).curveTo(54.8,41.3,54,42.1).curveTo(53.1,42.9,53.1,44.8).lineTo(53.1,52.4).closePath().moveTo(-28.5,52.4).lineTo(-28.5,31.3).lineTo(-20.1,31.3).curveTo(-16.2,31.3,-14.3,32.8).curveTo(-12.4,34.3,-12.4,37.4).curveTo(-12.4,38.8,-12.9,39.8).curveTo(-13.5,40.8,-14.5,41.5).curveTo(-13.3,42.2,-12.6,43.3).curveTo(-12,44.4,-12,46).curveTo(-12,49.4,-14.1,50.9).curveTo(-16.3,52.4,-20.1,52.4).closePath().moveTo(-23.5,48).lineTo(-20,48).curveTo(-18.5,48,-17.8,47.5).curveTo(-17.1,46.9,-17.1,45.9).curveTo(-17.1,44.9,-17.8,44.4).curveTo(-18.4,43.9,-20,43.9).lineTo(-23.5,43.9).closePath().moveTo(-23.5,39.5).lineTo(-19.8,39.5).curveTo(-18.5,39.4,-17.9,38.9).curveTo(-17.4,38.3,-17.4,37.5).curveTo(-17.4,36.7,-18,36.1).curveTo(-18.5,35.7,-19.9,35.7).lineTo(-23.5,35.7).closePath();
	var mask_graphics_150 = new cjs.Graphics().moveTo(61.5,52).curveTo(60.7,51.2,60.7,50).curveTo(60.7,48.7,61.5,47.8).curveTo(62.3,47.1,63.6,47).curveTo(64.9,47.1,65.6,47.8).curveTo(66.4,48.7,66.4,50).curveTo(66.4,51.2,65.6,52).curveTo(64.9,52.8,63.6,52.8).curveTo(62.3,52.8,61.5,52).closePath().moveTo(35.5,52.1).curveTo(33.9,51.5,32.9,50.4).curveTo(31.8,49.3,31.2,47.8).curveTo(30.7,46.4,30.7,44.6).curveTo(30.7,42.9,31.3,41.4).curveTo(31.9,39.9,33,38.8).curveTo(34.1,37.8,35.6,37.1).curveTo(37.1,36.5,38.9,36.5).curveTo(40.7,36.5,42.2,37.1).curveTo(43.7,37.7,44.8,38.7).curveTo(45.9,39.9,46.4,41.3).curveTo(47,42.8,47,44.6).lineTo(47,46.3).lineTo(35.4,46.3).curveTo(35.8,47.4,36.7,48.1).curveTo(37.6,48.7,39,48.7).curveTo(40.1,48.7,40.9,48.3).curveTo(41.7,47.8,42.2,47).lineTo(46.2,49.3).curveTo(44.9,51,43.2,51.9).curveTo(41.6,52.7,38.9,52.8).curveTo(37,52.7,35.5,52.1).closePath().moveTo(42.2,42.7).curveTo(41.8,41.6,41,41.1).curveTo(40.1,40.5,38.9,40.5).curveTo(37.7,40.6,36.9,41.1).curveTo(36,41.7,35.5,42.7).lineTo(42.2,42.7).lineTo(42.2,42.7).closePath().moveTo(24.2,52.4).curveTo(23.2,52.1,22.5,51.3).curveTo(21.8,50.6,21.4,49.4).curveTo(21,48.3,21,46.5).lineTo(21,41.1).lineTo(18.3,41.1).lineTo(18.3,36.8).lineTo(21,36.8).lineTo(21,33.4).lineTo(25.8,30.7).lineTo(25.8,36.8).lineTo(29.7,36.8).lineTo(29.7,41.1).lineTo(25.8,41.1).lineTo(25.8,46.2).curveTo(25.8,47.4,26.2,47.8).curveTo(26.6,48.2,27.2,48.2).curveTo(27.9,48.2,28.5,47.6).lineTo(30.7,51.3).curveTo(29.8,52,28.8,52.4).curveTo(27.7,52.7,26.5,52.8).curveTo(25.2,52.7,24.2,52.4).closePath().moveTo(12,52.4).curveTo(11,52.1,10.3,51.3).curveTo(9.6,50.6,9.2,49.4).curveTo(8.9,48.3,8.9,46.5).lineTo(8.9,41.1).lineTo(6.2,41.1).lineTo(6.2,36.8).lineTo(8.9,36.8).lineTo(8.9,33.4).lineTo(13.7,30.7).lineTo(13.7,36.8).lineTo(17.5,36.8).lineTo(17.5,41.1).lineTo(13.7,41.1).lineTo(13.7,46.2).curveTo(13.7,47.4,14,47.8).curveTo(14.4,48.2,15.1,48.2).curveTo(15.7,48.2,16.3,47.6).lineTo(18.5,51.3).curveTo(17.7,52,16.6,52.4).curveTo(15.6,52.7,14.4,52.8).curveTo(13.1,52.7,12,52.4).closePath().moveTo(-6.1,52.1).curveTo(-7.6,51.5,-8.7,50.4).curveTo(-9.7,49.3,-10.3,47.8).curveTo(-10.9,46.4,-10.9,44.6).curveTo(-10.9,42.9,-10.3,41.4).curveTo(-9.6,39.9,-8.6,38.8).curveTo(-7.4,37.8,-5.9,37.1).curveTo(-4.4,36.5,-2.7,36.5).curveTo(-0.9,36.5,0.6,37.1).curveTo(2.1,37.7,3.2,38.7).curveTo(4.3,39.9,4.9,41.3).curveTo(5.5,42.8,5.5,44.6).lineTo(5.5,46.3).lineTo(-6.2,46.3).curveTo(-5.8,47.4,-4.8,48.1).curveTo(-3.9,48.7,-2.6,48.7).curveTo(-1.4,48.7,-0.6,48.3).curveTo(0.2,47.8,0.7,47).lineTo(4.6,49.3).curveTo(3.4,51,1.7,51.9).curveTo(0,52.7,-2.6,52.8).curveTo(-4.5,52.7,-6.1,52.1).closePath().moveTo(0.7,42.7).curveTo(0.3,41.6,-0.6,41.1).curveTo(-1.4,40.5,-2.6,40.5).curveTo(-3.8,40.6,-4.7,41.1).curveTo(-5.6,41.7,-6,42.7).lineTo(0.7,42.7).lineTo(0.7,42.7).closePath().moveTo(48.3,52.4).lineTo(48.3,36.8).lineTo(53.1,36.8).lineTo(53.1,39).curveTo(53.7,37.6,54.9,37).curveTo(56,36.5,57.5,36.5).curveTo(58.3,36.5,59,36.7).lineTo(60.2,37.1).lineTo(58.5,42).curveTo(58.1,41.7,57.5,41.5).curveTo(57,41.3,56.3,41.3).curveTo(54.8,41.3,54,42.1).curveTo(53.1,42.9,53.1,44.8).lineTo(53.1,52.4).closePath().moveTo(-28.5,52.4).lineTo(-28.5,31.3).lineTo(-20.1,31.3).curveTo(-16.2,31.3,-14.3,32.8).curveTo(-12.4,34.3,-12.4,37.4).curveTo(-12.4,38.8,-12.9,39.8).curveTo(-13.5,40.8,-14.5,41.5).curveTo(-13.3,42.2,-12.6,43.3).curveTo(-12,44.4,-12,46).curveTo(-12,49.4,-14.1,50.9).curveTo(-16.3,52.4,-20.1,52.4).closePath().moveTo(-23.5,48).lineTo(-20,48).curveTo(-18.5,48,-17.8,47.5).curveTo(-17.1,46.9,-17.1,45.9).curveTo(-17.1,44.9,-17.8,44.4).curveTo(-18.4,43.9,-20,43.9).lineTo(-23.5,43.9).closePath().moveTo(-23.5,39.5).lineTo(-19.8,39.5).curveTo(-18.5,39.4,-17.9,38.9).curveTo(-17.4,38.3,-17.4,37.5).curveTo(-17.4,36.7,-18,36.1).curveTo(-18.5,35.7,-19.9,35.7).lineTo(-23.5,35.7).closePath();
	var mask_graphics_151 = new cjs.Graphics().moveTo(63.3,52).curveTo(62.5,51.2,62.5,50).curveTo(62.5,48.7,63.3,47.8).curveTo(64.1,47.1,65.3,47).curveTo(66.6,47.1,67.4,47.8).curveTo(68.2,48.7,68.2,50).curveTo(68.2,51.2,67.4,52).curveTo(66.6,52.8,65.3,52.8).curveTo(64,52.8,63.3,52).closePath().moveTo(37.2,52.1).curveTo(35.7,51.5,34.6,50.4).curveTo(33.6,49.3,33,47.8).curveTo(32.4,46.4,32.4,44.6).curveTo(32.4,42.9,33,41.4).curveTo(33.7,39.9,34.7,38.8).curveTo(35.9,37.8,37.4,37.1).curveTo(38.9,36.5,40.6,36.5).curveTo(42.4,36.5,43.9,37.1).curveTo(45.4,37.7,46.5,38.7).curveTo(47.6,39.9,48.2,41.3).curveTo(48.8,42.8,48.8,44.6).lineTo(48.8,46.3).lineTo(37.1,46.3).curveTo(37.5,47.4,38.5,48.1).curveTo(39.4,48.7,40.7,48.7).curveTo(41.9,48.7,42.7,48.3).curveTo(43.5,47.8,44,47).lineTo(47.9,49.3).curveTo(46.7,51,45,51.9).curveTo(43.3,52.7,40.7,52.8).curveTo(38.8,52.7,37.2,52.1).closePath().moveTo(44,42.7).curveTo(43.6,41.6,42.7,41.1).curveTo(41.9,40.5,40.7,40.5).curveTo(39.5,40.6,38.6,41.1).curveTo(37.7,41.7,37.3,42.7).lineTo(44,42.7).lineTo(44,42.7).closePath().moveTo(25.9,52.4).curveTo(24.9,52.1,24.2,51.3).curveTo(23.5,50.6,23.1,49.4).curveTo(22.8,48.3,22.8,46.5).lineTo(22.8,41.1).lineTo(20.1,41.1).lineTo(20.1,36.8).lineTo(22.8,36.8).lineTo(22.8,33.4).lineTo(27.6,30.7).lineTo(27.6,36.8).lineTo(31.4,36.8).lineTo(31.4,41.1).lineTo(27.6,41.1).lineTo(27.6,46.2).curveTo(27.6,47.4,27.9,47.8).curveTo(28.3,48.2,29,48.2).curveTo(29.6,48.2,30.2,47.6).lineTo(32.4,51.3).curveTo(31.6,52,30.5,52.4).curveTo(29.5,52.7,28.3,52.8).curveTo(27,52.7,25.9,52.4).closePath().moveTo(13.8,52.4).curveTo(12.8,52.1,12.1,51.3).curveTo(11.4,50.6,11,49.4).curveTo(10.6,48.3,10.6,46.5).lineTo(10.6,41.1).lineTo(7.9,41.1).lineTo(7.9,36.8).lineTo(10.6,36.8).lineTo(10.6,33.4).lineTo(15.4,30.7).lineTo(15.4,36.8).lineTo(19.3,36.8).lineTo(19.3,41.1).lineTo(15.4,41.1).lineTo(15.4,46.2).curveTo(15.4,47.4,15.8,47.8).curveTo(16.2,48.2,16.8,48.2).curveTo(17.5,48.2,18.1,47.6).lineTo(20.3,51.3).curveTo(19.4,52,18.4,52.4).curveTo(17.3,52.7,16.1,52.8).curveTo(14.8,52.7,13.8,52.4).closePath().moveTo(-4.3,52.1).curveTo(-5.9,51.5,-6.9,50.4).curveTo(-8,49.3,-8.6,47.8).curveTo(-9.1,46.4,-9.1,44.6).curveTo(-9.1,42.9,-8.5,41.4).curveTo(-7.9,39.9,-6.8,38.8).curveTo(-5.7,37.8,-4.2,37.1).curveTo(-2.7,36.5,-0.9,36.5).curveTo(0.9,36.5,2.4,37.1).curveTo(3.9,37.7,5,38.7).curveTo(6.1,39.9,6.6,41.3).curveTo(7.2,42.8,7.2,44.6).lineTo(7.2,46.3).lineTo(-4.4,46.3).curveTo(-4,47.4,-3.1,48.1).curveTo(-2.2,48.7,-0.8,48.7).curveTo(0.3,48.7,1.1,48.3).curveTo(1.9,47.8,2.4,47).lineTo(6.4,49.3).curveTo(5.1,51,3.4,51.9).curveTo(1.8,52.7,-0.9,52.8).curveTo(-2.8,52.7,-4.3,52.1).closePath().moveTo(2.4,42.7).curveTo(2,41.6,1.2,41.1).curveTo(0.3,40.5,-0.9,40.5).curveTo(-2.1,40.6,-2.9,41.1).curveTo(-3.8,41.7,-4.3,42.7).lineTo(2.4,42.7).lineTo(2.4,42.7).closePath().moveTo(50.1,52.4).lineTo(50.1,36.8).lineTo(54.9,36.8).lineTo(54.9,39).curveTo(55.5,37.6,56.6,37).curveTo(57.7,36.5,59.3,36.5).curveTo(60,36.5,60.7,36.7).lineTo(61.9,37.1).lineTo(60.2,42).curveTo(59.9,41.7,59.3,41.5).curveTo(58.7,41.3,58,41.3).curveTo(56.6,41.3,55.7,42.1).curveTo(54.9,42.9,54.9,44.8).lineTo(54.9,52.4).closePath().moveTo(-26.7,52.4).lineTo(-26.7,31.3).lineTo(-18.3,31.3).curveTo(-14.5,31.3,-12.5,32.8).curveTo(-10.6,34.3,-10.6,37.4).curveTo(-10.6,38.8,-11.2,39.8).curveTo(-11.8,40.8,-12.8,41.5).curveTo(-11.5,42.2,-10.9,43.3).curveTo(-10.2,44.4,-10.2,46).curveTo(-10.2,49.4,-12.4,50.9).curveTo(-14.5,52.4,-18.3,52.4).closePath().moveTo(-21.8,48).lineTo(-18.2,48).curveTo(-16.7,48,-16.1,47.5).curveTo(-15.4,46.9,-15.4,45.9).curveTo(-15.4,44.9,-16,44.4).curveTo(-16.6,43.9,-18.3,43.9).lineTo(-21.8,43.9).closePath().moveTo(-21.8,39.5).lineTo(-18.1,39.5).curveTo(-16.7,39.4,-16.2,38.9).curveTo(-15.6,38.3,-15.6,37.5).curveTo(-15.6,36.7,-16.2,36.1).curveTo(-16.8,35.7,-18.1,35.7).lineTo(-21.8,35.7).closePath();
	var mask_graphics_152 = new cjs.Graphics().moveTo(68.4,52).curveTo(67.6,51.2,67.6,50).curveTo(67.6,48.7,68.4,47.8).curveTo(69.2,47.1,70.5,47).curveTo(71.8,47.1,72.5,47.8).curveTo(73.3,48.7,73.3,50).curveTo(73.3,51.2,72.5,52).curveTo(71.8,52.8,70.5,52.8).curveTo(69.2,52.8,68.4,52).closePath().moveTo(42.4,52.1).curveTo(40.8,51.5,39.8,50.4).curveTo(38.7,49.3,38.1,47.8).curveTo(37.6,46.4,37.6,44.6).curveTo(37.6,42.9,38.2,41.4).curveTo(38.8,39.9,39.9,38.8).curveTo(41,37.8,42.5,37.1).curveTo(44,36.5,45.8,36.5).curveTo(47.6,36.5,49.1,37.1).curveTo(50.6,37.7,51.7,38.7).curveTo(52.8,39.9,53.3,41.3).curveTo(53.9,42.8,53.9,44.6).lineTo(53.9,46.3).lineTo(42.3,46.3).curveTo(42.7,47.4,43.6,48.1).curveTo(44.5,48.7,45.9,48.7).curveTo(47,48.7,47.8,48.3).curveTo(48.6,47.8,49.1,47).lineTo(53.1,49.3).curveTo(51.8,51,50.1,51.9).curveTo(48.5,52.7,45.8,52.8).curveTo(43.9,52.7,42.4,52.1).closePath().moveTo(49.1,42.7).curveTo(48.7,41.6,47.9,41.1).curveTo(47,40.5,45.8,40.5).curveTo(44.6,40.6,43.8,41.1).curveTo(42.9,41.7,42.4,42.7).lineTo(49.1,42.7).lineTo(49.1,42.7).closePath().moveTo(31.1,52.4).curveTo(30.1,52.1,29.4,51.3).curveTo(28.7,50.6,28.3,49.4).curveTo(27.9,48.3,27.9,46.5).lineTo(27.9,41.1).lineTo(25.2,41.1).lineTo(25.2,36.8).lineTo(27.9,36.8).lineTo(27.9,33.4).lineTo(32.7,30.7).lineTo(32.7,36.8).lineTo(36.6,36.8).lineTo(36.6,41.1).lineTo(32.7,41.1).lineTo(32.7,46.2).curveTo(32.7,47.4,33.1,47.8).curveTo(33.5,48.2,34.1,48.2).curveTo(34.8,48.2,35.4,47.6).lineTo(37.6,51.3).curveTo(36.7,52,35.7,52.4).curveTo(34.6,52.7,33.4,52.8).curveTo(32.1,52.7,31.1,52.4).closePath().moveTo(18.9,52.4).curveTo(17.9,52.1,17.2,51.3).curveTo(16.5,50.6,16.1,49.4).curveTo(15.8,48.3,15.8,46.5).lineTo(15.8,41.1).lineTo(13.1,41.1).lineTo(13.1,36.8).lineTo(15.8,36.8).lineTo(15.8,33.4).lineTo(20.6,30.7).lineTo(20.6,36.8).lineTo(24.4,36.8).lineTo(24.4,41.1).lineTo(20.6,41.1).lineTo(20.6,46.2).curveTo(20.6,47.4,20.9,47.8).curveTo(21.3,48.2,22,48.2).curveTo(22.6,48.2,23.2,47.6).lineTo(25.4,51.3).curveTo(24.6,52,23.5,52.4).curveTo(22.5,52.7,21.3,52.8).curveTo(20,52.7,18.9,52.4).closePath().moveTo(0.8,52.1).curveTo(-0.7,51.5,-1.8,50.4).curveTo(-2.8,49.3,-3.4,47.8).curveTo(-4,46.4,-4,44.6).curveTo(-4,42.9,-3.4,41.4).curveTo(-2.7,39.9,-1.7,38.8).curveTo(-0.5,37.8,1,37.1).curveTo(2.5,36.5,4.2,36.5).curveTo(6,36.5,7.5,37.1).curveTo(9,37.7,10.1,38.7).curveTo(11.2,39.9,11.8,41.3).curveTo(12.4,42.8,12.4,44.6).lineTo(12.4,46.3).lineTo(0.7,46.3).curveTo(1.1,47.4,2.1,48.1).curveTo(3,48.7,4.3,48.7).curveTo(5.5,48.7,6.3,48.3).curveTo(7.1,47.8,7.6,47).lineTo(11.5,49.3).curveTo(10.3,51,8.6,51.9).curveTo(6.9,52.7,4.3,52.8).curveTo(2.4,52.7,0.8,52.1).closePath().moveTo(7.6,42.7).curveTo(7.2,41.6,6.3,41.1).curveTo(5.5,40.5,4.3,40.5).curveTo(3.1,40.6,2.2,41.1).curveTo(1.3,41.7,0.9,42.7).lineTo(7.6,42.7).lineTo(7.6,42.7).closePath().moveTo(55.2,52.4).lineTo(55.2,36.8).lineTo(60,36.8).lineTo(60,39).curveTo(60.6,37.6,61.8,37).curveTo(62.9,36.5,64.4,36.5).curveTo(65.2,36.5,65.9,36.7).lineTo(67.1,37.1).lineTo(65.4,42).curveTo(65,41.7,64.4,41.5).curveTo(63.9,41.3,63.2,41.3).curveTo(61.7,41.3,60.9,42.1).curveTo(60,42.9,60,44.8).lineTo(60,52.4).closePath().moveTo(-21.6,52.4).lineTo(-21.6,31.3).lineTo(-13.2,31.3).curveTo(-9.3,31.3,-7.4,32.8).curveTo(-5.5,34.3,-5.5,37.4).curveTo(-5.5,38.8,-6,39.8).curveTo(-6.6,40.8,-7.6,41.5).curveTo(-6.4,42.2,-5.7,43.3).curveTo(-5.1,44.4,-5.1,46).curveTo(-5.1,49.4,-7.2,50.9).curveTo(-9.4,52.4,-13.2,52.4).closePath().moveTo(-16.6,48).lineTo(-13.1,48).curveTo(-11.6,48,-10.9,47.5).curveTo(-10.2,46.9,-10.2,45.9).curveTo(-10.2,44.9,-10.9,44.4).curveTo(-11.5,43.9,-13.1,43.9).lineTo(-16.6,43.9).closePath().moveTo(-16.6,39.5).lineTo(-12.9,39.5).curveTo(-11.6,39.4,-11,38.9).curveTo(-10.5,38.3,-10.5,37.5).curveTo(-10.5,36.7,-11.1,36.1).curveTo(-11.6,35.7,-13,35.7).lineTo(-16.6,35.7).closePath();
	var mask_graphics_153 = new cjs.Graphics().moveTo(77.1,52).curveTo(76.3,51.2,76.3,50).curveTo(76.3,48.7,77.1,47.8).curveTo(77.9,47.1,79.1,47).curveTo(80.4,47.1,81.2,47.8).curveTo(82,48.7,82,50).curveTo(82,51.2,81.2,52).curveTo(80.4,52.8,79.1,52.8).curveTo(77.8,52.8,77.1,52).closePath().moveTo(51,52.1).curveTo(49.5,51.5,48.4,50.4).curveTo(47.4,49.3,46.8,47.8).curveTo(46.2,46.4,46.2,44.6).curveTo(46.2,42.9,46.8,41.4).curveTo(47.5,39.9,48.5,38.8).curveTo(49.7,37.8,51.2,37.1).curveTo(52.7,36.5,54.4,36.5).curveTo(56.2,36.5,57.7,37.1).curveTo(59.2,37.7,60.3,38.7).curveTo(61.4,39.9,62,41.3).curveTo(62.6,42.8,62.6,44.6).lineTo(62.6,46.3).lineTo(50.9,46.3).curveTo(51.3,47.4,52.3,48.1).curveTo(53.2,48.7,54.5,48.7).curveTo(55.7,48.7,56.5,48.3).curveTo(57.3,47.8,57.8,47).lineTo(61.7,49.3).curveTo(60.5,51,58.8,51.9).curveTo(57.1,52.7,54.5,52.8).curveTo(52.6,52.7,51,52.1).closePath().moveTo(57.8,42.7).curveTo(57.4,41.6,56.5,41.1).curveTo(55.7,40.5,54.5,40.5).curveTo(53.3,40.6,52.4,41.1).curveTo(51.5,41.7,51.1,42.7).lineTo(57.8,42.7).lineTo(57.8,42.7).closePath().moveTo(39.7,52.4).curveTo(38.7,52.1,38,51.3).curveTo(37.3,50.6,36.9,49.4).curveTo(36.6,48.3,36.6,46.5).lineTo(36.6,41.1).lineTo(33.9,41.1).lineTo(33.9,36.8).lineTo(36.6,36.8).lineTo(36.6,33.4).lineTo(41.4,30.7).lineTo(41.4,36.8).lineTo(45.2,36.8).lineTo(45.2,41.1).lineTo(41.4,41.1).lineTo(41.4,46.2).curveTo(41.4,47.4,41.7,47.8).curveTo(42.1,48.2,42.8,48.2).curveTo(43.4,48.2,44,47.6).lineTo(46.2,51.3).curveTo(45.4,52,44.3,52.4).curveTo(43.3,52.7,42.1,52.8).curveTo(40.8,52.7,39.7,52.4).closePath().moveTo(27.6,52.4).curveTo(26.6,52.1,25.9,51.3).curveTo(25.2,50.6,24.8,49.4).curveTo(24.4,48.3,24.4,46.5).lineTo(24.4,41.1).lineTo(21.7,41.1).lineTo(21.7,36.8).lineTo(24.4,36.8).lineTo(24.4,33.4).lineTo(29.2,30.7).lineTo(29.2,36.8).lineTo(33.1,36.8).lineTo(33.1,41.1).lineTo(29.2,41.1).lineTo(29.2,46.2).curveTo(29.2,47.4,29.6,47.8).curveTo(30,48.2,30.6,48.2).curveTo(31.3,48.2,31.9,47.6).lineTo(34.1,51.3).curveTo(33.2,52,32.2,52.4).curveTo(31.1,52.7,29.9,52.8).curveTo(28.6,52.7,27.6,52.4).closePath().moveTo(9.5,52.1).curveTo(7.9,51.5,6.9,50.4).curveTo(5.8,49.3,5.2,47.8).curveTo(4.7,46.4,4.7,44.6).curveTo(4.7,42.9,5.3,41.4).curveTo(5.9,39.9,7,38.8).curveTo(8.1,37.8,9.6,37.1).curveTo(11.1,36.5,12.9,36.5).curveTo(14.7,36.5,16.2,37.1).curveTo(17.7,37.7,18.8,38.7).curveTo(19.9,39.9,20.4,41.3).curveTo(21,42.8,21,44.6).lineTo(21,46.3).lineTo(9.4,46.3).curveTo(9.8,47.4,10.7,48.1).curveTo(11.6,48.7,13,48.7).curveTo(14.1,48.7,14.9,48.3).curveTo(15.7,47.8,16.2,47).lineTo(20.2,49.3).curveTo(18.9,51,17.2,51.9).curveTo(15.6,52.7,12.9,52.8).curveTo(11,52.7,9.5,52.1).closePath().moveTo(16.2,42.7).curveTo(15.8,41.6,15,41.1).curveTo(14.1,40.5,12.9,40.5).curveTo(11.7,40.6,10.9,41.1).curveTo(10,41.7,9.5,42.7).lineTo(16.2,42.7).lineTo(16.2,42.7).closePath().moveTo(63.9,52.4).lineTo(63.9,36.8).lineTo(68.7,36.8).lineTo(68.7,39).curveTo(69.3,37.6,70.4,37).curveTo(71.5,36.5,73.1,36.5).curveTo(73.8,36.5,74.5,36.7).lineTo(75.7,37.1).lineTo(74,42).curveTo(73.7,41.7,73.1,41.5).curveTo(72.5,41.3,71.8,41.3).curveTo(70.4,41.3,69.5,42.1).curveTo(68.7,42.9,68.7,44.8).lineTo(68.7,52.4).closePath().moveTo(-12.9,52.4).lineTo(-12.9,31.3).lineTo(-4.5,31.3).curveTo(-0.7,31.3,1.3,32.8).curveTo(3.2,34.3,3.2,37.4).curveTo(3.2,38.8,2.6,39.8).curveTo(2,40.8,1,41.5).curveTo(2.3,42.2,2.9,43.3).curveTo(3.6,44.4,3.6,46).curveTo(3.6,49.4,1.4,50.9).curveTo(-0.7,52.4,-4.5,52.4).closePath().moveTo(-8,48).lineTo(-4.4,48).curveTo(-2.9,48,-2.3,47.5).curveTo(-1.6,46.9,-1.6,45.9).curveTo(-1.6,44.9,-2.2,44.4).curveTo(-2.8,43.9,-4.5,43.9).lineTo(-8,43.9).closePath().moveTo(-8,39.5).lineTo(-4.3,39.5).curveTo(-2.9,39.4,-2.4,38.9).curveTo(-1.8,38.3,-1.8,37.5).curveTo(-1.8,36.7,-2.4,36.1).curveTo(-3,35.7,-4.3,35.7).lineTo(-8,35.7).closePath();
	var mask_graphics_154 = new cjs.Graphics().moveTo(89.2,52).curveTo(88.4,51.2,88.4,50).curveTo(88.4,48.7,89.2,47.8).curveTo(90,47.1,91.2,47).curveTo(92.5,47.1,93.3,47.8).curveTo(94.1,48.7,94.1,50).curveTo(94.1,51.2,93.3,52).curveTo(92.5,52.8,91.2,52.8).curveTo(89.9,52.8,89.2,52).closePath().moveTo(63.1,52.1).curveTo(61.6,51.5,60.5,50.4).curveTo(59.5,49.3,58.9,47.8).curveTo(58.3,46.4,58.3,44.6).curveTo(58.3,42.9,58.9,41.4).curveTo(59.6,39.9,60.6,38.8).curveTo(61.8,37.8,63.3,37.1).curveTo(64.8,36.5,66.5,36.5).curveTo(68.3,36.5,69.8,37.1).curveTo(71.3,37.7,72.4,38.7).curveTo(73.5,39.9,74.1,41.3).curveTo(74.7,42.8,74.7,44.6).lineTo(74.7,46.3).lineTo(63,46.3).curveTo(63.4,47.4,64.4,48.1).curveTo(65.3,48.7,66.6,48.7).curveTo(67.8,48.7,68.6,48.3).curveTo(69.4,47.8,69.9,47).lineTo(73.8,49.3).curveTo(72.6,51,70.9,51.9).curveTo(69.2,52.7,66.6,52.8).curveTo(64.7,52.7,63.1,52.1).closePath().moveTo(69.9,42.7).curveTo(69.5,41.6,68.6,41.1).curveTo(67.8,40.5,66.6,40.5).curveTo(65.4,40.6,64.5,41.1).curveTo(63.6,41.7,63.2,42.7).lineTo(69.9,42.7).lineTo(69.9,42.7).closePath().moveTo(51.8,52.4).curveTo(50.8,52.1,50.1,51.3).curveTo(49.4,50.6,49,49.4).curveTo(48.7,48.3,48.7,46.5).lineTo(48.7,41.1).lineTo(46,41.1).lineTo(46,36.8).lineTo(48.7,36.8).lineTo(48.7,33.4).lineTo(53.5,30.7).lineTo(53.5,36.8).lineTo(57.3,36.8).lineTo(57.3,41.1).lineTo(53.5,41.1).lineTo(53.5,46.2).curveTo(53.5,47.4,53.8,47.8).curveTo(54.2,48.2,54.9,48.2).curveTo(55.5,48.2,56.1,47.6).lineTo(58.3,51.3).curveTo(57.5,52,56.4,52.4).curveTo(55.4,52.7,54.2,52.8).curveTo(52.9,52.7,51.8,52.4).closePath().moveTo(39.7,52.4).curveTo(38.7,52.1,38,51.3).curveTo(37.3,50.6,36.9,49.4).curveTo(36.5,48.3,36.5,46.5).lineTo(36.5,41.1).lineTo(33.8,41.1).lineTo(33.8,36.8).lineTo(36.5,36.8).lineTo(36.5,33.4).lineTo(41.3,30.7).lineTo(41.3,36.8).lineTo(45.2,36.8).lineTo(45.2,41.1).lineTo(41.3,41.1).lineTo(41.3,46.2).curveTo(41.3,47.4,41.7,47.8).curveTo(42.1,48.2,42.7,48.2).curveTo(43.4,48.2,44,47.6).lineTo(46.2,51.3).curveTo(45.3,52,44.3,52.4).curveTo(43.2,52.7,42,52.8).curveTo(40.7,52.7,39.7,52.4).closePath().moveTo(21.6,52.1).curveTo(20,51.5,19,50.4).curveTo(17.9,49.3,17.3,47.8).curveTo(16.8,46.4,16.8,44.6).curveTo(16.8,42.9,17.4,41.4).curveTo(18,39.9,19.1,38.8).curveTo(20.2,37.8,21.7,37.1).curveTo(23.2,36.5,25,36.5).curveTo(26.8,36.5,28.3,37.1).curveTo(29.8,37.7,30.9,38.7).curveTo(32,39.9,32.5,41.3).curveTo(33.1,42.8,33.1,44.6).lineTo(33.1,46.3).lineTo(21.5,46.3).curveTo(21.9,47.4,22.8,48.1).curveTo(23.7,48.7,25.1,48.7).curveTo(26.2,48.7,27,48.3).curveTo(27.8,47.8,28.3,47).lineTo(32.3,49.3).curveTo(31,51,29.3,51.9).curveTo(27.7,52.7,25,52.8).curveTo(23.1,52.7,21.6,52.1).closePath().moveTo(28.3,42.7).curveTo(27.9,41.6,27.1,41.1).curveTo(26.2,40.5,25,40.5).curveTo(23.8,40.6,23,41.1).curveTo(22.1,41.7,21.6,42.7).lineTo(28.3,42.7).lineTo(28.3,42.7).closePath().moveTo(76,52.4).lineTo(76,36.8).lineTo(80.8,36.8).lineTo(80.8,39).curveTo(81.4,37.6,82.5,37).curveTo(83.6,36.5,85.2,36.5).curveTo(85.9,36.5,86.6,36.7).lineTo(87.8,37.1).lineTo(86.1,42).curveTo(85.8,41.7,85.2,41.5).curveTo(84.6,41.3,83.9,41.3).curveTo(82.5,41.3,81.6,42.1).curveTo(80.8,42.9,80.8,44.8).lineTo(80.8,52.4).closePath().moveTo(-0.8,52.4).lineTo(-0.8,31.3).lineTo(7.6,31.3).curveTo(11.4,31.3,13.4,32.8).curveTo(15.3,34.3,15.3,37.4).curveTo(15.3,38.8,14.7,39.8).curveTo(14.1,40.8,13.1,41.5).curveTo(14.4,42.2,15,43.3).curveTo(15.7,44.4,15.7,46).curveTo(15.7,49.4,13.5,50.9).curveTo(11.4,52.4,7.6,52.4).closePath().moveTo(4.1,48).lineTo(7.7,48).curveTo(9.2,48,9.8,47.5).curveTo(10.5,46.9,10.5,45.9).curveTo(10.5,44.9,9.9,44.4).curveTo(9.3,43.9,7.6,43.9).lineTo(4.1,43.9).closePath().moveTo(4.1,39.5).lineTo(7.8,39.5).curveTo(9.2,39.4,9.7,38.9).curveTo(10.3,38.3,10.3,37.5).curveTo(10.3,36.7,9.7,36.1).curveTo(9.1,35.7,7.8,35.7).lineTo(4.1,35.7).closePath();
	var mask_graphics_155 = new cjs.Graphics().moveTo(104.7,52).curveTo(103.9,51.2,103.9,50).curveTo(103.9,48.7,104.7,47.8).curveTo(105.5,47.1,106.8,47).curveTo(108.1,47.1,108.8,47.8).curveTo(109.6,48.7,109.6,50).curveTo(109.6,51.2,108.8,52).curveTo(108.1,52.8,106.8,52.8).curveTo(105.5,52.8,104.7,52).closePath().moveTo(78.7,52.1).curveTo(77.1,51.5,76.1,50.4).curveTo(75,49.3,74.4,47.8).curveTo(73.9,46.4,73.9,44.6).curveTo(73.9,42.9,74.5,41.4).curveTo(75.1,39.9,76.2,38.8).curveTo(77.3,37.8,78.8,37.1).curveTo(80.3,36.5,82.1,36.5).curveTo(83.9,36.5,85.4,37.1).curveTo(86.9,37.7,88,38.7).curveTo(89.1,39.9,89.6,41.3).curveTo(90.2,42.8,90.2,44.6).lineTo(90.2,46.3).lineTo(78.6,46.3).curveTo(79,47.4,79.9,48.1).curveTo(80.8,48.7,82.2,48.7).curveTo(83.3,48.7,84.1,48.3).curveTo(84.9,47.8,85.4,47).lineTo(89.4,49.3).curveTo(88.1,51,86.4,51.9).curveTo(84.8,52.7,82.1,52.8).curveTo(80.2,52.7,78.7,52.1).closePath().moveTo(85.4,42.7).curveTo(85,41.6,84.2,41.1).curveTo(83.3,40.5,82.1,40.5).curveTo(80.9,40.6,80.1,41.1).curveTo(79.2,41.7,78.7,42.7).lineTo(85.4,42.7).lineTo(85.4,42.7).closePath().moveTo(67.4,52.4).curveTo(66.4,52.1,65.7,51.3).curveTo(65,50.6,64.6,49.4).curveTo(64.2,48.3,64.2,46.5).lineTo(64.2,41.1).lineTo(61.5,41.1).lineTo(61.5,36.8).lineTo(64.2,36.8).lineTo(64.2,33.4).lineTo(69,30.7).lineTo(69,36.8).lineTo(72.9,36.8).lineTo(72.9,41.1).lineTo(69,41.1).lineTo(69,46.2).curveTo(69,47.4,69.4,47.8).curveTo(69.8,48.2,70.4,48.2).curveTo(71.1,48.2,71.7,47.6).lineTo(73.9,51.3).curveTo(73,52,72,52.4).curveTo(70.9,52.7,69.7,52.8).curveTo(68.4,52.7,67.4,52.4).closePath().moveTo(55.2,52.4).curveTo(54.2,52.1,53.5,51.3).curveTo(52.8,50.6,52.4,49.4).curveTo(52.1,48.3,52.1,46.5).lineTo(52.1,41.1).lineTo(49.4,41.1).lineTo(49.4,36.8).lineTo(52.1,36.8).lineTo(52.1,33.4).lineTo(56.9,30.7).lineTo(56.9,36.8).lineTo(60.7,36.8).lineTo(60.7,41.1).lineTo(56.9,41.1).lineTo(56.9,46.2).curveTo(56.9,47.4,57.2,47.8).curveTo(57.6,48.2,58.3,48.2).curveTo(58.9,48.2,59.5,47.6).lineTo(61.7,51.3).curveTo(60.9,52,59.8,52.4).curveTo(58.8,52.7,57.6,52.8).curveTo(56.3,52.7,55.2,52.4).closePath().moveTo(37.1,52.1).curveTo(35.6,51.5,34.5,50.4).curveTo(33.5,49.3,32.9,47.8).curveTo(32.3,46.4,32.3,44.6).curveTo(32.3,42.9,32.9,41.4).curveTo(33.6,39.9,34.6,38.8).curveTo(35.8,37.8,37.3,37.1).curveTo(38.8,36.5,40.5,36.5).curveTo(42.3,36.5,43.8,37.1).curveTo(45.3,37.7,46.4,38.7).curveTo(47.5,39.9,48.1,41.3).curveTo(48.7,42.8,48.7,44.6).lineTo(48.7,46.3).lineTo(37,46.3).curveTo(37.4,47.4,38.4,48.1).curveTo(39.3,48.7,40.6,48.7).curveTo(41.8,48.7,42.6,48.3).curveTo(43.4,47.8,43.9,47).lineTo(47.8,49.3).curveTo(46.6,51,44.9,51.9).curveTo(43.2,52.7,40.6,52.8).curveTo(38.7,52.7,37.1,52.1).closePath().moveTo(43.9,42.7).curveTo(43.5,41.6,42.6,41.1).curveTo(41.8,40.5,40.6,40.5).curveTo(39.4,40.6,38.5,41.1).curveTo(37.6,41.7,37.2,42.7).lineTo(43.9,42.7).lineTo(43.9,42.7).closePath().moveTo(91.5,52.4).lineTo(91.5,36.8).lineTo(96.3,36.8).lineTo(96.3,39).curveTo(96.9,37.6,98.1,37).curveTo(99.2,36.5,100.7,36.5).curveTo(101.5,36.5,102.2,36.7).lineTo(103.4,37.1).lineTo(101.7,42).curveTo(101.3,41.7,100.7,41.5).curveTo(100.2,41.3,99.5,41.3).curveTo(98,41.3,97.2,42.1).curveTo(96.3,42.9,96.3,44.8).lineTo(96.3,52.4).closePath().moveTo(14.7,52.4).lineTo(14.7,31.3).lineTo(23.1,31.3).curveTo(27,31.3,28.9,32.8).curveTo(30.8,34.3,30.8,37.4).curveTo(30.8,38.8,30.3,39.8).curveTo(29.7,40.8,28.7,41.5).curveTo(29.9,42.2,30.6,43.3).curveTo(31.2,44.4,31.2,46).curveTo(31.2,49.4,29.1,50.9).curveTo(26.9,52.4,23.1,52.4).closePath().moveTo(19.7,48).lineTo(23.2,48).curveTo(24.7,48,25.4,47.5).curveTo(26.1,46.9,26.1,45.9).curveTo(26.1,44.9,25.4,44.4).curveTo(24.8,43.9,23.2,43.9).lineTo(19.7,43.9).closePath().moveTo(19.7,39.5).lineTo(23.4,39.5).curveTo(24.7,39.4,25.3,38.9).curveTo(25.8,38.3,25.8,37.5).curveTo(25.8,36.7,25.2,36.1).curveTo(24.7,35.7,23.3,35.7).lineTo(19.7,35.7).closePath();
	var mask_graphics_156 = new cjs.Graphics().moveTo(123.7,52).curveTo(122.9,51.2,122.9,50).curveTo(122.9,48.7,123.7,47.8).curveTo(124.5,47.1,125.8,47).curveTo(127.1,47.1,127.8,47.8).curveTo(128.6,48.7,128.6,50).curveTo(128.6,51.2,127.8,52).curveTo(127.1,52.8,125.8,52.8).curveTo(124.5,52.8,123.7,52).closePath().moveTo(97.7,52.1).curveTo(96.1,51.5,95.1,50.4).curveTo(94,49.3,93.4,47.8).curveTo(92.9,46.4,92.9,44.6).curveTo(92.9,42.9,93.5,41.4).curveTo(94.1,39.9,95.2,38.8).curveTo(96.3,37.8,97.8,37.1).curveTo(99.3,36.5,101.1,36.5).curveTo(102.9,36.5,104.4,37.1).curveTo(105.9,37.7,107,38.7).curveTo(108.1,39.9,108.6,41.3).curveTo(109.2,42.8,109.2,44.6).lineTo(109.2,46.3).lineTo(97.6,46.3).curveTo(98,47.4,98.9,48.1).curveTo(99.8,48.7,101.2,48.7).curveTo(102.3,48.7,103.1,48.3).curveTo(103.9,47.8,104.4,47).lineTo(108.4,49.3).curveTo(107.1,51,105.4,51.9).curveTo(103.8,52.7,101.1,52.8).curveTo(99.2,52.7,97.7,52.1).closePath().moveTo(104.4,42.7).curveTo(104,41.6,103.2,41.1).curveTo(102.3,40.5,101.1,40.5).curveTo(99.9,40.6,99.1,41.1).curveTo(98.2,41.7,97.7,42.7).lineTo(104.4,42.7).lineTo(104.4,42.7).closePath().moveTo(86.4,52.4).curveTo(85.4,52.1,84.7,51.3).curveTo(84,50.6,83.6,49.4).curveTo(83.2,48.3,83.2,46.5).lineTo(83.2,41.1).lineTo(80.5,41.1).lineTo(80.5,36.8).lineTo(83.2,36.8).lineTo(83.2,33.4).lineTo(88,30.7).lineTo(88,36.8).lineTo(91.9,36.8).lineTo(91.9,41.1).lineTo(88,41.1).lineTo(88,46.2).curveTo(88,47.4,88.4,47.8).curveTo(88.8,48.2,89.4,48.2).curveTo(90.1,48.2,90.7,47.6).lineTo(92.9,51.3).curveTo(92,52,91,52.4).curveTo(89.9,52.7,88.7,52.8).curveTo(87.4,52.7,86.4,52.4).closePath().moveTo(74.2,52.4).curveTo(73.2,52.1,72.5,51.3).curveTo(71.8,50.6,71.4,49.4).curveTo(71.1,48.3,71.1,46.5).lineTo(71.1,41.1).lineTo(68.4,41.1).lineTo(68.4,36.8).lineTo(71.1,36.8).lineTo(71.1,33.4).lineTo(75.9,30.7).lineTo(75.9,36.8).lineTo(79.7,36.8).lineTo(79.7,41.1).lineTo(75.9,41.1).lineTo(75.9,46.2).curveTo(75.9,47.4,76.2,47.8).curveTo(76.6,48.2,77.3,48.2).curveTo(77.9,48.2,78.5,47.6).lineTo(80.7,51.3).curveTo(79.9,52,78.8,52.4).curveTo(77.8,52.7,76.6,52.8).curveTo(75.3,52.7,74.2,52.4).closePath().moveTo(56.1,52.1).curveTo(54.6,51.5,53.5,50.4).curveTo(52.5,49.3,51.9,47.8).curveTo(51.3,46.4,51.3,44.6).curveTo(51.3,42.9,51.9,41.4).curveTo(52.6,39.9,53.6,38.8).curveTo(54.8,37.8,56.3,37.1).curveTo(57.8,36.5,59.5,36.5).curveTo(61.3,36.5,62.8,37.1).curveTo(64.3,37.7,65.4,38.7).curveTo(66.5,39.9,67.1,41.3).curveTo(67.7,42.8,67.7,44.6).lineTo(67.7,46.3).lineTo(56,46.3).curveTo(56.4,47.4,57.4,48.1).curveTo(58.3,48.7,59.6,48.7).curveTo(60.8,48.7,61.6,48.3).curveTo(62.4,47.8,62.9,47).lineTo(66.8,49.3).curveTo(65.6,51,63.9,51.9).curveTo(62.2,52.7,59.6,52.8).curveTo(57.7,52.7,56.1,52.1).closePath().moveTo(62.9,42.7).curveTo(62.5,41.6,61.6,41.1).curveTo(60.8,40.5,59.6,40.5).curveTo(58.4,40.6,57.5,41.1).curveTo(56.6,41.7,56.2,42.7).lineTo(62.9,42.7).lineTo(62.9,42.7).closePath().moveTo(110.5,52.4).lineTo(110.5,36.8).lineTo(115.3,36.8).lineTo(115.3,39).curveTo(115.9,37.6,117.1,37).curveTo(118.2,36.5,119.7,36.5).curveTo(120.5,36.5,121.2,36.7).lineTo(122.4,37.1).lineTo(120.7,42).curveTo(120.3,41.7,119.7,41.5).curveTo(119.2,41.3,118.5,41.3).curveTo(117,41.3,116.2,42.1).curveTo(115.3,42.9,115.3,44.8).lineTo(115.3,52.4).closePath().moveTo(33.7,52.4).lineTo(33.7,31.3).lineTo(42.1,31.3).curveTo(46,31.3,47.9,32.8).curveTo(49.8,34.3,49.8,37.4).curveTo(49.8,38.8,49.3,39.8).curveTo(48.7,40.8,47.7,41.5).curveTo(48.9,42.2,49.6,43.3).curveTo(50.2,44.4,50.2,46).curveTo(50.2,49.4,48.1,50.9).curveTo(45.9,52.4,42.1,52.4).closePath().moveTo(38.7,48).lineTo(42.2,48).curveTo(43.7,48,44.4,47.5).curveTo(45.1,46.9,45.1,45.9).curveTo(45.1,44.9,44.4,44.4).curveTo(43.8,43.9,42.2,43.9).lineTo(38.7,43.9).closePath().moveTo(38.7,39.5).lineTo(42.4,39.5).curveTo(43.7,39.4,44.3,38.9).curveTo(44.8,38.3,44.8,37.5).curveTo(44.8,36.7,44.2,36.1).curveTo(43.7,35.7,42.3,35.7).lineTo(38.7,35.7).closePath();
	var mask_graphics_157 = new cjs.Graphics().moveTo(146.2,52).curveTo(145.4,51.2,145.4,50).curveTo(145.4,48.7,146.2,47.8).curveTo(147,47.1,148.3,47).curveTo(149.6,47.1,150.3,47.8).curveTo(151.1,48.7,151.1,50).curveTo(151.1,51.2,150.3,52).curveTo(149.6,52.8,148.3,52.8).curveTo(147,52.8,146.2,52).closePath().moveTo(120.2,52.1).curveTo(118.6,51.5,117.6,50.4).curveTo(116.5,49.3,115.9,47.8).curveTo(115.4,46.4,115.4,44.6).curveTo(115.4,42.9,116,41.4).curveTo(116.6,39.9,117.7,38.8).curveTo(118.8,37.8,120.3,37.1).curveTo(121.8,36.5,123.6,36.5).curveTo(125.4,36.5,126.9,37.1).curveTo(128.4,37.7,129.5,38.7).curveTo(130.6,39.9,131.1,41.3).curveTo(131.7,42.8,131.7,44.6).lineTo(131.7,46.3).lineTo(120.1,46.3).curveTo(120.5,47.4,121.4,48.1).curveTo(122.3,48.7,123.7,48.7).curveTo(124.8,48.7,125.6,48.3).curveTo(126.4,47.8,126.9,47).lineTo(130.9,49.3).curveTo(129.6,51,127.9,51.9).curveTo(126.3,52.7,123.6,52.8).curveTo(121.7,52.7,120.2,52.1).closePath().moveTo(126.9,42.7).curveTo(126.5,41.6,125.7,41.1).curveTo(124.8,40.5,123.6,40.5).curveTo(122.4,40.6,121.6,41.1).curveTo(120.7,41.7,120.2,42.7).lineTo(126.9,42.7).lineTo(126.9,42.7).closePath().moveTo(108.9,52.4).curveTo(107.9,52.1,107.2,51.3).curveTo(106.5,50.6,106.1,49.4).curveTo(105.7,48.3,105.7,46.5).lineTo(105.7,41.1).lineTo(103,41.1).lineTo(103,36.8).lineTo(105.7,36.8).lineTo(105.7,33.4).lineTo(110.5,30.7).lineTo(110.5,36.8).lineTo(114.4,36.8).lineTo(114.4,41.1).lineTo(110.5,41.1).lineTo(110.5,46.2).curveTo(110.5,47.4,110.9,47.8).curveTo(111.3,48.2,111.9,48.2).curveTo(112.6,48.2,113.2,47.6).lineTo(115.4,51.3).curveTo(114.5,52,113.5,52.4).curveTo(112.4,52.7,111.2,52.8).curveTo(109.9,52.7,108.9,52.4).closePath().moveTo(96.7,52.4).curveTo(95.7,52.1,95,51.3).curveTo(94.3,50.6,93.9,49.4).curveTo(93.6,48.3,93.6,46.5).lineTo(93.6,41.1).lineTo(90.9,41.1).lineTo(90.9,36.8).lineTo(93.6,36.8).lineTo(93.6,33.4).lineTo(98.4,30.7).lineTo(98.4,36.8).lineTo(102.2,36.8).lineTo(102.2,41.1).lineTo(98.4,41.1).lineTo(98.4,46.2).curveTo(98.4,47.4,98.7,47.8).curveTo(99.1,48.2,99.8,48.2).curveTo(100.4,48.2,101,47.6).lineTo(103.2,51.3).curveTo(102.4,52,101.3,52.4).curveTo(100.3,52.7,99.1,52.8).curveTo(97.8,52.7,96.7,52.4).closePath().moveTo(78.6,52.1).curveTo(77.1,51.5,76,50.4).curveTo(75,49.3,74.4,47.8).curveTo(73.8,46.4,73.8,44.6).curveTo(73.8,42.9,74.4,41.4).curveTo(75.1,39.9,76.1,38.8).curveTo(77.3,37.8,78.8,37.1).curveTo(80.3,36.5,82,36.5).curveTo(83.8,36.5,85.3,37.1).curveTo(86.8,37.7,87.9,38.7).curveTo(89,39.9,89.6,41.3).curveTo(90.2,42.8,90.2,44.6).lineTo(90.2,46.3).lineTo(78.5,46.3).curveTo(78.9,47.4,79.9,48.1).curveTo(80.8,48.7,82.1,48.7).curveTo(83.3,48.7,84.1,48.3).curveTo(84.9,47.8,85.4,47).lineTo(89.3,49.3).curveTo(88.1,51,86.4,51.9).curveTo(84.7,52.7,82.1,52.8).curveTo(80.2,52.7,78.6,52.1).closePath().moveTo(85.4,42.7).curveTo(85,41.6,84.1,41.1).curveTo(83.3,40.5,82.1,40.5).curveTo(80.9,40.6,80,41.1).curveTo(79.1,41.7,78.7,42.7).lineTo(85.4,42.7).lineTo(85.4,42.7).closePath().moveTo(133,52.4).lineTo(133,36.8).lineTo(137.8,36.8).lineTo(137.8,39).curveTo(138.4,37.6,139.6,37).curveTo(140.7,36.5,142.2,36.5).curveTo(143,36.5,143.7,36.7).lineTo(144.9,37.1).lineTo(143.2,42).curveTo(142.8,41.7,142.2,41.5).curveTo(141.7,41.3,141,41.3).curveTo(139.5,41.3,138.7,42.1).curveTo(137.8,42.9,137.8,44.8).lineTo(137.8,52.4).closePath().moveTo(56.2,52.4).lineTo(56.2,31.3).lineTo(64.6,31.3).curveTo(68.5,31.3,70.4,32.8).curveTo(72.3,34.3,72.3,37.4).curveTo(72.3,38.8,71.8,39.8).curveTo(71.2,40.8,70.2,41.5).curveTo(71.4,42.2,72.1,43.3).curveTo(72.7,44.4,72.7,46).curveTo(72.7,49.4,70.6,50.9).curveTo(68.4,52.4,64.6,52.4).closePath().moveTo(61.2,48).lineTo(64.7,48).curveTo(66.2,48,66.9,47.5).curveTo(67.6,46.9,67.6,45.9).curveTo(67.6,44.9,66.9,44.4).curveTo(66.3,43.9,64.7,43.9).lineTo(61.2,43.9).closePath().moveTo(61.2,39.5).lineTo(64.9,39.5).curveTo(66.2,39.4,66.8,38.9).curveTo(67.3,38.3,67.3,37.5).curveTo(67.3,36.7,66.7,36.1).curveTo(66.2,35.7,64.8,35.7).lineTo(61.2,35.7).closePath();
	var mask_graphics_158 = new cjs.Graphics().moveTo(172.1,52).curveTo(171.3,51.2,171.3,50).curveTo(171.3,48.7,172.1,47.8).curveTo(172.9,47.1,174.2,47).curveTo(175.5,47.1,176.2,47.8).curveTo(177,48.7,177,50).curveTo(177,51.2,176.2,52).curveTo(175.5,52.8,174.2,52.8).curveTo(172.9,52.8,172.1,52).closePath().moveTo(146.1,52.1).curveTo(144.5,51.5,143.5,50.4).curveTo(142.4,49.3,141.8,47.8).curveTo(141.3,46.4,141.3,44.6).curveTo(141.3,42.9,141.9,41.4).curveTo(142.5,39.9,143.6,38.8).curveTo(144.7,37.8,146.2,37.1).curveTo(147.7,36.5,149.5,36.5).curveTo(151.3,36.5,152.8,37.1).curveTo(154.3,37.7,155.4,38.7).curveTo(156.5,39.9,157,41.3).curveTo(157.6,42.8,157.6,44.6).lineTo(157.6,46.3).lineTo(146,46.3).curveTo(146.4,47.4,147.3,48.1).curveTo(148.2,48.7,149.6,48.7).curveTo(150.7,48.7,151.5,48.3).curveTo(152.3,47.8,152.8,47).lineTo(156.8,49.3).curveTo(155.5,51,153.8,51.9).curveTo(152.2,52.7,149.5,52.8).curveTo(147.6,52.7,146.1,52.1).closePath().moveTo(152.8,42.7).curveTo(152.4,41.6,151.6,41.1).curveTo(150.7,40.5,149.5,40.5).curveTo(148.3,40.6,147.5,41.1).curveTo(146.6,41.7,146.1,42.7).lineTo(152.8,42.7).lineTo(152.8,42.7).closePath().moveTo(134.8,52.4).curveTo(133.8,52.1,133.1,51.3).curveTo(132.4,50.6,132,49.4).curveTo(131.6,48.3,131.6,46.5).lineTo(131.6,41.1).lineTo(128.9,41.1).lineTo(128.9,36.8).lineTo(131.6,36.8).lineTo(131.6,33.4).lineTo(136.4,30.7).lineTo(136.4,36.8).lineTo(140.3,36.8).lineTo(140.3,41.1).lineTo(136.4,41.1).lineTo(136.4,46.2).curveTo(136.4,47.4,136.8,47.8).curveTo(137.2,48.2,137.8,48.2).curveTo(138.5,48.2,139.1,47.6).lineTo(141.3,51.3).curveTo(140.4,52,139.4,52.4).curveTo(138.3,52.7,137.1,52.8).curveTo(135.8,52.7,134.8,52.4).closePath().moveTo(122.6,52.4).curveTo(121.6,52.1,120.9,51.3).curveTo(120.2,50.6,119.8,49.4).curveTo(119.5,48.3,119.5,46.5).lineTo(119.5,41.1).lineTo(116.8,41.1).lineTo(116.8,36.8).lineTo(119.5,36.8).lineTo(119.5,33.4).lineTo(124.3,30.7).lineTo(124.3,36.8).lineTo(128.1,36.8).lineTo(128.1,41.1).lineTo(124.3,41.1).lineTo(124.3,46.2).curveTo(124.3,47.4,124.6,47.8).curveTo(125,48.2,125.7,48.2).curveTo(126.3,48.2,126.9,47.6).lineTo(129.1,51.3).curveTo(128.3,52,127.2,52.4).curveTo(126.2,52.7,125,52.8).curveTo(123.7,52.7,122.6,52.4).closePath().moveTo(104.5,52.1).curveTo(103,51.5,101.9,50.4).curveTo(100.9,49.3,100.3,47.8).curveTo(99.7,46.4,99.7,44.6).curveTo(99.7,42.9,100.3,41.4).curveTo(101,39.9,102,38.8).curveTo(103.2,37.8,104.7,37.1).curveTo(106.2,36.5,107.9,36.5).curveTo(109.7,36.5,111.2,37.1).curveTo(112.7,37.7,113.8,38.7).curveTo(114.9,39.9,115.5,41.3).curveTo(116.1,42.8,116.1,44.6).lineTo(116.1,46.3).lineTo(104.4,46.3).curveTo(104.8,47.4,105.8,48.1).curveTo(106.7,48.7,108,48.7).curveTo(109.2,48.7,110,48.3).curveTo(110.8,47.8,111.3,47).lineTo(115.2,49.3).curveTo(114,51,112.3,51.9).curveTo(110.6,52.7,108,52.8).curveTo(106.1,52.7,104.5,52.1).closePath().moveTo(111.3,42.7).curveTo(110.9,41.6,110,41.1).curveTo(109.2,40.5,108,40.5).curveTo(106.8,40.6,105.9,41.1).curveTo(105,41.7,104.6,42.7).lineTo(111.3,42.7).lineTo(111.3,42.7).closePath().moveTo(158.9,52.4).lineTo(158.9,36.8).lineTo(163.7,36.8).lineTo(163.7,39).curveTo(164.3,37.6,165.5,37).curveTo(166.6,36.5,168.1,36.5).curveTo(168.9,36.5,169.6,36.7).lineTo(170.8,37.1).lineTo(169.1,42).curveTo(168.7,41.7,168.1,41.5).curveTo(167.6,41.3,166.9,41.3).curveTo(165.4,41.3,164.6,42.1).curveTo(163.7,42.9,163.7,44.8).lineTo(163.7,52.4).closePath().moveTo(82.1,52.4).lineTo(82.1,31.3).lineTo(90.5,31.3).curveTo(94.4,31.3,96.3,32.8).curveTo(98.2,34.3,98.2,37.4).curveTo(98.2,38.8,97.7,39.8).curveTo(97.1,40.8,96.1,41.5).curveTo(97.3,42.2,98,43.3).curveTo(98.6,44.4,98.6,46).curveTo(98.6,49.4,96.5,50.9).curveTo(94.3,52.4,90.5,52.4).closePath().moveTo(87.1,48).lineTo(90.6,48).curveTo(92.1,48,92.8,47.5).curveTo(93.5,46.9,93.5,45.9).curveTo(93.5,44.9,92.8,44.4).curveTo(92.2,43.9,90.6,43.9).lineTo(87.1,43.9).closePath().moveTo(87.1,39.5).lineTo(90.8,39.5).curveTo(92.1,39.4,92.7,38.9).curveTo(93.2,38.3,93.2,37.5).curveTo(93.2,36.7,92.6,36.1).curveTo(92.1,35.7,90.7,35.7).lineTo(87.1,35.7).closePath();
	var mask_graphics_159 = new cjs.Graphics().moveTo(201.5,52).curveTo(200.7,51.2,200.7,50).curveTo(200.7,48.7,201.5,47.8).curveTo(202.3,47.1,203.6,47).curveTo(204.9,47.1,205.6,47.8).curveTo(206.4,48.7,206.4,50).curveTo(206.4,51.2,205.6,52).curveTo(204.9,52.8,203.6,52.8).curveTo(202.3,52.8,201.5,52).closePath().moveTo(175.5,52.1).curveTo(173.9,51.5,172.9,50.4).curveTo(171.8,49.3,171.2,47.8).curveTo(170.7,46.4,170.7,44.6).curveTo(170.7,42.9,171.3,41.4).curveTo(171.9,39.9,173,38.8).curveTo(174.1,37.8,175.6,37.1).curveTo(177.1,36.5,178.9,36.5).curveTo(180.7,36.5,182.2,37.1).curveTo(183.7,37.7,184.8,38.7).curveTo(185.9,39.9,186.4,41.3).curveTo(187,42.8,187,44.6).lineTo(187,46.3).lineTo(175.4,46.3).curveTo(175.8,47.4,176.7,48.1).curveTo(177.6,48.7,179,48.7).curveTo(180.1,48.7,180.9,48.3).curveTo(181.7,47.8,182.2,47).lineTo(186.2,49.3).curveTo(184.9,51,183.2,51.9).curveTo(181.6,52.7,178.9,52.8).curveTo(177,52.7,175.5,52.1).closePath().moveTo(182.2,42.7).curveTo(181.8,41.6,181,41.1).curveTo(180.1,40.5,178.9,40.5).curveTo(177.7,40.6,176.9,41.1).curveTo(176,41.7,175.5,42.7).lineTo(182.2,42.7).lineTo(182.2,42.7).closePath().moveTo(164.2,52.4).curveTo(163.2,52.1,162.5,51.3).curveTo(161.8,50.6,161.4,49.4).curveTo(161,48.3,161,46.5).lineTo(161,41.1).lineTo(158.3,41.1).lineTo(158.3,36.8).lineTo(161,36.8).lineTo(161,33.4).lineTo(165.8,30.7).lineTo(165.8,36.8).lineTo(169.7,36.8).lineTo(169.7,41.1).lineTo(165.8,41.1).lineTo(165.8,46.2).curveTo(165.8,47.4,166.2,47.8).curveTo(166.6,48.2,167.2,48.2).curveTo(167.9,48.2,168.5,47.6).lineTo(170.7,51.3).curveTo(169.8,52,168.8,52.4).curveTo(167.7,52.7,166.5,52.8).curveTo(165.2,52.7,164.2,52.4).closePath().moveTo(152,52.4).curveTo(151,52.1,150.3,51.3).curveTo(149.6,50.6,149.2,49.4).curveTo(148.9,48.3,148.9,46.5).lineTo(148.9,41.1).lineTo(146.2,41.1).lineTo(146.2,36.8).lineTo(148.9,36.8).lineTo(148.9,33.4).lineTo(153.7,30.7).lineTo(153.7,36.8).lineTo(157.5,36.8).lineTo(157.5,41.1).lineTo(153.7,41.1).lineTo(153.7,46.2).curveTo(153.7,47.4,154,47.8).curveTo(154.4,48.2,155.1,48.2).curveTo(155.7,48.2,156.3,47.6).lineTo(158.5,51.3).curveTo(157.7,52,156.6,52.4).curveTo(155.6,52.7,154.4,52.8).curveTo(153.1,52.7,152,52.4).closePath().moveTo(133.9,52.1).curveTo(132.4,51.5,131.3,50.4).curveTo(130.3,49.3,129.7,47.8).curveTo(129.1,46.4,129.1,44.6).curveTo(129.1,42.9,129.7,41.4).curveTo(130.4,39.9,131.4,38.8).curveTo(132.6,37.8,134.1,37.1).curveTo(135.6,36.5,137.3,36.5).curveTo(139.1,36.5,140.6,37.1).curveTo(142.1,37.7,143.2,38.7).curveTo(144.3,39.9,144.9,41.3).curveTo(145.5,42.8,145.5,44.6).lineTo(145.5,46.3).lineTo(133.8,46.3).curveTo(134.2,47.4,135.2,48.1).curveTo(136.1,48.7,137.4,48.7).curveTo(138.6,48.7,139.4,48.3).curveTo(140.2,47.8,140.7,47).lineTo(144.6,49.3).curveTo(143.4,51,141.7,51.9).curveTo(140,52.7,137.4,52.8).curveTo(135.5,52.7,133.9,52.1).closePath().moveTo(140.7,42.7).curveTo(140.3,41.6,139.4,41.1).curveTo(138.6,40.5,137.4,40.5).curveTo(136.2,40.6,135.3,41.1).curveTo(134.4,41.7,134,42.7).lineTo(140.7,42.7).lineTo(140.7,42.7).closePath().moveTo(188.3,52.4).lineTo(188.3,36.8).lineTo(193.1,36.8).lineTo(193.1,39).curveTo(193.7,37.6,194.9,37).curveTo(196,36.5,197.5,36.5).curveTo(198.3,36.5,199,36.7).lineTo(200.2,37.1).lineTo(198.5,42).curveTo(198.1,41.7,197.5,41.5).curveTo(197,41.3,196.3,41.3).curveTo(194.8,41.3,194,42.1).curveTo(193.1,42.9,193.1,44.8).lineTo(193.1,52.4).closePath().moveTo(111.5,52.4).lineTo(111.5,31.3).lineTo(119.9,31.3).curveTo(123.8,31.3,125.7,32.8).curveTo(127.6,34.3,127.6,37.4).curveTo(127.6,38.8,127.1,39.8).curveTo(126.5,40.8,125.5,41.5).curveTo(126.7,42.2,127.4,43.3).curveTo(128,44.4,128,46).curveTo(128,49.4,125.9,50.9).curveTo(123.7,52.4,119.9,52.4).closePath().moveTo(116.5,48).lineTo(120,48).curveTo(121.5,48,122.2,47.5).curveTo(122.9,46.9,122.9,45.9).curveTo(122.9,44.9,122.2,44.4).curveTo(121.6,43.9,120,43.9).lineTo(116.5,43.9).closePath().moveTo(116.5,39.5).lineTo(120.2,39.5).curveTo(121.5,39.4,122.1,38.9).curveTo(122.6,38.3,122.6,37.5).curveTo(122.6,36.7,122,36.1).curveTo(121.5,35.7,120.1,35.7).lineTo(116.5,35.7).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(64).to({graphics:mask_graphics_64,x:66.425,y:52.8}).wait(86).to({graphics:mask_graphics_150,x:66.425,y:52.8}).wait(1).to({graphics:mask_graphics_151,x:68.1534,y:52.8}).wait(1).to({graphics:mask_graphics_152,x:73.3386,y:52.8}).wait(1).to({graphics:mask_graphics_153,x:81.9806,y:52.8}).wait(1).to({graphics:mask_graphics_154,x:94.0793,y:52.8}).wait(1).to({graphics:mask_graphics_155,x:109.6349,y:52.8}).wait(1).to({graphics:mask_graphics_156,x:128.6472,y:52.8}).wait(1).to({graphics:mask_graphics_157,x:151.1164,y:52.8}).wait(1).to({graphics:mask_graphics_158,x:177.0423,y:52.8}).wait(1).to({graphics:mask_graphics_159,x:206.425,y:52.8}).wait(66));

	// better_mask
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.2,25.5).lineTo(-55.2,-25.5).curveTo(7.2,-25,6.9,-24.7).lineTo(55.2,25.5).closePath();
	this.shape_1.setTransform(-14.6,90.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.1,25.5).lineTo(-55.1,-25.5).curveTo(7.2,-25,6.9,-24.7).lineTo(55.1,25.5).closePath();
	this.shape_2.setTransform(2.4,90.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.1,25.5).lineTo(-55.1,-25.5).curveTo(7.1,-25,6.9,-24.7).lineTo(55.1,25.5).closePath();
	this.shape_3.setTransform(17.6,90.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.2,25.5).lineTo(-55.2,-25.5).curveTo(7.1,-25,6.9,-24.7).lineTo(55.2,25.5).closePath();
	this.shape_4.setTransform(31.05,90.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.2,25.5).lineTo(-55.2,-25.5).curveTo(7.2,-25,6.9,-24.7).lineTo(55.1,25.5).closePath();
	this.shape_5.setTransform(71.3,90.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("rgba(255,183,27,0.988)").beginStroke().moveTo(-55.1,25.5).lineTo(-55.1,-25.5).curveTo(7.1,-25,6.9,-24.7).lineTo(55.1,25.5).closePath();
	this.shape_6.setTransform(78.35,90.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("rgba(255,183,27,0.949)").beginStroke().moveTo(-55.2,25.5).lineTo(-55.2,-25.5).curveTo(7.1,-25,6.9,-24.7).lineTo(55.2,25.5).closePath();
	this.shape_7.setTransform(88.75,90.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("rgba(255,183,27,0.89)").beginStroke().moveTo(-55.2,25.5).lineTo(-55.2,-25.5).curveTo(7.2,-25,6.9,-24.7).lineTo(55.2,25.5).closePath();
	this.shape_8.setTransform(106,90.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("rgba(255,183,27,0.804)").beginStroke().moveTo(-55.1,25.5).lineTo(-55.1,-25.5).curveTo(7.2,-25,6.9,-24.7).lineTo(55.1,25.5).closePath();
	this.shape_9.setTransform(130.2,90.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("rgba(255,183,27,0.69)").beginStroke().moveTo(-55.2,25.5).lineTo(-55.2,-25.5).curveTo(7.2,-25,6.9,-24.7).lineTo(55.1,25.5).closePath();
	this.shape_10.setTransform(161.3,90.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("rgba(255,183,27,0.557)").beginStroke().moveTo(-55.2,25.5).lineTo(-55.2,-25.5).curveTo(7.1,-25,6.9,-24.7).lineTo(55.2,25.5).closePath();
	this.shape_11.setTransform(199.35,90.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("rgba(255,183,27,0.396)").beginStroke().moveTo(-55.1,25.5).lineTo(-55.1,-25.5).curveTo(7.1,-25,6.9,-24.7).lineTo(55.1,25.5).closePath();
	this.shape_12.setTransform(244.3,90.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("rgba(255,183,27,0.212)").beginStroke().moveTo(-55.1,25.5).lineTo(-55.1,-25.5).curveTo(7.1,-25,6.9,-24.7).lineTo(55.1,25.5).closePath();
	this.shape_13.setTransform(296.15,90.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("rgba(255,183,27,0)").beginStroke().moveTo(-55.1,25.5).lineTo(-55.1,-25.5).curveTo(7.1,-25,6.9,-24.7).lineTo(55.1,25.5).closePath();
	this.shape_14.setTransform(354.9,90.25);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{x:-14.6}}]},64).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{x:17.6}}]},1).to({state:[{t:this.shape_4,p:{x:31.05}}]},1).to({state:[{t:this.shape_3,p:{x:42.7}}]},1).to({state:[{t:this.shape_4,p:{x:52.55}}]},1).to({state:[{t:this.shape_3,p:{x:60.6}}]},1).to({state:[{t:this.shape_1,p:{x:66.85}}]},1).to({state:[{t:this.shape_5,p:{x:71.3}}]},1).to({state:[{t:this.shape_5,p:{x:74}}]},1).to({state:[{t:this.shape_1,p:{x:74.9}}]},1).to({state:[{t:this.shape_1,p:{x:74.9}}]},76).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(66));

	// txt_better
	this.instance_6 = new lib.txt_better();
	this.instance_6.setTransform(84.8,95.1,1,1,0,0,0,81.4,21.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(55).to({_off:false},0).to({alpha:1},9).wait(86).to({x:364.8,alpha:0},9,cjs.Ease.quadIn).wait(66));

	// txt_believeIt
	this.instance_7 = new lib.txt_believeIt();
	this.instance_7.setTransform(205.75,94.9,1,1,0,0,0,81.4,22.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(106).to({_off:false},0).to({alpha:1},9).wait(35).to({x:485.75,alpha:0},9,cjs.Ease.quadIn).wait(66));

	// image_01
	this.instance_8 = new lib.image_01_1();
	this.instance_8.setTransform(455,290,1,1,0,0,0,150,217);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:150},14,cjs.Ease.quadInOut).wait(32).to({x:458,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(169));

	// image_02
	this.instance_9 = new lib.image_02_1();
	this.instance_9.setTransform(459,290,1,1,0,0,0,150,217);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(51).to({_off:false},0).to({x:150},14,cjs.Ease.quadInOut).wait(32).to({x:461,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(118));

	// image_03
	this.instance_10 = new lib.image_03_1();
	this.instance_10.setTransform(461,291,1,1,0,0,0,150,217);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(101).to({_off:false},0).to({x:150,y:290},14,cjs.Ease.quadInOut).wait(32).to({x:459,y:291,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(68));

	// background_color
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-150,300).lineTo(-150,-300).lineTo(150,-300).lineTo(150,300).closePath();
	this.shape_15.setTransform(150,125.0015,1,0.4167);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(225));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149,124,462,127);
// library properties:
lib.properties = {
	id: '4CB3FE4512EC4F04AD1A078CE62F288A',
	width: 300,
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
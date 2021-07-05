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
p.nominalBounds = new cjs.Rectangle(0,0,160,401);


(lib.image_02 = function() {
	this.initialize(img.image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,401);


(lib.image_03 = function() {
	this.initialize(img.image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,401);// helper functions:

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


(lib.txt_Stroke = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(3.9,6.2).curveTo(2.7,5.7,1.8,4.8).curveTo(0.9,3.9,0.3,2.6).curveTo(-0.1,1.4,-0.1,0).curveTo(-0.1,-1.4,0.3,-2.6).curveTo(0.9,-3.8,1.8,-4.8).curveTo(2.7,-5.7,3.9,-6.2).curveTo(5.2,-6.7,6.5,-6.7).curveTo(7.9,-6.7,9.2,-6.2).curveTo(10.4,-5.7,11.3,-4.8).curveTo(12.3,-3.8,12.7,-2.6).curveTo(13.3,-1.4,13.3,0).curveTo(13.3,1.4,12.7,2.6).curveTo(12.3,3.9,11.3,4.8).curveTo(10.4,5.7,9.2,6.2).curveTo(7.9,6.8,6.5,6.8).curveTo(5.2,6.8,3.9,6.2).closePath().moveTo(5.2,-3.4).curveTo(4.5,-3.1,4,-2.6).curveTo(3.6,-2.1,3.3,-1.4).curveTo(3,-0.8,3,0).curveTo(3,0.8,3.3,1.4).curveTo(3.6,2.1,4,2.6).curveTo(4.5,3.1,5.2,3.4).curveTo(5.8,3.7,6.5,3.7).curveTo(7.3,3.7,8,3.4).curveTo(8.6,3.1,9.1,2.6).curveTo(9.6,2.1,9.9,1.4).curveTo(10.1,0.8,10.1,0).curveTo(10.1,-0.8,9.9,-1.4).curveTo(9.6,-2.1,9.1,-2.6).curveTo(8.6,-3.1,8,-3.4).curveTo(7.3,-3.7,6.5,-3.7).curveTo(5.8,-3.7,5.2,-3.4).closePath().moveTo(-32,6.6).curveTo(-32.9,6.4,-33.5,6).curveTo(-34.2,5.7,-34.9,5.2).lineTo(-35.9,4.1).lineTo(-33.2,2).curveTo(-32.6,2.8,-31.8,3.3).curveTo(-31,3.8,-29.9,3.8).curveTo(-29.1,3.8,-28.7,3.5).curveTo(-28.3,3.1,-28.2,2.6).curveTo(-28.2,2.3,-28.4,2.1).curveTo(-28.6,1.8,-28.9,1.7).lineTo(-29.7,1.4).lineTo(-32.4,0.7).curveTo(-33.2,0.4,-33.8,0).curveTo(-34.3,-0.4,-34.8,-1.1).curveTo(-35.1,-1.7,-35.1,-2.8).curveTo(-35.1,-3.6,-34.8,-4.3).curveTo(-34.4,-5.1,-33.8,-5.6).curveTo(-33.2,-6.2,-32.3,-6.5).curveTo(-31.3,-6.8,-30.3,-6.8).curveTo(-29.4,-6.8,-28.7,-6.6).curveTo(-27.9,-6.5,-27.3,-6.2).curveTo(-26.7,-5.9,-26.1,-5.4).lineTo(-25.1,-4.4).lineTo(-27.6,-2.5).curveTo(-28.1,-3.2,-28.7,-3.6).curveTo(-29.4,-4,-30.4,-4).curveTo(-31.2,-4,-31.5,-3.7).curveTo(-31.9,-3.3,-32,-2.9).curveTo(-31.9,-2.5,-31.7,-2.4).lineTo(-31.2,-2).lineTo(-27.8,-1.1).curveTo(-27,-0.9,-26.4,-0.4).curveTo(-25.8,0,-25.4,0.7).curveTo(-25,1.4,-25,2.5).curveTo(-25,3.4,-25.4,4.2).curveTo(-25.7,5,-26.4,5.5).curveTo(-27.1,6.1,-28,6.4).curveTo(-28.9,6.8,-30,6.8).curveTo(-31.1,6.8,-32,6.6).closePath().moveTo(26.8,6.6).lineTo(26.8,-6.6).lineTo(35.9,-6.6).lineTo(35.9,-3.6).lineTo(29.9,-3.6).lineTo(29.9,-1.5).lineTo(35.9,-1.5).lineTo(35.9,1.4).lineTo(29.9,1.4).lineTo(29.9,3.7).lineTo(35.9,3.7).lineTo(35.9,6.6).closePath().moveTo(22.5,6.6).lineTo(19.7,0.4).lineTo(18,2.6).lineTo(18,6.6).lineTo(14.8,6.6).lineTo(14.8,-6.6).lineTo(18,-6.6).lineTo(18,-1.2).lineTo(22.2,-6.6).lineTo(25.8,-6.6).lineTo(21.9,-1.7).lineTo(25.9,6.6).closePath().moveTo(-4.5,6.6).lineTo(-6.4,2.6).lineTo(-8.9,2.6).lineTo(-8.9,6.6).lineTo(-11.9,6.6).lineTo(-11.9,-6.6).lineTo(-6.3,-6.6).curveTo(-5.2,-6.6,-4.2,-6.2).curveTo(-3.3,-5.8,-2.7,-5.2).curveTo(-2.1,-4.6,-1.7,-3.8).curveTo(-1.4,-3,-1.4,-2).curveTo(-1.4,-0.8,-1.9,0.2).curveTo(-2.6,1.2,-3.5,1.8).lineTo(-1,6.6).closePath().moveTo(-8.9,-0.2).lineTo(-6.5,-0.2).curveTo(-5.6,-0.2,-5.1,-0.7).curveTo(-4.6,-1.2,-4.6,-2).curveTo(-4.6,-2.8,-5.1,-3.2).curveTo(-5.6,-3.7,-6.5,-3.7).lineTo(-8.9,-3.7).closePath().moveTo(-20.2,6.6).lineTo(-20.2,-3.7).lineTo(-23.7,-3.7).lineTo(-23.7,-6.6).lineTo(-13.6,-6.6).lineTo(-13.6,-3.7).lineTo(-17.1,-3.7).lineTo(-17.1,6.6).closePath();
	this.shape.setTransform(18.4,53.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Stroke, new cjs.Rectangle(-19.5,40.2,76.6,27.700000000000003), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(52.6,6.6).curveTo(51.7,6.4,51.1,6).curveTo(50.4,5.7,49.7,5.2).lineTo(48.7,4.1).lineTo(51.4,2).curveTo(52,2.8,52.8,3.3).curveTo(53.6,3.8,54.7,3.8).curveTo(55.5,3.8,55.9,3.5).curveTo(56.3,3.1,56.4,2.6).curveTo(56.4,2.3,56.2,2.1).curveTo(56,1.8,55.7,1.7).lineTo(54.9,1.4).lineTo(52.2,0.7).curveTo(51.4,0.4,50.8,0).curveTo(50.3,-0.4,49.8,-1.1).curveTo(49.5,-1.7,49.5,-2.8).curveTo(49.5,-3.6,49.8,-4.3).curveTo(50.2,-5.1,50.8,-5.6).curveTo(51.4,-6.2,52.3,-6.5).curveTo(53.3,-6.8,54.3,-6.8).curveTo(55.2,-6.8,55.9,-6.6).curveTo(56.7,-6.5,57.3,-6.2).curveTo(57.9,-5.9,58.5,-5.4).lineTo(59.5,-4.4).lineTo(57,-2.5).curveTo(56.5,-3.2,55.9,-3.6).curveTo(55.2,-4,54.2,-4).curveTo(53.4,-4,53.1,-3.7).curveTo(52.7,-3.3,52.6,-2.9).curveTo(52.7,-2.5,52.9,-2.4).lineTo(53.4,-2).lineTo(56.8,-1.1).curveTo(57.6,-0.9,58.2,-0.4).curveTo(58.8,0,59.2,0.7).curveTo(59.6,1.4,59.6,2.5).curveTo(59.6,3.4,59.2,4.2).curveTo(58.9,5,58.2,5.5).curveTo(57.5,6.1,56.6,6.4).curveTo(55.7,6.8,54.6,6.8).curveTo(53.5,6.8,52.6,6.6).closePath().moveTo(41.5,6.6).lineTo(41.5,-3.7).lineTo(38,-3.7).lineTo(38,-6.6).lineTo(48.1,-6.6).lineTo(48.1,-3.7).lineTo(44.7,-3.7).lineTo(44.7,6.6).closePath().moveTo(33.4,6.6).lineTo(28.2,-1.7).lineTo(28.2,6.6).lineTo(25.2,6.6).lineTo(25.2,-6.6).lineTo(28.5,-6.6).lineTo(33.4,1.3).lineTo(33.4,-6.6).lineTo(36.4,-6.6).lineTo(36.4,6.6).closePath().moveTo(14.4,6.6).lineTo(14.4,-6.6).lineTo(23.4,-6.6).lineTo(23.4,-3.6).lineTo(17.5,-3.6).lineTo(17.5,-1.5).lineTo(23.4,-1.5).lineTo(23.4,1.4).lineTo(17.5,1.4).lineTo(17.5,3.7).lineTo(23.4,3.7).lineTo(23.4,6.6).closePath().moveTo(8.8,6.6).lineTo(8.8,-1.8).lineTo(5.3,2.9).lineTo(1.9,-1.7).lineTo(1.9,6.6).lineTo(-1.2,6.6).lineTo(-1.2,-6.6).lineTo(1.8,-6.6).lineTo(5.3,-1.7).lineTo(9,-6.6).lineTo(11.8,-6.6).lineTo(11.8,6.6).closePath().moveTo(-9.5,6.6).lineTo(-9.5,-3.7).lineTo(-13,-3.7).lineTo(-13,-6.6).lineTo(-2.8,-6.6).lineTo(-2.8,-3.7).lineTo(-6.3,-3.7).lineTo(-6.3,6.6).closePath().moveTo(-16.2,6.6).lineTo(-16.9,4.6).lineTo(-21.9,4.6).lineTo(-22.6,6.6).lineTo(-25.8,6.6).lineTo(-20.9,-6.6).lineTo(-17.9,-6.6).lineTo(-13,6.6).closePath().moveTo(-17.9,1.9).lineTo(-19.4,-2.5).lineTo(-20.9,1.9).lineTo(-17.9,1.9).closePath().moveTo(-35.7,6.6).lineTo(-35.7,-6.6).lineTo(-26.7,-6.6).lineTo(-26.7,-3.6).lineTo(-32.6,-3.6).lineTo(-32.6,-1.5).lineTo(-26.7,-1.5).lineTo(-26.7,1.4).lineTo(-32.6,1.4).lineTo(-32.6,3.7).lineTo(-26.7,3.7).lineTo(-26.7,6.6).closePath().moveTo(-40.4,6.6).lineTo(-42.3,2.6).lineTo(-44.7,2.6).lineTo(-44.7,6.6).lineTo(-47.8,6.6).lineTo(-47.8,-6.6).lineTo(-42.2,-6.6).curveTo(-41,-6.6,-40.1,-6.2).curveTo(-39.1,-5.8,-38.6,-5.2).curveTo(-37.9,-4.6,-37.6,-3.8).curveTo(-37.3,-3,-37.2,-2).curveTo(-37.2,-0.8,-37.8,0.2).curveTo(-38.4,1.2,-39.4,1.8).lineTo(-36.9,6.6).closePath().moveTo(-44.7,-0.2).lineTo(-42.4,-0.2).curveTo(-41.4,-0.2,-40.9,-0.7).curveTo(-40.5,-1.2,-40.5,-2).curveTo(-40.4,-2.8,-41,-3.2).curveTo(-41.4,-3.7,-42.4,-3.7).lineTo(-44.7,-3.7).closePath().moveTo(-56,6.6).lineTo(-56,-3.7).lineTo(-59.6,-3.7).lineTo(-59.6,-6.6).lineTo(-49.5,-6.6).lineTo(-49.5,-3.7).lineTo(-53,-3.7).lineTo(-53,6.6).closePath();
	this.shape.setTransform(40.9,38.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Spines, new cjs.Rectangle(-21.5,25,124.6,27.6), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(26,7.1).curveTo(26.8,6.4,27.2,5.9).curveTo(27.6,5.3,27.7,4.7).curveTo(27.4,5.1,26.9,5.2).curveTo(26.2,5.2,25.8,4.7).curveTo(25.4,4.3,25.4,3.6).curveTo(25.4,2.8,25.9,2.4).curveTo(26.4,1.8,27.3,1.8).curveTo(28.2,1.9,28.7,2.5).curveTo(29.2,3.2,29.2,4.1).curveTo(29.2,5.3,28.6,6.2).curveTo(28,7.1,26.9,7.9).closePath().moveTo(20.8,5.2).lineTo(15.6,-3).lineTo(15.6,5.2).lineTo(12.6,5.2).lineTo(12.6,-8).lineTo(15.9,-8).lineTo(20.8,-0.1).lineTo(20.8,-8).lineTo(23.8,-8).lineTo(23.8,5.2).closePath().moveTo(7.6,5.2).lineTo(7.6,-8).lineTo(10.7,-8).lineTo(10.7,5.2).closePath().moveTo(3.3,5.2).lineTo(2.6,3.3).lineTo(-2.4,3.3).lineTo(-3.1,5.2).lineTo(-6.2,5.2).lineTo(-1.4,-8).lineTo(1.6,-8).lineTo(6.5,5.2).closePath().moveTo(1.7,0.5).lineTo(0.1,-3.9).lineTo(-1.4,0.5).lineTo(1.7,0.5).closePath().moveTo(-10.1,5.2).lineTo(-11.9,1.3).lineTo(-14.4,1.3).lineTo(-14.4,5.2).lineTo(-17.5,5.2).lineTo(-17.5,-8).lineTo(-11.8,-8).curveTo(-10.7,-8,-9.7,-7.6).curveTo(-8.8,-7.2,-8.2,-6.6).curveTo(-7.6,-6,-7.2,-5.2).curveTo(-6.9,-4.3,-6.9,-3.4).curveTo(-6.9,-2.2,-7.5,-1.1).curveTo(-8.1,-0.2,-9,0.5).lineTo(-6.6,5.2).closePath().moveTo(-14.4,-1.6).lineTo(-12.1,-1.6).curveTo(-11.1,-1.6,-10.6,-2.1).curveTo(-10.1,-2.6,-10.1,-3.4).curveTo(-10.1,-4.1,-10.6,-4.6).curveTo(-11.1,-5.1,-12.1,-5).lineTo(-14.4,-5).closePath().moveTo(-29.2,5.2).lineTo(-29.2,-8).lineTo(-24.1,-8).curveTo(-21.7,-8,-20.5,-7).curveTo(-19.3,-6,-19.3,-4.2).curveTo(-19.3,-3.3,-19.6,-2.7).curveTo(-20,-2,-20.6,-1.6).curveTo(-19.8,-1.1,-19.4,-0.5).curveTo(-19,0.2,-19,1.2).curveTo(-19,3.3,-20.4,4.3).curveTo(-21.7,5.2,-24.1,5.2).closePath().moveTo(-26.2,2.5).lineTo(-24,2.5).curveTo(-23.1,2.4,-22.6,2.1).curveTo(-22.2,1.8,-22.2,1.1).curveTo(-22.2,0.5,-22.6,0.2).curveTo(-23,-0.1,-24,-0.1).lineTo(-26.2,-0.1).closePath().moveTo(-26.2,-2.9).lineTo(-23.9,-2.9).curveTo(-23.1,-2.9,-22.7,-3.2).curveTo(-22.4,-3.5,-22.4,-4).curveTo(-22.4,-4.6,-22.7,-4.9).curveTo(-23.1,-5.2,-23.9,-5.2).lineTo(-26.2,-5.2).closePath();
	this.shape.setTransform(10.775,56.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Here, new cjs.Rectangle(-21.5,41.5,64.2,27.599999999999994), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(18.5,6.2).curveTo(17.2,5.7,16.4,4.7).curveTo(15.5,3.8,15,2.6).curveTo(14.5,1.4,14.5,-0).curveTo(14.5,-1.5,15,-2.7).curveTo(15.5,-4,16.4,-4.9).curveTo(17.3,-5.7,18.6,-6.2).curveTo(19.8,-6.7,21.2,-6.8).curveTo(22.2,-6.8,23.1,-6.5).curveTo(23.9,-6.3,24.7,-5.9).curveTo(25.4,-5.5,26.1,-4.9).curveTo(26.7,-4.3,27.1,-3.5).lineTo(24.3,-1.8).curveTo(23.9,-2.6,23.1,-3.2).curveTo(22.3,-3.7,21.3,-3.7).curveTo(20.5,-3.7,19.8,-3.4).curveTo(19.2,-3.1,18.7,-2.6).curveTo(18.2,-2.1,18,-1.5).curveTo(17.7,-0.8,17.7,-0).curveTo(17.7,0.7,18,1.4).curveTo(18.2,2,18.7,2.6).curveTo(19.2,3.1,19.8,3.3).curveTo(20.4,3.6,21.2,3.6).curveTo(22.4,3.6,23.2,3).curveTo(24,2.4,24.4,1.4).lineTo(27.3,3).curveTo(26.9,3.9,26.3,4.5).curveTo(25.7,5.2,24.9,5.7).curveTo(24.1,6.2,23.2,6.4).curveTo(22.3,6.7,21.2,6.7).curveTo(19.7,6.8,18.5,6.2).closePath().moveTo(39.4,6.5).lineTo(39.4,-6.6).lineTo(44,-6.6).curveTo(45.5,-6.6,46.8,-6.1).curveTo(48.1,-5.6,49,-4.7).curveTo(49.9,-3.8,50.4,-2.6).curveTo(50.8,-1.4,50.8,-0).curveTo(50.8,1.4,50.3,2.6).curveTo(49.8,3.8,48.9,4.6).curveTo(48,5.5,46.8,6.1).curveTo(45.5,6.5,44.1,6.5).closePath().moveTo(42.5,3.6).lineTo(43.9,3.6).curveTo(44.8,3.6,45.5,3.4).curveTo(46.2,3,46.7,2.6).curveTo(47.2,2,47.4,1.4).curveTo(47.7,0.7,47.7,-0).curveTo(47.7,-0.8,47.4,-1.5).curveTo(47.2,-2.1,46.7,-2.6).curveTo(46.2,-3.1,45.5,-3.4).curveTo(44.8,-3.7,43.9,-3.6).lineTo(42.5,-3.6).closePath().moveTo(28.6,6.5).lineTo(28.6,-6.6).lineTo(37.6,-6.6).lineTo(37.6,-3.6).lineTo(31.7,-3.6).lineTo(31.7,-1.5).lineTo(37.6,-1.5).lineTo(37.6,1.4).lineTo(31.7,1.4).lineTo(31.7,3.7).lineTo(37.6,3.7).lineTo(37.6,6.5).closePath().moveTo(9.9,6.5).lineTo(4.8,-1.7).lineTo(4.8,6.5).lineTo(1.8,6.5).lineTo(1.8,-6.6).lineTo(5,-6.6).lineTo(10,1.3).lineTo(10,-6.6).lineTo(13,-6.6).lineTo(13,6.5).closePath().moveTo(-2.4,6.5).lineTo(-3.1,4.6).lineTo(-8.1,4.6).lineTo(-8.8,6.5).lineTo(-12,6.5).lineTo(-7.1,-6.6).lineTo(-4.1,-6.6).lineTo(0.8,6.5).closePath().moveTo(-4.1,1.9).lineTo(-5.6,-2.5).lineTo(-7.2,1.9).lineTo(-4.1,1.9).closePath().moveTo(-20,6.5).lineTo(-24.9,-6.6).lineTo(-21.6,-6.6).lineTo(-18.5,2.3).lineTo(-15.4,-6.6).lineTo(-12.1,-6.6).lineTo(-17,6.5).closePath().moveTo(-37.1,6.5).lineTo(-37.1,-6.6).lineTo(-32.4,-6.6).curveTo(-30.9,-6.6,-29.7,-6.1).curveTo(-28.4,-5.6,-27.5,-4.7).curveTo(-26.6,-3.8,-26.1,-2.6).curveTo(-25.6,-1.4,-25.6,-0).curveTo(-25.6,1.4,-26.1,2.6).curveTo(-26.6,3.8,-27.5,4.6).curveTo(-28.4,5.5,-29.7,6.1).curveTo(-30.9,6.5,-32.4,6.5).closePath().moveTo(-34,3.6).lineTo(-32.5,3.6).curveTo(-31.7,3.6,-31,3.4).curveTo(-30.3,3,-29.8,2.6).curveTo(-29.3,2,-29,1.4).curveTo(-28.8,0.7,-28.8,-0).curveTo(-28.8,-0.8,-29,-1.5).curveTo(-29.3,-2.1,-29.8,-2.6).curveTo(-30.2,-3.1,-31,-3.4).curveTo(-31.7,-3.7,-32.6,-3.6).lineTo(-34,-3.6).closePath().moveTo(-41.3,6.5).lineTo(-42,4.6).lineTo(-47,4.6).lineTo(-47.7,6.5).lineTo(-50.8,6.5).lineTo(-46,-6.6).lineTo(-43,-6.6).lineTo(-38.1,6.5).closePath().moveTo(-42.9,1.9).lineTo(-44.5,-2.5).lineTo(-46,1.9).lineTo(-42.9,1.9).closePath();
	this.shape.setTransform(30.975,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_healthySpines, new cjs.Rectangle(-22.1,2,106.6,27.7), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(40.8,7.1).curveTo(41.6,6.5,42,5.9).curveTo(42.4,5.4,42.5,4.8).curveTo(42.2,5.2,41.7,5.2).curveTo(41,5.2,40.6,4.8).curveTo(40.2,4.4,40.2,3.7).curveTo(40.2,2.9,40.7,2.4).curveTo(41.2,1.9,42,1.9).curveTo(43,1.9,43.5,2.6).curveTo(44,3.2,44,4.1).curveTo(44,5.4,43.4,6.3).curveTo(42.8,7.2,41.7,8).closePath().moveTo(-29.5,4.9).curveTo(-30.7,4.4,-31.5,3.5).curveTo(-32.5,2.6,-33,1.3).curveTo(-33.5,0.1,-33.5,-1.3).curveTo(-33.5,-2.7,-33,-3.9).curveTo(-32.5,-5.1,-31.5,-6.1).curveTo(-30.7,-7,-29.5,-7.5).curveTo(-28.2,-8,-26.8,-8).curveTo(-25.4,-8,-24.1,-7.5).curveTo(-22.9,-7,-22.1,-6.1).curveTo(-21.1,-5.1,-20.6,-3.9).curveTo(-20,-2.7,-20.1,-1.3).curveTo(-20,0.1,-20.6,1.3).curveTo(-21.1,2.6,-22.1,3.5).curveTo(-22.9,4.4,-24.1,4.9).curveTo(-25.4,5.5,-26.8,5.5).curveTo(-28.2,5.5,-29.5,4.9).closePath().moveTo(-28.2,-4.7).curveTo(-28.9,-4.4,-29.4,-3.9).curveTo(-29.8,-3.4,-30.1,-2.7).curveTo(-30.3,-2.1,-30.4,-1.3).curveTo(-30.3,-0.5,-30.1,0.1).curveTo(-29.8,0.8,-29.4,1.3).curveTo(-28.9,1.8,-28.2,2.1).curveTo(-27.6,2.4,-26.8,2.4).curveTo(-26.1,2.4,-25.3,2.1).curveTo(-24.7,1.8,-24.2,1.3).curveTo(-23.8,0.8,-23.5,0.1).curveTo(-23.2,-0.5,-23.2,-1.3).curveTo(-23.2,-2.1,-23.5,-2.7).curveTo(-23.8,-3.4,-24.2,-3.9).curveTo(-24.8,-4.4,-25.4,-4.7).curveTo(-26,-5,-26.8,-5).curveTo(-27.6,-5,-28.2,-4.7).closePath().moveTo(35.5,5.3).lineTo(30.4,-3).lineTo(30.4,5.3).lineTo(27.4,5.3).lineTo(27.4,-7.9).lineTo(30.7,-7.9).lineTo(35.6,0).lineTo(35.6,-7.9).lineTo(38.6,-7.9).lineTo(38.6,5.3).closePath().moveTo(22.4,5.3).lineTo(22.4,-7.9).lineTo(25.5,-7.9).lineTo(25.5,5.3).closePath().moveTo(18.1,5.3).lineTo(17.4,3.3).lineTo(12.4,3.3).lineTo(11.7,5.3).lineTo(8.5,5.3).lineTo(13.4,-7.9).lineTo(16.4,-7.9).lineTo(21.3,5.3).closePath().moveTo(16.5,0.6).lineTo(14.9,-3.8).lineTo(13.4,0.6).lineTo(16.5,0.6).closePath().moveTo(-2.5,5.3).lineTo(-2.5,-7.9).lineTo(2.8,-7.9).curveTo(3.9,-7.9,4.8,-7.5).curveTo(5.8,-7.1,6.5,-6.4).curveTo(7.1,-5.8,7.5,-4.9).curveTo(7.8,-4,7.8,-3).curveTo(7.8,-2,7.5,-1.1).curveTo(7.1,-0.2,6.5,0.5).curveTo(5.8,1.2,4.8,1.6).curveTo(3.9,2,2.8,2).lineTo(0.6,2).lineTo(0.6,5.3).closePath().moveTo(0.6,-0.9).lineTo(2.6,-0.9).curveTo(3.5,-0.9,4.1,-1.5).curveTo(4.6,-2.1,4.7,-3).curveTo(4.6,-3.9,4.1,-4.5).curveTo(3.5,-5,2.6,-5).lineTo(0.6,-5).closePath().moveTo(-11.1,5.3).lineTo(-13,1.3).lineTo(-15.4,1.3).lineTo(-15.4,5.3).lineTo(-18.5,5.3).lineTo(-18.5,-7.9).lineTo(-12.9,-7.9).curveTo(-11.7,-7.9,-10.7,-7.5).curveTo(-9.9,-7.1,-9.3,-6.5).curveTo(-8.6,-5.9,-8.2,-5.1).curveTo(-7.9,-4.3,-7.9,-3.3).curveTo(-8,-2.1,-8.5,-1.1).curveTo(-9.1,-0.1,-10,0.5).lineTo(-7.6,5.3).closePath().moveTo(-15.4,-1.5).lineTo(-13.1,-1.5).curveTo(-12.1,-1.5,-11.6,-2).curveTo(-11.1,-2.5,-11.2,-3.3).curveTo(-11.2,-4.1,-11.6,-4.5).curveTo(-12.1,-5,-13.1,-5).lineTo(-15.4,-5).closePath().moveTo(-44,5.3).lineTo(-44,-7.9).lineTo(-35,-7.9).lineTo(-35,-4.9).lineTo(-40.9,-4.9).lineTo(-40.9,-2.6).lineTo(-35,-2.6).lineTo(-35,0.3).lineTo(-40.9,0.3).lineTo(-40.9,5.3).closePath();
	this.shape.setTransform(24.5,33.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_happenHere, new cjs.Rectangle(-22.5,18.5,93.7,27.6), null);


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


(lib.txt_andSpine = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(46.6,6.3).curveTo(46.1,5.8,46,5).curveTo(46.1,4.2,46.6,3.7).curveTo(47,3.2,47.8,3.2).curveTo(48.6,3.2,49.1,3.7).curveTo(49.6,4.2,49.6,5).curveTo(49.6,5.8,49.1,6.3).curveTo(48.6,6.8,47.8,6.8).curveTo(47,6.8,46.6,6.3).closePath().moveTo(-3,6.6).curveTo(-3.8,6.4,-4.6,6).curveTo(-5.2,5.7,-5.8,5.2).lineTo(-6.8,4.1).lineTo(-4.1,2).curveTo(-3.6,2.8,-2.8,3.3).curveTo(-2,3.8,-0.9,3.8).curveTo(-0.1,3.8,0.4,3.5).curveTo(0.7,3.1,0.7,2.6).curveTo(0.7,2.3,0.6,2.1).curveTo(0.4,1.8,0,1.7).lineTo(-0.8,1.4).lineTo(-3.5,0.7).curveTo(-4.2,0.4,-4.7,0).curveTo(-5.4,-0.4,-5.7,-1.1).curveTo(-6.1,-1.7,-6.1,-2.8).curveTo(-6.1,-3.6,-5.7,-4.3).curveTo(-5.4,-5.1,-4.7,-5.6).curveTo(-4.2,-6.2,-3.2,-6.5).curveTo(-2.4,-6.8,-1.3,-6.8).curveTo(-0.4,-6.8,0.4,-6.6).curveTo(1,-6.5,1.7,-6.2).curveTo(2.3,-5.9,2.8,-5.4).lineTo(4,-4.4).lineTo(1.4,-2.5).curveTo(0.9,-3.2,0.3,-3.6).curveTo(-0.4,-4,-1.4,-4).curveTo(-2.2,-4,-2.6,-3.7).curveTo(-2.9,-3.3,-2.9,-2.9).curveTo(-2.9,-2.5,-2.8,-2.4).lineTo(-2.2,-2).lineTo(1.2,-1.1).curveTo(2,-0.9,2.6,-0.4).curveTo(3.2,0,3.6,0.7).curveTo(4,1.4,4,2.5).curveTo(4,3.4,3.6,4.2).curveTo(3.2,5,2.6,5.5).curveTo(1.9,6.1,1,6.4).curveTo(0,6.8,-1,6.8).curveTo(-2.1,6.8,-3,6.6).closePath().moveTo(35.5,6.6).lineTo(35.5,-6.6).lineTo(44.6,-6.6).lineTo(44.6,-3.6).lineTo(38.6,-3.6).lineTo(38.6,-1.5).lineTo(44.6,-1.5).lineTo(44.6,1.4).lineTo(38.6,1.4).lineTo(38.6,3.7).lineTo(44.6,3.7).lineTo(44.6,6.6).closePath().moveTo(30.6,6.6).lineTo(25.4,-1.7).lineTo(25.4,6.6).lineTo(22.4,6.6).lineTo(22.4,-6.6).lineTo(25.7,-6.6).lineTo(30.6,1.3).lineTo(30.6,-6.6).lineTo(33.7,-6.6).lineTo(33.7,6.6).closePath().moveTo(17.4,6.6).lineTo(17.4,-6.6).lineTo(20.5,-6.6).lineTo(20.5,6.6).closePath().moveTo(5.5,6.6).lineTo(5.5,-6.6).lineTo(10.7,-6.6).curveTo(11.9,-6.6,12.8,-6.2).curveTo(13.8,-5.8,14.4,-5.1).curveTo(15.1,-4.5,15.4,-3.6).curveTo(15.8,-2.7,15.8,-1.7).curveTo(15.8,-0.7,15.4,0.2).curveTo(15.1,1.1,14.4,1.8).curveTo(13.8,2.5,12.8,2.9).curveTo(11.9,3.3,10.7,3.3).lineTo(8.6,3.3).lineTo(8.6,6.6).closePath().moveTo(8.6,0.4).lineTo(10.6,0.4).curveTo(11.5,0.4,12.1,-0.2).curveTo(12.6,-0.8,12.6,-1.7).curveTo(12.6,-2.6,12.1,-3.2).curveTo(11.5,-3.7,10.6,-3.7).lineTo(8.6,-3.7).closePath().moveTo(-22.8,6.6).lineTo(-22.8,-6.6).lineTo(-18.2,-6.6).curveTo(-16.6,-6.6,-15.4,-6.1).curveTo(-14.1,-5.6,-13.2,-4.7).curveTo(-12.3,-3.8,-11.8,-2.6).curveTo(-11.3,-1.4,-11.3,0).curveTo(-11.4,1.4,-11.9,2.6).curveTo(-12.3,3.8,-13.3,4.7).curveTo(-14.2,5.6,-15.4,6.1).curveTo(-16.6,6.6,-18.1,6.6).closePath().moveTo(-19.7,3.6).lineTo(-18.2,3.6).curveTo(-17.4,3.6,-16.7,3.4).curveTo(-16,3.1,-15.5,2.6).curveTo(-15,2.1,-14.7,1.4).curveTo(-14.5,0.8,-14.5,0).curveTo(-14.5,-0.8,-14.7,-1.4).curveTo(-15,-2.1,-15.5,-2.6).curveTo(-15.9,-3.1,-16.7,-3.4).curveTo(-17.4,-3.6,-18.3,-3.6).lineTo(-19.7,-3.6).closePath().moveTo(-27.7,6.6).lineTo(-32.8,-1.7).lineTo(-32.8,6.6).lineTo(-35.9,6.6).lineTo(-35.9,-6.6).lineTo(-32.6,-6.6).lineTo(-27.7,1.3).lineTo(-27.7,-6.6).lineTo(-24.6,-6.6).lineTo(-24.6,6.6).closePath().moveTo(-40,6.6).lineTo(-40.7,4.6).lineTo(-45.8,4.6).lineTo(-46.4,6.6).lineTo(-49.6,6.6).lineTo(-44.8,-6.6).lineTo(-41.7,-6.6).lineTo(-36.9,6.6).closePath().moveTo(-41.7,1.9).lineTo(-43.3,-2.5).lineTo(-44.8,1.9).lineTo(-41.7,1.9).closePath();
	this.shape.setTransform(30.3,54.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_andSpine, new cjs.Rectangle(-21.5,41.2,104.1,27.700000000000003), null);


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
	this.instance.setTransform(0,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_03_1, new cjs.Rectangle(0,32,160,401), null);


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
	this.instance.setTransform(0,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_02_1, new cjs.Rectangle(0,32,160,401), null);


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
	this.instance.setTransform(0,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01_1, new cjs.Rectangle(0,32,160,401), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F5B846").beginStroke().moveTo(0.4,10.4).lineTo(0.4,0.3).lineTo(5.4,5.4).lineTo(5.4,10.4).closePath().moveTo(-5.4,-5.4).lineTo(-5.4,-10.4).lineTo(-0.4,-10.4).lineTo(-0.4,-0.3).closePath();
	this.shape.setTransform(79.6689,287.9363,1.0291,1.0291);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#1140A0").beginStroke().moveTo(4.7,28.2).curveTo(4.1,27.5,4.1,26.4).curveTo(4.1,25.2,4.7,24.5).curveTo(5.4,23.8,6.5,23.8).curveTo(7.4,23.8,8,24.2).curveTo(8.6,24.7,8.7,25.5).lineTo(7.6,25.5).curveTo(7.6,25.2,7.2,24.9).curveTo(6.9,24.7,6.5,24.7).curveTo(6,24.7,5.8,24.9).curveTo(5.4,25.2,5.3,25.5).curveTo(5.2,25.9,5.2,26.4).curveTo(5.2,27.1,5.5,27.5).curveTo(5.8,28,6.5,28).curveTo(7,28,7.3,27.7).curveTo(7.6,27.4,7.6,26.9).lineTo(8.7,26.9).curveTo(8.6,27.8,8,28.4).curveTo(7.4,28.9,6.5,28.9).curveTo(5.4,28.9,4.7,28.2).closePath().moveTo(-13.9,28.2).curveTo(-14.5,27.5,-14.5,26.4).curveTo(-14.5,25.2,-13.9,24.5).curveTo(-13.2,23.8,-12.1,23.8).curveTo(-11.3,23.8,-10.7,24.2).curveTo(-10.1,24.7,-10,25.5).lineTo(-11,25.5).curveTo(-11.1,25.2,-11.4,24.9).curveTo(-11.7,24.7,-12.1,24.7).curveTo(-12.6,24.7,-12.9,24.9).curveTo(-13.2,25.2,-13.3,25.5).curveTo(-13.5,25.9,-13.5,26.4).curveTo(-13.5,27.1,-13.1,27.5).curveTo(-12.8,28,-12.1,28).curveTo(-11.6,28,-11.4,27.7).curveTo(-11.1,27.4,-11,26.9).lineTo(-10,26.9).curveTo(-10.1,27.8,-10.6,28.4).curveTo(-11.2,28.9,-12.1,28.9).curveTo(-13.2,28.9,-13.9,28.2).closePath().moveTo(34.4,28.8).lineTo(34.3,28.5).lineTo(34.2,27.6).curveTo(34.1,27.2,33.9,27.1).curveTo(33.8,26.9,33.4,26.9).lineTo(32.3,26.9).lineTo(32.3,28.8).lineTo(31.2,28.8).lineTo(31.2,23.9).lineTo(33.9,23.9).curveTo(34.5,23.9,34.9,24.3).curveTo(35.3,24.7,35.3,25.2).curveTo(35.3,26.2,34.5,26.5).lineTo(34.5,26.5).curveTo(35.2,26.7,35.2,27.6).lineTo(35.4,28.6).lineTo(35.4,28.8).closePath().moveTo(32.3,26.1).lineTo(33.5,26.1).curveTo(34.2,26.1,34.2,25.4).curveTo(34.2,24.7,33.5,24.7).lineTo(32.3,24.7).closePath().moveTo(26,28.8).lineTo(26,23.9).lineTo(29.7,23.9).lineTo(29.7,24.8).lineTo(27.1,24.8).lineTo(27.1,25.8).lineTo(29.5,25.8).lineTo(29.5,26.7).lineTo(27.1,26.7).lineTo(27.1,27.9).lineTo(29.8,27.9).lineTo(29.8,28.8).closePath().moveTo(22.2,28.8).lineTo(22.2,24.8).lineTo(20.7,24.8).lineTo(20.7,23.9).lineTo(24.8,23.9).lineTo(24.8,24.8).lineTo(23.3,24.8).lineTo(23.3,28.8).closePath().moveTo(18.4,28.8).lineTo(16.3,25.5).lineTo(16.3,28.8).lineTo(15.3,28.8).lineTo(15.3,23.9).lineTo(16.4,23.9).lineTo(18.4,27.2).lineTo(18.4,23.9).lineTo(19.5,23.9).lineTo(19.5,28.8).closePath().moveTo(10.1,28.8).lineTo(10.1,23.9).lineTo(13.8,23.9).lineTo(13.8,24.8).lineTo(11.2,24.8).lineTo(11.2,25.8).lineTo(13.6,25.8).lineTo(13.6,26.7).lineTo(11.2,26.7).lineTo(11.2,27.9).lineTo(13.9,27.9).lineTo(13.9,28.8).closePath().moveTo(-3.1,28.8).lineTo(-3.1,23.9).lineTo(-2,23.9).lineTo(-2,27.9).lineTo(0.4,27.9).lineTo(0.4,28.8).closePath().moveTo(-5.3,28.8).lineTo(-5.7,27.7).lineTo(-7.6,27.7).lineTo(-7.9,28.8).lineTo(-9.1,28.8).lineTo(-7.2,23.9).lineTo(-6.1,23.9).lineTo(-4.2,28.8).closePath().moveTo(-7.3,26.9).lineTo(-6,26.9).lineTo(-6.6,25.1).closePath().moveTo(-17.1,28.8).lineTo(-17.1,23.9).lineTo(-16,23.9).lineTo(-16,28.8).closePath().moveTo(-22.9,28.8).lineTo(-22.9,23.9).lineTo(-20.7,23.9).curveTo(-19.7,23.9,-19.1,24.5).curveTo(-18.5,25.1,-18.5,26.3).curveTo(-18.5,27.4,-19.1,28.1).curveTo(-19.6,28.8,-20.7,28.8).closePath().moveTo(-21.8,27.9).lineTo(-20.8,27.9).curveTo(-20.3,27.9,-20,27.5).curveTo(-19.6,27.2,-19.6,26.4).curveTo(-19.6,25.6,-19.9,25.2).curveTo(-20.3,24.8,-21,24.8).lineTo(-21.8,24.8).closePath().moveTo(-28,28.8).lineTo(-28,23.9).lineTo(-24.4,23.9).lineTo(-24.4,24.8).lineTo(-27,24.8).lineTo(-27,25.8).lineTo(-24.6,25.8).lineTo(-24.6,26.7).lineTo(-27,26.7).lineTo(-27,27.9).lineTo(-24.3,27.9).lineTo(-24.3,28.8).closePath().moveTo(-30.7,28.8).lineTo(-30.7,25.3).lineTo(-31.9,28.8).lineTo(-32.8,28.8).lineTo(-34,25.4).lineTo(-34,28.8).lineTo(-35,28.8).lineTo(-35,23.9).lineTo(-33.5,23.9).lineTo(-32.3,27.3).lineTo(-31.2,23.9).lineTo(-29.7,23.9).lineTo(-29.7,28.8).closePath().moveTo(-49.7,21.5).curveTo(-49.9,21.2,-49.9,20.9).curveTo(-49.9,20.5,-49.7,20.3).curveTo(-49.5,20.1,-49.2,20.1).lineTo(-48.8,20.1).curveTo(-48.4,20.1,-48.1,19.8).curveTo(-47.5,18.7,-47.2,18).lineTo(-47,17.1).curveTo(-47,16.7,-47.3,15.8).lineTo(-48.8,11.6).curveTo(-49.1,10.7,-49.3,10.5).curveTo(-49.5,10.1,-50,10.1).lineTo(-50.5,10).lineTo(-50.6,9.7).curveTo(-50.6,9.7,-50.6,9.6).curveTo(-50.6,9.6,-50.5,9.6).curveTo(-50.5,9.5,-50.5,9.5).curveTo(-50.5,9.5,-50.4,9.5).lineTo(-48.6,9.5).lineTo(-46.9,9.5).lineTo(-46.7,9.7).lineTo(-46.8,10).lineTo(-47.3,10.1).curveTo(-47.8,10.1,-47.8,10.3).lineTo(-47.2,12.1).lineTo(-46.6,14).lineTo(-46,15.4).lineTo(-45.3,13.9).lineTo(-44.6,12.3).curveTo(-43.9,10.7,-43.9,10.4).curveTo(-43.9,10.1,-44.4,10.1).lineTo(-45,10).lineTo(-45.1,9.7).lineTo(-45,9.5).lineTo(-43.2,9.5).lineTo(-41.7,9.5).lineTo(-41.6,9.7).lineTo(-41.7,10).lineTo(-42.1,10).curveTo(-42.5,10.1,-42.9,10.6).curveTo(-43.2,11,-43.7,12.1).lineTo(-44.8,14.4).lineTo(-47.8,20.8).curveTo(-48.2,21.7,-49.1,21.7).curveTo(-49.5,21.7,-49.7,21.5).closePath().moveTo(36.8,17.5).curveTo(36.4,16.4,35.6,14.6).lineTo(34.4,11.9).curveTo(32.7,15.4,32,17.5).lineTo(31.8,17.6).lineTo(31.4,17.5).lineTo(26.4,6.2).lineTo(25.8,5.2).curveTo(25.5,4.8,24.9,4.8).lineTo(24.5,4.7).lineTo(24.4,4.5).lineTo(24.5,4.3).lineTo(26.5,4.3).lineTo(28.8,4.3).curveTo(28.8,4.3,28.8,4.3).curveTo(28.9,4.3,28.9,4.4).curveTo(28.9,4.4,28.9,4.4).curveTo(28.9,4.4,28.9,4.5).lineTo(28.8,4.7).lineTo(28.4,4.8).curveTo(27.7,4.8,27.7,5.1).curveTo(27.7,5.4,28.7,7.7).lineTo(32.1,15).lineTo(33.6,11.9).lineTo(33.9,11.1).lineTo(33.8,10.6).lineTo(31.6,5.9).curveTo(31.4,5.3,31.1,5.1).curveTo(30.8,4.8,30.4,4.8).lineTo(29.9,4.7).curveTo(29.9,4.7,29.9,4.7).curveTo(29.8,4.6,29.8,4.6).curveTo(29.8,4.6,29.8,4.5).curveTo(29.8,4.5,29.8,4.5).curveTo(29.8,4.4,29.8,4.4).curveTo(29.8,4.4,29.9,4.4).curveTo(29.9,4.3,29.9,4.3).curveTo(29.9,4.3,30,4.3).lineTo(32.1,4.3).lineTo(34.2,4.3).lineTo(34.3,4.5).lineTo(34.2,4.7).lineTo(33.7,4.8).curveTo(33.1,4.8,33.1,5).curveTo(33,5.2,33.3,5.9).lineTo(34.8,9.3).lineTo(36,6.7).curveTo(36.5,5.5,36.5,5.1).curveTo(36.5,4.8,36,4.8).lineTo(35.4,4.7).lineTo(35.3,4.4).lineTo(35.4,4.3).lineTo(37.3,4.3).lineTo(39.1,4.3).lineTo(39.3,4.5).lineTo(39.2,4.7).lineTo(38.6,4.8).curveTo(38.1,4.8,37.6,5.4).lineTo(37,6.5).lineTo(35.5,9.6).lineTo(35.3,10.1).lineTo(35.4,10.6).lineTo(37.4,15).lineTo(39.2,10.9).lineTo(40.7,7).lineTo(41.3,5.2).curveTo(41.3,4.8,40.7,4.8).lineTo(40.1,4.7).lineTo(40,4.5).lineTo(40.1,4.3).lineTo(42.2,4.3).curveTo(43.1,4.3,43.7,3.9).lineTo(44.7,3.3).lineTo(44.8,3.3).lineTo(44.9,3.4).lineTo(44.8,5.8).lineTo(44.8,9.9).curveTo(44.8,10,44.8,10).curveTo(44.8,10.1,44.8,10.2).curveTo(44.9,10.2,44.9,10.2).curveTo(44.9,10.3,44.9,10.3).curveTo(46.2,9.3,47.6,9.3).curveTo(48.9,9.3,49.5,10).curveTo(50.1,10.6,50.1,11.8).lineTo(50.1,15).curveTo(50.1,16.1,50.2,16.4).curveTo(50.3,16.7,50.8,16.8).lineTo(51.3,16.8).curveTo(51.3,16.8,51.4,16.9).curveTo(51.4,16.9,51.4,16.9).curveTo(51.4,16.9,51.4,17).curveTo(51.4,17,51.4,17.1).curveTo(51.4,17.1,51.4,17.2).curveTo(51.4,17.2,51.4,17.2).curveTo(51.4,17.3,51.3,17.3).curveTo(51.3,17.3,51.3,17.3).lineTo(49.3,17.2).lineTo(47.5,17.3).lineTo(47.4,17.1).lineTo(47.5,16.8).lineTo(47.9,16.8).curveTo(48.4,16.7,48.5,16.4).curveTo(48.6,16.1,48.6,15).lineTo(48.6,12.3).curveTo(48.6,11.3,48.1,10.7).curveTo(47.7,10.2,46.8,10.2).curveTo(45.8,10.2,45.2,10.7).lineTo(44.9,11.1).lineTo(44.8,11.8).lineTo(44.8,15).curveTo(44.8,16.1,44.9,16.4).curveTo(45,16.7,45.6,16.8).lineTo(46,16.8).curveTo(46,16.8,46,16.9).curveTo(46,16.9,46,16.9).curveTo(46,16.9,46,17).curveTo(46,17,46,17.1).curveTo(46,17.1,46,17.2).curveTo(46,17.2,46,17.2).curveTo(46,17.3,46,17.3).curveTo(45.9,17.3,45.9,17.3).lineTo(44.1,17.2).lineTo(42.2,17.3).lineTo(42.1,17.1).curveTo(42.1,17,42.1,17).curveTo(42.1,16.9,42.1,16.9).curveTo(42.1,16.9,42.1,16.9).curveTo(42.1,16.8,42.1,16.8).lineTo(42.6,16.8).curveTo(43.2,16.7,43.3,16.4).curveTo(43.4,16.2,43.4,15).lineTo(43.4,6.2).curveTo(43.4,5.3,43.3,5.1).curveTo(43.3,5,43.2,5).curveTo(43.2,5,43.2,4.9).curveTo(43.2,4.9,43.2,4.9).curveTo(43.1,4.9,43.1,4.9).curveTo(42.7,5.1,42.4,5.5).lineTo(41.2,8.2).lineTo(39.8,11.5).curveTo(38.5,14.5,37.3,17.5).lineTo(37.1,17.6).lineTo(36.8,17.5).closePath().moveTo(-22.1,16.8).lineTo(-22.4,15.7).curveTo(-22.6,14.8,-22.6,14.1).lineTo(-22.4,14).lineTo(-22.1,14.1).curveTo(-21.3,17,-18.8,17).curveTo(-17.6,17,-16.9,16.3).curveTo(-16.3,15.7,-16.3,14.7).curveTo(-16.3,13.9,-16.6,13.4).curveTo(-16.9,12.6,-17.9,11.9).lineTo(-19.8,10.8).curveTo(-21.9,9.3,-21.9,7.4).curveTo(-21.9,5.9,-20.8,5).curveTo(-19.7,4,-17.9,4).curveTo(-17,4,-16.1,4.3).lineTo(-15.4,4.4).lineTo(-15.1,5.4).lineTo(-15.1,6.8).curveTo(-15.1,6.8,-15.1,6.8).curveTo(-15.1,6.8,-15.1,6.9).curveTo(-15.1,6.9,-15.2,6.9).curveTo(-15.2,6.9,-15.3,6.9).lineTo(-15.5,6.8).curveTo(-15.8,5.9,-16.3,5.4).curveTo(-16.9,4.6,-18.2,4.6).curveTo(-19.5,4.6,-20.1,5.4).curveTo(-20.5,5.9,-20.5,6.8).curveTo(-20.5,8.2,-18.9,9.2).lineTo(-17.3,10.2).curveTo(-14.8,11.7,-14.8,13.9).curveTo(-14.8,15.6,-16,16.6).curveTo(-17.1,17.6,-19,17.6).curveTo(-20.8,17.6,-22.1,16.8).closePath().moveTo(63.9,17.2).curveTo(63.3,16.8,62.8,16.2).curveTo(62,15.2,62,13.7).curveTo(62,11.8,63.1,10.6).curveTo(64.2,9.3,65.9,9.3).curveTo(67.1,9.3,67.9,10).curveTo(68.7,10.6,68.7,11.6).lineTo(68.6,12.1).curveTo(68.5,12.2,67.5,12.2).lineTo(63.8,12.2).curveTo(63.7,12.2,63.6,12.2).curveTo(63.6,12.2,63.5,12.2).curveTo(63.5,12.3,63.4,12.3).curveTo(63.4,12.3,63.4,12.3).lineTo(63.3,12.8).curveTo(63.3,14.3,64.2,15.3).curveTo(65.1,16.4,66.5,16.4).curveTo(67.1,16.4,67.5,16.2).curveTo(67.9,16,68.3,15.5).lineTo(68.6,15.5).lineTo(68.7,15.7).curveTo(68.3,16.6,67.3,17.1).curveTo(66.5,17.5,65.6,17.5).curveTo(64.7,17.5,63.9,17.2).closePath().moveTo(64.2,10.5).curveTo(63.5,11,63.5,11.6).lineTo(63.7,11.6).lineTo(65.1,11.6).curveTo(66.8,11.6,67.1,11.4).curveTo(67.1,11.4,67.1,11.4).curveTo(67.1,11.4,67.2,11.3).curveTo(67.2,11.3,67.2,11.2).curveTo(67.2,11.1,67.2,11.1).curveTo(67.2,10.6,66.9,10.3).curveTo(66.5,9.8,65.7,9.8).curveTo(64.9,9.8,64.2,10.5).closePath().moveTo(57.9,16.9).curveTo(57.5,16.4,57.5,15.4).lineTo(57.5,10.9).lineTo(57.4,10.5).curveTo(57.4,10.5,57.4,10.4).curveTo(57.4,10.4,57.3,10.4).curveTo(57.3,10.4,57.2,10.4).curveTo(57.1,10.4,57.1,10.4).lineTo(56.5,10.4).lineTo(56.4,10.2).lineTo(56.5,9.9).curveTo(57.3,9.7,57.7,9.3).curveTo(58.2,9,58.5,8.2).curveTo(58.6,8.1,58.7,8.1).curveTo(58.8,8.1,58.8,8.1).curveTo(58.9,8.2,58.9,8.2).curveTo(58.9,8.2,59,8.3).lineTo(59,9.2).lineTo(59,9.5).lineTo(59.3,9.5).lineTo(61.5,9.5).curveTo(61.5,9.5,61.6,9.6).curveTo(61.6,9.6,61.6,9.7).curveTo(61.6,9.7,61.6,9.8).curveTo(61.6,9.9,61.6,10).lineTo(61.5,10.4).lineTo(59.3,10.4).curveTo(59.2,10.4,59.2,10.4).curveTo(59.1,10.4,59.1,10.4).curveTo(59,10.4,59,10.4).curveTo(59,10.5,59,10.5).lineTo(58.9,10.8).lineTo(58.9,14.5).curveTo(58.9,15.5,59.2,16).curveTo(59.5,16.7,60.4,16.7).lineTo(60.9,16.6).lineTo(61.4,16.3).lineTo(61.6,16.4).lineTo(61.6,16.6).curveTo(61.3,17,60.8,17.2).curveTo(60.2,17.5,59.5,17.5).curveTo(58.4,17.5,57.9,16.9).closePath().moveTo(10.1,16.9).curveTo(9.7,16.4,9.7,15.4).lineTo(9.7,10.9).lineTo(9.6,10.5).lineTo(9.2,10.4).lineTo(8.7,10.4).lineTo(8.6,10.2).curveTo(8.6,10.1,8.6,10.1).curveTo(8.6,10.1,8.6,10).curveTo(8.6,10,8.6,10).curveTo(8.7,10,8.7,9.9).curveTo(9.5,9.7,9.9,9.3).curveTo(10.4,9,10.7,8.2).curveTo(10.8,8.1,10.9,8.1).curveTo(10.9,8.1,11,8.1).curveTo(11,8.2,11.1,8.2).curveTo(11.1,8.2,11.1,8.3).lineTo(11.1,9.2).lineTo(11.2,9.5).lineTo(11.5,9.5).lineTo(13.7,9.5).curveTo(13.7,9.5,13.7,9.6).curveTo(13.8,9.6,13.8,9.7).curveTo(13.8,9.7,13.8,9.8).curveTo(13.8,9.9,13.8,10).curveTo(13.8,10,13.8,10.1).curveTo(13.8,10.2,13.8,10.2).curveTo(13.8,10.3,13.7,10.3).curveTo(13.7,10.4,13.7,10.4).lineTo(11.5,10.4).curveTo(11.4,10.4,11.4,10.4).curveTo(11.3,10.4,11.3,10.4).curveTo(11.2,10.4,11.2,10.4).curveTo(11.2,10.5,11.2,10.5).lineTo(11.1,10.8).lineTo(11.1,14.5).curveTo(11.1,15.5,11.3,16).curveTo(11.7,16.7,12.5,16.7).lineTo(13.1,16.6).lineTo(13.6,16.3).lineTo(13.7,16.4).lineTo(13.8,16.6).curveTo(13,17.5,11.7,17.5).curveTo(10.5,17.5,10.1,16.9).closePath().moveTo(4.2,16.9).curveTo(3.8,16.4,3.8,15.4).lineTo(3.8,10.9).lineTo(3.7,10.5).curveTo(3.7,10.5,3.7,10.4).curveTo(3.7,10.4,3.6,10.4).curveTo(3.5,10.4,3.5,10.4).curveTo(3.4,10.4,3.3,10.4).lineTo(2.8,10.4).lineTo(2.7,10.2).lineTo(2.7,9.9).curveTo(3.6,9.7,4,9.3).curveTo(4.4,9,4.8,8.2).lineTo(5,8.2).lineTo(5.2,8.3).lineTo(5.2,9.2).lineTo(5.3,9.5).lineTo(5.6,9.5).lineTo(7.8,9.5).curveTo(7.8,9.5,7.8,9.6).curveTo(7.9,9.6,7.9,9.7).curveTo(7.9,9.7,7.9,9.8).curveTo(7.9,9.9,7.9,10).curveTo(7.9,10,7.9,10.1).curveTo(7.9,10.2,7.9,10.2).curveTo(7.9,10.3,7.8,10.3).curveTo(7.8,10.4,7.8,10.4).lineTo(5.6,10.4).curveTo(5.5,10.4,5.5,10.4).curveTo(5.4,10.4,5.4,10.4).curveTo(5.3,10.4,5.3,10.4).curveTo(5.3,10.5,5.3,10.5).lineTo(5.2,10.8).lineTo(5.2,14.5).curveTo(5.2,15.5,5.4,16).curveTo(5.8,16.7,6.6,16.7).lineTo(7.2,16.6).lineTo(7.7,16.3).lineTo(7.8,16.4).lineTo(7.9,16.6).curveTo(7.1,17.5,5.8,17.5).curveTo(4.6,17.5,4.2,16.9).closePath().moveTo(-5.2,16.4).curveTo(-6.3,15.3,-6.3,13.5).curveTo(-6.3,11.7,-5.1,10.5).curveTo(-3.9,9.3,-2.1,9.3).curveTo(-0.5,9.3,0.7,10.4).curveTo(1.9,11.5,1.9,13.3).curveTo(1.9,15.2,0.7,16.3).curveTo(-0.5,17.5,-2.3,17.5).curveTo(-4,17.5,-5.2,16.4).closePath().moveTo(-4,10.7).curveTo(-4.6,11.6,-4.6,13.2).curveTo(-4.6,14.7,-4,15.7).curveTo(-3.3,16.9,-2.1,16.9).curveTo(-0.9,16.9,-0.3,15.8).curveTo(0.2,15,0.2,13.6).curveTo(0.2,12.1,-0.4,11.1).curveTo(-1.1,9.8,-2.4,9.8).curveTo(-3.4,9.8,-4,10.7).closePath().moveTo(-12.5,16.5).curveTo(-13.6,15.4,-13.6,13.6).curveTo(-13.6,11.9,-12.5,10.6).curveTo(-11.2,9.3,-8.9,9.3).curveTo(-7.9,9.3,-7.1,9.6).curveTo(-6.8,9.8,-6.8,10.4).lineTo(-7,10.9).curveTo(-7,10.9,-7,11).curveTo(-7.1,11,-7.1,11).curveTo(-7.2,11,-7.2,11.1).curveTo(-7.2,11.1,-7.3,11.1).lineTo(-7.6,11).curveTo(-7.9,10.5,-8.4,10.3).curveTo(-8.9,9.9,-9.5,9.9).curveTo(-10.6,9.9,-11.4,10.7).curveTo(-12.2,11.6,-12.2,13.1).curveTo(-12.2,14.4,-11.4,15.3).curveTo(-10.5,16.4,-9.1,16.4).curveTo(-8.3,16.4,-7.7,16.1).curveTo(-7.3,15.8,-6.9,15.2).lineTo(-6.6,15.3).lineTo(-6.5,15.5).curveTo(-7,16.5,-8,17.1).curveTo(-8.8,17.5,-9.8,17.5).curveTo(-11.4,17.5,-12.5,16.5).closePath().moveTo(-36.7,16.4).curveTo(-37.9,15.3,-37.9,13.5).curveTo(-37.9,11.7,-36.7,10.5).curveTo(-35.5,9.3,-33.7,9.3).curveTo(-32,9.3,-30.9,10.4).curveTo(-29.7,11.5,-29.7,13.3).curveTo(-29.7,15.2,-30.9,16.3).curveTo(-32,17.5,-33.9,17.5).curveTo(-35.6,17.5,-36.7,16.4).closePath().moveTo(-35.5,10.7).curveTo(-36.2,11.6,-36.2,13.2).curveTo(-36.2,14.7,-35.6,15.7).curveTo(-34.9,16.9,-33.7,16.9).curveTo(-32.5,16.9,-31.9,15.8).curveTo(-31.4,15,-31.4,13.6).curveTo(-31.4,12.1,-32,11.1).curveTo(-32.7,9.8,-33.9,9.8).curveTo(-34.9,9.8,-35.5,10.7).closePath().moveTo(-52.8,16.9).curveTo(-52.9,16.9,-52.9,16.8).curveTo(-53,16.8,-53,16.7).curveTo(-53.1,16.7,-53.1,16.7).curveTo(-53.1,16.7,-53.2,16.7).lineTo(-53.5,16.8).lineTo(-53.9,17).lineTo(-54.6,17.3).curveTo(-55,17.5,-55.3,17.5).curveTo(-56.2,17.5,-56.7,17.1).curveTo(-57.3,16.5,-57.3,15.7).curveTo(-57.3,15.1,-57,14.7).curveTo(-56.6,14.4,-55.7,14.1).lineTo(-53.4,13.2).lineTo(-53.1,13).lineTo(-53,12.6).lineTo(-53,11.7).curveTo(-53,11,-53.3,10.6).curveTo(-53.6,10,-54.4,10).curveTo(-54.9,10,-55.3,10.2).curveTo(-55.7,10.5,-55.7,10.9).curveTo(-55.7,11.4,-55.9,11.6).curveTo(-56.4,11.9,-57,11.9).curveTo(-57.1,11.9,-57.1,11.9).curveTo(-57.2,11.9,-57.2,11.9).curveTo(-57.2,11.8,-57.3,11.8).curveTo(-57.3,11.7,-57.3,11.7).curveTo(-57.3,10.9,-56,10.1).curveTo(-54.7,9.3,-53.7,9.3).curveTo(-52.6,9.3,-52.1,9.9).curveTo(-51.5,10.5,-51.6,11.6).lineTo(-51.7,14.9).curveTo(-51.8,16.7,-50.8,16.7).lineTo(-50.3,16.5).lineTo(-50.1,16.4).curveTo(-50,16.4,-50,16.4).curveTo(-50,16.5,-50,16.5).curveTo(-49.9,16.5,-49.9,16.6).curveTo(-49.9,16.6,-49.9,16.7).lineTo(-50.4,17.1).curveTo(-51,17.5,-51.6,17.5).curveTo(-52.4,17.5,-52.8,16.9).closePath().moveTo(-54.1,14).curveTo(-55,14.4,-55.4,14.6).curveTo(-55.8,14.9,-55.8,15.5).curveTo(-55.8,15.8,-55.6,16.2).curveTo(-55.2,16.7,-54.6,16.7).lineTo(-53.9,16.5).lineTo(-53.4,16.2).curveTo(-53.2,16,-53.2,15.7).lineTo(-53.1,15.2).lineTo(-53.1,14.1).curveTo(-53.1,14,-53.1,14).curveTo(-53.1,13.9,-53.1,13.9).curveTo(-53.2,13.9,-53.2,13.8).curveTo(-53.2,13.8,-53.3,13.8).lineTo(-54.1,14).closePath().moveTo(16.7,16.4).curveTo(15.5,15.4,15.5,13.9).curveTo(15.5,11.7,17.8,10.8).curveTo(17,10,17,9.1).curveTo(17,8.1,17.7,7.4).curveTo(18.4,6.7,19.5,6.7).curveTo(20.2,6.7,20.7,7).curveTo(21.3,7.5,21.3,8.1).curveTo(21.3,8.8,20.8,9.2).curveTo(20.3,9.5,20,9.5).curveTo(19.6,9.5,19.8,9.2).lineTo(20,8.9).lineTo(20,8.3).lineTo(19.6,7.8).curveTo(19.3,7.6,18.9,7.6).curveTo(18.4,7.5,18,7.8).curveTo(17.6,8.2,17.6,8.6).curveTo(17.6,9.1,18,9.5).curveTo(18.4,9.9,19.3,10.4).curveTo(21,11.3,21.8,11.9).curveTo(23,13,23.9,14.8).curveTo(24.5,14,24.5,12.9).curveTo(24.5,12.1,24.1,11.6).curveTo(23.8,11.3,23.4,11.2).curveTo(22.8,11.2,22.4,11.5).curveTo(22.4,11.5,22.3,11.6).curveTo(22.3,11.6,22.3,11.6).curveTo(22.2,11.6,22.2,11.6).curveTo(22.2,11.6,22.1,11.6).curveTo(22.1,11.6,22.1,11.5).curveTo(22,11.5,22,11.4).curveTo(22,11.4,22,11.3).curveTo(22,11.2,22,11.1).curveTo(22.1,10.6,22.6,10.3).curveTo(23.1,10,23.8,10).lineTo(24.7,10.1).lineTo(25.5,10.2).curveTo(25.8,10.2,26,10).lineTo(26.1,9.9).curveTo(26.1,9.9,26.1,9.9).curveTo(26.2,9.9,26.2,10).curveTo(26.2,10,26.2,10).curveTo(26.3,10,26.3,10.1).curveTo(26.3,10.6,26,10.9).curveTo(25.7,11.3,24.9,11.5).curveTo(25.2,12,25.2,12.7).curveTo(25.2,14.1,24.2,15.3).curveTo(24.6,16.1,25.1,16.4).curveTo(25.6,16.8,26.3,16.8).lineTo(26.8,16.7).lineTo(27.1,16.6).curveTo(27.2,16.6,27.2,16.6).curveTo(27.2,16.6,27.2,16.7).curveTo(27.2,16.7,27.2,16.7).curveTo(27.2,16.7,27.2,16.8).curveTo(27.2,17,26.7,17.2).curveTo(26.2,17.4,25.4,17.4).curveTo(24.6,17.4,24.1,17.2).curveTo(23.6,17,23,16.4).curveTo(22,17,21.3,17.2).curveTo(20.6,17.4,19.7,17.4).curveTo(17.9,17.4,16.7,16.4).closePath().moveTo(17.1,12.8).curveTo(17.1,14.3,18.1,15.4).curveTo(19.2,16.5,20.6,16.5).lineTo(21.6,16.4).lineTo(22.6,16).lineTo(21.8,14.9).lineTo(21.3,14.3).curveTo(20.6,13.2,19.8,12.5).lineTo(18.6,11.5).lineTo(18.2,11.2).curveTo(17.1,11.4,17.1,12.8).closePath().moveTo(53.9,17.2).lineTo(52,17.3).lineTo(51.9,17.1).lineTo(52,16.8).lineTo(52.4,16.8).curveTo(53,16.7,53.1,16.4).curveTo(53.2,16.2,53.2,15).lineTo(53.2,11.6).curveTo(53.2,11,53.1,10.9).curveTo(53,10.7,52.6,10.4).lineTo(52.4,10.3).lineTo(52.4,10.1).lineTo(52.5,9.9).lineTo(53.5,9.5).lineTo(54.5,9).curveTo(54.5,9,54.5,9).curveTo(54.6,9,54.6,9).curveTo(54.6,9,54.7,9.1).curveTo(54.7,9.1,54.7,9.1).lineTo(54.6,11.5).lineTo(54.6,15).curveTo(54.6,16.1,54.7,16.4).curveTo(54.8,16.7,55.4,16.8).lineTo(55.8,16.8).curveTo(55.8,16.8,55.8,16.9).curveTo(55.8,16.9,55.8,16.9).curveTo(55.8,17,55.8,17).curveTo(55.8,17,55.8,17.1).lineTo(55.7,17.3).lineTo(53.9,17.2).closePath().moveTo(-26.9,17.2).lineTo(-28.7,17.3).lineTo(-28.8,17.1).lineTo(-28.7,16.8).lineTo(-28.3,16.8).curveTo(-27.9,16.7,-27.7,16.4).curveTo(-27.6,16.1,-27.6,15).lineTo(-27.6,11.6).lineTo(-27.7,10.9).curveTo(-27.8,10.7,-28.2,10.4).lineTo(-28.3,10.3).lineTo(-28.4,10.1).lineTo(-28.3,9.9).lineTo(-27.3,9.5).lineTo(-26.3,9).lineTo(-26.2,9.1).lineTo(-26.2,10.3).lineTo(-26.1,10.4).lineTo(-25.1,9.6).curveTo(-24.4,9.3,-24,9.3).curveTo(-23.6,9.3,-23.3,9.5).curveTo(-23.1,9.7,-23.1,10).curveTo(-23.1,10.5,-23.4,10.7).curveTo(-23.6,10.9,-23.9,10.9).lineTo(-24.4,10.8).curveTo(-24.8,10.5,-25.2,10.5).curveTo(-25.6,10.5,-25.9,10.9).curveTo(-26.2,11.2,-26.2,12.4).lineTo(-26.2,15).curveTo(-26.2,16.2,-26.1,16.4).curveTo(-25.9,16.7,-25.4,16.8).lineTo(-24.7,16.8).curveTo(-24.7,16.8,-24.6,16.9).curveTo(-24.6,16.9,-24.6,16.9).curveTo(-24.6,16.9,-24.6,17).curveTo(-24.6,17,-24.6,17.1).curveTo(-24.6,17.1,-24.6,17.2).curveTo(-24.6,17.2,-24.6,17.2).curveTo(-24.7,17.3,-24.7,17.3).curveTo(-24.7,17.3,-24.7,17.3).lineTo(-26.9,17.2).closePath().moveTo(-40.5,17.2).lineTo(-42.3,17.3).lineTo(-42.4,17.1).curveTo(-42.4,17,-42.4,17).curveTo(-42.4,16.9,-42.4,16.9).curveTo(-42.4,16.9,-42.4,16.9).curveTo(-42.4,16.8,-42.4,16.8).lineTo(-41.9,16.8).curveTo(-41.4,16.7,-41.3,16.4).curveTo(-41.2,16.2,-41.2,15).lineTo(-41.2,6.2).lineTo(-41.2,5.1).curveTo(-41.4,4.8,-41.8,4.6).lineTo(-42,4.5).lineTo(-42.1,4.3).lineTo(-42,4.1).lineTo(-39.9,3.3).lineTo(-39.7,3.4).lineTo(-39.7,5.8).lineTo(-39.7,15).curveTo(-39.7,16.1,-39.6,16.4).curveTo(-39.5,16.7,-39,16.8).lineTo(-38.5,16.8).lineTo(-38.4,17.1).lineTo(-38.6,17.3).lineTo(-40.5,17.2).closePath().moveTo(-66.1,17.2).lineTo(-68.4,17.3).lineTo(-68.5,17.1).lineTo(-68.4,16.8).lineTo(-68.1,16.8).curveTo(-67.3,16.6,-67.2,16.2).curveTo(-67,15.9,-67,14.3).lineTo(-67,6.9).curveTo(-67,5.7,-67.2,5.4).curveTo(-67.3,5.1,-68,5).lineTo(-68.6,4.9).lineTo(-68.7,4.7).curveTo(-68.7,4.6,-68.7,4.6).curveTo(-68.7,4.5,-68.7,4.5).curveTo(-68.7,4.5,-68.6,4.5).curveTo(-68.6,4.4,-68.6,4.4).curveTo(-67,4.3,-64.4,4.3).curveTo(-62.2,4.3,-61.1,4.8).curveTo(-59.6,5.6,-59.6,7.3).curveTo(-59.6,8.3,-60.2,8.9).curveTo(-60.6,9.5,-61.6,9.9).curveTo(-61.6,10,-61.6,10).curveTo(-61.5,10.1,-61.5,10.1).curveTo(-61.4,10.2,-61.4,10.2).curveTo(-61.3,10.2,-61.2,10.2).curveTo(-60.2,10.4,-59.5,11.2).curveTo(-58.6,12.1,-58.6,13.5).curveTo(-58.6,15.3,-59.9,16.3).curveTo(-61.2,17.3,-63.8,17.3).lineTo(-66.1,17.2).closePath().moveTo(-65.2,10.7).curveTo(-65.3,10.8,-65.3,10.8).curveTo(-65.3,10.8,-65.3,10.9).curveTo(-65.4,10.9,-65.4,11).curveTo(-65.4,11.1,-65.4,11.1).lineTo(-65.4,14).curveTo(-65.4,15.7,-65,16.2).curveTo(-64.5,16.7,-63.5,16.7).curveTo(-62,16.7,-61.3,16).curveTo(-60.4,15.4,-60.4,14).curveTo(-60.4,12.6,-61.2,11.7).curveTo(-62.2,10.6,-64.3,10.6).curveTo(-65,10.6,-65.2,10.7).closePath().moveTo(-65.1,5).curveTo(-65.4,5.1,-65.4,5.5).lineTo(-65.4,9.5).curveTo(-65.4,9.9,-65.3,10).curveTo(-65.1,10.1,-64.4,10).curveTo(-62.8,10,-62.1,9.4).curveTo(-61.3,8.8,-61.3,7.5).curveTo(-61.3,6.2,-62.2,5.5).curveTo(-63,4.9,-64.2,4.9).lineTo(-65.1,5).closePath().moveTo(53,7.4).curveTo(52.7,7.1,52.7,6.7).curveTo(52.7,6.2,53,6).curveTo(53.3,5.7,53.8,5.7).curveTo(54.2,5.7,54.5,6).curveTo(54.8,6.2,54.8,6.7).curveTo(54.8,7.2,54.5,7.5).curveTo(54.2,7.7,53.7,7.7).curveTo(53.3,7.7,53,7.4).closePath().moveTo(-5.3,1.1).lineTo(-5.3,-8.5).lineTo(-0.3,-13.6).lineTo(-0.3,1.1).closePath().moveTo(0.6,-1.8).curveTo(0.6,-1.8,0.5,-1.9).curveTo(0.5,-1.9,0.5,-2).curveTo(0.5,-2,0.4,-2.1).curveTo(0.4,-2.2,0.4,-2.2).curveTo(0.4,-2.3,0.4,-2.4).curveTo(0.5,-2.4,0.5,-2.5).curveTo(0.5,-2.5,0.5,-2.6).curveTo(0.6,-2.6,0.6,-2.7).curveTo(0.7,-2.7,0.7,-2.8).curveTo(0.8,-2.8,0.8,-2.8).curveTo(0.9,-2.9,0.9,-2.9).curveTo(1,-2.9,1.1,-2.9).curveTo(1.1,-2.9,1.2,-2.9).curveTo(1.3,-2.9,1.3,-2.8).curveTo(1.4,-2.8,1.4,-2.8).curveTo(1.5,-2.7,1.5,-2.7).curveTo(1.6,-2.6,1.6,-2.6).curveTo(1.6,-2.5,1.7,-2.5).curveTo(1.7,-2.4,1.7,-2.4).curveTo(1.7,-2.3,1.7,-2.2).curveTo(1.7,-2.2,1.7,-2.1).curveTo(1.7,-2,1.7,-2).curveTo(1.6,-1.9,1.6,-1.9).curveTo(1.6,-1.8,1.5,-1.8).curveTo(1.5,-1.7,1.4,-1.7).curveTo(1.4,-1.6,1.3,-1.6).curveTo(1.3,-1.6,1.2,-1.6).curveTo(1.1,-1.6,1.1,-1.6).curveTo(1,-1.6,0.9,-1.6).curveTo(0.9,-1.6,0.8,-1.6).curveTo(0.8,-1.6,0.7,-1.7).curveTo(0.7,-1.7,0.6,-1.8).closePath().moveTo(0.7,-2.6).lineTo(0.5,-2.2).lineTo(0.7,-1.8).lineTo(1.1,-1.7).lineTo(1.4,-1.8).lineTo(1.6,-2.2).lineTo(1.4,-2.6).curveTo(1.4,-2.7,1.3,-2.7).curveTo(1.3,-2.7,1.3,-2.7).curveTo(1.2,-2.8,1.2,-2.8).curveTo(1.1,-2.8,1.1,-2.8).curveTo(1,-2.8,1,-2.8).curveTo(0.9,-2.8,0.9,-2.7).curveTo(0.8,-2.7,0.8,-2.7).curveTo(0.7,-2.7,0.7,-2.6).closePath().moveTo(1.2,-1.9).lineTo(1.1,-2.2).lineTo(0.9,-2.2).lineTo(0.9,-1.9).lineTo(0.8,-1.9).lineTo(0.8,-2.6).lineTo(1.1,-2.6).curveTo(1.1,-2.6,1.2,-2.6).curveTo(1.3,-2.6,1.3,-2.6).curveTo(1.3,-2.5,1.4,-2.5).curveTo(1.4,-2.4,1.4,-2.4).curveTo(1.4,-2.3,1.4,-2.3).curveTo(1.3,-2.3,1.3,-2.2).curveTo(1.3,-2.2,1.3,-2.2).curveTo(1.2,-2.2,1.2,-2.2).lineTo(1.4,-1.9).closePath().moveTo(0.9,-2.3).lineTo(1.1,-2.3).curveTo(1.1,-2.3,1.1,-2.3).curveTo(1.2,-2.3,1.2,-2.3).curveTo(1.2,-2.3,1.2,-2.3).curveTo(1.2,-2.4,1.2,-2.4).curveTo(1.2,-2.4,1.2,-2.4).curveTo(1.2,-2.5,1.2,-2.5).curveTo(1.2,-2.5,1.1,-2.5).curveTo(1.1,-2.5,1.1,-2.5).lineTo(0.9,-2.5).closePath().moveTo(5.5,-8.5).lineTo(0.4,-13.6).lineTo(15.1,-13.6).lineTo(15.1,-8.5).closePath().moveTo(0.4,-28.9).lineTo(5.5,-28.9).lineTo(5.5,-19.3).lineTo(0.4,-14.2).closePath().moveTo(-15,-14.2).lineTo(-15,-19.3).lineTo(-5.3,-19.3).lineTo(-0.3,-14.2).closePath();
	this.shape_1.setTransform(79.5917,302.2409,1.0291,1.0291);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#3C8EBA").beginStroke().moveTo(-15.3,28.6).curveTo(-15.8,28.1,-15.8,27.3).curveTo(-15.8,26.5,-15.3,25.9).curveTo(-14.9,25.5,-14.1,25.5).curveTo(-13.5,25.5,-13.1,25.7).curveTo(-12.6,26.1,-12.6,26.7).lineTo(-13.3,26.7).curveTo(-13.4,26.4,-13.6,26.3).curveTo(-13.8,26.1,-14.1,26.1).curveTo(-14.4,26.1,-14.6,26.3).curveTo(-14.9,26.5,-14.9,26.7).lineTo(-15,27.3).curveTo(-15,27.8,-14.8,28.2).curveTo(-14.5,28.5,-14.1,28.5).curveTo(-13.7,28.5,-13.5,28.3).curveTo(-13.3,28.1,-13.2,27.7).lineTo(-14,27.7).lineTo(-14,27.1).lineTo(-12.5,27.1).lineTo(-12.5,29.1).lineTo(-13,29.1).lineTo(-13.1,28.6).curveTo(-13.5,29.2,-14.1,29.1).curveTo(-14.9,29.1,-15.3,28.6).closePath().moveTo(13.1,29.1).lineTo(13.1,25.5).lineTo(15.7,25.5).lineTo(15.7,26.2).lineTo(13.8,26.2).lineTo(13.8,27).lineTo(15.6,27).lineTo(15.6,27.5).lineTo(13.8,27.5).lineTo(13.8,28.4).lineTo(15.8,28.4).lineTo(15.8,29.1).closePath().moveTo(11.2,29.1).lineTo(9.7,26.7).lineTo(9.7,29.1).lineTo(9,29.1).lineTo(9,25.5).lineTo(9.8,25.5).lineTo(11.2,27.9).lineTo(11.3,27.9).lineTo(11.3,25.5).lineTo(12,25.5).lineTo(12,29.1).closePath().moveTo(7.1,29.1).lineTo(7.1,25.5).lineTo(7.9,25.5).lineTo(7.9,29.1).closePath().moveTo(4.4,29.1).lineTo(3.2,25.5).lineTo(4,25.5).lineTo(4.8,28).lineTo(5.6,25.5).lineTo(6.4,25.5).lineTo(5.2,29.1).closePath().moveTo(-0,29.1).lineTo(-0,25.5).lineTo(2.6,25.5).lineTo(2.6,26.2).lineTo(0.8,26.2).lineTo(0.8,27).lineTo(2.5,27).lineTo(2.5,27.5).lineTo(0.8,27.5).lineTo(0.8,28.4).lineTo(2.7,28.4).lineTo(2.7,29.1).closePath().moveTo(-3.7,29.1).lineTo(-3.7,25.5).lineTo(-2.1,25.5).curveTo(-1.7,25.5,-1.4,25.7).curveTo(-1.1,25.9,-1,26.1).curveTo(-0.9,26.3,-0.9,26.6).curveTo(-0.9,26.9,-1,27.2).curveTo(-1.1,27.5,-1.4,27.6).curveTo(-1.7,27.8,-2.1,27.8).lineTo(-2.9,27.8).lineTo(-2.9,29.1).closePath().moveTo(-2.9,27.2).lineTo(-2.3,27.2).curveTo(-2,27.2,-1.8,27.1).curveTo(-1.8,27,-1.7,27).curveTo(-1.7,27,-1.7,26.9).curveTo(-1.6,26.8,-1.6,26.8).curveTo(-1.6,26.7,-1.6,26.6).curveTo(-1.6,26.6,-1.6,26.5).curveTo(-1.6,26.4,-1.7,26.4).curveTo(-1.7,26.4,-1.7,26.3).curveTo(-1.8,26.3,-1.8,26.3).lineTo(-2.3,26.2).lineTo(-2.9,26.2).closePath().moveTo(-5.2,29.1).lineTo(-5.5,28.2).lineTo(-6.8,28.2).lineTo(-7.1,29.1).lineTo(-7.9,29.1).lineTo(-6.5,25.5).lineTo(-5.7,25.5).lineTo(-4.4,29.1).closePath().moveTo(-6.6,27.7).lineTo(-5.7,27.7).lineTo(-6.1,26.4).lineTo(-6.2,26.4).closePath().moveTo(-9.2,29.1).lineTo(-9.3,28.8).lineTo(-9.3,28.2).lineTo(-9.5,27.8).lineTo(-9.9,27.7).lineTo(-10.7,27.7).lineTo(-10.7,29.1).lineTo(-11.5,29.1).lineTo(-11.5,25.5).lineTo(-9.6,25.5).curveTo(-9.1,25.5,-8.8,25.8).curveTo(-8.5,26,-8.5,26.5).curveTo(-8.5,27.1,-9.1,27.4).lineTo(-9.1,27.4).curveTo(-8.6,27.5,-8.6,28.2).lineTo(-8.5,28.8).lineTo(-8.5,28.9).lineTo(-8.4,29.1).closePath().moveTo(-10.7,27.1).lineTo(-9.9,27.1).curveTo(-9.3,27.1,-9.3,26.6).curveTo(-9.3,26.2,-9.9,26.2).lineTo(-10.7,26.2).closePath().moveTo(-10.4,-18.4).lineTo(-10.4,-23.4).lineTo(-0.4,-23.4).lineTo(-5.5,-18.4).closePath().moveTo(0.3,-24.1).lineTo(5.3,-29.2).lineTo(10.3,-29.2).lineTo(10.3,-24.1).closePath();
	this.shape_2.setTransform(79.7461,312.4034,1.0291,1.0291);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-150,300).lineTo(-150,-300).lineTo(150,-300).lineTo(150,300).closePath();
	this.shape_3.setTransform(80.0011,300,0.5333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_Logo, new cjs.Rectangle(0,0,160,600), null);


// stage content:
(lib._21_BAY_030_cmp_bnr_NTXNeuro_OverarchingGrapevine_160x600 = function(mode,startPosition,loop,reversed) {
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

	// txt_Stroke
	this.instance_4 = new lib.txt_Stroke();
	this.instance_4.setTransform(19.35,148.5,1,1,0,0,0,10.8,56.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(163).to({_off:false},0).to({x:41.85,alpha:1},9,cjs.Ease.quadOut).wait(53));

	// txt_andSpine
	this.instance_5 = new lib.txt_andSpine();
	this.instance_5.setTransform(19.35,170.25,1,1,0,0,0,10.8,56.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(164).to({_off:false},0).to({x:44.1,alpha:1},9,cjs.Ease.quadOut).wait(52));

	// ctaBtn
	this.instance_6 = new lib.ctaBtn();
	this.instance_6.setTransform(149.55,545.5,1,1,0,0,0,87.5,22.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(171).to({_off:false},0).to({alpha:1},9).wait(45));

	// BSWH_Logo
	this.instance_7 = new lib.BSWH_Logo();
	this.instance_7.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(161).to({_off:false},0).to({alpha:1},10).wait(54));

	// txt_doWhatYou
	this.instance_8 = new lib.txt_doWhatYou();
	this.instance_8.setTransform(86.65,55.6,1,1,0,0,0,87.5,17.8);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:122.65,alpha:1},10,cjs.Ease.quadOut).wait(137).to({x:422.65,alpha:0},9,cjs.Ease.quadIn).wait(69));

	// txt_loveAgain
	this.instance_9 = new lib.txt_loveAgain();
	this.instance_9.setTransform(80.25,85.7,1,1,0,0,0,82.4,17.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({x:116.25,alpha:1},10,cjs.Ease.quadOut).wait(137).to({x:416.25,alpha:0},9,cjs.Ease.quadIn).wait(67));

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
	this.instance_10 = new lib.txt_better();
	this.instance_10.setTransform(56.05,102.55,0.8824,0.8824,0,0,0,81.3,21.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(55).to({_off:false},0).to({alpha:1},9).wait(86).to({x:218.8,alpha:0},9,cjs.Ease.quadIn).wait(66));

	// txt_believeIt
	this.instance_11 = new lib.txt_believeIt();
	this.instance_11.setTransform(205.75,118.9,1,1,0,0,0,81.4,22.4);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(106).to({_off:false},0).to({alpha:1},9,cjs.Ease.quadOut).wait(37).to({x:368.5,alpha:0},9,cjs.Ease.quadIn).wait(64));

	// image_01
	this.instance_12 = new lib.image_01_1();
	this.instance_12.setTransform(150,819,1,1,0,0,0,150,217);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:383},14,cjs.Ease.quadInOut).wait(32).to({y:823,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(169));

	// image_02
	this.instance_13 = new lib.image_02_1();
	this.instance_13.setTransform(150,819,1,1,0,0,0,150,217);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(51).to({_off:false},0).to({y:383},14,cjs.Ease.quadInOut).wait(32).to({y:823,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(118));

	// image_03
	this.instance_14 = new lib.image_03_1();
	this.instance_14.setTransform(150,819,1,1,0,0,0,150,217);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(101).to({_off:false},0).to({y:383},14,cjs.Ease.quadInOut).wait(32).to({y:823,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(68));

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
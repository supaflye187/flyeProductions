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
p.nominalBounds = new cjs.Rectangle(0,0,160,423);


(lib.image_02 = function() {
	this.initialize(img.image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,423);


(lib.image_03 = function() {
	this.initialize(img.image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,423);// helper functions:

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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(59.6,6.3).curveTo(59.1,5.8,59.1,5).curveTo(59.1,4.2,59.6,3.7).curveTo(60.1,3.2,60.9,3.2).curveTo(61.7,3.2,62.2,3.7).curveTo(62.7,4.2,62.7,5).curveTo(62.7,5.8,62.2,6.3).curveTo(61.7,6.8,60.9,6.8).curveTo(60.1,6.8,59.6,6.3).closePath().moveTo(36.8,6.2).curveTo(35.6,5.7,34.7,4.8).curveTo(33.8,3.9,33.3,2.6).curveTo(32.9,1.4,32.9,0).curveTo(32.9,-1.4,33.4,-2.7).curveTo(33.9,-3.9,34.8,-4.8).curveTo(35.7,-5.7,36.9,-6.2).curveTo(38.1,-6.7,39.6,-6.7).curveTo(40.5,-6.7,41.4,-6.5).curveTo(42.3,-6.3,43,-5.9).curveTo(43.8,-5.4,44.4,-4.8).curveTo(45,-4.2,45.4,-3.5).lineTo(42.7,-1.8).curveTo(42.2,-2.6,41.5,-3.2).curveTo(40.7,-3.7,39.6,-3.7).curveTo(38.8,-3.7,38.2,-3.4).curveTo(37.5,-3.1,37.1,-2.6).curveTo(36.6,-2.1,36.3,-1.4).curveTo(36.1,-0.8,36.1,0).curveTo(36.1,0.8,36.3,1.4).curveTo(36.6,2.1,37,2.6).curveTo(37.5,3.1,38.1,3.3).curveTo(38.8,3.6,39.6,3.6).curveTo(40.8,3.6,41.6,3).curveTo(42.3,2.4,42.8,1.5).lineTo(45.7,3.1).curveTo(45.2,3.9,44.6,4.5).curveTo(44,5.2,43.3,5.7).curveTo(42.5,6.2,41.6,6.5).curveTo(40.6,6.8,39.6,6.8).curveTo(38.1,6.8,36.8,6.2).closePath().moveTo(-32,6.4).curveTo(-33,6,-33.7,5.4).curveTo(-34.3,4.7,-34.7,3.7).curveTo(-35.1,2.7,-35.1,1.4).lineTo(-35.1,-6.6).lineTo(-31.9,-6.6).lineTo(-31.9,1.4).curveTo(-31.9,2.5,-31.3,3.1).curveTo(-30.8,3.7,-29.8,3.7).curveTo(-28.8,3.7,-28.2,3.1).curveTo(-27.7,2.5,-27.7,1.4).lineTo(-27.7,-6.6).lineTo(-24.5,-6.6).lineTo(-24.5,1.4).curveTo(-24.5,2.7,-24.8,3.7).curveTo(-25.2,4.7,-25.9,5.4).curveTo(-26.6,6,-27.6,6.4).curveTo(-28.6,6.8,-29.8,6.8).curveTo(-31,6.8,-32,6.4).closePath().moveTo(-46,6.2).curveTo(-47.2,5.7,-48.1,4.8).curveTo(-49,3.9,-49.5,2.6).curveTo(-50,1.4,-50,0).curveTo(-50,-1.4,-49.5,-2.6).curveTo(-49,-3.8,-48.1,-4.8).curveTo(-47.2,-5.7,-46,-6.2).curveTo(-44.7,-6.7,-43.3,-6.7).curveTo(-41.9,-6.7,-40.7,-6.2).curveTo(-39.5,-5.7,-38.6,-4.8).curveTo(-37.6,-3.8,-37.1,-2.6).curveTo(-36.6,-1.4,-36.6,0).curveTo(-36.6,1.4,-37.1,2.6).curveTo(-37.6,3.9,-38.6,4.8).curveTo(-39.5,5.7,-40.7,6.2).curveTo(-41.9,6.8,-43.3,6.8).curveTo(-44.7,6.8,-46,6.2).closePath().moveTo(-44.7,-3.4).curveTo(-45.4,-3.1,-45.9,-2.6).curveTo(-46.3,-2.1,-46.6,-1.4).curveTo(-46.9,-0.8,-46.9,0).curveTo(-46.9,0.8,-46.6,1.4).curveTo(-46.3,2.1,-45.9,2.6).curveTo(-45.4,3.1,-44.7,3.4).curveTo(-44.1,3.7,-43.3,3.7).curveTo(-42.6,3.7,-41.9,3.4).curveTo(-41.2,3.1,-40.8,2.6).curveTo(-40.3,2.1,-40,1.4).curveTo(-39.7,0.8,-39.7,0).curveTo(-39.7,-0.8,-40,-1.4).curveTo(-40.3,-2.1,-40.8,-2.6).curveTo(-41.3,-3.1,-41.9,-3.4).curveTo(-42.6,-3.7,-43.3,-3.7).curveTo(-44.1,-3.7,-44.7,-3.4).closePath().moveTo(54.8,6.6).lineTo(52,0.4).lineTo(50.3,2.6).lineTo(50.3,6.6).lineTo(47.2,6.6).lineTo(47.2,-6.6).lineTo(50.3,-6.6).lineTo(50.3,-1.2).lineTo(54.5,-6.6).lineTo(58.1,-6.6).lineTo(54.3,-1.7).lineTo(58.2,6.6).closePath().moveTo(29.2,6.6).lineTo(28.5,4.6).lineTo(23.5,4.6).lineTo(22.8,6.6).lineTo(19.7,6.6).lineTo(24.5,-6.6).lineTo(27.5,-6.6).lineTo(32.4,6.6).closePath().moveTo(27.6,1.9).lineTo(26,-2.5).lineTo(24.5,1.9).lineTo(27.6,1.9).closePath().moveTo(9,6.6).lineTo(9,-6.6).lineTo(14.2,-6.6).curveTo(16.6,-6.6,17.8,-5.6).curveTo(19,-4.7,19,-2.8).curveTo(19,-1.9,18.6,-1.3).curveTo(18.3,-0.6,17.7,-0.2).curveTo(18.4,0.2,18.8,0.9).curveTo(19.2,1.6,19.2,2.6).curveTo(19.2,4.7,17.9,5.6).curveTo(16.6,6.6,14.2,6.6).closePath().moveTo(12.1,3.8).lineTo(14.3,3.8).curveTo(15.2,3.8,15.6,3.5).curveTo(16,3.2,16,2.5).curveTo(16,1.9,15.6,1.6).curveTo(15.2,1.3,14.2,1.3).lineTo(12.1,1.3).closePath().moveTo(12.1,-1.5).lineTo(14.3,-1.5).curveTo(15.2,-1.5,15.5,-1.8).curveTo(15.9,-2.2,15.9,-2.7).curveTo(15.9,-3.2,15.5,-3.5).curveTo(15.2,-3.8,14.3,-3.8).lineTo(12.1,-3.8).closePath().moveTo(-5.5,6.6).lineTo(-5.5,-6.6).lineTo(3.6,-6.6).lineTo(3.6,-3.6).lineTo(-2.4,-3.6).lineTo(-2.4,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.4).lineTo(-2.4,1.4).lineTo(-2.4,3.7).lineTo(3.6,3.7).lineTo(3.6,6.6).closePath().moveTo(-10.2,6.6).lineTo(-12,2.6).lineTo(-14.5,2.6).lineTo(-14.5,6.6).lineTo(-17.6,6.6).lineTo(-17.6,-6.6).lineTo(-11.9,-6.6).curveTo(-10.8,-6.6,-9.8,-6.2).curveTo(-8.9,-5.8,-8.3,-5.2).curveTo(-7.7,-4.6,-7.3,-3.8).curveTo(-7,-3,-7,-2).curveTo(-7,-0.8,-7.6,0.2).curveTo(-8.2,1.2,-9.1,1.8).lineTo(-6.7,6.6).closePath().moveTo(-14.5,-0.2).lineTo(-12.2,-0.2).curveTo(-11.2,-0.2,-10.7,-0.7).curveTo(-10.2,-1.2,-10.2,-2).curveTo(-10.2,-2.8,-10.7,-3.2).curveTo(-11.2,-3.7,-12.2,-3.7).lineTo(-14.5,-3.7).closePath().moveTo(-58.4,6.6).lineTo(-58.4,1.1).lineTo(-62.7,-6.6).lineTo(-59.3,-6.6).lineTo(-56.7,-1.8).lineTo(-54.3,-6.6).lineTo(-50.9,-6.6).lineTo(-55.2,1.1).lineTo(-55.2,6.6).closePath().moveTo(-22.3,-1.6).curveTo(-21.5,-2.2,-21.1,-2.8).curveTo(-20.7,-3.3,-20.6,-3.9).curveTo(-20.9,-3.5,-21.5,-3.5).curveTo(-22.1,-3.5,-22.5,-3.9).curveTo(-22.9,-4.3,-22.9,-5).curveTo(-22.9,-5.8,-22.4,-6.3).curveTo(-21.9,-6.8,-21.1,-6.8).curveTo(-20.1,-6.8,-19.6,-6.1).curveTo(-19.1,-5.5,-19.1,-4.6).curveTo(-19.1,-3.3,-19.7,-2.4).curveTo(-20.3,-1.5,-21.4,-0.7).closePath();
	this.shape.setTransform(45.275,53.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Stroke, new cjs.Rectangle(-19.7,40,130.6,27.599999999999994), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(10,6.6).lineTo(10,1.1).lineTo(5.7,-6.6).lineTo(9.1,-6.6).lineTo(11.7,-1.8).lineTo(14.1,-6.6).lineTo(17.5,-6.6).lineTo(13.2,1.1).lineTo(13.2,6.6).closePath().moveTo(1.6,6.6).lineTo(1.6,1.5).lineTo(-2.7,1.5).lineTo(-2.7,6.6).lineTo(-5.8,6.6).lineTo(-5.8,-6.6).lineTo(-2.7,-6.6).lineTo(-2.7,-1.6).lineTo(1.6,-1.6).lineTo(1.6,-6.6).lineTo(4.8,-6.6).lineTo(4.8,6.6).closePath().moveTo(-14,6.6).lineTo(-14,-3.7).lineTo(-17.5,-3.7).lineTo(-17.5,-6.6).lineTo(-7.4,-6.6).lineTo(-7.4,-3.7).lineTo(-10.9,-3.7).lineTo(-10.9,6.6).closePath();
	this.shape.setTransform(85.275,38.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#008FBE").beginStroke().moveTo(-28.5,6.2).curveTo(-29.7,5.6,-30.5,4.8).curveTo(-31.5,3.9,-32,2.6).curveTo(-32.5,1.4,-32.5,0).curveTo(-32.5,-1.4,-32,-2.7).curveTo(-31.5,-3.9,-30.5,-4.8).curveTo(-29.7,-5.7,-28.5,-6.3).curveTo(-27.2,-6.7,-25.8,-6.7).curveTo(-24.4,-6.7,-23.1,-6.3).curveTo(-21.9,-5.7,-21.1,-4.8).curveTo(-20.1,-3.9,-19.6,-2.7).curveTo(-19,-1.4,-19.1,0).curveTo(-19,1.4,-19.6,2.6).curveTo(-20.1,3.9,-21.1,4.8).curveTo(-21.9,5.6,-23.1,6.2).curveTo(-24.4,6.7,-25.8,6.8).curveTo(-27.2,6.7,-28.5,6.2).closePath().moveTo(-27.2,-3.4).curveTo(-27.9,-3.1,-28.4,-2.6).curveTo(-28.8,-2.1,-29.1,-1.4).curveTo(-29.3,-0.8,-29.4,0).curveTo(-29.3,0.7,-29.1,1.4).curveTo(-28.8,2.1,-28.4,2.5).curveTo(-27.9,3,-27.2,3.3).curveTo(-26.6,3.6,-25.8,3.6).curveTo(-25.1,3.6,-24.3,3.3).curveTo(-23.7,3,-23.2,2.5).curveTo(-22.8,2.1,-22.5,1.4).curveTo(-22.2,0.7,-22.2,0).curveTo(-22.2,-0.8,-22.5,-1.4).curveTo(-22.8,-2.1,-23.2,-2.6).curveTo(-23.8,-3.1,-24.4,-3.4).curveTo(-25,-3.7,-25.8,-3.7).curveTo(-26.6,-3.7,-27.2,-3.4).closePath().moveTo(34,6.6).lineTo(34,-6.6).lineTo(37.2,-6.6).lineTo(37.2,3.5).lineTo(42.9,3.5).lineTo(42.9,6.6).closePath().moveTo(30,6.6).lineTo(29.2,4.6).lineTo(24.3,4.6).lineTo(23.6,6.6).lineTo(20.4,6.6).lineTo(25.3,-6.6).lineTo(28.2,-6.6).lineTo(33.1,6.6).closePath().moveTo(28.3,1.8).lineTo(26.7,-2.6).lineTo(25.2,1.8).lineTo(28.3,1.8).closePath().moveTo(10.5,6.6).lineTo(10.5,-6.6).lineTo(19.6,-6.6).lineTo(19.6,-3.7).lineTo(13.7,-3.7).lineTo(13.7,-1.5).lineTo(19.6,-1.5).lineTo(19.6,1.4).lineTo(13.7,1.4).lineTo(13.7,3.6).lineTo(19.6,3.6).lineTo(19.6,6.6).closePath().moveTo(5.7,6.6).lineTo(5.7,1.5).lineTo(1.3,1.5).lineTo(1.3,6.6).lineTo(-1.7,6.6).lineTo(-1.7,-6.6).lineTo(1.3,-6.6).lineTo(1.3,-1.6).lineTo(5.7,-1.6).lineTo(5.7,-6.6).lineTo(8.8,-6.6).lineTo(8.8,6.6).closePath().moveTo(-10.2,6.6).lineTo(-12.1,2.6).lineTo(-14.5,2.6).lineTo(-14.5,6.6).lineTo(-17.6,6.6).lineTo(-17.6,-6.6).lineTo(-12,-6.6).curveTo(-10.8,-6.6,-9.8,-6.3).curveTo(-9,-5.8,-8.4,-5.3).curveTo(-7.7,-4.7,-7.4,-3.8).curveTo(-7,-3,-7,-2).curveTo(-7.1,-0.8,-7.6,0.2).curveTo(-8.2,1.2,-9.2,1.8).lineTo(-6.7,6.6).closePath().moveTo(-14.5,-0.3).lineTo(-12.2,-0.3).curveTo(-11.2,-0.2,-10.7,-0.8).curveTo(-10.2,-1.3,-10.3,-2).curveTo(-10.3,-2.8,-10.7,-3.2).curveTo(-11.2,-3.7,-12.2,-3.7).lineTo(-14.5,-3.7).closePath().moveTo(-42.9,6.6).lineTo(-42.9,-6.6).lineTo(-33.9,-6.6).lineTo(-33.9,-3.7).lineTo(-39.8,-3.7).lineTo(-39.8,-1.3).lineTo(-33.9,-1.3).lineTo(-33.9,1.6).lineTo(-39.8,1.6).lineTo(-39.8,6.6).closePath();
	this.shape_1.setTransform(24.4,38.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Spines, new cjs.Rectangle(-21.6,24.5,127.30000000000001,27.6), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(-1.5,6.6).lineTo(-1.5,-3.7).lineTo(-5.1,-3.7).lineTo(-5.1,-6.6).lineTo(5.1,-6.6).lineTo(5.1,-3.7).lineTo(1.6,-3.7).lineTo(1.6,6.6).closePath();
	this.shape.setTransform(76.975,54.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#008FBE").beginStroke().moveTo(35.7,6.2).curveTo(34.5,5.7,33.5,4.8).curveTo(32.7,3.9,32.1,2.6).curveTo(31.6,1.4,31.6,0).curveTo(31.6,-1.4,32.1,-2.6).curveTo(32.7,-3.8,33.5,-4.8).curveTo(34.5,-5.7,35.7,-6.2).curveTo(36.9,-6.7,38.3,-6.7).curveTo(39.7,-6.7,41,-6.2).curveTo(42.1,-5.7,43,-4.8).curveTo(44,-3.8,44.5,-2.6).curveTo(45.1,-1.4,45,0).curveTo(45.1,1.4,44.5,2.6).curveTo(44,3.9,43,4.8).curveTo(42.1,5.7,41,6.2).curveTo(39.7,6.8,38.3,6.8).curveTo(36.9,6.8,35.7,6.2).closePath().moveTo(36.9,-3.4).curveTo(36.2,-3.1,35.8,-2.6).curveTo(35.3,-2.1,35,-1.4).curveTo(34.7,-0.8,34.8,0).curveTo(34.7,0.8,35,1.4).curveTo(35.3,2.1,35.8,2.6).curveTo(36.2,3.1,36.9,3.4).curveTo(37.6,3.7,38.3,3.7).curveTo(39.1,3.7,39.7,3.4).curveTo(40.4,3.1,40.9,2.6).curveTo(41.4,2.1,41.6,1.4).curveTo(41.9,0.8,41.9,0).curveTo(41.9,-0.8,41.6,-1.4).curveTo(41.4,-2.1,40.9,-2.6).curveTo(40.3,-3.1,39.7,-3.4).curveTo(39,-3.7,38.3,-3.7).curveTo(37.6,-3.7,36.9,-3.4).closePath().moveTo(21.1,6.2).curveTo(19.7,5.7,18.9,4.7).curveTo(18,3.8,17.5,2.6).curveTo(17.1,1.4,17,0).curveTo(17,-1.4,17.6,-2.7).curveTo(18.1,-3.9,18.9,-4.8).curveTo(19.8,-5.7,21.1,-6.2).curveTo(22.3,-6.7,23.8,-6.7).curveTo(25.7,-6.7,27.1,-6).curveTo(28.5,-5.3,29.4,-4.1).lineTo(26.8,-2.2).curveTo(26.4,-3,25.6,-3.4).curveTo(24.9,-3.8,23.8,-3.8).curveTo(23.1,-3.8,22.4,-3.5).curveTo(21.7,-3.2,21.3,-2.7).curveTo(20.7,-2.2,20.5,-1.5).curveTo(20.2,-0.8,20.2,0).curveTo(20.2,0.9,20.5,1.5).curveTo(20.7,2.2,21.2,2.7).curveTo(21.7,3.2,22.4,3.5).curveTo(23,3.8,23.9,3.8).curveTo(25,3.8,25.8,3.2).curveTo(26.5,2.7,26.9,1.7).lineTo(23.2,1.7).lineTo(23.2,-1.2).lineTo(30.3,-1.2).lineTo(30.3,0.3).curveTo(30.3,1.6,29.8,2.8).curveTo(29.4,3.9,28.6,4.8).curveTo(27.7,5.7,26.6,6.2).curveTo(25.4,6.8,24,6.8).curveTo(22.4,6.8,21.1,6.2).closePath().moveTo(3.1,6.6).lineTo(3.1,-6.6).lineTo(12.2,-6.6).lineTo(12.2,-3.6).lineTo(6.2,-3.6).lineTo(6.2,-1.5).lineTo(12.2,-1.5).lineTo(12.2,1.4).lineTo(6.2,1.4).lineTo(6.2,3.7).lineTo(12.2,3.7).lineTo(12.2,6.6).closePath().moveTo(-5.8,6.6).lineTo(-10.7,-6.6).lineTo(-7.4,-6.6).lineTo(-4.3,2.3).lineTo(-1.1,-6.6).lineTo(2.1,-6.6).lineTo(-2.8,6.6).closePath().moveTo(-25.7,6.6).lineTo(-25.7,-6.6).lineTo(-16.6,-6.6).lineTo(-16.6,-3.6).lineTo(-22.6,-3.6).lineTo(-22.6,-1.5).lineTo(-16.6,-1.5).lineTo(-16.6,1.4).lineTo(-22.6,1.4).lineTo(-22.6,3.7).lineTo(-16.6,3.7).lineTo(-16.6,6.6).closePath().moveTo(-33.7,6.6).lineTo(-36.1,-1.7).lineTo(-38.3,6.6).lineTo(-41.5,6.6).lineTo(-45.1,-6.6).lineTo(-41.9,-6.6).lineTo(-39.8,1.5).lineTo(-37.6,-6.6).lineTo(-34.5,-6.6).lineTo(-32.3,1.6).lineTo(-30.2,-6.6).lineTo(-27.1,-6.6).lineTo(-30.7,6.6).closePath().moveTo(-14.5,-1.6).curveTo(-13.7,-2.2,-13.4,-2.8).curveTo(-12.9,-3.3,-12.8,-3.9).curveTo(-13.1,-3.5,-13.7,-3.5).curveTo(-14.3,-3.5,-14.7,-3.9).curveTo(-15.2,-4.3,-15.2,-5).curveTo(-15.1,-5.8,-14.6,-6.3).curveTo(-14.2,-6.8,-13.3,-6.8).curveTo(-12.3,-6.8,-11.9,-6.1).curveTo(-11.4,-5.5,-11.3,-4.6).curveTo(-11.4,-3.3,-11.9,-2.4).curveTo(-12.6,-1.5,-13.7,-0.7).closePath();
	this.shape_1.setTransform(25.8,54.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Here, new cjs.Rectangle(-21.8,41.2,107.39999999999999,27.700000000000003), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(45,6.6).curveTo(44.1,6.4,43.5,6).curveTo(42.7,5.7,42.1,5.2).lineTo(41.1,4.1).lineTo(43.8,2).curveTo(44.4,2.8,45.2,3.3).curveTo(46,3.8,47.1,3.8).curveTo(47.9,3.8,48.3,3.5).curveTo(48.8,3.1,48.8,2.6).curveTo(48.8,2.3,48.6,2.1).curveTo(48.4,1.8,48.1,1.7).lineTo(47.3,1.4).lineTo(44.5,0.7).curveTo(43.8,0.4,43.3,0).curveTo(42.7,-0.4,42.2,-1.1).curveTo(41.9,-1.7,41.9,-2.8).curveTo(41.9,-3.6,42.2,-4.3).curveTo(42.6,-5.1,43.3,-5.6).curveTo(43.9,-6.2,44.7,-6.5).curveTo(45.7,-6.8,46.7,-6.8).curveTo(47.6,-6.8,48.3,-6.6).curveTo(49.1,-6.5,49.7,-6.2).curveTo(50.3,-5.9,50.8,-5.4).lineTo(51.9,-4.4).lineTo(49.4,-2.5).curveTo(49,-3.2,48.3,-3.6).curveTo(47.6,-4,46.6,-4).curveTo(45.8,-4,45.4,-3.7).curveTo(45.1,-3.3,45.1,-2.9).curveTo(45.1,-2.5,45.3,-2.4).lineTo(45.8,-2).lineTo(49.2,-1.1).curveTo(49.9,-0.9,50.6,-0.4).curveTo(51.2,0,51.6,0.7).curveTo(52,1.4,52,2.5).curveTo(52,3.4,51.6,4.2).curveTo(51.3,5,50.6,5.5).curveTo(49.9,6.1,49,6.4).curveTo(48.1,6.8,47,6.8).curveTo(45.9,6.8,45,6.6).closePath().moveTo(18.2,6.2).curveTo(17,5.7,16.1,4.8).curveTo(15.2,3.9,14.7,2.6).curveTo(14.1,1.4,14.1,0).curveTo(14.1,-1.4,14.7,-2.6).curveTo(15.2,-3.8,16.1,-4.8).curveTo(17,-5.7,18.2,-6.2).curveTo(19.5,-6.7,20.9,-6.7).curveTo(22.3,-6.7,23.5,-6.2).curveTo(24.7,-5.7,25.6,-4.8).curveTo(26.5,-3.8,27.1,-2.6).curveTo(27.6,-1.4,27.6,0).curveTo(27.6,1.4,27.1,2.6).curveTo(26.5,3.9,25.6,4.8).curveTo(24.7,5.7,23.5,6.2).curveTo(22.3,6.8,20.9,6.8).curveTo(19.5,6.8,18.2,6.2).closePath().moveTo(19.4,-3.4).curveTo(18.8,-3.1,18.3,-2.6).curveTo(17.8,-2.1,17.6,-1.4).curveTo(17.3,-0.8,17.3,0).curveTo(17.3,0.8,17.6,1.4).curveTo(17.8,2.1,18.3,2.6).curveTo(18.8,3.1,19.4,3.4).curveTo(20.1,3.7,20.9,3.7).curveTo(21.6,3.7,22.3,3.4).curveTo(22.9,3.1,23.4,2.6).curveTo(23.9,2.1,24.1,1.4).curveTo(24.5,0.8,24.5,0).curveTo(24.5,-0.8,24.1,-1.4).curveTo(23.9,-2.1,23.4,-2.6).curveTo(22.9,-3.1,22.2,-3.4).curveTo(21.6,-3.7,20.9,-3.7).curveTo(20.1,-3.7,19.4,-3.4).closePath().moveTo(-11.5,6.4).curveTo(-12.5,6,-13.2,5.4).curveTo(-13.8,4.7,-14.2,3.7).curveTo(-14.6,2.7,-14.6,1.4).lineTo(-14.6,-6.6).lineTo(-11.4,-6.6).lineTo(-11.4,1.4).curveTo(-11.4,2.5,-10.9,3.1).curveTo(-10.3,3.7,-9.3,3.7).curveTo(-8.4,3.7,-7.7,3.1).curveTo(-7.2,2.5,-7.2,1.4).lineTo(-7.2,-6.6).lineTo(-4,-6.6).lineTo(-4,1.4).curveTo(-4,2.7,-4.3,3.7).curveTo(-4.8,4.7,-5.5,5.4).curveTo(-6.1,6,-7.1,6.4).curveTo(-8.1,6.8,-9.3,6.8).curveTo(-10.5,6.8,-11.5,6.4).closePath().moveTo(-35.9,6.2).curveTo(-37.1,5.7,-38,4.8).curveTo(-38.9,3.9,-39.4,2.6).curveTo(-40,1.4,-40,0).curveTo(-40,-1.4,-39.4,-2.6).curveTo(-38.9,-3.8,-38,-4.8).curveTo(-37.1,-5.7,-35.9,-6.2).curveTo(-34.6,-6.7,-33.2,-6.7).curveTo(-31.8,-6.7,-30.6,-6.2).curveTo(-29.4,-5.7,-28.5,-4.8).curveTo(-27.5,-3.8,-27.1,-2.6).curveTo(-26.5,-1.4,-26.5,0).curveTo(-26.5,1.4,-27.1,2.6).curveTo(-27.5,3.9,-28.5,4.8).curveTo(-29.4,5.7,-30.6,6.2).curveTo(-31.8,6.8,-33.2,6.8).curveTo(-34.6,6.8,-35.9,6.2).closePath().moveTo(-34.7,-3.4).curveTo(-35.3,-3.1,-35.8,-2.6).curveTo(-36.2,-2.1,-36.5,-1.4).curveTo(-36.8,-0.8,-36.8,0).curveTo(-36.8,0.8,-36.5,1.4).curveTo(-36.2,2.1,-35.8,2.6).curveTo(-35.3,3.1,-34.7,3.4).curveTo(-34,3.7,-33.2,3.7).curveTo(-32.5,3.7,-31.8,3.4).curveTo(-31.1,3.1,-30.7,2.6).curveTo(-30.2,2.1,-30,1.4).curveTo(-29.7,0.8,-29.6,0).curveTo(-29.7,-0.8,-30,-1.4).curveTo(-30.2,-2.1,-30.7,-2.6).curveTo(-31.2,-3.1,-31.9,-3.4).curveTo(-32.5,-3.7,-33.2,-3.7).curveTo(-34,-3.7,-34.7,-3.4).closePath().moveTo(-48.2,6.6).curveTo(-49,6.4,-49.7,6).curveTo(-50.4,5.7,-51,5.2).lineTo(-52,4.1).lineTo(-49.3,2).curveTo(-48.7,2.8,-48,3.3).curveTo(-47.1,3.8,-46.1,3.8).curveTo(-45.2,3.8,-44.8,3.5).curveTo(-44.4,3.1,-44.4,2.6).curveTo(-44.4,2.3,-44.6,2.1).curveTo(-44.8,1.8,-45.1,1.7).lineTo(-45.9,1.4).lineTo(-48.6,0.7).curveTo(-49.3,0.4,-49.9,0).curveTo(-50.5,-0.4,-50.9,-1.1).curveTo(-51.2,-1.7,-51.2,-2.8).curveTo(-51.2,-3.6,-50.9,-4.3).curveTo(-50.5,-5.1,-49.9,-5.6).curveTo(-49.3,-6.2,-48.4,-6.5).curveTo(-47.5,-6.8,-46.4,-6.8).curveTo(-45.5,-6.8,-44.8,-6.6).curveTo(-44.1,-6.5,-43.5,-6.2).curveTo(-42.8,-5.9,-42.3,-5.4).lineTo(-41.2,-4.4).lineTo(-43.7,-2.5).curveTo(-44.2,-3.2,-44.8,-3.6).curveTo(-45.5,-4,-46.5,-4).curveTo(-47.4,-4,-47.7,-3.7).curveTo(-48.1,-3.3,-48.1,-2.9).curveTo(-48.1,-2.5,-47.9,-2.4).lineTo(-47.3,-2).lineTo(-43.9,-1.1).curveTo(-43.2,-0.9,-42.6,-0.4).curveTo(-41.9,0,-41.6,0.7).curveTo(-41.1,1.4,-41.1,2.5).curveTo(-41.1,3.4,-41.6,4.2).curveTo(-41.9,5,-42.6,5.5).curveTo(-43.2,6.1,-44.2,6.4).curveTo(-45.1,6.8,-46.2,6.8).curveTo(-47.3,6.8,-48.2,6.6).closePath().moveTo(37.3,6.6).lineTo(32.1,-1.7).lineTo(32.1,6.6).lineTo(29.2,6.6).lineTo(29.2,-6.6).lineTo(32.4,-6.6).lineTo(37.3,1.3).lineTo(37.3,-6.6).lineTo(40.3,-6.6).lineTo(40.3,6.6).closePath().moveTo(9.4,6.6).lineTo(9.4,-6.6).lineTo(12.5,-6.6).lineTo(12.5,6.6).closePath().moveTo(1.1,6.6).lineTo(1.1,-3.7).lineTo(-2.4,-3.7).lineTo(-2.4,-6.6).lineTo(7.7,-6.6).lineTo(7.7,-3.7).lineTo(4.2,-3.7).lineTo(4.2,6.6).closePath().moveTo(-24.9,6.6).lineTo(-24.9,-6.6).lineTo(-21.9,-6.6).lineTo(-21.9,3.6).lineTo(-16.1,3.6).lineTo(-16.1,6.6).closePath();
	this.shape.setTransform(32.4,15.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_healthySpines, new cjs.Rectangle(-21.6,2,108.6,27.7), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(31.1,6.3).curveTo(30.6,5.8,30.6,5).curveTo(30.6,4.2,31.1,3.7).curveTo(31.6,3.2,32.4,3.2).curveTo(33.2,3.2,33.7,3.7).curveTo(34.2,4.2,34.2,5).curveTo(34.2,5.8,33.7,6.3).curveTo(33.2,6.8,32.4,6.8).curveTo(31.6,6.8,31.1,6.3).closePath().moveTo(22.3,6.6).curveTo(21.4,6.4,20.7,6).curveTo(20,5.7,19.4,5.2).lineTo(18.4,4.1).lineTo(21.1,2).curveTo(21.7,2.8,22.5,3.3).curveTo(23.3,3.8,24.4,3.8).curveTo(25.2,3.8,25.6,3.5).curveTo(26,3.1,26,2.6).curveTo(26,2.3,25.9,2.1).curveTo(25.7,1.8,25.3,1.7).lineTo(24.5,1.4).lineTo(21.8,0.7).curveTo(21.1,0.4,20.5,0).curveTo(19.9,-0.4,19.5,-1.1).curveTo(19.2,-1.7,19.2,-2.8).curveTo(19.2,-3.6,19.5,-4.3).curveTo(19.9,-5.1,20.5,-5.6).curveTo(21.1,-6.2,22,-6.5).curveTo(22.9,-6.8,24,-6.8).curveTo(24.9,-6.8,25.6,-6.6).curveTo(26.3,-6.5,27,-6.2).curveTo(27.6,-5.9,28.1,-5.4).lineTo(29.2,-4.4).lineTo(26.7,-2.5).curveTo(26.2,-3.2,25.6,-3.6).curveTo(24.9,-4,23.9,-4).curveTo(23.1,-4,22.7,-3.7).curveTo(22.3,-3.3,22.3,-2.9).curveTo(22.3,-2.5,22.5,-2.4).lineTo(23.1,-2).lineTo(26.5,-1.1).curveTo(27.2,-0.9,27.9,-0.4).curveTo(28.5,0,28.9,0.7).curveTo(29.3,1.4,29.3,2.5).curveTo(29.3,3.4,28.9,4.2).curveTo(28.5,5,27.9,5.5).curveTo(27.2,6.1,26.3,6.4).curveTo(25.3,6.8,24.3,6.8).curveTo(23.2,6.8,22.3,6.6).closePath().moveTo(-30.3,6.6).curveTo(-31.2,6.4,-31.9,6).curveTo(-32.6,5.7,-33.2,5.2).lineTo(-34.2,4.1).lineTo(-31.5,2).curveTo(-30.9,2.8,-30.1,3.3).curveTo(-29.3,3.8,-28.2,3.8).curveTo(-27.4,3.8,-27,3.5).curveTo(-26.6,3.1,-26.6,2.6).curveTo(-26.6,2.3,-26.7,2.1).curveTo(-26.9,1.8,-27.3,1.7).lineTo(-28.1,1.4).lineTo(-30.8,0.7).curveTo(-31.5,0.4,-32.1,0).curveTo(-32.7,-0.4,-33.1,-1.1).curveTo(-33.4,-1.7,-33.4,-2.8).curveTo(-33.4,-3.6,-33.1,-4.3).curveTo(-32.7,-5.1,-32.1,-5.6).curveTo(-31.5,-6.2,-30.6,-6.5).curveTo(-29.7,-6.8,-28.6,-6.8).curveTo(-27.7,-6.8,-27,-6.6).curveTo(-26.3,-6.5,-25.6,-6.2).curveTo(-25,-5.9,-24.5,-5.4).lineTo(-23.4,-4.4).lineTo(-25.9,-2.5).curveTo(-26.4,-3.2,-27,-3.6).curveTo(-27.7,-4,-28.7,-4).curveTo(-29.5,-4,-29.9,-3.7).curveTo(-30.3,-3.3,-30.3,-2.9).curveTo(-30.3,-2.5,-30.1,-2.4).lineTo(-29.5,-2).lineTo(-26.1,-1.1).curveTo(-25.4,-0.9,-24.7,-0.4).curveTo(-24.1,0,-23.7,0.7).curveTo(-23.3,1.4,-23.3,2.5).curveTo(-23.3,3.4,-23.7,4.2).curveTo(-24.1,5,-24.7,5.5).curveTo(-25.4,6.1,-26.3,6.4).curveTo(-27.3,6.8,-28.3,6.8).curveTo(-29.4,6.8,-30.3,6.6).closePath().moveTo(8.6,6.6).lineTo(8.6,-6.6).lineTo(17.6,-6.6).lineTo(17.6,-3.6).lineTo(11.7,-3.6).lineTo(11.7,-1.5).lineTo(17.6,-1.5).lineTo(17.6,1.4).lineTo(11.7,1.4).lineTo(11.7,3.7).lineTo(17.6,3.7).lineTo(17.6,6.6).closePath().moveTo(3.6,6.6).lineTo(-1.6,-1.7).lineTo(-1.6,6.6).lineTo(-4.6,6.6).lineTo(-4.6,-6.6).lineTo(-1.3,-6.6).lineTo(3.6,1.3).lineTo(3.6,-6.6).lineTo(6.6,-6.6).lineTo(6.6,6.6).closePath().moveTo(-9.7,6.6).lineTo(-9.7,-6.6).lineTo(-6.6,-6.6).lineTo(-6.6,6.6).closePath().moveTo(-21.7,6.6).lineTo(-21.7,-6.6).lineTo(-16.5,-6.6).curveTo(-15.3,-6.6,-14.4,-6.2).curveTo(-13.5,-5.8,-12.8,-5.1).curveTo(-12.1,-4.5,-11.8,-3.6).curveTo(-11.4,-2.7,-11.4,-1.7).curveTo(-11.4,-0.7,-11.8,0.2).curveTo(-12.1,1.1,-12.8,1.8).curveTo(-13.5,2.5,-14.4,2.9).curveTo(-15.3,3.3,-16.5,3.3).lineTo(-18.6,3.3).lineTo(-18.6,6.6).closePath().moveTo(-18.6,0.4).lineTo(-16.7,0.4).curveTo(-15.8,0.4,-15.2,-0.2).curveTo(-14.6,-0.8,-14.6,-1.7).curveTo(-14.6,-2.6,-15.2,-3.2).curveTo(-15.8,-3.7,-16.7,-3.7).lineTo(-18.6,-3.7).closePath();
	this.shape.setTransform(14.675,31.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_happenHere, new cjs.Rectangle(-21.5,18.2,73.2,27.7), null);


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
	this.shape.setTransform(43.6,15.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_doWhatYou, new cjs.Rectangle(-20,0,195,35.6), null);


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
	this.instance.setTransform(0,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_03_1, new cjs.Rectangle(0,11,160,423), null);


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
	this.instance.setTransform(0,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_02_1, new cjs.Rectangle(0,11,160,423), null);


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
	this.instance.setTransform(0,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01_1, new cjs.Rectangle(0,11,160,423), null);


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
	this.shape.graphics.beginFill("#F4BD46").beginStroke().moveTo(0.4,10.7).lineTo(0.4,0.3).lineTo(5.6,5.5).lineTo(5.6,10.7).closePath().moveTo(-5.6,-5.5).lineTo(-5.6,-10.7).lineTo(-0.3,-10.7).lineTo(-0.3,-0.3).closePath();
	this.shape.setTransform(79.55,287.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#1140A0").beginStroke().moveTo(4.8,28.9).curveTo(4.2,28.2,4.2,27.1).curveTo(4.2,25.8,4.8,25.2).curveTo(5.6,24.4,6.7,24.4).curveTo(7.5,24.4,8.2,24.8).curveTo(8.7,25.4,8.9,26.2).lineTo(7.8,26.2).curveTo(7.8,25.8,7.4,25.5).curveTo(7.1,25.3,6.7,25.3).curveTo(6.2,25.3,5.9,25.5).curveTo(5.6,25.8,5.5,26.2).curveTo(5.3,26.6,5.3,27.1).curveTo(5.3,27.7,5.6,28.2).curveTo(6,28.8,6.7,28.8).curveTo(7.2,28.8,7.5,28.4).curveTo(7.8,28.1,7.9,27.6).lineTo(8.9,27.6).curveTo(8.8,28.5,8.2,29.1).curveTo(7.6,29.7,6.7,29.7).curveTo(5.6,29.7,4.8,28.9).closePath().moveTo(-14.3,28.9).curveTo(-14.9,28.2,-15,27.1).curveTo(-14.9,25.8,-14.3,25.2).curveTo(-13.6,24.4,-12.5,24.4).curveTo(-11.6,24.4,-11,24.8).curveTo(-10.4,25.4,-10.3,26.2).lineTo(-11.4,26.2).curveTo(-11.4,25.8,-11.7,25.5).curveTo(-12,25.3,-12.5,25.3).curveTo(-12.9,25.3,-13.3,25.5).curveTo(-13.6,25.8,-13.7,26.2).curveTo(-13.9,26.6,-13.9,27.1).curveTo(-13.9,27.8,-13.5,28.2).curveTo(-13.1,28.8,-12.5,28.8).curveTo(-12,28.8,-11.7,28.4).curveTo(-11.4,28.1,-11.3,27.6).lineTo(-10.3,27.6).curveTo(-10.4,28.5,-10.9,29.1).curveTo(-11.5,29.7,-12.5,29.7).curveTo(-13.6,29.7,-14.3,28.9).closePath().moveTo(35.3,29.6).lineTo(35.2,29.2).lineTo(35.1,28.3).curveTo(35,28,34.9,27.8).curveTo(34.6,27.6,34.3,27.6).lineTo(33.2,27.6).lineTo(33.2,29.6).lineTo(32,29.6).lineTo(32,24.5).lineTo(34.7,24.5).curveTo(35.4,24.5,35.9,24.9).curveTo(36.2,25.4,36.2,25.9).curveTo(36.3,26.9,35.4,27.1).lineTo(35.4,27.2).curveTo(36.1,27.4,36.2,28.3).lineTo(36.2,28.9).lineTo(36.3,29.3).lineTo(36.4,29.6).closePath().moveTo(33.2,26.8).lineTo(34.3,26.8).curveTo(35.2,26.8,35.2,26.1).curveTo(35.2,25.3,34.3,25.4).lineTo(33.2,25.4).closePath().moveTo(26.7,29.6).lineTo(26.7,24.5).lineTo(30.5,24.5).lineTo(30.5,25.4).lineTo(27.9,25.4).lineTo(27.9,26.5).lineTo(30.3,26.5).lineTo(30.3,27.4).lineTo(27.9,27.4).lineTo(27.9,28.7).lineTo(30.6,28.7).lineTo(30.6,29.6).closePath().moveTo(22.8,29.6).lineTo(22.8,25.4).lineTo(21.2,25.4).lineTo(21.2,24.5).lineTo(25.4,24.5).lineTo(25.4,25.4).lineTo(23.9,25.4).lineTo(23.9,29.6).closePath().moveTo(18.9,29.6).lineTo(16.7,26.2).lineTo(16.7,29.6).lineTo(15.7,29.6).lineTo(15.7,24.5).lineTo(16.8,24.5).lineTo(18.9,27.9).lineTo(18.9,24.5).lineTo(19.9,24.5).lineTo(19.9,29.6).closePath().moveTo(10.4,29.6).lineTo(10.4,24.5).lineTo(14.2,24.5).lineTo(14.2,25.4).lineTo(11.5,25.4).lineTo(11.5,26.5).lineTo(13.9,26.5).lineTo(13.9,27.4).lineTo(11.5,27.4).lineTo(11.5,28.7).lineTo(14.3,28.7).lineTo(14.3,29.6).closePath().moveTo(-3.2,29.6).lineTo(-3.2,24.5).lineTo(-2.1,24.5).lineTo(-2.1,28.7).lineTo(0.4,28.7).lineTo(0.4,29.6).closePath().moveTo(-5.5,29.6).lineTo(-5.9,28.4).lineTo(-7.8,28.4).lineTo(-8.1,29.6).lineTo(-9.3,29.6).lineTo(-7.4,24.5).lineTo(-6.2,24.5).lineTo(-4.3,29.6).closePath().moveTo(-7.5,27.6).lineTo(-6.2,27.6).lineTo(-6.8,25.7).lineTo(-6.9,25.7).closePath().moveTo(-17.6,29.6).lineTo(-17.6,24.5).lineTo(-16.4,24.5).lineTo(-16.4,29.6).closePath().moveTo(-23.5,29.6).lineTo(-23.5,24.5).lineTo(-21.3,24.5).curveTo(-20.3,24.5,-19.7,25.2).curveTo(-19.1,25.7,-19,27).curveTo(-19,28.1,-19.6,28.9).curveTo(-20.2,29.5,-21.3,29.6).closePath().moveTo(-22.4,28.7).lineTo(-21.4,28.7).curveTo(-20.9,28.7,-20.5,28.2).curveTo(-20.2,27.9,-20.2,27.1).curveTo(-20.2,26.3,-20.5,25.9).curveTo(-20.8,25.4,-21.6,25.4).lineTo(-22.4,25.4).closePath().moveTo(-28.8,29.6).lineTo(-28.8,24.5).lineTo(-25,24.5).lineTo(-25,25.4).lineTo(-27.7,25.4).lineTo(-27.7,26.5).lineTo(-25.2,26.5).lineTo(-25.2,27.4).lineTo(-27.7,27.4).lineTo(-27.7,28.7).lineTo(-25,28.7).lineTo(-25,29.6).closePath().moveTo(-31.5,29.6).lineTo(-31.5,26).lineTo(-31.6,26).lineTo(-32.8,29.6).lineTo(-33.7,29.6).lineTo(-34.9,26).lineTo(-35,26).lineTo(-35,29.6).lineTo(-35.9,29.6).lineTo(-35.9,24.5).lineTo(-34.4,24.5).lineTo(-33.2,28).lineTo(-32.1,24.5).lineTo(-30.5,24.5).lineTo(-30.5,29.6).closePath().moveTo(-51.1,22).curveTo(-51.3,21.8,-51.3,21.4).curveTo(-51.3,21.1,-51.1,20.8).curveTo(-50.9,20.6,-50.5,20.6).lineTo(-50.1,20.6).curveTo(-49.7,20.6,-49.4,20.2).curveTo(-48.8,19.2,-48.5,18.4).lineTo(-48.3,17.5).curveTo(-48.2,17.2,-48.6,16.2).lineTo(-50.2,11.9).lineTo(-50.6,10.8).curveTo(-50.9,10.4,-51.3,10.3).lineTo(-51.9,10.2).lineTo(-52,10).lineTo(-51.8,9.7).lineTo(-49.9,9.8).lineTo(-48.2,9.7).lineTo(-48,10).lineTo(-48.1,10.2).lineTo(-48.6,10.3).curveTo(-49.1,10.4,-49.1,10.6).curveTo(-49,10.8,-48.5,12.5).lineTo(-47.8,14.3).lineTo(-47.3,15.7).curveTo(-47.1,15.7,-46.5,14.3).lineTo(-45.8,12.7).curveTo(-45.1,11,-45.1,10.7).curveTo(-45.1,10.4,-45.6,10.3).lineTo(-46.3,10.2).curveTo(-46.3,10.2,-46.3,10.2).curveTo(-46.3,10.1,-46.3,10.1).curveTo(-46.3,10.1,-46.3,10).curveTo(-46.3,10,-46.3,10).lineTo(-46.2,9.7).lineTo(-44.4,9.8).lineTo(-42.9,9.7).curveTo(-42.9,9.7,-42.8,9.7).curveTo(-42.8,9.8,-42.8,9.8).curveTo(-42.8,9.8,-42.8,9.9).curveTo(-42.8,9.9,-42.8,10).lineTo(-42.9,10.2).lineTo(-43.2,10.2).curveTo(-43.7,10.4,-44,10.9).lineTo(-44.9,12.4).lineTo(-46,14.7).lineTo(-49.2,21.4).curveTo(-49.5,22.3,-50.4,22.3).curveTo(-50.8,22.3,-51.1,22).closePath().moveTo(37.8,18).lineTo(36.5,14.9).lineTo(35.3,12.2).curveTo(33.6,15.7,32.8,18).lineTo(32.6,18).lineTo(32.3,18).lineTo(27.1,6.3).lineTo(26.5,5.4).curveTo(26.2,4.9,25.6,4.9).lineTo(25.1,4.8).curveTo(25.1,4.8,25.1,4.8).curveTo(25,4.8,25,4.7).curveTo(25,4.7,25,4.7).curveTo(25,4.6,25.1,4.6).lineTo(25.2,4.4).lineTo(27.2,4.4).lineTo(29.6,4.4).lineTo(29.7,4.6).curveTo(29.7,4.6,29.7,4.6).curveTo(29.7,4.7,29.7,4.7).curveTo(29.7,4.8,29.6,4.8).curveTo(29.6,4.8,29.6,4.8).lineTo(29.1,4.9).curveTo(28.4,5,28.4,5.2).curveTo(28.4,5.5,29.5,7.9).lineTo(32.9,15.4).lineTo(34.5,12.1).lineTo(34.9,11.3).lineTo(34.7,10.8).lineTo(32.5,6).curveTo(32.2,5.5,31.9,5.2).curveTo(31.6,4.9,31.2,4.9).lineTo(30.7,4.8).lineTo(30.6,4.6).curveTo(30.6,4.5,30.6,4.5).curveTo(30.6,4.5,30.6,4.4).curveTo(30.7,4.4,30.7,4.4).curveTo(30.7,4.4,30.8,4.4).lineTo(32.9,4.4).lineTo(35.1,4.4).lineTo(35.2,4.6).lineTo(35.2,4.8).lineTo(34.6,4.9).curveTo(34,4.9,34,5.1).curveTo(33.9,5.3,34.2,6).lineTo(35.8,9.5).lineTo(37,6.8).curveTo(37.4,5.6,37.4,5.3).curveTo(37.4,4.9,36.9,4.9).lineTo(36.3,4.8).lineTo(36.2,4.6).lineTo(36.3,4.4).lineTo(38.2,4.4).lineTo(40.1,4.4).lineTo(40.3,4.6).lineTo(40.2,4.8).lineTo(39.6,4.9).curveTo(39.1,4.9,38.7,5.5).lineTo(37.9,6.6).lineTo(36.4,9.9).lineTo(36.2,10.3).lineTo(36.3,10.9).lineTo(38.4,15.4).lineTo(40.2,11.1).lineTo(41.8,7.2).lineTo(42.4,5.4).curveTo(42.4,4.9,41.8,4.9).lineTo(41.2,4.8).lineTo(41,4.6).curveTo(41,4.5,41.1,4.5).curveTo(41.1,4.5,41.1,4.4).curveTo(41.1,4.4,41.1,4.4).curveTo(41.2,4.4,41.2,4.4).lineTo(43.3,4.4).curveTo(44.3,4.4,44.9,4).lineTo(45.9,3.3).lineTo(46,3.3).lineTo(46.1,3.5).lineTo(46,5.9).lineTo(46,10.1).lineTo(46.1,10.6).curveTo(47.5,9.5,48.8,9.5).curveTo(50.1,9.5,50.8,10.2).curveTo(51.4,10.9,51.4,12).lineTo(51.4,15.4).curveTo(51.4,16.6,51.5,16.8).curveTo(51.6,17.1,52.2,17.2).lineTo(52.7,17.2).lineTo(52.8,17.5).lineTo(52.6,17.8).lineTo(50.6,17.7).lineTo(48.8,17.8).lineTo(48.7,17.5).lineTo(48.8,17.2).lineTo(49.1,17.2).curveTo(49.7,17.1,49.8,16.8).curveTo(49.9,16.6,49.9,15.4).lineTo(49.9,12.6).curveTo(49.9,11.5,49.5,11).curveTo(48.9,10.4,48,10.4).curveTo(47.1,10.4,46.4,10.9).lineTo(46.1,11.3).lineTo(46,12).lineTo(46,15.4).curveTo(46,16.5,46.1,16.8).curveTo(46.2,17.1,46.8,17.2).lineTo(47.2,17.2).curveTo(47.2,17.3,47.2,17.3).curveTo(47.3,17.3,47.3,17.3).curveTo(47.3,17.4,47.3,17.4).curveTo(47.3,17.5,47.2,17.5).lineTo(47.1,17.8).lineTo(45.2,17.7).lineTo(43.3,17.8).lineTo(43.2,17.5).curveTo(43.2,17.5,43.2,17.4).curveTo(43.2,17.4,43.2,17.3).curveTo(43.2,17.3,43.2,17.3).curveTo(43.2,17.3,43.3,17.2).lineTo(43.7,17.2).curveTo(44.3,17.1,44.4,16.8).curveTo(44.5,16.6,44.5,15.4).lineTo(44.5,6.4).lineTo(44.4,5.2).curveTo(44.4,5.1,44.4,5.1).curveTo(44.4,5.1,44.4,5).curveTo(44.3,5,44.3,5).curveTo(44.3,5,44.2,5).curveTo(43.8,5.1,43.5,5.6).lineTo(42.3,8.3).lineTo(40.8,11.8).curveTo(39.5,14.8,38.3,18).lineTo(38,18).lineTo(37.8,18).closePath().moveTo(-22.6,17.2).curveTo(-22.8,16.9,-23,16.1).lineTo(-23.2,14.5).lineTo(-23,14.3).lineTo(-22.7,14.4).curveTo(-21.9,17.4,-19.3,17.4).curveTo(-18.1,17.4,-17.4,16.7).curveTo(-16.8,16,-16.8,15.1).curveTo(-16.8,14.2,-17,13.7).curveTo(-17.4,12.9,-18.4,12.2).lineTo(-20.4,11).curveTo(-22.5,9.6,-22.5,7.5).curveTo(-22.5,6.1,-21.4,5.1).curveTo(-20.3,4.1,-18.4,4.1).curveTo(-17.5,4.1,-16.6,4.4).lineTo(-15.8,4.5).lineTo(-15.5,5.5).lineTo(-15.4,7).lineTo(-15.7,7.1).lineTo(-16,7).curveTo(-16.3,6,-16.7,5.5).curveTo(-17.4,4.7,-18.7,4.7).curveTo(-20,4.7,-20.6,5.5).curveTo(-21.1,6.1,-21.1,7).curveTo(-21.1,8.4,-19.4,9.4).lineTo(-17.8,10.4).curveTo(-15.3,12,-15.2,14.3).curveTo(-15.3,15.9,-16.4,17).curveTo(-17.6,18,-19.6,18).curveTo(-21.3,18,-22.6,17.2).closePath().moveTo(65.7,17.6).curveTo(64.9,17.3,64.5,16.6).curveTo(63.6,15.5,63.7,14).curveTo(63.7,12.2,64.8,10.9).curveTo(65.9,9.5,67.6,9.5).curveTo(68.9,9.5,69.7,10.2).curveTo(70.6,10.9,70.5,11.9).lineTo(70.4,12.4).curveTo(70.4,12.5,69.3,12.6).lineTo(65.6,12.6).lineTo(65,12.6).lineTo(65,13.1).curveTo(65,14.6,65.8,15.7).curveTo(66.8,16.9,68.4,16.9).curveTo(68.8,16.8,69.3,16.6).curveTo(69.7,16.4,70.2,15.8).lineTo(70.4,15.8).curveTo(70.4,15.9,70.5,15.9).curveTo(70.5,15.9,70.5,16).curveTo(70.5,16,70.5,16).curveTo(70.5,16.1,70.5,16.1).curveTo(70.1,17.1,69.1,17.5).curveTo(68.3,18,67.4,18).curveTo(66.5,17.9,65.7,17.6).closePath().moveTo(65.9,10.7).curveTo(65.2,11.3,65.2,11.9).curveTo(65.2,11.9,65.2,11.9).curveTo(65.2,11.9,65.2,11.9).curveTo(65.3,11.9,65.3,11.9).curveTo(65.3,11.9,65.3,11.9).lineTo(66.8,11.9).curveTo(68.6,11.9,68.8,11.8).curveTo(68.9,11.7,68.9,11.7).curveTo(68.9,11.7,69,11.6).curveTo(69,11.6,69,11.5).curveTo(69,11.4,69,11.3).curveTo(69,10.8,68.6,10.5).curveTo(68.2,10.1,67.5,10.1).curveTo(66.6,10.1,65.9,10.7).closePath().moveTo(59.5,17.3).curveTo(59.1,16.9,59,15.8).lineTo(59,11.2).lineTo(59,10.7).lineTo(58.6,10.6).lineTo(58,10.6).lineTo(57.9,10.4).lineTo(58,10.2).curveTo(58.8,9.9,59.3,9.5).curveTo(59.8,9.2,60.1,8.3).curveTo(60.2,8.3,60.2,8.3).curveTo(60.3,8.3,60.4,8.3).curveTo(60.4,8.3,60.5,8.4).curveTo(60.5,8.4,60.5,8.4).lineTo(60.5,9.3).lineTo(60.6,9.7).lineTo(60.9,9.8).lineTo(63.1,9.8).curveTo(63.1,9.8,63.2,9.8).curveTo(63.2,9.9,63.3,9.9).curveTo(63.3,10,63.3,10.1).curveTo(63.3,10.1,63.3,10.2).curveTo(63.3,10.3,63.3,10.3).curveTo(63.3,10.4,63.3,10.5).curveTo(63.2,10.5,63.2,10.5).curveTo(63.2,10.6,63.1,10.6).lineTo(60.8,10.6).curveTo(60.8,10.6,60.7,10.6).curveTo(60.7,10.6,60.6,10.6).curveTo(60.6,10.6,60.6,10.7).curveTo(60.6,10.7,60.5,10.7).lineTo(60.5,11.1).lineTo(60.5,14.8).curveTo(60.5,15.9,60.7,16.4).curveTo(61.1,17.1,62,17.1).lineTo(62.5,17).lineTo(63,16.7).curveTo(63,16.7,63.1,16.7).curveTo(63.1,16.7,63.1,16.7).curveTo(63.2,16.8,63.2,16.8).curveTo(63.2,16.8,63.2,16.9).lineTo(63.2,17.1).curveTo(62.9,17.4,62.4,17.6).curveTo(61.8,18,61.1,18).curveTo(59.9,18,59.5,17.3).closePath().moveTo(10.3,17.3).curveTo(9.9,16.9,9.9,15.8).lineTo(9.9,11.2).lineTo(9.9,10.7).curveTo(9.8,10.7,9.8,10.7).curveTo(9.8,10.6,9.7,10.6).curveTo(9.7,10.6,9.6,10.6).curveTo(9.6,10.6,9.5,10.6).lineTo(9,10.6).lineTo(8.9,10.4).lineTo(8.9,10.2).curveTo(9.7,9.9,10.1,9.5).curveTo(10.6,9.2,11,8.3).curveTo(11.1,8.3,11.1,8.3).curveTo(11.2,8.3,11.3,8.3).curveTo(11.3,8.3,11.3,8.4).curveTo(11.4,8.4,11.4,8.4).lineTo(11.4,9.3).lineTo(11.5,9.7).lineTo(11.8,9.8).lineTo(14,9.8).curveTo(14.1,9.8,14.1,9.8).curveTo(14.1,9.9,14.1,9.9).curveTo(14.2,10,14.2,10.1).curveTo(14.2,10.1,14.2,10.2).curveTo(14.2,10.3,14.2,10.3).curveTo(14.2,10.4,14.2,10.5).curveTo(14.1,10.5,14.1,10.5).curveTo(14.1,10.6,14,10.6).lineTo(11.8,10.6).curveTo(11.7,10.6,11.6,10.6).curveTo(11.6,10.6,11.6,10.6).curveTo(11.5,10.6,11.5,10.7).curveTo(11.5,10.7,11.5,10.7).lineTo(11.4,11.1).lineTo(11.4,14.8).curveTo(11.4,15.9,11.7,16.4).curveTo(11.9,17.1,12.8,17.1).lineTo(13.4,17).lineTo(13.9,16.7).curveTo(13.9,16.7,14,16.7).curveTo(14,16.7,14,16.7).curveTo(14.1,16.8,14.1,16.8).curveTo(14.1,16.8,14.1,16.9).lineTo(14.1,17.1).curveTo(13.3,17.9,12,18).curveTo(10.8,18,10.3,17.3).closePath().moveTo(4.3,17.3).curveTo(3.8,16.9,3.8,15.8).lineTo(3.8,11.2).lineTo(3.8,10.7).lineTo(3.4,10.6).lineTo(2.8,10.6).lineTo(2.8,10.4).lineTo(2.8,10.2).curveTo(3.7,9.9,4.1,9.5).curveTo(4.5,9.2,4.9,8.3).lineTo(5.2,8.3).lineTo(5.4,8.4).lineTo(5.4,9.3).lineTo(5.4,9.7).lineTo(5.7,9.8).lineTo(8,9.8).curveTo(8,9.8,8,9.8).curveTo(8,9.9,8.1,9.9).curveTo(8.1,10,8.1,10.1).curveTo(8.1,10.1,8.1,10.2).curveTo(8.1,10.3,8.1,10.3).curveTo(8.1,10.4,8.1,10.5).curveTo(8,10.5,8,10.5).curveTo(8,10.6,8,10.6).lineTo(5.7,10.6).curveTo(5.6,10.6,5.6,10.6).curveTo(5.5,10.6,5.5,10.6).curveTo(5.5,10.6,5.4,10.7).curveTo(5.4,10.7,5.4,10.7).curveTo(5.4,10.7,5.4,10.7).curveTo(5.3,10.8,5.3,10.8).curveTo(5.3,10.9,5.3,10.9).curveTo(5.3,11,5.3,11.1).lineTo(5.3,14.8).curveTo(5.3,15.9,5.5,16.4).curveTo(5.9,17.1,6.8,17.1).lineTo(7.3,17).lineTo(7.9,16.7).lineTo(8,16.9).lineTo(8.1,17.1).curveTo(7.2,17.9,5.9,18).curveTo(4.8,18,4.3,17.3).closePath().moveTo(-5.3,16.9).curveTo(-6.5,15.7,-6.5,13.8).curveTo(-6.5,11.9,-5.2,10.7).curveTo(-4,9.5,-2.2,9.5).curveTo(-0.5,9.5,0.7,10.7).curveTo(1.9,11.8,1.9,13.6).curveTo(1.9,15.6,0.7,16.7).curveTo(-0.5,17.9,-2.4,18).curveTo(-4.1,17.9,-5.3,16.9).closePath().moveTo(-4.1,11).curveTo(-4.8,11.9,-4.7,13.6).curveTo(-4.8,15,-4.1,16.2).curveTo(-3.4,17.4,-2.2,17.3).curveTo(-1,17.4,-0.4,16.3).curveTo(0.2,15.3,0.2,13.9).curveTo(0.2,12.5,-0.5,11.4).curveTo(-1.1,10.1,-2.5,10.1).curveTo(-3.5,10.1,-4.1,11).closePath().moveTo(-12.8,17).curveTo(-14,15.8,-14,13.9).curveTo(-14,12.1,-12.8,10.9).curveTo(-11.5,9.5,-9.1,9.5).curveTo(-8.1,9.5,-7.3,9.9).curveTo(-7.1,10,-7.1,10.7).lineTo(-7.2,11.1).curveTo(-7.2,11.2,-7.3,11.2).curveTo(-7.3,11.3,-7.3,11.3).curveTo(-7.4,11.3,-7.4,11.3).curveTo(-7.5,11.3,-7.5,11.3).lineTo(-7.8,11.2).curveTo(-8.1,10.8,-8.6,10.5).curveTo(-9.2,10.2,-9.8,10.1).curveTo(-10.9,10.1,-11.7,11).curveTo(-12.5,11.9,-12.5,13.4).curveTo(-12.6,14.7,-11.7,15.7).curveTo(-10.8,16.9,-9.3,16.9).curveTo(-8.5,16.8,-8,16.4).curveTo(-7.5,16.2,-7.1,15.6).lineTo(-6.9,15.7).lineTo(-6.7,15.9).curveTo(-7.2,16.9,-8.2,17.5).curveTo(-9.1,17.9,-10.1,18).curveTo(-11.8,17.9,-12.8,17).closePath().moveTo(-37.7,16.9).curveTo(-38.9,15.7,-38.9,13.8).curveTo(-38.9,11.9,-37.7,10.7).curveTo(-36.4,9.5,-34.7,9.5).curveTo(-32.9,9.5,-31.7,10.7).curveTo(-30.6,11.8,-30.5,13.6).curveTo(-30.6,15.6,-31.7,16.7).curveTo(-32.9,17.9,-34.8,18).curveTo(-36.6,17.9,-37.7,16.9).closePath().moveTo(-36.5,11).curveTo(-37.2,11.9,-37.1,13.6).curveTo(-37.1,15,-36.6,16.2).curveTo(-35.8,17.4,-34.6,17.3).curveTo(-33.3,17.4,-32.8,16.3).curveTo(-32.3,15.3,-32.3,13.9).curveTo(-32.3,12.5,-32.9,11.4).curveTo(-33.5,10.1,-34.9,10.1).curveTo(-35.9,10.1,-36.5,11).closePath().moveTo(-54.3,17.3).lineTo(-54.6,17.1).lineTo(-54.9,17.2).lineTo(-55.4,17.4).lineTo(-56.1,17.8).lineTo(-56.8,18).curveTo(-57.8,17.9,-58.3,17.5).curveTo(-58.8,16.9,-58.9,16.1).curveTo(-58.9,15.5,-58.5,15.1).curveTo(-58.1,14.7,-57.2,14.4).lineTo(-54.8,13.5).curveTo(-54.8,13.5,-54.7,13.5).curveTo(-54.7,13.4,-54.6,13.4).curveTo(-54.6,13.4,-54.6,13.4).curveTo(-54.6,13.3,-54.6,13.3).lineTo(-54.5,12.9).lineTo(-54.5,12).curveTo(-54.5,11.3,-54.7,10.9).curveTo(-55.1,10.2,-55.9,10.2).curveTo(-56.4,10.3,-56.7,10.5).curveTo(-57.2,10.7,-57.2,11.1).curveTo(-57.2,11.8,-57.4,11.9).curveTo(-57.9,12.2,-58.5,12.2).curveTo(-58.6,12.2,-58.7,12.2).curveTo(-58.7,12.2,-58.8,12.2).curveTo(-58.8,12.1,-58.8,12.1).curveTo(-58.9,12,-58.9,11.9).curveTo(-58.9,11.2,-57.5,10.3).curveTo(-56.2,9.5,-55.1,9.5).curveTo(-54.1,9.5,-53.5,10.1).curveTo(-53,10.7,-53,11.9).lineTo(-53.1,15.3).curveTo(-53.2,17.1,-52.2,17.1).lineTo(-51.7,17).lineTo(-51.4,16.8).curveTo(-51.4,16.8,-51.4,16.8).curveTo(-51.4,16.8,-51.3,16.9).curveTo(-51.3,16.9,-51.3,17).curveTo(-51.3,17,-51.3,17.1).curveTo(-51.3,17.2,-51.8,17.5).curveTo(-52.3,18,-53,18).curveTo(-53.8,18,-54.3,17.3).closePath().moveTo(-55.6,14.4).curveTo(-56.6,14.7,-56.9,14.9).curveTo(-57.3,15.3,-57.4,15.8).curveTo(-57.3,16.3,-57.1,16.6).curveTo(-56.8,17,-56,17.1).lineTo(-55.4,16.9).curveTo(-55,16.7,-54.8,16.5).lineTo(-54.7,16.2).lineTo(-54.6,15.6).lineTo(-54.6,14.4).curveTo(-54.6,14.3,-54.6,14.3).curveTo(-54.6,14.2,-54.6,14.2).curveTo(-54.6,14.2,-54.7,14.2).curveTo(-54.7,14.2,-54.8,14.2).lineTo(-55.6,14.4).closePath().moveTo(24.7,17.6).curveTo(24.2,17.4,23.6,16.9).curveTo(22.6,17.4,21.8,17.6).curveTo(21.1,17.9,20.2,17.9).curveTo(18.4,17.8,17.2,16.9).curveTo(16,15.8,16,14.3).curveTo(15.9,12,18.2,11).curveTo(17.5,10.2,17.4,9.3).curveTo(17.4,8.3,18.2,7.5).curveTo(18.9,6.8,19.9,6.8).curveTo(20.7,6.8,21.2,7.2).curveTo(21.9,7.7,21.8,8.3).curveTo(21.8,8.9,21.3,9.4).curveTo(20.9,9.8,20.5,9.8).curveTo(20.1,9.8,20.3,9.4).lineTo(20.5,9.1).curveTo(20.6,8.8,20.5,8.5).curveTo(20.4,8.2,20.1,8).curveTo(19.8,7.7,19.4,7.7).curveTo(18.8,7.7,18.4,8).curveTo(18.1,8.3,18.1,8.8).curveTo(18.1,9.3,18.4,9.7).curveTo(18.9,10.1,19.9,10.7).curveTo(21.5,11.6,22.4,12.2).curveTo(23.6,13.3,24.5,15.2).curveTo(25.1,14.3,25.2,13.3).curveTo(25.1,12.4,24.7,11.9).curveTo(24.5,11.5,23.9,11.5).curveTo(23.4,11.4,23,11.8).lineTo(22.7,11.9).curveTo(22.7,11.8,22.6,11.8).curveTo(22.6,11.8,22.6,11.7).curveTo(22.6,11.7,22.6,11.6).curveTo(22.6,11.5,22.6,11.4).curveTo(22.6,10.9,23.2,10.6).curveTo(23.6,10.2,24.4,10.2).lineTo(25.4,10.3).lineTo(26.2,10.4).curveTo(26.5,10.4,26.6,10.2).lineTo(26.8,10.1).curveTo(26.8,10.1,26.8,10.2).curveTo(26.9,10.2,26.9,10.2).curveTo(26.9,10.2,26.9,10.2).curveTo(26.9,10.3,27,10.3).curveTo(27,10.9,26.6,11.2).curveTo(26.3,11.6,25.6,11.8).curveTo(25.9,12.3,25.9,13).curveTo(25.9,14.4,24.8,15.6).curveTo(25.2,16.5,25.7,16.9).curveTo(26.2,17.2,27,17.2).lineTo(27.5,17.1).lineTo(27.9,17.1).curveTo(27.9,17.1,27.9,17.1).curveTo(27.9,17.1,27.9,17.1).curveTo(27.9,17.1,27.9,17.1).curveTo(28,17.2,28,17.2).curveTo(27.9,17.5,27.4,17.6).curveTo(26.8,17.9,26,17.9).curveTo(25.3,17.9,24.7,17.6).closePath().moveTo(17.5,13.1).curveTo(17.5,14.6,18.6,15.8).curveTo(19.7,17,21.1,17).lineTo(22.1,16.9).lineTo(23.2,16.4).lineTo(22.3,15.3).lineTo(21.9,14.6).curveTo(21.2,13.5,20.4,12.8).lineTo(19.1,11.8).lineTo(18.7,11.5).curveTo(17.5,11.7,17.5,13.1).closePath().moveTo(55.3,17.7).lineTo(53.4,17.8).lineTo(53.3,17.5).lineTo(53.4,17.2).lineTo(53.8,17.2).curveTo(54.4,17.1,54.4,16.8).curveTo(54.5,16.6,54.5,15.4).lineTo(54.5,11.9).lineTo(54.5,11.1).lineTo(54,10.7).lineTo(53.9,10.6).lineTo(53.8,10.3).lineTo(53.9,10.2).lineTo(54.9,9.8).lineTo(55.9,9.2).lineTo(56.1,9.3).lineTo(56,11.8).lineTo(56,15.4).curveTo(56.1,16.6,56.2,16.8).curveTo(56.3,17.1,56.8,17.2).lineTo(57.2,17.2).lineTo(57.4,17.5).lineTo(57.2,17.8).lineTo(55.3,17.7).closePath().moveTo(-27.7,17.7).lineTo(-29.5,17.8).curveTo(-29.5,17.7,-29.5,17.7).curveTo(-29.6,17.7,-29.6,17.7).curveTo(-29.6,17.6,-29.6,17.6).curveTo(-29.6,17.6,-29.6,17.5).curveTo(-29.6,17.5,-29.6,17.4).curveTo(-29.6,17.4,-29.6,17.3).curveTo(-29.6,17.3,-29.5,17.3).curveTo(-29.5,17.3,-29.5,17.2).lineTo(-29.2,17.2).curveTo(-28.6,17.1,-28.5,16.8).curveTo(-28.4,16.6,-28.4,15.4).lineTo(-28.4,11.9).curveTo(-28.4,11.3,-28.5,11.1).curveTo(-28.5,11,-28.9,10.7).lineTo(-29.1,10.6).lineTo(-29.2,10.3).lineTo(-29.1,10.2).lineTo(-28.1,9.8).lineTo(-27,9.2).lineTo(-26.9,9.3).lineTo(-26.9,10.5).lineTo(-26.9,10.7).lineTo(-25.8,9.9).curveTo(-25.1,9.5,-24.7,9.5).curveTo(-24.3,9.5,-24,9.7).curveTo(-23.7,10,-23.7,10.3).curveTo(-23.7,10.7,-24.1,11).curveTo(-24.3,11.2,-24.6,11.2).lineTo(-25,11).curveTo(-25.5,10.8,-25.9,10.8).curveTo(-26.4,10.8,-26.7,11.1).curveTo(-26.9,11.5,-26.9,12.7).lineTo(-26.9,15.4).curveTo(-26.9,16.5,-26.8,16.9).curveTo(-26.6,17.1,-26.1,17.2).lineTo(-25.3,17.2).curveTo(-25.3,17.3,-25.3,17.3).curveTo(-25.3,17.3,-25.3,17.3).curveTo(-25.3,17.4,-25.3,17.4).curveTo(-25.3,17.5,-25.3,17.5).lineTo(-25.4,17.8).lineTo(-27.7,17.7).closePath().moveTo(-41.5,17.7).lineTo(-43.5,17.8).lineTo(-43.6,17.5).lineTo(-43.5,17.2).lineTo(-43,17.2).curveTo(-42.5,17.1,-42.4,16.8).curveTo(-42.3,16.6,-42.3,15.4).lineTo(-42.3,6.4).curveTo(-42.3,5.4,-42.4,5.2).curveTo(-42.5,5,-42.9,4.7).lineTo(-43.1,4.6).lineTo(-43.2,4.4).lineTo(-43.1,4.1).curveTo(-41.6,3.6,-41,3.3).curveTo(-40.9,3.3,-40.9,3.3).curveTo(-40.9,3.3,-40.8,3.3).curveTo(-40.8,3.4,-40.8,3.4).curveTo(-40.8,3.4,-40.7,3.5).lineTo(-40.8,5.9).lineTo(-40.8,15.4).curveTo(-40.8,16.6,-40.7,16.8).curveTo(-40.6,17.1,-40.1,17.2).lineTo(-39.5,17.2).curveTo(-39.5,17.3,-39.5,17.3).curveTo(-39.5,17.3,-39.5,17.4).curveTo(-39.5,17.4,-39.5,17.4).curveTo(-39.5,17.5,-39.5,17.5).lineTo(-39.6,17.8).lineTo(-41.5,17.7).closePath().moveTo(-68,17.7).lineTo(-70.2,17.8).lineTo(-70.3,17.5).curveTo(-70.4,17.5,-70.4,17.4).curveTo(-70.4,17.4,-70.4,17.4).curveTo(-70.4,17.3,-70.3,17.3).curveTo(-70.3,17.3,-70.3,17.2).lineTo(-70,17.2).curveTo(-69.1,17.1,-69,16.6).curveTo(-68.9,16.3,-68.9,14.6).lineTo(-68.9,7.1).curveTo(-68.9,5.8,-69,5.5).curveTo(-69.2,5.2,-69.8,5.1).lineTo(-70.4,5).curveTo(-70.5,5,-70.5,5).curveTo(-70.5,4.9,-70.5,4.9).curveTo(-70.5,4.9,-70.5,4.8).curveTo(-70.6,4.8,-70.6,4.7).lineTo(-70.4,4.5).curveTo(-68.8,4.4,-66.1,4.4).curveTo(-63.8,4.3,-62.8,4.9).curveTo(-61.2,5.7,-61.2,7.4).curveTo(-61.2,8.4,-61.8,9.1).curveTo(-62.3,9.7,-63.2,10.2).curveTo(-63.2,10.3,-63.2,10.3).curveTo(-63.2,10.3,-63.2,10.4).curveTo(-63.1,10.4,-63.1,10.4).curveTo(-63,10.5,-62.9,10.5).curveTo(-61.9,10.6,-61.1,11.5).curveTo(-60.2,12.4,-60.2,13.8).curveTo(-60.2,15.7,-61.5,16.7).curveTo(-62.9,17.8,-65.5,17.8).lineTo(-68,17.7).closePath().moveTo(-67,11).curveTo(-67,11,-67.1,11).curveTo(-67.1,11.1,-67.1,11.1).curveTo(-67.2,11.2,-67.2,11.2).curveTo(-67.2,11.3,-67.2,11.4).lineTo(-67.2,14.4).curveTo(-67.2,16.1,-66.7,16.5).curveTo(-66.3,17.1,-65.2,17.1).curveTo(-63.8,17.1,-62.9,16.4).curveTo(-62,15.8,-62,14.3).curveTo(-62,12.8,-62.8,12).curveTo(-63.8,10.9,-66,10.9).curveTo(-66.8,10.8,-67,11).closePath().moveTo(-66.9,5.1).curveTo(-67.2,5.2,-67.2,5.6).lineTo(-67.2,9.7).curveTo(-67.2,10.1,-67.1,10.2).curveTo(-66.9,10.3,-66.2,10.2).curveTo(-64.5,10.2,-63.8,9.7).curveTo(-63,9,-63,7.7).curveTo(-63,6.3,-63.9,5.6).curveTo(-64.7,5,-65.9,5).lineTo(-66.9,5.1).closePath().moveTo(54.4,7.5).curveTo(54.2,7.3,54.1,6.8).curveTo(54.1,6.4,54.4,6.1).curveTo(54.8,5.8,55.2,5.8).curveTo(55.7,5.8,55.9,6.1).curveTo(56.2,6.4,56.2,6.8).curveTo(56.3,7.3,55.9,7.6).curveTo(55.6,7.9,55.1,7.9).curveTo(54.7,7.8,54.4,7.5).closePath().moveTo(-5.5,1.1).lineTo(-5.5,-8.8).lineTo(-0.2,-14).lineTo(-0.2,1.1).closePath().moveTo(0.6,-1.8).curveTo(0.6,-1.9,0.5,-2).curveTo(0.5,-2,0.5,-2.1).curveTo(0.4,-2.1,0.4,-2.2).curveTo(0.4,-2.2,0.4,-2.3).curveTo(0.4,-2.6,0.6,-2.8).curveTo(0.6,-2.9,0.7,-2.9).curveTo(0.8,-2.9,0.8,-3).curveTo(0.9,-3,0.9,-3).curveTo(1,-3,1,-3).curveTo(1.3,-3,1.6,-2.8).curveTo(1.8,-2.6,1.8,-2.3).curveTo(1.8,-2.2,1.7,-2.2).curveTo(1.7,-2.1,1.7,-2.1).curveTo(1.7,-2,1.6,-2).curveTo(1.6,-1.9,1.6,-1.8).curveTo(1.3,-1.7,1,-1.6).curveTo(1,-1.6,0.9,-1.7).curveTo(0.9,-1.7,0.8,-1.7).curveTo(0.8,-1.7,0.7,-1.8).curveTo(0.6,-1.8,0.6,-1.8).closePath().moveTo(0.7,-2.7).curveTo(0.7,-2.7,0.6,-2.6).curveTo(0.6,-2.6,0.6,-2.5).curveTo(0.6,-2.5,0.6,-2.4).curveTo(0.5,-2.4,0.5,-2.3).lineTo(0.7,-1.9).curveTo(0.7,-1.9,0.8,-1.8).curveTo(0.8,-1.8,0.9,-1.8).curveTo(0.9,-1.8,1,-1.8).curveTo(1,-1.7,1,-1.7).curveTo(1.1,-1.7,1.2,-1.8).curveTo(1.2,-1.8,1.3,-1.8).curveTo(1.3,-1.8,1.4,-1.8).curveTo(1.4,-1.9,1.4,-1.9).lineTo(1.6,-2.3).curveTo(1.6,-2.4,1.6,-2.4).curveTo(1.6,-2.5,1.6,-2.5).curveTo(1.5,-2.6,1.5,-2.6).curveTo(1.5,-2.7,1.4,-2.7).curveTo(1.4,-2.7,1.4,-2.8).curveTo(1.3,-2.8,1.3,-2.8).curveTo(1.2,-2.8,1.2,-2.8).curveTo(1.1,-2.8,1,-2.8).curveTo(1,-2.8,1,-2.8).curveTo(0.9,-2.8,0.9,-2.8).curveTo(0.8,-2.8,0.8,-2.8).curveTo(0.7,-2.7,0.7,-2.7).closePath().moveTo(1.2,-1.9).lineTo(1,-2.3).lineTo(1,-2.3).lineTo(1,-1.9).lineTo(0.8,-1.9).lineTo(0.8,-2.7).lineTo(1.1,-2.7).curveTo(1.2,-2.7,1.2,-2.7).curveTo(1.3,-2.7,1.3,-2.7).curveTo(1.4,-2.6,1.4,-2.6).curveTo(1.4,-2.5,1.4,-2.5).curveTo(1.4,-2.4,1.4,-2.4).curveTo(1.4,-2.4,1.4,-2.3).curveTo(1.3,-2.3,1.3,-2.3).curveTo(1.3,-2.3,1.2,-2.3).lineTo(1.4,-1.9).closePath().moveTo(1,-2.4).lineTo(1,-2.4).curveTo(1.1,-2.4,1.1,-2.4).curveTo(1.2,-2.4,1.2,-2.4).curveTo(1.2,-2.4,1.2,-2.4).curveTo(1.2,-2.5,1.2,-2.5).curveTo(1.2,-2.5,1.2,-2.5).curveTo(1.2,-2.6,1.2,-2.6).curveTo(1.2,-2.6,1.2,-2.6).curveTo(1.1,-2.6,1.1,-2.6).lineTo(1,-2.6).closePath().moveTo(5.6,-8.8).lineTo(0.4,-14).lineTo(15.5,-14).lineTo(15.5,-8.8).closePath().moveTo(0.4,-29.7).lineTo(5.6,-29.7).lineTo(5.6,-19.8).lineTo(0.4,-14.6).closePath().moveTo(-15.3,-14.6).lineTo(-15.3,-19.8).lineTo(-5.5,-19.8).lineTo(-0.2,-14.6).closePath();
	this.shape_1.setTransform(79.5,302.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#3C8EBA").beginStroke().moveTo(-9.9,29.4).curveTo(-10.3,28.9,-10.3,28).curveTo(-10.3,27.2,-9.9,26.7).curveTo(-9.3,26.1,-8.5,26.1).curveTo(-7.9,26.1,-7.4,26.4).curveTo(-7,26.8,-7,27.5).lineTo(-7.7,27.5).curveTo(-7.7,27.1,-8,26.9).curveTo(-8.2,26.8,-8.5,26.8).curveTo(-8.8,26.8,-9.1,26.9).curveTo(-9.4,27.1,-9.4,27.5).lineTo(-9.5,28).curveTo(-9.5,28.5,-9.3,28.9).curveTo(-9,29.3,-8.5,29.3).curveTo(-8.2,29.2,-8,29).curveTo(-7.8,28.8,-7.7,28.5).lineTo(-6.9,28.5).curveTo(-7,29.2,-7.4,29.6).curveTo(-7.8,29.9,-8.5,29.9).curveTo(-9.3,30,-9.9,29.4).closePath().moveTo(13.1,29.8).lineTo(13.1,28.5).lineTo(11.7,26.2).lineTo(12.6,26.2).lineTo(13.4,27.7).lineTo(14.3,26.2).lineTo(15.2,26.2).lineTo(13.9,28.5).lineTo(13.9,29.8).closePath().moveTo(8.4,29.8).lineTo(8.4,26.2).lineTo(11.1,26.2).lineTo(11.1,26.9).lineTo(9.2,26.9).lineTo(9.2,27.7).lineTo(10.9,27.7).lineTo(10.9,28.3).lineTo(9.2,28.3).lineTo(9.2,29.2).lineTo(11.2,29.2).lineTo(11.2,29.8).closePath().moveTo(6.5,29.8).lineTo(5,27.4).lineTo(5,29.8).lineTo(4.2,29.8).lineTo(4.2,26.2).lineTo(5,26.2).lineTo(6.5,28.7).lineTo(6.5,28.7).lineTo(6.5,26.2).lineTo(7.3,26.2).lineTo(7.3,29.8).closePath().moveTo(2.3,29.8).lineTo(0.8,27.4).lineTo(0.7,27.4).lineTo(0.7,29.8).lineTo(0,29.8).lineTo(0,26.2).lineTo(0.8,26.2).lineTo(2.4,28.7).lineTo(2.4,26.2).lineTo(3.1,26.2).lineTo(3.1,29.8).closePath().moveTo(-1.9,29.8).lineTo(-1.9,26.2).lineTo(-1.1,26.2).lineTo(-1.1,29.8).closePath().moveTo(-3.6,29.8).lineTo(-4.7,28.2).lineTo(-5.2,28.7).lineTo(-5.2,29.8).lineTo(-5.9,29.8).lineTo(-5.9,26.2).lineTo(-5.2,26.2).lineTo(-5.2,27.7).lineTo(-3.8,26.2).lineTo(-2.8,26.2).lineTo(-4.2,27.7).lineTo(-2.6,29.8).closePath().moveTo(-12,29.8).lineTo(-12,27.2).lineTo(-12,27.2).lineTo(-12.9,29.8).lineTo(-13.6,29.8).lineTo(-14.4,27.3).lineTo(-14.5,27.3).lineTo(-14.5,29.8).lineTo(-15.2,29.8).lineTo(-15.2,26.2).lineTo(-14,26.2).lineTo(-13.2,28.7).lineTo(-12.4,26.2).lineTo(-11.2,26.2).lineTo(-11.2,29.8).closePath().moveTo(-10.9,-18.9).lineTo(-10.9,-24.1).lineTo(-0.5,-24.1).lineTo(-5.8,-18.9).closePath().moveTo(0.1,-24.7).lineTo(5.3,-29.9).lineTo(10.4,-29.9).lineTo(10.4,-24.7).closePath();
	this.shape_2.setTransform(79.8,312.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-150,300).lineTo(-150,-300).lineTo(150,-300).lineTo(150,300).closePath();
	this.shape_3.setTransform(80.0011,300,0.5333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_Logo, new cjs.Rectangle(0,0,160,600), null);


// stage content:
(lib._21_BAY_030_cmp_bnr_NTXNeuro_SpineMcKinney_160x600 = function(mode,startPosition,loop,reversed) {
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

	// ctaBtn
	this.instance_5 = new lib.ctaBtn();
	this.instance_5.setTransform(149.55,545.5,1,1,0,0,0,87.5,22.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(171).to({_off:false},0).to({alpha:1},9).wait(45));

	// BSWH_Logo
	this.instance_6 = new lib.BSWH_Logo();
	this.instance_6.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(161).to({_off:false},0).to({alpha:1},10).wait(54));

	// txt_doWhatYou
	this.instance_7 = new lib.txt_doWhatYou();
	this.instance_7.setTransform(86.65,55.6,1,1,0,0,0,87.5,17.8);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:122.65,alpha:1},10,cjs.Ease.quadOut).wait(137).to({x:422.65,alpha:0},9,cjs.Ease.quadIn).wait(69));

	// txt_loveAgain
	this.instance_8 = new lib.txt_loveAgain();
	this.instance_8.setTransform(80.25,85.7,1,1,0,0,0,82.4,17.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({x:116.25,alpha:1},10,cjs.Ease.quadOut).wait(137).to({x:416.25,alpha:0},9,cjs.Ease.quadIn).wait(67));

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
	this.instance_9 = new lib.txt_better();
	this.instance_9.setTransform(56.05,102.55,0.8824,0.8824,0,0,0,81.3,21.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(55).to({_off:false},0).to({alpha:1},9).wait(86).to({x:218.8,alpha:0},9,cjs.Ease.quadIn).wait(66));

	// txt_believeIt
	this.instance_10 = new lib.txt_believeIt();
	this.instance_10.setTransform(205.75,118.9,1,1,0,0,0,81.4,22.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(106).to({_off:false},0).to({alpha:1},9,cjs.Ease.quadOut).wait(37).to({x:368.5,alpha:0},9,cjs.Ease.quadIn).wait(64));

	// image_01
	this.instance_11 = new lib.image_01_1();
	this.instance_11.setTransform(150,819,1,1,0,0,0,150,217);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:383},14,cjs.Ease.quadInOut).wait(32).to({y:823,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(169));

	// image_02
	this.instance_12 = new lib.image_02_1();
	this.instance_12.setTransform(150,819,1,1,0,0,0,150,217);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(51).to({_off:false},0).to({y:383},14,cjs.Ease.quadInOut).wait(32).to({y:823,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(118));

	// image_03
	this.instance_13 = new lib.image_03_1();
	this.instance_13.setTransform(150,819,1,1,0,0,0,150,217);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(101).to({_off:false},0).to({y:383},14,cjs.Ease.quadInOut).wait(32).to({y:823,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(68));

	// background_color
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-150,300).lineTo(-150,-300).lineTo(150,-300).lineTo(150,300).closePath();
	this.shape_14.setTransform(80.0011,300,0.5333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(225));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(59.1,299,383.29999999999995,741);
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
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
p.nominalBounds = new cjs.Rectangle(0,0,300,434);


(lib.image_02 = function() {
	this.initialize(img.image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,434);


(lib.image_03 = function() {
	this.initialize(img.image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,434);// helper functions:

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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(71.4,8.4).curveTo(70.7,7.7,70.8,6.7).curveTo(70.7,5.6,71.4,5).curveTo(72,4.3,73.1,4.3).curveTo(74.2,4.3,74.8,5).curveTo(75.5,5.6,75.5,6.7).curveTo(75.5,7.7,74.8,8.4).curveTo(74.2,9,73.1,9).curveTo(72,9,71.4,8.4).closePath().moveTo(11.7,8.3).curveTo(10,7.5,8.9,6.3).curveTo(7.7,5.1,7,3.4).curveTo(6.4,1.8,6.3,0).curveTo(6.3,-1.9,7.1,-3.6).curveTo(7.7,-5.2,8.9,-6.4).curveTo(10.1,-7.6,11.7,-8.3).curveTo(13.4,-9,15.4,-9).curveTo(17.9,-9,19.8,-8.1).curveTo(21.6,-7.1,22.9,-5.5).lineTo(19.3,-3).curveTo(18.7,-4,17.8,-4.6).curveTo(16.8,-5,15.4,-5).curveTo(14.4,-5,13.5,-4.7).curveTo(12.6,-4.3,11.9,-3.6).curveTo(11.3,-3,10.9,-2).curveTo(10.5,-1.1,10.6,0).curveTo(10.5,1.1,10.9,2.1).curveTo(11.2,2.9,11.9,3.6).curveTo(12.6,4.3,13.5,4.7).curveTo(14.4,5,15.5,5).curveTo(17,5,18,4.3).curveTo(19.1,3.5,19.5,2.3).lineTo(14.6,2.3).lineTo(14.6,-1.6).lineTo(24.1,-1.6).lineTo(24.1,0.4).curveTo(24,2.1,23.5,3.7).curveTo(22.8,5.2,21.7,6.4).curveTo(20.6,7.6,19,8.3).curveTo(17.4,9,15.5,9).curveTo(13.4,9,11.7,8.3).closePath().moveTo(-61.3,8.3).curveTo(-62.9,7.6,-64.1,6.3).curveTo(-65.4,5.2,-66,3.5).curveTo(-66.8,1.9,-66.7,0).curveTo(-66.8,-1.9,-66,-3.5).curveTo(-65.4,-5.1,-64.1,-6.4).curveTo(-62.9,-7.6,-61.3,-8.3).curveTo(-59.6,-9,-57.8,-9).curveTo(-55.9,-9,-54.3,-8.3).curveTo(-52.7,-7.6,-51.4,-6.4).curveTo(-50.2,-5.1,-49.5,-3.5).curveTo(-48.8,-1.9,-48.8,0).curveTo(-48.8,1.9,-49.5,3.5).curveTo(-50.2,5.2,-51.4,6.3).curveTo(-52.7,7.6,-54.2,8.3).curveTo(-55.9,9,-57.8,9).curveTo(-59.6,9,-61.3,8.3).closePath().moveTo(-59.6,-4.6).curveTo(-60.6,-4.1,-61.2,-3.4).curveTo(-61.8,-2.8,-62.1,-1.9).curveTo(-62.5,-1,-62.5,0).curveTo(-62.5,1,-62.1,1.8).curveTo(-61.8,2.7,-61.2,3.4).curveTo(-60.6,4.1,-59.7,4.4).curveTo(-58.8,4.9,-57.8,4.9).curveTo(-56.8,4.9,-55.8,4.4).curveTo(-55,4.1,-54.3,3.4).curveTo(-53.8,2.7,-53.3,1.8).curveTo(-53,1,-53,0).curveTo(-53,-1,-53.3,-1.9).curveTo(-53.8,-2.8,-54.3,-3.4).curveTo(-55.1,-4.1,-55.9,-4.6).curveTo(-56.7,-4.9,-57.8,-4.9).curveTo(-58.8,-4.9,-59.6,-4.6).closePath().moveTo(61.2,8.7).lineTo(54.3,-2.2).lineTo(54.3,8.7).lineTo(50.3,8.7).lineTo(50.3,-8.7).lineTo(54.7,-8.7).lineTo(61.2,1.7).lineTo(61.2,-8.7).lineTo(65.2,-8.7).lineTo(65.2,8.7).closePath().moveTo(43.2,8.7).lineTo(43.2,-8.7).lineTo(47.5,-8.7).lineTo(47.5,8.7).closePath().moveTo(36.7,8.7).lineTo(35.8,6.1).lineTo(29.1,6.1).lineTo(28.1,8.7).lineTo(24,8.7).lineTo(30.4,-8.7).lineTo(34.4,-8.7).lineTo(40.9,8.7).closePath().moveTo(34.5,2.5).lineTo(32.5,-3.4).lineTo(30.4,2.5).lineTo(34.5,2.5).closePath().moveTo(1.3,8.7).lineTo(0.3,6.1).lineTo(-6.3,6.1).lineTo(-7.2,8.7).lineTo(-11.5,8.7).lineTo(-5,-8.7).lineTo(-0.9,-8.7).lineTo(5.5,8.7).closePath().moveTo(-0.9,2.5).lineTo(-2.9,-3.4).lineTo(-5.1,2.5).lineTo(-0.9,2.5).closePath().moveTo(-29.7,8.7).lineTo(-29.7,-8.7).lineTo(-17.7,-8.7).lineTo(-17.7,-4.9).lineTo(-25.6,-4.9).lineTo(-25.6,-2).lineTo(-17.7,-2).lineTo(-17.7,1.9).lineTo(-25.6,1.9).lineTo(-25.6,4.9).lineTo(-17.7,4.9).lineTo(-17.7,8.7).closePath().moveTo(-42,8.7).lineTo(-48.5,-8.7).lineTo(-44.1,-8.7).lineTo(-39.9,3.1).lineTo(-35.8,-8.7).lineTo(-31.5,-8.7).lineTo(-37.9,8.7).closePath().moveTo(-79.3,8.7).lineTo(-79.3,-8.7).lineTo(-75.2,-8.7).lineTo(-75.2,4.8).lineTo(-67.5,4.8).lineTo(-67.5,8.7).closePath().moveTo(71.4,3.2).lineTo(71.4,3.1).curveTo(71.4,1.7,71.7,0.8).curveTo(72,-0.1,72.4,-0.6).curveTo(72.8,-1.2,73.3,-1.5).lineTo(75,-2.9).curveTo(75.3,-3.3,75.3,-3.8).curveTo(75.3,-4.5,74.8,-5).curveTo(74.3,-5.5,73.4,-5.5).curveTo(72.6,-5.4,72,-4.9).curveTo(71.4,-4.4,71.2,-3.8).lineTo(67.7,-5.4).curveTo(68.3,-7,69.8,-8.1).curveTo(71.2,-9,73.7,-9).curveTo(75,-9,76,-8.6).curveTo(77,-8.2,77.8,-7.6).curveTo(78.5,-6.8,79,-5.9).curveTo(79.3,-5,79.3,-3.9).curveTo(79.3,-2.7,79.1,-2.1).curveTo(78.7,-1.3,78.2,-0.9).curveTo(77.7,-0.4,77.1,-0.1).lineTo(76,0.6).curveTo(75.5,1,75.2,1.6).curveTo(74.9,2.1,74.8,3.1).lineTo(74.8,3.2).closePath();
	this.shape.setTransform(83.2,17.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_loveAgain, new cjs.Rectangle(0,0,164.8,35.6), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(90.8,8.8).curveTo(89.7,8.5,88.7,8).curveTo(87.8,7.6,87,6.9).lineTo(85.6,5.5).lineTo(89.2,2.6).curveTo(90,3.8,91.1,4.5).curveTo(92.1,5.1,93.6,5.1).curveTo(94.7,5.1,95.2,4.7).curveTo(95.8,4.2,95.8,3.5).curveTo(95.8,3,95.6,2.8).curveTo(95.3,2.5,94.9,2.2).lineTo(93.8,1.8).lineTo(90.2,0.9).curveTo(89.2,0.6,88.4,0).curveTo(87.6,-0.5,87.1,-1.4).curveTo(86.6,-2.3,86.6,-3.7).curveTo(86.6,-4.8,87.1,-5.8).curveTo(87.6,-6.8,88.4,-7.5).curveTo(89.3,-8.2,90.4,-8.6).curveTo(91.6,-9,93,-9).curveTo(94.2,-9,95.2,-8.8).curveTo(96.2,-8.6,97,-8.2).curveTo(97.9,-7.8,98.6,-7.2).lineTo(100,-5.9).lineTo(96.7,-3.3).curveTo(96,-4.3,95.2,-4.8).curveTo(94.3,-5.4,92.9,-5.4).curveTo(91.9,-5.4,91.4,-4.9).curveTo(90.9,-4.4,90.9,-3.8).curveTo(90.9,-3.4,91.1,-3.1).curveTo(91.4,-2.9,91.8,-2.7).lineTo(96.4,-1.5).curveTo(97.4,-1.1,98.2,-0.6).curveTo(99.1,0,99.6,0.9).curveTo(100.1,1.9,100.1,3.3).curveTo(100.1,4.5,99.6,5.6).curveTo(99.1,6.6,98.2,7.4).curveTo(97.3,8.2,96.1,8.6).curveTo(94.9,9,93.4,9).curveTo(92,9,90.8,8.8).closePath().moveTo(19,8.8).curveTo(17.9,8.5,16.9,8).curveTo(16,7.6,15.2,6.9).lineTo(13.8,5.5).lineTo(17.4,2.6).curveTo(18.2,3.8,19.3,4.5).curveTo(20.3,5.1,21.8,5.1).curveTo(22.9,5.1,23.4,4.7).curveTo(24,4.2,24,3.5).curveTo(24,3,23.8,2.8).curveTo(23.5,2.5,23.1,2.2).lineTo(22,1.8).lineTo(18.4,0.9).curveTo(17.4,0.6,16.6,0).curveTo(15.8,-0.5,15.3,-1.4).curveTo(14.8,-2.3,14.8,-3.7).curveTo(14.8,-4.8,15.3,-5.8).curveTo(15.8,-6.8,16.6,-7.5).curveTo(17.5,-8.2,18.6,-8.6).curveTo(19.8,-9,21.2,-9).curveTo(22.4,-9,23.4,-8.8).curveTo(24.4,-8.6,25.2,-8.2).curveTo(26.1,-7.8,26.8,-7.2).lineTo(28.2,-5.9).lineTo(24.9,-3.3).curveTo(24.2,-4.3,23.4,-4.8).curveTo(22.5,-5.4,21.1,-5.4).curveTo(20.1,-5.4,19.6,-4.9).curveTo(19.1,-4.4,19.1,-3.8).curveTo(19.1,-3.4,19.3,-3.1).curveTo(19.6,-2.9,20,-2.7).lineTo(24.6,-1.5).curveTo(25.6,-1.1,26.4,-0.6).curveTo(27.3,0,27.8,0.9).curveTo(28.3,1.9,28.3,3.3).curveTo(28.3,4.5,27.8,5.6).curveTo(27.3,6.6,26.4,7.4).curveTo(25.5,8.2,24.3,8.6).curveTo(23.1,9,21.6,9).curveTo(20.2,9,19,8.8).closePath().moveTo(72.3,8.8).lineTo(72.3,-8.7).lineTo(84.4,-8.7).lineTo(84.4,-4.9).lineTo(76.4,-4.9).lineTo(76.4,-2).lineTo(84.4,-2).lineTo(84.4,1.9).lineTo(76.4,1.9).lineTo(76.4,4.9).lineTo(84.4,4.9).lineTo(84.4,8.8).closePath().moveTo(65.4,8.8).lineTo(58.5,-2.2).lineTo(58.5,8.8).lineTo(54.5,8.8).lineTo(54.5,-8.7).lineTo(58.9,-8.7).lineTo(65.5,1.8).lineTo(65.5,-8.7).lineTo(69.5,-8.7).lineTo(69.5,8.8).closePath().moveTo(47.4,8.8).lineTo(47.4,-8.7).lineTo(51.7,-8.7).lineTo(51.7,8.8).closePath().moveTo(31.2,8.8).lineTo(31.2,-8.7).lineTo(38.2,-8.7).curveTo(39.7,-8.7,41,-8.2).curveTo(42.2,-7.7,43.1,-6.8).curveTo(44,-5.9,44.5,-4.7).curveTo(44.9,-3.6,44.9,-2.2).curveTo(44.9,-0.9,44.5,0.3).curveTo(44,1.5,43.1,2.4).curveTo(42.2,3.3,41,3.8).curveTo(39.7,4.4,38.2,4.4).lineTo(35.4,4.4).lineTo(35.4,8.8).closePath().moveTo(35.4,0.5).lineTo(38,0.5).curveTo(39.1,0.5,39.9,-0.2).curveTo(40.7,-1,40.7,-2.2).curveTo(40.7,-3.4,39.9,-4.2).curveTo(39.1,-4.9,38,-4.9).lineTo(35.4,-4.9).closePath().moveTo(-1.5,8.8).lineTo(-1.5,1.4).lineTo(-7.3,-8.7).lineTo(-2.7,-8.7).lineTo(0.6,-2.5).lineTo(3.9,-8.7).lineTo(8.4,-8.7).lineTo(2.7,1.5).lineTo(2.7,8.8).closePath().moveTo(-12.8,8.8).lineTo(-12.8,2).lineTo(-18.6,2).lineTo(-18.6,8.8).lineTo(-22.8,8.8).lineTo(-22.8,-8.7).lineTo(-18.6,-8.7).lineTo(-18.6,-2.1).lineTo(-12.8,-2.1).lineTo(-12.8,-8.7).lineTo(-8.6,-8.7).lineTo(-8.6,8.8).closePath().moveTo(-33.9,8.8).lineTo(-33.9,-4.9).lineTo(-38.6,-4.9).lineTo(-38.6,-8.7).lineTo(-25.1,-8.7).lineTo(-25.1,-4.9).lineTo(-29.8,-4.9).lineTo(-29.8,8.8).closePath().moveTo(-49.8,8.8).lineTo(-49.8,-8.7).lineTo(-45.6,-8.7).lineTo(-45.6,4.8).lineTo(-38,4.8).lineTo(-38,8.8).closePath().moveTo(-55.5,8.8).lineTo(-56.5,6.2).lineTo(-63.1,6.2).lineTo(-64.1,8.8).lineTo(-68.3,8.8).lineTo(-61.8,-8.7).lineTo(-57.8,-8.7).lineTo(-51.3,8.8).closePath().moveTo(-57.7,2.5).lineTo(-59.8,-3.4).lineTo(-61.9,2.5).lineTo(-57.7,2.5).closePath().moveTo(-82.4,8.8).lineTo(-82.4,-8.7).lineTo(-70.3,-8.7).lineTo(-70.3,-4.9).lineTo(-78.3,-4.9).lineTo(-78.3,-2).lineTo(-70.3,-2).lineTo(-70.3,1.9).lineTo(-78.3,1.9).lineTo(-78.3,4.9).lineTo(-70.3,4.9).lineTo(-70.3,8.8).closePath().moveTo(-90.2,8.8).lineTo(-90.2,2).lineTo(-95.9,2).lineTo(-95.9,8.8).lineTo(-100.1,8.8).lineTo(-100.1,-8.7).lineTo(-95.9,-8.7).lineTo(-95.9,-2.1).lineTo(-90.2,-2.1).lineTo(-90.2,-8.7).lineTo(-86,-8.7).lineTo(-86,8.8).closePath();
	this.shape.setTransform(103.725,17.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_healthySpines, new cjs.Rectangle(0,0,206,35.6), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(82.4,8.2).curveTo(81.8,7.6,81.8,6.5).curveTo(81.8,5.5,82.4,4.8).curveTo(83.1,4.2,84.2,4.2).curveTo(85.2,4.2,85.9,4.8).curveTo(86.5,5.5,86.5,6.5).curveTo(86.5,7.6,85.9,8.2).curveTo(85.2,8.9,84.2,8.9).curveTo(83.1,8.9,82.4,8.2).closePath().moveTo(67.1,8.6).lineTo(67.1,-8.9).lineTo(79.1,-8.9).lineTo(79.1,-5).lineTo(71.2,-5).lineTo(71.2,-2.1).lineTo(79.1,-2.1).lineTo(79.1,1.8).lineTo(71.2,1.8).lineTo(71.2,4.7).lineTo(79.1,4.7).lineTo(79.1,8.6).closePath().moveTo(60.5,8.6).lineTo(58,3.4).lineTo(54.6,3.4).lineTo(54.6,8.6).lineTo(50.5,8.6).lineTo(50.5,-8.9).lineTo(58.1,-8.9).curveTo(59.6,-8.9,60.8,-8.4).curveTo(62,-7.9,62.9,-7.1).curveTo(63.7,-6.3,64.2,-5.2).curveTo(64.6,-4.1,64.6,-2.9).curveTo(64.6,-1.2,63.8,0.2).curveTo(63.1,1.5,61.7,2.3).lineTo(65.1,8.6).closePath().moveTo(54.6,-0.4).lineTo(57.7,-0.4).curveTo(59.1,-0.4,59.7,-1.1).curveTo(60.4,-1.8,60.3,-2.8).curveTo(60.4,-3.9,59.7,-4.5).curveTo(59.1,-5.1,57.7,-5.1).lineTo(54.6,-5.1).closePath().moveTo(35.5,8.6).lineTo(35.5,-8.9).lineTo(47.5,-8.9).lineTo(47.5,-5).lineTo(39.6,-5).lineTo(39.6,-2.1).lineTo(47.5,-2.1).lineTo(47.5,1.8).lineTo(39.6,1.8).lineTo(39.6,4.7).lineTo(47.5,4.7).lineTo(47.5,8.6).closePath().moveTo(27.6,8.6).lineTo(27.6,1.9).lineTo(21.9,1.9).lineTo(21.9,8.6).lineTo(17.7,8.6).lineTo(17.7,-8.9).lineTo(21.9,-8.9).lineTo(21.9,-2.2).lineTo(27.6,-2.2).lineTo(27.6,-8.9).lineTo(31.9,-8.9).lineTo(31.9,8.6).closePath().moveTo(6.3,8.6).lineTo(-0.5,-2.4).lineTo(-0.5,8.6).lineTo(-4.6,8.6).lineTo(-4.6,-8.9).lineTo(-0.2,-8.9).lineTo(6.4,1.6).lineTo(6.4,-8.9).lineTo(10.4,-8.9).lineTo(10.4,8.6).closePath().moveTo(-19.3,8.6).lineTo(-19.3,-8.9).lineTo(-7.3,-8.9).lineTo(-7.3,-5).lineTo(-15.2,-5).lineTo(-15.2,-2.1).lineTo(-7.3,-2.1).lineTo(-7.3,1.8).lineTo(-15.2,1.8).lineTo(-15.2,4.7).lineTo(-7.3,4.7).lineTo(-7.3,8.6).closePath().moveTo(-35.6,8.6).lineTo(-35.6,-8.9).lineTo(-28.6,-8.9).curveTo(-27.1,-8.9,-25.8,-8.4).curveTo(-24.6,-7.9,-23.7,-7).curveTo(-22.8,-6.1,-22.3,-4.9).curveTo(-21.9,-3.7,-21.9,-2.4).curveTo(-21.9,-1,-22.3,0.2).curveTo(-22.8,1.3,-23.7,2.3).curveTo(-24.6,3.2,-25.8,3.7).curveTo(-27.1,4.2,-28.6,4.2).lineTo(-31.4,4.2).lineTo(-31.4,8.6).closePath().moveTo(-31.4,0.3).lineTo(-28.8,0.3).curveTo(-27.6,0.3,-26.8,-0.4).curveTo(-26.1,-1.1,-26.1,-2.4).curveTo(-26.1,-3.6,-26.8,-4.3).curveTo(-27.6,-5.1,-28.8,-5.1).lineTo(-31.4,-5.1).closePath().moveTo(-51.8,8.6).lineTo(-51.8,-8.9).lineTo(-44.8,-8.9).curveTo(-43.3,-8.9,-42,-8.4).curveTo(-40.8,-7.9,-39.9,-7).curveTo(-39.1,-6.1,-38.5,-4.9).curveTo(-38.1,-3.7,-38.1,-2.4).curveTo(-38.1,-1,-38.5,0.2).curveTo(-39.1,1.3,-39.9,2.3).curveTo(-40.8,3.2,-42,3.7).curveTo(-43.3,4.2,-44.8,4.2).lineTo(-47.7,4.2).lineTo(-47.7,8.6).closePath().moveTo(-47.7,0.3).lineTo(-45.1,0.3).curveTo(-43.9,0.3,-43.1,-0.4).curveTo(-42.3,-1.1,-42.3,-2.4).curveTo(-42.3,-3.6,-43.1,-4.3).curveTo(-43.9,-5.1,-45.1,-5.1).lineTo(-47.7,-5.1).closePath().moveTo(-57.9,8.6).lineTo(-58.8,6).lineTo(-65.4,6).lineTo(-66.4,8.6).lineTo(-70.6,8.6).lineTo(-64.2,-8.9).lineTo(-60.1,-8.9).lineTo(-53.6,8.6).closePath().moveTo(-64.2,2.4).lineTo(-60,2.4).lineTo(-62.1,-3.5).closePath().moveTo(-76.6,8.6).lineTo(-76.6,1.9).lineTo(-82.3,1.9).lineTo(-82.3,8.6).lineTo(-86.5,8.6).lineTo(-86.5,-8.9).lineTo(-82.3,-8.9).lineTo(-82.3,-2.2).lineTo(-76.6,-2.2).lineTo(-76.6,-8.9).lineTo(-72.4,-8.9).lineTo(-72.4,8.6).closePath();
	this.shape.setTransform(89.9,17.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_happenHere, new cjs.Rectangle(0,0,179.8,35.6), null);


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
	this.shape.graphics.beginFill("#008FBE").beginStroke().moveTo(74.5,8.5).curveTo(73.2,8,72.2,7.1).curveTo(71.3,6.2,70.8,4.9).curveTo(70.3,3.6,70.3,1.8).lineTo(70.3,-8.7).lineTo(74.6,-8.7).lineTo(74.6,1.8).curveTo(74.6,3.3,75.3,4.1).curveTo(76.1,4.9,77.4,4.9).curveTo(78.6,4.9,79.4,4.1).curveTo(80.2,3.3,80.2,1.8).lineTo(80.2,-8.7).lineTo(84.5,-8.7).lineTo(84.5,1.8).curveTo(84.5,3.6,84,4.9).curveTo(83.5,6.2,82.6,7.1).curveTo(81.6,8,80.3,8.5).curveTo(79,9,77.4,9).curveTo(75.8,9,74.5,8.5).closePath().moveTo(55.4,8.3).curveTo(53.7,7.6,52.5,6.3).curveTo(51.3,5.2,50.6,3.5).curveTo(49.9,1.9,49.9,0).curveTo(49.9,-1.9,50.6,-3.5).curveTo(51.3,-5.1,52.5,-6.4).curveTo(53.7,-7.6,55.4,-8.3).curveTo(57,-9,58.9,-9).curveTo(60.8,-9,62.4,-8.3).curveTo(64,-7.6,65.2,-6.4).curveTo(66.5,-5.1,67.2,-3.5).curveTo(67.9,-1.9,67.9,0).curveTo(67.9,1.9,67.2,3.5).curveTo(66.5,5.2,65.3,6.3).curveTo(64,7.6,62.4,8.3).curveTo(60.8,9,58.9,9).curveTo(57,9,55.4,8.3).closePath().moveTo(57,-4.6).curveTo(56.1,-4.1,55.5,-3.4).curveTo(54.9,-2.8,54.5,-1.9).curveTo(54.2,-1,54.2,0).curveTo(54.2,1,54.5,1.8).curveTo(54.9,2.7,55.5,3.4).curveTo(56.1,4.1,57,4.4).curveTo(57.9,4.9,58.9,4.9).curveTo(59.9,4.9,60.8,4.4).curveTo(61.7,4.1,62.3,3.4).curveTo(62.9,2.7,63.3,1.8).curveTo(63.7,1,63.7,0).curveTo(63.7,-1,63.3,-1.9).curveTo(62.9,-2.8,62.3,-3.4).curveTo(61.6,-4.1,60.8,-4.6).curveTo(59.9,-4.9,58.9,-4.9).curveTo(57.9,-4.9,57,-4.6).closePath().moveTo(-61.6,8.3).curveTo(-63.3,7.6,-64.5,6.3).curveTo(-65.7,5.2,-66.4,3.5).curveTo(-67.1,1.9,-67.1,0).curveTo(-67.1,-1.9,-66.4,-3.5).curveTo(-65.7,-5.1,-64.5,-6.4).curveTo(-63.3,-7.6,-61.6,-8.3).curveTo(-60,-9,-58.1,-9).curveTo(-56.2,-9,-54.6,-8.3).curveTo(-53,-7.6,-51.8,-6.4).curveTo(-50.5,-5.1,-49.8,-3.5).curveTo(-49.1,-1.9,-49.1,0).curveTo(-49.1,1.9,-49.8,3.5).curveTo(-50.5,5.2,-51.7,6.3).curveTo(-53,7.6,-54.6,8.3).curveTo(-56.2,9,-58.1,9).curveTo(-60,9,-61.6,8.3).closePath().moveTo(-60,-4.6).curveTo(-60.9,-4.1,-61.5,-3.4).curveTo(-62.1,-2.8,-62.5,-1.9).curveTo(-62.8,-1,-62.8,0).curveTo(-62.8,1,-62.5,1.8).curveTo(-62.1,2.7,-61.5,3.4).curveTo(-60.9,4.1,-60,4.4).curveTo(-59.1,4.9,-58.1,4.9).curveTo(-57.1,4.9,-56.2,4.4).curveTo(-55.3,4.1,-54.7,3.4).curveTo(-54.1,2.7,-53.7,1.8).curveTo(-53.3,1,-53.3,0).curveTo(-53.3,-1,-53.7,-1.9).curveTo(-54.1,-2.8,-54.7,-3.4).curveTo(-55.4,-4.1,-56.2,-4.6).curveTo(-57.1,-4.9,-58.1,-4.9).curveTo(-59.1,-4.9,-60,-4.6).closePath().moveTo(39.9,8.7).lineTo(39.9,1.4).lineTo(34.2,-8.7).lineTo(38.7,-8.7).lineTo(42.1,-2.5).lineTo(45.4,-8.7).lineTo(49.9,-8.7).lineTo(44.1,1.4).lineTo(44.1,8.7).closePath().moveTo(19.8,8.7).lineTo(19.8,-4.9).lineTo(15,-4.9).lineTo(15,-8.7).lineTo(28.6,-8.7).lineTo(28.6,-4.9).lineTo(23.9,-4.9).lineTo(23.9,8.7).closePath().moveTo(10.8,8.7).lineTo(9.9,6.1).lineTo(3.2,6.1).lineTo(2.3,8.7).lineTo(-1.9,8.7).lineTo(4.5,-8.7).lineTo(8.6,-8.7).lineTo(15.1,8.7).closePath().moveTo(8.6,2.5).lineTo(6.6,-3.4).lineTo(4.5,2.5).lineTo(8.6,2.5).closePath().moveTo(-7.1,8.7).lineTo(-7.1,2).lineTo(-12.9,2).lineTo(-12.9,8.7).lineTo(-17.1,8.7).lineTo(-17.1,-8.7).lineTo(-12.9,-8.7).lineTo(-12.9,-2.1).lineTo(-7.1,-2.1).lineTo(-7.1,-8.7).lineTo(-2.9,-8.7).lineTo(-2.9,8.7).closePath().moveTo(-28.2,8.7).lineTo(-31.3,-2.3).lineTo(-34.3,8.7).lineTo(-38.5,8.7).lineTo(-43.3,-8.7).lineTo(-39.1,-8.7).lineTo(-36.3,2.1).lineTo(-33.3,-8.7).lineTo(-29.3,-8.7).lineTo(-26.3,2.1).lineTo(-23.5,-8.7).lineTo(-19.3,-8.7).lineTo(-24.2,8.7).closePath().moveTo(-84.5,8.7).lineTo(-84.5,-8.7).lineTo(-78.3,-8.7).curveTo(-76.2,-8.8,-74.5,-8.1).curveTo(-72.9,-7.4,-71.7,-6.3).curveTo(-70.5,-5.1,-69.8,-3.4).curveTo(-69.1,-1.9,-69.1,0).curveTo(-69.1,1.8,-69.8,3.4).curveTo(-70.5,5.1,-71.7,6.2).curveTo(-72.9,7.4,-74.6,8.1).curveTo(-76.2,8.7,-78.2,8.7).closePath().moveTo(-80.3,4.9).lineTo(-78.4,4.9).curveTo(-77.2,4.9,-76.3,4.4).curveTo(-75.4,4.1,-74.7,3.4).curveTo(-74.1,2.8,-73.7,1.9).curveTo(-73.4,1,-73.4,0).curveTo(-73.4,-1,-73.7,-2).curveTo(-74,-2.8,-74.7,-3.4).curveTo(-75.3,-4.2,-76.3,-4.5).curveTo(-77.2,-4.9,-78.5,-4.9).lineTo(-80.3,-4.9).closePath();
	this.shape.setTransform(87.375,17.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_doWhatYou, new cjs.Rectangle(0,0,175,35.6), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_03_1, new cjs.Rectangle(0,0,300,434), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_02_1, new cjs.Rectangle(0,0,300,434), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01_1, new cjs.Rectangle(0,0,300,434), null);


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
	this.shape.setTransform(87.475,22.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#008FBE").setStrokeStyle(1,1,1).moveTo(-87.5,-22.8).lineTo(87.5,-22.8).lineTo(87.5,22.8).lineTo(-87.5,22.8).closePath();
	this.shape_1.setTransform(87.525,22.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-87.5,22.8).lineTo(-87.5,-22.8).lineTo(87.5,-22.8).lineTo(87.5,22.8).closePath();
	this.shape_2.setTransform(87.525,22.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-1,-1,177.1,47.5), null);


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
	this.shape.graphics.beginFill("#3C8EBA").beginStroke().moveTo(12.4,43.7).lineTo(12.4,38.4).lineTo(16.5,38.4).lineTo(16.5,39.4).lineTo(13.6,39.4).lineTo(13.6,40.5).lineTo(16.2,40.5).lineTo(16.2,41.5).lineTo(13.6,41.5).lineTo(13.6,42.8).lineTo(16.5,42.8).lineTo(16.5,43.7).closePath().moveTo(7.5,43.7).lineTo(7.5,38.4).lineTo(8.7,38.4).lineTo(8.7,42.8).lineTo(11.2,42.8).lineTo(11.2,43.7).closePath().moveTo(1.9,43.7).lineTo(1.9,38.4).lineTo(4.2,38.4).curveTo(4.9,38.4,5.3,38.7).curveTo(5.8,39,6,39.3).curveTo(6.1,39.7,6.1,40.1).curveTo(6.1,40.6,6,40.9).curveTo(5.8,41.3,5.3,41.6).curveTo(5,41.8,4.2,41.8).lineTo(3.1,41.8).lineTo(3.1,43.7).closePath().moveTo(3.1,40.9).lineTo(4,40.9).curveTo(4.5,40.9,4.7,40.8).curveTo(5,40.6,5,40.1).curveTo(5,39.7,4.7,39.5).curveTo(4.5,39.3,4,39.3).lineTo(3.1,39.3).closePath().moveTo(-0.9,43.7).lineTo(-0.9,40).lineTo(-2.1,43.7).lineTo(-3,43.7).lineTo(-4.4,40).lineTo(-4.4,43.7).lineTo(-5.5,43.7).lineTo(-5.5,38.4).lineTo(-3.8,38.4).lineTo(-2.6,42.1).lineTo(-2.6,42.1).lineTo(-1.4,38.4).lineTo(0.3,38.4).lineTo(0.3,43.7).closePath().moveTo(-10.9,43.7).lineTo(-10.9,38.4).lineTo(-6.9,38.4).lineTo(-6.9,39.4).lineTo(-9.8,39.4).lineTo(-9.8,40.5).lineTo(-7.2,40.5).lineTo(-7.2,41.5).lineTo(-9.8,41.5).lineTo(-9.8,42.8).lineTo(-6.8,42.8).lineTo(-6.8,43.7).closePath().moveTo(-14.9,43.7).lineTo(-14.9,39.4).lineTo(-16.5,39.4).lineTo(-16.5,38.4).lineTo(-12.1,38.4).lineTo(-12.1,39.4).lineTo(-13.7,39.4).lineTo(-13.7,43.7).closePath().moveTo(-15.6,-27.5).lineTo(-15.6,-35.2).lineTo(-0.4,-35.2).lineTo(-8.1,-27.5).closePath().moveTo(0.6,-36.1).lineTo(8.1,-43.7).lineTo(15.6,-43.7).lineTo(15.6,-36.1).closePath();
	this.shape.setTransform(149.65,336.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#F5B846").beginStroke().moveTo(0.5,15.6).lineTo(0.5,0.5).lineTo(8.1,8.1).lineTo(8.1,15.6).closePath().moveTo(-8.1,-8.1).lineTo(-8.1,-15.6).lineTo(-0.5,-15.6).lineTo(-0.5,-0.5).closePath();
	this.shape_1.setTransform(149.7,300.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#1140A0").beginStroke().moveTo(7.1,42.4).curveTo(6.2,41.3,6.2,39.6).curveTo(6.2,37.9,7.1,36.8).curveTo(8.1,35.7,9.8,35.7).curveTo(11,35.7,12,36.4).curveTo(12.9,37.1,13,38.4).lineTo(11.4,38.4).curveTo(11.4,37.8,10.9,37.4).curveTo(10.4,37.1,9.8,37.1).curveTo(9.1,37.1,8.7,37.4).curveTo(8.2,37.8,8,38.4).curveTo(7.8,38.9,7.8,39.6).curveTo(7.8,40.7,8.3,41.4).curveTo(8.8,42.1,9.8,42.1).curveTo(10.5,42.1,11,41.6).curveTo(11.4,41.1,11.5,40.4).lineTo(13.1,40.4).curveTo(12.9,41.8,12.1,42.6).curveTo(11.2,43.5,9.8,43.5).curveTo(8.1,43.5,7.1,42.4).closePath().moveTo(-20.9,42.4).curveTo(-21.9,41.3,-21.9,39.6).curveTo(-21.9,37.9,-20.9,36.8).curveTo(-19.9,35.7,-18.2,35.7).curveTo(-17,35.7,-16.1,36.4).curveTo(-15.2,37.1,-15,38.4).lineTo(-16.6,38.4).curveTo(-16.7,37.8,-17.1,37.4).curveTo(-17.6,37.1,-18.2,37.1).curveTo(-18.9,37.1,-19.4,37.4).curveTo(-19.9,37.8,-20.1,38.4).curveTo(-20.2,38.9,-20.2,39.6).curveTo(-20.2,40.7,-19.7,41.4).curveTo(-19.2,42.1,-18.2,42.1).curveTo(-17.5,42.1,-17.1,41.6).curveTo(-16.7,41.2,-16.5,40.4).lineTo(-15,40.4).curveTo(-15.1,41.8,-16,42.6).curveTo(-16.8,43.5,-18.2,43.5).curveTo(-19.9,43.5,-20.9,42.4).closePath().moveTo(51.7,43.3).lineTo(51.5,42.8).lineTo(51.4,41.5).curveTo(51.3,40.9,51,40.7).curveTo(50.8,40.4,50.1,40.4).lineTo(48.5,40.4).lineTo(48.5,43.3).lineTo(46.9,43.3).lineTo(46.9,35.9).lineTo(50.9,35.9).curveTo(51.9,35.9,52.5,36.5).curveTo(53.1,37.1,53.1,37.9).curveTo(53.1,39.3,51.9,39.8).lineTo(51.9,39.8).curveTo(52.9,40.1,53,41.5).lineTo(53.1,43).lineTo(53.3,43.3).closePath().moveTo(48.5,39.2).lineTo(50.3,39.2).curveTo(51.4,39.2,51.4,38.2).curveTo(51.4,37.1,50.3,37.1).lineTo(48.5,37.1).closePath().moveTo(39.1,43.3).lineTo(39.1,35.9).lineTo(44.7,35.9).lineTo(44.7,37.2).lineTo(40.8,37.2).lineTo(40.8,38.8).lineTo(44.3,38.8).lineTo(44.3,40.1).lineTo(40.8,40.1).lineTo(40.8,41.9).lineTo(44.7,41.9).lineTo(44.7,43.3).closePath().moveTo(33.4,43.3).lineTo(33.4,37.2).lineTo(31.1,37.2).lineTo(31.1,35.9).lineTo(37.2,35.9).lineTo(37.2,37.2).lineTo(35,37.2).lineTo(35,43.3).closePath().moveTo(27.6,43.3).lineTo(24.5,38.3).lineTo(24.5,43.3).lineTo(23,43.3).lineTo(23,35.9).lineTo(24.6,35.9).lineTo(27.7,40.9).lineTo(27.7,40.9).lineTo(27.7,35.9).lineTo(29.3,35.9).lineTo(29.3,43.3).closePath().moveTo(15.2,43.3).lineTo(15.2,35.9).lineTo(20.8,35.9).lineTo(20.8,37.2).lineTo(16.8,37.2).lineTo(16.8,38.8).lineTo(20.4,38.8).lineTo(20.4,40.1).lineTo(16.8,40.1).lineTo(16.8,41.9).lineTo(20.9,41.9).lineTo(20.9,43.3).closePath().moveTo(-4.6,43.3).lineTo(-4.6,35.9).lineTo(-3,35.9).lineTo(-3,41.9).lineTo(0.6,41.9).lineTo(0.6,43.3).closePath().moveTo(-8,43.3).lineTo(-8.6,41.6).lineTo(-11.4,41.6).lineTo(-11.9,43.3).lineTo(-13.6,43.3).lineTo(-10.8,35.9).lineTo(-9.1,35.9).lineTo(-6.3,43.3).closePath().moveTo(-10.9,40.4).lineTo(-9,40.4).lineTo(-10,37.7).closePath().moveTo(-25.7,43.3).lineTo(-25.7,35.9).lineTo(-24,35.9).lineTo(-24,43.3).closePath().moveTo(-34.4,43.3).lineTo(-34.4,35.9).lineTo(-31.2,35.9).curveTo(-29.7,35.9,-28.8,36.8).curveTo(-27.8,37.7,-27.8,39.5).curveTo(-27.8,41.2,-28.7,42.3).curveTo(-29.5,43.3,-31.2,43.3).closePath().moveTo(-32.8,41.9).lineTo(-31.3,41.9).curveTo(-30.5,41.9,-30,41.4).curveTo(-29.4,40.8,-29.4,39.7).curveTo(-29.4,38.5,-29.9,37.9).curveTo(-30.4,37.2,-31.6,37.2).lineTo(-32.8,37.2).closePath().moveTo(-42.2,43.3).lineTo(-42.2,35.9).lineTo(-36.6,35.9).lineTo(-36.6,37.2).lineTo(-40.5,37.2).lineTo(-40.5,38.8).lineTo(-36.9,38.8).lineTo(-36.9,40.1).lineTo(-40.5,40.1).lineTo(-40.5,41.9).lineTo(-36.5,41.9).lineTo(-36.5,43.3).closePath().moveTo(-46.2,43.3).lineTo(-46.2,38).lineTo(-48,43.3).lineTo(-49.2,43.3).lineTo(-51.1,38.1).lineTo(-51.1,38.1).lineTo(-51.1,43.3).lineTo(-52.6,43.3).lineTo(-52.6,35.9).lineTo(-50.3,35.9).lineTo(-48.6,41).lineTo(-46.9,35.9).lineTo(-44.6,35.9).lineTo(-44.6,43.3).closePath().moveTo(-74.7,32.3).curveTo(-75.1,31.9,-75.1,31.4).curveTo(-75.1,30.8,-74.7,30.5).curveTo(-74.4,30.2,-73.9,30.2).lineTo(-73.3,30.2).curveTo(-72.7,30.2,-72.3,29.7).curveTo(-71.3,28.1,-70.9,27).curveTo(-70.6,26.1,-70.6,25.7).curveTo(-70.6,25.1,-71.1,23.7).lineTo(-73.4,17.4).lineTo(-74.1,15.8).curveTo(-74.5,15.2,-75.1,15.1).lineTo(-75.9,15).curveTo(-75.9,14.9,-75.9,14.9).curveTo(-76,14.9,-76,14.8).curveTo(-76,14.8,-76,14.7).curveTo(-76,14.6,-76,14.6).curveTo(-76,14.5,-76,14.4).curveTo(-75.9,14.4,-75.9,14.3).curveTo(-75.9,14.3,-75.9,14.3).curveTo(-75.8,14.2,-75.8,14.2).lineTo(-73,14.3).lineTo(-70.4,14.2).curveTo(-70.4,14.2,-70.4,14.3).curveTo(-70.3,14.3,-70.3,14.3).curveTo(-70.3,14.4,-70.3,14.4).curveTo(-70.2,14.5,-70.2,14.6).curveTo(-70.2,14.6,-70.2,14.7).curveTo(-70.2,14.8,-70.3,14.8).curveTo(-70.3,14.9,-70.3,14.9).curveTo(-70.3,14.9,-70.4,15).lineTo(-71.1,15.1).curveTo(-71.8,15.2,-71.8,15.5).curveTo(-71.8,15.8,-70.9,18.2).lineTo(-70,21).lineTo(-69.1,23).curveTo(-68.9,22.9,-68,20.9).lineTo(-67,18.5).curveTo(-66,16.1,-66,15.6).curveTo(-66,15.2,-66.7,15.1).lineTo(-67.6,15).curveTo(-67.7,14.9,-67.7,14.9).curveTo(-67.7,14.9,-67.7,14.8).curveTo(-67.8,14.8,-67.8,14.7).curveTo(-67.8,14.6,-67.8,14.6).curveTo(-67.8,14.5,-67.7,14.4).curveTo(-67.7,14.4,-67.7,14.3).curveTo(-67.7,14.3,-67.6,14.3).curveTo(-67.6,14.2,-67.6,14.2).lineTo(-65,14.3).lineTo(-62.7,14.2).curveTo(-62.7,14.3,-62.7,14.3).curveTo(-62.6,14.3,-62.6,14.4).curveTo(-62.6,14.4,-62.6,14.5).curveTo(-62.5,14.5,-62.5,14.6).curveTo(-62.5,14.6,-62.5,14.7).curveTo(-62.5,14.8,-62.6,14.8).curveTo(-62.6,14.9,-62.6,14.9).curveTo(-62.6,14.9,-62.7,15).lineTo(-63.2,15).curveTo(-63.9,15.2,-64.4,15.9).curveTo(-64.9,16.5,-65.7,18.2).lineTo(-67.3,21.5).lineTo(-71.9,31.3).curveTo(-72.5,32.6,-73.8,32.6).curveTo(-74.4,32.6,-74.7,32.3).closePath().moveTo(55.3,26.3).lineTo(53.5,21.9).lineTo(51.8,17.9).curveTo(49.2,23,48.1,26.3).lineTo(47.7,26.4).lineTo(47.3,26.3).lineTo(39.6,9.3).curveTo(39.1,8.2,38.8,7.8).curveTo(38.3,7.2,37.5,7.2).lineTo(36.8,7.1).curveTo(36.7,7,36.7,7).curveTo(36.7,7,36.7,6.9).curveTo(36.7,6.9,36.7,6.8).curveTo(36.7,6.8,36.7,6.7).curveTo(36.7,6.7,36.7,6.6).curveTo(36.7,6.6,36.7,6.5).curveTo(36.8,6.5,36.8,6.5).curveTo(36.8,6.4,36.9,6.4).lineTo(39.9,6.5).lineTo(43.2,6.4).curveTo(43.3,6.4,43.3,6.5).curveTo(43.3,6.5,43.4,6.5).curveTo(43.4,6.6,43.4,6.6).curveTo(43.4,6.7,43.4,6.7).curveTo(43.4,6.8,43.4,6.8).curveTo(43.4,6.9,43.4,6.9).curveTo(43.4,7,43.4,7).curveTo(43.4,7,43.3,7.1).lineTo(42.6,7.2).curveTo(41.7,7.2,41.7,7.7).curveTo(41.7,8.1,43.2,11.6).lineTo(48.3,22.6).lineTo(50.5,17.8).lineTo(51,16.6).lineTo(50.8,15.8).lineTo(47.6,8.8).curveTo(47.2,8,46.8,7.7).curveTo(46.4,7.2,45.7,7.2).lineTo(45,7.1).curveTo(44.9,7,44.9,7).curveTo(44.9,7,44.8,6.9).curveTo(44.8,6.9,44.8,6.8).curveTo(44.8,6.8,44.8,6.7).curveTo(44.8,6.7,44.8,6.6).curveTo(44.8,6.6,44.9,6.5).curveTo(44.9,6.5,44.9,6.5).curveTo(45,6.4,45,6.4).lineTo(48.2,6.5).lineTo(51.4,6.4).curveTo(51.4,6.4,51.5,6.5).curveTo(51.5,6.5,51.5,6.5).curveTo(51.6,6.6,51.6,6.6).curveTo(51.6,6.7,51.6,6.7).lineTo(51.5,7.1).lineTo(50.7,7.2).curveTo(49.8,7.2,49.7,7.5).curveTo(49.6,7.8,50.1,8.8).lineTo(52.3,13.9).lineTo(54.1,10.1).curveTo(54.8,8.2,54.8,7.7).curveTo(54.8,7.2,54,7.2).lineTo(53.1,7.1).lineTo(53,6.7).curveTo(53,6.6,53.1,6.6).curveTo(53.1,6.5,53.1,6.5).curveTo(53.1,6.5,53.2,6.5).curveTo(53.2,6.4,53.2,6.4).lineTo(56,6.5).lineTo(58.8,6.4).curveTo(58.8,6.4,58.9,6.5).curveTo(58.9,6.5,58.9,6.5).curveTo(58.9,6.6,59,6.6).curveTo(59,6.7,59,6.7).lineTo(58.9,7.1).lineTo(58,7.2).curveTo(57.2,7.2,56.6,8).lineTo(55.6,9.8).curveTo(54.7,11.4,53.3,14.5).lineTo(53.1,15.2).lineTo(53.2,15.9).lineTo(56.3,22.6).lineTo(58.9,16.4).curveTo(60.5,12.5,61.2,10.5).curveTo(62.1,8.1,62.1,7.9).curveTo(62.1,7.2,61.2,7.2).lineTo(60.3,7.1).curveTo(60.3,7,60.2,7).curveTo(60.2,7,60.2,6.9).curveTo(60.1,6.9,60.1,6.8).curveTo(60.1,6.8,60.1,6.7).curveTo(60.1,6.7,60.1,6.6).curveTo(60.1,6.6,60.2,6.5).curveTo(60.2,6.5,60.2,6.5).curveTo(60.3,6.4,60.3,6.4).lineTo(63.1,6.5).lineTo(63.2,6.5).lineTo(63.4,6.5).curveTo(64.8,6.5,65.7,5.9).curveTo(66.3,5.6,67.2,4.9).lineTo(67.4,4.9).lineTo(67.5,5).lineTo(67.4,8.7).lineTo(67.4,14.9).curveTo(67.4,15.3,67.5,15.4).curveTo(69.5,13.9,71.5,13.9).curveTo(73.4,13.9,74.4,15).curveTo(75.3,16,75.3,17.7).lineTo(75.3,22.6).curveTo(75.3,24.2,75.4,24.6).curveTo(75.6,25.1,76.4,25.2).lineTo(77.2,25.3).curveTo(77.2,25.3,77.2,25.3).curveTo(77.3,25.4,77.3,25.4).curveTo(77.3,25.5,77.3,25.5).curveTo(77.3,25.6,77.3,25.6).curveTo(77.3,25.7,77.3,25.8).curveTo(77.3,25.8,77.2,25.9).curveTo(77.2,25.9,77.2,25.9).curveTo(77.2,26,77.1,26).lineTo(74.2,25.9).lineTo(71.4,26).curveTo(71.4,26,71.4,25.9).curveTo(71.3,25.9,71.3,25.9).curveTo(71.3,25.8,71.3,25.8).curveTo(71.2,25.7,71.2,25.6).curveTo(71.2,25.6,71.2,25.5).curveTo(71.2,25.5,71.3,25.4).curveTo(71.3,25.4,71.3,25.3).curveTo(71.3,25.3,71.4,25.3).lineTo(72,25.2).curveTo(72.8,25,72.9,24.6).curveTo(73.1,24.2,73.1,22.6).lineTo(73.1,18.4).curveTo(73.1,16.9,72.4,16.1).curveTo(71.6,15.3,70.3,15.3).curveTo(68.9,15.3,68,16).curveTo(67.6,16.4,67.5,16.6).curveTo(67.4,16.9,67.4,17.7).lineTo(67.4,22.6).curveTo(67.4,24.2,67.5,24.6).curveTo(67.7,25.1,68.5,25.2).lineTo(69.1,25.3).curveTo(69.1,25.3,69.2,25.3).curveTo(69.2,25.3,69.2,25.4).curveTo(69.2,25.4,69.2,25.5).curveTo(69.2,25.5,69.2,25.6).curveTo(69.2,25.7,69.2,25.8).curveTo(69.2,25.8,69.1,25.9).curveTo(69.1,25.9,69.1,25.9).curveTo(69.1,26,69,26).lineTo(66.3,25.9).lineTo(63.4,26).curveTo(63.3,26,63.3,25.9).curveTo(63.3,25.9,63.3,25.9).curveTo(63.2,25.8,63.2,25.8).curveTo(63.2,25.7,63.2,25.6).curveTo(63.2,25.6,63.2,25.5).curveTo(63.2,25.5,63.2,25.4).curveTo(63.2,25.4,63.3,25.3).curveTo(63.3,25.3,63.3,25.3).lineTo(64.1,25.2).curveTo(64.9,25.1,65,24.6).curveTo(65.2,24.3,65.2,22.6).lineTo(65.2,9.3).curveTo(65.2,7.9,65.1,7.6).curveTo(65.1,7.5,65,7.5).curveTo(65,7.4,65,7.4).curveTo(64.9,7.4,64.9,7.3).curveTo(64.8,7.3,64.8,7.3).curveTo(64.2,7.6,63.8,8.2).curveTo(63.4,8.9,61.9,12.3).lineTo(59.8,17.2).curveTo(57.8,21.8,56.1,26.3).lineTo(55.7,26.4).lineTo(55.3,26.3).closePath().moveTo(-33.2,25.3).curveTo(-33.4,24.8,-33.7,23.5).curveTo(-33.9,22.3,-34,21.2).lineTo(-33.6,21).lineTo(-33.3,21.1).curveTo(-32,25.5,-28.2,25.5).curveTo(-26.4,25.5,-25.4,24.4).curveTo(-24.5,23.5,-24.5,22.1).curveTo(-24.5,20.9,-24.9,20.1).curveTo(-25.5,18.9,-26.9,17.9).lineTo(-29.7,16.1).curveTo(-32.9,14,-32.9,11.1).curveTo(-32.9,8.9,-31.3,7.5).curveTo(-29.7,6,-26.9,6).curveTo(-25.6,6,-24.2,6.4).lineTo(-23.1,6.6).curveTo(-22.9,7.1,-22.8,8.2).lineTo(-22.6,10.2).lineTo(-23,10.3).curveTo(-23,10.3,-23.1,10.3).curveTo(-23.2,10.3,-23.2,10.3).curveTo(-23.3,10.3,-23.3,10.3).curveTo(-23.4,10.3,-23.4,10.2).curveTo(-23.7,8.8,-24.4,8).curveTo(-25.5,6.9,-27.3,6.9).curveTo(-29.3,6.9,-30.2,8).curveTo(-30.8,8.9,-30.8,10.2).curveTo(-30.8,12.3,-28.3,13.8).lineTo(-26,15.3).curveTo(-22.3,17.6,-22.3,20.9).curveTo(-22.3,23.4,-24,24.9).curveTo(-25.7,26.4,-28.6,26.4).curveTo(-31.2,26.4,-33.2,25.3).closePath().moveTo(96.1,25.7).curveTo(95.1,25.2,94.4,24.4).curveTo(93.1,22.8,93.1,20.5).curveTo(93.1,17.8,94.8,15.9).curveTo(96.5,13.9,99.1,13.9).curveTo(100.9,13.9,102.1,15).curveTo(103.2,16,103.2,17.4).lineTo(103.1,18.2).curveTo(103,18.4,101.4,18.4).lineTo(95.9,18.4).curveTo(95.4,18.4,95.3,18.5).curveTo(95.2,18.6,95.2,19.2).curveTo(95.2,21.5,96.4,23).curveTo(97.8,24.6,100,24.6).curveTo(100.8,24.6,101.4,24.4).curveTo(102.1,24,102.7,23.2).curveTo(102.8,23.2,102.8,23.2).curveTo(102.9,23.2,102.9,23.2).curveTo(103,23.2,103,23.2).curveTo(103,23.2,103.1,23.3).lineTo(103.3,23.6).curveTo(102.6,25,101.2,25.7).curveTo(100,26.3,98.6,26.3).curveTo(97.3,26.3,96.1,25.7).closePath().moveTo(96.5,15.7).curveTo(95.5,16.5,95.5,17.3).curveTo(95.5,17.4,95.5,17.4).curveTo(95.5,17.4,95.5,17.4).curveTo(95.6,17.5,95.6,17.5).curveTo(95.6,17.5,95.7,17.5).lineTo(97.8,17.5).curveTo(100.4,17.5,100.8,17.2).curveTo(101,17.1,101,16.6).curveTo(101,15.9,100.5,15.4).curveTo(99.9,14.8,98.7,14.8).curveTo(97.5,14.8,96.5,15.7).closePath().moveTo(87,25.4).curveTo(86.4,24.6,86.4,23.1).lineTo(86.4,16.4).lineTo(86.4,15.7).curveTo(86.3,15.6,85.8,15.6).lineTo(85,15.6).lineTo(84.8,15.3).curveTo(84.8,15.2,84.8,15.2).curveTo(84.8,15.1,84.8,15.1).curveTo(84.8,15,84.8,15).curveTo(84.9,15,84.9,14.9).curveTo(86.2,14.5,86.8,14).curveTo(87.5,13.4,88,12.3).curveTo(88.5,12.1,88.6,12.4).lineTo(88.6,13.7).lineTo(88.7,14.2).curveTo(88.8,14.3,89.2,14.3).lineTo(92.4,14.3).curveTo(92.7,14.5,92.7,15).curveTo(92.7,15.4,92.4,15.6).lineTo(89.1,15.6).curveTo(89,15.6,88.9,15.6).curveTo(88.9,15.6,88.8,15.6).curveTo(88.8,15.6,88.7,15.6).curveTo(88.7,15.7,88.7,15.7).lineTo(88.6,16.2).lineTo(88.6,21.7).curveTo(88.6,23.3,88.9,24).curveTo(89.4,25,90.8,25).curveTo(91.2,25,91.5,24.9).lineTo(92.3,24.5).curveTo(92.3,24.5,92.3,24.5).curveTo(92.4,24.5,92.4,24.5).curveTo(92.4,24.5,92.5,24.6).curveTo(92.5,24.6,92.5,24.6).lineTo(92.6,25).curveTo(92.1,25.5,91.4,25.9).curveTo(90.5,26.3,89.5,26.3).curveTo(87.7,26.3,87,25.4).closePath().moveTo(15.1,25.4).curveTo(14.5,24.6,14.5,23.1).lineTo(14.5,16.4).curveTo(14.5,15.8,14.4,15.7).curveTo(14.3,15.6,13.9,15.6).lineTo(13.1,15.6).curveTo(13.1,15.6,13.1,15.5).curveTo(13,15.5,13,15.4).curveTo(13,15.4,13,15.4).curveTo(13,15.3,13,15.3).curveTo(13,15.2,13,15.2).curveTo(13,15.1,13,15.1).curveTo(13,15,13,15).curveTo(13,15,13,14.9).curveTo(14.3,14.5,14.9,14).curveTo(15.6,13.4,16.1,12.3).curveTo(16.6,12.1,16.7,12.4).lineTo(16.7,13.7).curveTo(16.7,14.2,16.8,14.2).curveTo(16.8,14.3,16.9,14.3).curveTo(16.9,14.3,17,14.3).curveTo(17,14.3,17.1,14.3).curveTo(17.2,14.3,17.3,14.3).lineTo(20.5,14.3).curveTo(20.8,14.5,20.8,15).curveTo(20.8,15.4,20.6,15.6).lineTo(17.2,15.6).curveTo(17.1,15.6,17.1,15.6).curveTo(17,15.6,16.9,15.6).curveTo(16.9,15.6,16.8,15.6).curveTo(16.8,15.7,16.8,15.7).lineTo(16.7,16.2).lineTo(16.7,21.7).curveTo(16.7,23.3,17.1,24).curveTo(17.5,25,18.8,25).curveTo(19.3,25,19.7,24.9).lineTo(20.4,24.5).curveTo(20.4,24.5,20.5,24.5).curveTo(20.5,24.5,20.5,24.5).curveTo(20.6,24.5,20.6,24.6).curveTo(20.7,24.6,20.7,24.6).lineTo(20.7,25).curveTo(19.5,26.3,17.6,26.3).curveTo(15.8,26.3,15.1,25.4).closePath().moveTo(6.2,25.4).curveTo(5.6,24.6,5.6,23.1).lineTo(5.6,16.4).lineTo(5.6,15.7).curveTo(5.5,15.6,5,15.6).lineTo(4.2,15.6).curveTo(4.2,15.6,4.2,15.5).curveTo(4.1,15.5,4.1,15.4).curveTo(4.1,15.4,4.1,15.4).curveTo(4.1,15.3,4.1,15.3).curveTo(4.1,15.2,4.1,15.2).curveTo(4.1,15.1,4.1,15.1).curveTo(4.1,15,4.1,15).curveTo(4.1,15,4.1,14.9).curveTo(5.4,14.5,6,14).curveTo(6.6,13.4,7.2,12.3).lineTo(7.6,12.3).curveTo(7.6,12.3,7.7,12.3).curveTo(7.7,12.3,7.7,12.3).curveTo(7.8,12.3,7.8,12.4).curveTo(7.8,12.4,7.9,12.4).lineTo(7.9,13.7).lineTo(7.9,14.2).curveTo(7.9,14.3,8,14.3).curveTo(8,14.3,8.1,14.3).curveTo(8.1,14.3,8.2,14.3).curveTo(8.3,14.3,8.4,14.3).lineTo(11.7,14.3).curveTo(11.9,14.5,11.9,15).curveTo(11.9,15.4,11.7,15.6).lineTo(8.4,15.6).curveTo(8.3,15.6,8.2,15.6).curveTo(8.1,15.6,8.1,15.6).curveTo(8,15.6,8,15.6).curveTo(7.9,15.7,7.9,15.7).curveTo(7.8,15.8,7.8,16.2).lineTo(7.8,21.7).curveTo(7.8,23.3,8.2,24).curveTo(8.7,25,10,25).curveTo(10.4,25,10.8,24.9).lineTo(11.5,24.5).curveTo(11.6,24.5,11.6,24.5).curveTo(11.6,24.5,11.7,24.5).curveTo(11.7,24.5,11.7,24.6).curveTo(11.8,24.6,11.8,24.6).lineTo(11.8,25).curveTo(10.6,26.3,8.7,26.3).curveTo(7,26.3,6.2,25.4).closePath().moveTo(-7.7,24.6).curveTo(-9.5,23,-9.5,20.2).curveTo(-9.5,17.5,-7.6,15.7).curveTo(-5.8,13.9,-3.2,13.9).curveTo(-0.7,13.9,1,15.6).curveTo(2.8,17.3,2.8,20).curveTo(2.8,22.8,1,24.5).curveTo(-0.7,26.3,-3.4,26.3).curveTo(-6,26.3,-7.7,24.6).closePath().moveTo(-6,16.1).curveTo(-6.9,17.5,-6.9,19.9).curveTo(-6.9,22.1,-6,23.6).curveTo(-4.9,25.4,-3.1,25.4).curveTo(-1.3,25.4,-0.5,23.8).curveTo(0.2,22.5,0.2,20.4).curveTo(0.2,18.2,-0.6,16.7).curveTo(-1.6,14.8,-3.5,14.8).curveTo(-5,14.8,-6,16.1).closePath().moveTo(-18.8,24.8).curveTo(-20.5,23.2,-20.5,20.4).curveTo(-20.5,17.8,-18.7,16).curveTo(-16.8,13.9,-13.4,13.9).curveTo(-11.8,13.9,-10.7,14.4).curveTo(-10.3,14.7,-10.3,15.6).curveTo(-10.3,16,-10.5,16.3).curveTo(-10.7,16.7,-10.9,16.7).curveTo(-11,16.7,-11,16.7).curveTo(-11.1,16.7,-11.2,16.6).curveTo(-11.2,16.6,-11.2,16.6).curveTo(-11.3,16.5,-11.3,16.5).curveTo(-11.9,15.8,-12.6,15.4).curveTo(-13.4,14.9,-14.3,14.9).curveTo(-15.9,14.9,-17.1,16.1).curveTo(-18.3,17.4,-18.3,19.6).curveTo(-18.3,21.5,-17.1,23).curveTo(-15.8,24.6,-13.6,24.6).curveTo(-12.4,24.6,-11.6,24.1).curveTo(-10.9,23.7,-10.3,22.9).lineTo(-10,23).curveTo(-10,23,-9.9,23.1).curveTo(-9.9,23.1,-9.9,23.1).curveTo(-9.8,23.2,-9.8,23.2).curveTo(-9.8,23.3,-9.8,23.3).curveTo(-10.5,24.8,-12,25.6).curveTo(-13.3,26.3,-14.7,26.3).curveTo(-17.2,26.3,-18.8,24.8).closePath().moveTo(-55.2,24.6).curveTo(-56.9,23,-56.9,20.2).curveTo(-56.9,17.5,-55.1,15.7).curveTo(-53.3,13.9,-50.7,13.9).curveTo(-48.1,13.9,-46.4,15.6).curveTo(-44.7,17.3,-44.7,20).curveTo(-44.7,22.8,-46.4,24.5).curveTo(-48.1,26.3,-50.9,26.3).curveTo(-53.5,26.3,-55.2,24.6).closePath().moveTo(-53.4,16.1).curveTo(-54.4,17.5,-54.4,19.9).curveTo(-54.4,22.1,-53.4,23.6).curveTo(-52.4,25.4,-50.6,25.4).curveTo(-48.8,25.4,-47.9,23.8).curveTo(-47.2,22.5,-47.2,20.4).curveTo(-47.2,18.2,-48.1,16.7).curveTo(-49.1,14.8,-51,14.8).curveTo(-52.5,14.8,-53.4,16.1).closePath().moveTo(-79.4,25.4).curveTo(-79.7,25,-79.9,25).lineTo(-80.3,25.2).lineTo(-81.1,25.6).lineTo(-82.1,26.1).curveTo(-82.6,26.3,-83.2,26.3).curveTo(-84.5,26.3,-85.2,25.6).curveTo(-86.1,24.8,-86.1,23.6).curveTo(-86.1,22.7,-85.6,22.2).curveTo(-85.1,21.6,-83.7,21.1).lineTo(-80.2,19.8).curveTo(-79.9,19.7,-79.8,19.5).lineTo(-79.7,19).lineTo(-79.7,17.6).curveTo(-79.6,16.6,-80,15.9).curveTo(-80.6,15,-81.8,15).curveTo(-82.5,15,-83,15.4).curveTo(-83.7,15.7,-83.7,16.4).curveTo(-83.8,17.2,-84,17.4).curveTo(-84.7,17.9,-85.7,17.9).curveTo(-86.1,17.9,-86.1,17.5).curveTo(-86.1,16.4,-84.2,15.1).curveTo(-82.3,13.9,-80.6,13.9).curveTo(-79,13.9,-78.3,14.8).curveTo(-77.5,15.7,-77.6,17.3).lineTo(-77.7,22.4).curveTo(-77.9,25,-76.4,25).curveTo(-76,25,-75.6,24.8).lineTo(-75.3,24.6).curveTo(-75.2,24.6,-75.2,24.6).curveTo(-75.1,24.7,-75.1,24.7).curveTo(-75.1,24.8,-75.1,24.8).curveTo(-75.1,24.9,-75.1,25).curveTo(-75.1,25.2,-75.7,25.7).curveTo(-76.6,26.3,-77.5,26.3).curveTo(-78.8,26.3,-79.4,25.4).closePath().moveTo(-81.3,21.1).curveTo(-82.7,21.5,-83.3,21.9).curveTo(-83.9,22.4,-83.9,23.2).curveTo(-83.9,23.8,-83.5,24.3).curveTo(-83,25,-82,25).curveTo(-81.6,25,-81,24.7).lineTo(-80.2,24.3).curveTo(-80,24,-79.9,23.6).lineTo(-79.9,22.9).lineTo(-79.8,21.1).curveTo(-79.8,21,-79.8,21).curveTo(-79.8,20.9,-79.8,20.9).curveTo(-79.9,20.8,-79.9,20.8).curveTo(-80,20.8,-80.1,20.8).curveTo(-80.5,20.8,-81.3,21.1).closePath().moveTo(25.2,24.6).curveTo(23.3,23.1,23.3,20.9).curveTo(23.3,17.6,26.7,16.2).curveTo(25.6,14.9,25.6,13.6).curveTo(25.6,12.1,26.6,11.1).curveTo(27.7,10,29.3,10).curveTo(30.3,10,31.1,10.6).curveTo(32,11.2,32,12.2).curveTo(32,13.2,31.2,13.8).curveTo(30.6,14.3,30,14.3).curveTo(29.4,14.3,29.8,13.8).lineTo(30,13.4).curveTo(30.1,12.9,30,12.5).curveTo(29.8,12,29.5,11.7).curveTo(29,11.4,28.4,11.3).curveTo(27.6,11.3,27.1,11.8).curveTo(26.5,12.2,26.5,12.9).curveTo(26.5,13.7,27,14.2).curveTo(27.6,14.8,29.1,15.6).curveTo(31.6,17,32.7,17.9).curveTo(34.6,19.5,35.9,22.2).curveTo(36.8,21,36.8,19.4).curveTo(36.8,18.2,36.2,17.4).curveTo(35.8,16.9,35.1,16.8).curveTo(34.3,16.7,33.7,17.3).curveTo(33.6,17.3,33.6,17.3).curveTo(33.5,17.4,33.5,17.4).curveTo(33.4,17.4,33.4,17.4).curveTo(33.3,17.4,33.3,17.4).curveTo(33,17.3,33.1,16.7).curveTo(33.2,15.9,33.9,15.5).curveTo(34.6,14.9,35.7,14.9).lineTo(37.2,15.1).lineTo(38.3,15.3).curveTo(38.8,15.3,39,15).lineTo(39.2,14.9).curveTo(39.2,14.9,39.3,14.9).curveTo(39.3,14.9,39.4,14.9).curveTo(39.4,15,39.5,15).curveTo(39.5,15.1,39.5,15.1).curveTo(39.5,15.9,39,16.4).curveTo(38.6,16.9,37.5,17.2).curveTo(37.9,18.1,37.9,19.1).curveTo(37.9,21.2,36.3,23).curveTo(37,24.2,37.7,24.7).curveTo(38.4,25.2,39.5,25.2).lineTo(40.3,25.1).lineTo(40.8,25).curveTo(40.8,25,40.8,25).curveTo(40.9,25,40.9,25).curveTo(40.9,25,40.9,25.1).curveTo(40.9,25.1,40.9,25.2).curveTo(40.9,25.6,40.1,25.8).curveTo(39.3,26.1,38.1,26.1).curveTo(37,26.1,36.3,25.8).curveTo(35.5,25.5,34.5,24.6).curveTo(33.1,25.5,32,25.8).curveTo(30.9,26.2,29.6,26.2).curveTo(27,26.2,25.2,24.6).closePath().moveTo(25.6,19.2).curveTo(25.6,21.4,27.3,23.2).curveTo(28.9,24.8,31,24.8).curveTo(31.8,24.8,32.4,24.7).lineTo(34,24).curveTo(33.3,23.3,32.7,22.3).lineTo(32.1,21.4).curveTo(31,19.9,29.8,18.8).curveTo(29.2,18.1,28,17.2).lineTo(27.4,16.8).curveTo(25.6,17.1,25.6,19.2).closePath().moveTo(81,25.9).lineTo(78.2,26).curveTo(78.2,26,78.2,25.9).curveTo(78.1,25.9,78.1,25.9).curveTo(78.1,25.8,78.1,25.8).curveTo(78,25.7,78,25.6).curveTo(78,25.6,78,25.5).curveTo(78,25.5,78.1,25.4).curveTo(78.1,25.4,78.1,25.3).curveTo(78.1,25.3,78.2,25.3).lineTo(78.8,25.2).curveTo(79.6,25.1,79.8,24.6).curveTo(79.9,24.3,79.9,22.6).lineTo(79.9,17.5).curveTo(79.9,16.6,79.8,16.3).curveTo(79.7,16,79.1,15.6).lineTo(78.8,15.5).lineTo(78.7,15.2).lineTo(78.9,14.9).lineTo(80.4,14.3).lineTo(81.9,13.5).curveTo(82,13.5,82,13.5).curveTo(82.1,13.5,82.1,13.5).curveTo(82.1,13.5,82.1,13.6).curveTo(82.2,13.6,82.2,13.7).lineTo(82.1,17.3).lineTo(82.1,22.6).curveTo(82.1,24.2,82.2,24.6).curveTo(82.4,25.1,83.2,25.2).lineTo(83.8,25.3).curveTo(83.9,25.3,83.9,25.3).curveTo(83.9,25.4,83.9,25.4).curveTo(83.9,25.5,83.9,25.5).curveTo(83.9,25.6,83.9,25.6).curveTo(83.9,25.7,83.9,25.8).curveTo(83.9,25.8,83.9,25.9).curveTo(83.8,25.9,83.8,25.9).curveTo(83.8,26,83.7,26).lineTo(81,25.9).closePath().moveTo(-40.4,25.9).lineTo(-43.1,26).curveTo(-43.2,26,-43.2,25.9).curveTo(-43.2,25.9,-43.2,25.9).curveTo(-43.3,25.8,-43.3,25.8).curveTo(-43.3,25.7,-43.3,25.6).curveTo(-43.3,25.6,-43.3,25.5).curveTo(-43.3,25.5,-43.3,25.4).curveTo(-43.3,25.4,-43.2,25.3).curveTo(-43.2,25.3,-43.2,25.3).lineTo(-42.6,25.2).curveTo(-41.8,25,-41.6,24.6).curveTo(-41.5,24.2,-41.5,22.6).lineTo(-41.5,17.5).curveTo(-41.5,16.6,-41.6,16.3).curveTo(-41.7,16,-42.3,15.6).lineTo(-42.6,15.5).lineTo(-42.7,15.2).lineTo(-42.5,14.9).lineTo(-41.1,14.3).lineTo(-39.6,13.5).curveTo(-39.5,13.5,-39.5,13.5).curveTo(-39.4,13.5,-39.4,13.5).curveTo(-39.4,13.6,-39.3,13.6).curveTo(-39.3,13.6,-39.3,13.7).lineTo(-39.3,15.4).curveTo(-39.3,15.5,-39.3,15.5).curveTo(-39.3,15.5,-39.3,15.6).curveTo(-39.3,15.6,-39.3,15.6).curveTo(-39.3,15.6,-39.2,15.6).lineTo(-37.7,14.5).curveTo(-36.7,13.9,-36,13.9).curveTo(-35.5,13.9,-35.1,14.2).curveTo(-34.7,14.5,-34.7,15.1).curveTo(-34.7,15.7,-35.1,16.1).curveTo(-35.5,16.4,-35.9,16.4).curveTo(-36.2,16.4,-36.6,16.2).curveTo(-37.3,15.7,-37.9,15.7).curveTo(-38.5,15.7,-39,16.3).curveTo(-39.3,16.8,-39.3,18.6).lineTo(-39.3,22.6).curveTo(-39.3,24.3,-39.1,24.6).curveTo(-39,25.1,-38.1,25.2).lineTo(-37.1,25.3).curveTo(-37,25.3,-37,25.3).curveTo(-37,25.4,-37,25.4).curveTo(-37,25.5,-37,25.5).curveTo(-37,25.6,-37,25.6).curveTo(-37,25.7,-37,25.8).curveTo(-37,25.8,-37,25.9).curveTo(-37,25.9,-37.1,25.9).curveTo(-37.1,26,-37.1,26).lineTo(-40.4,25.9).closePath().moveTo(-60.8,25.9).lineTo(-63.6,26).curveTo(-63.7,26,-63.7,25.9).curveTo(-63.7,25.9,-63.7,25.9).curveTo(-63.8,25.8,-63.8,25.8).curveTo(-63.8,25.7,-63.8,25.6).curveTo(-63.8,25.6,-63.8,25.5).curveTo(-63.8,25.5,-63.8,25.4).curveTo(-63.8,25.4,-63.7,25.3).curveTo(-63.7,25.3,-63.7,25.3).lineTo(-63,25.2).curveTo(-62.2,25.1,-62,24.6).curveTo(-61.9,24.3,-61.9,22.6).lineTo(-61.9,9.3).curveTo(-61.9,8,-62,7.6).curveTo(-62.2,7.2,-62.8,6.9).lineTo(-63.1,6.7).lineTo(-63.2,6.4).curveTo(-63.2,6.4,-63.2,6.3).curveTo(-63.2,6.3,-63.2,6.2).curveTo(-63.1,6.2,-63.1,6.2).curveTo(-63.1,6.1,-63.1,6.1).curveTo(-60.9,5.4,-59.9,4.9).curveTo(-59.9,4.9,-59.8,4.9).curveTo(-59.8,4.9,-59.8,4.9).curveTo(-59.7,4.9,-59.7,5).curveTo(-59.7,5,-59.6,5).lineTo(-59.7,8.7).lineTo(-59.7,22.6).curveTo(-59.7,24.2,-59.5,24.6).curveTo(-59.4,25.1,-58.6,25.2).lineTo(-57.9,25.3).curveTo(-57.8,25.3,-57.8,25.3).curveTo(-57.8,25.4,-57.8,25.4).curveTo(-57.8,25.5,-57.8,25.5).curveTo(-57.8,25.6,-57.8,25.6).curveTo(-57.8,25.7,-57.8,25.8).curveTo(-57.8,25.8,-57.8,25.9).curveTo(-57.8,25.9,-57.9,25.9).curveTo(-57.9,26,-57.9,26).lineTo(-60.8,25.9).closePath().moveTo(-99.4,25.9).lineTo(-102.8,26).curveTo(-102.8,26,-102.8,25.9).curveTo(-102.9,25.9,-102.9,25.9).curveTo(-102.9,25.8,-102.9,25.8).curveTo(-103,25.7,-103,25.6).curveTo(-103,25.6,-103,25.5).curveTo(-103,25.5,-102.9,25.4).curveTo(-102.9,25.4,-102.9,25.3).curveTo(-102.9,25.3,-102.8,25.3).lineTo(-102.3,25.2).curveTo(-101.2,25,-100.9,24.4).curveTo(-100.7,23.9,-100.7,21.5).lineTo(-100.7,10.3).curveTo(-100.7,8.6,-100.9,8.1).curveTo(-101.2,7.6,-102.2,7.5).lineTo(-103.1,7.4).curveTo(-103.1,7.3,-103.2,7.3).curveTo(-103.2,7.2,-103.2,7.2).curveTo(-103.3,7.1,-103.3,7.1).curveTo(-103.3,7,-103.3,7).curveTo(-103.3,6.9,-103.3,6.9).curveTo(-103.3,6.8,-103.2,6.8).curveTo(-103.2,6.7,-103.2,6.7).curveTo(-103.1,6.6,-103.1,6.6).curveTo(-100.7,6.4,-96.7,6.4).curveTo(-93.4,6.4,-91.8,7.2).curveTo(-89.6,8.3,-89.6,10.9).curveTo(-89.6,12.4,-90.4,13.4).curveTo(-91.1,14.3,-92.6,14.9).curveTo(-92.6,15.3,-92,15.4).curveTo(-90.5,15.6,-89.4,16.7).curveTo(-88,18.1,-88,20.3).curveTo(-88,22.9,-90,24.4).curveTo(-92,26,-95.9,26).lineTo(-99.4,25.9).closePath().moveTo(-98,16.1).curveTo(-98.3,16.2,-98.3,16.7).lineTo(-98.3,21.1).curveTo(-98.3,23.5,-97.7,24.3).curveTo(-97,25.1,-95.4,25.1).curveTo(-93.3,25.1,-92.1,24.1).curveTo(-90.7,23.1,-90.7,21).curveTo(-90.7,18.9,-91.9,17.6).curveTo(-93.4,15.9,-96.6,15.9).curveTo(-97.7,15.9,-98,16.1).closePath().moveTo(-97.9,7.5).curveTo(-98.3,7.6,-98.3,8.2).lineTo(-98.3,14.2).curveTo(-98.3,14.8,-98.1,15).curveTo(-97.9,15.1,-96.8,15).curveTo(-94.4,14.9,-93.3,14.2).curveTo(-92.2,13.3,-92.2,11.3).curveTo(-92.2,9.2,-93.5,8.2).curveTo(-94.6,7.3,-96.5,7.3).curveTo(-97.5,7.3,-97.9,7.5).closePath().moveTo(79.7,11.1).curveTo(79.3,10.7,79.3,10.1).curveTo(79.3,9.4,79.7,8.9).curveTo(80.2,8.5,80.9,8.5).curveTo(81.5,8.5,81.9,9).curveTo(82.3,9.4,82.3,10).curveTo(82.3,10.8,81.9,11.2).curveTo(81.5,11.5,80.8,11.5).curveTo(80.1,11.5,79.7,11.1).closePath().moveTo(-8,1.7).lineTo(-8,-12.8).lineTo(-0.4,-20.4).lineTo(-0.4,1.7).closePath().moveTo(0.9,-2.7).curveTo(0.6,-3,0.6,-3.4).curveTo(0.6,-3.8,0.9,-4.1).curveTo(1.2,-4.4,1.6,-4.4).curveTo(2,-4.4,2.3,-4.1).curveTo(2.6,-3.8,2.6,-3.4).curveTo(2.6,-3,2.3,-2.7).curveTo(2,-2.4,1.6,-2.4).curveTo(1.2,-2.4,0.9,-2.7).closePath().moveTo(1,-4).curveTo(0.8,-3.7,0.8,-3.4).curveTo(0.8,-3,1,-2.8).curveTo(1.2,-2.6,1.6,-2.6).curveTo(1.9,-2.6,2.1,-2.8).curveTo(2.4,-3,2.4,-3.4).curveTo(2.4,-3.7,2.1,-4).curveTo(1.9,-4.2,1.6,-4.2).curveTo(1.2,-4.2,1,-4).closePath().moveTo(1.9,-2.8).lineTo(1.6,-3.3).lineTo(1.4,-3.3).lineTo(1.4,-2.8).lineTo(1.2,-2.8).lineTo(1.2,-3.9).lineTo(1.6,-3.9).curveTo(2.1,-3.9,2.1,-3.6).curveTo(2.1,-3.6,2.1,-3.5).curveTo(2,-3.4,2,-3.4).curveTo(2,-3.3,1.9,-3.3).curveTo(1.9,-3.3,1.8,-3.3).lineTo(2.1,-2.8).closePath().moveTo(1.4,-3.4).lineTo(1.6,-3.4).curveTo(1.6,-3.4,1.7,-3.4).curveTo(1.8,-3.4,1.8,-3.5).curveTo(1.8,-3.5,1.9,-3.5).curveTo(1.9,-3.6,1.9,-3.6).curveTo(1.9,-3.7,1.9,-3.7).curveTo(1.8,-3.7,1.8,-3.7).curveTo(1.8,-3.8,1.7,-3.8).curveTo(1.7,-3.8,1.6,-3.8).lineTo(1.4,-3.8).closePath().moveTo(8.2,-12.8).lineTo(0.6,-20.4).lineTo(22.7,-20.4).lineTo(22.7,-12.8).closePath().moveTo(0.6,-43.5).lineTo(8.2,-43.5).lineTo(8.2,-29).lineTo(0.6,-21.4).closePath().moveTo(-22.5,-21.4).lineTo(-22.5,-29).lineTo(-8,-29).lineTo(-0.4,-21.4).closePath();
	this.shape_2.setTransform(149.575,321.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-150,300).lineTo(-150,-300).lineTo(150,-300).lineTo(150,300).closePath();
	this.shape_3.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_Logo, new cjs.Rectangle(0,0,300,600), null);


// stage content:
(lib.BSWH_NTX_Neuro_Temple_300x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(1,1,1).moveTo(-187,-310.1).lineTo(187,-310.1).lineTo(187,310.1).lineTo(-187,310.1).closePath();
	this.shape.setTransform(149.9999,299.9922,0.8021,0.9675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#000000").setStrokeStyle(1,1,1).moveTo(-150,-300).lineTo(150,-300).lineTo(150,300).lineTo(-150,300).closePath();
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},224).wait(1));

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
	var mask_graphics_64 = new cjs.Graphics().moveTo(16.5,10.5).curveTo(14.9,9.9,13.8,8.7).curveTo(12.8,7.6,12.1,6.1).curveTo(11.6,4.7,11.6,2.9).curveTo(11.6,1.2,12.2,-0.3).curveTo(12.9,-1.8,13.9,-2.9).curveTo(15.1,-4,16.6,-4.7).curveTo(18.2,-5.3,19.9,-5.3).curveTo(21.8,-5.3,23.4,-4.7).curveTo(24.8,-4.1,26,-3).curveTo(27.1,-1.9,27.7,-0.4).curveTo(28.3,1.1,28.3,2.8).lineTo(28.3,4.6).lineTo(16.6,4.6).curveTo(16.9,5.5,18,6.2).curveTo(18.9,6.8,20,6.8).curveTo(21.3,6.8,22,6.4).curveTo(22.9,5.9,23.4,5.2).lineTo(27.4,7.6).curveTo(26.2,9.3,24.4,10.2).curveTo(22.7,11.1,20,11.1).curveTo(18.1,11.1,16.5,10.5).closePath().moveTo(23.2,0.8).curveTo(22.8,0,21.9,-0.6).curveTo(21,-1.1,20,-1.1).curveTo(19,-1.1,18.1,-0.5).curveTo(17.1,0.1,16.7,0.8).lineTo(23.2,0.8).lineTo(23.2,0.8).closePath().moveTo(5,10.8).curveTo(4,10.5,3.4,9.7).curveTo(2.5,8.9,2.2,7.8).curveTo(1.9,6.7,1.9,4.8).lineTo(1.9,-0.6).lineTo(-0.9,-0.6).lineTo(-0.9,-5).lineTo(1.9,-5).lineTo(1.9,-8.4).lineTo(7.1,-11.1).lineTo(7.1,-5).lineTo(10.8,-5).lineTo(10.8,-0.6).lineTo(7.1,-0.6).lineTo(7.1,4.5).curveTo(7,5.6,7.4,5.9).curveTo(7.8,6.3,8.5,6.3).curveTo(9.1,6.3,9.8,5.8).lineTo(11.8,9.7).curveTo(11,10.4,9.9,10.8).curveTo(8.8,11.1,7.5,11.1).curveTo(6.1,11.1,5,10.8).closePath().moveTo(-6.9,10.8).curveTo(-8,10.5,-8.7,9.7).curveTo(-9.3,8.8,-9.8,7.8).curveTo(-10.1,6.7,-10.1,4.8).lineTo(-10.1,-0.6).lineTo(-12.9,-0.6).lineTo(-12.9,-5).lineTo(-10.1,-5).lineTo(-10.1,-8.4).lineTo(-5,-11.1).lineTo(-5,-5).lineTo(-1.2,-5).lineTo(-1.2,-0.6).lineTo(-5.2,-0.6).lineTo(-5.2,4.5).curveTo(-5.1,5.6,-4.8,5.9).curveTo(-4.4,6.3,-3.7,6.3).curveTo(-3.1,6.3,-2.5,5.8).lineTo(-0.2,9.7).curveTo(-1.1,10.4,-2.2,10.8).curveTo(-3.2,11.1,-4.4,11.1).curveTo(-5.9,11.1,-6.9,10.8).closePath().moveTo(-25.1,10.5).curveTo(-26.6,9.9,-27.8,8.7).curveTo(-28.8,7.6,-29.4,6.1).curveTo(-30,4.7,-30,2.9).curveTo(-30,1.2,-29.4,-0.3).curveTo(-28.7,-1.8,-27.7,-2.9).curveTo(-26.4,-4,-25,-4.7).curveTo(-23.4,-5.3,-21.6,-5.3).curveTo(-19.8,-5.3,-18.2,-4.7).curveTo(-16.7,-4.1,-15.6,-3).curveTo(-14.5,-1.9,-13.9,-0.4).curveTo(-13.3,1.1,-13.3,2.8).lineTo(-13.3,4.7).lineTo(-25,4.7).curveTo(-24.7,5.6,-23.6,6.3).curveTo(-22.7,6.9,-21.5,6.9).curveTo(-20.3,6.9,-19.6,6.5).curveTo(-18.7,6,-18.2,5.3).lineTo(-14.2,7.6).curveTo(-15.4,9.3,-17.2,10.2).curveTo(-18.8,11.1,-21.5,11.1).curveTo(-23.5,11.1,-25.1,10.5).closePath().moveTo(-18.3,0.9).curveTo(-18.7,-0,-19.6,-0.6).curveTo(-20.4,-1.1,-21.5,-1.1).curveTo(-22.6,-1.1,-23.4,-0.5).curveTo(-24.4,0,-24.9,0.9).lineTo(-18.3,0.9).lineTo(-18.3,0.9).closePath().moveTo(42.5,10.3).curveTo(41.8,9.5,41.7,8.2).curveTo(41.8,6.9,42.5,6.1).curveTo(43.4,5.3,44.6,5.3).curveTo(46,5.3,46.8,6.1).curveTo(47.5,6.9,47.6,8.2).curveTo(47.5,9.5,46.8,10.3).curveTo(46,11.1,44.6,11.1).curveTo(43.3,11.1,42.5,10.3).closePath().moveTo(29.3,10.8).lineTo(29.3,-5).lineTo(34.2,-5.1).lineTo(34.2,-2.9).curveTo(34.8,-4.3,36,-4.8).curveTo(37,-5.3,38.8,-5.3).curveTo(39.5,-5.3,40.3,-5.1).lineTo(41.5,-4.7).lineTo(39.7,0.4).lineTo(38.8,-0).curveTo(38.4,-0.2,37.5,-0.2).curveTo(36,-0.2,35.2,0.6).curveTo(34.3,1.4,34.3,3).lineTo(34.3,10.8).closePath().moveTo(-47.6,10.8).lineTo(-47.6,-10.5).lineTo(-38.9,-10.5).curveTo(-35.1,-10.5,-33.1,-9).curveTo(-31.1,-7.5,-31.1,-4.4).curveTo(-31.1,-3,-31.7,-2).curveTo(-32.3,-0.9,-33.3,-0.2).curveTo(-32.1,0.5,-31.3,1.6).curveTo(-30.7,2.7,-30.7,4.4).curveTo(-30.7,7.7,-32.9,9.3).curveTo(-35.1,10.8,-38.9,10.8).closePath().moveTo(-42.3,6.2).lineTo(-39.2,6.2).curveTo(-37.6,6.2,-36.9,5.7).curveTo(-36.3,5.2,-36.2,4.2).curveTo(-36.2,3.2,-36.9,2.7).curveTo(-37.5,2.2,-39.2,2.2).lineTo(-42.3,2.2).closePath().moveTo(-42.4,-2.3).lineTo(-39,-2.3).curveTo(-37.6,-2.3,-37.1,-2.9).curveTo(-36.5,-3.4,-36.5,-4.3).curveTo(-36.5,-4.9,-37.1,-5.4).curveTo(-37.7,-5.9,-39.1,-5.9).lineTo(-42.4,-5.9).closePath();
	var mask_graphics_150 = new cjs.Graphics().moveTo(61.5,64).curveTo(60.7,63.2,60.7,61.9).curveTo(60.7,60.7,61.5,59.9).curveTo(62.3,59,63.6,59).curveTo(64.9,59,65.6,59.9).curveTo(66.4,60.7,66.4,61.9).curveTo(66.4,63.2,65.6,64).curveTo(64.9,64.8,63.6,64.8).curveTo(62.3,64.8,61.5,64).closePath().moveTo(35.5,64.1).curveTo(33.9,63.5,32.9,62.4).curveTo(31.8,61.3,31.2,59.8).curveTo(30.7,58.3,30.7,56.6).curveTo(30.7,55,31.3,53.5).curveTo(31.9,52,33,50.9).curveTo(34.1,49.7,35.6,49.1).curveTo(37.1,48.5,38.9,48.5).curveTo(40.7,48.5,42.2,49.1).curveTo(43.7,49.7,44.8,50.8).curveTo(45.9,51.9,46.4,53.4).curveTo(47,54.8,47,56.5).lineTo(47,58.2).lineTo(35.4,58.2).curveTo(35.8,59.5,36.7,60).curveTo(37.6,60.7,39,60.7).curveTo(40.1,60.7,40.9,60.2).curveTo(41.7,59.8,42.2,59).lineTo(46.2,61.3).curveTo(44.9,63,43.2,63.8).curveTo(41.6,64.7,38.9,64.7).curveTo(37,64.8,35.5,64.1).closePath().moveTo(42.2,54.6).curveTo(41.8,53.6,41,53).curveTo(40.1,52.6,38.9,52.6).curveTo(37.7,52.6,36.9,53.1).curveTo(36,53.6,35.5,54.6).lineTo(42.2,54.6).lineTo(42.2,54.6).closePath().moveTo(24.2,64.4).curveTo(23.2,64.1,22.5,63.4).curveTo(21.8,62.6,21.4,61.5).curveTo(21,60.2,21,58.5).lineTo(21,53.1).lineTo(18.3,53.1).lineTo(18.3,48.8).lineTo(21,48.8).lineTo(21,45.4).lineTo(25.8,42.7).lineTo(25.8,48.8).lineTo(29.7,48.8).lineTo(29.7,53.1).lineTo(25.8,53.1).lineTo(25.8,58.2).curveTo(25.8,59.4,26.2,59.8).curveTo(26.6,60.2,27.2,60.2).curveTo(27.9,60.2,28.5,59.7).lineTo(30.7,63.4).curveTo(29.8,64,28.8,64.4).curveTo(27.7,64.7,26.5,64.7).curveTo(25.2,64.7,24.2,64.4).closePath().moveTo(12,64.4).curveTo(11,64.1,10.3,63.4).curveTo(9.6,62.6,9.2,61.5).curveTo(8.9,60.2,8.9,58.5).lineTo(8.9,53.1).lineTo(6.2,53.1).lineTo(6.2,48.8).lineTo(8.9,48.8).lineTo(8.9,45.4).lineTo(13.7,42.7).lineTo(13.7,48.8).lineTo(17.5,48.8).lineTo(17.5,53.1).lineTo(13.7,53.1).lineTo(13.7,58.2).curveTo(13.7,59.4,14,59.8).curveTo(14.4,60.2,15.1,60.2).curveTo(15.7,60.2,16.3,59.7).lineTo(18.5,63.4).curveTo(17.7,64,16.6,64.4).curveTo(15.6,64.7,14.4,64.7).curveTo(13.1,64.7,12,64.4).closePath().moveTo(-6.1,64.1).curveTo(-7.6,63.5,-8.7,62.4).curveTo(-9.7,61.3,-10.3,59.8).curveTo(-10.9,58.3,-10.9,56.6).curveTo(-10.9,55,-10.3,53.5).curveTo(-9.6,52,-8.6,50.9).curveTo(-7.4,49.7,-5.9,49.1).curveTo(-4.4,48.5,-2.7,48.5).curveTo(-0.9,48.5,0.6,49.1).curveTo(2.1,49.7,3.2,50.8).curveTo(4.3,51.9,4.9,53.4).curveTo(5.5,54.8,5.5,56.5).lineTo(5.5,58.2).lineTo(-6.2,58.2).curveTo(-5.8,59.5,-4.8,60).curveTo(-3.9,60.7,-2.6,60.7).curveTo(-1.4,60.7,-0.6,60.2).curveTo(0.2,59.8,0.7,59).lineTo(4.6,61.3).curveTo(3.4,63,1.7,63.8).curveTo(0,64.7,-2.6,64.7).curveTo(-4.5,64.8,-6.1,64.1).closePath().moveTo(0.7,54.6).curveTo(0.3,53.6,-0.6,53).curveTo(-1.4,52.6,-2.6,52.6).curveTo(-3.8,52.6,-4.7,53.1).curveTo(-5.6,53.6,-6,54.6).lineTo(0.7,54.6).lineTo(0.7,54.6).closePath().moveTo(48.3,64.4).lineTo(48.3,48.8).lineTo(53.1,48.8).lineTo(53.1,51).curveTo(53.7,49.6,54.9,49).curveTo(56,48.5,57.5,48.5).curveTo(58.3,48.5,59,48.7).lineTo(60.2,49.1).lineTo(58.5,53.9).curveTo(58.1,53.7,57.5,53.5).curveTo(57,53.3,56.3,53.3).curveTo(54.8,53.3,54,54.1).curveTo(53.1,54.9,53.1,56.8).lineTo(53.1,64.4).closePath().moveTo(-28.5,64.4).lineTo(-28.5,43.3).lineTo(-20.1,43.3).curveTo(-16.2,43.3,-14.3,44.8).curveTo(-12.4,46.4,-12.4,49.3).curveTo(-12.4,50.8,-12.9,51.8).curveTo(-13.5,52.8,-14.5,53.5).curveTo(-13.3,54.2,-12.6,55.3).curveTo(-12,56.4,-12,58).curveTo(-12,61.3,-14.1,62.9).curveTo(-16.3,64.4,-20.1,64.4).closePath().moveTo(-23.5,60).lineTo(-20,60).curveTo(-18.5,60,-17.8,59.5).curveTo(-17.1,59,-17.1,57.9).curveTo(-17.1,56.9,-17.8,56.4).curveTo(-18.4,55.9,-20,55.9).lineTo(-23.5,55.9).closePath().moveTo(-23.5,51.5).lineTo(-19.8,51.5).curveTo(-18.5,51.5,-17.9,50.9).curveTo(-17.4,50.4,-17.4,49.5).curveTo(-17.4,48.6,-18,48.1).curveTo(-18.5,47.7,-19.9,47.7).lineTo(-23.5,47.7).closePath();
	var mask_graphics_151 = new cjs.Graphics().moveTo(63.4,64).curveTo(62.6,63.2,62.6,61.9).curveTo(62.6,60.7,63.4,59.9).curveTo(64.2,59,65.4,59).curveTo(66.7,59,67.5,59.9).curveTo(68.3,60.7,68.3,61.9).curveTo(68.3,63.2,67.5,64).curveTo(66.7,64.8,65.4,64.8).curveTo(64.1,64.8,63.4,64).closePath().moveTo(37.3,64.1).curveTo(35.8,63.5,34.7,62.4).curveTo(33.7,61.3,33.1,59.8).curveTo(32.5,58.3,32.5,56.6).curveTo(32.5,55,33.1,53.5).curveTo(33.8,52,34.8,50.9).curveTo(36,49.7,37.5,49.1).curveTo(39,48.5,40.7,48.5).curveTo(42.5,48.5,44,49.1).curveTo(45.5,49.7,46.6,50.8).curveTo(47.7,51.9,48.3,53.4).curveTo(48.9,54.8,48.9,56.5).lineTo(48.9,58.2).lineTo(37.2,58.2).curveTo(37.6,59.5,38.6,60).curveTo(39.5,60.7,40.8,60.7).curveTo(42,60.7,42.8,60.2).curveTo(43.6,59.8,44.1,59).lineTo(48,61.3).curveTo(46.8,63,45.1,63.8).curveTo(43.4,64.7,40.8,64.7).curveTo(38.9,64.8,37.3,64.1).closePath().moveTo(44.1,54.6).curveTo(43.7,53.6,42.8,53).curveTo(42,52.6,40.8,52.6).curveTo(39.6,52.6,38.7,53.1).curveTo(37.8,53.6,37.4,54.6).lineTo(44.1,54.6).lineTo(44.1,54.6).closePath().moveTo(26,64.4).curveTo(25,64.1,24.3,63.4).curveTo(23.6,62.6,23.2,61.5).curveTo(22.9,60.2,22.9,58.5).lineTo(22.9,53.1).lineTo(20.2,53.1).lineTo(20.2,48.8).lineTo(22.9,48.8).lineTo(22.9,45.4).lineTo(27.7,42.7).lineTo(27.7,48.8).lineTo(31.5,48.8).lineTo(31.5,53.1).lineTo(27.7,53.1).lineTo(27.7,58.2).curveTo(27.7,59.4,28,59.8).curveTo(28.4,60.2,29.1,60.2).curveTo(29.7,60.2,30.3,59.7).lineTo(32.5,63.4).curveTo(31.7,64,30.6,64.4).curveTo(29.6,64.7,28.4,64.7).curveTo(27.1,64.7,26,64.4).closePath().moveTo(13.9,64.4).curveTo(12.9,64.1,12.2,63.4).curveTo(11.5,62.6,11.1,61.5).curveTo(10.7,60.2,10.7,58.5).lineTo(10.7,53.1).lineTo(8,53.1).lineTo(8,48.8).lineTo(10.7,48.8).lineTo(10.7,45.4).lineTo(15.5,42.7).lineTo(15.5,48.8).lineTo(19.4,48.8).lineTo(19.4,53.1).lineTo(15.5,53.1).lineTo(15.5,58.2).curveTo(15.5,59.4,15.9,59.8).curveTo(16.3,60.2,16.9,60.2).curveTo(17.6,60.2,18.2,59.7).lineTo(20.4,63.4).curveTo(19.5,64,18.5,64.4).curveTo(17.4,64.7,16.2,64.7).curveTo(14.9,64.7,13.9,64.4).closePath().moveTo(-4.2,64.1).curveTo(-5.8,63.5,-6.8,62.4).curveTo(-7.9,61.3,-8.5,59.8).curveTo(-9,58.3,-9,56.6).curveTo(-9,55,-8.4,53.5).curveTo(-7.8,52,-6.7,50.9).curveTo(-5.6,49.7,-4.1,49.1).curveTo(-2.6,48.5,-0.8,48.5).curveTo(1,48.5,2.5,49.1).curveTo(4,49.7,5.1,50.8).curveTo(6.2,51.9,6.7,53.4).curveTo(7.3,54.8,7.3,56.5).lineTo(7.3,58.2).lineTo(-4.3,58.2).curveTo(-3.9,59.5,-3,60).curveTo(-2.1,60.7,-0.7,60.7).curveTo(0.4,60.7,1.2,60.2).curveTo(2,59.8,2.5,59).lineTo(6.5,61.3).curveTo(5.2,63,3.5,63.8).curveTo(1.9,64.7,-0.8,64.7).curveTo(-2.7,64.8,-4.2,64.1).closePath().moveTo(2.5,54.6).curveTo(2.1,53.6,1.3,53).curveTo(0.4,52.6,-0.8,52.6).curveTo(-2,52.6,-2.8,53.1).curveTo(-3.7,53.6,-4.2,54.6).lineTo(2.5,54.6).lineTo(2.5,54.6).closePath().moveTo(50.2,64.4).lineTo(50.2,48.8).lineTo(55,48.8).lineTo(55,51).curveTo(55.6,49.6,56.7,49).curveTo(57.8,48.5,59.4,48.5).curveTo(60.1,48.5,60.8,48.7).lineTo(62,49.1).lineTo(60.3,53.9).curveTo(60,53.7,59.4,53.5).curveTo(58.8,53.3,58.1,53.3).curveTo(56.7,53.3,55.8,54.1).curveTo(55,54.9,55,56.8).lineTo(55,64.4).closePath().moveTo(-26.6,64.4).lineTo(-26.6,43.3).lineTo(-18.2,43.3).curveTo(-14.4,43.3,-12.4,44.8).curveTo(-10.5,46.4,-10.5,49.3).curveTo(-10.5,50.8,-11.1,51.8).curveTo(-11.7,52.8,-12.7,53.5).curveTo(-11.4,54.2,-10.8,55.3).curveTo(-10.1,56.4,-10.1,58).curveTo(-10.1,61.3,-12.3,62.9).curveTo(-14.4,64.4,-18.2,64.4).closePath().moveTo(-21.7,60).lineTo(-18.1,60).curveTo(-16.6,60,-16,59.5).curveTo(-15.3,59,-15.3,57.9).curveTo(-15.3,56.9,-15.9,56.4).curveTo(-16.5,55.9,-18.2,55.9).lineTo(-21.7,55.9).closePath().moveTo(-21.7,51.5).lineTo(-18,51.5).curveTo(-16.6,51.5,-16.1,50.9).curveTo(-15.5,50.4,-15.5,49.5).curveTo(-15.5,48.6,-16.1,48.1).curveTo(-16.7,47.7,-18,47.7).lineTo(-21.7,47.7).closePath();
	var mask_graphics_152 = new cjs.Graphics().moveTo(68.9,64).curveTo(68.1,63.2,68.1,61.9).curveTo(68.1,60.7,68.9,59.9).curveTo(69.7,59,71,59).curveTo(72.3,59,73,59.9).curveTo(73.8,60.7,73.8,61.9).curveTo(73.8,63.2,73,64).curveTo(72.3,64.8,71,64.8).curveTo(69.7,64.8,68.9,64).closePath().moveTo(42.9,64.1).curveTo(41.3,63.5,40.3,62.4).curveTo(39.2,61.3,38.6,59.8).curveTo(38.1,58.3,38.1,56.6).curveTo(38.1,55,38.7,53.5).curveTo(39.3,52,40.4,50.9).curveTo(41.5,49.7,43,49.1).curveTo(44.5,48.5,46.3,48.5).curveTo(48.1,48.5,49.6,49.1).curveTo(51.1,49.7,52.2,50.8).curveTo(53.3,51.9,53.8,53.4).curveTo(54.4,54.8,54.4,56.5).lineTo(54.4,58.2).lineTo(42.8,58.2).curveTo(43.2,59.5,44.1,60).curveTo(45,60.7,46.4,60.7).curveTo(47.5,60.7,48.3,60.2).curveTo(49.1,59.8,49.6,59).lineTo(53.6,61.3).curveTo(52.3,63,50.6,63.8).curveTo(49,64.7,46.3,64.7).curveTo(44.4,64.8,42.9,64.1).closePath().moveTo(49.6,54.6).curveTo(49.2,53.6,48.4,53).curveTo(47.5,52.6,46.3,52.6).curveTo(45.1,52.6,44.3,53.1).curveTo(43.4,53.6,42.9,54.6).lineTo(49.6,54.6).lineTo(49.6,54.6).closePath().moveTo(31.6,64.4).curveTo(30.6,64.1,29.9,63.4).curveTo(29.2,62.6,28.8,61.5).curveTo(28.4,60.2,28.4,58.5).lineTo(28.4,53.1).lineTo(25.7,53.1).lineTo(25.7,48.8).lineTo(28.4,48.8).lineTo(28.4,45.4).lineTo(33.2,42.7).lineTo(33.2,48.8).lineTo(37.1,48.8).lineTo(37.1,53.1).lineTo(33.2,53.1).lineTo(33.2,58.2).curveTo(33.2,59.4,33.6,59.8).curveTo(34,60.2,34.6,60.2).curveTo(35.3,60.2,35.9,59.7).lineTo(38.1,63.4).curveTo(37.2,64,36.2,64.4).curveTo(35.1,64.7,33.9,64.7).curveTo(32.6,64.7,31.6,64.4).closePath().moveTo(19.4,64.4).curveTo(18.4,64.1,17.7,63.4).curveTo(17,62.6,16.6,61.5).curveTo(16.3,60.2,16.3,58.5).lineTo(16.3,53.1).lineTo(13.6,53.1).lineTo(13.6,48.8).lineTo(16.3,48.8).lineTo(16.3,45.4).lineTo(21.1,42.7).lineTo(21.1,48.8).lineTo(24.9,48.8).lineTo(24.9,53.1).lineTo(21.1,53.1).lineTo(21.1,58.2).curveTo(21.1,59.4,21.4,59.8).curveTo(21.8,60.2,22.5,60.2).curveTo(23.1,60.2,23.7,59.7).lineTo(25.9,63.4).curveTo(25.1,64,24,64.4).curveTo(23,64.7,21.8,64.7).curveTo(20.5,64.7,19.4,64.4).closePath().moveTo(1.3,64.1).curveTo(-0.2,63.5,-1.3,62.4).curveTo(-2.3,61.3,-2.9,59.8).curveTo(-3.5,58.3,-3.5,56.6).curveTo(-3.5,55,-2.9,53.5).curveTo(-2.2,52,-1.2,50.9).curveTo(-0,49.7,1.5,49.1).curveTo(3,48.5,4.7,48.5).curveTo(6.5,48.5,8,49.1).curveTo(9.5,49.7,10.6,50.8).curveTo(11.7,51.9,12.3,53.4).curveTo(12.9,54.8,12.9,56.5).lineTo(12.9,58.2).lineTo(1.2,58.2).curveTo(1.6,59.5,2.6,60).curveTo(3.5,60.7,4.8,60.7).curveTo(6,60.7,6.8,60.2).curveTo(7.6,59.8,8.1,59).lineTo(12,61.3).curveTo(10.8,63,9.1,63.8).curveTo(7.4,64.7,4.8,64.7).curveTo(2.9,64.8,1.3,64.1).closePath().moveTo(8.1,54.6).curveTo(7.7,53.6,6.8,53).curveTo(6,52.6,4.8,52.6).curveTo(3.6,52.6,2.7,53.1).curveTo(1.8,53.6,1.4,54.6).lineTo(8.1,54.6).lineTo(8.1,54.6).closePath().moveTo(55.7,64.4).lineTo(55.7,48.8).lineTo(60.5,48.8).lineTo(60.5,51).curveTo(61.1,49.6,62.3,49).curveTo(63.4,48.5,64.9,48.5).curveTo(65.7,48.5,66.4,48.7).lineTo(67.6,49.1).lineTo(65.9,53.9).curveTo(65.5,53.7,64.9,53.5).curveTo(64.4,53.3,63.7,53.3).curveTo(62.2,53.3,61.4,54.1).curveTo(60.5,54.9,60.5,56.8).lineTo(60.5,64.4).closePath().moveTo(-21.1,64.4).lineTo(-21.1,43.3).lineTo(-12.7,43.3).curveTo(-8.8,43.3,-6.9,44.8).curveTo(-5,46.4,-5,49.3).curveTo(-5,50.8,-5.5,51.8).curveTo(-6.1,52.8,-7.1,53.5).curveTo(-5.9,54.2,-5.2,55.3).curveTo(-4.6,56.4,-4.6,58).curveTo(-4.6,61.3,-6.7,62.9).curveTo(-8.9,64.4,-12.7,64.4).closePath().moveTo(-16.1,60).lineTo(-12.6,60).curveTo(-11.1,60,-10.4,59.5).curveTo(-9.7,59,-9.7,57.9).curveTo(-9.7,56.9,-10.4,56.4).curveTo(-11,55.9,-12.6,55.9).lineTo(-16.1,55.9).closePath().moveTo(-16.1,51.5).lineTo(-12.4,51.5).curveTo(-11.1,51.5,-10.5,50.9).curveTo(-10,50.4,-10,49.5).curveTo(-10,48.6,-10.6,48.1).curveTo(-11.1,47.7,-12.5,47.7).lineTo(-16.1,47.7).closePath();
	var mask_graphics_153 = new cjs.Graphics().moveTo(78.2,64).curveTo(77.4,63.2,77.4,61.9).curveTo(77.4,60.7,78.2,59.9).curveTo(79,59,80.2,59).curveTo(81.5,59,82.3,59.9).curveTo(83.1,60.7,83.1,61.9).curveTo(83.1,63.2,82.3,64).curveTo(81.5,64.8,80.2,64.8).curveTo(78.9,64.8,78.2,64).closePath().moveTo(52.1,64.1).curveTo(50.6,63.5,49.5,62.4).curveTo(48.5,61.3,47.9,59.8).curveTo(47.3,58.3,47.3,56.6).curveTo(47.3,55,47.9,53.5).curveTo(48.6,52,49.6,50.9).curveTo(50.8,49.7,52.3,49.1).curveTo(53.8,48.5,55.5,48.5).curveTo(57.3,48.5,58.8,49.1).curveTo(60.3,49.7,61.4,50.8).curveTo(62.5,51.9,63.1,53.4).curveTo(63.7,54.8,63.7,56.5).lineTo(63.7,58.2).lineTo(52,58.2).curveTo(52.4,59.5,53.4,60).curveTo(54.3,60.7,55.6,60.7).curveTo(56.8,60.7,57.6,60.2).curveTo(58.4,59.8,58.9,59).lineTo(62.8,61.3).curveTo(61.6,63,59.9,63.8).curveTo(58.2,64.7,55.6,64.7).curveTo(53.7,64.8,52.1,64.1).closePath().moveTo(58.9,54.6).curveTo(58.5,53.6,57.6,53).curveTo(56.8,52.6,55.6,52.6).curveTo(54.4,52.6,53.5,53.1).curveTo(52.6,53.6,52.2,54.6).lineTo(58.9,54.6).lineTo(58.9,54.6).closePath().moveTo(40.8,64.4).curveTo(39.8,64.1,39.1,63.4).curveTo(38.4,62.6,38,61.5).curveTo(37.7,60.2,37.7,58.5).lineTo(37.7,53.1).lineTo(35,53.1).lineTo(35,48.8).lineTo(37.7,48.8).lineTo(37.7,45.4).lineTo(42.5,42.7).lineTo(42.5,48.8).lineTo(46.3,48.8).lineTo(46.3,53.1).lineTo(42.5,53.1).lineTo(42.5,58.2).curveTo(42.5,59.4,42.8,59.8).curveTo(43.2,60.2,43.9,60.2).curveTo(44.5,60.2,45.1,59.7).lineTo(47.3,63.4).curveTo(46.5,64,45.4,64.4).curveTo(44.4,64.7,43.2,64.7).curveTo(41.9,64.7,40.8,64.4).closePath().moveTo(28.7,64.4).curveTo(27.7,64.1,27,63.4).curveTo(26.3,62.6,25.9,61.5).curveTo(25.5,60.2,25.5,58.5).lineTo(25.5,53.1).lineTo(22.8,53.1).lineTo(22.8,48.8).lineTo(25.5,48.8).lineTo(25.5,45.4).lineTo(30.3,42.7).lineTo(30.3,48.8).lineTo(34.2,48.8).lineTo(34.2,53.1).lineTo(30.3,53.1).lineTo(30.3,58.2).curveTo(30.3,59.4,30.7,59.8).curveTo(31.1,60.2,31.7,60.2).curveTo(32.4,60.2,33,59.7).lineTo(35.2,63.4).curveTo(34.3,64,33.3,64.4).curveTo(32.2,64.7,31,64.7).curveTo(29.7,64.7,28.7,64.4).closePath().moveTo(10.6,64.1).curveTo(9,63.5,8,62.4).curveTo(6.9,61.3,6.3,59.8).curveTo(5.8,58.3,5.8,56.6).curveTo(5.8,55,6.4,53.5).curveTo(7,52,8.1,50.9).curveTo(9.2,49.7,10.7,49.1).curveTo(12.2,48.5,14,48.5).curveTo(15.8,48.5,17.3,49.1).curveTo(18.8,49.7,19.9,50.8).curveTo(21,51.9,21.5,53.4).curveTo(22.1,54.8,22.1,56.5).lineTo(22.1,58.2).lineTo(10.5,58.2).curveTo(10.9,59.5,11.8,60).curveTo(12.7,60.7,14.1,60.7).curveTo(15.2,60.7,16,60.2).curveTo(16.8,59.8,17.3,59).lineTo(21.3,61.3).curveTo(20,63,18.3,63.8).curveTo(16.7,64.7,14,64.7).curveTo(12.1,64.8,10.6,64.1).closePath().moveTo(17.3,54.6).curveTo(16.9,53.6,16.1,53).curveTo(15.2,52.6,14,52.6).curveTo(12.8,52.6,12,53.1).curveTo(11.1,53.6,10.6,54.6).lineTo(17.3,54.6).lineTo(17.3,54.6).closePath().moveTo(65,64.4).lineTo(65,48.8).lineTo(69.8,48.8).lineTo(69.8,51).curveTo(70.4,49.6,71.5,49).curveTo(72.6,48.5,74.2,48.5).curveTo(74.9,48.5,75.6,48.7).lineTo(76.8,49.1).lineTo(75.1,53.9).curveTo(74.8,53.7,74.2,53.5).curveTo(73.6,53.3,72.9,53.3).curveTo(71.5,53.3,70.6,54.1).curveTo(69.8,54.9,69.8,56.8).lineTo(69.8,64.4).closePath().moveTo(-11.8,64.4).lineTo(-11.8,43.3).lineTo(-3.4,43.3).curveTo(0.4,43.3,2.4,44.8).curveTo(4.3,46.4,4.3,49.3).curveTo(4.3,50.8,3.7,51.8).curveTo(3.1,52.8,2.1,53.5).curveTo(3.4,54.2,4,55.3).curveTo(4.7,56.4,4.7,58).curveTo(4.7,61.3,2.5,62.9).curveTo(0.4,64.4,-3.4,64.4).closePath().moveTo(-6.9,60).lineTo(-3.3,60).curveTo(-1.8,60,-1.2,59.5).curveTo(-0.5,59,-0.5,57.9).curveTo(-0.5,56.9,-1.1,56.4).curveTo(-1.7,55.9,-3.4,55.9).lineTo(-6.9,55.9).closePath().moveTo(-6.9,51.5).lineTo(-3.2,51.5).curveTo(-1.8,51.5,-1.3,50.9).curveTo(-0.7,50.4,-0.7,49.5).curveTo(-0.7,48.6,-1.3,48.1).curveTo(-1.9,47.7,-3.2,47.7).lineTo(-6.9,47.7).closePath();
	var mask_graphics_154 = new cjs.Graphics().moveTo(91.2,64).curveTo(90.4,63.2,90.4,61.9).curveTo(90.4,60.7,91.2,59.9).curveTo(92,59,93.2,59).curveTo(94.5,59,95.3,59.9).curveTo(96.1,60.7,96.1,61.9).curveTo(96.1,63.2,95.3,64).curveTo(94.5,64.8,93.2,64.8).curveTo(91.9,64.8,91.2,64).closePath().moveTo(65.1,64.1).curveTo(63.6,63.5,62.5,62.4).curveTo(61.5,61.3,60.9,59.8).curveTo(60.3,58.3,60.3,56.6).curveTo(60.3,55,60.9,53.5).curveTo(61.6,52,62.6,50.9).curveTo(63.8,49.7,65.3,49.1).curveTo(66.8,48.5,68.5,48.5).curveTo(70.3,48.5,71.8,49.1).curveTo(73.3,49.7,74.4,50.8).curveTo(75.5,51.9,76.1,53.4).curveTo(76.7,54.8,76.7,56.5).lineTo(76.7,58.2).lineTo(65,58.2).curveTo(65.4,59.5,66.4,60).curveTo(67.3,60.7,68.6,60.7).curveTo(69.8,60.7,70.6,60.2).curveTo(71.4,59.8,71.9,59).lineTo(75.8,61.3).curveTo(74.6,63,72.9,63.8).curveTo(71.2,64.7,68.6,64.7).curveTo(66.7,64.8,65.1,64.1).closePath().moveTo(71.9,54.6).curveTo(71.5,53.6,70.6,53).curveTo(69.8,52.6,68.6,52.6).curveTo(67.4,52.6,66.5,53.1).curveTo(65.6,53.6,65.2,54.6).lineTo(71.9,54.6).lineTo(71.9,54.6).closePath().moveTo(53.8,64.4).curveTo(52.8,64.1,52.1,63.4).curveTo(51.4,62.6,51,61.5).curveTo(50.7,60.2,50.7,58.5).lineTo(50.7,53.1).lineTo(48,53.1).lineTo(48,48.8).lineTo(50.7,48.8).lineTo(50.7,45.4).lineTo(55.5,42.7).lineTo(55.5,48.8).lineTo(59.3,48.8).lineTo(59.3,53.1).lineTo(55.5,53.1).lineTo(55.5,58.2).curveTo(55.5,59.4,55.8,59.8).curveTo(56.2,60.2,56.9,60.2).curveTo(57.5,60.2,58.1,59.7).lineTo(60.3,63.4).curveTo(59.5,64,58.4,64.4).curveTo(57.4,64.7,56.2,64.7).curveTo(54.9,64.7,53.8,64.4).closePath().moveTo(41.7,64.4).curveTo(40.7,64.1,40,63.4).curveTo(39.3,62.6,38.9,61.5).curveTo(38.5,60.2,38.5,58.5).lineTo(38.5,53.1).lineTo(35.8,53.1).lineTo(35.8,48.8).lineTo(38.5,48.8).lineTo(38.5,45.4).lineTo(43.3,42.7).lineTo(43.3,48.8).lineTo(47.2,48.8).lineTo(47.2,53.1).lineTo(43.3,53.1).lineTo(43.3,58.2).curveTo(43.3,59.4,43.7,59.8).curveTo(44.1,60.2,44.7,60.2).curveTo(45.4,60.2,46,59.7).lineTo(48.2,63.4).curveTo(47.3,64,46.3,64.4).curveTo(45.2,64.7,44,64.7).curveTo(42.7,64.7,41.7,64.4).closePath().moveTo(23.6,64.1).curveTo(22,63.5,21,62.4).curveTo(19.9,61.3,19.3,59.8).curveTo(18.8,58.3,18.8,56.6).curveTo(18.8,55,19.4,53.5).curveTo(20,52,21.1,50.9).curveTo(22.2,49.7,23.7,49.1).curveTo(25.2,48.5,27,48.5).curveTo(28.8,48.5,30.3,49.1).curveTo(31.8,49.7,32.9,50.8).curveTo(34,51.9,34.5,53.4).curveTo(35.1,54.8,35.1,56.5).lineTo(35.1,58.2).lineTo(23.5,58.2).curveTo(23.9,59.5,24.8,60).curveTo(25.7,60.7,27.1,60.7).curveTo(28.2,60.7,29,60.2).curveTo(29.8,59.8,30.3,59).lineTo(34.3,61.3).curveTo(33,63,31.3,63.8).curveTo(29.7,64.7,27,64.7).curveTo(25.1,64.8,23.6,64.1).closePath().moveTo(30.3,54.6).curveTo(29.9,53.6,29.1,53).curveTo(28.2,52.6,27,52.6).curveTo(25.8,52.6,25,53.1).curveTo(24.1,53.6,23.6,54.6).lineTo(30.3,54.6).lineTo(30.3,54.6).closePath().moveTo(78,64.4).lineTo(78,48.8).lineTo(82.8,48.8).lineTo(82.8,51).curveTo(83.4,49.6,84.5,49).curveTo(85.6,48.5,87.2,48.5).curveTo(87.9,48.5,88.6,48.7).lineTo(89.8,49.1).lineTo(88.1,53.9).curveTo(87.8,53.7,87.2,53.5).curveTo(86.6,53.3,85.9,53.3).curveTo(84.5,53.3,83.6,54.1).curveTo(82.8,54.9,82.8,56.8).lineTo(82.8,64.4).closePath().moveTo(1.2,64.4).lineTo(1.2,43.3).lineTo(9.6,43.3).curveTo(13.4,43.3,15.4,44.8).curveTo(17.3,46.4,17.3,49.3).curveTo(17.3,50.8,16.7,51.8).curveTo(16.1,52.8,15.1,53.5).curveTo(16.4,54.2,17,55.3).curveTo(17.7,56.4,17.7,58).curveTo(17.7,61.3,15.5,62.9).curveTo(13.4,64.4,9.6,64.4).closePath().moveTo(6.1,60).lineTo(9.7,60).curveTo(11.2,60,11.8,59.5).curveTo(12.5,59,12.5,57.9).curveTo(12.5,56.9,11.9,56.4).curveTo(11.3,55.9,9.6,55.9).lineTo(6.1,55.9).closePath().moveTo(6.1,51.5).lineTo(9.8,51.5).curveTo(11.2,51.5,11.7,50.9).curveTo(12.3,50.4,12.3,49.5).curveTo(12.3,48.6,11.7,48.1).curveTo(11.1,47.7,9.8,47.7).lineTo(6.1,47.7).closePath();
	var mask_graphics_155 = new cjs.Graphics().moveTo(107.8,64).curveTo(107,63.2,107,61.9).curveTo(107,60.7,107.8,59.9).curveTo(108.6,59,109.9,59).curveTo(111.2,59,111.9,59.9).curveTo(112.7,60.7,112.7,61.9).curveTo(112.7,63.2,111.9,64).curveTo(111.2,64.8,109.9,64.8).curveTo(108.6,64.8,107.8,64).closePath().moveTo(81.8,64.1).curveTo(80.2,63.5,79.2,62.4).curveTo(78.1,61.3,77.5,59.8).curveTo(77,58.3,77,56.6).curveTo(77,55,77.6,53.5).curveTo(78.2,52,79.3,50.9).curveTo(80.4,49.7,81.9,49.1).curveTo(83.4,48.5,85.2,48.5).curveTo(87,48.5,88.5,49.1).curveTo(90,49.7,91.1,50.8).curveTo(92.2,51.9,92.7,53.4).curveTo(93.3,54.8,93.3,56.5).lineTo(93.3,58.2).lineTo(81.7,58.2).curveTo(82.1,59.5,83,60).curveTo(83.9,60.7,85.3,60.7).curveTo(86.4,60.7,87.2,60.2).curveTo(88,59.8,88.5,59).lineTo(92.5,61.3).curveTo(91.2,63,89.5,63.8).curveTo(87.9,64.7,85.2,64.7).curveTo(83.3,64.8,81.8,64.1).closePath().moveTo(88.5,54.6).curveTo(88.1,53.6,87.3,53).curveTo(86.4,52.6,85.2,52.6).curveTo(84,52.6,83.2,53.1).curveTo(82.3,53.6,81.8,54.6).lineTo(88.5,54.6).lineTo(88.5,54.6).closePath().moveTo(70.5,64.4).curveTo(69.5,64.1,68.8,63.4).curveTo(68.1,62.6,67.7,61.5).curveTo(67.3,60.2,67.3,58.5).lineTo(67.3,53.1).lineTo(64.6,53.1).lineTo(64.6,48.8).lineTo(67.3,48.8).lineTo(67.3,45.4).lineTo(72.1,42.7).lineTo(72.1,48.8).lineTo(76,48.8).lineTo(76,53.1).lineTo(72.1,53.1).lineTo(72.1,58.2).curveTo(72.1,59.4,72.5,59.8).curveTo(72.9,60.2,73.5,60.2).curveTo(74.2,60.2,74.8,59.7).lineTo(77,63.4).curveTo(76.1,64,75.1,64.4).curveTo(74,64.7,72.8,64.7).curveTo(71.5,64.7,70.5,64.4).closePath().moveTo(58.3,64.4).curveTo(57.3,64.1,56.6,63.4).curveTo(55.9,62.6,55.5,61.5).curveTo(55.2,60.2,55.2,58.5).lineTo(55.2,53.1).lineTo(52.5,53.1).lineTo(52.5,48.8).lineTo(55.2,48.8).lineTo(55.2,45.4).lineTo(60,42.7).lineTo(60,48.8).lineTo(63.8,48.8).lineTo(63.8,53.1).lineTo(60,53.1).lineTo(60,58.2).curveTo(60,59.4,60.3,59.8).curveTo(60.7,60.2,61.4,60.2).curveTo(62,60.2,62.6,59.7).lineTo(64.8,63.4).curveTo(64,64,62.9,64.4).curveTo(61.9,64.7,60.7,64.7).curveTo(59.4,64.7,58.3,64.4).closePath().moveTo(40.2,64.1).curveTo(38.7,63.5,37.6,62.4).curveTo(36.6,61.3,36,59.8).curveTo(35.4,58.3,35.4,56.6).curveTo(35.4,55,36,53.5).curveTo(36.7,52,37.7,50.9).curveTo(38.9,49.7,40.4,49.1).curveTo(41.9,48.5,43.6,48.5).curveTo(45.4,48.5,46.9,49.1).curveTo(48.4,49.7,49.5,50.8).curveTo(50.6,51.9,51.2,53.4).curveTo(51.8,54.8,51.8,56.5).lineTo(51.8,58.2).lineTo(40.1,58.2).curveTo(40.5,59.5,41.5,60).curveTo(42.4,60.7,43.7,60.7).curveTo(44.9,60.7,45.7,60.2).curveTo(46.5,59.8,47,59).lineTo(50.9,61.3).curveTo(49.7,63,48,63.8).curveTo(46.3,64.7,43.7,64.7).curveTo(41.8,64.8,40.2,64.1).closePath().moveTo(47,54.6).curveTo(46.6,53.6,45.7,53).curveTo(44.9,52.6,43.7,52.6).curveTo(42.5,52.6,41.6,53.1).curveTo(40.7,53.6,40.3,54.6).lineTo(47,54.6).lineTo(47,54.6).closePath().moveTo(94.6,64.4).lineTo(94.6,48.8).lineTo(99.4,48.8).lineTo(99.4,51).curveTo(100,49.6,101.2,49).curveTo(102.3,48.5,103.8,48.5).curveTo(104.6,48.5,105.3,48.7).lineTo(106.5,49.1).lineTo(104.8,53.9).curveTo(104.4,53.7,103.8,53.5).curveTo(103.3,53.3,102.6,53.3).curveTo(101.1,53.3,100.3,54.1).curveTo(99.4,54.9,99.4,56.8).lineTo(99.4,64.4).closePath().moveTo(17.8,64.4).lineTo(17.8,43.3).lineTo(26.2,43.3).curveTo(30.1,43.3,32,44.8).curveTo(33.9,46.4,33.9,49.3).curveTo(33.9,50.8,33.4,51.8).curveTo(32.8,52.8,31.8,53.5).curveTo(33,54.2,33.7,55.3).curveTo(34.3,56.4,34.3,58).curveTo(34.3,61.3,32.2,62.9).curveTo(30,64.4,26.2,64.4).closePath().moveTo(22.8,60).lineTo(26.3,60).curveTo(27.8,60,28.5,59.5).curveTo(29.2,59,29.2,57.9).curveTo(29.2,56.9,28.5,56.4).curveTo(27.9,55.9,26.3,55.9).lineTo(22.8,55.9).closePath().moveTo(22.8,51.5).lineTo(26.5,51.5).curveTo(27.8,51.5,28.4,50.9).curveTo(28.9,50.4,28.9,49.5).curveTo(28.9,48.6,28.3,48.1).curveTo(27.8,47.7,26.4,47.7).lineTo(22.8,47.7).closePath();
	var mask_graphics_156 = new cjs.Graphics().moveTo(128.2,64).curveTo(127.4,63.2,127.4,61.9).curveTo(127.4,60.7,128.2,59.9).curveTo(129,59,130.2,59).curveTo(131.5,59,132.3,59.9).curveTo(133.1,60.7,133.1,61.9).curveTo(133.1,63.2,132.3,64).curveTo(131.5,64.8,130.2,64.8).curveTo(128.9,64.8,128.2,64).closePath().moveTo(102.1,64.1).curveTo(100.6,63.5,99.5,62.4).curveTo(98.5,61.3,97.9,59.8).curveTo(97.3,58.3,97.3,56.6).curveTo(97.3,55,97.9,53.5).curveTo(98.6,52,99.6,50.9).curveTo(100.8,49.7,102.3,49.1).curveTo(103.8,48.5,105.5,48.5).curveTo(107.3,48.5,108.8,49.1).curveTo(110.3,49.7,111.4,50.8).curveTo(112.5,51.9,113.1,53.4).curveTo(113.7,54.8,113.7,56.5).lineTo(113.7,58.2).lineTo(102,58.2).curveTo(102.4,59.5,103.4,60).curveTo(104.3,60.7,105.6,60.7).curveTo(106.8,60.7,107.6,60.2).curveTo(108.4,59.8,108.9,59).lineTo(112.8,61.3).curveTo(111.6,63,109.9,63.8).curveTo(108.2,64.7,105.6,64.7).curveTo(103.7,64.8,102.1,64.1).closePath().moveTo(108.9,54.6).curveTo(108.5,53.6,107.6,53).curveTo(106.8,52.6,105.6,52.6).curveTo(104.4,52.6,103.5,53.1).curveTo(102.6,53.6,102.2,54.6).lineTo(108.9,54.6).lineTo(108.9,54.6).closePath().moveTo(90.8,64.4).curveTo(89.8,64.1,89.1,63.4).curveTo(88.4,62.6,88,61.5).curveTo(87.7,60.2,87.7,58.5).lineTo(87.7,53.1).lineTo(85,53.1).lineTo(85,48.8).lineTo(87.7,48.8).lineTo(87.7,45.4).lineTo(92.5,42.7).lineTo(92.5,48.8).lineTo(96.3,48.8).lineTo(96.3,53.1).lineTo(92.5,53.1).lineTo(92.5,58.2).curveTo(92.5,59.4,92.8,59.8).curveTo(93.2,60.2,93.9,60.2).curveTo(94.5,60.2,95.1,59.7).lineTo(97.3,63.4).curveTo(96.5,64,95.4,64.4).curveTo(94.4,64.7,93.2,64.7).curveTo(91.9,64.7,90.8,64.4).closePath().moveTo(78.7,64.4).curveTo(77.7,64.1,77,63.4).curveTo(76.3,62.6,75.9,61.5).curveTo(75.5,60.2,75.5,58.5).lineTo(75.5,53.1).lineTo(72.8,53.1).lineTo(72.8,48.8).lineTo(75.5,48.8).lineTo(75.5,45.4).lineTo(80.3,42.7).lineTo(80.3,48.8).lineTo(84.2,48.8).lineTo(84.2,53.1).lineTo(80.3,53.1).lineTo(80.3,58.2).curveTo(80.3,59.4,80.7,59.8).curveTo(81.1,60.2,81.7,60.2).curveTo(82.4,60.2,83,59.7).lineTo(85.2,63.4).curveTo(84.3,64,83.3,64.4).curveTo(82.2,64.7,81,64.7).curveTo(79.7,64.7,78.7,64.4).closePath().moveTo(60.6,64.1).curveTo(59,63.5,58,62.4).curveTo(56.9,61.3,56.3,59.8).curveTo(55.8,58.3,55.8,56.6).curveTo(55.8,55,56.4,53.5).curveTo(57,52,58.1,50.9).curveTo(59.2,49.7,60.7,49.1).curveTo(62.2,48.5,64,48.5).curveTo(65.8,48.5,67.3,49.1).curveTo(68.8,49.7,69.9,50.8).curveTo(71,51.9,71.5,53.4).curveTo(72.1,54.8,72.1,56.5).lineTo(72.1,58.2).lineTo(60.5,58.2).curveTo(60.9,59.5,61.8,60).curveTo(62.7,60.7,64.1,60.7).curveTo(65.2,60.7,66,60.2).curveTo(66.8,59.8,67.3,59).lineTo(71.3,61.3).curveTo(70,63,68.3,63.8).curveTo(66.7,64.7,64,64.7).curveTo(62.1,64.8,60.6,64.1).closePath().moveTo(67.3,54.6).curveTo(66.9,53.6,66.1,53).curveTo(65.2,52.6,64,52.6).curveTo(62.8,52.6,62,53.1).curveTo(61.1,53.6,60.6,54.6).lineTo(67.3,54.6).lineTo(67.3,54.6).closePath().moveTo(115,64.4).lineTo(115,48.8).lineTo(119.8,48.8).lineTo(119.8,51).curveTo(120.4,49.6,121.5,49).curveTo(122.6,48.5,124.2,48.5).curveTo(124.9,48.5,125.6,48.7).lineTo(126.8,49.1).lineTo(125.1,53.9).curveTo(124.8,53.7,124.2,53.5).curveTo(123.6,53.3,122.9,53.3).curveTo(121.5,53.3,120.6,54.1).curveTo(119.8,54.9,119.8,56.8).lineTo(119.8,64.4).closePath().moveTo(38.2,64.4).lineTo(38.2,43.3).lineTo(46.6,43.3).curveTo(50.4,43.3,52.4,44.8).curveTo(54.3,46.4,54.3,49.3).curveTo(54.3,50.8,53.7,51.8).curveTo(53.1,52.8,52.1,53.5).curveTo(53.4,54.2,54,55.3).curveTo(54.7,56.4,54.7,58).curveTo(54.7,61.3,52.5,62.9).curveTo(50.4,64.4,46.6,64.4).closePath().moveTo(43.1,60).lineTo(46.7,60).curveTo(48.2,60,48.8,59.5).curveTo(49.5,59,49.5,57.9).curveTo(49.5,56.9,48.9,56.4).curveTo(48.3,55.9,46.6,55.9).lineTo(43.1,55.9).closePath().moveTo(43.1,51.5).lineTo(46.8,51.5).curveTo(48.2,51.5,48.7,50.9).curveTo(49.3,50.4,49.3,49.5).curveTo(49.3,48.6,48.7,48.1).curveTo(48.1,47.7,46.8,47.7).lineTo(43.1,47.7).closePath();
	var mask_graphics_157 = new cjs.Graphics().moveTo(152.3,64).curveTo(151.5,63.2,151.5,61.9).curveTo(151.5,60.7,152.3,59.9).curveTo(153.1,59,154.3,59).curveTo(155.6,59,156.4,59.9).curveTo(157.2,60.7,157.2,61.9).curveTo(157.2,63.2,156.4,64).curveTo(155.6,64.8,154.3,64.8).curveTo(153,64.8,152.3,64).closePath().moveTo(126.2,64.1).curveTo(124.7,63.5,123.6,62.4).curveTo(122.6,61.3,122,59.8).curveTo(121.4,58.3,121.4,56.6).curveTo(121.4,55,122,53.5).curveTo(122.7,52,123.7,50.9).curveTo(124.9,49.7,126.4,49.1).curveTo(127.9,48.5,129.6,48.5).curveTo(131.4,48.5,132.9,49.1).curveTo(134.4,49.7,135.5,50.8).curveTo(136.6,51.9,137.2,53.4).curveTo(137.8,54.8,137.8,56.5).lineTo(137.8,58.2).lineTo(126.1,58.2).curveTo(126.5,59.5,127.5,60).curveTo(128.4,60.7,129.7,60.7).curveTo(130.9,60.7,131.7,60.2).curveTo(132.5,59.8,133,59).lineTo(136.9,61.3).curveTo(135.7,63,134,63.8).curveTo(132.3,64.7,129.7,64.7).curveTo(127.8,64.8,126.2,64.1).closePath().moveTo(133,54.6).curveTo(132.6,53.6,131.7,53).curveTo(130.9,52.6,129.7,52.6).curveTo(128.5,52.6,127.6,53.1).curveTo(126.7,53.6,126.3,54.6).lineTo(133,54.6).lineTo(133,54.6).closePath().moveTo(114.9,64.4).curveTo(113.9,64.1,113.2,63.4).curveTo(112.5,62.6,112.1,61.5).curveTo(111.8,60.2,111.8,58.5).lineTo(111.8,53.1).lineTo(109.1,53.1).lineTo(109.1,48.8).lineTo(111.8,48.8).lineTo(111.8,45.4).lineTo(116.6,42.7).lineTo(116.6,48.8).lineTo(120.4,48.8).lineTo(120.4,53.1).lineTo(116.6,53.1).lineTo(116.6,58.2).curveTo(116.6,59.4,116.9,59.8).curveTo(117.3,60.2,118,60.2).curveTo(118.6,60.2,119.2,59.7).lineTo(121.4,63.4).curveTo(120.6,64,119.5,64.4).curveTo(118.5,64.7,117.3,64.7).curveTo(116,64.7,114.9,64.4).closePath().moveTo(102.8,64.4).curveTo(101.8,64.1,101.1,63.4).curveTo(100.4,62.6,100,61.5).curveTo(99.6,60.2,99.6,58.5).lineTo(99.6,53.1).lineTo(96.9,53.1).lineTo(96.9,48.8).lineTo(99.6,48.8).lineTo(99.6,45.4).lineTo(104.4,42.7).lineTo(104.4,48.8).lineTo(108.3,48.8).lineTo(108.3,53.1).lineTo(104.4,53.1).lineTo(104.4,58.2).curveTo(104.4,59.4,104.8,59.8).curveTo(105.2,60.2,105.8,60.2).curveTo(106.5,60.2,107.1,59.7).lineTo(109.3,63.4).curveTo(108.4,64,107.4,64.4).curveTo(106.3,64.7,105.1,64.7).curveTo(103.8,64.7,102.8,64.4).closePath().moveTo(84.7,64.1).curveTo(83.1,63.5,82.1,62.4).curveTo(81,61.3,80.4,59.8).curveTo(79.9,58.3,79.9,56.6).curveTo(79.9,55,80.5,53.5).curveTo(81.1,52,82.2,50.9).curveTo(83.3,49.7,84.8,49.1).curveTo(86.3,48.5,88.1,48.5).curveTo(89.9,48.5,91.4,49.1).curveTo(92.9,49.7,94,50.8).curveTo(95.1,51.9,95.6,53.4).curveTo(96.2,54.8,96.2,56.5).lineTo(96.2,58.2).lineTo(84.6,58.2).curveTo(85,59.5,85.9,60).curveTo(86.8,60.7,88.2,60.7).curveTo(89.3,60.7,90.1,60.2).curveTo(90.9,59.8,91.4,59).lineTo(95.4,61.3).curveTo(94.1,63,92.4,63.8).curveTo(90.8,64.7,88.1,64.7).curveTo(86.2,64.8,84.7,64.1).closePath().moveTo(91.4,54.6).curveTo(91,53.6,90.2,53).curveTo(89.3,52.6,88.1,52.6).curveTo(86.9,52.6,86.1,53.1).curveTo(85.2,53.6,84.7,54.6).lineTo(91.4,54.6).lineTo(91.4,54.6).closePath().moveTo(139.1,64.4).lineTo(139.1,48.8).lineTo(143.9,48.8).lineTo(143.9,51).curveTo(144.5,49.6,145.6,49).curveTo(146.7,48.5,148.3,48.5).curveTo(149,48.5,149.7,48.7).lineTo(150.9,49.1).lineTo(149.2,53.9).curveTo(148.9,53.7,148.3,53.5).curveTo(147.7,53.3,147,53.3).curveTo(145.6,53.3,144.7,54.1).curveTo(143.9,54.9,143.9,56.8).lineTo(143.9,64.4).closePath().moveTo(62.3,64.4).lineTo(62.3,43.3).lineTo(70.7,43.3).curveTo(74.5,43.3,76.5,44.8).curveTo(78.4,46.4,78.4,49.3).curveTo(78.4,50.8,77.8,51.8).curveTo(77.2,52.8,76.2,53.5).curveTo(77.5,54.2,78.1,55.3).curveTo(78.8,56.4,78.8,58).curveTo(78.8,61.3,76.6,62.9).curveTo(74.5,64.4,70.7,64.4).closePath().moveTo(67.2,60).lineTo(70.8,60).curveTo(72.3,60,72.9,59.5).curveTo(73.6,59,73.6,57.9).curveTo(73.6,56.9,73,56.4).curveTo(72.4,55.9,70.7,55.9).lineTo(67.2,55.9).closePath().moveTo(67.2,51.5).lineTo(70.9,51.5).curveTo(72.3,51.5,72.8,50.9).curveTo(73.4,50.4,73.4,49.5).curveTo(73.4,48.6,72.8,48.1).curveTo(72.2,47.7,70.9,47.7).lineTo(67.2,47.7).closePath();
	var mask_graphics_158 = new cjs.Graphics().moveTo(180,64).curveTo(179.2,63.2,179.2,61.9).curveTo(179.2,60.7,180,59.9).curveTo(180.8,59,182.1,59).curveTo(183.4,59,184.1,59.9).curveTo(184.9,60.7,184.9,61.9).curveTo(184.9,63.2,184.1,64).curveTo(183.4,64.8,182.1,64.8).curveTo(180.8,64.8,180,64).closePath().moveTo(154,64.1).curveTo(152.4,63.5,151.4,62.4).curveTo(150.3,61.3,149.7,59.8).curveTo(149.2,58.3,149.2,56.6).curveTo(149.2,55,149.8,53.5).curveTo(150.4,52,151.5,50.9).curveTo(152.6,49.7,154.1,49.1).curveTo(155.6,48.5,157.4,48.5).curveTo(159.2,48.5,160.7,49.1).curveTo(162.2,49.7,163.3,50.8).curveTo(164.4,51.9,164.9,53.4).curveTo(165.5,54.8,165.5,56.5).lineTo(165.5,58.2).lineTo(153.9,58.2).curveTo(154.3,59.5,155.2,60).curveTo(156.1,60.7,157.5,60.7).curveTo(158.6,60.7,159.4,60.2).curveTo(160.2,59.8,160.7,59).lineTo(164.7,61.3).curveTo(163.4,63,161.7,63.8).curveTo(160.1,64.7,157.4,64.7).curveTo(155.5,64.8,154,64.1).closePath().moveTo(160.7,54.6).curveTo(160.3,53.6,159.5,53).curveTo(158.6,52.6,157.4,52.6).curveTo(156.2,52.6,155.4,53.1).curveTo(154.5,53.6,154,54.6).lineTo(160.7,54.6).lineTo(160.7,54.6).closePath().moveTo(142.7,64.4).curveTo(141.7,64.1,141,63.4).curveTo(140.3,62.6,139.9,61.5).curveTo(139.5,60.2,139.5,58.5).lineTo(139.5,53.1).lineTo(136.8,53.1).lineTo(136.8,48.8).lineTo(139.5,48.8).lineTo(139.5,45.4).lineTo(144.3,42.7).lineTo(144.3,48.8).lineTo(148.2,48.8).lineTo(148.2,53.1).lineTo(144.3,53.1).lineTo(144.3,58.2).curveTo(144.3,59.4,144.7,59.8).curveTo(145.1,60.2,145.7,60.2).curveTo(146.4,60.2,147,59.7).lineTo(149.2,63.4).curveTo(148.3,64,147.3,64.4).curveTo(146.2,64.7,145,64.7).curveTo(143.7,64.7,142.7,64.4).closePath().moveTo(130.5,64.4).curveTo(129.5,64.1,128.8,63.4).curveTo(128.1,62.6,127.7,61.5).curveTo(127.4,60.2,127.4,58.5).lineTo(127.4,53.1).lineTo(124.7,53.1).lineTo(124.7,48.8).lineTo(127.4,48.8).lineTo(127.4,45.4).lineTo(132.2,42.7).lineTo(132.2,48.8).lineTo(136,48.8).lineTo(136,53.1).lineTo(132.2,53.1).lineTo(132.2,58.2).curveTo(132.2,59.4,132.5,59.8).curveTo(132.9,60.2,133.6,60.2).curveTo(134.2,60.2,134.8,59.7).lineTo(137,63.4).curveTo(136.2,64,135.1,64.4).curveTo(134.1,64.7,132.9,64.7).curveTo(131.6,64.7,130.5,64.4).closePath().moveTo(112.4,64.1).curveTo(110.9,63.5,109.8,62.4).curveTo(108.8,61.3,108.2,59.8).curveTo(107.6,58.3,107.6,56.6).curveTo(107.6,55,108.2,53.5).curveTo(108.9,52,109.9,50.9).curveTo(111.1,49.7,112.6,49.1).curveTo(114.1,48.5,115.8,48.5).curveTo(117.6,48.5,119.1,49.1).curveTo(120.6,49.7,121.7,50.8).curveTo(122.8,51.9,123.4,53.4).curveTo(124,54.8,124,56.5).lineTo(124,58.2).lineTo(112.3,58.2).curveTo(112.7,59.5,113.7,60).curveTo(114.6,60.7,115.9,60.7).curveTo(117.1,60.7,117.9,60.2).curveTo(118.7,59.8,119.2,59).lineTo(123.1,61.3).curveTo(121.9,63,120.2,63.8).curveTo(118.5,64.7,115.9,64.7).curveTo(114,64.8,112.4,64.1).closePath().moveTo(119.2,54.6).curveTo(118.8,53.6,117.9,53).curveTo(117.1,52.6,115.9,52.6).curveTo(114.7,52.6,113.8,53.1).curveTo(112.9,53.6,112.5,54.6).lineTo(119.2,54.6).lineTo(119.2,54.6).closePath().moveTo(166.8,64.4).lineTo(166.8,48.8).lineTo(171.6,48.8).lineTo(171.6,51).curveTo(172.2,49.6,173.4,49).curveTo(174.5,48.5,176,48.5).curveTo(176.8,48.5,177.5,48.7).lineTo(178.7,49.1).lineTo(177,53.9).curveTo(176.6,53.7,176,53.5).curveTo(175.5,53.3,174.8,53.3).curveTo(173.3,53.3,172.5,54.1).curveTo(171.6,54.9,171.6,56.8).lineTo(171.6,64.4).closePath().moveTo(90,64.4).lineTo(90,43.3).lineTo(98.4,43.3).curveTo(102.3,43.3,104.2,44.8).curveTo(106.1,46.4,106.1,49.3).curveTo(106.1,50.8,105.6,51.8).curveTo(105,52.8,104,53.5).curveTo(105.2,54.2,105.9,55.3).curveTo(106.5,56.4,106.5,58).curveTo(106.5,61.3,104.4,62.9).curveTo(102.2,64.4,98.4,64.4).closePath().moveTo(95,60).lineTo(98.5,60).curveTo(100,60,100.7,59.5).curveTo(101.4,59,101.4,57.9).curveTo(101.4,56.9,100.7,56.4).curveTo(100.1,55.9,98.5,55.9).lineTo(95,55.9).closePath().moveTo(95,51.5).lineTo(98.7,51.5).curveTo(100,51.5,100.6,50.9).curveTo(101.1,50.4,101.1,49.5).curveTo(101.1,48.6,100.5,48.1).curveTo(100,47.7,98.6,47.7).lineTo(95,47.7).closePath();
	var mask_graphics_159 = new cjs.Graphics().moveTo(211.5,64).curveTo(210.7,63.2,210.7,61.9).curveTo(210.7,60.7,211.5,59.9).curveTo(212.3,59,213.6,59).curveTo(214.9,59,215.6,59.9).curveTo(216.4,60.7,216.4,61.9).curveTo(216.4,63.2,215.6,64).curveTo(214.9,64.8,213.6,64.8).curveTo(212.3,64.8,211.5,64).closePath().moveTo(185.5,64.1).curveTo(183.9,63.5,182.9,62.4).curveTo(181.8,61.3,181.2,59.8).curveTo(180.7,58.3,180.7,56.6).curveTo(180.7,55,181.3,53.5).curveTo(181.9,52,183,50.9).curveTo(184.1,49.7,185.6,49.1).curveTo(187.1,48.5,188.9,48.5).curveTo(190.7,48.5,192.2,49.1).curveTo(193.7,49.7,194.8,50.8).curveTo(195.9,51.9,196.4,53.4).curveTo(197,54.8,197,56.5).lineTo(197,58.2).lineTo(185.4,58.2).curveTo(185.8,59.5,186.7,60).curveTo(187.6,60.7,189,60.7).curveTo(190.1,60.7,190.9,60.2).curveTo(191.7,59.8,192.2,59).lineTo(196.2,61.3).curveTo(194.9,63,193.2,63.8).curveTo(191.6,64.7,188.9,64.7).curveTo(187,64.8,185.5,64.1).closePath().moveTo(192.2,54.6).curveTo(191.8,53.6,191,53).curveTo(190.1,52.6,188.9,52.6).curveTo(187.7,52.6,186.9,53.1).curveTo(186,53.6,185.5,54.6).lineTo(192.2,54.6).lineTo(192.2,54.6).closePath().moveTo(174.2,64.4).curveTo(173.2,64.1,172.5,63.4).curveTo(171.8,62.6,171.4,61.5).curveTo(171,60.2,171,58.5).lineTo(171,53.1).lineTo(168.3,53.1).lineTo(168.3,48.8).lineTo(171,48.8).lineTo(171,45.4).lineTo(175.8,42.7).lineTo(175.8,48.8).lineTo(179.7,48.8).lineTo(179.7,53.1).lineTo(175.8,53.1).lineTo(175.8,58.2).curveTo(175.8,59.4,176.2,59.8).curveTo(176.6,60.2,177.2,60.2).curveTo(177.9,60.2,178.5,59.7).lineTo(180.7,63.4).curveTo(179.8,64,178.8,64.4).curveTo(177.7,64.7,176.5,64.7).curveTo(175.2,64.7,174.2,64.4).closePath().moveTo(162,64.4).curveTo(161,64.1,160.3,63.4).curveTo(159.6,62.6,159.2,61.5).curveTo(158.9,60.2,158.9,58.5).lineTo(158.9,53.1).lineTo(156.2,53.1).lineTo(156.2,48.8).lineTo(158.9,48.8).lineTo(158.9,45.4).lineTo(163.7,42.7).lineTo(163.7,48.8).lineTo(167.5,48.8).lineTo(167.5,53.1).lineTo(163.7,53.1).lineTo(163.7,58.2).curveTo(163.7,59.4,164,59.8).curveTo(164.4,60.2,165.1,60.2).curveTo(165.7,60.2,166.3,59.7).lineTo(168.5,63.4).curveTo(167.7,64,166.6,64.4).curveTo(165.6,64.7,164.4,64.7).curveTo(163.1,64.7,162,64.4).closePath().moveTo(143.9,64.1).curveTo(142.4,63.5,141.3,62.4).curveTo(140.3,61.3,139.7,59.8).curveTo(139.1,58.3,139.1,56.6).curveTo(139.1,55,139.7,53.5).curveTo(140.4,52,141.4,50.9).curveTo(142.6,49.7,144.1,49.1).curveTo(145.6,48.5,147.3,48.5).curveTo(149.1,48.5,150.6,49.1).curveTo(152.1,49.7,153.2,50.8).curveTo(154.3,51.9,154.9,53.4).curveTo(155.5,54.8,155.5,56.5).lineTo(155.5,58.2).lineTo(143.8,58.2).curveTo(144.2,59.5,145.2,60).curveTo(146.1,60.7,147.4,60.7).curveTo(148.6,60.7,149.4,60.2).curveTo(150.2,59.8,150.7,59).lineTo(154.6,61.3).curveTo(153.4,63,151.7,63.8).curveTo(150,64.7,147.4,64.7).curveTo(145.5,64.8,143.9,64.1).closePath().moveTo(150.7,54.6).curveTo(150.3,53.6,149.4,53).curveTo(148.6,52.6,147.4,52.6).curveTo(146.2,52.6,145.3,53.1).curveTo(144.4,53.6,144,54.6).lineTo(150.7,54.6).lineTo(150.7,54.6).closePath().moveTo(198.3,64.4).lineTo(198.3,48.8).lineTo(203.1,48.8).lineTo(203.1,51).curveTo(203.7,49.6,204.9,49).curveTo(206,48.5,207.5,48.5).curveTo(208.3,48.5,209,48.7).lineTo(210.2,49.1).lineTo(208.5,53.9).curveTo(208.1,53.7,207.5,53.5).curveTo(207,53.3,206.3,53.3).curveTo(204.8,53.3,204,54.1).curveTo(203.1,54.9,203.1,56.8).lineTo(203.1,64.4).closePath().moveTo(121.5,64.4).lineTo(121.5,43.3).lineTo(129.9,43.3).curveTo(133.8,43.3,135.7,44.8).curveTo(137.6,46.4,137.6,49.3).curveTo(137.6,50.8,137.1,51.8).curveTo(136.5,52.8,135.5,53.5).curveTo(136.7,54.2,137.4,55.3).curveTo(138,56.4,138,58).curveTo(138,61.3,135.9,62.9).curveTo(133.7,64.4,129.9,64.4).closePath().moveTo(126.5,60).lineTo(130,60).curveTo(131.5,60,132.2,59.5).curveTo(132.9,59,132.9,57.9).curveTo(132.9,56.9,132.2,56.4).curveTo(131.6,55.9,130,55.9).lineTo(126.5,55.9).closePath().moveTo(126.5,51.5).lineTo(130.2,51.5).curveTo(131.5,51.5,132.1,50.9).curveTo(132.6,50.4,132.6,49.5).curveTo(132.6,48.6,132,48.1).curveTo(131.5,47.7,130.1,47.7).lineTo(126.5,47.7).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(64).to({graphics:mask_graphics_64,x:85.35,y:118.525}).wait(86).to({graphics:mask_graphics_150,x:66.425,y:64.8}).wait(1).to({graphics:mask_graphics_151,x:68.2769,y:64.8}).wait(1).to({graphics:mask_graphics_152,x:73.8324,y:64.8}).wait(1).to({graphics:mask_graphics_153,x:83.0917,y:64.8}).wait(1).to({graphics:mask_graphics_154,x:96.0546,y:64.8}).wait(1).to({graphics:mask_graphics_155,x:112.7213,y:64.8}).wait(1).to({graphics:mask_graphics_156,x:133.0917,y:64.8}).wait(1).to({graphics:mask_graphics_157,x:157.1657,y:64.8}).wait(1).to({graphics:mask_graphics_158,x:184.9435,y:64.8}).wait(1).to({graphics:mask_graphics_159,x:216.425,y:64.8}).wait(66));

	// better_mask
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.2,25.5).lineTo(-55.2,-25.5).curveTo(7.1,-25,6.9,-24.8).lineTo(46.8,16.8).lineTo(46.8,18).lineTo(51.3,22.6).lineTo(52.3,22.6).lineTo(55.2,25.5).closePath();
	this.shape_2.setTransform(-13.6,114.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.1,25.5).lineTo(-55.1,-25.5).curveTo(7,-25,6.9,-24.8).lineTo(7,-24.6).lineTo(46.8,16.8).lineTo(47,17.9).lineTo(51.4,22.5).lineTo(52.4,22.6).lineTo(55,25.2).lineTo(55.1,25.5).closePath();
	this.shape_3.setTransform(3.175,114.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55,25.5).lineTo(-55.1,25.4).lineTo(-55.1,-25.5).curveTo(6.8,-25,6.9,-24.8).lineTo(46.8,16.8).lineTo(47,17.8).lineTo(51.5,22.4).lineTo(52.5,22.7).lineTo(55.1,25.3).lineTo(55.1,25.5).closePath();
	this.shape_4.setTransform(18.2,114.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.1,25.5).lineTo(-55.1,25.4).lineTo(-55.1,-25.5).curveTo(6.6,-25,6.9,-24.8).lineTo(46.7,16.7).lineTo(47.2,17.8).lineTo(51.6,22.3).lineTo(52.5,22.7).lineTo(55.1,25.3).lineTo(55,25.5).closePath();
	this.shape_5.setTransform(31.5,114.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.1,25.5).lineTo(-55.1,25.4).lineTo(-55.1,-25.5).curveTo(6.5,-25,7,-24.8).lineTo(46.7,16.6).lineTo(47.2,17.7).lineTo(51.7,22.3).lineTo(52.5,22.7).lineTo(55.1,25.4).lineTo(54.9,25.5).closePath();
	this.shape_6.setTransform(43,114.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.1,25.5).lineTo(-55.1,-25.5).curveTo(6.3,-25,6.9,-24.8).lineTo(6.9,-24.7).lineTo(46.7,16.6).lineTo(47.3,17.7).lineTo(51.7,22.2).lineTo(52.5,22.8).lineTo(55.1,25.4).lineTo(54.9,25.5).closePath();
	this.shape_7.setTransform(52.775,114.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.1,25.5).lineTo(-55.1,-25.5).curveTo(6.2,-25,6.9,-24.8).lineTo(46.6,16.6).lineTo(47.3,17.6).lineTo(55.1,25.4).lineTo(54.8,25.5).closePath();
	this.shape_8.setTransform(60.725,114.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.1,25.5).lineTo(-55.1,-25.5).curveTo(6.1,-25,6.9,-24.8).lineTo(46.6,16.6).lineTo(47.4,17.5).lineTo(55.1,25.4).lineTo(54.8,25.5).closePath();
	this.shape_9.setTransform(66.925,114.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.2,25.5).lineTo(-55.2,-25.5).curveTo(6,-25,6.9,-24.8).lineTo(55.2,25.5).closePath();
	this.shape_10.setTransform(71.35,114.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.2,25.5).lineTo(-55.2,-25.5).curveTo(6.1,-25,6.9,-24.8).lineTo(55.1,25.5).closePath();
	this.shape_11.setTransform(74,114.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.2,25.5).lineTo(-55.2,-25.5).curveTo(7.2,-25,6.9,-24.8).lineTo(55.2,25.5).closePath();
	this.shape_12.setTransform(74.9,114.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.1,25.5).lineTo(-55.1,-25.5).curveTo(7.2,-25,6.9,-24.8).lineTo(55.1,25.5).closePath();
	this.shape_13.setTransform(74.4,114.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.2,25.5).lineTo(-55.2,-25.5).curveTo(7.1,-25,6.9,-24.8).lineTo(55.2,25.5).closePath();
	this.shape_14.setTransform(89.2,114.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.2,25.5).lineTo(-55.2,-25.5).curveTo(7.2,-25,6.9,-24.8).lineTo(55.1,25.5).closePath();
	this.shape_15.setTransform(107.75,114.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFB71B").beginStroke().moveTo(-55.1,25.5).lineTo(-55.1,-25.5).curveTo(7.1,-25,6.9,-24.8).lineTo(55.1,25.5).closePath();
	this.shape_16.setTransform(167,114.25);
	this.shape_16._off = true;

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},64).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12,p:{x:74.9}}]},1).to({state:[{t:this.shape_13}]},76).to({state:[{t:this.shape_12,p:{x:78.1}}]},1).to({state:[{t:this.shape_14,p:{x:89.2}}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14,p:{x:133.65}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_14,p:{x:374.4}}]},1).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(155).to({_off:false},0).wait(1).to({x:207.75},0).wait(1).to({x:255.9},0).wait(1).to({x:311.45},0).to({_off:true},1).wait(66));

	// txt_better
	this.instance_6 = new lib.txt_better();
	this.instance_6.setTransform(84.8,119.1,1,1,0,0,0,81.4,21.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(55).to({_off:false},0).to({alpha:1},9).wait(86).to({x:384.8,alpha:0},9,cjs.Ease.quadIn).wait(66));

	// txt_believeIt
	this.instance_7 = new lib.txt_believeIt();
	this.instance_7.setTransform(205.75,118.9,1,1,0,0,0,81.4,22.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(106).to({_off:false},0).to({alpha:1},9,cjs.Ease.quadOut).wait(35).to({x:505.75,alpha:0},9,cjs.Ease.quadIn).wait(66));

	// image_01
	this.instance_8 = new lib.image_01_1();
	this.instance_8.setTransform(150,819,1,1,0,0,0,150,217);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:383},14,cjs.Ease.quadInOut).wait(32).to({y:823,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(169));

	// image_02
	this.instance_9 = new lib.image_02_1();
	this.instance_9.setTransform(150,819,1,1,0,0,0,150,217);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(51).to({_off:false},0).to({y:383},14,cjs.Ease.quadInOut).wait(32).to({y:823,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(118));

	// image_03
	this.instance_10 = new lib.image_03_1();
	this.instance_10.setTransform(150,819,1,1,0,0,0,150,217);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(101).to({_off:false},0).to({y:383},14,cjs.Ease.quadInOut).wait(32).to({y:823,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(68));

	// background_color
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-254.1,338.1).lineTo(-254.1,-338.1).lineTo(254.1,-338.1).lineTo(254.1,338.1).closePath();
	this.shape_17.setTransform(149.9863,299.9941,0.5904,0.8874);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(225));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,425.20000000000005,741);
// library properties:
lib.properties = {
	id: '4CB3FE4512EC4F04AD1A078CE62F288A',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"image_01.jpg?1620231492830", id:"image_01"},
		{src:"image_02.jpg?1620231492830", id:"image_02"},
		{src:"image_03.jpg?1620231492830", id:"image_03"}
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
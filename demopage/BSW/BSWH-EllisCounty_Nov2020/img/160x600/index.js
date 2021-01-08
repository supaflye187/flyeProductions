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



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,86);


(lib.bottom_shadow = function() {
	this.initialize(img.bottom_shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,283,82);


(lib.gradient_background = function() {
	this.initialize(img.gradient_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,364);// helper functions:

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


(lib.yellow_bubble = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5B846").s().p("AglA8QhfgvAAhpICBAAIAAAYQADAcAJAZQAeBQBaATQAEABAAAEQgBAEgEAAQhkgBhBggg");
	this.shape.setTransform(41.6028,18.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5B846").s().p("AnIC3QgmAAgbgbQgbgbAAgmIAAi0QAAgnAbgbQAbgbAmAAIORAAQAmAAAbAbQAbAcAAAmIAAC0QAAAmgbAbQgbAbgmAAg");
	this.shape_1.setTransform(0,-9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellow_bubble, new cjs.Rectangle(-54.9,-27.5,109.8,55.1), null);


(lib.stethascope_02_wht = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(18.4,1).p("AAAjMIAAGZ");
	this.shape.setTransform(0,-17.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(18.4).p("AAAg+IAAB9");
	this.shape_1.setTransform(0,9.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah6B6QgygzAAhHQAAhHAygzQA0gyBGAAIAAB+IAAh+QBIAAAyAyQAzAzAABHQAABHgzAzQgyAzhIAAQhGAAg0gzgAAAisg");
	this.shape_2.setTransform(0.025,20.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(17));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,-47,34.5,84.8);


(lib.stethascope_02_blue = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#113FA0").ss(18.4,1).p("AAAjMIAAGZ");
	this.shape.setTransform(0,-17.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#113FA0").ss(18.4).p("AAAg+IAAB9");
	this.shape_1.setTransform(0,9.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#113FA0").s().p("Ah6B6QgygzAAhHQAAhHAygzQA0gyBGAAQBIAAAyAyQAzAzAABHQAABHgzAzQgyAzhIAAQhGAAg0gzgAAAguIAAh+g");
	this.shape_2.setTransform(0.025,20.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stethascope_02_blue, new cjs.Rectangle(-17.2,-47,34.5,84.8), null);


(lib.stethascope_01_wht = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(18.4).p("ACwDOIAAimQAAg6gzguQg1gxhLAAQhPAAgxAxQgsAsAAA8IAACm");
	this.shape.setTransform(0,10.4247);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(14).p("AkLAAIDbAAAApAAIDjAA");
	this.shape_1.setTransform(0,34.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(18.4,1).p("AAAhwIAADh");
	this.shape_2.setTransform(-0.35,-23.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stethascope_01_wht, new cjs.Rectangle(-33.7,-43.7,67.5,85.30000000000001), null);


(lib.stethascope_01_blue = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#113FA0").ss(18.4).p("ACwDOIAAimQAAg6gzguQg1gxhLAAQhPAAgxAxQgsAsAAA8IAACm");
	this.shape.setTransform(0,10.4247);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#113FA0").ss(14).p("AkLAAIDbAAAApAAIDjAA");
	this.shape_1.setTransform(0,34.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#113FA0").ss(18.4,1).p("AAAhwIAADh");
	this.shape_2.setTransform(-0.35,-23.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stethascope_01_blue, new cjs.Rectangle(-33.7,-43.7,67.5,85.30000000000001), null);


(lib.sm_blue_bubble = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1140A0").s().p("AlpEPQAAgDAEgBQBagTAehRQAKgaADgcIABgWIgyAAQgmAAgbgbQgbgbAAglIAAi2QAAgmAbgbQAbgbAmAAIIjAAQAmAAAbAbQAbAbAAAmIAAC2QAAAlgbAbQgbAbgmAAIlwAAQgBBphfAuQhCAghkABQgEAAgBgEg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sm_blue_bubble, new cjs.Rectangle(-36.6,-27.5,73.2,55.1), null);


(lib.shdow_bitmap = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bottom_shadow();
	this.instance.setTransform(-96.85,-28.05,0.6844,0.6844);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shdow_bitmap, new cjs.Rectangle(-96.8,-28,193.7,56.1), null);


(lib.results_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Yellow_bar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5B846").s().p("AjClUIGCAAIADEoImBGBg");
	this.shape.setTransform(233.05,209.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5B846").s().p("AjAldIGABZIABE6Il+Eog");
	this.shape_1.setTransform(221.275,172.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5B846").s().p("Ai/lkIF+ClIABFLIl8DZg");
	this.shape_2.setTransform(211.075,140.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5B846").s().p("Ai9lrIF7DmIAAFaIl6CXg");
	this.shape_3.setTransform(202.45,113.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5B846").s().p("Ai9lxIF6EcIABFlIl5Big");
	this.shape_4.setTransform(195.375,91.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5B846").s().p("Ai8l1IF5FFIAAFuIl3A4g");
	this.shape_5.setTransform(189.875,74.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5B846").s().p("Ai7l4IF4FiIAAF1Il3Aag");
	this.shape_6.setTransform(185.95,62.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5B846").s().p("Ai7l6IF3F0IAAF6Il2AHg");
	this.shape_7.setTransform(183.625,55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5B846").s().p("Ai7l7IF3F6IAAF7Il2ACg");
	this.shape_8.setTransform(182.825,52.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},36).to({state:[]},1).wait(3));

	// Layer_18
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1140A0").ss(18.4).p("AAAwrMAAAAhX");
	this.shape_9.setTransform(9.2,136.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1140A0").ss(18.4).p("AAAQsMAAAghX");
	this.shape_10.setTransform(16.45,136.1);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{x:9.2}}]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9,p:{x:40.2}}]},1).to({state:[{t:this.shape_9,p:{x:40.2}}]},36).to({state:[]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1).to({_off:false},0).wait(1).to({x:22.75},0).wait(1).to({x:28.1},0).wait(1).to({x:32.45},0).wait(1).to({x:35.85},0).wait(1).to({x:38.25},0).wait(1).to({x:39.7},0).to({_off:true},1).wait(40));

	// Layer_19
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#1140A0").ss(18.4).p("AAALZIAA2x");
	this.shape_11.setTransform(242.75,102.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1140A0").ss(18.4).p("AAAxfMAAAAi/");
	this.shape_12.setTransform(230.95,130.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1140A0").ss(18.4).p("AAARnMAAAgjN");
	this.shape_13.setTransform(219.9,130.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#1140A0").ss(18.4).p("AAAxpMAAAAjT");
	this.shape_14.setTransform(210.8,130.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#1140A0").ss(18.4).p("AAARvMAAAgjd");
	this.shape_15.setTransform(203.9,129.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1140A0").ss(18.4).p("AAAtcIAAa5");
	this.shape_16.setTransform(198.95,156.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#1140A0").ss(18.4).p("AAAOUIAA8n");
	this.shape_17.setTransform(195.6,151.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#1140A0").ss(18.4).p("AAAtaIAAa1");
	this.shape_18.setTransform(193.45,157);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#1140A0").ss(18.4).p("AAAL8IAA33");
	this.shape_19.setTransform(192.35,161.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},36).to({state:[]},1).wait(3));

	// Layer_3
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1140A0").ss(18.4).p("Av+AAIf9AA");
	this.shape_20.setTransform(111.525,233.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#1140A0").ss(18.4).p("AxkAAMAjJAAA");
	this.shape_21.setTransform(127.45,233.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1140A0").ss(18.4).p("AwSAAMAglAAA");
	this.shape_22.setTransform(124.625,233.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1140A0").ss(18.4).p("AvPAAIefAA");
	this.shape_23.setTransform(122.325,233.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1140A0").ss(18.4).p("AucAAIc4AA");
	this.shape_24.setTransform(120.55,233.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#1140A0").ss(18.4).p("At3AAIbvAA");
	this.shape_25.setTransform(119.3,233.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#1140A0").ss(18.4).p("AteAAIa9AA");
	this.shape_26.setTransform(118.45,233.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#1140A0").ss(18.4).p("AtPAAIafAA");
	this.shape_27.setTransform(117.9,233.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#1140A0").ss(18.4).p("AtGAAIaNAA");
	this.shape_28.setTransform(117.625,233.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},36).to({state:[]},1).wait(3));

	// calendar_holder_rt
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#1140A0").ss(18.4).p("AAACiIAAlD");
	this.shape_29.setTransform(194.1,16.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#1140A0").ss(18.4).p("AAAihIAAFD");
	this.shape_30.setTransform(194.1,28.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29,p:{y:16.225}}]}).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29,p:{y:33.225}}]},1).to({state:[]},1).wait(45));

	// calendar_holder_lt
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#1140A0").ss(18.4).p("AAACiIAAlD");
	this.shape_31.setTransform(57.9,16.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#1140A0").ss(18.4).p("AAAihIAAFD");
	this.shape_32.setTransform(57.9,28.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31,p:{y:16.225}}]}).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31,p:{y:33.225}}]},1).to({state:[]},1).wait(45));

	// top_square
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1140A0").s().p("AiRCSIAAkjIEjAAIAAEjg");
	this.shape_33.setTransform(52.975,92.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1140A0").s().p("AiDCFIAAkJIEHAAIAAEJg");
	this.shape_34.setTransform(59.675,99.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1140A0").s().p("Ah4B5IAAjxIDxAAIAADxg");
	this.shape_35.setTransform(65.325,105.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1140A0").s().p("AhvBwIAAjfIDeAAIAADfg");
	this.shape_36.setTransform(69.95,110.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1140A0").s().p("AhnBoIAAjPIDPAAIAADPg");
	this.shape_37.setTransform(73.575,114.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1140A0").s().p("AhiBjIAAjFIDFAAIAADFg");
	this.shape_38.setTransform(76.15,116.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1140A0").s().p("AhfBgIAAi/IC/AAIAAC/g");
	this.shape_39.setTransform(77.7,118.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1140A0").s().p("AheBfIAAi9IC9AAIAAC9g");
	this.shape_40.setTransform(78.2,119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33}]}).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},37).to({state:[]},1).wait(3));

	// middle_square
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_41.setTransform(53.025,141.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1140A0").s().p("AiECGIAAkLIEJAAIAAELg");
	this.shape_42.setTransform(59.775,145.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1140A0").s().p("Ah5B6IAAjzIDzAAIAADzg");
	this.shape_43.setTransform(65.475,148.95);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1140A0").s().p("AhvBwIAAjgIDfAAIAADgg");
	this.shape_44.setTransform(70.125,151.85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1140A0").s().p("AhoBpIAAjRIDRAAIAADRg");
	this.shape_45.setTransform(73.75,154.125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1140A0").s().p("AhjBkIAAjHIDHAAIAADHg");
	this.shape_46.setTransform(76.35,155.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1140A0").s().p("AhgBhIAAjBIDBAAIAADBg");
	this.shape_47.setTransform(77.925,156.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1140A0").s().p("AhfBgIAAi/IC/AAIAAC/g");
	this.shape_48.setTransform(78.425,157.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41}]}).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},37).to({state:[]},1).wait(3));

	// bottom_square
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_49.setTransform(53.025,189.825);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1140A0").s().p("AiECFIAAkJIEJAAIAAEJg");
	this.shape_50.setTransform(59.725,191.25);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1140A0").s().p("Ah5B6IAAjzIDzAAIAADzg");
	this.shape_51.setTransform(65.4,192.425);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1140A0").s().p("AhwBxIAAjhIDhAAIAADhg");
	this.shape_52.setTransform(70.025,193.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1140A0").s().p("AhpBqIAAjTIDTAAIAADTg");
	this.shape_53.setTransform(73.65,194.175);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1140A0").s().p("AhjBlIAAjJIDHAAIAADJg");
	this.shape_54.setTransform(76.225,194.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1140A0").s().p("AhgBiIAAjCIDBAAIAADCg");
	this.shape_55.setTransform(77.775,195.05);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1140A0").s().p("AhfBhIAAjBIC/AAIAADBg");
	this.shape_56.setTransform(78.275,195.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49}]}).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},37).to({state:[]},1).wait(3));

	// top_line
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_57.setTransform(101.625,92.425);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1140A0").s().p("AjFCFIAAkJIGKAAIABEJg");
	this.shape_58.setTransform(109.25,99.475);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1140A0").s().p("AjwB6IAAjzIHhAAIAADzg");
	this.shape_59.setTransform(115.7,105.425);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1140A0").s().p("AkTBwIgBjfIIoAAIABDfg");
	this.shape_60.setTransform(120.975,110.275);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1140A0").s().p("AkuBpIgBjRIJeAAIABDRg");
	this.shape_61.setTransform(125.075,114.075);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1140A0").s().p("AlCBkIgBjHIKGAAIABDHg");
	this.shape_62.setTransform(128.025,116.775);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1140A0").s().p("AlOBhIAAjBIKcAAIABDBg");
	this.shape_63.setTransform(129.75,118.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1140A0").s().p("AlSBgIgBi+IKlAAIACC+g");
	this.shape_64.setTransform(130.35,118.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57}]}).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},37).to({state:[]},1).wait(3));

	// middle_line
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_65.setTransform(101.75,141.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1140A0").s().p("AjFCGIAAkLIGLAAIAAELg");
	this.shape_66.setTransform(109.35,145.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1140A0").s().p("AjwB6IAAjzIHhAAIAADzg");
	this.shape_67.setTransform(115.825,148.95);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1140A0").s().p("AkUBxIAAjhIIpAAIAADhg");
	this.shape_68.setTransform(121.075,151.875);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1140A0").s().p("AkvBqIAAjTIJfAAIAADTg");
	this.shape_69.setTransform(125.175,154.125);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1140A0").s().p("AlDBkIAAjHIKHAAIAADHg");
	this.shape_70.setTransform(128.125,155.725);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#1140A0").s().p("AlPBhIAAjBIKfAAIAADBg");
	this.shape_71.setTransform(129.85,156.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1140A0").s().p("AlTBgIAAi/IKnAAIAAC/g");
	this.shape_72.setTransform(130.45,157.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65}]}).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_72}]},37).to({state:[]},1).wait(3));

	// bottom_line
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_73.setTransform(101.75,189.825);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1140A0").s().p("AjFCGIAAkLIGLAAIAAELg");
	this.shape_74.setTransform(109.4,191.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#1140A0").s().p("AjwB6IAAjzIHhAAIAADzg");
	this.shape_75.setTransform(115.875,192.325);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1140A0").s().p("AkTBxIAAjhIInAAIAADhg");
	this.shape_76.setTransform(121.15,193.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1140A0").s().p("AkvBqIAAjTIJfAAIAADTg");
	this.shape_77.setTransform(125.275,194.025);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1140A0").s().p("AlDBlIAAjJIKHAAIAADJg");
	this.shape_78.setTransform(128.225,194.55);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#1140A0").s().p("AlOBiIAAjDIKdAAIAADDg");
	this.shape_79.setTransform(129.975,194.875);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#1140A0").s().p("AlSBhIAAjBIKlAAIAADBg");
	this.shape_80.setTransform(130.575,194.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73}]}).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},37).to({state:[]},1).wait(3));

	// Layer_6
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_81.setTransform(198.975,141.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#1140A0").s().p("AhSBTIAAilIClAAIAAClg");
	this.shape_82.setTransform(198.95,141.225);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1140A0").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape_83.setTransform(198.975,141.225);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#1140A0").s().p("AgfAgIAAg/IA/AAIAAA/g");
	this.shape_84.setTransform(198.95,141.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81}]}).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[]},1).wait(44));

	// Layer_7
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_85.setTransform(150.325,189.825);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1140A0").s().p("AhUBVIAAiqICqAAIAACqg");
	this.shape_86.setTransform(150.35,189.85);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#1140A0").s().p("AgwAxIAAhhIBhAAIAABhg");
	this.shape_87.setTransform(150.325,189.825);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#1140A0").s().p("AgkAlIAAhIIBIAAIAABIg");
	this.shape_88.setTransform(150.35,189.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85}]}).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[]},1).wait(44));

	// Layer_10
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_89.setTransform(150.325,141.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#1140A0").s().p("AhVBWIAAirICrAAIAACrg");
	this.shape_90.setTransform(150.325,141.225);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#1140A0").s().p("AgwAxIAAhhIBhAAIAABhg");
	this.shape_91.setTransform(150.35,141.225);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#1140A0").s().p("AgkAlIAAhJIBJAAIAABJg");
	this.shape_92.setTransform(150.35,141.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89}]}).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[]},1).wait(44));

	// Layer_13
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_93.setTransform(198.925,92.425);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1140A0").s().p("AhVBWIAAirICqAAIAACrg");
	this.shape_94.setTransform(198.9,92.425);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#1140A0").s().p("AgwAxIAAhhIBhAAIAABhg");
	this.shape_95.setTransform(198.925,92.425);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#1140A0").s().p("AgkAlIAAhJIBJAAIAABJg");
	this.shape_96.setTransform(198.9,92.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93}]}).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[]},1).wait(44));

	// Layer_14
	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_97.setTransform(150.275,92.425);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1140A0").s().p("AhSBTIAAilIClAAIAAClg");
	this.shape_98.setTransform(150.275,92.425);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#1140A0").s().p("AgrAtIAAhZIBYAAIAABZg");
	this.shape_99.setTransform(150.25,92.425);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1140A0").s().p("AgfAgIAAg/IA+AAIAAA/g");
	this.shape_100.setTransform(150.25,92.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_97}]}).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[]},1).wait(44));

	// Layer_17
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1140A0").s().p("AzrC9IAAl5MAnXAAAIAAF5g");
	this.shape_101.setTransform(125.825,39.475);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#1140A0").s().p("AxgCzIAAllMAjBAAAIAAFlg");
	this.shape_102.setTransform(119.175,37.075);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#1140A0").s().p("AveCqIAAlTIe9AAIAAFTg");
	this.shape_103.setTransform(112.975,34.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#1140A0").s().p("AvLCiIAAlDIeXAAIAAFDg");
	this.shape_104.setTransform(116.6,32.925);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#1140A0").s().p("AtZCcIAAk3IazAAIAAE3g");
	this.shape_105.setTransform(109.45,31.525);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1140A0").s().p("ArTCYIAAkvIWnAAIAAEvg");
	this.shape_106.setTransform(99.075,30.525);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#1140A0").s().p("Aq2CWIAAkqIVtAAIAAEqg");
	this.shape_107.setTransform(98.275,29.85);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1140A0").s().p("AqkCUIAAkmIVJAAIAAEmg");
	this.shape_108.setTransform(97.75,29.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1140A0").s().p("AqaCTIAAklIU2AAIAAElg");
	this.shape_109.setTransform(97.5,29.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101}]}).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_109}]},36).to({state:[]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-9.2,252.7,261.7);


(lib.phone_icon = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1140A0").s().p("AhfERIAAinIBahgIAAEHgAAHC8IAAiyIBaBgIAABSgABrBiIhdhcID+AAIAABcgAi4BiIAAhcICrAAIhdBcgAAOgFIBdhcIBOAAIAABcgAkLgFIAAhcICfAAIBfBcgAAHkQIBaAAIAACnIhaBggAhfhpIAAhSIBaAAIAACyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.phone_icon, new cjs.Rectangle(-26.8,-27.2,53.7,54.5), null);


(lib.phone_frame = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1140A0").s().p("AlPCAIAAj/IKfAAIAAD/g");
	this.shape.setTransform(-1.6,-96);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1140A0").s().p("AlPBnIAAjNIKfAAIAADNg");
	this.shape_1.setTransform(-1.6,-98.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1140A0").s().p("AlPAcIAAg3IKfAAIAAA3g");
	this.shape_2.setTransform(-1.6,-106);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},87).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).to({state:[]},8).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1140A0").ss(17,1).p("Ap/O/IAAgiIAA8wIAAgiQAAhAAtgtQAtgtBAAAIPLAAQBAAAAtAtQAtAtAABAIAAAiIAAdFQAABAgtAtQgtAthAAAIvLAAQhAAAgtgtQgpgpgEg3gAGkRQIuJAAQhAAAgtgtQgogogFg1IAAgH");
	this.shape_3.setTransform(0,0.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1140A0").ss(17).p("Ap/O/IAAgiIAA8wIAAgiQAAhAAtgtQAtgtBAAAIPMAAQA/AAAtAtQAtAtAABAIAAAiIAABGAKAnYIAAWKQAABAgtAtQgtAthAAAIvLAAQhAAAgtgtQgpgpgEg3AGkRQIuJAAQhAAAgtgtQgogogFg1IAAgH");
	this.shape_4.setTransform(0,0.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#1140A0").ss(17).p("Ap/O/IAAgiIAA8wIAAgiQAAhAAtgtQAtgtBAAAIPIAAAKAAuIAAOEQAABAgtAtQgtAthAAAIvLAAQhAAAgtgtQgpgpgEg3AGkRQIuJAAQhAAAgtgtQgogogFg1IAAgH");
	this.shape_5.setTransform(0,0.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1140A0").ss(17).p("Ap/O/IAAgiIAA52AGjRQIuIAAQhAAAgtgtQgogogFg1IAAgHAKANtIAABFQAABAgtAtQgtAthAAAIvLAAQhAAAgtgtQgpgpgEg3AlyxPIIcAA");
	this.shape_6.setTransform(0,0.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1140A0").ss(17).p("AAAMdIAA45");
	this.shape_7.setTransform(-63.975,7.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1140A0").ss(17).p("AAAH9IAAv5");
	this.shape_8.setTransform(-63.9625,36.1625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1140A0").ss(17).p("AAAC9IAAl5");
	this.shape_9.setTransform(-63.975,4.1875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},89).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-176.2,145,295.6);


(lib.hands_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// yellow_bar_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_12 = new cjs.Graphics().p("AogCIIFglJQFelKAAADIGDFyIp/Kgg");
	var mask_graphics_46 = new cjs.Graphics().p("AogCIIFglJQFelKAAADIGDFyIp/Kgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_graphics_12,x:143.8,y:230.8987}).wait(34).to({graphics:mask_graphics_46,x:143.8,y:230.8987}).wait(1).to({graphics:null,x:0,y:0}).wait(3));

	// yellow_Bar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5B846").s().p("AmZE+IJ8p8IC3C3InGHGg");
	this.shape.setTransform(210.825,154.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5B846").s().p("AmYE9IJ5p6IC4C3InDHEg");
	this.shape_1.setTransform(190.55,174.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5B846").s().p("AmXE8IJ1p3IC6C2InBHBg");
	this.shape_2.setTransform(173.95,191.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5B846").s().p("AmWE7IJyp1IC7C1InAHBg");
	this.shape_3.setTransform(161.05,204.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5B846").s().p("AmWE6IJxp0IC8C2Im/G/g");
	this.shape_4.setTransform(151.825,213.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5B846").s().p("AmVE6IJvpzIC8C1Im+G+g");
	this.shape_5.setTransform(146.3,218.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5B846").s().p("AmWE6IJxpzIC8C1Im/G+g");
	this.shape_6.setTransform(144.45,220.675);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},12).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},28).to({state:[]},1).wait(3));

	// sound_lines
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1140A0").ss(12.9).p("AgJAGIATgL");
	this.shape_7.setTransform(151.8,34.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1140A0").ss(12.9).p("AggATIBBgl");
	this.shape_8.setTransform(154.075,33.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1140A0").ss(12.9).p("AgyAdIBlg5");
	this.shape_9.setTransform(155.925,31.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1140A0").ss(12.9).p("AhBAmICDhL");
	this.shape_10.setTransform(157.375,31.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#1140A0").ss(12.9).p("AhLAsICXhX");
	this.shape_11.setTransform(158.4,30.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1140A0").ss(12.9).p("AhRAvICjhd");
	this.shape_12.setTransform(159.025,30.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1140A0").ss(12.9).p("AhTAxICnhg");
	this.shape_13.setTransform(159.225,30.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},15).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},25).to({state:[]},1).wait(3));

	// sound_lines
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#1140A0").ss(12.9).p("AgKAAIAVAA");
	this.shape_14.setTransform(158.425,60.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#1140A0").ss(12.9).p("AglAAIBLAA");
	this.shape_15.setTransform(161.05,60.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1140A0").ss(12.9).p("Ag6AAIB1AA");
	this.shape_16.setTransform(163.2,60.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#1140A0").ss(12.9).p("AhLAAICWAA");
	this.shape_17.setTransform(164.85,60.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#1140A0").ss(12.9).p("AhXAAICvAA");
	this.shape_18.setTransform(166.05,60.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#1140A0").ss(12.9).p("AhdAAIC7AA");
	this.shape_19.setTransform(166.75,60.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1140A0").ss(12.9).p("AhgAAIDBAA");
	this.shape_20.setTransform(167,60.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},15).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},25).to({state:[]},1).wait(3));

	// sound_lines
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#1140A0").ss(12.9).p("AgJgEIATAJ");
	this.shape_21.setTransform(151.8,87.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1140A0").ss(12.9).p("AgggSIBBAk");
	this.shape_22.setTransform(154.075,88.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1140A0").ss(12.9).p("AgygcIBlA5");
	this.shape_23.setTransform(155.925,89.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1140A0").ss(12.9).p("AhBglICDBL");
	this.shape_24.setTransform(157.375,90.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#1140A0").ss(12.9).p("AhLgrICXBX");
	this.shape_25.setTransform(158.4,91.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#1140A0").ss(12.9).p("AhRguICjBd");
	this.shape_26.setTransform(159.025,91.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#1140A0").ss(12.9).p("AhTgwICnBg");
	this.shape_27.setTransform(159.225,91.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},15).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},25).to({state:[]},1).wait(3));

	// finger_01
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#1140A0").ss(12.9).p("AgZALQAbgOAhAAIA3AA");
	this.shape_28.setTransform(15.75,106.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#1140A0").ss(12.9).p("AhiBSQAGgpAfgeQAmglA0AAICFAC");
	this.shape_29.setTransform(16.3235,108.7394);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#1140A0").ss(12.9).p("AAuB9IgSAAQg2AAglghQgmgiAAg1QAAg0AmgmQAmgmA1AAICKgB");
	this.shape_30.setTransform(16.4617,118.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#1140A0").ss(12.9).p("ABhCCIhBAAQg0AAgmgmQgmgmAAg2QAAg0AmgmQAmgmA0AAIBBAAg");
	this.shape_31.setTransform(16.025,119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},41).to({state:[]},1).wait(3));

	// finger_02
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#1140A0").ss(12.9).p("AhhAYQADgDACgCQAmglA1AAIBAAAQASAAARAE");
	this.shape_32.setTransform(19.7625,132.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#1140A0").ss(12.9).p("Ah3BJQgBgIAAgIQAAg2AmglQAmgmA0AAIBBAAQAaAAAWAJ");
	this.shape_33.setTransform(18.7625,138.1625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#1140A0").ss(12.9).p("ABvB8QgSAGgUAAIhBAAQg0AAgmgmQgmgnAAg1QAAg0AmgnQAmglA0AAIBBAAQAaAAAWAI");
	this.shape_34.setTransform(18.7625,143.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#1140A0").ss(12.9).p("AChgQQABAIAAAIQAAA1gmAnQgmAmg1AAIhBAAQg1AAgmgmQgmgnAAg1QAAg0AmgnQAmglA1AAIBBAAQAZAAAWAI");
	this.shape_35.setTransform(22.85,143.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#1140A0").ss(12.9).p("AAhCCIhBAAQg1AAgmgmQgmgnAAg1QAAg0AmgnQAmglA1AAIBBAAQA1AAAmAlQAmAnAAA0QAAA1gmAnQgmAmg1AAg");
	this.shape_36.setTransform(22.85,143.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32}]},2).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},40).to({state:[]},1).wait(3));

	// finger_03
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#1140A0").ss(12.9).p("AgjAsQAbgmAsgLIAvgN");
	this.shape_37.setTransform(17.9777,159.3064);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#1140A0").ss(12.9).p("AhrB2QgNgzAagtQAbguA0gOIBdgZQASgFAQAA");
	this.shape_38.setTransform(23.2115,162.5921);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#1140A0").ss(12.9).p("ACaBXQgVASgdAIIheAZQgzAOgvgbQgugbgOg0QgOgyAbgvQAbguAzgOIBegaQARgEARgB");
	this.shape_39.setTransform(27.386,169.9265);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#1140A0").ss(12.9).p("AChhKQAHANAEAQQAOAzgbAuQgaAvg0AOIhdAZQg0AOgvgbQgugbgOg0QgOgyAbgvQAbguAzgOIBegaQARgEARgB");
	this.shape_40.setTransform(29.675,169.9265);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#1140A0").ss(12.9).p("ABRBxIhdAZQg0AOgvgbQgugbgOg0QgOgyAbgvQAbguAzgOIBegaQA0gOAuAbQAuAbAOA0QAOAzgbAuQgaAvg0AOg");
	this.shape_41.setTransform(29.675,169.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37}]},3).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},39).to({state:[]},1).wait(3));

	// finger_04
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#1140A0").ss(12.9).p("AgMBdQgIgoASgoQAQgjAggT");
	this.shape_42.setTransform(30.285,186.762);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#1140A0").ss(12.9).p("AAtBkQgkgWgPgqQgSgyAXgwQAJgWAQgP");
	this.shape_43.setTransform(30.2062,194.4125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#1140A0").ss(12.9).p("ACxAQQgWAdgkANIh5AtQgyASgxgXQgxgWgSgzQgSgxAWgxQALgVAPgQ");
	this.shape_44.setTransform(46.4625,195.4749);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#1140A0").ss(12.9).p("ACZiAQATAUALAcQASAygXAwQgWAwgzATIh5AsQgyATgxgXQgwgXgTgyQgSgzAXgvQAXgxAygSIBLgb");
	this.shape_45.setTransform(47.825,192.828);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#1140A0").ss(12.9).p("ABpBjIh5AtQgyASgxgXQgwgWgTgzQgSgyAXgwQAXgwAygTIB5gsQAygSAxAWQAwAXATAyQASAzgXAvQgWAxgzASg");
	this.shape_46.setTransform(47.825,191.37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_42}]},4).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},38).to({state:[]},1).wait(3));

	// hand
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#1140A0").ss(12.9).p("AgihOQAiBHA4Ay");
	this.shape_47.setTransform(52.5261,212.6362);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#1140A0").ss(12.9).p("AjUh+QAvBiBcA6QBdA9BwAAICRAA");
	this.shape_48.setTransform(70.3375,217.4362);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#1140A0").ss(12.9).p("Al3ilQAvBiBcA7QBeA8BwAAIFIAAIBgBg");
	this.shape_49.setTransform(86.6084,221.3261);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#1140A0").ss(12.9).p("AoBjhQAvBiBbA7QBeA9BxAAIFHAAICrCqIDMjG");
	this.shape_50.setTransform(100.4909,227.3235);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#1140A0").ss(12.9).p("Ap4i9QAvBiBbA7QBeA8BxAAIFHAAICrCrIGLmAIg6g6");
	this.shape_51.setTransform(112.3573,223.7374);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#1140A0").ss(12.9).p("Ap4hoQAvBjBbA6QBeA8BxAAIFHAAICrCsIGLmBIixixIAAhi");
	this.shape_52.setTransform(112.359,215.1754);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#1140A0").ss(12.9).p("Ap4CvQAvBiBbA7QBeA9BxAAIFHAAICrCrIGLmBIixiyIAAmMQAAg3gegvQgdgvgygZIg4gb");
	this.shape_53.setTransform(112.359,187.2082);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#1140A0").ss(12.9).p("Ap4EFQAvBiBbA7QBeA9BxAAIFHAAICrCrIGLmBIixiyIAAmMQAAg3gegvQgdgvgygZIl6i6QgOgGgPAAQgQAAgNAHIgKAF");
	this.shape_54.setTransform(112.359,178.6379);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#1140A0").ss(12.9).p("Ap4EFQAvBiBbA7QBeA9BxAAIFHAAICrCrIGLmBIixiyIAAmMQAAg3gegvQgdgvgygZIl6i6QgOgGgPAAQgQAAgNAHIiGBGQgzATgWAwQgXAxATAyQAMAiAaAV");
	this.shape_55.setTransform(112.359,178.6379);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#1140A0").ss(12.9).p("Ap4EFQAvBiBbA7QBeA9BxAAIFHAAICrCrIGLmBIixiyIAAmMQAAg3gegvQgdgvgygZIl6i6QgOgGgPAAQgQAAgNAHIiGBGQgzATgWAwQgXAxATAyQASAzAxAWQAwAXAzgTIBpgzIA9A8");
	this.shape_56.setTransform(112.359,178.6379);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#1140A0").ss(12.9).p("Ap4EFQAvBiBbA7QBeA9BxAAIFHAAICrCrIGLmBIixiyIAAmMQAAg3gegvQgdgvgygZIl6i6QgOgGgPAAQgQAAgNAHIiGBGQgzATgWAwQgXAxATAyQASAzAxAWQAwAXAzgTIBpgzIBgBeIgIAHQgKALgKAMQhLBbADB2");
	this.shape_57.setTransform(112.359,178.6379);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#1140A0").ss(12.9).p("Ap4EFQAvBiBbA7QBeA9BxAAIFHAAICrCrIGLmBIixiyIAAmMQAAg3gegvQgdgvgygZIl6i6QgOgGgPAAQgQAAgNAHIiGBGQgzATgWAwQgXAxATAyQASAzAxAWQAwAXAzgTIBpgzIBgBeIgIAHQgKALgKAMQhPBgAIB+QAHB8BYBZIAXAX");
	this.shape_58.setTransform(112.359,178.6379);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#1140A0").ss(12.9).p("Ap5EKQAvBiBcA7QBeA9BwAAIFIAAICXChIGel3IixiyIAAmMQAAg3gdgvQgegvgygZIl5i6QgOgGgQAAQgPAAgOAHIiGBGQgyATgXAwQgWAxASAyQATAzAwAWQAxAXAygTIBpgzIBhBeIgIAHQgLALgKAMQhOBgAHB+QAHB8BYBZIAXAX");
	this.shape_59.setTransform(112.4477,178.1215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},6).to({state:[{t:this.shape_59}]},28).to({state:[]},1).wait(3));

	// top_02
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1140A0").s().p("AgFgQIALAAIAAAUIgLANg");
	this.shape_60.setTransform(77.475,65.775);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1140A0").s().p("AgIgZIARAAIAAAfIgRAUg");
	this.shape_61.setTransform(77.85,64.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1140A0").s().p("AgRg0IAjAAIAABBIgjApg");
	this.shape_62.setTransform(78.925,61.85);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1140A0").s().p("AgfheIA/AAIAAB3Ig/BGg");
	this.shape_63.setTransform(80.55,57.375);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1140A0").s().p("Agph5IBTAAIAACZIhTBag");
	this.shape_64.setTransform(81.625,54.425);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1140A0").s().p("AgsiCIBZAAIAACkIhZBhg");
	this.shape_65.setTransform(82,53.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},40).to({state:[]},1).wait(3));

	// rt_02
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1140A0").s().p("AgDAGIgMgLIAfAAIAAALg");
	this.shape_66.setTransform(78.625,68.25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1140A0").s().p("AgGAJIgSgRIAxAAIAAARg");
	this.shape_67.setTransform(79.6,68.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1140A0").s().p("AgNATIgmglIBnAAIAAAlg");
	this.shape_68.setTransform(82.575,69.675);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1140A0").s().p("AgXAhIhEhBIC3AAIAABBg");
	this.shape_69.setTransform(86.975,71.325);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1140A0").s().p("AgfArIhWhVIDrAAIAABVg");
	this.shape_70.setTransform(89.95,72.375);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#1140A0").s().p("AghAuIhdhbID9AAIAABbg");
	this.shape_71.setTransform(90.925,72.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_66}]},2).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},39).to({state:[]},1).wait(3));

	// bottom_02
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1140A0").s().p("AgFARIAAgVIALgMIAAAhg");
	this.shape_72.setTransform(76.15,69.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1140A0").s().p("AgIAaIAAggIARgTIAAAzg");
	this.shape_73.setTransform(75.8,70.375);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1140A0").s().p("AgSA2IAAhDIAlgoIAABrg");
	this.shape_74.setTransform(74.7,73.325);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#1140A0").s().p("AggBfIAAh3IBAhGIAAC9g");
	this.shape_75.setTransform(73.1,77.725);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1140A0").s().p("AgpB6IAAiZIBThaIAADzg");
	this.shape_76.setTransform(72,80.675);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1140A0").s().p("AgsCDIAAikIBZhiIAAEGg");
	this.shape_77.setTransform(71.65,81.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_72}]},3).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_77}]},38).to({state:[]},1).wait(3));

	// lt_01
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1140A0").s().p("AgQAGIAAgLIAUAAIANALg");
	this.shape_78.setTransform(75,66.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#1140A0").s().p("AgYAJIAAgRIAeAAIATARg");
	this.shape_79.setTransform(74.025,66.525);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#1140A0").s().p("AgzATIAAglIBAAAIAnAlg");
	this.shape_80.setTransform(71.05,65.425);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#1140A0").s().p("AhbAhIAAhBIByAAIBFBBg");
	this.shape_81.setTransform(66.65,63.825);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#1140A0").s().p("Ah2ArIAAhVICUAAIBZBVg");
	this.shape_82.setTransform(63.675,62.725);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1140A0").s().p("Ah+AuIAAhbICeAAIBfBbg");
	this.shape_83.setTransform(62.7,62.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_83}]},40).to({state:[]},1).wait(3));

	// rt_01
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#1140A0").s().p("AgKAGIALgLIAKAAIAAALg");
	this.shape_84.setTransform(78.1,66.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1140A0").s().p("AgQAJIARgRIAQAAIAAARg");
	this.shape_85.setTransform(78.8,66.525);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1140A0").s().p("AgiATIAlglIAgAAIAAAlg");
	this.shape_86.setTransform(80.875,65.425);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#1140A0").s().p("Ag9AhIBChBIA5AAIAABBg");
	this.shape_87.setTransform(84,63.825);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#1140A0").s().p("AhPArIBWhVIBJAAIAABVg");
	this.shape_88.setTransform(86.075,62.725);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1140A0").s().p("AhVAuIBdhbIBOAAIAABbg");
	this.shape_89.setTransform(86.775,62.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_84}]},4).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},37).to({state:[]},1).wait(3));

	// top_02
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#1140A0").s().p("AgFAAIAAgKIALAAIAAAVg");
	this.shape_90.setTransform(76.15,66.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#1140A0").s().p("AgIgBIAAgQIARAAIAAAjg");
	this.shape_91.setTransform(75.8,65.625);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#1140A0").s().p("AgSgDIAAggIAlAAIAABIg");
	this.shape_92.setTransform(74.7,63.55);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#1140A0").s().p("AgggEIAAg7IBAAAIAAB/g");
	this.shape_93.setTransform(73.1,60.425);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1140A0").s().p("AgpgGIAAhMIBTAAIAAClg");
	this.shape_94.setTransform(72,58.35);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#1140A0").s().p("AgsgHIAAhRIBZAAIAACxg");
	this.shape_95.setTransform(71.65,57.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_90}]},5).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_95}]},36).to({state:[]},1).wait(3));

	// bottom_01
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#1140A0").s().p("AgFAMIAAgXIALAMIAAALg");
	this.shape_96.setTransform(77.475,68.85);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1140A0").s().p("AgIASIAAgjIARATIAAAQg");
	this.shape_97.setTransform(77.85,69.525);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1140A0").s().p("AgRAkIAAhIIAjAnIAAAhg");
	this.shape_98.setTransform(78.925,71.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#1140A0").s().p("AgfBAIAAh/IA/BFIAAA6g");
	this.shape_99.setTransform(80.55,74.675);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1140A0").s().p("AgpBTIAAilIBTBZIAABMg");
	this.shape_100.setTransform(81.625,76.75);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1140A0").s().p("AgsBZIAAixIBZBgIAABRg");
	this.shape_101.setTransform(82,77.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_96}]},6).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},35).to({state:[]},1).wait(3));

	// lt_02
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#1140A0").s().p("AgKAGIAAgLIAVAAIgLALg");
	this.shape_102.setTransform(75.55,68.25);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#1140A0").s().p("AgQAJIAAgRIAhAAIgSARg");
	this.shape_103.setTransform(74.85,68.625);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#1140A0").s().p("AgiATIAAglIBFAAIglAlg");
	this.shape_104.setTransform(72.775,69.675);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#1140A0").s().p("Ag9AhIAAhBIB7AAIhCBBg");
	this.shape_105.setTransform(69.65,71.325);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1140A0").s().p("AhPArIAAhVICfAAIhWBVg");
	this.shape_106.setTransform(67.575,72.375);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#1140A0").s().p("AhVAuIAAhbICrAAIhdBbg");
	this.shape_107.setTransform(66.875,72.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_102}]},4).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},37).to({state:[]},1).wait(3));

	// top_bar
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1140A0").s().p("AlDAWIAAgrIKHAAIAAArg");
	this.shape_108.setTransform(77.2,8.425);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1140A0").s().p("AlDBIIAAiPIKHAAIAACPg");
	this.shape_109.setTransform(77.2,13.425);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#1140A0").s().p("AlDBmIAAjLIKHAAIAADLg");
	this.shape_110.setTransform(77.2,16.425);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#1140A0").s().p("AlDBwIAAjfIKHAAIAADfg");
	this.shape_111.setTransform(77.2,17.425);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#1140A0").s().p("AlDBqIAAjTIKHAAIAADTg");
	this.shape_112.setTransform(77.2,16.775);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#1140A0").s().p("AlDBlIAAjJIKHAAIAADJg");
	this.shape_113.setTransform(77.2,16.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#1140A0").s().p("AlDBiIAAjDIKHAAIAADDg");
	this.shape_114.setTransform(77.2,16.025);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#1140A0").s().p("AlDBhIAAjBIKHAAIAADBg");
	this.shape_115.setTransform(77.2,15.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_108}]},11).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_115}]},28).to({state:[]},1).wait(3));

	// phone_outline
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#1140A0").ss(12.9,1).p("AhoAAIDRAA");
	this.shape_116.setTransform(70.325,6.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#1140A0").ss(12.9,1).p("AkUBBQAAg2AmglQAmgmA1AAIGoAA");
	this.shape_117.setTransform(53.1,12.65);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#1140A0").ss(12.9,1).p("AkUDVIAAkoQAAg2AmgmQAmgmA1AAIGoAA");
	this.shape_118.setTransform(53.1,27.55);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#1140A0").ss(12.9,1).p("AkUHhIAAs/QAAg2AmgmQAmgmA1AAIGoAA");
	this.shape_119.setTransform(53.1,54.25);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#1140A0").ss(12.9,1).p("AkUHhIAAtAQAAg1AmgmQAmgmA1AAIGoAA");
	this.shape_120.setTransform(53.1,54.3375);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#1140A0").ss(12.9,1).p("AkUIIIAAuNQAAg2AmgmQAmgmA1AAIGoAA");
	this.shape_121.setTransform(53.1,58.1625);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#1140A0").ss(12.9,1).p("AmpA4IAAtDQAAg2AmglQAmgmA1AAIGoAAAGqOLQgOADgMAAIlaAA");
	this.shape_122.setTransform(68.025,97.15);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#1140A0").ss(12.9,1).p("AmqBCIAAtNQAAg2AmglQAmgmA2AAIGnAAAGrOLQgNADgOAAIlkAA");
	this.shape_123.setTransform(68.1,97.15);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#1140A0").ss(12.9,1).p("AoFBCIAAtNQAAg2AmglQAmgmA2AAIGnAAAFSOMIgWACIlqAAAIGj2IAAHi");
	this.shape_124.setTransform(77.2,97.15);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#1140A0").ss(12.9,1).p("AGRuMQAtAEAiAiQAmAlAAA2IAAP7AoFBBIAAtMQAAg2AmglQAmgmA2AAIGnAAAFNOOIl+AA");
	this.shape_125.setTransform(77.2,97.15);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#1140A0").ss(12.9,1).p("AoFBHIAAtRQAAg1AmgmQAmgmA2AAIMIAAQA1AAAmAmQAmAmAAA1IAAP7AFNOMIl3AA");
	this.shape_126.setTransform(77.2,97.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},35).to({state:[]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-45.3,240.5,298);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEEED").s().p("AsAEHIILoNIP2AAIAAINg");
	this.shape.setTransform(76.525,26);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(-0.4,-0.3,153.9,52.599999999999994), null);


(lib.endFrame_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1140A0").s().p("Ak8CQIAuglQA1BUBmAAQA1AAAegZQAdgYAAgoQAAgpgqgVQgZgMhHgPQhIgOgegTQgwgeAAg9QAAg3ArgkQAtgnBGABQA8gBAsAXQAoAUAgApIgrAiQgXgjgegQQghgTgvAAQgzAAgbAXQgZAVAAAlQAAAmAkASQAUAKBDAOQBNAQAhAUQA1AhAABBQAAA5gsApQguAphKAAQiDAAhHhhgAIdDrIh9mGIiEGGIg2AAIiBnWIA4AAIBoGGICEmGIAwAAIB9GHIBymHIA3AAIiNHWgAreDrIAAnWIDKAAQBCABAnAhQAoAjAAA4QAAAjgQAaQgQAbgfAPQAjANATAcQATAdAAAnQAAA+gpAkQgpAjhDAAgAqoC5ICZAAQAsABAagYQAagYgBgkQABgngZgWQgagXgvAAIiXAAgAqogfICXAAQAqABAYgXQAXgVgBgkQAAghgZgWQgZgUgqAAIiTAAg");
	this.shape.setTransform(-5.8,97.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C8EBA").s().p("A7aEcIAigrQAWAYAdAAQAbAAARgPQAQgPAUgrIAHgQIiRlLIA5AAIB1ENIBukNIA6AAIieFrQgaA7gbAYQgcAYgtAAQgzAAgigfgARhCpQgfgcAAgsQAAg1ArgeQAqgdBJAAIBuAAIAAgNQAAgpgZgXQgbgZgxAAQhJAAgmA7IgugdQA5hLBkAAQBJAAApAmQAnAjAAA9IAADcIg0AAIAAg9QgXAggmASQgmASgtAAQg7AAgigegAR5BdQAAAbATAQQAVARAnAAQApAAAjgUQAmgVAUgmIAAgvIhrAAQhqAAAABCgALSCUQgygzAAhNQAAhNA0g0QA0g1BOAAQBNAAAyAyQAyAyAABMIAAAYIkzAAQAGAzAjAfQAlAgA2AAQBPAAAmhDIAtAaQg5BYhpAAQhSAAg0gzgAMBhUQgjAegJAvID8AAQgGgyghgdQghgdgzAAQgxAAgkAfgAaXBXIAAjDIhEAAIAAgvIBEAAIAAhMIA0giIAABuIBmAAIAAAvIhmAAIAADCQAAA+AyAAQAXAAARgRIAcAqQgfAYgpAAQhiAAAAhugEAiHADAIAAjDQAAgzgbgeQgcgegyAAQgvAAgeAgQggAgAAAyIAADAIg1AAIAAn6IA0AAIAADXQATgdAfgQQAggSAnAAQBEAAAoAqQAoAqAABJIAADFgAXeDAIAAn6IA1AAIAAH6gAIaDAIAAjRIj8AAIAADRIg2AAIAAnVIA2AAIAADQID8AAIAAjQIA1AAIAAHVgA80DAIAAmCIitDnIimjiIAAF9Ig1AAIAAnVIA1AAICnDnICtjnIAzAAIAAHVg");
	this.shape_1.setTransform(52.425,102.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endFrame_txt, new cjs.Rectangle(-171.3,70.7,447.5,62.999999999999986), null);


(lib.dr_head = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#113FA0").ss(20,1).p("AmvCDIAAkFQAAizB+h/QCAh+CxAAQC0AAB+B+QB+B/AACzIAAEFQAACzh+B/Qh+B+i0AAQixAAiAh+Qh+h/AAizg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkKF9QhuhvAAicIAAjjQAAicBuhvQBwhuCaAAQCcAABvBuQBuBvAACcIAADjQAACchuBvQhvBuicAAQiaAAhwhug");
	this.shape_1.setTransform(-0.05,-0.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dr_head, new cjs.Rectangle(-53.2,-121.5,106.4,187.8), null);


(lib.dot_wht = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtAtQgSgSAAgbQAAgZASgUQAUgSAZAAQAbAAASASQATAUAAAZQAAAbgTASQgSATgbAAQgZAAgUgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dot_wht, new cjs.Rectangle(-6.4,-6.4,12.8,12.8), null);


(lib.calendar_page = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// top_square
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1140A0").s().p("AiRCSIAAkjIEjAAIAAEjg");
	this.shape.setTransform(22.975,100.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	// middle_square
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_1.setTransform(23.025,149.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(50));

	// bottom_square
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_2.setTransform(23.025,197.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(50));

	// top_line
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_3.setTransform(71.625,100.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(50));

	// middle_line
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_4.setTransform(71.75,149.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(50));

	// bottom_line
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_5.setTransform(71.75,197.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(50));

	// top_line_02
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_6.setTransform(120.275,100.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(50));

	// middle_line_02
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_7.setTransform(120.325,149.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(50));

	// bottom_line_02
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_8.setTransform(120.325,197.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(50));

	// top_line_03
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_9.setTransform(168.925,100.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(50));

	// middle_line_03
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1140A0").s().p("AiSCTIAAklIElAAIAAElg");
	this.shape_10.setTransform(168.975,149.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(50));

	// Layer_28
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(17,64,160,0)").s().p("AxaOxIAA9hMAi1AAAIAAdhg");
	this.shape_11.setTransform(93.5,140.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,46.1,223,189);


(lib.blue_bubble = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1140A0").s().p("AiEBZQAAgDADgBQBagTAfhQQAJgaACgcIABgYICBAAQAABphfAvQhBAghlABQgDAAgBgEg");
	this.shape.setTransform(-41.15,18.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1140A0").s().p("AnIC3QgmAAgbgbQgbgbAAgmIAAi1QAAgmAbgbQAbgbAmAAIORAAQAmAAAbAbQAbAbAAAmIAAC1QAAAmgbAbQgbAbgmAAg");
	this.shape_1.setTransform(0,-9.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blue_bubble, new cjs.Rectangle(-54.9,-27.5,109.8,55.1), null);


(lib.txt_tapInto_02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#008FBE").s().p("AKLOuQg5gXgpgpQgpgogWg3QgYg3AAg+QAAg+AYg3QAWg3ApgpQApgqA5gXQA6gXBDAAQBDAAA4AXQA5AXAqAqQAqApAXA3QAYA3AAA+QAAA+gXA3QgXA3gpAoQgpApg5AXQg6AYhEAAQhDAAg6gYgALWIgQgYAKgSASQgRASgKAYQgKAXAAAcQAAAcAKAWQAKAZARASQASARAYAKQAZALAagBQAbABAZgLQAXgKASgRQASgSAKgZQAKgWAAgcQAAgcgKgXQgKgYgSgSQgSgSgXgKQgZgLgbABQgagBgZALgADbO6QgmgMgagbQgagcgOgrQgMgsAAhBIAAjIIhlAAIAAieIBlAAIAAh/ICyhhIAADgICNAAIAACeIiNAAIAAC+QAAAsAMAPQAOAOAYAAQAZABAWgVIBSCJQggAYgnAOQgnANgtAAQgwAAgmgMgAjpO8IAAlIQAAgzgWgaQgVgbguAAQgngBgZAcQgaAcAAA6IAAE/Ii3AAIAApDIC1AAIAABDQAdgmAmgUQAogVAxAAQBhAAA4A7QA6A8AABsIAAFsgAtoO8IAApDIC6AAIAAJDgAtZEtQgdgfAAgvQAAgwAdgeQAdggAwAAQAxAAAeAgQAeAeAAAwQAAAvgeAfQgeAegxAAQgwAAgdgegABoAqIAAskICyAAIAABHQAZgmAogXQApgWA6ABQAzAAAxAUQAwAVAlAmQAlAnAWA3QAWA4AABGQAABGgWA4QgWA2glAnQglAmgwAWQgxAUgxAAQhwAAg1hKIAAEjgAFhpUQgYAKgRATQgSARgLAYQgJAXAAAcQAAAbAJAXQALAYASARQARASAYAKQAYALAbgBQAbABAXgLQAZgKARgSQASgRAJgYQALgXAAgbQAAgcgLgXQgJgYgSgRQgRgTgZgKQgXgKgbAAQgbAAgYAKgAmxi6QglgNgZgWQgagXgOgfQgOggAAgpQAAgsATglQASglAigYQAigZAvgOQAwgOA8AAICEAAIAAgEQAAgkgYgXQgZgVgwAAQgpAAgaAPQgcAPgOAeIiqhNQAug5BCglQBBgkBlABQCDgBBGA9QBGA9AAByIAAFgIirAAIAAhNQgdAogzAXQgzAZhDAAQgsABgkgMgAlSmTQgWAQAAAYQAAAuBEAAQAXAAAWgGIAogUQATgMANgRQAPgQAGgTIAAgLIhuAAQgzAAgXAPgAtri6IAApfIjTAAIAAisIJZAAIAACsIjQAAIAAJfg");
	this.shape.setTransform(-74.675,36.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_tapInto_02, new cjs.Rectangle(-183.4,-59.9,217.5,193.20000000000002), null);


(lib.txt_tapInto = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#008FBE").s().p("ArQG4IAAqYICTAAIAAA7QAUggAigSQAhgTAwAAQArABAoAQQAoARAeAgQAfAhASAtQATAuAAA5QAAA6gTAtQgSAugfAgQgeAggoAQQgoASgpAAQhdAAgrg+IAADygAoChXQgUAJgOAOQgPAPgJAUQgHAUAAAUQAAAYAHASQAJAUAPAPQAOAOAUAIQATAJAXAAQAWAAATgJQAVgIAOgOQAPgPAHgUQAJgSAAgYQAAgUgJgUQgHgUgPgPQgOgOgVgJQgTgIgWAAQgXAAgTAIgAyQD6QgegKgUgSQgWgTgLgaQgMgbAAghQAAglAPgeQAPgeAcgUQAcgUAogLQAngMAyAAIBtAAIAAgDQAAgegVgSQgUgTgnABQgiAAgWAMQgXAMgLAZIiNg/QAmgwA2geQA2gdBUgBQBsAAA6AzQA6AyAABeIAAEhIiOAAIAAg/QgXAhgrAUQgqAUg3AAQglAAgegKgAxBBHQgSAOAAAUQAAAmA4AAQATgBASgFIAhgQQAQgKALgNQAMgOAFgPIAAgKIhaAAQgrAAgTAMgAUZDwQgugUgighQgighgSguQgTgtAAgyQAAgzATgsQASgtAigiQAigiAugUQAwgSA3gBQA3ABAuASQAvAUAiAiQAiAiAUAtQATAsAAAzQAAAygTAtQgTAughAhQgiAhgvAUQgvASg4ABQg3gBgwgSgAVXhXQgUAJgPAOQgNAPgJAUQgJAUABAUQgBAYAJASQAJAUANAPQAPAOAUAIQAUAJAWAAQAWAAAUgJQATgIAPgOQAOgPAJgUQAIgSAAgYQAAgUgIgUQgJgUgOgPQgPgOgTgJQgUgIgWAAQgWAAgUAIgAO0D5QgfgKgVgWQgWgXgLgjQgKglAAg0IAAikIhSAAIAAiCIBSAAIAAhnICRhQIAAC3IB1AAIAACCIh1AAIAACbQABAkAKAMQAMANATAAQAVAAASgRIBCBvQgZAVggALQggALgmAAQgnAAgfgKgA3ND5QgfgKgVgWQgVgXgLgjQgLglAAg0IAAikIhSAAIAAiCIBSAAIAAhnICShQIAAC3IB0AAIAACCIh0AAIAACbQAAAkALAMQALANATAAQAVAAASgRIBDBvQgaAVgfALQghALglAAQgoAAgfgKgAI7D6IAAkMQAAgpgRgWQgTgWglAAQgggBgUAXQgWAXAAAwIAAEEIiVAAIAAnaICUAAIAAA3QAXgeAggSQAggQAogBQBQAAAuAyQAwAwgBBZIAAEpgAAsD6IAAnaICZAAIAAHagAA4keQgYgZAAgnQAAgnAYgZQAYgZAnAAQAoAAAZAZQAZAZgBAnQABAngZAZQgZAZgoAAQgnAAgYgZg");
	this.shape.setTransform(-4.9,-0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_tapInto, new cjs.Rectangle(-171.2,-44.7,332.6,88), null);


(lib.txt_takeHealthcare = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#008FBE").s().p("AgcAdQgKgLAAgSQAAgRAKgKQALgMARAAQASAAAKAMQALAKAAARQAAASgLALQgKALgSgBQgRABgLgLg");
	this.shape.setTransform(158.55,31.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008FBE").s().p("Ag/BiQgagQgMgdIBDgTQAFAOALAFQALAHANAAQANAAAHgFQAGgFAAgGQAAgFgDgDIgKgFIgPgFIgRgDIgcgHQgOgEgLgGQgLgHgHgLQgIgLAAgTQAAgOAHgNQAHgNAMgJQANgKARgGQARgFAUAAQATAAAPAEQAOADAMAHQAMAGAJAKQAKAKAIAMIhAAUQgKgVgZAAQgMAAgGAEQgGADAAAIQAAAHAMAEIAhAIIAcAHQAOADAMAIQALAHAIALQAHAMAAASQAAANgGANQgGAOgMAKQgMALgSAGQgTAHgYAAQgqAAgagPg");
	this.shape_1.setTransform(141.875,24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008FBE").s().p("AgyCYQgSgIgOgOQgOgPgIgUQgIgVAAgbQAAgaAIgVQAIgTAOgPQAOgPASgHQASgIAUAAQATAAAPAHQAPAIAKANIAAh7IBCAAIAAE6IhCAAIAAgaQgKAPgPAIQgQAIgTAAQgTAAgSgIgAgQACQgJAEgGAGQgHAHgEAJQgEAJAAAKQAAAKAEAJQAEAJAHAGQAGAHAJAEQAJAEAJAAQAKAAAJgEQAJgEAHgHQAGgGAEgJQAEgJAAgKQAAgKgEgJQgEgJgGgHQgHgGgJgEQgJgDgKAAQgJAAgJADg");
	this.shape_2.setTransform(118.175,19.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008FBE").s().p("AAhBuIAAh5QAAgTgJgKQgIgKgQAAQgOAAgJAKQgKALAAAWIAAB1IhEAAIAAjXIBDAAIAAAZQALgOAOgHQAOgIATAAQAkAAAUAWQAWAXAAAoIAACGg");
	this.shape_3.setTransform(93.85,23.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008FBE").s().p("Ag9BsQgOgFgKgIQgJgJgGgLQgFgMAAgQQAAgQAHgOQAHgOAMgIQANgJASgGQASgEAWAAIAxAAIAAgCQAAgOgJgIQgJgIgTAAQgOAAgJAFQgLAGgFALIhAgcQARgWAZgOQAZgOAkAAQAyAAAaAYQAaAWAAArIAACDIhAAAIAAgcQgLAPgUAIQgRAKgagBQgQABgNgFgAgaAbQgIAGAAAJQAAARAaAAQAIAAAHgDIAPgHQAHgFAGgGQAEgFADgHIAAgFIgpAAQgTABgIAFg");
	this.shape_4.setTransform(69.7,24.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008FBE").s().p("AAfCdIAAh5QAAgUgHgKQgIgIgQgBQgPABgKAIQgJALAAAWIAAB2IhCAAIAAk6IBCAAIAAB8QAKgOAPgHQANgIASAAQASAAAPAGQAPAFAKALQAKAMAGAPQAFAPAAAUIAACHg");
	this.shape_5.setTransform(46.3,19.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008FBE").s().p("AhRBuIAAjXIBDAAIAAAfQAIgTAPgIQAPgIAVAAQALAAAJACIARAGIgXBEQgFgEgJgDQgIgCgJAAQgUAAgKAKQgMALAAAZIAABqg");
	this.shape_6.setTransform(17.175,23.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#008FBE").s().p("AhQBYQgVgWAAgpIAAiGIBFAAIAAB5QAAATAIAKQAIAKAQAAQAPAAAKgLQAIgJABgWIAAh2IBEAAIAADXIhDAAIAAgZQgLAPgOAHQgOAHgSAAQglABgVgXg");
	this.shape_7.setTransform(-4.65,24.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#008FBE").s().p("AguBnQgVgIgQgPQgPgQgIgUQgJgVAAgXQAAgWAJgUQAIgVAPgPQAQgPAVgJQAVgJAZAAQAYAAAWAJQAVAJAPAPQAQAPAJAVQAJAUAAAWQAAAXgJAVQgJAUgPAQQgPAPgWAIQgVAJgZAAQgZAAgVgJgAgSgsQgJAEgHAGQgGAHgEAJQgEAJAAAJQAAAKAEAJQAEAJAGAGQAHAHAJAEQAJAEAJAAQAKAAAJgEQAJgEAHgHQAGgGAEgJQAEgJAAgKQAAgJgEgJQgEgJgGgHQgHgGgJgEQgJgEgKAAQgJAAgJAEg");
	this.shape_8.setTransform(-29.175,24.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#008FBE").s().p("AhfCTQgSgGgNgKIAmg1QAFAGAIADQAHAEAJAAQANAAAJgGQAKgHAFgPIADgIIhVjQIBIAAIAuB7IAsh7IBFAAIhZDkQgJAXgKAPQgIAPgLAIQgLAKgPAEQgOADgSAAQgTABgSgHg");
	this.shape_9.setTransform(-54.85,28.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#008FBE").s().p("AguBnQgVgIgQgPQgPgQgIgUQgJgVAAgXQAAgWAJgUQAIgVAPgPQAQgPAVgJQAVgJAZAAQAYAAAWAJQAVAJAPAPQAQAPAJAVQAJAUAAAWQAAAXgJAVQgJAUgPAQQgPAPgWAIQgVAJgZAAQgZAAgVgJgAgSgsQgJAEgHAGQgGAHgEAJQgEAJAAAJQAAAKAEAJQAEAJAGAGQAHAHAJAEQAJAEAJAAQAKAAAJgEQAJgEAHgHQAGgGAEgJQAEgJAAgKQAAgJgEgJQgEgJgGgHQgHgGgJgEQgJgEgKAAQgJAAgJAEg");
	this.shape_10.setTransform(-87.175,24.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#008FBE").s().p("AgECTQgOgFgJgJQgKgLgFgQQgFgQAAgZIAAhJIglAAIAAg8IAlAAIAAguIBBglIAABTIA1AAIAAA8Ig1AAIAABGQAAAQAFAFQAFAGAJAAQAKAAAIgHIAeAzQgMAIgOAFQgPAFgRABQgRAAgOgFg");
	this.shape_11.setTransform(-108.325,20.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#008FBE").s().p("AAgBuIAAh5QABgTgJgKQgHgKgRAAQgOAAgJAKQgKALAAAWIAAB1IhEAAIAAjXIBEAAIAAAZQAKgOAOgHQAOgIASAAQAlAAAUAWQAWAXAAAoIAACGg");
	this.shape_12.setTransform(-129.6,23.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#008FBE").s().p("AgiCdIAAjXIBFAAIAADXgAgchWQgLgMAAgRQAAgSALgLQALgMARAAQARAAAMAMQALALAAASQAAARgLAMQgMALgRAAQgRAAgLgLg");
	this.shape_13.setTransform(-146.65,19.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#008FBE").s().p("AguBoQgVgJgOgPQgPgPgJgVQgHgUAAgYQAAgWAIgUQAJgVAPgPQAQgPAUgJQAVgJAXAAQAZAAAVAIQAUAJAPAPQAPAPAJAUQAIAUAAAYIAAAXIigAAQAGAQANAJQAMAIASAAQAPAAALgGQAMgGAGgLIA3AgQgRAXgXAMQgYAMgkAAQgZAAgWgIgAAugaQgFgOgMgIQgMgHgQAAQgQAAgLAIQgMAHgHAOIBbAAIAAAAg");
	this.shape_14.setTransform(155.3,-17.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#008FBE").s().p("AhRBuIAAjXIBDAAIAAAfQAIgTAPgIQAPgIAVAAQALAAAJACIARAGIgXBEQgFgEgJgDQgIgCgJAAQgUAAgKAKQgMALAAAZIAABqg");
	this.shape_15.setTransform(134.375,-17.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#008FBE").s().p("Ag9BsQgPgFgJgIQgKgJgFgLQgFgMAAgPQAAgRAHgOQAHgNANgJQAMgJASgGQASgEAXAAIAwAAIAAgCQAAgOgJgIQgJgIgTAAQgOAAgKAGQgKAFgFALIhAgdQARgVAZgOQAZgOAkAAQAxAAAbAYQAaAWAAArIAACDIhBAAIAAgdQgKAPgTAJQgSAKgagBQgQAAgNgEgAgaAbQgIAGAAAJQAAARAaAAQAIAAAHgCIAPgIQAHgEAGgGQAFgHACgHIAAgDIgpAAQgSAAgJAFg");
	this.shape_16.setTransform(112.25,-17.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#008FBE").s().p("AgqBnQgVgIgPgPQgPgPgJgVQgIgVAAgXQAAgXAIgUQAJgVAPgPQAPgPAVgJQAVgJAXAAQAoAAAcAUQAbATANAhIg/AYQgEgQgMgIQgMgIgQAAQgIAAgJAEQgJAEgGAHQgHAGgDAJQgEAJAAAJQAAAKAEAJQADAIAHAHQAHAHAIADQAJAFAIAAQAQAAALgJQALgJAGgOIBAAaQgHAPgKANQgLANgOAJQgNAJgRAFQgRAFgUAAQgXABgVgKg");
	this.shape_17.setTransform(88.775,-17.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#008FBE").s().p("AAfCdIAAh6QAAgSgHgLQgIgJgQAAQgPAAgKAJQgJALAAAWIAAB2IhCAAIAAk6IBCAAIAAB8QAKgOAPgIQANgHASAAQASAAAPAGQAPAFAKALQAKAMAGAPQAFAPAAAUIAACHg");
	this.shape_18.setTransform(64.75,-22.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#008FBE").s().p("AgECTQgOgEgJgLQgKgJgFgRQgFgQAAgYIAAhKIglAAIAAg8IAlAAIAAguIBBgkIAABSIA1AAIAAA8Ig1AAIAABFQAAARAFAGQAFAFAJAAQAKAAAIgHIAeAyQgMAKgOAFQgPAEgRAAQgRABgOgFg");
	this.shape_19.setTransform(44.475,-21.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#008FBE").s().p("AggCdIAAk6IBBAAIAAE6g");
	this.shape_20.setTransform(29.975,-22.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#008FBE").s().p("Ag9BsQgPgFgJgIQgKgJgFgLQgFgMAAgPQAAgRAHgOQAHgNANgJQAMgJASgGQASgEAXAAIAwAAIAAgCQAAgOgJgIQgKgIgSAAQgOAAgKAGQgKAFgFALIhAgdQARgVAZgOQAYgOAlAAQAyAAAZAYQAbAWAAArIAACDIhBAAIAAgdQgKAPgTAJQgTAKgZgBQgQAAgNgEgAgaAbQgIAGAAAJQAAARAaAAQAIAAAHgCIAPgIQAHgEAFgGQAGgHACgHIAAgDIgpAAQgSAAgJAFg");
	this.shape_21.setTransform(12.7,-17.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#008FBE").s().p("AguBoQgVgJgPgPQgPgPgHgVQgIgUAAgYQAAgWAJgUQAIgVAPgPQAQgPAUgJQAVgJAXAAQAZAAAVAIQAVAJAOAPQAQAPAHAUQAJAUAAAYIAAAXIigAAQAFAQANAJQANAIASAAQAPAAAMgGQAKgGAIgLIA2AgQgRAXgYAMQgXAMgkAAQgaAAgVgIgAAvgaQgGgOgLgIQgNgHgQAAQgPAAgNAIQgMAHgGAOIBcAAIAAAAg");
	this.shape_22.setTransform(-11.35,-17.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#008FBE").s().p("AAfCdIAAh6QABgSgJgLQgHgJgQAAQgPAAgJAJQgKALAAAWIAAB2IhDAAIAAk6IBDAAIAAB8QAKgOAPgIQAOgHARAAQASAAAPAGQAPAFAJALQALAMAFAPQAHAPAAAUIAACHg");
	this.shape_23.setTransform(-35.55,-22.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#008FBE").s().p("AguBoQgVgJgPgPQgPgPgHgVQgIgUAAgYQAAgWAJgUQAIgVAPgPQAQgPAUgJQAVgJAXAAQAZAAAVAIQAUAJAPAPQAPAPAJAUQAIAUAAAYIAAAXIigAAQAGAQAMAJQANAIASAAQAQAAAKgGQAMgGAGgLIA3AgQgRAXgYAMQgWAMglAAQgaAAgVgIgAAugaQgFgOgLgIQgMgHgRAAQgPAAgNAIQgMAHgGAOIBbAAIAAAAg");
	this.shape_24.setTransform(-68.6,-17.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#008FBE").s().p("AAkCdIg1hPIgbAgIAAAvIhDAAIAAk6IBDAAIAAC8IBJhZIBPAAIhOBcIBSB7g");
	this.shape_25.setTransform(-93.025,-22.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#008FBE").s().p("Ag9BsQgPgFgJgIQgKgJgFgLQgFgMAAgPQAAgRAHgOQAHgNANgJQAMgJASgGQASgEAXAAIAwAAIAAgCQAAgOgJgIQgJgIgTAAQgOAAgKAGQgKAFgFALIhAgdQARgVAZgOQAZgOAkAAQAxAAAbAYQAaAWAAArIAACDIhBAAIAAgdQgKAPgUAJQgRAKgagBQgQAAgNgEgAgaAbQgIAGAAAJQAAARAaAAQAIAAAHgCIAPgIQAHgEAGgGQAFgHACgHIAAgDIgpAAQgSAAgJAFg");
	this.shape_26.setTransform(-118.15,-17.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#008FBE").s().p("AghCSIAAjjIhPAAIAAhAIDhAAIAABAIhPAAIAADjg");
	this.shape_27.setTransform(-142.625,-21.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_takeHealthcare, new cjs.Rectangle(-201.5,-49.1,415.1,98.2), null);


(lib.txt_scheduleVisit = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#008FBE").s().p("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");
	this.shape.setTransform(-40.25,-1.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_scheduleVisit, new cjs.Rectangle(-149.6,-38.2,218.8,73.5), null);


(lib.txt_ScheduleAppt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#008FBE").s().p("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");
	this.shape.setTransform(-3.175,2.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ScheduleAppt, new cjs.Rectangle(-149.7,-38.2,293.1,81.7), null);


(lib.txt_messageCareTeam = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#008FBE").s().p("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");
	this.shape.setTransform(-10.525,-0.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_messageCareTeam, new cjs.Rectangle(-150.2,-35.9,279.4,71.19999999999999), null);


(lib.txt_ellisCounty = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#008FBE").s().p("AP8NOQgngPgdgWIBUh0QAMAOAQAIQAQAIAUAAQAcAAAVgOQAUgPAMghIAHgSIi6nKICdAAIBoENIBhkNICZAAIjGH2QgTAxgVAhQgUAhgZAVQgZAUgfAIQgfAJgpAAQgqAAgogOgAXVLvQAnggAUgbQATgcAEgdQgOAWgcAAQgfAAgTgUQgTgVAAgiQAAglAYgZQAZgYAoAAQAwAAAZAgQAYAgAAAsQAAA8geAtQgeAtg0AogAlmJsQgugxAAhaIAAkoICYAAIAAEMQAAApASAWQARAWAlAAQAhAAAVgWQAUgXAAgvIAAkFICWgBIAAHbIiUABIAAg3QgXAfggARQggARgnAAQhSAAgugygAMcKTQgfgKgWgWQgVgXgLgkQgLgkAAg1IAAikIhSAAIAAiCIBSAAIAAhoICShQIAAC4IB0AAIAACCIh0AAIAACcQAAAkALAMQALAMATAAQAVAAASgQIBDBvQgaAUgfAMQghAKglAAQgnAAgfgJgAs6KJQgvgTghghQgigigSgtQgTgtAAgzQAAgzATgtQASgtAighQAhgiAvgUQAvgTA4AAQA2AAAvATQAuAUAjAiQAiAhATAtQAUAtAAAzQAAAzgTAtQgTAtgiAiQghAhgvATQgvATg4AAQg4AAgvgTgAr8FCQgUAJgPAOQgOAPgIAUQgJATAAAWQAAAXAJATQAIAUAOAOQAPAPAUAIQAUAJAVAAQAXAAAUgJQATgIAPgPQAOgOAJgUQAIgTAAgXQAAgWgIgTQgJgUgOgPQgPgOgTgJQgUgIgXAAQgVAAgUAIgA2uKDQg8gagrgtQgrgsgYg8QgYg9AAhFQAAhGAZg8QAZg8AsgtQArgsA9gZQA8gaBHAAQAvAAAqAMQAqAMAlAUQAlAVAeAdQAeAeAVAjIiGBVQgWgrgmgZQgmgZg1AAQgmAAggAOQggAOgXAZQgXAYgMAhQgNAgAAAlQAAAmAMAgQANAgAWAYQAXAYAgAOQAfAOAnAAQA6AAAmgdQAngeAUguICOBMQgUAogeAhQgeAiglAYQgmAYgtANQgtANg0AAQhJAAg+gZgAGpKUIAAkNQAAgpgSgWQgSgXglAAQggAAgVAXQgVAXAAAwIAAEFIiWAAIAAnbICVAAIAAA3QAXgfAggRQAggRAoAAQBQAAAuAxQAvAxAABZIAAEqgAmAi+Qg5gigag/ICUgqQAKAdAZAOQAYAOAfAAQAcAAAPgLQAOgLAAgPQAAgKgIgHIgVgLIiGggQgegIgZgQQgZgQgQgZQgPgZAAgmQAAggAPgdQAOgcAcgVQAbgWAmgMQAmgMAuAAQApAAAgAJQAhAHAaAPQAaAPAVAVQAUAVASAaIiNArQgWgsg3AAQgbAAgOAIQgNAIAAAPQAAARAZAIICJAgQAfAJAaAQQAaARAQAaQAQAZAAAoQAAAegNAdQgNAdgbAYQgaAXgoAOQgpAOg3AAQheAAg5gigAqkimIAAnbICZAAIAAHbgAuFimIAAq1ICTAAIAAK1gAxmimIAAq1ICTAAIAAK1gA5ximIAAqCIG7AAIAACPIkiAAIAABpIEiAAIAACOIkiAAIAABuIEiAAIAACOgAqYq+QgYgZAAgnQAAgoAYgYQAYgaAoAAQAnAAAZAaQAZAYAAAoQAAAngZAZQgZAYgnAAQgoAAgYgYg");
	this.shape.setTransform(-86.625,-45.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ellisCounty, new cjs.Rectangle(-251.6,-131.8,330,172), null);


(lib.txt_Better = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// better_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5 = new cjs.Graphics().p("EgiIgD0MAgdgeSMAj0Al7MggdAeSg");
	var mask_graphics_6 = new cjs.Graphics().p("Egg2gDrIfC9IMAirAkfI/CdIg");
	var mask_graphics_7 = new cjs.Graphics().p("A/pjjIds8DMAhnAjJI9tcEg");
	var mask_graphics_8 = new cjs.Graphics().p("A+hjbIcc7DMAgmAh5I8bbEg");
	var mask_graphics_9 = new cjs.Graphics().p("A9djTIbR6IMAfqAgvI7RaIg");
	var mask_graphics_10 = new cjs.Graphics().p("A8fjMIaM5RIezfqI6MZQg");
	var mask_graphics_11 = new cjs.Graphics().p("A7mjGIZN4dIeAeqI5NYdg");
	var mask_graphics_12 = new cjs.Graphics().p("A6xjAIYS3vIdSdwI4TXvg");
	var mask_graphics_13 = new cjs.Graphics().p("A6Ci7IXd3FIcoc8I3eXFg");
	var mask_graphics_14 = new cjs.Graphics().p("A5Xi2IWu2fIcCcMI2vWfg");
	var mask_graphics_15 = new cjs.Graphics().p("A4yixIWF1/IbgbjI2FV+g");
	var mask_graphics_16 = new cjs.Graphics().p("A4SiuIVh1iIbEa/I1iVhg");
	var mask_graphics_17 = new cjs.Graphics().p("A33irIVE1JIaragI1DVJg");
	var mask_graphics_18 = new cjs.Graphics().p("A3gipIUq01IaXaII0qU0g");
	var mask_graphics_19 = new cjs.Graphics().p("A3PinIUX0lIaIZ0I0XUlg");
	var mask_graphics_20 = new cjs.Graphics().p("A3CilIUI0bIZ9ZmI0IUbg");
	var mask_graphics_21 = new cjs.Graphics().p("A27ilIUA0TIZ3ZdI0BUUg");
	var mask_graphics_22 = new cjs.Graphics().p("A24ikIT90SIZ0ZbIz9USg");
	var mask_graphics_47 = new cjs.Graphics().p("A24ikIT90SIZ0ZbIz9USg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:-9.775,y:-10.775}).wait(1).to({graphics:mask_graphics_6,x:7.125,y:-15.35}).wait(1).to({graphics:mask_graphics_7,x:23,y:-19.625}).wait(1).to({graphics:mask_graphics_8,x:37.85,y:-23.65}).wait(1).to({graphics:mask_graphics_9,x:51.675,y:-27.375}).wait(1).to({graphics:mask_graphics_10,x:64.5,y:-30.85}).wait(1).to({graphics:mask_graphics_11,x:76.275,y:-34.025}).wait(1).to({graphics:mask_graphics_12,x:87,y:-36.925}).wait(1).to({graphics:mask_graphics_13,x:96.75,y:-39.55}).wait(1).to({graphics:mask_graphics_14,x:105.45,y:-41.925}).wait(1).to({graphics:mask_graphics_15,x:113.125,y:-44}).wait(1).to({graphics:mask_graphics_16,x:119.8,y:-45.8}).wait(1).to({graphics:mask_graphics_17,x:125.4,y:-47.3}).wait(1).to({graphics:mask_graphics_18,x:130.025,y:-48.55}).wait(1).to({graphics:mask_graphics_19,x:133.625,y:-49.525}).wait(1).to({graphics:mask_graphics_20,x:136.175,y:-50.225}).wait(1).to({graphics:mask_graphics_21,x:137.725,y:-50.625}).wait(1).to({graphics:mask_graphics_22,x:138.225,y:-50.775}).wait(25).to({graphics:mask_graphics_47,x:138.225,y:-50.775}).wait(1).to({graphics:null,x:0,y:0}).wait(27));

	// ltBlue_better
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#028FBE").s().p("AJGFEQgxgUgigiQgigkgTgvQgSguAAg3QAAg2AUguQATgwAjgjQAjgjAwgUQAwgUA3AAQA4AAAvATQAvAUAiAhQAiAiAUAvQATAtAAA4IAAAvImLAAQANAxAlAcQAmAcA3AAQAsAAAegRQAfgSASgfIBoA9QgmA0g2AgQg2AfhTAAQg8AAgxgUgAMzAeQgNgugigYQgigZgyAAQgxAAgjAaQgjAagPArIEJAAIAAAAgApqFEQgxgUgigiQgigkgTgvQgSguAAg3QAAg2AUguQATgwAjgjQAjgjAwgUQAwgUA3AAQA4AAAvATQAvAUAiAhQAiAiAUAvQATAtAAA4IAAAvImLAAQANAxAlAcQAmAcA3AAQAsAAAegRQAfgSASgfIBoA9QgmA0g2AgQg2AfhTAAQg8AAgxgUgAl9AeQgNgugigYQgigZgyAAQgxAAgjAaQgjAagPArIEJAAIAAAAgADdEtQgrgqAAhlIAAjQIhcAAIAAhwIBcAAIAAhsIB9hJIAAC1ICDAAIAABwIiDAAIAADMQAAAnAQAPQAPAQAYAAQAZAAAVgSIA6BjQgYASgeAKQgeAKgjAAQhOAAgsgqgAiKEtQgrgqAAhlIAAjQIhcAAIAAhwIBcAAIAAhsIB9hJIAAC1ICBAAIAABwIiBAAIAADMQAAAnAPAPQAPAQAYAAQAYAAAVgSIA6BjQgXASgfAKQgeAKghAAQhPAAgrgqgAPLFOIAAnwIB9AAIAABMQASgsAkgUQAjgVAwAAQAZAAAWAFIAlAOIguB9IgcgMQgRgFgVAAQgxAAgdAbQgeAaAAA+IAAEHgA0kFOIAAqfIEWAAQBwAAA8AwQA8AxAABbQAAAvgTAiQgUAigmAVQAqAUAXAmQAWAmAAA0QAAAygQAlQgRAlgfAZQgfAZgtAMQgsANg5AAgAykDZICZAAQA2AAAbgXQAbgWAAgoQAAgngagWQgagWg+AAIiTAAgAykhCICaAAQA1AAAXgXQAXgWAAgjQAAgjgZgVQgYgUg0AAIiYAAg");
	this.shape.setTransform(-17.525,-1.025);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(3).to({_off:false},0).wait(43).to({_off:true},1).wait(27));

	// blue_better
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008FBE").s().p("AguAvQgSgSAAgdQAAgcASgSQASgSAcAAQAdAAASASQASASAAAcQAAAdgSASQgSASgdAAQgdAAgRgSg");
	this.shape_1.setTransform(121.8934,23.304,1.3769,1.3769);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003DA6").s().p("AJGFEQgxgUgigiQgigkgTgvQgSguAAg3QAAg2AUguQATgwAjgjQAjgjAwgUQAwgUA3AAQA4AAAvATQAvAUAiAhQAiAiAUAvQATAtAAA4IAAAvImLAAQANAxAlAcQAmAcA3AAQAsAAAegRQAfgSASgfIBoA9QgmA0g2AgQg2AfhTAAQg8AAgxgUgAMzAeQgNgugigYQgigZgyAAQgxAAgjAaQgjAagPArIEJAAIAAAAgApqFEQgxgUgigiQgigkgTgvQgSguAAg3QAAg2AUguQATgwAjgjQAjgjAwgUQAwgUA3AAQA4AAAvATQAvAUAiAhQAiAiAUAvQATAtAAA4IAAAvImLAAQANAxAlAcQAmAcA3AAQAsAAAegRQAfgSASgfIBoA9QgmA0g2AgQg2AfhTAAQg8AAgxgUgAl9AeQgNgugigYQgigZgyAAQgxAAgjAaQgjAagPArIEJAAIAAAAgADdEtQgrgqAAhlIAAjQIhcAAIAAhwIBcAAIAAhsIB9hJIAAC1ICDAAIAABwIiDAAIAADMQAAAnAQAPQAPAQAYAAQAZAAAVgSIA6BjQgYASgeAKQgeAKgjAAQhOAAgsgqgAiKEtQgrgqAAhlIAAjQIhcAAIAAhwIBcAAIAAhsIB9hJIAAC1ICBAAIAABwIiBAAIAADMQAAAnAPAPQAPAQAYAAQAYAAAVgSIA6BjQgXASgfAKQgeAKghAAQhPAAgrgqgAPLFOIAAnwIB9AAIAABMQASgsAkgUQAjgVAwAAQAZAAAWAFIAlAOIguB9IgcgMQgRgFgVAAQgxAAgdAbQgeAaAAA+IAAEHgA0kFOIAAqfIEWAAQBwAAA8AwQA8AxAABbQAAAvgTAiQgUAigmAVQAqAUAXAmQAWAmAAA0QAAAygQAlQgRAlgfAZQgfAZgtAMQgsANg5AAgAykDZICZAAQA2AAAbgXQAbgWAAgoQAAgngagWQgagWg+AAIiTAAgAykhCICaAAQA1AAAXgXQAXgWAAgjQAAgjgZgVQgYgUg0AAIiYAAg");
	this.shape_2.setTransform(-17.525,-1.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008FBE").s().p("AhABBQgZgZAAgoQAAgnAZgZQAZgZAnAAQAoAAAYAZQAaAZAAAnQAAAogaAZQgYAZgoAAQgnAAgZgZg");
	this.shape_3.setTransform(121.9,23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003DA6").s().p("AJGFEQgxgUgigiQgigkgTgvQgSguAAg3QAAg2AUguQATgwAjgjQAjgjAwgUQAwgUA3AAQA4AAAvATQAvAUAiAhQAiAiAUAvQATAtAAA4IAAAvImLAAQANAxAlAcQAmAcA3AAQAsAAAegRQAfgSASgfIBoA9QgmA0g2AgQg2AfhTAAQg8AAgxgUgAJcgnQgjAagPArIEJAAQgNgugigYQgigZgyAAQgxAAgjAagApqFEQgxgUgigiQgigkgTgvQgSguAAg3QAAg2AUguQATgwAjgjQAjgjAwgUQAwgUA3AAQA4AAAvATQAvAUAiAhQAiAiAUAvQATAtAAA4IAAAvImLAAQANAxAlAcQAmAcA3AAQAsAAAegRQAfgSASgfIBoA9QgmA0g2AgQg2AfhTAAQg8AAgxgUgApUgnQgjAagPArIEJAAQgNgugigYQgigZgyAAQgxAAgjAagADdEtQgrgqAAhlIAAjQIhcAAIAAhwIBcAAIAAhsIB9hJIAAC1ICDAAIAABwIiDAAIAADMQAAAnAQAPQAPAQAYAAQAZAAAVgSIA6BjQgYASgeAKQgeAKgjAAQhOAAgsgqgAiKEtQgrgqAAhlIAAjQIhcAAIAAhwIBcAAIAAhsIB9hJIAAC1ICBAAIAABwIiBAAIAADMQAAAnAPAPQAPAQAYAAQAYAAAVgSIA6BjQgXASgfAKQgeAKghAAQhPAAgrgqgAPLFOIAAnwIB9AAIAABMQASgsAkgUQAjgVAwAAQAZAAAWAFIAlAOIguB9IgcgMQgRgFgVAAQgxAAgdAbQgeAaAAA+IAAEHgA0kFOIAAqfIEWAAQBwAAA8AwQA8AxAABbQAAAvgTAiQgUAigmAVQAqAUAXAmQAWAmAAA0QAAAygQAlQgRAlgfAZQgfAZgtAMQgsANg5AAgAykDZICZAAQA2AAAbgXQAbgWAAgoQAAgngagWQgagWg+AAIiTAAgAykhCICaAAQA1AAAXgXQAXgWAAgjQAAgjgZgVQgYgUg0AAIiYAAg");
	this.shape_4.setTransform(-17.525,-1.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_4},{t:this.shape_3}]},43).to({state:[]},1).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.2,-35.4,280.1,68.8);


(lib.txt_accessResults = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#008FBE").s().p("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");
	this.shape.setTransform(-28.75,-0.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_accessResults, new cjs.Rectangle(-149.7,-35.9,242,71.19999999999999), null);


(lib.icon_badge = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1140A0").s().p("Ag2ieIBtAAIAADPIhtBtg");
	this.shape.setTransform(6.175,-16.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C8EBA").s().p("AhrA2IBshsIBrAAIAABsg");
	this.shape_1.setTransform(11.525,-6.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5B846").s().p("Ag2AAIAAhrIBtAAIAADXg");
	this.shape_2.setTransform(-6.15,-11.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1140A0").s().p("AieA2IAAhsIDPAAIBuBsg");
	this.shape_3.setTransform(-16.55,-6.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5B846").s().p("Ag2BsIAAjXIBtBsIAABrg");
	this.shape_4.setTransform(6.175,11.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1140A0").s().p("AgwA3IhuhtIE8AAIAABtg");
	this.shape_5.setTransform(16.55,6.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1140A0").s().p("Ag2CeIAAjOIBthuIAAE8g");
	this.shape_6.setTransform(-6.15,16.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C8EBA").s().p("AhrA3IAAhtIDXAAIhsBtg");
	this.shape_7.setTransform(-11.525,6.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_badge, new cjs.Rectangle(-32.4,-32.4,64.8,64.8), null);


(lib.BSWH_Txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#3C8EBA").s().p("ABgAVQgIgIAAgNQAAgLAIgIQAHgJANAAQAJAAAHAGQAGAFABAJIgMAAQAAgEgDgDQgEgCgEAAQgGAAgDACQgDADgCAEQgBAEAAAEQAAAIAEAFQADAGAIAAQAFAAADgDQADgEABgFIAMAAQgBAKgHAGQgGAGgKAAQgNAAgHgIgAD2AbIAAg1IApAAIAAAJIgdAAIAAAMIAaAAIAAAJIgaAAIAAANIAeAAIAAAKgADZAbIAAg1IAMAAIAAA1gAC8AbIAAgXIgWAAIAAAXIgMAAIAAg1IAMAAIAAAVIAWAAIAAgVIAMAAIAAA1gABEAbIgEgLIgVAAIgEALIgNAAIAVg1IAMAAIAVA1gAAuAHIAOAAIgGgUIgBAAgAAEAbIAAgXIgWAAIAAAXIgMAAIAAg1IAMAAIAAAVIAWAAIAAgVIAMAAIAAA1gAg1AbIgEgLIgUAAIgFALIgMAAIAUg1IANAAIAVA1gAhKAHIANAAIgGgUgAhyAbIgLgSIgNASIgNAAIATgbIgSgaIAPAAIAKARIALgRIANAAIgRAaIATAbgAipAbIgEgLIgUAAIgFALIgMAAIAVg1IAMAAIAVA1gAi+AHIAOAAIgHgUgAjxAbIgJgkIgBAAIgJAkIgMAAIgPg1IANAAIAIAkIAKgkIALAAIAKAkIAAAAIAJgkIALAAIgOA1g");
	this.shape.setTransform(-86.725,-7.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1140A0").s().p("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AAAAABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQgHANgPAIQgNAHgOAAQgPAAgMgGgAQGhZQgKAJgBAIQAAABAAAAQAAAAABAAQAAABAAAAQABAAABAAIAWAAQAdAAADgDQADgCAAgFQAAgIgGgFQgGgGgNAAQgNAAgLAKgAOhANQgHgIAAgPIAAhIIAAgIQgBgBgFAAIgJAAIgBgDQgBgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAOgEAGgGQAIgGAGgMQAEgCACAEIAAAOIABAFIAFABIAjAAQACACAAAFQAAAEgCACIgkAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAGIAAA6QAAARAEAHQAFAKAOAAQAFAAADgCIAIgEQAAAAAAAAQABAAAAAAQABABAAAAQAAABABAAIAAADQgFAGgHAEQgKAFgLAAQgSAAgIgKgAChANQgGgIAAgPIAAhIQAAgGgBgCQAAgBgFAAIgJAAIgCgDIABgEQAOgEAGgGQAHgGAGgMQAFgCACAEIAAAOIABAFIAEABIAjAAQADACAAAFQAAAEgDACIgjAAQgEAAgBABIAAAHIAAA6QAAARADAHQAFAKAPAAQAEAAAEgCIAIgEQAAAAAAAAQABAAAAAAQAAABABAAQAAABABAAIAAADQgFAGgIAEQgJAFgLAAQgTAAgIgKgABDANQgGgIAAgPIAAhIQAAgGgBgCIgGgBIgJAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAOgEAGgGQAHgGAGgMQAFgCACAEIAAAOIABAFIAFABIAjAAQACACAAAFQAAAFgCABIgkAAQgBAAgBAAQgBAAAAABQgBAAAAAAQAAAAAAAAQgBABAAAGIAAA6QAAARADAHQAFAKAOAAQAFAAAEgCIAIgEQAAAAABAAQAAAAAAAAQABABAAAAQAAABABAAIAAADQgNAPgUAAQgTAAgHgKgAhRAFQgTgRAAgdQAAgdATgUQAUgTAcAAQAbAAARASQATATAAAcQAAAegTASQgRATgeAAQgbAAgSgSgAg/hVQgKAPAAAZQAAAYAKAQQALASAUAAQATAAAJgQQAHgOAAgVQAAgYgJgRQgKgUgVAAQgQAAgKAOgAjHAHQg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");
	this.shape_1.setTransform(-86.9062,-41.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_Txt, new cjs.Rectangle(-197.1,-61.9,220.4,57.3), null);


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

	// blue_bottom
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B449D").s().p("AgFAQIAAgUIALgLIAAAfg");
	this.shape.setTransform(-0.625,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B449D").s().p("AgWBBIAAhUIAtgtIAACBg");
	this.shape_1.setTransform(-2.525,6.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B449D").s().p("AgkBsIAAiMIBJhLIAADXg");
	this.shape_2.setTransform(-4.175,11.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B449D").s().p("AgxCQIAAi8IBihjIAAEfg");
	this.shape_3.setTransform(-5.55,15.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B449D").s().p("Ag7CtIAAjiIB3h3IAAFZg");
	this.shape_4.setTransform(-6.675,18.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B449D").s().p("AhDDEIAAkAICHiHIAAGHg");
	this.shape_5.setTransform(-7.575,20.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1B449D").s().p("AhIDUIAAkVICRiTIAAGog");
	this.shape_6.setTransform(-8.225,22.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B449D").s().p("AhMDeIAAkiICYiZIAAG7g");
	this.shape_7.setTransform(-8.6,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1B449D").s().p("AhNDiIAAknICbicIAAHDg");
	this.shape_8.setTransform(-8.725,23.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},6).to({state:[]},1).wait(352));

	// blue_Rt
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1B449D").s().p("AgEAFIgLgKIAfAAIAAAKg");
	this.shape_9.setTransform(1.7,0.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1B449D").s().p("AgTAWIgtgsICBAAIAAAsg");
	this.shape_10.setTransform(6.825,2.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1B449D").s().p("AggAlIhLhJIDXAAIAABJg");
	this.shape_11.setTransform(11.275,4.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1B449D").s().p("AgsAyIhjhiIEfAAIAABig");
	this.shape_12.setTransform(15.075,5.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B449D").s().p("Ag1A8Ih3h3IFZAAIAAB3g");
	this.shape_13.setTransform(18.15,6.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1B449D").s().p("Ag8BEIiHiHIGHAAIAACHg");
	this.shape_14.setTransform(20.525,7.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1B449D").s().p("AhBBJIiTiRIGoAAIAACRg");
	this.shape_15.setTransform(22.25,8.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1B449D").s().p("AhEBNIiZiYIG7AAIAACYg");
	this.shape_16.setTransform(23.3,8.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B449D").s().p("AhFBOIicibIHDAAIAACbg");
	this.shape_17.setTransform(23.625,8.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},9).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},2).to({state:[]},1).wait(352));

	// lt_blue_lt
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1690BF").s().p("AgKAFIAAgKIAVAAIgLAKg");
	this.shape_18.setTransform(-1.15,0.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1690BF").s().p("AgsAWIAAgsIBZAAIgtAsg");
	this.shape_19.setTransform(-4.725,2.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1690BF").s().p("AhJAlIAAhJICTAAIhKBJg");
	this.shape_20.setTransform(-7.825,4.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1690BF").s().p("AhhAyIAAhiIDDAAIhiBig");
	this.shape_21.setTransform(-10.425,5.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1690BF").s().p("Ah1A8IAAh3IDrAAIh2B3g");
	this.shape_22.setTransform(-12.55,6.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1690BF").s().p("AiFBEIAAiHIELAAIiHCHg");
	this.shape_23.setTransform(-14.225,7.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1690BF").s().p("AiQBJIAAiRIEhAAIiSCRg");
	this.shape_24.setTransform(-15.425,8.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1690BF").s().p("AiXBNIAAiYIEvAAIiYCYg");
	this.shape_25.setTransform(-16.15,8.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1690BF").s().p("AiZBOIAAibIEzAAIibCbg");
	this.shape_26.setTransform(-16.375,8.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},11).to({state:[]},1).wait(352));

	// blue_lt
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1B449D").s().p("AgPAGIAAgLIAUAAIALALg");
	this.shape_27.setTransform(-1.675,-0.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1B449D").s().p("AhAAXIAAgtIBUAAIAtAtg");
	this.shape_28.setTransform(-6.8,-2.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1B449D").s().p("AhrAlIAAhJICMAAIBLBJg");
	this.shape_29.setTransform(-11.25,-4.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1B449D").s().p("AiPAyIAAhiIC8AAIBjBig");
	this.shape_30.setTransform(-15,-5.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1B449D").s().p("AitA8IAAh3IDjAAIB4B3g");
	this.shape_31.setTransform(-18.075,-6.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1B449D").s().p("AjEBEIAAiHIEAAAICICHg");
	this.shape_32.setTransform(-20.45,-7.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1B449D").s().p("AjUBJIAAiRIEWAAICTCRg");
	this.shape_33.setTransform(-22.175,-8.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1B449D").s().p("AjeBNIAAiYIEjAAICaCYg");
	this.shape_34.setTransform(-23.225,-8.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1B449D").s().p("AjhBOIAAibIEnAAICcCbg");
	this.shape_35.setTransform(-23.55,-8.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27}]},7).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},4).to({state:[]},1).wait(352));

	// yellow_top
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FDB61B").s().p("AgFAAIAAgKIALAAIAAAVg");
	this.shape_36.setTransform(-0.625,-1.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FDB61B").s().p("AgWAAIAAgsIAtAAIAABZg");
	this.shape_37.setTransform(-2.525,-4.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FDB61B").s().p("AgkAAIAAhJIBJAAIAACTg");
	this.shape_38.setTransform(-4.175,-7.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FDB61B").s().p("AgxAAIAAhhIBiAAIAADDg");
	this.shape_39.setTransform(-5.55,-10.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FDB61B").s().p("Ag7AAIAAh1IB3AAIAADrg");
	this.shape_40.setTransform(-6.675,-12.575);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FDB61B").s().p("AhDgBIAAiEICHAAIAAELg");
	this.shape_41.setTransform(-7.575,-14.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FDB61B").s().p("AhIAAIAAiQICRAAIAAEhg");
	this.shape_42.setTransform(-8.225,-15.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FDB61B").s().p("AhMAAIAAiXICYAAIAAEvg");
	this.shape_43.setTransform(-8.6,-16.175);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FDB61B").s().p("AhNgBIAAiYICbAAIAAEzg");
	this.shape_44.setTransform(-8.725,-16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36}]}).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},11).to({state:[]},1).wait(352));

	// blue_top
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1B449D").s().p("AgFgPIAKAAIAAAUIgKALg");
	this.shape_45.setTransform(0.65,-1.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1B449D").s().p("AgWhAIAsAAIAABUIgsAtg");
	this.shape_46.setTransform(2.55,-6.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1B449D").s().p("AgkhrIBJAAIAACMIhJBLg");
	this.shape_47.setTransform(4.225,-11.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1B449D").s().p("AgwiPIBiAAIAAC8IhiBjg");
	this.shape_48.setTransform(5.65,-15.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1B449D").s().p("Ag7itIB3AAIAADjIh3B4g");
	this.shape_49.setTransform(6.775,-18.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1B449D").s().p("AhDjDICHAAIAAEAIiHCHg");
	this.shape_50.setTransform(7.675,-20.475);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1B449D").s().p("AhIjUICRAAIAAEWIiRCSg");
	this.shape_51.setTransform(8.325,-22.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1B449D").s().p("AhLjeICYAAIAAEkIiYCZg");
	this.shape_52.setTransform(8.7,-23.25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1B449D").s().p("AhNjhICbAAIAAEnIibCcg");
	this.shape_53.setTransform(8.825,-23.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_45}]},5).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},6).to({state:[]},1).wait(352));

	// lt_blue_rt
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1690BF").s().p("AgKAGIAKgLIALAAIAAALg");
	this.shape_54.setTransform(1.2,-0.625);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1690BF").s().p("AgsAXIAsgtIAtAAIAAAtg");
	this.shape_55.setTransform(4.775,-2.525);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1690BF").s().p("AhJAlIBKhJIBJAAIAABJg");
	this.shape_56.setTransform(7.875,-4.175);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1690BF").s().p("AhhAyIBihiIBhAAIAABig");
	this.shape_57.setTransform(10.525,-5.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1690BF").s().p("Ah1A8IB2h3IB1AAIAAB3g");
	this.shape_58.setTransform(12.65,-6.725);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1690BF").s().p("AiFBEICGiHICFAAIAACHg");
	this.shape_59.setTransform(14.325,-7.625);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1690BF").s().p("AiQBJICRiRICQAAIAACRg");
	this.shape_60.setTransform(15.525,-8.275);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1690BF").s().p("AiXBNICYiYICXAAIAACYg");
	this.shape_61.setTransform(16.25,-8.65);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1690BF").s().p("AiZBOICaibICZAAIAACbg");
	this.shape_62.setTransform(16.475,-8.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54}]},3).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_62}]},8).to({state:[]},1).wait(352));

	// yellow_bottom
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FDB61B").s().p("AgFALIAAgVIAKAKIAAALg");
	this.shape_63.setTransform(0.65,1.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FDB61B").s().p("AgWAtIAAhZIAsAsIAAAtg");
	this.shape_64.setTransform(2.55,4.775);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FDB61B").s().p("AgkBKIAAiTIBJBKIAABJg");
	this.shape_65.setTransform(4.225,7.875);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FDB61B").s().p("AgwBiIAAjDIBiBiIAABhg");
	this.shape_66.setTransform(5.65,10.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FDB61B").s().p("Ag7B2IAAjrIB3B2IAAB1g");
	this.shape_67.setTransform(6.775,12.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FDB61B").s().p("AhDCGIAAkLICHCHIAACEg");
	this.shape_68.setTransform(7.675,14.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FDB61B").s().p("AhICRIAAkhICRCSIAACPg");
	this.shape_69.setTransform(8.325,15.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FDB61B").s().p("AhLCYIAAkvICYCYIAACXg");
	this.shape_70.setTransform(8.7,16.225);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FDB61B").s().p("AhNCaIAAkzICbCaIAACZg");
	this.shape_71.setTransform(8.825,16.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_63}]},2).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},9).to({state:[]},1).wait(352));

	// Registration
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(27,68,157,0.667)").s().p("AgNAOQgGgFAAgJQAAgHAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQAEgFgEgSQgCgCgGAAQgFAAgKACgAAAABIgDAKIgEAAIAAgVIAIAAIAJAVg");
	this.shape_72.setTransform(3.075,35.85);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(27,68,157,0.722)").s().p("AgNAOQgGgFAAgJQAAgHAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQADgEgDgTQgCgBgGAAIgPABgAgGALIgBgBIAAgUIAHAAIAAAAIgGAAIAAAQIAAAEIADAAIAAABIgDAAgAgDAKgAgCAFIACgCIAAgBIgBADIgCAFg");
	this.shape_73.setTransform(3.075,35.85);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(27,68,157,0.776)").s().p("AgNAOQgGgFAAgJQAAgHAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQADgEgEgTQgBgBgGAAIgPABgAgGALIgBgBIAAgUIAIAAIAEAKIgFgJIgGAAIAAANIABADIADAAIgBADIgCABgAAGAJIgGgHIgBACIgBADIAAgCIABgBIACgDIAGADIACAHgAgCAHg");
	this.shape_74.setTransform(3.075,35.85);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(27,68,157,0.835)").s().p("AgNAOQgGgFAAgJQAAgHAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQADgEgEgTQgBgCgGAAIgPACgAgFALIgCgBIAAgUIAIAAIADAHIgEgGIgFAAIAAAMIABACIACAAIgBAFIgCABgAAGAKIgGgIIAAAAIgBABIABgBIACgCIAEACIADAIg");
	this.shape_75.setTransform(3.075,35.85);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(27,68,157,0.89)").s().p("AgNAOQgGgFAAgJQAAgHAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQAEgFgFgTQgBgBgFAAQgFAAgLACgAgFALIgCAAIAAgVIAIAAIACAGIgDgEIgEAAIAAAJIABACIAAAAIAAAGIgBACgAAGAKIgGgHIAAgBIgBAAIABgBIACgBIADAAIAEAKg");
	this.shape_76.setTransform(3.075,35.85);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(27,68,157,0.945)").s().p("AgNAOQgGgFAAgJQAAgHAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQAEgFgFgTQgCgBgFAAQgFAAgKACgAgEALIgDAAIAAgVIAIAAIADAFIgEgDIgEAAIAAAIIACABIABAAIABgBIADAAIACAAIAEAKIgDABIgFgIIgBgBIgDAAIgBAJg");
	this.shape_77.setTransform(3.075,35.85);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1B449D").s().p("AgNAOQgGgFAAgJQAAgHAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQAEgFAAgHQAAgGgEgFQgFgEgHAAQgGAAgFAEgAAGALIgGgKIgDAAIAAAKIgEAAIAAgVIAIAAQAIgBAAAHQAAAEgGABIAHAKgAgDAAIADAAQAGAAAAgEQAAgDgFAAIgEAAg");
	this.shape_78.setTransform(3.075,35.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_72}]},13).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[]},1).wait(352));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.4,-46.1,106.5,92.30000000000001);


(lib.badge_BG = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkGGkQhBAAguguQguguAAhBIAAoNQAAhBAuguQAuguBBAAIINAAQBBAAAuAuQAuAuAABBIAAINQAABBguAuQguAuhBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.badge_BG, new cjs.Rectangle(-42,-42,84,84), null);


(lib.background_gradient = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.gradient_background();
	this.instance.setTransform(-136.2,-162.95,0.5824,0.5576);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_gradient, new cjs.Rectangle(-136.2,-162.9,178.2,202.9), null);


(lib.Phone_02_group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// yellow_masdk (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_8 = new cjs.Graphics().p("AqyDRIAAmhIVlAAIAAGhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_8,x:281.6,y:222.5}).wait(84));

	// Yellow_bar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5B846").s().p("AplC+IGSl8IM4AAIABF9g");
	this.shape.setTransform(410.85,225.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5B846").s().p("AplC+IGRl8IM6AAIAAF9g");
	this.shape_1.setTransform(404.1,225.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5B846").s().p("ApmC+IGSl8IM6AAIABF9g");
	this.shape_2.setTransform(383.8,225.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5B846").s().p("ApoC/IGTl+IM+AAIABF/g");
	this.shape_3.setTransform(350,225.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5B846").s().p("AprC/IGVl/INBAAIABGAg");
	this.shape_4.setTransform(316.175,225.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5B846").s().p("ApsDAIGWmAINCAAIABGBg");
	this.shape_5.setTransform(295.875,225.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5B846").s().p("ApsDAIGWmAINDAAIAAGBg");
	this.shape_6.setTransform(289.125,225.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},8).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(78));

	// phone_top
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1140A0").s().p("AlPAcIAAg3IKfAAIAAA3g");
	this.shape_7.setTransform(277.2,18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1140A0").s().p("AlPBzIAAjlIKfAAIAADlg");
	this.shape_8.setTransform(277.2,26.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1140A0").s().p("AlPCQIAAkfIKfAAIAAEfg");
	this.shape_9.setTransform(277.2,29.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1140A0").s().p("AlPCHIAAkNIKfAAIAAENg");
	this.shape_10.setTransform(277.2,28.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1140A0").s().p("AlPCCIAAkDIKfAAIAAEDg");
	this.shape_11.setTransform(277.2,28.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1140A0").s().p("AlPCAIAAj/IKfAAIAAD/g");
	this.shape_12.setTransform(277.2,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},8).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(79));

	// phone_frame
	this.instance = new lib.phone_frame();
	this.instance.setTransform(277.6,123.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(84));

	// dot_wht
	this.instance_1 = new lib.dot_wht();
	this.instance_1.setTransform(256.4,196.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({y:184.4},3).to({y:192.4},3).wait(73));

	// dot_wht
	this.instance_2 = new lib.dot_wht();
	this.instance_2.setTransform(277.2,196.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({y:184.4},3).to({y:192.4},3).wait(71));

	// dot_wht
	this.instance_3 = new lib.dot_wht();
	this.instance_3.setTransform(297.6,196.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({y:184.4},3).to({y:192.4},3).wait(69));

	// man_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_8 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_1_graphics_8,x:280.4,y:122.8}).wait(84));

	// head
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1140A0").s().p("AiyDuQhKhLAAhoIAAh0QAAhpBKhKQBKhLBoABQBpgBBKBLQBKBKAABpIAAB0QAABohKBLQhKBJhpABQhogBhKhJg");
	this.shape_13.setTransform(276.95,264.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1140A0").s().p("AiyDuQhKhLAAhpIAAhzQAAhpBKhLQBKhJBoAAQBpAABKBJQBKBLAABpIAABzQAABphKBLQhKBJhpAAQhoAAhKhJg");
	this.shape_14.setTransform(276.95,203.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1140A0").s().p("AiyDuQhKhLAAhoIAAh1QAAhoBKhLQBKhJBoAAQBpAABKBJQBKBLAABoIAAB1QAABohKBLQhKBJhpAAQhoAAhKhJg");
	this.shape_15.setTransform(276.95,155.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1140A0").s().p("AiyDtQhKhJAAhqIAAh0QAAhoBKhLQBKhJBogBQBpABBKBJQBKBLAABoIAAB0QAABqhKBJQhKBKhpAAQhoAAhKhKg");
	this.shape_16.setTransform(276.95,121.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1140A0").s().p("AiyDuQhKhLAAhoIAAh0QAAhpBKhKQBKhKBoAAQBpAABKBKQBKBKAABpIAAB0QAABohKBLQhKBJhpABQhogBhKhJg");
	this.shape_17.setTransform(276.95,101.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1140A0").s().p("AiyDtQhKhJAAhqIAAh0QAAhoBKhLQBKhJBogBQBpABBKBJQBKBLAABoIAAB0QAABqhKBJQhKBLhpgBQhoABhKhLg");
	this.shape_18.setTransform(276.95,94.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1140A0").s().p("AijD3QhOhFgHhpIgHhzQgGhoBGhPQBFhOBpgGQBngGBOBFQBOBGAHBoIAGBzQAHBphGBOQhGBOhoAGIgRABQhdAAhHhAg");
	this.shape_19.setTransform(275.104,96.879);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1140A0").s().p("AiZD+QhRhDgLhnIgLh0QgLhoBChRQBDhRBogKQBmgLBSBCQBRBCAKBoIAMB0QALBohCBRQhDBRhoALIgcABQhWAAhGg5g");
	this.shape_20.setTransform(273.8065,97);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1140A0").s().p("AiSECQhThAgOhoIgOhzQgNhoBAhTQBAhSBogOQBngNBSBAQBTBAAOBoIAOBzQAOBohBBTQhABThoANQgRACgRAAQhTAAhEg1g");
	this.shape_21.setTransform(273.0321,97.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1140A0").s().p("AiQEDQhUg/gOhoIgQhzQgOhoBAhTQA/hUBogOQBngOBTBAQBUA/AOBoIAPBzQAPBohABTQhABUhnAOQgTACgSAAQhRAAhEg0g");
	this.shape_22.setTransform(272.7583,97.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1140A0").s().p("AicD7QhQhDgKhoIgKh0QgJhoBEhQQBDhQBogJQBngJBQBDQBRBEAIBoIAKBzQAKBohEBRQhDBQhoAJIgYABQhYAAhHg8g");
	this.shape_23.setTransform(274.2557,96.9747);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1140A0").s().p("AimD1QhNhFgGhqIgFhzQgFhoBGhOQBHhOBogFQBngEBOBGQBNBGAGBpIAFBzQAFBphGBNQhHBOhoAEIgOABQhfAAhIhCg");
	this.shape_24.setTransform(275.45,96.8501);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1140A0").s().p("AitDxQhLhJgChoIgDh0QgChoBIhNQBJhLBogCQBogDBMBJQBLBJACBoIADB0QACBphIBMQhJBLhoACIgHAAQhjAAhKhGg");
	this.shape_25.setTransform(276.275,96.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1140A0").s().p("AixDuQhKhJgBhpIAAh0QgBhoBKhMQBKhJBogBQBogBBLBKQBKBKABBpIAABzQABBphKBLQhKBKhoAAIgCABQhmAAhLhKg");
	this.shape_26.setTransform(276.775,96.75);

	var maskedShapeInstanceList = [this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13}]},8).to({state:[{t:this.shape_14,p:{y:203.4}}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18,p:{y:94.35}}]},1).to({state:[{t:this.shape_18,p:{y:95.7}}]},1).to({state:[{t:this.shape_18,p:{y:96.5}}]},1).to({state:[{t:this.shape_14,p:{y:96.75}}]},1).to({state:[{t:this.shape_14,p:{y:96.75}}]},20).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_14,p:{y:96.75}}]},1).wait(47));

	// Body
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1140A0").s().p("AnIIgIAAp2QgBhyA2hkQAzhhBbg/QAzgkA8gVQBJgaBNAAQBQAABQAdQA8AXAzAlQBWBAAyBfQAzBiAABvIAAJ2g");
	this.shape_27.setTransform(276.95,347.125);
	this.shape_27._off = true;

	var maskedShapeInstanceList = [this.shape_27];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(8).to({_off:false},0).wait(1).to({y:284.075},0).wait(1).to({y:234.975},0).wait(1).to({y:199.975},0).wait(1).to({y:178.925},0).wait(1).to({y:171.925},0).wait(1).to({y:175.925},0).wait(1).to({y:178.325},0).wait(1).to({y:179.125},0).wait(76));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-52.6,350.7,296);


(lib.phone_01_group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Yellow_bar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5B846").s().p("Ai7l7IF3F6IAAF7Il2ACg");
	this.shape.setTransform(182.825,52.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5B846").s().p("Ai7l6IF3F6IAAF6Il2ABg");
	this.shape_1.setTransform(175.425,163.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5B846").s().p("AkKj9IISCKIADFvIjhACg");
	this.shape_2.setTransform(163.75,217.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5B846").s().p("Ak5C3IDVltIGeADIgBFqg");
	this.shape_3.setTransform(159.1,224.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5B846").s().p("AndC2IE1lsIKFACIAAFrg");
	this.shape_4.setTransform(142.8,224.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5B846").s().p("Ao/C2IFvlsIMPABIABFsg");
	this.shape_5.setTransform(133.025,224.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5B846").s().p("ApfC2IGBlsIM+AAIABFtg");
	this.shape_6.setTransform(129.75,225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1,p:{x:175.425,y:163.4}}]},1).to({state:[{t:this.shape_1,p:{x:174.275,y:184.2}}]},1).to({state:[{t:this.shape_1,p:{x:171.425,y:205.05}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(79));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:181.325,y:70.55},0).wait(1).to({x:180.125,y:88.55},0).wait(1).to({x:178.975,y:106.55},0).wait(1).to({x:177.775,y:124.55},0).wait(1).to({x:176.575,y:142.55},0).to({_off:true},1).wait(86));

	// phone_top
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1140A0").s().p("AlPAWIAAgrIKfAAIAAArg");
	this.shape_7.setTransform(117.2,17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1140A0").s().p("AlPB3IAAjtIKfAAIAADtg");
	this.shape_8.setTransform(117.2,27.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1140A0").s().p("AlPCYIAAkvIKfAAIAAEvg");
	this.shape_9.setTransform(117.2,30.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1140A0").s().p("AlPCLIAAkVIKfAAIAAEVg");
	this.shape_10.setTransform(117.2,29.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1140A0").s().p("AlPCDIAAkFIKfAAIAAEFg");
	this.shape_11.setTransform(117.2,28.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1140A0").s().p("AlPCAIAAj/IKfAAIAAD/g");
	this.shape_12.setTransform(117.2,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},7).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(80));

	// Layer_16
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#113FA0").ss(18).p("ArwwGIXhAAMAAAAgNI3hAAg");
	this.shape_13.setTransform(115.575,131.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#113FA0").ss(18).p("ArgwRIXBAAMAAAAgjI3BAAg");
	this.shape_14.setTransform(116.075,130.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#113FA0").ss(18).p("ArQwcIWhAAMAAAAg5I2hAAg");
	this.shape_15.setTransform(116.6,129.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#113FA0").ss(18).p("Aq/wnIV/AAMAAAAhPI1/AAg");
	this.shape_16.setTransform(117.1,128);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#113FA0").ss(18).p("AqvwyIVfAAMAAAAhlI1fAAg");
	this.shape_17.setTransform(117.6,126.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#113FA0").ss(18).p("Aqew9IU9AAMAAAAh7I09AAg");
	this.shape_18.setTransform(118.125,125.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#113FA0").ss(18,0,1).p("AqOxIIUdAAMAAAAiRI0dAAg");
	this.shape_19.setTransform(118.625,124.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},1).wait(84));

	// Layer_18
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1140A0").ss(18.4).p("AAAwrMAAAAhX");
	this.shape_20.setTransform(40.2,136.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#1140A0").ss(18.4).p("AAAQdMAAAgg5");
	this.shape_21.setTransform(40.3,134.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[]},1).wait(90));

	// Layer_19
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1140A0").ss(18.4).p("AAAL8IAA33");
	this.shape_22.setTransform(192.35,161.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).to({_off:true},1).wait(91));

	// Layer_3
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1140A0").ss(18.4).p("AtGAAIaNAA");
	this.shape_23.setTransform(117.625,233.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1140A0").ss(18.4).p("AslAAIZLAA");
	this.shape_24.setTransform(116.5,233.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23}]}).to({state:[{t:this.shape_24}]},1).to({state:[]},1).wait(90));

	// top_square
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1140A0").s().p("AheBfIAAi9IC9AAIAAC9g");
	this.shape_25.setTransform(78.2,119);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1140A0").s().p("Ag2BfIAAi9IBtAAIAAC9g");
	this.shape_26.setTransform(74.175,119);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1140A0").s().p("AgZBfIAAi9IAzAAIAAC9g");
	this.shape_27.setTransform(71.3,119);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1140A0").s().p("AgIBfIAAi9IARAAIAAC9g");
	this.shape_28.setTransform(69.575,119);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1140A0").s().p("AgCBfIAAi9IAFAAIAAC9g");
	this.shape_29.setTransform(69,119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25}]}).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).wait(87));

	// middle_square
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1140A0").s().p("AhfBgIAAi/IC/AAIAAC/g");
	this.shape_30.setTransform(78.425,157.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1140A0").s().p("Ag3BgIAAi/IBuAAIAAC/g");
	this.shape_31.setTransform(74.4,157.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1140A0").s().p("AgaBgIAAi/IA1AAIAAC/g");
	this.shape_32.setTransform(71.525,157.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1140A0").s().p("AgJBgIAAi/IASAAIAAC/g");
	this.shape_33.setTransform(69.8,157.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1140A0").s().p("AgDBgIAAi/IAHAAIAAC/g");
	this.shape_34.setTransform(69.225,157.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[]},1).wait(87));

	// bottom_square
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1140A0").s().p("AhfBhIAAjBIC/AAIAADBg");
	this.shape_35.setTransform(78.275,195.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1140A0").s().p("Ag3BhIAAjBIBvAAIAADBg");
	this.shape_36.setTransform(74.25,195.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1140A0").s().p("AgaBhIAAjBIA1AAIAADBg");
	this.shape_37.setTransform(71.375,195.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1140A0").s().p("AgJBhIAAjBIATAAIAADBg");
	this.shape_38.setTransform(69.65,195.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1140A0").s().p("AgDBhIAAjBIAHAAIAADBg");
	this.shape_39.setTransform(69.075,195.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35}]}).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[]},1).wait(87));

	// top_line
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1140A0").s().p("AlSBgIgBi+IKlAAIACC+g");
	this.shape_40.setTransform(130.35,118.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1140A0").s().p("Ai/BgIgBi+IGAAAIABC+g");
	this.shape_41.setTransform(115.65,118.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1140A0").s().p("AhWBgIgBi+ICtAAIACC+g");
	this.shape_42.setTransform(105.15,118.95);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1140A0").s().p("AgXBgIgBi+IAvAAIACC+g");
	this.shape_43.setTransform(98.85,118.95);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1140A0").s().p("AgCBgIgBi+IAGAAIABC+g");
	this.shape_44.setTransform(96.75,118.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40}]}).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[]},1).wait(87));

	// middle_line
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1140A0").s().p("AlTBgIAAi/IKnAAIAAC/g");
	this.shape_45.setTransform(130.45,157.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1140A0").s().p("AjABgIAAi/IGBAAIAAC/g");
	this.shape_46.setTransform(115.75,157.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1140A0").s().p("AhXBgIAAi/ICvAAIAAC/g");
	this.shape_47.setTransform(105.25,157.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1140A0").s().p("AgYBgIAAi/IAxAAIAAC/g");
	this.shape_48.setTransform(98.95,157.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1140A0").s().p("AgDBgIAAi/IAGAAIAAC/g");
	this.shape_49.setTransform(96.85,157.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45}]}).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[]},1).wait(87));

	// bottom_line
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1140A0").s().p("AlSBhIAAjBIKlAAIAADBg");
	this.shape_50.setTransform(130.575,194.975);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1140A0").s().p("Ai/BhIAAjBIF/AAIAADBg");
	this.shape_51.setTransform(115.875,194.975);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1140A0").s().p("AhWBhIAAjBICtAAIAADBg");
	this.shape_52.setTransform(105.375,194.975);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1140A0").s().p("AgXBhIAAjBIAvAAIAADBg");
	this.shape_53.setTransform(99.075,194.975);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1140A0").s().p("AgCBhIAAjBIAFAAIAADBg");
	this.shape_54.setTransform(96.975,194.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50}]}).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[]},1).wait(87));

	// phone_frame
	this.instance = new lib.phone_frame();
	this.instance.setTransform(117.5,123.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(84));

	// top_line
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1140A0").s().p("AqZCTIAAklIU0AAIAAElg");
	this.shape_55.setTransform(97.6,29.175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1140A0").s().p("AtLCTIAAklIaXAAIAAElg");
	this.shape_56.setTransform(115.5,29.175);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1140A0").s().p("As6CKIAAkUIZ1ABIAAEUg");
	this.shape_57.setTransform(116.05,28.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1140A0").s().p("AspBuIAAjaIZTAAIAADag");
	this.shape_58.setTransform(116.6,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55}]}).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[]},1).wait(88));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.5,-52.6,186.3,304.7);


(lib.dr_icon_group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// man_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_10 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:-26.8,y:122.8}).wait(82));

	// dot_wht
	this.instance = new lib.dot_wht();
	this.instance.setTransform(-47.8,198);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({y:188.8},3,cjs.Ease.quadOut).to({y:192.4},3,cjs.Ease.quadOut).wait(73));

	// dot_wht
	this.instance_1 = new lib.dot_wht();
	this.instance_1.setTransform(-27,198);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({y:188.8},3,cjs.Ease.quadOut).to({y:192.4},3,cjs.Ease.quadOut).wait(71));

	// dot_wht
	this.instance_2 = new lib.dot_wht();
	this.instance_2.setTransform(-6.6,198);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({y:188.8},3,cjs.Ease.quadOut).to({y:192.4},3,cjs.Ease.quadOut).wait(69));

	// dr_head
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1140A0").s().p("AivD7QhJhJAAhnIAAiVQAAhnBJhJQBJhJBmAAQBnAABJBJQBJBJAABnIAACVQAABnhJBJQhJBJhnAAQhmAAhJhJg");
	this.shape.setTransform(-26.925,279.375);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1140A0").s().p("AhxEaQhVgtgdhdQgchOAEhWQAEhbAshJQAuhWBdgdQBcgcBWAuQBWAtAcBdQAcBOgFBWQgDBbgtBKQgtBVhdAdQgjALgiAAQg3AAg2gdg");
	this.shape_1.setTransform(-25.4434,95.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1140A0").s().p("AhEExQhfgbgxhWQgwhOAHhgQAGhRAZhLQAaheBWgxQBWgxBdAaQBgAaAwBXQAxBPgIBfQgGBRgZBLQgaBfhVAwQg4Agg7AAQggAAghgJg");
	this.shape_2.setTransform(-24.3686,95.4636);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1140A0").s().p("AgqE+QhkgPg9hRQg9hQAKhlQAIhLAMhLQAOhkBSg+QBRg9BkAPQBlAPA8BRQA9BRgKBkQgIBMgMBLQgOBkhSA9QhBAxhNAAQgTAAgUgDg");
	this.shape_3.setTransform(-23.7245,95.4921);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1140A0").s().p("AghFDQhmgLhBhQQhBhQALhnIAQiVQAKhmBRhBQBQhBBlALQBnAKBABRQBBBQgLBmIgQCVQgKBnhQBBQhFA3hUAAIgdgBg");
	this.shape_4.setTransform(-23.5245,95.4939);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1140A0").s().p("AhMEtQhdgegthXQgthPAHheQAFhTAchKQAehdBXguQBXgtBcAeQBeAeAtBXQAtBPgIBeQgFBSgcBLQgdBdhYAtQg0Acg2AAQgkAAglgMg");
	this.shape_5.setTransform(-24.5685,95.4591);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1140A0").s().p("AhwEbQhVgtgdhdQgdhNAEhXQAEhbAshJQAthWBdgdQBcgdBWAtQBWAtAdBdQAcBOgEBWQgEBbgsBKQgtBWhdAdQgjALgiAAQg4AAg1gcg");
	this.shape_6.setTransform(-25.4245,95.4344);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1140A0").s().p("AiLENQhQg6gRhhQgQhMADhRQAChgA4hKQA6hQBhgQQBggRBQA6QBRA5AQBiQAQBMgDBRQgCBgg4BKQg5BQhiAQQgVAEgTAAQhJAAg/gtg");
	this.shape_7.setTransform(-26.0688,95.4152);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1140A0").s().p("AifEDQhMhCgIhkQgGhMABhNQABhkBBhJQBChNBlgHQBjgHBMBCQBMBCAIBlQAGBMgBBNQgBBjhBBKQhCBMhlAHIgRABQhZAAhFg8g");
	this.shape_8.setTransform(-26.55,95.3953);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1140A0").s().p("AirD9QhKhHgBhmQgChMAAhLQAAhmBHhJQBIhKBmgCQBlgBBKBHQBKBHABBmQACBMAABLQAABmhIBJQhGBKhnACIgFAAQhiAAhIhGg");
	this.shape_9.setTransform(-26.825,95.3762);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},10).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape}]},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10).to({_off:false},0).wait(1).to({y:197.825},0).wait(1).to({y:139.575},0).wait(1).to({y:104.625},0).wait(1).to({y:92.975},0).wait(1).to({y:93.775},0).wait(1).to({y:94.575},0).wait(1).to({y:95.375},0).wait(3).to({_off:true},1).wait(9).to({_off:false},0).wait(62));

	// stethascope_02_wht
	this.instance_3 = new lib.stethascope_02_wht();
	this.instance_3.setTransform(-4.4,335.05,0.5478,0.5478,0,0,0,0,-4.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({y:143.05},4).to({regX:-1.8,regY:-33.8,rotation:3.7052,x:-5.35,y:130.2},3).to({regX:0,regY:-4.5,rotation:0,x:-4.4,y:146.25},2).wait(73));

	// stethascope_01_wht
	this.instance_4 = new lib.stethascope_01_wht();
	this.instance_4.setTransform(-45.4,333.45,0.6883,0.6883,0,0,0,0,-1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({y:141.45},4).to({regX:-0.1,regY:-28.8,rotation:-5.2405,y:125.5},3).to({regX:0,regY:-1,rotation:0,y:144.65},2).wait(73));

	// dr_body
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1140A0").s().p("AnFIJQABgCgBhkQgCiRAEiWIAEjnQAAiiB4h8QB5h+CgAAIBgAAQCgAAB7B+QB6B8AACiIAAJ0g");
	this.shape_10.setTransform(-27.0725,361.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1140A0").s().p("AnFIoQABgBgBiEQgCixAEiVIAEjoQAAihB4h9QB5h+CgAAIBgAAQCgAAB7B+QB6B9AAChIAAKzg");
	this.shape_11.setTransform(-27.0725,280.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1140A0").s().p("AnFI/QABgBgBibQgCjIAEiVIAEjnQAAiiB4h9QB5h9CggBIBgAAQCgABB7B9QB6B9AACiIAALgg");
	this.shape_12.setTransform(-27.0725,222.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1140A0").s().p("AnFJMQABgBgBioQgCjWAEiUIAEjnQAAiiB4h9QB5h+CgAAIBgAAQCgAAB7B+QB6B9AACiIAAL6g");
	this.shape_13.setTransform(-27.0725,187.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1140A0").s().p("AnFJQQABgBgBisQgCjbAEiUIAEjnQAAiiB4h8QB5h/CgABIBgAAQCggBB7B/QB6B8AACiIAAMDg");
	this.shape_14.setTransform(-27.0725,175.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1140A0").s().p("AnFI5QABgBgBiVQgCjCAEiVIAEjnQAAiiB4h9QB5h+CgAAIBgAAQCgAAB7B+QB6B+AAChIAALUg");
	this.shape_15.setTransform(-27.0725,176.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1140A0").s().p("AnFIhQABgCgBh8QgCipAEiWIAEjnQAAiiB4h8QB5h/CgABIBgAAQCggBB7B/QB6B8AACiIAAKkg");
	this.shape_16.setTransform(-27.0725,177);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1140A0").s().p("AnFIIQABAAgBhlQgCiRAEiWIAEjnQAAiiB4h9QB5h+CgAAIBgAAQCgAAB7B+QB6B+AAChIAAJzg");
	this.shape_17.setTransform(-27.0725,177.55);

	var maskedShapeInstanceList = [this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},10).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,0,90.9,232);


(lib.Graphic_Text_animations = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Gradient_top
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0.216,0.416,0.482,0.663],0.1,265.1,0.1,65).s().p("A7BZzIAAgyMAAAgyzMA2DAAAMAAAAyzIAAAyg");
	this.shape.setTransform(320,211.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(261).to({_off:false},0).to({_off:true},62).wait(37));

	// Gradient_bottom
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0.216,0.416,0.482,0.663],0,-145,0,55.1).s().p("A7VHDIAAl3IAAncIAAgyMA2rAAAIAAAyIAAHcIAAF3g");
	this.shape_1.setTransform(321,502.425);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(261).to({_off:false},0).to({_off:true},62).wait(37));

	// txt_scheduleVisit
	this.instance = new lib.txt_scheduleVisit();
	this.instance.setTransform(308.1,533.45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(267).to({_off:false},0).to({y:410.45,alpha:1},9,cjs.Ease.quadInOut).to({y:413.45},3).wait(32).to({y:283.45,alpha:0},11,cjs.Ease.quadIn).to({_off:true},1).wait(37));

	// Gradient_top
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0.216,0.416,0.482,0.663],0.1,265.1,0.1,65).s().p("A7BZzIAAgyMAAAgyzMA2DAAAMAAAAyzIAAAyg");
	this.shape_2.setTransform(320,211.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(192).to({_off:false},0).to({_off:true},69).wait(99));

	// Gradient_bottom
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0.216,0.416,0.482,0.663],0,-145,0,55.1).s().p("A7VHDIAAl3IAAncIAAgyMA2rAAAIAAAyIAAHcIAAF3g");
	this.shape_3.setTransform(321,502.425);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(192).to({_off:false},0).to({_off:true},69).wait(99));

	// txt_messageCareTeam
	this.instance_1 = new lib.txt_messageCareTeam();
	this.instance_1.setTransform(308.1,533.45);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(192).to({_off:false},0).to({y:410.45,alpha:1},9,cjs.Ease.quadInOut).to({y:413.45},3).wait(58).to({y:283.45,alpha:0},11,cjs.Ease.quadIn).to({_off:true},1).wait(86));

	// Gradient_top
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0.216,0.416,0.482,0.663],0.1,265.1,0.1,65).s().p("A7BZzIAAgyMAAAgyzMA2DAAAMAAAAyzIAAAyg");
	this.shape_4.setTransform(320,211.425);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(147).to({_off:false},0).to({_off:true},52).wait(161));

	// Gradient_bottom
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0.216,0.416,0.482,0.663],0,-145,0,55.1).s().p("A7VHDIAAl3IAAncIAAgyMA2rAAAIAAAyIAAHcIAAF3g");
	this.shape_5.setTransform(321,502.425);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(147).to({_off:false},0).to({_off:true},52).wait(161));

	// txt_accessResults
	this.instance_2 = new lib.txt_accessResults();
	this.instance_2.setTransform(308.1,533.45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(147).to({_off:false},0).to({y:410.45,alpha:1},9,cjs.Ease.quadInOut).to({y:413.45},3).wait(28).to({y:283.45,alpha:0},11,cjs.Ease.quadIn).to({_off:true},1).wait(161));

	// Gradient_top
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0.216,0.416,0.482,0.663],0.1,265.1,0.1,65).s().p("A7BZzIAAgyMAAAgyzMA2DAAAMAAAAyzIAAAyg");
	this.shape_6.setTransform(320,211.425);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(102).to({_off:false},0).to({_off:true},52).wait(206));

	// Gradient_bottom
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0.216,0.416,0.482,0.663],0,-145,0,55.1).s().p("A7VHDIAAl3IAAncIAAgyMA2rAAAIAAAyIAAHcIAAF3g");
	this.shape_7.setTransform(321,502.425);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(102).to({_off:false},0).to({_off:true},52).wait(206));

	// txt_ScheduleAppt
	this.instance_3 = new lib.txt_ScheduleAppt();
	this.instance_3.setTransform(308.1,533.45);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(102).to({_off:false},0).to({y:410.45,alpha:1},9,cjs.Ease.quadInOut).to({y:413.45},3).wait(28).to({y:283.45,alpha:0},11,cjs.Ease.quadIn).to({_off:true},1).wait(206));

	// Gradient_top
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0.216,0.416,0.482,0.663],0.1,265.1,0.1,65).s().p("A7BZzIAAgyMAAAgyzMA2DAAAMAAAAyzIAAAyg");
	this.shape_8.setTransform(320,211.425);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(54).to({_off:false},0).to({_off:true},55).wait(251));

	// Gradient_bottom
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0.216,0.416,0.482,0.663],0,-145,0,55.1).s().p("A7VHDIAAl3IAAncIAAgyMA2rAAAIAAAyIAAHcIAAF3g");
	this.shape_9.setTransform(321,502.425);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(54).to({_off:false},0).to({_off:true},55).wait(251));

	// txt_takeHealthcare
	this.instance_4 = new lib.txt_takeHealthcare();
	this.instance_4.setTransform(308.1,533.45);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).to({y:410.45,alpha:1},9,cjs.Ease.quadInOut).to({y:413.45},3).wait(31).to({y:283.45,alpha:0},11,cjs.Ease.quadIn).to({_off:true},1).wait(251));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,521.7,582.6);


(lib.Frame_01_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt_ellisCounty
	this.instance = new lib.txt_ellisCounty();
	this.instance.setTransform(310.25,70.4,1.0167,1.0167);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1},6).wait(45).to({_off:true},1).wait(305));

	// txt_tapInto
	this.instance_1 = new lib.txt_tapInto();
	this.instance_1.setTransform(226.9,158.9,1.0173,1.0173,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({alpha:1},6).wait(43).to({_off:true},1).wait(305));

	// Layer_14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape.setTransform(299.575,180.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.89)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_1.setTransform(299.575,180.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.776)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_2.setTransform(299.575,180.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.667)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_3.setTransform(299.575,180.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.557)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_4.setTransform(299.575,180.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.443)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_5.setTransform(299.575,180.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.333)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_6.setTransform(299.575,180.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.224)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_7.setTransform(299.575,180.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.11)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_8.setTransform(299.575,180.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_9.setTransform(299.575,180.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).wait(343));

	// txt_Better
	this.instance_2 = new lib.txt_Better("single",0);
	this.instance_2.setTransform(62.45,209.65,1.0455,1.0455,0,0,0,-148.8,-34.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(6).to({mode:"synched",startPosition:4,loop:false},0).wait(41).to({startPosition:45},0).to({_off:true},1).wait(305));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-63.6,585.5,418.3);


(lib.endFrame_tapInto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt_tapInto
	this.instance = new lib.txt_tapInto_02();
	this.instance.setTransform(212.65,190.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({alpha:1},6).wait(20).to({_off:true},1).wait(328));

	// Layer_14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A/FM3IAA5tMA+LAAAIAAZtg");
	this.shape.setTransform(206.775,412.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.89)").s().p("A/FM3IAA5tMA+LAAAIAAZtg");
	this.shape_1.setTransform(206.775,412.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.776)").s().p("A/FM3IAA5tMA+LAAAIAAZtg");
	this.shape_2.setTransform(206.775,412.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.667)").s().p("A/FM3IAA5tMA+LAAAIAAZtg");
	this.shape_3.setTransform(206.775,412.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.557)").s().p("A/FM3IAA5tMA+LAAAIAAZtg");
	this.shape_4.setTransform(206.775,412.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.443)").s().p("A/FM3IAA5tMA+LAAAIAAZtg");
	this.shape_5.setTransform(206.775,412.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.333)").s().p("A/FM3IAA5tMA+LAAAIAAZtg");
	this.shape_6.setTransform(206.775,412.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.224)").s().p("A/FM3IAA5tMA+LAAAIAAZtg");
	this.shape_7.setTransform(206.775,412.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.11)").s().p("A/FM3IAA5tMA+LAAAIAAZtg");
	this.shape_8.setTransform(206.775,412.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0)").s().p("A/FM3IAA5tMA+LAAAIAAZtg");
	this.shape_9.setTransform(206.775,412.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).wait(345));

	// txt_Better
	this.instance_1 = new lib.txt_Better("single",4);
	this.instance_1.setTransform(229.3,382.75,1.2029,1.2029,0,0,0,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(6).to({mode:"synched",loop:false},0).wait(20).to({startPosition:24},0).to({_off:true},1).wait(328));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,405.8,494.5);


(lib.cta_btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C8C7C4").s().p("AERBYQgSgIgMgNQgNgNgHgRQgIgRAAgUQAAgTAIgRQAHgRANgNQAMgNASgIQARgHAUAAQAUAAARAHQARAIANANQANANAHARQAIARAAATQAAAUgIARQgHARgNANQgNANgRAIQgRAHgUAAQgUAAgRgHgAEigvQgJAEgHAIQgGAGgEAKQgEAJAAAKQAAALAEAJQAEAJAGAHQAHAHAJAEQAJAEALAAQALAAAJgEQAJgEAHgHQAHgHAEgJQADgJAAgLQAAgKgDgJQgEgKgHgGQgHgIgJgEQgJgEgLAAQgLAAgJAEgAoWBYQgSgIgMgNQgNgNgIgRQgHgRAAgUQAAgTAHgRQAIgRANgNQAMgNASgIQARgHAUAAQAUAAARAHQARAIANANQANANAHARQAIARAAATQAAAUgIARQgHARgNANQgNANgRAIQgRAHgUAAQgUAAgRgHgAoFgvQgJAEgHAIQgHAGgDAKQgEAJAAAKQAAALAEAJQADAJAHAHQAHAHAJAEQAJAEALAAQALAAAJgEQAJgEAHgHQAGgHAFgJQADgJAAgLQAAgKgDgJQgFgKgGgGQgHgIgJgEQgJgEgLAAQgLAAgJAEgAJjBcIAAi3IBCAAQAVAAASAGQASAIAMAMQANAMAHASQAHAQAAATQAAAUgHAQQgIASgMAMQgNAMgRAIQgSAGgUAAgAKPAzIAVAAQAMAAAJgEQAKgEAHgHQAHgHAEgJQADgJAAgLQAAgKgDgKQgEgJgGgGQgHgIgKgEQgKgEgNAAIgUAAgAInBcIgKgbIhGAAIgKAbIgtAAIBEi3IArAAIBFC3gAIQAaIgWg9IgWA9IAsAAgABIBcIAAi3IAsAAIAACNIBRAAIAAAqgAACBcIhIhzIAABzIgqAAIAAi3IAuAAIBFBtIAAhtIAqAAIAAC3gAjjBcIgghzIggBzIgsAAIgzi3IAtAAIAdBxIAghxIAqAAIAgBxIAdhxIAsAAIgzC3gAsEBcIAAi3IBBAAQAWAAASAGQARAIANAMQAMAMAHASQAIAQAAATQAAAUgIAQQgHASgNAMQgNAMgRAIQgRAGgVAAgArZAzIAVAAQAMAAAKgEQAKgEAGgHQAHgHAEgJQAEgJAAgLQAAgKgEgKQgDgJgHgGQgHgIgKgEQgKgEgNAAIgUAAg");
	this.shape.setTransform(0.825,0.525);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11).to({_off:false},0).to({_off:true},1).wait(3));

	// _Path_ (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_11 = new cjs.Graphics().p("AvAEGIAAoLIeBAAIAAILg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_graphics_11,x:-0.2,y:0}).wait(1).to({graphics:null,x:0,y:0}).wait(3));

	// _Clip_Group_
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(27,0.05,1,1,0,0,0,55.2,25.9);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({_off:true},1).wait(3));

	// _Path_
	this.instance_1 = new lib.Bitmap2();
	this.instance_1.setTransform(-108.3,-39.85);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({_off:true},1).wait(3));

	// _Path_
	this.instance_2 = new lib.Bitmap2();
	this.instance_2.setTransform(-108.3,-39.85);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.3,-39.8,226,86);


(lib.bubble_dots = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// dot_wht
	this.instance = new lib.dot_wht();
	this.instance.setTransform(-13.95,11.75,0.6802,0.6802,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-6.65},3,cjs.Ease.quadOut).to({y:2.15},3,cjs.Ease.quadOut).to({y:-1.45},2).to({y:0.25},3,cjs.Ease.quadOut).wait(29).to({_off:true},1).wait(8).to({_off:false},0).wait(1));

	// dot_wht
	this.instance_1 = new lib.dot_wht();
	this.instance_1.setTransform(0.2,11.75,0.6802,0.6802,0,0,0,0.1,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:-6.65},3,cjs.Ease.quadOut).to({y:0.95},3,cjs.Ease.quadOut).to({y:-1.45},2).to({y:0.35},3,cjs.Ease.quadOut).wait(28).to({_off:true},1).wait(8).to({_off:false},0).wait(1));

	// dot_wht
	this.instance_2 = new lib.dot_wht();
	this.instance_2.setTransform(14.1,11.75,0.6802,0.6802,0,0,0,0.1,0.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({y:-6.65},3,cjs.Ease.quadOut).to({y:0.95},3,cjs.Ease.quadOut).to({y:0.25},3,cjs.Ease.quadOut).wait(28).to({_off:true},1).wait(8).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-11.1,36.7,27.1);


(lib.appt_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Yellow_bar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5B846").s().p("AmZE/IJ8p9IC3C3InGHGg");
	this.shape.setTransform(144.975,221.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5B846").s().p("Al0DPIJRoTICYDKIm0G+g");
	this.shape_1.setTransform(155.05,220.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5B846").s().p("AlPBgIIkmpIB7DdImjG2g");
	this.shape_2.setTransform(165.15,218.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5B846").s().p("AkqgOIH5lBIBcDxImRGug");
	this.shape_3.setTransform(175.2,217.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5B846").s().p("AkFh+IHOjWIA9EDIl/Gmg");
	this.shape_4.setTransform(185.3,215.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5B846").s().p("AjgjtIGihsIAfEWIluGdg");
	this.shape_5.setTransform(195.375,214.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5B846").s().p("Ai+lTIF9gCIAAEpIl7GDg");
	this.shape_6.setTransform(202.625,217);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},38).to({state:[]},1).wait(47));

	// noise_lines
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1140A0").ss(12.9).p("AgvAAIDBAAAhwkCICnhhAhwEDICnBh");
	this.shape_7.setTransform(162.641,61.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1140A0").ss(12.9).p("AhUkCIB2hFAhUEDIB1BFAgTAAICIAA");
	this.shape_8.setTransform(173.1053,61.0771);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1140A0").ss(12.9).p("Ag3kBIBFgqAg3EEIBDAoAAJABIBQgB");
	this.shape_9.setTransform(183.5273,61.0303);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1140A0").ss(12.9).p("AgZkBIAUgPAgZEEIARAMAAnABIAWgB");
	this.shape_10.setTransform(193.8721,61.0103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).wait(88));

	// bswh_icon
	this.instance = new lib.phone_icon();
	this.instance.setTransform(77.25,67.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.1193,scaleY:0.1193},3).to({_off:true},1).wait(88));

	// calendar_holder_rt
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#1140A0").ss(18.4).p("AAAAgIAAg/");
	this.shape_11.setTransform(163.35,36.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1140A0").ss(18.4).p("AAAh4IAADx");
	this.shape_12.setTransform(163.35,28.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1140A0").ss(18.4).p("AAAiuIAAFd");
	this.shape_13.setTransform(163.35,22.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#1140A0").ss(18.4).p("AAADAIAAl/");
	this.shape_14.setTransform(163.35,20.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#1140A0").ss(18.4).p("AAAivIAAFf");
	this.shape_15.setTransform(163.35,22.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1140A0").ss(18.4).p("AAAilIAAFL");
	this.shape_16.setTransform(163.35,23.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#1140A0").ss(18.4).p("AAACiIAAlD");
	this.shape_17.setTransform(163.35,23.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11}]},5).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},33).to({state:[]},1).wait(47));

	// calendar_holder_lt
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#1140A0").ss(18.4).p("AAAAoIAAhP");
	this.shape_18.setTransform(27.4,35.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#1140A0").ss(18.4).p("AAAh6IAAD1");
	this.shape_19.setTransform(27.4,27.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1140A0").ss(18.4).p("AAAisIAAFZ");
	this.shape_20.setTransform(27.4,22.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#1140A0").ss(18.4).p("AAAC+IAAl7");
	this.shape_21.setTransform(27.4,20.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1140A0").ss(18.4).p("AAAiuIAAFd");
	this.shape_22.setTransform(27.4,22.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1140A0").ss(18.4).p("AAAikIAAFJ");
	this.shape_23.setTransform(27.4,23.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1140A0").ss(18.4).p("AAACiIAAlD");
	this.shape_24.setTransform(27.4,23.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},5).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},33).to({state:[]},1).wait(47));

	// Top_Bar
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1140A0").s().p("AlDBhIAAjBIKHAAIAADBg");
	this.shape_25.setTransform(77.7,16.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1140A0").s().p("ApfB+IAAj7ITAAAIAAD7g");
	this.shape_26.setTransform(83.15,25.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1140A0").s().p("AtJCWIAAkrIaSAAIAAErg");
	this.shape_27.setTransform(87.6,33.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1140A0").s().p("Av+CoIAAlPIf8AAIAAFPg");
	this.shape_28.setTransform(91.1,39.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1140A0").s().p("Ax/C2IAAlrMAj/AAAIAAFrg");
	this.shape_29.setTransform(93.55,43.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1140A0").s().p("AzNC+IAAl7MAmaAAAIAAF7g");
	this.shape_30.setTransform(95.05,46.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1140A0").s().p("AzmDAIAAl/MAnOAAAIAAF/g");
	this.shape_31.setTransform(95.55,47.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25}]}).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},38).to({state:[]},1).wait(47));

	// Layer_9
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#1140A0").ss(12.9).p("AoFnMQAAg1AmgmQAmgmA2AAIMIAAQA1AAAmAmQAmAmAAA1IAAQKAoFKPIAAxb");
	this.shape_32.setTransform(77.7,65.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#1140A0").ss(14).p("AqNPJIAA7OQAAg2AmgmQAmgmA2AAIQXAAQA2AAAmAmQAmAmAAA2IAAbS");
	this.shape_33.setTransform(81.425,105.2625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#1140A0").ss(15.5).p("AtSPxIAA8SQAAg1AlgmQAmgmA2AAIWjAAQA2AAAmAmQAmAmAAA1IAAZq");
	this.shape_34.setTransform(86.85,120.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#1140A0").ss(16.7).p("AvkQMIAA9CQAAg1AmgmQAmgmA2AAIbFAAQA2AAAmAmQAmAmAAA1IAAYc");
	this.shape_35.setTransform(90.825,131.3375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#1140A0").ss(17.4).p("AxAQdIAA9gQAAg2AmgmQAmgmA2AAId+AAQA1AAAmAmQAmAmAAA2IAAXq");
	this.shape_36.setTransform(93.35,138.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#1140A0").ss(17.8).p("Ax1QnIAA9zQAAg1AmgmQAmgmA2AAIfnAAQA2AAAmAmQAmAmAAA1IAAXQ");
	this.shape_37.setTransform(94.8,142.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#1140A0").ss(18).p("AyNQsIAA97QAAg2AmgmQAmgmA2AAMAgXAAAQA2AAAlAmQAnAmAAA2IAAXC");
	this.shape_38.setTransform(95.45,144.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32}]}).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},38).to({state:[]},1).wait(47));

	// Layer_10
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#1140A0").ss(12.9).p("ADfgBIm9AD");
	this.shape_39.setTransform(89.25,187.975);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#1140A0").ss(14).p("ArLACIWXgD");
	this.shape_40.setTransform(81.15,199.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#1140A0").ss(15.5).p("AtMACIaYgD");
	this.shape_41.setTransform(80.4,215.825);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#1140A0").ss(16.7).p("AuqACIdVgD");
	this.shape_42.setTransform(79.875,227.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#1140A0").ss(17.4).p("AvlACIfLgD");
	this.shape_43.setTransform(79.525,235.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#1140A0").ss(17.8).p("AwIACMAgQgAD");
	this.shape_44.setTransform(79.35,239.975);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#1140A0").ss(18).p("AQYgBMggvAAD");
	this.shape_45.setTransform(79.25,241.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39}]}).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},38).to({state:[]},1).wait(47));

	// Calendar_page_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5 = new cjs.Graphics().p("A5DZdMAAMgzDMAx7AALMgALAzCg");
	var mask_graphics_6 = new cjs.Graphics().p("A5DZdMAAMgzDMAx7AALMgALAzCg");
	var mask_graphics_7 = new cjs.Graphics().p("A5DZdMAAMgzDMAx7AALMgALAzCg");
	var mask_graphics_8 = new cjs.Graphics().p("A5DZdMAAMgzDMAx7AALMgALAzCg");
	var mask_graphics_9 = new cjs.Graphics().p("A5DZdMAAMgzDMAx7AALMgALAzCg");
	var mask_graphics_10 = new cjs.Graphics().p("A5DZdMAAMgzDMAx7AALMgALAzCg");
	var mask_graphics_11 = new cjs.Graphics().p("A5DZdMAAMgzDMAx7AALMgALAzCg");
	var mask_graphics_12 = new cjs.Graphics().p("A5DZdMAAMgzDMAx7AALMgALAzCg");
	var mask_graphics_44 = new cjs.Graphics().p("A5DZdMAAMgzDMAx7AALMgALAzCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:114.3,y:-116.1}).wait(1).to({graphics:mask_graphics_6,x:114.3,y:-88.4}).wait(1).to({graphics:mask_graphics_7,x:114.3,y:-60.65}).wait(1).to({graphics:mask_graphics_8,x:114.3,y:-32.95}).wait(1).to({graphics:mask_graphics_9,x:114.3,y:-5.25}).wait(1).to({graphics:mask_graphics_10,x:114.3,y:22.45}).wait(1).to({graphics:mask_graphics_11,x:114.3,y:50.2}).wait(1).to({graphics:mask_graphics_12,x:114.3,y:77.9}).wait(32).to({graphics:mask_graphics_44,x:114.3,y:77.9}).wait(1).to({graphics:null,x:0,y:0}).wait(47));

	// calendar_page
	this.instance_1 = new lib.calendar_page();
	this.instance_1.setTransform(93,140,1,1,0,0,0,93.5,140.6);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(39).to({_off:true},1).wait(47));

	// Layer_11
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#1140A0").ss(12.9).p("AAgCCIhAAAQg1AAgmgmQgmgmAAg2QAAg0AmgmQAmgmA1AAIBAAAQA2AAAmAmQAmAmAAA0QAAA2gmAmQgmAmg2AAg");
	this.shape_46.setTransform(23,143.95);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(17,64,160,0.443)").ss(12.9).p("AgGCAQgkgIgcgbQgmgmAAg2QAAg0AmgmQAmgmA1AAIBBAAQAMAAAKAC");
	this.shape_47.setTransform(17.65,157.1625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(17,64,160,0.11)").ss(12.9).p("AiGBFQAAgEAAgFQAAg1AmglQAmgmA2AAIBAAAQAqAAAhAY");
	this.shape_48.setTransform(20.2875,159.2625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(17,64,160,0)").ss(12.9).p("AgkgKQAMAIAKAJQATAUAKAZ");
	this.shape_49.setTransform(36.875,158.0528);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46}]}).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[]},1).wait(88));

	// Layer_12
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#1140A0").ss(12.9).p("ABRBxIhdAZQg0AOgvgbQgugbgOg0QgOgyAbgvQAbguAzgOIBegaQA0gOAuAbQAuAbAOA0QAOAzgbAuQgaAvg0AOg");
	this.shape_50.setTransform(29.825,170.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(17,64,160,0.443)").ss(12.9).p("ACLByIhCARQg0AOgtgbQgvgagOg0QgOgzAbguQAbgvAzgOIBJgT");
	this.shape_51.setTransform(21.1727,184.0127);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(17,64,160,0.11)").ss(12.9).p("Ah2BiQgCgEgBgDQgOg0AbgtQAbgvA0gOIBdgZQAhgJAeAH");
	this.shape_52.setTransform(24.7735,186.9249);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(17,64,160,0)").ss(12.9).p("AhIgGQAsgHAmAWQAFADAEAC");
	this.shape_53.setTransform(39.9781,180.6646);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50}]}).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[]},1).wait(88));

	// Layer_13
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#1140A0").ss(12.9).p("ABhCCIhBAAQg0AAgmgmQgmgmAAg2QAAg0AmgmQAmgmA0AAIBBAAg");
	this.shape_54.setTransform(16.175,119.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(17,64,160,0.424)").ss(12.9).p("ABvCCIggAAQg1AAglgmQgmgmAAg2QAAg0AmgmQAlgmA1AAIAkAA");
	this.shape_55.setTransform(11.4625,132.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(17,64,160,0.11)").ss(12.9).p("AgVBBQAJgcAVgWQAdgcAlgH");
	this.shape_56.setTransform(9.3335,129.812);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(17,64,160,0)").ss(12.9).p("AAAgiIAABF");
	this.shape_57.setTransform(25.9,136.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54}]}).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[]},1).wait(88));

	// Layer_14
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#1140A0").ss(12.9).p("ABpBjIh5AtQgyASgxgXQgwgWgTgzQgSgyAXgwQAXgwAygTIB5gsQAygSAxAWQAwAXATAyQASAzgXAvQgWAxgzASg");
	this.shape_58.setTransform(47.975,191.47);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(17,64,160,0.443)").ss(12.9).p("ACRBpIhKAbQgyATgwgXQgwgXgTgyQgSgzAXgvQAXgxAygSIBagh");
	this.shape_59.setTransform(39.1804,205.9786);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(17,64,160,0.11)").ss(12.9).p("AgnB/QgVgUgLgdQgSgzAXgvQAXgxAxgSIB0gq");
	this.shape_60.setTransform(36.8583,211.6919);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(17,64,160,0)").ss(12.9).p("AhQgIQAhgDAgAOQAVAKAQAQ");
	this.shape_61.setTransform(61.1404,201.249);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58}]}).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[]},1).wait(88));

	// Layer_16
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#1140A0").ss(12.9).p("Ap4EFQAvBiBbA7QBeA9BxAAIFHAAICrCrIGLmBIixiyIAAmMQAAg3gegvQgdgvgygZIl6i6QgOgGgPAAQgQAAgNAHIiGBGQgzATgWAwQgXAxATAyQASAzAxAWQAwAXAzgTIBpgzIBgBeIgIAHQgKALgKAMQhPBgAIB+QAHB8BYBZIAXAX");
	this.shape_62.setTransform(112.509,178.7379);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(17,64,160,0.443)").ss(12.9).p("Ap4EDQAvBiBbA7QBeA9BxAAIFHAAICrCrIGLmBIixiyIAAmMQAAg3gegvQgdgvgygZIl6i6QgtgGgNAHIiGBGQgzATgWAwQgXAxATAyQASAzAxAWQAwAXAzgTIAOgG");
	this.shape_63.setTransform(112.509,192.2745);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(17,64,160,0.11)").ss(12.9).p("Ap4ANQAvBiBbA7QBeA9BxAAIFHAAICrCrIGLmBIixixIAAlM");
	this.shape_64.setTransform(112.509,224.8504);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(17,64,160,0)").ss(12.9).p("AiTh+QAvBiBbA6QBdA9BxAAIAQAA");
	this.shape_65.setTransform(64.0375,241.5362);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62}]}).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[]},1).wait(88));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-7.4,256.3,281.5);


(lib.bswh_logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BSWH_Icon("synched",0,false);
	this.instance.setTransform(1.2,-43.3,0.7829,0.7829,-44.2419,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.2,scaleX:0.7828,scaleY:0.7828,rotation:-0.7885,x:1.3,y:-43.35,startPosition:6},6,cjs.Ease.quadOut).to({regX:0.1,scaleX:0.7829,scaleY:0.7829,rotation:0,x:1.25,y:-43.25,mode:"single",startPosition:19},13).wait(30).to({startPosition:19},0).to({_off:true},1).wait(70));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-79.6,72.4,72.5);


(lib.bottom_shadow_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shdow_bitmap();
	this.instance.setTransform(-0.6,-8.9);
	this.instance.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bottom_shadow_1, new cjs.Rectangle(-97.4,-36.9,193.7,56.099999999999994), null);


(lib.message_vertical_group_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// blue_bubble
	this.instance = new lib.blue_bubble();
	this.instance.setTransform(68.15,78.2,1,1,0,0,0,-52,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:28.1,scaleX:1.1009,scaleY:1.1009,x:68.1,y:78.35},4).to({regX:-50,regY:33.4,scaleX:0.01,scaleY:0.01,rotation:33.7144,x:68.15,y:78.25,alpha:0},3).to({_off:true},7).wait(85));

	// yellow_bubble
	this.instance_1 = new lib.yellow_bubble();
	this.instance_1.setTransform(184.05,158.55,1,1,0,0,0,52.8,27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.1337,scaleY:1.1337,y:158.6},4).to({regX:57.6,regY:33.9,scaleX:0.01,scaleY:0.01,rotation:-43.4518,x:184.1,y:158.5,alpha:0},3).to({_off:true},6).wait(85));

	// dot_wht
	this.instance_2 = new lib.bubble_dots("synched",49,false);
	this.instance_2.setTransform(100.7,187.2,1.2131,1.2131);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},8).wait(91));

	// sm_blue_bubble
	this.instance_3 = new lib.sm_blue_bubble("single",0);
	this.instance_3.setTransform(67.25,225.75,1,1,0,0,0,-34.4,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({mode:"independent"},0).to({scaleX:1.0721,scaleY:1.0721,x:67.2},4).to({regX:-28.7,regY:29.7,scaleX:0.01,scaleY:0.01,rotation:60.0271,y:225.8,alpha:0},3).to({_off:true},5).wait(85));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.5,235.9);


(lib.message_vertical_group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// dot_wht
	this.instance = new lib.bubble_dots("synched",0,false);
	this.instance.setTransform(117.9,41.2,1.2131,1.2131);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).wait(13).to({startPosition:13},0).to({alpha:0,startPosition:16},3,cjs.Ease.quadOut).to({_off:true},1).wait(50));

	// blue_bubble
	this.instance_1 = new lib.blue_bubble();
	this.instance_1.setTransform(68.15,78.25,0.01,0.01,33.7144,0,0,-50,33.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({regX:-52,regY:28.1,scaleX:1.1009,scaleY:1.1009,rotation:0,x:68.1,y:78.35},3,cjs.Ease.quadOut).to({regY:28,scaleX:1,scaleY:1,x:68.15,y:78.2},4,cjs.Ease.quadOut).wait(62));

	// dot_wht
	this.instance_2 = new lib.bubble_dots("synched",0,false);
	this.instance_2.setTransform(129.9,121.2,1.2131,1.2131);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).wait(13).to({startPosition:13},0).to({alpha:0,startPosition:15},3,cjs.Ease.quadOut).to({_off:true},1).wait(37));

	// yellow_bubble
	this.instance_3 = new lib.yellow_bubble();
	this.instance_3.setTransform(184.1,158.5,0.01,0.01,-43.4518,0,0,57.6,33.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36).to({_off:false},0).to({regX:52.8,regY:27.2,scaleX:1.1337,scaleY:1.1337,rotation:0,x:184.05,y:158.6},3,cjs.Ease.quadOut).to({scaleX:1,scaleY:1,y:158.55},4,cjs.Ease.quadOut).wait(49));

	// dot_wht
	this.instance_4 = new lib.bubble_dots("synched",0,false);
	this.instance_4.setTransform(100.7,187.2,1.2131,1.2131);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(51).to({_off:false},0).wait(41));

	// sm_blue_bubble
	this.instance_5 = new lib.sm_blue_bubble();
	this.instance_5.setTransform(67.2,225.8,0.01,0.01,60.0271,0,0,-28.7,29.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({_off:false},0).to({regX:-34.4,regY:28,scaleX:1.0721,scaleY:1.0721,rotation:0,y:225.75},3,cjs.Ease.quadOut).to({scaleX:1,scaleY:1,x:67.25},4,cjs.Ease.quadOut).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.5,230.5);


(lib.messageCare_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Message_group
	this.instance = new lib.message_vertical_group("synched",0,false);
	this.instance.setTransform(114.95,-122,1,1,0,0,0,124.9,124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({startPosition:68},0).to({_off:true},1).wait(23));

	// phone_01_group
	this.instance_1 = new lib.phone_01_group("synched",0,false);
	this.instance_1.setTransform(118,132.75,1,1,0,0,0,117.6,133.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(68).to({startPosition:68},0).to({_off:true},1).wait(23));

	// dr_icon_group
	this.instance_2 = new lib.dr_icon_group("synched",0,false);
	this.instance_2.setTransform(143.05,0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(68).to({startPosition:68},0).to({_off:true},1).wait(23));

	// Phone_02_group
	this.instance_3 = new lib.Phone_02_group("synched",0,false);
	this.instance_3.setTransform(118.8,-372.25,1,1,0,0,0,278.8,129.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({y:-702.5,startPosition:8},0).to({y:-372.25,startPosition:13},5,cjs.Ease.quadOut).wait(55).to({startPosition:68},0).to({_off:true},1).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.9,-884.7,186.29999999999998,1136.3);


(lib.bswh_badge = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C8EBA").s().p("AjfB0IAAhtIDZAAIhgBfIgNAOgAAHgGIBuhtIBrAAIAABtg");
	this.shape.setTransform(1.2,-0.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5B846").s().p("AAHDgIAAjZIBtBuIAABrgAhmhlIgNgOIAAhsIBtAAIAADZg");
	this.shape_1.setTransform(1.225,-0.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1140A0").s().p("AhzFEIAAjPIANgOIBghgIAAE9gAB1B1IhuhuIE9AAIAABugAAHlDIBuAAIAADQIhuBtgAlDgGIAAhtIDQAAIANAOIBgBfg");
	this.shape_2.setTransform(1.2,-0.85);

	this.instance = new lib.icon_badge("synched",0);
	this.instance.setTransform(1.2,-0.85);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},24).to({state:[]},1).to({state:[{t:this.instance}]},18).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance}]},56).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({y:5.15,mode:"independent"},4,cjs.Ease.quadOut).to({y:-16.35},5,cjs.Ease.quadOut).to({y:-0.85},8,cjs.Ease.quadInOut).wait(56).to({_off:true},1).wait(2));

	// background_badge
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkGGkQhBAAguguQguguAAhBIAAoNQAAhBAuguQAuguBBAAIINAAQBBAAAuAuQAuAuAABBIAAINQAABBguAuQgtAuhCAAg");
	this.shape_3.setTransform(1.2,-0.85);

	this.instance_1 = new lib.badge_BG("synched",0);
	this.instance_1.setTransform(1.2,-0.85);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[]},1).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_3}]},24).to({state:[]},1).to({state:[{t:this.instance_1}]},18).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},56).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({y:5.15,mode:"independent"},4,cjs.Ease.quadOut).to({y:-16.35},5,cjs.Ease.quadOut).to({y:-0.85},8,cjs.Ease.quadInOut).wait(56).to({_off:true},1).wait(2));

	// bottom_shadow
	this.instance_2 = new lib.bottom_shadow_1();
	this.instance_2.setTransform(0.5,66,0.1923,0.1923);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(5).to({_off:false,regX:0.1,regY:0.1,scaleX:0.3943,scaleY:0.3943,x:0.6,y:66.05,alpha:0.2813},0).wait(1).to({regX:-0.6,regY:-8.9,scaleX:0.4721,scaleY:0.4721,x:0.2,y:61.75,alpha:0.3895},0).wait(1).to({scaleX:0.5549,scaleY:0.5549,x:0.15,y:61,alpha:0.5047},0).wait(1).to({scaleX:0.6359,scaleY:0.6359,x:0.1,y:60.3,alpha:0.6176},0).wait(1).to({scaleX:0.7094,scaleY:0.7094,x:0,y:59.6,alpha:0.7198},0).wait(1).to({scaleX:0.7716,scaleY:0.7716,y:59.05,alpha:0.8065},0).wait(1).to({scaleX:0.8215,scaleY:0.8215,x:-0.05,y:58.6,alpha:0.8758},0).wait(1).to({scaleX:0.8592,scaleY:0.8592,y:58.25,alpha:0.9283},0).wait(1).to({scaleX:0.8858,scaleY:0.8858,x:-0.1,y:58,alpha:0.9653},0).wait(1).to({scaleX:0.9025,scaleY:0.9025,y:57.85,alpha:0.9886},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.9107,scaleY:0.9107,x:0.6,y:66.1,alpha:1},0).wait(14).to({_off:true},1).wait(18).to({_off:false},0).to({scaleX:1.033,scaleY:1.033},4,cjs.Ease.quadOut).to({scaleX:0.6731,scaleY:0.6731,y:66.05,alpha:0.8516},5,cjs.Ease.quadOut).to({scaleX:0.9107,scaleY:0.9107,y:66.1,alpha:1},8,cjs.Ease.quadInOut).wait(56).to({_off:true},1).wait(2));

	// background_gradient
	this.instance_3 = new lib.background_gradient();
	this.instance_3.setTransform(0.4,-0.15,0.8224,0.8224,0,0,0,-48.7,-64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(5).to({_off:false,regY:-64.6,scaleX:1.1656,scaleY:1.1656},0).wait(1).to({regX:-47.1,regY:-61.5,scaleX:1.2978,scaleY:1.2978,x:2.4,y:3.85},0).wait(1).to({scaleX:1.4384,scaleY:1.4384,x:2.7,y:4.3},0).wait(1).to({scaleX:1.5761,scaleY:1.5761,x:2.9,y:4.7},0).wait(1).to({scaleX:1.7009,scaleY:1.7009,x:3.15,y:5.1},0).wait(1).to({scaleX:1.8067,scaleY:1.8067,x:3.3,y:5.45},0).wait(1).to({scaleX:1.8914,scaleY:1.8914,x:3.45,y:5.75},0).wait(1).to({scaleX:1.9554,scaleY:1.9554,x:3.55,y:5.9},0).wait(1).to({scaleX:2.0006,scaleY:2.0006,x:3.6,y:6.05},0).wait(1).to({scaleX:2.0291,scaleY:2.0291,x:3.7,y:6.15},0).wait(1).to({regX:-48.8,regY:-64.7,scaleX:2.043,scaleY:2.043,x:0.35,y:-0.25},0).wait(14).to({_off:true},1).wait(18).to({_off:false},0).to({y:5.75},4,cjs.Ease.quadOut).to({y:-15.75},5,cjs.Ease.quadOut).to({y:-0.25},8,cjs.Ease.quadInOut).wait(56).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.2,-216.4,364.1,436.1);


(lib.scheduleVisit_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Yellow_Bar_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_84 = new cjs.Graphics().p("Av/EYIAAovIf/AAIAAIvg");
	var mask_graphics_95 = new cjs.Graphics().p("Av/EYIAAovIf/AAIAAIvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(84).to({graphics:mask_graphics_84,x:109.2,y:225.2}).wait(11).to({graphics:mask_graphics_95,x:109.2,y:225.2}).wait(1).to({graphics:null,x:0,y:0}).wait(3));

	// Yellow_bar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5B846").s().p("ApdC2IGClsIM5AAIAAFtg");
	this.shape.setTransform(128.25,225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5B846").s().p("ApdC2IGClsIM4AAIABFtg");
	this.shape_1.setTransform(128.2,225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5B846").s().p("AnMDNIGCmaIIXAAIAAGcg");
	this.shape_2.setTransform(156.8,229.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5B846").s().p("AopDmIGCnMILQAAIABHNg");
	this.shape_3.setTransform(149.25,232.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5B846").s().p("ApnD8IGCn4INMAAIABH5g");
	this.shape_4.setTransform(136.85,234.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5B846").s().p("AsXEMIDuoYIVAAAIABIZg");
	this.shape_5.setTransform(126.15,236);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5B846").s().p("ApUDSIjumkIaFAAIAAGlg");
	this.shape_6.setTransform(126.85,230.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5B846").s().p("AoICrIlflXIbOAAIABFYg");
	this.shape_7.setTransform(124.525,226.95);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},7).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},36).to({state:[]},1).to({state:[{t:this.shape_7}]},34).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},5).to({state:[]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(13).to({_off:false},0).wait(36).to({_off:true},1).wait(34).to({_off:false,x:124.975},0).wait(1).to({x:129.875},0).wait(1).to({x:144.525},0).wait(1).to({x:168.975},0).wait(1).to({x:203.175},0).wait(1).to({x:247.175},0).wait(1).to({x:300.975},0).wait(5).to({_off:true},1).wait(3));

	// Layer_7
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1140A0").s().p("AlPCAIAAj/IKfAAIAAD/g");
	this.shape_8.setTransform(115.05,28);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).to({_off:true},7).wait(92));

	// phone_frame
	this.instance = new lib.phone_frame();
	this.instance.setTransform(116.25,123.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({x:116.2,mode:"synched",startPosition:87,loop:false},0).to({regX:0.1,regY:0.1,scaleX:1.5153,scaleY:1.5153,x:125.1,y:84.45,alpha:0,startPosition:96},6,cjs.Ease.quadOut).wait(36).to({startPosition:98},0).to({_off:true},1).wait(34).to({_off:false},0).wait(11).to({startPosition:98},0).to({_off:true},1).wait(3));

	// man_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");
	var mask_1_graphics_7 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AqFSGQgXAAAAgVMAAAgjgQAAgWAXAAIULAAQAXAAAAAWMAAAAjgQAAAVgXAAg");
	var mask_1_graphics_9 = new cjs.Graphics().p("Aq9TJQgXAAAAgXMAAAgliQAAgYAXAAIV6AAQAYAAAAAYMAAAAliQAAAXgYAAg");
	var mask_1_graphics_10 = new cjs.Graphics().p("ArzULQgZAAAAgaMAAAgnhQAAgaAZAAIXmAAQAaAAAAAaMAAAAnhQAAAagaAAg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AsmVJQgbAAAAgbMAAAgpaQAAgcAbAAIZMAAQAcAAAAAcMAAAApaQAAAbgcAAg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AtVWCQgdAAAAgcMAAAgrKQAAgdAdAAIarAAQAdAAAAAdMAAAArKQAAAcgdAAg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AuAW3QgeAAgBgfMAAAgsvQABgfAeAAIcBAAQAfAAgBAfMAAAAsvQABAfgfAAg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AuAW3QgeAAgBgfMAAAgsvQABgfAeAAIcBAAQAfAAgBAfMAAAAsvQABAfgfAAg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AuAW3QgeAAgBgfMAAAgsvQABgfAeAAIcBAAQAfAAgBAfMAAAAsvQABAfgfAAg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AuAW3QgeAAgBgfMAAAgsvQABgfAeAAIcBAAQAfAAgBAfMAAAAsvQABAfgfAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:115.85,y:122.8}).wait(7).to({graphics:mask_1_graphics_7,x:115.8,y:122.8}).wait(1).to({graphics:mask_1_graphics_8,x:117.35,y:121.775}).wait(1).to({graphics:mask_1_graphics_9,x:118.875,y:120.725}).wait(1).to({graphics:mask_1_graphics_10,x:120.4,y:119.725}).wait(1).to({graphics:mask_1_graphics_11,x:121.825,y:99.575}).wait(1).to({graphics:mask_1_graphics_12,x:123.15,y:80.9}).wait(1).to({graphics:mask_1_graphics_13,x:124.35,y:63.975}).wait(36).to({graphics:mask_1_graphics_49,x:124.35,y:63.975}).wait(1).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_1_graphics_84,x:124.35,y:63.975}).wait(11).to({graphics:mask_1_graphics_95,x:124.35,y:63.975}).wait(1).to({graphics:null,x:0,y:0}).wait(3));

	// dr_head
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1140A0").s().p("AivD7QhJhJAAhnIAAiVQAAhnBJhJQBJhJBmAAQBnAABJBJQBJBJAABnIAACVQAABnhJBJQhJBJhnAAQhmAAhJhJg");
	this.shape_9.setTransform(115.725,95.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(5,19,49,0.306)").ss(6.1,1,1).p("AkwhbQAAh+BahaQBZhZB9AAQB/AABYBZQBaBaAAB+IAAC3QAAB/haBZQhYBZh/AAQh9AAhZhZQhahZAAh/g");
	this.shape_10.setTransform(118.275,78.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5A7ABD").s().p("AjKEjQhVhVAAh3IAAitQAAh4BVhUQBUhUB2gBQB4ABBTBUQBVBUAAB4IAACtQAAB3hVBVQhTBUh4AAQh2AAhUhUg");
	this.shape_11.setTransform(118.25,78.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(9,35,89,0.557)").ss(11.1,1,1).p("AlehpQAAiRBnhnQBnhnCQAAQCRAABnBnQBmBnAACRIAADUQAACRhmBmQhnBniRAAQiQAAhnhnQhnhmAAiRg");
	this.shape_12.setTransform(120.4,65.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#95AAD5").s().p("AjiFDQhdheAAiEIAAjBQAAiEBdheQBfheCDAAQCEAABeBeQBeBeAACEIAADBQAACEheBeQheBeiEAAQiDAAhfheg");
	this.shape_13.setTransform(120.4,65.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(13,47,120,0.749)").ss(15,1,1).p("AmBh0QAAigBxhxQByhxCeAAQCgAABxBxQBxBxAACgIAADpQAACghxBxQhxBxigAAQieAAhyhxQhxhxAAigg");
	this.shape_14.setTransform(122.075,55.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C4CFE7").s().p("AjzFdQhlhmAAiOIAAjQQAAiPBlhlQBmhmCNAAQCPAABlBmQBlBlAACPIAADQQAACOhlBmQhlBkiPAAQiNAAhmhkg");
	this.shape_15.setTransform(122.05,55.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(15,56,142,0.89)").ss(17.8,1,1).p("Ambh7QAAirB5h5QB5h5CpAAQCrAAB4B5QB5B5AACrIAAD4QAACrh5B4Qh4B5irAAQipAAh5h5Qh5h4AAirg");
	this.shape_16.setTransform(123.25,47.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E5EAF4").s().p("AkAFuQhqhqAAiWIAAjbQAAiWBqhqQBrhqCVAAQCWAABqBqQBrBqAACWIAADbQAACWhrBqQhqBriWAAQiVAAhrhrg");
	this.shape_17.setTransform(123.225,47.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(17,61,156,0.973)").ss(19.5,1,1).p("AmqiAQAAixB9h+QB+h8CvAAQCxAAB9B8QB9B+AACxIAAECQAACxh9B9Qh9B9ixAAQivAAh+h9Qh9h9AAixg");
	this.shape_18.setTransform(123.95,43.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8FAFC").s().p("AkHF5QhthtAAibIAAjhQAAibBthtQBuhuCZAAQCbAABtBuQBuBtAACbIAADhQAACbhuBtQhtBuibAAQiZAAhuhug");
	this.shape_19.setTransform(123.9,43.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#113FA0").ss(20,1).p("AmvCDIAAkFQAAizB+h/QCAh+CxAAQC0AAB+B+QB+B/AACzIAAEFQAACzh+B+Qh+B/i0AAQixAAiAh/Qh+h+AAizg");
	this.shape_20.setTransform(124.2,41.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AkKF9QhuhvAAicIAAjjQAAicBuhvQBwhuCaAAQCcAABvBuQBuBvAACcIAADjQAACchuBvQhvBuicAAQiaAAhwhug");
	this.shape_21.setTransform(124.15,41.625);

	this.instance_1 = new lib.dr_head();
	this.instance_1.setTransform(124.2,98.1,1,1,0,0,0,0,56.4);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{x:115.725}}]}).to({state:[{t:this.shape_9,p:{x:115.675}}]},7).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},24).to({state:[]},1).to({state:[{t:this.instance_1}]},34).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},5).to({state:[]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({rotation:-6.4429},4).to({rotation:2.7042},4).to({rotation:0},3).wait(24).to({_off:true},1).wait(34).to({_off:false},0).to({y:336.5},6,cjs.Ease.quadIn).wait(5).to({_off:true},1).wait(3));

	// dot_wht
	this.instance_2 = new lib.dot_wht();
	this.instance_2.setTransform(94.85,192.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({x:94.8},0).to({scaleX:1.5153,scaleY:1.5153,x:92.5,y:284.55},6,cjs.Ease.quadOut).to({_off:true},1).wait(85));

	// dot_wht
	this.instance_3 = new lib.dot_wht();
	this.instance_3.setTransform(115.65,192.4);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({x:115.6},0).to({scaleX:1.5153,scaleY:1.5153,x:124.05,y:284.55},6,cjs.Ease.quadOut).to({_off:true},1).wait(85));

	// dot_wht
	this.instance_4 = new lib.dot_wht();
	this.instance_4.setTransform(136.05,192.4);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({x:136},0).to({scaleX:1.5153,scaleY:1.5153,x:154.95,y:284.55},6,cjs.Ease.quadOut).to({_off:true},1).wait(85));

	// stethascope_02
	this.instance_5 = new lib.stethascope_02_wht();
	this.instance_5.setTransform(139.05,128.65,0.545,0.545,0,0,0,1.4,-37.1);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({x:139},0).to({scaleX:0.6804,scaleY:0.6804,rotation:0.0334,x:142.8,y:121.35},1).to({regX:1.5,regY:-36.9,scaleX:0.7977,scaleY:0.7977,rotation:1.5279,x:146,y:115.2},1).to({_off:true},1).wait(89));

	// stethascope_01
	this.instance_6 = new lib.stethascope_01_wht();
	this.instance_6.setTransform(96.4,121.7,0.688,0.688,0,0,0,-1.2,-34.5);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({x:96.35},0).to({regY:-34.4,scaleX:0.7808,scaleY:0.7808,rotation:0.0213,x:93.5,y:118.65},1).to({regX:-1.1,scaleX:0.8613,scaleY:0.8613,rotation:0.4822,x:92.1,y:115.8},1).to({_off:true},1).wait(89));

	// stethascope_02
	this.instance_7 = new lib.stethascope_02_blue();
	this.instance_7.setTransform(139.15,128.6,0.5441,0.5441,0,0,0,1.4,-37.2);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).wait(1).to({regX:0,regY:-4.6,scaleX:0.6864,scaleY:0.6864,rotation:1.1425,x:141.75,y:143.35},0).wait(1).to({scaleX:0.8097,scaleY:0.8097,rotation:2.1321,x:144.55,y:140.8},0).wait(1).to({scaleX:0.8978,scaleY:0.8978,rotation:2.8404,x:146.45,y:138.95},0).wait(1).to({scaleX:0.9545,scaleY:0.9545,rotation:3.2949,x:147.65,y:137.7},0).wait(1).to({regX:1.6,regY:-37.2,scaleX:0.9873,scaleY:0.9873,rotation:3.5585,x:151.8,y:105},0).to({regX:1.7,regY:-37.4,scaleX:1,scaleY:1,rotation:7.9816,x:156.3,y:104.3},1).to({regY:-37.2,rotation:-2.8391,x:156.35,y:104.5},1).to({regX:1.6,regY:-37.4,rotation:4.4992,x:156.25,y:104.3},4).to({regX:1.7,rotation:-3.9662,x:156.3,y:104.35},3).to({regX:1.6,rotation:0,x:156.2,y:104.3},5).wait(23).to({_off:true},1).wait(34).to({_off:false},0).wait(1).to({regX:0,regY:-4.6,rotation:-0.3574,x:154.75,y:139.55},0).wait(1).to({regX:1.6,regY:-37.4,rotation:-1.0553,x:156.2,y:111.55},0).wait(1).to({regX:0,regY:-4.6,rotation:-2.3629,x:155.95,y:171.4},0).wait(1).to({rotation:-4.3892,x:157.1,y:213.2},0).wait(1).to({rotation:-6.9678,x:158.6,y:266.35},0).wait(1).to({regX:1.6,regY:-37.4,rotation:-9.5004,x:156.25,y:285.9},0).wait(5).to({_off:true},1).wait(3));

	// stethascope_01
	this.instance_8 = new lib.stethascope_01_blue();
	this.instance_8.setTransform(96.65,122.15,0.681,0.681,0,0,0,-0.9,-34.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({_off:false},0).wait(1).to({regX:0,regY:-1.1,scaleX:0.7806,scaleY:0.7806,rotation:0.3376,x:95,y:144.75},0).wait(1).to({scaleX:0.8668,scaleY:0.8668,rotation:0.63,x:93.1,y:144.6},0).wait(1).to({scaleX:0.9285,scaleY:0.9285,rotation:0.8393,x:91.65,y:144.55},0).wait(1).to({scaleX:0.9682,scaleY:0.9682,rotation:0.9736,x:90.75,y:144.5},0).wait(1).to({regX:-0.8,regY:-34.4,scaleX:0.9911,scaleY:0.9911,rotation:1.0515,x:90.05,y:111.4},0).to({regY:-34.6,scaleX:1,scaleY:1,rotation:8.4825,x:93.85,y:111.2},1).to({rotation:-3.2505},1).to({rotation:5.1924},3).to({regY:-34.7,rotation:-3.4677,y:111.05},5).to({rotation:0},4).wait(23).to({_off:true},1).wait(34).to({_off:false},0).wait(1).to({regX:0,regY:-1.1,rotation:0.4219,x:94.4,y:147.1},0).wait(1).to({regX:-0.8,regY:-34.7,rotation:1.2459,x:93.85,y:118.35},0).wait(1).to({regX:0,regY:-1.1,rotation:2.7897,x:93,y:178.9},0).wait(1).to({rotation:5.1821,x:91.6,y:220.65},0).wait(1).to({rotation:8.2266,x:89.8,y:273.7},0).wait(1).to({regX:-0.8,regY:-34.7,rotation:11.2167,x:93.85,y:292.65},0).wait(5).to({_off:true},1).wait(3));

	// dr_body
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1140A0").s().p("AnFIIQABAAgBhlQgCiRAEiWIAEjnQAAiiB4h9QB5h+CgAAIBgAAQCgAAB7B+QB6B+AAChIAAJzg");
	this.shape_22.setTransform(115.5775,177.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1140A0").s().p("AnFI9QABgCgBiYQgCjHAEiUIAEjnQAAiiB4h9QB5h+CgAAIBgAAQCgAAB7B+QB6B+AAChIAALcg");
	this.shape_23.setTransform(115.5275,182.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(5,20,49,0.306)").ss(6.1,1,1).p("AolHiQgCjHAEikQAAgUABgUIADjiQAAgVACgVQADhGAahCQAihVBFhIQAOgQAQgOQA6g1BCghQBYgrBegDQAOgBAOAAIBVAAQANAAAOAAQBRACBOAfQBbAkBNBIQBNBJAnBQQApBVAABdIAAMFIgfAuIwfAAQgHAAgHgXQABgbgBhvg");
	this.shape_24.setTransform(118.3275,182.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5A7ABD").s().p("AoXKGQgHAAgHgXIAAiKIAAgDQgCjHAEikIABgoIADjiIACgqQADhGAahCQAihVBFhIQAOgQAQgOQA6g1BCghQBYgrBegDIAcgBIBVAAIAbAAQBRACBOAfQBbAkBNBIQBNBJAnBQQApBVAABdIAAMFIgfAug");
	this.shape_25.setTransform(118.3275,182.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(9,36,89,0.557)").ss(11.1,1,1).p("Ap0IWQgCjZAEi7QABgWAAgXIAEj8QAAgXADgYQAGhNAhhKQAqhcBQhOQARgQASgPQBCg4BMgjQBlgtBogDQAPAAAPAAIBeAAQAQAAAPAAQBZAEBYAjQBnAoBXBNQBXBPAuBZQAxBfAABlIAANeIg4AdIyYAAQgMAAgNgPQABgRgBiKg");
	this.shape_26.setTransform(120.6545,181.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#95AAD5").s().p("ApbLCQgMAAgNgPIAAibIAAgBQgCjbAEi6IABgtIAEj7QAAgYADgYQAGhNAhhJQAqhdBQhOQARgQASgPQBCg4BMgjQBlgtBogCIAegBIBeAAIAfABQBZADBYAjQBnAoBXBNQBXBPAuBaQAxBeAABmIAANdIg4Adg");
	this.shape_27.setTransform(120.6545,181.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(13,48,120,0.749)").ss(15,1,1).p("AqxI/QgCjpAFjMQAAgYABgYIAEkQQAAgaADgZQAIhTAnhPQAxhjBZhSQATgRATgPQBJg7BUgkQBvgvBugBQARgBAQAAIBmAAQAQAAARABQBfAFBhAmQBwAsBdBQQBgBVAzBfQA3BnABBrIAAOiIhMARIz2AAQgQAAgSgJQACgKgCieg");
	this.shape_28.setTransform(122.4442,181.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C4CFE7").s().p("AqPLxQgQAAgSgJQACgKgCieIAAgBQgCjpAFjMIABgwIAEkQQAAgaADgZQAIhTAnhPQAxhjBZhSIAmggQBJg7BUgkQBvgvBugBIAhgBIBmAAIAhABQBfAFBhAmQBwAsBdBQQBgBVAzBfQA3BnABBrIAAOiIhMARg");
	this.shape_29.setTransform(122.4442,181.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(15,57,142,0.89)").ss(17.8,1,1).p("ArdJcQgCjzAFjZQABgaAAgZIAFkeQAAgbADgbQAKhXArhTQA1hoBfhUQAUgSAVgQQBNg7BagmQB2gwB0gBQARAAARAAIBrAAQASAAARABQBkAGBmAoQB3AuBiBTQBnBYA2BkQA7BsABBxIAAPTIhaAHI04AAQgUAAgVgEQACgFgCitg");
	this.shape_30.setTransform(123.7214,180.775);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E5EAF4").s().p("Aq0MSQgUAAgVgEQACgFgCitQgCjzAFjZIABgzIAFkeQAAgbADgbQAKhXArhTQA1hoBfhUIApgiQBNg7BagmQB2gwB0gBIAiAAIBrAAIAjABQBkAGBmAoQB3AuBiBTQBnBYA2BkQA7BsABBxIAAPTIhaAHg");
	this.shape_31.setTransform(123.7214,180.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(17,62,156,0.973)").ss(19.5,1,1).p("Ar3JtQgCj6AFjgQABgbAAgaIAFkmQAAgcAEgcQAKhZAuhWQA4hqBjhWQAVgSAVgQQBQg9BdgmQB6gxB3AAQASAAARAAIBvAAQASAAASABQBmAGBqApQB6AwBmBVQBqBaA4BmQA+BwABB0IAAPwI3CACQgWAAgXgBQACgCgCi2g");
	this.shape_32.setTransform(124.4714,180.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F8FAFC").s().p("Ar3MlQACgDgCi1QgCj5AFjhIABg0IAFknQAAgcAEgbQAKhZAuhXQA4hpBjhXQAVgSAVgQQBQg9BdgmQB6gxB3AAIAjAAIBvAAIAkABQBmAGBqApQB6AxBmBUQBqBbA4BlQA+BwABB0IAAPwI3CACIgtgBg");
	this.shape_33.setTransform(124.4714,180.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#1140A0").ss(20,1).p("ANHjKIAAP3I4AAAQABgCgBi4QgCj8AFjjIAGleQAAh2A8hzQA5hrBlhXQBihVB4gwQB7gyB4AAICTAAQB5AAB+AyQB7AwBnBVQBpBXA7BrQBABzAAB2g");
	this.shape_34.setTransform(117.7039,180.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ar/MtQABgCgBi4QgCj8AFjjIAGleQAAh2A8hzQA5hrBlhXQBihVB4gwQB7gyB4AAICTAAQB5AAB+AyQB7AwBnBVQBpBXA7BrQBABzAAB2IAAP3g");
	this.shape_35.setTransform(124.7464,180.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#1140A0").ss(20,1).p("Aq5JzQgCj8AFjjIAGleQAAh2A8hzQA5hrBlhXQBihVB4gwQB7gyB4AAICTAAQB5AAB+AyQB7AwBnBVQBpBXA7BrQBABzAAB2IAAP3I4AAAQABgCgBi4g");
	this.shape_36.setTransform(117.7039,187.125);

	var maskedShapeInstanceList = [this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},7).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35,p:{y:180.525}},{t:this.shape_34,p:{y:180.525}}]},1).to({state:[{t:this.shape_35,p:{y:180.525}},{t:this.shape_34,p:{y:180.525}}]},36).to({state:[]},1).to({state:[{t:this.shape_35,p:{y:180.525}},{t:this.shape_34,p:{y:180.525}}]},34).to({state:[{t:this.shape_35,p:{y:187.125}},{t:this.shape_36,p:{y:187.125}}]},1).to({state:[{t:this.shape_35,p:{y:207.025}},{t:this.shape_36,p:{y:207.025}}]},1).to({state:[{t:this.shape_35,p:{y:240.125}},{t:this.shape_36,p:{y:240.125}}]},1).to({state:[{t:this.shape_35,p:{y:286.475}},{t:this.shape_36,p:{y:286.475}}]},1).to({state:[{t:this.shape_35,p:{y:346.075}},{t:this.shape_36,p:{y:346.075}}]},1).to({state:[{t:this.shape_35,p:{y:418.925}},{t:this.shape_34,p:{y:418.925}}]},1).to({state:[{t:this.shape_35,p:{y:418.925}},{t:this.shape_34,p:{y:418.925}}]},5).to({state:[]},1).wait(3));

	// message_vertical_group_02
	this.instance_9 = new lib.message_vertical_group_02("synched",0,false);
	this.instance_9.setTransform(114.1,-121.85,1,1,0,0,0,125.6,124.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(49).to({startPosition:49},0).to({_off:true},1).wait(34).to({_off:false,startPosition:84},0).wait(11).to({startPosition:95},0).to({_off:true},1).wait(3));

	// yellow_masdk (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AqwD6IAAnzIVhAAIAAHzg");
	var mask_2_graphics_7 = new cjs.Graphics().p("Aqwj5IVhAAIAAHzI1hAAg");
	var mask_2_graphics_8 = new cjs.Graphics().p("Aqwj5IVhAAIAAHzI1hAAg");
	var mask_2_graphics_9 = new cjs.Graphics().p("Aqwj5IVhAAIAAHzI1hAAg");
	var mask_2_graphics_10 = new cjs.Graphics().p("Aqwj5IVhAAIAAHzI1hAAg");
	var mask_2_graphics_11 = new cjs.Graphics().p("Aqxj5IViAAIAAHzI1iAAg");
	var mask_2_graphics_12 = new cjs.Graphics().p("Aqxj5IVjAAIAAHzI1jAAg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AqxD6IAAnzIVjAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:119.675,y:-275.5}).wait(7).to({graphics:mask_2_graphics_7,x:119.475,y:-275.525}).wait(1).to({graphics:mask_2_graphics_8,x:119.475,y:-278.525}).wait(1).to({graphics:mask_2_graphics_9,x:119.45,y:-287.475}).wait(1).to({graphics:mask_2_graphics_10,x:119.425,y:-302.425}).wait(1).to({graphics:mask_2_graphics_11,x:119.35,y:-323.325}).wait(1).to({graphics:mask_2_graphics_12,x:119.3,y:-350.225}).wait(1).to({graphics:mask_2_graphics_13,x:119.225,y:-383.1}).wait(1).to({graphics:null,x:0,y:0}).wait(85));

	// Yellow_bar
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F5B846").s().p("AqAC3IGFluIN8AAIAAFwg");
	this.shape_37.setTransform(130.825,-277.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F5B846").s().p("AqAC3IGFlvIN7AAIAAFwg");
	this.shape_38.setTransform(130.75,-280.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F5B846").s().p("Ap9C3IGEluIN3AAIAAFvg");
	this.shape_39.setTransform(130.525,-289.125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F5B846").s().p("Ap6C3IGEluINwAAIABFvg");
	this.shape_40.setTransform(130.175,-304.075);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F5B846").s().p("Ap1C3IGDluINnAAIABFvg");
	this.shape_41.setTransform(129.65,-325.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F5B846").s().p("ApuC2IGClsINbAAIAAFtg");
	this.shape_42.setTransform(129,-351.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F5B846").s().p("ApnC2IGClsINMAAIABFtg");
	this.shape_43.setTransform(128.175,-384.9);

	var maskedShapeInstanceList = [this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37}]}).to({state:[{t:this.shape_37}]},7).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[]},1).wait(85));

	// phone_top
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1140A0").s().p("AlPCAIAAj/IKfAAIAAD/g");
	this.shape_44.setTransform(115.4,-474.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(7).to({x:115.2},0).wait(1).to({y:-477.1},0).wait(1).to({x:115.15,y:-486.05},0).wait(1).to({x:115.1,y:-501},0).wait(1).to({x:115,y:-521.9},0).wait(1).to({x:114.9,y:-548.8},0).wait(1).to({x:114.8,y:-581.7},0).to({_off:true},1).wait(85));

	// phone_frame
	this.instance_10 = new lib.phone_frame();
	this.instance_10.setTransform(115.8,-378.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({x:115.5,y:-486.1},6,cjs.Ease.quadIn).to({_off:true},1).wait(85));

	// dot_wht
	this.instance_11 = new lib.dot_wht();
	this.instance_11.setTransform(94.6,-309.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({x:94.4},0).to({x:94.9,y:-332.4},6,cjs.Ease.quadIn).to({_off:true},1).wait(85));

	// dot_wht
	this.instance_12 = new lib.dot_wht();
	this.instance_12.setTransform(115.4,-309.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(8).to({x:115.2,y:-316.2},0).to({x:115.7,y:-325.9},5,cjs.Ease.quadIn).to({_off:true},1).wait(85));

	// dot_wht
	this.instance_13 = new lib.dot_wht();
	this.instance_13.setTransform(135.8,-309.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({x:135.6,y:-329.2},0).to({x:136.1,y:-306.4},4,cjs.Ease.quadIn).to({_off:true},1).wait(85));

	// man_mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");
	var mask_3_graphics_7 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");
	var mask_3_graphics_8 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");
	var mask_3_graphics_9 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");
	var mask_3_graphics_10 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");
	var mask_3_graphics_11 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");
	var mask_3_graphics_12 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AlTscQgUABAAgVMAAAghfQAAgVAUABISfAAQAUgBAAAVMAAAAhfQAAAVgUgBg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:118.6,y:-379.3}).wait(7).to({graphics:mask_3_graphics_7,x:118.4,y:-379.3}).wait(1).to({graphics:mask_3_graphics_8,x:118.2,y:-382.3}).wait(1).to({graphics:mask_3_graphics_9,x:117.65,y:-391.25}).wait(1).to({graphics:mask_3_graphics_10,x:116.7,y:-406.2}).wait(1).to({graphics:mask_3_graphics_11,x:115.4,y:-427.1}).wait(1).to({graphics:mask_3_graphics_12,x:113.7,y:-454}).wait(1).to({graphics:mask_3_graphics_13,x:86.4,y:-298.05}).wait(1).to({graphics:null,x:0,y:0}).wait(85));

	// head
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1140A0").s().p("AiyDtQhKhJAAhqIAAh0QAAhoBKhLQBLhJBngBQBpABBKBJQBKBLAABoIAAB0QAABqhKBJQhKBLhpgBQhnABhLhLg");
	this.shape_45.setTransform(115.15,-405.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1140A0").s().p("AiyDtQhKhJAAhqIAAh0QAAhoBKhLQBKhJBogBQBpABBKBJQBKBLAABoIAAB0QAABqhKBJQhKBLhpgBQhoABhKhLg");
	this.shape_46.setTransform(114.95,-405.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1140A0").s().p("AiyDtQhKhJAAhqIAAh0QAAhoBKhKQBKhLBoAAQBoAABLBLQBKBKAABoIAAB0QAABqhKBJQhLBLhoAAQhoAAhKhLg");
	this.shape_47.setTransform(114.85,-403.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1140A0").s().p("AiyDuQhKhLAAhoIAAh0QAAhpBKhLQBKhJBoAAQBoAABLBJQBKBLAABpIAAB0QAABohKBLQhLBJhoAAQhoAAhKhJg");
	this.shape_48.setTransform(114.45,-398.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1140A0").s().p("AiyDtQhKhKAAhoIAAh0QAAhpBKhKQBLhLBnAAQBoAABLBLQBKBKAABpIAAB0QAABohKBKQhLBLhoAAQhnAAhLhLg");
	this.shape_49.setTransform(113.85,-390.55);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1140A0").s().p("AiyDtQhKhJAAhqIAAh0QAAhoBKhLQBLhKBnAAQBoAABLBKQBKBLAABoIAAB0QAABqhKBJQhLBLhogBQhnABhLhLg");
	this.shape_50.setTransform(112.95,-379.05);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1140A0").s().p("AiyDuQhKhKAAhpIAAh0QAAhpBKhKQBKhLBoABQBpgBBKBLQBKBKAABpIAAB0QAABphKBKQhKBJhpABQhogBhKhJg");
	this.shape_51.setTransform(111.85,-364.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1140A0").s().p("AiyDtQhKhJAAhqIAAh0QAAhoBKhLQBKhJBogBQBpABBKBJQBKBLAABoIAAB0QAABqhKBJQhKBKhpAAQhoAAhKhKg");
	this.shape_52.setTransform(110.5,-346.2);

	var maskedShapeInstanceList = [this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45}]}).to({state:[{t:this.shape_46}]},7).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[]},1).wait(85));

	// Body
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1140A0").s().p("AnJIgIAAp2QABhyA1hkQAzhhBbg/QA0gkA6gVQBLgaBMAAQBQAABQAdQA9AXAxAlQBXBAAxBfQA0BiAABvIAAJ2g");
	this.shape_53.setTransform(115.15,-322.975);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1140A0").s().p("AnIIgIAAp2QgBhyA2hkQAzhhBbg/QAzgkA8gVQBJgaBNAAQBQAABQAdQA8AXAzAlQBWBAAyBfQAzBiAABvIAAJ2g");
	this.shape_54.setTransform(114.95,-322.975);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1140A0").s().p("AnIIgIAAp2QgBhyA2hkQA0hhBZg/QA0gkA8gVQBJgaBNAAQBQAABQAdQA8AXAzAlQBWBAAyBfQAzBigBBvIAAJ2g");
	this.shape_55.setTransform(114.85,-321.325);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1140A0").s().p("AnJIgIAAp2QAAhyA2hkQAzhhBag/QA1gkA6gVQBLgaBMAAQBRAABPAdQA9AXAxAlQBXBAAxBfQAzBiAABvIAAJ2g");
	this.shape_56.setTransform(114.45,-316.425);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1140A0").s().p("AnIIgIAAp2QAAhyA1hkQA0hhBZg/QA0gkA8gVQBJgaBNAAQBRAABPAdQA8AXAzAlQBWBAAyBfQAyBiAABvIAAJ2g");
	this.shape_57.setTransform(113.85,-308.175);

	var maskedShapeInstanceList = [this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53}]}).to({state:[{t:this.shape_54}]},7).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56,p:{x:114.45,y:-316.425}}]},1).to({state:[{t:this.shape_57,p:{x:113.85,y:-308.175}}]},1).to({state:[{t:this.shape_57,p:{x:112.95,y:-296.675}}]},1).to({state:[{t:this.shape_56,p:{x:111.85,y:-281.875}}]},1).to({state:[{t:this.shape_56,p:{x:110.5,y:-263.825}}]},1).to({state:[]},1).wait(85));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16,-662.3,213.8,925.1999999999999);


(lib.graphic_icon_animations = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// scheduleVisit_animation
	this.instance = new lib.scheduleVisit_animation("synched",0,false);
	this.instance.setTransform(456.7,192,1,1,0,0,0,283.2,128.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(261).to({_off:false},0).wait(50).to({x:455.35,startPosition:84},0).to({_off:true},12).wait(37));

	// messageCare_animation
	this.instance_1 = new lib.messageCare_animation("synched",0,false);
	this.instance_1.setTransform(172.2,63.45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(192).to({_off:false},0).to({_off:true},69).wait(99));

	// results_animation
	this.instance_2 = new lib.results_animation("synched",0,false);
	this.instance_2.setTransform(298.45,180.5,1,1,0,0,0,126.2,117);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(147).to({_off:false},0).to({_off:true},45).wait(168));

	// appt_animation
	this.instance_3 = new lib.appt_animation("synched",0,false);
	this.instance_3.setTransform(290.6,182.1,1,1,0,0,0,87.8,126.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(102).to({_off:false},0).to({_off:true},45).wait(213));

	// hands_animation
	this.instance_4 = new lib.hands_animation("synched",0,false);
	this.instance_4.setTransform(290.6,240.1,1,1,0,0,0,87.8,126.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({_off:false},0).to({y:172.1,startPosition:4},4,cjs.Ease.quadOut).to({y:182.1,startPosition:8},4,cjs.Ease.quadOut).to({_off:true},39).wait(258));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-821.2,424.8,1151);


(lib.BSWH_Element_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BSWH_Icon
	this.instance = new lib.bswh_logo("synched",0,false);
	this.instance.setTransform(201.1,308.15,1,1,0,0,0,1.7,-42.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:201.6,y:309.15,alpha:1,startPosition:16},16).to({_off:true},34).wait(310));

	// BSWH_logo_txt
	this.instance_1 = new lib.BSWH_Txt();
	this.instance_1.setTransform(299,419.05,1.1,1.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},16).wait(31).to({alpha:0},4).to({_off:true},1).wait(308));

	// Layer_2
	this.instance_2 = new lib.shdow_bitmap();
	this.instance_2.setTransform(201.05,375.5,0.3226,0.3226);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).to({regX:0.1,scaleX:0.9644,scaleY:0.9644,x:201.15,y:375.35,alpha:0.6016},5,cjs.Ease.quadOut).to({regX:0,scaleX:0.774,scaleY:0.774,x:201.05,y:375.2,alpha:0.5},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:201.2,y:375.4,alpha:0.5703},9,cjs.Ease.quadInOut).to({x:201.3,y:375.35,alpha:0},12).to({_off:true},1).wait(278));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.384,1],-0.1,34.3,-0.1,-34.3).s().p("A4jFXIAAqtMAxGAAAIAAKtg");
	this.shape.setTransform(208.2,369.325);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(328).to({_off:false},0).wait(1).to({y:341.725},0).wait(1).to({y:325.125},0).wait(1).to({y:319.625},0).wait(29));

	// BSWH_Badge
	this.instance_3 = new lib.bswh_badge("single",0);
	this.instance_3.setTransform(200.45,309.85,1.115,1.115,0,0,0,0.5,0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50).to({_off:false},0).to({x:200.35,y:304.65},5,cjs.Ease.quadOut).to({y:322.65},5,cjs.Ease.quadInOut).to({y:309.05,mode:"synched",startPosition:6,loop:false},9,cjs.Ease.quadInOut).wait(25).to({startPosition:49},0).wait(45).to({startPosition:49},0).wait(45).to({startPosition:49},0).wait(74).to({startPosition:49},0).wait(50).to({startPosition:49},0).wait(16).to({startPosition:65},0).to({y:245.05,startPosition:72},7,cjs.Ease.quadInOut).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.1,20.4,406,533.1);


// stage content:
(lib.BSWH_EllisCounty_160x600_v01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgY/hdvMAx/AAAMAAAC7fMgx/AAAg");
	this.shape.setTransform(160,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// Layer_16
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A5TTOMAAAgmbMAynAAAMAAAAmbg");
	this.shape_1.setTransform(160.05,1075.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));

	// txt_takeHealthcare
	this.instance = new lib.endFrame_txt("single",0);
	this.instance.setTransform(160.6,722.1,0.5682,0.5682,0,0,0,53.5,39.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(328).to({_off:false},0).to({alpha:1},5).wait(27));

	// cta_btn
	this.instance_1 = new lib.cta_btn("single",11);
	this.instance_1.setTransform(50.05,851.85,0.9757,0.9757,0,0,0,-108.1,-38.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(335).to({_off:false},0).to({alpha:1},5).wait(20));

	// Layer_7
	this.instance_2 = new lib.endFrame_tapInto("synched",0,false);
	this.instance_2.setTransform(37.1,277,0.8052,0.8052,0,0,0,55.4,127.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(326).to({_off:false},0).wait(33).to({mode:"single",startPosition:33},0).wait(1));

	// BSWH_Element_animation
	this.instance_3 = new lib.BSWH_Element_animation("synched",0,false);
	this.instance_3.setTransform(156.6,742.55,1.1967,1.1967,0,0,0,202.7,318.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(360));

	// graphic_icon_animations
	this.instance_4 = new lib.graphic_icon_animations("synched",0,false);
	this.instance_4.setTransform(167.85,440.35,1.1034,1.1034,0,0,0,303.7,184.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(192).to({startPosition:192},0).to({scaleX:0.7804,scaleY:0.7804,x:167.7,y:525.05,startPosition:200},8,cjs.Ease.quadOut).wait(68).to({startPosition:268},0).to({regX:303.5,scaleX:1.0509,scaleY:1.0509,x:163.7,y:440.4,startPosition:274},6).wait(86));

	// Graphic_Text_animations
	this.instance_5 = new lib.Graphic_Text_animations("synched",0,false);
	this.instance_5.setTransform(158.05,793.2,0.8513,0.8513,0,0,0,309.9,296.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(360));

	// Layer_13
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_2.setTransform(299.575,448.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.169)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_3.setTransform(299.575,447.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.333)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_4.setTransform(299.575,445.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.502)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_5.setTransform(299.575,444.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.667)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_6.setTransform(299.575,443.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.831)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_7.setTransform(299.575,441.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_8.setTransform(299.575,440.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},47).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},4).wait(303));

	// Layer_1
	this.instance_6 = new lib.Frame_01_txt("synched",0,false);
	this.instance_6.setTransform(38.25,365.3,0.7233,0.7233,0,0,0,55.6,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},57).wait(303));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(75.3,217.5,510.2,983.5);
// library properties:
lib.properties = {
	id: 'AAADD9FF39904B44B9D7AC3708DD0A32',
	width: 320,
	height: 1200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Bitmap2.png", id:"Bitmap2"},
		{src:"bottom_shadow.png", id:"bottom_shadow"},
		{src:"gradient_background.png", id:"gradient_background"}
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
an.compositions['AAADD9FF39904B44B9D7AC3708DD0A32'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
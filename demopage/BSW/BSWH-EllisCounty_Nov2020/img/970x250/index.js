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
	this.shape.graphics.f("#EFEEED").s().p("AxLEHIILoNIaMAAIAAINg");
	this.shape.setTransform(109.575,26);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(-0.4,-0.3,220,52.599999999999994), null);


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
	this.shape.graphics.f("#1140A0").s().p("Ak8CQIAuglQA1BUBmAAQA1AAAegZQAdgYAAgnQAAgqgqgVQgZgMhHgPQhIgOgegTQgwgeAAg9QAAg3ArgkQAtgnBGABQA8gBAsAXQAoAUAgApIgrAiQgXgjgegQQghgTgvAAQgzAAgbAXQgZAVAAAlQAAAmAkASQAUAKBDAPQBNAPAhAUQA1AhAABBQAAA5gsApQguAphKAAQiDAAhHhhgAIdDrIh9mGIiEGGIg2AAIiBnWIA4AAIBoGGICEmGIAwAAIB9GHIBymHIA3AAIiNHWgAreDrIAAnWIDKAAQBCABAnAhQAoAjAAA4QAAAjgQAaQgQAbgfAPQAjANATAcQATAdAAAoQAAA9gpAkQgpAjhDAAgAqoC5ICZAAQAsABAagYQAagYgBgkQABgngZgWQgagXgvAAIiXAAgAqogfICXAAQAqABAYgXQAXgVgBgkQAAghgZgWQgZgUgqAAIiTAAg");
	this.shape.setTransform(-5.8,39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C8EBA").s().p("A7aEcIAigrQAWAYAdAAQAbAAARgPQAQgPAUgrIAHgQIiRlLIA5AAIB1ENIBukNIA6AAIieFrQgaA7gbAYQgcAYgtAAQgzAAgigfgARhCpQgfgcAAgsQAAg1ArgeQAqgdBJAAIBuAAIAAgNQAAgpgZgXQgbgZgxAAQhJAAgmA7IgugdQA5hLBkAAQBJAAApAmQAnAjAAA9IAADcIg0AAIAAg9QgXAggmASQgmASgtAAQg7AAgigegAR5BdQAAAbATAQQAVARAnAAQApAAAjgUQAmgVAUgmIAAgvIhrAAQhqAAAABCgALSCUQgygzAAhNQAAhNA0g0QA0g1BOAAQBNAAAyAyQAyAyAABMIAAAYIkzAAQAGAzAjAfQAlAgA2AAQBPAAAmhDIAtAaQg5BYhpAAQhSAAg0gzgAMBhUQgjAegJAvID8AAQgGgyghgdQghgdgzAAQgxAAgkAfgAaXBXIAAjDIhEAAIAAgvIBEAAIAAhMIA0giIAABuIBmAAIAAAvIhmAAIAADCQAAA+AyAAQAXAAARgRIAcAqQgfAYgpAAQhiAAAAhugEAiHADAIAAjDQAAgzgbgeQgcgegyAAQgvAAgeAgQggAgAAAyIAADAIg1AAIAAn6IA0AAIAADXQATgdAfgQQAggSAnAAQBEAAAoAqQAoAqAABJIAADFgAXeDAIAAn6IA1AAIAAH6gAIaDAIAAjRIj8AAIAADRIg2AAIAAnVIA2AAIAADQID8AAIAAjQIA1AAIAAHVgA80DAIAAmCIitDnIimjiIAAF9Ig1AAIAAnVIA1AAICnDnICtjnIAzAAIAAHVg");
	this.shape_1.setTransform(52.425,43.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endFrame_txt, new cjs.Rectangle(-171.3,12.5,447.5,63), null);


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
	this.shape.graphics.f("#008FBE").s().p("AqzG4IAAqYICSAAIAAA7QAUggAigSQAhgTAwAAQArABAoAQQAoARAeAgQAfAhASAtQASAuAAA5QAAA6gSAtQgSAugfAgQgeAggoAQQgoASgpAAQhcAAgsg+IAADygAnmhXQgUAJgOAOQgPAPgJAUQgHAUgBAUQABAYAHASQAJAUAPAPQAOAOAUAIQATAJAXAAQAWAAAUgJQATgIAPgOQAPgPAHgUQAKgSgBgYQABgUgKgUQgHgUgPgPQgPgOgTgJQgUgIgWAAQgXAAgTAIgAxwD6QgegKgVgSQgVgTgMgaQgLgbAAghQAAglAPgeQAPgeAcgUQAcgUAogLQAngMAyAAIBtAAIAAgDQgBgegUgSQgVgTgnABQgiAAgVAMQgXAMgMAZIiMg/QAmgwA2geQA2gdBTgBQBtAAA5AzQA6AyABBeIAAEhIiOAAIAAg/QgYAhgqAUQgqAUg3AAQglAAgegKgAwhBHQgTAOAAAUQABAmA4AAQASgBASgFIAigQQAPgKALgNQANgOAFgPIAAgKIhbAAQgrAAgSAMgAUmDwQgvgUgighQghghgTguQgSgtgBgyQABgzASgsQATgtAhgiQAigiAvgUQAvgSA3gBQA3ABAvASQAuAUAjAiQAiAiATAtQAUAsAAAzQgBAygSAtQgUAughAhQgiAhguAUQgvASg5ABQg3gBgvgSgAVkhXQgVAJgOAOQgOAPgIAUQgJAUAAAUQAAAYAJASQAIAUAOAPQAOAOAVAIQATAJAWAAQAXAAATgJQAUgIAOgOQAPgPAJgUQAHgSAAgYQAAgUgHgUQgJgUgPgPQgOgOgUgJQgTgIgXAAQgWAAgTAIgAPED5QgggKgVgWQgVgXgMgjQgKglAAg0IAAikIhSAAIAAiCIBSAAIAAhnICShQIAAC3IB0AAIAACCIh0AAIAACbQAAAkAKAMQAMANATAAQAVAAASgRIBDBvQgaAVggALQggALglAAQgoAAgegKgAJQD6IAAkMQAAgpgSgWQgRgWgmAAQgfgBgWAXQgVAXAAAwIAAEEIiWAAIAAnaICVAAIAAA3QAXgeAggSQAggQAogBQBQAAAuAyQAwAwgBBZIAAEpgABED6IAAnaICZAAIAAHagA3cD6IAAn0IivAAIAAiNIHxAAIAACNIitAAIAAH0gABRkeQgYgZAAgnQAAgnAYgZQAXgZAoAAQAoAAAZAZQAYAZAAAnQAAAngYAZQgZAZgoAAQgoAAgXgZg");
	this.shape.setTransform(-3.05,-0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_tapInto_02, new cjs.Rectangle(-170.6,-44.7,335.1,88), null);


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
	this.shape.graphics.f("#008FBE").s().p("AgcAdQgKgLAAgSQAAgQAKgMQAMgKAQgBQARABAMAKQAKAMAAAQQAAASgKALQgMALgRAAQgRAAgLgLg");
	this.shape.setTransform(204.4,34.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008FBE").s().p("Ag/BiQgagQgMgdIBDgTQAFANALAHQALAGANAAQANAAAHgFQAGgFAAgGQAAgFgDgDIgKgFIgPgEIgRgEIgcgGQgOgFgLgGQgLgHgHgMQgIgKAAgTQAAgOAHgNQAHgNAMgJQANgKARgGQARgFAUAAQATAAAPAEQAOAEAMAGQAMAHAJAKQAKAJAIAMIhAATQgKgUgZAAQgMAAgGAEQgGADAAAIQAAAHAMAEIAhAIIAcAHQAOAEAMAHQALAIAIAKQAHAMAAASQAAANgGANQgGAOgMALQgMAKgSAHQgTAGgYAAQgqAAgagPg");
	this.shape_1.setTransform(187.725,27.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008FBE").s().p("AgyCYQgSgIgOgOQgOgPgIgUQgIgVAAgbQAAgaAIgVQAIgTAOgPQAOgPASgHQASgIAUAAQATAAAPAHQAPAIAKANIAAh7IBCAAIAAE6IhCAAIAAgaQgKAPgPAIQgQAIgTAAQgTAAgSgIgAgQACQgJAEgGAGQgHAHgEAJQgEAJAAAKQAAAKAEAJQAEAJAHAGQAGAHAJAEQAJAEAJAAQAKAAAJgEQAJgEAHgHQAGgGAEgJQAEgJAAgKQAAgKgEgJQgEgJgGgHQgHgGgJgEQgJgDgKAAQgJAAgJADg");
	this.shape_2.setTransform(164.025,22.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008FBE").s().p("AAgBuIAAh5QAAgTgIgKQgIgKgQAAQgOAAgJAKQgKALAAAWIAAB1IhEAAIAAjXIBEAAIAAAZQAKgOAPgHQANgIASAAQAkAAAWAWQAVAXAAAoIAACGg");
	this.shape_3.setTransform(139.7,27.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008FBE").s().p("Ag+BsQgOgFgJgIQgJgJgGgLQgFgMAAgPQAAgRAHgOQAGgNAOgJQAMgJASgGQASgEAWAAIAxAAIAAgCQAAgOgJgIQgJgIgSAAQgPAAgKAGQgKAFgGALIg/gdQARgVAZgOQAZgOAkAAQAxAAAaAYQAbAWAAArIAACDIhBAAIAAgdQgKAPgTAJQgTAKgYAAQgRgBgOgEgAgaAbQgIAGAAAJQAAARAZAAQAJAAAHgCIAPgIQAIgEAEgGQAFgHADgHIAAgDIgpAAQgSAAgJAFg");
	this.shape_4.setTransform(115.55,27.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008FBE").s().p("AAgCeIAAh7QAAgSgJgLQgIgJgPAAQgPAAgJAJQgKALAAAWIAAB3IhDAAIAAk7IBDAAIAAB8QAKgOAPgIQAOgHASAAQARAAAPAGQAOAFAKALQALAMAFAPQAGAPABAUIAACIg");
	this.shape_5.setTransform(92.15,22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008FBE").s().p("AhRBuIAAjXIBDAAIAAAfQAIgTAPgIQAPgIAVAAQALAAAJACIARAGIgXBEQgFgEgJgDQgIgCgJAAQgUAAgKAKQgMALAAAZIAABqg");
	this.shape_6.setTransform(63.025,27.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#008FBE").s().p("AhQBYQgVgXAAgoIAAiGIBFAAIAAB5QAAATAIAKQAIAJAQAAQAPAAAJgKQAKgKgBgVIAAh2IBFgBIAADXIhEABIAAgZQgKAOgPAIQgNAHgSABQglAAgVgXg");
	this.shape_7.setTransform(41.2,27.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#008FBE").s().p("AguBnQgVgIgQgPQgPgQgIgUQgJgVAAgXQAAgWAJgUQAIgVAPgPQAQgPAVgJQAVgJAZAAQAYAAAWAJQAVAJAPAPQAQAPAJAVQAJAUAAAWQAAAXgJAVQgJAUgPAQQgPAPgWAIQgVAJgZAAQgZAAgVgJgAgSgsQgJAEgHAGQgGAHgEAJQgEAJAAAJQAAAKAEAJQAEAJAGAGQAHAHAJAEQAJAEAJAAQAKAAAJgEQAJgEAHgHQAGgGAEgJQAEgJAAgKQAAgJgEgJQgEgJgGgHQgHgGgJgEQgJgEgKAAQgJAAgJAEg");
	this.shape_8.setTransform(16.675,27.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#008FBE").s().p("AhfCTQgTgHgNgJIAng1QAGAGAGAEQAIADAJAAQANAAAJgGQAJgHAGgPIADgIIhUjQIBHAAIAuB7IAsh7IBGAAIhaDkQgJAWgJAQQgJAPgLAIQgLAJgOAFQgOADgTAAQgTAAgSgGg");
	this.shape_9.setTransform(-9,32);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#008FBE").s().p("AguBnQgVgIgQgPQgPgQgIgUQgJgVAAgXQAAgWAJgUQAIgVAPgPQAQgPAVgJQAVgJAZAAQAYAAAWAJQAVAJAPAPQAQAPAJAVQAJAUAAAWQAAAXgJAVQgJAUgPAQQgPAPgWAIQgVAJgZAAQgZAAgVgJgAgSgsQgJAEgHAGQgGAHgEAJQgEAJAAAJQAAAKAEAJQAEAJAGAGQAHAHAJAEQAJAEAJAAQAKAAAJgEQAJgEAHgHQAGgGAEgJQAEgJAAgKQAAgJgEgJQgEgJgGgHQgHgGgJgEQgJgEgKAAQgJAAgJAEg");
	this.shape_10.setTransform(-41.325,27.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#008FBE").s().p("AgECTQgOgEgJgLQgKgJgFgRQgFgQAAgYIAAhKIglAAIAAg8IAlAAIAAguIBBgkIAABSIA1AAIAAA8Ig1AAIAABFQAAARAFAGQAFAFAJAAQAKAAAIgHIAeAyQgMAKgOAFQgPAEgRAAQgRABgOgFg");
	this.shape_11.setTransform(-62.475,23.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#008FBE").s().p("AAhBuIAAh5QgBgTgHgKQgIgKgRAAQgOAAgKAKQgJALAAAWIAAB1IhEAAIAAjXIBDAAIAAAZQALgOAPgHQANgIATAAQAjAAAWAWQAVAXAAAoIAACGg");
	this.shape_12.setTransform(-83.75,27.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#008FBE").s().p("AghCdIAAjXIBDAAIAADXgAgchWQgLgMAAgRQAAgSALgLQALgMARAAQASAAALAMQALALAAASQAAARgLAMQgLALgSAAQgRAAgLgLg");
	this.shape_13.setTransform(-100.8,22.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#008FBE").s().p("AguBoQgVgJgPgPQgPgPgHgVQgIgUAAgYQAAgWAJgUQAIgVAPgPQAQgPAUgJQAVgJAXAAQAZAAAVAIQAUAJAPAPQAPAPAJAUQAIAUAAAYIAAAXIigAAQAGAQANAJQAMAIASAAQAQAAAKgGQAMgGAGgLIA3AgQgRAXgXAMQgXAMglAAQgaAAgVgIgAAugaQgFgOgLgIQgMgHgRAAQgPAAgNAIQgMAHgGAOIBbAAIAAAAg");
	this.shape_14.setTransform(196,-14.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#008FBE").s().p("AhRBuIAAjXIBDAAIAAAfQAIgTAPgIQAPgIAVAAQALAAAJACIARAGIgXBEQgFgEgJgDQgIgCgJAAQgUAAgKAKQgMALAAAZIAABqg");
	this.shape_15.setTransform(175.075,-14.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#008FBE").s().p("Ag+BsQgNgFgKgIQgJgIgGgMQgFgMAAgPQAAgRAHgOQAHgNAMgJQANgJASgGQASgEAWgBIAxAAIAAgBQAAgOgJgIQgJgIgTAAQgOAAgJAGQgLAFgFALIhAgdQARgVAZgOQAZgNAkAAQAyAAAaAWQAaAYAAAqIAACDIhAAAIAAgdQgLAPgUAKQgRAIgaABQgQgBgOgEgAgaAbQgIAGAAAJQAAARAaAAQAIAAAHgCIAPgHQAHgGAGgFQAEgGADgIIAAgDIgpAAQgTgBgIAGg");
	this.shape_16.setTransform(152.95,-14.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#008FBE").s().p("AgqBoQgVgJgPgPQgPgPgJgVQgIgUAAgYQAAgXAIgVQAJgUAPgPQAPgPAVgIQAVgKAXABQAoAAAcATQAbAUANAgIg/AXQgEgOgMgJQgMgIgQAAQgIAAgJAEQgJAEgGAGQgHAHgDAJQgEAJAAAJQAAAKAEAIQADAJAHAHQAHAHAIADQAJAFAIAAQAQAAALgJQALgJAGgOIBAAaQgHAPgKANQgLAMgOAKQgNAJgRAFQgRAFgUABQgXgBgVgIg");
	this.shape_17.setTransform(129.475,-14.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#008FBE").s().p("AAgCeIAAh7QgBgSgHgLQgJgJgPABQgPgBgKAJQgJALAAAWIAAB3IhCAAIAAk6IBCAAIAAB7QAKgOAPgIQANgHATAAQASAAAOAGQAOAGALALQAKALAGAPQAFAPAAAUIAACIg");
	this.shape_18.setTransform(105.45,-19.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#008FBE").s().p("AgECTQgOgEgJgLQgKgKgFgQQgFgRAAgXIAAhLIglAAIAAg6IAlAAIAAgvIBBgkIAABTIA1AAIAAA6Ig1AAIAABGQAAARAFAGQAFAFAJAAQAKAAAIgIIAeAzQgMAJgOAGQgPAEgRAAQgRABgOgFg");
	this.shape_19.setTransform(85.175,-18.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#008FBE").s().p("AggCeIAAk6IBBAAIAAE6g");
	this.shape_20.setTransform(70.675,-19.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#008FBE").s().p("Ag9BsQgPgFgJgIQgJgIgGgMQgFgMAAgPQAAgRAHgOQAHgNANgJQAMgJASgGQASgEAXgBIAwAAIAAgBQAAgOgJgIQgJgIgTAAQgOAAgJAGQgLAFgFALIhAgdQARgVAZgOQAZgNAkAAQAxAAAbAWQAaAYAAAqIAACDIhBAAIAAgdQgKAPgUAKQgRAIgaABQgQgBgNgEgAgaAbQgIAGAAAJQAAARAaAAQAIAAAHgCIAPgHQAHgGAGgFQAFgGACgIIAAgDIgpAAQgSgBgJAGg");
	this.shape_21.setTransform(53.4,-14.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#008FBE").s().p("AguBoQgVgJgPgPQgPgPgHgVQgIgUAAgYQAAgWAIgUQAJgVAPgPQAPgPAWgJQAUgJAYAAQAYAAAVAIQAVAJAPAPQAPAPAHAUQAJAUAAAYIAAAXIigAAQAFAQANAJQANAIASAAQAPAAAMgGQALgGAHgLIA2AgQgRAXgYAMQgWAMglAAQgaAAgVgIgAAvgaQgGgOgLgIQgNgHgQAAQgQAAgLAIQgNAHgGAOIBcAAIAAAAg");
	this.shape_22.setTransform(29.35,-14.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#008FBE").s().p("AAfCeIAAh7QABgSgJgLQgHgJgQABQgPgBgJAJQgKALAAAWIAAB3IhDAAIAAk6IBDAAIAAB7QAKgOAPgIQAOgHARAAQATAAAOAGQAOAGALALQAKALAFAPQAHAPAAAUIAACIg");
	this.shape_23.setTransform(5.15,-19.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#008FBE").s().p("AguBoQgVgJgPgPQgPgPgHgVQgIgUAAgYQAAgWAJgUQAIgVAPgPQAPgPAWgJQAUgJAYAAQAYAAAVAIQAUAJAQAPQAPAPAHAUQAJAUAAAYIAAAXIigAAQAFAQANAJQANAIASAAQAPAAAMgGQAKgGAIgLIA2AgQgRAXgYAMQgWAMglAAQgaAAgVgIgAAvgaQgGgOgLgIQgNgHgQAAQgQAAgMAIQgLAHgHAOIBcAAIAAAAg");
	this.shape_24.setTransform(-27.9,-14.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#008FBE").s().p("AAkCeIg1hQIgbAgIAAAwIhDAAIAAk6IBDAAIAAC7IBJhYIBPAAIhOBbIBSB8g");
	this.shape_25.setTransform(-52.325,-19.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#008FBE").s().p("Ag+BsQgNgFgKgIQgJgIgGgMQgFgMAAgPQAAgRAHgOQAHgNAMgJQANgJASgGQASgEAWgBIAxAAIAAgBQAAgOgJgIQgJgIgTAAQgOAAgJAGQgLAFgFALIhAgdQARgVAZgOQAZgNAkAAQAyAAAaAWQAaAYAAAqIAACDIhAAAIAAgdQgLAPgUAKQgRAIgaABQgQgBgOgEgAgaAbQgIAGAAAJQAAARAaAAQAIAAAHgCIAPgHQAHgGAGgFQAEgGADgIIAAgDIgpAAQgTgBgIAGg");
	this.shape_26.setTransform(-77.45,-14.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#008FBE").s().p("AghCSIAAjjIhPAAIAAhAIDhAAIAABAIhPAAIAADjg");
	this.shape_27.setTransform(-101.925,-17.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_takeHealthcare, new cjs.Rectangle(-116.9,-45.7,691.4,98.2), null);


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
	this.shape.graphics.f("#008FBE").s().p("AgbAdQgLgLAAgSQAAgQALgMQAKgKARgBQASABALAKQAKAMAAAQQAAASgKALQgLALgSAAQgRAAgKgLg");
	this.shape.setTransform(141.95,34.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008FBE").s().p("AgECTQgOgEgJgLQgKgJgFgRQgFgQAAgYIAAhKIglAAIAAg8IAlAAIAAguIBBgkIAABSIA1AAIAAA8Ig1AAIAABFQAAARAFAGQAFAFAJAAQAKAAAIgHIAeAyQgMAKgOAFQgPAEgRAAQgRABgOgFg");
	this.shape_1.setTransform(127.575,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008FBE").s().p("AghCdIAAjXIBDAAIAADXgAgchWQgLgMAAgRQAAgSALgLQALgMARAAQASAAALAMQALALAAASQAAARgLAMQgLALgSAAQgRAAgLgLg");
	this.shape_2.setTransform(112.5,22.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008FBE").s().p("Ag/BiQgagQgMgdIBDgTQAFANALAHQALAGANAAQANAAAHgFQAGgFAAgGQAAgFgDgDIgKgFIgPgEIgRgEIgcgGQgOgFgLgGQgLgHgHgMQgIgKAAgTQAAgOAHgNQAHgNAMgJQANgKARgGQARgFAUAAQATAAAPAEQAOAEAMAGQAMAHAJAKQAKAJAIAMIhAATQgKgUgZAAQgMAAgGAEQgGADAAAIQAAAHAMAEIAhAIIAcAHQAOAEAMAHQALAIAIAKQAHAMAAASQAAANgGANQgGAOgMALQgMAKgSAHQgTAGgYAAQgqAAgagPg");
	this.shape_3.setTransform(95.625,27.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008FBE").s().p("AgiCdIAAjXIBEAAIAADXgAgchWQgLgMAAgRQAAgSALgLQALgMARAAQARAAAMAMQALALAAASQAAARgLAMQgMALgRAAQgRAAgLgLg");
	this.shape_4.setTransform(79.35,22.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008FBE").s().p("AggBsIhRjXIBHAAIArB+IArh+IBGAAIhPDXg");
	this.shape_5.setTransform(62.15,27.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008FBE").s().p("AguBnQgVgIgQgPQgPgQgIgUQgJgVAAgXQAAgWAJgUQAIgVAPgPQAQgPAVgJQAVgJAZAAQAYAAAWAJQAVAJAPAPQAQAPAJAVQAJAUAAAWQAAAXgJAVQgJAUgPAQQgPAPgWAIQgVAJgZAAQgZAAgVgJgAgSgsQgJAEgHAGQgGAHgEAJQgEAJAAAJQAAAKAEAJQAEAJAGAGQAHAHAJAEQAJAEAJAAQAKAAAJgEQAJgEAHgHQAGgGAEgJQAEgJAAgKQAAgJgEgJQgEgJgGgHQgHgGgJgEQgJgEgKAAQgJAAgJAEg");
	this.shape_6.setTransform(28.125,27.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#008FBE").s().p("AguBoQgVgJgPgPQgPgPgHgVQgIgUAAgYQAAgWAJgUQAIgVAPgPQAQgPAUgJQAVgJAXAAQAZAAAVAIQAUAJAPAPQAPAPAJAUQAIAUAAAYIAAAXIigAAQAGAQAMAJQANAIASAAQAQAAAKgGQAMgGAGgLIA3AgQgRAXgXAMQgXAMglAAQgaAAgVgIgAAugaQgFgOgLgIQgMgHgRAAQgPAAgNAIQgMAHgGAOIBbAAIAAAAg");
	this.shape_7.setTransform(2.5,27.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#008FBE").s().p("AgyCYQgSgIgOgOQgOgPgIgUQgIgVAAgbQAAgaAIgVQAIgTAOgPQAOgPASgHQASgIAUAAQATAAAPAHQAPAIAKANIAAh7IBCAAIAAE6IhCAAIAAgaQgKAPgPAIQgQAIgTAAQgTAAgSgIgAgQACQgJAEgGAGQgHAHgEAJQgEAJAAAKQAAAKAEAJQAEAJAHAGQAGAHAJAEQAJAEAJAAQAKAAAJgEQAJgEAHgHQAGgGAEgJQAEgJAAgKQAAgKgEgJQgEgJgGgHQgHgGgJgEQgJgDgKAAQgJAAgJADg");
	this.shape_8.setTransform(-23.525,22.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#008FBE").s().p("AghCdIAAjXIBEAAIAADXgAgchWQgLgMAAgRQAAgSALgLQALgMARAAQASAAALAMQALALAAASQAAARgLAMQgLALgSAAQgRAAgLgLg");
	this.shape_9.setTransform(-41.65,22.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#008FBE").s().p("AggBsIhRjXIBHAAIAsB+IArh+IBFAAIhQDXg");
	this.shape_10.setTransform(-58.85,27.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#008FBE").s().p("Ag9BsQgPgFgJgIQgJgJgGgLQgFgMAAgPQAAgRAHgOQAHgNAMgJQANgJASgGQASgEAXAAIAwAAIAAgCQAAgOgJgIQgJgIgTAAQgOAAgJAGQgLAFgFALIhAgdQARgVAZgOQAZgOAkAAQAxAAAbAYQAaAWAAArIAACDIhBAAIAAgdQgKAPgUAJQgRAKgaAAQgQgBgNgEgAgaAbQgIAGAAAJQAAARAaAAQAIAAAHgCIAPgIQAHgEAGgGQAFgHACgHIAAgDIgpAAQgSAAgJAFg");
	this.shape_11.setTransform(-92.4,27.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#008FBE").s().p("AguBoQgVgJgPgPQgOgPgJgVQgHgUAAgYQAAgWAJgUQAIgVAPgPQAQgPAUgJQAVgJAXAAQAZAAAVAIQAUAJAPAPQAPAPAJAUQAIAUAAAYIAAAXIigAAQAGAQANAJQAMAIASAAQAQAAAKgGQAMgGAGgLIA3AgQgRAXgXAMQgYAMgkAAQgZAAgWgIgAAugaQgFgOgMgIQgLgHgRAAQgPAAgNAIQgMAHgGAOIBbAAIAAAAg");
	this.shape_12.setTransform(69,-14.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#008FBE").s().p("AggCeIAAk6IBBAAIAAE6g");
	this.shape_13.setTransform(50.975,-19.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#008FBE").s().p("AhQBYQgVgXAAgoIAAiGIBFAAIAAB5QAAATAIAKQAIAJAQAAQAPABAJgLQAJgKAAgWIAAh1IBFgBIAADXIhDABIAAgZQgLAPgOAHQgOAIgSAAQglgBgVgWg");
	this.shape_14.setTransform(33.5,-13.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#008FBE").s().p("AgyCYQgSgIgOgOQgOgPgIgUQgIgVAAgbQAAgaAIgVQAIgTAOgPQAOgPASgHQASgIAUAAQATAAAPAHQAPAIAKANIAAh7IBCAAIAAE6IhCAAIAAgaQgKAPgPAIQgQAIgTAAQgTAAgSgIgAgQACQgJAEgGAGQgHAHgEAJQgEAJAAAKQAAAKAEAJQAEAJAHAGQAGAHAJAEQAJAEAJAAQAKAAAJgEQAJgEAHgHQAGgGAEgJQAEgJAAgKQAAgKgEgJQgEgJgGgHQgHgGgJgEQgJgDgKAAQgJAAgJADg");
	this.shape_15.setTransform(8.125,-18.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#008FBE").s().p("AguBoQgVgJgOgPQgPgPgJgVQgHgUAAgYQAAgWAIgUQAJgVAPgPQAPgPAWgJQAUgJAYAAQAYAAAVAIQAVAJAPAPQAPAPAHAUQAJAUAAAYIAAAXIigAAQAFAQAOAJQAMAIASAAQAPAAALgGQALgGAHgLIA3AgQgRAXgXAMQgYAMgkAAQgaAAgVgIgAAugaQgFgOgMgIQgLgHgRAAQgPAAgMAIQgMAHgHAOIBbAAIAAAAg");
	this.shape_16.setTransform(-17.25,-14.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#008FBE").s().p("AAgCeIAAh7QAAgSgJgLQgIgJgPABQgPgBgJAJQgKALAAAWIAAB3IhDAAIAAk6IBDAAIAAB7QAKgOAPgIQAOgHASAAQARAAAPAGQAOAGAKALQALALAFAPQAGAPABAUIAACIg");
	this.shape_17.setTransform(-41.95,-19.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#008FBE").s().p("AgqBoQgVgJgPgPQgPgPgJgVQgIgUAAgYQAAgXAIgVQAJgUAPgPQAPgPAVgIQAVgKAXABQAoAAAcATQAbAUANAgIg/AXQgEgOgMgJQgMgIgQAAQgIAAgJAEQgJAEgGAGQgHAHgDAJQgEAJAAAJQAAAKAEAIQADAJAHAHQAHAHAIADQAJAFAIAAQAQAAALgJQALgJAGgOIBAAaQgHAPgKANQgLAMgOAKQgNAJgRAFQgRAFgUABQgXgBgVgIg");
	this.shape_18.setTransform(-66.125,-14.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#008FBE").s().p("AghCSQgUgFgPgHQgQgIgNgLQgMgKgLgNIA8gwQANATASAMQARALAYgBQASAAAJgHQAJgIAAgMQAAgHgDgFQgEgFgIgDIgSgHIgagHIgggJQgRgFgNgJQgNgJgJgOQgIgQAAgVQAAgUAIgQQAIgQAOgNQAOgMATgGQAUgIAXABQAUgBAQAEQARADANAHQAOAGAMAKIAYAXIg4ArQgKgQgPgJQgPgJgWAAQgRAAgIAIQgJAIAAAKQAAAHAFAEQAEAFAIADIARAFIAYAGIAiAJQAQAGAOAJQAOAJAJAPQAJAPAAAYQAAAVgJARQgIASgPAMQgPANgUAHQgVAIgYgBQgXABgTgFg");
	this.shape_19.setTransform(-92.275,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_scheduleVisit, new cjs.Rectangle(-106.2,-45.7,616.9,98.2), null);


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
	this.shape.graphics.f("#008FBE").s().p("AgbAcQgLgKAAgSQAAgRALgKQAKgMARABQASgBAKAMQALAKAAARQAAASgLAKQgKAMgSAAQgRAAgKgMg");
	this.shape.setTransform(182.55,34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008FBE").s().p("Ag/BhQgagPgMgdIBDgTQAFAOALAFQALAHANAAQANAAAHgFQAGgFAAgHQAAgEgDgDIgKgFIgPgFIgRgDIgcgHQgOgDgLgIQgLgGgHgLQgIgMAAgRQAAgOAHgNQAHgNAMgLQANgJARgFQARgGAUAAQATAAAPAEQAOAEAMAGQAMAHAJAJQAKAKAIAMIhAAUQgKgVgZAAQgMAAgGAEQgGAEAAAGQAAAIAMAEIAhAIIAcAGQAOAEAMAIQALAHAIALQAHAMAAASQAAANgGAOQgGANgMAKQgMALgSAGQgTAHgYAAQgqAAgagQg");
	this.shape_1.setTransform(165.375,27.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008FBE").s().p("AgECTQgOgEgJgKQgKgKgFgRQgFgRAAgYIAAhKIglAAIAAg6IAlAAIAAgwIBBgkIAABUIA1AAIAAA6Ig1AAIAABGQAAARAFAFQAFAGAJAAQAKAAAIgIIAeA0QgMAJgOAEQgPAGgRAAQgRgBgOgEg");
	this.shape_2.setTransform(145.825,23.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008FBE").s().p("AAgBuIAAh5QAAgTgHgKQgIgKgRAAQgOAAgKAKQgJALAAAWIAAB1IhEAAIAAjXIBDAAIAAAZQALgOAPgHQANgIASAAQAkAAAWAWQAVAXAAAoIAACGg");
	this.shape_3.setTransform(124.05,27.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008FBE").s().p("AguBoQgVgJgPgPQgPgPgHgVQgIgUAAgYQAAgWAJgUQAIgVAPgPQAQgPAUgJQAVgJAXAAQAZAAAVAIQAUAJAPAPQAPAPAJAUQAIAUAAAYIAAAXIigAAQAGAQAMAJQANAIASAAQAQAAAKgGQAMgGAGgLIA3AgQgRAXgYAMQgWAMglAAQgaAAgVgIgAAugaQgFgOgLgIQgMgHgRAAQgPAAgNAIQgMAHgGAOIBbAAIAAAAg");
	this.shape_4.setTransform(99.25,27.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008FBE").s().p("ABhBuIAAh6QAAgSgHgKQgHgKgRAAQgPAAgJAKQgIAKAAAWIAAB2IhEAAIAAh6QAAgSgHgKQgHgKgRAAQgPAAgIAKQgJAKAAAWIAAB2IhEAAIAAjXIBEAAIAAAaQAJgOAPgIQAQgIASAAQAXAAAQAJQAPAJAIARQALgRAQgJQARgJAVAAQAmAAAUAWQAUAWAAAoIAACHg");
	this.shape_5.setTransform(68.05,27.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008FBE").s().p("AgECTQgOgEgJgKQgKgKgFgRQgFgRAAgYIAAhKIglAAIAAg6IAlAAIAAgwIBBgkIAABUIA1AAIAAA6Ig1AAIAABGQAAARAFAFQAFAGAJAAQAKAAAIgIIAeA0QgMAJgOAEQgPAGgRAAQgRgBgOgEg");
	this.shape_6.setTransform(40.825,23.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#008FBE").s().p("AAhBuIAAh5QgBgTgHgKQgJgKgQAAQgOAAgKAKQgJALAAAWIAAB1IhEAAIAAjXIBDAAIAAAZQALgOAOgHQAOgIATAAQAjAAAVAWQAWAXAAAoIAACGg");
	this.shape_7.setTransform(19.05,27.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#008FBE").s().p("AgiCdIAAjXIBEAAIAADXgAgchWQgLgMAAgRQAAgSALgLQALgMARAAQARAAAMAMQALALAAASQAAARgLAMQgMALgRAAQgRAAgLgLg");
	this.shape_8.setTransform(1.5,22.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#008FBE").s().p("AguBnQgVgIgQgPQgPgQgIgUQgJgVAAgXQAAgWAJgUQAIgVAPgPQAQgPAVgJQAVgJAZAAQAYAAAWAJQAVAJAPAPQAQAPAJAVQAJAUAAAWQAAAXgJAVQgJAUgPAQQgPAPgWAIQgVAJgZAAQgZAAgVgJgAgSgsQgJAEgHAGQgGAHgEAJQgEAJAAAJQAAAKAEAJQAEAJAGAGQAHAHAJAEQAJAEAJAAQAKAAAJgEQAJgEAHgHQAGgGAEgJQAEgJAAgKQAAgJgEgJQgEgJgGgHQgHgGgJgEQgJgEgKAAQgJAAgJAEg");
	this.shape_9.setTransform(-16.875,27.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#008FBE").s().p("AhxCaIAAkuIBCAAIAAAbQAKgOAPgJQAPgJAVABQATAAASAHQATAIAOAPQANAPAIAUQAJAVAAAaQAAAbgJATQgIAVgNAOQgOAPgTAIQgSAHgSABQgpAAgUgdIAABvgAgUhWQgJAEgGAHQgHAGgEAKQgDAJgBAJQABALADAIQAEAKAHAGQAGAGAJAEQAJADAKAAQAJAAAKgDQAIgEAHgGQAGgGAEgKQAEgIAAgLQAAgJgEgJQgEgKgGgGQgHgHgIgEQgKgDgJAAQgKAAgJADg");
	this.shape_10.setTransform(-42.65,31.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#008FBE").s().p("AhxCaIAAkuIBDAAIAAAbQAJgOAPgJQAQgJAUABQATAAATAHQARAIAOAPQAOAPAJAUQAIAVAAAaQAAAbgIATQgJAVgOAOQgOAPgRAIQgTAHgSABQgpAAgUgdIAABvgAgUhWQgJAEgGAHQgHAGgEAKQgEAJAAAJQAAALAEAIQAEAKAHAGQAGAGAJAEQAJADALAAQAIAAAJgDQAKgEAGgGQAHgGAEgKQADgIAAgLQAAgJgDgJQgEgKgHgGQgGgHgKgEQgJgDgIAAQgLAAgJADg");
	this.shape_11.setTransform(-68.8,31.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#008FBE").s().p("Ag9BsQgPgFgJgIQgJgJgGgLQgFgMAAgQQAAgQAHgOQAHgNAMgJQANgJASgFQASgGAXAAIAwAAIAAgBQAAgOgJgIQgJgIgTAAQgOAAgJAFQgLAGgFALIhAgdQARgVAZgOQAZgNAkAAQAxgBAbAXQAaAYAAAqIAACDIhBAAIAAgcQgKAOgUAKQgRAIgaABQgQAAgNgFgAgaAbQgIAGAAAJQAAARAaAAQAIAAAHgDIAPgGQAHgGAGgGQAFgGACgGIAAgFIgpAAQgSAAgJAGg");
	this.shape_12.setTransform(-94.65,27.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#008FBE").s().p("AguBoQgVgJgPgPQgOgPgJgVQgHgUAAgYQAAgWAJgUQAIgVAPgPQAQgPAUgJQAVgJAXAAQAZAAAVAIQAUAJAPAPQAPAPAJAUQAIAUAAAYIAAAXIigAAQAGAQANAJQAMAIASAAQAQAAAKgGQAMgGAGgLIA3AgQgRAXgXAMQgYAMgkAAQgZAAgWgIgAAugaQgFgOgMgIQgLgHgRAAQgPAAgNAIQgMAHgGAOIBbAAIAAAAg");
	this.shape_13.setTransform(66.75,-14.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#008FBE").s().p("AggCdIAAk6IBBAAIAAE6g");
	this.shape_14.setTransform(48.725,-19.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#008FBE").s().p("AhQBYQgVgWAAgpIAAiGIBFAAIAAB5QAAATAIAKQAIAKAQAAQAPgBAJgJQAJgKAAgXIAAh1IBFAAIAADXIhDAAIAAgZQgLAOgOAIQgOAIgSgBQglAAgVgWg");
	this.shape_15.setTransform(31.25,-13.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#008FBE").s().p("AgyCYQgSgIgOgOQgOgPgIgUQgIgVAAgbQAAgaAIgVQAIgTAOgPQAOgPASgHQASgIAUAAQATAAAPAHQAPAIAKANIAAh7IBCAAIAAE6IhCAAIAAgaQgKAPgPAIQgQAIgTAAQgTAAgSgIgAgQACQgJAEgGAGQgHAHgEAJQgEAJAAAKQAAAKAEAJQAEAJAHAGQAGAHAJAEQAJAEAJAAQAKAAAJgEQAJgEAHgHQAGgGAEgJQAEgJAAgKQAAgKgEgJQgEgJgGgHQgHgGgJgEQgJgDgKAAQgJAAgJADg");
	this.shape_16.setTransform(5.875,-18.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#008FBE").s().p("AguBoQgVgJgOgPQgPgPgJgVQgHgUAAgYQAAgWAIgUQAJgVAPgPQAPgPAWgJQAUgJAYAAQAYAAAVAIQAVAJAPAPQAPAPAHAUQAJAUAAAYIAAAXIigAAQAFAQAOAJQAMAIASAAQAPAAALgGQALgGAHgLIA3AgQgRAXgXAMQgYAMgkAAQgaAAgVgIgAAugaQgFgOgMgIQgLgHgRAAQgPAAgMAIQgMAHgHAOIBbAAIAAAAg");
	this.shape_17.setTransform(-19.5,-14.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#008FBE").s().p("AAgCdIAAh5QAAgUgJgJQgIgKgPAAQgPAAgJAKQgKAKAAAWIAAB2IhDAAIAAk6IBDAAIAAB8QAKgOAPgHQAOgIASAAQARAAAPAGQAOAGAKAKQALAMAFAPQAGAPABAUIAACHg");
	this.shape_18.setTransform(-44.2,-19.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#008FBE").s().p("AgqBnQgVgIgPgPQgPgPgJgVQgIgUAAgYQAAgXAIgUQAJgVAPgPQAPgPAVgJQAVgIAXgBQAoABAcATQAbATANAhIg/AYQgEgQgMgIQgMgIgQAAQgIAAgJAEQgJAEgGAGQgHAHgDAJQgEAJAAAJQAAAKAEAJQADAJAHAGQAHAHAIAEQAJADAIAAQAQAAALgIQALgJAGgOIBAAaQgHAPgKANQgLAMgOAKQgNAJgRAFQgRAGgUgBQgXAAgVgJg");
	this.shape_19.setTransform(-68.375,-14.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#008FBE").s().p("AghCSQgUgFgPgHQgQgIgNgKQgMgLgLgNIA8gwQANAUASAKQARAMAYAAQASAAAJgIQAJgIAAgMQAAgHgDgFQgEgFgIgEIgSgGIgagGIgggJQgRgGgNgJQgNgJgJgPQgIgPAAgWQAAgTAIgRQAIgPAOgNQAOgLATgIQAUgGAXgBQAUAAAQAEQARADANAHQAOAHAMAKIAYAWIg4ArQgKgQgPgJQgPgJgWAAQgRAAgIAIQgJAIAAAKQAAAHAFAEQAEAEAIADIARAGIAYAGIAiAJQAQAFAOAKQAOAJAJAPQAJAPAAAYQAAAVgJARQgIARgPAOQgPAMgUAHQgVAIgYAAQgXgBgTgEg");
	this.shape_20.setTransform(-94.525,-17.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ScheduleAppt, new cjs.Rectangle(-108.4,-45.6,624.4,98.2), null);


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
	this.shape.graphics.f("#008FBE").s().p("AgbAcQgLgKAAgSQAAgRALgLQAKgLARABQASgBAKALQALALAAARQAAASgLAKQgKAMgSAAQgRAAgKgMg");
	this.shape.setTransform(105.6,35.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008FBE").s().p("ABhBuIAAh6QAAgSgHgKQgHgKgRAAQgPAAgIAKQgJAKAAAWIAAB2IhEAAIAAh6QAAgSgIgKQgGgKgQAAQgPAAgKAKQgIAKAAAWIAAB2IhEAAIAAjXIBDAAIAAAaQALgOAPgIQAPgIASAAQAXAAAQAJQAOAJAKARQAKgRARgJQAQgJAVAAQAmAAAUAWQAUAWAAAoIAACHg");
	this.shape_1.setTransform(81.4,27.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008FBE").s().p("Ag+BsQgNgFgKgIQgJgIgGgMQgFgMAAgQQAAgQAHgOQAHgNAMgJQANgJASgFQASgFAWgBIAxAAIAAgBQAAgOgJgIQgJgIgTAAQgOAAgJAFQgLAGgFALIhAgdQARgVAZgOQAZgNAkAAQAyAAAaAWQAaAYAAAqIAACDIhAAAIAAgcQgLAOgUAKQgRAIgaABQgQAAgOgFgAgaAbQgIAGAAAJQAAARAaAAQAIAAAHgDIAPgGQAHgGAGgGQAEgFADgHIAAgEIgpAAQgTgBgIAGg");
	this.shape_2.setTransform(50.35,28.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008FBE").s().p("AguBoQgVgJgPgPQgOgPgJgVQgHgUAAgYQAAgWAJgUQAIgVAPgPQAQgPAUgJQAVgJAXAAQAZAAAVAIQAUAJAPAPQAPAPAJAUQAIAUAAAYIAAAXIigAAQAGAQANAJQAMAIASAAQAQAAAKgGQAMgGAGgLIA3AgQgRAXgXAMQgYAMgkAAQgZAAgWgIgAAugaQgFgOgMgIQgLgHgRAAQgPAAgNAIQgMAHgGAOIBbAAIAAAAg");
	this.shape_3.setTransform(25.8,28.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008FBE").s().p("AgECTQgOgEgJgLQgKgKgFgQQgFgRAAgXIAAhLIglAAIAAg6IAlAAIAAgwIBBgkIAABUIA1AAIAAA6Ig1AAIAABGQAAARAFAGQAFAFAJAAQAKAAAIgIIAeAzQgMAJgOAGQgPAEgRAAQgRAAgOgEg");
	this.shape_4.setTransform(4.425,24.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008FBE").s().p("AguBoQgVgJgPgPQgPgPgHgVQgIgUAAgYQAAgWAJgUQAIgVAPgPQAQgPAUgJQAVgJAXAAQAZAAAVAIQAUAJAPAPQAPAPAJAUQAIAUAAAYIAAAXIigAAQAGAQAMAJQANAIASAAQAQAAAKgGQAMgGAGgLIA3AgQgRAXgYAMQgWAMglAAQgaAAgVgIgAAugaQgFgOgLgIQgMgHgRAAQgPAAgNAIQgMAHgGAOIBbAAIAAAAg");
	this.shape_5.setTransform(-27.2,28.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008FBE").s().p("AhRBuIAAjXIBDAAIAAAfQAIgTAPgIQAPgIAVAAQALAAAJACIARAGIgXBEQgFgEgJgDQgIgCgJAAQgUAAgKAKQgMALAAAZIAABqg");
	this.shape_6.setTransform(-48.625,27.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#008FBE").s().p("Ag9BsQgPgFgJgIQgJgIgGgMQgFgMAAgQQAAgQAHgOQAHgNAMgJQANgJASgFQASgFAXgBIAwAAIAAgBQAAgOgJgIQgJgIgTAAQgOAAgJAFQgLAGgFALIhAgdQARgVAZgOQAZgNAkAAQAxAAAbAWQAaAYAAAqIAACDIhBAAIAAgcQgKAOgUAKQgRAIgaABQgQAAgNgFgAgaAbQgIAGAAAJQAAARAaAAQAIAAAHgDIAPgGQAHgGAGgGQAFgFACgHIAAgEIgpAAQgSgBgJAGg");
	this.shape_7.setTransform(-71.25,28.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#008FBE").s().p("AgqBoQgVgJgPgPQgPgPgJgVQgIgVAAgXQAAgXAIgVQAJgUAPgPQAPgPAVgIQAVgJAXAAQAoAAAcATQAbAUANAgIg/AXQgEgOgMgJQgMgIgQAAQgIAAgJAEQgJAEgGAGQgHAHgDAJQgEAJAAAJQAAAKAEAIQADAKAHAGQAHAHAIADQAJAEAIABQAQAAALgJQALgJAGgOIBAAaQgHAPgKANQgLAMgOAKQgNAJgRAFQgRAGgUAAQgXgBgVgIg");
	this.shape_8.setTransform(-95.225,28.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#008FBE").s().p("AhRBuIAAjXIBDAAIAAAfQAIgTAPgIQAPgIAVAAQALAAAJACIARAGIgXBEQgFgEgJgDQgIgCgJAAQgUAAgKAKQgMALAAAZIAABqg");
	this.shape_9.setTransform(165.675,-13.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#008FBE").s().p("AhQBYQgVgWAAgpIAAiGIBFAAIAAB5QAAATAIAKQAIAKAQAAQAPgBAKgJQAJgKgBgXIAAh1IBFAAIAADXIhEAAIAAgZQgKAPgPAHQgNAIgSgBQglAAgVgWg");
	this.shape_10.setTransform(143.35,-13.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#008FBE").s().p("AguBnQgVgIgQgPQgPgQgIgUQgJgVAAgXQAAgWAJgUQAIgVAPgPQAQgPAVgJQAVgJAZAAQAYAAAWAJQAVAJAPAPQAQAPAJAVQAJAUAAAWQAAAXgJAVQgJAUgPAQQgPAPgWAIQgVAJgZAAQgZAAgVgJgAgSgsQgJAEgHAGQgGAHgEAJQgEAJAAAJQAAAKAEAJQAEAJAGAGQAHAHAJAEQAJAEAJAAQAKAAAJgEQAJgEAHgHQAGgGAEgJQAEgJAAgKQAAgJgEgJQgEgJgGgHQgHgGgJgEQgJgEgKAAQgJAAgJAEg");
	this.shape_11.setTransform(118.325,-13.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#008FBE").s().p("AhfCTQgSgGgOgLIAng1QAFAHAIADQAHAEAJAAQANAAAJgGQAJgHAGgPIADgIIhUjQIBHAAIAuB7IAsh7IBGAAIhaDkQgJAXgJAPQgJAOgLAKQgLAIgPAEQgNAEgTABQgTAAgSgHg");
	this.shape_12.setTransform(92.15,-9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#008FBE").s().p("AguBoQgVgJgOgPQgQgPgIgVQgHgUAAgYQAAgWAIgUQAJgVAPgPQAPgPAWgJQAUgJAYAAQAYAAAVAIQAVAJAPAPQAPAPAHAUQAJAUAAAYIAAAXIigAAQAFAQANAJQANAIASAAQAQAAALgGQAKgGAIgLIA2AgQgRAXgYAMQgWAMglAAQgZAAgWgIgAAvgaQgGgOgMgIQgLgHgRAAQgPAAgMAIQgMAHgHAOIBcAAIAAAAg");
	this.shape_13.setTransform(59.15,-13.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#008FBE").s().p("Ag8CTQgZgJgTgVIA3grQAKALAKAHQAKAGAQAAQAVAAAOgNQAOgNABgWIAAgPQgLAPgPAHQgQAIgTAAQgTAAgSgHQgRgIgPgOQgNgOgIgVQgJgUAAgaQAAgZAJgVQAIgVANgOQAOgPASgHQASgIAUAAQAUAAAPAIQAQAHAJAOIAAgZIBDAAIAADIQAAAXgIAUQgIAUgPAPQgPAOgVAJQgVAIgaAAQgjAAgZgKgAgQhaQgKAEgGAHQgHAGgDAJQgEAJgBAKQABAKAEAJQADAJAHAHQAGAGAKAEQAIADAKAAQAJAAAJgDQAKgEAGgGQAHgHAEgJQADgJAAgKQAAgKgDgJQgEgJgHgGQgGgHgKgEQgJgEgJAAQgKAAgIAEg");
	this.shape_14.setTransform(33.05,-9.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#008FBE").s().p("Ag9BsQgPgEgJgJQgKgJgFgLQgFgMAAgQQAAgQAHgOQAHgOANgIQAMgJASgFQASgGAXAAIAwAAIAAgBQAAgOgJgIQgKgIgSAAQgOAAgKAFQgKAGgFALIhAgcQARgWAZgOQAYgOAlAAQAyAAAZAXQAbAYAAAqIAACDIhBAAIAAgcQgKAPgTAIQgTAJgZAAQgQABgNgFgAgaAbQgIAGAAAJQAAARAaAAQAIAAAHgDIAPgHQAHgEAFgHQAGgGACgGIAAgFIgpAAQgSAAgJAGg");
	this.shape_15.setTransform(7.75,-13.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#008FBE").s().p("Ag/BhQgagPgMgdIBDgTQAFAOALAFQALAHANAAQANAAAHgFQAGgFAAgHQAAgEgDgDIgKgFIgPgFIgRgDIgcgHQgOgDgLgIQgLgGgHgLQgIgMAAgRQAAgOAHgNQAHgNAMgLQANgJARgGQARgFAUAAQATAAAPAEQAOADAMAHQAMAGAJAKQAKAKAIAMIhAAUQgKgVgZAAQgMAAgGAEQgGAEAAAGQAAAIAMAEIAhAIIAcAGQAOAEAMAIQALAHAIALQAHAMAAASQAAAOgGANQgGANgMAKQgMALgSAGQgTAHgYAAQgqAAgagQg");
	this.shape_16.setTransform(-15.625,-13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#008FBE").s().p("Ag/BhQgagPgMgdIBDgTQAFAOALAFQALAHANAAQANAAAHgFQAGgFAAgHQAAgEgDgDIgKgFIgPgFIgRgDIgcgHQgOgDgLgIQgLgGgHgLQgIgMAAgRQAAgOAHgNQAHgNAMgLQANgJARgGQARgFAUAAQATAAAPAEQAOADAMAHQAMAGAJAKQAKAKAIAMIhAAUQgKgVgZAAQgMAAgGAEQgGAEAAAGQAAAIAMAEIAhAIIAcAGQAOAEAMAIQALAHAIALQAHAMAAASQAAAOgGANQgGANgMAKQgMALgSAGQgTAHgYAAQgqAAgagQg");
	this.shape_17.setTransform(-37.975,-13.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#008FBE").s().p("AguBoQgVgJgPgPQgOgPgJgVQgHgUAAgYQAAgWAJgUQAIgVAPgPQAQgPAUgJQAVgJAXAAQAZAAAVAIQAUAJAPAPQAPAPAJAUQAIAUAAAYIAAAXIigAAQAGAQANAJQAMAIASAAQAQAAAKgGQAMgGAGgLIA3AgQgRAXgXAMQgYAMgkAAQgZAAgWgIgAAugaQgFgOgMgIQgLgHgRAAQgPAAgNAIQgMAHgGAOIBbAAIAAAAg");
	this.shape_18.setTransform(-61.5,-13.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#008FBE").s().p("ABNCSIAAi4IhNBnIhLhnIAAC4IhFAAIAAkjIBDAAIBNBtIBRhtIBAAAIAAEjg");
	this.shape_19.setTransform(-91,-17.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_messageCareTeam, new cjs.Rectangle(-109.6,-45.1,573.5,98.2), null);


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
	this.shape.graphics.f("#008FBE").s().p("AeFGxQgngOgdgWIBUh1QANAOAPAIQARAIAUAAQAbAAAVgOQAUgPAMghIAIgSIi7nJICeAAIBnEMIBhkMICZAAIjFH1QgUAxgVAhQgTAhgaAVQgYAUggAJQgfAIgpABQgqAAgogPgEAleAFSQAnggAUgbQATgcAFgcQgOAVgdAAQgeABgTgVQgUgVAAghQAAgmAYgYQAagZAnAAQAwABAZAfQAZAggBAsQAAA8gdAuQgfAsg0AogAIjDQQgvgyAAhaIAAknICZAAIAAELQAAAqARAVQARAXAmAAQAggBAVgWQAVgWAAgwIAAkEICWgBIAAHaIiVABIAAg3QgWAgghAQQggARgnAAQhSAAgtgxgA0JDeQg6gigZg/ICUgrQAJAeAaAOQAYANAfAAQAcAAAPgLQAOgLAAgPQAAgJgIgHIgWgLIiFggQgegIgagQQgZgQgPgYQgPgZAAgnQgBggAQgcQAOgcAbgWQAcgVAlgMQAngMAuAAQApAAAgAIQAhAIAZAOQAbAQAVAUQAUAVASAbIiNArQgWgsg3AAQgbAAgOAHQgNAJAAAOQAAARAYAJICKAgQAeAJAaAQQAaAPARAbQAQAZAAAoQAAAegOAdQgNAcgaAZQgaAWgpAPQgpAOg2AAQheAAg5gigAalD2QgfgJgWgXQgUgXgMgkQgLgkABg1IAAijIhTAAIAAiCIBTAAIAAhoICShQIAAC4IB0AAIAACCIh0AAIAACbQAAAkAKAMQAMAMASAAQAVAAATgQIBCBwQgZATggAMQggAKgmAAQgnAAgfgJgABPDsQgwgTggghQghgigTgtQgTgsAAgzQAAgyATguQATgtAhghQAggiAwgTQAugUA4AAQA3AAAuAUQAuATAjAiQAjAhASAtQAUAuAAAyQAAAzgTAsQgTAtghAiQgiAhgvATQgvAUg4gBQg4ABgugUgACMhZQgUAIgOAOQgOAPgJAUQgJATAAAWQAAAWAJATQAJAUAOAOQAOAPAUAJQAUAIAVAAQAXAAAUgIQATgJAPgPQAOgOAJgUQAIgTAAgWQAAgWgIgTQgJgUgOgPQgPgOgTgIQgUgJgXAAQgVAAgUAJgAolDmQg8gagrgsQgrgtgYg8IgHgSQgQg0AAg6QAAg7AQg0IAIgUQAZg8AsgtQAsgsA8gZQA8gaBHABQAvAAAqALQAqAMAmAVQAlAUAdAdQAeAeAWAjIiHBVQgWgqgmgaQgmgYg1AAQgmAAggANQgfAOgYAZQgWAYgNAhQgNAhAAAlQAAAlAMAgQANAfAWAYQAXAZAgAOQAfANAnAAQA6AAAngdQAmgeAUgsICOBKQgUAogeAhQgeAiglAZQgmAXgtAOQgtANg0gBQhJABg+gagAUyD3IAAkMQAAgpgRgWQgSgXglABQggAAgWAWQgVAXAAAwIAAEEIiWAAIAAnaICVAAIAAA3QAYgeAfgSQAhgRAoAAQBPAAAvAyQAuAxABBYIAAEpgA4tD2IAAnaICYAAIAAHagA8OD2IAAq1ICTAAIAAK1gA/vD2IAAq1ICTAAIAAK1gEgn7AD2IAAqBIG8AAIAACPIkjAAIAABpIEjAAIAACOIkjAAIAABsIEjAAIAACPgA4hkhQgYgaAAgnQAAgnAYgZQAYgZAoAAQAnAAAZAZQAZAZAAAnQAAAngZAaQgZAYgnAAQgoAAgYgYg");
	this.shape.setTransform(6,-91.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ellisCounty, new cjs.Rectangle(-249.5,-136.7,511.1,89.49999999999999), null);


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
	this.shape_1.graphics.f("#008FBE").s().p("AhABAQgYgYABgoQAAgmAYgaQAZgYAmAAQAnAAAZAYQAZAagBAmQABAogZAYQgZAZgnAAQgnAAgZgZg");
	this.shape_1.setTransform(122.75,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003DA6").s().p("AJGFEQgxgUgigiQgigkgTgvQgSguAAg3QAAg2AUguQATgwAjgjQAjgjAwgUQAwgUA3AAQA4AAAvATQAvAUAiAhQAiAiAUAvQATAtAAA4IAAAvImLAAQANAxAlAcQAmAcA3AAQAsAAAegRQAfgSASgfIBoA9QgmA0g2AgQg2AfhTAAQg8AAgxgUgAMzAeQgNgugigYQgigZgyAAQgxAAgjAaQgjAagPArIEJAAIAAAAgApqFEQgxgUgigiQgigkgTgvQgSguAAg3QAAg2AUguQATgwAjgjQAjgjAwgUQAwgUA3AAQA4AAAvATQAvAUAiAhQAiAiAUAvQATAtAAA4IAAAvImLAAQANAxAlAcQAmAcA3AAQAsAAAegRQAfgSASgfIBoA9QgmA0g2AgQg2AfhTAAQg8AAgxgUgAl9AeQgNgugigYQgigZgyAAQgxAAgjAaQgjAagPArIEJAAIAAAAgADdEtQgrgqAAhlIAAjQIhcAAIAAhwIBcAAIAAhsIB9hJIAAC1ICDAAIAABwIiDAAIAADMQAAAnAQAPQAPAQAYAAQAZAAAVgSIA6BjQgYASgeAKQgeAKgjAAQhOAAgsgqgAiKEtQgrgqAAhlIAAjQIhcAAIAAhwIBcAAIAAhsIB9hJIAAC1ICBAAIAABwIiBAAIAADMQAAAnAPAPQAPAQAYAAQAYAAAVgSIA6BjQgXASgfAKQgeAKghAAQhPAAgrgqgAPLFOIAAnwIB9AAIAABMQASgsAkgUQAjgVAwAAQAZAAAWAFIAlAOIguB9IgcgMQgRgFgVAAQgxAAgdAbQgeAaAAA+IAAEHgA0kFOIAAqfIEWAAQBwAAA8AwQA8AxAABbQAAAvgTAiQgUAigmAVQAqAUAXAmQAWAmAAA0QAAAygQAlQgRAlgfAZQgfAZgtAMQgsANg5AAgAykDZICZAAQA2AAAbgXQAbgWAAgoQAAgngagWQgagWg+AAIiTAAgAykhCICaAAQA1AAAXgXQAXgWAAgjQAAgjgZgVQgYgUg0AAIiYAAg");
	this.shape_2.setTransform(-17.525,-1.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003DA6").s().p("AJGFEQgxgUgigiQgigkgTgvQgSguAAg3QAAg2AUguQATgwAjgjQAjgjAwgUQAwgUA3AAQA4AAAvATQAvAUAiAhQAiAiAUAvQATAtAAA4IAAAvImLAAQANAxAlAcQAmAcA3AAQAsAAAegRQAfgSASgfIBoA9QgmA0g2AgQg2AfhTAAQg8AAgxgUgAJcgnQgjAagPArIEJAAQgNgugigYQgigZgyAAQgxAAgjAagApqFEQgxgUgigiQgigkgTgvQgSguAAg3QAAg2AUguQATgwAjgjQAjgjAwgUQAwgUA3AAQA4AAAvATQAvAUAiAhQAiAiAUAvQATAtAAA4IAAAvImLAAQANAxAlAcQAmAcA3AAQAsAAAegRQAfgSASgfIBoA9QgmA0g2AgQg2AfhTAAQg8AAgxgUgApUgnQgjAagPArIEJAAQgNgugigYQgigZgyAAQgxAAgjAagADdEtQgrgqAAhlIAAjQIhcAAIAAhwIBcAAIAAhsIB9hJIAAC1ICDAAIAABwIiDAAIAADMQAAAnAQAPQAPAQAYAAQAZAAAVgSIA6BjQgYASgeAKQgeAKgjAAQhOAAgsgqgAiKEtQgrgqAAhlIAAjQIhcAAIAAhwIBcAAIAAhsIB9hJIAAC1ICBAAIAABwIiBAAIAADMQAAAnAPAPQAPAQAYAAQAYAAAVgSIA6BjQgXASgfAKQgeAKghAAQhPAAgrgqgAPLFOIAAnwIB9AAIAABMQASgsAkgUQAjgVAwAAQAZAAAWAFIAlAOIguB9IgcgMQgRgFgVAAQgxAAgdAbQgeAaAAA+IAAEHgA0kFOIAAqfIEWAAQBwAAA8AwQA8AxAABbQAAAvgTAiQgUAigmAVQAqAUAXAmQAWAmAAA0QAAAygQAlQgRAlgfAZQgfAZgtAMQgsANg5AAgAykDZICZAAQA2AAAbgXQAbgWAAgoQAAgngagWQgagWg+AAIiTAAgAykhCICaAAQA1AAAXgXQAXgWAAgjQAAgjgZgVQgYgUg0AAIiYAAg");
	this.shape_3.setTransform(-17.525,-1.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_1}]},3).to({state:[{t:this.shape_3},{t:this.shape_1}]},43).to({state:[]},1).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.2,-35.4,280.79999999999995,68.8);


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
	this.shape.graphics.f("#008FBE").s().p("AgcAcQgKgKAAgSQAAgRAKgKQAMgLAQAAQARAAAMALQAKAKAAARQAAASgKAKQgMALgRAAQgRAAgLgLg");
	this.shape.setTransform(131.05,34.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008FBE").s().p("Ag/BhQgagPgMgdIBDgTQAFAOALAFQALAHANAAQANAAAHgFQAGgFAAgHQAAgEgDgDIgKgFIgPgFIgRgDIgcgHQgOgDgLgIQgLgGgHgLQgIgMAAgRQAAgOAHgNQAHgNAMgLQANgJARgGQARgFAUAAQATAAAPAEQAOADAMAHQAMAGAJAKQAKAKAIAMIhAAUQgKgVgZAAQgMAAgGAEQgGAEAAAGQAAAIAMAEIAhAIIAcAGQAOAEAMAIQALAHAIALQAHAMAAASQAAAOgGANQgGANgMAKQgMALgSAGQgTAHgYAAQgqAAgagQg");
	this.shape_1.setTransform(114.125,26.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008FBE").s().p("AgECTQgOgEgJgKQgKgKgFgRQgFgRAAgYIAAhKIglAAIAAg7IAlAAIAAgvIBBgkIAABTIA1AAIAAA7Ig1AAIAABHQAAAQAFAFQAFAGAJAAQAKAAAIgIIAeA0QgMAIgOAFQgPAGgRAAQgRgBgOgEg");
	this.shape_2.setTransform(94.825,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008FBE").s().p("AggCdIAAk6IBBAAIAAE6g");
	this.shape_3.setTransform(80.075,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008FBE").s().p("AhQBYQgVgWAAgpIAAiGIBFAAIAAB5QAAATAIAKQAIAKAQAAQAPgBAKgJQAIgKABgXIAAh1IBEAAIAADXIhDAAIAAgZQgLAPgOAHQgOAIgSgBQglAAgVgWg");
	this.shape_4.setTransform(62.85,27.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008FBE").s().p("Ag/BhQgagPgMgdIBDgTQAFAOALAFQALAHANAAQANAAAHgFQAGgFAAgHQAAgEgDgDIgKgFIgPgFIgRgDIgcgHQgOgDgLgIQgLgGgHgLQgIgMAAgRQAAgOAHgNQAHgNAMgLQANgJARgGQARgFAUAAQATAAAPAEQAOADAMAHQAMAGAJAKQAKAKAIAMIhAAUQgKgVgZAAQgMAAgGAEQgGAEAAAGQAAAIAMAEIAhAIIAcAGQAOAEAMAIQALAHAIALQAHAMAAASQAAAOgGANQgGANgMAKQgMALgSAGQgTAHgYAAQgqAAgagQg");
	this.shape_5.setTransform(39.575,26.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008FBE").s().p("AguBoQgVgJgPgPQgPgPgHgVQgIgUAAgYQAAgWAIgUQAJgVAPgPQAPgPAWgJQAUgJAYAAQAYAAAVAIQAVAJAPAPQAPAPAHAUQAJAUAAAYIAAAXIigAAQAFAQANAJQANAIASAAQAPAAAMgGQAKgGAIgLIA2AgQgRAXgYAMQgWAMglAAQgaAAgVgIgAAvgaQgGgOgLgIQgNgHgQAAQgQAAgLAIQgNAHgGAOIBcAAIAAAAg");
	this.shape_6.setTransform(16.3,26.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#008FBE").s().p("AhRBuIAAjXIBDAAIAAAfQAIgTAPgIQAPgIAVAAQALAAAJACIARAGIgXBEQgFgEgJgDQgIgCgJAAQgUAAgKAKQgMALAAAZIAABqg");
	this.shape_7.setTransform(-4.875,26.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#008FBE").s().p("AgECTQgOgEgJgKQgKgKgFgRQgFgRAAgYIAAhKIglAAIAAg7IAlAAIAAgvIBBgkIAABTIA1AAIAAA7Ig1AAIAABHQAAAQAFAFQAFAGAJAAQAKAAAIgIIAeA0QgMAIgOAFQgPAGgRAAQgRgBgOgEg");
	this.shape_8.setTransform(-32.475,23);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#008FBE").s().p("Ag/BhQgagPgMgdIBDgTQAFAOALAFQALAHANAAQANAAAHgFQAGgFAAgHQAAgEgDgDIgKgFIgPgFIgRgDIgcgHQgOgDgLgIQgLgGgHgLQgIgMAAgRQAAgOAHgNQAHgNAMgLQANgJARgGQARgFAUAAQATAAAPAEQAOADAMAHQAMAGAJAKQAKAKAIAMIhAAUQgKgVgZAAQgMAAgGAEQgGAEAAAGQAAAIAMAEIAhAIIAcAGQAOAEAMAIQALAHAIALQAHAMAAASQAAAOgGANQgGANgMAKQgMALgSAGQgTAHgYAAQgqAAgagQg");
	this.shape_9.setTransform(-53.375,26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#008FBE").s().p("AguBoQgVgJgOgPQgPgPgJgVQgHgUAAgYQAAgWAIgUQAJgVAPgPQAPgPAWgJQAUgJAYAAQAYAAAVAIQAVAJAPAPQAPAPAHAUQAJAUAAAYIAAAXIigAAQAFAQAOAJQAMAIASAAQAPAAALgGQALgGAHgLIA3AgQgRAXgXAMQgYAMgkAAQgaAAgVgIgAAugaQgFgOgMgIQgLgHgRAAQgPAAgMAIQgMAHgHAOIBbAAIAAAAg");
	this.shape_10.setTransform(-76.65,26.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#008FBE").s().p("AgECTQgOgEgJgKQgKgKgFgRQgFgRAAgYIAAhKIglAAIAAg7IAlAAIAAgvIBBgkIAABTIA1AAIAAA7Ig1AAIAABHQAAAQAFAFQAFAGAJAAQAKAAAIgIIAeA0QgMAIgOAFQgPAGgRAAQgRgBgOgEg");
	this.shape_11.setTransform(-97.775,23);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#008FBE").s().p("Ag/BhQgagPgMgdIBDgTQAFAOALAFQALAHANAAQANAAAHgFQAGgFAAgHQAAgEgDgDIgKgFIgPgFIgRgDIgcgHQgOgEgLgGQgLgHgHgLQgIgLAAgTQAAgOAHgNQAHgNAMgJQANgKARgGQARgFAUAAQATAAAPAEQAOADAMAHQAMAGAJAKQAKAKAIAMIhAAUQgKgVgZAAQgMAAgGAEQgGADAAAIQAAAHAMAEIAhAIIAcAHQAOADAMAIQALAHAIALQAHAMAAASQAAANgGANQgGAOgMAKQgMALgSAGQgTAHgYAAQgqAAgagQg");
	this.shape_12.setTransform(28.275,-14.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#008FBE").s().p("Ag/BhQgagPgMgdIBDgTQAFAOALAFQALAHANAAQANAAAHgFQAGgFAAgHQAAgEgDgDIgKgFIgPgFIgRgDIgcgHQgOgEgLgGQgLgHgHgLQgIgLAAgTQAAgOAHgNQAHgNAMgJQANgKARgGQARgFAUAAQATAAAPAEQAOADAMAHQAMAGAJAKQAKAKAIAMIhAAUQgKgVgZAAQgMAAgGAEQgGADAAAIQAAAHAMAEIAhAIIAcAHQAOADAMAIQALAHAIALQAHAMAAASQAAANgGANQgGAOgMAKQgMALgSAGQgTAHgYAAQgqAAgagQg");
	this.shape_13.setTransform(6.175,-14.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#008FBE").s().p("AguBoQgVgJgPgPQgPgPgHgVQgIgUAAgYQAAgWAJgUQAIgVAPgPQAPgPAWgJQAUgJAYAAQAYAAAVAIQAUAJAQAPQAPAPAHAUQAJAUAAAYIAAAXIigAAQAFAQANAJQANAIASAAQAPAAAMgGQAKgGAIgLIA2AgQgRAXgYAMQgWAMglAAQgaAAgVgIgAAvgaQgGgOgLgIQgNgHgQAAQgQAAgMAIQgLAHgHAOIBcAAIAAAAg");
	this.shape_14.setTransform(-17.1,-14.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#008FBE").s().p("AgqBnQgVgIgPgPQgPgPgJgVQgIgUAAgYQAAgXAIgUQAJgVAPgPQAPgPAVgJQAVgIAXgBQAoAAAcAUQAbATANAhIg/AYQgEgQgMgIQgMgIgQAAQgIAAgJAEQgJAEgGAHQgHAGgDAJQgEAJAAAJQAAAKAEAJQADAIAHAHQAHAHAIAEQAJADAIAAQAQAAALgIQALgJAGgOIBAAaQgHAPgKANQgLAMgOAKQgNAJgRAFQgRAGgUgBQgXABgVgKg");
	this.shape_15.setTransform(-41.625,-14.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#008FBE").s().p("AgqBnQgVgIgPgPQgPgPgJgVQgIgUAAgYQAAgXAIgUQAJgVAPgPQAPgPAVgJQAVgIAXgBQAoAAAcAUQAbATANAhIg/AYQgEgQgMgIQgMgIgQAAQgIAAgJAEQgJAEgGAHQgHAGgDAJQgEAJAAAJQAAAKAEAJQADAIAHAHQAHAHAIAEQAJADAIAAQAQAAALgIQALgJAGgOIBAAaQgHAPgKANQgLAMgOAKQgNAJgRAFQgRAGgUgBQgXABgVgKg");
	this.shape_16.setTransform(-65.975,-14.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#008FBE").s().p("ABHCSIgPgrIhvAAIgPArIhHAAIBskjIBDAAIBsEjgAAiApIgihhIghBhIBDAAg");
	this.shape_17.setTransform(-92.875,-18.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_accessResults, new cjs.Rectangle(-109.3,-46.2,415.1,98.2), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C8EBA").s().p("ACHAdQgKgLAAgRQAAgRAKgMQAKgLARAAQAOAAAJAHQAJAIACANIgRAAQAAgGgFgEQgFgEgHAAQgHAAgEAEQgFAEgCAGQgCAFAAAHQAAAKAFAIQAFAHAKAAQAIAAAFgEQAEgFABgIIARAAQgCAOgJAJQgJAIgPAAQgRAAgKgLgAFaAnIAAhMIA5AAIAAAOIgoAAIAAAQIAlAAIAAANIglAAIAAASIApAAIAAAPgAExAnIAAhMIARAAIAABMgAEJAnIAAghIgfAAIAAAhIgRAAIAAhMIARAAIAAAdIAfAAIAAgdIARAAIAABMgABfAnIgGgRIgcAAIgGARIgSAAIAdhMIASAAIAdBMgABBAJIAUAAIgKgbIAAAAgAAFAnIAAghIgeAAIAAAhIgRAAIAAhMIARAAIAAAdIAeAAIAAgdIARAAIAABMgAhLAnIgGgRIgcAAIgHARIgRAAIAdhMIASAAIAdBMgAhpAJIAUAAIgKgbgAigAnIgRgbIgRAbIgTAAIAbgoIgZgkIAUAAIAPAYIAQgYIASAAIgZAkIAbAogAjuAnIgFgRIgdAAIgGARIgSAAIAehMIARAAIAdBMgAkMAJIAUAAIgKgbgAlTAnIgNg0IgBAAIgNA0IgRAAIgUhMIARAAIAMAzIAAAAIANgzIARAAIANAzIAAAAIANgzIAQAAIgUBMg");
	this.shape.setTransform(-106.175,34.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1140A0").s().p("ApOEHQgOgPgBgYQABgZAOgQQAOgQAYAAQATAAANALQANAJABATIgWAAQgCgJgGgFQgIgGgIABQgKgBgHAGQgGAFgEAJQgCAHAAALQAAAOAHALQAHALAPAAQALgBAGgGQAGgHABgLIAXAAQgBAVgNAMQgNALgUAAQgYAAgOgQgAvjEHQgPgPAAgYQAAgZAPgQQAOgQAYAAQASAAANALQANAJACATIgXAAQgBgIgGgGQgIgGgIABQgKgBgHAGQgHAFgDAJQgCAIAAAKQAAAOAHALQAHALAPAAQAKgBAHgGQAGgHABgLIAXAAQgCAVgNAMQgNALgTAAQgYAAgOgQgAA0EVIgCgHIgBgKIAAgIQgBgJgFgFQgEgEgIAAIgYAAIAAArIgWAAIAAhrIA4AAQAOAAAJAIQAJAJAAAMQAAAUgRAGIAAABQANAEACAWIACAPIABAGIACAEgAAHDaIAaAAQAQAAAAgPQAAgPgQAAIgaAAgAiAEVIAAhrIBQAAIAAATIg4AAIAAAYIA0AAIAAASIg0AAIAAAaIA5AAIAAAUgAjTEVIAAhYIghAAIAAgTIBYAAIAAATIgfAAIAABYgAkmEVIgthIIAABIIgXAAIAAhrIAZAAIAsBIIABAAIAAhIIAVAAIAABrgAnZEVIAAhrIBQAAIAAATIg5AAIAAAYIA0AAIAAASIg0AAIAAAaIA6AAIAAAUgAr5EVIAAhrIAXAAIAABXIA1AAIAAAUgAsqEVIgIgYIgoAAIgJAYIgXAAIAohrIAZAAIAnBrgAtTDrIAbAAIgOgngAwpEVIAAhrIAYAAIAABrgAynEVIAAhrIAuAAQAWAAANANQAOAOAAAaQAAAYgNAPQgMAPgYAAgAyPEBIAUAAQAMAAAIgIQAHgHAAgRQABgRgIgJQgHgKgQAAIgRAAgA0XEVIAAhrIBQAAIAAATIg5AAIAAAYIA0AAIAAASIg0AAIAAAaIA6AAIAAAUgA1SEVIAAhNIAAAAIgaBNIgSAAIgahMIgBAAIAABMIgVAAIAAhrIAgAAIAZBJIAZhJIAhAAIAABrgAw4B2QgEgFAAgIQAAgJAEgEQAFgEAIAAIAIAAQAIAAAFgHQAKgOAEgKIAIgPIADgIIAAgLIAAgMIgHgQIgghcIgKgWQgFgIgLgDIgKgCQgDgCABgDQABgFACgBIAoACIAlgCQACABABAFQAAAEgCABIgLACIgHADQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAFANAjIANAnQALAeABAAIAGgJIAKgWIAPgiQAOgjAAgIQABgEgLgDIgNgCQgCgBAAgEQAAgFADgBIAlACIAhgCQACACAAAEQAAADgBACIgIABQgJACgJALQgHAJgLAXIgYAyIgeA+IgkBNQgJAUgSAAQgJAAgFgFgAMgAfQgJgYgRgmIgZg6IgcA7QgSAlgHAYQgCACgEAAIgGgCIgehDIhRiyQgHgQgEgFQgIgIgMgBIgJgBQgDgDAAgDQABgDACgCQATACAZAAQAZAAAXgCQADACAAADQAAADgCADIgKABQgOABAAAGQAAAGAXAzIBJCeIAhhEQAHgPAAgDQAAgCgEgJQgUgvgag3QgFgLgGgFQgGgGgKgBIgKgBQgDgDABgDQAAgDACgCQATACAbAAQAfAAAPgCQADACAAADQAAADgCADIgLABQgMABgBADQgCAEAGAPIAhBKQAPgfAKgZQAMgagBgHQgBgIgLAAIgMgBQgCgDABgDQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQASACAWAAQAZAAAQgCQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAADgCADIgMABQgMABgJALIgOAaIgRAiIgQAhQgEAHABAEQAAACACAIIAWAwIAWAwQAWgxAQgoIATgvIAPgmIAJgXQAEgNAAgDQAAgEgEgDQgDgCgHAAIgNgBQgCgDAAgDQAAgDADgCIAoACIABAAIADAAQAUgBANgHQAIgFANgLQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAQgCAaABAaIAABaQAAAHACABQAMgKAOgGQAQgGAPAAQAcAAAOAQQAMAPAAAYIAABHQAAAXADAFQACAHALABIAMABQACACAAAEQAAADgDACIgqgBQgWgBgSACQgDgCAAgDQAAgEACgCIAJgBQALgCADgGQACgFAAgXIAAg9QAAgVgKgMQgKgMgVAAQgSAAgOALQgGAFgCAEQgCADABAMIAABHQgBAXADAFQACAGAMACIAJABQACABAAAEQgBAFgCABQgTgCgVABQgWgBgUACQgCgCgBgDQAAgEACgCIAKgBQAMgBADgHQACgFAAgXIAAjBQAAgTgCgGQgBgEgDABQgJAEgGAJQgFAJgWAyIgfBIQgcBCgYA/QgDACgDAAIgGgCgAnHAaQgNgEgLgFQgEgIgDgRQgEgTAAgPQACgDAEABQADgBABABQAIAZANAPQAUAXAgAAQAaAAAPgPQANgNgBgTQAAgSgFgMQgIgRgVgNIgogbQgUgNgMgPQgPgVAAgYQAAgfAXgVQAYgVAoAAQATAAAVAFQAIADAGAAQAEAIACAPQACAQAAANQgBACgEABQgEAAgCgCQgFgUgLgMQgOgQgbAAQgdAAgNAQQgJAMAAATQAAARAMAPQAJALAPAJIAiAWQAYAOANASQARAWAAAcQAAAjgZAUQgZAXgpAAQgYAAgTgHgAVvAYQgQgIgKgNQgJgLgEgPQgFgNAAgPQABgoAXgbQAYgdAmAAQAaAAASAPQAQAQAAATQAAAJgCACQgBACgFABIgSABIhPAAQgIAAgCACQgCABAAAIQAAAiASAWQAUAWAhABQALgBAJgEQAJgEAKgMQADgBACADQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQgIATgWAKQgRAJgTAAQgUAAgQgHgAV0h5QgPAMAAAMIAAABIADABIAfAAQAVAAALgCQAIAAAEgCQACgCAAgGQAAgLgHgHQgJgKgRABQgSAAgOANgATqASQgIgLAAgVIAAhgQAAgKgCgCQgBgBgGAAIgMAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIARgHIAKgGIAJgMQAGgHADgGIAFgBQADAAABADIAAATQAAAFABABQABACAGAAIAuAAQAEADAAAGQAAAHgDACIgwAAQgFAAgBABQgCACABAHIAABPQAAAXAEALQAIAMASAAQAHAAAFgCIAGgDIAFgDQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQABABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQgHAJgKAFQgNAHgPgBQgZAAgLgNgADbASQgJgLABgVIAAhgQgBgKgBgCQgBgBgGAAIgMAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIARgHIAKgGIAKgMIAIgNIAFgBQADAAABADIAAATQAAAFACABQAAACAGAAIAvAAQAEADAAAGQAAAHgDACIgxAAQgFAAgBABQgBACAAAHIAABPQAAAXAFALQAHAMATAAQAGAAAFgCIAHgDIAEgDQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIABAEQgIAJgJAFQgNAHgPgBQgZAAgLgNgABbASQgJgLAAgVIAAhgQAAgKgCgCQgBgBgGAAIgMAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIARgHIAKgGQAFgEAEgIIAIgNIAGgBQADAAAAADIAAATQABAFABABQABACAFAAIAwAAQAEADAAAGQgBAHgDACIgwAAQgFAAgCABQgBACAAAHIAABPQAAAXAFALQAIAMATAAQAFAAAGgCIAGgDIAEgDQABAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAABABAAQAAABAAABQAAAAAAABQAAAAgBAAQgGAJgKAFQgNAHgOgBQgaAAgKgNgAhvAIQgZgYAAgnQAAgoAbgbQAagZAmAAQAlAAAXAYQAZAaAAAmQAAAogZAZQgYAZgoAAQglABgZgYgAhVhzQgOAUAAAiQAAAgANAXQAPAZAbgBQAaABANgXQAJgTAAgeQAAgfgMgXQgOgbgcAAQgWgBgNAUgAj0AaQgPgGgLgKQgZgXAAgoQAAgmAZgaQAcgeAyAAQAIAAAKACQAMACAIADQADACACAFIABAKQAAAGgCAFQgDAFgEAAQgEAAgCgDQgHgKgLgFQgMgIgMAAQgYAAgRASQgSATAAAgQAAAcARAVQAUAWAfABQARAAANgIQAJgFAJgMQACgBACACQADACAAADQgKAVgWALQgSAKgVAAQgRABgPgGgAsdAIQgZgYAAgnQAAgoAagbQAagZAmAAQAlAAAZAYQAZAaAAAmQAAAogZAZQgZAZgoAAQgmABgYgYgAsDhzQgOAUgBAiQABAgANAXQAPAZAagBQAaABANgXQALgTAAgeQAAgfgNgXQgPgbgbAAQgWgBgNAUgAxvAcQgIgEgFgGQgEgGgDAAQgCAAgEADIgKAFIgOAIQgJADgIAAQgTAAgKgKQgHgFgDgHQgDgIgBgIQAAgNAIgHQAHgJAUgIIAzgSQAEgBACgDIABgIIAAgUQABgPgFgJQgJgNgSAAQgKAAgHAFQgJAGgBAJIAAAIQgBAFgCABQgFAEgIACQgHACgFAAQgGABAAgHQAAgQAcgSQAcgSAXAAQAXAAAMANQAKAMgBAZIgCBKQgCAjAVAAQAGAAAFgCIADgCIADgBIACACIABADQAAAEgKAHQgNAJgNgBQgJAAgGgDgAyWgsQgWAHgHAGQgJAHAAALQAAAJAFAGQAHAKAPAAQAGAAAIgDQAIgEAEgEQADgBABgGIABgLIABgaQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgDgBQgEAAgNAEgAFsAHQgbgUABghQAAgvAwgVQgIgKgEgIQgEgIAAgLQAAgWAPgPQAQgPAWAAQAQAAAMAIQALAJABAPQgBANgKAJQgJAHgJAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQgBgBACgFIAEgFQACgHgCgHQgCgGgFgFQgIgEgIgBQgLgBgJAHQgIAHAAAKQAAALAIAIQAIAIAWAMQAkAUAQAOQAbAWATAnQAOgRAAgYQAAgHgCgHQgCgHgFgIQgGgGgKgCQgFAAgDAAQgHACgGAFQgDACgDgBQgDgBABgJQABgKAKgIQAMgHAPAAQAHABAOACIAQACIAGAAQADgBABgDIABgBIACgBQADAAABADQABAMgIAIQgGAHgQAEQADAHACAGQACAGAAAJQAAAPgGANQgFAOgMANQAJAQAKAIQALAHAPABQAHAAAEgDIAIgCQAAAAABABQAAAAABAAQAAABAAAAQAAABAAABQAAAGgMAEQgLAEgRAAQgRAAgLgEQgKgFgOgMQgVAMgQAFQgPAEgUAAQgmABgagXgAF4heQgFAIAAAPQAAAhAXAYQAYAYAeAAQALAAAKgCQAJgDANgFIgJgLIgJgOIgJgNQgQgXgQgQQgKgJgRgMIgJgIQgNADgHAJgASUAaQgXgBgSACQgCgCAAgDQgBgEACgCIAJgBQAMgBADgHQACgFAAgXIAAhLQgBgNgBgDQgBgEgJgGIgEgDIgBgDQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAXgKQAPgGAGgFQAEAAABACIgCA1IAABNQABAXACAFQACAHALABIAJABQACACAAAEQgBADgCACQgTgCgUABgApHAaQgXgBgRACQgCgCAAgDQgBgEACgCIAJgBQALgCADgGQACgFAAgXIAAhLQAAgNgBgDQgCgEgIgGIgFgDIgBgDQABgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAVgKIAWgLQADAAAAADIAAAZIABADIAXgRQAOgIALAAQAHAAAGAEQAFAFABAIQgBAKgGAFQgFAFgHAAIgFgBIgEgDQgKgGgJAAQgJAAgGAIQgFAIgBAZIAAA6QAAAXADAFQACAHAMABIAQABQACACgBAEQAAADgCACIgvgBgAtuAaQgVgBgUACQgCgCgBgDQAAgEACgCIAKgBQALgBADgHQACgFAAgXIAAjBQAAgSgBgGQgDgFgJgGIgFgCQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAgBQAggKAOgIQADABACACIgBA0IAADKQAAAXACAFQADAHAKABIALABQACACAAAEQgBADgCACIgpgBgA2BAaIgbAAIgaAAIgYABQgBgCgBgDQAAgEABgCIAIgBQARgDADgJQAEgGAAgiIAAiiQAAgZgEgHQgDgIgOgCIgNgBQgDgCAAgDQAAgEADgBQAjgEA4AAQAXABAQACQATADANAHQAPAGAJANQAJAOAAAUQAAAVgMAPQgLAMgUAKQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAHABQAUAEARAQQAUAUgBAgQAAAlgbAVQgeAXg4AAIgXgBgA2Jh0QgDACAAAHIAAA/QAAAkAJAJQAFAIAJACQAIACALAAQAeAAASgNQATgOAAgfQAAgegRgTQgVgYgvAAQgQAAgFACgA2HjwQgDABgBADQgBACAAAFIAABWQAAAKADABQADACAPgBQAjAAAQgMQAQgNAAgdQAAgdgTgPQgRgNgbAAQgNgBgHADgASBi8QgGgFAAgJQAAgLAHgGQAGgGAKAAQAJAAAGAGQAGAGAAAKQAAALgHAFQgGAGgKAAQgJAAgGgHg");
	this.shape_1.setTransform(0,-10.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_Txt, new cjs.Rectangle(-149.3,-38.7,298.70000000000005,77.5), null);


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
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0.216,0.416,0.482,0.663],-14.2,265.1,-14.2,65).s().p("A9QZzIAAgyMAAAgyzMA6gAAAMAAAAyzIAAAyg");
	this.shape.setTransform(334.25,211.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(54).to({_off:false},0).to({_off:true},269).wait(37));

	// Gradient_bottom
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0.216,0.416,0.482,0.663],-12.4,-145,-12.4,55.1).s().p("A9RHDIAAl3IAAncIAAgyMA6jAAAIAAAyIAAHcIAAF3g");
	this.shape_1.setTransform(333.4,502.425);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(54).to({_off:false},0).to({_off:true},269).wait(37));

	// txt_scheduleVisit
	this.instance = new lib.txt_scheduleVisit();
	this.instance.setTransform(308.1,533.45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(267).to({_off:false},0).to({y:410.45,alpha:1},9,cjs.Ease.quadInOut).to({y:413.45},3).wait(32).to({y:283.45,alpha:0},11,cjs.Ease.quadIn).to({_off:true},1).wait(37));

	// txt_messageCareTeam
	this.instance_1 = new lib.txt_messageCareTeam();
	this.instance_1.setTransform(308.1,533.45);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(192).to({_off:false},0).to({y:410.45,alpha:1},9,cjs.Ease.quadInOut).to({y:413.45},3).wait(58).to({y:283.45,alpha:0},11,cjs.Ease.quadIn).to({_off:true},1).wait(86));

	// txt_accessResults
	this.instance_2 = new lib.txt_accessResults();
	this.instance_2.setTransform(308.1,533.45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(147).to({_off:false},0).to({y:410.45,alpha:1},9,cjs.Ease.quadInOut).to({y:413.45},3).wait(28).to({y:283.45,alpha:0},11,cjs.Ease.quadIn).to({_off:true},1).wait(161));

	// txt_ScheduleAppt
	this.instance_3 = new lib.txt_ScheduleAppt();
	this.instance_3.setTransform(308.1,533.45);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(102).to({_off:false},0).to({y:410.45,alpha:1},9,cjs.Ease.quadInOut).to({y:413.45},3).wait(28).to({y:283.45,alpha:0},11,cjs.Ease.quadIn).to({_off:true},1).wait(206));

	// txt_takeHealthcare
	this.instance_4 = new lib.txt_takeHealthcare();
	this.instance_4.setTransform(308.1,533.45);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).to({y:410.45,alpha:1},9,cjs.Ease.quadInOut).to({y:413.45},3).wait(31).to({y:283.45,alpha:0},11,cjs.Ease.quadIn).to({_off:true},1).wait(251));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,882.6,586.6);


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
	this.instance.setTransform(503.2,19,1.0167,1.0167);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1},6).wait(45).to({_off:true},1).wait(305));

	// txt_tapInto
	this.instance_1 = new lib.txt_tapInto();
	this.instance_1.setTransform(422,19.85,1.0173,1.0173,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({alpha:1},6).wait(43).to({_off:true},1).wait(305));

	// Layer_14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2vGFIAAsKMAtfAAAIAAMKg");
	this.shape.setTransform(756.3852,10.3433,1.0987,1.2214);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.831)").s().p("A40HUIAAuoMAxpAAAIAAOog");
	this.shape_1.setTransform(755.55,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.667)").s().p("A4pHNIAAuZMAxTAAAIAAOZg");
	this.shape_2.setTransform(754.725,12.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.502)").s().p("A4fHGIAAuLMAw+AAAIAAOLg");
	this.shape_3.setTransform(753.9,13.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.333)").s().p("A4TG/IAAt9MAwoAAAIAAN9g");
	this.shape_4.setTransform(753.05,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.169)").s().p("A4JG4IAAtvMAwTAAAIAANvg");
	this.shape_5.setTransform(752.225,15.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0)").s().p("A3+GwIAAtfMAv9AAAIAANfg");
	this.shape_6.setTransform(751.4,16.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},1).wait(348));

	// txt_Better
	this.instance_2 = new lib.txt_Better("single",0);
	this.instance_2.setTransform(608.7,-26.45,1.0488,1.0488,0,0,0,-149,-35);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(6).to({mode:"synched",startPosition:4,loop:false},0).wait(43).to({startPosition:47},0).to({_off:true},1).wait(305));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-120,916.4,183.8);


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
	this.instance.setTransform(-78.05,153.5,1.303,1.303,0,0,0,-0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({alpha:1},6).wait(20).to({_off:true},1).wait(328));

	// Layer_14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape.setTransform(433.425,213.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.89)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_1.setTransform(432.775,212.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.776)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_2.setTransform(432.125,212.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.667)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_3.setTransform(431.525,212.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.557)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_4.setTransform(430.875,212.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.443)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_5.setTransform(430.225,211.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.333)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_6.setTransform(429.575,211.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.224)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_7.setTransform(428.975,211.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.11)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_8.setTransform(428.325,211.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0)").s().p("EgsqAbOMAAAg2bMBZVAAAMAAAA2bg");
	this.shape_9.setTransform(427.675,211.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).wait(345));

	// txt_Better
	this.instance_1 = new lib.txt_Better("single",4);
	this.instance_1.setTransform(355.85,144.5,1.273,1.273);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(6).to({mode:"synched",loop:false},0).wait(20).to({startPosition:24},0).to({_off:true},1).wait(328));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300.2,0,1019.5999999999999,387.2);


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
	this.shape.graphics.f("#C0BFBD").s().p("AEDBTQgRgHgMgMQgMgMgHgRQgHgRAAgSQAAgSAHgQQAHgRAMgMQAMgMARgHQAQgHATAAQASAAARAHQAQAHAMAMQANAMAGARQAIAQAAASQAAASgIARQgGARgMAMQgNAMgQAHQgRAHgSAAQgTAAgQgHgAETgtQgJAFgGAHQgHAGgDAJQgEAJABAJQgBAKAEAJQAEAIAFAHQAHAHAJADQAIAFALAAQAKAAAJgFQAIgDAHgHQAGgHAEgIQAEgJgBgKQABgJgEgJQgEgJgGgGQgHgHgIgFQgJgDgKAAQgLAAgIADgAn6BTQgQgHgMgMQgNgMgGgRQgIgRABgSQgBgSAIgQQAGgRANgMQAMgMAQgHQARgHASAAQATAAAQAHQAQAHANAMQAMAMAHARQAHAQAAASQAAASgHARQgHARgMAMQgMAMgQAHQgRAHgTAAQgSAAgRgHgAnpgtQgJAFgHAHQgGAGgEAJQgDAJAAAJQAAAKADAJQAEAIAGAHQAHAHAIADQAJAFAKAAQAKAAAJgFQAJgDAHgHQAFgHAFgIQADgJAAgKQAAgJgDgJQgFgJgFgGQgIgHgIgFQgIgDgLAAQgKAAgIADgAJDBXIAAitIA+AAQAUAAASAGQAQAHAMAMQAMALAHARQAGAPABASQgBASgGAQQgIARgLALQgNAMgQAHQgQAGgUAAgAJsAxIAUAAQAMAAAJgFQAJgDAGgHQAHgGAEgJQADgJAAgKQAAgKgDgJQgEgIgGgGQgGgIgKgDQgJgEgNAAIgTAAgAIKBXIgKgaIhCAAIgJAaIgrAAIBBitIApAAIBBCtgAH0AZIgUg6IgWA6IAqAAgABEBXIAAitIAqAAIAACGIBMAAIAAAngAACBXIhEhtIAABtIgoAAIAAitIArAAIBCBnIAAhnIAoAAIAACtgAjXBXIgehtIgeBtIgqAAIgwitIAqAAIAbBrIAfhrIAoAAIAeBrIAchrIApAAIgwCtgArbBXIAAitIA+AAQAUAAARAGQARAHALAMQAMALAHARQAHAPAAASQAAASgHAQQgHARgMALQgMAMgQAHQgRAGgTAAgAqyAxIAUAAQALAAAJgFQAKgDAGgHQAHgGADgJQAEgJgBgKQABgKgEgJQgDgIgGgGQgHgIgKgDQgJgEgMAAIgTAAg");
	this.shape.setTransform(0.25,0.45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11).to({_off:false},0).to({_off:true},1).wait(3));

	// _Path_ (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_11 = new cjs.Graphics().p("AvAEGIAAoLIeBAAIAAILg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_graphics_11,x:-0.2,y:0}).wait(1).to({graphics:null,x:0,y:0}).wait(3));

	// _Clip_Group_
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(25.5,0.05,1,1,0,0,0,55.2,25.9);
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
	this.shape_6.graphics.f("#F5B846").s().p("Ai7lTIF2gCIABEpIl0GDg");
	this.shape_6.setTransform(202.275,217);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},38).to({state:[]},1).wait(47));

	// noise_lines
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1140A0").ss(12.9).p("AhwEDICnBhAhwkCICnhhAgvAAIDBAA");
	this.shape_7.setTransform(162.641,61.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1140A0").ss(12.9).p("AhVBXIB1A7AgUAAICHAAAhVhVIB1g9");
	this.shape_8.setTransform(173.2654,61.0623);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1140A0").ss(12.9).p("Ag9hVIBFAXAg9BXIBDgYAADAAIBQAA");
	this.shape_9.setTransform(184.1149,61.0769);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1140A0").ss(12.9).p("AgZkBIAUgPAAnABIAWgBAgZEEIARAM");
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
p.nominalBounds = new cjs.Rectangle(-34.5,-7.4,255.6,281.5);


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
	this.shape.setTransform(-14.4,225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5B846").s().p("AnMDNIGCmaIIXAAIAAGcg");
	this.shape_1.setTransform(57.5,229.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5B846").s().p("AopDmIGCnMILQAAIABHNg");
	this.shape_2.setTransform(95.6,232.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5B846").s().p("ApnD8IGCn4INMAAIABH5g");
	this.shape_3.setTransform(101.8,234.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5B846").s().p("AsXEMIDuoYIVAAAIABIZg");
	this.shape_4.setTransform(111.4,236);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5B846").s().p("ApUDSIjumkIaFAAIAAGlg");
	this.shape_5.setTransform(122.7,230.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5B846").s().p("AoICrIlflXIbOAAIABFYg");
	this.shape_6.setTransform(124.975,226.95);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},36).to({state:[]},1).to({state:[{t:this.shape_6}]},34).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},5).to({state:[]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(13).to({_off:false},0).wait(36).to({_off:true},1).wait(34).to({_off:false},0).wait(1).to({x:129.875},0).wait(1).to({x:144.525},0).wait(1).to({x:168.975},0).wait(1).to({x:203.175},0).wait(1).to({x:247.175},0).wait(1).to({x:300.975},0).wait(5).to({_off:true},1).wait(3));

	// Layer_7
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1140A0").s().p("AlPCAIAAj/IKfAAIAAD/g");
	this.shape_7.setTransform(-27.6,28);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).to({_off:true},7).wait(92));

	// phone_frame
	this.instance = new lib.phone_frame();
	this.instance.setTransform(-26.4,123.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({mode:"synched",startPosition:87,loop:false},0).to({regX:0.1,regY:0.1,scaleX:1.5153,scaleY:1.5153,x:125.1,y:84.45,alpha:0,startPosition:96},6,cjs.Ease.quadOut).wait(36).to({startPosition:98},0).to({_off:true},1).wait(34).to({_off:false},0).wait(11).to({startPosition:98},0).to({_off:true},1).wait(3));

	// man_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");
	var mask_1_graphics_7 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AqpT3QgYAAAAgXMAAAgm/QAAgXAYAAIVUAAQAXAAAAAXMAAAAm/QAAAXgXAAg");
	var mask_1_graphics_9 = new cjs.Graphics().p("Ar4WSQgaAAAAgaMAAAgrvQAAgaAaAAIXxAAQAaAAAAAaMAAAArvQAAAagaAAg");
	var mask_1_graphics_10 = new cjs.Graphics().p("As2YmQgcAAAAgbMAAAgwUQAAgcAcAAIZtAAQAcAAAAAcMAAAAwUQAAAbgcAAg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AteaGQgeAAAAgdMAAAgzQQAAgeAeABIa9AAQAegBAAAeMAAAAzQQAAAdgeAAg");
	var mask_1_graphics_12 = new cjs.Graphics().p("At1WhQgeAAAAgeMAAAgsFQAAgeAeAAIbrAAQAeAAAAAeMAAAAsFQAAAegeAAg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AuAW3QgeAAgBgfMAAAgsvQABgfAeAAIcBAAQAfAAgBAfMAAAAsvQABAfgfAAg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AuAW3QgeAAgBgfMAAAgsvQABgfAeAAIcBAAQAfAAgBAfMAAAAsvQABAfgfAAg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AuAW3QgeAAgBgfMAAAgsvQABgfAeAAIcBAAQAfAAgBAfMAAAAsvQABAfgfAAg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AuAW3QgeAAgBgfMAAAgsvQABgfAeAAIcBAAQAfAAgBAfMAAAAsvQABAfgfAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-26.8,y:122.8}).wait(7).to({graphics:mask_1_graphics_7,x:-26.8,y:122.8}).wait(1).to({graphics:mask_1_graphics_8,x:18.2,y:112.15}).wait(1).to({graphics:mask_1_graphics_9,x:57.175,y:102.9}).wait(1).to({graphics:mask_1_graphics_10,x:87.85,y:98.275}).wait(1).to({graphics:mask_1_graphics_11,x:107.55,y:95.3}).wait(1).to({graphics:mask_1_graphics_12,x:118.975,y:65.175}).wait(1).to({graphics:mask_1_graphics_13,x:124.35,y:63.975}).wait(36).to({graphics:mask_1_graphics_49,x:124.35,y:63.975}).wait(1).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_1_graphics_84,x:124.35,y:63.975}).wait(11).to({graphics:mask_1_graphics_95,x:124.35,y:63.975}).wait(1).to({graphics:null,x:0,y:0}).wait(3));

	// dr_head
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1140A0").s().p("AivD7QhJhJAAhnIAAiVQAAhnBJhJQBJhJBmAAQBnAABJBJQBJBJAABnIAACVQAABnhJBJQhJBJhnAAQhmAAhJhJg");
	this.shape_8.setTransform(-26.925,95.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(5,19,49,0.306)").ss(6.1,1,1).p("AkwhbQAAh+BZhaQBahZB9AAQB+AABZBZQBaBaAAB+IAAC3QAAB/haBZQhZBZh+AAQh9AAhahZQhZhZAAh/g");
	this.shape_9.setTransform(19.25,78.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5A7ABD").s().p("AjKEjQhVhVAAh3IAAitQAAh4BVhUQBUhUB2gBQB4ABBTBUQBVBUAAB4IAACtQAAB3hVBVQhTBUh4AAQh2AAhUhUg");
	this.shape_10.setTransform(19.25,78.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(9,35,89,0.557)").ss(11.1,1,1).p("AlehpQAAiRBnhnQBohnCPAAQCRAABnBnQBnBnAACRIAADUQAACRhnBmQhnBniRAAQiPAAhohnQhnhmAAiRg");
	this.shape_11.setTransform(57.05,65.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#95AAD5").s().p("AjhFDQheheAAiEIAAjBQAAiEBeheQBeheCDAAQCFAABdBeQBeBeAACEIAADBQAACEheBeQhdBeiFAAQiDAAheheg");
	this.shape_12.setTransform(57,65.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(13,47,120,0.749)").ss(15,1,1).p("AmBh0QAAigBxhxQByhxCeAAQCgAABxBxQBxBxAACgIAADpQAACghxBxQhxBxigAAQieAAhyhxQhxhxAAigg");
	this.shape_13.setTransform(86.425,55.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4CFE7").s().p("AjzFdQhlhmAAiOIAAjQQAAiPBlhlQBlhmCOAAQCPAABlBmQBlBlAACPIAADQQAACOhlBmQhlBkiPAAQiOAAhlhkg");
	this.shape_14.setTransform(86.4,55.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(15,56,142,0.89)").ss(17.8,1,1).p("Ambh7QAAirB5h5QB5h5CpAAQCrAAB4B5QB5B5AACrIAAD4QAACrh5B4Qh4B5irAAQipAAh5h5Qh5h4AAirg");
	this.shape_15.setTransform(107.4,47.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E5EAF4").s().p("AkAFuQhqhqAAiWIAAjbQAAiWBqhqQBrhqCVAAQCWAABqBqQBrBqAACWIAADbQAACWhrBqQhqBriWAAQiVAAhrhrg");
	this.shape_16.setTransform(107.375,47.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(17,61,156,0.973)").ss(19.5,1,1).p("AmqiAQAAixB9h+QB+h8CvAAQCyAAB8B8QB9B+AACxIAAECQAACxh9B9Qh8B9iyAAQivAAh+h9Qh9h9AAixg");
	this.shape_17.setTransform(120,43.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8FAFC").s().p("AkHF5QhuhtABibIAAjhQgBibBuhtQBuhuCZAAQCbAABtBuQBtBtABCbIAADhQgBCbhtBtQhtBuibAAQiZAAhuhug");
	this.shape_18.setTransform(119.95,43.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#113FA0").ss(20,1).p("AmvCDIAAkFQAAizB+h/QCAh+CxAAQC0AAB+B+QB+B/AACzIAAEFQAACzh+B+Qh+B/i0AAQixAAiAh/Qh+h+AAizg");
	this.shape_19.setTransform(124.2,41.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AkKF9QhuhvAAicIAAjjQAAicBuhvQBwhuCaAAQCcAABvBuQBuBvAACcIAADjQAACchuBvQhvBuicAAQiaAAhwhug");
	this.shape_20.setTransform(124.15,41.625);

	this.instance_1 = new lib.dr_head();
	this.instance_1.setTransform(124.2,98.1,1,1,0,0,0,0,56.4);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_8}]},7).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},24).to({state:[]},1).to({state:[{t:this.instance_1}]},34).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},5).to({state:[]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({rotation:-6.4429},4).to({rotation:2.7042},4).to({rotation:0},3).wait(24).to({_off:true},1).wait(34).to({_off:false},0).to({y:336.5},6,cjs.Ease.quadIn).wait(5).to({_off:true},1).wait(3));

	// dot_wht
	this.instance_2 = new lib.dot_wht();
	this.instance_2.setTransform(-47.8,192.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({scaleX:1.5153,scaleY:1.5153,x:92.5,y:284.55},6,cjs.Ease.quadOut).to({_off:true},1).wait(85));

	// dot_wht
	this.instance_3 = new lib.dot_wht();
	this.instance_3.setTransform(-27,192.4);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({scaleX:1.5153,scaleY:1.5153,x:124.05,y:284.55},6,cjs.Ease.quadOut).to({_off:true},1).wait(85));

	// dot_wht
	this.instance_4 = new lib.dot_wht();
	this.instance_4.setTransform(-6.6,192.4);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({scaleX:1.5153,scaleY:1.5153,x:154.95,y:284.55},6,cjs.Ease.quadOut).to({_off:true},1).wait(85));

	// stethascope_02
	this.instance_5 = new lib.stethascope_02_wht();
	this.instance_5.setTransform(-3.6,128.65,0.545,0.545,0,0,0,1.4,-37.1);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({scaleX:0.6804,scaleY:0.6804,rotation:0.0334,x:45.85,y:121.35},1).to({regX:1.5,regY:-36.9,scaleX:0.7977,scaleY:0.7977,rotation:1.5279,x:89.25,y:115.2},1).to({_off:true},1).wait(89));

	// stethascope_01
	this.instance_6 = new lib.stethascope_01_wht();
	this.instance_6.setTransform(-46.25,121.7,0.688,0.688,0,0,0,-1.2,-34.5);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({regY:-34.4,scaleX:0.7808,scaleY:0.7808,rotation:0.0213,x:-2.6,y:118.65},1).to({regX:-1.1,scaleX:0.8613,scaleY:0.8613,rotation:0.4822,x:35.2,y:115.8},1).to({_off:true},1).wait(89));

	// stethascope_02
	this.instance_7 = new lib.stethascope_02_blue();
	this.instance_7.setTransform(-3.45,128.6,0.5441,0.5441,0,0,0,1.4,-37.2);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).wait(1).to({regX:0,regY:-4.6,scaleX:0.6864,scaleY:0.6864,rotation:1.1425,x:44.95,y:143.35},0).wait(1).to({scaleX:0.8097,scaleY:0.8097,rotation:2.1321,x:87.4,y:140.8},0).wait(1).to({scaleX:0.8978,scaleY:0.8978,rotation:2.8404,x:117.65,y:138.95},0).wait(1).to({scaleX:0.9545,scaleY:0.9545,rotation:3.2949,x:137.05,y:137.7},0).wait(1).to({regX:1.6,regY:-37.2,scaleX:0.9873,scaleY:0.9873,rotation:3.5585,x:151.8,y:105},0).to({regX:1.7,regY:-37.4,scaleX:1,scaleY:1,rotation:7.9816,x:156.3,y:104.3},1).to({regY:-37.2,rotation:-2.8391,x:156.35,y:104.5},1).to({regX:1.6,regY:-37.4,rotation:4.4992,x:156.25,y:104.3},4).to({regX:1.7,rotation:-3.9662,x:156.3,y:104.35},3).to({regX:1.6,rotation:0,x:156.2,y:104.3},5).wait(23).to({_off:true},1).wait(34).to({_off:false},0).wait(1).to({regX:0,regY:-4.6,rotation:-0.3574,x:154.75,y:139.55},0).wait(1).to({regX:1.6,regY:-37.4,rotation:-1.0553,x:156.2,y:111.55},0).wait(1).to({regX:0,regY:-4.6,rotation:-2.3629,x:155.95,y:171.4},0).wait(1).to({rotation:-4.3892,x:157.1,y:213.2},0).wait(1).to({rotation:-6.9678,x:158.6,y:266.35},0).wait(1).to({regX:1.6,regY:-37.4,rotation:-9.5004,x:156.25,y:285.9},0).wait(5).to({_off:true},1).wait(3));

	// stethascope_01
	this.instance_8 = new lib.stethascope_01_blue();
	this.instance_8.setTransform(-45.95,122.15,0.681,0.681,0,0,0,-0.9,-34.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({_off:false},0).wait(1).to({regX:0,regY:-1.1,scaleX:0.7806,scaleY:0.7806,rotation:0.3376,x:-1.75,y:144.75},0).wait(1).to({scaleX:0.8668,scaleY:0.8668,rotation:0.63,x:35.9,y:144.6},0).wait(1).to({scaleX:0.9285,scaleY:0.9285,rotation:0.8393,x:62.9,y:144.55},0).wait(1).to({scaleX:0.9682,scaleY:0.9682,rotation:0.9736,x:80.2,y:144.5},0).wait(1).to({regX:-0.8,regY:-34.4,scaleX:0.9911,scaleY:0.9911,rotation:1.0515,x:90.05,y:111.4},0).to({regY:-34.6,scaleX:1,scaleY:1,rotation:8.4825,x:93.85,y:111.2},1).to({rotation:-3.2505},1).to({rotation:5.1924},3).to({regY:-34.7,rotation:-3.4677,y:111.05},5).to({rotation:0},4).wait(23).to({_off:true},1).wait(34).to({_off:false},0).wait(1).to({regX:0,regY:-1.1,rotation:0.4219,x:94.4,y:147.1},0).wait(1).to({regX:-0.8,regY:-34.7,rotation:1.2459,x:93.85,y:118.35},0).wait(1).to({regX:0,regY:-1.1,rotation:2.7897,x:93,y:178.9},0).wait(1).to({rotation:5.1821,x:91.6,y:220.65},0).wait(1).to({rotation:8.2266,x:89.8,y:273.7},0).wait(1).to({regX:-0.8,regY:-34.7,rotation:11.2167,x:93.85,y:292.65},0).wait(5).to({_off:true},1).wait(3));

	// dr_body
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1140A0").s().p("AnFIIQABAAgBhlQgCiRAEiWIAEjnQAAiiB4h9QB5h+CgAAIBgAAQCgAAB7B+QB6B+AAChIAAJzg");
	this.shape_21.setTransform(-27.0725,177.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1140A0").s().p("AnFI9QABgCgBiYQgCjHAEiUIAEjnQAAiiB4h9QB5h+CgAAIBgAAQCgAAB7B+QB6B+AAChIAALcg");
	this.shape_22.setTransform(-27.0725,182.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(5,20,49,0.306)").ss(6.1,1,1).p("AolHiQgCjHADikQABgUAAgUIAEjiQAAgVACgVQADhGAahCQAihVBEhIQAPgQAPgOQA7g1BCghQBYgrBegDQAOgBANAAIBVAAQAOAAAOAAQBRACBOAfQBbAkBNBIQBNBJAmBQQApBVABBdIAAMFIgfAuIwfAAQgHAAgHgXQAAgbAAhvg");
	this.shape_23.setTransform(19.3136,182.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5A7ABD").s().p("AoXKGQgHAAgHgXIAAiKIAAgDQgCjHADikIABgoIAEjiIACgqQADhGAahCQAihVBEhIQAPgQAPgOQA7g1BCghQBYgrBegDIAbgBIBVAAIAcAAQBRACBOAfQBbAkBNBIQBNBJAmBQQApBVABBdIAAMFIgfAug");
	this.shape_24.setTransform(19.3136,182.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(9,36,89,0.557)").ss(11.1,1,1).p("Ap0IWQgCjZAEi7QABgWAAgXIAEj8QABgXACgYQAGhNAhhKQAqhcBQhOQARgQASgPQBCg4BNgjQBkgtBogDQAPAAAPAAIBfAAQAPAAAPAAQBaAEBYAjQBmAoBXBNQBYBPAtBZQAxBfAABlIAANeIg4AdIyYAAQgMAAgNgPQABgRgBiKg");
	this.shape_25.setTransform(57.2667,181.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#95AAD5").s().p("ApbLCQgMAAgNgPQABgSgBiJIAAgBQgCjbAEi6IABgtIAEj7IADgwQAGhNAhhJQAqhdBQhOIAjgfQBCg4BNgjQBkgtBogCIAegBIBfAAIAeABQBaADBYAjQBmAoBXBNQBYBPAtBaQAxBeAABmIAANdIg4Adg");
	this.shape_26.setTransform(57.2667,181.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(13,48,120,0.749)").ss(15,1,1).p("AqxI/QgCjpAFjMQAAgYABgYIAEkQQAAgaADgZQAIhTAnhPQAxhjBZhSQATgRATgPQBJg7BUgkQBvgvBugBQARgBAQAAIBmAAQAQAAARABQBfAFBhAmQBwAsBdBQQBgBVAzBfQA3BnABBrIAAOiIhMARIz2AAQgQAAgSgJQACgKgCieg");
	this.shape_27.setTransform(86.7942,181.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C4CFE7").s().p("AqPLxQgQAAgSgJQACgKgCieIAAgBQgCjpAFjMIABgwIAEkQQAAgaADgZQAIhTAnhPQAxhjBZhSIAmggQBJg7BUgkQBvgvBugBIAhgBIBmAAIAhABQBfAFBhAmQBwAsBdBQQBgBVAzBfQA3BnABBrIAAOiIhMARg");
	this.shape_28.setTransform(86.7942,181.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(15,57,142,0.89)").ss(17.8,1,1).p("ArdJcQgBjzAEjZQABgaAAgZIAFkeQAAgbADgbQAKhXArhTQA1hoBghUQATgSAVgQQBNg7BagmQB2gwB0gBQARAAARAAIBrAAQASAAARABQBkAGBmAoQB3AuBiBTQBnBYA2BkQA7BsABBxIAAPTIhaAHI04AAQgUAAgUgEQABgFgCitg");
	this.shape_29.setTransform(107.8813,180.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E5EAF4").s().p("Aq0MSQgUAAgUgEQABgFgCitQgBjzAEjZIABgzIAFkeQAAgbADgbQAKhXArhTQA1hoBghUQATgSAVgQQBNg7BagmQB2gwB0gBIAiAAIBrAAIAjABQBkAGBmAoQB3AuBiBTQBnBYA2BkQA7BsABBxIAAPTIhaAHg");
	this.shape_30.setTransform(107.8813,180.775);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(17,62,156,0.973)").ss(19.5,1,1).p("Ar3JtQgCj6AFjgQABgbAAgaIAFkmQAAgcAEgcQAKhZAuhWQA4hqBjhWQAVgSAVgQQBQg9BdgmQB6gxB3AAQASAAARAAIBvAAQASAAASABQBmAGBqApQB6AwBmBVQBqBaA4BmQA+BwABB0IAAPwI3CACQgWAAgXgBQACgCgCi2g");
	this.shape_31.setTransform(120.5214,180.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F8FAFC").s().p("Ar3MlQACgDgCi1QgCj5AFjhIABg0IAFknQAAgcAEgbQAKhZAuhXQA4hpBjhXQAVgSAVgQQBQg9BdgmQB6gxB3AAIAjAAIBvAAIAkABQBmAGBqApQB6AxBmBUQBqBbA4BlQA+BwABB0IAAPwI3CACIgtgBg");
	this.shape_32.setTransform(120.5214,180.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#1140A0").ss(20,1).p("ANHjKIAAP3I4AAAQABgCgBi4QgCj8AFjjIAGleQAAh2A8hzQA5hrBlhXQBihVB4gwQB7gyB4AAICTAAQB5AAB+AyQB7AwBnBVQBpBXA7BrQBABzAAB2g");
	this.shape_33.setTransform(117.7039,180.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ar/MtQABgCgBi4QgCj8AFjjIAGleQAAh2A8hzQA5hrBlhXQBihVB4gwQB7gyB4AAICTAAQB5AAB+AyQB7AwBnBVQBpBXA7BrQBABzAAB2IAAP3g");
	this.shape_34.setTransform(124.7464,180.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#1140A0").ss(20,1).p("Aq5JzQgCj8AFjjIAGleQAAh2A8hzQA5hrBlhXQBihVB4gwQB7gyB4AAICTAAQB5AAB+AyQB7AwBnBVQBpBXA7BrQBABzAAB2IAAP3I4AAAQABgCgBi4g");
	this.shape_35.setTransform(117.7039,187.125);

	var maskedShapeInstanceList = [this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},7).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34,p:{y:180.525}},{t:this.shape_33,p:{y:180.525}}]},1).to({state:[{t:this.shape_34,p:{y:180.525}},{t:this.shape_33,p:{y:180.525}}]},36).to({state:[]},1).to({state:[{t:this.shape_34,p:{y:180.525}},{t:this.shape_33,p:{y:180.525}}]},34).to({state:[{t:this.shape_34,p:{y:187.125}},{t:this.shape_35,p:{y:187.125}}]},1).to({state:[{t:this.shape_34,p:{y:207.025}},{t:this.shape_35,p:{y:207.025}}]},1).to({state:[{t:this.shape_34,p:{y:240.125}},{t:this.shape_35,p:{y:240.125}}]},1).to({state:[{t:this.shape_34,p:{y:286.475}},{t:this.shape_35,p:{y:286.475}}]},1).to({state:[{t:this.shape_34,p:{y:346.075}},{t:this.shape_35,p:{y:346.075}}]},1).to({state:[{t:this.shape_34,p:{y:418.925}},{t:this.shape_33,p:{y:418.925}}]},1).to({state:[{t:this.shape_34,p:{y:418.925}},{t:this.shape_33,p:{y:418.925}}]},5).to({state:[]},1).wait(3));

	// blue_bubble
	this.instance_9 = new lib.blue_bubble();
	this.instance_9.setTransform(68.15,78.2,1,1,0,0,0,-52,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:28.1,scaleX:1.1009,scaleY:1.1009,x:68.1,y:78.35},4).to({regX:-50,regY:33.4,scaleX:0.01,scaleY:0.01,rotation:33.7144,x:68.15,y:78.25,alpha:0},3).to({_off:true},7).wait(85));

	// yellow_bubble
	this.instance_10 = new lib.yellow_bubble();
	this.instance_10.setTransform(184.05,158.55,1,1,0,0,0,52.8,27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({scaleX:1.1337,scaleY:1.1337,y:158.6},4).to({regX:57.6,regY:33.9,scaleX:0.01,scaleY:0.01,rotation:-43.4518,x:184.1,y:158.5,alpha:0},3).to({_off:true},6).wait(85));

	// dot_wht
	this.instance_11 = new lib.bubble_dots("synched",49,false);
	this.instance_11.setTransform(100.7,187.2,1.2131,1.2131);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},8).wait(91));

	// sm_blue_bubble
	this.instance_12 = new lib.sm_blue_bubble("single",0);
	this.instance_12.setTransform(67.25,225.75,1,1,0,0,0,-34.4,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({mode:"independent"},0).to({scaleX:1.0721,scaleY:1.0721,x:67.2},4).to({regX:-28.7,regY:29.7,scaleX:0.01,scaleY:0.01,rotation:60.0271,y:225.8,alpha:0},3).to({_off:true},5).wait(85));

	// yellow_masdk (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AqvD6IAAnzIVfAAIAAHzg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AqvD6IAAnzIVfAAIAAHzg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AqvD6IAAnzIVfAAIAAHzg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AqvD6IAAnzIVfAAIAAHzg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AqvD6IAAnzIVfAAIAAHzg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AqvD6IAAnzIVfAAIAAHzg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AqvD6IAAnzIVfAAIAAHzg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AqvD6IAAnzIVfAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:281.4,y:226.6}).wait(7).to({graphics:mask_2_graphics_7,x:281.4,y:226.6}).wait(1).to({graphics:mask_2_graphics_8,x:288.5,y:226.6}).wait(1).to({graphics:mask_2_graphics_9,x:309.85,y:226.6}).wait(1).to({graphics:mask_2_graphics_10,x:345.4,y:226.6}).wait(1).to({graphics:mask_2_graphics_11,x:395.2,y:226.6}).wait(1).to({graphics:mask_2_graphics_12,x:459.2,y:226.6}).wait(1).to({graphics:mask_2_graphics_13,x:537.4,y:226.6}).wait(1).to({graphics:null,x:0,y:0}).wait(85));

	// Yellow_bar
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F5B846").s().p("ApdC2IGClsIM5AAIAAFtg");
	this.shape_36.setTransform(289.6,224.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F5B846").s().p("ApdC2IGClsIM4AAIABFtg");
	this.shape_37.setTransform(296.7,224.8);
	this.shape_37._off = true;

	var maskedShapeInstanceList = [this.shape_36,this.shape_37];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36,p:{x:289.6}}]}).to({state:[{t:this.shape_36,p:{x:289.6}}]},7).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36,p:{x:318.05}}]},1).to({state:[{t:this.shape_36,p:{x:353.6}}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[]},1).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(8).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:403.4},0).wait(1).to({x:467.4},0).wait(1).to({x:545.6},0).to({_off:true},1).wait(85));

	// phone_top
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1140A0").s().p("AlPCAIAAj/IKfAAIAAD/g");
	this.shape_38.setTransform(277.2,28);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(8).to({x:284.3},0).wait(1).to({x:305.65},0).wait(1).to({x:341.2},0).wait(1).to({x:391},0).wait(1).to({x:455},0).wait(1).to({x:533.2},0).to({_off:true},1).wait(85));

	// phone_frame
	this.instance_13 = new lib.phone_frame();
	this.instance_13.setTransform(277.6,123.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(7).to({x:533.6},6,cjs.Ease.quadIn).to({_off:true},1).wait(85));

	// dot_wht
	this.instance_14 = new lib.dot_wht();
	this.instance_14.setTransform(256.4,192.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(7).to({x:624.4},6,cjs.Ease.quadIn).to({_off:true},1).wait(85));

	// dot_wht
	this.instance_15 = new lib.dot_wht();
	this.instance_15.setTransform(277.2,192.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(7).to({x:645.2},6,cjs.Ease.quadIn).to({_off:true},1).wait(85));

	// dot_wht
	this.instance_16 = new lib.dot_wht();
	this.instance_16.setTransform(297.6,192.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(7).to({x:665.6},6,cjs.Ease.quadIn).to({_off:true},1).wait(85));

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
	var mask_3_graphics_13 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:280.4,y:122.8}).wait(7).to({graphics:mask_3_graphics_7,x:280.4,y:122.8}).wait(1).to({graphics:mask_3_graphics_8,x:287.35,y:122.8}).wait(1).to({graphics:mask_3_graphics_9,x:308.15,y:122.8}).wait(1).to({graphics:mask_3_graphics_10,x:342.8,y:122.8}).wait(1).to({graphics:mask_3_graphics_11,x:391.35,y:122.8}).wait(1).to({graphics:mask_3_graphics_12,x:453.75,y:122.8}).wait(1).to({graphics:mask_3_graphics_13,x:530,y:122.8}).wait(1).to({graphics:null,x:0,y:0}).wait(85));

	// head
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1140A0").s().p("AiyDuQhKhLAAhpIAAhzQAAhpBKhLQBKhJBoAAQBpAABKBJQBKBLAABpIAABzQAABphKBLQhKBJhpAAQhoAAhKhJg");
	this.shape_39.setTransform(276.95,96.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1140A0").s().p("AiyDuQhKhLAAhpIAAhzQAAhpBKhLQBLhJBnAAQBpAABKBJQBKBLAABpIAABzQAABphKBLQhKBJhpAAQhnAAhLhJg");
	this.shape_40.setTransform(442.65,96.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1140A0").s().p("AiyDuQhKhLAAhpIAAhzQAAhpBKhLQBLhJBnAAQBoAABLBJQBKBLAABpIAABzQAABphKBLQhLBJhoAAQhnAAhLhJg");
	this.shape_41.setTransform(535.85,96.75);

	var maskedShapeInstanceList = [this.shape_39,this.shape_40,this.shape_41];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39}]}).to({state:[{t:this.shape_39}]},7).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40,p:{x:442.65}}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40,p:{x:649.75}}]},1).to({state:[]},1).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(8).to({x:287.3},0).wait(1).to({x:318.35},0).wait(1).to({x:370.15},0).to({_off:true},1).wait(88));

	// Body
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1140A0").s().p("AnIIgIAAp2QgBhyA2hkQAzhhBbg/QAzgkA8gVQBJgaBNAAQBQAABQAdQA8AXAzAlQBWBAAyBfQAzBiAABvIAAJ2g");
	this.shape_42.setTransform(276.95,179.125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1140A0").s().p("AnJIgIAAp2QAAhyA2hkQAzhhBag/QA1gkA6gVQBLgaBMAAQBRAABPAdQA9AXAxAlQBXBAAxBfQAzBiAABvIAAJ2g");
	this.shape_43.setTransform(370.15,179.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1140A0").s().p("AnJIgIAAp2QAAhyA2hkQAzhhBbg/QA0gkA7gVQBKgaBMAAQBQAABQAdQA9AXAyAlQBWBAAxBfQA0BiAABvIAAJ2g");
	this.shape_44.setTransform(442.65,179.125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1140A0").s().p("AnIIgIAAp2QAAhyA1hkQA0hhBZg/QA0gkA8gVQBJgaBNAAQBRAABPAdQA9AXAxAlQBXBAAyBfQAyBiAABvIAAJ2g");
	this.shape_45.setTransform(535.85,179.125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1140A0").s().p("AnJIgIAAp2QABhyA1hkQAzhhBbg/QA0gkA6gVQBLgaBMAAQBQAABQAdQA9AXAxAlQBXBAAxBfQA0BiAABvIAAJ2g");
	this.shape_46.setTransform(649.75,179.125);

	var maskedShapeInstanceList = [this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42}]}).to({state:[{t:this.shape_42}]},7).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[]},1).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(8).to({x:287.3},0).wait(1).to({x:318.35},0).to({_off:true},1).wait(89));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.9,-149.9,770.9,412.79999999999995);


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

	// dot_wht
	this.instance = new lib.bubble_dots("synched",0,false);
	this.instance.setTransform(117.9,41.2,1.2131,1.2131);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).wait(13).to({startPosition:13},0).to({alpha:0,startPosition:16},3,cjs.Ease.quadOut).to({_off:true},1).wait(50));

	// blue_bubble
	this.instance_1 = new lib.blue_bubble();
	this.instance_1.setTransform(68.15,78.25,0.01,0.01,33.7144,0,0,-50,33.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({regX:-52,regY:28.1,scaleX:1.1009,scaleY:1.1009,rotation:0,x:68.1,y:78.35},3,cjs.Ease.quadOut).to({regY:28,scaleX:1,scaleY:1,x:68.15,y:78.2},4,cjs.Ease.quadOut).wait(38).to({_off:true},1).wait(23));

	// dot_wht
	this.instance_2 = new lib.bubble_dots("synched",0,false);
	this.instance_2.setTransform(129.9,121.2,1.2131,1.2131);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).wait(13).to({startPosition:13},0).to({alpha:0,startPosition:15},3,cjs.Ease.quadOut).to({_off:true},1).wait(37));

	// yellow_bubble
	this.instance_3 = new lib.yellow_bubble();
	this.instance_3.setTransform(184.1,158.5,0.01,0.01,-43.4518,0,0,57.6,33.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36).to({_off:false},0).to({regX:52.8,regY:27.2,scaleX:1.1337,scaleY:1.1337,rotation:0,x:184.05,y:158.6},3,cjs.Ease.quadOut).to({scaleX:1,scaleY:1,y:158.55},4,cjs.Ease.quadOut).wait(25).to({_off:true},1).wait(23));

	// dot_wht
	this.instance_4 = new lib.bubble_dots("synched",0,false);
	this.instance_4.setTransform(100.7,187.2,1.2131,1.2131);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(51).to({_off:false},0).wait(17).to({startPosition:17},0).to({_off:true},1).wait(23));

	// sm_blue_bubble
	this.instance_5 = new lib.sm_blue_bubble();
	this.instance_5.setTransform(67.2,225.8,0.01,0.01,60.0271,0,0,-28.7,29.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({_off:false},0).to({regX:-34.4,regY:28,scaleX:1.0721,scaleY:1.0721,rotation:0,y:225.75},3,cjs.Ease.quadOut).to({scaleX:1,scaleY:1,x:67.25},4,cjs.Ease.quadOut).wait(12).to({_off:true},1).wait(23));

	// Yellow_bar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5B846").s().p("Ai7l7IF3F6IAAF7Il2ACg");
	this.shape.setTransform(182.825,52.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5B846").s().p("Ai7l6IF3F6IAAF6Il2ABg");
	this.shape_1.setTransform(63.275,163.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5B846").s().p("AkKj9IISCKIADFvIjhACg");
	this.shape_2.setTransform(19.75,217.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5B846").s().p("Ak6C3IDWltIGfADIgFFqg");
	this.shape_3.setTransform(14.7,224.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5B846").s().p("AnbC2IE1lsIKDACIgCFrg");
	this.shape_4.setTransform(-1.5,224.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5B846").s().p("Ao9C2IFvlsIMMABIAAFsg");
	this.shape_5.setTransform(-11.2,224.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5B846").s().p("ApdC2IGClsIM5AAIAAFtg");
	this.shape_6.setTransform(-14.4,225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1,p:{x:63.275,y:163.4}}]},1).to({state:[{t:this.shape_1,p:{x:41.925,y:184.2}}]},1).to({state:[{t:this.shape_1,p:{x:27.425,y:205.05}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},55).to({state:[]},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:168.775,y:70.55},0).wait(1).to({x:147.725,y:88.55},0).wait(1).to({x:126.675,y:106.55},0).wait(1).to({x:105.625,y:124.55},0).wait(1).to({x:84.575,y:142.55},0).to({_off:true},1).wait(86));

	// phone_top
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1140A0").s().p("AlPAkIAAhHIKfAAIAABHg");
	this.shape_7.setTransform(-27.6,18.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1140A0").s().p("AlPB7IAAj1IKfAAIAAD1g");
	this.shape_8.setTransform(-27.6,27.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1140A0").s().p("AlPCYIAAkvIKfAAIAAEvg");
	this.shape_9.setTransform(-27.6,30.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1140A0").s().p("AlPCLIAAkVIKfAAIAAEVg");
	this.shape_10.setTransform(-27.6,29.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1140A0").s().p("AlPCDIAAkFIKfAAIAAEFg");
	this.shape_11.setTransform(-27.6,28.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1140A0").s().p("AlPCAIAAj/IKfAAIAAD/g");
	this.shape_12.setTransform(-27.6,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},7).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},56).to({state:[]},1).wait(23));

	// Layer_16
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#113FA0").ss(18).p("ArwwGIXhAAMAAAAgNI3hAAg");
	this.shape_13.setTransform(103.375,131.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#113FA0").ss(18).p("ArgwRIXBAAMAAAAgjI3BAAg");
	this.shape_14.setTransform(83.85,130.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#113FA0").ss(18).p("ArPwcIWfAAMAAAAg5I2fAAg");
	this.shape_15.setTransform(64.325,129.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#113FA0").ss(18).p("Aq/wnIV/AAMAAAAhPI1/AAg");
	this.shape_16.setTransform(44.8,128);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#113FA0").ss(18).p("AqvwyIVfAAMAAAAhlI1fAAg");
	this.shape_17.setTransform(25.275,126.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#113FA0").ss(18).p("Aqew9IU9AAMAAAAh7I09AAg");
	this.shape_18.setTransform(5.75,125.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#113FA0").ss(18,0,1).p("AqOxIIUdAAMAAAAiRI0dAAg");
	this.shape_19.setTransform(-13.775,124.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},1).wait(84));

	// Layer_18
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1140A0").ss(18.4).p("AAAwrMAAAAhX");
	this.shape_20.setTransform(40.2,136.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#1140A0").ss(18.4).p("AAAQdMAAAgg5");
	this.shape_21.setTransform(28.3,134.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[]},1).wait(90));

	// Layer_19
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1140A0").ss(18.4).p("AAAL8IAA33");
	this.shape_22.setTransform(192.35,161.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1140A0").ss(18.4).p("AAAsIIAAYR");
	this.shape_23.setTransform(178.25,157.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},1).to({state:[]},1).wait(90));

	// Layer_3
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1140A0").ss(18.4).p("AtGAAIaNAA");
	this.shape_24.setTransform(117.625,233.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#1140A0").ss(18.4).p("AslAAIZLAA");
	this.shape_25.setTransform(104.5,233.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},1).to({state:[]},1).wait(90));

	// top_square
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1140A0").s().p("AheBfIAAi9IC9AAIAAC9g");
	this.shape_26.setTransform(78.2,119);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1140A0").s().p("AhUBVIAAiqICqAAIAACqg");
	this.shape_27.setTransform(61.1,119);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1140A0").s().p("AhLBMIAAiXICXAAIAACXg");
	this.shape_28.setTransform(43.95,119);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1140A0").s().p("AhCBCIAAiEICEAAIAACEg");
	this.shape_29.setTransform(26.85,119);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1140A0").s().p("Ag4A5IAAhxIBxAAIAABxg");
	this.shape_30.setTransform(9.7,119.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1140A0").s().p("AgvAwIAAhfIBfAAIAABfg");
	this.shape_31.setTransform(-7.4,119.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1140A0").s().p("AglAmIAAhLIBLAAIAABLg");
	this.shape_32.setTransform(-24.55,119.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1140A0").s().p("AgbAcIAAg4IA4AAIAAA4g");
	this.shape_33.setTransform(-41.65,119.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1140A0").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_34.setTransform(-58.8,119.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[]},1).wait(83));

	// middle_square
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1140A0").s().p("AhfBgIAAi/IC/AAIAAC/g");
	this.shape_35.setTransform(78.425,157.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1140A0").s().p("AhVBWIAAirICrAAIAACrg");
	this.shape_36.setTransform(61.3,157.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1140A0").s().p("AhLBMIAAiXICXAAIAACXg");
	this.shape_37.setTransform(44.175,157.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1140A0").s().p("AhBBCIAAiDICDAAIAACDg");
	this.shape_38.setTransform(27.05,157.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1140A0").s().p("Ag3A4IAAhvIBvAAIAABvg");
	this.shape_39.setTransform(9.925,157.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1140A0").s().p("AgtAuIAAhbIBbAAIAABbg");
	this.shape_40.setTransform(-7.2,157);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1140A0").s().p("AgjAkIAAhHIBHAAIAABHg");
	this.shape_41.setTransform(-24.35,157);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1140A0").s().p("AgZAaIAAgzIAzAAIAAAzg");
	this.shape_42.setTransform(-41.45,157);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1140A0").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape_43.setTransform(-58.6,157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35}]}).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[]},1).wait(83));

	// bottom_square
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1140A0").s().p("AhfBhIAAjBIC/AAIAADBg");
	this.shape_44.setTransform(78.275,195.15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1140A0").s().p("AhWBXIAAitICtAAIAACtg");
	this.shape_45.setTransform(61.125,195.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1140A0").s().p("AhMBNIAAiaICZAAIAACag");
	this.shape_46.setTransform(44.025,195.15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1140A0").s().p("AhDBEIAAiHICHAAIAACHg");
	this.shape_47.setTransform(26.875,195.15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1140A0").s().p("Ag5A6IAAh0IBzAAIAAB0g");
	this.shape_48.setTransform(9.775,195.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1140A0").s().p("AgwAxIAAhhIBhAAIAABhg");
	this.shape_49.setTransform(-7.375,195.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1140A0").s().p("AgmAnIAAhOIBNAAIAABOg");
	this.shape_50.setTransform(-24.525,195.15);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1140A0").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_51.setTransform(-41.625,195.15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1140A0").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_52.setTransform(-58.775,195.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44}]}).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[]},1).wait(83));

	// top_line
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1140A0").s().p("AlSBgIgBi+IKlAAIACC+g");
	this.shape_53.setTransform(130.35,118.95);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1140A0").s().p("AkoBgIgBi+IJTAAIAAC+g");
	this.shape_54.setTransform(109.075,118.95);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1140A0").s().p("AkABgIAAi+IIAAAIABC+g");
	this.shape_55.setTransform(87.85,118.95);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1140A0").s().p("AjWBgIgBi+IGuAAIABC+g");
	this.shape_56.setTransform(66.575,118.95);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1140A0").s().p("AitBgIgBi+IFcAAIABC+g");
	this.shape_57.setTransform(45.35,118.95);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1140A0").s().p("AiEBgIAAi+IEJAAIAAC+g");
	this.shape_58.setTransform(24.075,118.95);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1140A0").s().p("AhbBgIAAi+IC3AAIAAC+g");
	this.shape_59.setTransform(2.8,118.95);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1140A0").s().p("AgyBgIAAi+IBkAAIABC+g");
	this.shape_60.setTransform(-18.425,118.95);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1140A0").s().p("AgJBgIAAi+IASAAIAAC+g");
	this.shape_61.setTransform(-39.7,118.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53}]}).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[]},1).wait(83));

	// middle_line
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1140A0").s().p("AlTBgIAAi/IKnAAIAAC/g");
	this.shape_62.setTransform(130.45,157.025);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1140A0").s().p("AkpBgIAAi/IJTAAIAAC/g");
	this.shape_63.setTransform(109.2,157.025);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1140A0").s().p("AkABgIAAi/IIBAAIAAC/g");
	this.shape_64.setTransform(87.925,157.025);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1140A0").s().p("AjWBgIAAi/IGtAAIAAC/g");
	this.shape_65.setTransform(66.65,157.025);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1140A0").s().p("AitBgIAAi/IFbAAIAAC/g");
	this.shape_66.setTransform(45.375,157.025);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1140A0").s().p("AiDBgIAAi/IEHAAIAAC/g");
	this.shape_67.setTransform(24.125,157.025);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1140A0").s().p("AhaBgIAAi/IC1AAIAAC/g");
	this.shape_68.setTransform(2.85,157.025);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1140A0").s().p("AgwBgIAAi/IBhAAIAAC/g");
	this.shape_69.setTransform(-18.425,157.025);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1140A0").s().p("AgHBgIAAi/IAPAAIAAC/g");
	this.shape_70.setTransform(-39.7,157.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62}]}).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[]},1).wait(83));

	// bottom_line
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#1140A0").s().p("AlSBhIAAjBIKlAAIAADBg");
	this.shape_71.setTransform(130.575,194.975);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1140A0").s().p("AkpBhIAAjBIJTAAIAADBg");
	this.shape_72.setTransform(109.325,194.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1140A0").s().p("AkABhIAAjBIIAAAIAADBg");
	this.shape_73.setTransform(88.05,194.975);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1140A0").s().p("AjWBhIAAjBIGtAAIAADBg");
	this.shape_74.setTransform(66.8,194.975);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#1140A0").s().p("AitBhIAAjBIFbAAIAADBg");
	this.shape_75.setTransform(45.525,194.975);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1140A0").s().p("AiDBhIAAjBIEHAAIAADBg");
	this.shape_76.setTransform(24.25,194.975);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1140A0").s().p("AhaBhIAAjBIC1AAIAADBg");
	this.shape_77.setTransform(2.975,194.975);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1140A0").s().p("AgwBhIAAjBIBhAAIAADBg");
	this.shape_78.setTransform(-18.275,194.975);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#1140A0").s().p("AgHBhIAAjBIAPAAIAADBg");
	this.shape_79.setTransform(-39.55,194.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71}]}).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[]},1).wait(83));

	// phone_frame
	this.instance_6 = new lib.phone_frame();
	this.instance_6.setTransform(-26.4,123.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).wait(60).to({_off:true},1).wait(23));

	// top_line
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#1140A0").s().p("AqZCTIAAklIU0AAIAAElg");
	this.shape_80.setTransform(97.6,29.175);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#1140A0").s().p("AtKCTIAAklIaVAAIAAElg");
	this.shape_81.setTransform(103.5,29.175);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#1140A0").s().p("As/CLIAAkVIZ+AAIAAEVg");
	this.shape_82.setTransform(90.3,28.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80}]}).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[]},1).wait(89));

	// man_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_10 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");
	var mask_graphics_68 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:-26.8,y:122.8}).wait(58).to({graphics:mask_graphics_68,x:-26.8,y:122.8}).wait(1).to({graphics:null,x:0,y:0}).wait(23));

	// dot_wht
	this.instance_7 = new lib.dot_wht();
	this.instance_7.setTransform(-47.8,198);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({y:188.8},3,cjs.Ease.quadOut).to({y:192.4},3,cjs.Ease.quadOut).wait(49).to({_off:true},1).wait(23));

	// dot_wht
	this.instance_8 = new lib.dot_wht();
	this.instance_8.setTransform(-27,198);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},0).to({y:188.8},3,cjs.Ease.quadOut).to({y:192.4},3,cjs.Ease.quadOut).wait(47).to({_off:true},1).wait(23));

	// dot_wht
	this.instance_9 = new lib.dot_wht();
	this.instance_9.setTransform(-6.6,198);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).to({y:188.8},3,cjs.Ease.quadOut).to({y:192.4},3,cjs.Ease.quadOut).wait(45).to({_off:true},1).wait(23));

	// dr_head
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1140A0").s().p("AivD7QhJhJAAhnIAAiVQAAhnBJhJQBJhJBmAAQBnAABJBJQBJBJAABnIAACVQAABnhJBJQhJBJhnAAQhmAAhJhJg");
	this.shape_83.setTransform(-26.925,279.375);
	this.shape_83._off = true;

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#1140A0").s().p("AhxEaQhVgtgdhdQgchOAEhWQAEhbAshJQAuhWBdgdQBcgcBWAuQBWAtAcBdQAcBOgFBWQgDBbgtBKQgtBVhdAdQgjALgiAAQg3AAg2gdg");
	this.shape_84.setTransform(-25.4434,95.425);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1140A0").s().p("AhEExQhfgbgxhWQgwhOAHhgQAGhRAZhLQAaheBWgxQBWgxBdAaQBgAaAwBXQAxBPgIBfQgGBRgZBLQgaBfhVAwQg4Agg7AAQggAAghgJg");
	this.shape_85.setTransform(-24.3686,95.4636);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1140A0").s().p("AgqE+QhkgPg9hRQg9hQAKhlQAIhLAMhLQAOhkBSg+QBRg9BkAPQBlAPA8BRQA9BRgKBkQgIBMgMBLQgOBkhSA9QhBAxhNAAQgTAAgUgDg");
	this.shape_86.setTransform(-23.7245,95.4921);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#1140A0").s().p("AghFDQhmgLhBhQQhBhQALhnIAQiVQAKhmBRhBQBQhBBlALQBnAKBABRQBBBQgLBmIgQCVQgKBnhQBBQhFA3hUAAIgdgBg");
	this.shape_87.setTransform(-23.5245,95.4939);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#1140A0").s().p("AhMEtQhdgegthXQgthPAHheQAFhTAchKQAehdBXguQBXgtBcAeQBeAeAtBXQAtBPgIBeQgFBSgcBLQgdBdhYAtQg0Acg2AAQgkAAglgMg");
	this.shape_88.setTransform(-24.5685,95.4591);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1140A0").s().p("AhwEbQhVgtgdhdQgdhNAEhXQAEhbAshJQAthWBdgdQBcgdBWAtQBWAtAdBdQAcBOgEBWQgEBbgsBKQgtBWhdAdQgjALgiAAQg4AAg1gcg");
	this.shape_89.setTransform(-25.4245,95.4344);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#1140A0").s().p("AiLENQhQg6gRhhQgQhMADhRQAChgA4hKQA6hQBhgQQBggRBQA6QBRA5AQBiQAQBMgDBRQgCBgg4BKQg5BQhiAQQgVAEgTAAQhJAAg/gtg");
	this.shape_90.setTransform(-26.0688,95.4152);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#1140A0").s().p("AifEDQhMhCgIhkQgGhMABhNQABhkBBhJQBChNBlgHQBjgHBMBCQBMBCAIBlQAGBMgBBNQgBBjhBBKQhCBMhlAHIgRABQhZAAhFg8g");
	this.shape_91.setTransform(-26.55,95.3953);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#1140A0").s().p("AirD9QhKhHgBhmQgChMAAhLQAAhmBHhJQBIhKBmgCQBlgBBKBHQBKBHABBmQACBMAABLQAABmhIBJQhGBKhnACIgFAAQhiAAhIhGg");
	this.shape_92.setTransform(-26.825,95.3762);

	var maskedShapeInstanceList = [this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_83}]},10).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_83}]},3).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_83}]},38).to({state:[]},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_83).wait(10).to({_off:false},0).wait(1).to({y:197.825},0).wait(1).to({y:139.575},0).wait(1).to({y:104.625},0).wait(1).to({y:92.975},0).wait(1).to({y:93.775},0).wait(1).to({y:94.575},0).wait(1).to({y:95.375},0).wait(3).to({_off:true},1).wait(9).to({_off:false},0).wait(38).to({_off:true},1).wait(23));

	// stethascope_02_wht
	this.instance_10 = new lib.stethascope_02_wht();
	this.instance_10.setTransform(-4.4,335.05,0.5478,0.5478,0,0,0,0,-4.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).to({y:143.05},4).to({regX:-1.8,regY:-33.8,rotation:3.7052,x:-5.35,y:130.2},3).to({regX:0,regY:-4.5,rotation:0,x:-4.4,y:146.25},2).wait(49).to({_off:true},1).wait(23));

	// stethascope_01_wht
	this.instance_11 = new lib.stethascope_01_wht();
	this.instance_11.setTransform(-45.4,333.45,0.6883,0.6883,0,0,0,0,-1);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10).to({_off:false},0).to({y:141.45},4).to({regX:-0.1,regY:-28.8,rotation:-5.2405,y:125.5},3).to({regX:0,regY:-1,rotation:0,y:144.65},2).wait(49).to({_off:true},1).wait(23));

	// dr_body
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#1140A0").s().p("AnFIJQABgCgBhkQgCiRAEiWIAEjnQAAiiB4h8QB5h+CgAAIBgAAQCgAAB7B+QB6B8AACiIAAJ0g");
	this.shape_93.setTransform(-27.0725,361.55);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1140A0").s().p("AnFIoQABgBgBiEQgCixAEiVIAEjoQAAihB4h9QB5h+CgAAIBgAAQCgAAB7B+QB6B9AAChIAAKzg");
	this.shape_94.setTransform(-27.0725,280.35);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#1140A0").s().p("AnFI/QABgBgBibQgCjIAEiVIAEjnQAAiiB4h9QB5h9CggBIBgAAQCgABB7B9QB6B9AACiIAALgg");
	this.shape_95.setTransform(-27.0725,222.35);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#1140A0").s().p("AnFJMQABgBgBioQgCjWAEiUIAEjnQAAiiB4h9QB5h+CgAAIBgAAQCgAAB7B+QB6B9AACiIAAL6g");
	this.shape_96.setTransform(-27.0725,187.55);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1140A0").s().p("AnFJQQABgBgBisQgCjbAEiUIAEjnQAAiiB4h8QB5h/CgABIBgAAQCggBB7B/QB6B8AACiIAAMDg");
	this.shape_97.setTransform(-27.0725,175.95);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1140A0").s().p("AnFI5QABgBgBiVQgCjCAEiVIAEjnQAAiiB4h9QB5h+CgAAIBgAAQCgAAB7B+QB6B+AAChIAALUg");
	this.shape_98.setTransform(-27.0725,176.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#1140A0").s().p("AnFIhQABgCgBh8QgCipAEiWIAEjnQAAiiB4h8QB5h/CgABIBgAAQCggBB7B/QB6B8AACiIAAKkg");
	this.shape_99.setTransform(-27.0725,177);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1140A0").s().p("AnFIIQABAAgBhlQgCiRAEiWIAEjnQAAiiB4h9QB5h+CgAAIBgAAQCgAAB7B+QB6B+AAChIAAJzg");
	this.shape_100.setTransform(-27.0725,177.55);

	var maskedShapeInstanceList = [this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_93}]},10).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_100}]},51).to({state:[]},1).wait(23));

	// yellow_masdk (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_8 = new cjs.Graphics().p("AqvD6IAAnzIVfAAIAAHzg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AqvD6IAAnzIVfAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_1_graphics_8,x:281.4,y:226.6}).wait(60).to({graphics:mask_1_graphics_68,x:281.4,y:226.6}).wait(1).to({graphics:null,x:0,y:0}).wait(23));

	// Yellow_bar
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F5B846").s().p("ApdC2IGClsIM4AAIABFtg");
	this.shape_101.setTransform(411.6,224.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F5B846").s().p("ApdC2IGClsIM5AAIAAFtg");
	this.shape_102.setTransform(404.8,224.8);

	var maskedShapeInstanceList = [this.shape_101,this.shape_102];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_101,p:{x:411.6}}]},8).to({state:[{t:this.shape_102,p:{x:404.8}}]},1).to({state:[{t:this.shape_101,p:{x:384.5}}]},1).to({state:[{t:this.shape_101,p:{x:350.6}}]},1).to({state:[{t:this.shape_102,p:{x:316.7}}]},1).to({state:[{t:this.shape_101,p:{x:296.4}}]},1).to({state:[{t:this.shape_102,p:{x:289.6}}]},1).to({state:[{t:this.shape_102,p:{x:289.6}}]},54).to({state:[]},1).wait(23));

	// phone_top
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#1140A0").s().p("AlPAcIAAg3IKfAAIAAA3g");
	this.shape_103.setTransform(277.2,18);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#1140A0").s().p("AlPBzIAAjlIKfAAIAADlg");
	this.shape_104.setTransform(277.2,26.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#1140A0").s().p("AlPCQIAAkfIKfAAIAAEfg");
	this.shape_105.setTransform(277.2,29.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1140A0").s().p("AlPCHIAAkNIKfAAIAAENg");
	this.shape_106.setTransform(277.2,28.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#1140A0").s().p("AlPCCIAAkDIKfAAIAAEDg");
	this.shape_107.setTransform(277.2,28.175);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1140A0").s().p("AlPCAIAAj/IKfAAIAAD/g");
	this.shape_108.setTransform(277.2,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_103}]},8).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_108}]},55).to({state:[]},1).wait(23));

	// phone_frame
	this.instance_12 = new lib.phone_frame();
	this.instance_12.setTransform(530.8,123.6,1.3313,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regY:0.4,scaleX:1.3247,x:525.75,y:124},0).wait(1).to({scaleX:1.3092,x:513.9},0).wait(1).to({scaleX:1.2832,x:494.05},0).wait(1).to({scaleX:1.2456,x:465.3},0).wait(1).to({scaleX:1.1959,x:427.3},0).wait(1).to({scaleX:1.1354,x:381.05},0).wait(1).to({scaleX:1.068,x:329.55},0).wait(1).to({regY:0,scaleX:1,x:277.6,y:123.6},0).wait(60).to({_off:true},1).wait(23));

	// dot_wht
	this.instance_13 = new lib.dot_wht();
	this.instance_13.setTransform(256.4,196.4);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(13).to({_off:false},0).to({y:184.4},3).to({y:192.4},3).wait(49).to({_off:true},1).wait(23));

	// dot_wht
	this.instance_14 = new lib.dot_wht();
	this.instance_14.setTransform(277.2,196.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15).to({_off:false},0).to({y:184.4},3).to({y:192.4},3).wait(47).to({_off:true},1).wait(23));

	// dot_wht
	this.instance_15 = new lib.dot_wht();
	this.instance_15.setTransform(297.6,196.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(17).to({_off:false},0).to({y:184.4},3).to({y:192.4},3).wait(45).to({_off:true},1).wait(23));

	// man_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_8 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");
	var mask_2_graphics_68 = new cjs.Graphics().p("ApPREQgUAAAAgUMAAAghfQAAgUAUAAISfAAQAUAAAAAUMAAAAhfQAAAUgUAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_2_graphics_8,x:280.4,y:122.8}).wait(60).to({graphics:mask_2_graphics_68,x:280.4,y:122.8}).wait(1).to({graphics:null,x:0,y:0}).wait(23));

	// head
	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1140A0").s().p("AiyDuQhKhLAAhoIAAh0QAAhpBKhKQBKhLBoABQBpgBBKBLQBKBKAABpIAAB0QAABohKBLQhKBJhpABQhogBhKhJg");
	this.shape_109.setTransform(276.95,264.75);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#1140A0").s().p("AiyDuQhKhLAAhpIAAhzQAAhpBKhLQBKhJBoAAQBpAABKBJQBKBLAABpIAABzQAABphKBLQhKBJhpAAQhoAAhKhJg");
	this.shape_110.setTransform(276.95,203.4);
	this.shape_110._off = true;

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#1140A0").s().p("AiyDuQhKhLAAhoIAAh1QAAhoBKhLQBKhJBoAAQBpAABKBJQBKBLAABoIAAB1QAABohKBLQhKBJhpAAQhoAAhKhJg");
	this.shape_111.setTransform(276.95,155.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#1140A0").s().p("AiyDtQhKhJAAhqIAAh0QAAhoBKhLQBKhJBogBQBpABBKBJQBKBLAABoIAAB0QAABqhKBJQhKBKhpAAQhoAAhKhKg");
	this.shape_112.setTransform(276.95,121.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#1140A0").s().p("AiyDuQhKhLAAhoIAAh0QAAhpBKhKQBKhKBoAAQBpAABKBKQBKBKAABpIAAB0QAABohKBLQhKBJhpABQhogBhKhJg");
	this.shape_113.setTransform(276.95,101.15);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#1140A0").s().p("AiyDtQhKhJAAhqIAAh0QAAhoBKhLQBKhJBogBQBpABBKBJQBKBLAABoIAAB0QAABqhKBJQhKBLhpgBQhoABhKhLg");
	this.shape_114.setTransform(276.95,94.35);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#1140A0").s().p("AijD3QhOhFgHhpIgHhzQgGhoBGhPQBFhOBpgGQBngGBOBFQBOBGAHBoIAGBzQAHBphGBOQhGBOhoAGIgRABQhdAAhHhAg");
	this.shape_115.setTransform(275.104,96.879);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#1140A0").s().p("AiZD+QhRhDgLhnIgLh0QgLhoBChRQBDhRBogKQBmgLBSBCQBRBCAKBoIAMB0QALBohCBRQhDBRhoALIgcABQhWAAhGg5g");
	this.shape_116.setTransform(273.8065,97);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#1140A0").s().p("AiSECQhThAgOhoIgOhzQgNhoBAhTQBAhSBogOQBngNBSBAQBTBAAOBoIAOBzQAOBohBBTQhABThoANQgRACgRAAQhTAAhEg1g");
	this.shape_117.setTransform(273.0321,97.05);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#1140A0").s().p("AiQEDQhUg/gOhoIgQhzQgOhoBAhTQA/hUBogOQBngOBTBAQBUA/AOBoIAPBzQAPBohABTQhABUhnAOQgTACgSAAQhRAAhEg0g");
	this.shape_118.setTransform(272.7583,97.075);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#1140A0").s().p("AicD7QhQhDgKhoIgKh0QgJhoBEhQQBDhQBogJQBngJBQBDQBRBEAIBoIAKBzQAKBohEBRQhDBQhoAJIgYABQhYAAhHg8g");
	this.shape_119.setTransform(274.2557,96.9747);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#1140A0").s().p("AimD1QhNhFgGhqIgFhzQgFhoBGhOQBHhOBogFQBngEBOBGQBNBGAGBpIAFBzQAFBphGBNQhHBOhoAEIgOABQhfAAhIhCg");
	this.shape_120.setTransform(275.45,96.8501);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#1140A0").s().p("AitDxQhLhJgChoIgDh0QgChoBIhNQBJhLBogCQBogDBMBJQBLBJACBoIADB0QACBphIBMQhJBLhoACIgHAAQhjAAhKhGg");
	this.shape_121.setTransform(276.275,96.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#1140A0").s().p("AixDuQhKhJgBhpIAAh0QgBhoBKhMQBKhJBogBQBogBBLBKQBKBKABBpIAABzQABBphKBLQhKBKhoAAIgCABQhmAAhLhKg");
	this.shape_122.setTransform(276.775,96.75);

	var maskedShapeInstanceList = [this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_109}]},8).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114,p:{y:94.35}}]},1).to({state:[{t:this.shape_114,p:{y:95.7}}]},1).to({state:[{t:this.shape_114,p:{y:96.5}}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_110}]},20).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_110}]},23).to({state:[]},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_110).wait(9).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false,y:96.75},0).wait(20).to({_off:true},1).wait(8).to({_off:false},0).wait(23).to({_off:true},1).wait(23));

	// Body
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#1140A0").s().p("AnIIgIAAp2QgBhyA2hkQAzhhBbg/QAzgkA8gVQBJgaBNAAQBQAABQAdQA8AXAzAlQBWBAAyBfQAzBiAABvIAAJ2g");
	this.shape_123.setTransform(276.95,347.125);
	this.shape_123._off = true;

	var maskedShapeInstanceList = [this.shape_123];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_123).wait(8).to({_off:false},0).wait(1).to({y:284.075},0).wait(1).to({y:234.975},0).wait(1).to({y:199.975},0).wait(1).to({y:178.925},0).wait(1).to({y:171.925},0).wait(1).to({y:175.925},0).wait(1).to({y:178.325},0).wait(1).to({y:179.125},0).wait(52).to({_off:true},1).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.9,-67.3,726.1999999999999,364.90000000000003);


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
	this.instance.setTransform(455.35,192,1,1,0,0,0,283.2,128.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(261).to({_off:false},0).wait(50).to({startPosition:84},0).to({_off:true},12).wait(37));

	// messageCare_animation
	this.instance_1 = new lib.messageCare_animation("synched",0,false);
	this.instance_1.setTransform(298.4,184.95,1,1,0,0,0,126.2,121.5);
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
p.nominalBounds = new cjs.Rectangle(0,-86.5,844.2,447.6);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},32).to({state:[]},1).to({state:[{t:this.instance}]},16).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance}]},56).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({y:5.15,mode:"independent"},4,cjs.Ease.quadOut).to({y:-16.35},5,cjs.Ease.quadOut).to({y:-0.85},8,cjs.Ease.quadInOut).wait(56).to({_off:true},1).wait(2));

	// background_badge
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkGGkQhBAAguguQguguAAhBIAAoNQAAhBAuguQAuguBBAAIINAAQBBAAAuAuQAuAuAABBIAAINQAABBguAuQgtAuhCAAg");
	this.shape_3.setTransform(1.2,-0.85);

	this.instance_1 = new lib.badge_BG("synched",0);
	this.instance_1.setTransform(1.2,-0.85);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_3}]},32).to({state:[]},1).to({state:[{t:this.instance_1}]},16).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},56).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({y:5.15,mode:"independent"},4,cjs.Ease.quadOut).to({y:-16.35},5,cjs.Ease.quadOut).to({y:-0.85},8,cjs.Ease.quadInOut).wait(56).to({_off:true},1).wait(2));

	// bottom_shadow
	this.instance_2 = new lib.bottom_shadow_1();
	this.instance_2.setTransform(0.5,66,0.1923,0.1923);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.1,regY:0.1,scaleX:0.9107,scaleY:0.9107,x:0.6,y:66.1,alpha:1},16,cjs.Ease.quadInOut).wait(16).to({_off:true},1).wait(16).to({_off:false},0).to({scaleX:1.033,scaleY:1.033},4,cjs.Ease.quadOut).to({scaleX:0.6731,scaleY:0.6731,y:66.05,alpha:0.8516},5,cjs.Ease.quadOut).to({scaleX:0.9107,scaleY:0.9107,y:66.1,alpha:1},8,cjs.Ease.quadInOut).wait(56).to({_off:true},1).wait(2));

	// background_gradient
	this.instance_3 = new lib.background_gradient();
	this.instance_3.setTransform(0.4,-0.15,0.8224,0.8224,0,0,0,-48.7,-64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-48.8,scaleX:2.043,scaleY:2.043,x:0.35,y:-0.25},16,cjs.Ease.quadInOut).wait(16).to({_off:true},1).wait(16).to({_off:false},0).to({y:5.75},4,cjs.Ease.quadOut).to({y:-15.75},5,cjs.Ease.quadOut).to({y:-0.25},8,cjs.Ease.quadInOut).wait(56).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.2,-216.4,364.1,436.1);


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
	this.instance.setTransform(90.9,412.6,1,1,0,0,0,1.7,-42.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1,startPosition:16},16).to({_off:true},34).wait(310));

	// BSWH_logo_txt
	this.instance_1 = new lib.BSWH_Txt();
	this.instance_1.setTransform(299,419.05,1.1,1.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},16).wait(29).to({alpha:0},4).to({_off:true},1).wait(310));

	// Layer_2
	this.instance_2 = new lib.shdow_bitmap();
	this.instance_2.setTransform(90.05,476.15,0.3226,0.3226);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).to({regX:0.1,scaleX:0.9644,scaleY:0.9644,x:90.1,alpha:0.6016},5,cjs.Ease.quadOut).to({regX:0,scaleX:0.774,scaleY:0.774,y:476.25,alpha:0.5},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:90.05,y:476.15,alpha:0.5703},9,cjs.Ease.quadInOut).to({alpha:0},12).to({_off:true},1).wait(278));

	// BSWH_Badge
	this.instance_3 = new lib.bswh_badge("single",0);
	this.instance_3.setTransform(89.55,413.1,1.115,1.115,0,0,0,0.5,0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50).to({_off:false},0).to({y:420.1},5,cjs.Ease.quadOut).to({y:396.1,mode:"synched",loop:false},5,cjs.Ease.quadInOut).to({y:413.1,startPosition:8},9,cjs.Ease.quadInOut).wait(25).to({startPosition:49},0).wait(45).to({startPosition:49},0).wait(45).to({startPosition:49},0).wait(74).to({startPosition:49},0).wait(50).to({startPosition:49},0).wait(14).to({mode:"single"},0).to({y:468.2},5,cjs.Ease.quadOut).wait(33));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.6,171.2,572.9,534.7);


// stage content:
(lib.BSWH_EllisCounty_970x250_v01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EBxwgODIAAcHMjjfAAAIAA8Hg");
	this.shape.setTransform(969.9965,249.9994,1.3324,2.7778);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// txt_takeHealthcare
	this.instance = new lib.endFrame_txt("single",0);
	this.instance.setTransform(357.85,304.5,1.9057,1.9057,0,0,0,-169.3,14.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(328).to({_off:false},0).to({alpha:1},5).wait(27));

	// cta_btn
	this.instance_1 = new lib.cta_btn("single",11);
	this.instance_1.setTransform(1461.95,352.15,1.6423,1.6423,0,0,0,5.8,0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(335).to({_off:false},0).to({scaleX:1.6424,scaleY:1.6424,alpha:1},5).wait(20));

	// Layer_7
	this.instance_2 = new lib.endFrame_tapInto("synched",0,false);
	this.instance_2.setTransform(856.8,138.9,1.5695,1.5695,0,0,0,42.3,145.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(326).to({_off:false},0).wait(33).to({mode:"single",startPosition:33},0).wait(1));

	// BSWH_Element_animation
	this.instance_3 = new lib.BSWH_Element_animation("synched",0,false);
	this.instance_3.setTransform(473.1,255.55,1.8978,1.8978,0,0,0,258.4,413.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47).to({startPosition:47},0).to({x:537.1,startPosition:50},3).wait(310));

	// Graphic_Text_animations
	this.instance_4 = new lib.Graphic_Text_animations("synched",0,false);
	this.instance_4.setTransform(322.15,263.95,2.3307,2.3307,0,0,0,189.1,417.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(360));

	// graphic_icon_animations
	this.instance_5 = new lib.graphic_icon_animations("synched",0,false);
	this.instance_5.setTransform(1469.75,252.05,1.4532,1.4532,0,0,0,303.9,184);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(360));

	// Layer_13
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("EBLNBAuMiSCAAAIigAAIo3AAIAA6VMAAAhPPIAA33II3AAICgAAMCSCAAAIHAAAIAAX3MAAABPPIAAaVg");
	this.shape_1.setTransform(1422.7,257.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.169)").s().p("EhSyBAfMAAAiA9MCllAAAMAAACA9g");
	this.shape_2.setTransform(1428.525,258.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.333)").s().p("EhTZBAQMAAAiAfMCmzAAAMAAACAfg");
	this.shape_3.setTransform(1434.35,259.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.502)").s().p("EhT/BABMAAAiABMCn/AAAMAAACABg");
	this.shape_4.setTransform(1440.175,260.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.667)").s().p("EhUlA/yMAAAh/jMCpMAAAMAAAB/jg");
	this.shape_5.setTransform(1446,261.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.831)").s().p("EhVMA/jMAAAh/FMCqZAAAMAAAB/Fg");
	this.shape_6.setTransform(1451.825,262.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EBStA/UMilMAAAIixAAIgjAAIAA5tMAAAhPPIAA1rIAjAAICxAAMClMAAAIDHAAIAAVrMAAABPPIAAZtg");
	this.shape_7.setTransform(1457.65,262.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},47).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},4).wait(303));

	// Layer_1
	this.instance_6 = new lib.Frame_01_txt("synched",0,false);
	this.instance_6.setTransform(946.1,254.1,1.3493,1.3493,0,0,0,248.2,-26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},57).wait(303));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(808.6,-351.3,1446.2000000000003,1161.1);
// library properties:
lib.properties = {
	id: 'AAADD9FF39904B44B9D7AC3708DD0A32',
	width: 1940,
	height: 500,
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
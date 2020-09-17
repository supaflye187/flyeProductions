(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib.bar_img = function() {
	this.initialize(img.bar_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,513,772);


(lib.purpleCTABtn = function() {
	this.initialize(img.purpleCTABtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,38);


(lib.server = function() {
	this.initialize(img.server);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,451,280);


(lib.server_image = function() {
	this.initialize(img.server_image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,403);


(lib.shoppingBG = function() {
	this.initialize(img.shoppingBG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,474,664);


(lib.townsquare1 = function() {
	this.initialize(img.townsquare1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,480);


(lib.woman_px = function() {
	this.initialize(img.woman_px);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,397);// helper functions:

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


(lib.txt_shortDrive = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgrDkIgihkIgiBkIgMAAIgsh8IAPAAIAkBnIAihoIALAAIAiBoIAjhnIAOAAIgrB8gAEaDjIAAgSIAQAAIAAASgADMDjIAAgxIg0hKIARAAIAqA9IAqg9IAQAAIgzBKIAAAxgACDDjIgOggIhDAAIgPAgIgOAAIA4h8IANAAIA4B8gABvC2Igcg/IgcA/IA4AAgAi/DjIgOggIhDAAIgPAgIgOAAIA4h8IANAAIA4B8gAjTC2Igcg/IgcA/IA4AAgAlOAaQgRgTAAgZQAAgaARgTQASgTAcAAQAcAAASATQARASAAAbQAAAZgSATQgSATgbAAQgcAAgSgTgAlDg2QgOAOAAAWQAAAUAOAPQAOAPAVAAQAVAAAOgPQANgOAAgVQAAgVgNgPQgOgPgVAAQgVAAgOAPgApNAZIAIgLQAUASAXAAQAMAAAIgGQAHgGAAgJQAAgJgGgEQgHgGgTgEQgWgFgJgHQgKgJAAgPQAAgPALgJQAMgKARAAQAZAAATAQIgIAKQgRgNgTAAQgMAAgHAGQgHAFAAAJQAAAJAGAFQAHAGAUAEQAVAFAKAIQAJAIAAANQAAAQgMAKQgLAJgTAAQgcAAgWgTgAGgAsIg1h8IAQAAIAsBqIAshqIAPAAIg1B8gAH0ArIAAh7IBaAAIAAANIhMAAIAAAqIBEAAIAAANIhEAAIAAAqIBMAAIAAANgAFKArIAAh7IAOAAIAAB7gAEkArIgkgvIgjAAIAAAvIgOAAIAAh7IA1AAQAUAAANAKQAMAKAAARQAAAPgKAKQgJAIgPADIAmAygADdgRIAmAAQAOAAAJgHQAIgHAAgLQAAgMgIgHQgIgGgPAAIgmAAgABLArIAAh7IArAAQAdAAASASQASARAAAbQAAAZgSASQgSASgdAAgABZAeIAdAAQAXAAAOgOQAOgOAAgUQAAgVgOgOQgOgOgXAAIgdAAgAgvArIAAhuIgqAAIAAgNIBhAAIAAANIgpAAIAABugAh0ArIgkgvIgjAAIAAAvIgOAAIAAh7IA1AAQAUAAANAKQAMAKAAARQAAAPgKAKQgJAIgPADIAmAygAi7gRIAmAAQAOAAAJgHQAIgHAAgLQAAgMgIgHQgIgGgPAAIgmAAgAmEArIAAg3IhIAAIAAA3IgOAAIAAh7IAOAAIAAA3IBIAAIAAg3IAOAAIAAB7gAg5iUIAGgIQAOANARAAQAJAAAGgEQAFgFAAgHQAAgGgEgEQgGgEgNgDQgQgEgHgFQgIgGAAgLQAAgLAJgHQAIgHANAAQASAAANALIgGAIQgLgKgOAAQgJAAgFAEQgGAEAAAHQAAAHAFADQAGAEAOADQAPAEAGAGQAIAGAAAKQAAAMgJAHQgIAHgNAAQgVAAgQgOgAiGiQQgLgKAAgTIAAg1IAKAAIAAA0QAAAPAIAIQAHAIANAAQANAAAHgIQAHgIAAgOIAAg1IALAAIAAA0QAAATgLALQgKAKgRAAQgRAAgKgKgAjaiWIAHgGQAJANAMAAQAIAAAFgGQAFgGAAgKIAAg9IAKAAIAAA9QAAAPgIAIQgIAIgMAAQgSAAgKgQgADRiHIgLgYIgxAAIgLAYIgKAAIAphcIAKAAIApBcgADCioIgUgvIgVAvIApAAgAAxiHIAAhRIgfAAIAAgKIBHAAIAAAKIgeAAIAABRg");
	this.shape.setTransform(83.775,-201.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_shortDrive, new cjs.Rectangle(24.8,-224.8,118.00000000000001,45.70000000000002), null);


(lib.txt_shopping = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(52.85,-52.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_shopping, new cjs.Rectangle(-63.1,-76.7,231.9,49.300000000000004), null);


(lib.txt_highestStandard = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-8.925,-4.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_highestStandard, new cjs.Rectangle(-206.1,-32.2,394.4,54.800000000000004), null);


(lib.txt_escape = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(36.05,-40.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_escape, new cjs.Rectangle(-66.6,-65.6,205.29999999999998,49.8), null);


(lib.STX_Logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(192.4743,-437.9588,0.9731,0.9731);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.STX_Logo, new cjs.Rectangle(-33.8,-499.4,452.6,122.89999999999998), null);


(lib.townSquare = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.townsquare1();
	this.instance.setTransform(-458.05,-305.35,1.2723,1.2723);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.townSquare, new cjs.Rectangle(-458,-305.3,916.1,610.7), null);


(lib.woman_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.woman_px();
	this.instance.setTransform(-115.6,-211.5,1.0655,1.0655);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.woman_mc, new cjs.Rectangle(-115.6,-211.5,231.2,423), null);


(lib.shoppingBG_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shoppingBG();
	this.instance.setTransform(-215,-301.15,0.9072,0.9072);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shoppingBG_mc, new cjs.Rectangle(-215,-301.1,430,602.3), null);


(lib.server_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.server();
	this.instance.setTransform(-444.6,-276.05,1.9718,1.9718);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.server_mc, new cjs.Rectangle(-444.6,-276,889.3,552.1), null);


(lib.server_img = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.server_image();
	this.instance.setTransform(-448,-298.95,1.4836,1.4836);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-448,-298.9,896.1,597.9);


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

	// Layer_5
	this.instance = new lib.purpleCTABtn();
	this.instance.setTransform(-72,-5,0.6492,0.6492);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("As+DrIAAnVIZ9AAIAAHVg");
	this.shape.setTransform(10.025,6.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-73.1,-17,166.3,47.1), null);


(lib.bar_img_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bar_img();
	this.instance.setTransform(-256.5,-386);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bar_img_1, new cjs.Rectangle(-256.5,-386,513,772), null);


(lib.ShoppingWoman_PX = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.woman_mc();
	this.instance.setTransform(122.6,330.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:0.1,scaleX:1.4625,scaleY:1.4625,x:139.1,y:313.45},143).wait(1));

	// Layer_2
	this.instance_1 = new lib.shoppingBG_mc();
	this.instance_1.setTransform(128,300.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.2456,scaleY:1.2456,x:152.05,y:286.2},143).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.7,-88.9,535.6,750.3);


(lib.server_PX = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.instance = new lib.server_mc();
	this.instance.setTransform(380.55,311.05,0.9431,0.9431);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0714,scaleY:1.0714,x:326.1,y:306.55},112).to({_off:true},1).wait(247));

	// Layer_8
	this.instance_1 = new lib.server_img();
	this.instance_1.setTransform(270.25,280.95,0.9465,0.9465);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:0.1,scaleX:1.0758,scaleY:1.0758,x:224.7,y:290.45},112).to({_off:true},1).wait(247));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286,-39.3,1089.2,664.5999999999999);


// stage content:
(lib.STX_TripAdvisor_728x90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [359];
	// timeline functions:
	this.frame_359 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(359).call(this.frame_359).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg4tgG3MBxbAAAIAANvMhxbAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// ctaBtn
	this.instance = new lib.ctaBtn();
	this.instance.setTransform(632.85,44.8,0.8637,0.8637,0,0,0,11.1,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// gradient_layer
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(127,56,95,0)","#7F385F","#7F385F"],[0.09,0.243,1],-157.9,0,134,0).s().p("A06KAIAAz/MAp1AAAIAAT/g");
	this.shape_1.setTransform(623.8,61.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));

	// Logo
	this.instance_1 = new lib.STX_Logo();
	this.instance_1.setTransform(150.05,300,0.5837,0.5837,0,0,0,0.1,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(332).to({_off:false},0).to({alpha:1},13).wait(15));

	// txt_shortDrive
	this.instance_2 = new lib.txt_shortDrive();
	this.instance_2.setTransform(150,300,1.264,1.264);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(275).to({_off:false},0).to({alpha:1},14).wait(36).to({alpha:0},13).wait(22));

	// multiply_layer
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.4)").s().p("EgZfAxSMAAAhikMAzAAAAMAAABikg");
	this.shape_2.setTransform(364.0024,44.9956,2.2297,0.1427);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(263).to({_off:false},0).wait(97));

	// town_square
	this.instance_3 = new lib.townSquare();
	this.instance_3.setTransform(260.15,48.1,0.683,0.683,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(263).to({_off:false},0).to({regX:0.2,regY:0.2,scaleX:0.6708,scaleY:0.6708,x:261.15,y:51.6,alpha:1},12).to({regX:0.5,regY:0.4,scaleX:0.5916,scaleY:0.5916,x:268.4,y:96.35},84).wait(1));

	// white_Box
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2,1,1).p("AycleMAk5AAAIAAK9Mgk5AAAg");
	this.shape_3.setTransform(-118.825,45.175);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(182).to({_off:false},0).wait(1).to({x:-92.425},0).wait(1).to({x:-67.675},0).wait(1).to({x:-44.475},0).wait(1).to({x:-22.925},0).wait(1).to({x:-2.925},0).wait(1).to({x:15.475},0).wait(1).to({x:32.225},0).wait(1).to({x:47.425},0).wait(1).to({x:61.025},0).wait(1).to({x:73.025},0).wait(1).to({x:83.375},0).wait(1).to({x:92.175},0).wait(1).to({x:99.375},0).wait(1).to({x:104.975},0).wait(1).to({x:108.975},0).wait(1).to({x:111.375},0).wait(1).to({x:112.175},0).wait(161));

	// txt_shopping
	this.instance_4 = new lib.txt_escape();
	this.instance_4.setTransform(-159.35,83.45,0.9043,0.9043);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(189).to({_off:false},0).to({x:71.65,alpha:1},17,cjs.Ease.quadOut).wait(154));

	// bar
	this.instance_5 = new lib.bar_img_1("synched",0,false);
	this.instance_5.setTransform(273.85,-119.9,1.056,1.056,0,0,0,0.4,0.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(181).to({_off:false},0).to({regY:0.2,y:-113.95,alpha:1},11).to({regY:0.3,y:-51.9},114).wait(54));

	// white_Box
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2,1,1).p("A7ZlDMA2zAAAIAAKHMg2zAAAg");
	this.shape_4.setTransform(707.075,44.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2,1,1).p("A7wlDMA3hAAAIAAKHMg3hAAAg");
	this.shape_5.setTransform(671.7,44.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2,1,1).p("A8GlDMA4NAAAIAAKHMg4NAAAg");
	this.shape_6.setTransform(638.225,44.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2,1,1).p("A8blDMA43AAAIAAKHMg43AAAg");
	this.shape_7.setTransform(606.65,44.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,1,1).p("A8vlDMA5fAAAIAAKHMg5fAAAg");
	this.shape_8.setTransform(577,44.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2,1,1).p("A9BlDMA6DAAAIAAKHMg6DAAAg");
	this.shape_9.setTransform(549.275,44.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2,1,1).p("A9SlDMA6lAAAIAAKHMg6lAAAg");
	this.shape_10.setTransform(523.475,44.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2,1,1).p("A9ilDMA7FAAAIAAKHMg7FAAAg");
	this.shape_11.setTransform(499.55,44.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(2,1,1).p("A9wlDMA7hAAAIAAKHMg7hAAAg");
	this.shape_12.setTransform(477.55,44.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(2,1,1).p("A99lDMA77AAAIAAKHMg77AAAg");
	this.shape_13.setTransform(457.475,44.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+JlDMA8TAAAIAAKHMg8TAAAg");
	this.shape_14.setTransform(439.275,44.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+UlDMA8pAAAIAAKHMg8pAAAg");
	this.shape_15.setTransform(423.05,44.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+dlDMA88AAAIAAKHMg88AAAg");
	this.shape_16.setTransform(408.7,44.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+mlDMA9NAAAIAAKHMg9NAAAg");
	this.shape_17.setTransform(396.25,44.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+tlDMA9aAAAIAAKHMg9aAAAg");
	this.shape_18.setTransform(385.75,44.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+ylDMA9lAAAIAAKHMg9lAAAg");
	this.shape_19.setTransform(377.125,44.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+2lDMA9uAAAIAAKHMg9uAAAg");
	this.shape_20.setTransform(370.45,44.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+6lDMA91AAAIAAKHMg91AAAg");
	this.shape_21.setTransform(365.675,44.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+8lDMA95AAAIAAKHMg95AAAg");
	this.shape_22.setTransform(362.775,44.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},87).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22,p:{x:362.775}}]},1).to({state:[{t:this.shape_22,p:{x:361.825}}]},1).wait(254));

	// txt_shopping
	this.instance_6 = new lib.txt_highestStandard();
	this.instance_6.setTransform(688.05,48.55,0.7433,0.7433);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(95).to({_off:false},0).to({x:348.05},19,cjs.Ease.quadOut).wait(246));

	// multiply_layer
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.2)").s().p("EgZfAxSMAAAhikMAzAAAAMAAABikg");
	this.shape_23.setTransform(363.9977,44.9956,2.2297,0.1427);
	this.shape_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(87).to({_off:false},0).wait(273));

	// server
	this.instance_7 = new lib.server_PX("synched",0);
	this.instance_7.setTransform(304.7,134.75,0.6494,0.6494,0,0,0,320.3,302.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(87).to({_off:false},0).to({scaleX:0.6564,scaleY:0.6564,x:312.9,y:123.6,alpha:1,startPosition:10},10).to({regX:320.4,regY:302.6,scaleX:0.719,scaleY:0.719,x:346.75,y:22.7,startPosition:100},90).to({_off:true},13).wait(160));

	// white_Box
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(2,1,1).p("A0KlUMAoVAAAIAAKpMgoVAAAg");
	this.shape_24.setTransform(-133.825,46.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1).to({x:-103.775},0).wait(1).to({x:-75.575},0).wait(1).to({x:-49.175},0).wait(1).to({x:-24.625},0).wait(1).to({x:-1.875},0).wait(1).to({x:19.075},0).wait(1).to({x:38.175},0).wait(1).to({x:55.475},0).wait(1).to({x:70.925},0).wait(1).to({x:84.575},0).wait(1).to({x:96.425},0).wait(1).to({x:106.425},0).wait(1).to({x:114.625},0).wait(1).to({x:120.975},0).wait(1).to({x:125.525},0).wait(1).to({x:128.275},0).wait(1).to({x:129.175},0).wait(343));

	// txt_shopping
	this.instance_8 = new lib.txt_shopping();
	this.instance_8.setTransform(-189.35,91.45,0.8884,0.8884);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({_off:false},0).to({x:73.65},17,cjs.Ease.quadOut).wait(336));

	// multiply_layer
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.2)").s().p("EgZfAxSMAAAhikMAzAAAAMAAABikg");
	this.shape_25.setTransform(363.9977,44.9956,2.2297,0.1427);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(360));

	// shopping_woman
	this.instance_9 = new lib.ShoppingWoman_PX("synched",0,false);
	this.instance_9.setTransform(265.2,215.75,1.2811,1.2811,0,0,0,128.4,299.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:128.2,regY:299.9,scaleX:1.0796,scaleY:1.0796,x:252.7,y:-39,startPosition:97},97).wait(263));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(100.1,-482.8,783.4,1084.9);
// library properties:
lib.properties = {
	id: 'A995C96434FB4299A346847C54808D17',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"bar_img.jpg", id:"bar_img"},
		{src:"purpleCTABtn.png", id:"purpleCTABtn"},
		{src:"server.png", id:"server"},
		{src:"server_image.jpg", id:"server_image"},
		{src:"shoppingBG.jpg", id:"shoppingBG"},
		{src:"townsquare1.jpg", id:"townsquare1"},
		{src:"woman_px.png", id:"woman_px"}
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
an.compositions['A995C96434FB4299A346847C54808D17'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
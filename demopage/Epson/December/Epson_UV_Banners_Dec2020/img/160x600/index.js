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



(lib.acrylicGlass = function() {
	this.initialize(img.acrylicGlass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,191);


(lib.Epson_Logo = function() {
	this.initialize(img.Epson_Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,51);


(lib.metal = function() {
	this.initialize(img.metal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,191);


(lib.paperCutter = function() {
	this.initialize(img.paperCutter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,260);


(lib.printerBar = function() {
	this.initialize(img.printerBar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,727,58);


(lib.printerFullView = function() {
	this.initialize(img.printerFullView);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,430,232);


(lib.printerHead = function() {
	this.initialize(img.printerHead);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,155);


(lib.wood = function() {
	this.initialize(img.wood);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,191);// helper functions:

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


(lib.checkMark_anim_inner_wood = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CD0001").ss(25).p("AIXAAQAADeidCcQidCdjdAAQjcAAididQidicAAjeQAAjdCdicQCdidDcAAQDdAACdCdQCdCcAADdg");
	this.shape.setTransform(-0.025,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(48).to({_off:false},0).to({_off:true},1).wait(96));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-65.9,132,131.9);


(lib.checkMark_anim_inner_acrylic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B20001").ss(25).p("Ag9gHQAgASAdAX");
	this.shape.setTransform(32.225,-46.0786);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B20001").ss(25).p("AipgkQCCAUBnBP");
	this.shape_1.setTransform(25.8288,-49.041);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B20001").ss(25).p("Ai6glQAZgDAbAAQC2AACLBr");
	this.shape_2.setTransform(13.5125,-49.3785);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B20001").ss(25).p("AkvAoQB+hQCfAAQC2AACMBr");
	this.shape_3.setTransform(1.8625,-49.3785);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B20001").ss(25).p("AmdDaQAnhtBYhYQCdibDcAAQC3AACMBr");
	this.shape_4.setTransform(-9.1375,-39.9492);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B20001").ss(25).p("AmLFqQghhYAAhlQAAjdCdicQCdidDcAAQC3AACMBs");
	this.shape_5.setTransform(-10.6375,-17.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B20001").ss(25).p("AhnICQhcgnhMhMQididAAjdQAAjdCdicQCdidDcAAQC3AACMBs");
	this.shape_6.setTransform(-10.6375,-2.0625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#B20001").ss(25).p("AG9GQQiWCHjNAAQjdAAicidQidicAAjeQAAjdCdicQCcidDdAAQC3AACLBs");
	this.shape_7.setTransform(-9,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B20001").ss(25).p("AIWgeQABAPAAAPQAADeidCcQidCdjdAAQjcAAididQidicAAjeQAAjdCdicQCdidDcAAQC3AACMBs");
	this.shape_8.setTransform(-0.025,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#B20001").ss(25).p("AHjjoQA0BqAAB+QAADeidCcQidCdjdAAQjcAAididQidicAAjeQAAjdCdicQCdidDcAAQC3AACMBs");
	this.shape_9.setTransform(-0.025,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#B20001").ss(25).p("AGdlTQB6CRAADCQAADeidCcQidCdjdAAQjcAAididQidicAAjeQAAjdCdicQCdidDcAAQC3AACLBs");
	this.shape_10.setTransform(-0.025,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#B20001").ss(25).p("AIXAAQAADeidCcQidCdjdAAQjcAAididQidicAAjeQAAjdCdicQCdidDcAAQDdAACdCdQCdCcAADdg");
	this.shape_11.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},130).to({state:[]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-65.9,132,131.9);


(lib.checkMark_anim_inner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EE0001").ss(25).p("Ag9gHQAgASAdAX");
	this.shape.setTransform(32.225,-46.0786);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#EE0001").ss(25).p("AipgkQCCAUBnBP");
	this.shape_1.setTransform(25.8288,-49.041);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EE0001").ss(25).p("Ai6glQAZgDAbAAQC2AACLBr");
	this.shape_2.setTransform(13.5125,-49.3785);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#EE0001").ss(25).p("AkvAoQB+hQCfAAQC2AACMBr");
	this.shape_3.setTransform(1.8625,-49.3785);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#EE0001").ss(25).p("AmdDaQAnhtBYhYQCdibDcAAQC3AACMBr");
	this.shape_4.setTransform(-9.1375,-39.9492);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#EE0001").ss(25).p("AmLFqQghhYAAhlQAAjdCdicQCdidDcAAQC3AACMBs");
	this.shape_5.setTransform(-10.6375,-17.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#EE0001").ss(25).p("AhnICQhcgnhMhMQididAAjdQAAjdCdicQCdidDcAAQC3AACMBs");
	this.shape_6.setTransform(-10.6375,-2.0625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#EE0001").ss(25).p("AG9GQQiWCHjNAAQjdAAicidQidicAAjeQAAjdCdicQCcidDdAAQC3AACLBs");
	this.shape_7.setTransform(-9,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#EE0001").ss(25).p("AIWgeQABAPAAAPQAADeidCcQidCdjdAAQjcAAididQidicAAjeQAAjdCdicQCdidDcAAQC3AACMBs");
	this.shape_8.setTransform(-0.025,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#EE0001").ss(25).p("AHjjoQA0BqAAB+QAADeidCcQidCdjdAAQjcAAididQidicAAjeQAAjdCdicQCdidDcAAQC3AACMBs");
	this.shape_9.setTransform(-0.025,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#EE0001").ss(25).p("AGdlTQB6CRAADCQAADeidCcQidCdjdAAQjcAAididQidicAAjeQAAjdCdicQCdidDcAAQC3AACLBs");
	this.shape_10.setTransform(-0.025,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#EE0001").ss(25).p("AIXAAQAADeidCcQidCdjdAAQjcAAididQidicAAjeQAAjdCdicQCdidDcAAQDdAACdCdQCdCcAADdg");
	this.shape_11.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},130).to({state:[]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-65.9,132,131.9);


(lib.txt_sureColor_V7000_endFrame = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("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");
	this.shape.setTransform(-70.55,-20.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_sureColor_V7000_endFrame, new cjs.Rectangle(-121.6,-59,102.19999999999999,76.5), null);


(lib.txt_sureColor_V7000 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("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");
	this.shape.setTransform(-67.275,7.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_sureColor_V7000, new cjs.Rectangle(-134.7,-57.5,134.89999999999998,130.4), null);


(lib.txt_redCrush = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AGyHsQgJgDgGgFQgFgFgCgIQgDgIAAgKIAAgEIAfAAIAAAEQAAAJAEAGQAFAEAJAAQAHAAAFgDQAFgEAAgIQgBgGgEgEQgDgDgFgCIgXgIQgOgFgIgJQgGgJgBgOQABgIADgIQACgGAGgGQAGgFAIgDQAKgDANgBQAXAAALAKQAKAKABASIAAAFIgfAAQAAgKgDgFQgDgEgIAAQgHAAgEADQgFADAAAIQAAAEADAFQADADAJADIAUAGQAPAGAHAJQAGAIAAAPQAAALgDAHQgDAIgHAFQgGAGgJABQgKADgKAAQgOAAgKgDgAErHfQgKgQAAglQAAgkAKgRQAKgQAVAAQAJABAHAEQAGADAGAIIABAAIAAg3IAhAAIAACuIggAAIAAgOIAAAAQgGAKgHADQgHAEgKAAQgVAAgKgQgAFGGKQgDALAAAVQAAAWADALQAEAKALABQALgBADgKQAEgLAAgWQAAgVgEgLQgDgLgLAAQgLAAgEALgABrHrQgHgDgDgFQgEgFgCgHIgBgNQAAgKACgGQACgHAEgEQAEgGAGgCQAGgEAJgCIATgFQAIgCADgDQACgEAAgGQAAgIgDgFQgDgEgJABQgIAAgEAEQgEAEAAAJIAAADIgeAAIAAgDQAAgLAEgIQADgIAHgFQAFgEAJgCQAJgCAJgBQAPABAJADQAKACAFAGQAFAFABAHQADAIAAAJIABBTIACALIgfAAIgDgGIgCgHIAAAAQgGAKgHACQgJAEgMAAQgIAAgGgEgACUGvIgHACQgLACgDAGQgFAFAAAIQAAAIADAFQADAGAHgBIAHgBQADgBADgCQAEgDACgEQABgEAAgEIAAgbgAgVHfQgJgQgBglQABgkAJgRQAKgQAUAAQAJABAHAEQAHADAFAIIABAAIAAg3IAhAAIAACuIggAAIAAgOIgBAAQgFAKgHADQgHAEgKAAQgUAAgKgQgAAFGKQgDALAAAVQAAAWADALQAEAKAKABQAMgBAEgKQADgLAAgWQAAgVgDgLQgEgLgMAAQgKAAgEALgAj/HrQgGgDgEgFQgEgFgBgHIgBgNQAAgKACgGQABgHAEgEQAFgGAGgCQAGgEAIgCIATgFQAIgCADgDQADgEAAgGQAAgIgEgFQgDgEgJABQgHAAgEAEQgFAEAAAJIAAADIgeAAIAAgDQABgLADgIQAEgIAGg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");
	this.shape.setTransform(203.25,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_redCrush, new cjs.Rectangle(143,-49.2,120.60000000000002,98.9), null);


(lib.txt_readyToPrint = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("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");
	this.shape.setTransform(-63.675,115.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_readyToPrint, new cjs.Rectangle(-113.6,80.6,99.89999999999999,70), null);


(lib.txt_areYouReady = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("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AAgTQAAgTAEgPQADgOAIgKQAHgKANgFQAMgFASAAQASgBANAFQAMAFAIAKQAHAKADAPQADAOAAAUQAAATgDAOQgEAPgHAKQgIAKgMAEQgMAFgSAAQgTAAgMgEgAjVjKQgFAEgCAGIgDARIAAAqIADARQACAGAFAEQAEAEAIAAQANAAAEgMQAFgMAAgcQAAgcgFgMQgEgMgNAAQgIAAgEAEgAmShcQgQgOAAgbIAAgJIAsAAIABATQABAFAEAEQADAEAFACQAGADAJAAQAKAAAIgGQAIgGAAgNQAAgGgCgFQgCgFgFgEQgEgEgIgDIgSgGQgOgEgLgGQgLgFgHgHQgHgHgEgJQgDgKAAgMQAAgdASgOQASgOAfAAQAPAAAMACQAMADAJAHQAJAGAFAKQAFAKAAAOIAAAGIgpAAQAAgOgGgIQgFgIgNAAQgIAAgEADQgFACgDADQgDADgBAEIgBAJQAAAJAEAGQAEAGAOAFIAiAOQAMAEAJAGQAHAFAFAGQAFAGACAIQABAIAAAJQAAAfgUAOQgTAOgkAAQglAAgQgPgACUhQIAAiUIAoAAIAAAUIABAAQAGgLAJgHQAJgGANAAIAIAAIAAAlIgNgBIgLACIgKAEQgEADgDAFQgDAGAAAHIAABZg");
	this.shape.setTransform(-86.475,71.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_areYouReady, new cjs.Rectangle(-148.9,43.9,124.9,56.199999999999996), null);


(lib.printer_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.paperCutter();
	this.instance.setTransform(-343.35,78.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_mc, new cjs.Rectangle(-343.3,79,200,260), null);


(lib.Epson_Logo_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Epson_Logo();
	this.instance.setTransform(-80.9,-28.2,0.9336,0.9336);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Epson_Logo_1, new cjs.Rectangle(-80.9,-28.2,143.8,47.599999999999994), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBKQgEgBAAgEIAAiJQAAgFAEAAIBVAAQAEAAAAAFIAAARQAAADgEAAIg+AAIAAAjIAzAAQAEAAAAAEIAAAQQAAAFgEAAIgzAAIAAAlIA+AAQAEAAAAADIAAARQAAAEgEABg");
	this.shape.setTransform(61.025,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbBKQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBIgbg3IgYAAIAAA1QAAAEgEABIgTAAQgEgBAAgEIAAiJQAAgFAEAAIA7AAQATABANANQAOANAAASQAAAPgJALQgIALgOAFIAdA2QAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAgagFIAhAAQAIAAAGgHQAHgGAAgJQAAgIgHgGQgGgHgIAAIghAAg");
	this.shape_1.setTransform(47.475,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1A1QgWgVAAggQAAgeAWgXQAWgVAfgBQAfABAWAVQAXAXAAAeQAAAggXAVQgWAXgfAAQgfAAgWgXgAghghQgOAOAAATQAAAUAOAOQAOAPATAAQAUAAAOgPQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_2.setTransform(31.275,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBBMQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAIglhSIgBAAIgMBOQAAADgEABIgSAAQgFgBABgEIAZiNQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAIAEAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAAAIAuBiIAAAAIAuhiQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAIADAAQABAAABABQABAAAAAAQABABAAAAQAAABAAAAIAZCNQABAEgFABIgTAAQgDgBgBgDIgMhOIgBAAIglBSQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_3.setTransform(13.1508,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA3BMQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIhUheIgBAAIAABZQAAAEgEABIgTAAQgEgBAAgEIAAiMQAAgDAEgBIADAAQABABAAAAQAAAAABAAQAAAAABAAQAAABABAAIBUBaIAAAAIAAhVQAAgFAFAAIATAAQAEAAAAAFIAACMQAAADgEABg");
	this.shape_4.setTransform(-10,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbBKQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBIgbg3IgYAAIAAA1QAAAEgEABIgTAAQgEgBAAgEIAAiJQAAgFAEAAIA7AAQATABANANQAOANAAASQAAAPgJALQgIALgOAFIAdA2QAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAgAgagFIAhAAQAIAAAGgHQAHgGAAgJQAAgIgHgGQgGgHgIAAIghAAg");
	this.shape_5.setTransform(-25.075,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAwBLQgEgBgCgEIgLgWIg+AAIgKAWQgBAEgFABIgSAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIBBiNQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAIACAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAIBACNQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAgAAVAYIgVgtIAAAAIgUAtIApAAg");
	this.shape_6.setTransform(-39.85,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqBKQgEgBAAgEIAAiJQAAgFAEAAIBVAAQAEAAAAAFIAAARQAAADgEAAIg+AAIAAAjIAzAAQAEAAAAAEIAAAQQAAAFgEAAIgzAAIAAAlIA+AAQAEAAAAADIAAARQAAAEgEABg");
	this.shape_7.setTransform(-52.925,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglBKQgEgBAAgEIAAiJQAAgFAEAAIATAAQAEAAAAAFIAAB1IA0AAQAEAAAAADIAAARQAAAEgEABg");
	this.shape_8.setTransform(-64.475,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#06539E").s().p("ArwECQg8AAAAg8IAAmLQAAg8A8AAIXhAAQA8AAAAA8IAAGLQAAA8g8AAg");
	this.shape_9.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-81.2,-25.7,162.5,51.5), null);


(lib.fullFrame_printer = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.printerFullView();
	this.instance.setTransform(-274.85,140.75,1.1387,1.1387);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fullFrame_printer, new cjs.Rectangle(-274.8,140.8,489.6,264.2), null);


(lib.wood_img = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wood();
	this.instance.setTransform(-140,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wood_img, new cjs.Rectangle(-140,-95.5,280,191), null);


(lib.txt_onWood = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AhdCjQgWgjAAhTQAAhRAWglQAWgkAvAAQAVAAAOAIQAPAJAMASIACAAIAAh8IBMAAIAAGHIhJAAIAAgfIgBAAQgNAVgQAIQgOAIgXAAQgvAAgWgkgAgggbQgHAZAAAvQAAAxAHAYQAIAZAYAAQAZAAAHgZQAIgYAAgxQAAgvgIgZQgHgYgZAAQgYAAgIAYg");
	this.shape.setTransform(73.475,-0.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("Ag4CSQgWgJgOgTQgNgUgFgdQgGgeABgmQAAglAFgdQAHgdANgUQAOgUAWgKQAXgKAfAAQAigBAXAKQAWAKAOAUQANAUAFAdQAGAdgBAmQAAAmgFAdQgHAdgNAUQgOATgWAKQgXAJggAAIgDAAQgfAAgWgJgAgVheQgIAHgEAOQgEAOgCATIgBApIABAqQACATAEAOQAEANAIAIQAIAIANAAQAXAAAJgYQAIgZAAg3QAAg3gIgYQgJgYgXAAQgNAAgIAIg");
	this.shape_1.setTransform(48.6,4.2218);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("Ag4CSQgWgJgOgTQgNgUgFgdQgGgeABgmQAAglAFgdQAHgdAOgUQANgUAXgKQAVgKAgAAQAigBAXAKQAWAKAOAUQANAUAFAdQAGAdAAAmQgBAmgFAdQgHAdgNAUQgOATgWAKQgWAJghAAIgDAAQgfAAgWgJgAgVheQgIAHgEAOQgFAOgBATIgBApIABAqQABATAFAOQAEANAIAIQAIAIANAAQAXAAAJgYQAIgZAAg3QAAg3gIgYQgJgYgXAAQgNAAgIAIg");
	this.shape_2.setTransform(23.95,4.2218);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AAoCUIgojRIAAAAIgkDRIhZAAIhAknIBNAAIAiDRIABAAIAljRIBRAAIAnDRIABAAIAkjRIBIAAIg/Eng");
	this.shape_3.setTransform(-6.85,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AAlCYIAAjLQAAgXgJgKQgHgIgRAAQgnAAAAAwIAADEIhNAAIAAknIBJAAIAAAiIACAAQALgWATgKQATgKAZAAQAkAAATAUQAVAUgBAsIAADbg");
	this.shape_4.setTransform(-49.65,3.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("Ag3CSQgXgJgNgTQgOgUgFgdQgFgeAAgmQgBglAHgdQAGgdAOgUQANgUAXgKQAVgKAgAAQAigBAWAKQAXAKANAUQANAUAGAdQAFAdABAmQAAAmgHAdQgFAdgOAUQgOATgWAKQgWAJghAAIgDAAQgfAAgVgJgAgVheQgIAHgEAOQgEAOgCATIgBApIABAqQACATAEAOQAEANAIAIQAIAIANAAQAXAAAJgYQAJgZgBg3QABg3gJgYQgJgYgXAAQgNAAgIAIg");
	this.shape_5.setTransform(-74.85,4.2218);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_onWood, new cjs.Rectangle(-99.3,-35.7,196.39999999999998,69), null);


(lib.printerBar_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgpeADrIgZnpMBTvAAAIknH9g");
	mask.setTransform(-95.975,0.55);

	// Layer_1
	this.instance = new lib.printerBar();
	this.instance.setTransform(-363.5,-29);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printerBar_mc, new cjs.Rectangle(-363.5,-24.9,535.5,51), null);


(lib.printer_head = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.printerHead();
	this.instance.setTransform(-84,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_head, new cjs.Rectangle(-84,-77.5,168,155), null);


(lib.txt_onMetal = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AghBNQgNgIgGgMQgGgNgBgPIgBgdQAAgRACgPQACgOAHgMQAGgMANgHQAMgGAVgBQARAAAMAGQALAGAHALQAHALACAPQACAPAAATIAAAIIhRAAIAAAMIABAPIAFAMQABAEAEAEQAFADAEAAQALAAAEgIQAFgHACgPIAlAAQgBAcgOAPQgNAPgegBQgVAAgNgHgAgJg0QgEADgBAEIgFALIgBAKIAAAHIAqAAIgBgRQgBgHgDgEQgCgFgDgDQgFgCgGAAQgFAAgFADg");
	this.shape.setTransform(107.55,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgpBTIAAihIAnAAIAAAWIABAAQAFgMAJgHQAJgHANAAIAEAAIADABIAAAnIgGAAIgGAAIgLABQgGACgEADQgFAEgCAFQgCAGAAAIIAABgg");
	this.shape_1.setTransform(96.425,8.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgeBQQgMgFgIgLQgGgKgEgQQgCgRAAgUQAAgUACgQQAEgQAIgLQAHgKAMgGQAMgFARAAQASgBANAGQAMAFAIALQAHALADAPQACAQAAAVQAAAUgCAQQgEAQgHALQgIAKgMAFQgNAGgRAAQgSAAgMgFgAgLgzQgEAEgCAIQgDAHAAALIgBAWIABAWQAAALADAHQACAIAEAEQAFAEAGAAQAMAAAGgNQAEgNAAgeQAAgegEgNQgGgNgMAAQgGAAgFAEg");
	this.shape_2.setTransform(83.75,8.3979);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AA7BTIAAhwQAAgKgEgGQgEgFgJAAQgKAAgGAHQgFAGAAAPIAABpIgpAAIAAhwQAAgKgEgGQgDgFgJAAQgKAAgGAHQgGAGAAAPIAABpIgpAAIAAihIAoAAIAAARIAAAAQAIgLAKgFQAKgFANAAQAOAAAJAHQAKAGADANIABAAQAFgNAKgGQALgHAPAAQAUAAAKANQAKAMAAAXIAAB1g");
	this.shape_3.setTransform(65.375,8.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgyBZQgMgTAAgtQAAgsAMgUQAMgUAaAAQALAAAHAEQAJAFAGAKIABAAIAAhEIApAAIAADVIgnAAIAAgRIgBAAQgHAMgJAEQgHAFgMAAQgaAAgMgUgAgRgOQgDANAAAaQAAAaADANQAFAOAMAAQANAAAFgOQAEgNAAgaQAAgagEgNQgFgNgNAAQgMAAgFANg");
	this.shape_4.setTransform(39.4,5.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AAUBTIAAhvQAAgMgFgFQgDgFgKAAQgVAAAAAbIAABqIgpAAIAAihIAnAAIAAATIABAAQAGgMALgFQAJgGAOAAQAUAAAKALQALALAAAYIAAB3g");
	this.shape_5.setTransform(24.75,8.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgpBRQgHgEgFgHQgEgGgDgJQgBgIAAgIQgBgLADgJQACgIAFgGQAFgFAIgEQAHgDALgDIAXgGQAJgDADgFQAEgEAAgHQAAgKgEgFQgFgGgJABQgKAAgEAFQgFAGgBAKIAAAEIglAAIAAgEQAAgOAFgKQAFgJAHgFQAIgHAKgCQAKgDAMAAQASAAALAEQAMAEAGAGQAGAHADAJQACAJAAALIAABUIABARIAEAOIgoAAIgDgIIgCgJIAAAAQgIANgJAEQgIADgQAAQgLAAgHgDgAAJAFIgIAEQgNACgEAHQgGAFAAAMQAAAJAEAGQADAHAJAAIAIgCQAEAAAEgDQADgEACgEQADgGAAgGIAAgfg");
	this.shape_6.setTransform(10.1,8.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgUBrIAAjVIApAAIAADVg");
	this.shape_7.setTransform(-7.525,5.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgpBRQgHgEgFgHQgEgGgDgJQgBgIAAgIQgBgLADgJQACgIAFgGQAFgFAIgEQAHgDALgDIAXgGQAJgDADgFQAEgEAAgHQAAgKgEgFQgFgGgJABQgKAAgFAFQgEAGgBAKIAAAEIglAAIAAgEQAAgOAFgKQAFgJAHgFQAIgHAKgCQAKgDAMAAQASAAALAEQAMAEAGAGQAGAHADAJQACAJAAALIAABUIABARIAEAOIgoAAIgDgIIgCgJIAAAAQgIANgJAEQgIADgQAAQgLAAgHgDgAAJAFIgIAEQgNACgEAHQgGAFAAAMQAAAJAEAGQADAHAJAAIAIgCQAEAAAEgDQADgEACgEQADgGAAgGIAAgfg");
	this.shape_8.setTransform(-18.25,8.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgCBnQgIgCgEgFQgEgFgBgIQgCgIAAgNIAAhbIgVAAIAAgcIAVAAIAAguIAoAAIAAAuIAYAAIAAAcIgYAAIAABWQAAAKADAEQADAEAJAAIAEAAIAFgBIAAAdIgNABIgOAAQgMAAgGgBg");
	this.shape_9.setTransform(-29.55,6.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgiBNQgMgIgGgMQgGgNgCgPIgBgdQAAgRADgPQACgOAHgMQAGgMANgHQANgGATgBQATAAALAGQAMAGAGALQAHALADAPQABAPAAATIAAAIIhQAAIAAAMIAAAPIAEAMQADAEADAEQAEADAFAAQAKAAAGgIQAEgHACgPIAmAAQgCAcgOAPQgOAPgegBQgUAAgOgHgAgJg0QgDADgDAEIgEALIAAAKIAAAHIApAAIgCgRQAAgHgDgEQgBgFgFgDQgEgCgGAAQgGAAgEADg");
	this.shape_10.setTransform(-40.8,8.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AA7BTIAAhwQAAgKgEgGQgEgFgJAAQgKAAgGAHQgFAGAAAPIAABpIgpAAIAAhwQAAgKgEgGQgDgFgJAAQgKAAgGAHQgGAGAAAPIAABpIgpAAIAAihIAoAAIAAARIAAAAQAIgLAKgFQAKgFANAAQAOAAAJAHQAKAGADANIABAAQAFgNAKgGQALgHAPAAQAUAAAKANQAKAMAAAXIAAB1g");
	this.shape_11.setTransform(-58.925,8.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AAUBTIAAhvQAAgMgFgFQgDgFgKAAQgVAAAAAbIAABqIgpAAIAAihIAnAAIAAATIABAAQAHgMAKgFQAJgGAOAAQAUAAAKALQALALAAAYIAAB3g");
	this.shape_12.setTransform(-84.7,8.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgeBQQgMgFgIgLQgGgKgEgQQgCgRAAgUQAAgUACgQQAEgQAHgLQAIgKAMgGQANgFAQAAQATgBAMAGQAMAFAHALQAIALACAPQAEAQAAAVQAAAUgEAQQgDAQgIALQgHAKgMAFQgMAGgSAAQgRAAgNgFgAgLgzQgEAEgCAIQgDAHgBALIAAAWIAAAWQABALADAHQACAIAEAEQAFAEAGAAQAMAAAGgNQAEgNAAgeQAAgegEgNQgGgNgMAAQgGAAgFAEg");
	this.shape_13.setTransform(-99.25,8.3979);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_onMetal, new cjs.Rectangle(-195.3,-14.3,398.5,39.5), null);


(lib.metal_img = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.metal();
	this.instance.setTransform(-140,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.metal_img, new cjs.Rectangle(-140,-95.5,280,191), null);


(lib.txt_onAcrylic = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AEvD2IAAg4IAUACQAVgBAJgKQAJgMACgSIhTknIBPAAIAsDLIABAAIAnjLIBMAAIhIETQgKAlgJAXQgJAWgMANQgNANgRADQgRAEgbAAgAufCUQgWgJgOgTQgNgTgFgeQgGgdAAgnQAAglAGgdQAGgdAOgUQAOgUAWgJQAWgKAhAAQAigCAWALQAXAJANAUQANAUAGAdQAFAdAAAmQAAAmgGAdQgGAegOATQgNAUgXAJQgWAJggAAIgEAAQgfAAgWgJgAt8hcQgIAHgEAPQgFANgBATIAABTQABATAFAOQAEANAIAIQAIAIAOAAQAXAAAJgYQAIgZAAg3QAAg2gIgZQgJgYgXAAQgOAAgIAIgAM5CWQgVgHgOgSQgOgSgHgeQgIgdAAgtQAAgsAJgfQAJgeAQgSQAQgRAWgIQAWgGAbAAQA0AAAbAeQAbAfAAA0IhJAAIgBgUIgFgTQgEgJgHgGQgGgEgLAAQgOgBgJAHQgIAGgFAMQgEAMgCAUIAABaQACAUAEANQAFAMAIAHQAHAFANAAQATAAAJgQQAJgRAAgkIBJAAQAAA6gaAfQgbAeg8AAQgdAAgVgHgAhLCWQgWgHgOgSQgOgSgHgeQgHgdAAgtQAAgsAJgfQAJgeAQgSQAQgRAVgIQAWgGAbAAQA0AAAbAeQAaAfAAA0IhIAAIgCgUIgFgTQgDgJgGgGQgGgEgMAAQgNgBgJAHQgJAGgEAMQgFAMgBAUIAABaQABAUAFANQAEAMAIAHQAIAFANAAQATAAAIgQQAJgRAAgkIBIAAQAAA6gaAfQgaAeg8AAQgcAAgVgHgAlYCWQgOgHgIgMQgIgMgEgPQgEgPAAgPQAAgVAFgPQAEgPAJgLQAJgKAOgHQAOgHAUgGIArgLQARgFAHgHQAGgIAAgPQAAgQgIgKQgIgKgTAAQgSAAgIAKQgJALAAASIAAAIIhFAAIAAgHQAAgaAJgRQAIgSAOgKQAOgMATgEQATgFAVABQAigBAVAHQAVAGAMANQALAMAFARQAEARAAATIACC8IAHAYIhJAAIgFgPIgEgQIgBAAQgNAXgSAHQgRAHgbAAQgUAAgOgHgAj6ANIgQAFQgYAFgJALQgKAMAAAUQAAARAGAMQAHAMAPAAIAQgDQAIgCAHgGQAHgFAFgIQAEgKAAgMIAAg6gAKPCXIAAknIBMAAIAAEngAIWCXIAAmHIBMAAIAAGHgAByCXIAAknIBJAAIAAAoIABAAQALgVARgOQAQgMAYAAIAOABIAABIIgYgBIgUADQgKADgIAGQgIAGgFAKQgFALAAAOIAACxgApJCXIAAjLQAAgXgIgKQgHgIgRAAQgpAAAAAwIAADEIhMAAIAAknIBJAAIAAAiIABAAQAMgWATgJQAUgKAZAAQAkAAATATQAUAUAAAtIAADagAKPi0IAAhBIBMAAIAABBg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_onAcrylic, new cjs.Rectangle(-98.8,-24.6,197.6,49.2), null);


(lib.acrylicGlass_img = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.acrylicGlass();
	this.instance.setTransform(-140,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.acrylicGlass_img, new cjs.Rectangle(-140,-95.5,280,191), null);


(lib.checkMark_anim_wood = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD0001").s().p("ANjLUIt3AAItO2nIN9AAIGmLVQGkLSgCAAIAAAAg");
	this.shape.setTransform(-42.5981,-149.8739);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(144).to({_off:false},0).wait(1));

	// Layer_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD0001").s().p("AplhSQAEADClkiIClkjIN9AAIsSUqg");
	this.shape_1.setTransform(69.75,-155.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(144).to({_off:false},0).wait(1));

	// Layer_5
	this.instance = new lib.checkMark_anim_inner_wood("single",48);
	this.instance.setTransform(0.05,0,0.4198,0.4198,-84.4983,0,0,0.5,0.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(144).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CD0001").ss(25).p("AIXAAQAADeidCcQidCdjdAAQjcAAididQidicAAjeQAAjdCdicQCdidDcAAQDdAACdCdQCdCcAADdg");
	this.shape_2.setTransform(-0.025,0);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(144).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.3,-222.3,260.5,288.3);


(lib.checkMark_anim_acrylic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B20001").s().p("ANjLUIt3AAItO2nIN9AAIGmLVQGkLSgCAAIAAAAg");
	this.shape.setTransform(-42.5981,-149.8739);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(47).to({_off:false},0).to({_off:true},1).wait(97));

	// Layer_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20001").s().p("AplhSQAEADClkiIClkjIN9AAIsSUqg");
	this.shape_1.setTransform(69.75,-155.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(47).to({_off:false},0).to({_off:true},1).wait(97));

	// Layer_5
	this.instance = new lib.checkMark_anim_inner_acrylic("synched",44);
	this.instance.setTransform(0.05,0,0.4198,0.4198,-84.4983,0,0,0.5,0.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({_off:true},1).wait(97));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B20001").ss(25).p("AIXAAQAADeidCcQidCdjdAAQjcAAididQidicAAjeQAAjdCdicQCdidDcAAQDdAACdCdQCdCcAADdg");
	this.shape_2.setTransform(-0.025,0);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(47).to({_off:false},0).to({_off:true},1).wait(97));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.3,-222.3,260.5,288.3);


(lib.checkMark_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE0001").s().p("AHBAMIt3AAIgMgXIN9AAIAFANQAEAKgCAAIgBAAg");
	this.shape.setTransform(-84.2309,-221.0543);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE0001").s().p("AIwDJIt3AAIjpmRIN9AAIB0DKQBxDHgBAAIgBAAg");
	this.shape_1.setTransform(-73.2433,-202.1961);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE0001").s().p("AKOFpIt3AAImkrRIN9AAIDRFqQDPFngCAAIAAAAg");
	this.shape_2.setTransform(-63.8962,-186.2228);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE0001").s().p("ALbHsIt3AAIo+vXIN9AAIEeHtQEbHqgBAAIAAAAg");
	this.shape_3.setTransform(-56.2222,-173.1234);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE0001").s().p("AMWJRIt3AAIq0yiIN9AAIFaJTQFWJPgCABIAAgBg");
	this.shape_4.setTransform(-50.2727,-162.9487);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE0001").s().p("ANBKaIt3AAIsK0zIN9AAIGEKbQGCKYgCAAIAAAAg");
	this.shape_5.setTransform(-45.998,-155.6988);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE0001").s().p("ANaLGIt3AAIs92LIN9AAIGeLHQGbLEgBAAIgBAAg");
	this.shape_6.setTransform(-43.4481,-151.3239);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE0001").s().p("ANjLUIt3AAItO2nIN9AAIGmLVQGkLSgCAAIAAAAg");
	this.shape_7.setTransform(-42.5981,-149.8739);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(137));

	// Layer_6
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE0001").s().p("AnAAMIABgEIADgTIN9AAIgDAXg");
	this.shape_8.setTransform(86.25,-220.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EE0001").s().p("AnsgNQACAAAshPIAuhbIN9AAIjTFvg");
	this.shape_9.setTransform(81.875,-203.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EE0001").s().p("AoRgiQACABBSiQIBSiYIN9AAImDKTg");
	this.shape_10.setTransform(78.175,-188.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EE0001").s().p("AovgzQACACBwjFIBwjKIN9AAIoTOBg");
	this.shape_11.setTransform(75.15,-176.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EE0001").s().p("ApHhBQAEADCHjuICHjxIN9AAIqCQ7g");
	this.shape_12.setTransform(72.775,-167.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EE0001").s().p("ApXhLQADAECYkLICYkNIN8AAIrRTAg");
	this.shape_13.setTransform(71.1,-160.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EE0001").s().p("ApihRQAEAECjkcIChkeIN9AAIsCUPg");
	this.shape_14.setTransform(70.075,-156.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EE0001").s().p("AplhSQAEADClkiIClkjIN9AAIsSUqg");
	this.shape_15.setTransform(69.75,-155.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(137));

	// Layer_5
	this.instance = new lib.checkMark_anim_inner("synched",0);
	this.instance.setTransform(0.05,0,0.4198,0.4198,-84.4983,0,0,0.5,0.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(142));

	// Layer_2
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#EE0001").ss(25).p("Ag9gHQAgASAdAX");
	this.shape_16.setTransform(32.225,-46.0786);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#EE0001").ss(25).p("AipgkQCCAUBnBP");
	this.shape_17.setTransform(25.8288,-49.041);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#EE0001").ss(25).p("Ai6glQAZgDAbAAQC2AACLBr");
	this.shape_18.setTransform(13.5125,-49.3785);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#EE0001").ss(25).p("AkvAoQB+hQCfAAQC2AACMBr");
	this.shape_19.setTransform(1.8625,-49.3785);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#EE0001").ss(25).p("AmdDaQAnhtBYhYQCdibDcAAQC3AACMBr");
	this.shape_20.setTransform(-9.1375,-39.9492);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#EE0001").ss(25).p("AmLFqQghhYAAhlQAAjdCdicQCdidDcAAQC3AACMBs");
	this.shape_21.setTransform(-10.6375,-17.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#EE0001").ss(25).p("AhnICQhcgnhMhMQididAAjdQAAjdCdicQCdidDcAAQC3AACMBs");
	this.shape_22.setTransform(-10.6375,-2.0625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#EE0001").ss(25).p("AG9GQQiWCHjNAAQjdAAicidQidicAAjeQAAjdCdicQCcidDdAAQC3AACLBs");
	this.shape_23.setTransform(-9,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#EE0001").ss(25).p("AIWgeQABAPAAAPQAADeidCcQidCdjdAAQjcAAididQidicAAjeQAAjdCdicQCdidDcAAQC3AACMBs");
	this.shape_24.setTransform(-0.025,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#EE0001").ss(25).p("AHjjoQA0BqAAB+QAADeidCcQidCdjdAAQjcAAididQidicAAjeQAAjdCdicQCdidDcAAQC3AACMBs");
	this.shape_25.setTransform(-0.025,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#EE0001").ss(25).p("AGdlTQB6CRAADCQAADeidCcQidCdjdAAQjcAAididQidicAAjeQAAjdCdicQCdidDcAAQC3AACLBs");
	this.shape_26.setTransform(-0.025,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#EE0001").ss(25).p("AIXAAQAADeidCcQidCdjdAAQjcAAididQidicAAjeQAAjdCdicQCdidDcAAQDdAACdCdQCdCcAADdg");
	this.shape_27.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).wait(133));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.3,-222.3,260.5,288.3);


(lib.ribbon_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// checkMark_anim
	this.instance = new lib.checkMark_anim("synched",0,false);
	this.instance.setTransform(202.85,-76.2,0.27,0.27,0,0,0,0.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:0.4195,scaleY:0.4195,y:-76.25,startPosition:8},8,cjs.Ease.quadOut).wait(46).to({startPosition:54},0).to({_off:true},1).wait(305));

	// txt_industrialLevel
	this.instance_1 = new lib.txt_redCrush();
	this.instance_1.setTransform(0,49.35);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:29.3,alpha:1},8,cjs.Ease.quadOut).wait(46).to({_off:true},1).wait(305));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(143,-170.4,120.60000000000002,269.4);


(lib.wood_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.checkMark_anim_wood("single",144);
	this.instance.setTransform(-5.65,6.8,0.347,0.347,0,0,0,0,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// txt_onAcrylic
	this.instance_1 = new lib.txt_onWood();
	this.instance_1.setTransform(-4.55,48.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// acrylicGlass_img
	this.instance_2 = new lib.wood_img();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-95.5,280,191);


(lib.printer_wood = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// printer_head
	this.instance = new lib.printer_head();
	this.instance.setTransform(-90.5,-101.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:147.75},23).wait(23).to({x:-90.5},8,cjs.Ease.quadOut).wait(52).to({_off:true},1).wait(53));

	// printerBar_mc
	this.instance_1 = new lib.printerBar_mc();
	this.instance_1.setTransform(135,-85.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(106).to({_off:true},1).wait(53));

	// objectPrint_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A63MWIAA4rMA1vAAPIAAYcg");
	var mask_graphics_106 = new cjs.Graphics().p("A63MWIAA4rMA1vAAPIAAYcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.975,y:17.55}).wait(106).to({graphics:mask_graphics_106,x:-0.975,y:17.55}).wait(1).to({graphics:null,x:0,y:0}).wait(53));

	// objectPrint
	this.instance_2 = new lib.wood_mc();
	this.instance_2.setTransform(-5,-158);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-0.95},23,cjs.Ease.quadOut).wait(83).to({_off:true},1).wait(53));

	// graySlate_BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F3F40").s().p("A68QBMAAAggBMA15AAAMAAAAgBg");
	this.shape.setTransform(-0.5,-1.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(106).to({_off:true},1).wait(53));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.9,-178.8,727.4,279.9);


(lib.metal_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.checkMark_anim("single",47);
	this.instance.setTransform(-5.65,5.9,0.3389,0.3389,0,0,0,0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// txt_onAcrylic
	this.instance_1 = new lib.txt_onMetal();
	this.instance_1.setTransform(-4.55,48.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// acrylicGlass_img
	this.instance_2 = new lib.metal_img();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.8,-95.5,398.5,191);


(lib.acrylicGlass_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.checkMark_anim_acrylic("single",47);
	this.instance.setTransform(-6.1,2.3,0.3638,0.3638,0,0,0,0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// txt_onAcrylic
	this.instance_1 = new lib.txt_onAcrylic();
	this.instance_1.setTransform(-4.55,48.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// acrylicGlass_img
	this.instance_2 = new lib.acrylicGlass_img();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-95.5,280,191);


(lib.printer_metal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// printer_head
	this.instance = new lib.printer_head();
	this.instance.setTransform(-90.5,-101.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:147.75},23).wait(17).to({x:-90.5},10,cjs.Ease.quadOut).wait(2).to({_off:true},1).wait(107));

	// printerBar_mc
	this.instance_1 = new lib.printerBar_mc();
	this.instance_1.setTransform(135,-85.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({_off:true},1).wait(107));

	// objectPrint_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A63MWIAA4rMA1vAAPIAAYcg");
	var mask_graphics_52 = new cjs.Graphics().p("A63MWIAA4rMA1vAAPIAAYcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.975,y:17.55}).wait(52).to({graphics:mask_graphics_52,x:-0.975,y:17.55}).wait(1).to({graphics:null,x:0,y:0}).wait(107));

	// objectPrint
	this.instance_2 = new lib.metal_mc();
	this.instance_2.setTransform(-5,-158);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-0.95},23,cjs.Ease.quadOut).wait(29).to({_off:true},1).wait(107));

	// graySlate_BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F3F40").s().p("A68QBMAAAggBMA15AAAMAAAAgBg");
	this.shape.setTransform(-0.5,-1.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(52).to({_off:true},1).wait(107));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.9,-178.8,727.4,279.8);


(lib.printer_acrylic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// printer_head
	this.instance = new lib.printer_head();
	this.instance.setTransform(-90.5,-101.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:147.75},23).wait(23).to({x:-90.5},8).wait(106));

	// printerBar_mc
	this.instance_1 = new lib.printerBar_mc();
	this.instance_1.setTransform(135,-85.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// objectPrint_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A63MWIAA4rMA1vAAPIAAYcg");
	mask.setTransform(-0.975,17.55);

	// objectPrint
	this.instance_2 = new lib.acrylicGlass_mc();
	this.instance_2.setTransform(-5,-158);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-0.95},23,cjs.Ease.quadOut).wait(137));

	// graySlate_BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F3F40").s().p("A68QBMAAAggBMA15AAAMAAAAgBg");
	this.shape.setTransform(-0.5,-1.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.9,-178.8,727.4,279.9);


// stage content:
(lib.Epson_UV_160x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// Epson_Logo
	this.instance = new lib.Epson_Logo_1();
	this.instance.setTransform(80.75,40.55,0.8039,0.8039);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},8).wait(352));

	// ctaBtn_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_353 = new cjs.Graphics().p("AoNC0QgqAAAAgqIAAAAIAAkTQAAgqAqAAIAAAAIQbAAQAqAAAAAqIAAAAIAAETQAAAqgqAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(353).to({graphics:mask_graphics_353,x:80.0176,y:552.0672}).wait(7));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.1,-10.9,14.2,10.8).s().p("AoLGHIL8vmIEbDZIr8Pmg");
	this.shape_1.setTransform(4.025,523.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.1,-10.9,14.2,10.8).s().p("AoMGHIL9vnIEcDZIr9Pog");
	this.shape_2.setTransform(12.4,526.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.2,-10.9,14.3,10.9).s().p("AoOGJIMAvrIEdDaIsAPrg");
	this.shape_3.setTransform(37.525,535.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.3,-11,14.3,10.9).s().p("AoQGLIMDvwIEfDbIsEPwg");
	this.shape_4.setTransform(79.4,550.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.4,-11,14.4,11).s().p("AoTGNIMIv2IEgDcIsJP3g");
	this.shape_5.setTransform(121.25,566.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.4,-11.1,14.5,11).s().p("AoVGPIMKv6IEhDdIsLP6g");
	this.shape_6.setTransform(146.375,575.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.5,-11.1,14.4,11).s().p("AoWGPIMLv7IEiDeIsMP7g");
	this.shape_7.setTransform(154.75,578.525);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},353).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// ctaBtn
	this.instance_1 = new lib.ctaBtn();
	this.instance_1.setTransform(80.35,552.4,0.6987,0.6987,0,0,0,0.5,0.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(347).to({_off:false},0).to({alpha:1},6).wait(7));

	// txt_sureColor_f10070
	this.instance_2 = new lib.txt_sureColor_V7000_endFrame();
	this.instance_2.setTransform(151.05,193.95);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(344).to({_off:false},0).to({y:208.95,alpha:1},6,cjs.Ease.quadOut).wait(10));

	// txt_areYouReady
	this.instance_3 = new lib.txt_areYouReady();
	this.instance_3.setTransform(153.1,123.75,1,1,0,0,0,-14.6,3.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(309).to({_off:false},0).to({y:111.15,alpha:1},7,cjs.Ease.quadOut).wait(22).to({alpha:0},6).wait(16));

	// fullFrame_print
	this.instance_4 = new lib.fullFrame_printer();
	this.instance_4.setTransform(152.3,203.45,0.5488,0.5488,0,0,0,0.2,0.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(309).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.6374,scaleY:0.6374,x:152.25,y:185,alpha:1},7,cjs.Ease.quadOut).wait(44));

	// whiteBG
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0)").s().p("EgaQAyOMAAAhkbMA0iAAAIAABNMAAABfvIAADfg");
	this.shape_8.setTransform(161.3,307.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.141)").s().p("EgaQAyCMAAAhkDMA0hAAAMAAABkDg");
	this.shape_9.setTransform(161,306.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.286)").s().p("EgaQAx3MAAAhjtMA0hAAAMAAABjtg");
	this.shape_10.setTransform(160.75,305);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.427)").s().p("EgaRAxsMAAAhjXMA0iAAAMAAABjXg");
	this.shape_11.setTransform(160.45,303.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.573)").s().p("EgaRAxgMAAAhi/MA0jAAAMAAABi/g");
	this.shape_12.setTransform(160.15,302.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.714)").s().p("EgaQAxVMAAAhipMA0hAAAMAAABipg");
	this.shape_13.setTransform(159.85,301.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.859)").s().p("EgaRAxJMAAAhiRMA0jAAAMAAABiRg");
	this.shape_14.setTransform(159.6,300.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EgaQAw+MAAAhh7MA0hAAAIAABNMAAABfvIAAA/g");
	this.shape_15.setTransform(159.3,299.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},302).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(51));

	// acrylic_mc
	this.instance_5 = new lib.printer_acrylic("single",0);
	this.instance_5.setTransform(101.8,686.2,0.5754,0.5754,0,0,0,36.4,-28.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(130).to({_off:false},0).to({y:160.2,mode:"synched",loop:false},8,cjs.Ease.quadOut).to({_off:true},171).wait(51));

	// wood_mc
	this.instance_6 = new lib.printer_wood("single",0);
	this.instance_6.setTransform(158.65,699.9,0.575,0.575,0,0,0,134.9,-9.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(194).to({_off:false},0).to({y:337.9,mode:"synched",loop:false},8,cjs.Ease.quadOut).to({_off:true},107).wait(51));

	// metal_mc
	this.instance_7 = new lib.printer_metal("single",0);
	this.instance_7.setTransform(157.2,694.4,0.575,0.575,0,0,0,134.8,-9.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(249).to({_off:false},0).to({y:509.4,mode:"synched",loop:false},7,cjs.Ease.quadOut).to({_off:true},53).wait(51));

	// industry_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_84 = new cjs.Graphics().p("EgZ/A3ZMAAAhuxMAz+AAAMAAABuxg");
	var mask_1_graphics_130 = new cjs.Graphics().p("EgZ/A3ZMAAAhuxMAz+AAAMAAABuxg");
	var mask_1_graphics_131 = new cjs.Graphics().p("EgZ/A3ZMAAAhuxMAz+AAAMAAABuxg");
	var mask_1_graphics_132 = new cjs.Graphics().p("EgZ/A3ZMAAAhuxMAz+AAAMAAABuxg");
	var mask_1_graphics_133 = new cjs.Graphics().p("EgZ/A3ZMAAAhuxMAz+AAAMAAABuxg");
	var mask_1_graphics_134 = new cjs.Graphics().p("EgZ/A3ZMAAAhuxMAz+AAAMAAABuxg");
	var mask_1_graphics_135 = new cjs.Graphics().p("EgZ/A3ZMAAAhuxMAz+AAAMAAABuxg");
	var mask_1_graphics_136 = new cjs.Graphics().p("EgZ/A3ZMAAAhuxMAz+AAAMAAABuxg");
	var mask_1_graphics_137 = new cjs.Graphics().p("EgZ/A3ZMAAAhuxMAz+AAAMAAABuxg");
	var mask_1_graphics_138 = new cjs.Graphics().p("EgZ/A3ZMAAAhuxMAz+AAAMAAABuxg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(84).to({graphics:mask_1_graphics_84,x:88.35,y:294.925}).wait(46).to({graphics:mask_1_graphics_130,x:88.35,y:294.925}).wait(1).to({graphics:mask_1_graphics_131,x:88.35,y:173.075}).wait(1).to({graphics:mask_1_graphics_132,x:88.35,y:67.525}).wait(1).to({graphics:mask_1_graphics_133,x:88.35,y:-21.825}).wait(1).to({graphics:mask_1_graphics_134,x:88.35,y:-94.925}).wait(1).to({graphics:mask_1_graphics_135,x:88.35,y:-151.775}).wait(1).to({graphics:mask_1_graphics_136,x:88.35,y:-192.375}).wait(1).to({graphics:mask_1_graphics_137,x:88.35,y:-216.775}).wait(1).to({graphics:mask_1_graphics_138,x:88.35,y:-224.875}).wait(1).to({graphics:null,x:0,y:0}).wait(221));

	// industry_Standard
	this.instance_8 = new lib.ribbon_animation("synched",0,false);
	this.instance_8.setTransform(98.1,301.7,1.1554,1.1554,0,0,0,217.4,-26.6);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(84).to({_off:false},0).to({_off:true},55).wait(221));

	// Layer_10
	this.instance_9 = new lib.txt_readyToPrint();
	this.instance_9.setTransform(145,93);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(44).to({_off:false},0).to({y:78.5,alpha:1},9,cjs.Ease.quadOut).wait(24).to({alpha:0},6).to({_off:true},1).wait(276));

	// txt_sureColor_f10070
	this.instance_10 = new lib.txt_sureColor_V7000();
	this.instance_10.setTransform(149.05,222.95);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({_off:false},0).to({y:208.95,alpha:1},7,cjs.Ease.quadOut).wait(26).to({alpha:0},8).to({_off:true},1).wait(315));

	// printer_mc
	this.instance_11 = new lib.printer_mc();
	this.instance_11.setTransform(419.05,243.4,1,1,0,0,0,0.4,0.6);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:304.05,alpha:1},8,cjs.Ease.quadOut).wait(69).to({alpha:0},6).to({_off:true},1).wait(276));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(28.4,285.9,301.1,477.4);
// library properties:
lib.properties = {
	id: '3E1D9D289AAA471FB8DD4F28FE5CF1AF',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"acrylicGlass.jpg", id:"acrylicGlass"},
		{src:"Epson_Logo.png", id:"Epson_Logo"},
		{src:"metal.jpg", id:"metal"},
		{src:"paperCutter.jpg", id:"paperCutter"},
		{src:"printerBar.jpg", id:"printerBar"},
		{src:"printerFullView.jpg", id:"printerFullView"},
		{src:"printerHead.png", id:"printerHead"},
		{src:"wood.jpg", id:"wood"}
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
an.compositions['3E1D9D289AAA471FB8DD4F28FE5CF1AF'] = {
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
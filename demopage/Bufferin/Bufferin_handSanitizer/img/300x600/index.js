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



(lib.amazonLogo = function() {
	this.initialize(img.amazonLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,39);


(lib.billNye = function() {
	this.initialize(img.billNye);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,396,481);


(lib.BillNye_02 = function() {
	this.initialize(img.BillNye_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,365,469);


(lib.Product_bottle = function() {
	this.initialize(img.Product_bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,383);


(lib.txt_HealthyHands = function() {
	this.initialize(img.txt_HealthyHands);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,154);


(lib.txt_kills = function() {
	this.initialize(img.txt_kills);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,111);


(lib.txt_sticky = function() {
	this.initialize(img.txt_sticky);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,102);// helper functions:

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


(lib.txt_notSticky = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.txt_sticky();
	this.instance.setTransform(-293,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_notSticky, new cjs.Rectangle(-293,0,293,102), null);


(lib.Product_bottle_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArjdfQA2iZAumlIAkmGQAAglgbhxIgchqQhYjVgXl5QgHh1ABh3IABhgQANl2DYjWQBDhDBQgrIBCgdIgKhgQgsgGgIghIARrUQAWgcCigOICdgIQB8gDB7AiIBiAiIAULOIgyAeIAFBBQELBqCBFRQBBCoALCTQATDrgoENQgUCHgYBYQhFFDAFDSQACBpARAoQADBVBAFRQAgCpAfCXg");
	mask.setTransform(-84.1267,188.7377);

	// Layer_2
	this.instance = new lib.Product_bottle();
	this.instance.setTransform(-170.85,-4.75);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Product_bottle_1, new cjs.Rectangle(-161.7,-0.4,155.2,378.4), null);


(lib.New_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ai6BMIgCiTIArgBIAaBaIAAAAIgBhaIAkAAIACCTIgqAAIgbhaIAAAAIABBbgAhBhIIBWgBIAAAgIgwAAIABAaIAsgBIABAdIgtABIAAAdIAygBIAAAgIhYABgAAchJIAlAAIANBlIANhmIAjAAIAQBlIAJhlIAmgBIgYCTIgqABIgOhiIgBAAIgLBiIgrABg");
	this.shape.setTransform(-18.875,7.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.New_txt, new cjs.Rectangle(-37.7,0,37.7,15.1), null);


(lib.Bufferin_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HAND_SANITIZER
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHAbIgLgVIgEAAIAAAVIgNAAIAAg1IAVAAIAGABQAEAAADACIAFAFQACAEAAAEQAAAGgDAEQgDACgGACIAOAXgAgIgDIAGAAIACAAIADgBIADgCIABgEIgBgDIgCgCIgDAAIgCgBIgHAAg");
	this.shape.setTransform(-10.925,22.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAbIAAg1IAkAAIAAALIgXAAIAAAKIAWAAIAAAKIgWAAIAAALIAYAAIAAALg");
	this.shape_1.setTransform(-16,22.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAbIAAgLIAZgfIgYAAIAAgLIApAAIAAAKIgaAgIAaAAIAAALg");
	this.shape_2.setTransform(-20.95,22.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAbIAAg1IANAAIAAA1g");
	this.shape_3.setTransform(-24.675,22.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAbIAAgqIgPAAIAAgLIArAAIAAALIgPAAIAAAqg");
	this.shape_4.setTransform(-28.2,22.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAbIAAg1IANAAIAAA1g");
	this.shape_5.setTransform(-31.725,22.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKAbIgVgiIAAAAIAAAiIgNAAIAAg1IAPAAIAVAiIAAgiIANAAIAAA1g");
	this.shape_6.setTransform(-36.075,22.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOAbIgEgKIgTAAIgFAKIgOAAIAXg1IAMAAIAWA1gAAHAGIgHgSIgGASIANAAg");
	this.shape_7.setTransform(-42,22.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAbQgFgCgEgEIAJgJIAFAEIAGACIADgBIACgBIABgBIABgDIgBgDIgCgCIgDgBIgEgCIgGgCIgEgCIgDgEIgBgHQAAgEACgDQACgEACgCIAHgDIAHgBQAFAAAFACQAEACAEADIgIAJIgFgEIgFgBIgDAAIgCABIgBACIgBADIAAACIACACIACABIAEABIAFACQADABACACIAFAEQABACABAEQAAAFgCAEQgCADgDACIgHAEIgHABQgGAAgFgCg");
	this.shape_8.setTransform(-47.25,22.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAbIAAg1IAUAAIALABQAFABAFAEQAEADADAFQACAFABAHQgBAHgCAFQgDAFgEAEQgEADgGACIgKABgAgLAQIAFAAIAGgBIAHgDQACgBABgEQACgDAAgEQAAgEgCgDIgDgFIgHgCIgFgBIgGAAg");
	this.shape_9.setTransform(-54.4,22.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAKAbIgVgiIAAAAIAAAiIgNAAIAAg1IAPAAIAVAiIAAgiIANAAIAAA1g");
	this.shape_10.setTransform(-60.625,22.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPAbIgFgKIgTAAIgFAKIgOAAIAXg1IAMAAIAWA1gAAHAGIgHgSIgGASIANAAg");
	this.shape_11.setTransform(-66.55,22.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AALAbIAAgXIgUAAIAAAXIgOAAIAAg1IAOAAIAAAUIAUAAIAAgUIANAAIAAA1g");
	this.shape_12.setTransform(-72.375,22.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#273C70").s().p("AlHAzQgPAAgKgKQgKgLAAgOIAAgfQAAgOAKgLQAKgKAPAAIKPAAQAOAAALAKQAKALAAAOIAAAfQAAAOgKALQgLAKgOAAg");
	this.shape_13.setTransform(-41.8,22.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer_4
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().ls(["#777C7F","#97999C","#D4D7D7","#82868A","#8E9395","#AAADB0","#C1C3C6","#CFD4D3","#D4D7D7","#777C7F"],[0,0.102,0.286,0.525,0.545,0.604,0.659,0.706,0.741,1],-38.5,0,38.6,0).p("Al6BUIKUAAQARAAAOgJQANgIAFgNIAwiIIqWAAQgRAAgOAJQgNAIgFANg");
	this.shape_14.setTransform(-39.1201,8.6997);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#273C70").s().p("AjoAxQgJgKADgRIAFgRIAPgnQAGgSgFgDIAAgBIAkAAIgbBMIgBAKQACAGAIABQASABAMgiIARguIAAgBQADgIgEgEIAAgBIAcAAIgXBCQgIAVgHAJQgPAUgbAAQgTAAgIgLgAlVA7IAghfQAHgSgEgFIgBAAIAqAAQAaAAAEAGQAFAGAAAGQAAAHgCAEQgFAPgRAHQAGADADAFQACADAAAFQAAAIgCAGQgGARgPALQgMAJgYAAgAkxAnQAaACAHgWQAEgLgFgEQgDgCgPAAIgBAAgAkhgNQAWABAGgQQADgKgFgEQgCgBgMAAIgBAAgAgOA5IAehbQAHgRgGgEIAAgBIBDAAIgHATIgeAAIgIAZIAdAAIgGATIgeAAIgKAeIAeAAIgHAUgAhSA5IAfhbQAGgSgFgDIAAgBIBCAAIgGATIgeAAIgJAZIAbAAIgGATIgbAAIgRAygAiWA5IAfhbQAGgSgEgDIgBgBIBDAAIgGATIgfAAIgIAZIAbAAIgGATIgcAAIgRAygAEEA5IgUhDIgXBDIgWAAIAdhUQADgLABgFQAAgFgDgHIgBgBIAgAAIAXBCIAQgtQAGgRgFgEIAAgBIAcAAIgnBygAB5A5IgRg5IgSA5IgeAAIAehYQAHgTgGgFIAAgBIAvAAQAPAAAGAEQAHAGABAJQABAEgCAIQgCALgJAJQgHAHgKADIAQAxIAfhYQAFgRgEgEIgBAAIAlAAIgmBwgABoAAQAZgEAGgRQAEgLgFgEQgDgDgMAAIgCAAgAFHgqQgDgDABgDQAAgDACgDQADgDAEAAQADAAADADQACADAAADQAAAEgDACQgCADgEAAQgEAAgCgDgAFGgwQAAADACACQACACADAAQADAAACgCQACgCAAgDQAAgHgGAAQgIAAAAAHgAFQgrIgDgEIgCAAIAAAEIgBAAIAAgKIAEAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAAAQgBABgBAAIADAEgAFLgxIACAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAgBIgDAAg");
	this.shape_15.setTransform(-38.4458,8.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Al6BTIAuiIQAFgNANgHQAOgJARAAIKWAAIgwCHQgFAOgNAIQgOAJgRgBgAjSg2QAFAEgGARIgPAoIgFARQgDARAJAKQAIAKATAAQAbABAPgUQAHgKAIgVIAXhCIgcAAIAAABQAEAEgDAIIAAACIgRAuQgMAigSgCQgIAAgCgGIABgKIAbhNIgkAAgAkrg5QAEAEgHASIggBgIAnAAQAYAAAMgJQAPgMAGgQQACgHAAgIQAAgFgCgEQgDgEgGgDQARgHAFgOQACgFAAgGQAAgHgFgGQgEgFgaAAIgqAAgAAYg2QAGAEgHARIgeBcIA7AAIAHgVIgeAAIAKgeIAeAAIAGgSIgdAAIAIgaIAeAAIAHgTIhDAAgAgrg2QAFAEgGARIgfBcIAeAAIARgzIAbAAIAFgSIgaAAIAJgaIAeAAIAGgTIhCAAgAhug2QAEAEgGARIgfBcIAeAAIARgzIAcAAIAGgSIgbAAIAIgaIAfAAIAGgTIhDAAgAELA7IAZAAIAnhyIgcAAIAAAAQAFAFgGAQIgQAtIgXhCIggAAIABABQADAHAAAGQgBAFgDAKIgdBVIAWAAIAXhEgACAA7IA7AAIAmhxIglAAIABAAQAEAEgFARIgfBZIgQgxQAKgEAHgGQAJgKACgLQACgHgBgFQgBgJgHgGQgGgEgPAAIgvAAIAAABQAGAFgHAUIgeBYIAeAAIASg6gAFOg1QgCADAAAEQgBADADADQACACAEABQAEgBACgCQADgDAAgDQAAgEgCgDQgDgCgDAAQgEAAgDACgAkqApIANgmIABAAQAPAAADADQAFAEgEAKQgHAVgWAAIgEAAgAB8glIACAAQAMAAADACQAFAFgEALQgGARgZACgAkagLIALgfIABAAQAMAAACACQAFADgDAKQgGAQgUAAIgCAAgAFPgpQgCgCAAgDQAAgIAIAAQAGAAAAAIQAAADgCACQgCACgDAAQgDAAgCgCgAFUguIADAFIABAAIgDgFQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgBgBAAIgEAAIAAALIABAAIAAgFgAFSgvIAAgDIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_16.setTransform(-39.125,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bufferin_logo, new cjs.Rectangle(-78.1,-1.7,78,32), null);


(lib.KillsGerms_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.txt_kills();
	this.instance.setTransform(-300,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KillsGerms_mc, new cjs.Rectangle(-300,0,300,111), null);


(lib.healthyHands_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.txt_HealthyHands();
	this.instance.setTransform(-300,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.healthyHands_mc, new cjs.Rectangle(-300,0,300,154), null);


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

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASA3IgShAIgSBAIgdAAIgahtIAhAAIALBBIAShBIAXAAIARBAIALhAIAiAAIgbBtg");
	this.shape.setTransform(-16.275,24.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglAsQgPgPgBgYIAAgFQABgQAGgNQAHgNALgIQAMgGAQAAQAYAAAPAPQAOAPAAAaIAAABQAAAagOAQQgPAOgYAAQgWAAgPgNgAgSgEIAAAFQAAAPAFAIQAEAHAJAAQATAAAAgdIAAgCQAAgegTAAQgRAAgBAag");
	this.shape_1.setTransform(-29.55,24.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBLIgzhcIAABcIgkAAIAAiVIAkAAIAzBcIAAhcIAkAAIAACVg");
	this.shape_2.setTransform(-42.575,22.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyBOIAAiZIAgAAIABALQAKgNAPAAQAVAAALAPQALAQAAAaIAAACQAAAYgLAQQgMAPgUAAQgOAAgKgLIAAA0gAgQgpIAAAqQAFAKALAAQAQAAABgcIAAgEQAAgdgRAAQgMAAgEAJg");
	this.shape_3.setTransform(-60.425,26.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAsQgPgPgBgYIAAgFQAAgQAHgNQAGgNAMgIQANgGAPAAQAZAAAOAPQAOAPAAAaIAAABQAAAagOAQQgOAOgZAAQgWAAgPgNgAgSgEIAAAFQAAAPAFAIQAEAHAJAAQASAAABgdIAAgCQAAgegTAAQgRAAgBAag");
	this.shape_4.setTransform(-72.2,24.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQBPIAAhFQAAgJgEgDQgEgFgIAAQgKAAgFAHIAABPIgiAAIAAidIAiAAIAAA7QALgOARAAQASAAAJALQAKAKAAAVIAABGg");
	this.shape_5.setTransform(-83.85,21.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdBGQgOgGgIgMQgHgLAAgPIAkAAQAAAMAHAGQAFAGANAAQAJAAAGgEQAFgEAAgHQAAgIgGgEQgGgFgNgEIgWgJQgdgOAAgZQgBgMAIgJQAHgKAOgFQAMgGAQAAQAQAAANAGQANAGAGALQAIAKAAAOIgkAAQAAgJgFgFQgHgFgJAAQgIAAgGAEQgGAEABAHQAAAFAFAFQAHAFAOAFQAPAFALAFQAYANAAAZQAAATgPAMQgPALgaAAQgQAAgQgHg");
	this.shape_6.setTransform(-96.1,22.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#027AEA").ss(2,1,1).p("AmejlIM9AAQCMAAAACMIAACzQAACMiMAAIs9AAQiMAAAAiMIAAizQAAiMCMAAg");
	this.shape_7.setTransform(-55.525,23.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0078E9").s().p("AmeDmQiMAAAAiMIAAizQAAiMCMAAIM9AAQCMAAAACMIAACzQAACMiMAAg");
	this.shape_8.setTransform(-55.525,23.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Layer_3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.4)").s().p("AmeDmQiMAAAAiMIAAizQAAiMCMAAIM9AAQCMAAAACMIAACzQAACMiMAAg");
	this.shape_9.setTransform(-57.525,26.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AmeDmQiMAAAAiMIAAizQAAiMCMAAIM9AAQCMAAAACMIAACzQAACMiMAAg");
	this.shape_10.setTransform(-57.025,24.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-140,-1,168.5,50.1), null);


(lib.billNye_mc = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EgPFAlSQgBgdAdiTIAeiMQAtiYAMipIADiKQgOhVgDmrIgBmZQgOAXhhBQQgxAogtAjQACAegvB+QgTAggXAKQgNAFgkADQgVABgiALQg+AUgxANQhLAUgwAAQgNAAhjgIQhjgIhVgEQgWgCgqgmQgUgTgQgTQgmgOgXhQIgRhNQgGgsAGgtIAIgkQAAgcA0jYQAdh6CjkiICckIQAIgOAVgSIATgQQADgeBHjJQgSgTgshqIgqhnQgBgRgRg8IgRg4QgLg6Asg0IAtgpIAAhiQAAgiAXgZIAXgTIgDgxQgBgkAGgHQAJgMAcgHQAfgIASAOIA+AtQgVgagIgkQgEghgCgIIgPg5QgIgpAagpIAbgiQAZgEATANIANAOIApgwIgXgKIgcjdQACgLAugNIAugLQAlgFAhAMIAZANIAhDTIgJAZQBPATArBIQANAXAJAZIAFAVQAWBHgBBGQgBAjgFAVQAggKARAjQAMAYAAAaQAAARAgApQAPAWAFAdQABAOgBAKQgFAWgvBEQgNANAAARQAAAJADAGIAZBdQAEAjgHAPQgKAehdAQQgPACgZAPQgEAmghA3QgQAcgPAUQATAGAXADQAsAGAOgPQANgOBOghQBSgiAIgHQBGg9ASgMQAIgEAdgcQAagXAKgDQAMgDAaAEIAZAEIAHgHQAMgYAlgJIAigFQAFgXAmggIBGgyQhUg9g2hnQgagzgKgnQgPgcgWgwQgcg9AAgSQAAgRgQg5IgRg0QgVgggHg9QgDg6gBgHQgCgKgpgtIgrgrQgUgdARgeIAVgYQgLgJgKgvIgJguQgSgMgEgyQgBg2gCgRQgGgegBgOQgBgWAQgOQAOgOALgeIASg0IAVgvQAMgXAMgFQAKgFAcgcIAZgbQAVgcCGg9ICCg3QBmgXByAYIBdAeQAegDAqAUIAjAUQAuAMBBAyQAwAlAYAbQAOAPAKAVQAJAVAAAQQAAANALAQQAEAIAPASQAHAJgLAaQgRAkgBAHQgGAZgPAlIAPBTIAwAHQAaAYgKA6QgFAdgLAZQgNAWADAtQACAXADASQAFA3ggBNQgQAngRAbQgWAPgRgPQgKgHgEgKIgWAZQAAAZAWD2QBLAEAfAoQAJAMADAOIADAMQAEAeAKAaQAsgFB4BgQA7AwA0AxQASAWA2AUIAyAQQAmAABLAhIBEAgQAtADA7AcQBKAjAZAHQAuAMArAhQAVAQANAOIBpBTQAvA2AIAjQAEATAAAWQAHAXAeAwQAWAaAyE1QAZCaAUCWQAPAiBIF2IBFFvQASAoAJBcQAFAuABAmQARAbACA9QACA7AJANQAOATACA0QABAZgCAWQAQAQAKApQAFAVACASQgCAqAJBMQAeAiANCxQAHBZAABRQAPAcAGAwQAFAYAAASQreANreAIQnZAElAAAQqkAAgBgUg");
	mask.setTransform(-197,242.725);

	// Layer_1
	this.instance = new lib.billNye();
	this.instance.setTransform(-396,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.billNye_mc, new cjs.Rectangle(-394.3,2.1,394.3,478.9), null);


(lib.billNye_02 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EgTGAiGQAZiiAAhPQAAgpAriYIAtigQACgQAHgOIAGgLIAvjOQAujSAAgQIAAhuQAEgFADgKQAIgVAAgbQAAgagOAAQgHABgHAFIgZAwQgLAwgxAkQgZASgXAIQgTAqhCAKQgnAGgngFQgUgCgjACQg2gDg2gpQgagVgRgUQgPgGgYgbIgVgZQgUgPACgZIAGgXQg1gwABh8QAAgnAGgpIAFgiQANglAohKIAmhDQgsgpgYhFQgZhLgFgGQhkh4gSgSQgNgMgegmQgcgvAKgZIAQgPQAcgJA0AyIAtA2QAdAOAZAgIATAdQATAJAEgLIAAgNIhihxQgNgIg6hKQgWgrASgkIAWgaQgLgTAEgiIAHgeQAOgZAfALIAcAQQAPAcASAFIAOAAQAAgNAVgOIAUgLQAWAAA2ArIAxArQAWAOAZAZIA/BAQAeAbAcANIAXAGQAMgLAJg6IAGg3QgEgpAUhDIAWg6QgpjsAyhbQAQgcAegVQAigZAEgFQAWgcBUgqIBQgkQAZgSBXgdIBRgaQAVgOA/gNIA7gKQANgNAjgHIAggFICShnQABg5AZgdIAYgRQgSghgTiKIgPiCQgsAigZh4IgRh/QgKgUgNhsQgDgZAcgMIAcgGIgCi+QAAgUAJgZQAJgWAMgQIAcgjQAQgXABgNQACgLAagbQAegdACgFQAGgLAsgUQAqgTAigIIBWgTIA2gLQBygUBiAhQAcAJAjASQAgAQAJACQAWAFAUAiQAUAfAIAAQAaAAAnAwQAQASAMAeIAUAxQAMAbADALQAEAOgCAQQgBANgHAXIgJAkQgDALAEAwQADAtgEAJIgUAwQATgGANANIAKAPQANAmgkA6QgTAcgUAWQARAvglBGQgSAjgWAaQgVAagYgHQgMgDgJgIQgSB9gcBRQgOAogKAPQAABLASAkQAIATAJADQAjAWBLBOQAmAnAeAiQBCAPBqAyIBcAwQAoAHA3AkIBlBDQAtAcAxBMQAYAmAPAgQgFAQALAbQAFAOAGAKQA5CJgRCaQgIBNgTAwQgGATABAVQAAALACAHIBLBYQAHgQA0gPIA0gMIA/geQBkgXAMgPQAIgJAhgEIAggCQAAgWATgUQAUgVAbAAQAYAAAZAYQANAMAIAMIAHBLIASAFQAUgUAPgKQA0ghAfAkQATAWgFAPQgDAHgGADQgDAAgOATQgQAVgHANQgIAQgIAHQgJAJgNADQgKADgdAVQgkAZgIAEQgIAFgfAcQgbAagOAEQgOAEgQALQgRAMgIADQgUAHiIAZQAOAZARBQQAJAnAGAjQAFAegJBTQgEAqgFAjQgNCNg8BvQgiA9gpApQgXAXhJAlQgeAFjGADQghAAg8guIg1gvQgcgaAOCSQAHBJAMBOQAzCdAgGZQARDNAGCtMghIAAMQAKh9AFghg");
	mask.setTransform(-181.6045,236.5476);

	// Layer_1
	this.instance = new lib.BillNye_02();
	this.instance.setTransform(-365,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.billNye_02, new cjs.Rectangle(-363.4,2.6,363.4,466.4), null);


(lib.amazon_logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.amazonLogo();
	this.instance.setTransform(-114,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.amazon_logo, new cjs.Rectangle(-114,0,114,39), null);


(lib.txt_notSticky_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shine (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("AydNyMAa7gjLIKAHoMga+AjLg");
	var mask_graphics_10 = new cjs.Graphics().p("AydNyMAa7gjLIKAHoMga+AjLg");
	var mask_graphics_11 = new cjs.Graphics().p("AycNyMAa6gjMIJ/HpMga9AjMg");
	var mask_graphics_12 = new cjs.Graphics().p("AycNyMAa6gjLIJ/HoMga8AjLg");
	var mask_graphics_13 = new cjs.Graphics().p("AydNyMAa7gjMIKAHpMga9AjMg");
	var mask_graphics_14 = new cjs.Graphics().p("AycNyMAa6gjLIJ/HoMga8AjLg");
	var mask_graphics_15 = new cjs.Graphics().p("AydNyMAa7gjMIKAHpMga+AjLg");
	var mask_graphics_16 = new cjs.Graphics().p("AydNyMAa7gjLIKAHoMga9AjLg");
	var mask_graphics_17 = new cjs.Graphics().p("AydNyMAa7gjLIKAHoMga9AjLg");
	var mask_graphics_18 = new cjs.Graphics().p("AydNyMAa7gjMIKAHpMga9AjLg");
	var mask_graphics_19 = new cjs.Graphics().p("AycNyMAa6gjLIJ/HoMga8AjLg");
	var mask_graphics_20 = new cjs.Graphics().p("AycNyMAa6gjLIJ/HoMga9AjLg");
	var mask_graphics_21 = new cjs.Graphics().p("AydNyMAa7gjMIKAHpMga+AjLg");
	var mask_graphics_22 = new cjs.Graphics().p("AycNyMAa6gjMIJ/HpMga8AjMg");
	var mask_graphics_23 = new cjs.Graphics().p("AydNyMAa7gjLIKAHoMga9AjLg");
	var mask_graphics_24 = new cjs.Graphics().p("AycNyMAa6gjLIJ/HoMga8AjLg");
	var mask_graphics_25 = new cjs.Graphics().p("AycNyMAa6gjLIJ/HoMga9AjLg");
	var mask_graphics_26 = new cjs.Graphics().p("AycNyMAa6gjMIJ/HpMga8AjMg");
	var mask_graphics_48 = new cjs.Graphics().p("AycNyMAa6gjMIJ/HpMga8AjMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:-39.15,y:20.4}).wait(1).to({graphics:mask_graphics_10,x:-36.25,y:21}).wait(1).to({graphics:mask_graphics_11,x:-27.5,y:22.7}).wait(1).to({graphics:mask_graphics_12,x:-12.9,y:25.6}).wait(1).to({graphics:mask_graphics_13,x:7.55,y:29.6}).wait(1).to({graphics:mask_graphics_14,x:33.8,y:34.8}).wait(1).to({graphics:mask_graphics_15,x:65.9,y:41.15}).wait(1).to({graphics:mask_graphics_16,x:103.85,y:48.65}).wait(1).to({graphics:mask_graphics_17,x:147.6,y:57.3}).wait(1).to({graphics:mask_graphics_18,x:195.75,y:66.8}).wait(1).to({graphics:mask_graphics_19,x:239.55,y:75.45}).wait(1).to({graphics:mask_graphics_20,x:277.5,y:82.95}).wait(1).to({graphics:mask_graphics_21,x:309.6,y:89.3}).wait(1).to({graphics:mask_graphics_22,x:335.85,y:94.5}).wait(1).to({graphics:mask_graphics_23,x:356.3,y:98.5}).wait(1).to({graphics:mask_graphics_24,x:370.85,y:101.4}).wait(1).to({graphics:mask_graphics_25,x:379.65,y:103.1}).wait(1).to({graphics:mask_graphics_26,x:382.55,y:103.7}).wait(22).to({graphics:mask_graphics_48,x:382.55,y:103.7}).wait(1).to({graphics:null,x:0,y:0}).wait(320));

	// Layer_34
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#027AEA").ss(2,1,1).p("A1PmDQgOgFgJgJQgTgRAWgTQAWgTM4gCQGcgCGYADICvAeIFMgUIC5APIAagKQAjgKAyAAQBQAACvgFA18G9IDNAAIBBgeIBgAPIA3AeIBVgUIDsAKIBCgUIDdAPIAygPIBVgFIA4AZIFjAAIBvhBIKCgFIBkBQIFQgKIAtAFAzhmNIUoAA");
	this.shape.setTransform(152.6,79.4969);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).wait(39).to({_off:true},1).wait(320));

	// txt_notSticky
	this.instance = new lib.txt_notSticky();
	this.instance.setTransform(154.65,78.5,1,1,0,0,0,-146.5,51);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1).to({alpha:0.0195},0).wait(1).to({alpha:0.1719},0).wait(2).to({alpha:0.3711},0).wait(2).to({alpha:0.4102},0).wait(2).to({alpha:0.7695},0).wait(1).to({alpha:0.6602},0).wait(1).to({alpha:0.5898},0).wait(1).to({alpha:1},0).wait(32).to({_off:true},1).wait(320));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,301.2,129.5);


(lib.txt_killGerms_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shine (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5 = new cjs.Graphics().p("AycNyMAa6gjLIJ/HoMga9AjLg");
	var mask_graphics_6 = new cjs.Graphics().p("AycNyMAa6gjLIJ/HoMga9AjLg");
	var mask_graphics_7 = new cjs.Graphics().p("AydNyMAa7gjMIKAHpMga9AjMg");
	var mask_graphics_8 = new cjs.Graphics().p("AydNyMAa7gjMIJ/HpMga9AjMg");
	var mask_graphics_9 = new cjs.Graphics().p("AycNyMAa6gjMIJ/HpMga8AjMg");
	var mask_graphics_10 = new cjs.Graphics().p("AycNyMAa6gjLIJ/HoMga8AjLg");
	var mask_graphics_11 = new cjs.Graphics().p("AydNyMAa7gjLIKAHoMga9AjLg");
	var mask_graphics_12 = new cjs.Graphics().p("AydNyMAa7gjLIKAHoMga9AjLg");
	var mask_graphics_13 = new cjs.Graphics().p("AycNyMAa6gjMIJ/HpMga8AjMg");
	var mask_graphics_14 = new cjs.Graphics().p("AydNyMAa7gjLIKAHoMga9AjLg");
	var mask_graphics_15 = new cjs.Graphics().p("AycNyMAa6gjMIJ/HpMga8AjMg");
	var mask_graphics_16 = new cjs.Graphics().p("AydNyMAa7gjLIKAHoMga+AjLg");
	var mask_graphics_17 = new cjs.Graphics().p("AycNyMAa6gjLIJ/HoMga9AjLg");
	var mask_graphics_18 = new cjs.Graphics().p("AydNyMAa7gjLIKAHoMga+AjLg");
	var mask_graphics_19 = new cjs.Graphics().p("AydNyMAa7gjMIKAHpMga+AjMg");
	var mask_graphics_20 = new cjs.Graphics().p("AycNyMAa6gjLIJ/HoMga8AjLg");
	var mask_graphics_21 = new cjs.Graphics().p("AydNyMAa7gjMIKAHpMga+AjMg");
	var mask_graphics_22 = new cjs.Graphics().p("AycNyMAa6gjLIJ/HoMga9AjLg");
	var mask_graphics_23 = new cjs.Graphics().p("AycNyMAa6gjMIJ/HpMga9AjMg");
	var mask_graphics_42 = new cjs.Graphics().p("AycNyMAa6gjMIJ/HpMga9AjMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:-48.75,y:22.2}).wait(1).to({graphics:mask_graphics_6,x:-46.05,y:22.9}).wait(1).to({graphics:mask_graphics_7,x:-38,y:25}).wait(1).to({graphics:mask_graphics_8,x:-24.55,y:28.45}).wait(1).to({graphics:mask_graphics_9,x:-5.7,y:33.3}).wait(1).to({graphics:mask_graphics_10,x:18.5,y:39.55}).wait(1).to({graphics:mask_graphics_11,x:48.05,y:47.2}).wait(1).to({graphics:mask_graphics_12,x:83.05,y:56.2}).wait(1).to({graphics:mask_graphics_13,x:123.35,y:66.6}).wait(1).to({graphics:mask_graphics_14,x:169.1,y:78.45}).wait(1).to({graphics:mask_graphics_15,x:214.8,y:90.2}).wait(1).to({graphics:mask_graphics_16,x:255.15,y:100.65}).wait(1).to({graphics:mask_graphics_17,x:290.1,y:109.65}).wait(1).to({graphics:mask_graphics_18,x:319.7,y:117.3}).wait(1).to({graphics:mask_graphics_19,x:343.9,y:123.55}).wait(1).to({graphics:mask_graphics_20,x:362.75,y:128.4}).wait(1).to({graphics:mask_graphics_21,x:376.2,y:131.85}).wait(1).to({graphics:mask_graphics_22,x:384.25,y:133.95}).wait(1).to({graphics:mask_graphics_23,x:386.95,y:134.65}).wait(19).to({graphics:mask_graphics_42,x:386.95,y:134.65}).wait(1).to({graphics:null,x:0,y:0}).wait(689));

	// Layer_36
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#027AEA").ss(2,1,1).p("AIrnDIIjAFIBLgeIEAAFIANgFQASgHAZgDAh/HdIEogFIBfAFIBahQIKcAKIBfBQIF5gFA22l8QgQgPgJgRQgRggAlgHQA8gKG/AFISCgKA3FHEIC/AFIAegUIBpgFIAjAZIBggPIAjAZIDsAAIAjgKIDxAFIAegUIBaAKIAfAUICvgPA1MmGIUUgF");
	this.shape.setTransform(151.3466,86.375);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5).to({_off:false},0).wait(37).to({_off:true},1).wait(689));

	// KillsGerms_mc
	this.instance = new lib.KillsGerms_mc();
	this.instance.setTransform(150.6,86.6,1,1,0,0,0,-150,55.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.1719},1).to({alpha:0.5508},2).to({alpha:0.3711},1).to({alpha:0.5313},1).to({alpha:0.5508},1).to({alpha:0.3906},1).to({alpha:0.8203},1).to({alpha:0.6602},1).to({alpha:1},2).wait(30).to({_off:true},1).wait(689));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,301.7,142.1);


(lib.txt_HealthyHands_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shine (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("AydNyMAa7gjLIKAHoMga+AjLg");
	var mask_graphics_10 = new cjs.Graphics().p("AydNyMAa7gjLIKAHoMga+AjLg");
	var mask_graphics_11 = new cjs.Graphics().p("AycNyMAa6gjMIJ/HpMga8AjMg");
	var mask_graphics_12 = new cjs.Graphics().p("AydNyMAa7gjMIKAHpMga+AjMg");
	var mask_graphics_13 = new cjs.Graphics().p("AydNyMAa7gjMIJ/HpMga9AjLg");
	var mask_graphics_14 = new cjs.Graphics().p("AycNyMAa6gjLIJ/HoMga9AjLg");
	var mask_graphics_15 = new cjs.Graphics().p("AydNyMAa7gjMIKAHpMga+AjMg");
	var mask_graphics_16 = new cjs.Graphics().p("AydNyMAa7gjMIKAHpMga9AjMg");
	var mask_graphics_17 = new cjs.Graphics().p("AydNyMAa7gjMIKAHpMga9AjMg");
	var mask_graphics_18 = new cjs.Graphics().p("AycNyMAa6gjMIJ/HpMga8AjMg");
	var mask_graphics_19 = new cjs.Graphics().p("AydNyMAa7gjMIKAHpMga+AjMg");
	var mask_graphics_20 = new cjs.Graphics().p("AycNyMAa6gjMIJ/HpMga8AjMg");
	var mask_graphics_21 = new cjs.Graphics().p("AycNyMAa6gjMIJ/HpMga8AjLg");
	var mask_graphics_22 = new cjs.Graphics().p("AycNyMAa6gjLIJ/HoMga9AjLg");
	var mask_graphics_23 = new cjs.Graphics().p("AydNyMAa7gjMIKAHpMga9AjMg");
	var mask_graphics_24 = new cjs.Graphics().p("AydNyMAa7gjLIKAHoMga+AjLg");
	var mask_graphics_25 = new cjs.Graphics().p("AydNyMAa7gjLIKAHoMga9AjLg");
	var mask_graphics_26 = new cjs.Graphics().p("AycNyMAa6gjMIJ/HpMga8AjMg");
	var mask_graphics_49 = new cjs.Graphics().p("AycNyMAa6gjMIJ/HpMga8AjMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:-39.15,y:20.4}).wait(1).to({graphics:mask_graphics_10,x:-36.35,y:21.45}).wait(1).to({graphics:mask_graphics_11,x:-27.85,y:24.55}).wait(1).to({graphics:mask_graphics_12,x:-13.75,y:29.8}).wait(1).to({graphics:mask_graphics_13,x:6.05,y:37.1}).wait(1).to({graphics:mask_graphics_14,x:31.45,y:46.5}).wait(1).to({graphics:mask_graphics_15,x:62.55,y:57.95}).wait(1).to({graphics:mask_graphics_16,x:99.25,y:71.55}).wait(1).to({graphics:mask_graphics_17,x:141.65,y:87.2}).wait(1).to({graphics:mask_graphics_18,x:188.25,y:104.4}).wait(1).to({graphics:mask_graphics_19,x:230.6,y:120.05}).wait(1).to({graphics:mask_graphics_20,x:267.35,y:133.65}).wait(1).to({graphics:mask_graphics_21,x:298.4,y:145.1}).wait(1).to({graphics:mask_graphics_22,x:323.85,y:154.5}).wait(1).to({graphics:mask_graphics_23,x:343.6,y:161.8}).wait(1).to({graphics:mask_graphics_24,x:357.75,y:167}).wait(1).to({graphics:mask_graphics_25,x:366.2,y:170.15}).wait(1).to({graphics:mask_graphics_26,x:369.05,y:171.2}).wait(23).to({graphics:mask_graphics_49,x:369.05,y:171.2}).wait(1).to({graphics:null,x:0,y:0}).wait(319));

	// Layer_34
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#027AEA").ss(2,1,1).p("A2DnyIghhkIRYgiIA8g1INNgUIAoA8IFAgNIBCgiIF1gUAK8q6IC0AAA0sohIbXhDIArABQAvgBAQgNA3GJeIDjgHIAvgTIElANIAhAhIElgUIHMAAIBxBdINUAOIB3hyIIIAHAAAJRIJ5AU");
	this.shape.setTransform(152.55,107.225);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).wait(40).to({_off:true},1).wait(319));

	// txt_notSticky
	this.instance = new lib.healthyHands_mc();
	this.instance.setTransform(154.65,78.5,1,1,0,0,0,-146.5,51);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1).to({alpha:0.0195},0).wait(1).to({alpha:0.1719},0).wait(2).to({alpha:0.3711},0).wait(2).to({alpha:0.4102},0).wait(2).to({alpha:0.7695},0).wait(1).to({alpha:0.6602},0).wait(1).to({alpha:0.5898},0).wait(1).to({alpha:1},0).wait(33).to({_off:true},1).wait(319));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,301.4,181.5);


(lib.Ribbon_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.New_txt();
	this.instance.setTransform(-95.6,80.75,2.2105,2.2105,-36.7335,0,0,-18.8,7.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD0A22").s().p("AutHBIZnzWID1FVI5oTWg");
	this.shape.setTransform(-94.25,78.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ribbon_mc, new cjs.Rectangle(-188.5,0,188.5,158), null);


(lib.Bufferin_logo_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bufferin_logo_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AxzHCQgvAAgjghIAAAAQgggiAAgwIAAAAIAAhmQAAgwAggiIAAAAQAjghAvAAIAAAAMAhcAAAQAwAAAiAhIAAAAQAgAiAAAwIAAAAIAABmQAAAwggAiIAAAAQgiAhgwAAIAAAAgAzBBfICUm+QASgqArgaIAAAAQAtgcA2AAIAAAAMAhzgACIibHAQgSArgqAaIAAAAQguAbg2AAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:154.0044,y:146.403}).wait(23).to({graphics:null,x:0,y:0}).wait(336));

	// shine
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-32,-24.5,31.7,24.3).s().p("AycNyMAa6gjLIJ/HoMga8AjLg");
	this.shape.setTransform(-7.95,87.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-32,-24.5,31.7,24.3).s().p("AydNyMAa7gjMIKAHpMga9AjLg");
	this.shape_1.setTransform(41.75,100.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-32,-24.5,31.7,24.3).s().p("AydNyMAa7gjMIKAHpMga9AjMg");
	this.shape_2.setTransform(88,112.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-32,-24.5,31.7,24.3).s().p("AycNyMAa6gjMIJ/HpMga9AjMg");
	this.shape_3.setTransform(130.8,124.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-32,-24.5,31.7,24.3).s().p("AydNyMAa7gjMIKAHpMga+AjMg");
	this.shape_4.setTransform(206.2,144.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-32,-24.5,31.7,24.3).s().p("AydNyMAa7gjLIJ/HoMga9AjLg");
	this.shape_5.setTransform(293.6,167.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-32,-24.5,31.7,24.3).s().p("AydNyMAa7gjLIKAHoMga9AjLg");
	this.shape_6.setTransform(334.7,178.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-32,-24.5,31.7,24.3).s().p("AycNyMAa6gjMIJ/HpMga8AjMg");
	this.shape_7.setTransform(350.15,182.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-32,-24.5,31.7,24.3).s().p("AydNyMAa7gjLIKAHoMga+AjLg");
	this.shape_8.setTransform(375.85,189.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:-7.95,y:87.35}}]},7).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{x:88,y:112.85}}]},1).to({state:[{t:this.shape_3,p:{x:130.8,y:124.2}}]},1).to({state:[{t:this.shape,p:{x:170.25,y:134.7}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2,p:{x:238.75,y:152.9}}]},1).to({state:[{t:this.shape,p:{x:267.9,y:160.6}}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_3,p:{x:315.85,y:173.35}}]},1).to({state:[{t:this.shape_6,p:{x:334.7,y:178.35}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_2,p:{x:362.15,y:185.65}}]},1).to({state:[{t:this.shape_6,p:{x:370.7,y:187.95}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_6,p:{x:377.55,y:189.75}}]},1).to({state:[]},1).wait(336));

	// Bufferin_logo
	this.instance = new lib.Bufferin_logo();
	this.instance.setTransform(155.75,147.15,2.6948,2.6948,0,0,0,-39.1,14.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:3.2639,scaleY:3.2639,x:155.9,y:146.95,alpha:1},7,cjs.Ease.quadOut).wait(33).to({_off:true},1).wait(318));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.6,94.6,253.1,104.5);


// stage content:
(lib.Bufferin_HandSanatizer_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(357));

	// amazon_logo
	this.instance = new lib.amazon_logo();
	this.instance.setTransform(202.85,627.35,1,1,0,0,0,-57,19.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(191).to({_off:false},0).to({y:550.65,alpha:1},9,cjs.Ease.quadOut).wait(157));

	// ctaBtn_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_210 = new cjs.Graphics().p("AmoD1QiMAAAAiMIAAAAIAAizQAAgoALgdIAAAAQAKglAbgVIAAAAQAigrBOAAIAAAAIM9AAQCMAAAACMIAAAAIAACzQAABFghAjIAAAAQgeBChhAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(210).to({graphics:mask_graphics_210,x:63.6251,y:548.1252}).wait(147));

	// shine_cta
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-24,-18.4,23.9,18.2).s().p("At3KXIUP6cIHgFvI0Qacg");
	this.shape_1.setTransform(-26.65,500.875);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-24,-18.4,23.9,18.2).s().p("At3KXIUO6cIHhFvI0Qacg");
	this.shape_2.setTransform(7.4,514.175);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(210).to({_off:false},0).wait(1).to({x:-9.2,y:507.675},0).to({_off:true},1).wait(1).to({_off:false,x:23.15,y:520.325},0).to({_off:true},1).wait(2).to({_off:false,x:65.35,y:536.775},0).to({_off:true},1).wait(1).to({_off:false,x:89.2,y:546.075},0).to({_off:true},1).wait(1).to({_off:false,x:109.6,y:554.075},0).wait(1).to({x:118.55,y:557.575},0).to({_off:true},1).wait(1).to({_off:false,x:133.9,y:563.525},0).wait(1).to({x:140.3,y:566.025},0).wait(1).to({x:145.8,y:568.175},0).wait(1).to({x:150.5,y:570.025},0).wait(1).to({x:154.35,y:571.525},0).wait(1).to({x:157.3,y:572.675},0).to({_off:true},1).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(212).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:38.1,y:526.125},0).wait(1).to({x:52.15,y:531.625},0).to({_off:true},1).wait(1).to({_off:false,x:77.7,y:541.575},0).to({_off:true},1).wait(1).to({_off:false,x:99.85,y:550.225},0).to({_off:true},1).wait(2).to({_off:false,x:126.65,y:560.725},0).to({_off:true},1).wait(6).to({_off:false,x:159.45,y:573.525},0).wait(1).to({x:160.7,y:574.025},0).wait(1).to({x:161.15,y:574.175},0).wait(126));

	// ctaBtn
	this.instance_1 = new lib.ctaBtn();
	this.instance_1.setTransform(64.55,623.3,1,1,0,0,0,-55.6,23);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(191).to({_off:false},0).to({y:546.6,alpha:1},9,cjs.Ease.quadOut).wait(157));

	// bufferin_logo
	this.instance_2 = new lib.Bufferin_logo_animation("synched",0,false);
	this.instance_2.setTransform(153.5,83.35,1.0794,1.0794,0,0,0,155.1,146.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).wait(41).to({startPosition:28},0).to({alpha:0,startPosition:33},9).to({_off:true},1).wait(156));

	// BillNye_mc
	this.instance_3 = new lib.billNye_mc();
	this.instance_3.setTransform(535,441.85,1.2264,1.2264,-6.5099,0,0,-197.9,240.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150).to({_off:false},0).to({x:211},14,cjs.Ease.quadOut).wait(27).to({y:477.85},9,cjs.Ease.quadInOut).wait(157));

	// Layer_46
	this.instance_4 = new lib.txt_HealthyHands_animation("synched",0,false);
	this.instance_4.setTransform(-1.25,-8.55);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(191).to({_off:false},0).to({y:31.95,startPosition:9},9,cjs.Ease.quadOut).wait(40).to({mode:"single",startPosition:49},0).wait(117));

	// txt_notSticky_animation
	this.instance_5 = new lib.txt_notSticky_animation("synched",0,false);
	this.instance_5.setTransform(-1.55,0.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(95).to({_off:false},0).wait(49).to({startPosition:28},0).to({alpha:0,startPosition:34},9,cjs.Ease.quadOut).to({_off:true},1).wait(203));

	// billNye_02
	this.instance_6 = new lib.billNye_02();
	this.instance_6.setTransform(162.6,365.5,1,1,0,0,0,-182.5,234.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(95).to({_off:false},0).to({alpha:1},9).wait(40).to({y:853.5},9,cjs.Ease.quadIn).to({_off:true},1).wait(203));

	// txt_killGerms_animation
	this.instance_7 = new lib.txt_killGerms_animation("synched",0,false);
	this.instance_7.setTransform(149.55,87.35,1,1,0,0,0,150.6,86.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(43).to({_off:false},0).wait(42).to({startPosition:34},0).to({alpha:0.5508,startPosition:39},9).to({_off:true},1).wait(262));

	// BillNye_mc
	this.instance_8 = new lib.billNye_mc();
	this.instance_8.setTransform(504.7,391.5,1,1,0,0,0,-198,240.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(43).to({_off:false},0).to({x:168.7},9,cjs.Ease.quadOut).wait(43).to({alpha:0},9).to({_off:true},1).wait(252));

	// Ribbon_mc
	this.instance_9 = new lib.Ribbon_mc();
	this.instance_9.setTransform(-20.7,-20.95,1,1,0,0,0,-94.2,79);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).to({x:53.3,y:41.05},10,cjs.Ease.quadOut).wait(22).to({x:-246.7,alpha:0},10,cjs.Ease.quadOut).to({_off:true},1).wait(311));

	// Bufferin_logo
	this.instance_10 = new lib.Bufferin_logo_animation("synched",0,false);
	this.instance_10.setTransform(154.6,144.65,1,1,0,0,0,155.2,146.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(35).to({startPosition:31},0).to({x:-143.4,alpha:0,startPosition:36},10,cjs.Ease.quadOut).to({_off:true},1).wait(311));

	// Product_bottle
	this.instance_11 = new lib.Product_bottle_1();
	this.instance_11.setTransform(152.65,793.65,1,1,0,0,0,-80.5,190);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:411.65},11,cjs.Ease.quadOut).wait(24).to({x:-147.35,alpha:0},10,cjs.Ease.quadOut).to({_off:true},1).wait(311));

	// background_color
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#1B276A","#142058","#091039"],[0.035,0.514,0.953],0,0,0,0,0,335.4).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_3.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(357));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-191,200.1,1002.7,890.4999999999999);
// library properties:
lib.properties = {
	id: '836AAC3FFB6A4A6F868D8C5ED06E6846',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"amazonLogo.png?1611083715529", id:"amazonLogo"},
		{src:"billNye.jpg?1611083715529", id:"billNye"},
		{src:"BillNye_02.jpg?1611083715529", id:"BillNye_02"},
		{src:"Product_bottle.jpg?1611083715529", id:"Product_bottle"},
		{src:"txt_HealthyHands.png?1611083715529", id:"txt_HealthyHands"},
		{src:"txt_kills.png?1611083715529", id:"txt_kills"},
		{src:"txt_sticky.png?1611083715529", id:"txt_sticky"}
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
an.compositions['836AAC3FFB6A4A6F868D8C5ED06E6846'] = {
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
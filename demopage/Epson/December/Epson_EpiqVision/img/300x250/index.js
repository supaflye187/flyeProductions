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



(lib.endFrame_screen_01 = function() {
	this.initialize(img.endFrame_screen_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.endFrame_screen_02 = function() {
	this.initialize(img.endFrame_screen_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,190);


(lib.epson_logo = function() {
	this.initialize(img.epson_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,21);


(lib.image_group = function() {
	this.initialize(img.image_group);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.shaq_endFrame = function() {
	this.initialize(img.shaq_endFrame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,145);


(lib.shaq_frame_01 = function() {
	this.initialize(img.shaq_frame_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.shaq_frame_02 = function() {
	this.initialize(img.shaq_frame_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.shaq_frame_03 = function() {
	this.initialize(img.shaq_frame_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.shaq_frame_04 = function() {
	this.initialize(img.shaq_frame_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.shaq_frame_05 = function() {
	this.initialize(img.shaq_frame_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.shaq_frame_06 = function() {
	this.initialize(img.shaq_frame_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.shaq_frame_09 = function() {
	this.initialize(img.shaq_frame_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);// helper functions:

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


(lib.Shaq_image = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shaq_endFrame();
	this.instance.setTransform(-17,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Shaq_image, new cjs.Rectangle(-17,-72.5,34,145), null);


(lib.shaq_frame_09_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgQAUIAAgnIAhAAIAAAng");
	this.shape.setTransform(110.575,-96.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcBDQgMgHgEgLQgGgKgBgNIgBgaQgBgOADgNQACgNAGgKQAFgKAMgGQAKgGARAAQAQAAAKAFQAKAFAGAJQAFAJADANQACAOAAAQIAAAHIhGAAIAAALIAAAMIADAKQACAFAEADQAEACAEAAQAJAAADgGQAFgHABgNIAhAAQgCAZgMAMQgMANgZAAQgTAAgKgGgAgHgtQgEACgCAEIgDAJIAAAKIAAAFIAjAAIgBgOQgBgGgBgEQgDgEgDgDQgDgCgGAAQgEAAgEADg");
	this.shape_1.setTransform(101.1,-101.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrBNQgLgRAAgnQAAgmALgRQAKgRAWAAQAKAAAHAEQAHAEAFAIIABAAIAAg6IAkAAIAAC4IgjAAIAAgPIAAAAQgGAKgHAEQgHAEgLAAQgWAAgKgRgAgOgMQgEALAAAWQAAAXAEAMQADALALAAQAMAAADgLQAEgMAAgXQAAgWgEgLQgDgMgMAAQgLAAgDAMg");
	this.shape_2.setTransform(88.075,-103.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBeIAAiLIAjAAIAACLgAgRg+IAAgfIAjAAIAAAfg");
	this.shape_3.setTransform(78.3,-103.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYBGQgKgDgGgFQgGgGgCgIQgDgIAAgLIAAgEIAgAAIAAAEQAAAJAFAGQAFAFAJAAQAIAAAEgEQAFgEAAgIQAAgHgEgDQgDgEgGgCIgYgJQgPgFgHgJQgIgJAAgPQAAgJADgHQADgIAGgGQAHgFAJgEQAKgDANAAQAYAAAMAKQAMAKAAAUIAAAFIghAAQAAgLgDgFQgEgFgIAAQgGAAgFAEQgFAEAAAHQAAAFADAFQADAEAJADIAVAHQARAGAHAIQAHAJAAAQQAAALgEAIQgEAJgHAFQgHAFgJADQgKACgLAAQgOAAgKgDg");
	this.shape_4.setTransform(69.125,-101.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCBZQgGgBgEgFQgEgEgBgHIgBgSIAAhPIgSAAIAAgZIASAAIAAgnIAjAAIAAAnIAVAAIAAAZIgVAAIAABLQAAAIACAEQADADAHAAIAFAAIAEAAIAAAZIgMAAIgMABQgLgBgFgBg");
	this.shape_5.setTransform(59.25,-103.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkBIIAAiLIAjAAIAAATIAAAAQAFgLAHgGQAIgGALAAIAEAAIADABIAAAiIgGAAIgFAAIgKABQgEABgEADQgEADgDAFQgBAFAAAHIAABTg");
	this.shape_6.setTransform(51.225,-101.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrA+QgJgJAAgUIAAhoIAkAAIAABgQAAALAEAFQADADAIAAQASAAAAgXIAAhcIAkAAIAACMIgjAAIAAgRIAAAAQgGALgIAEQgJAEgMAAQgQABgKgKg");
	this.shape_7.setTransform(39.5,-101.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaBFQgKgEgHgJQgGgKgCgOQgDgOAAgSQAAgRADgNQADgOAGgJQAHgKAKgFQALgEAOAAQAQgBALAFQALAFAGAJQAGAJADAOQACAOAAARQAAASgDAOQgCAOgHAJQgGAJgLAFQgLAEgPAAQgPAAgLgEgAgJgsQgEADgCAHQgCAGgBAJIAAATIAAAUQABAJACAHQACAGAEAEQAEADAFAAQALAAAEgLQAEgLAAgbQAAgZgEgLQgEgMgLAAQgFAAgEAEg");
	this.shape_8.setTransform(26.425,-101.3775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWBGQgKgDgHgJQgGgIgEgOQgEgPAAgVQAAgUAFgPQAEgOAHgIQAIgIAKgEQALgDAMAAQAZAAAMAOQAMAPAAAZIghAAIgCgKIgCgJQgBgEgDgDQgEgCgFAAQgFAAgEADQgFADgBAFQgDAGAAAJIgCAVIACAWQAAAJADAGQACAGADADQAEACAFAAQAJAAAEgHQAFgIAAgRIAhAAQAAAbgLAPQgNAOgdAAQgMAAgKgDg");
	this.shape_9.setTransform(13.85,-101.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnBWQgMgKAAgSIAiAAQAAAHAFAEIAGACIAGABQAKAAAFgHQAEgHABgKIAAgSIgBAAQgFAHgJAFQgGAFgJAAQgWAAgKgRQgLgQAAglIACgZQABgNAEgKQAFgKAJgHQAJgGAOAAQAIAAAGAEQAJAEAFALIABAAIAAgQIAiAAIAACEQAAAbgOAOQgNANgfAAQgXAAgMgJgAgIhAQgDADgDAFQgBAGgBAKIgBAYIABANQAAAGACAFQACAFAEADQAEADAEAAQAGAAAEgDQADgDACgFIAEgMIABgQQAAgZgFgLQgEgLgKAAQgFAAgEADg");
	this.shape_10.setTransform(-5.75,-99.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AARBIIAAhgQAAgLgEgEQgDgEgIAAQgSAAAAAXIAABcIgkAAIAAiLIAiAAIAAAQIABAAQAFgKAJgFQAJgFALAAQASAAAJAKQAJAJAAAVIAABng");
	this.shape_11.setTransform(-18.9,-101.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRBeIAAiLIAjAAIAACLgAgRg+IAAgfIAjAAIAAAfg");
	this.shape_12.setTransform(-28.85,-103.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCBZQgGgBgEgFQgDgEgCgHIgBgSIAAhPIgSAAIAAgZIASAAIAAgnIAjAAIAAAnIAUAAIAAAZIgUAAIAABLQgBAIADAEQADADAHAAIAFAAIADAAIAAAZIgLAAIgMABQgKgBgGgBg");
	this.shape_13.setTransform(-36.05,-103.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCBZQgHgBgDgFQgDgEgCgHIgBgSIAAhPIgSAAIAAgZIASAAIAAgnIAjAAIAAAnIAUAAIAAAZIgUAAIAABLQgBAIADAEQADADAHAAIAFAAIADAAIAAAZIgLAAIgMABQgKgBgGgBg");
	this.shape_14.setTransform(-44.05,-103.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRBeIAAiLIAjAAIAACLgAgRg+IAAgfIAjAAIAAAfg");
	this.shape_15.setTransform(-51.4,-103.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYBGQgKgDgGgFQgGgGgCgIQgDgIAAgLIAAgEIAgAAIAAAEQAAAJAFAGQAFAFAJAAQAIAAAEgEQAFgEAAgIQAAgHgEgDQgDgEgGgCIgYgJQgPgFgHgJQgIgJAAgPQAAgJADgHQADgIAGgGQAHgFAJgEQAKgDANAAQAYAAAMAKQAMAKAAAUIAAAFIghAAQAAgLgDgFQgEgFgIAAQgGAAgFAEQgFAEAAAHQAAAFADAFQADAEAJADIAVAHQARAGAHAIQAHAJAAAQQAAALgEAIQgEAJgHAFQgHAFgJADQgKACgLAAQgOAAgKgDg");
	this.shape_16.setTransform(-60.575,-101.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcBDQgMgHgEgLQgGgKgBgNIgBgaQgBgOADgNQACgNAGgKQAFgKAMgGQAKgGARAAQAQAAAKAFQAKAFAGAJQAFAJADANQACAOAAAQIAAAHIhGAAIAAALIAAAMIADAKQACAFAEADQAEACAEAAQAJAAADgGQAFgHABgNIAhAAQgCAZgMAMQgMANgZAAQgTAAgKgGgAgHgtQgEACgCAEIgDAJIAAAKIAAAFIAjAAIgBgOQgBgGgBgEQgDgEgDgDQgDgCgGAAQgEAAgEADg");
	this.shape_17.setTransform(101.1,-128.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkBIIAAiLIAjAAIAAATIAAAAQAFgLAHgGQAIgGALAAIAEAAIADABIAAAiIgGAAIgFAAIgKABQgEABgEADQgEADgDAFQgBAFAAAHIAABTg");
	this.shape_18.setTransform(90.975,-128.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQAXQAHgBADgGQADgGAAgHIAAgDIgNAAIAAgpIAhAAIAAAiQAAAJgBAJQgCAJgEAGQgEAGgGAEQgGAFgKABg");
	this.shape_19.setTransform(82.375,-135.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgrA/QgJgKAAgVIAAhmIAkAAIAABfQAAALAEAEQADAFAIAAQASAAAAgYIAAhbIAkAAIAACKIgjAAIAAgQIAAAAQgGAKgIAFQgJAEgMABQgRgBgJgIg");
	this.shape_20.setTransform(72.15,-127.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaBFQgKgEgHgJQgGgKgCgOQgDgOAAgSQAAgRADgNQADgOAGgJQAHgKAKgFQALgEAOAAQAQgBALAFQALAFAGAJQAGAJADAOQACAOAAARQAAASgDAOQgCAOgHAJQgGAJgLAFQgLAEgPAAQgPAAgLgEgAgJgsQgEADgCAHQgCAGgBAJIAAATIAAAUQABAJACAHQACAGAEAEQAEADAFAAQALAAAEgLQAEgLAAgbQAAgZgEgLQgEgMgLAAQgFAAgEAEg");
	this.shape_21.setTransform(59.075,-128.1275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgtBcIAAgbIAKACQAJgBAFgFQAEgFABgJIgniKIAlAAIAUBgIAAAAIAShgIAkAAIghCBIgJAdQgFAKgGAGQgEAGgJABQgIACgMAAg");
	this.shape_22.setTransform(46.775,-125.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdBDQgKgHgFgLQgGgKgBgNIgBgaQgBgOADgNQABgNAHgKQAFgKAMgGQAKgGASAAQAPAAAKAFQAKAFAGAJQAFAJACANQADAOAAAQIAAAHIhGAAIAAALIABAMIACAKQACAFAEADQAEACAEAAQAIAAAEgGQAFgHACgNIAfAAQgBAZgLAMQgNANgZAAQgSAAgMgGgAgHgtQgEACgCAEIgCAJIgBAKIAAAFIAkAAIgCgOQAAgGgDgEQgBgEgEgDQgDgCgGAAQgEAAgEADg");
	this.shape_23.setTransform(28.1,-128.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAUBdIgdg6IgNARIAAApIgkAAIAAi5IAkAAIAABhIAAAAIAkgzIAnAAIgoA2IAuBVg");
	this.shape_24.setTransform(15.975,-130.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRBeIAAiLIAjAAIAACLgAgRg+IAAgfIAjAAIAAAfg");
	this.shape_25.setTransform(5.3,-130.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgRBdIAAi5IAjAAIAAC5g");
	this.shape_26.setTransform(-1.25,-130.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYBGQgKgDgGgFQgGgGgCgIQgDgIAAgLIAAgEIAgAAIAAAEQAAAJAFAGQAFAFAJAAQAIAAAEgEQAFgEAAgIQAAgHgEgDQgDgEgGgCIgYgJQgPgFgHgJQgIgJAAgPQAAgJADgHQADgIAGgGQAHgFAJgEQAKgDANAAQAYAAAMAKQAMAKAAAUIAAAFIghAAQAAgLgDgFQgEgFgIAAQgGAAgFAEQgFAEAAAHQAAAFADAFQADAEAJADIAVAHQARAGAHAIQAHAJAAAQQAAALgEAIQgEAJgHAFQgHAFgJADQgKACgLAAQgOAAgKgDg");
	this.shape_27.setTransform(-16.975,-128.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRBdIAAi5IAjAAIAAC5g");
	this.shape_28.setTransform(-26.2,-130.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdBDQgKgHgGgLQgFgKgBgNIgCgaQAAgOADgNQABgNAHgKQAGgKAKgGQALgGASAAQAPAAAKAFQAKAFAFAJQAHAJABANQACAOAAAQIAAAHIhGAAIAAALIACAMIADAKQACAFADADQADACAEAAQAKAAAEgGQADgHADgNIAfAAQAAAZgMAMQgMANgaAAQgSAAgMgGgAgHgtQgDACgCAEIgDAJIgCAKIAAAFIAlAAIgCgOQgBgGgCgEQgCgEgDgDQgEgCgFAAQgEAAgEADg");
	this.shape_29.setTransform(-35.65,-128.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgcBDQgMgHgFgLQgFgKgBgNIgCgaQABgOACgNQACgNAFgKQAGgKALgGQALgGARAAQAQAAAKAFQAKAFAFAJQAGAJADANQABAOAAAQIAAAHIhGAAIAAALIABAMIAEAKQACAFADADQAEACADAAQAJAAAFgGQADgHACgNIAhAAQgCAZgMAMQgLANgaAAQgTAAgKgGgAgHgtQgDACgCAEIgEAJIgBAKIAAAFIAkAAIgBgOQAAgGgCgEQgCgEgEgDQgDgCgGAAQgFAAgDADg");
	this.shape_30.setTransform(-48,-128.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgzBdIAAi5IBnAAIAAAfIhBAAIAAArIA9AAIAAAeIg9AAIAABRg");
	this.shape_31.setTransform(-59.85,-130.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_frame_09_txt, new cjs.Rectangle(-75,-148.1,191.1,61.5), null);


(lib.Shaq_frame_09 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.161,1],33.1,336.4,33.1,-117.4).s().p("A4nU7MAAAgp1MAxPAAAMAAAAp1g");
	this.shape.setTransform(-0.9,32.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.shaq_frame_09();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Shaq_frame_09, new cjs.Rectangle(-158.5,-125,315.2,291.7), null);


(lib.shaq_frame_07_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAZBmIAAiIQAAgQgGgGQgFgGgMAAQgaAAAAAhIAACDIgzAAIAAjGIAyAAIAAAXIAAAAQAJgOAMgIQAMgGARAAQAYAAAOANQANANgBAfIAACSg");
	this.shape.setTransform(102,-97);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpBfQgQgKgHgOQgIgQgBgTIgCgkQAAgVADgSQACgSAJgOQAIgPAQgJQAQgIAZAAQAVAAAPAHQAOAHAIANQAIANADATQADATAAAXIAAAKIhkAAIAAAQIACASIAEAOQADAGAEAEQAFAFAGAAQANAAAGgKQAGgJACgTIAuAAQgBAjgSASQgQASglAAQgbAAgPgJgAgKhBQgGADgCAHIgEAMIgCAOIAAAIIAzAAIgBgUQgBgJgDgGQgCgGgGgDQgFgEgIAAQgGABgFADg");
	this.shape_1.setTransform(83.95,-96.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpBfQgQgKgHgOQgIgQgCgTIgBgkQAAgVADgSQACgSAJgOQAJgPAPgJQAPgIAaAAQAWAAAOAHQAOAHAIANQAIANAEATQACATAAAXIAAAKIhkAAIAAAQIACASIAEAOQADAGAEAEQAGAFAGAAQAMAAAHgKQAFgJADgTIAuAAQgCAjgRASQgSASgkAAQgbAAgPgJgAgKhBQgGADgCAHIgEAMIgCAOIAAAIIA0AAIgCgUQgBgJgDgGQgDgGgFgDQgFgEgHAAQgIABgEADg");
	this.shape_2.setTransform(66.6,-96.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BmIAAjGIAyAAIAAAbIAAAAQAHgPALgJQALgIAQAAIAFAAIAEAAIAAAyIgIgBIgIAAIgNABQgGACgHAFQgFADgDAIQgCAGgBALIAAB2g");
	this.shape_3.setTransform(52.45,-97);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggBjQgOgEgKgMQgJgNgFgTQgFgVAAgeQAAgdAGgVQAGgTAKgMQAMgNAOgEQAPgFARAAQAjAAATAVQARAUAAAkIgxAAIgBgPIgDgMQgDgGgEgDQgEgEgHgBQgJAAgGAFQgFAEgEAIQgCAJgBANIgCAdIACAgQABANACAIQADAJAGADQAFAFAIAAQAMgBAHgKQAFgMAAgYIAxAAQAAAngRAUQgSAVgpAAQgSAAgOgFg");
	this.shape_4.setTransform(36.7,-96.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBkQgOgEgIgIQgJgJgDgLQgDgMgBgOIAAgHIAuAAIAAAHQAAAMAHAJQAHAHANABQALAAAHgHQAHgFAAgNQAAgJgFgFQgGgFgIgDIgjgNQgUgHgLgMQgLgOAAgWQAAgMAEgLQAEgKAJgJQAJgHAOgFQANgFAUAAQAiAAAQAOQARAQAAAbIAAAIIguAAQABgQgGgHQgEgIgNAAQgIABgIAFQgHAFAAALQAAAIAEAFQAFAGANAEIAeAKQAYAJAKAMQAKANAAAXQAAAPgGAMQgGAMgJAIQgKAHgNADQgOAEgQAAQgVAAgOgEg");
	this.shape_5.setTransform(19.7,-96.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzBjQgJgEgGgIQgFgJgDgJQgCgKAAgLQAAgOADgKQADgKAGgHQAGgHAJgFQAKgEANgEIAcgIQALgCAFgGQAEgFAAgKQAAgLgFgHQgGgGgMgBQgLAAgGAHQgGAIAAALIAAAGIguAAIAAgFQAAgRAFgMQAGgLAJgIQAKgHANgDQAMgDAPAAQAWAAAOAEQAOAFAIAIQAHAIADALQADAMAAAMIAABpIABAVIAFARIgxAAIgDgKIgDgLIgBAAQgIAQgMAEQgLAFgSAAQgOAAgJgFgAALAHIgLADQgOAEgHAHQgGAJAAANQAAALAEAIQAEAJALAAIAJgCQAGgCAFgEQAEgDADgGQADgGAAgJIAAgng");
	this.shape_6.setTransform(-6.825,-96.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag4B5QgRgOAAgZIAxAAQAAAKAHAGIAIADIAJACQAPAAAHgKQAGgKAAgPIAAgaIgBAAQgHALgMAHQgLAGgLAAQgfAAgPgXQgPgXAAg2IABgjQADgSAGgOQAHgPAMgJQAMgKAVABQALAAAKAFQAMAGAHAQIABAAIAAgXIAxAAIAAC8QgBAngSATQgUAUgrgBQghAAgSgOgAgLhcQgGAEgDAIQgCAJgBANIgCAiIACAUQABAIACAHQADAIAFAEQAFAEAHAAQAIAAAGgEQAFgFADgHQADgHABgKIACgXQAAgkgGgPQgFgPgQgBQgIABgEADg");
	this.shape_7.setTransform(-25.4,-93.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpBfQgPgKgIgOQgHgQgCgTIgCgkQAAgVADgSQADgSAIgOQAIgPAQgJQAQgIAYAAQAWAAAOAHQAPAHAIANQAIANADATQADATAAAXIAAAKIhkAAIAAAQIABASIAFAOQADAGAFAEQAFAFAFAAQAOAAAFgKQAGgJACgTIAuAAQgCAjgRASQgRASgkAAQgaAAgQgJgAgKhBQgFADgDAHIgFAMIgBAOIAAAIIAzAAIgBgUQgCgJgCgGQgCgGgGgDQgFgEgIAAQgGABgFADg");
	this.shape_8.setTransform(-43.15,-96.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABIBmIAAiKQAAgNgEgHQgFgGgLAAQgMAAgHAIQgHAJAAARIAACCIgzAAIAAiKQAAgNgEgHQgFgGgLAAQgMAAgHAIQgHAJAAARIAACCIgzAAIAAjGIAxAAIAAAUIAAAAQAKgOAMgGQAMgFARAAQARAAALAIQANAIAEAQIAAAAQAGgRANgHQANgIATAAQAZAAAMAPQAMAQAAAcIAACQg");
	this.shape_9.setTransform(-65.925,-97);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAYCEIAAiJQABgPgGgGQgFgGgMAAQgZAAgBAgIAACEIgzAAIAAkHIAzAAIAABWIABAAQAPgaAhAAQAYAAAOANQANAOgBAdIAACTg");
	this.shape_10.setTransform(72.2,-130.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggBjQgOgEgKgMQgJgNgFgTQgFgUAAgfQAAgeAGgTQAGgVAKgMQALgLAPgGQAPgEARAAQAjAAATAUQARAVAAAjIgxAAIgBgNIgDgOQgCgFgFgEQgEgDgHAAQgJgBgGAFQgFAEgDAJQgDAIgBAMIgCAeIACAgQABAMADAJQACAIAGAFQAFADAHAAQANABAHgLQAFgMAAgYIAxAAQAAAngRAVQgSAUgpAAQgSAAgOgFg");
	this.shape_11.setTransform(54.15,-127.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAYBmIAAiJQABgPgGgGQgFgGgLAAQgaAAAAAhIAACDIg0AAIAAjGIAyAAIAAAXIAAAAQAJgOAMgIQAMgGARAAQAYAAAOANQANAOgBAdIAACTg");
	this.shape_12.setTransform(36.1,-127.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZCGIAAjGIAzAAIAADGgAgZhZIAAgsIAzAAIAAAsg");
	this.shape_13.setTransform(22.2,-130.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgzAWIAAgrIBnAAIAAArg");
	this.shape_14.setTransform(10.7,-128.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnB/QgQgHgJgOQgJgQgEgYQgEgYAAgjIACg0QACgZAIgTQAIgUAQgLQARgMAcAAQAYAAAQAHQAQAHAJAPQAJAPAEAZQAEAYAAAiIgCA0QgBAZgJATQgIAUgQALQgRALgdAAQgXAAgQgGgAgNhdQgGAEgDAKQgDALgCAQIgBArIAAAbIABApQACAQADAIQADAKAGADQAFADAIAAQAJAAAFgEQAGgEADgKQADgLACgRIABgqIAAgbIgBgoQgCgRgDgIQgDgKgGgDQgFgDgJAAQgIAAgFAEg");
	this.shape_15.setTransform(-5.275,-130.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhQCDQAAgRAEgPQADgPAIgOQAHgOALgNQALgNAOgNIAWgUIANgOIAIgOQADgGABgIIABgRQAAghgaAAQgJAAgGAEQgFAEgEAHQgDAHgBAKIgBATIgzAAIAAgKQAAglAUgUQAUgTApAAQAoAAATASQATATAAAiQAAANgCALQgCALgFAKQgFAKgIAIIgTATIgdAcQgLALgHAKQgGAKgCAIIBiAAIAAApg");
	this.shape_16.setTransform(-23.425,-130.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAACDIAAi4Ig0AAIAAgjIAFAAQAbAAAPgKQAPgKAEgWIAnAAIAAEFg");
	this.shape_17.setTransform(-43.375,-130.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_frame_07_txt, new cjs.Rectangle(-82,-155.1,195.6,78.5), null);


(lib.shaq_frame_07 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.161,1],33.1,336.4,33.1,-117.4).s().p("A4nU7IAAh5QAQAFASAAQA2ABAqgpQApgpgBg2QAfgXAsAOQAnAMAeAiIAzBCQAdAoAcARQAjAWArgDQAsgBAigZQAhgZAOgpQAPgpgMgoIUPg8QAygCAWgDQAogFAdgNQAYgLASgQIQVgPIAAFygArlEMQgTgRgagUQgugjgbgRQgqgaglgOQgSgHgSgEQgFiPgJidIANhRQAOheAHhOQAJhpgMhJQgQhhg2g7QAfgegBgxQAAgugaglQgJgOgMgMIgGg3QgUihggiCIACgtMAp0AAAIAAZGMgkNAAAg");
	this.shape.setTransform(0,36.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.instance = new lib.shaq_frame_09();
	this.instance.setTransform(-196.05,-161.9,1.2879,1.2879);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.161,1],33.1,336.4,33.1,-117.4).s().p("AOeU7QAZgGAVgNQAegUANgfQAQgngSgsQgPglgfgZQExAEEwAGIAADNgAxaU7IAAgBIAAgKIAAgKIAAgKIAAgGQATgJAUgHQA3gVBIgLQAygHBTgGQMig4MUCTIAnAHgAxaNhIAAgKIAAgKIAAgKIAAgJIAAgKIAAgKIAAgKIAAgKIAAgLIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKMAqCAAAIAAD2QyFgZwnASInEAIIgSABIAAgIgAxaFsIAAgKIAAgLIAAgKIAAgKIAAgKIAAgJIAAgKIAAgKIAAgKIAAgKIAAgLIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgLIAAgKIAAgKIAAgKIAAgJIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgLIAAgKIAAgKIAAgKIAAgKIAAgJIAAgKIAAgKIAAgKIAAgLIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgLIAAgKIAAgKIAAgKIAAgKIAAgJIAAgKIAAgKIAAgLIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgLIAAgJIAAgKIAAgKIAAgKIAAgLIAAgKIAAgKIAAgKIAAgKIAAgJIAAgKIAAgKIAAgLIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgLIAAgJIAAgKIAAgKIAAgKIAAgLIAAgKIAAgKIAAgKIAAgKIAAgJIAAgKIAAgLIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgLIAAgKIAAgJIAAgKIAAgKIAAgKIAAgLIAAgKIAAgKIAAgKIAAgKIgEgJIAAgKIAAgLIgDgKIgDgKIgEgKIgDgKIgEgGMAqXAAAIAAamMgqCAAAgA4mgNIACBjQABB7gEBRgA4n06IAEAAIgEAbg");
	this.shape_1.setTransform(0,17.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_frame_07, new cjs.Rectangle(-196,-161.9,386.4,332.1), null);


(lib.shaq_frame_06_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgQAUIAAgnIAhAAIAAAng");
	this.shape.setTransform(127.975,20.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcBDQgLgHgGgLQgFgKgBgNIgCgaQAAgOADgNQABgNAGgKQAHgKAKgGQALgGASAAQAPAAAKAFQAKAFAFAJQAHAJACANQABAOAAAQIAAAHIhGAAIAAALIABAMIAEAKQACAFADADQADACAEAAQAJAAAFgGQADgHACgNIAhAAQgCAZgLAMQgMANgaAAQgTAAgKgGgAgHgtQgDACgCAEIgEAJIgBAKIAAAFIAkAAIgBgOQAAgGgCgEQgDgEgDgDQgEgCgFAAQgFAAgDADg");
	this.shape_1.setTransform(118.6,15.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWBGQgKgDgHgJQgGgIgEgOQgDgPgBgVQABgUAEgPQAEgOAHgIQAIgIALgEQAKgDAMAAQAYAAANAOQAMAPAAAZIgiAAIgBgKIgBgJQgCgEgEgDQgDgCgFAAQgFAAgFADQgDADgCAFQgDAGgBAJIgBAVIABAWQABAJADAGQACAGADADQAEACAFAAQAJAAAEgHQAFgIgBgRIAiAAQABAbgMAPQgNAOgdAAQgMAAgKgDg");
	this.shape_2.setTransform(106.35,15.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARBIIAAhgQAAgLgEgEQgDgEgIAAQgSAAAAAXIAABcIgkAAIAAiLIAiAAIAAAQIABAAQAFgKAJgFQAJgFALAAQASAAAJAKQAJAJAAAVIAABng");
	this.shape_3.setTransform(93.6,15.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcBDQgMgHgEgLQgGgKgBgNIgBgaQgBgOADgNQACgNAGgKQAFgKAMgGQAKgGARAAQAQAAAKAFQAKAFAGAJQAFAJADANQACAOAAAQIAAAHIhGAAIAAALIAAAMIADAKQACAFAEADQAEACAEAAQAJAAADgGQAFgHABgNIAhAAQgCAZgMAMQgMANgZAAQgTAAgKgGgAgHgtQgEACgCAEIgDAJIAAAKIAAAFIAjAAIgBgOQgBgGgBgEQgDgEgDgDQgDgCgGAAQgEAAgEADg");
	this.shape_4.setTransform(80.85,15.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRBeIAAiLIAjAAIAACLgAgRg+IAAgfIAjAAIAAAfg");
	this.shape_5.setTransform(71.5,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkBIIAAiLIAjAAIAAATIAAAAQAFgLAHgGQAIgGALAAIAEAAIADABIAAAiIgGAAIgFAAIgKABQgEABgEADQgEADgDAFQgBAFAAAHIAABTg");
	this.shape_6.setTransform(64.375,15.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcBDQgMgHgFgLQgFgKgBgNIgCgaQABgOACgNQACgNAFgKQAGgKALgGQALgGARAAQAQAAAKAFQAKAFAFAJQAGAJADANQABAOAAAQIAAAHIhGAAIAAALIABAMIAEAKQACAFADADQAEACADAAQAJAAAFgGQADgHACgNIAhAAQgCAZgMAMQgLANgaAAQgTAAgKgGgAgHgtQgDACgCAEIgEAJIgBAKIAAAFIAkAAIgBgOQAAgGgCgEQgCgEgEgDQgDgCgGAAQgFAAgDADg");
	this.shape_7.setTransform(53.25,15.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2BeIAAi4IAjAAIAAAPIAAAAQAGgKAHgEQAHgEALAAQAWAAAKARQALARAAAnQAAAmgLARQgKARgWAAQgKAAgHgEQgHgDgFgJIgBAAIAAA6gAgOg2QgEALAAAXQAAAWAEAMQADALALAAQAMAAADgLQAEgMAAgWQAAgXgEgLQgDgMgMAAQgLAAgDAMg");
	this.shape_8.setTransform(40.675,17.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAVBGIgVguIgUAuIglAAIAlhHIgkhEIAmAAIASAqIATgqIAmAAIglBEIAmBHg");
	this.shape_9.setTransform(27.775,15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdBDQgKgHgFgLQgGgKgBgNIgBgaQgBgOADgNQABgNAHgKQAFgKAMgGQAKgGASAAQAPAAAKAFQAKAFAGAJQAFAJACANQADAOAAAQIAAAHIhGAAIAAALIABAMIACAKQACAFAEADQAEACAEAAQAIAAAEgGQAFgHACgNIAfAAQgBAZgLAMQgNANgZAAQgSAAgMgGgAgHgtQgEACgCAEIgCAJIgBAKIAAAFIAkAAIgCgOQAAgGgDgEQgBgEgEgDQgDgCgGAAQgEAAgEADg");
	this.shape_10.setTransform(15.5,15.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AARBIIAAhgQAAgLgDgEQgEgEgIAAQgSAAAAAXIAABcIgkAAIAAiLIAiAAIAAAQIABAAQAFgKAJgFQAIgFAMAAQASAAAJAKQAJAJAAAVIAABng");
	this.shape_11.setTransform(-3.7,15.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaBFQgKgEgHgJQgGgKgCgOQgDgOAAgSQAAgRADgNQADgOAGgJQAHgKAKgFQALgEAOAAQAQgBALAFQALAFAGAJQAGAJADAOQACAOAAARQAAASgDAOQgCAOgHAJQgGAJgLAFQgLAEgPAAQgPAAgLgEgAgJgsQgEADgCAHQgCAGgBAJIAAATIAAAUQABAJACAHQACAGAEAEQAEADAFAAQALAAAEgLQAEgLAAgbQAAgZgEgLQgEgMgLAAQgFAAgEAEg");
	this.shape_12.setTransform(-16.675,15.4725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRBeIAAiLIAjAAIAACLgAgRg+IAAgfIAjAAIAAAfg");
	this.shape_13.setTransform(-26.25,13.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYBGQgKgDgGgFQgGgGgCgIQgDgIAAgLIAAgEIAgAAIAAAEQAAAJAFAGQAFAFAJAAQAIAAAEgEQAFgEAAgIQAAgHgEgDQgDgEgGgCIgYgJQgPgFgHgJQgIgJAAgPQAAgJADgHQADgIAGgGQAHgFAJgEQAKgDANAAQAYAAAMAKQAMAKAAAUIAAAFIghAAQAAgLgDgFQgEgFgIAAQgGAAgFAEQgFAEAAAHQAAAFADAFQADAEAJADIAVAHQARAGAHAIQAHAJAAAQQAAALgEAIQgEAJgHAFQgHAFgJADQgKACgLAAQgOAAgKgDg");
	this.shape_14.setTransform(-35.325,15.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRBeIAAiLIAjAAIAACLgAgRg+IAAgfIAjAAIAAAfg");
	this.shape_15.setTransform(-44.45,13.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTBGIgkiLIAlAAIATBjIABAAIAShjIAkAAIgjCLg");
	this.shape_16.setTransform(-53.525,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcBDQgMgHgFgLQgFgKgBgNIgCgaQABgOACgNQACgNAFgKQAGgKALgGQALgGARAAQAQAAAKAFQAKAFAFAJQAGAJADANQABAOAAAQIAAAHIhGAAIAAALIABAMIAEAKQACAFADADQAEACADAAQAJAAAFgGQADgHACgNIAhAAQgCAZgMAMQgLANgaAAQgTAAgKgGgAgHgtQgDACgCAEIgEAJIgBAKIAAAFIAkAAIgBgOQAAgGgCgEQgCgEgEgDQgDgCgGAAQgFAAgDADg");
	this.shape_17.setTransform(-65.55,15.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRBdIAAi5IAjAAIAAC5g");
	this.shape_18.setTransform(-74.9,13.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdBDQgKgHgGgLQgFgKgBgNIgCgaQAAgOADgNQABgNAHgKQAGgKAKgGQALgGASAAQAPAAAKAFQAKAFAFAJQAHAJABANQACAOAAAQIAAAHIhGAAIAAALIACAMIADAKQACAFADADQADACAEAAQAKAAAEgGQADgHADgNIAfAAQAAAZgMAMQgMANgaAAQgSAAgMgGgAgHgtQgDACgCAEIgDAJIgCAKIAAAFIAlAAIgCgOQgBgGgCgEQgCgEgDgDQgEgCgFAAQgEAAgEADg");
	this.shape_19.setTransform(-84.25,15.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgCBZQgGgCgEgEQgDgEgCgHIgBgSIAAhPIgTAAIAAgZIATAAIAAgoIAiAAIAAAoIAVAAIAAAZIgVAAIAABLQABAIACAEQACADAJAAIADAAIAEgBIAAAaIgLAAIgMAAQgKABgGgCg");
	this.shape_20.setTransform(-94.25,13.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAYBdIgmhMIgNAVIAAA3IgmAAIAAi5IAmAAIAABKIAAAAIAvhKIAoAAIgyBQIA4Bpg");
	this.shape_21.setTransform(-110.925,13.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAHBcIAAgmIhBAAIAAgfIA8hyIAnAAIAABzIASAAIAAAeIgSAAIAAAmgAgcAYIAjAAIAAhEIgBAAg");
	this.shape_22.setTransform(-125.275,13.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AATBGIgShjIgBAAIgQBjIgrAAIgdiLIAjAAIARBjIAAAAIAShjIAmAAIASBjIAAAAIAShjIAiAAIgfCLg");
	this.shape_23.setTransform(119.9,-10.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdBDQgKgHgFgLQgGgKgBgNIgBgaQAAgOACgNQACgNAGgKQAFgKAMgGQAKgGASAAQAPAAAKAFQAKAFAFAJQAHAJABANQACAOABAQIAAAHIhGAAIAAALIABAMIACAKQACAFAEADQADACAFAAQAIAAAEgGQAEgHADgNIAfAAQAAAZgMAMQgNANgZAAQgSAAgMgGgAgHgtQgEACgCAEIgCAJIgBAKIAAAFIAkAAIgCgOQgBgGgCgEQgCgEgDgDQgDgCgGAAQgFAAgDADg");
	this.shape_24.setTransform(104.5,-10.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AARBIIAAhgQAAgLgEgEQgDgEgIAAQgSAAAAAXIAABcIgkAAIAAiLIAjAAIAAAQIAAAAQAGgKAJgFQAHgFANAAQARAAAJAKQAJAJAAAVIAABng");
	this.shape_25.setTransform(91.75,-10.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYBGQgKgDgGgFQgGgGgCgIQgDgIAAgLIAAgEIAgAAIAAAEQAAAJAFAGQAFAFAJAAQAIAAAEgEQAFgEAAgIQAAgHgEgDQgDgEgGgCIgYgJQgPgFgHgJQgIgJAAgPQAAgJADgHQADgIAGgGQAHgFAJgEQAKgDANAAQAYAAAMAKQAMAKAAAUIAAAFIghAAQAAgLgDgFQgEgFgIAAQgGAAgFAEQgFAEAAAHQAAAFADAFQADAEAJADIAVAHQARAGAHAIQAHAJAAAQQAAALgEAIQgEAJgHAFQgHAFgJADQgKACgLAAQgOAAgKgDg");
	this.shape_26.setTransform(72.825,-10.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQAXQAHgBADgGQADgGAAgHIAAgDIgNAAIAAgpIAhAAIAAAiQAAAJgBAJQgCAJgEAGQgEAGgGAEQgGAFgKABg");
	this.shape_27.setTransform(63.425,-17.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AARBIIAAhgQAAgLgEgEQgDgEgIAAQgSAAAAAXIAABcIgkAAIAAiLIAjAAIAAAQIAAAAQAGgKAIgFQAJgFAMAAQAQAAAKAKQAJAJAAAVIAABng");
	this.shape_28.setTransform(53.3,-10.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgaBFQgKgEgHgJQgGgKgCgOQgDgOAAgSQAAgRADgNQADgOAGgJQAHgKAKgFQALgEAOAAQAQgBALAFQALAFAGAJQAGAJADAOQACAOAAARQAAASgDAOQgCAOgHAJQgGAJgLAFQgLAEgPAAQgPAAgLgEgAgJgsQgEADgCAHQgCAGgBAJIAAATIAAAUQABAJACAHQACAGAEAEQAEADAFAAQALAAAEgLQAEgLAAgbQAAgZgEgLQgEgMgLAAQgFAAgEAEg");
	this.shape_29.setTransform(40.325,-10.2775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYBGQgKgDgGgFQgGgGgCgIQgDgIAAgLIAAgEIAgAAIAAAEQAAAJAFAGQAFAFAJAAQAIAAAEgEQAFgEAAgIQAAgHgEgDQgDgEgGgCIgYgJQgPgFgHgJQgIgJAAgPQAAgJADgHQADgIAGgGQAHgFAJgEQAKgDANAAQAYAAAMAKQAMAKAAAUIAAAFIghAAQAAgLgDgFQgEgFgIAAQgGAAgFAEQgFAEAAAHQAAAFADAFQADAEAJADIAVAHQARAGAHAIQAHAJAAAQQAAALgEAIQgEAJgHAFQgHAFgJADQgKACgLAAQgOAAgKgDg");
	this.shape_30.setTransform(28.125,-10.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag2BeIAAi4IAjAAIAAAPIAAAAQAGgKAHgEQAHgEALAAQAWAAAKARQALARAAAnQAAAmgLARQgKARgWAAQgKAAgHgEQgHgDgFgJIgBAAIAAA6gAgOg2QgEALAAAXQAAAWAEAMQADALALAAQAMAAADgLQAEgMAAgWQAAgXgEgLQgDgMgMAAQgLAAgDAMg");
	this.shape_31.setTransform(15.775,-8.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag0BdIAAi5IBnAAIAAAfIhCAAIAAArIA+AAIAAAeIg+AAIAAAyIBEAAIAAAfg");
	this.shape_32.setTransform(2.975,-12.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgnBWQgMgKAAgSIAiAAQAAAHAGAEIAFACIAGABQALAAAEgHQAFgHgBgKIAAgSIAAAAQgGAHgHAFQgIAFgIAAQgVAAgLgRQgLgQAAglIABgZQACgNAFgKQAEgKAIgHQAJgGAPAAQAHAAAIAEQAHAEAGALIAAAAIAAgQIAjAAIAACEQAAAbgNAOQgOANgeAAQgYAAgMgJgAgIhAQgDADgDAFQgCAGgBAKIAAAYIAAANQABAGACAFQACAFADADQAEADAFAAQAGAAADgDQAEgDADgFIACgMIABgQQAAgZgDgLQgFgLgLAAQgEAAgEADg");
	this.shape_33.setTransform(-17.05,-8.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AARBIIAAhgQAAgLgDgEQgEgEgIAAQgSAAAAAXIAABcIgkAAIAAiLIAiAAIAAAQIABAAQAFgKAKgFQAHgFAMAAQASAAAJAKQAJAJAAAVIAABng");
	this.shape_34.setTransform(-30.1,-10.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgRBeIAAiLIAjAAIAACLgAgRg+IAAgfIAjAAIAAAfg");
	this.shape_35.setTransform(-39.95,-12.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgWBGQgKgDgHgJQgHgIgDgOQgEgPABgVQgBgUAFgPQAEgOAIgIQAHgIALgEQAKgDALAAQAaAAAMAOQANAPAAAZIgiAAIgBgKIgCgJQgDgEgDgDQgCgCgGAAQgGAAgDADQgEADgDAFQgCAGAAAJIgBAVIABAWQAAAJACAGQACAGAEADQAEACAFAAQAJAAAEgHQAEgIABgRIAiAAQAAAbgNAPQgMAOgcAAQgNAAgKgDg");
	this.shape_36.setTransform(-49.3,-10.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgrA+QgJgIAAgVIAAhoIAkAAIAABgQAAALAEAFQADADAIAAQASAAAAgWIAAhdIAkAAIAACMIgjAAIAAgRIAAAAQgGAKgJAFQgHAFgNgBQgRABgJgKg");
	this.shape_37.setTransform(-62.05,-10.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgrBNQgLgRAAgnQAAgmALgRQAKgRAWAAQAKAAAHAEQAHAEAFAIIABAAIAAg6IAkAAIAAC4IgjAAIAAgPIAAAAQgGAKgHAEQgHAEgLAAQgWAAgKgRgAgOgMQgEALAAAWQAAAXAEAMQADALALAAQAMAAADgLQAEgMAAgXQAAgWgEgLQgDgMgMAAQgLAAgDAMg");
	this.shape_38.setTransform(-75.475,-12.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgaBFQgKgEgHgJQgGgKgCgOQgDgOAAgSQAAgRADgNQADgOAGgJQAHgKAKgFQALgEAOAAQAQgBALAFQALAFAGAJQAGAJADAOQACAOAAARQAAASgDAOQgCAOgHAJQgGAJgLAFQgLAEgPAAQgPAAgLgEgAgJgsQgEADgCAHQgCAGgBAJIAAATIAAAUQABAJACAHQACAGAEAEQAEADAFAAQALAAAEgLQAEgLAAgbQAAgZgEgLQgEgMgLAAQgFAAgEAEg");
	this.shape_39.setTransform(-88.275,-10.2775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgkBIIAAiLIAjAAIAAATIAAAAQAFgLAHgGQAIgGALAAIAEAAIADABIAAAiIgGAAIgFAAIgKABQgEABgEADQgEADgDAFQgBAFAAAHIAABTg");
	this.shape_40.setTransform(-98.525,-10.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgCBZQgHgCgDgEQgDgEgCgHIgBgSIAAhPIgTAAIAAgZIATAAIAAgnIAiAAIAAAnIAVAAIAAAZIgVAAIAABLQABAIACAEQADADAHAAIAFAAIADgBIAAAaIgLAAIgMAAQgLAAgFgBg");
	this.shape_41.setTransform(-107.4,-12.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AARBIIAAhgQAAgLgEgEQgDgEgIAAQgSAAAAAXIAABcIgkAAIAAiLIAjAAIAAAQIAAAAQAGgKAIgFQAJgFAMAAQARAAAJAKQAJAJAAAVIAABng");
	this.shape_42.setTransform(-118.05,-10.425);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgSBdIAAi5IAlAAIAAC5g");
	this.shape_43.setTransform(-128.125,-12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_frame_06_txt, new cjs.Rectangle(-133.5,-30.2,267,60.5), null);


(lib.Shaq_frame_06 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.161,1],33.1,336.4,33.1,-117.4).s().p("A4nU7MAAAgp1MAxPAAAMAAAAp1g");
	this.shape.setTransform(0,103.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.shaq_frame_06();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Shaq_frame_06, new cjs.Rectangle(-157.6,-125,315.2,362.7), null);


(lib.shaq_frame_05_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9DDFFF").s().p("AgvA5IAAhxIBfAAIAABxg");
	this.shape.setTransform(115.475,1.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9DDFFF").s().p("AhADFQgdgKgSgYQgTgXgKgoQgJgnAAg8QAAg8AMgnQAMgoAUgYQAWgXAdgKQAdgKAiAAQBGABAkApQAjApAABFIhgAAIgCgcIgHgaQgFgKgIgIQgJgHgPAAQgRAAgLAJQgMAIgGARQgGAQgCAaIgCA6IACA+QACAaAGARQAGARALAIQAKAHAQAAQAZAAAMgWQAMgWAAgwIBgAAQAABNgiApQgkAphQAAQglgBgbgIg");
	this.shape_1.setTransform(89.6,-12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9DDFFF").s().p("AgxEIIAAmJIBkAAIAAGJgAgxiwIAAhXIBkAAIAABXg");
	this.shape_2.setTransform(63.7,-18.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9DDFFF").s().p("AiZEJIAAoHIBhAAIAAArIABAAQARgdAVgMQATgLAfgBQA+AAAdAxQAeAwAABuQAABsgeAwQgdAwg+AAQgcAAgTgLQgUgLgQgXIgCAAIAACjgAgqiaQgKAhAABAQAAA/AKAhQAKAgAgAAQAhAAAKggQAKghAAg/QAAhAgKghQgKggghAAQggAAgKAgg");
	this.shape_3.setTransform(36.925,-6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9DDFFF").s().p("AiUEFIAAoJIEiAAIAABXIi5AAIAAB6ICuAAIAABVIiuAAIAACMIDAAAIAABXg");
	this.shape_4.setTransform(1.425,-18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9DDFFF").s().p("AhKDDQgegNgSgaQgRgagHgnQgIgnAAgzQAAgxAIgnQAIgnATgaQASgaAdgNQAegOAqAAQAtgBAeANQAeANASAaQARAbAHAmQAIAnAAAzQAAAygIAnQgIAngTAZQgSAageANQgdAMgrAAIgGABQgpAAgbgLgAgch+QgLAKgGATQgFASgCAZIgBA3IABA3QACAaAFASQAGASALAKQALALARAAQAfAAALggQAMggAAhKQAAhJgMggQgLgggfAAQgRAAgLAKg");
	this.shape_5.setTransform(-52.625,-12.1997);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9DDFFF").s().p("AheD9QgfgRgRgjQgRgjgGgzQgFg0gBhDQAAhBAJgyQAIgyAVghQAUghAhgRQAigRAyAAQBVAAAnArQAmArAABPIhlAAIgEgeQgCgPgIgNQgHgNgLgIQgMgIgQAAQglAAgQAqQgRAqAABiIACBUQADAmAIAaQAHAbAPAOQAOAPAWAAQAJAAALgGQAMgFAKgKQAJgKAHgQQAHgPAAgWIAAg1IhGAAIAAhMICqAAIAAEYIhMAAIAAgwIgCAAQgUAegaANQgaANglAAQgwAAgegRg");
	this.shape_6.setTransform(-90.65,-18.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_frame_05_txt, new cjs.Rectangle(-112.9,-64.6,239.60000000000002,90.3), null);


(lib.shaq_frame_04_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgSAXIAAgsIAlAAIAAAsg");
	this.shape.setTransform(106.075,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBQIAAibIAmAAIAAAVIABAAQAFgMAIgGQAKgHAMAAIADAAIAEABIAAAmIgGAAIgHgBIgKACQgFABgFADQgEADgDAGQgBAFAAAJIAABcg");
	this.shape_1.setTransform(98.15,32.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggBKQgMgHgGgMQgGgMgBgPIgBgcQAAgQACgOQACgPAHgLQAGgLAMgHQAMgHAUAAQARAAALAGQALAFAHALQAGAKADAPQACAOAAASIAAAIIhPAAIAAANIABANIAEAMQACAFAEADQAEADAEAAQALAAAEgHQAFgHACgPIAkAAQgCAbgNAOQgNAPgdAAQgVAAgMgIgAgIgzQgEADgCAEIgEAKIgBALIAAAHIApAAIgCgQQgBgHgCgFQgCgFgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_2.setTransform(85.75,32.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrBfQgOgLAAgTIAmAAQAAAHAGAEIAGAEIAHABQAMAAAFgIQAFgIAAgMIAAgUIgBAAQgGAJgJAFQgIAFgJAAQgYAAgMgSQgMgSAAgqIACgcQABgOAFgLQAFgMAKgHQAKgHAQAAQAIAAAIAEQAJAFAGAMIABAAIAAgRIAmAAIAACTQAAAegPAPQgPAPgiAAQgZAAgOgLgAgJhIQgEADgCAHQgDAGAAALIgBAbIABAPQAAAGADAGQACAGAEADQAEADAFAAQAGAAAEgDQAFgDACgGQADgGABgHIABgSQAAgdgFgMQgEgMgMAAQgGAAgEADg");
	this.shape_3.setTransform(71.325,35.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBfQgOgLAAgTIAmAAQAAAHAGAEIAGAEIAHABQAMAAAFgIQAFgIAAgMIAAgUIgBAAQgGAJgJAFQgIAFgJAAQgYAAgMgSQgMgSAAgqIACgcQABgOAFgLQAFgMAKgHQAKgHAQAAQAIAAAIAEQAJAFAGAMIABAAIAAgRIAmAAIAACTQAAAegPAPQgPAPgiAAQgZAAgOgLgAgJhIQgEADgCAHQgDAGAAALIgBAbIABAPQAAAGADAGQACAGAEADQAEADAFAAQAGAAAEgDQAFgDACgGQADgGABgHIABgSQAAgdgFgMQgEgMgMAAQgGAAgEADg");
	this.shape_4.setTransform(56.575,35.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTBpIAAibIAnAAIAACbgAgThFIAAgjIAnAAIAAAjg");
	this.shape_5.setTransform(45.825,30.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHBlQgHgFgHgLIgBAAIAAARIgmAAIAAjOIAoAAIAABBIABAAQAGgJAIgFQAHgEALAAQAZAAALATQAMATAAArQAAArgMATQgLATgZAAQgMAAgIgEgAgRgOQgDANAAAZQAAAZADANQAEANANAAQANAAAEgNQAEgNAAgZQAAgZgEgNQgEgNgNAAQgNAAgEANg");
	this.shape_6.setTransform(35.05,30.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrBfQgOgLAAgTIAmAAQAAAHAGAEIAGAEIAHABQAMAAAFgIQAFgIAAgMIAAgUIgBAAQgGAJgJAFQgIAFgJAAQgYAAgMgSQgMgSAAgqIACgcQABgOAFgLQAFgMAKgHQAKgHAQAAQAIAAAIAEQAJAFAGAMIABAAIAAgRIAmAAIAACTQAAAegPAPQgPAPgiAAQgZAAgOgLgAgJhIQgEADgCAHQgDAGAAALIgBAbIABAPQAAAGADAGQACAGAEADQAEADAFAAQAGAAAEgDQAFgDACgGQADgGABgHIABgSQAAgdgFgMQgEgMgMAAQgGAAgEADg");
	this.shape_7.setTransform(12.675,35.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AATBQIAAhrQAAgMgEgFQgEgEgJAAQgUAAAAAaIAABmIgoAAIAAibIAmAAIAAASIABAAQAGgLAKgGQAKgFAMAAQAUAAAKALQAKAKAAAXIAABzg");
	this.shape_8.setTransform(-1.85,32.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTBpIAAibIAnAAIAACbgAgThFIAAgjIAnAAIAAAjg");
	this.shape_9.setTransform(-12.825,30.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AATBoIAAhrQAAgMgEgFQgEgFgJAAQgUAAAAAZIAABoIgoAAIAAjOIAoAAIAABCIAAAAQAMgTAZAAQAUgBAKALQAKAKAAAYIAABzg");
	this.shape_10.setTransform(-23.8,30.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCBjQgIgCgDgEQgEgFgCgIQgBgIAAgMIAAhYIgVAAIAAgbIAVAAIAAgtIAnAAIAAAtIAXAAIAAAbIgXAAIAABTQAAAKADAEQACADAJAAIAFAAIAEAAIAAAcIgNAAIgNABQgMAAgGgCg");
	this.shape_11.setTransform(-35.525,30.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggBKQgMgHgGgMQgGgMgBgPIgBgcQgBgQADgOQACgPAGgLQAHgLAMgHQAMgHAUAAQARAAALAGQALAFAHALQAGAKADAPQABAOAAASIAAAIIhOAAIAAANIABANIAEAMQACAFAEADQADADAGAAQAJAAAFgHQAFgHACgPIAkAAQgCAbgNAOQgOAPgcAAQgVAAgMgIgAgIgzQgEADgCAEIgEAKIgBALIAAAHIApAAIgCgQQAAgHgDgFQgCgFgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_12.setTransform(-46.8,32.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA5BQIAAhsQgBgKgDgFQgEgFgIAAQgKAAgGAGQgFAHAAAOIAABlIgnAAIAAhsQAAgKgEgFQgDgFgJAAQgKAAgFAGQgGAHAAAOIAABlIgnAAIAAibIAlAAIAAAQIABAAQAIgLAJgFQAJgEAOAAQAOAAAIAGQAJAHAEAMIAAAAQAFgNAKgGQALgGANAAQAUAAAKAMQAJAMAAAXIAABwg");
	this.shape_13.setTransform(-64.7,32.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdBNQgLgFgIgKQgHgKgCgQQgDgQAAgUQAAgTADgPQADgPAHgLQAIgKALgGQAMgFAQAAQASAAAMAFQAMAFAHAKQAHALADAPQACAQAAATQAAAUgCAQQgDAPgIAKQgHALgMAFQgMAFgRAAQgRAAgMgFgAgLgxQgEADgCAIIgDARIgBAVIABAWIADASQACAHAEAEQAFAEAGAAQAMAAAFgNQAEgMABgeQgBgcgEgNQgFgNgMAAQgGAAgFAFg");
	this.shape_14.setTransform(-82.9,32.9227);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbBOQgLgDgHgGQgGgHgDgJQgDgJAAgLIAAgGIAkAAIAAAFQAAALAGAGQAFAGAKAAQAJAAAFgFQAGgEAAgKQAAgHgFgEQgEgEgGgCIgbgKQgRgGgIgKQgIgKAAgRQAAgJADgJQADgJAHgGQAHgGALgEQALgEAOAAQAbAAANAMQANALAAAWIAAAGIgkAAQAAgMgEgGQgDgGgKAAQgHAAgFAFQgGAEAAAIQAAAGADAFQAEAEAKAEIAXAIQATAGAIAJQAIALAAARQAAANgFAJQgEAJgIAGQgHAGgLADQgKADgNAAQgQAAgLgEg");
	this.shape_15.setTransform(-96.525,32.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_frame_04_txt, new cjs.Rectangle(-104.9,10.9,216.9,38.300000000000004), null);


(lib.shaq_frame_03_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgoBQIAAibIAmAAIAAAVIABAAQAFgLAIgHQAJgHAMAAIAFAAIADAAIAAAnIgHgBIgFAAIgLACQgFABgEADQgFADgCAGQgCAFAAAJIAABcg");
	this.shape.setTransform(63.55,2.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcBNQgNgFgGgKQgIgKgCgQQgEgQAAgUQABgTADgPQADgPAIgLQAGgKANgGQALgFAQAAQASAAAMAFQAMAFAHAKQAHALADAPQADAQAAATQAAAUgDAQQgEAPgHAKQgIALgLAFQgMAFgRAAQgRAAgLgFgAgKgxQgFADgCAIIgDARIAAAVIAAAWIADASQACAHAFAEQAEAEAGAAQAMAAAFgNQAFgMgBgeQABgcgFgNQgFgNgMAAQgGAAgEAFg");
	this.shape_1.setTransform(50.9,2.9227);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBpIAAh/IgVAAIAAgcIAVAAIAAgRQAAgLADgHQADgHAFgEQAFgFAHgCQAIgBAKgBIAVABIAAAcIgEAAIgEAAQgIABgEACQgDADAAAHIAAANIAXAAIAAAcIgXAAIAAB/g");
	this.shape_2.setTransform(39.475,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBKQgMgHgGgMQgGgMgBgPIgCgcQABgQACgOQACgPAGgLQAHgLAMgHQANgHASAAQASAAALAGQAMAFAFALQAHAKACAPQACAOAAASIAAAIIhNAAIAAANIABANIADAMQACAFAEADQAEADAFAAQAKAAAEgHQAEgHACgPIAkAAQgBAbgNAOQgNAPgdAAQgVAAgMgIgAgIgzQgEADgCAEIgDAKIgBALIAAAHIAnAAIgBgQQAAgHgCgFQgDgFgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_3.setTransform(21,2.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA4BQIAAhsQABgKgEgFQgEgGgIABQgKgBgFAHQgGAGAAAPIAABlIgnAAIAAhsQAAgKgEgFQgDgGgJABQgJgBgGAHQgGAGABAPIAABlIgpAAIAAibIAmAAIAAAQIACAAQAHgLAJgEQAKgFANAAQANAAAJAHQAKAGADAMIAAAAQAFgMAKgHQAKgGAOAAQAUAAAKAMQAKAMAAAWIAABxg");
	this.shape_4.setTransform(3.1,2.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTBpIAAibIAnAAIAACbgAgThFIAAgjIAnAAIAAAjg");
	this.shape_5.setTransform(-11.625,0.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCBjQgIgCgDgEQgEgFgCgIQgBgIAAgMIAAhYIgVAAIAAgbIAVAAIAAgtIAnAAIAAAtIAXAAIAAAbIgXAAIAABTQAAAKADAEQACADAJAAIAFAAIAEAAIAAAcIgNAAIgNABQgMAAgGgCg");
	this.shape_6.setTransform(-19.575,0.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbBOQgLgDgHgGQgGgHgDgJQgDgJAAgLIAAgGIAkAAIAAAFQAAALAGAGQAFAGAKAAQAJAAAFgFQAGgEAAgKQAAgHgFgEQgEgEgGgCIgbgKQgRgGgIgKQgIgKAAgRQAAgJADgJQADgJAHgGQAHgGALgEQALgEAOAAQAbAAANAMQANALAAAWIAAAGIgkAAQAAgMgEgGQgDgGgKAAQgHAAgFAFQgGAEAAAIQAAAGADAFQAEAEAKAEIAXAIQATAGAIAJQAIALAAARQAAANgFAJQgEAJgIAGQgHAGgLADQgKADgNAAQgQAAgLgEg");
	this.shape_7.setTransform(-37.775,2.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAvIAAhdIAjAAIAABdg");
	this.shape_8.setTransform(-48.2,-5.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCBjQgIgCgDgEQgEgFgCgIQgBgIAAgMIAAhYIgVAAIAAgbIAVAAIAAgtIAnAAIAAAtIAXAAIAAAbIgXAAIAABTQAAAKADAEQACADAJAAIAFAAIAEAAIAAAcIgNAAIgNABQgMAAgGgCg");
	this.shape_9.setTransform(-56.425,0.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUBnIAAjOIApAAIAADOg");
	this.shape_10.setTransform(-64.7,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_frame_03_txt, new cjs.Rectangle(-70.4,-19.1,140.60000000000002,38.3), null);


(lib.shaq_frame_02_txt_02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgSAWIAAgsIAlAAIAAAsg");
	this.shape.setTransform(113.125,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTBnIAAjOIAnAAIAADOg");
	this.shape_1.setTransform(105.925,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTBnIAAjOIAnAAIAADOg");
	this.shape_2.setTransform(98.725,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoBOQgHgEgEgGQgFgHgCgIQgCgHAAgIQAAgLADgIQACgIAFgGQAFgFAHgDQAHgEALgDIAVgGQAJgCAEgFQADgEAAgHQAAgJgEgFQgEgGgJAAQgJAAgFAGQgFAFAAAKIAAAEIgkAAIAAgEQAAgNAFgJQAEgKAHgFQAIgGAKgCQAKgDALAAQARAAALAEQALADAGAHQAGAGACAJQADAJAAAKIAABRIABARIAEANIgnAAIgDgIIgCgIIAAAAQgHAMgJAEQgIAEgPAAQgKAAgIgEgAAJAFIgJADQgLADgFAGQgFAGAAAKQAAAJADAHQAEAGAIAAIAHgBIAIgEQAEgDACgFQACgFAAgGIAAgfg");
	this.shape_3.setTransform(87.975,2.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA4BQIAAhsQAAgKgDgFQgEgGgIABQgKgBgGAHQgFAGAAAPIAABlIgnAAIAAhsQAAgKgEgFQgEgGgIABQgKgBgFAHQgFAGAAAPIAABlIgpAAIAAibIAnAAIAAAQIABAAQAHgLAJgEQAKgFAMAAQAPAAAIAHQAKAGACAMIABAAQAFgMAKgHQALgGAOAAQAUAAAJAMQAKAMAAAWIAABxg");
	this.shape_4.setTransform(69.9,2.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBOQgLgDgHgGQgGgHgDgJQgDgJAAgLIAAgGIAkAAIAAAFQAAALAGAGQAFAGAKAAQAJAAAFgFQAGgEAAgKQAAgHgFgEQgEgEgGgCIgbgKQgRgGgIgKQgIgKAAgRQAAgJADgJQADgJAHgGQAHgGALgEQALgEAOAAQAbAAANAMQANALAAAWIAAAGIgkAAQAAgMgEgGQgDgGgKAAQgHAAgFAFQgGAEAAAIQAAAGADAFQAEAEAKAEIAXAIQATAGAIAJQAIALAAARQAAANgFAJQgEAJgIAGQgHAGgLADQgKADgNAAQgQAAgLgEg");
	this.shape_5.setTransform(52.225,2.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdBNQgLgFgIgKQgHgKgCgQQgDgQAAgUQAAgTADgPQADgPAHgLQAIgKALgGQAMgFAQAAQASAAAMAFQAMAFAHAKQAHALADAPQACAQAAATQAAAUgCAQQgDAPgIAKQgHALgMAFQgMAFgRAAQgRAAgMgFgAgLgxQgEADgCAIIgDARIAAAVIAAAWIADASQACAHAEAEQAFAEAGAAQAMAAAFgNQAEgMABgeQgBgcgEgNQgFgNgMAAQgGAAgFAFg");
	this.shape_6.setTransform(31.4,2.9227);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcBNQgNgFgGgKQgIgKgCgQQgEgQAAgUQAAgTAEgPQADgPAIgLQAGgKAMgGQAMgFAQAAQASAAAMAFQAMAFAHAKQAHALADAPQADAQgBATQABAUgDAQQgEAPgHAKQgIALgLAFQgMAFgRAAQgRAAgLgFgAgKgxQgFADgCAIIgDARIAAAVIAAAWIADASQACAHAFAEQAEAEAGAAQAMAAAFgNQAFgMAAgeQAAgcgFgNQgFgNgMAAQgGAAgEAFg");
	this.shape_7.setTransform(17.25,2.9227);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCBjQgIgCgDgEQgEgFgCgIQgBgIAAgMIAAhYIgVAAIAAgbIAVAAIAAgtIAnAAIAAAtIAXAAIAAAbIgXAAIAABTQAAAKADAEQACADAJAAIAFAAIAEAAIAAAcIgNAAIgNABQgMAAgGgCg");
	this.shape_8.setTransform(5.825,0.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCBjQgIgCgDgEQgEgFgCgIQgBgIAAgMIAAhYIgVAAIAAgbIAVAAIAAgtIAnAAIAAAtIAXAAIAAAbIgXAAIAABTQAAAKADAEQACADAJAAIAFAAIAEAAIAAAcIgNAAIgNABQgMAAgGgCg");
	this.shape_9.setTransform(-10.175,0.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgwBFQgKgKAAgXIAAhzIAoAAIAABrQAAAMAEAFQAEAFAJAAQAUAAAAgaIAAhnIAoAAIAACbIgmAAIAAgSIgBAAQgGAMgKAFQgKAFgMAAQgUAAgKgLg");
	this.shape_10.setTransform(-22,3.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdBNQgLgFgIgKQgGgKgEgQQgCgQAAgUQgBgTAEgPQADgPAHgLQAHgKAMgGQAMgFAQAAQASAAAMAFQAMAFAHAKQAHALACAPQADAQAAATQAAAUgDAQQgCAPgIAKQgHALgMAFQgMAFgRAAQgRAAgMgFgAgLgxQgEADgCAIIgDARIgBAVIABAWIADASQACAHAEAEQAFAEAGAAQANAAAEgNQAEgMABgeQgBgcgEgNQgEgNgNAAQgGAAgFAFg");
	this.shape_11.setTransform(-36.45,2.9227);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCBjQgIgCgDgEQgEgFgCgIQgBgIAAgMIAAhYIgVAAIAAgbIAVAAIAAgtIAnAAIAAAtIAXAAIAAAbIgXAAIAABTQAAAKADAEQACADAJAAIAFAAIAEAAIAAAcIgNAAIgNABQgMAAgGgCg");
	this.shape_12.setTransform(-55.075,0.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoBOQgHgEgEgGQgFgHgCgIQgCgHAAgIQAAgLADgIQACgIAFgGQAFgFAHgDQAHgEALgDIAVgGQAJgCAEgFQADgEAAgHQAAgJgEgFQgEgGgJAAQgJAAgFAGQgFAFAAAKIAAAEIgkAAIAAgEQAAgNAFgJQAEgKAHgFQAIgGAKgCQAKgDALAAQARAAALAEQALADAGAHQAGAGACAJQADAJAAAKIAABRIABARIAEANIgnAAIgDgIIgCgIIAAAAQgHAMgJAEQgIAEgPAAQgKAAgIgEgAAJAFIgJADQgLADgFAGQgFAGAAAKQAAAJADAHQAEAGAIAAIAHgBIAIgEQAEgDACgFQACgFAAgGIAAgfg");
	this.shape_13.setTransform(-66.675,2.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTBnIAAjOIAnAAIAADOg");
	this.shape_14.setTransform(-77.275,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUBpIAAh/IgVAAIAAgcIAVAAIAAgRQAAgLADgHQADgHAFgEQAFgFAHgCQAIgBAKgBIAVABIAAAcIgEAAIgEAAQgIABgEACQgDADAAAHIAAANIAXAAIAAAcIgXAAIAAB/g");
	this.shape_15.setTransform(-85.225,0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbBOQgLgDgHgGQgGgHgDgJQgDgJAAgLIAAgGIAkAAIAAAFQAAALAGAGQAFAGAKAAQAJAAAFgFQAGgEAAgKQAAgHgFgEQgEgEgGgCIgbgKQgRgGgIgKQgIgKAAgRQAAgJADgJQADgJAHgGQAHgGALgEQALgEAOAAQAbAAANAMQANALAAAWIAAAGIgkAAQAAgMgEgGQgDgGgKAAQgHAAgFAFQgGAEAAAIQAAAGADAFQAEAEAKAEIAXAIQATAGAIAJQAIALAAARQAAANgFAJQgEAJgIAGQgHAGgLADQgKADgNAAQgQAAgLgEg");
	this.shape_16.setTransform(-103.425,2.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTBpIAAibIAnAAIAACbgAgThFIAAgjIAnAAIAAAjg");
	this.shape_17.setTransform(-113.575,0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_frame_02_txt_02, new cjs.Rectangle(-119,-19.1,238.1,38.3), null);


(lib.shaq_frame_02_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgaBnIgvjOIAsAAIAdCYIABAAIAeiYIArAAIgvDOg");
	this.shape.setTransform(93.975,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUBnIAAisIgtAAIAAgiICDAAIAAAiIgtAAIAACsg");
	this.shape_1.setTransform(79.25,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTBnIAAjOIAnAAIAADOg");
	this.shape_2.setTransform(61.375,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBKQgMgHgGgMQgGgMgBgPIgCgcQABgQACgOQACgPAGgLQAHgLAMgHQAMgHAUAAQARAAALAGQALAFAGALQAHAKADAPQABAOAAASIAAAIIhOAAIAAANIACANIADAMQACAFAEADQADADAGAAQAJAAAFgHQAEgHACgPIAlAAQgCAbgNAOQgOAPgcAAQgVAAgMgIgAgIgzQgEADgCAEIgDAKIgCALIAAAHIAoAAIgBgQQgBgHgBgFQgDgFgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_3.setTransform(50.95,2.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATBQIAAhrQAAgMgEgFQgEgEgJAAQgUAAAAAZIAABnIgoAAIAAibIAmAAIAAASIABAAQAGgLAKgGQAKgFANAAQASAAALAKQAKALAAAXIAABzg");
	this.shape_4.setTransform(36.75,2.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoBOQgHgEgEgGQgFgHgCgIQgCgHAAgIQAAgLADgIQACgIAFgGQAFgFAHgDQAHgEALgDIAVgGQAJgCAEgFQADgEAAgHQAAgJgEgFQgEgGgJAAQgJAAgFAGQgFAFAAAKIAAAEIgkAAIAAgEQAAgNAFgJQAEgKAHgFQAIgGAKgCQAKgDALAAQARAAALAEQALADAGAHQAGAGACAJQADAJAAAKIAABRIABARIAEANIgnAAIgDgIIgCgIIAAAAQgHAMgJAEQgIAEgPAAQgKAAgIgEgAAJAFIgJADQgLADgFAGQgFAGAAAKQAAAJADAHQAEAGAIAAIAHgBIAIgEQAEgDACgFQACgFAAgGIAAgfg");
	this.shape_5.setTransform(22.225,2.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8BpIAAjNIAmAAIAAAQIABAAQAHgKAHgFQAIgFAMAAQAZAAALATQAMAUAAArQAAArgMASQgLAUgZgBQgLABgHgFQgIgEgGgKIgBAAIAABBgAgRg9QgDAOAAAZQAAAZADANQAEANANgBQANABAEgNQAEgNAAgZQAAgZgEgOQgEgMgNAAQgNAAgEAMg");
	this.shape_6.setTransform(8.05,5.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCBjQgIgCgDgEQgEgFgCgIQgBgIAAgMIAAhYIgVAAIAAgbIAVAAIAAgtIAnAAIAAAtIAXAAIAAAbIgXAAIAABTQAAAKADAEQACADAJAAIAFAAIAEAAIAAAcIgNAAIgNABQgMAAgGgCg");
	this.shape_7.setTransform(-11.075,0.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBOQgHgEgEgGQgFgHgCgIQgCgHAAgIQAAgLADgIQACgIAFgGQAFgFAHgDQAHgEALgDIAVgGQAJgCAEgFQADgEAAgHQAAgJgEgFQgEgGgJAAQgJAAgFAGQgFAFAAAKIAAAEIgkAAIAAgEQAAgNAFgJQAEgKAHgFQAIgGAKgCQAKgDALAAQARAAALAEQALADAGAHQAGAGACAJQADAJAAAKIAABRIABARIAEANIgnAAIgDgIIgCgIIAAAAQgHAMgJAEQgIAEgPAAQgKAAgIgEgAAJAFIgJADQgLADgFAGQgFAGAAAKQAAAJADAHQAEAGAIAAIAHgBIAIgEQAEgDACgFQACgFAAgGIAAgfg");
	this.shape_8.setTransform(-22.675,2.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTBnIAAjOIAnAAIAADOg");
	this.shape_9.setTransform(-33.275,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUBpIAAh/IgVAAIAAgcIAVAAIAAgRQAAgLADgHQADgHAFgEQAFgFAHgCQAIgBAKgBIAVABIAAAcIgEAAIgEAAQgIABgEACQgDADAAAHIAAANIAXAAIAAAcIgXAAIAAB/g");
	this.shape_10.setTransform(-41.225,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbBOQgLgDgHgGQgGgHgDgJQgDgJAAgLIAAgGIAkAAIAAAFQAAALAGAGQAFAGAKAAQAJAAAFgFQAGgEAAgKQAAgHgFgEQgEgEgGgCIgbgKQgRgGgIgKQgIgKAAgRQAAgJADgJQADgJAHgGQAHgGALgEQALgEAOAAQAbAAANAMQANALAAAWIAAAGIgkAAQAAgMgEgGQgDgGgKAAQgHAAgFAFQgGAEAAAIQAAAGADAFQAEAEAKAEIAXAIQATAGAIAJQAIALAAARQAAANgFAJQgEAJgIAGQgHAGgLADQgKADgNAAQgQAAgLgEg");
	this.shape_11.setTransform(-59.425,2.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTBpIAAibIAnAAIAACbgAgThFIAAgjIAnAAIAAAjg");
	this.shape_12.setTransform(-69.575,0.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATBnIAAhqQAAgNgEgEQgEgFgJAAQgUAAAAAZIAABnIgoAAIAAjOIAoAAIAABEIAAAAQAMgVAaABQATAAAKAKQAKAKAAAYIAAByg");
	this.shape_13.setTransform(-80.55,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUBnIAAisIgtAAIAAgiICDAAIAAAiIgtAAIAACsg");
	this.shape_14.setTransform(-95,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_frame_02_txt, new cjs.Rectangle(-103.9,-19.1,207.9,38.3), null);


(lib.shaq_frame_01_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgaBnIgvjOIAsAAIAdCYIABAAIAeiYIArAAIgvDOg");
	this.shape.setTransform(93.975,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUBnIAAisIgtAAIAAgiICDAAIAAAiIgtAAIAACsg");
	this.shape_1.setTransform(79.25,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTBnIAAjOIAnAAIAADOg");
	this.shape_2.setTransform(61.375,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBKQgMgHgGgMQgGgMgBgPIgCgcQABgQACgOQACgPAGgLQAHgLAMgHQAMgHAUAAQARAAALAGQALAFAGALQAHAKADAPQABAOAAASIAAAIIhOAAIAAANIACANIADAMQACAFAEADQADADAGAAQAJAAAFgHQAEgHACgPIAlAAQgCAbgNAOQgOAPgcAAQgVAAgMgIgAgIgzQgEADgCAEIgDAKIgCALIAAAHIAoAAIgBgQQgBgHgBgFQgDgFgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_3.setTransform(50.95,2.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATBQIAAhrQAAgMgEgFQgEgEgJAAQgUAAAAAZIAABnIgoAAIAAibIAmAAIAAASIABAAQAGgLAKgGQAKgFANAAQASAAALAKQAKALAAAXIAABzg");
	this.shape_4.setTransform(36.75,2.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoBOQgHgEgEgGQgFgHgCgIQgCgHAAgIQAAgLADgIQACgIAFgGQAFgFAHgDQAHgEALgDIAVgGQAJgCAEgFQADgEAAgHQAAgJgEgFQgEgGgJAAQgJAAgFAGQgFAFAAAKIAAAEIgkAAIAAgEQAAgNAFgJQAEgKAHgFQAIgGAKgCQAKgDALAAQARAAALAEQALADAGAHQAGAGACAJQADAJAAAKIAABRIABARIAEANIgnAAIgDgIIgCgIIAAAAQgHAMgJAEQgIAEgPAAQgKAAgIgEgAAJAFIgJADQgLADgFAGQgFAGAAAKQAAAJADAHQAEAGAIAAIAHgBIAIgEQAEgDACgFQACgFAAgGIAAgfg");
	this.shape_5.setTransform(22.225,2.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8BpIAAjNIAmAAIAAAQIABAAQAHgKAHgFQAIgFAMAAQAZAAALATQAMAUAAArQAAArgMASQgLAUgZgBQgLABgHgFQgIgEgGgKIgBAAIAABBgAgRg9QgDAOAAAZQAAAZADANQAEANANgBQANABAEgNQAEgNAAgZQAAgZgEgOQgEgMgNAAQgNAAgEAMg");
	this.shape_6.setTransform(8.05,5.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCBjQgIgCgDgEQgEgFgCgIQgBgIAAgMIAAhYIgVAAIAAgbIAVAAIAAgtIAnAAIAAAtIAXAAIAAAbIgXAAIAABTQAAAKADAEQACADAJAAIAFAAIAEAAIAAAcIgNAAIgNABQgMAAgGgCg");
	this.shape_7.setTransform(-11.075,0.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBOQgHgEgEgGQgFgHgCgIQgCgHAAgIQAAgLADgIQACgIAFgGQAFgFAHgDQAHgEALgDIAVgGQAJgCAEgFQADgEAAgHQAAgJgEgFQgEgGgJAAQgJAAgFAGQgFAFAAAKIAAAEIgkAAIAAgEQAAgNAFgJQAEgKAHgFQAIgGAKgCQAKgDALAAQARAAALAEQALADAGAHQAGAGACAJQADAJAAAKIAABRIABARIAEANIgnAAIgDgIIgCgIIAAAAQgHAMgJAEQgIAEgPAAQgKAAgIgEgAAJAFIgJADQgLADgFAGQgFAGAAAKQAAAJADAHQAEAGAIAAIAHgBIAIgEQAEgDACgFQACgFAAgGIAAgfg");
	this.shape_8.setTransform(-22.675,2.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTBnIAAjOIAnAAIAADOg");
	this.shape_9.setTransform(-33.275,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUBpIAAh/IgVAAIAAgcIAVAAIAAgRQAAgLADgHQADgHAFgEQAFgFAHgCQAIgBAKgBIAVABIAAAcIgEAAIgEAAQgIABgEACQgDADAAAHIAAANIAXAAIAAAcIgXAAIAAB/g");
	this.shape_10.setTransform(-41.225,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbBOQgLgDgHgGQgGgHgDgJQgDgJAAgLIAAgGIAkAAIAAAFQAAALAGAGQAFAGAKAAQAJAAAFgFQAGgEAAgKQAAgHgFgEQgEgEgGgCIgbgKQgRgGgIgKQgIgKAAgRQAAgJADgJQADgJAHgGQAHgGALgEQALgEAOAAQAbAAANAMQANALAAAWIAAAGIgkAAQAAgMgEgGQgDgGgKAAQgHAAgFAFQgGAEAAAIQAAAGADAFQAEAEAKAEIAXAIQATAGAIAJQAIALAAARQAAANgFAJQgEAJgIAGQgHAGgLADQgKADgNAAQgQAAgLgEg");
	this.shape_11.setTransform(-59.425,2.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTBpIAAibIAnAAIAACbgAgThFIAAgjIAnAAIAAAjg");
	this.shape_12.setTransform(-69.575,0.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATBnIAAhqQAAgNgEgEQgEgFgJAAQgUAAAAAZIAABnIgoAAIAAjOIAoAAIAABEIAAAAQAMgVAaABQATAAAKAKQAKAKAAAYIAAByg");
	this.shape_13.setTransform(-80.55,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUBnIAAisIgtAAIAAgiICDAAIAAAiIgtAAIAACsg");
	this.shape_14.setTransform(-95,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_frame_01_txt, new cjs.Rectangle(-103.9,-19.1,207.9,38.3), null);


(lib.image_group_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image_group();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_group_1, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Frame_10_02 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AxuupMAjEAJEIAjUAMgjxAAPQAF9TAFAAg");
	mask.setTransform(-0.475,0.775);

	// Layer_1
	this.instance = new lib.endFrame_screen_02();
	this.instance.setTransform(-115,-95);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame_10_02, new cjs.Rectangle(-115,-93,229.1,187.6), null);


(lib.Frame_10_01 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.endFrame_screen_01();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame_10_01, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Epson_logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.epson_logo();
	this.instance.setTransform(-40.5,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Epson_logo, new cjs.Rectangle(-40.5,-10.5,81,21), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AHlA8QgRgRAAgXIAAhYQAAgFAEAAIAUAAQAEAAAAAFIAABWQAAAOAIAIQAIAJAOAAQAOAAAJgJQAIgIAAgOIAAhWQAAgFAEAAIAUAAQAEAAAAAFIAABYQAAAXgRARQgRAPgZABQgZgBgQgPgAE3A1QgWgVAAggQAAgeAWgXQAWgVAfgBQAgABAWAVQAWAXABAeQgBAggWAVQgWAXggAAQgfAAgWgXgAFLghQgOAOgBATQABAUAOAOQAOAPATAAQAVAAANgPQAPgOAAgUQAAgTgPgOQgNgPgVAAQgTAAgOAPgAj/A1QgWgVAAggQAAgeAWgXQAXgVAfgBQAdAAAWAUQADADgDADIgMANQgDADgDgDQgOgMgTAAQgTAAgOAOQgNAPAAATQAAAUAOANQANAPAUAAQARAAAPgMQADgCADACIAMAOQADACgDADQgVAVgeAAQgfAAgXgXgAqtA1QgXgVAAggQAAgeAXgXQAWgVAggBQAdAAAVAUQADADgDADIgMANQgDADgDgDQgOgMgSAAQgTAAgOAOQgOAPAAATQAAAUAOANQANAPAVAAQARAAAOgMQADgCADACIANAOQACACgDADQgUAVgeAAQggAAgWgXgAKJBKQgEgBAAgEIAAh1IggAAQgEAAAAgDIAAgRQAAgFAEAAIBbAAQAEAAABAFIAAARQgBADgEAAIgfAAIAAB1QgBAEgEABgACgBKQgEgBAAgEIAAh1IggAAQgEAAAAgDIAAgRQAAgFAEAAIBcAAQADAAAAAFIAAARQAAADgDAAIghAAIAAB1QAAAEgDABgABHBKQgEgBAAgEIAAiJQAAgFAEAAIAUAAQADAAAAAFIAACJQAAAEgDABgAgiBKQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIg2hDIAABAQAAAEgFABIgSAAQgGgBAAgEIAAiIQAAgGAGAAIASAAQAFAAAAAGIAAA4IA1g8QAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIAVAAQABAAAAABQABAAABAAQAAAAAAABQABAAAAABQABACgCADIg3A+IA7BFQACACgBADQgBABAAAAQAAABgBAAQAAAAgBAAQgBABgBAAgAmDBKQgEgBAAgEIAAiJQAAgFAEAAIBVAAQAFAAAAAFIAAARQAAADgFAAIg+AAIAAAjIA0AAQAEAAAAAEIAAAQQAAAFgEAAIg0AAIAAAlIA+AAQAFAAAAADIAAARQAAAEgFABgAnEBKQgEgBAAgEIAAg5IhFAAIAAA5QAAAEgEABIgTAAQgEgBAAgEIAAiJQAAgFAEAAIATAAQAEAAAAAFIAAA3IBFAAIAAg3QAAgFAEAAIATAAQAEAAAAAFIAACJQAAAEgEABg");
	this.shape.setTransform(0.75,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#06539E").s().p("ArwECQg8AAAAg8IAAmLQAAg8A8AAIXhAAQA8AAAAA8IAAGLQAAA8g8AAg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-81.2,-25.7,191,51.5), null);


(lib.blue_rectangle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AumxkIdNAAMAAAAjJI9NAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(4,82,157,0.788)").s().p("AumRlMAAAgjJIdNAAMAAAAjJg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blue_rectangle, new cjs.Rectangle(-94.4,-113.5,188.9,227), null);


(lib._4x_text = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgfA5IAAhxIAXAAIAABeIAoAAIAAATg");
	this.shape.setTransform(75.75,103.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggA5IAAhxIA/AAIAAATIgoAAIAAAbIAmAAIAAARIgmAAIAAAfIAqAAIAAATg");
	this.shape_1.setTransform(67.675,103.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALA5IgbhPIAAAAIAABPIgVAAIAAhxIAbAAIAbBNIAAhNIAVAAIAABxg");
	this.shape_2.setTransform(58.55,103.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVA5IgGgYIgdAAIgGAYIgXAAIAehxIAbAAIAeBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_3.setTransform(49.05,103.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjA5IAAhxIAoAAQAIAAAGADQAGADAEAEQAEAFABAGQACAHAAAGQAAAJgDAGQgCAHgFADQgFAEgHACQgGACgIAAIgMAAIAAAugAgMgEIALAAQAFgBAFgEQAEgEAAgIQAAgKgEgEQgDgFgIABIgKAAg");
	this.shape_4.setTransform(40.175,103.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLA5IAAheIgYAAIAAgTIBIAAIAAATIgZAAIAABeg");
	this.shape_5.setTransform(27.2,103.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVA5IgGgYIgdAAIgGAYIgXAAIAehxIAbAAIAeBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_6.setTransform(18.45,103.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfA5IAAhxIAXAAIAABeIAoAAIAAATg");
	this.shape_7.setTransform(10.1,103.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfA5IAAhxIA/AAIAAATIgoAAIAAAbIAlAAIAAARIglAAIAAAyg");
	this.shape_8.setTransform(2.2,103.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAGAZIAAgyIAUAAIAAAygAgZAZIAAgyIAUAAIAAAyg");
	this.shape_9.setTransform(-10.3,100.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQA3QgHgDgEgGQgEgHgCgLQgBgKgBgPIABgWQABgLAEgIQADgIAHgFQAIgGALAAQAKAAAHADQAHADAEAHQAEAHACAKQACAKgBAQIgBAVQAAALgDAJQgEAIgIAFQgGAFgNAAQgKAAgGgDgAgGgoQgBACgCAFQgCAEAAAHIAAATIAAALIAAARQAAAHACAEQACAEACACIAFABQAEAAACgCQADgCABgEIACgMIABgSIAAgLIgBgSQAAgHgCgEQgBgEgDgBIgGgBQgDAAgDABg");
	this.shape_10.setTransform(-18.3,103.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTA1QgGgEgFgHQgDgHgBgKIgBgUIABgWQAAgMAEgIQADgJAIgFQAIgGANAAQAGAAAFACQAGABAEAEQAFADACAGQADAFAAAIIgVAAQgBgGgCgEQgCgDgGAAQgDAAgDACQgDACgCAEIgCAJIAAALIAAAGQADgFAFgCQAEgDAJAAQAHAAAFADQAGACADAFQADAFABAFQACAHAAAIQAAATgIAKQgKALgSAAQgLAAgIgFgAgIAEQgDAFAAAMIAAAJIADAHQABADACABQADACADAAQAEAAACgCQACgBACgDIABgIIABgIQAAgMgDgFQgDgEgGAAQgHAAgCAEg");
	this.shape_11.setTransform(-26.45,103.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVA5IgGgYIgdAAIgGAYIgXAAIAdhxIAcAAIAfBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_12.setTransform(-39.5,103.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMA5IgchPIAAAAIAABPIgVAAIAAhxIAaAAIAbBNIAAhNIAWAAIAABxg");
	this.shape_13.setTransform(-53.3,103.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAUA5IgFgYIgdAAIgGAYIgXAAIAdhxIAcAAIAfBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_14.setTransform(-62.8,103.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANA5IAAgyIgaAAIAAAyIgWAAIAAhxIAWAAIAAAsIAaAAIAAgsIAYAAIAABxg");
	this.shape_15.setTransform(-72.15,103.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLA5IAAheIgYAAIAAgTIBIAAIAAATIgZAAIAABeg");
	this.shape_16.setTransform(-80.9,103.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAuDBQgFgIgCgLIgCgWIgDhKQgBgWgKgNQgKgNgXAAIgqAAIAACjIhOAAIAAmBICPAAQAwAAAcAZQAaAYAAAzQAAAmgPAZQgQAYghAHIAAABQAdAEAOAPQAOAOADAhIABAXIABAdIADAuQAEARALAGIAAADgAg0gXIAgAAQAcAAAPgNQAPgOAAgfQAAg2g1AAIglAAg");
	this.shape_17.setTransform(65.175,67.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhuDBIAAmBIDXAAIAABAIiJAAIAABbICBAAIAAA+IiBAAIAABoICPAAIAABAg");
	this.shape_18.setTransform(36.7,67.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhGC7QgWgMgMgaQgNgagEgmQgFgmAAgyQAAgwAHglQAFglAQgYQAPgZAZgMQAZgNAkAAQBAAAAcAgQAcAgAAA7IhKAAIgEgXQgCgLgFgKQgFgJgJgGQgIgHgMABQgbgBgNAgQgMAfAABJIACA+QACAcAGATQAFAUALAKQALALAQAAQAGAAAJgEQAIgEAHgHQAIgIAFgLQAEgMAAgQIAAgnIgzAAIAAg4IB+AAIAADPIg5AAIAAgkIgBAAQgPAWgTAKQgUAKgaAAQgkAAgXgNg");
	this.shape_19.setTransform(7.45,67.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhFC7QgXgMgMgaQgNgagEgmQgFgmAAgyQAAgwAGglQAGglAQgYQAPgZAZgMQAYgNAlAAQBAAAAcAgQAbAgAAA7IhJAAIgEgXQgBgLgGgKQgGgJgIgGQgIgHgMABQgbgBgNAgQgMAfAABJIACA+QACAcAGATQAGAUAKAKQALALAQAAQAGAAAJgEQAIgEAHgHQAIgIAFgLQAFgMgBgQIAAgnIgzAAIAAg4IB+AAIAADPIg5AAIAAgkIgCAAQgOAWgTAKQgUAKgbAAQgjAAgWgNg");
	this.shape_20.setTransform(-23.05,67.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgmDBIAAmBIBNAAIAAGBg");
	this.shape_21.setTransform(-45.475,67.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ah9DBIAAmBICBAAQAYAAAUAFQAVAFAOALQAPAMAIASQAIATAAAcQAAAfgPAXQgOAWgdAIIAAABQAgAEATAXQATAXAAAnQAAAXgGAUQgGAVgOAPQgPAPgXAKQgXAJgiAAgAgvCIIAeAAQAbAAASgNQARgMAAgiQAAgRgFgLQgEgLgIgGQgIgHgLgDIgXgCIghAAgAgvgiIAWAAQAgAAAOgLQAPgMAAgbQAAgcgNgLQgOgMgcAAIgcAAg");
	this.shape_22.setTransform(-67.675,67.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ACfI0Iihl/IiiF/Ij6AAIEao5IkEouID8AAICQFtICPltID5AAIkGIuIEYI5g");
	this.shape_23.setTransform(37.85,-15.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AApIvIAAjoImNAAIAAi7IFyq6IDrAAIAALEIBsAAIAACxIhsAAIAADogAizCWIDcAAIAAmoIgDAAg");
	this.shape_24.setTransform(-43.225,-15.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgoBGQgLgMAAgWIAAgGIAfAAIAAAEIABAKQABAFACADQADADAEACQAEACAFAAQAHAAAGgFQAGgFAAgKQAAgFgBgEQgCgEgDgDQgDgDgGgCIgMgGQgLgDgHgEQgIgFgFgEQgFgGgDgHQgCgIAAgJQAAgYANgLQANgLAWAAQAKAAAJACQAJACAGAFQAHAGADAIQAEAIAAALIAAAEIgeAAQAAgLgEgGQgEgGgJAAQgFAAgDABIgGAEIgDAGIgBAHQAAAHAEAFQADAFAKAFIAXAKQAJAEAGADQAGAFADAFQADAFACAFQABAGAAAIQAAAZgOALQgPALgYAAQgbAAgMgLg");
	this.shape_25.setTransform(79.925,-88.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgsBOIAAibIBXAAIAAAaIg3AAIAAAlIA0AAIAAAZIg0AAIAAApIA5AAIAAAag");
	this.shape_26.setTransform(68.75,-88.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgcBMQgJgFgFgLQgFgKgCgQQgCgPAAgUQAAgTADgPQACgPAGgKQAHgKAKgFQAKgFAOAAQAaAAALAMQAMANAAAYIgeAAIgCgJIgDgIQgCgEgDgDQgEgCgFAAQgKAAgFANQgFAMAAAeIABAYQABAMACAIQACAIAFAEQAEAFAGAAQACAAAEgCQADgCADgDQADgDACgEQACgFAAgHIAAgQIgVAAIAAgWIA0AAIAABUIgYAAIAAgPIAAAAQgGAJgIAEQgIAEgKAAQgPAAgJgFg");
	this.shape_27.setTransform(56.575,-88.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAcBOIgHggIgpAAIgHAgIghAAIApibIAnAAIApCbgAAPAUIgPhGIAAAAIgOBGIAdAAg");
	this.shape_28.setTransform(43.875,-88.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AApBOIAAh8IgBAAIgcB8IgXAAIgch8IgBAAIAAB8IgdAAIAAibIAwAAIAVBtIAAAAIAXhtIAvAAIAACbg");
	this.shape_29.setTransform(29.125,-88.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPBOIAAibIAfAAIAACbg");
	this.shape_30.setTransform(17.7,-88.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgoBGQgLgMAAgWIAAgGIAfAAIAAAEIABAKQABAFACADQADADAEACQAEACAFAAQAHAAAGgFQAGgFAAgKQAAgFgBgEQgCgEgDgDQgDgDgGgCIgMgGQgLgDgHgEQgIgFgFgEQgFgGgDgHQgCgIAAgJQAAgYANgLQANgLAWAAQAKAAAJACQAJACAGAFQAHAGADAIQAEAIAAALIAAAEIgeAAQAAgLgEgGQgEgGgJAAQgFAAgDABIgGAEIgDAGIgBAHQAAAHAEAFQADAFAKAFIAXAKQAJAEAGADQAGAFADAFQADAFACAFQABAGAAAIQAAAZgOALQgPALgYAAQgbAAgMgLg");
	this.shape_31.setTransform(2.925,-88.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgPBOIAAiBIgiAAIAAgaIBjAAIAAAaIgiAAIAACBg");
	this.shape_32.setTransform(-8.575,-88.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgZBLQgLgFgGgLQgFgLgCgPQgCgPAAgSQAAgRACgPQACgPAFgLQAGgKALgGQAKgGARAAQARAAAKAFQAJAGAFAIQAFAJABAJIACATIggAAQAAgRgEgIQgEgIgLAAQgFAAgEADQgEADgCAHQgCAIgBALIgBAbIABAdQACALACAGQADAGADACQAEADAEAAQAFAAADgCQAEgBACgFQADgEACgIQABgIAAgMIAgAAQAAAMgCAMQgCALgGAJQgFAIgKAFQgJAFgQAAQgRAAgKgGg");
	this.shape_33.setTransform(-20.225,-88.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgsBOIAAibIBXAAIAAAaIg3AAIAAAlIA0AAIAAAZIg0AAIAAApIA5AAIAAAag");
	this.shape_34.setTransform(-31.6,-88.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWBMQgIgDgFgGQgFgHgCgIQgBgIAAgKIAAgGIAdAAIAAAEQAAANACAGQADAGAJAAQAHAAADgGQADgGAAgNIAAhvIAfAAIAABwQAAAZgLALQgMALgXAAQgMAAgIgEg");
	this.shape_35.setTransform(-43.075,-88.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgbBLQgLgFgFgLQgGgLgBgPQgCgPAAgSQAAgRACgPQABgPAGgLQAFgKALgGQALgGAQAAQASAAALAGQAKAGAFAKQAHALABAPQABAPAAARQAAASgBAPQgBAPgHALQgFALgKAFQgLAGgSAAQgQAAgLgGgAgKg2QgFADgCAHQgCAHgBALIgBAaIABAbQABALACAHQACAHAFADQAEAEAGAAQAHAAAFgEQAEgDACgHQACgHABgLIABgbIgBgaQgBgLgCgHQgCgHgEgDQgFgDgHAAQgGAAgEADg");
	this.shape_36.setTransform(-54.45,-88.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AATBOIgDgHIgBgJIgBgeQAAgJgFgGQgEgFgJAAIgRAAIAABCIgfAAIAAibIA5AAQAUgBALALQALAJAAAVQAAAPgGAKQgHAKgNADIAAAAQAMACAFAGQAGAFABAOIABAKIAAALIABATQACAGAEADIAAABgAgVgJIAOAAQAKAAAGgFQAGgGAAgMQAAgWgVAAIgPAAg");
	this.shape_37.setTransform(-66.825,-88.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgwBOIAAibIA2AAQAMAAAJADQAIAFAFAGQAFAGACAJQACAIAAAJQAAANgDAIQgEAKgGAEQgHAGgJADQgJADgLAAIgRAAIAAA+gAgRgGIAOAAQAJAAAGgGQAGgGAAgMQAAgMgFgGQgFgGgLAAIgOAAg");
	this.shape_38.setTransform(-79.125,-88.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._4x_text, new cjs.Rectangle(-219.2,-114.4,438.5,228.9), null);


(lib.Shaq_frame_05 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.shaq_frame_05_txt();
	this.instance.setTransform(-5.5,67.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:47.7,alpha:1},10,cjs.Ease.quadOut).wait(16).to({alpha:0},7).wait(42));

	// shaq_image
	this.instance_1 = new lib.shaq_frame_05();
	this.instance_1.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Shaq_frame_04 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shaq_frame_03_txt();
	this.instance.setTransform(-5.5,47.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

	// text
	this.instance_1 = new lib.shaq_frame_04_txt();
	this.instance_1.setTransform(-5.5,67.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:47.7,alpha:1},10,cjs.Ease.quadOut).wait(65));

	// shaq_image
	this.instance_2 = new lib.shaq_frame_04();
	this.instance_2.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Shaq_frame_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.shaq_frame_03_txt();
	this.instance.setTransform(-5.5,67.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:47.7,alpha:1},10,cjs.Ease.quadOut).wait(65));

	// shaq_image
	this.instance_1 = new lib.shaq_frame_03();
	this.instance_1.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Shaq_frame_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.shaq_frame_02_txt();
	this.instance.setTransform(-5.5,47.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

	// text
	this.instance_1 = new lib.shaq_frame_02_txt_02();
	this.instance_1.setTransform(-1.4,97.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:77.7,alpha:1},10,cjs.Ease.quadOut).wait(65));

	// shaq_image
	this.instance_2 = new lib.shaq_frame_02();
	this.instance_2.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Shaq_frame_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.shaq_frame_01_txt();
	this.instance.setTransform(-5.5,67.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:47.7,alpha:1},10,cjs.Ease.quadOut).wait(65));

	// shaq_image
	this.instance_1 = new lib.shaq_frame_01();
	this.instance_1.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


// stage content:
(lib.Epson_EpiqVision_300x250 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(357));

	// Epson_logo
	this.instance = new lib.Epson_logo();
	this.instance.setTransform(249.35,21.05);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(330).to({_off:false},0).to({alpha:1},7).wait(20));

	// Shaq_image
	this.instance_1 = new lib.Shaq_image();
	this.instance_1.setTransform(318.1,178.05);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(330).to({_off:false},0).to({x:283.1},7,cjs.Ease.quadInOut).wait(20));

	// ctaBtn
	this.instance_2 = new lib.ctaBtn();
	this.instance_2.setTransform(238.6,227.25,0.4786,0.4786,0,0,0,1,1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(350).to({_off:false},0).to({alpha:1},6).wait(1));

	// Frame_10_02
	this.instance_3 = new lib.Frame_10_02();
	this.instance_3.setTransform(133.05,103.05);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(350).to({_off:false},0).to({alpha:1},6).wait(1));

	// Frame_10_01
	this.instance_4 = new lib.Frame_10_01();
	this.instance_4.setTransform(150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(325).to({_off:false},0).to({alpha:1},7).wait(25));

	// shaq_frame_09_txt
	this.instance_5 = new lib.shaq_frame_09_txt();
	this.instance_5.setTransform(180,210,1,1,0,0,0,15.8,-115.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(291).to({_off:false},0).to({y:204,alpha:1},9,cjs.Ease.quadOut).wait(57));

	// Shaq_frame_09
	this.instance_6 = new lib.Shaq_frame_09();
	this.instance_6.setTransform(150,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(284).to({_off:false},0).to({alpha:1},7).wait(66));

	// _x_text
	this.instance_7 = new lib._4x_text();
	this.instance_7.setTransform(150.8,116.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(249).to({_off:false},0).to({alpha:1},8).wait(100));

	// blue_rectangle
	this.instance_8 = new lib.blue_rectangle();
	this.instance_8.setTransform(150,123.05);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(249).to({_off:false},0).to({alpha:1},8).wait(100));

	// image_group
	this.instance_9 = new lib.image_group_1();
	this.instance_9.setTransform(150,125);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(242).to({_off:false},0).to({alpha:1},7).wait(108));

	// shaq_frame_07_txt
	this.instance_10 = new lib.shaq_frame_07_txt();
	this.instance_10.setTransform(149.95,225.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(203).to({_off:false},0).to({y:210.2,alpha:1},9,cjs.Ease.quadOut).wait(145));

	// shaq_frame_07
	this.instance_11 = new lib.shaq_frame_07();
	this.instance_11.setTransform(150,125);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(195).to({_off:false},0).to({alpha:1},6).wait(156));

	// shaq_frame_06_txt
	this.instance_12 = new lib.shaq_frame_06_txt();
	this.instance_12.setTransform(149.95,217.7);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(155).to({_off:false},0).to({y:210.2,alpha:1},8,cjs.Ease.quadOut).wait(194));

	// Shaq_frame_06
	this.instance_13 = new lib.Shaq_frame_06();
	this.instance_13.setTransform(150,125);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(147).to({_off:false},0).to({alpha:1},6).wait(204));

	// Shaq_frame_05
	this.instance_14 = new lib.Shaq_frame_05("single",0);
	this.instance_14.setTransform(150,125);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(108).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},6).wait(243));

	// Shaq_frame_04
	this.instance_15 = new lib.Shaq_frame_04("synched",0,false);
	this.instance_15.setTransform(150,125);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(75).to({_off:false},0).to({alpha:1,startPosition:6},6).wait(276));

	// Shaq_frame_03
	this.instance_16 = new lib.Shaq_frame_03("single",0);
	this.instance_16.setTransform(150,125);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(52).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},6).wait(299));

	// Shaq_frame_02
	this.instance_17 = new lib.Shaq_frame_02("synched",0,false);
	this.instance_17.setTransform(150,125);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(18).to({_off:false},0).to({alpha:1,startPosition:6},6).wait(333));

	// Shaq_frame_01
	this.instance_18 = new lib.Shaq_frame_01("synched",0,false);
	this.instance_18.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(357));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(81.6,88.1,288.5,274.6);
// library properties:
lib.properties = {
	id: 'DD94ED7BF2A34E56A40B38420D93FD29',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"endFrame_screen_01.jpg", id:"endFrame_screen_01"},
		{src:"endFrame_screen_02.jpg", id:"endFrame_screen_02"},
		{src:"epson_logo.png", id:"epson_logo"},
		{src:"image_group.jpg", id:"image_group"},
		{src:"shaq_endFrame.png", id:"shaq_endFrame"},
		{src:"shaq_frame_01.jpg", id:"shaq_frame_01"},
		{src:"shaq_frame_02.jpg", id:"shaq_frame_02"},
		{src:"shaq_frame_03.jpg", id:"shaq_frame_03"},
		{src:"shaq_frame_04.jpg", id:"shaq_frame_04"},
		{src:"shaq_frame_05.jpg", id:"shaq_frame_05"},
		{src:"shaq_frame_06.jpg", id:"shaq_frame_06"},
		{src:"shaq_frame_09.jpg", id:"shaq_frame_09"}
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
an.compositions['DD94ED7BF2A34E56A40B38420D93FD29'] = {
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
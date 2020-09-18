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
	this.shape.graphics.f("#FFFFFF").s().p("AgKBdIAAhKIhNhvIAaAAIA9BcIA/hcIAZAAIhNBvIAABKg");
	this.shape.setTransform(86.025,12.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBdIAAilIg+AAIAAgUICRAAIAAAUIg+AAIAAClg");
	this.shape_1.setTransform(69.075,12.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDBdIAAi5ICFAAIAAATIhwAAIAABAIBlAAIAAASIhlAAIAABBIByAAIAAATg");
	this.shape_2.setTransform(53.275,12.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhCBdIAAi5ICFAAIAAAUIhwAAIAABCIBkAAIAAASIhkAAIAABRg");
	this.shape_3.setTransform(36.925,12.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABIBdIgWgxIhkAAIgWAxIgVAAIBUi5IATAAIBUC5gAAqAaIgqheIgqBeIBUAAg");
	this.shape_4.setTransform(18.325,12.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhFBCIAOgQQAdAbAhAAQATAAALgJQALgJAAgOQAAgOgJgHQgKgJgdgGQgggHgOgLQgPgMAAgWQAAgXARgOQASgOAaAAQAjAAAdAXIgMAQQgZgUgbAAQgTAAgKAIQgLAJAAANQAAAOAJAHQALAJAdAGQAfAHAPALQAPANAAAVQAAAYgSAOQgSAOgcAAQgpAAgigdg");
	this.shape_5.setTransform(0.4,12.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlBDQgbAcghAAQgZAAgRgPQgQgOAAgXQAAgkAsgRQgSgVAAgUQAAgSAOgNQANgNAWAAQASAAANAMQANAMAAASQAAAhgqAQIApAqQAMgSAKgXIASAIQgPAdgMARIAgAhIgQAMgAg8AqQAAAPALALQALAKARgBQAXAAAWgYIgxgyQgjAMAAAbgAgbhGQgIAIAAALQABAPASATQAjgLgBgYQABgLgIgIQgIgHgKAAQgMAAgIAIg");
	this.shape_6.setTransform(-22.7,12.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA1BdIAAhUIhqAAIAABUIgVAAIAAi5IAVAAIAABTIBqAAIAAhTIAWAAIAAC5g");
	this.shape_7.setTransform(-47.9,12.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKBdIAAilIg+AAIAAgUICRAAIAAAUIg+AAIAAClg");
	this.shape_8.setTransform(-65.425,12.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag+BdIAAi5IAVAAIAAClIBoAAIAAAUg");
	this.shape_9.setTransform(-80.375,12.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABIBdIgWgxIhkAAIgWAxIgVAAIBUi5IATAAIBUC5gAAqAaIgqheIgqBeIBUAAg");
	this.shape_10.setTransform(-98.575,12.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhDBdIAAi5ICFAAIAAATIhwAAIAABAIBlAAIAAASIhlAAIAABBIByAAIAAATg");
	this.shape_11.setTransform(-116.325,12.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA2BdIAAhUIhrAAIAABUIgUAAIAAi5IAUAAIAABTIBrAAIAAhTIAUAAIAAC5g");
	this.shape_12.setTransform(-134.6,12.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAzBdIg1hIIg1AAIAABIIgVAAIAAi5IBPAAQAfAAASAQQASAPAAAZQAAAWgOAOQgNANgXAEIA5BMgAg3ACIA4AAQAWAAANgJQANgLAAgRQAAgSgNgKQgMgJgWAAIg5AAg");
	this.shape_13.setTransform(-159.275,12.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhEBDQgagbAAgoQAAgmAagcQAcgdAoAAQApAAAbAdQAaAbAAAnQAAAngaAcQgbAdgpAAQgoAAgcgdgAg0g1QgUAWAAAfQAAAgAVAWQAVAXAeAAQAgAAAVgXQAUgVAAghQAAgfgVgWQgVgWgfAAQgfAAgVAWg");
	this.shape_14.setTransform(-179.7,12.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhCBdIAAi5ICFAAIAAAUIhwAAIAABCIBkAAIAAASIhkAAIAABRg");
	this.shape_15.setTransform(-197.875,12.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhFBCIAOgQQAdAbAhAAQATAAALgJQAMgJAAgOQAAgOgKgHQgLgJgcgGQgggHgOgLQgPgMAAgWQAAgXARgOQASgOAaAAQAjAAAdAXIgMAQQgZgUgbAAQgSAAgLAIQgLAJAAANQAAAOAKAHQAKAJAdAGQAgAHAOALQAPANAAAVQgBAYgRAOQgSAOgcAAQgpAAgigdg");
	this.shape_16.setTransform(193.65,-22.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhQBdIAAi5IBAAAQAqAAAcAbQAcAaAAAnQAAAogcAaQgcAbgqAAgAg7BJIArAAQAiAAAVgVQAVgUAAggQAAgegVgVQgVgVgiAAIgrAAg");
	this.shape_17.setTransform(176.5,-22.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAzBdIg1hIIg1AAIAABIIgVAAIAAi5IBPAAQAfAAASAQQASAPAAAZQAAAWgOAOQgNANgXAEIA5BMgAg3ACIA4AAQAWAAANgJQANgLAAgRQAAgSgNgKQgMgJgWAAIg5AAg");
	this.shape_18.setTransform(157.975,-22.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABIBdIgWgxIhkAAIgWAxIgVAAIBUi5IATAAIBUC5gAAqAaIgqheIgqBeIBUAAg");
	this.shape_19.setTransform(138.375,-22.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhRBdIAAi5IBBAAQArAAAbAbQAbAaAAAnQAAAogbAaQgbAbgrAAgAg7BJIArAAQAiAAAVgVQAVgUAAggQAAgegVgVQgVgVgiAAIgrAAg");
	this.shape_20.setTransform(119.05,-22.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AA+BdIh3iXIAACXIgVAAIAAi5IAUAAIB0CUIAAiUIAVAAIAAC5g");
	this.shape_21.setTransform(98.95,-22.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABIBdIgWgxIhkAAIgWAxIgVAAIBUi5IATAAIBUC5gAAqAaIgqheIgqBeIBUAAg");
	this.shape_22.setTransform(79.175,-22.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKBdIAAilIg+AAIAAgUICRAAIAAAUIg+AAIAAClg");
	this.shape_23.setTransform(61.225,-22.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhFBCIANgQQAeAbAhAAQASAAAMgJQALgJAAgOQAAgOgJgHQgLgJgcgGQgggHgOgLQgPgMAAgWQAAgXARgOQASgOAaAAQAkAAAcAXIgMAQQgZgUgbAAQgTAAgLAIQgKAJAAANQAAAOAJAHQAMAJAcAGQAgAHAOALQAOANAAAVQABAYgTAOQgRAOgcAAQgqAAghgdg");
	this.shape_24.setTransform(45.2,-22.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKBdIAAilIg+AAIAAgUICRAAIAAAUIg+AAIAAClg");
	this.shape_25.setTransform(22.525,-22.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhFBCIAOgQQAdAbAhAAQATAAALgJQAMgJAAgOQAAgOgKgHQgLgJgcgGQgggHgOgLQgPgMAAgWQAAgXARgOQASgOAaAAQAjAAAdAXIgMAQQgZgUgcAAQgRAAgLAIQgLAJAAANQAAAOAKAHQAKAJAdAGQAgAHAOALQAPANAAAVQgBAYgRAOQgSAOgcAAQgpAAgigdg");
	this.shape_26.setTransform(6.45,-22.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhDBdIAAi5ICFAAIAAATIhwAAIAABAIBlAAIAAASIhlAAIAABBIByAAIAAATg");
	this.shape_27.setTransform(-9.125,-22.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AA1BdIAAhUIhqAAIAABUIgUAAIAAi5IAUAAIAABTIBqAAIAAhTIAVAAIAAC5g");
	this.shape_28.setTransform(-27.4,-22.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag6BEQgZgbAAgpQAAgmAZgcQAbgdAoAAQAoAAAdAZIgOAQQgYgVggAAQgdAAgVAWQgUAWAAAfQAAAiAUAVQAVAWAgAAQAfAAAWgSIAAgvIg4AAIAAgRIBMAAIAABJQgfAcgrAAQgqAAgagcg");
	this.shape_29.setTransform(-46.875,-22.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgKBdIAAi5IAVAAIAAC5g");
	this.shape_30.setTransform(-59.85,-22.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AA2BdIAAhUIhqAAIAABUIgVAAIAAi5IAVAAIAABTIBqAAIAAhTIAUAAIAAC5g");
	this.shape_31.setTransform(-72.6,-22.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhDBdIAAi5ICFAAIAAATIhwAAIAABAIBlAAIAAASIhlAAIAABBIByAAIAAATg");
	this.shape_32.setTransform(-96.725,-22.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA2BdIAAhUIhqAAIAABUIgWAAIAAi5IAWAAIAABTIBqAAIAAhTIAUAAIAAC5g");
	this.shape_33.setTransform(-115,-22.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgKBdIAAilIg+AAIAAgUICRAAIAAAUIg+AAIAAClg");
	this.shape_34.setTransform(-132.525,-22.175);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhRBdIAAi5IBBAAQArAAAbAbQAbAaAAAnQAAAogbAaQgbAbgrAAgAg7BJIArAAQAiAAAVgVQAVgUAAggQAAgegVgVQgVgVgiAAIgrAAg");
	this.shape_35.setTransform(-156.8,-22.175);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AA+BdIh3iXIAACXIgVAAIAAi5IAUAAIB0CUIAAiUIAVAAIAAC5g");
	this.shape_36.setTransform(-176.9,-22.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ABIBdIgWgxIhkAAIgWAxIgVAAIBUi5IATAAIBUC5gAAqAaIgqheIgqBeIBUAAg");
	this.shape_37.setTransform(-196.675,-22.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_highestStandard, new cjs.Rectangle(-209.3,-39.1,431.8,68.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AGoDgQgYgZAAglQAAgkAYgZQAYgaAlAAQAlAAAcAbIgMAOQgZgXgcAAQgcAAgTAUQgSAUAAAdQAAAdASAUQATAVAcAAQAdAAAZgZIAMANQgdAdgmAAQgkAAgYgZgAj2DgQgZgZAAgkIAAgBQAAgkAYgZQAZgaAnAAQAoAAAaAaIgYAbQgVgTgWAAQgVAAgOAQQgOAPAAAWIAAAAQAAAWAOAPQAOAQAVAAQANAAALgFQAJgFALgKIAYAYQgOAPgPAHQgRAIgXAAQglAAgYgZgAD9DeIALgOQAaAYAgAAQARAAAKgIQAKgIABgNQgBgNgIgGQgJgIgagFQgegHgNgKQgNgMAAgUQAAgUAPgNQAPgNAZAAQAhAAAaAUIgMAPQgVgSgbAAQgQAAgKAIQgKAHABAMQgBANAJAHQALAHAaAGQAdAGANALQANAMAAATQAAAVgRAOQgPANgZAAQgnAAgegbgAOID2IAAioIB5AAIAAASIhmAAIAAA5IBcAAIAAARIhcAAIAAA7IBnAAIAAARgALyD2IAAioIA/AAQAdAAARAPQAQAOABAZQAAAagUAPQgSAOgdAAIgoAAIAAA7gAMFCqIAqAAQAUAAANgLQANgKAAgRQAAgRgNgKQgMgJgVAAIgqAAgALGD2IgTgsIhbAAIgVAsIgTAAIBNipIARAAIBMCpgAKsC5IgnhWIgnBWIBOAAgAByD2IAAioIB4AAIAAASIhlAAIAAA5IBbAAIAAARIhbAAIAAA7IBnAAIAAARgAg5D2IAAiGIg0AAIAAgiICKAAIAAAiIgyAAIAACGgAmeD2IAAioIB+AAIAAAhIhaAAIAAAiIBQAAIAAAhIhQAAIAAAjIBbAAIAAAhgAoxD2IAAioICAAAIAAAiIhbAAIAAAkIBQAAIAAAhIhQAAIAABBgApvD2Igkg2IgdAAIAAA2IglAAIAAioIBNAAQAeAAAQAPQARAPAAAaIAAAAQABAnglANIAqA8gAqwCgIAmAAQANAAAHgHQAIgGAAgLIAAAAQAAgYgdAAIglAAgAtrD2IAAioIB/AAIAAAhIhaAAIAAAiIBPAAIAAAhIhPAAIAAAjIBbAAIAAAhgAwCD2IAAioIBGAAQAdAAASAQQAQAQABAaIAAABQgBAcgTAQQgTAPgeAAIgcAAIAAAygAvdCjIAeAAQANAAAJgHQAHgHAAgLIAAgBQAAgMgIgHQgIgGgOAAIgdAAgAAZhkQgXgZgBgkQABgkAXgZQAZgaAlAAQAlAAAZAaQAYAZgBAjQABAkgYAaQgZAaglAAQgmAAgYgagAAnjSQgSATAAAdQAAAeASAUQAUAUAcAAQAdAAATgUQASgUAAgdQAAgdgSgUQgUgVgcAAQgdAAgTAVgAophkQgYgZABgkQgBgkAYgZQAZgaAlAAQAmAAAYAaQAYAZAAAjQAAAkgYAaQgZAagmAAQgkAAgZgagAobjSQgSATAAAdQAAAeASAUQAUAUAcAAQAcAAAUgUQASgUAAgdQAAgdgSgUQgUgVgdAAQgcAAgTAVgADbhdQgTgUAAgjIAAhhIATAAIAABgQAAAbAOAPQANAPAYAAQAYAAANgOQAOgOAAgcIAAhhIATAAIAABgQAAAkgTAUQgSASghAAQggAAgTgSgArEhpIAOgLQAPAYAXAAQAPAAAJgLQAJgKAAgUIAAhwIATAAIAABwQAAAcgPAQQgOAOgXAAQgiAAgSgegAHrhNIgyhCIgvAAIAABCIgTAAIAAioIBIAAQAbAAASAOQAPANAAAXQAAAUgMANQgMAMgVAEIA0BFgAGKigIA0AAQASAAAMgJQAMgJAAgQQAAgQgLgJQgLgJgUAAIg0AAgAhjhNIAAhDIhGhlIAXAAIA5BUIA5hUIAWAAIhGBlIAABDgAlDhNIAAhDIhGhlIAYAAIA4BUIA6hUIAVAAIhGBlIAABDgArphNIhsiKIAACKIgSAAIAAioIARAAIBrCGIAAiGIASAAIAACogAv+hNIAAioIB6AAIAAARIhmAAIAAA5IBbAAIAAASIhbAAIAAA7IBnAAIAAARg");
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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.107,scaleY:1.107,x:311,y:305.25},143).wait(128).to({_off:true},1).wait(88));

	// Layer_8
	this.instance_1 = new lib.server_img();
	this.instance_1.setTransform(270.25,280.95,0.9465,0.9465);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.1116,scaleY:1.1116,x:212,y:292.95},143).wait(128).to({_off:true},1).wait(88));

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
	this.shape.graphics.f().s("#000000").ss(2,0,0,3).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
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

	// txt_shopping
	this.instance_6 = new lib.txt_highestStandard();
	this.instance_6.setTransform(688.05,48.55,0.7433,0.7433);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(95).to({_off:false},0).to({x:337.05},19,cjs.Ease.quadOut).wait(246));

	// multiply_layer
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.2)").s().p("EgZfAxSMAAAhikMAzAAAAMAAABikg");
	this.shape_4.setTransform(363.9977,44.9956,2.2297,0.1427);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(87).to({_off:false},0).wait(273));

	// server_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_87 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_88 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_89 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_90 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_91 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_92 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_93 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_94 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_95 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_96 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_97 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_98 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_99 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_100 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_101 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_102 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_103 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_104 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_105 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_106 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_107 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_108 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_109 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_110 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_111 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_112 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_113 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_114 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_115 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_116 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_117 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_118 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_119 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_120 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_121 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_122 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_123 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_124 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_125 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_126 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_127 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_128 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_129 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_130 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_131 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_132 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_133 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_134 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_135 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_136 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_137 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_138 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_139 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_140 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_141 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_142 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_143 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_144 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_145 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_146 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_147 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_148 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_149 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_150 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_151 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_152 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_153 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_154 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_155 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_156 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_157 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_158 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_159 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_160 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_161 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_162 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_163 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_164 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_165 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_166 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_167 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_168 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_169 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_170 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_171 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_172 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_173 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_174 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_175 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_176 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_177 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_178 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_179 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_180 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_181 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_182 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_183 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_184 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_185 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_186 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");
	var mask_graphics_187 = new cjs.Graphics().p("Ao6AYQACnRBOgcQBLgbHKAYIG5AXQAyCgAKAoQAHAeAGBDQAGBEgEAPQgCAIAJA9QAIA6gFARQgGATgjAgIgiAdQgNAHgMALQgZAVAAAQQAAAjgrA2Qg5BHhQAAQhUAAAxAaQAtAYA8AKQAlAGAjANQASAGAKAFIvdAZQgPjkAAjpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(87).to({graphics:mask_graphics_87,x:127.5822,y:44.5853}).wait(1).to({graphics:mask_graphics_88,x:126.9322,y:44.5353}).wait(1).to({graphics:mask_graphics_89,x:126.3322,y:44.5353}).wait(1).to({graphics:mask_graphics_90,x:125.6822,y:44.4853}).wait(1).to({graphics:mask_graphics_91,x:125.0322,y:44.4853}).wait(1).to({graphics:mask_graphics_92,x:124.3822,y:44.4353}).wait(1).to({graphics:mask_graphics_93,x:123.7822,y:44.3853}).wait(1).to({graphics:mask_graphics_94,x:123.1322,y:44.3853}).wait(1).to({graphics:mask_graphics_95,x:122.4822,y:44.3353}).wait(1).to({graphics:mask_graphics_96,x:121.8822,y:44.3353}).wait(1).to({graphics:mask_graphics_97,x:121.2322,y:44.2853}).wait(1).to({graphics:mask_graphics_98,x:120.5822,y:44.2353}).wait(1).to({graphics:mask_graphics_99,x:119.9822,y:44.2353}).wait(1).to({graphics:mask_graphics_100,x:119.3322,y:44.1853}).wait(1).to({graphics:mask_graphics_101,x:118.6822,y:44.1853}).wait(1).to({graphics:mask_graphics_102,x:118.0822,y:44.1353}).wait(1).to({graphics:mask_graphics_103,x:117.4322,y:44.0853}).wait(1).to({graphics:mask_graphics_104,x:116.7822,y:44.0853}).wait(1).to({graphics:mask_graphics_105,x:116.1322,y:44.0353}).wait(1).to({graphics:mask_graphics_106,x:115.5322,y:44.0353}).wait(1).to({graphics:mask_graphics_107,x:114.8822,y:43.9853}).wait(1).to({graphics:mask_graphics_108,x:114.2322,y:43.9353}).wait(1).to({graphics:mask_graphics_109,x:113.6322,y:43.9353}).wait(1).to({graphics:mask_graphics_110,x:112.9822,y:43.8853}).wait(1).to({graphics:mask_graphics_111,x:112.3322,y:43.8853}).wait(1).to({graphics:mask_graphics_112,x:111.7322,y:43.8353}).wait(1).to({graphics:mask_graphics_113,x:111.0822,y:43.7853}).wait(1).to({graphics:mask_graphics_114,x:110.4322,y:43.7853}).wait(1).to({graphics:mask_graphics_115,x:109.7822,y:43.7353}).wait(1).to({graphics:mask_graphics_116,x:109.1822,y:43.7353}).wait(1).to({graphics:mask_graphics_117,x:108.5322,y:43.6853}).wait(1).to({graphics:mask_graphics_118,x:107.8822,y:43.6353}).wait(1).to({graphics:mask_graphics_119,x:107.2822,y:43.6353}).wait(1).to({graphics:mask_graphics_120,x:106.6322,y:43.5853}).wait(1).to({graphics:mask_graphics_121,x:105.9822,y:43.5853}).wait(1).to({graphics:mask_graphics_122,x:105.3322,y:43.5353}).wait(1).to({graphics:mask_graphics_123,x:104.7322,y:43.4853}).wait(1).to({graphics:mask_graphics_124,x:104.0822,y:43.4853}).wait(1).to({graphics:mask_graphics_125,x:103.4322,y:43.4353}).wait(1).to({graphics:mask_graphics_126,x:102.8322,y:43.4353}).wait(1).to({graphics:mask_graphics_127,x:102.1822,y:43.3853}).wait(1).to({graphics:mask_graphics_128,x:101.5322,y:43.3353}).wait(1).to({graphics:mask_graphics_129,x:100.9322,y:43.3353}).wait(1).to({graphics:mask_graphics_130,x:100.2822,y:43.2853}).wait(1).to({graphics:mask_graphics_131,x:99.6322,y:43.2853}).wait(1).to({graphics:mask_graphics_132,x:99.0322,y:43.2353}).wait(1).to({graphics:mask_graphics_133,x:98.3822,y:43.1853}).wait(1).to({graphics:mask_graphics_134,x:97.7322,y:43.1853}).wait(1).to({graphics:mask_graphics_135,x:97.0822,y:43.1353}).wait(1).to({graphics:mask_graphics_136,x:96.4822,y:43.1353}).wait(1).to({graphics:mask_graphics_137,x:95.8322,y:43.0853}).wait(1).to({graphics:mask_graphics_138,x:95.1822,y:43.0353}).wait(1).to({graphics:mask_graphics_139,x:94.5822,y:43.0353}).wait(1).to({graphics:mask_graphics_140,x:93.9322,y:42.9853}).wait(1).to({graphics:mask_graphics_141,x:93.2822,y:42.9853}).wait(1).to({graphics:mask_graphics_142,x:92.6322,y:42.9353}).wait(1).to({graphics:mask_graphics_143,x:92.0322,y:42.8853}).wait(1).to({graphics:mask_graphics_144,x:91.3822,y:42.8853}).wait(1).to({graphics:mask_graphics_145,x:90.7322,y:42.8353}).wait(1).to({graphics:mask_graphics_146,x:90.1322,y:42.8353}).wait(1).to({graphics:mask_graphics_147,x:89.4822,y:42.7853}).wait(1).to({graphics:mask_graphics_148,x:88.8322,y:42.7353}).wait(1).to({graphics:mask_graphics_149,x:88.2322,y:42.7353}).wait(1).to({graphics:mask_graphics_150,x:87.5822,y:42.6853}).wait(1).to({graphics:mask_graphics_151,x:86.9322,y:42.6853}).wait(1).to({graphics:mask_graphics_152,x:86.3322,y:42.6353}).wait(1).to({graphics:mask_graphics_153,x:85.6822,y:42.5853}).wait(1).to({graphics:mask_graphics_154,x:85.0322,y:42.5853}).wait(1).to({graphics:mask_graphics_155,x:84.3822,y:42.5353}).wait(1).to({graphics:mask_graphics_156,x:83.7822,y:42.5353}).wait(1).to({graphics:mask_graphics_157,x:83.1322,y:42.4853}).wait(1).to({graphics:mask_graphics_158,x:82.4822,y:42.4353}).wait(1).to({graphics:mask_graphics_159,x:81.8822,y:42.4353}).wait(1).to({graphics:mask_graphics_160,x:81.2322,y:42.3853}).wait(1).to({graphics:mask_graphics_161,x:80.5822,y:42.3853}).wait(1).to({graphics:mask_graphics_162,x:79.9822,y:42.3353}).wait(1).to({graphics:mask_graphics_163,x:79.3322,y:42.2853}).wait(1).to({graphics:mask_graphics_164,x:78.6822,y:42.2853}).wait(1).to({graphics:mask_graphics_165,x:78.0322,y:42.2353}).wait(1).to({graphics:mask_graphics_166,x:77.4322,y:42.2353}).wait(1).to({graphics:mask_graphics_167,x:76.7822,y:42.1853}).wait(1).to({graphics:mask_graphics_168,x:76.1322,y:42.1353}).wait(1).to({graphics:mask_graphics_169,x:75.5322,y:42.1353}).wait(1).to({graphics:mask_graphics_170,x:74.8822,y:42.0853}).wait(1).to({graphics:mask_graphics_171,x:74.2322,y:42.0853}).wait(1).to({graphics:mask_graphics_172,x:73.5822,y:42.0353}).wait(1).to({graphics:mask_graphics_173,x:72.9822,y:41.9853}).wait(1).to({graphics:mask_graphics_174,x:72.3322,y:41.9853}).wait(1).to({graphics:mask_graphics_175,x:71.6822,y:41.9353}).wait(1).to({graphics:mask_graphics_176,x:71.0822,y:41.9353}).wait(1).to({graphics:mask_graphics_177,x:70.4322,y:41.8853}).wait(1).to({graphics:mask_graphics_178,x:69.7822,y:41.8353}).wait(1).to({graphics:mask_graphics_179,x:69.1822,y:41.8353}).wait(1).to({graphics:mask_graphics_180,x:68.5322,y:41.7853}).wait(1).to({graphics:mask_graphics_181,x:67.8822,y:41.7853}).wait(1).to({graphics:mask_graphics_182,x:67.2822,y:41.7353}).wait(1).to({graphics:mask_graphics_183,x:66.6322,y:41.6853}).wait(1).to({graphics:mask_graphics_184,x:65.9822,y:41.6853}).wait(1).to({graphics:mask_graphics_185,x:65.3322,y:41.6353}).wait(1).to({graphics:mask_graphics_186,x:64.7322,y:41.6353}).wait(1).to({graphics:mask_graphics_187,x:64.0822,y:41.5853}).wait(173));

	// server
	this.instance_7 = new lib.server_PX("synched",0);
	this.instance_7.setTransform(294.7,134.75,0.6494,0.6494,0,0,0,320.3,302.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(87).to({_off:false},0).to({regY:302.6,scaleX:0.6499,scaleY:0.6499,x:293.4,y:135.95,alpha:1,startPosition:10},10).to({regX:320.5,scaleX:0.6543,scaleY:0.6543,x:281.85,y:146.8,startPosition:100},90).to({_off:true},13).wait(160));

	// white_Box
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2,1,1).p("A7ZlDMA2zAAAIAAKHMg2zAAAg");
	this.shape_5.setTransform(720.075,44.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2,1,1).p("A7wlDMA3hAAAIAAKHMg3hAAAg");
	this.shape_6.setTransform(683.35,44.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2,1,1).p("A8GlDMA4NAAAIAAKHMg4NAAAg");
	this.shape_7.setTransform(648.625,44.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,1,1).p("A8blDMA43AAAIAAKHMg43AAAg");
	this.shape_8.setTransform(615.875,44.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2,1,1).p("A8ulDMA5eAAAIAAKHMg5eAAAg");
	this.shape_9.setTransform(585.1,44.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2,1,1).p("A9BlDMA6DAAAIAAKHMg6DAAAg");
	this.shape_10.setTransform(556.325,44.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2,1,1).p("A9SlDMA6lAAAIAAKHMg6lAAAg");
	this.shape_11.setTransform(529.525,44.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(2,1,1).p("A9ilDMA7EAAAIAAKHMg7EAAAg");
	this.shape_12.setTransform(504.75,44.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(2,1,1).p("A9wlDMA7hAAAIAAKHMg7hAAAg");
	this.shape_13.setTransform(481.9,44.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2,1,1).p("A99lDMA77AAAIAAKHMg77AAAg");
	this.shape_14.setTransform(461.075,44.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+JlDMA8TAAAIAAKHMg8TAAAg");
	this.shape_15.setTransform(442.225,44.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+UlDMA8pAAAIAAKHMg8pAAAg");
	this.shape_16.setTransform(425.35,44.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+dlDMA88AAAIAAKHMg88AAAg");
	this.shape_17.setTransform(410.45,44.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+llDMA9MAAAIAAKHMg9MAAAg");
	this.shape_18.setTransform(397.55,44.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+tlDMA9bAAAIAAKHMg9bAAAg");
	this.shape_19.setTransform(386.65,44.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+ylDMA9lAAAIAAKHMg9lAAAg");
	this.shape_20.setTransform(377.7,44.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+3lDMA9uAAAIAAKHMg9uAAAg");
	this.shape_21.setTransform(370.75,44.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+5lDMA90AAAIAAKHMg90AAAg");
	this.shape_22.setTransform(365.8,44.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(2,1,1).p("A+8lDMA95AAAIAAKHMg95AAAg");
	this.shape_23.setTransform(362.825,44.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},87).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23,p:{x:362.825}}]},1).to({state:[{t:this.shape_23,p:{x:361.825}}]},1).wait(254));

	// server
	this.instance_8 = new lib.server_PX("synched",0);
	this.instance_8.setTransform(294.7,134.75,0.6494,0.6494,0,0,0,320.3,302.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(88).to({_off:false},0).to({regY:302.6,scaleX:0.6499,scaleY:0.6499,x:293.4,y:135.95,alpha:1,startPosition:10},10).to({regX:320.5,scaleX:0.6543,scaleY:0.6543,x:281.85,y:146.8,startPosition:100},90).wait(172));

	// white_Box
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(2,1,1).p("A0KlUMAoVAAAIAAKpMgoVAAAg");
	this.shape_24.setTransform(-133.825,46.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1).to({x:-103.775},0).wait(1).to({x:-75.575},0).wait(1).to({x:-49.175},0).wait(1).to({x:-24.625},0).wait(1).to({x:-1.875},0).wait(1).to({x:19.075},0).wait(1).to({x:38.175},0).wait(1).to({x:55.475},0).wait(1).to({x:70.925},0).wait(1).to({x:84.575},0).wait(1).to({x:96.425},0).wait(1).to({x:106.425},0).wait(1).to({x:114.625},0).wait(1).to({x:120.975},0).wait(1).to({x:125.525},0).wait(1).to({x:128.275},0).wait(1).to({x:129.175},0).wait(343));

	// txt_shopping
	this.instance_9 = new lib.txt_shopping();
	this.instance_9.setTransform(-189.35,91.45,0.8884,0.8884);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(7).to({_off:false},0).to({x:73.65},17,cjs.Ease.quadOut).wait(336));

	// multiply_layer
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.2)").s().p("EgZfAxSMAAAhikMAzAAAAMAAABikg");
	this.shape_25.setTransform(363.9977,44.9956,2.2297,0.1427);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(360));

	// shopping_woman
	this.instance_10 = new lib.ShoppingWoman_PX("synched",0,false);
	this.instance_10.setTransform(265.2,240.75,1.2811,1.2811,0,0,0,128.4,299.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:128.2,regY:299.9,scaleX:1.0796,scaleY:1.0796,x:252.7,y:264,startPosition:97},97).wait(263));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(100.1,-482.8,796.4,1137.1);
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
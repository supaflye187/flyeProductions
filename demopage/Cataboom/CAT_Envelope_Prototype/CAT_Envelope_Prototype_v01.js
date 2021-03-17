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



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,691,223);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,546,389);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,693,444);


(lib.img_01 = function() {
	this.initialize(img.img_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,400);// helper functions:

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


(lib.envelope_SHADOW = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-681.3,0,1.2478,1.2478);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.envelope_SHADOW, new cjs.Rectangle(-681.3,0,681.3,485.4), null);


(lib.color_bg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F5F5F5").s().p("Eg7EAn3MAAAhPtMB2JAAAMAAABPtg");
	this.shape.setTransform(-378.1,255.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.color_bg, new cjs.Rectangle(-756.2,0,756.2,510.2), null);


(lib.card_mc = function(mode,startPosition,loop,reversed) {
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
	this.card_mc_txt = new cjs.Text("", "bold 94px 'Futura Std Condensed'");
	this.card_mc_txt.name = "card_mc_txt";
	this.card_mc_txt.textAlign = "center";
	this.card_mc_txt.lineHeight = 96;
	this.card_mc_txt.parent = this;
	this.card_mc_txt.setTransform(-325.2,150.4);

	this.timeline.addTween(cjs.Tween.get(this.card_mc_txt).wait(1));

	// Layer_2
	this.instance = new lib.img_01();
	this.instance.setTransform(-646,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Bitmap4();
	this.instance_1.setTransform(-664.15,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card_mc, new cjs.Rectangle(-664.1,-18,693,444), null);


(lib.envelope_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_56 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(56).call(this.frame_56).wait(1));

	// card
	this.card_mc = new lib.card_mc();
	this.card_mc.name = "card_mc";
	this.card_mc.setTransform(491.1,-152.85,1,1,0,0,0,-323.1,203.1);
	this.card_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.card_mc).wait(36).to({_off:false},0).to({regY:203,scaleX:1.9039,scaleY:1.9039,rotation:-6.2287,x:518,y:308.65},8,cjs.Ease.circInOut).wait(13));

	// Layer_4
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(147.65,227);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({_off:true},33).wait(13));

	// card
	this.card_mc_1 = new lib.card_mc();
	this.card_mc_1.name = "card_mc_1";
	this.card_mc_1.setTransform(491.1,-152.85,1,1,0,0,0,-323.1,203.1);
	this.card_mc_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.card_mc_1).wait(36).to({_off:false},0).to({regY:203,scaleX:1.9039,scaleY:1.9039,rotation:-6.2287,x:518,y:308.65},8,cjs.Ease.circInOut).wait(13));

	// card_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_25 = new cjs.Graphics().p("EgI3BZMQiTgmjNhbQlSiWzOt6Qpnm+okmfMg9bAAUMAALiTfMDsvAAAMAABCTfMhGBgAeQomGipqG9QzTN6lSCKQjhBbh/AmQieAwiBAFIgiABQh6AAiEgig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_graphics_25,x:518.175,y:-133.716}).wait(32));

	// card
	this.card_mc_2 = new lib.card_mc();
	this.card_mc_2.name = "card_mc_2";
	this.card_mc_2.setTransform(491.1,567.15,1,1,0,0,0,-323.1,203.1);
	this.card_mc_2._off = true;

	var maskedShapeInstanceList = [this.card_mc_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.card_mc_2).wait(25).to({_off:false},0).to({y:-152.85},11,cjs.Ease.quadIn).to({_off:true},1).wait(20));

	// Envelope_top (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_6 = new cjs.Graphics().p("AhyNsQg1iEgvkfIgkkGIAAprIH2pYIAAIwIhRJBQhYJdglCKQgsClgaAEIgBAAQgcAAg9iVg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AhhRCQgbgZhOhZQhyiEi7mDIillqIAAprIU5pYIAAIwQhuFFh+FgQj9LBhQCKQg6BjgSAZQgeArgZACIgDAAQgZAAgmgjg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AjNS1QhdggiUhbQjuiNr8qUQl5lDlUk0IAApsMBDqgEMIAAJLQlhF2mOGQQscMijeCJQiWBfhPAhQhlAthSAEIgRAAQhQAAhcgig");
	var mask_1_graphics_9 = new cjs.Graphics().p("AjyTdQh0gjithbQkZiRvFryQnfl2mulfIAApsMBT9gCZIAAJVQm2GGntGhQvZNEkQCJQi3BehjAjQh+AuhmAEIgZABQhiAAhsgig");
	var mask_1_graphics_10 = new cjs.Graphics().p("AkKT2QiCgki9hbQkziUxDsuQogmVnll7IAApsMBeJgBQIAAJbQnrGRooGsQxPNYkwCKQjKBchxAkQiNAwhzAEIgcABQhtAAh5gig");
	var mask_1_graphics_11 = new cjs.Graphics().p("AkZUGQiLgljHhcQlEiVyTtTQpJmpoJmNIAApsMBkpgAiIAAJfQoNGXpOGzQyaNmlECJQjXBch5AmQiXAvh6AFIgfABQh1AAiAgig");
	var mask_1_graphics_12 = new cjs.Graphics().p("AkhUPQiRgljLhcQlPiWzAtpQpgm0odmWIAApsMBoTgAJIAAJiQofGbpkG2QzFNulPCJQjeBch9AmQidAwh/AEIgiABQh4AAiDgig");
	var mask_1_graphics_13 = new cjs.Graphics().p("AkkUSQiTgmjNhbQlSiWzOtwQpnm4okmaIAApsMBpfAAAIAAJiQomGdpqG3QzTNwlSCKQjhBbh/AmQifAwiAAFIgiABQh6AAiEgig");
	var mask_1_graphics_14 = new cjs.Graphics().p("AkkUSQiTgmjNhbQlSiWzOvKQpnnloknHIAAm4MBpfAAAIAAGuQomHKpqHkQzTPKlSCKQjhBbh/AmQifAwiAAFIgiABQh6AAiEgig");
	var mask_1_graphics_15 = new cjs.Graphics().p("AkiRrQiRgkjRhYQlSiOzOs/QpnmfokmDIAAmMMBpfAAAIAAGKQoeGApmGcQzLM5lmCMQjgBYiAAlQieAtiAAEIgdAAQh7AAiHgig");
	var mask_1_graphics_16 = new cjs.Graphics().p("AkhPEQiOgijVhVQlSiHzOq0QpnlZokk/IAAlgMBpfAAAIAAFmQoWE3piFUQzDKol6COQjeBViDAjQicAriBADIgUAAQh9AAiNgjg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AkgMeQiMgijYhRQlSh/zOopQpokUojj7IAAk0MBpfAAAIAAFCQoODvpeELQy7IWmOCRQjdBSiEAiQicAoiAABIgRABQh9AAiQgjg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AkfJ3QiJggjchNQlSh4zOmdIyLmGIAAkIMBpfAAAIAAEeQoGClpaDDQyzGFmiCUQjcBOiGAgQiZAmiBAAIgIAAQh/AAiXgjg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AgBH0QiBAAibgkQiHgejghKQlShxzOkSQpoiJojhzIAAjcMBpfAAAIAAD6Qn+BcpWB7QyrD0m2CWQjbBKiHAfQiXAjiAAAIgDAAg");
	var mask_1_graphics_20 = new cjs.Graphics().p("Eg0vAFzIAAg8QIjhzJoiFQTOkIFShXQFihbE0ALQDFAGGkBKQHIBPSkELQJSCGH3B3IAAA8g");
	var mask_1_graphics_21 = new cjs.Graphics().p("Eg0vAGHIAAg8QIjh7JoiOQTOkaFShaQFhheE1ALQDIAGGhBNQHIBUSkEcQJSCPH3B+IAAA8g");
	var mask_1_graphics_22 = new cjs.Graphics().p("Eg0vAIYIAAg8ISJmCIYioIQFfhyE2AKQDdAHGNBhQHGB0SlGWQJSDLH4C1IAAA8g");
	var mask_1_graphics_23 = new cjs.Graphics().p("Eg0vANTIAAg8QIgk0JmlVQTJqpFciiQFYieE9AJQEIAIFiCNQHEC8SlKeQJTFQH5EqIAAA8g");
	var mask_1_graphics_24 = new cjs.Graphics().p("Eg0vAPkIAAg8QIflvJkmTQTKsnFei4QFViyE/AIQEdAIFOCiQHDDcSmMYQJTGMH5FhIAAA8g");
	var mask_1_graphics_25 = new cjs.Graphics().p("Eg0vAP5IAAg8QIfl3JkmdQTJs4Ffi7QFUi2FAAJQEgAHFLCmQHDDgSmMqQJTGVH5FoIAAA8g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_1_graphics_6,x:487.75,y:264.5801}).wait(1).to({graphics:mask_1_graphics_7,x:480.7,y:274.5828}).wait(1).to({graphics:mask_1_graphics_8,x:486.2,y:286.019}).wait(1).to({graphics:mask_1_graphics_9,x:488.125,y:290.0037}).wait(1).to({graphics:mask_1_graphics_10,x:489.325,y:292.5037}).wait(1).to({graphics:mask_1_graphics_11,x:490.075,y:294.1037}).wait(1).to({graphics:mask_1_graphics_12,x:490.5,y:294.984}).wait(1).to({graphics:mask_1_graphics_13,x:490.65,y:295.284}).wait(1).to({graphics:mask_1_graphics_14,x:490.65,y:295.284}).wait(1).to({graphics:mask_1_graphics_15,x:490.65,y:278.6485}).wait(1).to({graphics:mask_1_graphics_16,x:490.65,y:262.0111}).wait(1).to({graphics:mask_1_graphics_17,x:490.65,y:245.3579}).wait(1).to({graphics:mask_1_graphics_18,x:490.65,y:228.7264}).wait(1).to({graphics:mask_1_graphics_19,x:490.65,y:212.1004}).wait(1).to({graphics:mask_1_graphics_20,x:490.65,y:133.0454}).wait(1).to({graphics:mask_1_graphics_21,x:490.65,y:130.972}).wait(1).to({graphics:mask_1_graphics_22,x:490.65,y:116.5097}).wait(1).to({graphics:mask_1_graphics_23,x:490.65,y:84.9757}).wait(1).to({graphics:mask_1_graphics_24,x:490.65,y:70.5057}).wait(1).to({graphics:mask_1_graphics_25,x:490.65,y:68.431}).wait(32));

	// color
	this.instance_1 = new lib.color_bg();
	this.instance_1.setTransform(504.15,212.25,1,1.7402,0,0,0,-378.1,255);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(51));

	// Envelope_top_shdw
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("Ag5PeIguhyQg1iEgmkfIgakGIAAprIG6pYIAAIwIhRJBQhYJdglCKIgfB8QgMArgHACIgBAAQgIAAgOgjg");
	this.shape.setTransform(490.75,272.5801);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.098)").s().p("AhNRMQgbgZhOhZQhyiEinmNQg0h8g0iJIgphvIAAprITBpYIAAIIQhaFUhrFvQjULfhQCKQg6BjgSAZQgfArgYACIgDAAQgZAAgmgjg");
	this.shape_1.setTransform(478.7,283.5828);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.098)").s().p("Ag1S6IgMgBQhUgOhcgqQhggriChRQifh0l9lRQiviljZjQIgRgQIiYiVQj5kXjikOIAAm7MAo8gEMIMaDoQFSBlFPBqIgbGxIgsAuQkwFKlIE3QmfGvjzC5QiQB7hUAzQgnAcgfAPQgaAMgXAHQhGAZg/gCQgiAHgfgBQgnAFgmAAQg7AAg3gNg");
	this.shape_2.setTransform(482.475,293.5141);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.098)").s().p("AggT1IgPgBQhmgGhygoQh1goijhWQi/hunlmCQjZi0kTjpIgWgSIi/imQlRkzkwknIAAoHMAwkgCZIQvCFQHdA5HbA8IgPH9Ig5A0Ql/FkmnFjQoKHOk1DaQiuCDhqA8QgwAdglAQQgdANgcALQhWAfhFAMQgsALgjAGQheAVhUAAQgcAAgbgDg");
	this.shape_3.setTransform(486,298.7703);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.098)").s().p("AgTUYIgQAAQhzgDh/gmQiDgni3hYQjShrommhQj0i8k3j5IgagUIjYiuQmGlHlik2IAAo3MA1WgBQITcBFQI0AeIzAgIgJItIhAA3QmwF0niF/QpNHhlfDvQjBCIh5BCQg0AegoARIhAAZQheAlhLATQgwAPgnAJQiDAjhvAAIgRAAg");
	this.shape_4.setTransform(488.2,302.261);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.098)").s().p("AgcUtQh6ABiHglQiNgnjEhaQjdhopQm0QkGjDlNkCIgcgVIjoi1QmplSmBlAIAApWMA4ZgAiIVLAeITVAaIgDJMIhFA4QnRF/oHGQQp4Hul5D8QjNCMiCBFQg4AegqASIhDAbQhlAnhOAYQgzASgpALQiYAsh8ABIgIABIgJgBg");
	this.shape_5.setTransform(489.6,304.5625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.098)").s().p("AkjUXQiRgmjLhbQjkhnpom/QkPjGlakIIgdgWIjxi4Qm8lYmTlGIAApnMA6GgAIIWKAHIUTAHIgBJcIhHA6QnjGEodGbQqPH0mIEEQjUCNiHBIQg5AegsASIhFAcQhoAphQAbQg1ASgrANQicAvh/AEIgSABIgOAAQh5AAiFgjg");
	this.shape_6.setTransform(490.4,305.8551);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.098)").s().p("AkkUcQiTgmjNhbQlSiWySt6QpJm9oGmfIAApsMBlvAAAIAAJiQoIGipMG8QyXN6lSCKQjhBbh/AmQifAwiAAFIgiABQh6AAiEgig");
	this.shape_7.setTransform(490.65,306.284);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.098)").s().p("AkkUcQiTgmjNhbQlSiWzOt6Qpnm9okmfIAApsMBpfAAAIAAJiQomGipqG8QzTN6lSCKQjhBbh/AmQifAwiAAFIgiABQh6AAiEgig");
	this.shape_8.setTransform(490.65,306.284);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},6).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(14).to({_off:false},0).wait(43));

	// body_animation_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EgodAcOMAAAg4bMBQ7AAAMAAAA4bg");
	var mask_2_graphics_1 = new cjs.Graphics().p("EgodAcOMAAAg4bMBQ7AAAMAAAA4bg");
	var mask_2_graphics_2 = new cjs.Graphics().p("EglpgdKMBLTABFMAAAA4aMhLTAA2g");
	var mask_2_graphics_3 = new cjs.Graphics().p("A9O//MA6cAETMAAAA4XMg6cADVg");
	var mask_2_graphics_4 = new cjs.Graphics().p("EgPKgkuIeVJsMAAAA4RI+VHgg");
	var mask_2_graphics_5 = new cjs.Graphics().p("EgGGgkuIMNJsMAAAA4RIsNHgg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AjmdZMAAAg4lIHNpsMAAABJxg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AqedZMAAAg4lIU9psMAAABJxg");
	var mask_2_graphics_8 = new cjs.Graphics().p("EghyAhdMAAAhB6MBDlgEVMAAABJlg");
	var mask_2_graphics_9 = new cjs.Graphics().p("Egp7Ai3MAAAhFJMBT3gCeMAAABJhg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EgvAAjwMAAAhHMMBeBgBTMAAABJfg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EgyQAkUMAAAhIfMBkhgAjMAAABJdg");
	var mask_2_graphics_12 = new cjs.Graphics().p("Eg0EAkoMAAAhJOMBoJgAIMAAABJdg");
	var mask_2_graphics_13 = new cjs.Graphics().p("Eg0qAkvMAAAhJdMBpVAAAMAAABJdg");
	var mask_2_graphics_14 = new cjs.Graphics().p("Eg0qAkvMAAAhJdMBpVAAAMAAABJdg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:491.175,y:407.175}).wait(1).to({graphics:mask_2_graphics_1,x:491.175,y:407.175}).wait(1).to({graphics:mask_2_graphics_2,x:490.5,y:406.075}).wait(1).to({graphics:mask_2_graphics_3,x:488.5,y:402.675}).wait(1).to({graphics:mask_2_graphics_4,x:485.15,y:397.075}).wait(1).to({graphics:mask_2_graphics_5,x:491.15,y:397.075}).wait(1).to({graphics:mask_2_graphics_6,x:491.15,y:398.075}).wait(1).to({graphics:mask_2_graphics_7,x:481.15,y:398.075}).wait(1).to({graphics:mask_2_graphics_8,x:486.675,y:397.525}).wait(1).to({graphics:mask_2_graphics_9,x:488.6,y:397.325}).wait(1).to({graphics:mask_2_graphics_10,x:489.825,y:397.2}).wait(1).to({graphics:mask_2_graphics_11,x:490.575,y:397.125}).wait(1).to({graphics:mask_2_graphics_12,x:491.025,y:397.1}).wait(1).to({graphics:mask_2_graphics_13,x:491.15,y:397.075}).wait(1).to({graphics:mask_2_graphics_14,x:491.15,y:397.075}).wait(43));

	// color
	this.colorBG = new lib.color_bg();
	this.colorBG.name = "colorBG";
	this.colorBG.setTransform(504.15,210.75,1,1.7467,0,0,0,-378.1,255.1);

	var maskedShapeInstanceList = [this.colorBG];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.colorBG).wait(57));

	// Layer_6
	this.instance_2 = new lib.envelope_SHADOW();
	this.instance_2.setTransform(498,419.7,0.77,0.76,0,0,0,-340.5,242.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-340.4,scaleX:0.257,x:485.95,y:411.7},3).wait(1).to({regX:-340.2,scaleX:0.0744,x:493.95},0).wait(1).to({regX:-339.8,scaleX:0.0447,x:489.95},0).wait(1).to({regX:-338.9,scaleX:0.1798,x:482.05},0).to({regX:-338.6,regY:242.9,scaleX:1.0083,scaleY:0.9585,x:498.95,y:423.85},6,cjs.Ease.circOut).wait(44));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.1,-373.9,1403.3,1175.1);


// stage content:
(lib.CAT_Envelope_Proto_v01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,59];
	// timeline functions:
	this.frame_0 = function() {
		/* 
		
		responsive scale code as expressed by @davegamez 
		
		*/
		
		
		var page_body = document.getElementsByTagName("body")[0];
		page_body.style.backgroundColor = "#999999";
		page_body.style.overflow = "hidden";
		page_body.style.position = "fixed";
		
		var page_canvas = document.getElementsByTagName("canvas")[0];
		stageWidth = page_canvas.width;
		stageHeight = page_canvas.height;
		
		var viewport = document.querySelector('meta[name=viewport]');
		var viewportContent = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0';
		
		if (viewport === null) {
		 var head = document.getElementsByTagName('head')[0];
		 viewport = document.createElement('meta');
		 viewport.setAttribute('name', 'viewport');
		 head.appendChild(viewport);
		}
		
		viewport.setAttribute('content', viewportContent);
		
		function onResize() {
		 var widthToHeight = stageWidth / stageHeight;
		 var newWidth = window.innerWidth;
		 var newHeight = window.innerHeight;
		 var newWidthToHeight = newWidth / newHeight;
		 //
		 if (newWidthToHeight > widthToHeight) {
		 newWidth = newHeight * widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 } else {
		 newHeight = newWidth / widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 }
		 scale = newWidthToHeight / widthToHeight;
		 stage.width = newWidth;
		 stage.height = newHeight;
		 page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
		 page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
		}
		
		window.onresize = function () {
		 onResize();
		}
		
		onResize();
		/*this.stop();*/
		
		var root = this; //Declared variable for access to global scope.
		this.envelope_mc.card_mc.card_mc_txt.text = winNum;
		/*this.envelope_mc.colorBG._fill = "#3399CC";*/
		var direction = "left"; // right, top, bottom;
		
		var newMove = stageHeight/2 - ;
		this.envelope_mc.play();
		
		console.log(this.envelope_mc.card_mc.card_mc_txt);
		
		tl_main = new gsap.timeline();
		/*tl_main.to(this.envelope_mc, 0.5, {y:newMove,ease:"back.out(1)"})*/
		
		
		/*root.envelope_mc.play();*/
		 
		
		
		this.envelope_mc.addEventListener("click", playAnim.bind(this));
		
		function playAnim(e) {
			e.stopPropagation();
			root.envelope_mc.play();
			console.log("envelope Pressed");
		}
		
		/*
		this.on("click", function (e) {
			window.open(clickTag, "_blank");
			console.log("ClickTag pressed");
			
		});
		
		
		
		
		
		function exitPanel(e) {
			e.stopPropagation();
			root.panel.x = 300;
			root.play();
			console.log("Panel Closed");
		}*/
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(91));

	// envelope_mc
	this.envelope_mc = new lib.envelope_mc();
	this.envelope_mc.name = "envelope_mc";
	this.envelope_mc.setTransform(512.05,384.35,0.5,0.5,0,0,0,490.6,408.3);

	this.timeline.addTween(cjs.Tween.get(this.envelope_mc).wait(150));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(841.8,446.8,-133.89999999999998,61.5);
// library properties:
lib.properties = {
	id: '23A1D34BD4544662A0DA4F8E227B30BA',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap1.png?1616014741518", id:"Bitmap1"},
		{src:"images/Bitmap2.png?1616014741518", id:"Bitmap2"},
		{src:"images/Bitmap4.png?1616014741518", id:"Bitmap4"},
		{src:"images/img_01.png?1616014741518", id:"img_01"}
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
an.compositions['23A1D34BD4544662A0DA4F8E227B30BA'] = {
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
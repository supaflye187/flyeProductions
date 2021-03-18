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
p.nominalBounds = new cjs.Rectangle(0,0,546,389);


(lib.Bitmap2_1 = function() {
	this.initialize(img.Bitmap2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,716,463);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,693,444);


(lib.envelope_back = function() {
	this.initialize(img.envelope_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,400);


(lib.envelope_Bottom_Flap = function() {
	this.initialize(img.envelope_Bottom_Flap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,400);


(lib.envelope_front = function() {
	this.initialize(img.envelope_front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,400);


(lib.envelope_inside = function() {
	this.initialize(img.envelope_inside);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,400);


(lib.envelope_Top_Flap = function() {
	this.initialize(img.envelope_Top_Flap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,400);


(lib.img_01 = function() {
	this.initialize(img.img_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,400);


(lib.sticker = function() {
	this.initialize(img.sticker);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);// helper functions:

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


(lib.seal_Top_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sticker();
	this.instance.setTransform(-149.85,-2.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.seal_Top_mc, new cjs.Rectangle(-149.8,-2.1,152.60000000000002,152.1), null);


(lib.seal_Bottom_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sticker();
	this.instance.setTransform(-149.85,-2.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.seal_Bottom_mc, new cjs.Rectangle(-149.8,-2.1,150,150), null);


(lib.Inside_Image = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.envelope_inside();
	this.instance.setTransform(-716.7,65.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Inside_Image, new cjs.Rectangle(-716.7,65.8,650,400), null);


(lib.Front_Image = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.envelope_front();
	this.instance.setTransform(-716.7,65.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Front_Image, new cjs.Rectangle(-716.7,65.8,650,400), null);


(lib.envelope_fold_top = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fold_envelope_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmASTQhwgWhfgsIhJgpQhIgkzoxQQp0oopmohUAAJgAJAyegAEQZQgCZOAAMgs6Ai+QkdCLkMAAQhhAAhfgSg");
	mask.setTransform(-323.475,118.8844);

	// fold_envelope_image
	this.instance = new lib.envelope_Top_Flap();
	this.instance.setTransform(-646.95,2.05);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fold_envelope_shdw
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.098)","rgba(0,0,0,0.298)"],[0,1],0,2.8,0,0,2.8,358.4).s().p("AlmSTQjCgih0hIQk2jDybwQQpNoJoPniUAAIgAJAzGgAEQZkgCZhAAMgsrAi+QkdCLkbAAQhnAAhmgSg");
	this.shape.setTransform(-323.1,119.6344);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.envelope_fold_top, new cjs.Rectangle(-650.5,0.8,654.9,237.7), null);


(lib.envelope_fold_bottom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// adhesive_layer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AsTOxMglughGID+ABQD/ABAGADMAg9Ad/QBsBBChAjQFCBGEMiWMAkugedQCRAACQADQEgAFgHAMMgrwAiDIhtA3QiKA8iPAZQhiAShdAAQlUAAkMjqg");
	this.shape.setTransform(-325.1678,119.9179);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fold_envelope_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmASTQhwgWhfgsIhJgpQhIgkzoxQQp0oopmohUAAJgAJAyegAEQZQgCZOAAMgs6Ai+QkdCLkMAAQhhAAhfgSg");
	mask.setTransform(-323.475,118.8844);

	// fold_envelope_image
	this.instance = new lib.envelope_Bottom_Flap();
	this.instance.setTransform(-646.95,2.05);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.envelope_fold_bottom, new cjs.Rectangle(-646.9,2.1,646.9,235.70000000000002), null);


(lib.Back_Image = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// back_envelope_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgyxAfJQAAvqACvnQAC/QAGAGQKEIFKMIKQUaQTAuAbQAoAXBbAYQBsAcB2ALQFFAfDjh1UAHagEUAmagcyMgAKA+3g");
	mask.setTransform(-391.925,266.85);

	// Layer_1
	this.instance = new lib.envelope_back();
	this.instance.setTransform(-716.7,65.75);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Back_Image, new cjs.Rectangle(-716.7,65.8,649.8000000000001,400), null);


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
	this.frame_67 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(67).call(this.frame_67).wait(1));

	// card
	this.card_mc = new lib.card_mc();
	this.card_mc.name = "card_mc";
	this.card_mc.setTransform(491.1,-152.85,1,1,0,0,0,-323.1,203.1);
	this.card_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.card_mc).wait(48).to({_off:false},0).to({regY:203,scaleX:1.9039,scaleY:1.9039,rotation:-6.2287,x:518,y:396.45},8,cjs.Ease.circInOut).wait(12));

	// card_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_24 = new cjs.Graphics().p("EgIqAz0Qh2gLhsgdQhbgYgogXQguga0twZQqWoMqNoHQgGgG5EEaI5CEbMAAOhNxMDUlgAOMgAOBR0Mg8bgMkUgmZAcygHZAEUQi0BdjzAAQg/AAhDgGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_24,x:523,y:95.3153}).wait(44));

	// inside_shdw
	this.instance = new lib.Bitmap2_1();
	this.instance.setTransform(133.85,169.3);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(44));

	// card
	this.card_mc_1 = new lib.card_mc();
	this.card_mc_1.name = "card_mc_1";
	this.card_mc_1.setTransform(491.05,567.2,0.9084,0.9084,0,0,0,-323.1,203.1);
	this.card_mc_1._off = true;

	var maskedShapeInstanceList = [this.card_mc_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.card_mc_1).wait(37).to({_off:false},0).to({scaleX:1,scaleY:1,x:491.1,y:-152.85},11,cjs.Ease.quadIn).to({_off:true},1).wait(19));

	// Seal_Top
	this.instance_1 = new lib.seal_Top_mc();
	this.instance_1.setTransform(482.95,442.55,0.4905,1.0781,0,0,0,-73.1,73.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({regX:-73.6,regY:73.6,scaleX:1,scaleY:1,x:477.55,y:442.45},5,cjs.Ease.circOut).wait(12).to({scaleY:0.1372,y:218.6},5,cjs.Ease.quadInOut).to({_off:true},1).wait(39));

	// envelope_inner_Shdw
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.098)","rgba(0,0,0,0)"],[0,1],-0.7,56.3,-0.7,-56.3).s().p("EgyyAIzIAAxlMBllAAAIAARlg");
	this.shape.setTransform(490.85,549.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.11)","rgba(0,0,0,0)"],[0,1],-0.6,55.4,-0.6,-57.2).s().p("Egt+AI9IAAx5MBb8AAAIAAR5g");
	this.shape_1.setTransform(490.75,550.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0.145)","rgba(0,0,0,0)"],[0,1],-0.4,52.5,-0.4,-60.1).s().p("A/gJaIAAyzMA/BAAAIAASzg");
	this.shape_2.setTransform(490.525,553.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0.2)","rgba(0,0,0,0)"],[0,1],0,47.6,0,-65).s().p("AnZKKIAA0TIOzAAIAAUTg");
	this.shape_3.setTransform(490.125,558.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0.2)","rgba(0,0,0,0)"],[0,1],0,47.6,0,-65).s().p("Ai3KKIAA0TIFvAAIAAUTg");
	this.shape_4.setTransform(490.125,558.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0.145)","rgba(0,0,0,0)"],[0,1],-0.4,52.4,-0.4,-60.2).s().p("A9WJaIAAyzMA6tAAAIAASzg");
	this.shape_5.setTransform(490.525,553.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0.125)","rgba(0,0,0,0)"],[0,1],-0.5,54.1,-0.5,-58.5).s().p("EgmlAJJIAAyRMBNLAAAIAASRg");
	this.shape_6.setTransform(490.65,551.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0.11)","rgba(0,0,0,0)"],[0,1],-0.6,55.2,-0.6,-57.4).s().p("EgsXAI/IAAx9MBYvAAAIAAR9g");
	this.shape_7.setTransform(490.75,550.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0.102)","rgba(0,0,0,0)"],[0,1],-0.7,55.8,-0.7,-56.8).s().p("EgwDAI4IAAxvMBgHAAAIAARvg");
	this.shape_8.setTransform(490.8,549.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0.098)","rgba(0,0,0,0)"],[0,1],-0.7,56.2,-0.7,-56.4).s().p("EgyHAI0IAAxnMBkPAAAIAARng");
	this.shape_9.setTransform(490.85,549.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape}]},1).wait(57));

	// back_image_shdw
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.2)"],[0,1],15.9,0,-15.8,0).s().p("EgCeAiFMAAAhEJIE9AAMAAABEJg");
	this.shape_10.setTransform(489.15,406.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","rgba(141,141,141,0.22)"],[0,1],187.6,0,-187.6,0).s().p("EgdTAg2MAAAhBrMA6nAAAMAAABBrg");
	this.shape_11.setTransform(490.3,406.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0)","rgba(209,209,209,0.086)"],[0,1],271.1,0,-271,0).s().p("EgqWAgPMAAAhAdMBUtAAAMAAABAdg");
	this.shape_12.setTransform(490.85,406);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","rgba(236,236,236,0.035)"],[0,1],304,0,-303.9,0).s().p("EgvfAgAMAAAg//MBe/AAAMAAAA//g");
	this.shape_13.setTransform(491.075,405.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0)","rgba(249,249,249,0.012)"],[0,1],318.8,0,-318.7,0).s().p("EgxzAf5MAAAg/xMBjnAAAMAAAA/xg");
	this.shape_14.setTransform(491.175,405.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","rgba(254,254,254,0.004)"],[0,1],325,0,-324.9,0).s().p("EgyxAf2MAAAg/rMBliAAAMAAAA/rg");
	this.shape_15.setTransform(491.2,405.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0)","rgba(255,255,255,0)"],[0,1],326.6,0,-326.5,0).s().p("EgzAAf1MAAAg/pMBmBAAAMAAAA/pg");
	this.shape_16.setTransform(491.225,405.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},5).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},12).wait(45));

	// fold_envelope_bottom
	this.instance_2 = new lib.envelope_fold_bottom();
	this.instance_2.setTransform(491.1,207.95,1,0.0333,0,180,0,-323.4,0);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.ColorFilter(0.74, 0.74, 0.74, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-649,0,651,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({regX:-323.5,regY:0.4,scaleY:1,x:491},8,cjs.Ease.quadOut).wait(31));

	// Seal_Bottom
	this.instance_3 = new lib.seal_Bottom_mc();
	this.instance_3.setTransform(477.65,198.9,1,0.1241,0,180,0,-73.5,73.4);
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.ColorFilter(0.17, 0.17, 0.17, 1, 211.65, 211.65, 211.65, 0)];
	this.instance_3.cache(-152,-4,154,154);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({regY:73.3,scaleY:1,x:475.5,y:-25.7},8,cjs.Ease.quadOut).wait(31));

	// fold_envelope_top
	this.instance_4 = new lib.envelope_fold_top();
	this.instance_4.setTransform(489.9,189.1,0.0521,1.0792,0,0,0,-323.4,0.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({regX:-323.5,regY:0.5,scaleX:0.5807,x:490.95,y:198},1).to({regX:-323.4,regY:0.6,scaleX:0.7675,scaleY:1.0316,x:491.1,y:200.4},1).to({regX:-323.3,scaleX:0.8782,scaleY:1.0108,x:490.55,y:203.65},1).wait(1).to({regX:-323.1,regY:119.6,scaleX:0.9615,scaleY:1.0034,x:491.05,y:324.55},0).wait(1).to({scaleX:0.9927,scaleY:1.0007,x:491.15,y:324.85},0).wait(1).to({regX:-323.5,regY:0.4,scaleX:1,scaleY:1,x:491,y:205.85},0).wait(12).to({regX:-323.4,regY:0,scaleY:0.0449,x:491.1},5,cjs.Ease.quadInOut).to({_off:true},1).wait(39));

	// Back_Image (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_5 = new cjs.Graphics().p("EAiJAwmMAAAgh5MAABghxIBGRnIBJSIQADAYAEAaQAGAfAHAMQARAhANh+QAZksCF/NMAAABEKg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EgFqAv2MAABggdUAABggaAAEAAGILqQ2QLyQ7AaAbQAXAYA1AZQA+AeBEALQC8AgCDh6QESkeWK94MgAGBBPg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EgTiAvlIAB/8QAC/6AEAGQHpIQHvIUQPeQrAkAbQAeAYBFAYQBSAdBaALQD3AgCsh4QFokadK9aMgAIBAOg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EgcPAvaIAC/oQAC/lAFAGQIyILI6IPQRzQgApAbQAjAXBPAYQBeAdBnALQEdAfDGh2UAGegEYAhigdHMgAIA/lg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EghxAvTIAC/bQAC/YAGAGQJhIHJpIMQTSQZAsAbQAlAXBWAYQBnAdBvALQE0AfDXh2UAHAgEWAkVgc7MgAJA/Mg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Egk4AvQIAC/UQAC/RAGAGQJ7IFKEIKQUHQVAuAbQAoAXBZAYQBrAdB0ALQFCAeDgh1UAHTgEVAl6gc0MgAKA+9g");
	var mask_1_graphics_11 = new cjs.Graphics().p("Egl2AvOQAAvpACvoQAC/PAGAGQKEIFKMIJQUYQUAvAbQAoAXBbAYQBsAcB2ALQFFAfDkh1UAHagEVAmagcxMgAKA+3g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_1_graphics_5,x:253.7372,y:313.1923}).wait(1).to({graphics:mask_1_graphics_6,x:338.6913,y:308.2473}).wait(1).to({graphics:mask_1_graphics_7,x:368.2893,y:306.5244}).wait(1).to({graphics:mask_1_graphics_8,x:386.8347,y:305.4449}).wait(1).to({graphics:mask_1_graphics_9,x:398.6354,y:304.758}).wait(1).to({graphics:mask_1_graphics_10,x:405.2754,y:304.3716}).wait(1).to({graphics:mask_1_graphics_11,x:407.65,y:304.2464}).wait(57));

	// Front_Image_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("Egl1gPIMBljAAAMAAAA+fMhljAAAg");
	var mask_2_graphics_1 = new cjs.Graphics().p("Egl1gPIMBljAAAMAAAA+fMhljAAAg");
	var mask_2_graphics_2 = new cjs.Graphics().p("A+nvkMBb6AAAMAAAA/FMhb6AAAg");
	var mask_2_graphics_3 = new cjs.Graphics().p("Ao7w2MA+9AAAMAAABA0Mg+9AAAg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AbLy/IOxAAMAAABDuIuxAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:407.77,y:303.0684}).wait(1).to({graphics:mask_2_graphics_1,x:407.77,y:303.0684}).wait(1).to({graphics:mask_2_graphics_2,x:392.2835,y:304.0514}).wait(1).to({graphics:mask_2_graphics_3,x:345.8238,y:307.0004}).wait(1).to({graphics:mask_2_graphics_4,x:268.3547,y:311.9153}).wait(1).to({graphics:null,x:0,y:0}).wait(63));

	// front_image_shdw
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","rgba(255,255,255,0)"],[0,1],326.6,0,-326.5,0).s().p("EgzAAf1MAAAg/pMBmBAAAMAAAA/pg");
	this.shape_17.setTransform(491.225,405.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0.067)","rgba(227,227,227,0.024)"],[0,0.965],295.7,0,-295.7,0).s().p("EguMAgZMAAAhAxMBcZAAAMAAABAxg");
	this.shape_18.setTransform(491.225,406);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0.267)","rgba(142,142,142,0.09)"],[0,0.867],203.3,0,-203.2,0).s().p("EgfwAiDMAAAhEEMA/hAAAMAAABEEg");
	this.shape_19.setTransform(491.25,406);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(0,0,0,0.6)","rgba(0,0,0,0.2)"],[0,0.698],49.1,0,-49.2,0).s().p("EgHrAkzMAAAhJlIPWAAMAAABJlg");
	this.shape_20.setTransform(491.25,406.025);

	var maskedShapeInstanceList = [this.shape_17,this.shape_18,this.shape_19,this.shape_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},1).wait(63));

	// Front_Image
	this.colorBG = new lib.Front_Image();
	this.colorBG.name = "colorBG";
	this.colorBG.setTransform(504.15,395.5,1,1,0,0,0,-378.1,255.1);

	this.timeline.addTween(cjs.Tween.get(this.colorBG).wait(1).to({regX:-377.6,regY:255.2,scaleX:0.1453,scaleY:1.0842,x:491.55,y:395.65},3,cjs.Ease.quadIn).to({_off:true},1).wait(63));

	// Back_Image
	this.colorBG_1 = new lib.Back_Image();
	this.colorBG_1.name = "colorBG_1";
	this.colorBG_1.setTransform(490.65,395.5,0.0542,1.0839,0,0,0,-377.7,255.1);
	this.colorBG_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.colorBG_1).wait(5).to({_off:false},0).to({regX:-378.1,scaleX:1,scaleY:1,x:504.15},6,cjs.Ease.circOut).wait(57));

	// inside_image
	this.colorBG_2 = new lib.Inside_Image();
	this.colorBG_2.name = "colorBG_2";
	this.colorBG_2.setTransform(490.65,395.5,0.0542,1.0839,0,0,0,-377.7,255.1);
	this.colorBG_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.colorBG_2).wait(5).to({_off:false},0).to({regX:-378.1,scaleX:1,scaleY:1,x:504.15},6,cjs.Ease.circOut).wait(57));

	// envelope_bottom_shdw
	this.instance_5 = new lib.envelope_SHADOW();
	this.instance_5.setTransform(492.75,418.85,0.9845,0.8579,0,0,0,-340.4,243);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-340.2,scaleX:0.1375,scaleY:0.9412,x:489.65,y:413.6},3,cjs.Ease.quadIn).wait(1).to({regX:-338.6,regY:242.8,scaleX:0.0385,scaleY:0.9205,x:489.85,y:413.9},0).to({regX:-340.4,regY:243,scaleX:0.9845,scaleY:0.8579,x:492.75,y:418.85},6,cjs.Ease.circOut).wait(57));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.1,-373.9,1403.3,1262.9);


// stage content:
(lib.CAT_Envelope_Proto_v02 = function(mode,startPosition,loop,reversed) {
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
		page_body.style.backgroundColor = "#ffffff";
		
		/*page_body.style.backgroundSize = "cover";*/
		page_body.style.overflow = "hidden";
		/*page_body.style.position = "fixed";*/
		
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
		/*page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
		 page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";*/
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
		
		var newMove = stageHeight/2 - this.envelope_mc.get;
		this.envelope_mc.play();
		
		console.log(this.envelope_mc.card_mc.card_mc_txt);
		
		/*tl_main = new gsap.timeline();
		tl_main.to(this.envelope_mc, 0.5, {y:newMove,ease:"back.out(1)"})
		
		
		root.envelope_mc.play();
		 */
		
		
		this.envelope_mc.addEventListener("click", playAnim.bind(this));
		
		function playAnim(e) {
			e.stopPropagation();
			root.envelope_mc.play();
			console.log("envelope Pressed");
		}
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(91));

	// envelope_mc
	this.envelope_mc = new lib.envelope_mc();
	this.envelope_mc.name = "envelope_mc";
	this.envelope_mc.setTransform(906.6,960.8,1.387,1.387,0,0,0,490.8,408.7);

	this.timeline.addTween(cjs.Tween.get(this.envelope_mc).wait(150));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1167.9,737.9,5165.3,2914.4);
// library properties:
lib.properties = {
	id: '23A1D34BD4544662A0DA4F8E227B30BA',
	width: 1920,
	height: 1920,
	fps: 30,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap2.png?1616110283084", id:"Bitmap2"},
		{src:"images/Bitmap2_1.png?1616110283084", id:"Bitmap2_1"},
		{src:"images/Bitmap4.png?1616110283084", id:"Bitmap4"},
		{src:"images/envelope_back.png?1616110283084", id:"envelope_back"},
		{src:"images/envelope_Bottom_Flap.png?1616110283084", id:"envelope_Bottom_Flap"},
		{src:"images/envelope_front.png?1616110283084", id:"envelope_front"},
		{src:"images/envelope_inside.png?1616110283084", id:"envelope_inside"},
		{src:"images/envelope_Top_Flap.png?1616110283084", id:"envelope_Top_Flap"},
		{src:"images/img_01.png?1616110283084", id:"img_01"},
		{src:"images/sticker.png?1616110283084", id:"sticker"}
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
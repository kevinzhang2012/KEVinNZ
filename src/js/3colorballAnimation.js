(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("A6RNIUARpgVUAi8gE8");
	this.shape.setTransform(168.2,84.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.line, new cjs.Rectangle(-1.4,-1.1,339.2,170.7), null);


(lib.ball_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3333").s().p("Ag/BAIgGgHQgUgYAAghQAAglAagaQAagaAlAAQAMAAAKADQAPADANAJQAHAEAHAHQAaAaAAAlQAAAmgaAaQgaAagmAAQglAAgagag");
	this.shape.setTransform(9,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball_red, new cjs.Rectangle(0,0,18,18), null);


(lib.ball_green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CC66").s().p("AgZBWQgPgEgMgJIgLgJQgagaAAgmQAAglAagaQAagaAlAAQAfAAAYASIAJAIQAHAIAGAJQANAUAAAaQAAAmgaAaQgaAagmAAQgNAAgMgEg");
	this.shape.setTransform(9,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball_green, new cjs.Rectangle(0,0,18,18), null);


(lib.ball_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AguBNQgJgFgIgIQgagaAAgmQAAglAagaQAagaAlAAQAhAAAYAUIAHAGQAaAaAAAlQAAAmgaAaQgaAagmAAQgZAAgVgNg");
	this.shape.setTransform(9,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball_blue, new cjs.Rectangle(0,0,18,18), null);


// stage content:
(lib._3colorballAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.ball_red();
	this.instance.parent = this;
	this.instance.setTransform(38,294.8,1,1,0,0,0,9,9);

	this.instance_1 = new lib.ball_blue();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48,279.1,1,1,0,0,0,9,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(121));

	// Layer 4
	this.instance_2 = new lib.ball_green();
	this.instance_2.parent = this;
	this.instance_2.setTransform(60,263.4,1,1,0,0,0,9,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:62.2,y:260.5},0).wait(1).to({x:64.5,y:257.6},0).wait(1).to({x:66.8,y:254.7},0).wait(1).to({x:69.1,y:251.9},0).wait(1).to({x:71.4,y:249.1},0).wait(1).to({x:73.8,y:246.3},0).wait(1).to({x:76.2,y:243.5},0).wait(1).to({x:78.6,y:240.8},0).wait(1).to({x:81,y:238},0).wait(1).to({x:83.5,y:235.3},0).wait(1).to({x:86,y:232.6},0).wait(1).to({x:88.5,y:230},0).wait(1).to({x:91,y:227.3},0).wait(1).to({x:93.6,y:224.7},0).wait(1).to({x:96.1,y:222.1},0).wait(1).to({x:98.8,y:219.5},0).wait(1).to({x:101.4,y:217},0).wait(1).to({x:104,y:214.4},0).wait(1).to({x:106.7,y:211.9},0).wait(1).to({x:109.4,y:209.4},0).wait(1).to({x:112.1,y:207},0).wait(1).to({x:114.8,y:204.5},0).wait(1).to({x:117.6,y:202.1},0).wait(1).to({x:120.4,y:199.7},0).wait(1).to({x:123.2,y:197.4},0).wait(1).to({x:126,y:195},0).wait(1).to({x:128.8,y:192.7},0).wait(1).to({x:131.7,y:190.4},0).wait(1).to({x:134.6,y:188.2},0).wait(1).to({x:137.5,y:185.9},0).wait(1).to({x:140.4,y:183.7},0).wait(1).to({x:143.3,y:181.5},0).wait(1).to({x:146.3,y:179.4},0).wait(1).to({x:149.2,y:177.2},0).wait(1).to({x:152.2,y:175.1},0).wait(1).to({x:155.2,y:173},0).wait(1).to({x:158.3,y:171},0).wait(1).to({x:161.3,y:168.9},0).wait(1).to({x:164.4,y:166.9},0).wait(1).to({x:167.4,y:164.9},0).wait(1).to({x:170.5,y:163},0).wait(1).to({x:173.6,y:161},0).wait(1).to({x:176.8,y:159.1},0).wait(1).to({x:179.9,y:157.2},0).wait(1).to({x:183.1,y:155.4},0).wait(1).to({x:186.2,y:153.6},0).wait(1).to({x:189.4,y:151.7},0).wait(1).to({x:192.6,y:150},0).wait(1).to({x:195.8,y:148.2},0).wait(1).to({x:199.1,y:146.5},0).wait(1).to({x:202.3,y:144.8},0).wait(1).to({x:205.6,y:143.1},0).wait(1).to({x:208.8,y:141.4},0).wait(1).to({x:212.1,y:139.8},0).wait(1).to({x:215.4,y:138.2},0).wait(1).to({x:218.7,y:136.6},0).wait(1).to({x:222,y:135.1},0).wait(1).to({x:225.4,y:133.6},0).wait(1).to({x:228.7,y:132.1},0).wait(1).to({x:232.1,y:130.6},0).wait(1).to({x:235.4,y:129.1},0).wait(1).to({x:238.8,y:127.7},0).wait(1).to({x:242.2,y:126.3},0).wait(1).to({x:245.6,y:124.9},0).wait(1).to({x:249,y:123.5},0).wait(1).to({x:252.4,y:122.2},0).wait(1).to({x:255.8,y:120.9},0).wait(1).to({x:259.2,y:119.6},0).wait(1).to({x:262.7,y:118.3},0).wait(1).to({x:266.1,y:117.1},0).wait(1).to({x:269.6,y:115.9},0).wait(1).to({x:273,y:114.7},0).wait(1).to({x:276.5,y:113.5},0).wait(1).to({x:280,y:112.4},0).wait(1).to({x:283.4,y:111.2},0).wait(1).to({x:286.9,y:110.1},0).wait(1).to({x:290.4,y:109.1},0).wait(1).to({x:293.9,y:108},0).wait(1).to({x:297.5,y:107},0).wait(1).to({x:301,y:105.9},0).wait(1).to({x:304.5,y:104.9},0).wait(1).to({x:308,y:104},0).wait(1).to({x:311.6,y:103},0).wait(1).to({x:315.1,y:102.1},0).wait(1).to({x:318.6,y:101.2},0).wait(1).to({x:322.2,y:100.3},0).wait(1).to({x:325.8,y:99.4},0).wait(1).to({x:329.3,y:98.6},0).wait(1).to({x:332.9,y:97.7},0).wait(1).to({x:336.5,y:96.9},0).wait(1).to({x:340,y:96.1},0).wait(1).to({x:343.6,y:95.4},0).wait(1).to({x:347.2,y:94.6},0).wait(1).to({x:350.8,y:93.9},0).wait(1).to({x:354.4,y:93.2},0).wait(1).to({x:358,y:92.5},0).wait(1).to({x:361.6,y:91.8},0).wait(1).to({x:365.2,y:91.1},0).wait(1).to({x:368.8,y:90.5},0).wait(1).to({x:372.4,y:89.9},0).wait(1).to({x:376,y:89.3},0).wait(1).to({x:379.6,y:88.7},0).wait(1).to({x:383.2,y:88.1},0).wait(1).to({x:386.9,y:87.5},0).wait(1).to({x:390.5,y:87},0).wait(1).to({x:394.1,y:86.5},0).wait(1).to({x:397.7,y:86},0).wait(1).to({x:401.4,y:85.5},0).wait(1).to({x:405,y:85.1},0).wait(12));

	// Layer 1
	this.instance_3 = new lib.line();
	this.instance_3.parent = this;
	this.instance_3.setTransform(239.8,155.6,1.238,1.532,0,0,0,168.3,84.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("AA8h8QAGgMAGgNAhHCWQABgFADgD");
	this.shape.setTransform(7.3,353.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3}]}).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.9,225.7,450.1,344.5);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
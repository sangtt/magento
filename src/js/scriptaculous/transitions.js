//
// Based on Easing Equations v2.0
// (c) 2003 Robert Penner, all rights reserved. 
// OPEN-SOURCE TERMS OF USE: http://www.robertpenner.com/easing_terms_of_use.html
// Adapted for Scriptaculous by Ken Snyder (kendsnyder.com) June 2006
//
Object.extend(Effect.Transitions, {
	// adapted from ElasticIn
  Elastic: function(pos) {
    return -1*Math.pow(4,-8*pos)*Math.sin((pos*6-1)*(2*Math.PI)/2)+1;
  },
	// adapted from EaseInOut
  EaseFromTo: function(pos) {
    return -0.5*((pos-=2)*pos*pos*pos-2);
  },
	// adapted from EaseIn
  EaseFrom: function(pos) {
    return Math.pow(pos,4);
  },
	// adapted from EaseOut
  EaseTo: function(pos) {
    return Math.pow(-1*pos,4);
  },
	// adapted from ExpoEaseIn
  ExpoEaseTo: function(pos) {
    return -1*Math.pow(2,-10*pos)+1;
  },
	// adapted from BackEaseInOut
  SwingFromTo: function(pos) {
    var s=1.70158;
    if((pos/=0.5)<1) return 0.5*(pos*pos*(((s*=(1.525))+1)*pos-s));
    return 0.5*((pos-=2)*pos*(((s*=(1.525))+1)*pos+s)+2);
  },
	// adapted from BackEaseIn
  SwingFrom: function(pos) {
    var s=1.70158;
    return pos*pos*((s+1)*pos-s);
  },
	// adapted from BackEaseOut
  SwingTo: function(pos) {
    var s=1.70158;
    return(pos-=1)*pos*((s+1)*pos+s)+1;
  },
	// adapted from EaseOutBounce
  Bounce: function(pos) { 
    if(pos<(1/2.75)) {
      return (7.5625*pos*pos);
    } else if(pos<(2/2.75)) {
      return (7.5625*(pos-=(1.5/2.75))*pos+.75);
    } else if(pos<(2.5/2.75)) {
      return (7.5625*(pos-=(2.25/2.75))*pos+.9375);
    } else {
      return (7.5625*(pos-=(2.625/2.75))*pos+.984375);
    }
  },
	// newly created based on EaseOutBounce
  BouncePast: function(pos) {
    if(pos<(1/2.75)) { 
      return (7.5625*pos*pos);
    } else if(pos<(2/2.75)) {
      return 2-(7.5625*(pos-=(1.5/2.75))*pos+.75);
    } else if(pos<(2.5/2.75)) {
      return 2-(7.5625*(pos-=(2.25/2.75))*pos+.9375);
    } else {
      return 2-(7.5625*(pos-=(2.625/2.75))*pos+.984375);
    }
  }
});
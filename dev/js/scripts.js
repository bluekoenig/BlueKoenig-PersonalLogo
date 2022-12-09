import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

function movinLaf(){
  var tl = gsap.timeline();
  tl.to("#l", {duration:1, motionPath:{path:"#l-path", align:"#l-path", alignOrigin:[0.5,0.5], start:0, end:.52}}, "<90%")
  tl.to("#a", {duration:1, motionPath:{path:"#a-path", align:"#a-path", alignOrigin:[0.5,0.5], start:0, end:.45}}, "<50%")
  tl.to("#f", {duration:1, motionPath:{path:"#f-path", align:"#f-path", alignOrigin:[0.5,0.5], start:0, end:.5}}, "<50%")
  tl.to("#a2", {duration:1, motionPath:{path:"#a2-path", align:"#a2-path", alignOrigin:[0.5,0.5], start:0, end:.51}}, "<30%")
  tl.to("#y", {duration:1, motionPath:{path:"#y-path", align:"#y-path", alignOrigin:[0.5,0.5], start:0, end:.32}}, "<70%")
  tl.to("#e", {duration:1, motionPath:{path:"#e-path", align:"#e-path", alignOrigin:[0.5,0.5], start:0, end:.52}}, "<40%")
  tl.to("#t", {duration:1, motionPath:{path:"#t-path", align:"#t-path", alignOrigin:[0.5,0.5], start:0, end:.7}}, "<70%")
  tl.to("#t2", {duration:1, motionPath:{path:"#t2-path", align:"#t2-path", alignOrigin:[0.5,0.5], start:0, end:.43}}, "<10%")
  tl.to("#e2", {duration:1, motionPath:{path:"#e2-path", align:"#e2-path", alignOrigin:[0.5,0.5], start:0, end:.57}}, "<90%")
  return tl;
  

}


var mainTL = gsap.timeline();
mainTL.add(movinLaf())
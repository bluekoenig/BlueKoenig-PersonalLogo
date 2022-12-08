import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

// function lineBreaker(){
// var tl = gsap.timeline();
// tl.to("#secondRightSplash", {drawSVG: "0% 0%"})
//     .to("#downLeft", {drawSVG:"0% 0%"})
//     .to("#secondLeftSplash", {drawSVG:"0% 0%"})
//     .to("#upLeft", {drawSVG:"0% 0%"})
//     return tl; 
// }


function fishIn(){
  gsap.set("#bareAssFish", {scaleY:-1, scaleX:-1})
  var tl = gsap.timeline();
    tl.to("#bareAssFish", {duration:2, motionPath:{path:"#fishPath", align:"#fishPath", alignOrigin:[0.5,0.5], autoRotate:true, start:0, end:0.44}})
    return tl;
}

function fishLinesRight(){
  var tl = gsap.timeline();
    tl.fromTo("#downRight", {duration:0.15, drawSVG: "0% 0%"}, {drawSVG:"0% 100%"})
    .fromTo("#downRight", {duration:0.15, drawSVG: "0% 100%"}, {drawSVG:"100% 100%"}, "<50%")
    .fromTo("#firstRightSplash", {duration:0.05, drawSVG: "0% 0%"}, {drawSVG:"0% 100%"}, "<75%")
    .fromTo("#firstRightSplash", {duration:0.05, drawSVG: "0% 100%"}, {drawSVG:"100% 100%"}, "<50%")
    .fromTo("#firstLeftSplash", {duration:0.05, drawSVG: "0% 0%"}, {drawSVG:"0% 100%"}, "<0%")
    .fromTo("#firstLeftSplash", {duration:0.05, drawSVG: "0% 100%"}, {drawSVG:"100% 100%"}, "<50%")
    .fromTo("#upRight", {duration:0.15, drawSVG: "0% 0%"}, {drawSVG:"0% 100%"}, "<0%")
    .fromTo("#upRight", {duration:0.15, drawSVG: "0% 100%"}, {drawSVG:"100% 100%"},"<50%")
  return tl;
}

function fishMorph(){
  var tl = gsap.timeline();
  tl.to("#bStart", {duration:0.5, morphSVG:"#b", fill:"#00ADD4"})
  .to("#lStart", {duration:0.5, morphSVG:"#l", fill:"#00ADD4"}, "<25%")
  .to("#frontGill", {duration:0.5, morphSVG:"#lSide", fill:"#0F6889"}, "<25%")
  .to("#backGill", {duration:0.5, morphSVG:"#u2", fill:"#00ADD4"}, "<25%")
  .to("#fin", {duration:0.5, morphSVG:"#eTop", fill:"#0F6889"}, "<25%")
  .to("#eStart", {duration:0.5, morphSVG:"#e", fill:"#00ADD4"}, "<25%")
  .to("#tStart", {duration:0.5, morphSVG:"#t", fill:"#00ADD4"}, "<25%")
  .to("#uStart", {duration:0.5, morphSVG:"#u", fill:"#00ADD4"}, "<25%")
  .to("#nStart", {duration:0.5, morphSVG:"#n", fill:"#00ADD4"}, "<25%")
  .to("#tail", {duration:0.75, morphSVG:"#a", fill:"#00ADD4"}, "<25%")
  return tl;
}

function fishOut(){
  var tl = gsap.timeline();
  tl.to("#bareAssFish", {duration:2.25, motionPath:{path:"#fishPath", align:"#fishPath", offsetX:-165, offsetY:-150, autoRotate:true, start:0.44, end:1}})
  return tl;
}

function fishLinesLeft(){
  var tl = gsap.timeline();
    tl.fromTo("#downLeft", {duration:0.15, drawSVG: "0% 0%"}, {drawSVG:"0% 100%"})
    .fromTo("#downLeft", {duration:0.15, drawSVG: "0% 100%"}, {drawSVG:"100% 100%"}, "<50%")
    .fromTo("#secondRightSplash", {duration:0.05, drawSVG: "0% 0%"}, {drawSVG:"0% 100%"}, "<75%")
    .fromTo("#secondRightSplash", {duration:0.05, drawSVG: "0% 100%"}, {drawSVG:"100% 100%"}, "<50%")
    .fromTo("#secondLeftSplash", {duration:0.05, drawSVG: "0% 0%"}, {drawSVG:"0% 100%"}, "<0%")
    .fromTo("#secondLeftSplash", {duration:0.05, drawSVG: "0% 100%"}, {drawSVG:"100% 100%"}, "<50%")
    .fromTo("#upLeft", {duration:0.15, drawSVG: "0% 0%"}, {drawSVG:"0% 100%"}, "<0%")
    .fromTo("#upLeft", {duration:0.15, drawSVG: "0% 100%"}, {drawSVG:"100% 100%"},"<50%")
  return tl;
}


var mainTL = gsap.timeline();
// mainTL.add(lineBreaker())
mainTL.add(fishIn())
mainTL.add(fishLinesRight(), "<5%")
mainTL.add(fishMorph())
mainTL.add(fishOut())
mainTL.add(fishLinesLeft(), "<5%")

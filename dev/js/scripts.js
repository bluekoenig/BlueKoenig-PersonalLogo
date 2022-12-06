import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);
gsap.registerPlugin(MotionPathPlugin, GSDevTools);
gsap.registerPlugin(ScrollTrigger, GSDevTools);



function fishonaMish(){

  gsap.to("#the-fishie", {
    duration: 15, 
    repeat: 12,
    repeatDelay: 3,

    
  });

    var tl = gsap.timeline();
    tl.to("#the-fishie",{
      motionPath:{
        path: "#fishpath",
        align: "#fishpath",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 0,
        end: .188,
        duration: 1
      }})
      tl.to("#the-fishie",{
        
        motionPath:{
          stagger:10,
          path: "#fishpath",
          align: "#fishpath",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          start: .188,
          end: .45
        }, scale:3}, "bigGuy")
        tl.to("#the-fishie",{
          motionPath:{
            path: "#fishpath",
            align: "#fishpath",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: .45,
            end: .75,
            duration: 1
          }, scale: 1})
          tl.to("#the-fishie",{
            motionPath:{
              path: "#fishpath",
              align: "#fishpath",
              autoRotate: true,
              alignOrigin: [0.5, 0.5],
              start: .75,
              end: 1,
              duration: 1
            }})
        
     

    return tl;

}

function patternMotion(){

    var tl = gsap.timeline();

    tl.from(".odd",{duration:2, drawSVG:0, stagger:0.25, rotate:180, transformOrigin:"center"},"spin")
    .fromTo(".even",{drawSVG:"0% 0%"},{duration:2, drawSVG:"0% -100%", stagger:0.25, rotate:180, transformOrigin:"center"},"spin");
    return tl;

}

function UIMotion(){


    // make a var that represents the line in the SVG
    var bottomLine = document.querySelector("#bottom-line");
    // make a var that uses the svg line var from above and sets the BBox property
    bottomLine = bottomLine.getBBox();

    console.log(bottomLine.width);

    var tl = gsap.timeline();
    tl.to("#pencil",{duration:0.5,x:bottomLine.width},"draw")
    .from("#bottom-line",{duration:0.5,drawSVG:0},"draw")
    .to("#pencil",{duration:0.25, alpha:0},"drawOutline")
    .fromTo("#outline",{drawSVG:"100% 100%"},{duration:0.5, drawSVG:"100% 0%"},"drawOutline")
    .from("#box-bg",{duration:0.5, scaleX:0})
    .from(".letter",{duration:0.25, alpha:0, y:20, stagger: 0.12},"-=50%")
    .from("#glass",{duration:0.25, drawSVG:0},"-=.5")
    .from("#handle",{duration:0.25, drawSVG:0},"-=.25")
    return tl;

}


var mainTL = gsap.timeline();
mainTL.add(fishonaMish())
.add(patternMotion())
.add(UIMotion())



GSDevTools.create();
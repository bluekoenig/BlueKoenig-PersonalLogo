import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin);



function fishonaMish(){

  gsap.to("#the-fishie", {
    duration: 15, 
    repeat: 12,
    repeatDelay: 3

    
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
        }, scale:3})
        // tl.to("#the-fishie",{
        //   motionPath:{
        //     path: "#fishpath",
        //     align: "#fishpath",
        //     autoRotate: true,
        //     alignOrigin: [0.5, 0.5],
        //     start: .45,
        //     end: .75,
        //     duration: 1
        //   }, scale: 1})
        //   tl.to("#the-fishie",{
        //     motionPath:{
        //       path: "#fishpath",
        //       align: "#fishpath",
        //       autoRotate: true,
        //       alignOrigin: [0.5, 0.5],
        //       start: .75,
        //       end: 1,
        //       duration: 1
        //     }})
        
            tl.to("#the-fishie", {morphSVG:".fisk", duration:2}, "+=1");

            tl.to("word-fish",{
        
              motionPath:{
                stagger:10,
                path: "#fishpath",
                align: "#fishpath",
                autoRotate: true,
                alignOrigin: [0.5, 0.5],
                start: .188,
                end: .45
              }, scale:3})
              tl.to("#word-fish",{
                motionPath:{
                  path: "#fishpath",
                  align: "#fishpath",
                  autoRotate: true,
                  alignOrigin: [0.5, 0.5],
                  start: .45,
                  end: .75,
                  duration: 1
                }, scale: 1})
    return tl;

}

function plopPlop(){

    var tl = gsap.timeline({repeat:3});

    gsap.from(".firstDown",{duration:2, DrawSVGPlugin:"100%"});

   
    return tl;

}

function UIMotion(){



}


var mainTL = gsap.timeline();
mainTL.add(fishonaMish())
.add(plopPlop())
.add(UIMotion())



GSDevTools.create();
import { gsap } from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin"
import {MotionPathPlugin} from "gsap/MotionPathPlugin"
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin"
import {GSDevTools} from "gsap/GSDevTools"

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin);
gsap.registerPlugin(GSDevTools);


function lafet(){

  var tl = gsap.timeline();
tl.from("#l", {motionPath: {path: "#l-path", align: "l-path", start: 0, end: .2}})
tl.from("#a", {motionPath: {path: "#a-path", align: "a-path", start: 0, end: .2}})
tl.from("#f", {motionPath: {path: "#f-path", align: "f-path", start: 0, end: .2}})
tl.from("#a2", {motionPath: {path: "#a2-path", align: "a2-path", start: 0, end: .2}})
tl.from("#y", {motionPath: {path: "#y-path", align: "y-path", start: 0, end: .2}})
tl.from("#e", {motionPath: {path: "#e-path", align: "e-path", start: 0, end: .2}})
tl.from("#t", {motionPath: {path: "#t-path", align: "t-path", start: 0, end: .2}})
tl.from("#t2", {motionPath: {path: "#t2-path", align: "t2-path", start: 0, end: .2}})
tl.from("#e2", {motionPath: {path: "#e2-path", align: "e2-path", start: 0, end: .2}})
}

function anticips(){

}



var mainTL = gsap.timeline();
mainTL.add(lafet())
.add(anticips())

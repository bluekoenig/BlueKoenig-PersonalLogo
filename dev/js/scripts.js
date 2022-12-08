import { gsap } from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin"
import {MotionPathPlugin} from "gsap/MotionPathPlugin"
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin"
import {GSDevTools} from "gsap/GSDevTools"

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin);
gsap.registerPlugin(DrawSVGPlugin);


GSDevTools.create();

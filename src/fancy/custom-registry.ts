import Button3D from "@/components/3D-button";
import BackupButton from "@/components/backup-button";
import ButtonBlack from "@/components/chunky-button";
import ShinyButton from "@/components/Hover-2-seats";
import ArrowButtonExample from "./examples/arrow-button-example";
import GooeyButton from "@/components/goey-button";
import SingleKey from "@/components/mech-key";
import ToggleSwitch from "@/components/toggle-switch";
import Cwickablebutton from "@/components/cwickable";
import LegoButton from "@/components/lego-button";
import ShinyCard from "@/components/shiny-card";
import LumiCardDemo from "./examples/card/lumi-card-demo";
import SocialsCard from "@/components/socials-card";
import WakaTimeStatsCard from "@/components/wakatime-stats-card";
import GlowyButtonDemo from "./examples/buttons/glowy-button-demo";
import VideoShowcaseDemo from "./examples/card/video-showcase-demo";
import FooterCard from "@/components/footer-card";
import InteractiveCarousel from "@/components/interactive-carousel";

export const customRegistry = {
  "3d-button": {
    component: Button3D,
    name: "3D Button",
  },
  "arrow-button": {
    component: ArrowButtonExample,
    name: "Arrow Button",
  },
  "backup-button": {
    component: BackupButton,
    name: "Backup Button",
  },
  "chonky-button": {
    component: ButtonBlack,
    name: "Chonky Button",
  },
  "shiny-tooltip-button": {
    component: ShinyButton,
    name: "Shiny Tooltip Button",
  },
  "goey-button": {
    component: GooeyButton,
    name: "Gooey Button",
  },
  "mech-key": {
    component: SingleKey,
    name: "Mechanical Key",
  },
  "toggle-switch": {
    component: ToggleSwitch,
    name: "Toggle Switch",
  },
  "cwickable-button": {
    component: Cwickablebutton,
    name: "Cwickable Button",
  },
  // "glowy-button": {
  //   component: GlowyButton,
  //   name: "Glowy Button",
  // },
  "lego-button": {
    component: LegoButton,
    name: "Lego Button",
  },
  "shiny-card": {
    component: ShinyCard,
    name: "Shiny Card",
  },
  "lumi-card": {
    component: LumiCardDemo,
    name: "Lumi Card",
  },
  "socials-card": {
    component: SocialsCard,
    name: "Socials Card",
  },
  "wakatime-stats-card": {
    component: WakaTimeStatsCard,
    name: "WakaTime Stats Card",
  },
  "glowy-button": {
    component: GlowyButtonDemo,
    name: "Glowy Button",
  },
  "video-showcase": {
    component: VideoShowcaseDemo,
    name: "Video Showcase",
  },
  "footer-card": {
    component: FooterCard,
    name: "Footer Card",
  },
  "interactive-carousel" : {
    component: InteractiveCarousel,
    name : "Interactive Carousel"
  }
} as const;



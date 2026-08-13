// Tech stack assets module - consolidates all tech stack icons
import AWSLight from './AWS-Light.svg';
import Bootstrap from './Bootstrap.svg';
import C from './C.svg';
import CPP from './CPP.svg';
import CS from './CS.svg';
import CSS from './CSS.svg';
import DartLight from './Dart-Light.svg';
import Docker from './Docker.svg';
import ExpressJSLight from './ExpressJS-Light.svg';
import FlutterLight from './Flutter-Light.svg';
import GithubLight from './Github-Light.svg';
import GraphQLLight from './GraphQL-Light.svg';
import HTML from './HTML.svg';
import JavaLight from './Java-Light.svg';
import JavaScript from './JavaScript.svg';
import MongoDB from './MongoDB.svg';
import NodeJSLight from './NodeJS-Light.svg';
import NpmLight from './Npm-Light.svg';
import Postman from './Postman.svg';
import ReactLight from './React-Light.svg';
import TailwindCSSLight from './TailwindCSS-Light.svg';
import ThreeJSLight from './ThreeJS-Light.svg';
import TypeScript from './TypeScript.svg';
import VercelLight from './Vercel-Light.svg';
import Figma from './Figma.svg';
import Canva from './Canva.svg';
import Photoshop from './Photoshop.svg';
import Python from './Python.svg';
import ChatGPT from './ChatGPT.svg';
import Gemini from './Gemini.svg';
import Claude from './Claude.svg';
import DeepSeek from './DeepSeek.svg';
import CapCut from './CapCut.svg';
import SSMS from './SSMS.svg';
import Katalon from './Katalon.svg';
import IDA from './IDA.svg';
import Nmap from './Nmap.svg';
import VisualStudio from './VisualStudio.svg';
import Word from './Word.svg';
import PowerPoint from './PowerPoint.svg';
import Excel from './Excel.svg';
import PixelLab from './PixelLab.svg';
import VSCode from './VSCode.svg';
import CiscoPacketTracer from './CiscoPacketTracer.svg';

export const techStackIcons = {
  AWSLight,
  Bootstrap,
  C,
  CPP,
  CS,
  CSS,
  DartLight,
  Docker,
  ExpressJSLight,
  FlutterLight,
  GithubLight,
  GraphQLLight,
  HTML,
  JavaLight,
  JavaScript,
  MongoDB,
  NodeJSLight,
  NpmLight,
  Postman,
  ReactLight,
  TailwindCSSLight,
  ThreeJSLight,
  TypeScript,
  VercelLight,
  Figma,
  Canva,
  Photoshop,
  Python,
  ChatGPT,
  Gemini,
  Claude,
  DeepSeek,
  CapCut,
  SSMS,
  Katalon,
  IDA,
  Nmap,
  VisualStudio,
  Word,
  PowerPoint,
  Excel,
  PixelLab,
  VSCode,
  CiscoPacketTracer,
};

// Export as array for easier iteration if needed
export const techStackArray = Object.entries(techStackIcons).map(([name, icon]) => ({
  name,
  icon,
}));

export default techStackIcons;

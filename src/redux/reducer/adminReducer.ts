import { IAdminState } from "../types/adminTypes";
import { createReducer } from "@reduxjs/toolkit";

const initialState: IAdminState = {
  status: {
    status: "online",
    monit: {
      cpu: 0.12,
      memory: 3250000,
    },
    env: {
      instances: 2,
      uptime: 604800,
    },
  },
  name: "memez.every.day.bro",
  subreddits: ["memes", "dank", "deepfried"],
  hashtags: ["memes", "dank", "deepfried"],
  explore: true,
  logsLoaded: false,
  dmsLoaded: false,
  dms: [
    {
      avatarUrl:
        "https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-19/s150x150/79773077_1023877884628204_8588040416933183488_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=s3MxRE-sriYAX_qp0Wi&oh=d75e1532a2d5ccb9f6ba46f70e5fd430&oe=5EC60A8B",
      username: "matthias1100",
      lastMessage: "hello",
      dateFormatted: "1w",
      date: "2020-04-06T21:58:50.218Z",
    },
    {
      avatarUrl:
        "https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-19/s150x150/79773077_1023877884628204_8588040416933183488_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=s3MxRE-sriYAX_qp0Wi&oh=d75e1532a2d5ccb9f6ba46f70e5fd430&oe=5EC60A8B",
      username: "matthias1100",
      lastMessage: "hello",
      dateFormatted: "1w",
      date: "2020-04-06T21:58:50.218Z",
    },
  ],
  schedule: "0 0 * * SUN",
  logs: `[32minfo[39m: New Bot created {"options":{"subredditNames":["memes","dankmemes","deepfriedmemes"],"schedule":"0 10,20 * * *","instagramCredentials":{"username":"memez.every.day.bro","password":"lio888"},"tags":["meme","memes","funny","lmao","dankmemes"],"explore":true},"timestamp":"2020-04-17T19:23:23.644Z"}
  [32minfo[39m: Bot started {"timestamp":"2020-04-17T19:23:23.655Z"}
  [32minfo[39m: Getting image Content from {"redditUrl":"https://www.reddit.com/r/memes","timestamp":"2020-04-18T08:00:11.276Z"}
  [32minfo[39m: Trying to download content {"content":{"type":0,"url":"https://i.redd.it/tv36c3ce0it41.png","caption":"This show is for 𝘒𝘪𝘥𝘴?"},"timestamp":"2020-04-18T08:00:18.555Z"}
  [31merror[39m: Couldnt access download directoryENOENT: no such file or directory, access '/app/build/downloads' {"errno":-2,"code":"ENOENT","syscall":"access","path":"/app/build/downloads","stack":"Error: ENOENT: no such file or directory, access '/app/build/downloads'","timestamp":"2020-04-18T08:00:19.639Z"}
  [32minfo[39m: Creating download directory {"timestamp":"2020-04-18T08:00:19.640Z"}
  [32minfo[39m: Downloading file {"type":0,"url":"https://i.redd.it/tv36c3ce0it41.png","caption":"This show is for 𝘒𝘪𝘥𝘴?","timestamp":"2020-04-18T08:00:19.641Z"}
  [32minfo[39m: Creating post with {"type":0,"url":"https://i.redd.it/tv36c3ce0it41.png","caption":"This show is for 𝘒𝘪𝘥𝘴?","filePath":"/app/build/downloads/tv36c3ce0it41.png","timestamp":"2020-04-18T08:00:20.058Z"}
  [32minfo[39m: Logging into instagram account {"username":"memez.every.day.bro","timestamp":"2020-04-18T08:00:20.424Z"}
  [32minfo[39m: Instagram Session {"timestamp":"2020-04-18T08:00:22.733Z"}
  [32minfo[39m: Successfully logged in {"username":"memez.every.day.bro","timestamp":"2020-04-18T08:00:31.389Z"}
  You have triggered an unhandledRejection, you may have forgotten to catch a Promise rejection:
  TimeoutError: waiting for selector "div[data-testid="new-post-button"]" failed: timeout 30000ms exceeded
      at new WaitTask (/app/node_modules/puppeteer/lib/DOMWorld.js:549:28)
      at DOMWorld._waitForSelectorOrXPath (/app/node_modules/puppeteer/lib/DOMWorld.js:478:22)
      at DOMWorld.waitForSelector (/app/node_modules/puppeteer/lib/DOMWorld.js:432:17)
      at Frame.waitForSelector (/app/node_modules/puppeteer/lib/FrameManager.js:627:47)
      at Frame.<anonymous> (/app/node_modules/puppeteer/lib/helper.js:112:23)
      at Page.waitForSelector (/app/node_modules/puppeteer/lib/Page.js:1125:29)
      at Object.createInstagramPost (/app/src/bot/tasks/createInstagramPost.ts:36:14)
      at processTicksAndRejections (internal/process/task_queues.js:93:5)
      at Bot.tick (/app/src/bot/Bot.ts:205:7)
  [32minfo[39m: Logging into instagram account {"username":"memez.every.day.bro","timestamp":"2020-04-18T12:00:00.369Z"}
  [32minfo[39m: Instagram Session {"timestamp":"2020-04-18T12:00:09.958Z"}
  [32minfo[39m: Successfully logged in {"username":"memez.every.day.bro","timestamp":"2020-04-18T12:00:18.118Z"}
  [32minfo[39m: Exploring and liking posts {"amount":3,"timestamp":"2020-04-18T12:00:18.119Z"}
  [32minfo[39m: Scrolling {"yCoord":256,"timestamp":"2020-04-18T12:00:20.872Z"}
  [32minfo[39m: Scrolling {"yCoord":711,"timestamp":"2020-04-18T12:00:20.912Z"}
  [32minfo[39m: Scrolling {"yCoord":615,"timestamp":"2020-04-18T12:00:20.922Z"}
  [32minfo[39m: Move mouse {"xCoord":304,"yCoord":185,"timestamp":"2020-04-18T12:00:20.927Z"}
  [32minfo[39m: Move mouse {"xCoord":325,"yCoord":473,"timestamp":"2020-04-18T12:00:21.155Z"}
  [32minfo[39m: Move mouse {"xCoord":43,"yCoord":75,"timestamp":"2020-04-18T12:00:21.325Z"}
  [32minfo[39m: Move mouse {"xCoord":278,"yCoord":453,"timestamp":"2020-04-18T12:00:21.489Z"}
  [32minfo[39m: Move mouse {"xCoord":276,"yCoord":243,"timestamp":"2020-04-18T12:00:21.651Z"}
  [32minfo[39m: Move mouse {"xCoord":267,"yCoord":431,"timestamp":"2020-04-18T12:00:21.817Z"}
  [32minfo[39m: Scrolling {"yCoord":468,"timestamp":"2020-04-18T12:00:23.011Z"}
  [32minfo[39m: Scrolling {"yCoord":981,"timestamp":"2020-04-18T12:00:23.014Z"}
  [32minfo[39m: Scrolling {"yCoord":840,"timestamp":"2020-04-18T12:00:23.017Z"}
  [32minfo[39m: Scrolling {"yCoord":653,"timestamp":"2020-04-18T12:00:23.021Z"}
  [32minfo[39m: Scrolling {"yCoord":711,"timestamp":"2020-04-18T12:00:23.025Z"}
  [32minfo[39m: Move mouse {"xCoord":94,"yCoord":575,"timestamp":"2020-04-18T12:00:23.028Z"}
  [32minfo[39m: Move mouse {"xCoord":249,"yCoord":485,"timestamp":"2020-04-18T12:00:23.184Z"}
  [32minfo[39m: Move mouse {"xCoord":174,"yCoord":188,"timestamp":"2020-04-18T12:00:23.351Z"}
  [32minfo[39m: Scrolling {"yCoord":941,"timestamp":"2020-04-18T12:00:24.525Z"}
  [32minfo[39m: Scrolling {"yCoord":277,"timestamp":"2020-04-18T12:00:24.534Z"}
  [32minfo[39m: Scrolling {"yCoord":723,"timestamp":"2020-04-18T12:00:24.536Z"}
  [32minfo[39m: Scrolling {"yCoord":732,"timestamp":"2020-04-18T12:00:24.544Z"}
  [32minfo[39m: Scrolling {"yCoord":929,"timestamp":"2020-04-18T12:00:24.551Z"}
  [32minfo[39m: Move mouse {"xCoord":120,"yCoord":386,"timestamp":"2020-04-18T12:00:24.560Z"}
  [32minfo[39m: Move mouse {"xCoord":71,"yCoord":454,"timestamp":"2020-04-18T12:00:24.702Z"}
  [32minfo[39m: Move mouse {"xCoord":106,"yCoord":442,"timestamp":"2020-04-18T12:00:24.878Z"}
  [32minfo[39m: Move mouse {"xCoord":48,"yCoord":384,"timestamp":"2020-04-18T12:00:25.036Z"}
  [32minfo[39m: Move mouse {"xCoord":172,"yCoord":546,"timestamp":"2020-04-18T12:00:25.204Z"}
  [32minfo[39m: Scrolling {"yCoord":302,"timestamp":"2020-04-18T12:00:26.403Z"}
  [32minfo[39m: Scrolling {"yCoord":721,"timestamp":"2020-04-18T12:00:26.407Z"}
  [32minfo[39m: Move mouse {"xCoord":230,"yCoord":414,"timestamp":"2020-04-18T12:00:26.410Z"}
  [32minfo[39m: Move mouse {"xCoord":267,"yCoord":305,"timestamp":"2020-04-18T12:00:26.559Z"}
  [32minfo[39m: Move mouse {"xCoord":206,"yCoord":55,"timestamp":"2020-04-18T12:00:26.720Z"}
  [32minfo[39m: Move mouse {"xCoord":103,"yCoord":60,"timestamp":"2020-04-18T12:00:26.902Z"}
  [32minfo[39m: Move mouse {"xCoord":204,"yCoord":512,"timestamp":"2020-04-18T12:00:27.085Z"}
  [32minfo[39m: Scrolling {"yCoord":842,"timestamp":"2020-04-18T12:00:28.301Z"}
  [32minfo[39m: Scrolling {"yCoord":199,"timestamp":"2020-04-18T12:00:28.308Z"}
  [32minfo[39m: Scrolling {"yCoord":112,"timestamp":"2020-04-18T12:00:28.322Z"}
  [32minfo[39m: Scrolling {"yCoord":703,"timestamp":"2020-04-18T12:00:28.338Z"}
  [32minfo[39m: Scrolling {"yCoord":175,"timestamp":"2020-04-18T12:00:28.346Z"}
  [32minfo[39m: Move mouse {"xCoord":272,"yCoord":75,"timestamp":"2020-04-18T12:00:28.357Z"}
  [32minfo[39m: Move mouse {"xCoord":78,"yCoord":165,"timestamp":"2020-04-18T12:00:28.504Z"}
  [32minfo[39m: Move mouse {"xCoord":97,"yCoord":533,"timestamp":"2020-04-18T12:00:28.668Z"}
  You have triggered an unhandledRejection, you may have forgotten to catch a Promise rejection:
  TimeoutError: waiting for selector "svg[aria-label="Like"]" failed: timeout 30000ms exceeded
      at new WaitTask (/app/node_modules/puppeteer/lib/DOMWorld.js:549:28)
      at DOMWorld._waitForSelectorOrXPath (/app/node_modules/puppeteer/lib/DOMWorld.js:478:22)
      at DOMWorld.waitForSelector (/app/node_modules/puppeteer/lib/DOMWorld.js:432:17)
      at Frame.waitForSelector (/app/node_modules/puppeteer/lib/FrameManager.js:627:47)
      at Frame.<anonymous> (/app/node_modules/puppeteer/lib/helper.js:112:23)
      at Page.waitForSelector (/app/node_modules/puppeteer/lib/Page.js:1125:29)
      at Object.exploreAndLike (/app/src/bot/tasks/exploreAndLike.ts:70:37)
      at runMicrotasks (<anonymous>)
      at processTicksAndRejections (internal/process/task_queues.js:93:5)
  `,
};

export const adminReducer = createReducer(initialState, {});

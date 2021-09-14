import{af as e,ag as s,C as n}from"./vendor-5763a202.js";const i=[{name:"Timing",description:"Timing related options",settings:[{name:"Input method",description:"Way of inputting times",value:0,options:["Timer","Typing"]},{name:"Decimals",description:"Decimals to display in big timer",value:2,options:["0","1","2","3"]},{name:"Solve decimals",description:"Decimals to display in solve list",value:2,options:["1","2","3"]},{name:"Timer delay",description:"Time to press down the timer before it starts",value:2,options:["0","0.1","0.3","0.55","1"]},{name:"Refresh rate",description:"How often the time gets updated when timer is running",value:1,options:["1ms","69ms","0.1s","0.5s","1s"]},{name:"Stop timer with",description:"Keys used to stop timer",value:1,options:["Any","Letters and space","Only space"]}]},{name:"Visual",description:"How the timer looks",settings:[{name:"Theme",description:"What the colors look like",value:0,options:["Dark","Light","Estonia"]},{name:"Small decimals",description:"Make decimals look smaller",value:!0}]},{name:"Accesibility",description:"Peepee poopoo idk what to put here",settings:[{name:"Button size",description:"Make buttons bigger or smth",value:1,min:0,max:3}]}],a=e("settings",i);function t(e){const s=JSON.parse(localStorage.getItem("settings"));for(const n of s)for(const s of n.settings){if(s.name===e)return o(s);if("child"in s&&s.child.name===e)return o(s.child)}}function o(e){return"options"in e?e.options[e.value]:e.value}function m(){console.warn("Reseting settings"),a.set(null),a.set(i)}const r=["3x3","2x2","4x4","5x5","6x6","7x7","3BLD","FMC","OH","Clock","Megaminx","Pyraminx","Skewb","Sq-1","4BLD","5BLD","MBLD"],l=[{name:"3x3",sessions:["Main","PLL","Last layer","Alg drill"]},{name:"2x2",sessions:["Main","Alg drill"]},{name:"4x4",sessions:["Main","3x3 phase","Centers","Edge pairing"]},{name:"5x5",sessions:["Main","3x3 phase","Centers","Edge pairing"]},{name:"6x6",sessions:["Main","3x3 phase","Centers","Edge pairing"]},{name:"7x7",sessions:["Main","3x3 phase","Centers","Edge pairing"]},{name:"3BLD",sessions:["Main","Memo-Ex","Memo-Edges-Corners","2-part memo, 2-part execution"]},{name:"FMC",sessions:["Main"]},{name:"OH",sessions:["Main","PLL","Last layer","Algs"]},{name:"Clock",sessions:["Main"]},{name:"Megaminx",sessions:["Main","RF2L","Last layer"]},{name:"Pyraminx",sessions:["Main"]},{name:"Skewb",sessions:["Main","RF2L","Last layer"]},{name:"Sq-1",sessions:["Main"]},{name:"4BLD",sessions:["Main"]},{name:"5BLD",sessions:["Main"]},{name:"MBLD",sessions:["Main"]}],c={id:69,name:"Default (test)",solves:[{time:4.2,penalty:0,date:new Date,scramble:"R U R' U'",reconstruction:""},{time:5,penalty:2,date:new Date,scramble:"I F UR MOM",reconstruction:""},{time:.69,penalty:"DNF",date:new Date,scramble:"M' S M S'",reconstruction:""}]};const p=e("database",function(){let e=[];for(const s of r){const n=l.map((e=>e.name)).indexOf(s),i=-1===n?[c]:l[n].sessions.map(((e,s)=>({id:s,name:e,solves:[]})));e=[...e,{name:s,sessions:i}]}return e}()),d=n({event:0,sessions:r.map((()=>0))}),u=s([d,p],(([e,s])=>s[e.event])),g=s([d,p],(([e,s])=>s[e.event].sessions[e.sessions[e.event]]));function M(e,s,n){e.date||(e.date=new Date),p.update((i=>(i[s].sessions[n].solves.push(e),i)))}function x(){console.warn("Reseting settings"),localStorage.removeItem("database")}function f(){p.update((e=>e.slice()))}export{M as a,u as b,g as c,a as d,x as e,t as g,m as r,d as s,f as u,r as w};
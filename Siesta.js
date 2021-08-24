module.exports.config = {
  name: "siesta",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thuann",
  description: "Random ảnh siesta",
  commandCategory: "random-img",
  usages: "siesta",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
	 "https://i.imgur.com/ebUvaZm.jpg",
"https://i.imgur.com/Qf5HR7t.jpg",
"https://i.imgur.com/1BfCS7z.jpg",
"https://i.imgur.com/dAijA9Y.jpg",
"https://i.imgur.com/LjhtmYq.png",
"https://i.imgur.com/QrM3OzL.png",
"https://i.imgur.com/tldCADM.jpg",
"https://i.imgur.com/D8yglCg.jpg",
"https://i.imgur.com/17OhjoB.jpg",
"https://i.imgur.com/RoMnoDQ.jpg",
"https://i.imgur.com/IkilCbb.jpg",
"https://i.imgur.com/EipJ49B.jpg",
"https://i.imgur.com/ui6oOen.jpg",
"https://i.imgur.com/NQlHuxa.jpg",
"https://i.imgur.com/xXqnUy3.jpg",
"https://i.imgur.com/t87WMB4.jpg",
"https://i.imgur.com/46tKahv.jpg",
"https://i.imgur.com/vnrz4LL.jpg",
];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1000) api.sendMessage("Bạn cần 1000 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 10})
   var callback = () => api.sendMessage({body:`Ảnh Siesta\nSố Ảnh: ${link.length}\n-1000 đô !`,attachment: fs.createReadStream(__dirname + "/cache/2.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/2.jpg")).on("close",() => callback());
     }
};

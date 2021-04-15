console.log("hello from Typescript");


//---------------------------------------initialize----------------------------------------------------
import { Client, Message, VoiceState, TextChannel } from "discord.js";
const client = new Client();
const token = ''
client.login(token);

var CalData :{[key:string]:number} = {}//calcurated result into this variable
var DefinedMessage :{[key:string]:string} = {}//データを保持するためにファイルに出力して読み取る関数が必要
interface UserAndPoint{
	name: string
	point:number
}

/*---------------------------------------what we want-----------------------------------------------
ほぼ完全にクライアントから見て自身のディスコードが表示されないようなシステム

Apexなどカスタムで使える計算機

--auto ban (サーバーの負荷と相談) -> とはいえ勝手に権限が外れて部屋に入れなくなるから別にいらないと思われる

自分のアカウントを他人に見せない －＞ 管理者権限を他人(モデレーター等)に渡して、新しい権限を作ってそれを自身が持つ、その権限二もbotを動かすことのできるようにする案もあり
caldata -> interface extends でも実装可能？？

init -> 使用用途によって2種類のパターンを用意する


//------------------------------------------------------------------------------------------------*/
client.on('ready', () => {
	if(client.user != null){
	    client.user.setPresence({ activity: { name: 'Ver 0.8.1 updated!' } });
	    console.log('bot ready!');
	}
});

async function InitCalChannel(channel :TextChannel):Promise<void>{
	//initialize calData and registraion
	CalData[channel.id] = 0
	return
}


async function InitAllChannels(message :Message):Promise<void>{
	//initialize all channels
	if((message.guild == null) || (message.member == null)){return }
	message.guild.channels.cache.forEach(r =>{
		if(CalData[r.id]){
			if(r.type == "text"){
				CalData[r.id] = 0
			}
		}
	})
	return
}

async function Initialize_Common(message :Message):Promise<void>{
	//初期化 共通関数
	message.channel.send("初期化を開始します")
	message.channel.send("=>------------------")
	if(message.guild == null)
		return
        var rol = message.guild.roles.cache.find(r => r.name === "@everyone");
        var test_ = message.guild.roles.cache.find(r => r.name === "guest")
        var VIP_ = message.guild.roles.cache.find(r => r.name === "VIP")
        if(test_ != null && VIP_ != null){
        	return
        }
    message.channel.send("==>-----------------")
 	message.guild.roles.create({
        data: {
            name: "VIP",
            color: "GREEN",
            permissions: (0x00000400 + 0x00000200 + 0x00200000 + 0x00100000 + 0x00400000 + 0x00800000 + 0x02000000)
        }
    })
    message.guild.roles.create({
        data: {
        name: "guest",
        color: "BLUE",
        permissions: (0x00000400 + 0x00000200 + 0x00200000 + 0x00100000 + 0x00400000 + 0x00800000 + 0x02000000)
        }
    });
    for(let i=0;i<4;i++){
    	message.guild.roles.create({
        data: {
        name: String(i),
        color: "BLUE",
        permissions: (0x00000000)
        }
    });
    }
    message.channel.send("===>----------------")
}

async function Initialize_Common_AllChannels_delete(message :Message):Promise<void>{
		if(message.member == null)
			return
	        message.member.guild.channels.cache.forEach(async (r) => {
	                await r.delete()
	        })
	        return
}

async function Initialize_Hide(message :Message):Promise<void>{
	message.channel.send("====>---------------")
	if(message.guild == null)
		return
        var rol = await message.guild.roles.cache.find(r => r.name === "@everyone");
        var test_ = await message.guild.roles.cache.find(r => r.name === "guest")
        var VIP_ = await message.guild.roles.cache.find(r => r.name === "VIP")
        if(test_ == null || VIP_ == null || rol == null){
          //  message.reply("共通関数を先に実行してください")
        }

		var VIP = ""
		message.channel.send("=====>--------------")
		const a = async function (message :Message) :Promise<void>{
			if(message.member == null)
				return
	        message.member.guild.roles.cache.map(r => {
	            //console.log(r.name);
	            if (r.name == "VIP") {
	                VIP = r.id;
	            }
	        });        
	        if(message.member == null)
	        	return
	        message.member.guild.channels.cache.forEach(async (r) => {
	                await r.delete()
	        })
	        message.channel.send("======>-------------")
	        return
	       }
		const b = async function (message :Message):Promise<void>{
			if(typeof message.member =="undefined")
				return
			if(message.member == null)
				return
			if(typeof rol == "undefined" || typeof VIP_ == "undefined")
        		return
			message.member.guild.channels.create('bot', {
	            type: 'text',
	            permissionOverwrites: [{
	                    id: rol.id,
	                    deny: ["VIEW_CHANNEL"],
	                },
	                {
	                    id: VIP_.id,
	                    allow: ["VIEW_CHANNEL"],
	                },
	            ],

       		 })
	        message.member.guild.channels.create('welcome', {
	            type: 'text',
	            permissionOverwrites: [{
	                    id: rol.id,
	                    deny: ["VIEW_CHANNEL"],
	                },
	                {
	                    id: VIP_.id,
	                    allow: ["VIEW_CHANNEL"],
	                },
	            ],
	        })
	        message.channel.send("=======>------------")
	        return
		}
		const c = async function (message :Message):Promise<void> {
			if(message.member == null)
				return
			if(typeof rol == "undefined")
				return
			message.member.guild.channels.create('待機室(発言不可)', {
            type: 'voice',
            permissionOverwrites: [{
                id: rol.id,
                allow: ["CONNECT", "VIEW_CHANNEL"],
                deny: ["SPEAK"],
            }, ],
        })
			if(message.member == null)
				return
			if(typeof rol == "undefined" ||typeof test_ == "undefined" || typeof VIP_ == "undefined")
				return
	        message.member.guild.channels.create('配信部屋', {
	            type: 'voice',
	            permissionOverwrites: [{
	                    id: rol.id,
	                    deny: ["VIEW_CHANNEL"],
	                },
	                {
	                    id: VIP_.id,
	                    allow: ["VIEW_CHANNEL"],
	                },
	                {
	                    id: test_.id,
	                    allow: ["VIEW_CHANNEL"],
	                },
	            ],
	        })
	        message.channel.send("===================>")
	        message.reply("設定が完了しました")
	        return
		}
await a(message)
await b(message)
await c(message)

}


async function Initialize_HideUser(message :Message):Promise<void>{
	message.channel.send("====>---------------")
	if(message.guild == null)
		return
        var rol = await message.guild.roles.cache.find(r => r.name === "@everyone");
        var test_ = await message.guild.roles.cache.find(r => r.name === "guest")
        var VIP_ = await message.guild.roles.cache.find(r => r.name === "VIP")
        if(test_ == null || VIP_ == null || rol == null){
          //  message.reply("共通関数を先に実行してください")
        }
		message.channel.send("=====>--------------")
		var VIP = ""
		const a = async function (message :Message) :Promise<void>{
			if(message.member == null)
				return
	        message.member.guild.roles.cache.map(r => {
	            //console.log(r.name);
	            if (r.name == "VIP") {
	                VIP = r.id;
	            }
	        });        
	        if(message.member == null)
	        	return
	        message.member.guild.channels.cache.forEach(async (r) => {
	            if (r.name != "一般") {
	                await r.delete()
	            }
	        })
	        message.channel.send("======>-------------")
	        return
	       }
		const b = async function (message :Message):Promise<void>{
			message.channel.send("=======>------------")
			if(typeof message.member =="undefined")
				return
			if(message.member == null)
				return
			if(typeof rol == "undefined" || typeof VIP_ == "undefined")
        		return
			message.member.guild.channels.create('bot', {
	            type: 'text',
	            permissionOverwrites: [{
	                    id: rol.id,
	                    deny: ["VIEW_CHANNEL"],
	                },
	                {
	                    id: VIP_.id,
	                    allow: ["VIEW_CHANNEL"],
	                },
	            ],

       		 })
			message.channel.send("========>-----------")
	        message.member.guild.channels.create('welcome', {
	            type: 'text',
	            permissionOverwrites: [{
	                    id: rol.id,
	                    deny: ["VIEW_CHANNEL"],
	                },
	                {
	                    id: VIP_.id,
	                    allow: ["VIEW_CHANNEL"],
	                },
	            ],
	        })
	        message.channel.send("=========>----------")
	        return
		}
		const c = async function (message :Message):Promise<void> {
			message.channel.send("==========>---------")
			if(message.member == null)
				return
			if(typeof rol == "undefined")
				return
			message.member.guild.channels.create('待機室(発言不可)', {
            type: 'voice',
            permissionOverwrites: [{
                id: rol.id,
                allow: ["CONNECT", "VIEW_CHANNEL"],
                deny: ["SPEAK"],
            }, ],
        })
			message.channel.send("===========>--------")
			if(message.member == null)
				return
			if(typeof rol == "undefined" ||typeof test_ == "undefined" || typeof VIP_ == "undefined")
				return
	        message.member.guild.channels.create('配信部屋', {
	            type: 'voice',
	            permissionOverwrites: [{
	                    id: rol.id,
	                    allow: ["VIEW_CHANNEL"],
	                },
	                {
	                    id: VIP_.id,
	                    allow: ["VIEW_CHANNEL"],
	                },
	                {
	                    id: test_.id,
	                    allow: ["VIEW_CHANNEL"],
	                },
	            ],
	        })
	        message.channel.send("============>-------")
	        return
		}
		const d = async function (message :Message):Promise<void>{
			message.channel.send("=============>------")
		for (var d = 1; d <= 20; d++) {
			if(message.member == null)
				return
			if(typeof rol == "undefined" ||typeof test_ == "undefined")
				return
            message.member.guild.channels.create(String(d), {
                type: 'category',
                permissionOverwrites: [{
                    id: rol.id,
                    allow: ["CONNECT", "SPEAK"],
                    deny: ["VIEW_CHANNEL"],
                }, ],
            })
			if(message.member == null)
				return
			if(typeof rol == "undefined" ||typeof test_ == "undefined")
				return
            message.member.guild.channels.create(String(d), {
                type: 'voice',
                permissionOverwrites: [{
                    id: rol.id,
                    allow: ["CONNECT", "SPEAK", "VIEW_CHANNEL"],
                }, ],
            })
            if(message.member == null)
				return
			if(typeof rol == "undefined" ||typeof test_ == "undefined")
				return
            message.member.guild.channels.create(String(d), {
                type: 'text',
                permissionOverwrites: [{
                    id: rol.id,
                    allow: ["CONNECT", "SPEAK", "VIEW_CHANNEL"]
                },],
            })
		}
		message.channel.send("==============>-----")
		return
	}
await a(message)
await new Promise(resolve => setTimeout(resolve, 5000))
await b(message)
await c(message)
await d(message)
await new Promise(resolve => setTimeout(resolve, 30000))
await e1(message)
//await e1(message)

}

const e1 = async function (message :Message):Promise<void>{
	message.channel.send("===============>----")
		if(message.guild == null)
			return
		message.guild.channels.cache.map(r =>{
			if(r.type == "category"){
				if(message.guild == null)
					return
				message.guild.channels.cache.map(x =>{
					if(x.name == r.name){
						//console.log(r.id)
						x.setParent(r.id)
					}
				})
			}
		})
		if(message.member == null)
			return
		message.member.guild.channels.cache.forEach(r => {
            if (r.name == "一般") {
                r.delete()
            }
        })
        message.channel.send("================>---")
        message.channel.send("=================>--")
        message.channel.send("==================>-")
        message.channel.send("===================>")
        message.reply("処理が終了しました")
        return
	}


async function MulCal(channnel :TextChannel, add :number):Promise<number>{
	if(add < 0){
		add = add *  -1
	}
	CalData[channnel.id] *= add;
	return CalData[channnel.id]
}

async function DivCal(channnel :TextChannel, add :number):Promise<number>{
	if(add < 0){
		add = add *  -1
	}
	CalData[channnel.id] /= add;
	return CalData[channnel.id]
}




async function AddCal(channnel :TextChannel, add :number):Promise<number>{
	if(add < 0){
		add = add *  -1
	}
	CalData[channnel.id] += add;
	return CalData[channnel.id]
}

async function RomoveCal(channnel :TextChannel, remove:number):Promise<number>{
	//add second arg
	if(remove < 0){
		remove = remove * - 1
	}
	CalData[channnel.id] -= remove;
	return CalData[channnel.id]
}

async function ShowAllCal(message :Message):Promise<void>{
	//show all cal
	let from = message.channel.id
	let fl = 0
	if((message.guild == null) || (message.member == null)){return}
	message.guild.channels.cache.forEach(r =>{
		if(CalData[r.id]){
			message.channel.send(`ルーム名 ${r.name} の得点:	${CalData[r.id]}`)
			fl =1
		}
	})
	if(fl !=1 ){
		message.reply("全てのルームにて得点が入っていないもしくは未登録です。");
	}

	return
}
async function RankedShowAllCal(message :Message):Promise<void>{
	let from = message.channel.id
	let fl = 0
	var data :UserAndPoint[] = [];
	//data.push(new UserAndPoint())
	if((message.guild == null) || (message.member == null)){return}
		let i = 0
	message.guild.channels.cache.forEach(r =>{
		if(typeof CalData[r.id] != "undefined"){
			if(i == 0){
				data.push({name:r.name, point:CalData[r.id]})
			}else{
				data.push({name:r.name, point:CalData[r.id]})
			}
		}
	})
	let x = await data.sort(function(a,b){
    if(a.point>b.point) return -1;
    if(a.point < b.point) return 1;
    return 0;
});
	x.forEach(r =>{
		if(typeof r.point != "undefined"){
			message.channel.send(`ルーム名 ${r.name} の得点:	${r.point}`)
		}
	})
	return
}

async function AllAdder(message :Message, num:number[]):Promise<number>{
	let temp = 0
	for(let i=0;i<num.length;i++){
		temp += num[i]
	}
	return temp
}

async function AllSubber(message :Message, num:number[]):Promise<number>{
	let temp = num[0]
	for(let i=1;i<num.length;i++){
		temp -= num[i]
	}
	return temp
}

async function AllMuller(message :Message, num:number[]):Promise<number>{
	let temp = 1
	for(let i=0;i<num.length;i++){
		temp *= num[i]
	}
	return temp
}

async function AllDivver(message :Message, num:number[]):Promise<number>{
	let temp = num[0]
	for(let i=1;i<num.length;i++){
		temp /= num[i]
	}
	return temp
}


async function RandomMapValorant(message :Message):Promise<string>{
	const map = ["Bind", "Haven", "Split", "Ascent","Icebox"]
	return map[ann(0, 4)]
}
async function EmitMessage(message :Message, content :string):Promise<void>{
	//Send message to all channnels
	//-----------------------------------------------実装途中-------------------------------------------------------------
	if((message.guild == null) || (message.member == null)){return}		
	const x = await message.guild.channels.cache.filter(r => r.type == "text")
	x.map(r => {
		const c = r as TextChannel
		c.send(content)
	})
	return
}

async function SendMessage(message :Message, to :string, content :string):Promise<void>{
	//Send received channel
	if((message.guild == null) || (message.member == null)){return}
	const x = await message.guild.channels.cache.filter(r => r.name == to)
	x.map(r => {
		const c = r as TextChannel
		c.send(content)
	})
	return
}


function ann(min :number, max :number) :number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

async function randomUser(num :number, data :number[]) :Promise<number[]>{
    // get a data as a args, and random, answer into data as a arary
    //console.log(data);
    var ans = ann(0, num - 1);
    // console.log(ans);
    var tag = 0;
    for (var i = 0; i < num; i++) {
        if (data.length == 0) {
            data.push(ans)
            randomUser(num, data)
        }
        if (data[i] == ans) {
            tag = 1;
            randomUser(num, data)
        }
        if (i == num - 1) {
            data.push(ans)
            randomUser(num, data)
        }
        if (data.length == num) {
            break;
        }
    }
    return data;
}

async function DefineMessage(message :Message, content :string):Promise<void>{
	if((message.guild == null) || (message.member == null)){return ;}
	DefinedMessage[message.guild.id] = content
	//console.log(DefinedMessage)
	message.reply(`入力を受け付けました\nユーザーがサーバーに入ったとき\n${DefinedMessage[message.guild.id]}\nと送信します。`)
	return
}

function CheckBotHaspermission(message :Message) : boolean{
	//Literally, Check whether bot has all permissions.
		if(message.guild != null){
		message.guild.members.cache.map(r => {
			if (r.user.bot == true && r.user.username == "Management_Assistant") {
				r.roles.cache.map(role =>{
					//into roles added to bot
					//console.log(role.permissions.bitfield)
					if(role.permissions.bitfield == 2146959359){
						//This bitfield indicate that role has all permissions.
						//console.log("Bot has all permissions")
						return true
					}
				})
			}
		})
	}
	return false
}

async function SearchMessengerChannelRole(message :Message, target :any) :Promise<string>{
	//Literally, search messangers channel role, and return Role id
	if((message.guild == null) || (message.member == null)){return "void"}
	let role = ""
	await message.guild.roles.cache.map(r => {
        if (r.name == target) {
            role = r.id
        }
    })
	if (role == ""){
		return "void"
	}else{
		return role
	}
}

async function SerchChannelName(message :Message, target :String):Promise<string>{
	if(message.guild == null)
		return "void"
	if(typeof message.guild.channels.cache.find(r => r.id === target) != 'undefined' ){
		const x = message.guild.channels.cache.find(r => r.id == target)
		if(typeof x != "undefined"){
			return x.name
		}
	}
	return "void"
}

async function AddPermissionToAllUsersInVC(message :Message) :Promise<string>{
	if((message.guild == null) || (message.member == null)){return "void"}
	SearchMessengerChannelRole(message, "guest")
	.then(role => {
		if((message.guild == null) || (message.member == null)){return "void"}
			/*
		message.guild.members.cache.map(r => {
			console.log(r)
            if(r.user.bot != true){
              r.roles.add(role)
            }
    	});*/
    	message.guild.channels.cache.filter(c => c.type == "voice").map(r =>{
    		r.members.map(x =>{
    			if(x.user.bot != true && x.voice.channelID != null){
    				x.roles.add(role)	
    			}
    		})
    	})
	})
	return "役職の付与に成功しました"
}

const MoveUsers = async function (message :Message, argv :string[]):Promise<void>{
	if((message.guild == null) || (message.member == null)){return ;}
	const VCchannel = await message.guild.channels.cache.find(channel => (channel.name === String(argv[1])) && (channel.type === "voice") );
	//console.log(VCchannel)
	if(typeof VCchannel == "undefined"){
		message.reply("Can not found Channel")
        return ;
    }else{
        message.guild.members.cache.forEach(member => {
        	if(member.user.bot != true){
        		member.voice.setChannel(VCchannel.id)
        	}
        })
    message.reply(`Moved everyone the ${argv[1]}, successfully! `)
    return 
    }
}

const ShuffleTeam = async function(message :Message, argv :string[]):Promise<string>{
	if((message.guild == null) || (message.member == null)){return "void";}
    var i = 0;
    const num_member = Number(argv[1])
    if (num_member <= 1) {
        return "このコマンドは2人以上から使えます。"
    }
    const num_team = Number(argv[2])
        if (num_team < 1 || num_team > 99 ) {
            return "Catch NaN beween 1 - 99"
        }
        var i = 0
        randomUser(num_member, []).then(random_array =>{
      	if((message.guild == null) || (message.member == null)){return "void";}
        message.guild.members.cache.forEach(member => {
                //message.reply(member.user.name)//debug
        if (member.user.bot != true) {
            let ignore :any = member.guild.channels.cache.find(r => r.name == "観戦部屋");
            if(String(ignore) != member.voice.channelID){
                message.reply(random_array[i])
                if((message.guild == null) || (message.member == null)){return "void";}
                let VCchannel = message.guild.channels.cache.find(channel => (channel.name == String((random_array[i] % num_team) + 1)) && (channel.type === "voice"))
                if(VCchannel != null)
                	try{
                		member.voice.setChannel(VCchannel)
                	i++;
                }catch{console.log("not connect")}
                }
            }
        });
    });
    message.reply("シャッフルが終了しました")
    return "void"
}
function arrayShuffle(array :string[]):string[] {
  for(let i = (array.length - 1); 0 < i; i--){
    let r = Math.floor(Math.random() * (i + 1));
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}



const RankedShuffleTeam = async function(message :Message, argv :string[]):Promise<string>{
	/*
	アルゴリズムの説明
	ランク付けされたユーザー(0 - 7)を元にランクごとの配列を作成していく
	その配列を元にランダムピックを行い、チームを分ける
	*/
	if((message.guild == null) || (message.member == null)){return "void";}
    //let i = 0;
    //指定するランクは0～7まで
    const num_ranks = 4
    const num_member = Number(argv[1])
    if (num_member <= 1) {
        return "このコマンドは2人以上から使えます。"
    }
    const num_team = Number(argv[2])
    if (num_team < 1 || num_team > 99 ) {
        return "Catch NaN beween 1 - 99"
    }
    //await MoveUsers(message, ["",message.channel.name])
    const cName = await SerchChannelName(message, String(message.member.voice.channelID))
    console.log(cName)
    await MoveUsers(message, ["",cName])
    /*
    let TeamIdArray = []//この中にチャンネルのIDが入っている
    for(var i =0;i<num_ranks;i++){
    	await SearchMessengerChannelRole(message, String(i))//こいつのバグ
    	.then(r =>{
    		//console.log(r)
    		TeamIdArray.push(r)
    	})
    }*/
    //let UsersRank = JSON.stringify({"0":[], "1":[], "2":[], "3":[], "4":[], "5":[], "6" :[], "7":[]})
    var UsersRank :{[key:number]:string[]} = {}
    const reg = /[0-3]/
    const tp = async function(message :Message):Promise<void> {
    	if(message.guild == null){
    		return
    	}
	    await message.guild.members.cache.map(member => {
	   		 if (member.user.bot != true) {
	        	let ignore :any = member.guild.channels.cache.find(r => (r.name == "観戦部屋") && (r.type === "voice")); 
	        	//console.log(member.user.username) 
	         	if((String(ignore) != member.voice.channelID) &&  (member.voice.channelID != null)){
	         		console.log(member.user.username) 
	         		member.roles.cache.map( async function(role :any){
	         			//await new Promise(resolve => setTimeout(resolve, 100))
	         			console.log(member.user.username) 
		         		for(var j=0;j<num_ranks;j++){
		         			if(reg.test(role.name) == false)
		         				continue
		         			if(String(role.name) == String(j)){
		         				if(typeof UsersRank[j] == "undefined"){
		         					UsersRank[j] = [member.id]
		         				}else{
		         					UsersRank[j].push(member.id)
		         				}
		         				break
		         			}
		         			console.log(member.id + "ロール名" + role.name + "   " + j + "回目の処理")
		         		}
	         		})
	        	}   	
	     	}
	 	})
	 	return
	 }
	 await tp(message)
    //await new Promise(resolve => setTimeout(resolve, 20000))
 	var count = 0
 	let temp :{[key:number]:string[]} = {}
 	for(var i=0;i<8;i++){
 		if(typeof UsersRank[i] == "undefined"){
 			continue
 		}else{
 			temp[i] = await arrayShuffle(UsersRank[i])
 			//console.log(arrayShuffle(["3", "5", "7", "9", "11"]))
 		}
 	}
 	for(var i=0;i<num_ranks;i++){
 		console.log(UsersRank[i])
 		 if(typeof UsersRank[i] == "undefined"){
 			continue
 		}
 		for(var j=0;j<UsersRank[i].length;j++){
 			let VCchannel = await message.guild.channels.cache.find(channel => (channel.name == String((count % num_team) + 1) ) && (channel.type === "voice"))		
 					if((message.guild == null) || (message.member == null)){return "void";}
 					message.guild.members.cache.forEach(x => {
 						if(VCchannel != null){
	 						if(x.id == temp[i][j]){
	 							message.channel.send(`ランク${i}, 名前は${x.user.username} 移動先   -> ${VCchannel.name}`)
		               		 if(VCchannel != null){
			                	try{
			                		x.voice.setChannel(VCchannel)
			                		count++;
			               		}catch{console.log('not connect user -> ${x.id}')}
			 				}
			 			}
			 		}
 				})
 			//count++
 		}
 	}
 	return "void"
}

async function HELP(message :Message):Promise<void>{
	var tex = "$add もしくは $a -> ボイスチャンネルに接続しているユーザーすべてを配信部屋に集めたのちguest権限を与えます。\n"
	tex += "$add -m {集めたいチャンネル名} -> 権限を付与し、集合させます\n"
	tex += "$t ->ユーザーを集めずにボイスチャンネルに接続しているユーザーすべてにguest権限を与えます"
	tex += "$sh {人数} {分けたいチーム数} -> 観戦部屋以外に入っているメンバーをシャッフルすることができます。\n"
	tex += "$team {人数} {分けたいチーム数} -> 観戦部屋、ランク役職(0~7の数字)が付いていないユーザーを除いたメンバーをランクベースでシャッフルします。\n"
	tex += "$send {送りたい部屋} {送りたいメッセージ} -> テキストチャンネルにメッセージを送ることができます。\n"
	tex += "$send -all {送りたいメッセージ} -> すべての部屋にメッセージを送ることができます。\n"
	tex += "$mv {集めたいチャンネル名} -> 観戦部屋を除くVCに接続しているユーザーを集めます。\n"
	tex += "$mapVal -> valorantのマップがランダムで選ばれます\n"
	tex += "$init -cal -all -> テキストチャンネルすべてが計算機を使えるようにします。これをしないと !add 等を扱うことができません\n"
	tex += "$show -cal -all -> 個別のチャンネルの計算データを上からチャンネル順に表示します\n"
	tex += "$show -cal -all -sort -> 個別のチャンネルの計算データを得点順に表示します\n"
	tex += "!add {数} -> テキストチャンネルの点数を加算します\n"
	tex += "!sub {数} -> テキストチャンネルの点数を減算します\n"
	tex += "!mul {数} -> テキストチャンネルの現在の得点を乗算します。\n"
	tex += "!div {数} -> テキストチャンネルの現在の得点を除算します\n"
	tex += "また、$が先頭についたコマンドはサーバーのオーナーのみが実行することができ、!のコマンドはすべてのユーザーが実行することができます\n"
	tex += "VCの名前は数字でない$sh等が使えませんがテキストチャンネルは自由に編集することができます\n"
	message.channel.send(tex)
	return 
}

const OrdinalUserCommand = async function(message :Message, argv :string[]) :Promise<string>{
	if((message.guild == null) || (message.member == null)){return "不明なエラーです"}

		if(argv[1] == "-n"){
			if(argv[0] == "add"){
				AllAdder(message, argv.slice(2, argv.length).map(Number)).then( r=>{
				if(String(r) == String(NaN)){
					(message.channel as TextChannel).send("このテキストチャンネルは登録されていません");
				}else{
					(message.channel as TextChannel).send(`合計${r}です。`)
				}
				})
			}
			if(argv[0] == "sub"){
				AllSubber(message, argv.slice(2, argv.length).map(Number)).then( r=>{
				if(String(r) == String(NaN)){
					(message.channel as TextChannel).send("このテキストチャンネルは登録されていません");
				}else{
					(message.channel as TextChannel).send(`合計${r}です。`)
				}
				})
			}
			if(argv[0] == "mul"){
				AllMuller(message,argv.slice(2, argv.length).map(Number)).then( r=>{
				if(String(r) == String(NaN)){
					(message.channel as TextChannel).send("このテキストチャンネルは登録されていません");
				}else{
					(message.channel as TextChannel).send(`合計${r}です。`)
				}
				})
			}
			if(argv[0] == "div"){
				AllDivver(message, argv.slice(2, argv.length).map(Number)).then( r=>{
				if(String(r) == String(NaN)){
					(message.channel as TextChannel).send("このテキストチャンネルは登録されていません");
				}else{
					(message.channel as TextChannel).send(`合計${r}です。`)
				}
				})
			}
			return "void"
		}
		if(argv[0] == "add"){
			AddCal(message.channel as TextChannel, Number(argv[1])).then(r => {
				if(String(r) == String(NaN)){
					(message.channel as TextChannel).send("このテキストチャンネルは登録されていません");
				}else{
					(message.channel as TextChannel).send(`あなたのチームの総得点は${r}です`)
				}
			})
		}
		if(argv[0] == "sub"){
			RomoveCal(message.channel as TextChannel, Number(argv[1])).then(r => {
				if(String(r) == String(NaN)){
					(message.channel as TextChannel).send("このテキストチャンネルは登録されていません");
				}else{
					(message.channel as TextChannel).send(`あなたのチームの総得点は${r}です`)
				}
			})
		}
		if(argv[0] == "mul"){
			MulCal(message.channel as TextChannel, Number(argv[1])).then(r => {
				if(String(r) == String(NaN)){
					(message.channel as TextChannel).send("このテキストチャンネルは登録されていません");
				}else{
					(message.channel as TextChannel).send(`あなたのチームの総得点は${r}です`)
				}
			})
		}
		if(argv[0] == "div"){
			DivCal(message.channel as TextChannel, Number(argv[1])).then(r => {
				if(String(r) == String(NaN)){
					(message.channel as TextChannel).send("このテキストチャンネルは登録されていません");
				}else{
					(message.channel as TextChannel).send(`あなたのチームの総得点は${r}です`)
				}
			})
		}
	return "void"
}

const OwnerCommand = async function(message :Message, argv :string[]) :Promise<string>{
	let ret = "void"
	if((message.guild == null) || (message.member == null)){return "不明なエラーです"}
	if(message.guild.ownerID != message.member.id){
        return "サーバーのオーナー以外は 接頭辞「$」のコマンドを実行することは出来ません。"
    }
    if(argv[0] == "sleep"){
    	message.reply("動作を停止")
    	await new Promise(resolve => setTimeout(resolve, 10000))
    	message.reply("動作から復帰")
    }
    if((argv[0] == "add") || (argv[0] == "a")){
    	// $add で権限付与 $add -m {移動先} で権限を与えつつ移動もできる
    	message.reply("入力を受け付けました。しばらくお待ちください")
    	await AddPermissionToAllUsersInVC(message)
    	.then(r =>{
    		ret = r
    		if(argv[1] == "-m"){
    			MoveUsers(message, ["",argv[2]])
    			return "void"
    		}
    	})
    	await new Promise(resolve => setTimeout(resolve, 5000))
    	await MoveUsers(message, ["", "配信部屋"])

    }
    if(argv[0] == "t"){
    	await AddPermissionToAllUsersInVC(message)
    }
    if (argv[0] == "help"){
    	HELP(message)
    }
    if(argv[0] == "mv"){
     	MoveUsers(message, argv)
    }
    if(argv[0] == "sh"){
    	ShuffleTeam(message, argv)
    }
    if(argv[0] == "team"){
    	message.reply("入力を受け付けました。しばらくお待ちください")
    	RankedShuffleTeam(message, argv)
    }
    if(argv[0] == "send"){
    	if(argv[1] == "-all"){
    		EmitMessage(message, String(argv.slice(2, argv.length))).then(r=>message.reply(`送信成功: 送信した文 -> ${argv[2]}`))
    	}else{
    		SendMessage(message, argv[1], String(argv.slice(1., argv.length))).then(r=>message.reply(`送信成功: 送信した文 -> ${argv[2]}`))
    	}
    }
    if(argv[0] == "def"){
    	if(argv[1] == "-msg"){
    		DefineMessage(message, String(argv.slice(2., argv.length).join(" ")))
    	}
    }
    if(argv[0] == "show"){
    	if(argv[1] == "-cal"){
    		if(argv[2] == "-all"){
    			if(argv[3] == "-sort"){
    				RankedShowAllCal(message)
	    			}
    			else{
    				ShowAllCal(message)
    			}
    			
    		}
    	}	
    }
    if(argv[0] =="mapVal"){
    	RandomMapValorant(message).then(r =>{
    		message.reply(r)
    	})
    }
    if(argv[0] == "init"){
    	//init だけの時はオプションを説明する
    	if(argv[1] == "-server"){
    		if(argv[2] == "-make"){
    			await Initialize_Common(message).then(x =>{
    				Initialize_HideUser(message)
    			})	
    		}
    		if(argv[2] == "-hide"){
    			await Initialize_Common(message).then(x =>{
    				Initialize_Hide(message)
    			})	
    		}
    		if(argv[2] == "-del"){
    			await Initialize_Common_AllChannels_delete(message)
    		}
    	}
    	if(argv[1] == "-cal"){
    		if(argv[2] == "-all"){
    			//数字のテキストチャンネルすべてに適応
    			message.guild.channels.cache.map(r =>{
    				console.log(r.type)
    				if(r.type === "text"){
    						InitCalChannel(r as TextChannel)
    				}
    			})
    			console.log(CalData)
    			message.reply("テキストチャンネルすべてを登録しました。")
    		}else{
    			const x = message.channel as TextChannel
    			InitCalChannel(x).then(r => message.reply(`${x.name} チャンネルを登録しました。`))
    		}
    	}

    }

	return ret
}


const main = async function(message :Message) :Promise<void> {
	if((message.guild == null) || (message.member == null)){message.reply("不明なエラーです");return}
    if (message.channel.type == "dm") {message.reply("dmから機能を実行することは出来ません。");return}
    if (CheckBotHaspermission(message)) {
    	message.reply("BOTにすべての権限を与えてください。")
    	return
    }else{
    const data = await message.content
    const prefix :string = await data.charAt(0)
	const key = await data.slice(1)
    const argv :string[] = await key.split(" ")
    //let ret = ""

    //---------------------- ! can use ordinal users, $ can use owner only. -------------------------------

    //-----------------------ordinal users and owner can use commands -------------------------------------
    if(prefix == "!"){
    	await OrdinalUserCommand(message, argv)
    	.then(r =>{
    		if(r != "void"){
    			message.reply(r)
    		}else{
    			//message.reply("存在しないコマンドです")
    		}
    	})
    } 


    //-----------------------only owner can use commands----------------------------------------------------
    if(prefix == "$"){
    	await OwnerCommand(message, argv)
    	.then(r =>{
    		if(r != "void"){
    			message.reply(r)
    		}else{
    			//message.reply("存在しないコマンドです")
    		}
    	})
    }
}
    //-----------------------the other ---------------------------------------------------------------------
    return
}


client.on("message", message =>{
//Send message fron text channels have bot.
	if (message.author.bot){return;}
	main(message)
})

client.on("guildMemberAdd", member=>{
	//member.send(DefinedMessage[member.guild.id])
})

client.on("voiceStateUpdate", (oldState, newState) =>{
if(oldState.channelID != null && newState.channelID == null){
	//It is called when someone exit this channnel
	SearchByVoiceState(oldState, "guest").then(role =>{
    	if(oldState.member != null){
    		oldState.member.roles.remove(role)
    	}

	})

}
})

const SearchByVoiceState = async function(message :VoiceState, target :string):Promise<string>{
	if((message.guild == null) || (message.member == null)){return "void"}
	let role = ""
	await message.guild.roles.cache.map(r => {
        if (r.name == target) {
            role = r.id
        }
    })
	if (role == ""){
		return "void"
	}else{
		return role
	}
}


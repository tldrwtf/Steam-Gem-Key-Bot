// ■ ■ ■ ■ ■  Created By mfw (https://steamcommunity.com/id/mfwBan)
// ■ ■ ■ ■ ■  For releasing this for free, if you'd like to donate, please use the information below!

// ■ ■  CashApp : $mfwBan 
// Modifications made in 2025 by killerboyyy777 (https://steamcommunity.com/id/klb777)


module.exports = {
    USERNAME: "",
    PASSWORD: "",
    IDENTITYSECRET: "",
	SHAREDSECRET: "",
    INVITETOGROUPID: "", // Invite users to this group
	STEAMAPIKEY: "", // For checking Gem Values
    
	
	MAXMSGPERSEC: 3,
	Owner: ["",""],  // In the first slot, put in the SteamID of the bot (between ""), after that put in the SteamID's of admins (so you get  Admin commands)
	Comment_After_Trade: "+Rep! Thanks for Trading with me!",  // Comment this after trade (leave blank if you don't want to comment)
	Ignore_Msgs: [], // the bot will ignore msg's from these users + ignore trade offers [it won't decline or accept], (useful for when you want to buy sets from other bots & don't want them to block eachother)

    Rates: { // These rates are optional. It's your responsibility to update them frequently
		
			
		Key_Swaps:{
			
			CS_To_TF2: [1,200], // !SwapTF Rate - You're giving X CS:GO keys for their X TF2 Keys (Choose what keys you're giving/receiving below)
			TF2_To_CS: [1,200], // !SwapCS Rate - You're giving X TF2 keys for their X CS:GO Keys (Choose what keys you're giving/receiving below)
			
			// To change the rates above: 
				// *the first number is how many keys YOU'RE giving
				// *the second number is how many keys THEY'RE giving
				
			Max_Swap: 0 // users can only swap up to X keys at a time
		},
		
			// Buy Rates
		
		BUY:{ 
			Gems_To_TF2_Rate:4200, // User gives us X Gems for X of OUR TF2 Keys
			Gems_To_CSGO_Rate: 69777, // User gives us X Gems for X of OUR CS:GO Keys
			BG_And_Emotes: 10 // Buy THEIR Backgrounds & Emotes for X Gems Each 
		},
			// Sell Rates
		
		SELL:{ 
			TF2_To_Gems: 3900, // User gives us X TF2 Keys for Our X Gems
			CSGO_To_Gems:0, // User gives us X CSGO Keys  for Our X Gems
			BG_And_Emotes: 25 // Sell YOUR Backgrounds & Emotes for X Gems Each (if you have bg's & emotes you don't want to sell, put their name in ItemsNotForTrade below between '')
		}
    },
	Restrictions:{
		ItemsNotForTrade: [':cleancake:',':cleankey:','A Clean Garage',':cleandino:',':cleanfloppy:',':dustpan:',':featherduster:',':cleanhourglass:',':goldfeatherduster:','A Work-in-Progress Garage',':cleanseal:','A Slightly Cleaner Garage','A Messy Garage','Dirty and Dusty','All Tidied Up',':csgo_despair',':csgo_gg',':csgo_chicken:',':csgo_headshot:',':csgo_dead:',':csgo_banana:',':csgo_explosion:',':csgo_clutch:',':csgo_loser:',':csgo_ez:',':csgo_crown:'],
		MaxBuy: 200, // Maximum Emotes/BG's you will buy in a single trade.
		MaxSell: 500, // Maximum emotes/BG's you will sell in a single trade.
		Convert_To_Gems: 20 // Gem any Emotes/BG's above this Value every week.
	},
    MESSAGES: {
        WELCOME: "Hello, welcome to my Key-BG-Emote-Gems Swap Bot. Let's get started! Type !help, !check, or !info.\r\n\r\nIn the case of any unforeseen error please message my Owner.\r\n", // Message sent when they first add you.
		BROADCAST: "/quote Bot Gems restocked", // For the !Broadcast command. Do not abuse this.
        HELP: "Available Commands:\r\n\r\n!Prices  ⮞ Check our current Rates/Prices\r\n!Price  ⮞ Check our current Rates/Prices\r\n!Rate  ⮞ Check our current Rates/Prices\r\n!Rates  ⮞ Check our current Rates/Prices\r\n\r\n!Check ⮞ Check how many Keys & Gems you have to see what we have to offer you!\r\n\r\n!Info ⮞ Info about Owner + Misc other information\r\n\r\n!BuyTF [# of TF2 Keys] ⮞ Buy TF2 Keys for Gems\r\n\r\n!SellTF [# of TF2 Keys] ⮞ Sell TF2 Keys for Gems\r\n\r\nWe're also:\r\nBuying Your Backgrounds & Emotes for 9 Gems each!\r\n(Only Gemable Backgrounds and Emotes)\r\nJust start a Trade Offer with me and enter any/ all Emoticons/Backgrounds you would like to sell! Then, Add the correct rate of gems from my inventory into the trade. (10 Gems per Emote/BG) Bot will auto accept if rates match/will decline if they do not.\r\n", // Check for anything you want to change.
	ADMINHELP: "Admin Commands:\r\n\r\n!Admin ⮞ Displays this admin help menu.\r\n!Profit ⮞ Shows current profit statistics (Keys, Gems, Sets, etc.).\r\n!Block [SteamID64] ⮞ Blocks a specific user from interacting with the bot.\r\n!Unblock [SteamID64] ⮞ Unblocks a previously blocked user.\r\n!Broadcast ⮞ Sends the configured message to all friends of the bot.\r\n\r\n"

    },
		
	TF2_Keys: [
		"Mann Co. Supply Crate Key"
	],
	CSGO_Keys: [
	"Clutch Case Key",
	"Glove Case Key",
	"Gamma Case Key",
	"Gamma 2 Case Key",
	"Chroma Case Key",
	"Chroma 2 Case Key",
	"Chroma 3 Case Key",
	"Spectrum Case Key",
	"Spectrum 2 Case Key",
	"Operation Phoenix Case Key",
	"Falchion Case Key",
	"Operation Breakout Case Key",
	"Operation Wildfire Case Key",
	"eSports Key",
	"Winter Offensive Case Key",
	"Operation Vanguard Case Key",
	"Shadow Case Key",
	"Horizon Case Key",
	"Danger Zone Case Key",
	"Prisma Case Key"
	]
}


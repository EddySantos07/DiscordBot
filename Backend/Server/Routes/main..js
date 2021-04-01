var express = require('express')
var Router = express.Router()

const { Get_All_Guilds } = require('../../DiscordBot/DiscordBotMethods/AllGuilds');

const { Get_Bot_Guilds } = require('../../DiscordBot/utils/api');

Router.get( '/guild/members', Get_All_Guilds )

module.exports.Router = Router;
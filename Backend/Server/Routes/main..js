var express = require('express')
var Router = express.Router()

const { Get_All_Guild_Members } = require('../../DiscordBot/DiscordBotMethods/allGuildMembers');


Router.get( '/guild/members', Get_All_Guild_Members ) 

module.exports.Router = Router;
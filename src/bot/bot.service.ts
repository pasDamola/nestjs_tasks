import { Injectable } from '@nestjs/common';

@Injectable()
export class BotService {

    botMessage() {        
        const TelegramBot = require('node-telegram-bot-api');
        
        const token = '1345997928:AAHuHOKWIkoM-jk6wugma1ktXQo8rDrukTc';
        
        const bot = new TelegramBot(token, { polling: true });
    
        bot.on('message', (msg) => {
            let Hi = "hi";
            if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
                bot.sendMessage(msg.from.id, "Hello " + msg.from.first_name + " what would you like to know about me ?");
            }
    })
}

 

}
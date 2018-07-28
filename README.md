# Reply Bot

Reply Bot is a starter project for building a Twitter Bot that replies to user messages.
It uses Serverless (AWS Lamda) and Typescript.

## Getting Started
To start building a new Reply Bot, clone this repo to a new directory:
```bash
git clone https://github.com/natemoo-re/reply-bot.git my-twitter-bot
cd my-twitter-bot
git remote rm origin
```

Install the project dependencies
```bash
npm install
```

Start the project with Serverless
```bash
npm start
```

## Configuring your Bot

Modify the environment configuration variables with your Twitter keys and the bot's Twitter handle.

serverless.yml
```yml
environment:
  TWITTER_CONSUMER_KEY:
  TWITTER_CONSUMER_SECRET: a123456b
  TWITTER_ACCESS_TOKEN:
  TWITTER_ACCESS_TOKEN_SECRET:
  TWITTER_HANDLE: reply_bot
```
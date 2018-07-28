# Reply Bot
**NOTE: This project isn't even functional yet! Use it as a guideline at your own risk.**

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
  TWITTER_CONSUMER_KEY: my_consumer_key
  TWITTER_CONSUMER_SECRET: my_consumer_secret
  TWITTER_ACCESS_TOKEN: my_access_token
  TWITTER_ACCESS_TOKEN_SECRET: my_access_token_secret
  TWITTER_HANDLE: reply_bot
```


## Resources
[Account Activity API docs](https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity)
[Getting started with webhooks](https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/guides/getting-started-with-webhooks.html)

[Getting Started with the Twitter Account Activity API](https://medium.com/@nragusa/getting-started-with-the-twitter-account-activity-api-beta-395e9498af81)
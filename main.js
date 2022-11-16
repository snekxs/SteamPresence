const SteamUser = require("steam-user");
const webhook = require("webhook-discord");
require('dotenv').config()

const username = process.env.USERNAME;
const password = process.env.PASSWORD;


steamClient = new SteamUser();
const Hook = new webhook.Webhook(
  "https://discord.com/api/webhooks/1041435170693197874/YR0ytItKLkPuRUkKwaczKJFI7edCETPdAx6RhhjSZNmY7OE3QM15IdwnBGyL9_QcFRPR"
);
steamClient.logOn({
  accountName: username,
  password: password,
  rememberPassword: true,
  rememberMachine: true,
});

steamClient.on("loggedOn", () => {
  console.log("Logged into Steam");

  const userID = steamClient.steamID.getSteamID64();
  Hook.success("Steam", `Logged into Steam as ${userID}`);
  console.log(`Logged in as (${userID})`);
  return userID;
});

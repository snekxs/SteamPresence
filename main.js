const SteamUser = require("steam-user");

steamClient = new SteamUser();

steamClient.logOn({
  accountName: "Snekxs",
  password: "@Unit5006",
  rememberPassword: true,
  rememberMachine: true,
});
steamClient.on("loggedOn", () => {
  console.log("Logged into Steam");

  const userID = steamClient.steamID.getSteamID64();

  console.log(`Logged in as (${userID})`);
});

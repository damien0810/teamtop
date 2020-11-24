


// Recuperer le dossier db_starter
// Creer une nouvelle base de données sur Mongo Atlas
// Verifier que "yarn dev" marche bien
// R : Faire un endpoint vers "/" => "/" affiche toute la donnée de la collection "Seller"
// C : Faire un endpoint app.post("/api/create")




// Collection Vendeur
// {
//   "name" = "",
//   "surname" = "",
//   "age"= "",
//   "adress" = {
//     "street": "",
//     "city": "",
//     "country": "",
//     "postal_code": ""
//   },
//   "description" = "",
//   "email" = "",
//   "phone" = "",
// },














// let lastGameId = 0;
// let lastPlatformId = 0;

// export class PlatformNotFoundError extends Error {
//   constructor(message) {
//     super(message);

//     // Set the prototype explicitly.
//     Object.setPrototypeOf(this, PlatformNotFoundError.prototype);
//   }
// }

// let GAMES= [];
// let PLATFORMS = [];

// export function reset() {
//   // This function is for tests only
//   GAMES = [];
//   PLATFORMS = [];
//   lastGameId = 0;
//   lastPlatformId = 0;
// }

// export function getGames() {
//   return GAMES;
// }

// export function addGame(
//   name,
//   slug,
//   platformSlug
// ) {
//   const platform = findPlatform(platformSlug);
//   if (platform) {
//     const newId = lastGameId + 1;
//     lastGameId = newId;
//     const game = {
//       id: newId,
//       name,
//       platform_slug: platformSlug,
//       slug: slug,
//     };
//     GAMES.push(game);
//     console.log(`added a game: ${name}, id: ${game.id}`);
//     return game;
//   } else {
//     throw new PlatformNotFoundError(`Platform ${platformSlug} does not exist`);
//   }
// }

// export function removeGame(gameSlug) {
//   const removedGame = GAMES.find((game) => game.slug === gameSlug);
//   if (removedGame) {
//     console.log(`removed a game: ${removedGame.id}`);
//     GAMES = GAMES.filter((game) => game.slug !== gameSlug);
//   }
// }

// export function updateGame(gameSlug, updatedGame) {
//   GAMES = GAMES.map((game) => {
//     if (game.slug === gameSlug) {
//       console.log(`updated a game: ${game.id}`);
//       return { ...updatedGame, id: game.id };
//     }
//     return game;
//   });
//   return updatedGame;
// }

// export function findGame(gameSlug) {
//   return getGames().find((game) => game.slug === gameSlug);
// }

// export function findGamesByPlatformId(platformSlug) {
//   return getGames().filter((game) => game.platform_slug === platformSlug);
// }

// export function getPlatforms() {
//   return PLATFORMS;
// }

// export function addPlatform(name, slug) {
//   const newId = lastPlatformId + 1;
//   lastPlatformId = newId;
//   const platform = {
//     id: newId,
//     name,
//     slug,
//   };
//   PLATFORMS.push(platform);

//   console.log(`added a platform: ${name}, id: ${platform.id}`);
//   return platform;
// }

// export function removePlatform(platformSlug) {
//   const removedPlatform = PLATFORMS.find(
//     (platform) => platform.slug === platformSlug
//   );
//   if (removedPlatform) {
//     console.log(`removed a platform: ${removedPlatform.id}`);

//     PLATFORMS = PLATFORMS.filter((platform) => platform.slug !== platformSlug);
//     const gamesForThatPlatform = GAMES.filter(
//       (game) => game.platform_slug === platformSlug
//     );
//     gamesForThatPlatform.forEach((game) => removeGame(game.slug));
//   }
// }

// export function findPlatform(platformSlug: string): Platform | undefined {
//   return getPlatforms().find((platform) => platform.slug === platformSlug);
// }

// export function findPlatformByName(platformName: string): Platform | undefined {
//   return getPlatforms().find((platform) => platform.name === platformName);
// }

// export function updatePlatform(
//   platformSlug: string,
//   updatedPlatform: Platform
// ): Platform {
//   PLATFORMS = PLATFORMS.map((platform) => {
//     if (platform.slug === platformSlug) {
//       console.log(`updated a plateform: ${platform.id}`);
//       return { ...updatedPlatform, id: platform.id };
//     }
//     return platform;
//   });
//   return updatedPlatform;
// }

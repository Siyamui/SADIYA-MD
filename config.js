const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SADIYA-MD=TAURVbpS#BoWyjNvr8WjCMDOcQsbplYGJ15orap0GxUhjwgMLprw", //Put Session-id Here
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME || "https://github.com/Siyamui", //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || "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", //Put Your Github Auth Token
DATABASE_REPO_NAME: process.env.DATABASE_REPO_NAME || "SADIYA-MD-DATABASE", //Bot Database Repo Name
SESSION_NAME: process.env.SESSION_NAME || "SADIYA-MD=TAURVbpS#BoWyjNvr8WjCMDOcQsbplYGJ15orap0GxUhjwgMLprw"
};

const puppeteer = require("puppeteer");

async function startBrowser() {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
    });
  } catch (err) {
    console.log("Could not create a browser instance => : ", err);
  }
  return browser;
}
module.exports = { startBrowser };

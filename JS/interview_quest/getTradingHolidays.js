import puppeteer from 'puppeteer';

// ? launch the nse india url
(async () => {
  try {
    const browsers = await puppeteer.launch({
      args: ['--start-maximized'],
      slowMo: 100,
      timeout: 0,
      headless: false,
      defaultViewport: null
    });

    const pages = (await browsers.pages())[0];

    // ? nse india holidays
    await pages.goto('https://www.nseindia.com/resources/exchange-communication-holidays');

    const holidayTable = await pages.waitForXPath("//table [@id='holidayTable']", { timeout: 0 });

    console.log('await holidayTable :>> ', holidayTable);
  } catch (error) {
    console.log('error :>> ', error);
    return error;
  }
})();

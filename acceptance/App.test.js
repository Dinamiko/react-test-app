const puppeteer = require('puppeteer');

test('open browser', async () => {

	const browser = await puppeteer.launch({
		executablePath: '/usr/bin/chromium-browser',
		args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-dev-shm-usage']
	});

	const page = await browser.newPage();
});

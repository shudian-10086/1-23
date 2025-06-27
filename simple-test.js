import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:4321');
  await page.waitForSelector('header');
  
  const result = await page.evaluate(() => {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo h1 a');
    const hs = getComputedStyle(header);
    const ls = getComputedStyle(logo);
    
    return {
      headerBg: hs.backgroundColor,
      headerBackdrop: hs.backdropFilter,
      logoColor: ls.color,
      logoBg: ls.background,
      logoFill: ls.webkitTextFillColor
    };
  });
  
  console.log('🔍 当前Header实际样式:');
  console.log(`Header背景色: ${result.headerBg}`);
  console.log(`Header毛玻璃: ${result.headerBackdrop}`);
  console.log(`Logo颜色: ${result.logoColor}`);
  console.log(`Logo背景: ${result.logoBg.substring(0, 50)}...`);
  console.log(`Logo填充: ${result.logoFill}`);
  
  // 判断是否现代化
  const isModern = result.headerBackdrop && result.headerBackdrop !== 'none';
  const isTraditional = result.headerBg === 'rgb(54, 72, 105)';
  
  console.log('\n🎯 判断结果:');
  if (isModern) {
    console.log('✅ Header已现代化 - 玻璃拟态效果生效');
  } else if (isTraditional) {
    console.log('❌ Header仍是传统样式 - 深蓝色背景');
  } else {
    console.log('⚠️ Header状态不明 - 需要进一步检查');
  }
  
  await browser.close();
})();
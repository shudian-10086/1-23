import { chromium } from 'playwright';

async function quickCheck() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:4321');
    await page.waitForLoadState('networkidle');
    
    // 截图
    await page.screenshot({ 
      path: 'header-reality.png', 
      clip: { x: 0, y: 0, width: 1200, height: 200 }
    });
    
    // 检查实际样式
    const reality = await page.evaluate(() => {
      const header = document.querySelector('header');
      const styles = window.getComputedStyle(header);
      
      return {
        backgroundColor: styles.backgroundColor,
        backdropFilter: styles.backdropFilter,
        background: styles.background.substring(0, 100)
      };
    });
    
    console.log('实际Header样式:');
    console.log(`backgroundColor: ${reality.backgroundColor}`);
    console.log(`backdropFilter: ${reality.backdropFilter}`);
    console.log(`background: ${reality.background}...`);
    
    if (reality.backgroundColor === 'rgb(54, 72, 105)') {
      console.log('❌ 问题确认：仍在使用传统深蓝色背景');
    } else if (reality.backdropFilter && reality.backdropFilter !== 'none') {
      console.log('✅ 现代化玻璃效果已生效');
    }
    
  } finally {
    await browser.close();
  }
}

quickCheck().catch(console.error);
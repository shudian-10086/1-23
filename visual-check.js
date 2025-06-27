import { chromium } from 'playwright';

async function visualCheck() {
  console.log('👀 直接查看Header视觉效果...');
  
  const browser = await chromium.launch({ 
    headless: false,
    slowMo: 1000 
  });
  const page = await browser.newPage();
  
  try {
    console.log('📍 正在访问首页...');
    await page.goto('http://localhost:4321');
    await page.waitForLoadState('networkidle');
    
    // 截图保存
    await page.screenshot({ 
      path: 'header-visual-check.png', 
      fullPage: false,
      clip: { x: 0, y: 0, width: 1200, height: 150 }
    });
    console.log('📸 Header截图已保存为 header-visual-check.png');
    
    // 检查实际计算样式
    const actualStyles = await page.evaluate(() => {
      const header = document.querySelector('header');
      const logo = document.querySelector('.logo h1 a');
      
      if (!header || !logo) return { error: 'Elements not found' };
      
      const headerComputed = window.getComputedStyle(header);
      const logoComputed = window.getComputedStyle(logo);
      
      // 获取实际渲染的样式值
      return {
        header: {
          backgroundColor: headerComputed.backgroundColor,
          background: headerComputed.background.substring(0, 200),
          backdropFilter: headerComputed.backdropFilter || headerComputed.webkitBackdropFilter,
          position: headerComputed.position,
          boxShadow: headerComputed.boxShadow
        },
        logo: {
          color: logoComputed.color,
          backgroundColor: logoComputed.backgroundColor,
          background: logoComputed.background.substring(0, 200),
          backgroundClip: logoComputed.backgroundClip || logoComputed.webkitBackgroundClip,
          webkitTextFillColor: logoComputed.webkitTextFillColor,
          filter: logoComputed.filter
        },
        // 检查应用的CSS规则
        appliedRules: {
          headerRules: Array.from(header.style).length,
          logoRules: Array.from(logo.style).length
        }
      };
    });
    
    console.log('\n🎨 实际渲染样式:');
    console.log('Header样式:');
    console.log(`  background-color: ${actualStyles.header.backgroundColor}`);
    console.log(`  background: ${actualStyles.header.background}...`);
    console.log(`  backdrop-filter: ${actualStyles.header.backdropFilter}`);
    console.log(`  box-shadow: ${actualStyles.header.boxShadow}`);
    
    console.log('\nLogo样式:');
    console.log(`  color: ${actualStyles.logo.color}`);
    console.log(`  background: ${actualStyles.logo.background}...`);
    console.log(`  background-clip: ${actualStyles.logo.backgroundClip}`);
    console.log(`  -webkit-text-fill-color: ${actualStyles.logo.webkitTextFillColor}`);
    console.log(`  filter: ${actualStyles.logo.filter}`);
    
    // 检查是否有冲突的CSS
    const cssConflicts = await page.evaluate(() => {
      const header = document.querySelector('header');
      const styles = window.getComputedStyle(header);
      
      // 检查是否存在传统样式的特征
      const hasTraditionalBackground = styles.backgroundColor === 'rgb(54, 72, 105)'; // #364869
      const hasModernGlass = styles.backdropFilter && styles.backdropFilter !== 'none';
      
      return {
        hasTraditionalBackground,
        hasModernGlass,
        conflict: hasTraditionalBackground && hasModernGlass
      };
    });
    
    console.log('\n⚡ CSS冲突检查:');
    console.log(`  传统背景色存在: ${cssConflicts.hasTraditionalBackground ? '⚠️ 是' : '✅ 否'}`);
    console.log(`  现代玻璃效果存在: ${cssConflicts.hasModernGlass ? '✅ 是' : '⚠️ 否'}`);
    console.log(`  样式冲突: ${cssConflicts.conflict ? '❌ 存在冲突' : '✅ 无冲突'}`);
    
    console.log('\n⏸️ 浏览器保持打开，请手动查看实际效果...');
    console.log('请按 Ctrl+C 关闭浏览器');
    
    // 保持浏览器打开，等待用户手动关闭
    await new Promise(() => {}); 
    
  } catch (error) {
    console.error('❌ 检查失败:', error.message);
    await browser.close();
  }
}

visualCheck().catch(console.error);
// 国际化数据管理
export interface Translation {
  nav: {
    home: string;
    allGames: string;
    about: string;
    contact: string;
  };
  common: {
    playNow: string;
    newGames: string;
    popularGames: string;
    trendingGames: string;
    loading: string;
    error: string;
  };
  meta: {
    defaultTitle: string;
    defaultDescription: string;
  };
}

export const translations: Record<string, Translation> = {
  en: {
    nav: {
      home: "Home",
      allGames: "ALL Games", 
      about: "About",
      contact: "Contact"
    },
    common: {
      playNow: "Play Now",
      newGames: "New Games",
      popularGames: "Popular Games", 
      trendingGames: "Trending Games",
      loading: "Loading...",
      error: "Error loading content"
    },
    meta: {
      defaultTitle: "FiddleBops - Play FiddleBops Incredibox Game",
      defaultDescription: "Play FiddleBops online for free! Create amazing music with this Incredibox-inspired game. Mix beats, melodies and effects in this interactive music creation experience."
    }
  },
  zh: {
    nav: {
      home: "首页",
      allGames: "全部游戏",
      about: "关于",
      contact: "联系我们"
    },
    common: {
      playNow: "立即游戏",
      newGames: "新游戏",
      popularGames: "热门游戏",
      trendingGames: "趋势游戏", 
      loading: "加载中...",
      error: "内容加载错误"
    },
    meta: {
      defaultTitle: "Fiddlebops - 免费在线Fiddlebops Incredibox游戏",
      defaultDescription: "免费在线玩 FiddleBops！这款受 Incredibox 启发的游戏让你创作精彩音乐。在这个交互式音乐创作体验中混合节拍、旋律和音效。"
    }
  }
};

// 获取翻译文本的工具函数
export function getTranslation(lang: string, key: string): string {
  const keys = key.split('.');
  let result: any = translations[lang] || translations.en;
  
  for (const k of keys) {
    result = result?.[k];
  }
  
  return result || key;
}

// 支持的语言列表
export const supportedLanguages = [
  { code: 'en', name: 'English', url: '/' },
  { code: 'zh', name: '简体中文', url: '/zh/' },
  { code: 'es', name: 'Español', url: '/es/' },
  { code: 'fr', name: 'Français', url: '/fr/' },
  { code: 'de', name: 'Deutsch', url: '/de/' },
  { code: 'ja', name: '日本語', url: '/ja/' },
  { code: 'ko', name: '한국어', url: '/ko/' }
];
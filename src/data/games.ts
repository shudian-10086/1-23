// 游戏数据管理
export interface GameItem {
  id: string;
  title: string;
  url: string;
  image: string;
  category?: string;
  featured?: boolean;
  popular?: boolean;
  trending?: boolean;
  isNew?: boolean;
}

// 热门游戏列表
export const popularGames: GameItem[] = [
  {
    id: 'sprunki-red-sun',
    title: 'Sprunki Red Sun',
    url: 'https://www.playfiddlebops.com/sprunki-red-sun/',
    image: '/sprunki-red-sun.png',
    popular: true
  },
  {
    id: 'sprunki-abgerny',
    title: 'Sprunki Abgerny', 
    url: 'https://www.playfiddlebops.com/sprunki-abgerny/',
    image: '/sprunki-abgerny.png',
    popular: true
  },
  {
    id: 'sprunki-sonic',
    title: 'Sprunki Sonic',
    url: 'https://www.playfiddlebops.com/sprunki-sonic/',
    image: '/Sprunki Sonic.png',
    popular: true
  },
  {
    id: 'fiddlebops',
    title: 'fiddlebops',
    url: 'https://www.playfiddlebops.com/',
    image: '/tw.jpg',
    popular: true,
    featured: true
  }
];

// 新游戏列表（基于原始数据）
export const newGames: GameItem[] = [
  {
    id: 'pikmin-no-sprunki',
    title: 'Pikmin No Sprunki',
    url: 'https://www.playfiddlebops.com/pikmin-no-sprunki/',
    image: '/pikmin-no-sprunki.png',
    isNew: true
  },
  {
    id: 'the-haze-pixelbox',
    title: 'The Haze Pixelbox',
    url: 'https://www.playfiddlebops.com/the-haze-pixelbox/',
    image: '/the-haze-pixelbox.png',
    isNew: true
  },
  {
    id: 'yojou-sprunki-mustard',
    title: 'Yojou Sprunki Mustard',
    url: 'https://www.playfiddlebops.com/yojou-sprunki-mustard/',
    image: '/yojou-sprunki-mustard.png',
    isNew: true
  },
  {
    id: 'sprunki-retake-bonus-characters',
    title: 'Sprunki Retake Bonus Characters',
    url: 'https://www.playfiddlebops.com/sprunki-retake-bonus-characters/',
    image: '/sprunki-retake-bonus-characters.png',
    isNew: true
  }
];

// 趋势游戏列表（基于原始数据）
export const trendingGames: GameItem[] = [
  {
    id: 'ayocs-sprunkr',
    title: 'AYOCS Sprunkr',
    url: 'https://www.playfiddlebops.com/ayocs-sprunkr/',
    image: '/ayocs-sprunkr.png',
    trending: true
  },
  {
    id: 'incredibox-donki-abgerny',
    title: 'Incredibox Donki Abgerny',
    url: 'https://www.playfiddlebops.com/incredibox-donki-abgerny/',
    image: '/incredibox-donki-abgerny.png',
    trending: true
  },
  {
    id: 'sprunki-pyramixed-version',
    title: 'Sprunki Pyramixed',
    url: 'https://www.playfiddlebops.com/sprunki-pyramixed-version/',
    image: '/sprunki-pyramixed-version.png',
    trending: true
  },
  {
    id: 'sprunki-squid-remix',
    title: 'Sprunki Squid Remix',
    url: 'https://www.playfiddlebops.com/sprunki-squid-remix/',
    image: '/sprunki-squid-remix.png',
    trending: true
  },
  {
    id: 'sprunki-1996',
    title: 'Sprunki 1996',
    url: 'https://www.playfiddlebops.com/sprunki-1996/',
    image: '/sprunki-1996.png',
    trending: true
  },
  {
    id: 'sprunki-rotrizi-5',
    title: 'Sprunki rotrizi 5.0',
    url: 'https://www.playfiddlebops.com/sprunki-rotrizi-5/',
    image: '/sprunki-rotrizi-5.png',
    trending: true
  },
  {
    id: 'sprunki-parasite-parasprunki-15',
    title: 'Sprunki Parasite ParaSprunki 15',
    url: 'https://www.playfiddlebops.com/sprunki-parasite-parasprunki-15/',
    image: '/sprunki-parasite-parasprunki-15.png',
    trending: true
  },
  {
    id: 'incredibox-sprunksters',
    title: 'Incredibox Sprunksters',
    url: 'https://www.playfiddlebops.com/incredibox-sprunksters/',
    image: '/incredibox-sprunksters.png',
    trending: true
  },
  {
    id: 'sprunki-babies',
    title: 'Sprunki Babies',
    url: 'https://www.playfiddlebops.com/sprunki-babies/',
    image: '/sprunki-babies.png',
    trending: true
  },
  {
    id: 'pikmin-no-sprunki',
    title: 'Pikmin No Sprunki',
    url: 'https://www.playfiddlebops.com/pikmin-no-sprunki/',
    image: '/pikmin-no-sprunki.png',
    trending: true
  }
];

// 通用游戏列表（用于组件）
export const commonGames: GameItem[] = [
  {
    id: 'fiddlebops',
    title: 'fiddlebops',
    url: 'https://www.playfiddlebops.com/',
    image: '/tw.jpg',
    featured: true
  },
  {
    id: 'sprunki-retake',
    title: 'Sprunki Retake',
    url: 'https://www.playfiddlebops.com/sprunki-retake/',
    image: '/sprunki-retake.png'
  },
  {
    id: 'sprunki-phase-5',
    title: 'Sprunki Phase 5',
    url: 'https://www.playfiddlebops.com/sprunki-phase-5/',
    image: '/sprunki-phase-5.png'
  },
  {
    id: 'sprunki-craft',
    title: 'Sprunki Craft',
    url: 'https://www.playfiddlebops.com/sprunki-craft/',
    image: '/sprunki-craft.png'
  }
];

// 工具函数
export function getGamesByCategory(category: 'popular' | 'new' | 'trending' | 'common'): GameItem[] {
  switch (category) {
    case 'popular':
      return popularGames;
    case 'new':
      return newGames;
    case 'trending':
      return trendingGames;
    case 'common':
      return commonGames;
    default:
      return [];
  }
}

export function getGameById(id: string): GameItem | undefined {
  const allGames = [...popularGames, ...newGames, ...trendingGames, ...commonGames];
  return allGames.find(game => game.id === id);
}
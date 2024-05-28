export const mockData = [
  {
    id: 1,
    icon: 'images/currencies/btc.svg',
    name: {
      full: 'Bitcoin',
      abbr: 'BTC',
    },
    price: '30204.89',
    dayChange: '6.11%',
    marketcap: '584764954723',
    volume: {
      inDollars: '17298113219',
      inCurrency: '575052',
    },
    circulatingSupply: '19343918',
  },
  {
    id: 2,
    icon: 'images/currencies/eth.svg',
    name: {
      full: 'Ethereum',
      abbr: 'ETH',
    },
    price: '1909',
    dayChange: '6.11%',
    marketcap: '229758074770',
    volume: {
      inDollars: '8646654553',
      inCurrency: '4610128',
    },
    circulatingSupply: '120457776',
  },
  {
    id: 3,
    icon: 'images/currencies/usdt.svg',
    name: {
      full: 'Tether',
      abbr: 'USDT',
    },
    price: '1.00',
    dayChange: '-0.03%',
    marketcap: '80507934308',
    volume: {
      inDollars: '28148940614',
      inCurrency: '28148940614',
    },
    circulatingSupply: '80436113656',
  },
  {
    id: 4,
    icon: 'images/currencies/bnb.svg',
    name: {
      full: 'BNB',
      abbr: 'BNB',
    },
    price: '328.84',
    dayChange: '5.24%',
    marketcap: '51906210367',
    volume: {
      inDollars: '735355723',
      inCurrency: '2299394',
    },
    circulatingSupply: '157886075',
  },
  {
    id: 5,
    icon: 'images/currencies/usdc.svg',
    name: {
      full: 'USD Coin',
      abbr: 'USDC',
    },
    price: '0.9998',
    dayChange: '0.01%',
    marketcap: '32329276063',
    volume: {
      inDollars: '3866780259',
      inCurrency: '3862689444',
    },
    circulatingSupply: '32397426464',
  },
  {
    id: 6,
    icon: 'images/currencies/xrp.svg',
    name: {
      full: 'XRP',
      abbr: 'XRP',
    },
    price: '0.5182',
    dayChange: '-2.64%',
    marketcap: '26797551801',
    volume: {
      inDollars: '1133699328',
      inCurrency: '2230287524',
    },
    circulatingSupply: '51688470797',
  },
  {
    id: 7,
    icon: 'images/currencies/ada.svg',
    name: {
      full: 'Cardano',
      abbr: 'ADA',
    },
    price: '0.404',
    dayChange: '-3.93%',
    marketcap: '14040353423',
    volume: {
      inDollars: '427603089',
      inCurrency: '1064601126',
    },
    circulatingSupply: '34766054176',
  },
  {
    id: 8,
    icon: 'images/currencies/doge.svg',
    name: {
      full: 'Dogecoin',
      abbr: 'DOGE',
    },
    price: '0.08461',
    dayChange: '3.66%',
    marketcap: '11782412080',
    volume: {
      inDollars: '525801478',
      inCurrency: '6380774114',
    },
    circulatingSupply: '138904276384',
  },
  {
    id: 9,
    icon: 'images/currencies/matic.svg',
    name: {
      full: 'Polygon',
      abbr: 'MATIC',
    },
    price: '1.12',
    dayChange: '-12.63%',
    marketcap: '10331387162',
    volume: {
      inDollars: '264307194',
      inCurrency: '241164046',
    },
    circulatingSupply: '9219469069',
  },
  {
    id: 10,
    icon: 'images/currencies/Solana.svg',
    name: {
      full: 'Solana',
      abbr: 'SOL',
    },
    price: '23.32',
    dayChange: '-0.93%',
    marketcap: '9236956530',
    volume: {
      inDollars: '120049839',
      inCurrency: '50505486',
    },
    circulatingSupply: '391643040',
  },
]

export type MockDataObjectType = {
  id: number
  icon: string
  name: {
    full: string
    abbr: string
  }
  price: string
  dayChange: string
  marketcap: string
  volume: {
    inDollars: string
    inCurrency: string
  }
  circulatingSupply: string
}

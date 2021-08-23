// 便當店
export interface Company  {
  id: number,
  name: string,
  address: string,
  minOrderNum: number, // 最少免運訂購數量
  orderBefore: string, // 幾點前需要下訂 ex: 10:30PM
  restDay: string[], // 休息日, 先用字串陣列再看有沒有比較好的表達方式
  active: boolean, // 是不是今天所發起要訂的便當
  menu: Bento[],
  order?: Order, //訂單應該不用紀錄, 隔天下單的就重新塞
}

export interface Bento {
  id: number,
  name: string, // 排骨飯
  price: number,
  active: boolean,
}

// 本公司員工
export interface User {
  googleId: string, 
  nogleId?: string, // 看有無需要
  email?: string,
  displayName?: string,
  walletAddress?: string, // 錢包地址
  acceptPayMethod?: PayMethod[], // 預設 cash, 當發起者的時候, 可以接受別人用啥付款
  linePayId?: string,
}

// 今天要下訂的內容
export interface Order {
  orderDate: string,
  companyId: number, // 便當店id
  activeUserId?: number, // 發起人的id
  list: WhoOrderWhat[],
}

// 付款方式
enum PayMethod {
  Cash,
  LinePay,
  Wallet, // 數位貨幣
  Other, // 其他支付方式
}

// 誰訂了什麼
export interface WhoOrderWhat {
  userId: number,
  nickName: string,
  bentoId: number,
  bentoName: string,
  paid: boolean,
  payMethod?: PayMethod,
  gotThis: boolean, // 是否已經拿到便當, 用來做給發起者檢查打勾用
}

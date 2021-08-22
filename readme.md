# Din-Ben-Ton 2.0 Draft 

## APIs

### 管理

admin打算都用POST MAN操作, 有機會再做介面

上傳/修改 廠商資料 POST/PATCH /admin/comapny

上傳/修改 菜單/便當資料 POST/PATCH /admin/comapny/:id/menu
- 原則上上傳整個菜單, 可以不刪便當, 改active就可

取得目前使用者群資料 GET /admin/users

新增/更新使用者資料 POST/PATCH /user/:id

### 使用

登入 POST /login

新增使用者資料 POST /user

登出 POST /logout

列廠商清單 GET /company

點擊進入廠商菜單列表 GET/company/:id/menu

發起今天要訂的便當廠商 PATCH /company/:id/activity

使用者選擇要訂的便當(下訂)

使用者選擇要訂的便當的付款方式  POST /order/:userId
 - TODO: ine pay 要怎麼處理的細節

訂單截止 - 顯示成功或失敗(不到人數免運)

目前所有訂單列表check list GET /order





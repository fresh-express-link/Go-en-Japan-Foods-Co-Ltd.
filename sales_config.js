// sales_config.js - 銷售人員通訊錄

const salesTeam = {
    "A": {
        name: "志哥",
        phone: "63771688"
    },
    "B": {
        name: "博士",
        phone: "63778262"
    },
    "C": {
        name: "嫦姐",
        phone: "98233606"
    },
    "D": {
        name: "David",
        phone: "97944983"
    },
    "E": {
        name: "二佬",
        phone: "51880888"
    },
    "G": { name: "昌少", phone: "63371380" },
    
    // 👇 新增 F (同事: 達)
    "F": {
        name: "宏達批發",  // 客戶看到的顯示名稱 (隱藏真名)
        phone: "91443882"  // 達的電話，訂單會發到這裡
    }
};

// 預設銷售 (如果網址沒帶代號，就用這個)
const defaultSales = "A";

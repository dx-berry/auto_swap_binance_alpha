//startRun
function startRun(){
   
    //打开手机App
   launchApp('币安');


   //等待3秒
   sleep(3000);
   
   
   //找到“行情”
   className("android.view.ViewGroup").id("2131436066").findOne().click();

   //等待1.5秒 
   sleep(1500);


    //随便点击一个去交易
   var target = className("android.view.ViewGroup").depth(17).findOne().click();



   //等待1.5秒
   sleep(1500);


   //点击“交易”
   var target = className("android.widget.Button").id("2131428564").findOne().click();



//    //选择usdt
//    className("android.widget.Button").id("2131447711").findOne().click();
//    sleep(1500);

//    // 1. 找到列表容器（可能是 ListView/RecyclerView/ViewGroup）
// let list = className("androidx.recyclerview.widget.RecyclerView").findOne(); // 或 RecyclerView

// // 2. 获取所有子项
// let items = list.children(); // 返回子控件数组

// // 3. 检查子项数量，并点击第2个（索引从0开始）
// if (items.length >= 1) {
//     let targetItem = items[0]; // 第1个子项
//     targetItem.click(); // 直接点击
//     // 如果 click() 无效，改用坐标点击：
//     // let bounds = targetItem.bounds();
//     // click(bounds.centerX(), bounds.centerY());
// } else {
//     console.error("列表子项不足2个");
// }



   //等待1.5秒
   sleep(1500);

   //循环去swap
   for (let i = 0; i < 100; i++) {

    //点击 “最大”
   var target = className("android.widget.TextView").id("2131446706").findOne().click();
   

   sleep(1500);


   //点击“下单”
  var target  = className("android.widget.Button").id("btn_trade").findOne().click();
   
   
   sleep(1500);


   //点击“确认”
   var target = className("android.widget.Button").id("2131440599").findOne().click();
  
   
   
   sleep(1500);

   //切换按钮
   var target = className("android.widget.ImageView").id("2131434196").findOne().click();

   
   sleep(5000);
}
   
}


auto.waitFor();

startRun();

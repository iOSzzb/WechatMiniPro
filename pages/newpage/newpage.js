//newpage.js
Page({
    data: {
        text: "this is data",
        zero: "0",
        a:2,
        b:3
    },
    onLoad: function(){
        console.log("new page on load");
    },
    viewTap: function(){
        console.log("view tap");
        this.setData({
            text: "chang data"
        })
    }
})
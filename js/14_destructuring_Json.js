let news =[
    {
        "title" : "sbs",
        "imgurl": "http://static.naver.net/sbs",
        "newslist":[
            "뉴스1",
            "뉴스2",
            "뉴스3",
            "뉴스4"
        ]
    },
    {
        "title" : "mbc",
        "imgurl": "http://static.naver.net/mbc",
        "newslist":[
            "뉴스1",
            "뉴스2",
            "뉴스3",
            "뉴스4"
        ]
    }
]


let [,mbc] =news;
let {title, imgurl} = mbc;
console.log(title, imgurl);

//중첩해서 간단하게 접근
let [, {title,imgurl}] =news;
console.log(title, imgurl);


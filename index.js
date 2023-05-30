let product = [
    {
        id: 1,
        Image: "https://i.postimg.cc/xd92CRSt/it-ends-with-us.webp",
        desc: " The novel tells the story of Lily Bloom and her doomed romance with Ryle Kincaid and traces her past history growing up in an abusive home, her fall into an abusive relationship, and her escape from that relationship.",
        price: "R129.95",
    },

    {
        id: 2,
        Image: "https://i.postimg.cc/KcMHPKzg/it-starts-with-you.jpg",
        desc: "Lily deals with her chaotic life as a floral shop owner, single mom and co-parent with her ex-husband — who can't seem to grasp the fact that they will never get back together. But when Lily's first love, Atlas, turns up in her life, she realizes that the chaos has only just begun",
        price: "R145,00",
    },

    {

        Image: "https://i.postimg.cc/hPrYPqpQ/reminders-of-him.jpg",
        desc: "Reminders of Him follows Kenna Rowan, a young mother who has recently been released from prison after a five-year stint inside for making a terrible error of judgement.",
        price: "R239.45",
    },

    {
        Image: "https://i.postimg.cc/L54zxGfG/losing-hope-new-2.webp",
        desc: "Holder reveals the way in which the events of Sky's youth affected him and his family, leading him to seek his own redemption in the act of saving her.",
        price: "R189.99",
    },

    {
        Image: "https://i.postimg.cc/8C1PfDS8/regretting-you.jpg",
        desc: "regretting you",
        price: "xxx",
    },

    {
        Image: "https://i.postimg.cc/XYNYp4WR/November-9.webp",
        desc: "november 9",
        price: "xxx",
    },

    {
        Image: "https://i.postimg.cc/bwYC5V6n/all-your-perfects.jpg",
        desc: "all your perfect",
        price: "xxx",
    },

    {
        Image: "https://i.postimg.cc/bYVwtBZv/Confess.jpg",
        desc: "Confess",
        price: "xxx",
    },

    {
        Image: "https://i.postimg.cc/Hk2xYn4K/ugly-love.webp",
        desc: "ugly love",
        price: "xxx",
    }
];


let showProducts = document.querySelector(".shopping");
product.forEach((data) => {
showProducts.innerHTML +=`
<div class="col-12 col-md-3 col-sm-6"> 
<div class="card bla" style="width: 250px; height: 500px">
<img src="${data.Image}" class="card-image-top" style="height: 300px; width: 100%">
<div class="card-body">
<p class= "text-black">${data.desc} @<span>${data.price}</span></p>
</div>
</div>
</div>
    `
});

console.log(showProducts);
const data = [
    {
        name: 'coffee-bean',
        order: true,
        items: ['americano','milk','green-tea']
    },
    {
        name: 'starbucks',
        order: false,
    }
]

// Tagged template literals
function fn(tags,name,items){
    console.log(tags);
    if(typeof items === "undefined"){
        items = "주문가능한 상품이 없습니다";
    }
    return (tags[0] + name + tags[1] + items + tags[2]);
}

const template = fn`<div>welcome ${data[1].name} !!</div>
    <h2>주문가능항목</h2><div>${data[1].items}</div>`;
    //"<div>welcome "," !!</div><h2>주문가능항목</h2><div></div>","</div>"

console.log(template); 
// "<div>welcome starbucks !!</div><h2>주문가능항목</h2><div>주문가능한 상품이 없습니다</div>"

data.forEach((v) => {
    let template = fn`<div>welcome ${v.name} !!</div>
    <h2>주문가능항목</h2><div>${v.items}</div>`;
    console.log(template);
});
//// "<div>welcome coffee-bean !!</div><h2>주문가능항목</h2><div>americano,milk,green-tea</div>"
// "<div>welcome starbucks !!</div><h2>주문가능항목</h2><div>주문가능한 상품이 없습니다</div>"
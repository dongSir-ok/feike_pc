;(function(){
    class GetDate{
        constructor(){
            this.new2Obj = document.querySelector("#new_2");
            this.getDate();
        }
        getDate(){
            ajax({
                url:"http://localhost/feike_pc/json/new_goods/new_goods_r.json",
                success:(res)=>{
                    this.res = JSON.parse(res);
                    this.display();
                }
            })
        }
        display(){
            var str = "";
            for(var i=0;i<this.res.length;i++){
                str +=`<li class="items-1">
                            <img src="${this.res[i].url}"/>
                            <div class="msg">
                                <p class="title">${this.res[i].name}
                                    <span class="cal-price">${this.res[i].price}</span>
                                    元
                                </p>
                                <p class="desc" style="text-align:center;">
                                        ${this.res[i].desc}
                                </p>
                            </div>
                        </li>`;
            }
            this.new2Obj.innerHTML = str;
        }
    }
    new GetDate();
})()
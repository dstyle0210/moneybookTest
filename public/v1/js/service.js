function getAuthUser(uid){
    if(uid=="0MwBoXosqATbp9Dlu7e7KTNdaeJ3"){
        return "마봉아빠";
    }else if(uid=="zZn2t36Bu7Zm4fBMcK9N3yCPKBE3"){
        return "마봉엄마";
    };
    return null;
};
function getMonthDate(datetime){
    var dateObj = new Date(datetime);
    var month = ((dateObj.getMonth()+1) < 9) ? "0"+(dateObj.getMonth()+1) : ""+(dateObj.getMonth()+1);
    var date = (dateObj.getDate()<9) ? "0"+dateObj.getDate() : ""+dateObj.getDate();
    return month+"."+date;
};
function getReceiptsUrl(idx){
    var dateObj = new Date();
    var month = ((dateObj.getMonth()+1) < 9) ? "0"+(dateObj.getMonth()+1) : ""+(dateObj.getMonth()+1);
    var dateMonth = dateObj.getFullYear()+month+"";
    return "/real/"+dateMonth+((idx || idx==0)?"/"+idx+"":"");
};
function getSmsDateTime(text){ 
    const num = "[0-9]{2}";
    const date = new Date();
    try{
        const dateText = text.match( (new RegExp(num+"/"+num,"gi")) )[0];
        const timeText = text.match( (new RegExp(num+":"+num,"gi")) )[0];
        const dateTimeText = dateText+" "+timeText;
        const tics = dateTimeText.match((new RegExp(num,"gi")));

        date.setMonth((tics[0]*1)-1);
        date.setDate((tics[1]*1));
        date.setHours((tics[2]*1));
        date.setMinutes((tics[3]*1));
    }catch(e){
        
    }finally{ 
        date.setSeconds(0);
        date.setHours( date.getHours() + 9 ); // ISO 시간규칙 적용
        return date.toISOString().split(":00.")[0];
    }
};
function getSmsMethod(text){
    if( (/9\*4\*/).test(text) ){
        return "국민봉올림";
    }else if( (/0\*0\*/).test(text) ){
        return "국민마올림";
    }else if( (/스마일카드/).test(text) ){
        return "현대스마일";
    }else{
        return "";
    };
}
function getSmsPrice(text){
    let price;
    try{
        price = text.match(/[0-9,]+원/gi)[0];
        return (price.replace(/,/gi,"").replace("원","")) * 1;
    }catch(e){
        return 0;
    };
};
function getSmsStore(text){
    const method = getSmsMethod(text);
    if(method=="국민봉올림"){
        let arr = text.split(/\n/);
        return arr[arr.length-2];
    }else if(method=="국민마올림"){
        let arr = text.split(/\n/);
        return arr[arr.length-1];
    }else if(method=="현대스마일"){
        return text.match(/(스마일페이).*/gi)[0];
    }else{
        return "";
    };
};
function getTagCode(tag){ 
    if(tag=="고정"){return "f"};
    if(tag=="필수"){return "r"};
    if(tag=="변동"){return "c"};
    if(tag=="기타"){return "o"};
    if(tag=="용돈"){return "b"};
};
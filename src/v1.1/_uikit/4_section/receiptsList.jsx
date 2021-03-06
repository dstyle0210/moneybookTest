const S_receiptsList = ({_receipts}) =>{
    let receipts,setReceiptsState;
    [receipts,setReceiptsState] = React.useState( {
        sort:"recent",
        list:_receipts
    }); // 상태 관리용 HOOK

    const updateReceipt = function(idx){
        location.href = "/v1.1/update/?idx="+idx;  
        return false;
    };
    const updateList = function(type){
        // setReceiptsState();
    };

    const receiptList = receipts.list.map(function(receipt,index){
        return (<li key={index}><a onClick={updateReceipt.bind(this,receipt.idx)}><M_receipt receipt={receipt}></M_receipt></a></li>);
    });
    return (<React.Fragment>
        {receiptList}
    </React.Fragment>);
};
const M_receipt = ({receipt}) => {
    return (
    <article className="m-receipt">
        <span className="a-date">{getMonthDate(receipt.datetime)}</span>
        <div className="-info">
            <span className="a-comment">{receipt.comment}</span>
            <span className="a-store">{receipt.store}</span>
            <span className="a-payment">{receipt.method}</span>
        </div>
        <div className="-price">
            <strong className="a-price">{(receipt.price*1).toLocaleString()}</strong>
            <label className={"a-tag -"+getTagCode(receipt.tag)}>{receipt.tag}</label>
        </div>
    </article>);
};
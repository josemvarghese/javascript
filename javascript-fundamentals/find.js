




var priceInfo = [

    {

        "id": "63342284aab3ad00108a7003",

        "price": 950,

        "topUp": 100

    },

    {

        "id": "63342284aab3ad00108a7004",

        "price": 770,

        "topUp": 100

    },

    {

        "id": "63342284aab3ad00108a7007",

        "price": 625,


    }

];




let itemConditionId = "63342284aab3ad00108a7007";

function bonusAmountValue(priceInfo, itemConditionId) {

    let x = priceInfo.find((topUpAmount) => {
        if (topUpAmount.id === itemConditionId) {
            console.log("here1")
            console.log("🚀 ~ file: find.js:54 ~ x ~ topUpAmount.topUp:", topUpAmount.topUp)
            return topUpAmount.topUp;
        }
    });
    return (x && x.topUp) ? x.topUp : 0;

}


let x = bonusAmountValue(priceInfo, itemConditionId);
console.log(x);





const sendBtnBlue = document.querySelector("#sendBlue");
const sendBtnOrange = document.querySelector("#sendOrange");
const sendText = document.querySelector("#text");
const chat = document.querySelector("#chat");

sendBtnBlue.addEventListener("click",()=>{
    addNewMessage(sendText,"message-blue")
})

sendBtnOrange.addEventListener("click",()=>{
    addNewMessage(sendText,"message-orange")
})

const addNewMessage = (sendText,format) =>{
    if(sendText.value.length>0) {
        if(chat.querySelectorAll("li").length>0) {
            const listOfMessages = chat.querySelectorAll("li");
            if (listOfMessages[listOfMessages.length - 1].classList.contains(format)) {
                listOfMessages[listOfMessages.length - 1].innerHTML += `<p>${sendText.value}</p>`;
                //alert((listOfMessages[listOfMessages.length - 1].offsetHeight));
                listOfMessages[listOfMessages.length - 1].style.height=listOfMessages[listOfMessages.length - 1].offsetHeight+10+"px";
                sendText.value = "";
            } else {
                chat.insertAdjacentHTML("beforeend",
                    `<container><li class="${format}"><i class="mes_dt"> ${getDateFormat()} </i> <p> ${sendText.value} </p></li>`
                );
                sendText.value = "";
            }
        }else{
        chat.insertAdjacentHTML("beforeend",
            `<container><li class="${format}"><i class="mes_dt"> ${getDateFormat()} </i> <p> ${sendText.value} </p></li>`);
        sendText.value = "";
        }
    }
}

const getDateFormat = ()=>{
    const d = new Date();
    const day = (''+d.getDate()).length===1 ? '0'+(d.getDate()) : ''+(d.getDate());
    const mon = (''+(d.getMonth()+1)).length===1 ? '0'+(d.getMonth()+1) : ''+(d.getMonth()+1);
    const year = ''+(d.getFullYear());
    return [day,mon,year].join("-");
}
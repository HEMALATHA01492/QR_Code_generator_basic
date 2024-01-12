let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value ;
    
        imgBox.classList.add("show-img");
    }
    else{
        document.querySelector(".empty").style.display = "block";
        document.querySelector("#qrText").style.border = "1px solid rgb(218, 59, 59)";
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
            document.querySelector(".empty").style.display = "none";
            document.querySelector("#qrText").style.border = "1px solid #494eea";

        },2000)
    }
    

}
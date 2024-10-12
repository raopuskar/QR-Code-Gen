let input_text = document.getElementById("input-text");
let qr_img = document.getElementById("qr-img");
let qr_box = document.getElementById("qr-box");

function qr_gen(){
    qr_img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input_text.value;   //Putting the img path plus the input value
    qr_box.classList.add("show-img");     //adding this class to the box for displaying the Qr-Code
}

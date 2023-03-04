function process() {
    console.log("Inside process()");
    const file = document.querySelector("#upload").files[0];
    console.log(file);

    if(!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function(event) {
        console.log(event);
        const imgElement = document.createElement("img");
        imgElement.src = event.target.result;
        console.log(event.target);
        document.querySelector("#input").src = event.target.result;

        imgElement.onload = function(e) {
            console.log(e);
            const canvas = document.createElement("canvas");
            const MAX_WIDTH = 300;
            const SCALE_SIZE = MAX_WIDTH/e.target.width;

            canvas.width = MAX_WIDTH;
            canvas.height = SCALE_SIZE * e.target.height;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);

            const srcEncoded = ctx.canvas.toDataURL(e.target, "image/jpg");
            console.log(srcEncoded);

            document.querySelector("#output").src = srcEncoded;


        }
    }

}
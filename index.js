$(document).ready(function(){
    $("#work img").click(function(){
        $("#projectLeft img").attr("src", this.src)
        info(this)
        $("#projectThumb img").click(function(){
            $("#projectLeft img").attr("src", this.src)
            $("html, body").stop().animate({scrollTop: $("nav").height()-($(this).scrollTop() / 2) + "px"}, 500, "swing");
            findHeight()
        });
    });
    //close animation
    $("#close h2").click(function(){
        $("#project").fadeOut(500);
        $("#work").animate({paddingTop: "0px"}, 1000);
    });
});

//scroll speed
// $(window).scroll(function () {
//     $('#project').css({
//         'top': $("nav").height()-($(this).scrollTop() / 2) + "px"
//     });
// });

//get info on what image clicked then set
function info(funkName){
    $("#projectThumb").empty()
    $("#projectType p").empty()
    $("#projectDescription p").empty()
    switch (funkName.id) {
        case "Carls_logo":
        $("#projectThumb img").attr("src", funkName.src)
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Calr's Jr. and Hardees.");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/thumb1/more/Carls_Jr_packaging.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/thumb1/more/carls_restaurant.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/thumb1/more/Carls_shirt.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/thumb1/more/Hardees_logo.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/thumb1/more/Hardees_packaging.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/thumb1/more/hardees_Rest_brand3.jpg"/></div>`);
        break;
        case "Red_Burrito":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Package design for Ben and Jerry's icecream containers.");
        break;
        case "EOC_family_3":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        break;
        case "SpiceIsland_Organic":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        $("#projectThumb").append(`<div class="thumbs"><img src="./images/thumb4/more/SpiceIslands_grinder.jpg"/></div>`);
        break;
        case "Weber_Grill":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        break;
        case "Ben_Jerrys":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        break;
        case "DG_yo_6oz_all7":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        $("#projectThumb").append(`<div class="thumbs"><img src="./images/thumb7/more/DG_shred_all_three_option2.jpg"/></div>`);
        break;
        case "Niman_Salami":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        $("#projectThumb").append(`<div class="thumbs"><img src="./images/thumb8/more/NR_fresh_meat.jpg"/></div>`);
        break;
        case "Mama_Sita":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        break;
        case "Moonshine_GroupShot_HR":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        break;
        case "FosterFarms_SS":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        break;
        case "LaSalsa_logo":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        $("#projectThumb").append(`<div class="thumbs"><img src="./images/thumb12/more/LaSalsa_restaurant.jpg"/></div>`);
        break;
        case "Tones_Vanilla_Extract":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        $("#projectThumb").append(`<div class="thumbs"><img src="./images/thumb13/more/Tones_Spices.jpg"/></div>`);
        break;
        case "Torani_small_Syrup":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/thumb14/more/Torani_giftbox.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/thumb14/more/Torani_Kids art.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/thumb14/more/Torani_Pure Flavor.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/thumb14/more/Torani_Smoothie64oz_all2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/thumb14/more/Torani_Syrups.jpg"/></div>`);
        break;
        case "Attune":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        break;
        case "Sunsweet_logo":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/thumb16/more/Sunsweet_packaging_1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/thumb16/more/Sunsweet_packaging_2.jpg"/></div>`);
        break;
        case "Citrona_new":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        break;
        case "Sauza_Margarita":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        break;
        case "Cacique_DrinkUp":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        break;
        case "Vessence":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Enter Text Here");
        break;
    }
    // wait for images to load before finding height
    $(function() {
        function imageLoaded() {
           counter--; 
           if( counter === 0 ) {
               findHeight()
           }
        }
        let images = $("img");
        let counter = images.length;
        images.each(function() {
            if( this.complete ) {
                imageLoaded.call( this );
            } else {
                $(this).one('load', imageLoaded);
            }
        });
    });
};

// find height after images load
function findHeight(){
    let project = $("#project").height();
    let nav = $("nav").height();
    let projectHeight = project + nav; 
    setHeight(projectHeight)
}

// set padding top of #work
function setHeight(projectHeight){
    let VH = $(window).height();
        if (projectHeight < VH){
            $("#work").animate({paddingTop: VH + "px"}, 1000);
        } else if (projectHeight > VH) {
            $("#work").animate({paddingTop: projectHeight + "px"}, 1000);
        };
    animate();
};

//animations
function animate(){
    $("html, body").stop().animate({scrollTop:0}, 500, "swing");
    $("#project").css("position", "absolute").fadeIn(1000).css("display", "flex");
}
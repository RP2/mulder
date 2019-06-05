$(document).ready(function(){
    $("#work img").click(function(){
        $("#projectLeft").css('background-image', 'url(' + this.src + ')');
        $("#close").fadeIn(200);
        info(this)
        $("#projectThumb img").click(function(){
            $("#projectLeft").css('background-image', 'url(' + this.src + ')');
            $("html, body").stop().animate({scrollTop: $("nav").height()-($(this).scrollTop() / 2) + "px"}, 500, "swing");
            findHeight()
        });
    });
    //close animation
    $("#close h2").click(function(){
        $("#project").fadeOut(500);
        $("#work").animate({marginTop: "0px"}, 1000);
        $("#close").fadeOut(200);
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
    $("#type").empty()
    $("#projectDescription p").empty()
    switch (funkName.id) {
        case "Carls_logo":
        $("#type").text("Identity Design");
        $("#projectDescription p").text("The current Carl's Jr. marketing compaign targeted to males, 'in your face,' sums up the brand appropriately. We took the brand's most famous equity icon, the smiling yellow star, and made it richer to reflect the brand's famouse food creations.");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb1/more/Carls_Jr_packaging.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb1/more/carls_restaurant.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb1/more/Carls_shirt.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb1/more/Hardees_logo.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb1/more/Hardees_packaging.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb1/more/hardees_Rest_brand3.jpg')">`)
        break;
        case "GreenBurrito":
        $("#type").text("Identity Design");
        $("#projectDescription p").text("A Hardee's and Carl's Jr. co-branded restaurant, Green Burrito & Red Burrito serve up quick and affordable Mexican food. We were tasked with creating a logo that not only compliments the Hardee's and Carl's Jr. brand, but one that speaks to the authentic heritage of the food and the California-sized menu.");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb2/more/Red_Burrito.jpg')">`);
        break;
        case "EOC_family_3":
        $("#type").text("Package Design");
        $("#projectDescription p").text("A delicious blend of premium 100% Arabica coffee at a medium roast. Outstandingly smooth, yet full-bodied with a complex finish. It may be “Original” but it’s certainly not boring. These were objectives given for this project. We use strong flavor differentials and appetite appeal, while communicating how the Keurig system works with its flowing liquid motions and swirls.");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb3/more/EOC_bfast_w_wrap3.jpg')">`);
        break;
        case "SpiceIsland_Organic":
        $("#type").text("Package Design");
        $("#projectDescription p").text("The Spice islands brand represents the idea of searching the world for the best and most unique spices. Now with a certified organic line, we created its package design to communicate this important message as well as reminding customers of the product's origin");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb4/more/SpiceIslands_grinder.jpg')">`)
        break;
        case "BellasBakeryChocChip":
        $("#type").text("Package Design");
        $("#projectDescription p").text("Bella has been selling her wildly successful cookies at fairs and farmers market with great success. When it was time mass produce her product and offer the product wholesale, Bella came to Mulder Design and requested a package that stayed true to her original objectives of wholesome fresh small batch cookies.");
        break;
        case "Ben_Jerrys":
        $("#type").text("Package Design");
        $("#projectDescription p").text("We were tasked with revitalizing Ben & Jerry's package design without alienating their dedicated ice cream fans. Therefore, we included the best parts of each flavor - premium ice cream with lots of inclusions - while remaining loyal to the brand's mission and famously exuberant personality.");
        break;
        case "DG_yo_6oz_all7":
        $("#type").text("Package Design");
        $("#projectDescription p").text("For decades, Darigold has been providing customers and consumers around the world with high quality, affordable nutrition. They introduced this new yogurt line to simplify ingredients, enhance nutrition, and extend product shelf life. We created improved packaging that communicated its heritage yet appeal to a new health conscious consumer with clean packaging where the ingredient is the hero.");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb7/more/DG_shred_all_three_option2.jpg')">`)
        break;
        case "Niman_Salami":
        $("#type").text("Package Design");
        $("#projectDescription p").text("Living up to their reputation, Niman Ranch launched a line of healthy beef and pork trays for the consumer market. We created a see-through style package design to promote the fresh product as well as a prominent, classic label. The design set a new standard for the brand's equity, as they're now a leader in the meat tray category.");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb8/more/NR_fresh_meat.jpg')">`);
        break;
        case "bloom3":
        $("#type").text("Package Design");
        $("#projectDescription p").text("BloomFresh is a result of over a hundred years of produce experience. Mulder Design was contracted to create a premium, healthy and inviting platform for potentially one hundred SKU line. We opted for a very similar design across all items for brand awareness and shelf recognition. We were able to do this as the vegetables and fruit are the differentiator between each other, not the label. BloomFresh sales have about doubled since the introduction of the new design.");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb9/more/bloom1.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb9/more/bloom2.jpg')">`);
        break;
        case "Moonshine_GroupShot_HR":
        $("#type").text("Package Design");
        $("#projectDescription p").text("Created from a distillery in Nevada, this brand of moonshine borrows infamous ingredients and is infused with deep flavors - and deep roots. With moonshining's past history with NASCAR, fast cars outran the law with abandon. This became the inspiration for the flavorful recipe: sour apple, apple pie, watermelon, and private reserve flavors which finish off its clear taste.");
        break;
        case "Signature_entrees":
        $("#type").text("Signature Entrees Package Design");
        $("#projectDescription p").text("Foster Farms features a high-quality line of seasoned chicken called Signature Entries. While staying true to the brand's equity for its package design, we also used gourmet-inspired photography to showcase the premium product. These elements speak to the consumer in the freshest way possible.");
        break;
        case "WO_IC_combo_compfinal":
        $("#type").text("Brand Design");
        $("#projectDescription p").text("Time-honored preparation and the freshest ingredients are hallmarks of Wild Oats Gelato. This assortment of Italian gelato is dense and creamy, handcrafted with premium ingredients for rich, vibrant flavors. We designed a package that was economical to produce yet has big appetite appeal and a sense of its Italian heritage while it's clear and bold colors makes shopping for your favorite flavor easy.");
        break;
        case "KF_LOGO_RGB_2019":
        $("#type").text("Branding & Packaging Design");
        $("#projectDescription p").text("The Kinderfeets product line encourages children to live an active, adventurous and responsible healthy lifestyle with these high quality wooden toys. The brand we created communicates this through its save and protective red shield that doubles als a heart. A symbol of a child playing and has a foot on the ground to reinforce the meaning of the brand name. With our help in brand guidance in just a few years Kinderfeets grew from a local brand to a global brand.");
        $("#projectDescription p").append("<a target='_blank' rel='noopener noreferrer' href='./images/thumb13/KF_Catalog_2019May16.pdf'> Kinderfeets pdf</a>")
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb13/more/KF_box3D_NEW2.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb13/more/Kinderboard_box3D_NEW_4C.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb13/more/Pram_box3D_4C.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb13/more/Toybox_box3D_4C.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb13/more/TT_box3D_NEW2.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb13/more/logo.gif')">`);
        break;
        case "Torani_small_Syrup":
        $("#type").text("Package Design");
        $("#projectDescription p").text("Toranai developed a line of small bottled syrups to extend its brand further than its competitors. We helped them design the package labels for the line, revitalizing the brand equity by intensifying its famous castle graphic.");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb14/more/Torani_giftbox.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb14/more/Torani_Kids art.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb14/more/Torani_Pure Flavor.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb14/more/Torani_Smoothie64oz_all2.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb14/more/Torani_Syrups.jpg')">`);
        break;
        case "Attune":
        $("#type").text("Package Design");
        $("#projectDescription p").text("Attune Bars combine natural ingredients and pro biotics into one delicious snack. Since the category is packaged with competitors, Attune Bars wanted to standout. So we designed the line's package label utilizing bright colors and natural illustrations to remind consumers of the bars' healthy benefits.");
        break;
        case "Sunsweet_logo":
        $("#type").text("Brand Design");
        $("#projectDescription p").text("Working with Sunsweet's iconic blue lettered logo, we updated it by curving the type, giving it a fresh and dynamic feel. Instead of using prunes for the package design, we suggested to illustrate plums and make them the hero of the product. It not only worked but also spurred a trend in the category.");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb16/more/Sunsweet_packaging_1.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb16/more/Sunsweet_packaging_2.jpg')">`);
        break;
        case "Citrona_new":
        $("#type").text("Package Design");
        $("#projectDescription p").text("We were tasked with positioning Stolichnaya;s new product, Citrona, into the malt-beverage world. The result is a clean expression of the rugged brand and also represents the lemon-lime flavor of the product.");
        break;
        case "Sauza_Margarita":
        $("#type").text("Package Design");
        $("#projectDescription p").text("Sauza approached us to help them enter the beverage mix category. Already positioned as a quality tequila brand, we helped them design a label for their new concept - a bottle of tequila and margarita mix, all in one. We stayed true to the brand's equity while also taking it to a new level from a design standpoint with the margarita mix product addition.");
        break;
        case "CAC_Yo_group":
        $("#type").text("Package Design");
        $("#projectDescription p").text("Targeting young adults and specifically the Latina market, Cacique enlisted us to help them design the package for their newly developed dairy based health beverage line. We chose bright tones and natural looking illustrations to remind consumers of the healthy benefits that the product line offers.");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb19/more/Cac_roundcheese_revised2.png')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb19/more/Rikitos_render2.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb19/more/Cacique_DrinkUp.jpg')">`);
        
        break;
        case "Vessence":
        $("#type").text("Identity & Brand Design");
        $("#projectDescription p").text("Vessence Medical developed a line of effervescing tablets to assist in ingredient absorption for the consumer market. We were tasked with creating a unique design for its cylinder package that highlighted each formula's unique benefit. the result was a fresh and clean look-and-feel, accentuating the product's healthful promise.");
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
            $("#work").animate({marginTop: VH + "px"}, 1000);
        } else if (projectHeight > VH) {
            $("#work").animate({marginTop: projectHeight + "px"}, 1000);
        };
    animate();
};

//animations
function animate(){
    $("html, body").stop().animate({scrollTop:0}, 500, "swing");
    $("#project").css("position", "absolute").fadeIn(1000).css("display", "flex");
}

$(window).scroll(function(){
    let projectHeight = $("#project").height()+ $("nav").height(); 
    if($(window).scrollTop() > 300){
        $("#scrollNav").fadeIn(200);
    } if($(window).scrollTop() < 300) {
        $("#scrollNav").fadeOut(100)
    }
    if ($(window).scrollTop() >= projectHeight){
        $("#close").fadeOut(200);
    } else if ($("#project").css("display") === "flex") {
        $("#close").fadeIn(200);
    }
    // if ($(window).scrollTop() >= $("#work").offset().top + $("#projectThumb").outerHeight()){
    //     $("#projectDesc").fadeOut();
    // } else {
    //     $("#projectDesc").fadeIn()
    // }
})

$(window).resize(function(){
    let projectHeight = $("#project").height(); 
    let VH = $(window).height();
    if (projectHeight > VH) {
        $("#work").stop().animate({marginTop: projectHeight + "px"}, 500);
    };
})
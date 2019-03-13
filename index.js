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
        $("#work").animate({paddingTop: "0px"}, 1000);
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
    $("#projectType p").empty()
    $("#projectDescription p").empty()
    switch (funkName.id) {
        case "Carls_logo":
        $("#projectType p").text("Identity Design");
        $("#projectDescription p").text("The current Carl's Jr. marketing compaign targeted to males, 'in your face,' sums up the brand appropriately. We took the brand's most famous equity icon, the smiling yellow star, and made it richer to reflect the brand's famouse food creations.");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb1/more/Carls_Jr_packaging.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb1/more/carls_restaurant.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb1/more/Carls_shirt.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb1/more/Hardees_logo.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb1/more/Hardees_packaging.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb1/more/hardees_Rest_brand3.jpg')">`)
        break;
        case "Red_Burrito":
        $("#projectType p").text("Identity Design");
        $("#projectDescription p").text("A Hardee's and Carl's Jr. co-branded restaurant, Red Burrito serves up a quick and affordable Mexican food. We were tasked with creating a logo that not only compliments the Hardee's and Carl's Jr. brand, but one that speaks to the authentic heritage of the food and the California-sized menu.");
        break;
        case "EOC_family_3":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Attune Bars combine natural ingredients and pro biotics into one delicious snack. Since the category is packaged with competitors, Attune Bars wanted to standout. So we designed the line's package label utilizing bright colors and natural illustrations to remind consumers of the bars' healthy benefits.");
        break;
        case "SpiceIsland_Organic":
        $("#projectType p").text("100% Organic Package Design");
        $("#projectDescription p").text("The Spice islands brand represents the idea of searching the world for the best and most unique spices. Now with a certified organic line, we created its package design to communicate this important message as well as reminding customers of the pleasures of far away places.");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb4/more/SpiceIslands_grinder.jpg')">`)
        break;
        case "Weber_Grill":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Weber wished for their product line to stand out in the crowded spice category .We helped them create a package design that would convey the simplicity of their product yet give them a strong shelf presence. It's exactly what happened and Weber moved up the ranks.");
        break;
        case "Ben_Jerrys":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("We were tasked with revitalizing Ben & Jerry's package design without alienating their dedicated ice cream fans. Therefore, we included the best parts of each flavor - premium ice cream with lots of inclusions - while remaining loyal to the brand's mission and famously exuberant personality.");
        break;
        case "DG_yo_6oz_all7":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Targeting adults and specifically the Latina market, Cacique enlisted us to help them design the package for their newly developed health beverage line, Drink Up! We chose bright tones and natural looking illustrations to remind consumers of the healthy benefits that the product line offers.");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb7/more/DG_shred_all_three_option2.jpg')">`)
        break;
        case "Niman_Salami":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Living up to their reputation, Niman Ranch launched a line of healthy beef and pork trays for the consumer market. We created a see-through style package design to promote the fresh product as well as a prominent, classic label. The design set a new standard for the brand's equity, as they're now a leader in the meat tray category.");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb8/more/NR_fresh_meat.jpg')">`)
        break;
        case "Mama_Sita":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Philipine cooking is famous for mixing sauces and experimentation. We used the native culture and tastes to inspire this successful label design, resulting in brand elevation and product domination on shelves worldwide.");
        break;
        case "Moonshine_GroupShot_HR":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Created from a distillery in Nevada, this brand of moonshine borrows infamous ingredients and is infused with deep flavors - and deep roots. With moonshining's past history with NASCAR, fast cars outran the law with abandon. This became the inspiration for the flavorful recipe: sour apple, apple pie, watermelon, and private reserve flavors which finish off its clear taste.");
        break;
        case "FosterFarms_SS":
        $("#projectType p").text("Savory Servings Package Design");
        $("#projectDescription p").text("Foster Farms features a high-quality line of seasoned fresh chicken called Savory Servings. While staying true to the brand's equity for its package design, we also used gourmet-inspired photography to showcase the premium product. These elements speak to the consumer in the freshest way possible.");
        break;
        case "LaSalsa_logo":
        $("#projectType p").text("Brand Design");
        $("#projectDescription p").text("La Salsa is famous for its authentic, fresh Mexican food. When you get your order, the food tastes as if it was made just for you. The brand design we created for them captures this exact inviting feeling as well as the restaurant's positioning, that being a lively, social, and flamboyant environment .They credit us with helping them increase their sales by 20% upon launch of the redesign.");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb12/more/LaSalsa_restaurant.jpg')">`)
        break;
        case "Tones_Vanilla_Extract":
        $("#projectType p").text("Vanilla Extract Package Design");
        $("#projectDescription p").text("The production of pure vanilla extract is not only an art but also a quest. Equatorial countries seek to develope their own extracts of this  worldly commodity, creating a competitive category. This face alone inspired us to use warm colors and create a unique design of a mariner's map on its label.");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb13/more/Tones_Spices.jpg')">`)
        break;
        case "Torani_small_Syrup":
        $("#projectType p").text("Small Bottle Syrups Package Design");
        $("#projectDescription p").text("Tornai developed a line of small bottled syrups to extend its brand further than its competitors. We helped them design the package labels for the line, revitalizing the brand equity by intensifying its famous castle graphic.");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb14/more/Torani_giftbox.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb14/more/Torani_Kids art.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb14/more/Torani_Pure Flavor.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb14/more/Torani_Smoothie64oz_all2.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb14/more/Torani_Syrups.jpg')">`);
        break;
        case "Attune":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Attune Bars combine natural ingredients and pro biotics into one delicious snack. Since the category is packaged with competitors, Attune Bars wanted to standout. So we designed the line's package label utilizing bright colors and natural illustrations to remind consumers of the bars' healthy benefits.");
        break;
        case "Sunsweet_logo":
        $("#projectType p").text("Brand Design");
        $("#projectDescription p").text("Working with Sunsweet's iconic blue lettered logo, we updated it by curving the type, giving it a fresh and dynamic feel. Instead of using prunes for the package design, we suggested to illustrate plums and make them the hero of the product. It not only worked but also spurred a trend in the category.");
        $("#projectThumb")
        .append(`<div class="thumbs" style="background-image:url('./images/thumb16/more/Sunsweet_packaging_1.jpg')">`)
        .append(`<div class="thumbs" style="background-image:url('./images/thumb16/more/Sunsweet_packaging_2.jpg')">`);
        break;
        case "Citrona_new":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("We were tasked with positioning Stolichnaya;s new product, Citrona, into the malt-beverage world. The result is a clean expression of the rugged brand and also represents the lemon-lime flavor of the product.");
        break;
        case "Sauza_Margarita":
        $("#projectType p").text("Package Design");
        $("#projectDescription p").text("Sauza approached us to help them enter the beverage mix category. Already positioned as a quality tequila brand, we helped them design a label for their new concept - a bottle of tequila and margarita mix, all in one. We stayed true to the brand's equity while also taking it to a new level from a design standpoint with the margarita mix product addition.");
        break;
        case "Cacique_DrinkUp":
        $("#projectType p").text("Drink Up! Package Design");
        $("#projectDescription p").text("Targeting adults and specifically the Latina market, Cacique enlisted us to help them design the package for their newly developed health beverage line, Drink Up! We chose bright tones and natural looking illustrations to remind consumers of the healthy benefits that the product line offers.");
        break;
        case "Vessence":
        $("#projectType p").text("Identity and Brand Design");
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
})

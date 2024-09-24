
// flexbox nav...
document.querySelector(".layout nav").style.minWidth = "0"

// gallery...
let opened = false
document.addEventListener("click", (event) => {
	if (!document.querySelector(".gallery .cont img").contains(event.target) && opened) {
		document.getElementById("image-full-view").style.visibility = "hidden"
        opened = false
	}
})
document.addEventListener("click", (event) => {
    if (event.target.matches(".gallery .cont img")) {
        let fullImage = document.getElementById("image-full-view")
        fullImage.style.visibility = "visible"
        fullImage.style.backgroundImage = `url(${event.target.src})`
        opened = true
    }
})
document.querySelectorAll(".gallery .cont img").forEach(element => {
    let bgImg = document.createElement("div");
    bgImg.classList.add("bgImg");
    bgImg.style.backgroundImage = `url(${element.src})`
    element.parentNode.insertBefore(bgImg, element)
});

const colors = ["orange", "rgb(71, 71, 71)", "rgb(39, 115, 150)", "rgb(232, 98, 9)"]

$(".hobby").each(function() {
    $(this).css("background-color", colors[Math.floor(Math.random() * colors.length)])
})

$("i").click(function() {
    if (!$(this).attr("onclick")) {
        const popUp = $("<div>")
            .addClass("notEstablished")
            .css({
                top: $(this).offset().top - 10,
                left: $(this).offset().left + 37
            })
            .text("Sorry. Not established yet.")
        $("body").append(popUp)
            

        setTimeout(function() {
            popUp.fadeOut(1000, function() {
                popUp.remove()
            })
        }, 1000)
    }
})

$("#visibility_setter").click(function() {
    if ($("#visibility_cog").css("left") != "0px") {
        $("#visibility_cog").css({
            "left": 0,
            "background-image": "url('images/sun.png')"
        })
        $("body").removeClass("darkMode").addClass("lightMode")
        $("p").css({
            "background-color": "rgba(0, 0, 0, 0)",
            "padding": "0"
        })
        $("h1, h2").css({
            "text-shadow": "0 0 0px rgb(238, 112, 255)",
            "background-color": "rgba(0, 0, 0, 0)",
            "padding": "0"
        })
    }
    else {
        $("#visibility_cog").css({
            "left": "34px",
            "background-image": "url('images/moon.png')"
        })
        $("body").removeClass("lightMode").addClass("darkMode")
        $("p").css({
            "background-color": "rgba(0, 0, 0, 0.5)",
            "padding": "15px"
        })
        $("h1, h2").css({
            "text-shadow": "0 0 10px rgb(238, 112, 255)",
            "background-color": "rgba(0, 0, 0, 0.5)",
            "padding": "3px 15px"
        })
    }
})


$('a[href^="#"]').on('click', function (e) {
    e.preventDefault(); // Prevent default scrolling behavior
    const targetId = $(this).attr('href').substring(1);
    const targetElement = $('#' + targetId);

    // Add highlight class
    targetElement.addClass('highlight');

    // Remove highlight after 1 second
    setTimeout(() => {
        targetElement.removeClass('highlight');
    }, 1000);

    // Scroll the target element into view centered
    targetElement[0].scrollIntoView({
        behavior: 'smooth', // Smooth scroll effect
        block: 'center'     // Scroll to the center of the screen
    });
});

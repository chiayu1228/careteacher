$(function () {
    $('.ui.dropdown').dropdown();
    $('.ui.radio.checkbox').checkbox();

    document.getElementById("today").valueAsDate = new Date();

    // // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    // let vh = window.innerHeight * 0.01;
    // // Then we set the value in the --vh custom property to the root of the document
    // document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//+ SVG
$(function () {
    // svg change color on hover
    $('.icon img').each(function () {
        var $img = $(this);
        var imgURL = $img.attr('src');

        $.get(imgURL, function (data) {

            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');


            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });
});
//- SVG

//+ Photo Modal
$(function () {
    $(".photo img").on("click", function (e) {

        var galleryModal = $(".galleryModal");
        var backView = $(".backView");

        galleryModal.show();
        $("body").css("overflow", "hidden");

        // var index = this.getAttribute('data-imgno');

        var swiper = new Swiper(".swiper-container", {
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },

            // initialSlide: index + 1,
            // on: {
            //     init: function () {
            //         this.slideTo(index, 0, false);
            //     }
            // }
        });

        backView.on("click", function (e) {
            galleryModal.hide();
            $("body").css("overflow", "auto");
        });
    });
});
//- Photo Modal

//+ Add Modal
$(function () {
    var add1 = $("i.plus");
    var addModal = $(".addModal");
    var cancel = $(".addModal button.cancel");

    add1.on("click", function (e) {
        addModal.show();
        $("body").css("overflow", "hidden");

        cancel.on("click", function (e) {
            addModal.hide();
            $("body").css("overflow", "auto");
        });
    });
});
//- Add Modal

//+ Edit Modal
$(function () {
    var edit1 = $("i.pencil.alternate");
    var editModal = $(".editModal");
    var cancel = $(".editModal button.cancel");

    edit1.on("click", function (e) {
        editModal.show();
        $("body").css("overflow", "hidden");

        cancel.on("click", function (e) {
            editModal.hide();
            $("body").css("overflow", "auto");
        });
    });
});
//- Edit Modal

//+ Delete Modal
$(function () {
    var delete1 = $("i.trash");
    var delete2 = $("button.delete");
    var deleteModal = $(".deleteModal");
    var cancel = $(".deleteModal button.cancel");

    delete1.on("click", function (e) {
        deleteModal.show();
        $("body").css("overflow", "hidden");

        cancel.on("click", function (e) {
            deleteModal.hide();
            $("body").css("overflow", "auto");
        });
    });

    delete2.on("click", function (e) {
        deleteModal.show();
        $("body").css("overflow", "hidden");

        cancel.on("click", function (e) {
            deleteModal.hide();
            $("body").css("overflow", "auto");
        });
    });
});
//- Delete Modal
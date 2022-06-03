/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function renderJson(input) {
    var options = {
        collapsed: $('#collapsed').is(':checked'),
        rootCollapsable: $('#root-collapsable').is(':checked'),
        withQuotes: $('#with-quotes').is(':checked'),
        withLinks: $('#with-links').is(':checked')
    };
    $('#json-renderer').jsonViewer(input, options);
    $('p.options input[type=checkbox]').click(renderJson);
}

// $(function () {
   

//     // Generate on option change
//     $('p.options input[type=checkbox]').click(renderJson);

//     // Display JSON sample on page load
//     renderJson();
// });


$("#classifyImage").submit(function (e) {
    e.preventDefault();
    var image_url = $("#pasteImageUrlHere").val()
    var form = new FormData();
    form.append("image_url", image_url);
    form.append("type", "all");
    
    var settings = {
      "url": "https://glcog.centralus.cloudapp.azure.com/meme/recognize",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "x-api-key": "91b9953e-bc21-49bb-9981-2385df149057"
      },
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      renderJson(JSON.parse(response))
    });
});




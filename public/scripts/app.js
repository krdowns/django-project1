console.log("Sanity Check: JS is working!");
var $restaurantList;
var allrestaurant = [];
var rootUrl = "/"
$(document).ready(function () {

// GET ALL 
    $.ajax({
        method: 'GET',
        url: rootUrl + 'restaurant',
        success: handleSuccess,
        error: handleError
    });

// RETRIEVE SUCCESS
    function handleSuccess(json) {
        var restaurants = json

        restaurants.forEach(restaurant => {
            $('#restaurant').append(`
                <div class="col s12 m6 l4 left">
                    <div class="card">
                        <div class="card-image">
                            <img src=${restaurant.image} class="responsive-image"">
                            <span class="card-title" style="height:75px; width: 100%;"><h6>${restaurant.name}</h6></span>
                        </div>
                        <article class="card-content">
                            <section class="card-head">
                                <h6>${restaurant.type}</h6>
                            </section>
                                <div class="star-container">
                                    <span id="star1" class="${restaurant._id} fa fa-star unchecked"></span>
                                    <span id="star2" class="${restaurant._id} fa fa-star unchecked"></span>
                                    <span id="star3" class="${restaurant._id} fa fa-star unchecked"></span>
                                    <span id="star4" class="${restaurant._id} fa fa-star unchecked"></span>
                                    <span id="star5" class="${restaurant._id} fa fa-star unchecked"></span>
                                </div>
                        </article>
                        <div class="card-action" style="height:6em;">
                        <a href="${restaurant.website}"><i id="${restaurant._id}" class="material-icons right delete-icon">close</i>${restaurant.name}</a><br>                        
                        </div>
                    </div>
                </div>`);
                let stars = $(`.${restaurant._id}`)
                let count = 0
                stars.each( function(star){
                    
                    if (count >= restaurant.rating)
                        return false;

                    $(this).removeClass('unchecked').addClass('checked')
                    count++
                });
        });
    }

// RETRIEVE ERROR
    function handleError(e) {
        console.log('error', e);
        $('#restaurantTarget').text('Failed to load.');
    }

// CREATE NEW RECOMMENDATION 
    $('form').on('submit', function (e) {
        e.preventDefault();

        let recommend = {
            name: $('#restaurant-name').val(),
            type: $('#type').val(),
            rating: $('#rating').val(),
            image: $('#image').val(),
            website: $('#website').val()
        };

        if (recommend.rating > 5 || recommend.rating < 1) {
            alert("Please rate on scale of 1-5");
            return;
        }

    
        $.ajax({
            method: 'POST',
            url: rootUrl + 'restaurant',
            data: recommend,
            success: handleSuccess,
            error: handleError
        });

// CREATE SUCCESS
        function handleSuccess(json) {
            var restaurant = json

            console.log(restaurant.image);
            $('#restaurant').append(`
            <div class="col s12 m6 l4 left">
                    <div class="card">
                        <div class="card-image">
                            <img src=${restaurant.image} class="responsive-image">
                            <span class="card-title" style="height:75px; width: 100%;"><h6>${restaurant.name}</h6></span>
                        </div>
                        <article class="card-content">
                            <section class="card-head">
                                <h6>${restaurant.type}</h6>
                            </section>
                                <div class="star-container">
                                    <span id="star1" class="${restaurant._id} fa fa-star unchecked"></span>
                                    <span id="star2" class="${restaurant._id} fa fa-star unchecked"></span>
                                    <span id="star3" class="${restaurant._id} fa fa-star unchecked"></span>
                                    <span id="star4" class="${restaurant._id} fa fa-star unchecked"></span>
                                    <span id="star5" class="${restaurant._id} fa fa-star unchecked"></span>
                                </div>            
                        </article>
                        <div class="card-action" style="height:6em;">
                        <a href="${restaurant.website}"><i id="${restaurant._id}" class="material-icons right delete-icon">close</i>${restaurant.name}</a><br>                        
                        </div>
                    </div>
                </div>`);
                let stars = $(`.${restaurant._id}`)
                let count = 0
                stars.each( function(star){
                    
                    if (count >= restaurant.rating)
                        return false;

                    $(this).removeClass('unchecked').addClass('checked')
                    count++
                });
        }

// CREATE ERROR
        function handleError(e) {
            console.log('error', e);
            $('#restaurantTarget').text('Failed to load.');
        }
    })

// UPDATE SUCCESS 
    $('#restaurant').on('click','#star1', function (e){
        e.preventDefault();
        var list = $(this).attr('class').split(" ");
        console.log(list);
        let id = list[0];
        $.ajax({
                    method:'PUT',
                    url: `${rootUrl}restaurant/${id}`,
                    data: {"rating":1},
                    success: updatedRatingSuccess,
                    error: handleError,
                })
                
    });

    $('#restaurant').on('click','#star2', function (e){
        e.preventDefault();
        var list = $(this).attr('class').split(" ");
        console.log(list);
        let id = list[0];
        $.ajax({
                    method:'PUT',
                    url: `${rootUrl}restaurant/${id}`,
                    data: {"rating":2},
                    success: updatedRatingSuccess,
                    error: handleError,
                })

                
    });

    $('#restaurant').on('click','#star3', function (e){
        e.preventDefault();
        var list = $(this).attr('class').split(" ");
        console.log(list);
        let id = list[0];
        $.ajax({
                    method:'PUT',
                    url: `${rootUrl}restaurant/${id}`,
                    data: {"rating":3},
                    success: updatedRatingSuccess,
                    error: handleError,
                })
    });

    $('#restaurant').on('click','#star4', function (e){
        e.preventDefault();
        var list = $(this).attr('class').split(" ");
        console.log(list);
        let id = list[0];
        $.ajax({
                    method:'PUT',
                    url: `${rootUrl}restaurant/${id}`,
                    data: {"rating":4},
                    success: updatedRatingSuccess,
                    error: handleError,
                })
    });

    $('#restaurant').on('click','#star5', function (e){
        e.preventDefault();
        var list = $(this).attr('class').split(" ");
        console.log(list);
        let id = list[0];
        $.ajax({
                    method:'PUT',
                    url: `${rootUrl}restaurant/${id}`,
                    data: {"rating":5},
                    success: updatedRatingSuccess,
                    error: handleError,
                })
    });
    function updatedRatingSuccess (json) {
        var restaurant = json;
        console.log (restaurant);
        window.location.reload();
    };

    // UPDATE ERROR
        function handleError(e) {
            console.log('error', e);
            $('#restaurantTarget').text('Failed to load.');
        }

   
    // DELETE
    $('#restaurant').on('click', '.delete-icon', function () {

        var id = $(this).attr('id');
        console.log(id);
        $.ajax({
            method: 'DELETE',
            url: `${rootUrl}restaurant/${id}`,
            success: deleteSuccess,
            error: handleError
        });
    });

    function deleteSuccess(json) {
        window.location.reload();
        console.log(json);
    };
});
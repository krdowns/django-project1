# Project One [Foods-To-Do App]
#### This project is being developed to fulfill the requirement to graduate the WDI course at General Assembly (SF). The project is an assignment to be be done in a group that has Bijaya, Christina and Kenny as members.

### Technologies Requirements:
* Express API - both HTML and JSON endpoints
* Integrating Google Sign-In into web app (Federated login concept)
* RESTful Routes - CRUD routes using the REST convention
* AJAX - fetch JSON data from the backend
* jQuery - render data on the client-side
* Template strings
* MongoDB - with at least two models 
* Git 50+ commits 
* Professional-looking code
* CSS framework to make front-end snazzy
* Heroku - deployed
* A README.md 

### Project Idea: Ability to GET, CREATE, and SAVE a food recommendations list to a databease. As well as update it's rating through clickable stars.

Food Inspired Color Palette:
* #BC0402, #FF6E69, #ECBB5C, #D4CAB1, #2A222D
<img src=https://github.com/ChristinaGASF/Project_1/blob/master/public/images/Color%2BPalette%2BParfait.jpg>

### BONUS:
### *Front-End Data Validation
### *Log in using Google account. 
Here is how it works:
<blockquote>
                 The OAuth 2.0 Authorization Framework

Abstract

   The OAuth 2.0 authorization framework enables a third-party
   application to obtain limited access to an HTTP service, either on
   behalf of a resource owner by orchestrating an approval interaction
   between the resource owner and the HTTP service, or by allowing the
   third-party application to obtain access on its own behalf.  This
   specification replaces and obsoletes the OAuth 1.0 protocol described
   in RFC 5849.
</blockquote>

Once signed in the user can navigate to the profile page and other contents.

Authors have tried strictly to stay within the manifest that school provided that includes responsiveness of all the pages.

Instructors Isha Arora and Dalton Hart both played role helping the authors create this project,especially towards writing the code in modules and using git commands.

* Part of google OAuth2 sign in method:

```
    <script>
        function onSignIn(googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        }
        function signOut() {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');
            });
        }
    </script>
```

### Some interesting clips of code:

* Part of CRUD functionality: STARS + UPDATE
```
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
```
### Some fun CSS code:
```
.unchecked:hover ~ .unchecked {
    color: #ECBB5C;
    cursor: pointer;
}

.checked:hover ~ .checked {
    color: lightgray;
    cursor: pointer;
}
```

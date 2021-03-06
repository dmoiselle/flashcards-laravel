const cards = [
    {
        front: 'Is it possible to rename the views folder? If yes, how would one go about it without losing functionality?',
        back: 'Yes we can change/rename the views directory but for accessing the custom view path <br> one has to define in config/view.php file as follows:<br><br><code> "paths" => [ <br> &emsp; resource_path("Your_view_Directory_Name"),<br>        ],</code>'
    },
    {
        front: 'What is the routes/api.php file used for? ',
        back: 'routes/api. php file is used when you want to make a Restful API . It means that you are developing the front end of your project with something else(for example: angular/react) and you want to develop your back end using Laravel. In that case your all routes will go in routes/api'
    },
    {
        front: 'How and why has the syntax for routes changed in Laravel 8?',
        back: "In previous releases of Laravel, the RouteServiceProvider class contained a $namespace property with a value of App\Http\Controllers. The value of this property was used to automatically prefix controller route declarations and controller route URL generation such as when calling the action helper. <br> In Laravel 8, this property is set to null by default. This allows your controller route declarations to use the standard PHP callable syntax, which provides better support for jumping to the controller class in many IDEs:<br><br><code>use App\Http\Controllers\UserController;<br>// Using PHP callable syntax...<br>Route::get('/users', [UserController::class, 'index']);<br><br>// Using string syntax...<br>Route::get('/users', 'App\Http\Controllers\UserController@index');</code>"
    },
    {
        front: 'Why don\'t we make the view at the command line? e.g. php artisan make:view Users',
        back: "This is because views are just a file and not a class."
    },
    {
        front: 'Can we check if the view is available or not in our code (to avoid typos in the Controller in the return view statement)? If so, how',
        back: "<code>if( view()->exists('view.name'))<br>{<br> &emsp; return view('view.name');<br>}</code>"
    },
    {
        front: 'Why is the @csrf token used?',
        back: "A CSRF token is a unique, secret, unpredictable value that is generated by the server-side application and transmitted to the client in such a way that it is included in a subsequent HTTP request made by the client. This token is used to verify that the authenticated user is the person actually making the requests to the application. It is generated using a pseudo-random number generator and is transmitted securely."
    },
    {
        front: 'During form validation, when errors are generated, is it possible to retain the correctly entered values? If so, how?',
        back: 'use "old()" helper in value attribute of input tag.<br>eg: <code>value= " {{old (\'name of field\') }} "</code>'
    },
    {
        front: 'next up - video number 14',
        back: 'Used to bind an event to a method of the Vue instance<br><br>v-on:click="submit"<br>shorthand syntax: @click="submit"'
    }
];

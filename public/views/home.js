// Filename: views/project/list
define([
  'jquery',
  'underscore',
  'backbone'
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  //'text!templates/project/list.html'
  ], function($, _, Backbone, caseTemplate){
    var HomeView = Backbone.View.extend({
      el: $('#main-content'),
      render: function(){
      // Using Underscore we can compile our template with data
      var data = {};

      var jumbotron = "<div class=\"jumbotron\"><h1>Welcome</h1><p>horror-writers.net is a website dedicated to the creators of horror fiction.</p><p>Our goal is to become the premier place on the internet for brand new and previously established writers to share their creations. We aim to create an inclusive community that fosters creativity.</p><p>We accept submissions of original content.. We also have a blog that is always looking for contributors. I would like to add that you do not need previous publishing history to submit either a story or an article to our blog. We prefer quality over quantity.</p><p>We  also do a running series of Book , Movie, Television and Music reviews.</p><p>With all of that being said, welcome to horror-writers.net, we hope you will join us in making our community a welcoming and fun place to be!</p></div>"
 

      var compiledTemplate = _.template(jumbotron + "<ul class=\"list-group \"> <li class=\"list-group-item\"> <span class=\"badge\">14</span> <h2 class=\"list-group-item-heading\">Review of Randy L. Shaffer’s The Stray Cats</h2> <div class=\"divider\"></div> <p>POSTED BY RENFIELD RASPUTIN ON JUL 2, 2014 IN BOOK REVIEWS, POSTS | COMMENTS OFF</p> <div class=\"divider\"></div> <p>Many ghost stories have been told about Renfield. His voice has been heard in the summer wind while his shadow has been seen through broken windows, moving across the peeling wallpaper of southern plantations long abandoned. Legend has it, his grave long lost many years ago, can be recognized by the pack of wolves that stand guard over it. Find Out More Ever wonder how the “crazy cat” lady got her start? Randy Shaffer has a theory and explores it deeper in his horror short story The Stray Cats. I won’t lie,...</p> <button type=\"submit\" class=\"btn btn-default\">Read more</button> </li> <li class=\"list-group-item\"> <span class=\"badge\">14</span> <h2 class=\"list-group-item-heading\">The Vagrants</h2> <div class=\"divider\"></div> <p>POSTED BY L.C FREMONT ON JUN 11, 2014 IN BOOK REVIEWS, POSTS | COMMENTS OFF</p> <div class=\"divider\"></div> <p> So, I know that I sound like a broken record, but I’m really not much of a horror fiction gal. It’s just too much for my sensitive, little imagination to take sometimes. Or worse than that, it isn’t scary or creepy at all. Basically, unless your name is Joe Hill, I am going to be a pretty hard sell when it comes to reading horror. Lucky me, though, Brian Moreland had a new book come out this month and he is on the same list as Mr. Hill. No joke. I have loved everything that Moreland has written and I...</p> <button type=\"submit\" class=\"btn btn-default\">Read more</button> </li> <li class=\"list-group-item\"> <span class=\"badge\">14</span> <h2 class=\"list-group-item-heading\">The Vagrants</h2> <div class=\"divider\"></div> <p>POSTED BY L.C FREMONT ON JUN 11, 2014 IN BOOK REVIEWS, POSTS | COMMENTS OFF</p> <div class=\"divider\"></div> <p> So, I know that I sound like a broken record, but I’m really not much of a horror fiction gal. It’s just too much for my sensitive, little imagination to take sometimes. Or worse than that, it isn’t scary or creepy at all. Basically, unless your name is Joe Hill, I am going to be a pretty hard sell when it comes to reading horror. Lucky me, though, Brian Moreland had a new book come out this month and he is on the same list as Mr. Hill. No joke. I have loved everything that Moreland has written and I...</p> <button type=\"submit\" class=\"btn btn-default\">Read more</button> </li> <li class=\"list-group-item\"> <span class=\"badge\">14</span> <h2 class=\"list-group-item-heading\">The Vagrants</h2> <div class=\"divider\"></div> <p>POSTED BY L.C FREMONT ON JUN 11, 2014 IN BOOK REVIEWS, POSTS | COMMENTS OFF</p> <div class=\"divider\"></div> <p> So, I know that I sound like a broken record, but I’m really not much of a horror fiction gal. It’s just too much for my sensitive, little imagination to take sometimes. Or worse than that, it isn’t scary or creepy at all. Basically, unless your name is Joe Hill, I am going to be a pretty hard sell when it comes to reading horror. Lucky me, though, Brian Moreland had a new book come out this month and he is on the same list as Mr. Hill. No joke. I have loved everything that Moreland has written and I...</p> <button type=\"submit\" class=\"btn btn-default\">Read more</button> </li> <li class=\"list-group-item\"> <span class=\"badge\">14</span> <h2 class=\"list-group-item-heading\">The Vagrants</h2> <div class=\"divider\"></div> <p>POSTED BY L.C FREMONT ON JUN 11, 2014 IN BOOK REVIEWS, POSTS | COMMENTS OFF</p> <div class=\"divider\"></div> <p> So, I know that I sound like a broken record, but I’m really not much of a horror fiction gal. It’s just too much for my sensitive, little imagination to take sometimes. Or worse than that, it isn’t scary or creepy at all. Basically, unless your name is Joe Hill, I am going to be a pretty hard sell when it comes to reading horror. Lucky me, though, Brian Moreland had a new book come out this month and he is on the same list as Mr. Hill. No joke. I have loved everything that Moreland has written and I...</p> <button type=\"submit\" class=\"btn btn-default\">Read more</button> </li> </ul>", data );
     

      this.$el.html( compiledTemplate );
    }
  });
  // Our module now returns our view
  return HomeView;
});
/*

<div class=\"jumbotron\">
<h1>Welcome</h1>
<p>horror-writers.net is a website dedicated to the creators of horror fiction.</p>
<p>Our goal is to become the premier place on the internet for brand new and previously established writers to share their creations. We aim to create an inclusive community that fosters creativity.</p>
<p>We accept submissions of original content.. We also have a blog that is always looking for contributors. I would like to add that you do not need previous publishing history to submit either a story or an article to our blog. We prefer quality over quantity.</p>
<p>We  also do a running series of Book , Movie, Television and Music reviews.</p>
<p>With all of that being said, welcome to horror-writers.net, we hope you will join us in making our community a welcoming and fun place to be!</p>
</div>

*/
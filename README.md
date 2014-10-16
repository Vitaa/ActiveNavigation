ActiveNavigation
================

jQuery plugin adds an active  navigation class based on the current URL.

If you are using navigation menus on your website you probably need to highlight the current page so the visitors or users on the website know on which page or part of the site they are on.

This can be done by adding a CSS class to the menu item to highlight it differently to the other menu items.

If you have navigation like this:

```html
<menu id="nav"> 
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about/">About</a></li>
    <li><a href="/clients/">Clients</a></li>
    <li><a href="/contact/">Contact Us</a></li>
  </ul>
</menu>
```

And you want to highlight current menu item, for example, you are at the URL http://website.com/clients/mobile/, 
so you need the Clients link to get a class of "active" to indicate it's an active navigation item. 

You can do it easily with call
```javascript
$(document).activeNavigation("#nav")
```

The script will check the current page URL and compare it with the URLs in the menu and it will add a class to the menu item that macthes in the best way. 

In the example above, it will add an active class to the Clients link. 

If the current url is http://website.com/clients/mobile/and/something/more it will still highlight the Clients link because it is the best match.

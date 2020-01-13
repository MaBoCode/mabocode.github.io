---
layout: post
title: 'OverTheWire: Natas - Level 5 to 6'
categories: OverTheWire Natas
excerpt_separator: <!--more-->
---

In todays new Natas challenge we encounter a cookie vulnerability.

They tell us that access is denied because we are not logged in. 

Since a user session is often handled with a cookie, let's see how the cookie was set.

In Firefox, right click and Inspect Element then in the Storage tab you can see a list of cookies.

There's particulary one cookie named *loggedin*, so let's change its value to 1 or any number different than 0 and refresh the page with F5.


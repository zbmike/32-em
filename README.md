# 32em


<img src="./readme/logo.png" align="right"
     width="120">

32em is a single page application that allows the users to upload and share their photos,
as well as view others' photos.

* 32em allows the user to create an **account** to manage their photos.
* 32em users can **upload their photos** so that they can **share** to others.
* Upload photos to 32em so that the user will have a nice collection view 
of those photos.
* Explore others' photos on 32em. If you find an amazing photo, follow its author so that
you will get updated whenver the author uploads a new photo.

<p align="center">
  <a href="https://photo32em.herokuapp.com">
    32em
    <img src="./readme/ss1.png" alt="Size Limit CLI" width="738">
  </a>
</p>

## Technologies

* React + Redux
* Ruby on Rails
* Heroku as deployment service
* Amazon S3 as storage service

## Features

### Responsive resizing photo wall
<img src="./readme/resize.gif" alt="Resizing photo wall">

One challenge in the original 500px website is that it has a photo wall mode that can align
any number of photos as a grid that their heights were always the same.
To achieve this, I wrote an algorithm to calculate the size of each photo in the photo wall, 
normalizing the height. I then assigned the dimension as inline css to each photo, 
which is an advanced feature in react. This algorithm is triggered when the user resizes the window. As a result, photos were always aligned nicely and responsive to any resizing behavior.
This method also works when viewing the website on phones.

### Infinite photo wall
<img src="./readme/scroll.gif" alt="Infinite photo wall">

Another challenge is when the library has a large amount of photos, it will be unwise
to load all of them at once. My solution, like the original 500px website and many others,
would be limiting the number of photos to load each time. And whenever the user scroll to 
the end of the photo wall, it will trigger a function to load more photos. With the help
of the the previous resizing algorithm, the additional photos are also aligned nicely.

## Thinking in React

At first, when developing the responsive photo wall, I packed it inside its container as one
giant component, which is very hard to navigate and modify. However, after refactoring the photo wall as one of the components, the code is now easy to read and navigate as shown below:

```js
<div className="splash-2">
  <div className="homefeed-title">
    <h2>Checkout the lastest photos from our photographers</h2>
  </div>
</div>
<PhotoGrid photos={this.props.photos}/>
```

This component replaced over one hundred lines of code and can be used elsewhere. 
By doing this, I now understand the importance of thinking in React as well as OOP.
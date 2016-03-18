---
layout: post
title: Principles of reusability for ReactJS components
date: 2016-03-18
description: A walk through the decision making process of making React components as reusable as possible.
---

# Principles of resusability for ReactJS components

React is obviously built with components in mind, but in our latest project we had to take things a step further than usual. Along with our normal deliverables we were given the task of releasing a set of libraries for other clients to use, one of which was a library of React components. Before releasing the components for other Sky client applications to use, we had to ensure the components were completely agnostic regarding a few things:

- Country/language
- Application framework
- Routing
- Styles

The basic idea behind this is that the components need to be completely dumb, and cannot have any knowledge of the application they're being used in. Our library components started life within our application's codebase, failing the agnostic test mentioned above, but this at least allowed us to get the application structure in place initially. Before we started extracting these ReactJS components into a library, we decided on a basic set of rules that they should follow before being considered reusable.

### Keep components dumb
This pretty much sums up the rest of our rules and is the general theme of what we consider to be reusable. Basically, components should have no knowledge of the application they're being used in and they shouldn't be bound to a specific client. Our React components are there to receive props and use them to render data and invoke callbacks. Most importantly, they should not dictate how the consuming application should function, or how their code is written.

### Keep components and styles separate
Since our component library is intended for use by other client applications across the organisation, we had to keep the library free of any styling rules. Supplying them as pure markup without any associated styles meant that any client team could take the components and style them however they wanted. Achieving this was simple for us; we were already storing our JS and SCSS files in separate folders, so this came for free when we moved the components out into their own repository.

### Use single, specific class names
This point links in quite nicely with what we mention above. Ensuring our components aren't bound to our styles is one part of the process, the next part is ensuring they're easy for consumers to use and style. When writing our JSX markup, our style guide dictates that each element has only a single class name.

~~~html
<div className="asset-details-component">
  <h1 className="asset-details-heading"></h1>
  <ul className="asset-details-list">
    <li className="asset-details-list-item-first"></li>
    <li className="asset-details-list-item"></li>
  </ul>
</div>
~~~

~~~css
.asset-details-list-item-first {
  color: white;
}
~~~

Looking at the markup above, it's easy to see how you would style them. If you wanted to style the first list item in this component, it would simply be a matter of referencing that class directly. Pretty simple, right? Now let's look at a more common approach to how the markup above might be written:

~~~html
<div className="asset-details">
  <h1 className="title"></h1>
  <ul className="list">
    <li className="item first"></il>
    <li className="item"></li>
  </ul>
</div>
~~~

~~~css
.asset-details {
  .list {
    .item .first {
      color: white;
    }
  }
}
~~~

As you can see, class names here are much less specific and they don't clearly explain the context in which each element is being used. Styling the first list item also becomes a bit of a nightmare and enforces a specific method of CSS architecture on the consuming client. Using our markup, the client _can_ style their markup like this if they want, but the key is that we're not forcing them to.

### No hard-coded strings
Removing hard-coded strings from our components was needed for two reasons.

1. Because we needed to ensure that any client could use these components, and hard-coding our copy would mean that the components were bound to our application. Even the simple difference between "Sign Up" and "Sign up now" breaks reusability.

2. The second reason for this change was also our initial requirement of being agnostic of the country/language the consuming application was used. Obviously, hard-coded strings are language-specific, so removing strings from our components allowed us to have this flexibility of country in our applications.

Fixing this was essentially just a matter of moving this data up a layer and passing it to the component through props. So in our case, we moved all strings up to the Redux application layer, and passed them into components through props.

### No hard-coded URLs
Similar to hard-coded strings, removing any hard-coded URLs within our components was essential to ensuring other clients could use them without being forced to have certain routes available in their app. If we have a component that contains an anchor tag, and the href for that anchor tag contains a hard-coded path, it means the component is bound to our application and the way it works. This means the component breaks two of our biggest requirements; not dictating how consuming applications work, and not having knowledge of the application it's being used in.

The solution for this problem was the same as above, simply moving the data up to the application layer and passing the data into the component through props. One thing we have also experimented with in this area is making clickable links include an `onClick()` method, rather than simply a href. The nice thing about this is that if two consumers have different requirements for what should happen when a specific link is clicked, both requirements can be met. One client could have the `onClick()` method open a popup window, another client could still make the method redirect the user. This potentially presents the problem of having an impact on SEO because there's no longer href attributes for crawlers to look for, but it's still something we're experimenting with as we haven't found a perfect solution. Of course it's also a matter of being pragmatic and if it does get to the point where two components are becoming _too_ different, splitting them is usually the best approach.

### Final thoughts
As you can see, a lot of the practices mentioned here are the basic concepts of React components, passing data through props is no secret, but exploring the logic and reasoning behind _why_ these concepts are necessary helps you think more about how and what you need to do to make your components as resuable as possible. Following these guidelines, we've succesfully integrated our components in two websites in different languages as proofs of concept, and also integrated in a Smart TV application that's in active development for a product release.

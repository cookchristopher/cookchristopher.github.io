---
layout: post
title:  CSS architecture for large-scale apps
date:   2015-11-07
description: How we architectured our CSS for an app that gets millions of visitors
---

## Intro
As Front End Developers we not only have to deal with our development language of chocie, but also CSS. I think a lot of developers forget about that last part. There's a huge emphasis on clean code, opinions on how it should be architected and written, but not nearly as much thought is given to the CSS rules. My first large project started out that way, we had a huge codebase and [were making efforts to improve it](/2015/principles-used-to-achieve-tdd/) but somewhere a long the way, we realised that our CSS also needed a complete refactoring. This was also prompted by the fact that we were started a redesign of the site that included responsive breakpoints, something our previous CSS didn't cater for at all.

Firstly, we needed a way of providing specific style rules to when the viewport is '

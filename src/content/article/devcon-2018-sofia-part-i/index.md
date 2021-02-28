---
title: 'Devcon 2018 - Sofia - Part I'
date: 2018-09-27T20:18:10Z
author: Prof Yaffle
featured_image:
  src: /images/blog/6030201633_bbe5411b81_b.jpg
  title: '6030201633_bbe5411b81_b'
  alt: '6030201633_bbe5411b81_b'
---
\

 What, a year already? Yup, twelve months have passed, we're all a year older, the world is still mad, and we're once again sitting in an overly-warm, windowless, anonymous conference room, discussing everyone's favourite media software while wondering where the coffee is. Welcome to DevCon 2018, coming to you this year from Sofia/Со́фия, the capital city of the beautiful Balkan nation of Bulgaria.

 So: Team Kodi Assemble!

 We hit the ground running this morning. Mixed in with initial logistics, introductions, and the annual battle with AV and hotel wifi, **keith** led a conversation about **github**, and how we could perhaps better use it to track code and project issues. We currently use trac for bugs, which presents more than a few challenges to both casual users and the team; we could also potentially use github for bug reporting/allocation instead, and also use the associated project tracking to also keep better notes of e.g. press conversations, Foundation issues, and similar.

 We continued into a conversation about **conferences** - which are most appropriate, how do we best cover them, what and where, how do we get most benefit. More later on this year's conference experiences.

 **Martijn** then talked about the move from **Python 2 to Python 3**: approach, milestones, timeline. Python 2 is EOL in 2020, so this is becoming a more urgent task. The intention is to combine this into the normal Kodi rolling release schedule, so expect a significant focus on Python 3 readiness and enforcement as we move past 18 (Leia) and on to 19 (M). If you're an addon developer, specifically, then it's time to pay attention to this as "later" is rapidly becoming "now" - everyone has had ten years to think about this, after all!

 The big challenge is how we encourage developers to migrate while not inconveniencing or irritating users. This is a significant change, and some things are likely to break. Blog post [here](https://kodi.tv/article/attention-addon-developers-migration-python-3).

 We next moved to **conduct and standards** - not because we believe there are specific problems, but more because it's generally good practice to have some expectations regarding behaviour of team members and contributors: if you follow the news, you won't have missed some of the headlines around what can happen when people go beyond constructive disagreement and move into personal attacks, particularly when social media or public discourse is involved. As such, we're putting in place some clearer ground rules and management policies around our own behaviour, just as we have done around the standards we expect from our forum contributors.

 The conversation then moved on to **engagement and communication** - how we keep people informed, updated, involved. Kodi is a big project, with very many moving parts, and nearly as many ways to interact. That's not just about the code, but it's Foundation stuff, user support, strategy, wiki, external conversations, release management: keeping on top of all of these is undoubtedly a challenge. This is very much an internal Team conversation, but one that we'll continue to progress, as even orientation to the project can potentially be a barrier to new contributors.

 Moving on, **Martijn** led a conversation around **issue tracking** - trac vs github. While we currently use an internal trac system, and it has some genuine benefits, it's neither the most usable nor maintanable of systems. By contrast, hosting and managing the issues on (public) github means they're more closely linked with code and commits, so we'd get some significant advantages there that should more than offset what we'd be missing. If we do make this change, which is likely, it won't happen overnight, as we've much to decide: what to do with old (and maybe no-longer-valid) bug reports, what labelling/tagging structure we'd need, what systems we'd need to have in place to ensure that we receive "complete" reports going forward, and so on. More to come.

 Related to this - because github is, in general, a more public platform than trac - we had a conversation about embracing this as a benefit and how we **become more open**. Again, Kodi is a hugely-complex project and is very daunting to a potential contributor: where to start? Who to talk to? How to get help? Who are all these people, anyway?? So, many thoughts: github conversations, GSoC experiences, public discussion channels, updated build/"getting started" documentation, code documentation/architecture. If you're a potential developer and feel like you don't know where to begin, please, contact a member of the team to help us address any concerns you have. We can always use some more help, particularly on the features and multiple platform support that everyone values so much.

 Returning to a topic introduced earlier in the day, **garbear**, **Razze** and **yol** took the floor to report back on their **attendance at VDD** (Video Dev Days) earlier this month (also attended by **Martijn** and **RomanVM**). This was also touched on in a [previous blog post](https://kodi.tv/article/attending-vdd-2018-10th-videolan-developer-days). Sessions included AV1 CODEC development, including the dav1d decoder and rav1e encoder; the x265 HEVC encoder; VLC 4.0 plans and features; a series of short "lightning talks" on various AV-related topics; and, of course, many networking opportunities across a common community of interest (website hosting and load balancing, request handling/download management, breakouts on FFMpeg, programming languages...). Useful bridges built with like-minded people, which is ultimately good for the whole open source multimedia landscape.

 As the day started to draw to a close, **mohit-0212**, one of our 2018 GSoC students, gave a presentation on his project around **episode intro/outro detection**. The goal of this project is to improve the user experience by editing out the endless theme tunes and credits you get, particularly when binge-watching a box set. This involves searching for common scene transition points across multiple episodes of a series, and using hashing algorithms on the video stream to work out when the likely sections begin and end. In the first implementation, then, the detection is run and then the user is presented with a "skip" button as a the section begins. Fully-automated skipping would perhaps be a later addition, but more work is needed yet on the code, detection of "edge cases", and UI, and similar.

 Finally, **natethomas** and the other Foundation board members spent some time talking about the **board responsibilities**: who, what, how, why. The XBMC Foundation has a legal status, and thus there are ongoing administrative, legal and financial activities around our overall direction as a project, non-profit status, trademarks, incorporation status, revenues from sponsorship and donations, approval of expenditure, taxes, PR/press, GSoC admin, Foundation membership and bylaws, internal policies, and any formal legal communications as required.

 And that's it for day one. Time to head out into the fading evening light before reconvening in the morning.

 
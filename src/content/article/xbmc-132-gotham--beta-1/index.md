---
title: "XBMC 13.2 Gotham – beta 1"
date: 2014-07-13T04:00:00Z
tags:
  - Prerelease
author: Martijn Kaijser
featured_image:
  src: /images/blog/13.2-Gotham-beta.jpeg
  title: "13.2-Gotham-beta"
  alt: "13.2-Gotham-beta"
---

**Update:** Our download page now contains a Gotham 13.2 beta 2 release. List of fixes has been updated.

About a month ago we released our 13.1 version which included several bug fixes compared to the 13.0 release. Because of the fact that not all fixes could be included in that point release, we now are happy to announce a **13.2 beta1** version. This includes an additional list of fixes, that should resolve some of the common problems reported by users. Unfortunately we cannot fix all things reported. Hopefully you will understand. Below you will find a list of most important fixes included in this release.

Do note that this release contain only fixes and no new features. So it should be safe to install on top of current 13.0 and 13.1 release. In due time we will of course release a 13.2 stable version after we are confident there are no regressions compared to 13.1 stable. Please read the _important notice_ at the bottom as well. Should you find any problems, you can find how to report these at the bottom of this announcement.

Fixes

Fixes done in **13.2 beta 2**

- - Fix labelcontrols with autowidth set were always marked as dirty (re-render)
- - Update included PVR add-on
- - Set “remote as keyboard” default to true for Android
- - Fix FTP TLS not working
- - Fix some disappearing characters on Mac OSX

Fixes done in previous **13.2 beta 1** which are also included

- - Fix onplaybackstarted event for external players
- - Don’t show OSD menu DVD menu with mouse/touch
- - GetText and delete sound option for add-on developers
- - Fix wrong sample-rate selection on OSX
- - Fix optical usb devices with \> 2 channels on OSX
- - Fix firewall popups in OSX on start-up
- - Make the fake full-screen option only visible when running OSX snowleopard
- - Fix overlapping subtitles
- - Fix accented letters. Example: “VARIéS” rather than “VARIÉS”
- - Prompt for master pin in case the add-on manager is locked
- - Update GUI translations
- - Update included add-ons
- - Fixed several bugs and memory leaks

## Important notice

**Linux users** Ubuntu 12.10 and 13.10 have been deprecated by canonical/ubuntu. This means there will be no more XBMC builds available for those version. You will have to upgrade you Ubuntu to a newer version to receive XBMC updates again.

**Backup your data** Before upgrading we would recommend you create a backup of your current userdata folder which contains all your current settings and database files. In the unlikely case that something went wrong during your upgrade, a backup will ensure that you are still able to go back to the previous state. Where the userdata folder is located on your system can be found on our [userdata](https://kodi.wiki/view/Userdata) wiki page. Do note that when first upgrading from Frodo 12.x it may take some time until you see the familiar homescreen as several internal upgrades need to be performed.

**Add-ons** As mentioned in previous blog posts, due to changes related to our add-on system and skin improvement, certain plugins, scripts and skins may become incompatible when upgrading from Frodo to Gotham. Sadly this is part of the continuing process of development and improvement. We hope the impact of these changes will be limited but we feel a warning would be beneficial. If there are any addons you particularly depend on, we advise that you visit the forum thread of that addon to see if the author has ensured support in XBMC 13.

**Installing on OSX** As XBMC is an unsigned application on OSX, you may need to go through a slightly different process to start it the first time. After you have copied XBMC to the Applications folder, you will need to “right click” or “two finger click” XBMC from within the Applications folder and select “Open” and then accept the warning. You should only need to do this the first time you run XBMC.

**Code base** Since we have branched the XBMC core code for Gotham off from our main development master branch on Github it is important that you also build from the correct Github branch: <https://github.com/xbmc/xbmc/tree/Gotham>

## Conclusion

For the downloads go to:

- - [Windows](https://kodi.wiki/download/ "XBMC for Windows")
- - [OSX](https://kodi.wiki/download/ "XBMC for OSX") and [OSX-x86-64](https://kodi.wiki/download/ "XBMC for 64bit OSX")
- - [Android-ARM](https://kodi.wiki/download/ "XBMC for Android") and [Android-x86](https://kodi.wiki/download/ "XBMC for Android")
- - [Apple TV](https://kodi.wiki/view/HOW-TO:Install_XBMC_on_Apple_TV_2 "Apple TV instuctions") and [iOS](https://kodi.wiki/view/HOW-TO:Install_XBMC_on_iPad/iPhone/iPod_touch "iOS installation instructions") installation instructions
- - Ubuntu users, please point to the _“unstable PPA”_ as described in the [Linux instructions](https://kodi.wiki/view/HOW-TO:Install_XBMC_for_Linux "XBMC for Linux Install Instructions").
- - For [OpenELEC](https://openelec.tv/news/22-releases/122-beta-openelec-4-0-beta-7-released) releases visit their website

### How to Contribute

If you use these builds, we encourage you to submit bugs in Trac with sufficient information (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)), provide support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can, or [donate](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the Foundation if you like. For a current FAQ on XBMC 13, visit our [Gotham FAQ](<https://kodi.wiki/view/XBMC_v13_(Gotham)_FAQ> "XBMC 13 FAQ").

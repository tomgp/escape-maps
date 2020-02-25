# Escape-maps

https://www.toffeemilkshake.co.uk/escape-maps

## What?

Create your own maps for [Escape From The Aliens In Outer Space](http://www.escapefromthealiensinouterspace.com) (henceforth EFTAIOS).

EFTAIOS is like a table-top version of _The Thing_ or _Alien_. Player take on the roles of either:
A. Humans trying to escape from a damaged space station avoiding being killed by B. aliens who are trying to hunt them down without giving themselves away. It's wonderfully tense and ocasionally very funny.

## Why?

I started playing EFTAIOS last year (2019) after upon [the game's page on BGG](https://www.boardgamegeek.com/boardgame/82168/escape-aliens-outer-space) whilst looking for short(ish) games to play with 7+ people. I bought and put together the print and play version and a couple of weeks after that I bought the boxed game from [Osprey](https://ospreypublishing.com/escape-from-the-aliens-in-outer-space) -- the cards are much better though I still prefer to use paper and pencil to the dry wipe pens and pads provided.

There is a map creation tool on the game's website but it has stopped working (or atleast it doesn't work for me) because it uses Flash. I figured it wouldn't take me long to make my own version so when the design studio I was working for decided to close its doors I took some time in between the shutting down/ archiving activities to put together a new version using HTML, Javascript and CSS.

## Notes

Unlike the original maps, the airlocks are not numbered.

I'm going to recreate all the original maps in the tool in spare moments over the next week or so.

The UI is basic and my best guess at what will be useful though I have conducted zero user testing -- your feedback is welcome.

I built this mainly for use in desktop browsers. It seems to work fine on iPad, and OK on iPhone if you have small enough fingers. I've not tested it on anything Android.

You can save your maps to local storage, download them as SVG (though the fonts won't be quite the same) or (my prefered version) simply hit the print button. The print quality seems fine.

As of Feb 2020 I haven't implemented exporting the map data to share with other people. This isn't high on my todo list but if you'd like it to happen drop me a line.

Firefox doesn't display text in the middle of hexagons as it doesn't implement SVG text elements `alignment-baseline` property properly.

This is not an official thing.

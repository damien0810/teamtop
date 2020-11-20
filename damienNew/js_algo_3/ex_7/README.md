# Morse Code

## Context and Objectives

In the same spirit of the last exercise, the goal here is to hone your skills.
And why not learn some morse code in the meantime.
On this exercise, you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.

## Specs

The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter `A` is coded as `·−`, the letter `Q` is coded as `−−·−`, and the digit 1 is coded as `·−−−`. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message `HEY JUDE` in Morse code is:

```
···· · −·−−   ·−−− ··− −·· ·
```

**NOTE**: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and, some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as `···−−−···`. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function decodeMorse(morseCode), that would take the morse code as input and return a
decoded human-readable string.

For example:

```javascript
decodeMorse(".... . -.--   .--- ..- -.. .");
//should return "HEY JUDE"
```

The Morse code table is preloaded for you as an object, feel free to use it. The table can be accessed like this:
`MORSE_CODE['.--']`.

All the test strings will contain valid Morse code, so you may skip checking for errors and exceptions.

Good luck!

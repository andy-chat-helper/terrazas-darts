# Darts Scheduling Helper

## Terraza Dart Club

This project aims to help a small, casual dart club make an educated guess for how long playing in Round Robin mode would take with their current number of players, and whether it is viable or a group-based mode would be preferable.

To do so, it asks for number of players, number of boards, average game length for 301 type of game (current default: 10 minutes) and the start time.

Additionally, it offers customization by game type (301/501, default: 301) and match format (Best of 1/Best of 3, default: Best of 1)

Once all information is available, it calculates both predicted length in minutes and the end time.

### Suggestions implemented in this version:
+ added readme.md
+ modularizing the code for better readability and understanding of what happens
  + JavaScript functions
    + renamed script.js to roundRobinForm.js since this describes what the script does
    + moved it to the src-folder, so in the root-folder the only file is index.html
  + separate CSS-file and moving inline styles there, for a better overview what styles are used
+ currently the game asks for game length without specifying game type. It takes the given number of minutes as the average length for the 301 game type and calculates the 501 game type length
  + either spell out the assumption, so the user knows which time to put in
  + or move the average game length to the end, after game type selection, and do not calculate anything - take the user input at face value. This to me seems like the better option, since the user chooses the game mode first and then it makes sense to enter the average play time for the already chosen game type without spelling it out. Also, it removes invisible assumptions that may or may not be true based on idealistic math
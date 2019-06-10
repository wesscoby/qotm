## Quote of the Moment
If you've ever used the `fortune` package, this is quite similar. Most of us use `fortune` with `cowsay` and/or `lolcat`.<br>
If you've not used or heard of them, then: <br>
-   **fortune:** basically, a program that displays quotes or random messages. To install: 
    -   `sudo apt-get install fortune`  
-   **cowsay:** [configurable talking cow. Cowsay (or cowthink) will turn text into happy ASCII cows...](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=5&cad=rja&uact=8&ved=2ahUKEwiXpbO4id_iAhXEWhUIHXJTAUUQFjAEegQIBBAB&url=https%3A%2F%2Fpackages.debian.org%2Fsid%2Fcowsay&usg=AOvVaw0UFzjNBmm4oM03yoIpW_H5). To install:
    -   `sudo apt-get install cowsay`
-   **lolcat:** formats text with nice colors. To install:
    -   `sudo apt-get install lolcat`

### Overview

`qotm` is my version of `fortune` but outputs programming quotes (well, plus a few quotes i have created :wink:) and it makes use of both `lolcat` and `cowsay`. So it is best to have them installed first. And, oh! this is a bash script which runs a Javascript file in the background to fetch the quote from a JSON file, then output.

![qotm command preview](./preview.png)

### Installation
Clone the project into a `.bash` folder in your home directory:
```sh
mkdir ~/.bash
cd ~/.bash 
git clone git@github.com:WessCoby/qotm.git
cd qotm
```
Then run the `install.sh` file:
```sh
./install.sh
```
Make sure you are in the root directory `qotm`. If you get a *Permission Denied* error, change the file attribute to make it executable and run again:
```sh
chmod u+x install.sh
./install.sh
```
Reload bash: `source ~/.bashrc` or `exit` and reopen the terminal.
**That's it!!!** Simply run `qotm` to display a random quote everytime.

### Updates
This Repo will be frequently updated with new quotes. Simply run `qotm-u` to pull in new updates.
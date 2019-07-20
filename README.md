# Quote of the Moment
Display a random tech or programming quote to the console.

## Overview
`qotm` is my version of `fortune` but outputs tech or programming quotes. And like `fortune`, `qotm` is better with `cowsay` and/or `lolcat`. So it is best to have either or both of them installed.
![qotm command preview](./images/preview.png)

## Installation
```sh
# Installing qotm
> npm install -g qotm

# Installing cowsay and lolcat:
# Via apt 
> sudo apt-get install cowsay lolcat

# Via npm
> npm install -g cowsay lolcatjs
```
### Usage
```sh
# Get a random quote [ text only ]
> qotm

# Colorize text with lolcat (or lolcatjs, if you installed via npm)
> qotm | lolcat

# Text with cowsay
> qotm | cowsay

# Combined
> qotm | cowsay | lolcat
```
You can also add the command to your shell's `*rc` file (.bashrc, .zshrc, etc. or whatever file the shell loads on startup) so it outputs a quote everytime you open a new shell.

### Updates
This Repo will be frequently updated with new quotes. Simply run `npm i -g qotm` to get the latest updates. Expect an update notifier to be added in future updates so as to prompt you when new updates are ready.

## Contributing
There are thousands of tech and programming quotes out there. You have your favorites right? Add them to the `contributing.json` file using the specified format and submit a pull request to the `qotm-cli` branch. I'll be happy to pull them in and make them available in subsequent updates. You can also help in any other way you can, be it code refactoring, typo fixes, etc. <br>
*NB*: I may need to verify the quote and it's author. Please do check as well before adding quotes. 

```sh
> qotm 

Vision without execution is daydreaming

-- Bill Gates

```

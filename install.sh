#!/bin/bash

### Export project's bin path
printf "\n\n# Export Qotm Source Folder\nexport PATH=\$PATH:~/.bash/qotm/bin" >> ~/.bashrc

### Ensure files in ./bin are executable
chmod u+x ./bin/*

### Remove executable permission on this file
chmod u-x ./install.sh


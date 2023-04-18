# 09 Node.js Challenge: Professional README Generator

This challenge involved creating a README generator that will take user input in a command line on a series of questions about their project to produce a tidy README using the Inquirer Node package. The installation and usage sections below describe how to use the application. 

Sample Generated README[`README.md`](https://github.com/tylerjohnsonhockey/07-Tidy-README-Generator/tree/master/Develop/utils/README.md)

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)

## Installation

Use `git clone` to get your Node project on local.

Install nvm using this link: (https://github.com/nvm-sh/nvm)

Start the app by running `node index.js`

Your new 'README.md' will be generated in src of the repository.

## Usage 

When `node index.js` is run, the `inquirer` Node package asks the user for project information.

The README is then created with fs.writeFile`
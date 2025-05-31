#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

var prompt = inquirer.createPromptModule();

const data = {
  name: chalk.bold.blue("Akshay Sanjay Bharambe"),
  nickname: chalk.bold("akshaysb17"),

  web: chalk.green("https://akshaysb.com"),
  blog: chalk.green("https://akshaysb.com/blog"),
  github: chalk.gray("https://github.com/") + chalk.white("akshaysb17"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("akshay-bharambe"),

  labelWeb: chalk.white.bold("Web:"),
  labelBlog: chalk.white.bold(" Blog:"),
  labelTwitter: chalk.white.bold("Twitter:"),
  labelNpm: chalk.white.bold("  npm:"),
  labelGitHub: chalk.white.bold("GitHub:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelCard: chalk.white.bold("Card:"),
};

const box = boxen(
  [
    `${data.name} | ${data.nickname} 🚀`,
    ``,
    `${data.labelWeb}  ${data.web}`,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelNpm}  ${data.npm}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    ``,
    `${data.npx}`,
    ``,
    `${chalk.italic.bold("I am a result-driven DevOps Professional")}`,
    `${chalk.italic("Passionate about DevOps, Cloud, AI, Open Source, and building resilient systems that scale teams and tech")}`,
  ].join("\n"),
  {
    borderColor: "blue",
    borderStyle: "double",
    padding: 1,
    margin: 1,
    float: "center",
    textAlignment: "center",
  }
);

const questions = [
  {
    type: "list",
    name: "action",
    message: "What's next?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:akkyadwork@gmail.com");
          console.log(
            "\nPlease wait, your email application will pop up soon,\nsee ya.\n"
          );
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Ok, bye.\n");
        },
      },
    ],
  },
];

console.log(box);

const tip = [
  `${chalk.white.bold(
    "Tip"
  )}: if the terminal supports, try ${chalk.cyanBright.bold(
    "cmd/ctrl + click"
  )} the link above 😉`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());

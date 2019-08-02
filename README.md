# GurpsCalculator

Come join us in the Gurps Discord on the Apps channel, where we talk about GURPS Calculator development and share ideas.
https://discord.gg/gnkQEap

This project is written in the [Angular](https://angular.io/) framework and [TypeScript](https://www.typescriptlang.org/),
 a dialect of Javascript. You can learn more about both on their respective documentation pages.

Table of contents:

1. Setting up Git and an IDE
2. Installing Node.js
3. Checking out GurpsCalculator from GitHub
4. Running the development server and accessing the application
5. Contributing

## Setting up Git and an IDE

To contribute to GurpsCalculator, you will need an installation of the Git source control management tool and a code editor.

Source control management is a system for making sure no changes to code get lost, offering features such as version
history and showing the difference between versions, as well as allowing many collaborators to work on the same codebase
simultaneously. GurpsCalculator uses Git for this purpose, hosted on GitHub.

While you could technically edit code with Notepad, most prefer to do it with an IDE, short for Integrated Development
Environment. In addition to acting as a text editor, a fully featured IDE offers many conveniences, most notably the
so called Intellisense which offers autocompletion options in real time as you type, visual markings for syntax errors,
and easy navigation through code. If you don't already have a preferred IDE, Visual Studio Code (or VS Code for short)
is recommended as it is both free, cross-platform and very powerful.

### Installing Git

#### Windows

Download and run the [Git for Windows](https://gitforwindows.org/) installer. Along with Git, this installs a Linux-style
command line terminal (Git Bash) similar to the Windows Command Prompt or Powershell which is optimal for using Git from
the command line. If you'd rather use Git from a traditional Windows application, you can do so directly in VS Code.

#### Linux

Most Linux distributions should come with Git included. Enter `git --version` in the command line terminal and you should
get something as `git version 2.8.0` displayed. If not, you can install Git with `sudo apt-get install git-all` on a
Debian-based distribution (Ubuntu, Mint...) or `sudo dnf install git-all` on a RPM-based distribution (Fedora, RHEL, CentOS...).

#### Mac

Open a terminal and check if Git is already installed by entering `git --version`. If you don't get something like
`git version 2.8.0` displayed, you can install it either via the [installer](https://git-scm.com/download/mac) or Homebrew
 from the terminal (`brew install git`) if you have it available.

### Configuring Git

You will need to tell Git under which name your contributions will be listed. The easiest way is to do that
via a terminal (Windows users can use Git Bash). You can do this in two ways: globally, which will affect all of the
projects you may be working on with Git, or locally which will just affect GurpsCalculator. To do it globally, enter
 `git config --global user.name "Jane Smith"`. If you wish you may also configure an email address which will be
 displayed alongside your name via `git config --global user.email "jane@thesmiths.com"`. To do it locally, navigate
 your terminal to the folder you cloned GurpsCalculator into (see below) and enter the same commands but without the
 `--global` flag.

Optionally, you may want to set up an SSH key for use when pushing your contributions to GitHub. Without it, you will
need to enter your GitHub username and password manually every time you do so. This is also easiest to do via terminal.
Enter `ssh-keygen -t rsa` (the ssh-keygen program is available in Git Bash as well as on Linux and Mac) and a .ssh folder
will be generated in your home folder along with two files in it. Navigate to this folder and display the contents of the
id_rsa.pub file (under Windows, your home folder is C:\Users\ADMIN assuming you installed Windows on the C: drive and ADMIN
is your user profile name). You will need to copy those contents into GitHub. Log into it and navigate to [SSH keys](https://github.com/settings/keys)
 section. Click the "New SSH key" button in the top left corner and copy the contents of the
 id_rsa.pub file into the large field labeled with "Key". Confirm by clicking on "Add SSH key" and you're good to go.

### Installing VS Code

There should be a big download button for your platform at the [official website](https://code.visualstudio.com/).
 Run the installer and follow its instructions. 

There is a lot of great [documentation](https://code.visualstudio.com/docs) for VS Code. Perhaps most useful for
newcomers is about [version control](https://code.visualstudio.com/docs/editor/versioncontrol). Reading that tutorial
will teach you how to perform various workflows in Git required while contributing.

## Installing Node.js

In days of yore we could just write some Javascript, attach it to a html page, open it up in the browser and marvel
at our genius. Today, developing in Javascript is much more similar to C or Java where code must be compiled before
being executed, and browsers also do not like just running it from your local filesystem due to security concerns. Enter
Node.js - although originally a tool designed to run webservers powered by Javascript, today it is used as a general
 purpose Javascript command line runner, most notably for compiling code and running so called dev-servers.
 It comes together with npm, the Node Package Manager, which is used to manage Javascript libraries (such as Angular)
 used in a project.
 
The Node.js installer can be downloaded from the [official website](https://nodejs.org) (the "Current" version will do).
 Once you have completed it, you will be able to use node, npm and npx from your terminal.

## Checking out GurpsCalculator from GitHub

Open your terminal and navigate to a folder where you would like the project to be stored. You will "clone" the repository
here by using one of the following two methods. You can do it either via https, which will require you to enter your
username and password every time you want to push your contributions to GitHub, or via ssh which will not require you
to do so but requires setting up an SSH key (described above).

To clone via https, enter `git clone https://github.com/jeffmdemers/gurps-calculator.git`.

To clone via ssh, enter `git clone git@github.com:jeffmdemers/gurps-calculator.git`.

This will create a folder called gurps-calculator where the code will be stored. It is from this folder that you will
need to perform command line operations when they are called for, as well as the folder you need to open in VS Code to
work on the project.

Navigate to the gurps-calculator folder and run `npm install` from the terminal. This will download Angular and any
other libraries required by the application. This command should also be executed whenever a new library is added
to the project, or when an existing library is updated.

## Running the development server and accessing the application

In order to access GurpsCalculator in your browser, you will need to run a so called dev server. This compiles the code,
automatically detects any changes you make to it and compiles it anew, and makes the application accessible through
 the browser. It will also automatically reload the application in the browser when changes are recompiled.

Run `npm start` in your terminal. This start a process that will "take up" that instance of your terminal so you will
need to open another one if you wish to perform other command line operations. The process will display various debug
information, including if compilation was successful or if any errors were encountered.

Once the dev server is running, you can access the application via your browser at http://localhost:4200.

## Contributing

Open source development works through the system of "pull requests". Contributors make changes to the code and open a
pull request on GitHub. The project owner or any other contributors designated for that purpose then review the PR and
merge it into the "master" branch if everything looks good, or requests changes otherwise. The master branch contains
the latest stable version of the application code.

Before starting work on a feature, make sure there is an issue for it in GitHub and that no one else is currently working
on it to avoid duplication of effort. If there is no issue, you may create it yourself. Assign yourself to the issue.

Check out the master branch via Git and pull the latest state from GitHub (either via VS Code or by running
 `git checkout master && git pull` in a terminal). Create a new "feature" branch from it named feature/#X_short_description_of_the_feature,
 where X is the issue number in GitHub (`git checkout -b feature/#X_short_description_of_the_feature`). When you are
 finished with your changes, you need to add the files you changed to the Git "staging area" (`git add path_to_changed_files`,
 a `.` can be used as the path to add all changed files in the project) and make a commit (`git commit -m'#X Short message describing the changes'`,
 where X is the issue number in GitHub). The commit creates a new revision and "saves" your changes. Having the issue
 number in commit messages allows Git to "connect" the pull requests with issues and various comments referencing them.
 Finally, you need to push your commit to GitHub (`git push`). Without pushing it, the commit is stored only in your
 local copy of the repository.

Once you have pushed your branch and the changes it contains to GitHub, you need to open a pull request for it. You
can do that by navigating to the pull requests section in github and clicking the "New pull request" button. Once your PR
gets merged into master, this newest state of the application will automatically be deployed to http://gurps-calculator.herokuapp.com/.

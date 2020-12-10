# Mac Setup for pearberries company website project.
- http://www.pearberries.com

## Table of Contents
- [Color Scheme](#Color-Scheme)
- [Font Types](#Font-Types)
- [Image_Sizes](#Image-Sizes)
- [Local Setup](#Local-Setup)
- [Git Install](#Git-Install)
- [Clone Git Repository](#Clone-Git-Repository)
- [Adding a file to a repository using the command line](#Adding-a-file-to-a-repository-using-the-command-line)
- [Adds the file to your local repository and stages it for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'.](#Adds-the-file-to-your-local-repository-and-stages-it-for-commit.-To-unstage-a-file,-use-'git-reset-HEAD-YOUR-FILE'.)
- [Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.](#Commits-the-tracked-changes-and-prepares-them-to-be-pushed-to-a-remote-repository.-To-remove-this-commit-and-modify-the-file,-use-'git-reset---soft-HEAD~1'-and-commit-and-add-the-file-again.)
- [Pushes the changes in your local repository up to the remote repository you specified as the origin.](#Pushes-the-changes-in-your-local-repository-up-to-the-remote-repository-you-specified-as-the-origin.)

## Color Scheme
- black #000000
- gold #d4af37
- royal purple #7851a9

## Font Types
- Roboto
- Amatic SC
- Sans-Serif

## Image Sizes
- 1024 x 768
- layout = horizontal

## Local Setup
Create project directory
```
$ cd ~/home
$ mkdir <name>
$ cd to <name>
```

## Git Install
```
$ git init .
```

## Clone Git Repository
```
$ git clone git@github.com:matthewdelmonte/cadence.git
```
## Adding a file to a repository using the command line
1. On your computer, move the file you'd like to upload to GitHub into the local directory that was created when you cloned the repository.

2. Open Terminal.

3. Change the current working directory to your local repository.

4. Stage the file for commit to your local repository.

```
$ git add .
```

## Adds the file to your local repository and stages it for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'.
Commit the file that you've staged in your local repository.

```
$ git commit -m "Add existing file"
```

## Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.
Push the changes in your local repository to GitHub.

```
$ git push origin your-branch
```

## Pushes the changes in your local repository up to the remote repository you specified as the origin

### Resource:
- https://help.github.com/en/articles/adding-a-file-to-a-repository-using-the-command-line

updated: 04.20.19

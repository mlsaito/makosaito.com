# My Personal Website

This is basically where I dump my personal stuff - portfolio!

Gatsby starter based on the Strata site template, designed by [HTML5 UP](https://html5up.net/strata).  
Check out https://codebushi.com/gatsby-starters/ for more Gatsby starters and templates.

## Preview

http://makosaito.com

## Run on Local

Install `gatsby-cli`
```
$ npm install --global gatsby-cli
```

Clone project

```
$ git clone https://github.com/mlsaito/makosaito.com.git
```

Install dependencies

```
$ npm install
```

Run on Local

```
$ gatsby develop
```

## Recreate Instance (Dependencies)

This section has all the commands used to install dependencies from scratch, for the GCP instance.

Install `git`
```
$ sudo apt install git-all
```

Install `NVM`
```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.10/install.sh | bash
```

Install `nodeJS`
```
$ nvm install node
```

Install `gatsby-cli`
```
npm install --global gatsby-cli
```

## Deployment

We currently do not have any deployment workflow.

1. SSH into GCP instance.
2. `$ git clone https://github.com/mlsaito/makosaito.com` (or `git pull`).
3. Cd to project directory and, `npm install`.
4. If you encounter dependency issue, just `sudo apt install [lib_name]` that library.
5. `$ gatsby develop -p 80`.

## Credits

Thanks for the theme, [HTML5 UP](https://html5up.net/).

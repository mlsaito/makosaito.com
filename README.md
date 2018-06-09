# My Personal Website

This is basically where I dump my personal stuff - portfolio and blog posts!

## Preview

https://makosaito.com

## Run on Local

1. Install `gatsby-cli`
```
$ npm install --global gatsby-cli
```

2. Clone project

```
$ git clone https://github.com/mlsaito/makosaito.com.git
```

3. Install dependencies
```
$ npm install
```

4. Run on Local
```
$ gatsby develop
```

### Setup `gcloud` CLI Tool

We deploy via `gcloud` CLI Tool.  
Also handy for reconfiguration, creation, or switching between GAE apps.

1. Install and initialize `gcloud` CLI tool.
```
$ brew tap caskroom/cask
$ brew cask install google-cloud-sdk
```

2. Initialize CLI tool. Just follow through the steps.
```
$ gcloud init
```

3. Enable billing for newly created Google App Engine app
```
Visit console directly or click:
https://console.developers.google.com/project/{project_name}/settings

Don't forget to replace {project_name} with your project name.
```

## Deployment

This project is currently deployed at `Google App Engine`.  
This also assumes that you have already setup `gcloud` CLI tool (previous section).


1. Clone project
```
$ git clone https://github.com/mlsaito/makosaito.com.git
```

2. Create a GatsbyJS production build
```
$ gatsby build
```

3. Deploy to `Google App Engine` using gcloud CLI tool
```
$ gcloud app deploy
```

You can view logs by executing:
```
$ gcloud app logs tail -s default
```

## Project Notes

1. `app.yaml` - Used by `Google App Engine` to map routes to static files. (Documentation [here](https://cloud.google.com/appengine/docs/standard/python/config/appref)).
2. `gcloud init` - Command to reconfigure, create, or switch between `Google App Engine` projects.
3. This project uses a `python` runtime to serve static files, which is under Google's [`always-free-tier`](https://cloud.google.com/free/docs/always-free-usage-limits).
4. `Google App Engine` now offers free, auto-renewing SSL ceritificates for custom domains!

## Credits

Thanks for the theme, [HTML5 UP](https://html5up.net/).

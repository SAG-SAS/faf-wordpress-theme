# FAF WordPress theme

This repository contains the WordPress theme for the FAF (Fachgruppe Astrofotografie) website (https://astrofoto.ch)

## Development

To develop on this theme, you will need `wp-env`, `docker`, and `git` installed.

Once these tools are installed, you can start the development WordPress environment using `wp-env start` while having the terminal open in this directory.

You can log in into the WordPress site using username `admin` and password `password`.

If you use a rootless docker setup you might get "Cannot create directory / file" errors when uploading or editing files through WordPress. In that case, ensure wp-env is started (`wp-env start`), connect to its bash using `npx wp-env run wordpress bash` and then change the owner of the directory using `sudo chown -R <User>:<User> ./*`, replacing `<User>` with your username.

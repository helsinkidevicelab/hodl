# Helsinki open device lab

This is the repository of opendevicelab.com and everything hosted under that domain. All changes should go through this repository so that we have a way to go back in history and undo things if/when needed.



#### Installation:

1. `git clone git@github.com:viljamis/hodl.git`
2. Comment out lines `LoadModule php5_module libexec/apache2/libphp5.so` and  `Include /private/etc/apache2/extra/httpd-vhosts.conf` in `/etc/apache2/httpd.conf` file.
3. Add new host `127.0.0.1	opendevicelab` to `/etc/hosts` file.
4. Add new virtual hosts to `/etc/apache2/extra/httpd-vhosts.conf` file:
    ```
    <VirtualHost *:80>
       DocumentRoot "/Library/WebServer/Documents"
       ServerName localhost
    </VirtualHost>

    <VirtualHost *:80>
       DocumentRoot "/Users/viljami/Sites/opendevicelab.com"
       ServerName opendevicelab
    </VirtualHost>
    ```
5. Done! Now start Apache from OS X system prefs, start Codekit, and view the site in browser: `http://opendevicelab/`


#### Deployment:

1. `git push heroku master`

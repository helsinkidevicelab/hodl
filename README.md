# Helsinki open device lab

This is the working repository of [devicelab.fi](http://devicelab.fi) site.



#### Installation:

1. `git clone git@github.com:viljamis/hodl.git`
2. Comment out lines `LoadModule php5_module libexec/apache2/libphp5.so` and  `Include /private/etc/apache2/extra/httpd-vhosts.conf` in `/etc/apache2/httpd.conf` file.
3. Add new host `127.0.0.1	devicelab.local` to `/etc/hosts` file.
4. Add new virtual hosts to `/etc/apache2/extra/httpd-vhosts.conf` file:
    ```
    <VirtualHost *:80>
       DocumentRoot "/Library/WebServer/Documents"
       ServerName localhost
    </VirtualHost>

    <VirtualHost *:80>
       DocumentRoot "/Users/***/Sites/hodl"
       ServerName devicelab.local
    </VirtualHost>
    ```
5. Done! Now start Apache from OS X system prefs, start Codekit, and view the site in browser: `http://devicelab.local/`


#### Deployment:

1. `git push heroku master`


#### License
Licensed under the MIT license.

Copyright (c) 2011-2012 Viljami Salminen, [http://viljamis.com/](http://viljamis.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

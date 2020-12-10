# Linode cloud hosting SSD Linux server for pearberries.com
- [Linode.com] https://linode.com
- Getting Started with Linode (#https://www.linode.com/docs/getting-started/)
- login as root via Network/SSH Access address located in the Linode dashboard

## Table of Contents
1. [Users](#Users)
2. [Configuration](#Linode-Configuration)
3. [Volumes](#Volumes)
4. [Node Balancers](#Node-Balancers)
5. [Webserver Configuration](#Webserver-Configuration)
6. [System Host File](#System-Host-File)
7. [Hostname](#Set-Hostname)
8. [Security](#Security)
9. [TLS](#TLS-Certificate)
10. [New User](#New-User)
11. [SSH](#SSH)
12. [Running Services](#Running-Services)

## Users
- Root
- matthewd
- calebd

## Linode Configuration
- Debian 9
- Linode 2GB
- 1 CPU
- 50 GB of Storage
- 2GB of RAM
- Server: Freemont, CA
- Monthly Network Transfer Pool: 1875 GB

## Volumes
cadence-west

## Node Balancers

## Webserver Configuration

### 1. NGINX webserver

Getting Started with NGINX - Part 1: Installation and Basic Setup
```
https://www.linode.com/docs/web-servers/nginx/nginx-installation-and-basic-setup/
```

Getting Started with NGINX - Part 2: (Slightly More) Advanced Configurations
```
https://www.linode.com/docs/web-servers/nginx/slightly-more-advanced-configurations-for-nginx/
```

Getting Started with NGINX - Part 3: Enable TLS for HTTPS Connections
```
https://www.linode.com/docs/web-servers/nginx/enable-tls-on-nginx-for-https-connections/
```

Getting Started with NGINX - Part 4: TLS Deployment Best Practices
```
https://www.linode.com/docs/web-servers/nginx/tls-deployment-best-practices-for-nginx/
```

Install NGINX on Debian from the Official NGINX Repository
Open /etc/apt/sources.list in a text editor and add the following line to the bottom:
```
deb http://nginx.org/packages/mainline/debian/ stretch nginx
```

Import the repository’s package signing key and add it to apt:
```
sudo wget http://nginx.org/keys/nginx_signing.key
sudo apt-key add nginx_signing.key
```

Install NGINX:
```
sudo apt update
sudo apt install nginx
```

Ensure NGINX is running and and enabled to start automatically on reboots:
```
sudo systemctl start nginx
sudo systemctl enable nginx
```

Question: Does NGINX need optimization running on Linode 2GB to prevent the server from running out of memory?

webpage support: https://www.linode.com/docs/web-servers/nginx/install-nginx-debian/

### 2. MongoDB database 

Install MongoDB for Debian
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/

Import the public key used by the package management system
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
```

Create a /etc/apt/sources.list.d/mongodb-org-4.0.list file for MongoDB
Debian 9 "Stretch"
```
echo "deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/4.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
```

Install the MongoDB packages
```
sudo apt-get install -y mongodb-org
```

Start MongoDB
```
sudo service mongod start
```

Verify that MongoDB has started successfully
Verify that the mongod process has started successfully by checking the contents of the log file at /var/log/mongodb/mongod.log for a line reading
```
[initandlisten] waiting for connections on port 27017
```

Stop MongoDB
```
sudo service mongod stop
```

Restart MongoDB
```
sudo service mongod restart
```

Begin Using MongoDB
```
mongo
```

Quit Using MongoDB
```
quit()
```

Missing dirmngr directory
```
$ sudo apt-get install dirmngr --install-recommends

https://blog.sleeplessbeastie.eu/2017/11/02/how-to-fix-missing-dirmngr/
```

Caution: MongoDB can require a significant amount of RAM, we recommend using a high memory Linode with this guide.

webpage support: https://www.linode.com/docs/databases/mongodb/install-mongodb-on-ubuntu-16-04/

### 3. Git (clone cadence on webserver)

website: https://www.linode.com/docs/development/version-control/how-to-install-git-and-clone-a-github-repository/
-Install and Configure Git
```
sudo apt-get update
sudo apt-get install git -y
```

-Configure the username, replace First Last:
```
git config --global user.name "First Last"
```

-Configure the email, replace example@example.com:
```
git config --global user.email "example@example.com"
```

-Clone a GitHub Repository
```
git clone https://github.com/matthewdelmonte/cadence.git
```

### 4 Overwrite App Files

These instructions are for overwriting the index.html, app.css and productImages Folder
1. Comment out current files
```
mv index.html index.html.old
mv app.css app.css.old
mv productImages/ productImages.old/
```

2. Secure copy files from local directory to Linode server
```
scp index.html root@173.230.157.110:/var/www/pearberries.com/
scp app.css root@173.230.157.110:/var/www/pearberries.com/
scp -r productImages root@173.230.157.110:/var/www/pearberries.com/Images
```

3. Delete old files
```
rm index.html index.html.old
rm app.css app.css.old
rm productImages/ productImages.old/
```

### 5. CMS: 
website: https://www.reinisfischer.com/how-install-drupal-8-nginx-php-fpm-mysql-phpmyadmin-ubuntu-1604-linode-guide
website: https://www.linode.com/docs/websites/cms/install-and-configure-drupal-8/

## System Host File

Using Your System's hosts File
```
https://www.linode.com/docs/networking/dns/using-your-systems-hosts-file/
```

## Set Hostname
```
hostnamectl set-hostname example_hostname
```
FQDN Fully Qualified Domain Name: configured in etc/hosts file
see getting started webpage

## Security
How to Secure Your Server
webpage: https://www.linode.com/docs/security/securing-your-server/

Unattended Upgrades (Debian/Ubuntu)
webpage: https://help.ubuntu.com/lts/serverguide/automatic-updates.html

##  TLS Certificate 

Create a Certificate Signing Request (CSR) 
```
su - root
mkdir /root/certs/ && cd /root/certs/
```

Create a server key and CSR
```
openssl req -new -newkey rsa:4096 -days 365 -nodes -keyout example.com.key -out example.com.csr
```

Cert Authority's Root Certificate is located
```
/etc/ssl/certs/ca-certificates.crt
```
https://www.linode.com/docs/security/ssl/obtain-a-commercially-signed-tls-certificate/

Certbot Certificate (lists certs and their status)
```
sudo Certs Certificate
```

Certbot Certificate Renewal (certs renew automatically)
```
Certs renew
```
I'm not sure this command is complete or what directory I may need to be in when executing this command

certbot
```
https://certbot.eff.org/hosting_providers
```

Reference: https://geekflare.com/free-ssl-tls-certificate/

## New User (without Root privledges)

Add New User
```
adduser example_user
```

Add User to SUDO
```
adduser example_user sudo
```

## SSH

Run this command to setup SSH access with the user you will administer the server with:
```
ssh-copy-id matthewd@173.230.157.110

## Running Services

Determine Running ServicesPermalink
```
sudo ss -atpu
```
Uninstall Running Services (Debian/Ubuntu)
```
sudo apt purge package_name
```





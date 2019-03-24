yum install git

yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_11.x | sudo -E bash -

yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_10.x | sudo -E bash -

sudo yum install nodejs

sudo npm install pm2@latest -g

sudo pm2 startup systemd

pm2 start index.js

sudo yum install epel-release

sudo yum install nginx

sudo vi /etc/nginx/nginx.conf

location / {
proxy_pass http://APP_PRIVATE_IP_ADDRESS:8080;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
proxy_cache_bypass \$http_upgrade;
}

sudo systemctl enable nginx
sudo systemctl restart nginx

sudo firewall-cmd --zone=public --add-service=http --permanent
sudo firewall-cmd --zone=public --add-service=http

sudo firewall-cmd --zone=public --add-port=3000/tcp --permanent
sudo firewall-cmd --zone=public --remove-port=3000/tcp --permanent

sudo firewall-cmd --reload

sudo firewall-cmd --zone="public" --add-forward-port=port=80:proto=tcp:toport=12345

setsebool -P httpd_can_network_connect 1

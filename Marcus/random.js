var posts=["2023/03/17/Butterfly/","2023/04/25/Macphotoshop/","2023/04/17/HomeKit/","2023/04/19/Windowslany/","2023/05/30/goujian copy/","2023/05/18/goujian/","2023/05/18/goujianw/","2023/03/16/hello-world/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};
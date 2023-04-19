$(function() {
    const url = "https://api.github.com/repos/mrxie68/kexue/issues?state=open&sort=created&direction=desc";
    const repoUrl = url.replace("{OWNER}", "twbs").replace("{REPO}", "bootstrap");
    const issuesElement = $("#issues");
  
    fetch(repoUrl)
      .then(response => response.json())
      .then(issues => {
        const issuesHtml = issues.map(issue => {
          const user = issue.user.login;
          const avatar = issue.user.avatar_url;
          const date = new Date(issue.created_at).toLocaleString();
          const title = issue.title;
          const body = issue.body;
          const link = issue.html_url;
          const labels = issue.labels.map(label => {
            return `<span class="label" style="padding: 3px 7px; margin: 5px;border-radius: 5px; background-color: #${label.color}">${label.name}</span>`;
          }).join(" ");
  
          return `
            <div class="issue">
              <div class="content">
                <div class="header">
                  <div class="avatar">
                    <img src="https://cdn.staticaly.com/gh/mrxie68/cdnimg@master/img/_cgi-bin_mmwebwx-bin_webwxgetmsgimg__&MsgID=6647971626957698086&skey=@crypt_62534877_00a230e7854750a5e74d4f83ff57bf87&mmweb_appid=wx_webfilehelper.6eb9ybiccp00.webp">
                  </div>
                  <span class="user">${user}</span>
                  <svg class="is-badge1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z" fill="#1da1f2"></path></svg>
                  <span class="date1">${labels}</span>
                </div>
                <div class="title" style="word-wrap: break-word;display:none">
                  <h3>${title}<h3>
                </div>
                <div class="body11">
                  ${body}
                </div>
                <div class="date1">
                  <span class="date">${date}</span>
                </div> 
              </div>
            </div>
          `;
        }).join("");
  
        issuesElement.html(issuesHtml);
      })
      .catch(error => {
        console.log(error);
      });
  });

var Integration = function() {
    this.services = null;

}

Integration.prototype.initialize = function(callback) {
    if ( !this.service ) {
        $.get('/assets/integration/services.json', (res)=>{
            var services = {};

            for (var i = 0; i < res.children.length; i++) {
                var service = res.children[i];
                services[service.type] = services[service.type] || [];
                services[service.type].push(service);
            }

            this.services = services;
            callback && callback();
        })
    } else {
        callback && callback();
    }
}

Integration.prototype.getService = function(service) {
    return new Promise( (resolve, reject) => {
        // console.log('promise');
        resolve({
            id: service,
            name: service.replace(/-/g, ' '),
            image: '/assets/imgs/integration/googleDevelopers.png',
            type: 'Server',
            content: `<em>Posted by Akansha Sharma, Product Marketing Manager</em>
                <p>
                This past year we worked hard to make the Google Assistant better for users and
                developers like you, but we also wanted to find new ways to reward you for doing
                what you love – building great apps for the Google Assistant.
                </p>
                <p>
                So at I/O 2017, we announced our first Actions on Google Developer Challenge
                encouraging you to build helpful, entertaining apps for the Assistant. Today,
                we're announcing the competition's winners, chosen from thousands of entries.
                </p>
                <div class="blgimg1"><a href="https://1.bp.blogspot.com/-sMCSu3w9H7o/Winw7dCy7sI/AAAAAAAAEPc/0P7gfLdQMPI0_55Jb-T2mrs9fCpFNmxOgCLcBGAs/s1600/image2.gif" imageanchor="1" target="_blank"><img data-original-height="640" data-original-width="1280" src="https://1.bp.blogspot.com/-sMCSu3w9H7o/Winw7dCy7sI/AAAAAAAAEPc/0P7gfLdQMPI0_55Jb-T2mrs9fCpFNmxOgCLcBGAs/s1600/image2.gif" border="0"></a></div>


                <ul>
                <li><strong>First Place: <em><a href="https://assistant.google.com/services/a/id/2a38388aac6b392a/">100 Years Ago</a></em></strong>
                 <ul><li>What it's all about: Travel back in time 100 years and listen to an
                interactive radio show. Catch up on breaking news and hit songs circa 1917.</li></ul></li></ul>

                <ul><li><strong>Second Place: <em><a href="https://assistant.google.com/services/a/id/10a4a4f9788a5296/">Credit Card Helper</a></em></strong>
                 <ul><li>What it's all about: Credit Card Helper analyzes card features, customer
                reviews, reads the fine print and looks up Consumer Reports to help you find the
                best credit card offers.</li></ul></li></ul>

                <ul><li><strong>Third Place: <em><a href="https://assistant.google.com/services/a/id/5c9f302f21eed6e6/">Planet Quiz</a></em></strong>
                 <ul><li>What it's all about: Learn about the solar system with this fun and
                educational game. </li> </ul></li></ul>

                <div class="blgimg2"><a href="https://4.bp.blogspot.com/-Syx-973JIA0/WinxE6dGPGI/AAAAAAAAEPg/kNk0550bF08o3c4giWLhyetODQx3KtMlgCLcBGAs/s1600/image1.png" imageanchor="1" target="_blank"><img data-original-height="959" data-original-width="1600" src="https://4.bp.blogspot.com/-Syx-973JIA0/WinxE6dGPGI/AAAAAAAAEPg/kNk0550bF08o3c4giWLhyetODQx3KtMlgCLcBGAs/s1600/image1.png" border="0"></a></div>
                <p>
                In addition to the top three prize winners, we also selected winners among
                various categories including "best app by students," "best parenting app," "best
                life hack" and more. You can read up on all of the winners' apps <a href="https://developers.google.com/actions/challenge/">here</a>.
                Congratulations to our winners and to all those who submitted an app as part of
                the contest – we can't wait for users to check them out!
                </p>
                <p>

                Happy holidays and happy New Year. We can't wait to see what the next year has
                in store.
                </p>
                <p>
                Be sure to follow us on <a href="https://twitter.com/actionsongoogle?lang=en">Twitter</a> and check out the
                <a href="https://developers.google.com/actions/community/overview">Google
                Assistant developer community program</a> to stay in the know for 2018!
                </p>`
        });
    });
}

module.exports = new Integration();

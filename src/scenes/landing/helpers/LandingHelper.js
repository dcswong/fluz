import lodash from 'lodash';

function getArticles(cb, keyword) {
    let path = '/api/articles'
    if(keyword) {
        path = `${path}?tags=${keyword}`
    }
    fetch(path, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(result => {
        if(result.result) {
            let allPost = result.data.posts;
            let features = [];
            let articles = [];

            lodash.forEach(allPost, (post, index) => {
                if(lodash.indexOf(post.tags, 'f1') > -1) {
                    features.push(post)
                } else {
                    articles.push(post)
                }
            })

            lodash.forEach(articles, (article) => {
                let isFeature = false;
                lodash.forEach(article.tags, (tag, index) => {
                    if(/[fF][0-9]/g.test(tag)) {
                        isFeature = true
                        if(index > 0) {
                            let featureNum = lodash.slice(article.tags, index, index + 1)
                            article.tags.splice(index, 1)
                            article.tags = featureNum.concat(article.tags)
                        }
                    }
                })
                if(!isFeature) {
                    article.tags.unshift("999")
                }
            })

            lodash.forEach(articles, (article) => {
                if(article.tags[0]) {
                    article.tags[0] = article.tags[0].match(/[0-9]/g).shift()
                }
            })
            
            articles.sort((articleA, articleB) => {
                return articleA.tags[0] - articleB.tags[0]
            })

            lodash.forEach(articles, (article) => {
                article.tags = lodash.drop(article.tags)
                article.tags = lodash.slice(article.tags, 0, 3)
            })

            cb && cb({features, articles})
        }
        else {
            cb && cb({features, articles})
        }
    });
}

const LandingHelper = {
    getArticles
}

export default LandingHelper;


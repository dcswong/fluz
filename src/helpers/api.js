import lodash from 'lodash';

var API = {
    get: function(pathname, cb) {
        // get info from server
        fetch(pathname, {
            method  : 'GET'
        })
        .then(function(response) {
            return response.status == 404 ? null : response.json();
        })
        // error occurred
        .catch(function(error) {
            // callback
            cb && cb();
        })
        // done
        .then(function(res) {
            // callback
            cb && cb(res);
        });
    },
    update: function(pathname, formData, cb) {
        API.save('PUT', pathname, formData, cb);
    },
    create: function(pathname, formData, cb) {
        API.save('POST', pathname, formData, cb);
    },
    save: function(method, pathname, formData, cb) {
        var headers = {};
        // get content type
        var ct = {
            object: 'json',
            string: 'x-www-form-urlencoded'
        }[(typeof formData).toLowerCase()];
        // set content type
        headers['Content-Type'] = "application/" + ct + "; charset=utf-8" ;
        // get info from server
        fetch(pathname, {
            method  : method,
            headers : headers,
            body    : /^json$/i.test(ct) ? JSON.stringify(formData) : formData
        }).then(function(response) {
            return response.json();
        }).then(function(res) {
            // callback
            cb && cb(res);
        }).catch(function(error) {
        });
    },
    delete: function(pathname, cb) {
        // get info from server
        fetch(pathname, {
            method  : 'DELETE'
        }).then(function(response) {
            return response.json();
        }).then(function(res) {
            // callback
            cb && cb(res);
        }).catch(function(error) {
        });
    }
};

module.exports = API;
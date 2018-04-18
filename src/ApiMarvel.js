import md5 from 'md5';

export default class ApiMarvel{

    getUrl(){
        var root = "http://gateway.marvel.com:80",
            path = "/v1/public/characters", 
            now = Math.floor(new Date().getTime() / 1000),
            keyPublic = "298bab46381a6daaaee19aa5c8cafea5",
            keyPrivate = "b0223681fced28de0fe97e6b9cd091dd36a5b71d",
            params = {
                'ts' : now,
                'apikey' : keyPublic,
                'hash' : md5(now + keyPrivate + keyPublic)
            },
            queryString = (params)=>{
                let output = [];
                for(let i in params){
                    output.push(i + '=' + params[i]);
                }
                return output.join('&');
            };
            
        return root + path + '?' + queryString(params);

    }
}
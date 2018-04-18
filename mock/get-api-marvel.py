#coding:utf-8

import hashlib, time, urllib.request, json

def http_build_query(params):
    output = []
    for k,v in params.items():
        output.append('{}={}'.format(k, v))

    return '&'.join(output)

root = "http://gateway.marvel.com:80"
path = "/v1/public/characters"
now = str(int(time.time()))
keyPublic = "298bab46381a6daaaee19aa5c8cafea5"
keyPrivate = "b0223681fced28de0fe97e6b9cd091dd36a5b71d"
toHashMD5 = now + keyPrivate + keyPublic
params = {
    'ts' : now,
    'apikey' : keyPublic,
    'hash' : hashlib.md5(toHashMD5.encode('utf-8')).hexdigest()
}

queryString = http_build_query(params)
url = "{url}?{query}".format(url = root + path, query = queryString)

with urllib.request.urlopen(url) as url:
   data = json.loads(url.read().decode())


with open('../src/mock-from-python.json', "w") as f:
    f.write(json.dumps(data))
f.close()

#print(data)
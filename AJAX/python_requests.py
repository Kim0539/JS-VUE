import requests

# Blocking (함수가 끝날 때 까지/응답이 도착할 때 까지 기다린다.)
res = requests.get('https://koreanjson.com/posts/1')

data = res.json()
post_content = data[0].get('content')
print(post_content)

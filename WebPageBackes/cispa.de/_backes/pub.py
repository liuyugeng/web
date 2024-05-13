import os

def read_file(file_name):
    with open(file_name, 'r') as f:
        r = f.read()

    r = r.split('\n\n')
    pub = []
    for i in r:
        content = i.split('\n')
        if len(content) < 4:
            pub.append({'title': content[0], 'authors': content[1], 'conference': content[2].split(', ')[0], 'year': int(content[2].split(', ')[1])})
        else:
            pub.append({'title': content[0], 'authors': content[1], 'conference': content[2].split(', ')[0], 'year': int(content[2].split(', ')[1]), 'link': content[3]})

    pub = sorted(pub, key=lambda x: x['year'], reverse=True)

    for i in pub:
        print('<li class="paper_wrapper_selected">')
        print(f'<p class="paper_title">{i["title"]}</p>')
        print(f'<p class="paper_authors">{i["authors"]}</p>')
        if i.get('link') is None:
            print(f'<p class="paper_venue">{i["conference"]}, {i["year"]}.</p>')
        else:
            print(f'<p class="paper_venue">{i["conference"]}, {i["year"]}. <a href="{i["link"]}" target="_blank"><i class="fa fa-file-pdf-o"></i></a></p>')
        print('</li>')
        


def write_file(file_name, content):
    if os.path.exists(file_name):
        with open(file_name, 'a') as f:
            f.write(content)
    else:
        with open(file_name, 'w') as f:
            f.write(content)


def main():
    file_name = '21-22.md'
    pub = read_file(file_name)

if __name__ == '__main__':
    main()
import sys
sys.stdout.reconfigure(encoding='utf-8')

result = []
with open("madedict/test.txt", "r", encoding="utf-8") as file:
    for line in file:
        result.append(line.split())

i = 3
with open("madedict/output.txt", "w", encoding="utf-8") as fileread:
    for idx, data in enumerate(result):
        if idx == len(result) - 1:  
            fileread.write(f'"{data[0][0:9]}{data[0][10:]}": {{ "name": "{data[1]} {data[2]}", "row": {i} }}\n')
            print(f'"{data[0][0:9]}{data[0][10:]}": {{ "name": "{data[1]} {data[2]}", "row": {i} }}')
        else:
            fileread.write(f'"{data[0][0:9]}{data[0][10:]}": {{ "name": "{data[1]} {data[2]}", "row": {i} }},\n')
            print(f'"{data[0][0:9]}{data[0][10:]}": {{ "name": "{data[1]} {data[2]}", "row": {i} }}')
        i += 1

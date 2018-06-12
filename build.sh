#!/bin/sh

gogh --import --file import.json > style.json;

gogh --merge --file import-verticals.json > style2.json;
mv style2.json style.json;

gogh --merge --file import-darkness.json > style2.json;
mv style2.json style.json;

gogh --compile > style.css

.PHONY: watch
watch:
	npx tailwindcss -i source.css -o style.css --watch

.PHONY: deploy
deploy: favicon.ico style.css
	scp *.html *.jpg *.png *.ico alpine.js browserconfig.xml main.js manifest.json service-worker.js style.css sudoku-tools:public_html/

style.css: source.css
	npx tailwindcss -i source.css -o style.css

favicon.ico: favicon.png
	convert favicon.png favicon.ico

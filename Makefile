DEPLOY_TARGET=sudoku-tools:public_html/

.PHONY: watch
watch:
	npx tailwindcss -i source.css -o style.css --watch

.PHONY: deploy
deploy: favicon.ico style.css
	scp *.html favicon.* alpine.js style.css $(DEPLOY_TARGET)

style.css: source.css
	npx tailwindcss -i source.css -o style.css

favicon.ico: favicon.png
	convert favicon.png favicon.ico

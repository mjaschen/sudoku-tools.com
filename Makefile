TIMESTAMP = $(shell date -u +"%s")

.PHONY: watch
watch:
	npx tailwindcss -i source.css -o style.css --watch

.PHONY: deploy
deploy: style
	gawk -v timestamp="$(TIMESTAMP)" '{sub(/CACHE_BUSTER/, timestamp)}1' index.html > index-deploy.html
	gawk -v timestamp="$(TIMESTAMP)" '{sub(/CACHE_BUSTER/, timestamp)}1' main.js > main-deploy.js
	gawk -v timestamp="$(TIMESTAMP)" '{sub(/CACHE_BUSTER/, timestamp)}1' service-worker.js > service-worker-deploy.js

	scp .htaccess *.jpg *.png *.ico alpine.js browserconfig.xml manifest.json style.css sudoku-tools:public_html/
	scp impressum.html datenschutz.html sudoku-tools:public_html/
	scp index-deploy.html sudoku-tools:public_html/index.html
	scp main-deploy.js sudoku-tools:public_html/main.js
	scp service-worker-deploy.js sudoku-tools:public_html/service-worker.js

.PHONY: style
style:
	npx tailwindcss -i source.css -o style.css

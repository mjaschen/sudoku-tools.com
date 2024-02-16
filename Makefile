TIMESTAMP = $(shell date -u +"%s")

.PHONY: watch
watch:
	npx tailwindcss -i source.css -o style.css --watch

.PHONY: deploy
deploy: style
	gawk -v timestamp="$(TIMESTAMP)" '{sub(/<script src="main.js" defer><\/script>/, "<script src=\"main.js?" timestamp "\" defer><\/script>")}1' index.html > index-deploy.html
	gawk -v timestamp="$(TIMESTAMP)" '{sub(/const cacheName = "cache-v1";/, "const cacheName = \"cache-v" timestamp "\";")}1' service-worker.js > service-worker-deploy.js

	scp *.jpg *.png *.ico alpine.js browserconfig.xml manifest.json style.css sudoku-tools:public_html/
	scp impressum.html datenschutz.html sudoku-tools:public_html/
	scp index-deploy.html sudoku-tools:public_html/index.html
	scp main.js sudoku-tools:public_html/main.js
	scp service-worker-deploy.js sudoku-tools:public_html/service-worker.js

.PHONY: style
style:
	npx tailwindcss -i source.css -o style.css

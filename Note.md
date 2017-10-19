
Create folder indecision-app

create folder public/index.html

Install live-server (yarn|npm)

run live-server public/

insert js files to interprate react 
	<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
	<script src="https://unpkg.com/react@16.0.0/umd/react-dom.development.js"></script>

install babeljs with react preset

execute yarn init inside our folder

execute yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

Create src/app.js 

to transpile code from es6 to es5 
babel src/app.js --out-file=public/scripts/app.js --presets=env,react

with --watch argument we keep live updating
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
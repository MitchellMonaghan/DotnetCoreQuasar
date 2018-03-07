var
  shell = require('shelljs'),
  path = require('path')

const { execSync } = require('child_process')

//clean build
shell.rm('-rf', path.resolve(__dirname, 'dist/*'))
shell.rm('-rf', path.resolve(__dirname, 'dist/.*'))

shell.rm('-rf', path.resolve(__dirname, 'backend/wwwroot/*'))
shell.rm('-rf', path.resolve(__dirname, 'backend/wwwroot/.*'))

shell.rm('-rf', path.resolve(__dirname, 'backend/bin/*'))
shell.rm('-rf', path.resolve(__dirname, 'backend/bin/.*'))

console.log('Cleaned build artifacts.\n')

//build quasar
shell.exec("quasar build --clean")

//Copy quasar build to .net core, and build 
shell.cp('-rf', 'dist/spa-mat/.', 'backend/wwwroot')
shell.exec('dotnet publish ./backend')

//Delete app settings
var dotNetBuildPath = 'backend/bin/Debug/netcoreapp2.0/publish/'

shell.rm('-f', path.join(dotNetBuildPath, 'appsettings.Development.json'))
shell.rm('-f', path.join(dotNetBuildPath, 'appsettings.Test.json'))
shell.rm('-f', path.join(dotNetBuildPath, 'appsettings.json'))

console.log("Build complete")
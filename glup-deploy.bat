@echo off
title glup-deploy %~dp0

node "%KUNDROOTAR%\_Frontend-resources\Glop\glup.js" "%~dp0\" "deploy"

timeout 3
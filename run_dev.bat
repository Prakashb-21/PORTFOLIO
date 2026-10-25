@echo off
title Running Portfolio Locally...
cd /d "%~dp0"
echo.
echo ========================================
echo   STARTING PORTFOLIO LOCAL PREVIEW
echo ========================================
echo.
echo Opening browser at http://localhost:5173 ...
start http://localhost:5173
echo.
call "C:\Program Files\nodejs\npm.cmd" run dev
pause

@echo off
title Deploying Portfolio to GitHub...
echo.
echo ========================================
echo   DEPLOYING PORTFOLIO TO GITHUB PAGES
echo ========================================
echo.

cd /d "%~dp0"

echo [1/3] Pushing source code to main branch...
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Failed to push to main. Check your GitHub login.
    pause
    exit /b 1
)
echo SUCCESS: Source code pushed!
echo.

echo [2/3] Building project for production...
call "C:\Program Files\nodejs\npm.cmd" run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)
echo SUCCESS: Build complete!
echo.

echo [3/3] Deploying to GitHub Pages (gh-pages branch)...
call "C:\Program Files\nodejs\npm.cmd" run deploy
if %errorlevel% neq 0 (
    echo ERROR: Deploy failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo   DEPLOYMENT COMPLETE!
echo ========================================
echo.
echo Your portfolio is live at:
echo https://Prakashb-21.github.io/My-portfolio
echo.
echo NOTE: GitHub Pages may take 1-2 minutes to update.
echo.
pause

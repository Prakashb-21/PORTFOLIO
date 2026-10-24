@echo off
title Push Prakash B Portfolio to GitHub
color 0b
echo ========================================================
echo    Pushing Portfolio to GitHub (Prakashb-21/My-portfolio)
echo ========================================================
echo.
cd /d "C:\Users\bprak\OneDrive\Desktop\Portfolio"

echo Checking remote configuration...
git remote -v
echo.

echo Pushing main branch to GitHub...
echo (If a browser window appears, click "Sign in with your browser")
echo.
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo  SUCCESS! Your portfolio is now live on GitHub:
    echo  https://github.com/Prakashb-21/My-portfolio
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo  Note: If you got a "Repository not found / 404" error:
    echo  Make sure you created the repo at https://github.com/new
    echo  with the name "My-portfolio" and clicked "Create repository"!
    echo ========================================================
)
echo.
pause

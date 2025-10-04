@echo off
title AI Agent Watcher - Business of Marketing in Sport

echo.
echo ========================================
echo   AI AGENT FILE WATCHER
echo   Business of Marketing in Sport
echo ========================================
echo.

cd /d "%~dp0"

echo Starting watcher...
echo.

REM Redirect errors to a file AND show them
node watch.js 2>&1

echo.
echo.
echo ========================================
echo Watcher stopped or encountered an error
echo ========================================
echo.
echo Press any key to close this window...
pause >nul

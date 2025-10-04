@echo off
REM Debug version - shows errors and stays open

title AI Agent Watcher - Business of Marketing in Sport (DEBUG)

echo.
echo ========================================
echo   AI AGENT FILE WATCHER (DEBUG MODE)
echo   Business of Marketing in Sport
echo ========================================
echo.
echo Checking setup...
echo.

cd /d "%~dp0"

echo Current directory: %CD%
echo.

echo Checking for Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js not found!
    echo Please install Node.js from https://nodejs.org
    echo.
    pause
    exit /b
)
echo Node.js: OK
node --version
echo.

echo Checking for npm...
npm --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: npm not found!
    echo.
    pause
    exit /b
)
echo npm: OK
npm --version
echo.

echo Checking for package.json...
if not exist package.json (
    echo ERROR: package.json not found!
    echo Current directory: %CD%
    echo.
    pause
    exit /b
)
echo package.json: OK
echo.

echo Checking for node_modules...
if not exist node_modules (
    echo ERROR: node_modules not found!
    echo Running npm install...
    npm install
    if errorlevel 1 (
        echo ERROR: npm install failed!
        echo.
        pause
        exit /b
    )
)
echo node_modules: OK
echo.

echo Checking for watch.js...
if not exist watch.js (
    echo ERROR: watch.js not found!
    echo Current directory: %CD%
    echo.
    pause
    exit /b
)
echo watch.js: OK
echo.

echo Checking for .env file...
if not exist .env (
    echo WARNING: .env file not found!
    echo Agents will not run without ANTHROPIC_API_KEY
    echo.
    echo Copy .env.example to .env and add your API key
    echo.
    pause
    exit /b
)
echo .env: OK
echo.

echo ========================================
echo All checks passed! Starting watcher...
echo ========================================
echo.
echo To stop: Close this window or press Ctrl+C
echo.

node watch.js

echo.
echo ========================================
echo Watcher stopped
echo ========================================
echo.
pause

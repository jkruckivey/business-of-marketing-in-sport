@echo off
REM Ivey AI Agents Launcher
REM Double-click this file to run the agent menu

cd /d "%~dp0"

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║   🎓 Business of Marketing in Sport - AI Agents 🤖   ║
echo ╚════════════════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org
    echo.
    pause
    exit /b 1
)

REM Check if .env exists
if not exist ".env" (
    echo ⚠️  Warning: .env file not found!
    echo.
    echo Please create .env file with your ANTHROPIC_API_KEY
    echo Copy .env.example to .env and add your API key
    echo.
    pause
    exit /b 1
)

REM Run the launcher
node agent-launcher.js

pause

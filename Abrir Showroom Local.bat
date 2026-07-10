@echo off
cd /d C:\ANTIGRAVITY
start "Servidor Showroom" cmd /k "cd /d C:\ANTIGRAVITY && npm.cmd run dev"
timeout /t 4 >nul
start http://localhost:5173/
exit
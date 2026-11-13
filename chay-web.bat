@echo off
cd /d "%~dp0"
title Anh Ba Tu Nhien - May Tinh Casio Cu
echo ====================================================================
echo   DANG KHOI CHAY WEB ANH BA TU NHIEN - MAY TINH CASIO CU
echo ====================================================================
echo.
echo Dang mo trinh duyet tai http://localhost:5000/ ...
start "" cmd /c "timeout /t 2 /nobreak >nul & start http://localhost:5000/"
echo.
echo May chu dang chay tai http://localhost:5000/
echo Nhan Ctrl+C hoac dong cua so nay de dung may chu khi khong su dung nua.
echo.
python server.py
pause

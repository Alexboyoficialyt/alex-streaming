@echo off
TITLE Alex Streaming Digital Hub
cd /d "%~dp0"
where python >nul 2>nul
if errorlevel 1 (
  echo Python no esta instalado o no esta agregado al PATH.
  echo Instala Python desde python.org y marca "Add Python to PATH".
  pause
  exit /b 1
)
if not exist .venv (
  echo Creando entorno virtual...
  python -m venv .venv
)
call .venv\Scripts\activate.bat
python -m pip install -r requirements.txt
start "" http://127.0.0.1:5000
python app.py
pause

@echo off
cd /d "C:\Users\quinn\OneDrive\Dokumente\programm\"  // Ersetze den Pfad mit dem richtigen Pfad zu deinem Repository
git status
git add .
git commit -m "Automatischer Commit"
git push origin master
pause

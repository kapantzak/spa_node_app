@echo off

set root="app"
set deploy="_deploy"
set excludePatternsFile=_deploy_exclude_patterns.txt

rmdir %deploy% /S /q
mkdir %deploy%

xcopy "%root%" "%deploy%" /s /y /I /EXCLUDE:%excludePatternsFile%

if errorlevel 1 GOTO ERROR
goto END

:ERROR
echo !!! ERROR !!!
exit 1

:END
echo Ended successfully!!!


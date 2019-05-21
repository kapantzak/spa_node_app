@echo off

set root="app"
set deploy="_deploy"
set api="%root%\api"
set web="%root%\web"

echo Deleting %deploy% ...
rmdir %deploy% /S /q

echo Deleting "%root%\node_modules" ...
rmdir "%root%\node_modules" /S /q

echo Deleting "%api%\node_modules" ...
rmdir "%api%\node_modules" /S /q

echo Deleting "%web%\node_modules" ...
rmdir "%web%\node_modules" /S /q

echo Deleting "%web%\dist" ...
rmdir "%web%\dist" /S /q

if errorlevel 1 GOTO ERROR
goto END

:ERROR
echo !!! ERROR !!!
exit 1

:END
echo Ended successfully!!!


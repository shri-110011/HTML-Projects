pass=0
cat styles.css | tr -d '\040\011\012\015' > temp
if grep -o '\.container{*[^}]*' temp | grep 'display:flex;' > /dev/null
then
	pass=$((pass+1))
fi
if grep -o '\.container{*[^}]*' temp | grep 'align-items:center;' > /dev/null
then
	pass=$((pass+1))
fi
if grep -o '\.container{*[^}]*' temp | grep 'justify-content:center;' > /dev/null
then
	pass=$((pass+1))
fi
if grep -o '\.container{*[^}]*' temp | grep 'background-image:url(.*bg.jpg.*);' > /dev/null
then
	pass=$((pass+1))
fi


if grep -o '\.bird{*[^}]*' temp | grep 'background-image:url(.*bird-cells.svg.*);' > /dev/null
then
	pass=$((pass+1))
fi
if grep -o '\.bird{*[^}]*' temp | grep 'will-change:background-position;' > /dev/null
then
	pass=$((pass+1))
fi
if grep -o '\.bird{*[^}]*' temp | grep 'animation-name:fly-cycle;' > /dev/null
then
	pass=$((pass+1))
fi


if grep -o '\.bird-container{*[^}]*' temp | grep 'position:absolute;' > /dev/null
then
	pass=$((pass+1))
fi
if grep -o '\.bird-container{*[^}]*' temp | grep 'will-change:transform;' > /dev/null
then
	pass=$((pass+1))
fi
if grep -o '\.bird-container{*[^}]*' temp | grep 'transform:scale(.*)translateX(.*);' > /dev/null
then
	pass=$((pass+1))
fi
if grep -o '\.bird-container{*[^}]*' temp | grep 'animation-name:fly-right-one;' > /dev/null
then
	pass=$((pass+1))
fi


rm temp

echo FS_SCORE:$((pass*100/11))%


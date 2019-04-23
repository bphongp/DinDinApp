SendMode Input

#InstallKeybdHook
dirSwitch:=0
j:=0
b:=0
p:=0
a:=0
l:=0
Loop
{
j++

Send, {c down}
Sleep 200
Send, {c up}

if(j>30){
j = 0
Sleep 100
if(dirSwitch < 11){
Send, {Right down}
Sleep 100
Send, {v down}
Sleep 100
Send, {v up}
dirSwitch++
}else{
Send, {Left down}
Sleep 100
Send, {v down}
Sleep 100
Send, {v up}
dirSwitch++
if(dirSwitch == 21){
dirSwitch = 0
}
}

Send, {Down down}
Sleep 50
Send, {x down}
Sleep 100
Send, {Down up}
Send, {x up}
Send, {Right up}
Send, {Left up}
Sleep 200
}

p++
if(p==20){
Send, {x down}
Sleep 100
Send, {x up}
p=0
}

b++
if(b==200){
Send, {b down}
Sleep 100
Send, {b up}
b=0
}


}

Esc::ExitApp
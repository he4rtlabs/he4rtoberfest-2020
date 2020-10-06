global _start

message db 'Hello He4rtoberfest', 0x0a
len equ $ - message

_start:
    mov eax, 4
    mov ebx, 1
    mov ecx, message
    mov edx, len
    int 0x80

    mov eax, 1
    int 0x8
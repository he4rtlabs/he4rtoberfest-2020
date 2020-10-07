local alphabet = {'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'}

function getAlphabetIndex(letter)
	for index, value in pairs(alphabet) do
		if value == string.upper(letter) then return index end
	end

	return nil
end

function decipher(phrase, offset)
	local decipheredPhrase = ""

	for i = 1, #phrase do
		local currentCharacter = phrase:sub(i, i)

		if currentCharacter ~= ' ' then
			local characterIndexInAlphabet = getAlphabetIndex(currentCharacter)
			local nextAlphabetIndex = characterIndexInAlphabet - offset

			if nextAlphabetIndex < 1 then
				nextAlphabetIndex = #alphabet + nextAlphabetIndex
			end

			local nextCharacter = alphabet[nextAlphabetIndex]

			decipheredPhrase = decipheredPhrase .. nextCharacter
		else
			decipheredPhrase = decipheredPhrase .. ' '
		end
	end
	return decipheredPhrase
end

local numCasos

while numCasos == nil do
	print("Digite a quantidade de casos: \n")
	numCasos = tonumber(io.read())
end

for i = 1, numCasos do
	local offset
	local encryptedPhrase

	while offset == nil or (offset < 0 or offset > 25) do
		print("\nDigite o número de deslocação do alfabeto (min. 0, máx. 25): \n")
		offset = tonumber(io.read())
	end

	while encryptedPhrase == nil do
		print("\nDigite a mensagem encriptada: \n")
		encryptedPhrase = io.read()
	end

	local decipheredPhrase = decipher(encryptedPhrase, offset)

	print("\nDecifrado: " .. decipheredPhrase .. "\n")
end

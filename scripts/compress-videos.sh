#!/bin/bash

# Execute com Bash (macOS ou Git Bash no Windows) e ffmpeg disponível no PATH.

# Garante que a pasta de saída existe
mkdir -p ./optimized

find . -type f -iname '*.mp4' -not -path './optimized/*' -print0 |
while IFS= read -r -d '' file; do
    output="./optimized/${file#./}"
    mkdir -p "$(dirname "$output")"

    echo "----------------------------------------"
    echo "Analisando: $file"

    # Executa a codificação com CRF 28 (otimizado para menor tamanho mantendo alta qualidade visual)
    ffmpeg -nostdin -hide_banner -loglevel warning -stats \
        -i "$file" \
        -map 0:v:0 -map '0:a?' \
        -c:v libx265 -preset slow -crf 28 \
        -tag:v hvc1 \
        -c:a aac -b:a 96k \
        -movflags +faststart \
        "$output"

    # Verificação de segurança de tamanho
    if [ -f "$output" ]; then
        # wc -c funciona tanto no macOS quanto no Git Bash (Windows).
        size_orig=$(( $(wc -c < "$file") ))
        size_opt=$(( $(wc -c < "$output") ))

        if [ "$size_opt" -ge "$size_orig" ]; then
            echo "⚠️ O arquivo otimizado ficou maior ou igual ao original ($size_opt vs $size_orig bytes)."
            echo "🔄 Copiando o arquivo original sem alterações para preservar espaço."
            cp -f "$file" "$output"
        else
            # Calcula a economia percentual
            saved=$(( (size_orig - size_opt) * 100 / size_orig ))
            echo "✅ Sucesso! Tamanho reduzido em ${saved}%."
        fi
    fi
done

echo "----------------------------------------"
echo "Processo concluído com sucesso!"

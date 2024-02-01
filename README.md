# Simple Encrypt Tool

This Simple Encrypt Tool is a lightweight JavaScript application that utilizes the Alura Code to encrypt text. Alura Code is a simple and efficient encryption algorithm designed for basic text encryption purposes.

## Features

- **Alura Code Encryption:** The tool uses the Alura Code algorithm to encrypt text securely.
- **User-friendly Interface:** The application provides a simple and intuitive user interface for easy interaction.
- **Copy to Clipboard:** Quickly copy the encrypted text to the clipboard with a single click.

## How to Use

1. Open the index.html file in your preferred web browser.
2. Enter the text you want to encrypt in the input field.
3. The encrypted text will be displayed, and you can click the "Copy" button to copy it to the clipboard.

## Alura Code Algorithm

The Alura Code algorithm used in this tool is a basic substitution cipher. It replaces each vowel in the input text with a corresponding string according to a predefined mapping. The encryption process is reversible, and decryption can be done using the same algorithm.

### Map

- "a" = "ai"
- "e" = "enter"
- "i" = "imes"
- "o" = "ober"
- "u" = "ufat"

### Example

```Bash
Input: gato
Output: gaitober
```

### Security Note

While the Alura Code algorithm provides a simple level of encryption, it is not suitable for high-security applications. This tool is intended for educational and recreational purposes only. For sensitive data and real-world applications, it is recommended to use more robust encryption algorithms and practices.

## License

This Simple Encrypt Tool is released under the MIT License. Feel free to use, modify, and distribute the code according to the terms of the license.
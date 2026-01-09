"""
===============================================================================
PDF-LÄSARE FÖR CURSOR - Gör PDF-filer läsbara för AI
===============================================================================

SYFTE:
Detta Python-skript använder en "parser" för att extrahera text från PDF-filer,
vilket gör dem läsbara för AI-verktyg i Cursor.

VAD ÄR EN PARSER?
En parser är ett program som:
1. Läser en fil med komplex struktur (som PDF)
2. Tolkar och förstår strukturen (text, bilder, layout)
3. Extraherar den information som behövs (bara texten)
4. Ger tillbaka datan i ett användbart, läsbart format

ANALOGI: En PDF är som en täckt chokladkaka. Parsern tar bort papperet 
och folien så du kan komma åt chokladen (texten) inuti.

INSTALLATION OCH ANVÄNDNING:
---------------------------------------------------------------------------
STEG 1: Installera Python (om inte redan installerat)
- Ladda ner från: https://www.python.org/downloads/
- Se till att Python läggs till i PATH

STEG 2: Installera PyPDF2 (parsern)
    pip install PyPDF2

STEG 3: Använd skriptet för att läsa PDF
    python read_pdf.py <filnamn.pdf>

Exempel:
    python read_pdf.py promt1_till_251121.pdf

STEG 4 (Valfritt): Spara resultatet i en textfil
    python read_pdf.py promt1_till_251121.pdf > output.txt

---------------------------------------------------------------------------
PROMPT FÖR ATT SKAPA DETTA I FRAMTIDA PROJEKT:
---------------------------------------------------------------------------
Om du vill att Cursor skapar ett liknande PDF-läsarskript i ett nytt projekt,
använd denna prompt:

    "Jag behöver kunna läsa PDF-filer i Cursor. Kan du:
    
    1. Kontrollera om jag har Python installerat
    2. Installera PyPDF2 (en PDF-parser)
    3. Skapa ett Python-skript (read_pdf.py) som:
       - Tar en PDF-fil som argument
       - Extraherar all text från alla sidor
       - Visar texten i terminalen
    4. Förklara vad en parser är
    5. Ge exempel på hur jag använder skriptet
    
    Lägg till tydliga kommentarer i koden som förklarar hur allt fungerar."

---------------------------------------------------------------------------
BEGRÄNSNINGAR:
- Fungerar bäst med textbaserade PDF:er
- Tabeller kan bli missformade
- Bilder extraheras inte (endast text)
- Komplexa layouter kan bli svåra att tolka

ALTERNATIV TILL PyPDF2:
- pdfplumber: Bättre för tabeller och layout
- PyMuPDF (fitz): Snabbare, mer kraftfull
- Camelot: Specialiserad på tabellextraktion

---------------------------------------------------------------------------
SKAPAD: 2025-11-24
AV: Cursor (AI-assistent) i samarbete med Kent Lundgren
PROJEKT: Fredagsquiz med AI
===============================================================================
"""

import sys
import PyPDF2

def read_pdf(pdf_path):
    """Läser text från en PDF-fil"""
    try:
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ""
            
            # Läs alla sidor
            for page_num, page in enumerate(reader.pages, 1):
                text += f"\n--- Sida {page_num} ---\n"
                text += page.extract_text()
            
            return text
    except Exception as e:
        return f"Fel vid läsning av PDF: {e}"

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Användning: python read_pdf.py <pdf-fil>")
        sys.exit(1)
    
    pdf_file = sys.argv[1]
    text = read_pdf(pdf_file)
    print(text)


#!/usr/bin/env bash
# Bash equivalent of build-cv.ps1, for macOS/Linux.
# Usage: ./build-cv.sh ["CV Name"]

set -uo pipefail

CV_NAME="${1:-Timothy-Joseph CV}"

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
GRAY='\033[0;90m'
NC='\033[0m'

cd "$(dirname "$0")"

echo -e "${GREEN}Building CV: ${CV_NAME}.tex${NC}"

if ! command -v pdflatex >/dev/null 2>&1; then
  echo -e "${RED}Error: pdflatex not found. Please install a LaTeX distribution:${NC}"
  echo -e "${YELLOW}  - macOS: brew install --cask basictex  (then restart your terminal,${NC}"
  echo -e "${YELLOW}    or run: eval \"\$(/usr/libexec/path_helper)\")${NC}"
  echo -e "${YELLOW}  - Or the full MacTeX: brew install --cask mactex${NC}"
  echo -e "${YELLOW}  - Make sure pdflatex is on your PATH${NC}"
  exit 1
fi

if [ ! -f "${CV_NAME}.tex" ]; then
  echo -e "${RED}Error: ${CV_NAME}.tex not found!${NC}"
  echo -e "${YELLOW}Available CV files:${NC}"
  ls -1 ./*.tex 2>/dev/null
  exit 1
fi

echo -e "${BLUE}Compiling ${CV_NAME}.tex...${NC}"

if output=$(pdflatex -synctex=1 -interaction=nonstopmode -file-line-error "${CV_NAME}.tex" 2>&1); then
  echo -e "${GREEN}CV compiled successfully!${NC}"
  echo -e "${CYAN}Output: ${CV_NAME}.pdf${NC}"
else
  echo -e "${RED}Compilation failed!${NC}"
  echo -e "${YELLOW}LaTeX output:${NC}"
  echo "$output"
  exit 1
fi

echo -e "${BLUE}Cleaning auxiliary files...${NC}"
removed=()
for ext in aux log out synctex.gz fls fdb_latexmk; do
  file="${CV_NAME}.${ext}"
  if [ -f "$file" ]; then
    rm -f "$file"
    removed+=("$file")
  fi
done
if [ "${#removed[@]}" -gt 0 ]; then
  echo -e "${GRAY}Removed: ${removed[*]}${NC}"
fi

echo -e "${GREEN}Build process completed!${NC}"
